using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using SDL3;

using static SafeSys;
using static PalGame;
using static PalConfig;
using static PalCommon;
using static PalVideo;

public unsafe class PalInput
{
   public   static   bool              g_InputPaused  = false;

   public   static   InputState        g_InputState   = new InputState();

   public   static   List<KeyDict>     g_KeyDict      = new List<KeyDict>
   {
      new KeyDict(SDL.Keycode.Up,         PalKey.Up),
      new KeyDict(SDL.Keycode.Kp8,        PalKey.Up),
      new KeyDict(SDL.Keycode.Down,       PalKey.Down),
      new KeyDict(SDL.Keycode.Kp2,        PalKey.Down),
      new KeyDict(SDL.Keycode.Left,       PalKey.Left),
      new KeyDict(SDL.Keycode.Kp4,        PalKey.Left),
      new KeyDict(SDL.Keycode.Right,      PalKey.Right),
      new KeyDict(SDL.Keycode.Kp6,        PalKey.Right),
      new KeyDict(SDL.Keycode.Escape,     PalKey.Menu),
      new KeyDict(SDL.Keycode.Insert,     PalKey.Menu),
      new KeyDict(SDL.Keycode.LAlt,       PalKey.Menu),
      new KeyDict(SDL.Keycode.RAlt,       PalKey.Menu),
      new KeyDict(SDL.Keycode.Kp0,        PalKey.Menu),
      new KeyDict(SDL.Keycode.Return,     PalKey.Search),
      new KeyDict(SDL.Keycode.Space,      PalKey.Search),
      new KeyDict(SDL.Keycode.KpEnter,    PalKey.Search),
      new KeyDict(SDL.Keycode.LCtrl,      PalKey.Search),
      new KeyDict(SDL.Keycode.Pageup,     PalKey.PgUp),
      new KeyDict(SDL.Keycode.Kp9,        PalKey.PgUp),
      new KeyDict(SDL.Keycode.Pagedown,   PalKey.PgDn),
      new KeyDict(SDL.Keycode.Kp3,        PalKey.PgDn),
      new KeyDict(SDL.Keycode.Home,       PalKey.Home),
      new KeyDict(SDL.Keycode.Kp7,        PalKey.Home),
      new KeyDict(SDL.Keycode.End,        PalKey.End),
      new KeyDict(SDL.Keycode.Kp1,        PalKey.End),
      new KeyDict(SDL.Keycode.R,          PalKey.Repeat),
      new KeyDict(SDL.Keycode.A,          PalKey.Auto),
      new KeyDict(SDL.Keycode.D,          PalKey.Defend),
      new KeyDict(SDL.Keycode.E,          PalKey.UseItem),
      new KeyDict(SDL.Keycode.W,          PalKey.ThrowItem),
      new KeyDict(SDL.Keycode.Q,          PalKey.Flee),
      new KeyDict(SDL.Keycode.F,          PalKey.Force),
      new KeyDict(SDL.Keycode.S,          PalKey.Status),
   };

   private  static   ulong[]           arrKeyLastTime = new ulong[g_KeyDict.Count];

   public class KeyDict
   {
      public   SDL.Keycode    keySDL;
      public   PalKey         keyPAL;

      public KeyDict(
         SDL.Keycode    sdl,
         PalKey         pal
      )
      {
         keySDL = sdl;
         keyPAL = pal;
      }
   }

   public enum PalKey
   {
      None        = 0,
      Menu        = (1 << 0),
      Search      = (1 << 1),
      Down        = (1 << 2),
      Left        = (1 << 3),
      Up          = (1 << 4),
      Right       = (1 << 5),
      PgUp        = (1 << 6),
      PgDn        = (1 << 7),
      Repeat      = (1 << 8),
      Auto        = (1 << 9),
      Defend      = (1 << 10),
      UseItem     = (1 << 11),
      ThrowItem   = (1 << 12),
      Flee        = (1 << 13),
      Status      = (1 << 14),
      Force       = (1 << 15),
      Home        = (1 << 16),
      End         = (1 << 17),
   };

   public class InputState
   {
      public   PalDirection      dir            = PalDirection.Unknown;
      public   PalKey            keyPress       = PalKey.None;
      public   ulong[]           dwKeyOrder     = new ulong[4];
      public   ulong             dwKeyMaxCount  = 0;
   }

   public static void
   Init()
   /*++
     Purpose:

       Initialize the input subsystem.

     Parameters:

       None.

     Return value:

       None.

   --*/
   {

   }

   public static void
   Free()
   /*++
     Purpose:

       Shut down the input subsystem.

     Parameters:

       None.

     Return value:

       None.

   --*/
   {

   }

   private static PalDirection
   GetCurrDirection()
   /*++
     Purpose:

       Get the current walking direction.

     Parameters:

       None.

     Return value:

       None.

   --*/
   {
      int               i;
      PalDirection      dirCurr = PalDirection.South;

      for (i = 1; i < g_InputState.dwKeyOrder.Length; i++)
      {
         if (g_InputState.dwKeyOrder[(int)dirCurr] < g_InputState.dwKeyOrder[i])
         {
            dirCurr = (PalDirection)i;
         }
      }

      if (!S_B(g_InputState.dwKeyOrder[(int)dirCurr]))
      {
         dirCurr = PalDirection.Unknown;
      }

      return dirCurr;
   }

   private static bool
   CheckDirection(
      PalKey      keyPAL,
      PalKey      keyCheck
   )
   {
      return (keyPAL & keyCheck) != keyCheck;
   }

   private static void
   KeyDown(
      PalKey      keyPAL,
      bool        fRepeat
   )
   /*++
     Purpose:

       Called when user pressed a key.

     Parameters:

       [IN]  keyPAL - keycode of the pressed key.
       [IN]  fRepeat - Whether the key was pressed repeatedly.

     Return value:

       None.

   --*/
   {
      PalDirection dirCurr;

      dirCurr = PalDirection.Unknown;

      if (!fRepeat)
      {
         if (keyPAL == PalKey.Down)
         {
            dirCurr = PalDirection.South;
         }
         else if (keyPAL == PalKey.Left)
         {
            dirCurr = PalDirection.West;
         }
         else if (keyPAL == PalKey.Up)
         {
            dirCurr = PalDirection.North;
         }
         else if (keyPAL == PalKey.Right)
         {
            dirCurr = PalDirection.East;
         }

         if (dirCurr != PalDirection.Unknown)
         {
            g_InputState.dwKeyMaxCount++;
            g_InputState.dwKeyOrder[(int)dirCurr] = g_InputState.dwKeyMaxCount;
            g_InputState.dir = GetCurrDirection();
         }
      }

      g_InputState.keyPress |= keyPAL;
   }

   private static void
   KeyUp(
      PalKey      keyPAL
   )
   /*++
     Purpose:

       Called when user released a key.

     Parameters:

       [IN]  keyPAL - keycode of the released key.

     Return value:

       None.

   --*/
   {
      PalDirection      dirCurr;

      dirCurr = PalDirection.Unknown;

      if (keyPAL == PalKey.Down)
      {
         dirCurr = PalDirection.South;
      }
      else if (keyPAL == PalKey.Left)
      {
         dirCurr = PalDirection.West;
      }
      else if (keyPAL == PalKey.Up)
      {
         dirCurr = PalDirection.North;
      }
      else if (keyPAL == PalKey.Right)
      {
         dirCurr = PalDirection.East;
      }

      if (dirCurr != PalDirection.Unknown)
      {
         g_InputState.dwKeyOrder[(int)dirCurr] = 0;
         dirCurr = GetCurrDirection();
         g_InputState.dwKeyMaxCount = (dirCurr == PalDirection.Unknown) ? 0 : g_InputState.dwKeyOrder[(int)dirCurr];
         g_InputState.dir = dirCurr;
      }
   }

   public static void
   UpdateKeyboardState()
   /*++
     Purpose:

       Poll & update keyboard state.

     Parameters:

       None.

     Return value:

       None.

   --*/
   {
      int         iKeyCount, i;
      bool[]      arrKeyState;
      ulong       dwCurrentTime = SDL.GetTicks();
      SDL.Keymod     keymod;

      arrKeyState = SDL.GetKeyboardState(out iKeyCount);

      for (i = 0; i < g_KeyDict.Count; i++)
      {
         if (arrKeyState[(int)SDL.GetScancodeFromKey(g_KeyDict[i].keySDL, out keymod)])
         {
            if (dwCurrentTime > arrKeyLastTime[i])
            {
               KeyDown(g_KeyDict[i].keyPAL, (arrKeyLastTime[i] != 0));
               if (g_Config.input.fEnableKeyRepeat)
               {
                  arrKeyLastTime[i] = dwCurrentTime + (ulong)((arrKeyLastTime[i] == 0) ? 200 : 75);
               }
               else
               {
                  arrKeyLastTime[i] = 0xFFFFFFFF;
               }
            }
         }
         else
         {
            if (arrKeyLastTime[i] != 0)
            {
               KeyUp(g_KeyDict[i].keyPAL);
               arrKeyLastTime[i] = 0;
            }
         }
      }
   }

   public static void
   ClearKeyState()
   /*++
     Purpose:

       Clear the record of pressed keys.

     Parameters:

       None.

     Return value:

       None.

   --*/
   {
      g_InputState.keyPress = PalKey.None;
   }

   public static bool
   Pressed(
      PalKey      keycode
   )
   {
      return S_B((decimal)(g_InputState.keyPress & keycode));
   }

   private static void
   KeyboardEventFilter(
      SDL.Event*     lpEvent
   )
   /*++
     Purpose:

       Handle keyboard events.

     Parameters:

       [IN]  lpEvent - pointer to the event.

     Return value:

       None.

   --*/
   {
      if ((SDL.EventType)lpEvent->Type == SDL.EventType.KeyDown)
      {
         //
         // Custom shortcut key events
         //
         if (S_B((decimal)(lpEvent->Key.Mod & SDL.Keymod.Alt)))
         {
            //
            // Combination key
            //
            if (lpEvent->Key.Key == SDL.Keycode.Return)
            {
               //
               // Pressed Alt+Enter (toggle fullscreen)...
               //
               g_Config.video.fFullScreen = !g_Config.video.fFullScreen;

               SDL.SetWindowFullscreen(g_pWindow, g_Config.video.fFullScreen);
               return;
            }
            else if (lpEvent->Key.Key == SDL.Keycode.F4)
            {
               //
               // Pressed Alt+F4 (Exit program)...
               //
               PalMain.Free();
            }
         }
         else if (lpEvent->Key.Key == SDL.Keycode.P)
         {
            //
            // Save the game screen as a screenshot
            //
            Screen.SaveScreenshot();
         }
      }
   }

   private static void
   EventFilter(
      SDL.Event*     lpEvent
   )
   /*++
     Purpose:

       SDL event filter function. A filter to process all events.

     Parameters:

       [IN]  lpEvent - pointer to the event.

     Return value:

       None

   --*/
   {
      switch ((SDL.EventType)lpEvent->Type)
      {
         case SDL.EventType.WindowResized:
            //
            // Resized the window
            //
            PalVideo.Resize(lpEvent->Window.Data1, lpEvent->Window.Data2);
            break;

         case SDL.EventType.Quit:
            //
            // Quit the game
            //
            PalMain.Free();
            break;

         default:
            //
            // Default behavior
            //
            break;
      }

      //
      // Window shortcut key
      // All events are handled here, don't put anything to the internal queue
      //
      KeyboardEventFilter(lpEvent);
   }

   private static bool
   PollEvent(
      SDL.Event*     lpEvent
   )
   /*++
     Purpose:

       Poll and process one event.

     Parameters:

       [OUT] event - Events polled from SDL.

     Return value:

       Return value of PAL_PollEvent.

   --*/
   {
      SDL.Event      evt;
      bool           ret;

      ret = SDL.PollEvent(out evt);

      if (ret && true)
      {
         EventFilter(&evt);
      }

      if (lpEvent != null)
      {
         *lpEvent = evt;
      }

      return ret;
   }

   public static void
   ProcessEvent()
   /*++
     Purpose:

       Process all events.

     Parameters:

       None.

     Return value:

       None.

   --*/
   {
      while (PollEvent(null)) ;

      if (g_InputPaused)
      {
         g_InputPaused = !g_InputPaused;
         return;
      }

      UpdateKeyboardState();
   }
}
