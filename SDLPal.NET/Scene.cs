using SDL3;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;

using static PalCommon;
using static PalFont;
using static PalGame;
using static PalInput;
using static PalMap;
using static PalSave;
using static PalVideo;
using static Viewport;
using static SafeSys;

public unsafe class PalScene
{
   public   static   List<MapSprite>      listSprite     = new List<MapSprite>();
   public   static   List<nint>           listTileSprite = new List<nint>();
   public   static   nint                 TileSpriteTmp;

   public class MapSprite
   {
      public   nint     Sprite;        // Pointer to the frame bitmap
      public   Pos      Pos;           // Position on the scene
      public   int      Layer;         // Logical layer
      public   Type     NpcType;       // Sprite type
      public   int      EvtID = 0;     // EventID

      private  static   Pos      _PosR = new Pos(0, 0);
      public   Pos      PosR
      {
         get
         {
            _PosR.X = S_Ratio(Pos.X);
            _PosR.Y = S_Ratio(Pos.Y);

            return _PosR;
         }
      }

      public enum Type
      {
         Hero,
         Event,
         MapTile,
      }
   }

   public static void
   AddMapSprite(
      MapSprite      sprite
   )
   /*++
      Purpose:

        Add a sprite to our list of drawing.

      Parameters:

        [IN]  sprite - character objects on the map.

      Return value:

        None.

   --*/
   {
      listSprite.Add(sprite);
   }

   public static void
   CalcCoverTiles(
      MapSprite      mapSprite
   )
   /*++
      Purpose:

        Calculate all the tiles which may cover the specified sprite. Add the tiles
        into our list as well.

      Parameters:

        [IN]  lpSpriteToDraw - pointer to SPRITE_TO_DRAW struct.

      Return value:

        None.

   --*/
   {
      int            sx, sy, sh, width, height, dx, dy, dh, x, y, i, l, iTileHeight, layer, zx, zy;
      float          fw, fh;
      nint           pTile;
      SDL.FRect*     lpTileFRect;

      sx = Viewport.Pos.X + mapSprite.Pos.X - mapSprite.Layer / 2;
      sy = Viewport.Pos.Y + mapSprite.Pos.Y - mapSprite.Layer;
      sh = S_B(sx % 32) ? 1 : 0;

      S_GetTexSize(mapSprite.Sprite, out fw, out fh);
      width = S_UnRatio((int)fw);
      height = S_UnRatio((int)fh);

      dx = 0;
      dy = 0;
      dh = 0;

      lpTileFRect = (SDL.FRect*)pTileFRect;

      //
      // Loop through all the tiles in the area of the sprite.
      //
      for (y = (sy - height - 15) / 16; y <= sy / 16; y++)
      {
         for (x = (sx - width / 2) / 32; x <= (sx + width / 2) / 32; x++)
         {
            for (i = ((x == (sx - width / 2) / 32) ? 0 : 3); i < 5; i++)
            {
               //
               // Scan tiles in the following form (* = to scan):
               //
               // . . . * * * . . .
               //  . . . * * . . . .
               //
               switch (i)
               {
                  case 0:
                     dx = x;
                     dy = y;
                     dh = sh;
                     break;

                  case 1:
                     dx = x - 1;
                     break;

                  case 2:
                     dx = (S_B(sh) ? x : (x - 1));
                     dy = (S_B(sh) ? (y + 1) : y);
                     dh = 1 - sh;
                     break;

                  case 3:
                     dx = x + 1;
                     dy = y;
                     dh = sh;
                     break;

                  case 4:
                     dx = (S_B(sh) ? (x + 1) : x);
                     dy = (S_B(sh) ? (y + 1) : y);
                     dh = 1 - sh;
                     break;
               }
               
               for (l = 0; l < 2; l++)
               {
                  pTile = PalMap.GetTileTex(new BlockPos(dx, dy, dh), l);
                  iTileHeight = (sbyte)PalMap.GetTileLayer(new BlockPos(dx, dy, dh), l);

                  //
                  // Check if this tile may cover the sprites
                  //
                  if (pTile != 0 && iTileHeight > 0 && (dy + iTileHeight) * 16 + dh * 8 >= sy)
                  {
                     zx = dx * 32 + dh * 16 - 16 - Viewport.Pos.X;
                     layer = iTileHeight * 8 + l;
                     zy = dy * 16 + dh * 8 + 7 + layer - Viewport.Pos.Y;

                     //
                     // This tile may cover the sprite
                     //
                     AddMapSprite(new MapSprite
                     {
                        Sprite = pTile,
                        Pos = new Pos(zx, zy),
                        Layer = layer,
                        NpcType = MapSprite.Type.MapTile,
                     });
                  }
               }
            }
         }
      }
   }

   public static void
   Draw()
   /*++
      Purpose:

        Draw the scene of the current frame to the screen. Both the map and
        the sprites are handled here.

      Parameters:

        None.

      Return value:

        None.

   --*/
   {
      //
      // Step 1: Draw the complete map, for both of the layers.
      //
      PalMap.Draw(0);
      PalMap.Draw(1);

      //
      // Step 2: Apply screen waving effects.
      //
      //Screen.ApplyWave(g_pScreen);

      //
      // Step 3: Draw all the sprites.
      //
      DrawSprite();

      //
      // Step 4: Draw scene information.
      //
      DrawInfo();

      //
      // Check if we need to fade in.
      //
      if (PalGlobal.NeedToFadeIn)
      {
         Screen.Update();
         Screen.Fade(1, false);
         PalGlobal.NeedToFadeIn = false;
      }
   }

   public static void
   DrawSprite()
   /*++
      Purpose:

        Draw all the sprites to scene.

      Parameters:

        None.

      Return value:

        None.

   --*/
   {
      int            i, len, idDirection, idFrame, x, y, layer, w, h, vy;
      float          texW, texH;
      PalSave        save;
      nint           pBitmap;
      Party[]        arrParty;
      Event          evt;
      Trail          trail;
      Pos            pos;
      MapSprite      sprite;
      string         evtComment;
      SDL.FRect      frect;

      frect = new SDL.FRect();

      //
      // Clear the sprite sequence
      //
      PalUiGame.FreeMenuUi(ref listTileSprite);
      listSprite.Clear();

      save = S_GetSave();
      arrParty = save.arrParty;

      //
      // Put all the sprites to be drawn into our array.
      //

      //
      // Players
      //
      len = save.PartySize;
      //len = arrParty.Length + save.listFollower.Count;
      for (i = 0; i < len; i++)
      {
         trail = arrParty[i].Trail;
         idDirection = (int)trail.Direction;
         idFrame = save._Entity.Hero[arrParty[i].HeroID].WalkFrames;
         idFrame = idDirection * idFrame + trail.FrameID;

         pBitmap = PalResource.GetNpcSprite(true, i, idFrame);

         if (pBitmap == 0)
         {
            continue;
         }

         //
         // Calculate the coordinate and check if outside the screen
         //
         S_GetTexSize(pBitmap, out texW, out texH);
         w = S_UnRatio((int)texW);
         x = trail.Pos.X - Viewport.Pos.X - w / 2;
         layer = save.PartyLayerOffset + 6;
         y = trail.Pos.Y - Viewport.Pos.Y + layer + 4;

         //
         // Add it to our array
         //
         AddMapSprite(new MapSprite
         {
            Sprite = pBitmap,
            Pos = new Pos(x, y),
            Layer = layer,
            NpcType = MapSprite.Type.Hero,
            EvtID = i,
         });

         //
         // Add the covered tiles on the map
         //
         CalcCoverTiles(listSprite.Last());
      }

      //
      // Event Objects (Monsters/NPCs/others)
      //
      len = save.CurrScene.listEvent.Count;
      for (i = 1; i < len; i++)
      {
         evt = save.CurrScene.listEvent[i];

         if (!evt._Status.Display || evt._Frame.VanishTime > 0 || !PalGlobal.DrawMoreData && evt._Frame.SpriteID == 0)
         //if (!evt._Status.Display || evt._Frame.VanishTime > 0)
         {
            continue;
         }

         if (PalGlobal.DrawMoreData && evt._Frame.SpriteID == 0)
         {
            trail = evt._Frame.Trail;
            layer = evt._Frame.LayerOffset * 8 + 2;
            x = trail.Pos.X - Viewport.Pos.X;
            y = trail.Pos.Y - Viewport.Pos.Y + layer + 7;
            AddMapSprite(new MapSprite
            {
               Sprite = 0,
               Pos = new Pos(x, y),
               Layer = layer,
               NpcType = MapSprite.Type.Event,
               EvtID = i,
            });

            continue;
         }

         //
         // Get the sprite
         //
         trail = evt._Frame.Trail;
         idDirection = (int)trail.Direction;
         idFrame = trail.FrameID;

         if (evt._Frame.SpriteFrames == 3)
         {
            //
            // walking character (old version)
            //
            if (idFrame == 2)
            {
               idFrame = 0;
            }

            if (idFrame == 3)
            {
               idFrame = 2;
            }
         }

         idFrame = idDirection * evt._Frame.SpriteFrames + idFrame;
         pBitmap = PalResource.GetNpcSprite(false, i, idFrame);

         if (pBitmap == 0)
         {
            continue;
         }

         //
         // Calculate the coordinate and check if outside the screen
         //
         S_GetTexSize(pBitmap, out texW, out texH);
         w = S_UnRatio((int)texW);
         h = S_UnRatio((int)texH);
         x = trail.Pos.X - Viewport.Pos.X - w / 2;
         if (x >= Viewport.Rect.W || x < -w)
         {
            //
            // outside the screen; skip it
            //
            continue;
         }
         layer = evt._Frame.LayerOffset * 8 + 2;
         y = trail.Pos.Y - Viewport.Pos.Y + layer + 7;
         vy = y - h - layer;
         if (vy >= Viewport.Rect.H || vy < -h)
         {
            //
            // outside the screen; skip it
            //
            continue;
         }

         //
         // Add it to our array
         //
         AddMapSprite(new MapSprite
         {
            Sprite = pBitmap,
            Pos = new Pos(x, y),
            Layer = layer,
            NpcType = MapSprite.Type.Event,
            EvtID = i,
         });

         //
         // Add the covered tiles on the map
         //
         CalcCoverTiles(listSprite.Last());
      }

      //
      // All sprites are now in our array; sort them by their vertical positions.
      //
      listSprite.Sort((curr, next) => curr.Pos.Y.CompareTo(next.Pos.Y));

      //
      // Draw all the sprites to the screen.
      //
      for (i = 0; i < listSprite.Count; i++)
      {
         sprite = listSprite[i];

         if (sprite.Sprite == 0)
         {
            continue;
         }

         pos = sprite.Pos;
         S_GetTexSize(sprite.Sprite, out texW, out texH);
         w = S_UnRatio((int)texW);
         h = S_UnRatio((int)texH);

         switch (sprite.NpcType)
         {
            case MapSprite.Type.Hero:
               break;

            case MapSprite.Type.Event:
               break;

            case MapSprite.Type.MapTile:
               SDL.SetTextureAlphaModFloat(sprite.Sprite, 0.8333f);
               break;

            default:
               S_FAILED(
                  "PalScene.DrawSprite",
                  "Unknown type of map object"
               );
               break;
         }

         frect.X = S_Ratio(pos.X);
         frect.Y = S_Ratio(pos.Y - h - sprite.Layer);
         frect.W = texW;
         frect.H = texH;

#if false
         if (PalGlobal.DrawMoreData)
         {
            switch (sprite.NpcType)
            {
               case MapSprite.Type.Hero:
                  PalUi.DrawBox(frect);
                  break;

               case MapSprite.Type.Event:
                  PalUi.DrawBox(frect);
                  break;

               case MapSprite.Type.MapTile:
                  PalUi.DrawBox(frect);
                  break;
            }
         }
#endif // false

         Screen.Copy(sprite.Sprite, g_pScreen, frect);

         switch (sprite.NpcType)
         {
            case MapSprite.Type.Hero:
               break;

            case MapSprite.Type.Event:
               break;

            case MapSprite.Type.MapTile:
               SDL.SetTextureAlphaModFloat(sprite.Sprite, 1.0f);
               break;
         }
      }

      if (!PalGlobal.DrawMoreData)
      {
         //
         // Don't draw the scene data
         //
         return;
      }

      PalGlobal.ShowMoreData = true;
      {
         //
         // Clean up the scene data layer
         //
         S_CleanUpTex(g_pScreenData);

         //
         // Draw the object comment and number
         //
         for (i = 0; i < listSprite.Count; i++)
         {
            sprite = listSprite[i];

            pos = sprite.Pos;
            if (sprite.Sprite == 0)
            {
               w = 0;
               h = 0;
            }
            else
            {
               S_GetTexSize(sprite.Sprite, out texW, out texH);
               w = S_UnRatio((int)texW);
               h = S_UnRatio((int)texH);
            }

            pos.X += w / 2;
            evtComment = "";

            //
            // Check the object type
            //
            switch (sprite.NpcType)
            {
               case MapSprite.Type.Hero:
                  len = save.arrParty[sprite.EvtID].HeroID;
                  evtComment = save._Entity.Hero[len].Name;
                  break;

               case MapSprite.Type.Event:
                  evtComment = save.CurrScene.listEvent[sprite.EvtID].Comment;
                  break;

               case MapSprite.Type.MapTile:
                  continue;
            }

            PalText.DrawNum(evtComment, new Pos
            {
               X = S_Ratio(pos.X),
               Y = S_Ratio(pos.Y - h - sprite.Layer - FONT_OFFSET_H_NUM - 2),
            }, hexColor: 0x00FFFFFF, fIsText: true, align: PalAlign.Middle);

            switch (sprite.NpcType)
            {
               case MapSprite.Type.Hero:
                  continue;

               case MapSprite.Type.Event:
                  evtComment = $"{sprite.EvtID}";
                  break;
            }

            PalText.DrawNum(evtComment, new Pos
            {
               X = S_Ratio(pos.X),
               Y = S_Ratio(pos.Y),
            }, hexColor: 0x2BF666FF, fIsText: true, align: PalAlign.Middle);
         }
      }
      PalGlobal.ShowMoreData = false;
   }

   private static Pos posDraw = new Pos
   {
      X = VIDEO_WIDTH - FONT_OFFSET_H_NUM,
   };

   public   static   bool           g_fShowSceneInfo = true;
   private  static   SDL.FRect      boxFRect = new SDL.FRect
   {
      X = VIDEO_WIDTH,
      Y = FONT_OFFSET_H_NUM * 0.5f,
   };

   public static void
   DrawInfo()
   {
      string      strInfo, strPos, strBPos;
      BlockPos    bpos;

      strInfo = $"{S_GetSave().SceneID}: {S_GetSave().CurrScene.Name}";
      strPos = $"{S_GetPartyPos().X}  {S_GetPartyPos().Y}";
      bpos = S_GetPartyBPos();
      strBPos = $"{bpos.X}  {bpos.Y}  {bpos.H}";

      //
      // Calculate the actual size of the scene information box
      //
      boxFRect.W = FONT_OFFSET_H_NUM + Math.Max(
         PalText.GetNumWidth(strInfo, fIsText: true),
         PalText.GetNumWidth(strPos, fIsText: true)
      );
      boxFRect.W = Math.Max(boxFRect.W,
         PalText.GetNumWidth(strBPos, fIsText: true)
      );
      boxFRect.H = FONT_OFFSET_H_NUM * 4;
      
      PalGlobal.ShowMoreData = true;
      {
         PalUi.DrawBox(boxFRect, PalAlign.Right, PalText.GetScreen());

         posDraw.Y = FONT_OFFSET_H_NUM;
         PalText.DrawNum(
            strInfo,
            posDraw,
            COLOR_PINK,
            fIsText: true,
            align: PalAlign.Right
         );

         posDraw.Y += FONT_OFFSET_H_NUM;
         PalText.DrawNum(
            strPos,
            posDraw,
            COLOR_PINK,
            fIsText: true,
            align: PalAlign.Right
         );

         posDraw.Y += FONT_OFFSET_H_NUM;
         PalText.DrawNum(
            strBPos,
            posDraw,
            COLOR_PINK,
            fIsText: true,
            align: PalAlign.Right
         );
      }
      PalGlobal.ShowMoreData = false;
   }

   public static void
   UpdateTeamPosNeat()
   {
      int               i, xOffset, yOffset;
      PalSave           save;
      Pos               posParty;
      PalDirection      dir;

      save = S_GetSave();
      posParty = S_GetPartyPos();
      dir = S_GetPartyDirection();

      xOffset = (dir == PalDirection.West || dir == PalDirection.South) ? 16 : -16;
      yOffset = (dir == PalDirection.West || dir == PalDirection.North) ? 8 : -8;

      for (i = 0; i < save.arrParty.Length; i++)
      {
         S_SetRolePos(i, posParty.X + xOffset * i, posParty.Y + yOffset * i);
         S_SetRoleDirection(i, dir);
      }

      for (; i < save.listFollower.Count; i++)
      {
         S_SetFollowerPos(i, posParty.X + xOffset * i, posParty.Y + yOffset * i);
         S_SetFollowerDirection(i, dir);
      }
   }

   public static void
   UpdateTeamPos(
      Pos      posTarget
   )
   {
      int               i;
      Pos               posLast;
      PalDirection      dirLast;
      Party[]           arrParty;
      List<Follower>    listFollower;

      arrParty = S_GetSave().arrParty;
      listFollower = S_GetSave().listFollower;

      //
      // Back up the coordinates and directions of the last team member
      // because the first follower needs to synchronize
      //
      posLast = S_GetRolePos(-1).Clone();
      dirLast = S_GetRoleDirection(-1);

      for (i = arrParty.Length - 1; i > 0; i--)
      {
         S_SetRolePos(i, S_GetRolePos(i - 1));
         S_SetRoleDirection(i, S_GetRoleDirection(i - 1));
      }

      if (listFollower.Count > 0)
      {
         for (i = listFollower.Count - 1; i > 0; i--)
         {
            S_SetFollowerPos(i, S_GetFollowerPos(i - 1));
            S_SetFollowerDirection(i, S_GetFollowerDirection(i - 1));
         }

         //
         // Finally, update the first attendant
         //
         S_SetFollowerPos(0, posLast);
         S_SetFollowerDirection(0, dirLast);
      }

      //
      // Finally update the person leading the team
      //
      S_SetRolePos(0, posTarget);
      S_SetRoleDirection(0, S_GetPartyDirection());
   }

   public static void
   UpdatePartyGestures(
      bool     fWalking
   )
   /*++
      Purpose:

        Update the gestures of all the party members.

      Parameters:

        [IN]  fWalking - whether the party is walking or not.

      Return value:

        None.

   --*/
   {
      int               i, j, frameID, count;
      Party[]           arrParty;
      Party             party;
      List<Follower>    listFollower;
      Follower          follower;
      Trail             trail;

      arrParty = S_GetSave().arrParty;
      listFollower = S_GetSave().listFollower;

      trail = S_GetPartyTrail();

      if (fWalking)
      {
         trail.FrameID++;

         //
         // Update the gesture for party leader
         //
         for (i = 0; i < arrParty.Length; i++)
         {
            party = arrParty[i];

            count = S_GetSave()._Entity.Hero[party.HeroID].WalkFrames;

            if (count == 0) count = 3;

            if (count == 9)
            {
               if (trail.FrameID >= count)
               {
                  trail.FrameID = 1;
               }
            }
            else if(count == 3)
            {
               trail.FrameID++;
               trail.FrameID %= (count == 3) ? 4 : count;

               //
               // walking character (old version)
               //
               if (trail.FrameID == 2)
               {
                  trail.FrameID = 0;
               }

               if (trail.FrameID == 3)
               {
                  trail.FrameID = 2;
               }
            }
            else
            {
               trail.FrameID++;
               trail.FrameID %= trail.SpriteFramesAuto;
            }

            party.Trail.FrameID = trail.FrameID;
         }

         for (j = 0; j < listFollower.Count; j++)
         {
            follower = listFollower[i];
            trail = follower.Trail;
            frameID = trail.FrameID;

            count = trail.SpriteFramesAuto / DIRECTION.Length;
            if (count > 0)
            {
               trail.FrameID = S_B(i % 2) ? frameID : frameID + count / 2;

               if (count == 3 || count == 9)
               {
                  count++;
               }

               trail.FrameID %= count;
            }
         }
      }
      else
      {
         trail.FrameID = 0;

         //
         // Player is not moved. Use the "standing" gesture instead of "walking" one.
         //
         for (i = 0; i < arrParty.Length; i++)
         {
            arrParty[i].Trail.FrameID = trail.FrameID;
         }

         for (i = 0; i < listFollower.Count; i++)
         {
            listFollower[i].Trail.FrameID = trail.FrameID;
         }
      }
   }

   public static void
   UpdateParty()
   /*++
      Purpose:

        Update the location and walking gesture of all the party members.

      Parameters:

        None.

      Return value:

        None.

   --*/
   {
      PalDirection      dirCurr;
      Pos               posOffset, posTarget;
      Party[]           arrParty;
      List<Follower>    listFollower;

      dirCurr = g_InputState.dir;

      //
      // Has user pressed one of the arrow keys?
      //
      if (dirCurr != PalDirection.Unknown)
      {
         posTarget = S_GetPartyPos().Clone();

         posOffset = new Pos
         {
            X = (dirCurr == PalDirection.West || dirCurr == PalDirection.South) ? -16 : 16,
            Y = (dirCurr == PalDirection.West || dirCurr == PalDirection.North) ? -8 : 8,
         };

         posTarget.X += posOffset.X;
         posTarget.Y += posOffset.Y;

         arrParty = S_GetSave().arrParty;
         listFollower = S_GetSave().listFollower;

         S_SetPartyDirection(dirCurr);

         //
         // Check for obstacles on the destination location
         //
         if (!CheckObstacle(posTarget, true, 0, true))
         {
            //
            // Player will actually be moved. Store trail.
            //
            S_SetPartyPos(posTarget);

            //
            // Update the coordinates of all team members
            //
            UpdateTeamPos(posTarget);

            //
            // Update gestures
            //
            UpdatePartyGestures(true);

            return; // don't go further
         }
      }

      UpdatePartyGestures(false);
   }

   public static bool
   CheckObstacle(
      Pos      pos,
      bool     fCheckEvent,
      int      iSelfObject,
      bool     fCheckRange = false
   )
   /*++
      Purpose:

        Check if the specified location has obstacle or not.

      Parameters:

        [IN]  pos - the position to check.

        [IN]  fCheckEventObjects - TRUE if check for event objects, FALSE if only
              check for the map.

        [IN]  iSelfObject - the event object which will be skipped.

        [IN]  fCheckRange - whether need to check range.

      Return value:

        TRUE if the location is obstacle, FALSE if not.

   --*/
   {
      int            x, y, h, xr, yr, i;
      List<Event>    listEvent;
      Event          evt;
      Pos            posEvt;

      //
      // Avoid walk out of range, look out of map
      //
      x = pos.X;
      y = pos.Y;
      if (fCheckRange)
      {
         if (x <= -16 || x > MAP_WIDTH - 32 || y <= -8 || y > MAP_HEIGHT - 8)
         {
            return true;
         }
      }

#if DEBUG_NoObstacle
      if (fCheckRange)
      {
         //
         // Debugging: Allow players to pass through walls
         //
         return false;
      }
#endif // !DEBUG_NoObstacle

      //
      // Check if the map tile at the specified position is blocking
      //
      x /=  32;
      y /= 16;
      h = 0;

      xr = pos.X % 32;
      yr = pos.Y % 16;

      if (xr + yr * 2 >= 16)
      {
         if (xr + yr * 2 >= 48)
         {
            x++;
            y++;
         }
         else if (32 - xr + yr * 2 < 16)
         {
            x++;
         }
         else if (32 - xr + yr * 2 < 48)
         {
            h = 1;
         }
         else
         {
            y++;
         }
      }

      if (PalMap.TileIsObstacle(new BlockPos(x, y, h)))
      {
         return true;
      }

      if (fCheckEvent)
      {
         listEvent = S_GetSave().CurrScene.listEvent;

         //
         // Loop through all event objects in the current scene
         //
         for (i = 1; i < listEvent.Count; i++)
         {
            evt = listEvent[i];

            if (i == iSelfObject)
            {
               //
               // Skip myself
               //
               continue;
            }

            //
            // Is this object a blocking one?
            //
            if (evt._Status.IsObstacle)
            {
               posEvt = evt._Frame.Trail.Pos;

               //
               // Check for collision
               //
               if (Math.Abs(posEvt.X - pos.X) + Math.Abs(posEvt.Y - pos.Y) * 2 < 16)
               {
                  return true;
               }
            }
         }
      }

      return false;
   }

#if false
   public static int
   CheckObstacleParty(
      Pos      pos,
      int      roleID = -1
   )
   {
      int      i, len;
      Pos      posRole;

      if (roleID == -1)
      {
         i = 0;
         len = S_GetSave().PartySize;
      }
      else
      {
         i = roleID;
         len = roleID + 1;
      }

      //
      // Check whether our team members are blocking the way
      //
      for (; i < len; i++)
      {
         posRole = S_GetRolePos(i);

         //
         // Check for collision
         //
         if (Math.Abs(posRole.X - pos.X) + Math.Abs(posRole.Y - pos.Y) * 2 < 16)
         {
            return i;
         }
      }

      return -1;
   }
#endif // false

   public static void
   PartyWalkTo(
      BlockPos    bpos,
      int         iSpeed
   )
   /*++
     Purpose:

       Make the party walk to the map position specified by (x, y, h)
       at the speed of iSpeed.

     Parameters:

       [IN]  bpos - Tile block coordinates.

       [IN]  iSpeed - the speed to move.

     Return value:

       None.

   --*/
   {
      int      xOffset, yOffset;
      ulong    time;
      Pos      pos;

      time = 0;
      pos = S_GetPartyPos();

      while (true)
      {
         xOffset = bpos.X * 32 + bpos.H * 16 - pos.X;
         yOffset = bpos.Y * 16 + bpos.H * 8 - pos.Y;

         if (xOffset == 0 || yOffset == 0)
         {
            break;
         }

         PalTimer.DelayUntil(time);

         time = SDL.GetTicks() + FRAME_TIME;

         //
         // Update the coordinates of all team members
         //
         UpdateTeamPos(pos);

         if (yOffset < 0)
         {
            S_GetPartyTrail().Direction = ((xOffset < 0) ? PalDirection.West : PalDirection.North);
         }
         else
         {
            S_GetPartyTrail().Direction = ((xOffset < 0) ? PalDirection.South: PalDirection.East);
         }

         if (Math.Abs(xOffset) <= iSpeed * 2)
         {
            pos.X += xOffset;
         }
         else
         {
            pos.X += iSpeed * (xOffset < 0 ? -2 : 2);
         }

         if (Math.Abs(yOffset) <= iSpeed)
         {
            pos.Y += yOffset;
         }
         else
         {
            pos.Y += iSpeed * (yOffset < 0 ? -1 : 1);
         }

         //
         // Update the coordinates of the party
         //
         S_SetPartyPos(pos);

         UpdatePartyGestures(true);
         PalPlay.GameUpdate(false);
         Draw();
         Screen.Update();
      }

      UpdatePartyGestures(false);
   }

   public static void
   NPCWalkOneStep(
      int      iSceneID,
      int      iEvtID,
      int      iSpeed
   )
   /*++
     Purpose:

       Move and animate the specified event object (NPC).

     Parameters:

       [IN]  iSceneID - The scene number where this event is located.

       [IN]  iEvtID - The event object to move.

       [IN]  iSpeed - Speed of the movement.

     Return value:

       None.

   --*/
   {
      int      i, count, roleID;
      Event    evt;
      Trail    trail;
      Pos      pos, posEvt, posRole;

      //
      // Check for invalid parameters
      //
      if (iSceneID == 0 || iSceneID > S_GetSave().listScene.Count - 1)
      {
         return;
      }

      evt = S_GetEvent(iSceneID, iEvtID);
      trail = evt._Frame.Trail;

      posEvt = trail.Pos;
      pos = posEvt.Clone();

      //
      // Move the event object by the specified direction
      //
      pos.X += ((trail.Direction == PalDirection.West || trail.Direction == PalDirection.South) ? -2 : 2) * iSpeed;
      pos.Y += ((trail.Direction == PalDirection.West || trail.Direction == PalDirection.North) ? -1 : 1) * iSpeed;

#if false
      //
      // If any of our team members is blocking the way,
      // let him exchange positions with the npc
      //
      for (i = 0; i < S_GetSave().PartySize; i++)
      {
         roleID = CheckObstacleParty(pos, i);

         if (roleID == -1)
         {
            break;
         }

         posRole = S_GetRolePos(roleID);

         if (posRole.X == posEvt.X || posRole.Y == posEvt.Y)
         {
            continue;
         }

         posRole.X = posEvt.X;
         posRole.Y = posEvt.Y;
      }
#endif // false

      posEvt.X = pos.X;
      posEvt.Y = pos.Y;

   NPCWalkOneStep_UpdateGesture:
      //
      // Update the gesture
      //
      count = evt._Frame.SpriteFrames;
      if (count > 0)
      {
         trail.FrameID++;
         trail.FrameID %= (count == 3) ? 4 : count;

         //if (count == 3 || count == 9)
         //{
         //   count++;
         //}

         //trail.FrameID %= count;

         //if (count == 3)
         //{
         //   if (trail.FrameID == 0)
         //   {
         //      trail.FrameID = S_RandomLong(1, 2);
         //   }
         //   else
         //   {
         //      trail.FrameID = 0;
         //   }
         //}
         //else
         //{
         //   trail.FrameID++;
         //   trail.FrameID %= count;
         //}
      }
      else if (trail.SpriteFramesAuto > 0)
      {
         trail.FrameID++;
         trail.FrameID %= trail.SpriteFramesAuto;
      }
   }

   public static bool
   NPCWalkTo(
      int         iSceneID,
      int         iEvtID,
      BlockPos    bpos,
      int         iSpeed
   )
   /*++
     Purpose:

       Make the specified event object walk to the map position specified by (x, y, h)
       at the speed of iSpeed.

     Parameters:

       [IN]  iSceneID - The scene number where this event is located.

       [IN]  iEvtID - The event object to move.

       [IN]  bpos - Tile block coordinates.

       [IN]  iSpeed - the speed to move.

     Return value:

       TRUE if the event object has successfully moved to the specified position,
       FALSE if still need more moving.

   --*/
   {
      Event    evt;
      int      xOffset, yOffset;
      Trail    trail;

      evt = S_GetEvent(iSceneID, iEvtID);
      trail = evt._Frame.Trail;

      xOffset = (bpos.X * 32 + bpos.H * 16) - trail.Pos.X;
      yOffset = (bpos.Y * 16 + bpos.H * 8) - trail.Pos.Y;

      if (yOffset < 0)
      {
         trail.Direction = ((xOffset < 0) ? PalDirection.West : PalDirection.North);
      }
      else
      {
         trail.Direction = ((xOffset < 0) ? PalDirection.South : PalDirection.East);
      }

      if (Math.Abs(xOffset) < iSpeed * 2 || Math.Abs(yOffset) < iSpeed * 2)
      {
         trail.Pos.X = bpos.X * 32 + bpos.H * 16;
         trail.Pos.Y = bpos.Y * 16 + bpos.H * 8;
      }
      else
      {
         NPCWalkOneStep(iSceneID, iEvtID, iSpeed);
      }

      if (trail.Pos.X == bpos.X * 32 + bpos.H * 16 && trail.Pos.Y == bpos.Y * 16 + bpos.H * 8)
      {
         trail.FrameID = 0;
         return true;
      }

      return false;
   }

   public static void
   PartyRideEventObject(
      int         iSceneID,
      int         iEvtID,
      BlockPos    bpos,
      int         iSpeed
   )
   /*++
     Purpose:

       Move the party to the specified position, riding the specified event object.

     Parameters:

       [IN]  iSceneID - The scene number where this event is located.

       [IN]  iEvtID - The event object to move.

       [IN]  bpos - Tile block coordinates.

       [IN]  iSpeed - the speed to move.

     Return value:

       TRUE if the party and event object has successfully moved to the specified
       position, FALSE if still need more moving.

   --*/
   {
      int      xOffset, yOffset, dx, dy;
      uint     t;
      Pos      pos, posEvt;

      pos = S_GetPartyPos().Clone();
      posEvt = S_GetEventTrail(iSceneID, iEvtID).Pos;

      xOffset = bpos.X * 32 + bpos.H * 16 - pos.X;
      yOffset = bpos.Y * 16 + bpos.H * 8 - pos.Y;

      t = 0;

      while (xOffset != 0 || yOffset != 0)
      {
         PalTimer.DelayUntil(t);

         t = (uint)(SDL.GetTicks() + FRAME_TIME);

         if (yOffset < 0)
         {
            S_SetPartyDirection((xOffset < 0) ? PalDirection.West : PalDirection.North);
         }
         else
         {
            S_SetPartyDirection((xOffset < 0) ? PalDirection.South : PalDirection.East);
         }

         if (Math.Abs(xOffset) > iSpeed * 2)
         {
            dx = iSpeed * (xOffset < 0 ? -2 : 2);
         }
         else
         {
            dx = xOffset;
         }

         if (Math.Abs(yOffset) > iSpeed)
         {
            dy = iSpeed * (yOffset < 0 ? -1 : 1);
         }
         else
         {
            dy = yOffset;
         }

         //
         // Calculate the coordinates for the next step of the team
         //
         pos.X += dx;
         pos.Y += dy;

         //
         // Set the coordinates of the team
         //
         S_SetPartyPos(pos);

         //
         // Update team member coordinates
         //
         UpdateTeamPos(pos);

         //
         // Set the coordinates of the event
         //
         posEvt.X += dx;
         posEvt.Y += dy;

         //
         // Draw a frame of the game scene
         //
         PalPlay.GameUpdate(false);
         Draw();
         Screen.Update();

         xOffset = bpos.X * 32 + bpos.H * 16 - pos.X;
         yOffset = bpos.Y * 16 + bpos.H * 8 - pos.Y;
      }
   }

   public static void
   MonsterChasePlayer(
      int      iSceneID,
      int      iEvtID,
      int      iSpeed,
      int      iChaseRange,
      bool     fCanFly
   )
   /*++
     Purpose:

       Make the specified event object chase the players.

     Parameters:

       [IN]  iSceneID - The scene number where this event is located.

       [IN]  iEvtID - the event object ID of the monster.

       [IN]  iSpeed - the speed of chasing.

       [IN]  iChaseRange - sensitive range of the monster.

       [IN]  fCanFly - TRUE if monster is floating (i.e., ignore the obstacles)

     Return value:

       None.

   --*/
   {
      int      iMonsterSpeed, x, y, xPrev, yPrev, i, j, l;
      Trail    trail;
      Pos      pos, posTarget;

      iMonsterSpeed = 0;
      trail = S_GetEventTrail(iSceneID, iEvtID);
      pos = S_GetPartyPos();
      posTarget = new Pos();

      if (S_GetSave().ChaseRange != 0)
      {
         x = pos.X - trail.Pos.X;
         y = pos.Y - trail.Pos.Y;

         if (x == 0)
         {
            x = S_B(S_RandomLong(0, 1)) ? -1 : 1;
         }

         if (y == 0)
         {
            y = S_B(S_RandomLong(0, 1)) ? -1 : 1;
         }

         xPrev = trail.Pos.X;
         yPrev = trail.Pos.Y;

         i = xPrev % 32;
         j = yPrev % 16;

         xPrev /= 32;
         yPrev /= 16;
         l = 0;

         if (i + j * 2 >= 16)
         {
            if (i + j * 2 >= 48)
            {
               xPrev++;
               yPrev++;
            }
            else if (32 - i + j * 2 < 16)
            {
               xPrev++;
            }
            else if (32 - i + j * 2 < 48)
            {
               l = 1;
            }
            else
            {
               yPrev++;
            }
         }

         xPrev = xPrev * 32 + l * 16;
         yPrev = yPrev * 16 + l * 8;

         //
         // Is the party near to the event object?
         //
         if (Math.Abs(x) + Math.Abs(y) * 2 < iChaseRange * 32 * S_GetSave().ChaseRange)
         {
            if (x < 0)
            {
               if (y < 0)
               {
                  trail.Direction = PalDirection.West;
               }
               else
               {
                  trail.Direction = PalDirection.South;
               }
            }
            else
            {
               if (y < 0)
               {
                  trail.Direction = PalDirection.North;
               }
               else
               {
                  trail.Direction = PalDirection.East;
               }
            }

            if (x != 0)
            {
               x = trail.Pos.X + x / Math.Abs(x) * 16;
            }
            else
            {
               x = trail.Pos.X;
            }

            if (y != 0)
            {
               y = trail.Pos.X + y / Math.Abs(y) * 8;
            }
            else
            {
               y = trail.Pos.Y;
            }

            if (fCanFly)
            {
               iMonsterSpeed = iSpeed;
            }
            else
            {
               if (!CheckObstacle(new Pos(x, y), true, iEvtID))
               {
                  iMonsterSpeed = iSpeed;
               }
               else
               {
                  trail.Pos.X = xPrev;
                  trail.Pos.Y = yPrev;
               }

               for (l = 0; l < 4; l++)
               {
                  switch (l)
                  {
                     case 0:
                        trail.Pos.X -= 4;
                        trail.Pos.Y += 2;
                        break;

                     case 1:
                        trail.Pos.X -= 4;
                        trail.Pos.Y -= 2;
                        break;

                     case 2:
                        trail.Pos.X += 4;
                        trail.Pos.Y -= 2;
                        break;

                     case 3:
                        trail.Pos.X += 4;
                        trail.Pos.Y += 2;
                        break;
                  }

                  if (CheckObstacle(trail.Pos, false, 0))
                  {
                     trail.Pos.X = xPrev;
                     trail.Pos.Y = yPrev;
                  }
               }
            }
         }
      }
      else
      {
         //
         // Exorcism-Fragrance will cause monsters to spin in place
         // Switch direction every two frames
         //
         if (S_B(PalGlobal.FrameNum & 1))
         {
            trail.Direction++;

            if (trail.Direction >= PalDirection.Unknown) trail.Direction = PalDirection.South;
         }
      }

      NPCWalkOneStep(iSceneID, iEvtID, iMonsterSpeed);
   }
}
