using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

public class Item
{
   public   string      Name;             // Name of the object (in WORD.DAT)
   public   string[]    Description;      // Description of the object (in DESC.DAT)
   public   ushort      Bitmap;           // Bitmap number in BALL.MKF
   public   ushort      Price;            // Price

   [JsonProperty("Scope")]
   public   Scope       _Scope;

   [JsonProperty("Script")]
   public   Script      _Script;

   public class Scope
   {
      public   bool     Usable;
      public   bool     Throwable;
      public   bool     Equipable;
      public   bool     Sellable;
      public   bool     Consuming;              // It will be reduced after use/throwing
      public   bool     ApplyToAllHero;         // Applied to all heroes (UsableToPlayer is required to enable)
      public   bool     ApplyToAllEnemy;        // Applied to all enemies (requires UsableToEnemy to enable)
      public   bool     EquipableByHero_0;      // Hero-0 can be equipped
      public   bool     EquipableByHero_1;      // Hero-1 can be equipped
      public   bool     EquipableByHero_2;      // Hero-2 can be equipped
      public   bool     EquipableByHero_3;      // Hero-3 can be equipped
      public   bool     EquipableByHero_4;      // Hero-4 can be equipped
      public   bool     EquipableByHero_5;      // Hero-5 can be equipped
   }

   public class Script
   {
      [JsonIgnore]
      public   int         _Use     = 0;
      public   string      Use;        // Script executed when using this item

      [JsonIgnore]
      public   int         _Equip   = 0;
      public   string      Equip;      // Script executed when equipping this item

      [JsonIgnore]
      public   int         _Throw   = 0;
      public   string      Throw;      // Script executed when throwing this item to enemy
   }
}
