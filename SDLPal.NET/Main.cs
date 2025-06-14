using System;
using System.Net.NetworkInformation;
using System.Runtime.InteropServices;

using SDL3;

using static PalCommon;
using static PalVideo;
using static SafeSys;
using static PalGlobal;

public unsafe class PalMain
{
   public static void
   Init()
   {
      //
      // The target directory when initializing the output file
      //
      InitOutputPath();

      //
      // Initialize the log system
      //
      PalLog.Init();

      //
      // Set the log output level to the lowest
      //
      SDL.SetLogPriorities(SDL.LogPriority.Verbose);

      //
      // Initialize the SDL device
      //
      SDL_FAILED(
         "SDL.Init",
         SDL.Init(SDL.InitFlags.Video | SDL.InitFlags.Audio)
      );

      //
      // Initialize the game subsystem
      //
      PalVideo.Init();
      PalAudio.Init();
      PalInput.Init();
      PalResource.Init();
      PalFont.Init();
      PalText.Init();
      PalUiGame.Init();
   }

   public static void
   InitOutputPath()
   {
      S_MKDIR(LOG_PATH);
      S_MKDIR(SCREENSHOT_PATH);
      S_MKDIR(SAVE_PATH);
   }

   public static void
   Free()
   {
      //
      // Shut down the game subsystem
      //
      PalUiGame.Free();
      PalText.Free();
      PalFont.Free();
      PalResource.Free();
      PalInput.Free();
      PalAudio.Free();
      PalVideo.Free();

      //
      // Global needs be free in last
      // Since subsystems may needs config content during destroy
      // Which also cleared here
      //
      //PalGlobal.Free();

      //
      // Shut down the log system
      //
      PalLog.Free();

      //
      // Exit the SDL device
      //
      SDL.Quit();

      //
      // Force the end of the game program
      //
      Environment.Exit(0);
   }

#if !GO_RES_TO_JSON
   [STAThread]
   public static void
   Main(
      string[]    args
   )
   {
#if DEBUG
      //
      // Customize the game working directory in DEBUG mode
      //
      Environment.CurrentDirectory = GAME_PATH;
#endif // DEBUG

      //
      // Initialize the game engine
      //
      Init();

      //
      // Enter the main loop of the game
      //
      PalGame.GameMain();

      //
      // It won't really be carried out up to here
      //
      Free();
   }
#else // !GO_RES_TO_JSON
   public static void
   Main(
      string[]    args
   )
   {
      Console.WriteLine("Warning: This operation will lose previously unsaved content.");
      Console.WriteLine("Please press Enter four times in a row to confirm and continue.");
      Console.WriteLine("1:");
      Console.ReadLine();
      Console.WriteLine("2:");
      Console.ReadLine();
      Console.WriteLine("3:");
      Console.ReadLine();
      Console.WriteLine("4:");
      Console.ReadLine();
      Console.WriteLine("The game content is being undownloaded.");
      Console.WriteLine("It may take 1 to 2 minutes. Please wait a moment...");

      GoMain.Go();
   }
#endif // GO_RES_TO_JSON
}