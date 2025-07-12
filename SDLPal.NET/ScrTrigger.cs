using SDL3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using static PalText;
using static PalVideo;
using static PalGame;
using static PalScene;
using static SafeSys;

public unsafe partial class PalScript
{
   private  static   int      TriggerSceneIDLast   = 0;
   private  static   int      TriggerEvtIDLast     = 0;

   public static int
   RunTrigger(
      int         iScrAddr,
      int         iSceneID,
      int         iEvtID,
      string      comment = null
   )
   /*++
     Purpose:

       Runs a trigger script.

     Parameters:

       [IN]  iScrAddr - The script entry to execute.

       [IN]  iSceneID - The ID of the scene where the event object of the calling script is located..

       [IN]  iEvtID - The event object ID which invoked the script.

       [IN]  comment - The description of the trigger.

     Return value:

       The entry point of the script.

   --*/
   {
      int         iScrAddrNext, i, len;
      ulong       time;
      bool        fEnded;
      Event       evt;
      Script      scr;
      string      evtComment;

      PalGlobal.DrawMoreData = false;

      iScrAddrNext = iScrAddr;
      fEnded = false;
      g_fUpdatedInBattle = false;
      evtComment = null;

      if (iEvtID == -1)
      {
         iSceneID = TriggerSceneIDLast;
         iEvtID = TriggerEvtIDLast;
      }

      TriggerSceneIDLast = iSceneID;
      TriggerEvtIDLast = iEvtID;

      if (iSceneID != 0 && iEvtID != 0 && iEvtID != -1)
      {
         //evt = S_GetSave().CurrScene.listEvent[iEvtID - 1];
         evt = S_GetEvent(iSceneID, iEvtID);
      }
      else
      {
         evt = null;
      }

      if (comment != null)
      {
         evtComment = comment;
      }
      else
      {
         evtComment = (evt != null) ? $"({iEvtID}){evt.Comment}" : comment;
      }
      g_fScriptSuccess = true;

      //
      // Set the default dialog speed.
      //
      PalText.SetOutputDelay(OUTPUT_DELAY_DEFAULT);

      while (iScrAddr != 0 && !fEnded)
      {
         scr = listScript[iScrAddr];

         PalLog.Go($@"RunTrigger[{evtComment}]: {MakeFunc(scr)}");

         switch (scr.FuncName)
         {
            case "End":
               //
               // 0x0000
               // Stop running
               //
               fEnded = true;
               break;

            case "ReplaceAndPause":
               //
               // 0x0001
               // Stop running and replace the entry with the next line
               //
               fEnded = true;
               iScrAddrNext = iScrAddr + 1;
               break;

            case "ReplaceAndPauseWithNop":
               //
               // 0x0002
               // Stop running and replace the entry with the specified one
               //
               if (scr.INT(1) == 0 || ++(evt._ScriptFrame.TriggerIdleFrame) < scr.INT(1))
               {
                  fEnded = true;
                  iScrAddr = scr.ADDR(0);
               }
               else
               {
                  //
                  // failed
                  //
                  evt._ScriptFrame.TriggerIdleFrame = 0;
                  iScrAddr++;
               }
               break;

            case "GotoWithNop":
               //
               // 0x0003
               // unconditional jump
               //
               if (scr.INT(1) == 0 || ++(evt._ScriptFrame.TriggerIdleFrame) < scr.INT(1))
               {
                  iScrAddr = scr.ADDR(0);
               }
               else
               {
                  //
                  // failed
                  //
                  evt._ScriptFrame.TriggerIdleFrame = 0;
                  iScrAddr++;
               }
               break;

            case "Call":
               //
               // 0x0004
               // Call script
               //
               RunTrigger(scr.ADDR(0), scr.BOOL(1) ? scr.INT(1) : iSceneID, scr.BOOL(2) ? scr.INT(2) : iEvtID);
               iScrAddr++;
               break;

            case "VideoUpdate":
               //
               // 0x0005
               // Redraw screen
               //
               PalText.ClearDialog(true);

               if (PalGlobal.IsPlayingRNG)
               {
                  Screen.Restore(g_pScreen);
               }
               else if (PalGlobal.InBattle)
               {
                  //PAL_BattleMakeScene();
                  //Screen.Copy(g_Battle.lpSceneBuf, gpScreen);
                  Screen.Update();
               }
               else
               {
                  if (scr.BOOL(1))
                  {
                     PalScene.UpdatePartyGestures(false);
                  }

                  PalScene.Draw();
                  Screen.Update();

                  PalTimer.Delay((scr.INT(0) == 0) ? 60 : (scr.INT(0) * 60));
               }
               iScrAddr++;
               break;

            case "GotoWithProbability":
               //
               // 0x0006
               // Jump to the specified address by the specified rate
               //
               if (S_RandomLong(1, 100) >= scr.INT(0))
               {
                  iScrAddr = scr.ADDR(1);
                  continue;
               }
               else
               {
                  iScrAddr++;
               }
               break;

            case "BattleStart":
               //
               // 0x0007
               // Start battle
               //
               iScrAddr++;
               break;

            case "Replace":
               //
               // 0x0008
               // Replace the entry with the next instruction
               //
               iScrAddr++;
               iScrAddrNext = iScrAddr;
               break;

            case "WaitEventAutoScriptRun":
               //
               // 0x0009
               // wait for the specified number of frames
               //
               {
                  PalText.ClearDialog(true);

                  time = SDL.GetTicks() + FRAME_TIME;

                  len = (scr.BOOL(0) ? scr.INT(0) : 1);
                  for (i = 0; i < len; i++)
                  {
                     PalTimer.DelayUntil(time);

                     time = SDL.GetTicks() + FRAME_TIME;

                     if (scr.BOOL(2))
                     {
                        PalScene.UpdatePartyGestures(false);
                     }

                     PalPlay.GameUpdate(scr.BOOL(1));
                     PalScene.Draw();
                     Screen.Update();
                  }
               }
               iScrAddr++;
               break;

            case "SetDlgCenter":
               //
               // 0x003B
               // Show dialog in the middle part of the screen
               //
               PalText.ClearDialog(true);
               PalText.SetDialog(PalText.DialogBox.Middle, scr.STR(0), scr.DWORD(1), scr.BOOL(2));
               iScrAddr++;
               break;

            case "SetDlgUpper":
               //
               // 0x003C
               // Show dialog in the upper part of the screen
               //
               PalText.ClearDialog(true);
               PalText.SetDialog(PalText.DialogBox.Upper, scr.STR(0), scr.DWORD(1), scr.BOOL(2));
               iScrAddr++;
               break;

            case "SetDlgLower":
               //
               // 0x003D
               // Show dialog in the lower part of the screen
               //
               PalText.ClearDialog(true);
               PalText.SetDialog(PalText.DialogBox.Lower, scr.STR(0), scr.DWORD(1), scr.BOOL(2));
               iScrAddr++;
               break;

            case "SetDlgBox":
               //
               // 0x003E
               // Show text in a window at the center of the screen
               //
               PalText.ClearDialog(true);
               PalText.SetDialog(
                  PalText.DialogBox.Box,
                  colorHex: scr.DWORD(0),
                  playingRNG: false
               );
               iScrAddr++;
               break;

            case "VideoRestore":
               //
               // 0x008E
               // Restore the screen
               //
               PalText.DialogNextPage();
               iScrAddr++;
               break;

            case "Dlg":
               //
               // 0xFFFF
               // Print dialog text
               //
               PalText.DrawTalkText(scr.Args[0]);
               iScrAddr++;
               break;

            default:
               PalText.ClearDialog(true);
               iScrAddr = RunPublic(iScrAddr, iSceneID, iEvtID);
               break;
         }
      }

      PalText.EndDialog();

      return iScrAddrNext;
   }
}
