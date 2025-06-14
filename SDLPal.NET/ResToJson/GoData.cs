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

public unsafe class GoData
{
   [StructLayout(LayoutKind.Sequential, Pack = 1)]
   public struct C_Shop
   {
      public fixed short item[9];
   }

   [StructLayout(LayoutKind.Sequential, Pack = 1)]
   public struct C_EnemyTeam
   {
      public fixed short enemy[5];
   }

   [StructLayout(LayoutKind.Sequential, Pack = 1)]
   public struct C_BattleField
   {
      public fixed short val[6];
   }

   public   static   List<List<int>>      listShop          = new List<List<int>>();
   public   static   List<List<int>>      listEnemyTeam     = new List<List<int>>();
   public   static   List<List<int>>      listLevelExp      = new List<List<int>>();
   public   static   List<BattleField>    listBattleField   = new List<BattleField>();

   public class T_EnemyTeam
   {
      public int[] team1 = new int[5];
      public int[] team2 = new int[3];
      public int[] team3 = new int[1];
   }

   public class T_LevelExp
   {
      public int Level;
      public int Exp;
   }

   public static void
   Go()
   {
      string               path;
      byte[]               arrData;
      int                  i, j, len, len2, val;
      List<int>            listData;
      C_Shop*              lpShop;
      C_EnemyTeam*         lpEnemyTeam;
      C_BattleField*       lpBattleField;
      short*               lpLevelExp;
      T_EnemyTeam          _TEnemyTeam;
      BattleField          _BattleField;
      List<T_LevelExp>     listLevelExp;

      path = $@"{GoMain.OUTPUT_PATH}\Shop";
      S_MKDIR(path);
      arrData = File.ReadAllBytes($@"{GoMain.BASE_PATH}\Data0.smkf");
      fixed (byte* lpTmp = arrData)
      {
         lpShop = (C_Shop*)lpTmp;

         len = arrData.Length / sizeof(C_Shop);
         len2 = sizeof(C_Shop) / sizeof(ushort);
         for (i = 0; i < len; i++)
         {
            listData = new List<int>();

            for (j = 0; j < len2; j++)
            {
               val = Math.Max(lpShop[i].item[j] - GoMain.OBJ_ITEM_BEGIN + 1, 0);

               if (val > 0)
               {
                  listData.Add(val);
               }
            }

            File.WriteAllText(
               $@"{path}\{(i + 1):D5}.json",
               JsonConvert.SerializeObject(listData, Formatting.Indented)
            );
         }
      }

      path = $@"{GoMain.OUTPUT_PATH}\EnemyTeam";
      S_MKDIR(path);
      arrData = File.ReadAllBytes($@"{BASE_PATH}\Data2.smkf");
      fixed (byte* lpTmp = arrData)
      {
         lpEnemyTeam = (C_EnemyTeam*)lpTmp;

         len = arrData.Length / sizeof(C_EnemyTeam);
         for (i = 0; i < len; i++)
         {
            _TEnemyTeam = new T_EnemyTeam();

            for (j = 0; j < _TEnemyTeam.team1.Length; j++)
            {
               val = lpEnemyTeam[i].enemy[j];

               if (val > 0)
               {
                  val = val - GoMain.OBJ_ENEMY_BEGIN + 1;
               }

               _TEnemyTeam.team1[j] = val;
            }

            for (j = 0; j < _TEnemyTeam.team2.Length; j++)
            {
               _TEnemyTeam.team2[j] = -1;
            }

            for (j = 0; j < _TEnemyTeam.team3.Length; j++)
            {
               _TEnemyTeam.team3[j] = -1;
            }

            File.WriteAllText(
               $@"{path}\{(i + 1):D5}.json",
               JsonConvert.SerializeObject(_TEnemyTeam, Formatting.Indented)
            );
         }
      }

      path = $@"{GoMain.OUTPUT_PATH}\BattleField";
      S_MKDIR(path);
      arrData = File.ReadAllBytes($@"{GoMain.BASE_PATH}\Data5.smkf");
      fixed (byte* lpTmp = arrData)
      {
         lpBattleField = (C_BattleField*)lpTmp;

         len = arrData.Length / sizeof(C_BattleField);
         for (i = 0; i < len; i++)
         {
            _BattleField = new BattleField
            {
               Name = GoMsg.dictBattleField[i],
               VideoWave = lpBattleField[i].val[0],
               _Resistance = new Resistance
               {
                  _Elemental = new Resistance.Elemental
                  {
                     Wind = lpBattleField[i].val[1] / 10.0f,
                     Thunder = lpBattleField[i].val[2] / 10.0f,
                     Water = lpBattleField[i].val[3] / 10.0f,
                     Fire = lpBattleField[i].val[4] / 10.0f,
                     Earth = lpBattleField[i].val[5] / 10.0f,
                  },
                  Physics = 0,
                  Poison = 0,
                  Sorcery = 0,
                  Ultimate = 0,
               },
               _FighterPos = new BattleField.FighterPos
               {
                  Hero = new Pos[]
                  {
                     new Pos
                     {
                        X = 296,
                        Y = 600,
                     },
                     new Pos
                     {
                        X = 388,
                        Y = 562,
                     },
                     new Pos
                     {
                        X = 470,
                        Y = 528,
                     },
                     new Pos
                     {
                        X = 530,
                        Y = 480,
                     },
                  },
                  Team1 = new Pos[]
                  {
                     new Pos
                     {
                        X = 106,
                        Y = 548,
                     },
                     new Pos
                     {
                        X = 258,
                        Y = 466,
                     },
                     new Pos
                     {
                        X = 388,
                        Y = 378,
                     },
                     new Pos
                     {
                        X = 530,
                        Y = 298,
                     },
                     new Pos
                     {
                        X = 670,
                        Y = 230,
                     },
                  },
                  Team2 = new Pos[]
                  {
                     new Pos
                     {
                        X = 30,
                        Y = 364,
                     },
                     new Pos
                     {
                        X = 198,
                        Y = 280,
                     },
                     new Pos
                     {
                        X = 328,
                        Y = 186,
                     },
                  },
                  Team3 = new Pos[]
                  {
                     new Pos
                     {
                        X = 74,
                        Y = 218,
                     },
                  },
               },
            };

            File.WriteAllText(
               $@"{path}\{(i + 1):D5}.json",
               JsonConvert.SerializeObject(_BattleField, Formatting.Indented)
            );
         }
      }

      //
      // The numerical calculation formula has been discovered
      // and no unpacking is required
      //
      return;

      arrData = File.ReadAllBytes($@"{GoMain.BASE_PATH}\Data14.smkf");
      fixed (byte* lpTmp = arrData)
      {
         lpLevelExp = (short*)lpTmp;
         listLevelExp = new List<T_LevelExp>();

         len = arrData.Length / sizeof(short);
         for (i = 1; i < len; i++)
         {
            listLevelExp.Add(
               new T_LevelExp
               {
                  Level = i,
                  Exp  = (int)((25 * (i * i - i)) / 2 + 15),
               }
            );
         }

         File.WriteAllText(
            $@"{GoMain.OUTPUT_PATH}\LevelExp.json",
            JsonConvert.SerializeObject(listLevelExp, Formatting.Indented)
         );
      }
   }
}
