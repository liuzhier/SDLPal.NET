using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Runtime.InteropServices.JavaScript;
using System.Text;
using System.Threading.Tasks;

using static PalCommon;
using static PalMap;
using static PalSave;
using static PalVideo;
using static SafeSys;

public unsafe class PalGlobal
{
   public   static   int      CurrSaveID     = 0;
   public   static   long     FrameNum       = 0;
   public   static   bool     EnterScene     = false;
   public   static   bool     NeedToFadeIn   = false;
   public   static   bool     InBattle       = false;
   public   static   bool     IsPlayingRNG   = false;    // Text drawing is allowed when playing rng videos
   public   static   bool     ShowMoreData   = false;
   public   static   bool     DrawMoreData   = false;

   public   static   PalSave     Save  = new PalSave();
   public   static   PalConst    Const = new PalConst();

   public static void
   InitSave(
      string      pathOrigin
   )
   {
      int            i, j;
      string         path, pathFull, pathFile;
      Scene          scene;
      List<Event>    listEvent;
      Entity         entity;

      //Save.listHeroExperience = PalUnpak.Json2Obj<List<ExperienceAll>>($@"{DATA_PATH}\");

      path = $@"{pathOrigin}\Scene";
      for (i = 1; ; i++)
      {
         pathFull = $@"{path}\{i:D5}";

         if (!Directory.Exists(pathFull))
         {
            break;
         }

         scene = PalUnpak.Json2Obj<Scene>($@"{pathFull}\Scene.json");

         pathFull = $@"{pathFull}\Event";
         listEvent = scene.listEvent;

         for (j = 1; ; j++)
         {
            pathFile = $@"{pathFull}\{j:D5}.json";

            if (!File.Exists(pathFile))
            {
               break;
            }

            listEvent.Add(PalUnpak.Json2Obj<Event>(pathFile));
         }

         Save.listScene.Add(scene);
      }

      entity = Save._Entity;

      path = $@"{DATA_PATH}\Hero";
      for (i = 1; ; i++)
      {
         pathFull = $@"{path}\{i:D5}.json";

         if (!File.Exists(pathFull))
         {
            break;
         }

         entity.Hero.Add(PalUnpak.Json2Obj<Hero>(pathFull));
      }

      path = $@"{DATA_PATH}\Magic";
      for (i = 1; ; i++)
      {
         pathFull = $@"{path}\{i:D5}.json";

         if (!File.Exists(pathFull))
         {
            break;
         }

         entity.Magic.Add(PalUnpak.Json2Obj<Magic>(pathFull));
      }

#if false
      {
         int            heroID, len;
         Hero           hero;
         List<int>      listMagicID;

         for (i = 1; i < entity.Hero.Count; i++)
         {
            hero = S_GetHero(i);

            listMagicID = hero._Magic.listLearned;

            listMagicID.Clear();

            len = S_GetEntity().Magic.Count;

            for (j = 1; j < len; j++)
            {
               listMagicID.Add(j);
            }
         }
      }
#endif // false

      path = $@"{DATA_PATH}\Item";
      for (i = 1; ; i++)
      {
         pathFull = $@"{path}\{i:D5}.json";

         if (!File.Exists(pathFull))
         {
            break;
         }

         entity.Item.Add(PalUnpak.Json2Obj<Item>(pathFull));
      }

#if false
      {
         List<Inventory>      listInventory;

         listInventory = S_GetSave().listInventory;

         listInventory.Clear();

         for (i = 1; i < entity.Item.Count; i++)
         {
            listInventory.Add(new Inventory
            {
               ItemID = i,
               Amount = 10000,
            });
         }
      }
#endif // false

      path = $@"{DATA_PATH}\Enemy";
      for (i = 1; ; i++)
      {
         pathFull = $@"{path}\{i:D5}.json";

         if (!File.Exists(pathFull))
         {
            break;
         }

         entity.Enemy.Add(PalUnpak.Json2Obj<Enemy>(pathFull));
      }

      path = $@"{DATA_PATH}\Poison";
      for (i = 1; ; i++)
      {
         pathFull = $@"{path}\{i:D5}.json";

         if (!File.Exists(pathFull))
         {
            break;
         }

         entity.Poison.Add(PalUnpak.Json2Obj<Poison>(pathFull));
      }
   }

   public static void
   InitConstData()
   {
      int                  i, j, val;
      string               path, pathFull;
      int[]                data;
      Shop                 shop;
      EnemyTeam            team;
      EnemyTeam.TeamID     teamid;

      path = $@"{DATA_PATH}\Shop";
      for (i = 1; ; i++)
      {
         pathFull = $@"{path}\{i:D5}.json";

         if (!File.Exists(pathFull))
         {
            break;
         }

         data = PalUnpak.Json2Obj<int[]>(pathFull);
         shop = new Shop(data.Length);

         for (j = 0; j < data.Length; j++)
         {
            shop.arrItem[j] = Save._Entity.Item[data[j]];
         }

         Const.listShop.Add(shop);
      }

      path = $@"{DATA_PATH}\EnemyTeam";
      for (i = 1; ; i++)
      {
         pathFull = $@"{path}\{i:D5}.json";

         if (!File.Exists(pathFull))
         {
            break;
         }

         teamid = PalUnpak.Json2Obj<EnemyTeam.TeamID>(pathFull);
         team = new EnemyTeam();

         for (j = 0; j < team.Team3.Length; j++)
         {
            val = teamid.team3[j];

            if (val < 0)
            {
               team.Team3[j] = null;
            }
            else
            {
               team.Team3[j] = Save._Entity.Enemy[val];
            }
         }

         for (j = 0; j < team.Team2.Length; j++)
         {
            val = teamid.team2[j];

            if (val < 0)
            {
               team.Team2[j] = null;
            }
            else
            {
               team.Team2[j] = Save._Entity.Enemy[val];
            }
         }

         for (j = 0; j < team.Team1.Length; j++)
         {
            val = teamid.team1[j];

            if (val < 0)
            {
               team.Team1[j] = null;
            }
            else
            {
               team.Team1[j] = Save._Entity.Enemy[val];
            }
         }

         Const.listEnemyTeam.Add(team);
      }

      PalScript.Free();
      PalScript.Init();
   }

   public static void
   Init(
      int      iSaveSlot
   )
   {
      string      pathOrigin;

      CurrSaveID = iSaveSlot;

      if (CurrSaveID == 0)
      {
         pathOrigin = DATA_PATH;

         //Save.listParty.Add(
         //   new Party
         //   {
         //      HeroID = 0,
         //      _Trail = new Trail
         //      {
         //         Pos = new Pos
         //         {
         //            //X = 640,
         //            //Y = 1216,
         //            //X = 656,
         //            //Y = 1352,
         //            //X = 752,
         //            //Y = 168,
         //            X = 880,
         //            Y = 1368,
         //         },
         //         Direction = PalDirection.West,
         //         FrameID = 0,
         //      },
         //   }
         //);

         InitSave(pathOrigin);

         Save.SceneID = 1;
      }
      else
      {
         pathOrigin = $@"{SAVE_PATH}\{CurrSaveID:D2}";

         InitSave(pathOrigin);
      }

      InitConstData();
   }

   public static void
   ReloadInNextTick(
      int      iSaveSlot
   )
   /*++
     Purpose:

       Reload the game IN NEXT TICK, avoid reentrant problems.

     Parameters:

       [IN]  iSaveSlot - Slot of saved game.

     Return value:

       None.

   --*/
   {
      FrameNum = 0;
      CurrSaveID = iSaveSlot;
      EnterScene = true;
      NeedToFadeIn = true;

      PalResource.SetLoadFlags(
         PalResource.LoadFlag.GlobalData
         | PalResource.LoadFlag.Scene
         | PalResource.LoadFlag.RoleSprite
      );
   }

   public static void
   UpdateEquipEffect()
   /*++
     Purpose:

       Update the effects of all equipped items for all players.

     Parameters:

       None.

     Return value:

       None.

   --*/
   {
      //int      i, j, w;

      //memset(&(gpGlobals->rgEquipmentEffect), 0, sizeof(gpGlobals->rgEquipmentEffect));

      //for (i = 0; i < MAX_PLAYER_ROLES; i++)
      //{
      //   for (j = 0; j < MAX_PLAYER_EQUIPMENTS; j++)
      //   {
      //      w = gpGlobals->g.PlayerRoles.rgwEquipment[j][i];

      //      if (w != 0)
      //      {
      //         gpGlobals->g.rgObject[w].item.wScriptOnEquip =
      //            PAL_RunTriggerScript(gpGlobals->g.rgObject[w].item.wScriptOnEquip, (WORD)i);
      //      }
      //   }
      //}
   }
}
