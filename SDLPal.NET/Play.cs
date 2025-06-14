using SDL3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

using static PalCommon;
using static PalConfig;
using static PalFont;
using static PalInput;
using static PalMap;
using static PalSave;
using static PalScene;
using static PalVideo;
using static PalVideo.Screen;
using static SafeSys;

public unsafe class PalPlay
{
   public static void
   GameUpdate(
      bool     fTrigger
   )
   /*++
     Purpose:

       The main game logic routine. Update the status of everything.

     Parameters:

       [IN]  fTrigger - whether to process trigger events or not.

     Return value:

       None.

   --*/
   {
      int               i, xOffset, yOffset, x, y, scrAddr;
      PalDirection      dir;
      Event             evt;
      PalSave           save;
      string            scr;
      Trail             trail;
      bool              fContinue;
      Pos               pos;

      fContinue = false;
      save = PalGlobal.Save;

      //
      // Check for trigger events
      //
      if (fTrigger)
      {
         //
         // Check if we are entering a new scene
         //
         if (PalGlobal.EnterScene)
         {
            //
            // Run the script for entering the scene
            //
            PalGlobal.EnterScene = false;

            //
            // Execute the scene entry script
            //
            g_fShowSceneInfo = false;
            scr = save.CurrScene._Script.ScrEnter;
            scrAddr = PalScript.GetScrAddr(scr);
            save.CurrScene._Script.ScrEnter = PalScript.MKScrTag(
               PalScript.RunTrigger(scrAddr, -1, -1)
            );

            if (PalGlobal.EnterScene)
            {
               //
               // Don't go further as we're switching to another scene
               //
               return;
            }

            PalInput.ClearKeyState();
            PalScene.Draw();
         }

         //
         // Loop through all event objects in the current scene
         //
         for (i = 1; i < save.CurrScene.listEvent.Count; i++)
         {
            evt = save.CurrScene.listEvent[i];

            if (evt._Frame.VanishTime > 0)
            {
               //
               // Update the vanish time for all event objects
               //
               evt._Frame.VanishTime -= 1;
               fContinue = true;
            }

            if (evt._Frame.StillTime > 0)
            {
               //
               // Update the still time for all event objects
               //
               evt._Frame.StillTime -= 1;
               fContinue = true;
            }

            if (fContinue)
            {
               fContinue = false;
               continue;
            }

            trail = evt._Frame._Trail;

            //if (p->sState < 0)
            //{
            //   if (p->x < PAL_X(gpGlobals->viewport) ||
            //      p->x > PAL_X(gpGlobals->viewport) + 320 ||
            //      p->y < PAL_Y(gpGlobals->viewport) ||
            //      p->y > PAL_Y(gpGlobals->viewport) + 320)
            //   {
            //      p->sState = abs(p->sState);
            //      trail.FrameID = 0;
            //   }
            //}
            if (evt._Status.Display && evt._Status.IsAutoTrigger)
            {
               //
               // This event object can be triggered without manually exploring
               //
               xOffset = S_GetPartyPos().X - trail.Pos.X;
               yOffset = S_GetPartyPos().Y - trail.Pos.Y;

               if (trail.Pos.X == 1152 && trail.Pos.Y == 384)
               {
                  i = i;
               }

               if (Math.Abs(xOffset) + Math.Abs(yOffset) * 2
                  < evt._Status.TriggerDistance * 32 + 16)
               {
                  //
                  // Player is in the trigger zone.
                  //
                  if (S_B(trail.FrameID))
                  {
                     //
                     // The sprite has multiple frames. Try to adjust the direction.
                     //
                     trail.FrameID = 0;

                     if (xOffset > 0)
                     {
                        trail.Direction = (yOffset > 0) ? PalDirection.East : PalDirection.North;
                     }
                     else
                     {
                        trail.Direction = (yOffset > 0) ? PalDirection.South : PalDirection.West;
                     }

                     //
                     // Redraw the scene
                     //
                     PalScene.UpdatePartyGestures(false);

                     PalScene.Draw();
                     Screen.Update();
                  }

                  //
                  // Execute the script.
                  //
                  g_fShowSceneInfo = false;
                  scr = evt._Script.SrcTrigger;
                  scrAddr = PalScript.GetScrAddr(scr);
                  evt._Script.SrcTrigger = PalScript.MKScrTag(
                     PalScript.RunTrigger(scrAddr, -1, i)
                  );

                  PalInput.ClearKeyState();

                  if (PalGlobal.EnterScene)
                  {
                     //
                     // Don't go further on scene switching
                     //
                     return;
                  }
               }
            }
         }
      }

      //
      // Run autoscript for each event objects
      //
      for (i = 1; i < save.CurrScene.listEvent.Count; i++)
      {
         evt = save.CurrScene.listEvent[i];

         if (evt._Status.Display && evt._Frame.VanishTime == 0)
         {
            scr = evt._Script.ScrAuto;
            scrAddr = PalScript.GetScrAddr(scr);
            if (scrAddr != 0)
            {
               evt._Script.ScrAuto = PalScript.MKScrTag(
                  PalScript.RunAuto(scrAddr, -1, i)
               );

               if (PalGlobal.EnterScene)
               {
                  //
                  // Don't go further on scene switching
                  //
                  return;
               }
            }
         }

         trail = evt._Frame._Trail;

         //
         // Check if the player is in the way
         //
         if (fTrigger && evt._Status.IsObstacle &&
            S_B(trail.FrameID) &&
            Math.Abs(trail.Pos.X - Viewport.Pos.X) +
            Math.Abs(trail.Pos.Y - Viewport.Pos.Y) * 2
            <= 12)
         {
            //
            // Player is in the way, try to move a step
            //
            dir = (PalDirection)((int)(trail.Direction + 1) % 4);

            for (i = 0; i < DIRECTION.Length; i++)
            {
               pos = S_GetPartyPos();

               x = (dir == PalDirection.West || dir == PalDirection.South) ? -16 : 16;
               y = (dir == PalDirection.West || dir == PalDirection.North) ? -8 : 8;

               pos = new Pos
               {
                  X = pos.X + x,
                  Y = pos.Y + y,
               };

               if (!PalScene.CheckObstacle(pos, true, 0, true))
               {
                  //
                  // move here
                  //
                  pos.X += x;
                  pos.Y += y;
                  break;
               }
            }
         }

      }

      if (--PalGlobal.Save.ChaseCycles == 0)
      {
         PalGlobal.Save.ChaseRange = 1;
      }

      PalGlobal.FrameNum++;
   }

   public static void
   Search()
   /*++
     Purpose:

       Process searching trigger events.

     Parameters:

       None.

     Return value:

       None.

   --*/
   {
      int               x, y, xOffset, yOffset, dx, dy, dh, ex, ey, eh, i, k, l, scrAddr;
      Event             evt;
      Pos[]             arrPos;
      Pos               pos;
      Trail             trail;
      PalDirection      dir;
      List<Event>       listEvent;
      string            scr;

      arrPos = new Pos[13];

      //
      // Get the party location
      //
      pos = S_GetPartyPos();
      dir = S_GetPartyDirection();
      x = S_GetPartyPos().X;
      y = S_GetPartyPos().Y;

      if (dir == PalDirection.North || dir == PalDirection.East)
      {
         xOffset = 16;
      }
      else
      {
         xOffset = -16;
      }

      if (dir == PalDirection.East || dir == PalDirection.South)
      {
         yOffset = 8;
      }
      else
      {
         yOffset = -8;
      }

      arrPos[0] = new Pos(pos);

      for (i = 0; i < 4; i++)
      {
         arrPos[i * 3 + 1] = new Pos(x + xOffset, y + yOffset);
         arrPos[i * 3 + 2] = new Pos(x, y + yOffset * 2);
         arrPos[i * 3 + 3] = new Pos(x + xOffset, y);
         x += xOffset;
         y += yOffset;
      }

      for (i = 0; i < 13; i++)
      {
         //
         // Convert to map location
         //
         dh = S_B(arrPos[i].X % 32) ? 1 : 0;
         dx = arrPos[i].X / 32;
         dy = arrPos[i].Y / 16;

         listEvent = PalGlobal.Save.CurrScene.listEvent;

         //
         // Loop through all event objects
         //
         for (k = 1; k < listEvent.Count; k++)
         {
            evt = listEvent[k];
            trail = S_GetEventTrail(-1, k);
            ex = trail.Pos.X / 32;
            ey = trail.Pos.Y / 16;
            eh = S_B(trail.Pos.X % 32) ? 1 : 0;

            if (!evt._Status.Display
               || evt._Status.IsAutoTrigger
               || evt._Status.TriggerDistance * 6 - 4 < i
               || dx != ex
               || dy != ey
               || dh != eh)
            {
               continue;
            }

            //
            // Adjust direction/gesture for party members and the event object
            //
            if (evt._Frame.SpriteFrames * 4 > trail.FrameID)
            {
               trail.FrameID = 0; // use standing gesture
               trail.Direction = (PalDirection)((int)(dir + 2) % 4); // face the party

               for (l = 0; l <= PalGlobal.Save.PartySize; l++)
               {
                  //
                  // All party members should face the event object
                  //
                  S_SetRoleDirection(l, dir);
                  S_GetRoleTrail(l).FrameID = 0;
               }

               //
               // Redraw everything
               //
               PalScene.Draw();
               Screen.Update();
            }

            //
            // Execute the script
            //
            scr = evt._Script.SrcTrigger;
            scrAddr = PalScript.GetScrAddr(scr);
            evt._Script.SrcTrigger = PalScript.MKScrTag(
               PalScript.RunTrigger(scrAddr, -1, k)
            );

            //
            // Clear inputs and delay for a short time
            //
            PalTimer.Delay(50);
            PalInput.ClearKeyState();

            return; // don't go further
         }
      }
   }

   public static void
   StartFrame()
   /*++
     Purpose:

       Starts a video frame. Called once per video frame.

     Parameters:

       None.

     Return value:

       None.

   --*/
   {
      //
      // Run the game logic of one frame
      //
      GameUpdate(true);
      if (PalGlobal.EnterScene)
      {
         return;
      }

      //if (PalGlobal.FrameNum == 60)
      //{
      //   PalGlobal.Save.SceneWave.Level = 255;
      //   PalGlobal.Save.SceneWave.Step = -4;
      //}

      //
      // Update the positions and gestures of party members
      //
      UpdateParty();

      PalGlobal.DrawMoreData = true;

      if (PalInput.Pressed(PalKey.Menu))
      {
         PalGlobal.DrawMoreData = false;
      }

      //
      // Update the scene
      //
      PalScene.Draw();
      Screen.Update();

      if (PalInput.Pressed(PalKey.Menu))
      {
         //
         // Show the main menu within the game scene
         //
         PalUiGame.SceneMainMenu();
      }
      else if (PalInput.Pressed(PalKey.Search))
      {
         //
         // Process search events
         //
         Search();
      }
   }
}
