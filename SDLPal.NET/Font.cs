using SDL3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using static SafeSys;
using static PalCommon;

public class PalFont
{
   public   const int
      FONT_SIZE               = 50,
      FONT_SHADOW_OFFSET      = 2,
      FONT_OFFSET             = FONT_SIZE + FONT_SHADOW_OFFSET,
      FONT_OFFSET_HALF        = FONT_SIZE / 2 + FONT_SHADOW_OFFSET,
      FONT_NAME_OFFSET        = FONT_SIZE * 2 + FONT_SHADOW_OFFSET,
      FONT_SIZE_NUM           = 26,
      FONT_OFFSET_W_NUM       = FONT_SIZE_NUM / 2 + FONT_SHADOW_OFFSET,
      FONT_OFFSET_H_NUM       = FONT_SIZE_NUM + FONT_SHADOW_OFFSET;

   public   const string
      FONT_NAME = "汉仪花木兰 简.ttf";

   public   static   nint     g_pFont, g_pFontNum;

   public static void Init()
   {
      SDL_FAILED(
         "TTF.Init",
         TTF.Init()
      );

      SDL_FAILED(
         "TTF.OpenFont",
         g_pFont = TTF.OpenFont($@"{FONT_PATH}\{FONT_NAME}", FONT_SIZE)
      );

      SDL_FAILED(
         "TTF.OpenFont",
         g_pFontNum = TTF.OpenFont($@"{FONT_PATH}\{FONT_NAME}", FONT_SIZE_NUM)
      );
   }

   public static void
   Free()
   {
      TTF.CloseFont(g_pFont);
      TTF.Quit();
   }
}
