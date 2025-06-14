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

   private  static   PlayingPcm           bgm;     // 当前BGM
   private  static   List<PlayingPcm>     sfxList = [];

   private class PlayingPcm
   {
      public   byte[]      PcmData;       // PCM数据
      public   int         Position;      // 当前播放到的位置
      public   int         Length;        // 总长度
      public   float       Volume;        // 音量(0~1)
      public   bool        Loop;          // 是否循环
   }

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

   public static void Callback(
      nint     userdata,
      nint     stream,
      int      len
   )
   {
      Span<byte>     output;
      int            sampleCount;

      output = new Span<byte>((void*)stream, len);
      output.Clear();

      sampleCount = len / 4; // 16位立体声

      for (int i = 0; i < sampleCount; i++)
      {
         int mixedL = 0, mixedR = 0;

         // 混合BGM
         if (bgm != null && bgm.Position + 4 <= bgm.Length)
         {
            short left = BitConverter.ToInt16(bgm.PcmData, bgm.Position);
            short right = BitConverter.ToInt16(bgm.PcmData, bgm.Position + 2);

            mixedL += (int)(left * bgm.Volume);
            mixedR += (int)(right * bgm.Volume);

            bgm.Position += 4;
            if (bgm.Position >= bgm.Length && bgm.Loop)
               bgm.Position = 0;
         }

         // 混合所有SFX
         foreach (var sfx in sfxList.ToList())
         {
            if (sfx.Position + 4 > sfx.Length) continue;

            short left = BitConverter.ToInt16(sfx.PcmData, sfx.Position);
            short right = BitConverter.ToInt16(sfx.PcmData, sfx.Position + 2);

            mixedL += (int)(left * sfx.Volume);
            mixedR += (int)(right * sfx.Volume);

            sfx.Position += 4;
         }

         // 防止溢出
         mixedL = Math.Clamp(mixedL, short.MinValue, short.MaxValue);
         mixedR = Math.Clamp(mixedR, short.MinValue, short.MaxValue);

         BitConverter.TryWriteBytes(output.Slice(i * 4, 2), (short)mixedL);
         BitConverter.TryWriteBytes(output.Slice(i * 4 + 2, 2), (short)mixedR);
      }

      // 移除播放完的SFX
      sfxList.RemoveAll(s => s.Position >= s.Length);
   }

   public static void
   PlayMusic(
      int      iMusicID,
      float    flFadeTime  = 0.0f,
      bool     fLoop       = true
   )
   {
      string      path;

      StopMusic();

      if (iMusicID <= 0)
      {
         return;
      }

      path = $@"{MUS_PATH}\{iMusicID:D3}";

      path += File.Exists($@"{path}.wav") ? ".wav" : ".mp3";

      S_FILE_EXISTS(path);

      musicData.pAudio = Mixer.LoadMUS(path);

      Mixer.FadeInMusic(musicData.pAudio, (fLoop) ? 999 : 1, (int)(flFadeTime * 1000));
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
