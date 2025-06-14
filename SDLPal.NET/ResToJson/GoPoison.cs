using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

using WORD = System.UInt16;

using static GoMain;

public unsafe class GoPoison
{
   [StructLayout(LayoutKind.Sequential, Pack = 1)]
   public struct Core
   {
      public WORD wPoisonLevel;    // level of the poison
      public WORD wColor;          // color of avatars
      public WORD wPlayerScript;   // script executed when player has this poison (per round)
      public WORD wReserved;       // always zero
      public WORD wEnemyScript;    // script executed when enemy has this poison (per round)
      public WORD wReserved1;       // always zero
   }

   public static void
   Go()
   {
      List<Poison>      listPoison;
      byte[]            arrCore;
      int               i, ai, len;
      Core*             lpCore;
      Poison            poison;

      listPoison = new List<Poison>();

      arrCore = File.ReadAllBytes($@"{CORE_PATH}\SSS2.smkf");

      len = (arrCore.Length / sizeof(Core)) - OBJ_POISON_BEGIN;

      fixed (byte* tmpCore = arrCore)
      {
         lpCore = (Core*)tmpCore;
         lpCore += OBJ_POISON_BEGIN;

         S_MKDIR($@"{OUTPUT_PATH}\Poison");

         for (i = 0; i < len; i++, lpCore++)
         {
            ai = i + 1;

            poison = new Poison
            {
               Name = GoMsg.listWord[OBJ_POISON_BEGIN + i],
               PoisonLevel = lpCore->wPoisonLevel,
               ColorHex = "",
               _Script = new Poison.Script
               {
                  Player = GoScript.AddTag(new GoScript.Tag
                  {
                     Addr = lpCore->wPlayerScript,
                     Name = $@"Poison_{ai:D5}_Player",
                  }).Name,
                  Enemy = GoScript.AddTag(new GoScript.Tag
                  {
                     Addr = lpCore->wEnemyScript,
                     Name = $@"Poison_{ai:D5}_Enemy",
                  }).Name,
               },
            };

            File.WriteAllText(
               $@"{OUTPUT_PATH}\Poison\{ai:D5}.json",
               JsonConvert.SerializeObject(poison, Formatting.Indented)
            );
         }
      }
   }
}
