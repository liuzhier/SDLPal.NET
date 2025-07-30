using Newtonsoft.Json;
using SDL3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

using static PalMap;
using static PalCommon;
using static SafeSys;

public unsafe partial class PalUnpak
{
   public static T?
   Json2Obj<T>(
      string      value
   )
   {
      return JsonConvert.DeserializeObject<T>(File.ReadAllText(value));
   }

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
      SDL.Surface*      lpDstSurface = (SDL.Surface*)pSurface;
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
   
   public static int
   GetMKFChunkOffset(
      FileStream     fs,
      int            iChunkID
   )
   {
      int      iOffset;

      C_fseek(fs, iChunkID * sizeof(int), SeekOrigin.Begin);

      C_fread(fs, sizeof(int), (nint)(&iOffset));

      return iOffset;
   }

   public static int
   GetMKFChunkCount(
      FileStream     fs
   )
   /*++
     Purpose:

       Get the number of chunks in an MKF archive.

     Parameters:

       [IN]  fp - pointer to an fopen'ed MKF file.

     Return value:

       Integer value which indicates the number of chunks in the specified MKF file.

   --*/
   {
      return (GetMKFChunkOffset(fs, 0) / sizeof(int)) - 1;
   }
   

   public static int
   GetMKFChunkSize(
      FileStream     fs,
      int            iChunkID
   )
   {
      int      iChunkCount, iOffset, iOffsetNext;

      iChunkCount = GetMKFChunkCount(fs);

      if (iChunkID >= iChunkCount)
      {
         S_FAILED(
            "Unpak.GetMKFChunkSize",
            $"The MKF file does not have sub-block #{iChunkID}, and the maximum sub-block number is #{iChunkCount}!"
         );
      }

      iOffset = GetMKFChunkOffset(fs, iChunkID);
      iOffsetNext = GetMKFChunkOffset(fs, iChunkID + 1);

      return iOffsetNext - iOffset;
   }

   public static (nint, int)
   ReadMKFChunk(
      FileStream     fs,
      int            iChunkID
   )
   /*++
     Purpose:

       Read a chunk from an MKF archive into pDest.

     Parameters:

       [IN]  fs - pointer to the fopen'ed MKF file.

       [IN]  iChunkNum - the number of the chunk in the MKF archive to read.

     Return value:

       None.

   --*/
   {
      int      iChunkLen;
      nint     pDest;

      if (fs == null)
      {
         S_FAILED(
            $@"Unpak.ReadMKFChunk",
            "The file pointer is empty"
         );
      }

      //
      // Get the length of the chunk.
      //
      iChunkLen = GetMKFChunkSize(fs, iChunkID);
      pDest = NULL;

      if (iChunkLen != 0)
      {
         pDest = S_MALLOC(iChunkLen);

         C_fseek(fs, GetMKFChunkOffset(fs, iChunkID), SeekOrigin.Begin);
         C_fread(fs, iChunkLen, pDest);
      }

      return (pDest, iChunkLen);
   }
}
