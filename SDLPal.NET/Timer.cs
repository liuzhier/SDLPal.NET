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
      ulong    time,
      uint     dwDelayStep = 1
   )
   {
      PalInput.ProcessEvent();

      while (!TicksPass(SDL.GetTicks(), time))
      {
         PalInput.ProcessEvent();
         SDL.Delay(dwDelayStep);
      }
   }

   public static void
   Delay(
      int      ms,
      uint     dwDelayStep = 1
   )
   {
      DelayUntil(SDL.GetTicks() + (uint)ms, dwDelayStep);
   }
}
