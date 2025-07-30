using Newtonsoft.Json;
using SDL3;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using static PalCommon;
using static SafeSys;

public class GoMain
{
   public   const int
      OBJ_SYS_BEGIN     = 0x0000,
      OBJ_HERO_BEGIN    = 0x0024,
      OBJ_SYS2_BEGIN    = 0x002A,
      OBJ_ITEM_BEGIN    = 0x003D,
      OBJ_MAGIC_BEGIN   = 0x0127,
      OBJ_ENEMY_BEGIN   = 0x018E,
      OBJ_POISON_BEGIN  = 0x0227;

   public static void
   S_MKDIR(
      string      path
   )
   {
      SafeSys.S_MKDIR(path, false);
   }

   public static void
   S_FAILED(
      string      funcName,
      string      error
   )
   {
      string logFatal;

      logFatal = $"{funcName} failed: {error}";

      if (error.Last() != '.')
      {
         logFatal += '.';
      }

      //
      // Write the error message to the log
      //
      throw new Exception(logFatal);
   }
   
   public static bool
   S_B(
      decimal     val
   )
   {
      return SafeSys.S_B(val);
   }

   public static void
   Init()
   {
      S_MKDIR(WORK_PATH);
   }

   public static void
   Go()
   {
#if DEBUG
      //
      // Customize the game working directory in DEBUG mode
      //
      Environment.CurrentDirectory = WORK_PATH;
#endif // DEBUG

      GoSound.Go();

      GoMsg.Init();
      GoData.Init();

      GoData.Go();
      GoHero.Go();
      GoItem.Go();
      GoMagic.Go();
      GoEnemy.Go();
      GoPoison.Go();
      GoScene.Go();
      GoScript.Go();

      GoData.Free();
   }
}
