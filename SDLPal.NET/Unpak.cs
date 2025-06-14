using Newtonsoft.Json;
using SDL3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using static PalMap;
using static SafeSys;
using static SDL3.SDL;

public unsafe class PalUnpak
{
   public class PakFile
   {
      public static void
      GetSurfaceAll(
            byte[]      arrByte,
      out   nint[]      arrpSurface
      )
      {
         int      i;

         arrpSurface = new nint[GetPakChunkCount(arrByte)];

         for (i = 0; i < arrpSurface.Length; i++)
         {
            GetPakChunk(arrByte, i, out arrpSurface[i]);
         }
      }

      public static void
      FreeSurfaceAll(
         List<nint>     listpSurface
      )
      {
         SDL.Surface*      surface;

         foreach (nint pSurface in listpSurface)
         {
            surface = (SDL.Surface*)pSurface;

            Marshal.FreeHGlobal(surface->Pixels);
            Marshal.FreeHGlobal(pSurface);
         }
      }
   }

   public static int
   GetPakChunkCount(
      byte[]      arrData
   )
   {
      int*     ip;

      fixed (byte* bp = arrData)
      {
         ip = (int*)bp;

         return ip[0] / sizeof(int) - 1;
      }
   }

   public static void
   GetPakChunk(
         byte[]      arrData,
         int         iPakChunkID,
   out   nint        pSurfaceDest
   )
   {
      PakFile     pakdata;
      byte*       bp;
      short*      sp;
      int*        ip;
      int         w, h, len;
      nint        pPixel;

      pakdata = new PakFile();

      fixed (byte* bpo = arrData)
      {
         bp = bpo;
         ip = (int*)bpo;

         //
         // 定位到 iPakChunkID 指定的块
         //
         bp += ip[iPakChunkID];
         sp = (short*)bp;

         w = sp[0];
         h = sp[1];
         len = w * h;
         pPixel = S_MALLOC(len);

         //
         // 定位到像素数据
         //
         bp += sizeof(short) * 2;
         S_MEMCPY((nint)bp, pPixel, len);

         pSurfaceDest = SDL.CreateSurfaceFrom(w, h, SDL.PixelFormat.RGBA8888, pPixel, w * 4);

         //S_FREE(ref pPixel);
      }
   }

   public static T? Json2Obj<T>(string value)
   {
      return JsonConvert.DeserializeObject<T>(File.ReadAllText(value));
   }

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
      uint     uiLen = 0;
      uint     uiWidth = 0;
      uint     uiHeight = 0;
      uint     uiSrcX = 0;
      byte     T;
      int      dx = pos.X;
      int      dy = pos.Y;

      int      iRleOffset = 0, iPixelsOffset = 0;

      //
      // Check for NULL pointer.
      //
      if (pRLE == 0 || pSurface == 0)
      {
         return;
      }

      byte*             lpBitmapRLE = (byte*)pRLE;
      SDL.Surface*      lpDstSurface = (Surface*)pSurface;
      byte*             pPixels = (byte*)lpDstSurface->Pixels;

      //
      // Skip the 0x00000002 in the file header.
      //
      if (lpBitmapRLE[iRleOffset] == 0x02 && lpBitmapRLE[iRleOffset + 1] == 0x00 &&
          lpBitmapRLE[iRleOffset + 2] == 0x00 && lpBitmapRLE[iRleOffset + 3] == 0x00)
      {
         iRleOffset += 4;
      }

      //
      // Get the width and height of the bitmap.
      //
      uiWidth = (uint)(lpBitmapRLE[iRleOffset] | (lpBitmapRLE[iRleOffset + 1] << 8));
      uiHeight = (uint)(lpBitmapRLE[iRleOffset + 2] | (lpBitmapRLE[iRleOffset + 3] << 8));

      //
      // Check whether bitmap intersects the surface.
      //
      if (uiWidth + dx <= 0 || dx >= lpDstSurface->Width ||
          uiHeight + dy <= 0 || dy >= lpDstSurface->Height)
      {
         goto end;
      }

      //
      // Calculate the total length of the bitmap.
      // The bitmap is 8-bpp, each pixel will use 1 BYTE.
      //
      uiLen = uiWidth * uiHeight;

      //
      // Start decoding and blitting the bitmap.
      //
      iRleOffset += 4;
      for (i = 0; i < uiLen;)
      {
         T = lpBitmapRLE[iRleOffset++];
         if (((T & 0x80) != 0) && (T <= (0x80 + uiWidth)))
         {
            i += (uint)(T - 0x80);
            uiSrcX += (uint)(T - 0x80);

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
               goto end; // No more pixels needed, break out
            }

            while (j < T)
            {
               //
               // Skip the points which are out of the surface.
               //
               if (x < 0)
               {
                  j -= (uint)x;

                  if (j >= T) break;

                  sx -= (uint)x;
                  x = 0;
               }
               else if (x >= lpDstSurface->Width)
               {
                  j += uiWidth - sx;
                  x = (int)(x - sx);
                  sx = 0;
                  y++;

                  if (y >= lpDstSurface->Height)
                  {
                     goto end; // No more pixels needed, break out
                  }

                  continue;
               }

               //
               // Put the pixels in row onto the surface
               //
               k = T - j;

               if (lpDstSurface->Width - x < k) k = (uint)(lpDstSurface->Width - x);
               if (uiWidth - sx < k) k = uiWidth - sx;

               sx += k;
               iPixelsOffset = y * lpDstSurface->Width;

               if (fIsShadow)
               {
                  j += k;

                  for (; k != 0; k--)
                  {
                     pPixels[iPixelsOffset + x] = CalcShadowColor(pPixels[iPixelsOffset + x]);
                     x++;
                  }
               }
               else
               {
                  for (; k != 0; k--)
                  {
                     pPixels[iPixelsOffset + x] = lpBitmapRLE[iRleOffset + j];
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
                     goto end; // No more pixels needed, break out
                  }
               }
            }

            iRleOffset += T;
            i += T;
            uiSrcX += T;

            while (uiSrcX >= uiWidth)
            {
               uiSrcX -= uiWidth;
               dy++;
            }
         }
      }

   end:
      //
      // Success
      //
      return;
   }

   public static void
   DrawRLE1(
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
      int      i, j, k, sx;
      int      x, y;
      int      iLen = 0;
      int      iWidth = 0;
      int      iHeight = 0;
      int      iSrcX = 0;
      byte     T;
      int      dx = pos.X;
      int      dy = pos.Y;
      byte*    p;

      byte*             lpBitmapRLE    = (byte*)pRLE;
      SDL.Surface*      lpDstSurface   = (SDL.Surface*)pSurface;

      //
      // Check for NULL pointer.
      //
      if (pRLE == 0 || pSurface == 0)
      {
         return;
      }

      //
      // Skip the 0x00000002 in the file header.
      //
      if (lpBitmapRLE[0] == 0x02 && lpBitmapRLE[1] == 0x00 &&
         lpBitmapRLE[2] == 0x00 && lpBitmapRLE[3] == 0x00)
      {
         lpBitmapRLE += 4;
      }

      //
      // Get the width and height of the bitmap.
      //
      iWidth = lpBitmapRLE[0] | (lpBitmapRLE[1] << 8);
      iHeight = lpBitmapRLE[2] | (lpBitmapRLE[3] << 8);

      //
      // Check whether bitmap intersects the surface.
      //
      if (iWidth + dx <= 0 || dx >= lpDstSurface->Width ||
         iHeight + dy <= 0 || dy >= lpDstSurface->Height)
      {
         goto end;
      }

      //
      // Calculate the total length of the bitmap.
      // The bitmap is 8-bpp, each pixel will use 1 byte.
      //
      iLen = iWidth * iHeight;

      //
      // Start decoding and blitting the bitmap.
      //
      lpBitmapRLE += 4;

      for (i = 0; i < iLen;)
      {
         T = *lpBitmapRLE++;

         if ((T & 0x80) != 0 &&
            T <= (0x80 + iWidth))
         {
            i += T - 0x80;
            iSrcX += T - 0x80;
            if (iSrcX >= iWidth)
            {
               iSrcX -= iWidth;
               dy++;
            }
         }
         else
         {
            //
            // Prepare coordinates.
            //
            j = 0;
            sx = iSrcX;
            x = dx + iSrcX;
            y = dy;

            //
            // Skip the points which are out of the surface.
            //
            if (y < 0)
            {
               j += -y * iWidth;
               y = 0;
            }
            else if (y >= lpDstSurface->Height)
            {
               goto end; // No more pixels needed, break out
            }

            while (j < T)
            {
               //
               // Skip the points which are out of the surface.
               //
               if (x < 0)
               {
                  j += -x;

                  if (j >= T) break;

                  sx += -x;
                  x = 0;
               }
               else if (x >= lpDstSurface->Width)
               {
                  j += iWidth - sx;
                  x -= sx;
                  sx = 0;
                  y++;

                  if (y >= lpDstSurface->Height)
                  {
                     goto end; // No more pixels needed, break out
                  }

                  continue;
               }

               //
               // Put the pixels in row onto the surface
               //
               k = T - j;

               if (lpDstSurface->Width - x < k) k = lpDstSurface->Width - x;
               if (iWidth - sx < k) k = iWidth - sx;

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

               if (sx >= iWidth)
               {
                  sx -= iWidth;
                  x -= iWidth;
                  y++;

                  if (y >= lpDstSurface->Height)
                  {
                     goto end; // No more pixels needed, break out
                  }
               }
            }

            lpBitmapRLE += T;
            i += T;
            iSrcX += T;

            while (iSrcX >= iWidth)
            {
               iSrcX -= iWidth;
               dy++;
            }
         }
      }

   end:
      //
      // Success
      //
      return;
   }

   public static byte
   CalcShadowColor(
      byte     bSourceColor
   )
   {
      return (byte)((bSourceColor & 0xF0) | ((bSourceColor & 0x0F) >> 1));
   }

   public static nint
   SpriteGetFrame(
      nint     pSprite,
      int      FrameID
   )
   /*++
     Purpose:

       Get the pointer to the specified frame from a sprite.

     Parameters:

       [IN]  lpSprite - pointer to the sprite.

       [IN]  iFrameNum - number of the frame.

     Return value:

       Pointer to the specified frame. NULL if the frame does not exist.

   --*/
   {
      byte*    lpSprite = (byte*)pSprite;

      int imagecount, offset;

      if (pSprite == 0)
      {
         return 0;
      }

      //
      // Hack for broken sprites like the Bloody-Mouth Bug
      //
      //   imagecount = (lpSprite[0] | (lpSprite[1] << 8)) - 1;
      imagecount = (lpSprite[0] | (lpSprite[1] << 8));

      if (FrameID < 0 || FrameID >= imagecount)
      {
         //
         // The frame does not exist
         //
         return 0;
      }

      //
      // Get the offset of the frame
      //
      FrameID <<= 1;
      offset = ((lpSprite[FrameID] | (lpSprite[FrameID + 1] << 8)) << 1);
      if (offset == 0x18444) offset = (ushort)offset;
      return (nint)(&lpSprite[offset]);
   }

   public static int
   SpriteGetFrameCount(
      nint     pSprite
   )
   /*++
     Purpose:

       Get the total number of frames of a sprite.

     Parameters:

       [IN]  pSprite - pointer to the sprite.

     Return value:

       Number of frames of the sprite.

   --*/
   {
      byte*    lpSprite;

      if (pSprite == 0) return 0;

      lpSprite = (byte*)pSprite;

      return (ushort)((lpSprite[0] | (lpSprite[1] << 8)) - 1);
   }

   public static int
   GetRLEWidth(
      nint     pRLE
   )
   /*++
     Purpose:

       Get the width of an RLE-compressed bitmap.

     Parameters:

       [IN]  pRLE - pointer to an RLE-compressed bitmap.

     Return value:

       Integer value which indicates the height of the bitmap.

   --*/
   {
      byte*    pBitmapRLE;

      if (pRLE == 0)
      {
         return 0;
      }

      pBitmapRLE = (byte*)pRLE;

      //
      // Skip the 0x00000002 in the file header.
      //
      if (pBitmapRLE[0] == 0x02 && pBitmapRLE[1] == 0x00 &&
         pBitmapRLE[2] == 0x00 && pBitmapRLE[3] == 0x00)
      {
         pBitmapRLE += 4;
      }

      //
      // Return the width of the bitmap.
      //
      return pBitmapRLE[0] | (pBitmapRLE[1] << 8);
   }

   public static int
   GetRLEHeight(
      nint     pRLE
   )
   /*++
     Purpose:
   
       Get the height of an RLE-compressed bitmap.

     Parameters:

       [IN]  pRLE - pointer to an RLE-compressed bitmap.

     Return value:

       Integer value which indicates the height of the bitmap.

   --*/
   {
      byte*    pBitmapRLE;

      if (pRLE == 0)
      {
         return 0;
      }

      pBitmapRLE = (byte*)pRLE;

      //
      // Skip the 0x00000002 in the file header.
      //
      if (pBitmapRLE[0] == 0x02 && pBitmapRLE[1] == 0x00 &&
         pBitmapRLE[2] == 0x00 && pBitmapRLE[3] == 0x00)
      {
         pBitmapRLE += 4;
      }

      //
      // Return the width of the bitmap.
      //
      return pBitmapRLE[2] | (pBitmapRLE[3] << 8);
   }
}
