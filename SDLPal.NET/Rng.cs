using SDL3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using static PalCommon;
using static PalVideo;
using static SafeSys;

public class PalRng
{
   public static void
   Play(
      int      iNumRNG,
      int      iStartFrame = 0,
      int      iEndFrame   = -1,
      int      iSpeed      = 16
   )
   /*++
     Purpose:

       Play a RNG movie.

     Parameters:

       [IN]  iNumRNG - number of the RNG movie.

       [IN]  iStartFrame - start frame number.

       [IN]  iEndFrame - end frame number.

       [IN]  iSpeed - speed of playing.

     Return value:

       None.

   --*/
   {
      int         iFrameID;
      double      dflDelay, dflTime;
      nint        pTex;
      string      path;

      dflDelay = (double)SDL.GetPerformanceFrequency() / (iSpeed == 0 ? 16 : iSpeed);
      dflTime = SDL.GetPerformanceCounter();

      for (iFrameID = iStartFrame; iFrameID != iEndFrame; iFrameID++)
      {
         dflTime += dflDelay;

         path = $@"{IMG_RNG_PATH}\{iNumRNG}\{iFrameID:D5}.png";
         if (!File.Exists(path))
         {
            //
            // The file does not exist.
            // End playing
            //
            break;
         }

         pTex = SC_Texture(path);

         Screen.Copy(pTex, g_pScreen, true);
         Screen.Update();

         //
         // Fade in the screen if needed
         //
         if (PalGlobal.NeedToFadeIn)
         {
            Screen.Fade(1, false);
            PalGlobal.NeedToFadeIn = false;
         }

         SF_Texture(ref pTex);

         PalTimer.DelayUntilPC(dflTime);
      }
   }
}
