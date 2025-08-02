using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using static PalCommon;
using static SafeSys;

public unsafe class GoSound
{
   public static void
   Go()
   {
      int            i, len, size;
      string         path;
      nint           pBuf;
      FileStream     fsIn, fsOut;

      path = $@"{PAL_WIN_PATH}\SOUNDS.MKF";
      fsIn = C_fopen(path);
      len = PalUnpak.GetMKFChunkCount(fsIn);

      S_MKDIR(WAV_PATH);

      for (i = 0; i < len; i++)
      {
         (pBuf, size) = PalUnpak.ReadMKFChunk(fsIn, i);

         path = $@"{WAV_PATH}\{i:D5}.WAV";
         fsOut = C_fopen(path, FileMode.Create);
         C_fwrite(fsOut, pBuf, size);

         C_fclose(fsOut);
         S_FREE(pBuf);
      }
   }
}
