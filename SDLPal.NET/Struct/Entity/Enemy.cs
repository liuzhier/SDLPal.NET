using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

using static PalMap;

public class Enemy
{
   public   string            Name;             // Name of the object (in WORD.DAT)

   [JsonProperty("Frame")]
   public   Frame             _Frame;

   [JsonProperty("Sound")]
   public   Sound             _Sound;

   [JsonProperty("Attribute")]
   public   Attribute         _Attribute;

   [JsonProperty("Resistance")]
   public   Resistance        _Resistance;

   [JsonProperty("Action")]
   public   Action            _Action;

   [JsonProperty("BattleReward")]
   public   BattleReward      _BattleReward;

   [JsonProperty("Script")]
   public   Script            _Script;

   public class Frame
   {
      public   ushort      BitmapID;
      public   Pos         OffsetPos;
      public   ushort      Idle;                // In-place peristaltic frame counting
      public   ushort      Magic;               // Magic action frame count (Magic posture frame)
      public   ushort      Attack;              // Attack frame count
      public   ushort      IdleWaitFrames;      // Frame delay (The delay between each frame is fixed)
      public   ushort      ActWaitFrames;       // Frame delay (The delay between each frame is fixed)
   }

   public class Sound
   {
      public   short    AttackID;
      public   short    ActionID;
      public   short    MagicID;
      public   short    DeathID;
      public   short    BeginBattleID;
   }

   public class Attribute
   {
      public   ushort      Level;
      public   ushort      HP;
      public   ushort      MaxHP;
      public   int         AttackStrength;      // normal attack strength
      public   int         MagicStrength;       // magical attack strength
      public   int         Defense;             // resistance to all kinds of attacking
      public   int         Dexterity;           // dexterity
      public   int         FleeRate;            // chance of successful fleeing
   }

   public class Action
   {
      public   ushort      MagicID;
      public   ushort      MagicRate;
      public   ushort      AttackEquivItemID;      // The normal attack comes with item effects
      public   ushort      AttackEquivItemRate;
      public   ushort      ActionCount;            // The number of attacks available per round
   }

   public class BattleReward
   {
      public   ushort      StealItem;           // Stealable items
      public   ushort      StealItemCount;      // The number of items that can be stolen
      public   uint        Exp;
      public   ushort      Level;               // The number of directly upgraded levels
      public   uint        Cash;
      public   ushort      SpoilsID;
      public   ushort      SpoilsCount;
      public   uint        CollectValue;        // The value of refining drugs
   }

   public class Script
   {
      public   string      TurnStart;        // Script executed when turn starts
      public   string      BattleWon;        // Script executed when battle ends
      public   string      ReadyToAction;    // Script executed when the enemy is ready
   }
}
