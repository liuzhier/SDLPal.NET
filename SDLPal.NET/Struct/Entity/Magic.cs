using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using static PalMap;
using static PalCommon;

public class Magic
{
   public   string         Name;             // Name of the object (in WORD.DAT)
   public   string[]       Description;      // Description of the object (in DESC.DAT)
   public   ushort         BaseDamage;       // Base Damage
   public   ushort         CostMP;           // MP cost
   public   short          SoundID;          // Sound effect
   public   short          SummonID;         // Summon ID (-1 means no summon)

   [JsonProperty("Genus")]
   public   Genus          _Genus;

   [JsonProperty("AttackMode")]
   public   AttackMode     _AttackMode;

   [JsonProperty("Frame")]
   public   Frame          _Frame;

   [JsonProperty("Scope")]
   public   Scope          _Scope;

   [JsonProperty("Script")]
   public   Script         _Script;

   public class Frame
   {
      public   ushort      BitmapID;
      public   Pos         OffsetPos;
      public   short       LayerOffset;      // Only applicable to non-summoning divine magic
                                             // ActualLayer = PAL_Y(pos) + OffsetPosY + LayerOffset
      public   ushort      Preview;          // Preview frame count
                                             // The frame count of spells played in advance
                                             // after the enemy/hero assumes the casting stance
      public   short       Speed;            // Effect frame delay
                                             // EffectSpeed = (Speed + 5) * 10
      public   bool        KeepEffect;       // Whether to leave the last frame of the animation on the ground
      public   ushort      TotalTimes;       // Total time consumption
                                             // (CountFrames - Preview) * TotalTimes + CountFrames + Wave
      public   ushort      Shake;            // Vibration frame count
                                             // The number of frames of vibration in the picture
                                             // after the spell animation is played
      public   ushort      Wave;             // Wave screen
                                             // The spatial distortion caused by the reduction
                                             // and expansion of air density due to the heating of the fire
   }

   public enum AttackMode
   {
      Normal         = 0,     // Attack one of the enemies (a single special effect)
      AttackAll      = 1,     // Attack all enemies (multiple special effects)
      AttackWhole    = 2,     // Attack all enemies (a single special effect)
      AttackField    = 3,     // Attack all enemies (Full-screen effect, drawn starting from XY(0, 0))
      ApplyToPlayer  = 4,     // Apply to one of the heroes (a single special effect)
      ApplyToParty   = 5,     // Apply to all heroes (multiple special effects)
      Trance         = 8,     // Apply to oneself
      Summon         = 9,     // Summoning God
   }

   public class Genus
   {
      public   bool     Sword;
      public   bool     Wind;
      public   bool     Thunder;
      public   bool     Water;
      public   bool     Fire;
      public   bool     Earth;
      public   bool     Poison;
      public   bool     Sorcery;
      public   bool     Ultimate;      // Strongest skill
      public   bool     Angel;         // Light
      public   bool     Evil;          // Dark
      public   bool     Heal;          // Healing
      public   bool     Buff;          // Auxiliary/Gain
   }

   public class Scope
   {
      public   bool     UsableOutsideBattle;    // Available before the battle
      public   bool     UsableInBattle;         // Available in battle
      public   bool     UsableToHero;           // Effective for heroes
      public   bool     UsableToEnemy;          // Effective against the enemy
      public   bool     ApplyToAllHero;         // Applied to all heroes (UsableToPlayer is required to enable)
      public   bool     ApplyToAllEnemy;        // Applied to all enemies (requires UsableToEnemy to enable)
   }

   public class Script
   {
      public   string      Success;       // When magic succeed, execute script from here
      public   string      Use;           // When use this magic, execute script from here
   }

   [JsonIgnore]
   private  List<string>      arrGenus = new List<string>();

   public List<string>
   GetGenus()
   {
      int      i;

      arrGenus.Clear();

      i = 0;
      if (_Genus.Sword)
      {
         arrGenus.Add(MAGIC_GENUS[i]);
      }

      i++;
      if (_Genus.Wind)
      {
         arrGenus.Add(MAGIC_GENUS[i]);
      }

      i++;
      if (_Genus.Thunder)
      {
         arrGenus.Add(MAGIC_GENUS[i]);
      }

      i++;
      if (_Genus.Water)
      {
         arrGenus.Add(MAGIC_GENUS[i]);
      }

      i++;
      if (_Genus.Fire)
      {
         arrGenus.Add(MAGIC_GENUS[i]);
      }

      i++;
      if (_Genus.Earth)
      {
         arrGenus.Add(MAGIC_GENUS[i]);
      }

      i++;
      if (_Genus.Poison)
      {
         arrGenus.Add(MAGIC_GENUS[i]);
      }

      i++;
      if (_Genus.Sorcery)
      {
         arrGenus.Add(MAGIC_GENUS[i]);
      }

      i++;
      if (_Genus.Ultimate)
      {
         arrGenus.Add(MAGIC_GENUS[i]);
      }

      i++;
      if (_Genus.Angel)
      {
         arrGenus.Add(MAGIC_GENUS[i]);
      }

      i++;
      if (_Genus.Evil)
      {
         arrGenus.Add(MAGIC_GENUS[i]);
      }

      i++;
      if (_Genus.Heal)
      {
         arrGenus.Add(MAGIC_GENUS[i]);
      }

      i++;
      if (_Genus.Buff)
      {
         arrGenus.Add(MAGIC_GENUS[i]);
      }

      return arrGenus;
   }
}
