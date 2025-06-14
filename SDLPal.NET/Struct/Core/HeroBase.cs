using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

/**
 * When operating this structure,
 * please fix the pointer first
 */
[StructLayout(LayoutKind.Sequential, Pack = 1)]
public struct HeroBase
{
   public   int                     AvatarID;                  // avatar (shown in status view)
   public   int                     SpriteIDInBattle;          // sprite displayed in battle (in F.MKF)
   public   int                     SpriteID;                  // sprite displayed in normal scene (in MGO.MKF)
   public   int                     MaxSP;                     // FIXME: ???
   public   int                     AttackAll;                 // whether player can attack everyone in a bulk or not
   public   int                     SP;                        // FIXME: ???
   public   int                     Level;                     // level
   public   int                     MaxHP;                     // maximum HP
   public   int                     MaxMP;                     // maximum MP
   public   int                     HP;                        // current HP
   public   int                     MP;                        // current MP

   [JsonProperty("_Equip")]
   public   Equip                   _Equip;                    // equipments

   [JsonProperty("Attribute")]
   public   Attribute               _Attribute;                // attributes

   public   int                     PoisonResistance;          // resistance to poison

   [JsonProperty("ElementalResistance")]
   public   ElementalResistance     _ElementalResistance;      // resistance to elemental magics

   [StructLayout(LayoutKind.Sequential, Pack = 1)]
   public struct Equip
   {
      public   int      Head;
      public   int      Body;
      public   int      Armour;
      public   int      Backside;
      public   int      Hand;
      public   int      Foot;
   }

   [StructLayout(LayoutKind.Sequential, Pack = 1)]
   public struct Attribute
   {
      public   int      AttackStrength;      // normal attack strength
      public   int      MagicStrength;       // magical attack strength
      public   int      Defense;             // resistance to all kinds of attacking
      public   int      Dexterity;           // dexterity
      public   int      FleeRate;            // chance of successful fleeing
   }

   [StructLayout(LayoutKind.Sequential, Pack = 1)]
   public struct ElementalResistance
   {
      public   int      Wind;
      public   int      Thunder;
      public   int      Water;
      public   int      Fire;
      public   int      Earth;
   }
}
