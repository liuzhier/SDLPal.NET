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

   public static int
   GetSpriteFrameCount(
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

      return (short)((lpSprite[0] | (lpSprite[1] << 8)) - 1);
   }

   public static int
   GetSpriteFrameSize(
      nint     pBuffer,
      int      iChunkNum,
      int      iSMKFSize
   )
   /*++
     Purpose:

       Get the size of a chunk in an SMKF archive.

     Parameters:

       [IN]  pBuffer - pointer to the destination buffer.

       [IN]  iChunkNum - the number of the chunk in the SMKF archive.

       [IN]  iChunkNum - the size of SMKF archive.

     Return value:

       Integer value which indicates the size of the chunk.
       -1 if the chunk does not exist.

   --*/
   {
      int      iOffset, iNextOffset, iChunkCount, size;
      byte*    lpSprite;

      lpSprite = (byte*)pBuffer;
      iOffset = 0;
      iNextOffset = 0;

      //
      // Check whether the wChunkNum is out of range..
      //
      iChunkCount = GetSpriteFrameCount(pBuffer);

      if (iChunkNum >= iChunkCount)
      {
         return -1;
      }

      //
      // Get the offset of the specified chunk and the next chunk.
      //
      iOffset     = SwapEndian.LE16(((ushort*)pBuffer)[iChunkNum]) << 1;
      iNextOffset = SwapEndian.LE16(((ushort*)pBuffer)[iChunkNum + 1]) << 1;

      if (!S_B(iOffset))
      {
         return -1;
      }

      if (iOffset == 0x18444)
      {
         iOffset = (ushort)iOffset;
      }

      if (iNextOffset == 0x18444)
      {
         iNextOffset = (ushort)iNextOffset;
      }

      if (!S_B(iNextOffset) || iChunkNum == iChunkCount
         || iNextOffset < iOffset || iNextOffset > iSMKFSize)
      {
         iNextOffset = iSMKFSize;
      }

      size = (ushort)(iNextOffset - iOffset);

      if (size > iSMKFSize)
      {
         return -1;
      }

      //
      // Return the length of the chunk.
      //
      return size;
   }

   public static nint
   GetSpriteFrame(
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

   public static (nint, int)
   GetMKFChunk(
      nint     pMKF,
      int      iChunkID
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
      int      iChunkCount, iChunkLen, iOffset, iOffsetNext;
      nint     pDest;
      uint*    pChunk;

      if (pMKF == NULL)
      {
         S_FAILED(
            $@"Unpak.GetMKFChunk",
            "The MKF pointer is empty"
         );
      }

      pChunk = (uint*)pMKF;

      //
      // Get the length of the chunk.
      //
      iChunkCount = (int)SwapEndian.LE32(pChunk[0]) / sizeof(int) - 1;
      pDest = NULL;
      iChunkLen = 0;

      if (iChunkID >= 0 && iChunkID <= iChunkCount)
      {
         iOffset = (int)SwapEndian.LE32(pChunk[iChunkID]);
         iOffsetNext = (int)SwapEndian.LE32(pChunk[iChunkID + 1]);

         pDest = pMKF + iOffset;
         iChunkLen = iOffsetNext - iOffset;
      }

      return (pDest, iChunkLen);
   }
}
