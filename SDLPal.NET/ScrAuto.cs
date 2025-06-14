using System;
using System.Collections.Generic;
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
      Script      scr;
      Event       evt;

      PalGlobal.DrawMoreData = false;

      scr = listScript[iScrAddr];
      evt = S_GetEvent(iSceneID, iEvtID);

      PalLog.Go($@"RunAuto[{evt.Comment}]: {MakeFunc(scr)}");

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
            if (scr.INT(1) == 0 || ++(evt._ScriptFrame.AutoIdleFrame) < scr.INT(1))
            {
               iScrAddr = scr.ADDR(0);
            }
            else
            {
               evt._ScriptFrame.AutoIdleFrame = 0;
               iScrAddr++;
            }
            break;

         case "Call":
            //
            // 0x0004
            // Call subroutine
            //
            RunTrigger(scr.ADDR(0), scr.BOOL(1) ? scr.INT(1) : iSceneID, scr.BOOL(2) ? scr.INT(2) : iEvtID);
            iScrAddr++;
            break;

         case "WaitEventAutoScriptRun":
            //
            // 0x0009
            // Wait for a certain number of frames
            //
            if (++(evt._ScriptFrame.AutoIdleFrame) >= scr.INT(0))
            {
               //
               // waiting ended; go further
               //
               evt._ScriptFrame.AutoIdleFrame = 0;
               iScrAddr++;
            }
            break;

         default:
            iScrAddr = RunPublic(iScrAddr, iSceneID, iEvtID);
            break;
      }

      return iScrAddr;
   }
}
