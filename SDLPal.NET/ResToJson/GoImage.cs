using Newtonsoft.Json;
using SDL3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using static PalCommon;
using static PalVideo;
using static SafeSys;
using static System.Runtime.InteropServices.JavaScript.JSType;

public unsafe class GoImage
{
   public static void
   Init()
   {
      S_MKDIR(IMG_PATH);
      S_MKDIR(MAP_MAIN_PATH);
   }

   public static void
   Free()
   {
      PalMap.Free();
   }

   public static void
   GoCompressedData(
      string      pathMKF,
      string      pathOutput,
      string      fPrefix        = "",
      bool        fIsCompressed  = false
   )
   {
      int            i, j, countChunk, sizeChunk, sizeSprite;
      bool           fIsMap, fIsTile, fIsPat;
      string         path;
      nint           pChunk, pSprite;
      FileStream     fsIn, fsOut;

      path = $@"{PAL_WIN_PATH}\{pathMKF}";
      fsIn = C_fopen(path);
      countChunk = PalUnpak.GetMKFChunkCount(fsIn);
      fIsTile = (pathMKF == "GOP.MKF");
      fIsMap = (pathMKF == "MAP.MKF");
      fIsPat = (pathMKF == "PAT.MKF" || pathMKF == "PALETTE.MKF");

      S_MKDIR(pathOutput);

      for (i = 0; i < countChunk; i++)
      {
         (pChunk, sizeChunk) = PalUnpak.ReadMKFChunk(fsIn, i);

         if (sizeChunk == 0)
         {
            continue;
         }

         if (fIsPat)
         {
            i = countChunk;
            fsOut = C_fopen($@"{pathOutput}\PALETTE", FileMode.Create);
         }
         else
         {
            fsOut = C_fopen($@"{pathOutput}\{fPrefix}{i:D4}", FileMode.Create);
         }

         if (fIsCompressed)
         {
            (pSprite, sizeSprite) = PalUnpak.YJ2_Decompress(pChunk);
            C_fwrite(fsOut, pSprite, sizeSprite);

            if (fIsMap)
            {
               C_fseek(fsOut, sizeSprite, SeekOrigin.Begin);
               C_fwrite(fsOut, pSprite, sizeSprite);
            }
         }
         else
         {
            if (fIsTile)
            {
               C_fwrite(fsOut, (nint)(&sizeChunk), sizeof(uint));
               C_fseek(fsOut, sizeof(uint), SeekOrigin.Begin);
            }

            if (fIsPat)
            {
               j = sizeof(uint) * 2;
               C_fwrite(fsOut, (nint)(&j), sizeof(uint));
               C_fseek(fsOut, sizeof(uint), SeekOrigin.Begin);

               j += sizeChunk;
               C_fwrite(fsOut, (nint)(&j), sizeof(uint));
               C_fseek(fsOut, sizeof(uint) * 2, SeekOrigin.Begin);
            }

            C_fwrite(fsOut, pChunk, sizeChunk);

            pSprite = NULL;
         }

         C_fclose(fsOut);
         S_FREE(ref pSprite);
         S_FREE(ref pChunk);
      }

      C_fclose(fsIn);
   }

   public static void
   GoUncompressed(
      string      pathMKF,
      string      pathOutput
   )
   {
      int            i, j, k, w, h, countChunk, size;
      bool           fIsFace;
      string         path, pathDir;
      nint           pBuf, pBufSprite, pSurface;
      FileStream     fsIn;

      path = $@"{PAL_WIN_PATH}\{pathMKF}";
      fsIn = C_fopen(path);
      countChunk = PalUnpak.GetMKFChunkCount(fsIn);

      S_MKDIR(pathOutput);

      fIsFace = (pathMKF == "RGM.MKF");

      j = 1;
      pathDir = $@"{pathOutput}\{j}\";

      for (i = 0, k = 0; i < countChunk; i++, k++)
      {
         (pBuf, size) = PalUnpak.ReadMKFChunk(fsIn, i);

         if (size == 0)
         {
            continue;
         }

         size -= 4;
         pBufSprite = pBuf + 4;

         w = PalUnpak.GetRLEWidth(pBufSprite);
         h = PalUnpak.GetRLEHeight(pBufSprite);

         if (w <= 0 || h <= 0 || w > 320 || h > 200)
         {
            continue;
         }

         pSurface = SC_Surface(w, h, SDL.PixelFormat.Index8);
         SDL.SetSurfacePalette(pSurface, GoData.listPaletteBuf[0].Item1);
         SDL.SetSurfaceColorKey(pSurface, true, 0xFF);
         SDL.FillSurfaceRect(pSurface, NULL, 0xFF);
         PalUnpak.DrawRLE(pBufSprite, pSurface, POS_ZERO);

         pBufSprite = NULL;
         S_FREE(pBuf);

         if (fIsFace)
         {
            if (i >= GoScript.arrFaceIndex[j])
            {
               k = 0;
               pathDir = $@"{pathOutput}\{j}\";
               S_MKDIR(pathDir);
               j++;
            }

            path = $@"{pathDir}\{k}";
         }
         else
         {
            path = $@"{pathOutput}\{i:D5}";
         }

         Image.SavePNG(pSurface, $@"{path}.png");

         SF_Surface(pSurface);
      }

      C_fclose(fsIn);
   }

   public static void
   GoCompressed(
      string      pathMKF,
      string      pathOutput
   )
   {
      int            i, j, w, h, countChunk, sizeChunk, sizeSprite, sizeFrame;
      string         path;
      nint           pChunk, pSprite, pSurface, pFrame;
      FileStream     fsIn;

      path = $@"{PAL_WIN_PATH}\{pathMKF}";
      fsIn = C_fopen(path);
      countChunk = PalUnpak.GetMKFChunkCount(fsIn);

      S_MKDIR(pathOutput);

      for (i = 0; i < countChunk; i++)
      {
         (pChunk, sizeChunk) = PalUnpak.ReadMKFChunk(fsIn, i);

         if (sizeChunk == 0)
         {
            continue;
         }

         (pSprite, sizeSprite) = PalUnpak.YJ2_Decompress(pChunk);

         path = $@"{pathOutput}\{i}";
         S_MKDIR(path);

         for (j = 0; ; j++)
         {
            sizeFrame = PalUnpak.GetSpriteFrameSize(pSprite, j, sizeSprite);

            if (sizeFrame <= 0)
            {
               break;
            }

            pFrame = PalUnpak.GetSpriteFrame(pSprite, j);

            w = PalUnpak.GetRLEWidth(pFrame);
            h = PalUnpak.GetRLEHeight(pFrame);

            if (w <= 0 || h <= 0 || w > 320 || h > 200)
            {
               continue;
            }

            pSurface = SC_Surface(w, h, SDL.PixelFormat.Index8);
            SDL.SetSurfacePalette(pSurface, GoData.listPaletteBuf[0].Item1);
            SDL.SetSurfaceColorKey(pSurface, true, 0xFF);

            SDL.FillSurfaceRect(pSurface, NULL, 0xFF);
            PalUnpak.DrawRLE(pFrame, pSurface, POS_ZERO);
            Image.SavePNG(pSurface, $@"{path}\{j}.png");

            SF_Surface(pSurface);
         }

         pFrame = NULL;
         S_FREE(pSprite);
         S_FREE(pChunk);
      }

      C_fclose(fsIn);
   }

   public static void
   GoItem() => GoUncompressed("BALL.MKF", IMG_ITEM_PATH);

   public static void
   GoFace() => GoUncompressed("RGM.MKF", IMG_FACE_PATH);

   public static void
   GoChar() => GoCompressed("MGO.MKF", IMG_CHAR_PATH);

   public static void
   GoTile() => GoCompressedData("GOP.MKF", TILE_PATH, "TILE");

   public static void
   GoMap() => GoCompressedData("MAP.MKF", MAP_PATH, "MAP", true);

   public static void
   GoPalette() => GoCompressedData("PAT.MKF", MAP_MAIN_PATH);

   static   int[]    RngPaletteID => [0, 0, 0, 2, 0, 0, 3, 0, 0, 0, 0, 0];

   public static void
   GoRNG()
   {
      int            i, j, w, h, countChunk, sizeChunk, sizePak, sizeSprite, sizeFrame;
      string         path;
      nint           pChunk, pPak, pSprite, pSurface, pFrame;
      nint           rng, buf;
      FileStream     fsIn;
      int            iBufferSize = ushort.MaxValue;

      path = $@"{PAL_WIN_PATH}\RNG.MKF";
      fsIn = C_fopen(path);
      countChunk = PalUnpak.GetMKFChunkCount(fsIn);

      pSurface = SC_Surface(320, 200, SDL.PixelFormat.Index8);
      rng = S_MALLOC(iBufferSize);

      S_MKDIR(IMG_RNG_PATH);

      for (i = 0; i < countChunk; i++)
      {
         (pChunk, sizeChunk) = PalUnpak.ReadMKFChunk(fsIn, i);

         if (sizeChunk == 0)
         {
            continue;
         }

         path = $@"{IMG_RNG_PATH}\{i}";
         S_MKDIR(path);

         S_MEMSET(rng, 0, iBufferSize);
         SDL.SetSurfacePalette(pSurface, GoData.listPaletteBuf[RngPaletteID[i]].Item1);
         SDL.SetSurfaceColorKey(pSurface, true, 0xFF);
         SDL.FillSurfaceRect(pSurface, NULL, 0xFF);

         for (j = 0; ; j++)
         {
            //
            // Read, decompress and render the frame
            //
            buf = PalUnpak.ReadRNGFrame(fsIn, i, j);
            if (buf == NULL)
            {
               //
               // Failed to get the frame, don't go further
               //
               break;
            }

            (pSprite, sizeSprite) = PalUnpak.YJ2_Decompress(buf);

            if (sizeSprite <= 0)
            {
               break;
            }

            //
            // Read, decompress and render the frame
            //
            PalUnpak.DrawRNG(pSprite, sizeSprite, pSurface);

            Image.SavePNG(pSurface, $@"{path}\{j}.png");

            S_FREE(pSprite);
            S_FREE(buf);
         }

         pFrame = NULL;
         S_FREE(pChunk);
      }

      S_FREE(rng);
      SF_Surface(pSurface);
      C_fclose(fsIn);
   }

   public static void
   Go()
   {
      Init();

      GoItem();
      GoFace();
      GoChar();
      GoTile();
      GoMap();
      GoPalette();
      S_FileCopy(CFG_PATH, MAP_EDITOR_NAME, MAP_MAIN_PATH);
      GoRNG();

      Free();
   }
}
