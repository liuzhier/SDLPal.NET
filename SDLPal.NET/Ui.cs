using SDL3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using static PalCommon;
using static PalFont;
using static PalMap;
using static PalVideo;
using static SafeSys;

public unsafe class PalUi
{
   public class Menu
   {
      public   int            iDefaultID  = 0;
      public   SDL.Color      color       = COLOR_WHITE;
      public   Option[]       arrOption;

      public class Option
      {
         public   string      text;
         public   Pos         pos;
         public   PalAlign    align       = PalAlign.Left;
         public   int         iLineHeight = FONT_OFFSET;
         public   bool        fEnabled    = true;

         public enum Status
         {
            None,
            Activity,
            Selected,
         }
      }
   }

   public static void
   ReadMenu(
      Menu     menu
   )
   {
      int            i, iItemSelected;
      Menu.Option    option;
      SDL.Color      color;

      iItemSelected = menu.iDefaultID;

      for (i = 0; i < menu.arrOption.Length; i++)
      {
         option = menu.arrOption[i];

         if (option.fEnabled)
         {
            color = (i == iItemSelected) ? COLOR_YELLOW : menu.color;
         }
         else
         {
            color = (i == iItemSelected) ? COLOR_PINK : COLOR_RED;
         }

         PalText.DrawText(option.text, option.pos, color, option.align);
      }
   }

   public static void
   DrawBox(
      SDL.FRect               frect,
      PalAlign                align          = PalAlign.Middle,
      nint                    pTex           = 0,
      Menu.Option.Status      statusOption   = Menu.Option.Status.None
   )
   {
      uint           hexColor;
      nint           pRect, pSurf, pTexBox;
      SDL.Rect       rect;
      SDL.Rect*      lpRect;

      if (pTex == 0)
      {
         pTex = g_pScreen;
      }

      switch (statusOption)
      {
         case Menu.Option.Status.None:
         default:
            hexColor = 0x14BAF0;
            break;

         case Menu.Option.Status.Activity:
            hexColor = 0xFF2020;
            break;

         case Menu.Option.Status.Selected:
            hexColor = 0x2BF666;
            break;
      }
      hexColor <<= 8;
      hexColor |= 0xFF;

      switch (align)
      {
         default:
         case PalAlign.Left:
            break;

         case PalAlign.Middle:
            frect.X -= frect.W /2;
            break;

         case PalAlign.Right:
            frect.X -= frect.W;
            break;
      }

      rect = new SDL.Rect
      {
         X = (int)frect.X,
         Y = (int)frect.Y,
         W = (int)frect.W,
         H = (int)frect.H
      };

      pSurf = SC_Surface((int)frect.W, (int)frect.H, g_Formnat);
      pRect = SC_Rect(rect);
      lpRect = (SDL.Rect*)pRect;

      lpRect->X = 2;
      lpRect->Y = 2;
      lpRect->W -= 4;
      lpRect->H -= 4;
      SDL.FillSurfaceRect(pSurf, pRect, 0xFF2A935E);

      lpRect->X = 2;
      lpRect->Y = 0;
      lpRect->W = rect.W - 4;
      lpRect->H = 2;
      SDL.FillSurfaceRect(pSurf, pRect, hexColor);
      lpRect->Y = rect.H - 2;
      SDL.FillSurfaceRect(pSurf, pRect, hexColor);
      lpRect->X = 0;
      lpRect->Y = 2;
      lpRect->W = 2;
      lpRect->H = rect.H - 4;
      SDL.FillSurfaceRect(pSurf, pRect, hexColor);
      lpRect->X = rect.W - 2;
      SDL.FillSurfaceRect(pSurf, pRect, hexColor);

      pTexBox = SC_Texture(pSurf);
      Screen.Copy(pTexBox, pTex, frect);

      SF_Texture(pTexBox);
      S_FREE(pRect);
   }

   public static void
   DrawProgressLine(
      int         curr,
      int         max,
      Pos         pos,
      uint        hexColor = 0xFFFFFF,
      int         w        = 11 * FONT_OFFSET_W_NUM,
      int         h        = 4,
      PalAlign    align    = PalAlign.Left,
      nint        pTex     = 0
   )
   {
      Pos            pos1;
      nint           pSurf, pTexLine, pRect, pFRect;
      float          fRatio;
      SDL.Rect*      lpRect;

      hexColor <<= 8;
      hexColor |= 0xFF;

      if (pTex == 0)
      {
         pTex = g_pScreen;
      }

      fRatio = Math.Min(1, (float)curr / max);

      pos1 = pos.Clone();

      switch (align)
      {
         case PalAlign.Left:
         default:
            break;

         case PalAlign.Middle:
            pos1.X -= w / 2;
            break;

         case PalAlign.Right:
            pos1.X -= w;
            break;
      }

      pSurf = SC_Surface(w, h, g_Formnat);
      pRect = SC_Rect(new SDL.Rect());
      lpRect = (SDL.Rect*)pRect;

      lpRect->X = 0;
      lpRect->Y = 0;
      lpRect->W = w;
      lpRect->H = h;
      SDL.FillSurfaceRect(pSurf, pRect, 0x000000FF);

      w -= 2;
      lpRect->X += 1;
      lpRect->Y += 1;
      lpRect->W = (int)(w * fRatio);
      lpRect->H -= 2;
      lpRect->X += w - lpRect->W;
      SDL.FillSurfaceRect(pSurf, pRect, hexColor);

      pTexLine = SC_Texture(pSurf);
      pFRect = SC_FRect(new SDL.FRect
      {
         X = pos.X,
         Y = pos.Y,
         W = w,
         H = h,
      });
      Screen.Copy(pTexLine, pTex, pFRect);

      S_FREE(pRect);
      S_FREE(pFRect);
      SF_Texture(pTexLine);
   }

   private  static   SDL.FRect      frectItem = new SDL.FRect();

   public static void
   DrawItem(
      int         itemID,
      Pos         pos,
      PalAlign    align = PalAlign.Left
   )
   {
      nint        pTex;
      float       fw, fh;
      string      path;

      path = $@"{IMG_ITEM_PATH}\{itemID}.png";

      if (!File.Exists(path))
      {
         //
         // No item image found, skip drawing
         //
         return;
      }

      pTex = SC_Texture(path);
      S_GetTexSize(pTex, out fw, out fh);

      frectItem.X = pos.X;
      frectItem.Y = pos.Y;
      frectItem.W = fw * 2;
      frectItem.H = fh * 2;

      switch (align)
      {
         case PalAlign.Left:
            break;

         case PalAlign.Middle:
            frectItem.X -= (int)fw / 2;
            break;

         case PalAlign.Right:
            frectItem.X -= (int)fw;
            frectItem.Y = VIDEO_HEIGHT - (int)fh;
            break;

         default:
            S_FAILED(
               "PalText.DrawFace",
               "Unknown image alignment method!"
            );
            break;
      }

      Screen.Copy(pTex, frectItem);
      SF_Texture(pTex);
   }
}
