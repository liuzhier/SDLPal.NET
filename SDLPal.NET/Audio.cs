using SDL3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using static SafeSys;
using static PalConfig;
using static PalAudio;
using static PalCommon;

public unsafe class PalAudio
{
   private  static   string[]          AUDIO_TYPE        = ["flac", "mod", "mp3", "ogg", "mid", "opus", "wav"];
   private  const Mixer.InitFlags      MIXER_INIT_FLAGS  = 0
      | Mixer.InitFlags.FLAC
      | Mixer.InitFlags.MOD
      | Mixer.InitFlags.MP3
      | Mixer.InitFlags.OGG
      | Mixer.InitFlags.MID
      | Mixer.InitFlags.OPUS
      | Mixer.InitFlags.WAVPACK;
   
   private  static   nint                             pAudioSpec;
   private  static   Mixer.ChannelFinishedCallback    funcChannelFinished  = new Mixer.ChannelFinishedCallback(FreeChunk);
   private  static   SoundData                        musicData            = new SoundData();
   private  static   List<SoundData>                  listSoundData        = [];

   public class SoundData
   {
      public nint pAudio = 0;
      public int iChannelID = -1;
   }

   public static void
   Init()
   {
      SDL_FAILED(
         "Mixer.Init",
         Mixer.Init(MIXER_INIT_FLAGS) == MIXER_INIT_FLAGS
      );

      pAudioSpec = SC_AudioSpec(new SDL.AudioSpec
      {
         Format   = g_Config.audio._AudioFormat,
         Channels = g_Config.audio.iChannels,
         Freq     = g_Config.audio.iFreq,
      });

      SDL_FAILED(
         "Mixer.OpenAudio",
         Mixer.OpenAudio(0, pAudioSpec)
      );

      //
      // The callback function automatically releases resources
      //
      Mixer.ChannelFinished(funcChannelFinished);
   }

   public static void
   FreeChunk(
      int      iChannelID
   )
   {
      Mixer.FreeChunk(Mixer.GetChunk(iChannelID));
   }

   public static void
   Free()
   {
      //
      // Clean up resources
      //
      StopMusic();
      Mixer.HaltChannel(-1);

      S_FREE(pAudioSpec);

      Mixer.CloseAudio();
      Mixer.Quit();
   }

   public static void
   PlayMusic(
      int      iMusicID,
      float    flFadeTime  = 0.0f,
      bool     fLoop       = true
   )
   {
      int         i;
      string      path, pathFull;

      StopMusic();

      if (iMusicID <= 0)
      {
         return;
      }

      path = $@"{MUS_PATH}\{iMusicID:D3}";
      pathFull = "";

      for (i = 0; i < AUDIO_TYPE.Length; i++)
      {
         pathFull = $@"{path}.{AUDIO_TYPE[i]}";

         if (File.Exists(pathFull))
         {
            musicData.pAudio = Mixer.LoadMUS(pathFull);
            Mixer.FadeInMusic(musicData.pAudio, (fLoop) ? 999 : 1, (int)(flFadeTime * 1000));
            break;
         }
      }

      S_FILE_EXISTS(pathFull);
   }

   public static void
   PlaySound(
      int      iSoundID
   )
   {
      nint     pSound;

      SDL_FAILED(
         "PalAudio.PlaySound",
         pSound = Mixer.LoadWAV($@"{WAV_PATH}\{iSoundID:D5}.wav")
      );

      listSoundData.Add(new SoundData
      {
         pAudio      = pSound,
         iChannelID  = Mixer.PlayChannel(-1, pSound, 0),
      });
   }

   public static void
   StopMusic()
   {
      Mixer.FreeMusic(musicData.pAudio);

      musicData.pAudio = 0;
   }
}
