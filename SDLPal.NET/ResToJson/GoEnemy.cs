using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

using static Enemy;
using static GoMain;
using static PalMap;

using SHORT = System.Int16;
using WORD = System.UInt16;

public unsafe class GoEnemy
{
   [StructLayout(LayoutKind.Sequential, Pack = 1)]
   public struct Base
   {
      public WORD wIdleFrames;         // total number of frames when idle
      public WORD wMagicFrames;        // total number of frames when using magics
      public WORD wAttackFrames;       // total number of frames when doing normal attack
      public WORD wIdleAnimSpeed;      // speed of the animation when idle
      public WORD wActWaitFrames;      // FIXME: ???
      public SHORT wYPosOffset;
      public SHORT wAttackSound;        // sound played when this enemy uses normal attack
      public SHORT wActionSound;        // FIXME: ???
      public SHORT wMagicSound;         // sound played when this enemy uses magic
      public SHORT wDeathSound;         // sound played when this enemy dies
      public SHORT wCallSound;          // sound played when entering the battle
      public WORD wHealth;             // total HP of the enemy
      public WORD wExp;                // How many EXPs we'll get for beating this enemy
      public WORD wCash;               // how many cashes we'll get for beating this enemy
      public WORD wLevel;              // this enemy's level
      public WORD wMagic;              // this enemy's magic number
      public WORD wMagicRate;          // chance for this enemy to use magic
      public WORD wAttackEquivItem;    // equivalence item of this enemy's normal attack
      public WORD wAttackEquivItemRate;// chance for equivalence item
      public WORD wStealItem;          // which item we'll get when stealing from this enemy
      public WORD nStealItem;          // total amount of the items which can be stolen
      public SHORT wAttackStrength;     // normal attack strength
      public SHORT wMagicStrength;      // magical attack strength
      public SHORT wDefense;            // resistance to all kinds of attacking
      public SHORT wDexterity;          // dexterity
      public SHORT wFleeRate;           // chance for successful fleeing
      public SHORT wPoisonResistance;   // resistance to poison
      public fixed SHORT wElemResistance[5]; // resistance to elemental magics
      public SHORT wPhysicalResistance; // resistance to physical attack
      public WORD wDualMove;           // whether this enemy can do dual move or not
      public WORD wCollectValue;       // value for collecting this enemy for items
   }

   [StructLayout(LayoutKind.Sequential, Pack = 1)]
   public struct Core
   {
      public WORD wEnemyID;        // ID of the enemy, according to DATA.MKF #1.
                                   // Also indicates the bitmap number in ABC.MKF.
      public WORD wResistanceToSorcery;  // resistance to sorcery and poison (0 min, 10 max)
      public WORD wScriptOnTurnStart;    // script executed when turn starts
      public WORD wScriptOnBattleEnd;    // script executed when battle ends
      public WORD wScriptOnReady;        // script executed when the enemy is ready
      WORD undefine;        // script executed when the enemy is ready
   }

   public static void Go()
   {
      List<Enemy>       listEnemy;
      byte[]            arrBase, arrCore;
      int               i, ai, len;
      Base*             lpBaseOrigin, lpBase;
      Core*             lpCore;
      Enemy             enemy;

      listEnemy = new List<Enemy>();

      arrBase = File.ReadAllBytes($@"{BASE_PATH}\DATA1.smkf");
      arrCore = File.ReadAllBytes($@"{CORE_PATH}\SSS2.smkf");

      len = OBJ_POISON_BEGIN - OBJ_ENEMY_BEGIN;

      fixed (byte* tmpBase = arrBase)
      fixed (byte* tmpCore = arrCore)
      {
         lpBaseOrigin = (Base*)tmpBase;
         lpCore = (Core*)tmpCore;
         lpCore += OBJ_ENEMY_BEGIN;

         S_MKDIR($@"{OUTPUT_PATH}\Enemy");

         for (i = 0; i < len; i++, lpCore++)
         {
            ai = i + 1;
            lpBase = &lpBaseOrigin[lpCore->wEnemyID];

            enemy = new Enemy
            {
               Name = GoMsg.listWord[i + OBJ_ENEMY_BEGIN],
               _Frame = new Enemy.Frame
               {
                  BitmapID = lpCore->wEnemyID,
                  Idle = lpBase->wIdleFrames,
                  Magic = lpBase->wMagicFrames,
                  Attack = lpBase->wAttackFrames,
                  IdleWaitFrames = lpBase->wIdleAnimSpeed,
                  ActWaitFrames = lpBase->wActWaitFrames,
                  OffsetPos = new Pos
                  {
                     X = 0,
                     Y = lpBase->wYPosOffset,
                  },
               },
               _Sound = new Enemy.Sound
               {
                  AttackID = lpBase->wAttackSound,
                  ActionID = lpBase->wActionSound,
                  MagicID = lpBase->wMagicSound,
                  DeathID = lpBase->wDeathSound,
                  BeginBattleID = lpBase->wCallSound,
               },
               _Attribute = new Enemy.Attribute
               {
                  Level = lpBase->wLevel,
                  HP = lpBase->wHealth,
                  MaxHP = lpBase->wHealth,
                  AttackStrength = lpBase->wAttackStrength,
                  MagicStrength = lpBase->wMagicStrength,
                  Defense = lpBase->wDefense,
                  Dexterity = lpBase->wDexterity,
                  FleeRate = lpBase->wFleeRate,
               },
               _Resistance = new Resistance
               {
                  _Elemental = new Resistance.Elemental
                  {
                     Wind = lpBase->wElemResistance[0],
                     Thunder = lpBase->wElemResistance[1],
                     Water = lpBase->wElemResistance[2],
                     Fire = lpBase->wElemResistance[3],
                     Earth = lpBase->wElemResistance[4],
                  },
                  Physics = lpBase->wPhysicalResistance,
                  Poison = lpBase->wPoisonResistance,
                  Sorcery = lpCore->wResistanceToSorcery,
                  Ultimate = 0, // FIXME: ???
               },
               _Action = new Enemy.Action
               {
                  MagicID = (ushort)Math.Max(lpBase->wMagic - OBJ_MAGIC_BEGIN + 1, 0),
                  MagicRate = lpBase->wMagicRate,
                  AttackEquivItemID = (ushort)Math.Max(lpBase->wAttackEquivItem - OBJ_ITEM_BEGIN + 1, 0),
                  AttackEquivItemRate = lpBase->wAttackEquivItemRate,
                  ActionCount = lpBase->wDualMove,
               },
               _BattleReward = new Enemy.BattleReward
               {
                  StealItem = (ushort)Math.Max(lpBase->wStealItem - OBJ_ITEM_BEGIN + 1, 0),
                  StealItemCount = lpBase->nStealItem,
                  Exp = lpBase->wExp,
                  Level = 0,
                  Cash = lpBase->wCash,
                  SpoilsID = 0,
                  SpoilsCount = 0,
                  CollectValue = lpBase->wCollectValue,
               },
               _Script = new Enemy.Script
               {
                  TurnStart = GoScript.AddTag(new GoScript.Tag
                  {
                     Addr = lpCore->wScriptOnTurnStart,
                     Name = $@"Enemy_{ai:D5}_TurnStart",
                  }).Name,
                  BattleWon = GoScript.AddTag(new GoScript.Tag
                  {
                     Addr = lpCore->wScriptOnBattleEnd,
                     Name = $@"Enemy_{ai:D5}_BattleWon",
                  }).Name,
                  ReadyToAction = GoScript.AddTag(new GoScript.Tag
                  {
                     Addr = lpCore->wScriptOnReady,
                     Name = $@"Enemy_{ai:D5}_ReadyToAction",
                  }).Name,
               },
            };

            File.WriteAllText(
               $@"{OUTPUT_PATH}\Enemy\{ai:D5}.json",
               JsonConvert.SerializeObject(enemy, Formatting.Indented)
            );
         }
      }
   }
}
