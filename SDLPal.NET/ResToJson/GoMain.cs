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
   Init()
   {
      PalLog.Init();
      GoData.Init();
      GoMsg.Init();
      PalMap.Init();
   }

   public static void
   Free()
   {
      GoData.Free();
      PalLog.Free();
      PalMap.Free();
   }

   public static void
   Go()
   {
#if DEBUG
      //
      // Customize the game working directory in DEBUG mode
      //
      Environment.CurrentDirectory = $@"{WORK_PATH}\";
#endif // DEBUG

#if DEBUG_IMG_CHECKOUT
      {
         int         i, j;
         string      pathA, pathB, pathC, pathD, pathE, pathF;

         pathA = $@"{IMG_PATH}\MGO";
         pathB = $@"{IMG_PATH}\MGO1";

         for (i = 0; i < 635; i++)
         {
            pathC = $@"{pathA}\{i}";
            pathD = $@"{pathB}\{i}";

            for (j = 0; ; j++)
            {
               pathE = $@"{pathC}-{j}.png";
               pathF = $@"{pathD}-{j}.png";

               if (!File.Exists(pathE))
               {
                  break;
               }

               if (!File.Exists(pathF))
               {
                  File.Copy(pathE, $@"{IMG_PATH}\MGO2\{i}-{j}.png", true);
               }
            }
         }
      }
#endif // DEBUG_IMG_CHECKOUT

      Init();

      GoSound.Go();
      GoImage.Go();

      GoData.Go();
      GoHero.Go();
      GoItem.Go();
      GoMagic.Go();
      GoEnemy.Go();
      GoPoison.Go();
      GoScene.Go();
      GoScript.Go();

      Free();
   }
}
