using SDL3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static PalInput;

public unsafe class PalTimer
{
   public static bool
   TicksPass(
      ulong    lastTime,
      ulong    nowTime
   )
   {
      return (int)(nowTime - lastTime) <= 0;
   }

   public static void
   DelayUntil(
      ulong    time
   )
   {
      PalInput.ProcessEvent();

      while (!TicksPass(SDL.GetTicks(), time))
      {
         PalInput.ProcessEvent();
         SDL.Delay(1);
      }
   }

   public static void
   Delay(
      int      ms
   )
   {
      DelayUntil(SDL.GetTicks() + (uint)ms);
   }
}
