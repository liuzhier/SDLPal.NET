using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

using static GoMain;
using static PalMap;
using static PalCommon;
using static SafeSys;

using SHORT = System.Int16;
using WORD = System.UInt16;

public unsafe class GoMagic
{
   [StructLayout(LayoutKind.Sequential, Pack = 1)]
   public struct Base
   {
      public WORD wEffect;               // effect sprite
      public WORD wType;                 // type of this magic
      public SHORT wXOffset;
      public SHORT wYOffset;
      public Special rgSpecific;            // have multiple meanings
      public WORD wUnknown;              // FIXME: ???
      public WORD wCostMP;               // MP cost
      public WORD wBaseDamage;           // base damage
      public WORD wElemental;            // elemental (0 = No Elemental, last = poison)
      public SHORT wSound;                // sound played when using this magic

      [StructLayout(LayoutKind.Explicit, Pack = 1)]
      public struct Special
      {
         [FieldOffset(0)]
         public Magic _Magic;

         [FieldOffset(0)]
         public Summon _Summon;

         [StructLayout(LayoutKind.Sequential, Pack = 1)]
         public struct Magic
         {
            public SHORT sLayerOffset;          // limited to non-summon magic.
                                                // actual layer: PAL_Y(pos) + wYOffset + wMagicLayerOffset
            public SHORT wSpeed;                // speed of the effect
            public SHORT wKeepEffect;           // FIXME: ???
            public WORD wFireDelay;            // start frame of the magic fire stage
            public WORD wEffectTimes;          // total times of effect
            public WORD wShake;                // shake screen
            public WORD wWave;                 // wave screen
         }

         [StructLayout(LayoutKind.Sequential, Pack = 1)]
         public struct Summon
         {
            public WORD wSummonEffect;         // summon effect sprite (in F.MKF)
            public WORD Idle;                // speed of the effect
            public WORD Magic;           // FIXME: ???
            public WORD Attack;            // start frame of the magic fire stage
            public SHORT Gamma;          // total times of effect
         }
      }
   }

   [StructLayout(LayoutKind.Sequential, Pack = 1)]
   public struct Core
   {
      public WORD wMagicNumber;      // magic number, according to DATA.MKF #3
      public WORD wReserved1;        // always zero
      public WORD wScriptOnSuccess;  // when magic succeed, execute script from here
      public WORD wScriptOnUse;      // when use this magic, execute script from here
      public WORD wReserved2;        // always zero
      public WORD wFlags;            // flags
   }

   public static void Go()
   {
      List<Magic>    listMagic;
      int            i, ai, len, id;
      bool           fIsSummon;
      string[]       arrDesc;
      Base*          lpBaseOrigin, lpBaseM, lpBaseS;
      Core*          lpCore;
      Magic          magic;
      SummonGold     summon;

      listMagic = new List<Magic>();
      lpBaseOrigin = (Base*)GoData.listDataBuf[4].Item1;
      lpCore = (Core*)GoData.listCoreBuf[2].Item1;
      lpCore += OBJ_MAGIC_BEGIN;
      len = OBJ_ENEMY_BEGIN - OBJ_MAGIC_BEGIN;

      S_MKDIR($@"{DATA_PATH}\Magic");
      S_MKDIR($@"{DATA_PATH}\SummonGold");

      for (i = 0; i < len; i++, lpCore++)
      {
         fIsSummon = false;
         lpBaseM = &lpBaseOrigin[lpCore->wMagicNumber];
         ai = i + 1;
         id = i + OBJ_MAGIC_BEGIN;

         try
         {
            arrDesc = GoMsg.dictDesc[id];
         }
         catch
         {
            arrDesc = new string[0];
         }

         lpBaseS = lpBaseM;
         if (lpBaseM->wType == 9)
         {
            fIsSummon = true;
            lpBaseM = &lpBaseOrigin[lpBaseS->wEffect];

            summon = new SummonGold
            {
               Comment = GoMsg.listWord[id],
               BaseDamage = lpBaseS->wBaseDamage,
               CostMP = lpBaseS->wCostMP,
               SoundID = lpBaseS->wSound,
               _Frame = new SummonGold.Frame
               {
                  BitmapID = (ushort)(lpBaseS->rgSpecific._Summon.wSummonEffect + 10),
                  OffsetPos = new Pos
                  {
                     X = lpBaseS->wXOffset,
                     Y = lpBaseS->wYOffset,
                  },
                  Idle = lpBaseS->rgSpecific._Summon.Idle,
                  Magic = lpBaseS->rgSpecific._Summon.Magic,
                  Attack = lpBaseS->rgSpecific._Summon.Attack,
                  Gamma = lpBaseS->rgSpecific._Summon.Gamma,
               },
               _Script = new SummonGold.Script
               {
                  Success = GoScript.AddTag(new GoScript.Tag
                  {
                     Addr = lpCore->wScriptOnSuccess,
                     Name = $@"SummonGold_{(lpBaseS->rgSpecific._Summon.wSummonEffect + 1):D5}_Success",
                  }).Name,
                  Use = GoScript.AddTag(new GoScript.Tag
                  {
                     Addr = lpCore->wScriptOnUse,
                     Name = $@"SummonGold_{(lpBaseS->rgSpecific._Summon.wSummonEffect + 1):D5}_Use",
                  }).Name,
               },
            };

            File.WriteAllText(
               $@"{DATA_PATH}\SummonGold\{(lpBaseS->rgSpecific._Summon.wSummonEffect + 1):D5}.json",
               JsonConvert.SerializeObject(summon, Formatting.Indented)
            );
         }

         magic = new Magic
         {
            Name = GoMsg.listWord[id],
            Description = arrDesc,
            BaseDamage = lpBaseM->wBaseDamage,
            CostMP = lpBaseM->wCostMP,
            SoundID = lpBaseM->wSound,
            SummonID = (short)(fIsSummon ? (lpBaseS->rgSpecific._Summon.wSummonEffect + 1) : -1),
            _Genus = new Magic.Genus
            {
               Sword = lpBaseM->wElemental == 0,
               Wind = lpBaseM->wElemental == 1,
               Thunder = lpBaseM->wElemental == 2,
               Water = lpBaseM->wElemental == 3,
               Fire = lpBaseM->wElemental == 4,
               Earth = lpBaseM->wElemental == 5,
               Poison = lpBaseM->wElemental == 6,
               Sorcery = false,
               Ultimate = false,
               Heal = lpBaseM->wElemental == 7,
               Buff = false,
            },
            _AttackMode = (Magic.AttackMode)lpBaseM->wType,
            _Frame = new Magic.Frame
            {
               BitmapID = lpBaseM->wEffect,
               OffsetPos = new Pos
               {
                  X = lpBaseM->wXOffset,
                  Y = lpBaseM->wYOffset,
               },
               LayerOffset = lpBaseM->rgSpecific._Magic.sLayerOffset,
               Preview = lpBaseM->rgSpecific._Magic.wFireDelay,
               Speed = lpBaseM->rgSpecific._Magic.wSpeed,
               KeepEffect = lpBaseM->rgSpecific._Magic.wKeepEffect == -1,
               TotalTimes = lpBaseM->rgSpecific._Magic.wEffectTimes,
               Shake = lpBaseM->rgSpecific._Magic.wShake,
               Wave = lpBaseM->rgSpecific._Magic.wWave,
            },
            _Scope = new Magic.Scope
            {
               UsableOutsideBattle = S_B(lpCore->wFlags & (1 << 0)),
               UsableInBattle = S_B(lpCore->wFlags & (1 << 1)),
               UsableToHero = !S_B(lpCore->wFlags & (1 << 3)),
               UsableToEnemy = S_B(lpCore->wFlags & (1 << 3)),
               ApplyToAllHero = S_B(lpCore->wFlags & (1 << 4)),
               ApplyToAllEnemy = S_B(lpCore->wFlags & (1 << 4)),
            },
            _Script = new Magic.Script
            {
               Success = GoScript.AddTag(new GoScript.Tag
               {
                  Addr = fIsSummon ? 0x0000 : lpCore->wScriptOnSuccess,
                  Name = $@"Magic_{ai:D5}_Success",
               }).Name,
               Use = GoScript.AddTag(new GoScript.Tag
               {
                  Addr = fIsSummon ? 0x0000 : lpCore->wScriptOnUse,
                  Name = $@"Magic_{ai:D5}_Use",
               }).Name,
            },
         };

         File.WriteAllText(
            $@"{DATA_PATH}\Magic\{ai:D5}.json",
            JsonConvert.SerializeObject(magic, Formatting.Indented)
         );
      }
   }
}
