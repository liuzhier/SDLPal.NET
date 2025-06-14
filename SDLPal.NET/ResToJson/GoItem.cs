using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Runtime.InteropServices.ComTypes;
using System.Text;
using System.Threading.Tasks;

using static GoMain;

using WORD = System.UInt16;

public unsafe class GoItem
{
   [StructLayout(LayoutKind.Sequential, Pack = 1)]
   public struct Core
   {
      public WORD wBitmap;         // bitmap number in BALL.MKF
      public WORD wPrice;          // price
      public WORD wScriptOnUse;    // script executed when using this item
      public WORD wScriptOnEquip;  // script executed when equipping this item
      public WORD wScriptOnThrow;  // script executed when throwing this item to enemy
      public WORD wFlags;          // flags
   }

   public enum ItemFlag
   {
      Usable = (1 << 0),
      Equipable = (1 << 1),
      Throwable = (1 << 2),
      Consuming = (1 << 3),
      ApplyToAll = (1 << 4),
      Sellable = (1 << 5),
      EquipableByHero_0 = (1 << 6)
   }

   public static void
   Go()
   {
      List<Item>     listItem;
      byte[]         arrCore;
      int            i, ai, len, id;
      string[]       arrDesc;
      Core*          lpCore;
      Item           item;

      listItem = new List<Item>();

      arrCore = File.ReadAllBytes($@"{CORE_PATH}\SSS2.smkf");

      len = OBJ_MAGIC_BEGIN - OBJ_ITEM_BEGIN;

      fixed (byte* tmpCore = arrCore)
      {
         lpCore = (Core*)tmpCore;
         lpCore += OBJ_ITEM_BEGIN;

         S_MKDIR($@"{OUTPUT_PATH}\Item");

         for (i = 0; i < len; i++, lpCore++)
         {
            ai = i + 1;
            id = i + OBJ_ITEM_BEGIN;

            try
            {
               arrDesc = GoMsg.dictDesc[id];
            }
            catch
            {
               arrDesc = new string[0];
            }

            item = new Item
            {
               Name = GoMsg.listWord[i + OBJ_ITEM_BEGIN],
               Description = arrDesc,
               Bitmap = lpCore->wBitmap,
               Price = lpCore->wPrice,
               _Scope = new Item.Scope
               {
                  Usable = S_B(lpCore->wFlags & (int)ItemFlag.Usable),
                  Throwable = S_B(lpCore->wFlags & (int)ItemFlag.Throwable),
                  Equipable = S_B(lpCore->wFlags & (int)ItemFlag.Equipable),
                  Sellable = S_B(lpCore->wFlags & (int)ItemFlag.Sellable),
                  Consuming = S_B(lpCore->wFlags & (int)ItemFlag.Consuming),
                  ApplyToAllHero = S_B(lpCore->wFlags & (int)ItemFlag.ApplyToAll),
                  ApplyToAllEnemy = S_B(lpCore->wFlags & (int)ItemFlag.ApplyToAll),
                  EquipableByHero_0 = S_B(lpCore->wFlags & ((int)ItemFlag.EquipableByHero_0 + 0)),
                  EquipableByHero_1 = S_B(lpCore->wFlags & ((int)ItemFlag.EquipableByHero_0 + 1)),
                  EquipableByHero_2 = S_B(lpCore->wFlags & ((int)ItemFlag.EquipableByHero_0 + 2)),
                  EquipableByHero_3 = S_B(lpCore->wFlags & ((int)ItemFlag.EquipableByHero_0 + 3)),
                  EquipableByHero_4 = S_B(lpCore->wFlags & ((int)ItemFlag.EquipableByHero_0 + 4)),
                  EquipableByHero_5 = S_B(lpCore->wFlags & ((int)ItemFlag.EquipableByHero_0 + 5)),
               },
               _Script = new Item.Script
               {
                  Use = GoScript.AddTag(new GoScript.Tag
                  {
                     Addr = lpCore->wScriptOnUse,
                     Name = $@"Item_{ai:D5}_Use",
                  }).Name,
                  Equip = GoScript.AddTag(new GoScript.Tag
                  {
                     Addr = lpCore->wScriptOnEquip,
                     Name = $@"Item_{ai:D5}_Equip",
                  }).Name,
                  Throw = GoScript.AddTag(new GoScript.Tag
                  {
                     Addr = lpCore->wScriptOnThrow,
                     Name = $@"Item_{ai:D5}_Throw",
                  }).Name,
               },
            };

            File.WriteAllText(
               $@"{OUTPUT_PATH}\Item\{ai:D5}.json",
               JsonConvert.SerializeObject(item, Formatting.Indented)
            );
         }
      }
   }
}
