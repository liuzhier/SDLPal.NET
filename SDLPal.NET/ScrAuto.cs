using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static PalVideo;
using static SafeSys;

public unsafe partial class PalScript
{
   public static int
   RunAuto(
      int      iScrAddr,
      int      iSceneID,
      int      iEvtID
   )
   /*++
     Purpose:

       Runs the autoscript of the specified event object.

     Parameters:

       [IN]  iScrAddr - The script entry to execute.

       [IN]  iSceneID - The ID of the scene where the event object of the calling script is located..

       [IN]  iEvtID - The event object ID which invoked the script.

     Return value:

       The address of the next script instruction to execute.

   --*/
   {
      Script            scr;
      Event             evt;
      Script.Arg[]      args;

      PalGlobal.DrawMoreData = false;

   begin:
      scr = listScript[iScrAddr];
      args = scr.arrArg;
      evt = S_GetEvent(iSceneID, iEvtID);

      PalLog.Go($@"RunAuto[({iEvtID}){evt.Comment}]: {MakeFunc(scr)}");

      //
      // For autoscript, we should interpret one instruction per frame (except jumping)
      // and save the address of next instruction.
      //
      switch (scr.FuncName)
      {
         case "End":
            //
            // 0x0000
            // Stop running
            //
            break;

         case "ReplaceAndPause":
            //
            // 0x0001
            // Stop running and replace the entry with the next line
            //
            iScrAddr++;
            break;

         case "ReplaceAndPauseWithNop":
            //
            // 0x0002
            // Stop running and replace the entry with the specified one
            //
            if (args[1].INT == 0 || ++(evt._ScriptFrame.AutoIdleFrame) < args[1].INT)
            {
               iScrAddr = args[0].ADDR;
            }
            else
            {
               evt._ScriptFrame.AutoIdleFrame = 0;
               iScrAddr++;
            }
            break;

         case "GotoWithNop":
            //
            // 0x0003
            // unconditional jump
            //
            if (args[1].INT == 0 || ++(evt._ScriptFrame.AutoIdleFrame) < args[1].INT)
            {
               iScrAddr = args[0].ADDR;
               goto begin;
            }
            else
            {
               //
               // failed
               //
               evt._ScriptFrame.AutoIdleFrame = 0;
               iScrAddr++;
            }
            break;

         case "Call":
            //
            // 0x0004
            // Call subroutine
            //
            RunTrigger(args[0].ADDR, args[1].BOOL ? args[1].INT : iSceneID, args[2].BOOL ? args[2].INT : iEvtID);
            iScrAddr++;
            break;

         case "GotoWithProbability":
            //
            // 0x0006
            // Jump to the specified address by the specified rate
            //
            if (S_RandomLong(1, 100) >= args[0].INT)
            {
               if (args[1].ADDR != 0)
               {
                  iScrAddr = args[1].ADDR;
                  goto begin;
               }
            }
            else
            {
               iScrAddr++;
            }
            break;

         case "WaitEventAutoScriptRun":
            //
            // 0x0009
            // Wait for a certain number of frames
            //
            if (++(evt._ScriptFrame.AutoIdleFrame) >= args[0].INT)
            {
               //
               // waiting ended; go further
               //
               evt._ScriptFrame.AutoIdleFrame = 0;
               iScrAddr++;
            }
            break;

         case "Dlg":
            //
            // 0xFFFF
            // Print dialog text
            //
#if false
            PalText.DrawTalkText(scr.Args[0]);
            iScrAddr++;
#endif // false
            break;

         default:
            iScrAddr = RunPublic(iScrAddr, iSceneID, iEvtID);
            break;
      }

      return iScrAddr;
   }
}
