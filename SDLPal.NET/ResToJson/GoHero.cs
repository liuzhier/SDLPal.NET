using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

using static GoMain;
using static GoScene;

using PLAYERS = System.UInt16;
using WORD = System.UInt16;

public unsafe class GoHero
{
   [StructLayout(LayoutKind.Sequential, Pack = 1)]
   public struct Base
   {
      public fixed PLAYERS rgwAvatar[6];             // avatar (shown in status view)
      public fixed PLAYERS rgwSpriteNumInBattle[6];  // sprite displayed in battle (in F.MKF)
      public fixed PLAYERS rgwSpriteNum[6];          // sprite displayed in normal scene (in MGO.MKF)
      public fixed PLAYERS rgwName[6];               // name of player class (in WORD.DAT)
      public fixed PLAYERS rgwAttackAll[6];          // whether player can attack everyone in a bulk or not
      public fixed PLAYERS rgwUnknown1[6];           // FIXME: ???
      public fixed PLAYERS rgwLevel[6];              // level
      public fixed PLAYERS rgwMaxHP[6];              // maximum HP
      public fixed PLAYERS rgwMaxMP[6];              // maximum MP
      public fixed PLAYERS rgwHP[6];                 // current HP
      public fixed PLAYERS rgwMP[6];                 // current MP
      public fixed PLAYERS Head[6]; // equipments
      public fixed PLAYERS Body[6]; // equipments
      public fixed PLAYERS Armour[6]; // equipments
      public fixed PLAYERS Backside[6]; // equipments
      public fixed PLAYERS Hand[6]; // equipments
      public fixed PLAYERS Foot[6]; // equipments
      public fixed PLAYERS rgwAttackStrength[6];     // normal attack strength
      public fixed PLAYERS rgwMagicStrength[6];      // magical attack strength
      public fixed PLAYERS rgwDefense[6];            // resistance to all kinds of attacking
      public fixed PLAYERS rgwDexterity[6];          // dexterity
      public fixed PLAYERS rgwFleeRate[6];           // chance of successful fleeing
      public fixed PLAYERS rgwPoisonResistance[6];   // resistance to poison
      public fixed PLAYERS Wind[6]; // resistance to elemental magics
      public fixed PLAYERS Thunder[6]; // resistance to elemental magics
      public fixed PLAYERS Water[6]; // resistance to elemental magics
      public fixed PLAYERS Fire[6]; // resistance to elemental magics
      public fixed PLAYERS Earth[6]; // resistance to elemental magics
      fixed PLAYERS rgwUnknown2[6 * 3];           // FIXME: ???
      public fixed PLAYERS rgwCoveredBy[6];          // who will cover me when I am low of HP or not sane
      public fixed PLAYERS rgwMagic[32 * 6]; // magics
      public fixed PLAYERS rgwWalkFrames[6];         // walk frame (???)
      public fixed PLAYERS rgwCooperativeMagic[6];   // cooperative magic
      fixed PLAYERS rgwUnknown5[6 * 2];           // FIXME: ???
      public fixed PLAYERS rgwDeathSound[6];         // sound played when player dies
      public fixed PLAYERS rgwAttackSound[6];        // sound played when player attacks
      public fixed PLAYERS rgwWeaponSound[6];        // weapon sound (???)
      public fixed PLAYERS rgwCriticalSound[6];      // sound played when player make critical hits
      public fixed PLAYERS rgwMagicSound[6];         // sound played when player is casting a magic
      public fixed PLAYERS rgwCoverSound[6];         // sound played when player cover others
      public fixed PLAYERS rgwDyingSound[6];         // sound played when player is dying
   }

   [StructLayout(LayoutKind.Sequential, Pack = 1)]
   public struct Base2
   {
      public fixed ushort Val[10];
   }

   [StructLayout(LayoutKind.Sequential, Pack = 1)]
   public struct Core
   {
      fixed WORD wReserved[2];    // always zero
      public WORD wScriptOnFriendDeath; // when friends in party dies, execute script from here
      public WORD wScriptOnDying;  // when dying, execute script from here
      fixed WORD wReserved1[2];    // always zero
   }

   public static void
   Go()
   {
      List<Hero>     listHero;
      byte[]         arrBase, arrBase2, arrCore;
      int            i, ai, j, len, id;
      Base*          lpBase;
      Base2*         lpBase2;
      Core*          lpCore;
      Hero           hero;

      listHero = new List<Hero>();

      arrBase = File.ReadAllBytes($@"{BASE_PATH}\DATA3.smkf");
      arrBase2 = File.ReadAllBytes($@"{BASE_PATH}\DATA6.smkf");
      arrCore = File.ReadAllBytes($@"{CORE_PATH}\SSS2.smkf");

      len = OBJ_SYS2_BEGIN - OBJ_HERO_BEGIN;

      fixed (byte* tmpBase = arrBase)
      fixed (byte* tmpBase2 = arrBase2)
      fixed (byte* tmpCore = arrCore)
      {
         lpBase = (Base*)tmpBase;
         lpBase2 = (Base2*)tmpBase2;

         lpCore = (Core*)tmpCore;
         lpCore += OBJ_HERO_BEGIN;

         S_MKDIR($@"{OUTPUT_PATH}\Hero");

         for (i = 0; i < len; i++, lpCore++)
         {
            ai = i + 1;

            hero = new Hero
            {
               Name = GoMsg.listWord[OBJ_HERO_BEGIN + i],
               CoveredBy = lpBase->rgwCoveredBy[i],
               //WalkFrames = lpBase->rgwWalkFrames[i],
               WalkFrames = 9,
               Resistance = new Resistance
               {
                  _Elemental = new Resistance.Elemental
                  {
                     Wind = lpBase->Wind[i] / 10,
                     Thunder = lpBase->Thunder[i] / 10,
                     Water = lpBase->Water[i] / 10,
                     Fire = lpBase->Fire[i] / 10,
                     Earth = lpBase->Earth[i] / 10,
                  },
                  Physics = 0.3f,
                  Poison = lpBase->rgwPoisonResistance[i] / 10,
                  Sorcery = 0.3f,
                  Ultimate = 0,
                  Leechcraft = 0,
                  Light = 0,
                  Evil = 0,
               },
               _Magic = new Hero.Magic
               {
                  Cooperative = Math.Max(lpBase->rgwCooperativeMagic[i] - OBJ_MAGIC_BEGIN + 1, 0),
                  listLearned = new List<int>(),
                  listLearnable = new List<Hero.Magic.Learnable>(),
               },
               _HeroBase = new HeroBase
               {
                  AvatarID = lpBase->rgwAvatar[i],
                  SpriteIDInBattle = lpBase->rgwSpriteNumInBattle[i],
                  SpriteID = lpBase->rgwSpriteNum[i],
                  AttackAll = lpBase->rgwAttackAll[i],
                  Level = lpBase->rgwLevel[i],
                  MaxHP = lpBase->rgwMaxHP[i],
                  MaxMP = lpBase->rgwMaxMP[i],
                  HP = lpBase->rgwHP[i],
                  MP = lpBase->rgwMP[i],
                  _Equip = new HeroBase.Equip
                  {
                     Head = Math.Max(lpBase->Head[i] - OBJ_ITEM_BEGIN + 1, 0),
                     Body = Math.Max(lpBase->Body[i] - OBJ_ITEM_BEGIN + 1, 0),
                     Armour = Math.Max(lpBase->Armour[i] - OBJ_ITEM_BEGIN + 1, 0),
                     Backside = Math.Max(lpBase->Backside[i] - OBJ_ITEM_BEGIN + 1, 0),
                     Hand = Math.Max(lpBase->Hand[i] - OBJ_ITEM_BEGIN + 1, 0),
                     Foot = Math.Max(lpBase->Foot[i] - OBJ_ITEM_BEGIN + 1, 0),
                  },
                  _Attribute = new HeroBase.Attribute
                  {
                     AttackStrength = lpBase->rgwAttackStrength[i],
                     MagicStrength = lpBase->rgwMagicStrength[i],
                     Defense = lpBase->rgwDefense[i],
                     Dexterity = lpBase->rgwDexterity[i],
                     FleeRate = lpBase->rgwFleeRate[i],
                  },
                  PoisonResistance = lpBase->rgwPoisonResistance[i],
                  _ElementalResistance = new HeroBase.ElementalResistance
                  {
                     Wind = lpBase->Wind[i],
                     Thunder = lpBase->Thunder[i],
                     Water = lpBase->Water[i],
                     Fire = lpBase->Fire[i],
                     Earth = lpBase->Earth[i],
                  },
               },
               _Sound = new Hero.Sound
               {
                  Death = lpBase->rgwDeathSound[i],
                  Attack = lpBase->rgwAttackSound[i],
                  Weapon = lpBase->rgwWeaponSound[i],
                  Critical = lpBase->rgwCriticalSound[i],
                  Magic = lpBase->rgwMagicSound[i],
                  Cover = lpBase->rgwCoverSound[i],
                  Dying = lpBase->rgwDyingSound[i],
               },
               _Script = new Hero.Script
               {
                  FriendDeath = GoScript.AddTag(new GoScript.Tag
                  {
                     Addr = lpCore->wScriptOnFriendDeath,
                     Name = $@"Hero_{ai:D5}_FriendDeath",
                  }).Name,
                  Dying = GoScript.AddTag(new GoScript.Tag
                  {
                     Addr = lpCore->wScriptOnDying,
                     Name = $@"Hero_{ai:D5}_Dying",
                  }).Name,
               },
            };

            for (j = 0; j < 32; j++)
            {
               id = lpBase->rgwMagic[j * 6 + i];

               if (id == 0) continue;

               id -= OBJ_MAGIC_BEGIN - 1;

               hero._Magic.listLearned.Add((ushort)id);
            }

            for (j = 0; j < arrBase2.Length / sizeof(int) / 5; j++)
            {
               hero._Magic.listLearnable.Add(new Hero.Magic.Learnable
               {
                  Level = lpBase2[j].Val[2 * i],
                  MagicID = lpBase2[j].Val[2 * i + 1],
               });
            }

            File.WriteAllText(
               $@"{OUTPUT_PATH}\Hero\{ai:D5}.json",
               JsonConvert.SerializeObject(hero, Formatting.Indented)
            );
         }
      }
   }
}
