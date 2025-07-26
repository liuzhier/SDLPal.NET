using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

using SDL3;

using static PalVideo;
using static SafeSys;

public unsafe class PalGame
{
   public   const int      FPS = 1500000000;
   public   const int      FRAME_TIME = (1000 / FPS);

   public static void
   GameMain()
   /*++
     Purpose:

       The game entry routine.

     Parameters:

       None.

     Return value:

       None.

   --*/
   {
      ulong    dwTime;

      //
      // Show the opening menu.
      //
      PalGlobal.CurrSaveID = PalUiGame.OpeningMenu();

      //
      // Initialize game data and set the flags to load the game resources.
      //
      PalGlobal.ReloadInNextTick(PalGlobal.CurrSaveID);

      //
      // Run the main game loop.
      //
      dwTime = SDL.GetTicks();
      while (true)
      {
         //
         // Load the game resources if needed.
         //
         PalResource.Load();

         //
         // Clear the input state of previous frame.
         //
         PalInput.ClearKeyState();

         //
         // Wait for the time of one frame. Accept input here.
         //
         PalTimer.DelayUntil(dwTime);

         //
         // Set the time of the next frame.
         //
         dwTime = SDL.GetTicks() + FRAME_TIME;

         //
         // Run the main frame routine.
         //
         PalPlay.StartFrame();
      }
   }
}
