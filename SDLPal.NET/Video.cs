using SDL3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using static PalCommon;
using static PalConfig;
using static PalVideo;
using static SafeSys;

public unsafe class PalVideo
{
   public   static    int      VIDEO_WIDTH    = 1200;
   public   static    int      VIDEO_HEIGHT   = 900;
   //public   static   int      VIDEO_WIDTH    = 960;
   //public   static   int      VIDEO_HEIGHT   = 960;

   public   const    SDL.PixelFormat      g_Formnat = SDL.PixelFormat.RGBA8888;

   public   static   nint     g_pWindow;
   public   static   nint     g_pRenderer;
   public   static   nint     g_pScreenActual;     // Actual texture of the window
   public   static   nint     g_pScreen;           // Main texture of the video
   public   static   nint     g_pScreenBak;        // Backup of the main video screen
   public   static   nint     g_pScreenData;
   public   static   nint     g_pScreenText;       // When the screen fades out, the text will be drawn here
   private  static   nint     g_pScreenFade;       // Occlusion texture used for video fade-in and fade-out
   public   static   nint     g_pDrawFRect;        // The area of the actual screen video

   public class Screen
   {
      public   static   bool     Rotated  = false;
      public   static   bool     IsFade   = false;

      public class Wave
      {
         public   int      Level = 0;     // Level of screen waving
         public   int      Step  = 0;     // Screen shake step length
         public   int      Index = 0;     // Current index of the wave effect
      }

      public static void
      Copy(
         nint     pSrc,
         nint     pDest,
         nint     pSrcFRect,
         nint     pDestFRect
      )
      {
         //
         // Set the rendering target to the texture to be saved
         //
         SDL.SetRenderTarget(g_pRenderer, pDest);

         if (pDest == 0)
         {
            SDL.RenderClear(g_pRenderer); 
         }

         //
         // Stretch the picture to the size of the window
         //
         if (Rotated)
         {
            SDL.RenderTextureRotated(
               g_pRenderer, pSrc,
               0, pDestFRect, 0.0, 0,
               SDL.FlipMode.Horizontal
            );
         }
         else
         {
            SDL.RenderTexture(g_pRenderer, pSrc, pSrcFRect, pDestFRect);
         }
      }

      public static void
      Copy(
         nint     pSrc,
         nint     pDest,
         nint     pDestFRect
      )
      {
         Copy(pSrc, pDest, 0, pDestFRect);
      }

      public static void
      Copy(
         nint           pSrc,
         nint           pDest,
         SDL.FRect      rectFDest
      )
      {
         float    w, h;
         nint     pDestRect;

         if (rectFDest.W <= 0 || rectFDest.H <= 0)
         {
            S_GetTexSize(pSrc, out w, out h);

            rectFDest.W = w;
            rectFDest.H = h;
         }

         pDestRect = SC_FRect(rectFDest);

         Copy(pSrc, pDest, pDestRect);

         S_FREE(pDestRect);
      }

      public static void
      Copy(
         nint           pSrc,
         SDL.FRect      rectFDest
      )
      {
         Copy(pSrc, g_pScreen, rectFDest);
      }

      public static void
      Copy(
         nint           pSrc,
         nint           pFRect
      )
      {
         Copy(pSrc, g_pScreen, pFRect);
      }

      public static void
      Copy(
         nint     pSrc,
         nint     pDest,
         bool     fStretch
      )
      {
         float          w, h;
         nint           pDestRect;

         pDestRect = 0;

         if (fStretch)
         {
            if (pDest == 0)
            {
               w = g_Config.video.iWindowWidth;
               h = g_Config.video.iWindowHeight;
            }
            else
            {
               S_GetTexSize(pDest, out w, out h);
            }

            pDestRect = SC_FRect(new SDL.FRect
            {
               X = 0,
               Y = 0,
               W = w,
               H = h,
            });
         }

         Copy(pSrc, pDest, pDestRect);

         S_FREE(pDestRect);
      }

      public static void
      Backup(
         nint     pSrc
      )
      {
         Copy(pSrc, g_pScreenBak, false);
      }

      public static void
      Restore(
         nint     pDest
      )
      {
         Copy(g_pScreenBak, pDest, false);
      }

      public static void
      Update()
      /*++
        Purpose:

          Update the screen area specified by lpRect.

        Parameters:

          None.

        Return value:

          None.

      --*/
      {
         SDL.SetRenderTarget(g_pRenderer, g_pScreenActual);
         SDL.SetRenderDrawColor(g_pRenderer, 0, 0, 0, 0xFF);
         SDL.RenderClear(g_pRenderer);

         if (IsFade)
         {
            //
            // Draw the fade color layer onto the screen
            //
            Copy(g_pScreenFade, g_pScreenActual, true);

            //
            // Draw the text layer onto the screen
            //
            Copy(g_pScreenText, g_pScreenActual, true);
         }

         //
         // Draw the main video layer onto the screen
         //
         Copy(g_pScreen, g_pScreenActual, true);

         if (PalGlobal.DrawMoreData)
         {
            //
            // Draw the scene data layer to the screen
            //
            Copy(g_pScreenData, g_pScreenActual, true);
         }

         //
         // Synthesize the final screen video
         //
         Copy(g_pScreenActual, 0, g_pDrawFRect);

         //
         // Draw the final video onto the screen
         //
         SDL.RenderPresent(g_pRenderer);
      }

      public static void
      Fade(
         int      iDelay,
         bool     fIsFadeOut  = true,
         byte     bStepCount  = 2
      )
      /*++
        Purpose:

          Fade Out the screen.

        Parameters:

          [IN]  iDelay - The delay between each frame.
          [IN]  fIsFadeOut - Whether to fade out the screen.
          [IN]  iStepCount - Total step length.

        Return value:

          None.

      --*/
      {
         float    alpha, addNum;

         addNum = bStepCount / 255.0f;

         if (fIsFadeOut)
         {
            IsFade = true;

            S_CleanUpTex(g_pScreenText);

            for (alpha = 1; ; alpha -= addNum)
            {
               SDL.SetTextureAlphaModFloat(g_pScreen, alpha);

               Update();

               PalTimer.Delay(iDelay);

               if (alpha <= 0)
               {
                  break;
               }
            }
         }
         else
         {
            for (alpha = 0; ; alpha += addNum)
            {
               SDL.SetTextureAlphaModFloat(g_pScreen, alpha);

               Update();

               PalTimer.Delay(iDelay);

               if (alpha >= 1)
               {
                  break;
               }
            }

            IsFade = false;
         }
      }

      public static void
      FadeToColor(
         int      iDelay,
         uint     dwHexColor  = 0x000000,
         bool     fIsFadeOut  = true,
         byte     bStepCount  = 2
      )
      /*++
        Purpose:

          Fade in the screen.

        Parameters:

          [IN]  iDelay - The delay between each frame.
          [IN]  dwHexColor - RGB color value.
          [IN]  fIsFadeOut - Whether to fade out the screen.
          [IN]  iStepCount - Total step length.

        Return value:

          None.

      --*/
      {
         float    alpha, addNum;

         alpha = 0.0f;
         addNum = bStepCount / 255.0f;

         //
         // Convert to RGBA format
         // Set alpha to 255
         //
         dwHexColor <<= 2;
         dwHexColor |= 0xFF;

         S_CleanUpTex(g_pScreenFade, dwHexColor);

         SDL.SetTextureAlphaModFloat(g_pScreen, alpha);

         if (fIsFadeOut)
         {
            IsFade = true;

            S_CleanUpTex(g_pScreenText);

            for (alpha = 0; ; alpha += addNum)
            {
               SDL.SetTextureAlphaModFloat(g_pScreenFade, alpha);

               Update();

               PalTimer.Delay(iDelay);

               if (alpha >= 1)
               {
                  break;
               }
            }
         }
         else
         {
            for (alpha = 1; ; alpha -= addNum)
            {
               SDL.SetTextureAlphaModFloat(g_pScreenFade, alpha);

               Update();

               PalTimer.Delay(iDelay);

               if (alpha <= 0)
               {
                  break;
               }
            }

            IsFade = false;
         }
      }

      public static void
      SaveScreenshot(
         nint     pTex = 0
      )
      /*++
        Purpose:

          Save the screenshot of current screen to a BMP file.

        Parameters:

          None.

        Return value:

          None.

      --*/
      {
         nint        pSurface;
         DateTime    now;
         string      path;
         float       fw, fh;

         if (pTex == 0)
         {
            pTex = g_pScreen;
         }

         //
         // Set the rendering target to the texture to be saved
         //
         SDL.SetRenderTarget(g_pRenderer, pTex);

         S_GetTexSize(pTex, out fw, out fh);

         //
         // Read the texture data into the Surface
         //
         pSurface = SDL.RenderReadPixels(g_pRenderer, new SDL.Rect
         {
            X = 0,
            Y = 0,
            W = (int)fw,
            H = (int)fh,
         });

         //
         // Name the screenshot according to the current time
         //
         now = DateTime.Now;
         path = $@"{SCREENSHOT_PATH}\{S_GetCurrTime()}.bmp";

         //
         // Save the screenshot
         //
         SDL.SaveBMP(pSurface, path);

         //
         // Release the temporary texture
         //
         SF_Surface(pSurface);
      }

      public static void
      ApplyWave(
         nint     pScreen
      )
      /*++
         Purpose:

           Apply screen waving effect when needed.

         Parameters:

           [OUT] pScreen - the texture to be proceed.

         Return value:

           None.

      --*/
      {
         int         w, h, pitch, pixelSize, index, i, begin, len;
         float       fw, fh;
         nint        pSurface, pTex, pPixels, pPixelsCurr, pRow, pRowCurr;
         Wave        wave;
         SDL.Surface*      lpSurface;

         wave = PalGlobal.Save.SceneWave;

         //
         // The degree of screen fluctuation has to increase by itself each time
         // to achieve the effect of the screen becoming more and more distorted
         //
         wave.Level = 4;
         wave.Level += wave.Step;
         if (wave.Level == 0 || wave.Level >= 256)
         {
            //
            // No need to wave the screen
            //
            wave.Level = 0;
            wave.Step = 0;
            return;
         }

         //
         // Inherit the row offset from the last fluctuation
         //
         index = wave.Index;

         S_GetTexSize(pScreen, out fw, out fh);
         w = (int)fw;
         h = (int)fh;

         //
         // Set the rendering target to the texture to be saved
         //
         SDL.SetRenderTarget(g_pRenderer, pScreen);

         S_GetTexSize(pScreen, out fw, out fh);

         //
         // Read the texture data into the Surface
         //
         pSurface = SDL.RenderReadPixels(g_pRenderer, new SDL.Rect
         {
            X = 0,
            Y = 0,
            W = (int)fw,
            H = (int)fh,
         });
         //SDL.SaveBMP(pSurface, $@"{SCREENSHOT_PATH}\{S_GetCurrTime()}.bmp");
         lpSurface = (SDL.Surface*)pSurface;

         //SDL.LockSurface(surface);
         {
            pitch = lpSurface->Pitch;
            pPixels = lpSurface->Pixels;
            pixelSize = pitch / VIDEO_WIDTH;

            //
            // Initialize the memory buffer to back up an entire row of pixels
            //
            pRow = S_MALLOC(pitch);

            //
            // Start applying the distortion effect to each row of pixels
            //
            for (i = 0; i < 100; i++)
            //for (i = 0; i < h; i++)
            {
               //
               // Back up a whole row of pixels
               //
               pPixelsCurr = pPixels + pitch * i;
               S_MEMCPY(pPixels, pRow, pitch);
               S_MEMSET(pRow, 0xFF, pitch);

               //
               // Calculate the area that needs to be copied in front
               //
               len = (index * wave.Level) * pixelSize;
               begin = pitch - len;

               //
               // Start copying the first half of the pixels
               //
               pRowCurr = pRow + begin;
               S_MEMCPY(pRowCurr, pPixelsCurr, len);

               //
               // Start copying the second half of the pixel
               //
               pRowCurr = pRow;
               pPixelsCurr += len;
               //S_MEMCPY(pRowCurr, pPixelsCurr, begin);

               //
               // Calculate the row offset
               //
               index = (index + 1) % 32;
            }

            //
            // Release the temporary buffer zone
            //
            S_FREE(pRow);
         }
         //SDL.UnlockSurface(surface);

         SDL.SaveBMP(pSurface, $@"{SCREENSHOT_PATH}\{S_GetCurrTime()}.bmp");

         pTex = SC_Texture(pSurface);
         Copy(pTex, 0);
         SF_Texture(pTex);

         wave.Index = (wave.Index + 1) % 32;
      }
   }

   public static void
   Init()
   {
      int         w, h;
      uint[]      arrDisplays;
      SDL.Rect    rect;

      //
      // Create window and renderers and catch errors
      //
      SDL_FAILED(
         "SDL.CreateWindowAndRenderer",
         SDL.CreateWindowAndRenderer(
            "SDLPal.NET",
            g_Config.video.iWindowWidth, g_Config.video.iWindowHeight,
            0, out g_pWindow, out g_pRenderer
         )
      );

      PalLog.Go($"Renderer backend: {g_pRenderer}");
      PalLog.Go("Trying to enable VRR");

      if (!SDL.SetRenderVSync(g_pRenderer, SDL.RendererVSyncAdaptive))
      {
         PalLog.Go("Failed, fallback to vsync");

         SDL.SetRenderVSync(g_pRenderer, 1);
      }

      S_SetNearestScale(false);

      //
      // Window size adjustment is allowed
      //
      SDL_FAILED(
         "SDL.SetWindowResizable",
         SDL.SetWindowResizable(g_pWindow, true)
      );

      SDL.SetWindowResizable(g_pWindow, true);

      if (g_Config.video.fFullScreen)
      {
         SDL.SetWindowFullscreen(g_pWindow, true);
         //SDL.GetWindowSize(g_pWindow, out w, out h);
         //VIDEO_WIDTH = w;
         //VIDEO_HEIGHT = h;
      }
#if DEBUG
      //
      // Convenient for debugging......
      //
      else
      {
         arrDisplays = SDL.GetDisplays(out int count);
         SDL.GetDisplayUsableBounds(arrDisplays[count - 1], out rect);
         SDL.SetWindowPosition(g_pWindow, rect.X + rect.W - VIDEO_WIDTH, 37);
         //VIDEO_WIDTH = rect.W / 2;
         //VIDEO_HEIGHT = rect.H / 2;
         //VIDEO_WIDTH = rect.W / 10 * 6;
         //VIDEO_HEIGHT = rect.H - 45;
         //VIDEO_HEIGHT = rect.H / 10 * 7;
         //SDL.SetWindowSize(g_pWindow, VIDEO_WIDTH, VIDEO_HEIGHT);
      }
#endif // DEBUG

      //
      // Set the default scaling mode when creating a new texture
      //
      //S_SetNearestScale(false);
      SDL.SetDefaultTextureScaleMode(g_pRenderer, g_Config.video._ScaleMode);

      //
      // Initialize the screen
      //
      g_pScreen = SC_Texture(VIDEO_WIDTH, VIDEO_HEIGHT, g_Formnat, 2);
      g_pScreenBak = SC_Texture(VIDEO_WIDTH, VIDEO_HEIGHT, g_Formnat, 2);
      g_pScreenData = SC_Texture(VIDEO_WIDTH, VIDEO_HEIGHT, g_Formnat, 2);
      g_pScreenText = SC_Texture(VIDEO_WIDTH, VIDEO_HEIGHT, g_Formnat, 2);
      g_pScreenFade  = SC_Texture(1, 1, g_Formnat, 2);

      //
      // Set the default background color of the renderer
      //
      SDL.SetRenderDrawColor(g_pRenderer, 0, 0, 0, 0xFF);
      //SDL.SetRenderDrawColor(g_pRenderer, 100, 149, 237, 0);

      //
      // Create a texture for fade-in and fade-out
      //
      g_pDrawFRect = SC_FRect(new SDL.FRect
      {
         X = 0,
         Y = 0,
         W = VIDEO_WIDTH,
         H = VIDEO_HEIGHT,
      });
      SDL.SetRenderTarget(g_pRenderer, g_pScreenFade);
      SDL.RenderFillRect(g_pRenderer, g_pDrawFRect);
      SDL.RenderClear(g_pRenderer);
      SDL.SetTextureAlphaMod(g_pScreenFade, 0x00);
      //Screen.FadeOut(0);

      SDL.GetRenderOutputSize(g_pRenderer, out w, out h);
      Resize(w, h);
   }

   public static void
   Free()
   /*++
     Purpose:

       Shutdown the video subsystem.

     Parameters:

       None.

     Return value:

       None.

   --*/
   {
      //
      // Release global memory
      //
      S_FREE(g_pDrawFRect);

      //
      // Destroy the SDL surface and texture
      //
      SF_Texture(ref g_pScreenFade);
      SF_Texture(ref g_pScreenText);
      SF_Texture(ref g_pScreenData);
      SF_Texture(ref g_pScreenBak);
      SF_Texture(ref g_pScreen);
      SF_Texture(ref g_pScreenActual);

      //
      // Destroy the SDL renderer and window
      //
      SDL.DestroyRenderer(g_pRenderer);
      SDL.DestroyWindow(g_pWindow);

      //
      // End the life cycle of SDL
      //
      SDL.Quit();
   }

   public static void
   Resize(
      int      width,
      int      height
   )
   /*++
     Purpose:

       This function is called when user resized the window.

     Parameters:

       [IN]  width - width of the window after resizing.

       [IN]  height - height of the window after resizing.

     Return value:

       None.

   --*/
   {
      int            w, h;
      double         ratio;
      SDL.FRect*     lpFRect;

      w = VIDEO_WIDTH;
      h = VIDEO_HEIGHT;

      lpFRect = (SDL.FRect*)g_pDrawFRect;
      lpFRect->X = 0;
      lpFRect->Y = 0;
      lpFRect->W = width;
      lpFRect->H = height;

      //
      // Check whether to keep the aspect ratio
      //
      if (g_Config.video.fKeepAspectRatio)
      {
         if (((float)width / height) > ((float)VIDEO_WIDTH / VIDEO_HEIGHT))
         {
            ratio = (double)w / h;

            lpFRect->W = (int)(height * ratio);

            lpFRect->X = (width - lpFRect->W) / 2;
         }
         else if (((float)height / width) > ((float)VIDEO_HEIGHT / VIDEO_WIDTH))
         {
            ratio = (double)h / w;

            lpFRect->H = (int)(width * ratio);

            lpFRect->Y = (height - lpFRect->H) / 2;
         }
      }

      //
      // Create texture for screen.
      //
      SF_Texture(ref g_pScreenActual);
      g_pScreenActual = SC_Texture((int)lpFRect->W, (int)lpFRect->H, g_Formnat, 2);

      //
      // Refresh the screen
      //
      Screen.Update();
   }
}
