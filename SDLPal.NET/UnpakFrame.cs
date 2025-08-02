using SDL3;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static PalCommon;
using static PalMap;
using static SafeSys;

public unsafe partial class PalUnpak
{
   private  const int
      VIDEO_W = 320,
      VIDEO_H = 200;

   public static byte
   CalcShadowColor(
      byte     bSourceColor
   ) => (byte)((bSourceColor & 0xF0) | ((bSourceColor & 0x0F) >> 1));

   public static void
   DrawRLE(
      nint     pRLE,
      nint     pSurface,
      Pos      pos,
      bool     fIsShadow = false
   )
   /*++
     Purpose:

       Blit an RLE-compressed bitmap to an SDL surface.
       NOTE: Assume the surface is already locked, and the surface is a 8-bit one.

     Parameters:

       [IN]  pRLE - pointer to the RLE-compressed bitmap to be decoded.

       [OUT] pSurface - pointer to the destination SDL surface.

       [IN]  pos - position of the destination area.

       [IN]  fIsShadow - flag to mention whether blit source color or just shadow.

     Return value:

       0 = success, -1 = error.

   --*/
   {
      uint     i, j, k, sx;
      int      x, y;
      uint     uiLen    = 0;
      uint     uiWidth  = 0;
      uint     uiHeight = 0;
      uint     uiSrcX   = 0;
      byte     T;
      int      dx = pos.X;
      int      dy = pos.Y;
      byte*    p;

      //
      // Check for NULL pointer.
      //
      if (pRLE == 0 || pSurface == 0)
      {
         return;
      }

      byte*             lpBitmapRLE = (byte*)pRLE;
      SDL.Surface*      lpDstSurface = (SDL.Surface*)pSurface;
      byte*             pPixels = (byte*)lpDstSurface->Pixels;

      //
      // Skip the 0x00000002 in the file header.
      //
      if (SwapEndian.LE32(*(ushort*)lpBitmapRLE) == 0x00000002)
      {
         lpBitmapRLE += 4;
      }

      //
      // Get the width and height of the bitmap.
      //
      uiWidth = (uint)GetRLEWidth(pRLE);
      uiHeight = (uint)GetRLEHeight(pRLE);

      //
      // Check whether bitmap intersects the surface.
      //
      if (uiWidth + dx <= 0 || dx >= lpDstSurface->Width ||
          uiHeight + dy <= 0 || dy >= lpDstSurface->Height)
      {
         return;
      }

      //
      // Calculate the total length of the bitmap.
      // The bitmap is 8-bpp, each pixel will use 1 byte.
      //
      uiLen = uiWidth * uiHeight;

      //
      // Start decoding and blitting the bitmap.
      //
      lpBitmapRLE += 4;
      for (i = 0; i < uiLen;)
      {
         T = *lpBitmapRLE++;
         if (S_B(T & 0x80) && (T <= 0x80 + uiWidth))
         {
            i = i + T - 0x80;
            uiSrcX = uiSrcX + T - 0x80;

            if (uiSrcX >= uiWidth)
            {
               uiSrcX -= uiWidth;
               dy++;
            }
         }
         else
         {
            //
            // Prepare coordinates.
            //
            j = 0;
            sx = uiSrcX;
            x = (int)(dx + uiSrcX);
            y = dy;

            //
            // Skip the points which are out of the surface.
            //
            if (y < 0)
            {
               j += (uint)(-y * uiWidth);
               y = 0;
            }
            else if (y >= lpDstSurface->Height)
            {
               return; // No more pixels needed, break out
            }

            while (j < T)
            {
               //
               // Skip the points which are out of the surface.
               //
               if (x < 0)
               {
                  j += (uint)-x;

                  if (j >= T)
                  {
                     break;
                  }

                  sx += (uint)-x;
                  x = 0;
               }
               else if (x >= lpDstSurface->Width)
               {
                  j += uiWidth - sx;
                  x -= (int)sx;
                  sx = 0;
                  y++;

                  if (y >= lpDstSurface->Height)
                  {
                     return; // No more pixels needed, break out
                  }

                  continue;
               }

               //
               // Put the pixels in row onto the surface
               //
               k = T - j;

               if (lpDstSurface->Width - x < k)
               {
                  k = (uint)(lpDstSurface->Width - x);
               }

               if (uiWidth - sx < k)
               {
                  k = uiWidth - sx;
               }

               sx += k;
               p = ((byte*)lpDstSurface->Pixels) + y * lpDstSurface->Pitch;

               if (fIsShadow)
               {
                  j += k;
                  for (; k != 0; k--)
                  {
                     p[x] = CalcShadowColor(p[x]);
                     x++;
                  }
               }
               else
               {
                  for (; k != 0; k--)
                  {
                     p[x] = lpBitmapRLE[j];
                     j++;
                     x++;
                  }
               }

               if (sx >= uiWidth)
               {
                  sx -= uiWidth;
                  x = (int)(x - uiWidth);
                  y++;

                  if (y >= lpDstSurface->Height)
                  {
                     return; // No more pixels needed, break out
                  }
               }
            }

            lpBitmapRLE += T;
            i += T;
            uiSrcX += T;

            while (uiSrcX >= uiWidth)
            {
               uiSrcX -= uiWidth;
               dy++;
            }
         }
      }
   }

   public static int
   DrawFBP(
      byte*    lpBitmapFBP,
      nint     surfacelpDest
   )
   /*++
      Purpose:

         Blit an uncompressed bitmap in FBP.MKF to an SDL surface.
         NOTE: Assume the surface is already locked, and the surface is a 8-bit 320x200 one.

      Parameters:

         [IN]  lpBitmapFBP - pointer to the RLE-compressed bitmap to be decoded.

         [OUT] lpDstSurface - pointer to the destination SDL surface.

      Return value:

         0 = success, -1 = error.

   --*/
   {
      int      x, y;
      byte*    p;

      SDL.Surface* lpDstSurface = (SDL.Surface*)surfacelpDest;

      if (lpBitmapFBP == null || lpDstSurface == null ||
         lpDstSurface->Width != VIDEO_H || lpDstSurface->Height != VIDEO_W)
      {
         return -1;
      }

      //
      // simply copy everything to the surface
      //
      for (y = 0; y < VIDEO_H; y++)
      {
         p = (byte*)(lpDstSurface->Pixels) + y * lpDstSurface->Width;
         for (x = 0; x < VIDEO_W; x++)
         {
            *(p++) = *(lpBitmapFBP++);
         }
      }

      return 0;
   }

   public static nint
   ReadRNGFrame(
      FileStream     fs,
      int            iRngNum,
      int            iFrameNum
   )
   /*++
     Purpose:

       Read a frame from a RNG animation.

     Parameters:

       [OUT] lpBuffer - pointer to the destination buffer.

       [IN]  uiBufferSize - size of the destination buffer.

       [IN]  uiRngNum - the number of the RNG animation in the MKF archive.

       [IN]  uiFrameNum - frame number in the RNG animation.

       [IN]  fpRngMKF - pointer to the fopen'ed MKF file.

     Return value:

       Integer value which indicates the size of the chunk.
       -1 if there are error in parameters.
       -2 if buffer size is not enough.

   --*/
   {
      int      iOffset     = 0;
      int      iSubOffset  = 0;
      int      iNextOffset = 0;
      int      iChunkCount = 0;
      int      iChunkLen   = 0;
      nint     buf;
      int      iBufferSize = ushort.MaxValue;

      if (fs == null)
      {
         S_FAILED(
            $@"Unpak.ReadMKFChunk",
            "The file pointer is empty"
         );
      }

      buf = S_MALLOC(iBufferSize);

      //
      // Get the total number of chunks.
      //
      iChunkCount = GetMKFChunkCount(fs);
      if (iRngNum >= iChunkCount)
      {
         goto failed;
      }

      //
      // Get the offset of the chunk.
      //
      C_fseek(fs, 4 * iRngNum, SeekOrigin.Begin);
      if (C_fread(fs, sizeof(uint), (nint)(&iOffset)) < 1)
      {
         goto failed;
      }
      if (C_fread(fs, sizeof(uint), (nint)(&iNextOffset)) < 1)
      {
         goto failed;
      }
      iOffset = SwapEndian.LE32(iOffset);
      iNextOffset = SwapEndian.LE32(iNextOffset);

      //
      // Get the length of the chunk.
      //
      iChunkLen = iNextOffset - iOffset;
      if (iChunkLen != 0)
      {
         C_fseek(fs, iOffset, SeekOrigin.Begin);
      }
      else
      {
         goto failed;
      }

      //
      // Get the number of sub chunks.
      //
      if (C_fread(fs, sizeof(uint), (nint)(&iChunkCount)) < 1)
      {
         goto failed;
      }
      iChunkCount = (SwapEndian.LE32(iChunkCount) - 4) / 4;
      if (iFrameNum >= iChunkCount)
      {
         goto failed;
      }

      //
      // Get the offset of the sub chunk.
      //
      C_fseek(fs, iOffset + 4 * iFrameNum, SeekOrigin.Begin);
      if (C_fread(fs, sizeof(uint), (nint)(&iSubOffset)) < 1)
      {
         goto failed;
      }
      if (C_fread(fs, sizeof(uint), (nint)(&iNextOffset)) < 1)
      {
         goto failed;
      }
      iSubOffset = SwapEndian.LE32(iSubOffset);
      iNextOffset = SwapEndian.LE32(iNextOffset);

      //
      // Get the length of the sub chunk.
      //
      iChunkLen = iNextOffset - iSubOffset;
      if (iChunkLen > iBufferSize)
      {
         goto failed;
      }

      if (iChunkLen != 0)
      {
         C_fseek(fs, iOffset + iSubOffset, SeekOrigin.Begin);
         if (C_fread(fs, iChunkLen, buf) > 0)
         {
            return buf;
         }
      }

   failed:
      return NULL;
   }

   public static int
   DrawRNG(
      nint     buf,
      int      length,
      nint     surfaceDest
   )
   /*++
     Purpose:

       Blit one frame in an RNG animation to an SDL surface.
       The surface should contain the last frame of the RNG, or blank if it's the first
       frame.

       NOTE: Assume the surface is already locked, and the surface is a 320x200 8-bit one.

     Parameters:

       [IN]  buf - Pointer to the RNG data.

       [IN]  length - Length of the RNG data.

       [OUT] surfaceDest - pointer to the destination SDL surface.

     Return value:

       0 = success, -1 = error.

   --*/
   {
      int               ptr      = 0;
      int               dst_ptr  = 0;
      ushort            wdata    = 0;
      int               x, y, i, n;
      byte              data;
      byte*             rng;
      SDL.Surface*      lpDstSurface;

      //
      // Check for invalid parameters.
      //
      if (surfaceDest == NULL || length < 0)
      {
         return -1;
      }

      rng = (byte*)buf;
      lpDstSurface = (SDL.Surface*)surfaceDest;

      //
      // Draw the frame to the surface.
      // FIXME: Dirty and ineffective code, needs to be cleaned up
      //
      while (ptr < length)
      {
         data = rng[ptr++];

         switch (data)
         {
         case 0x00:
         case 0x13:
            //
            // End
            //
            goto end;

         case 0x02:
            dst_ptr += 2;
            break;

         case 0x03:
            data = rng[ptr++];
            dst_ptr += (data + 1) * 2;
            break;

         case 0x04:
            wdata = (ushort)(rng[ptr] | (rng[ptr + 1] << 8));
            ptr += 2;
            dst_ptr = (int)(dst_ptr + ((uint)wdata + 1) * 2);
            break;

         case 0x0a:
            x = dst_ptr % 320;
            y = dst_ptr / 320;
            ((byte*)(lpDstSurface->Pixels))[y * lpDstSurface->Pitch + x] = rng[ptr++];
            if (++x >= 320)
            {
               x = 0;
               ++y;
            }
            ((byte*)(lpDstSurface->Pixels))[y * lpDstSurface->Pitch + x] = rng[ptr++];
            dst_ptr += 2;
            goto case_0x09;

         case 0x09:
         case_0x09:
            x = dst_ptr % 320;
            y = dst_ptr / 320;
            ((byte*)(lpDstSurface->Pixels))[y * lpDstSurface->Pitch + x] = rng[ptr++];
            if (++x >= 320)
            {
               x = 0;
               ++y;
            }
            ((byte*)(lpDstSurface->Pixels))[y * lpDstSurface->Pitch + x] = rng[ptr++];
            dst_ptr += 2;
            goto case_0x08;

         case 0x08:
         case_0x08:
            x = dst_ptr % 320;
            y = dst_ptr / 320;
            ((byte*)(lpDstSurface->Pixels))[y * lpDstSurface->Pitch + x] = rng[ptr++];
            if (++x >= 320)
            {
               x = 0;
               ++y;
            }
            ((byte*)(lpDstSurface->Pixels))[y * lpDstSurface->Pitch + x] = rng[ptr++];
            dst_ptr += 2;
            goto case_0x07;

         case 0x07:
         case_0x07:
            x = dst_ptr % 320;
            y = dst_ptr / 320;
            ((byte*)(lpDstSurface->Pixels))[y * lpDstSurface->Pitch + x] = rng[ptr++];
            if (++x >= 320)
            {
               x = 0;
               ++y;
            }
            ((byte*)(lpDstSurface->Pixels))[y * lpDstSurface->Pitch + x] = rng[ptr++];
            dst_ptr += 2;
            goto case_0x06;

         case 0x06:
         case_0x06:
            x = dst_ptr % 320;
            y = dst_ptr / 320;
            ((byte*)(lpDstSurface->Pixels))[y * lpDstSurface->Pitch + x] = rng[ptr++];
            if (++x >= 320)
            {
               x = 0;
               ++y;
            }
            ((byte*)(lpDstSurface->Pixels))[y * lpDstSurface->Pitch + x] = rng[ptr++];
            dst_ptr += 2;
            break;

         case 0x0b:
            data = *(rng + ptr++);
            for (i = 0; i <= data; i++)
            {
               x = dst_ptr % 320;
               y = dst_ptr / 320;
               ((byte*)(lpDstSurface->Pixels))[y * lpDstSurface->Pitch + x] = rng[ptr++];
               if (++x >= 320)
               {
                  x = 0;
                  ++y;
               }
               ((byte*)(lpDstSurface->Pixels))[y * lpDstSurface->Pitch + x] = rng[ptr++];
               dst_ptr += 2;
            }
            break;

         case 0x0c:
            wdata = (ushort)(rng[ptr] | (rng[ptr + 1] << 8));
            ptr += 2;
            for (i = 0; i <= wdata; i++)
            {
               x = dst_ptr % 320;
               y = dst_ptr / 320;
               ((byte*)(lpDstSurface->Pixels))[y * lpDstSurface->Pitch + x] = rng[ptr++];
               if (++x >= 320)
               {
                  x = 0;
                  ++y;
               }
               ((byte*)(lpDstSurface->Pixels))[y * lpDstSurface->Pitch + x] = rng[ptr++];
               dst_ptr += 2;
            }
            break;

         case 0x0d:
         case 0x0e:
         case 0x0f:
         case 0x10:
            for (i = 0; i < data - (0x0d - 2); i++)
            {
               x = dst_ptr % 320;
               y = dst_ptr / 320;
               ((byte*)(lpDstSurface->Pixels))[y * lpDstSurface->Pitch + x] = rng[ptr];
               if (++x >= 320)
               {
                  x = 0;
                  ++y;
               }
               ((byte*)(lpDstSurface->Pixels))[y * lpDstSurface->Pitch + x] = rng[ptr + 1];
               dst_ptr += 2;
            }
            ptr += 2;
            break;

         case 0x11:
    	    data = *(rng + ptr++);
            for (i = 0; i <= data; i++)
            {
               x = dst_ptr % 320;
               y = dst_ptr / 320;
               ((byte*)(lpDstSurface->Pixels))[y * lpDstSurface->Pitch + x] = rng[ptr];
               if (++x >= 320)
               {
                  x = 0;
                  ++y;
               }
               ((byte*)(lpDstSurface->Pixels))[y * lpDstSurface->Pitch + x] = rng[ptr + 1];
               dst_ptr += 2;
            }
            ptr += 2;
            break;

         case 0x12:
            n = (rng[ptr] | (rng[ptr + 1] << 8)) + 1;
            ptr += 2;
            for (i = 0; i < n; i++)
            {
               x = dst_ptr % 320;
               y = dst_ptr / 320;
               ((byte*)(lpDstSurface->Pixels))[y * lpDstSurface->Pitch + x] = rng[ptr];
               if (++x >= 320)
               {
                  x = 0;
                  ++y;
               }
               ((byte*)(lpDstSurface->Pixels))[y * lpDstSurface->Pitch + x] = rng[ptr + 1];
               dst_ptr += 2;
            }
            ptr += 2;
            break;
         }
      }

   end:
      return 0;
   }
}
