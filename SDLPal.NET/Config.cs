using SDL3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using static PalVideo;

public class PalConfig
{
   public   static   Config      g_Config = new Config();

   public class Config
   {
      public   Video    video    = new Video();
      public   Input    input    = new Input();
      public   Audio    audio    = new Audio();
      public   Other    control  = new Other();

      public class Video
      {
         public   int               iWindowWidth      = VIDEO_WIDTH;
         public   int               iWindowHeight     = VIDEO_HEIGHT;
         public   bool              fFullScreen       = false;
         public   bool              fKeepAspectRatio  = true;
         public   SDL.ScaleMode     _ScaleMode        = SDL.ScaleMode.PixelArt;
      }

      public class Audio
      {
         public   SDL.AudioFormat      _AudioFormat   = SDL.AudioFormat.AudioS16LE;    // Audio data format,
                                                                                       // The AudioS16LE is compatible with most standard audio
         public   int                  iChannels      = 2;        // Number of channels: 1 mono, 2 stereo, et
         public   int                  iFreq          = 44100;    // Sample rate: sample frames per second
      }

      public class Input
      {
         public   bool     fEnableKeyRepeat  = false;    // The operation key keeps triggering
      }

      public class Other
      {
#if DEBUG && true
         public   PalLog.Level      fLogLevel  = PalLog.Level.All;
#else
         public   PalLog.Level      fLogLevel  = PalLog.Level.Warning;
#endif // !DEBUG
      }
   }

}
