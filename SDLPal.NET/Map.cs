using SDL3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

using static PalCommon;
using static PalConfig;
using static PalMap;
using static PalVideo;
using static SafeSys;

public unsafe class PalMap
{
   public   const    int
      MAP_WIDTH   = 2064,     // Width of the map in pixels
      MAP_HEIGHT  = 2055,     // Height of the map in pixels
      MAP_RATIO   = 2;

   public   static   readonly int
      W32   = S_Ratio(32),
      W16   = S_Ratio(16),
      H16   = S_Ratio(16),
      H15   = S_Ratio(15),
      H8    = S_Ratio(8);

   public   static   readonly int
      NBX = (int)Math.Ceiling((double)Viewport.Rect.W / W32),
      NBY = (int)Math.Ceiling((double)Viewport.Rect.H / H16);

   //
   // The width of the horizontal slice of Tile at different y-coordinates
   //
   public   static   nint     pSegmentTable;
   public   static   byte
   GetSegmentTable(
      int      y,
      int      x,
      bool     applyRatio
   )
   {
      byte*    ptr;

      if (applyRatio)
      {
         ptr = (byte*)pSegmentTable;

         return ptr[y * W32 + x];
      }
      else
      {
         return SegmentTable[y * 32 + x];
      }
   }
   public   static   byte[]
   SegmentTable = new byte[16 * 32]
   {
      2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, // 0
      2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, // 1
      2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, // 2
      2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, // 3
      2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, // 4
      2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, // 5
      2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, // 6
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 7
      1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, // 8
      1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, // 9
      1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, // 10
      1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, // 11
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, // 12
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, // 13
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, // 14
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, // 15
   };

   public   static   int               iMapID;
   public   static   TileData[,,]      arrTileData = new TileData[128, 64, 2];
   public   static   nint              pTileSprite, pPalette, pTileFRect, pTileRect;
   public   static   nint              g_pMapTile, g_pMapTile2;
   public   static   nint[]            arrTileTex;

   public class TileData
   {
      public   short    LowID, HighID;
      public   byte     LowLayer, HighLayer;
      public   bool     IsObstacle;
   }

   [StructLayout(LayoutKind.Sequential, Pack = 1)]
   public struct Palette
   {
      public   byte     R, G, B;
   }

   public class Pos
   {
      public   int      X, Y;

      public Pos() { }
      public Pos(
         int      x,
         int      y
      )
      {
         X = x;
         Y = y;
      }

      public Pos(
         Pos      pos
      )
      {
         X = pos.X;
         Y = pos.Y;
      }

      public Pos
      Clone()
      {
         return new Pos(this);
      }

      public static Pos
      FromBlockPos(
         BlockPos    bpos,
         bool        applyRatio = false
      )
      {
         return FromBlockPos(bpos.X, bpos.Y, bpos.H, applyRatio);
      }

      public static Pos
      FromBlockPos(
         int      x,
         int      y,
         int      h,
         bool     applyRatio = false
      )
      {
         int      w32, w16, h16, h8;

         w32 = applyRatio ? W32 : 32;
         w16 = applyRatio ? W16 : 16;
         h16 = applyRatio ? H16 : 16;
         h8 = applyRatio ? H8 : 8;

         return new Pos{
            X = x * w32 + h * w16,
            Y = y * h16 + h * h8,
         };
      }
   }

   public class BlockPos
   {
      public   byte     X;
      public   byte     Y;
      public   byte     H;

      public BlockPos() { }
      public BlockPos(
         int      x,
         int      y,
         int      h
      )
      {
         X = (byte)x;
         Y = (byte)y;
         H = (byte)h;
      }

      public static BlockPos
      FromPos(
         Pos      pos,
         bool     applyRatio = false
      )
      {
         return FromPos(pos.X, pos.Y, applyRatio);
      }

      public static BlockPos
      FromPos(
         int      X,
         int      Y,
         bool     applyRatio = false
      )
      {
         short    Segment, SegmentX, SegmentY;
         byte     x, y, h;
         int      w32, w16, h16, h8;

         w32 = applyRatio ? W32 : 32;
         w16 = applyRatio ? W16 : 16;
         h16 = applyRatio ? H16 : 16;
         h8 = applyRatio ? H8 : 8;

         h = (byte)(((X % W32) != 0) ? 1 : 0);
         x = (byte)(X / 32);
         y = (byte)(Y / 16);

         if (X < 0 || Y < 0)
         {
            x = 0xFF;
            y = 0xFF;
            h = 1;

            goto end;
         }

         SegmentX = (short)(X % w32);
         SegmentY = (short)(Y % h16);

         Segment = GetSegmentTable(SegmentY, SegmentX, applyRatio);

         x = (byte)(X / w32);
         y = (byte)(Y / h16);
         h = 0;

         goto end;

#if false
         if (Segment != 0)
         {
            if ((X - w16) < 0 || (Y - h8) < 0)
            {
               x = 0xFF;
               y = 0xFF;
               h = 1;

               goto end;
            }

            SegmentX = (short)((X - w16) % w32);
            SegmentY = (short)((Y - h8) % h16);

            Segment = GetSegmentTable(SegmentY, SegmentX, applyRatio);

            x = (byte)((X - w16) / w32);
            y = (byte)((Y - h8) / h16);
            h = 1;
         }

         switch (Segment)
         {
            case 1:
               {
                  if (h != 0)
                  {
                     y += 1;
                     h = 0;
                  }
                  else
                  {
                     x -= 1;
                     h = 1;
                  }
               }
               break;

            case 2:
               {
                  if (h != 0)
                  {
                     h = 0;
                  }
                  else
                  {
                     x -= 1;
                     y -= 1;
                     h = 1;
                  }
               }
               break;

            case 3:
               {
                  if (h != 0)
                  {
                     x += 1;
                     h = 0;
                  }
                  else
                  {
                     y -= 1;
                     h = 1;
                  }
               }
               break;

            case 4:
               {
                  if (h != 0)
                  {
                     x += 1;
                     y += 1;
                     h = 0;
                  }
                  else
                  {
                     h = 1;
                  }
               }
               break;

            case 0:
            default:
               {

               }
               break;
         }
#endif // false

      end:
         return new BlockPos(x, y, h);
      }
   }

   public static void
   Load(
      int      iMapID
   )
   /*++
     Purpose:

       Load the specified map from the MKF file, as well as the tile bitmaps.

     Parameters:

       [IN]  iMapID - Number of the map to load.

     Return value:

       None.

   --*/
   {
      string            path;
      byte[]            arrData;
      int               y, x, h, iOffset, i;
      TileData          _TileData;
      nint              pSurf, pSurfActual, pTex;
      SDL.Surface*      lpSurfActual;

      iOffset = 0;

      //
      // Read the tile data
      //
      path = $@"{MAP_PATH}\map{iMapID:D4}";
      S_FILE_EXISTS(path);
      arrData = File.ReadAllBytes(path);

      for (y = 0; y < arrTileData.GetLength(0); y++)
      {
         for (x = 0; x < arrTileData.GetLength(1); x++)
         {
            for (h = 0; h < arrTileData.GetLength(2); h++)
            {
               _TileData = new TileData();

               _TileData.IsObstacle = (arrData[iOffset + 1] & 0x20) != 0;
               _TileData.LowID      = (short)(arrData[iOffset++] | (((arrData[iOffset] & 0x10) >> 4) << 8));
               _TileData.LowLayer   = (byte)(arrData[iOffset++] & 0xF);
               _TileData.HighID     = (short)((arrData[iOffset++] | (((arrData[iOffset] & 0x10) >> 4) << 8)) - 1);
               _TileData.HighLayer  = (byte)(arrData[iOffset++] & 0xF);

               arrTileData[y, x, h] = _TileData;
            }
         }
      }

      //
      // Read the tile spirit
      //
      path = $@"{TILE_PATH}\GOP{iMapID:D4}";
      S_FILE_EXISTS(path);
      arrData = File.ReadAllBytes(path);

      using (FileStream fs = File.Open(path, FileMode.Open))
      {
         arrData = new byte[fs.Length - sizeof(int)];

         //
         // Skip the header data
         //
         fs.Seek(sizeof(int), SeekOrigin.Begin);

         //
         // Begin reading the data
         //
         fs.Read(arrData, 0, arrData.Length);
      }

      //
      // Copy the array memory to the spirit pointer
      //
      S_ARRCPY(arrData, out pTileSprite);

      arrTileTex = new nint[PalUnpak.SpriteGetFrameCount(pTileSprite)];

      //
      // Initialize the temporary surface
      //
      pSurfActual = SC_Surface(W32, H15, SDL.PixelFormat.RGBA8888);
      pSurf = SC_Surface(32, 15, SDL.PixelFormat.Index8);

      //
      // Set the palette for the map screen
      //
      SDL.SetSurfacePalette(pSurf, pPalette);

      //
      // Map the last color on the palette as a transparent color to a transparent color
      //
      SDL.SetSurfaceColorKey(pSurf, true, 0xFF);

      //
      // Set the default scaling mode when creating a new texture
      //
      //S_SetNearestScale(false);

      //
      // Initialize all map tile textures
      //
      for (i = 0; i < arrTileTex.Length; i++)
      {
         //
         // Initialize the texture of the map tile
         //
         pTex = SC_Texture(pSurfActual, 1, false);

         //
         // Draw the map tile to the 8-bit surface
         //
         SDL.FillSurfaceRect(pSurf, 0, 0xFF);
         PalUnpak.DrawRLE(PalUnpak.SpriteGetFrame(pTileSprite, i), pSurf, POS_ZERO);

         //
         // Convert the surface from 8 bits to 32 bits
         //
         SDL.FillSurfaceRect(pSurfActual, 0, 0x00000000);
         SDL.BlitSurfaceScaled(pSurf, 0, pSurfActual, pTileRect, SDL.ScaleMode.Nearest);

         //
         // Convert 32-bit surface to texture
         //
         lpSurfActual = (SDL.Surface*)pSurfActual;
         SDL.UpdateTexture(
            pTex,
            IntPtr.Zero,               // Update the entire texture
            lpSurfActual->Pixels,      // Pixel data of Surface
            lpSurfActual->Pitch        // Number of bytes per line
         );

         //
         // Put the tiles into the list
         //
         arrTileTex[i] = pTex;
      }

      //
      // Release the temporary surface
      //
      SF_Surface(ref pSurf);
      SF_Surface(ref pSurfActual);
   }

   public static void
   Init()
   /*++
     Purpose:

       Load the palette of the map.

     Parameters:
   
       None.

     Return value:

       None.

   --*/
   {
      string            path;
      byte[]            arrData;
      Palette*          lpPat;
      int               i, len;
      SDL.Color[]       palette;

      //
      // Read the palette data
      //
      path = $@"{MAP_MAIN_PATH}\PAT.MKF";

      //
      // If the file does not exist, an error will be prompted and the game will be exited
      //
      S_FILE_EXISTS(path);

      //
      // Initialize the map screen palette
      //
      arrData = File.ReadAllBytes(path);
      fixed (byte* bpTmp = arrData)
      {
         lpPat = (Palette*)(bpTmp + sizeof(int) * 2);

         len = (arrData.Length - sizeof(int) * 2) / sizeof(Palette);
         palette = new SDL.Color[len];

         for (i = 0; i < len; i++)
         {
            palette[i].R = (byte)(lpPat[i].R << 2);
            palette[i].G = (byte)(lpPat[i].G << 2);
            palette[i].B = (byte)(lpPat[i].B << 2);
            palette[i].A = 0xFF;
         }
      }

      pPalette = SDL.CreatePalette(palette.Length);
      SDL.SetPaletteColors(pPalette, palette, 0, palette.Length);

      pTileFRect = SC_FRect(new SDL.FRect
      {
         X = 0,
         Y = 0,
         W = W32,
         H = H15,
      });

      pTileRect = SC_Rect(new SDL.Rect
      {
         X = 0,
         Y = 0,
         W = W32,
         H = H15,
      });

#if false
      g_pMapTile = SC_Texture($@"{GAME_PATH}\Temp\MapTile.png");
      S_SetTexScale(g_pMapTile, SDL.ScaleMode.Nearest);

      g_pMapTile2 = SC_Texture($@"{GAME_PATH}\Temp\MapTile1.png");
      S_SetTexScale(g_pMapTile, SDL.ScaleMode.Nearest);
#endif // false
   }

   public static void
   FreeTile()
   /*++
     Purpose:

       Release the tile bitmaps.

     Parameters:

       [IN]  lpMap - Pointer to the loaded map structure.

     Return value:

       None.

   --*/
   {
      int      i;

      S_FREE(ref pTileSprite);

#if false
      SF_Texture(ref g_pMapTile);
      SF_Texture(ref g_pMapTile2);
#endif // false

      if (arrTileTex != null)
      {
         for (i = 0; i < arrTileTex.Length; i++)
         {
            SF_Texture(ref arrTileTex[i]);
         }
      }
   }

   public static void
   Free()
   /*++
     Purpose:

       Release all the data.

     Parameters:

       [IN]  lpMap - Pointer to the loaded map structure.

     Return value:

       None.

   --*/
   {
      FreeTile();

      S_FREE(ref pTileFRect);
      S_FREE(ref pPalette);
   }

   public static void
   Draw(
      int      iLayer
   )
   /*++
     Purpose:

       Blit the specified map area to a SDL Surface.

     Parameters:

       [IN]  iLayer - The layer. 0 for bottom, 1 for top.

     Return value:

       None.

   --*/
   {
      int            ox, oy, sx, sy, dx, dy, x, y, h, xPos, yPos;
      nint           pTex;
      SDL.FRect*     lpTileFRect;

      lpTileFRect = (SDL.FRect*)pTileFRect;

      //
      // Calculate the actual rect
      //
      ox = Viewport.Pos.X;
      oy = Viewport.Pos.Y;

      //
      // Convert the coordinate
      //
      sy = oy / 16 - 1;
      dy = (oy + Viewport.Rect.H) / 16 + 2;
      sx = ox / 32 - 1;
      dx = (ox + Viewport.Rect.W) / 32 + 2;

      //
      // Do the drawing.
      //
      yPos = sy * 16 - 8 - oy;
      for (y = sy; y < dy; y++)
      {
         for (h = 0; h < 2; h++, yPos += 8)
         {
            xPos = sx * 32 + h * 16 - 16 - ox;
            for (x = sx; x < dx; x++, xPos += 32)
            {
               pTex = GetTileTex(new BlockPos(x, y, h), iLayer);
               if (pTex == 0)
               {
                  //
                  // Failed to obtain the block image
                  // By default, the first one in the tile sequence is obtained
                  //
                  if (S_B(iLayer))
                  {
                     continue;
                  }
                  pTex = GetTileTex(new BlockPos(0, 0, 0), iLayer);
               }

               lpTileFRect->X = S_Ratio(xPos);
               lpTileFRect->Y = S_Ratio(yPos);
               Screen.Copy(pTex, *lpTileFRect);
            }
         }
      }
   }

   public static nint
   GetTileTex(
      BlockPos    block_pos,
      int         iLayer
   )
   /*++
     Purpose:

       Get the tile texture on the specified layer at the location (x, y, h).

     Parameters:

       [IN]  block_pos - The y-coordinate of the tile.

       [IN]  iLayer - The layer. 0 for bottom, 1 for top.

     Return value:

       Pointer to the bitmap. NULL if failed.

   --*/
   {
      TileData    tileData;

      //
      // Check for invalid parameters.
      //
      if (block_pos.X >= 64 || block_pos.Y >= 128 || block_pos.H > 1)
      {
         return 0;
      }

      //
      // Get the tile data of the specified location.
      //
      tileData = arrTileData[block_pos.Y, block_pos.X, block_pos.H];

      if (S_B(iLayer))
      {
         if (tileData.HighID < 0)
         {
            return 0;
         }

         return arrTileTex[tileData.HighID];
      }
      else
      {
         return arrTileTex[tileData.LowID];
      }
   }

   public static int
   GetTileLayer(
      BlockPos    block_pos,
      int         iLayer
   )
   /*++
     Purpose:

       Get the logical height value of the specified tile. This value is used
       to judge whether the tile bitmap should cover the sprites or not.

     Parameters:

       [IN]  block_pos - The y-coordinate of the tile.

       [IN]  iLayer - The layer. 0 for bottom, 1 for top.

     Return value:

       The logical height value of the specified tile.

   --*/
   {
      TileData    tileData;

      //
      // Check for invalid parameters.
      //
      if (block_pos.X >= 64 || block_pos.Y >= 128 || block_pos.H > 1)
      {
         return 0;
      }

      //
      // Get the tile data of the specified location.
      //
      tileData = arrTileData[block_pos.Y, block_pos.X, block_pos.H];

      return S_B(iLayer) ? tileData.HighLayer : tileData.LowLayer;
   }

   public static bool
   TileIsObstacle(
      BlockPos    block
   )
   /*++
     Purpose:

       Check if the tile at the specified location is blocked.

     Parameters:

       [IN]  x - Column number of the tile.

       [IN]  y - Line number in the map.

       [IN]  h - Each line in the map has two lines of tiles, 0 and 1.
                 (See map.h for details.)

     Return value:

       TRUE if the tile is blocked, FALSE if not.

   --*/
   {
      //
      // Check for invalid parameters.
      //
      if (block.X >= 64 || block.Y >= 128 || block.H > 1)
      {
         return true;
      }

      return PalMap.arrTileData[block.Y, block.X, block.H].IsObstacle;
   }
}
