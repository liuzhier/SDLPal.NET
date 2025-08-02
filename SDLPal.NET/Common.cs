using SDL3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using static PalMap;
using static PalSave;
using static SafeSys;

public unsafe class PalCommon
{
   public   const string
#if DEBUG
   WORK_PATH            = $@"..\..\..\..",
#else
   WORK_PATH            = $@"..\..\..\..",
#endif // DEBUG
   GAME_PATH            = @"Game",
   PAL_PATH             = $@"Pal",
   LOG_PATH             = $@"Log",
   SAVE_PATH            = $@"Save",
   SCREENSHOT_PATH      = $@"Screenshot",
   CFG_PATH             = @"SDLPal.NET\ResToJson\Dependency",
   PAL_DOS_PATH         = $@"{PAL_PATH}\Dos",
   PAL_WIN_PATH         = $@"{PAL_PATH}\Win",
   FONT_PATH            = $@"{GAME_PATH}\Font",
   UI_PATH              = $@"{GAME_PATH}\Ui",
   WAV_PATH             = $@"{GAME_PATH}\Wav",
   MUS_PATH             = $@"{GAME_PATH}\Music",
   DATA_PATH            = $@"{GAME_PATH}\Data",
   IMG_PATH             = $@"{GAME_PATH}\Bitmap",
   MAP_MAIN_PATH        = $@"{GAME_PATH}\MapData",
   MAP_PATH             = $@"{MAP_MAIN_PATH}\MAP",
   TILE_PATH            = $@"{MAP_MAIN_PATH}\TILE",
   MAP_EDITOR_NAME      = "MapEditor(hack).exe",
   MAP_EDITOR_PATH      = $@"{CFG_PATH}\{MAP_EDITOR_NAME}",
   IMG_CHAR_PATH        = $@"{IMG_PATH}\Char",
   IMG_FACE_PATH        = $@"{IMG_PATH}\Face",
   IMG_ITEM_PATH        = $@"{IMG_PATH}\Item",
   IMG_FIGHT_PATH       = $@"{IMG_PATH}\Fight",
   IMG_RNG_PATH         = $@"{IMG_PATH}\Rng";

   public   const    char
      NULL   = '\0';

   public   static   int
      MAX_SAVE_NUM            = 99,
      MAX_HERO_NUM            = 6,
      //MAX_HERO_MAGICS         = 32,
      //MAX_SCENE_NUM           = 300,
      //MAX_OBJECT_NUM          = 500,
      //MAX_INVENTORY_NUM       = 150,
      MAX_PLAYER_EQUIPMENTS   = sizeof(HeroBase.Equip) / sizeof(int),
      INIT_EXP_SEED           = 15;

   public   static   string[]
      DIRECTION   = ["South", "West", "North", "East"],
      MAGIC_GENUS = ["剑系", "风系", "雷系", "水系", "火系", "土系", "毒系", "巫系", "绝技", "光系", "暗系", "治愈", "增益"];

   public   static   SDL.Color
      COLOR_NONE     = SC_Color(0x2BF666FF),
      COLOR_BLACK    = SC_Color(0x000000FF),
      COLOR_WHITE    = SC_Color(0xFFFFFFFF),
      COLOR_GOLD     = SC_Color(0xFFD700FF),
      COLOR_YELLOW   = SC_Color(0xEF7D31FF),
      COLOR_RED      = SC_Color(0xFF0000FF),
      COLOR_GREEN    = SC_Color(0x00FF00FF),
      COLOR_BLUE     = SC_Color(0x0000FFFF),
      COLOR_CYAN     = SC_Color(0x00FFFFFF),
      COLOR_PINK     = SC_Color(0xFF6969FF);

   public   static   Pos
      POS_ZERO = new Pos(0, 0);

   public enum PalDirection
   {
      Unknown  = -1,
      South    = 0,
      West,
      North,
      East,
   }

   public enum PalAlign
   {
      Left,
      Middle,
      Right,
   }

   public enum EquipPart
   {
      Head,
      Body,
      Armour,
      Backside,
      Hand,
      Foot,
   }
}
