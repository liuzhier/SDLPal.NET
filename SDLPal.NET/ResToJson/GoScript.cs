using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

using static GoMain;
using static GoScene;
using static PalMap;

public unsafe class GoScript
{
   private  static   bool              IsSrcBegin = false;
   public   static   List<string[]>    listFunc;

   public   static   HashSet<Tag>      setTag = new HashSet<Tag>
   {
      new Tag
      {
         Addr = 0x0000,
         Name = "Null",
      }
   };

   public static Tag
   AddTag(
      Tag      tag
   )
   {
      Tag      ret;

      ret = setTag.FirstOrDefault(x => x.Addr == tag.Addr);

      if (ret == null)
      {
         setTag.Add(tag);

         ret = tag;
      }

      return ret;
   }

   public static Tag
   FindTag(
      int      addr
   )
   {
      Tag      ret;

      ret = setTag.FirstOrDefault(x => x.Addr == addr);

      return ret;
   }

   public class Tag
   {
      public   int         Addr;
      public   string      Name;

      public override bool Equals(object obj)
      {
         Tag      other;

         other = obj as Tag;

         if (other == null) return false;

         if (this.Name != other.Name)
         {
            throw new Exception("There is a Script with duplicate tags in GoScript.Tag (HashSet)!!");
         }

         return this.Addr != other.Addr;
      }

      public override int GetHashCode()
      {
         return Addr.GetHashCode();
      }
   }

   [StructLayout(LayoutKind.Sequential, Pack = 1)]
   public struct Core
   {
      public         ushort      Command;
      public   fixed ushort      Parameter[3];
   }

   enum Status
   {
      Confused = 0,  // attack friends randomly
#if PAL_CLASSIC
      Paralyzed,     // paralyzed
#else // PAL_CLASSIC
      Slow,          // slower
#endif // PAL_CLASSIC
      Sleep,         // not allowed to move
      Silence,       // cannot use magic
      Puppet,        // for dead players only, continue attacking
      Bravery,       // more power for physical attacks
      Protect,       // more defense value
      Haste,         // faster
      DualAttack,    // dual attack
      All
   }

   static readonly int[] arrFaceIndex = [
      0,    1,
      11,
      21,   27,
      33,   36,   37,   39,
      40,   41,   43,   44,   45,   46,   47,   48,
      50,   52,   53,   54,   55,   56,   57,   58,   59,
      60,   61,   62,   63,   64,   65,   66,   67,   68,   69,
      70,   72,   73,   74,   75,   76,   77,
      80,   82,   83,   85,   86,   87,   88,
      90,   92
   ];

   static void
   Init()
   {
      string      strJson;

      strJson = File.ReadAllText($@"{CFG_PATH}\Func.json");

      listFunc = JsonConvert.DeserializeObject<List<string[]>>(strJson);
   }

   static string
   MakeFunc(
      Core*    lpCore
   )
   {
      byte[]               arrScene;
      GoScene._Scene*      lpScene;
      BlockPos             block;
      int                  i, Cmd, SceneCount, SceneID, EventID;
      string               strCommand, strName, strFunc, StrDec;
      List<string>         listParameter;
      ushort*              wp;
      short*               sp;

      void
      Addr(
         decimal     Param
      ) =>
      listParameter.Add(
            AddTag(new Tag
            {
               Addr = (int)Param,
               Name = $@"Scr_0x{(int)Param:X4}",
            }).Name
      );

      void
      Str(
         string      str
      )
      {
         listParameter.Add($"{str}");
      }

      void
      Val(
         decimal     Param
      ) =>
      Str($"{Param}");

      void
      Bool(
         decimal     Param
      ) =>
      Str(S_B(Param) ? "true" : "false");

      void
      SEvent()
      {
         Val(SceneID);
         Val(EventID);
      }

      void
      SState(
         decimal Param
      )
      {
         Bool(Param);
         Bool((Param >= 2) ? 1 : 0);
      }

      void
      Block()
      {
         Val(block.X);
         Val(block.Y);
         Val(block.H);
      }

      void
      PStatus(
         ushort      StatusOriginID
      )
      {
         switch ((Status)StatusOriginID)
         {
            case Status.Confused:
#if PAL_CLASSIC
            case Status.Paralyzed:
#else // PAL_CLASSIC
               case Status.Slow:
#endif // PAL_CLASSIC
            case Status.Sleep:
            case Status.Silence:
               Bool(0);
               Val(StatusOriginID);
               break;

            case Status.Puppet:
            case Status.Bravery:
            case Status.Protect:
            case Status.Haste:
            case Status.DualAttack:
               Bool(1);
               Val(StatusOriginID - (decimal)Status.Puppet);
               break;
         }
      }

      void
      Hex(
         long     Value,
         bool     Digit8 = false
      )
      {
         if (Digit8)
         {
            Str($"0x{Value:X8}");
         }
         else
         {
            Str($"0x{Value:X4}");
         }
      }

      void
      Flt(
         float    Value
      )
      {
         Str($"{Value:F2}");
      }

      void
      SMagic(
         decimal     Param
      )
      {
         Val(Math.Max(Param - OBJ_MAGIC_BEGIN + 1, 0));
      }

      void
      SItem(
         decimal     Param
      )
      {
         Val(Math.Max(Param - OBJ_ITEM_BEGIN + 1, 0));
      }

      void
      SPoison(
         decimal     Param
      )
      {
         Val(Math.Max(Param - OBJ_POISON_BEGIN + 1, 0));
      }

      void
      SFace(
         decimal     Param
      )
      {
         int      i, charID, faceID, frameID;

         if (Param == 0)
         {
            Val(0);

            goto end;
         }

         for (i = 1; i < arrFaceIndex.Length; i++)
         {
            if (Param < arrFaceIndex[i])
            {
               charID = i - 1;
               faceID = (int)Param - arrFaceIndex[charID] + 1;
               frameID = 1;
               Str($@"{charID}-{faceID}-{frameID}");

               goto end;
            }
         }

         S_FAILED(
            "GoScript.MakeFunc",
            "Unknown FaceID!"
         );

end:
         return;
      }

      void
      GetSEvent(
         int      EventOriginID
      )
      {
         if (EventOriginID == -1)
         {
            SceneID = -1;
            EventID = -1;
            return;
         }

         if (EventOriginID == 0)
         {
            SceneID = 0;
            EventID = 0;
            return;
         }

         fixed (byte* pTmp = arrScene)
         {
            lpScene = (GoScene._Scene*)pTmp;

            for (i = 1; i < SceneCount; i++)
            {
               if (lpScene[i].wEventObjectIndex > EventOriginID)
               {
                  SceneID = i;
                  EventID = EventOriginID - lpScene[SceneID - 1].wEventObjectIndex;
                  return;
               }
            }

            throw new Exception($@"Out-of-bounds EventOriginID: {EventOriginID}");
         }
      }

      void
      GetBlockPos(
         Pos      pos
      )
      {
         BlockPos    blockPos;

         blockPos = BlockPos.FromPos(pos);

         block.X = blockPos.X;
         block.Y = blockPos.Y;
         block.H = blockPos.H;
      }

      SceneID = -1;
      EventID = -1;
      arrScene = File.ReadAllBytes($@"{CORE_PATH}\SSS1.SMKF");
      SceneCount = arrScene.Length / sizeof(GoScene._Scene);
      block = new BlockPos();

      Cmd = lpCore->Command;
      strCommand = $@"0x{Cmd:X4}";
      strName = "";
      strFunc = null;

      listParameter = new List<string>();

      wp = lpCore->Parameter;
      sp = (short*)lpCore->Parameter;

      for (i = 0; i < listFunc.Count; i++)
      {
         strName = listFunc[i].FirstOrDefault(x => (x == strCommand));

         if (strName != "" && strName != null)
         {
            strName = listFunc[i][0];
            break;
         }
      }

      if (strName == null)
      {
         throw new Exception($@"Unknown command {strCommand}");
      }

      switch (strName)
      {
         case "Dlg":
            strFunc = $@"//{GoMsg.listTalk[wp[0]]}";
            goto end_makefunc;

         case "End":                               // 0x0000
            IsSrcBegin = true;
            //strFunc = "/*========================*/";
            strFunc = "";
            goto end_makefunc;

         case "ReplaceAndPause":                   // 0x0002
         case "Replace":                           // 0x0008
         case "ShowSellItemMenu":                  // 0x0027
         case "ScriptFailed":                      // 0x0041
         case "NPCSetStillTime":                   // 0x004B
         case "WaitForAnyKey":                     // 0x004D
         case "LoadLastSave":                      // 0x004E
         case "FadeToRed":                         // 0x004F
         case "RoleHalveHP":                       // 0x005A
         case "EnemyHalveHP":                      // 0x005B
         case "KillRole":                          // 0x005F
         case "KillEnemy":                         // 0x0060
         case "BattleEnemyEscape":                 // 0x0069
         case "MusicStop":                         // 0x0077
         case "BattleEnd":                         // 0x0078
         case "BattleEnableAuto":                  // 0x008A
         case "VideoRestore":                      // 0x008E
         case "CashHalve":                         // 0x008F
         case "ShowEndingAnimation":               // 0x0096
         case "QuitGame":                          // 0x00A0
         case "PartySetPosToFirstRole":            // 0x00A1
         case "ScreenBackup":                      // 0x00A6
         case "DlgItem":                           // 0x00A7
            break;

         case "ReplaceAndPauseWithNop":            // 0x0002
            Addr(wp[0]);
            Val(wp[1]);
            break;

         case "GotoWithNop":                       // 0x0003
            Addr(wp[0]);
            Val(wp[1]);
            break;

         case "Call":                              // 0x0004
            Addr(wp[0]);
            GetSEvent(sp[1]);
            SEvent();
            break;

         case "VideoUpdate":                       // 0x0005
            Val(wp[0]);
            Bool(wp[1]);
            break;

         case "GotoWithProbability":               // 0x0006
            Val(wp[0]);
            Addr(wp[1]);
            break;

         case "BattleStart":                       // 0x0007
            Val(wp[0]);
            Addr(wp[1]);
            Addr(wp[2]);
            break;

         case "WaitEventAutoScriptRun":            // 0x0009
            Val(wp[0]);
            Bool(wp[1]);
            Bool(wp[2]);
            break;

         case "GotoWithSelect":                    // 0x000A
            Addr(wp[0]);
            break;

         case "EventAnimate":                      // 0x000B; 0x000C; 0x000D; 0x000E; 0x0087
            switch (Cmd)
            {
               case 0x000B:
               case 0x000C:
               case 0x000D:
               case 0x000E:
                  Val(Cmd - 0x000B);
                  Val(2);
                  break;

               case 0x0087:
                  Val(-1);
                  Val(0);
                  break;
            }
            break;

         case "NPCSetDirFrame":                    // 0x000F
            Val(wp[0]);
            Val(wp[1]);
            break;

         case "NPCMoveToBlock":                    // 0x0010; 0x0011; 0x007C; 0x0082
            Val(wp[0]);
            Val(wp[1]);
            Val(wp[2]);
            switch (Cmd)
            {
               case 0x0010:
                  Val(3);
                  Bool(0);
                  break;

               case 0x0011:
                  Val(2);
                  Bool(1);
                  break;

               case 0x007C:
                  Val(4);
                  Bool(1);
                  break;

               case 0x0082:
                  Val(8);
                  Bool(0);
                  break;
            }
            break;

         case "EventSetPosRelToParty":             // 0x0012
            GetSEvent(sp[0]);
            SEvent();
            Val(sp[1]);
            Val(wp[2]);
            break;

         case "EventSetPos":                       // 0x0013
            GetSEvent(sp[0]);
            SEvent();
            Val(sp[1]);
            Val(sp[2]);
            break;

         case "NPCSetFrame":                       // 0x0014
         case "BattleStealFromEnemy":              // 0x006A
            Val(wp[0]);
            break;

         case "RoleSetDirFrame":                   // 0x0015
            Val(wp[2]);
            Val(wp[0]);
            Val(wp[1]);
            break;

         case "EventSetDirFrame":                  // 0x0016
            GetSEvent(sp[0]);
            SEvent();
            Val(wp[1]);
            Val(wp[2]);
            break;

         case "RoleSetAttrExtra":                  // 0x0017
            Val(wp[0]);
            Val(wp[1]);
            Val(sp[2]);
            break;

         case "RoleInstallEquip":                  // 0x0018
            SItem(wp[0]);
            Val(wp[1]);
            break;

         case "RoleModifyAttr":                    // 0x0019
         case "RoleModifyAttrTemp":                // 0x0030
            Val(wp[2]);
            Val(wp[0]);
            Val(sp[1]);
            break;

         case "RoleSetAttr":                       // 0x001A
            Val(wp[2]);
            Val(wp[0]);
            Val(sp[1]);
            break;

         case "RoleModifyHP":                      // 0x001B
            Val(sp[1]);
            Bool(wp[0]);
            break;

         case "RoleModifyMP":                      // 0x001C
            Val(sp[1]);
            Bool(wp[0]);
            break;

         case "RoleModifyHPMP":                    // 0x001D
            Val(sp[1]);
            Bool(wp[0]);
            break;

         case "CashModify":                        // 0x001E
            Val(sp[0]);
            Addr(wp[1]);
            break;

         case "AddItem":                           // 0x001F
            SItem(wp[0]);
            Val(Math.Max((decimal)wp[1], 1));
            break;

         case "RemoveItem":                        // 0x0020
            SItem(wp[0]);
            Val(Math.Max((decimal)wp[1], 1));
            Addr(wp[2]);
            break;

         case "EnemyModifyHP":                     // 0x0021
            Val(sp[1]);
            Bool(wp[0]);
            break;

         case "RoleRevive":                        // 0x0022
            Val(sp[1]);
            Bool(wp[0]);
            break;

         case "RoleUninstallEquip":                // 0x0023
            Val(wp[0]);
            Val(wp[1]);
            break;

         case "EventSetAutoScript":                // 0x0024
            GetSEvent(sp[0]);
            SEvent();
            Addr(wp[1]);
            break;

         case "EventSetTriggerScript":             // 0x0025
            GetSEvent(sp[0]);
            SEvent();
            Addr(wp[1]);
            break;

         case "ShowBuyItemMenu":                   // 0x0026
            Val(wp[0]);
            break;

         case "EnemyApplyPoison":                  // 0x0028
            SPoison(wp[1]);
            Bool(wp[0]);
            break;

         case "RoleApplyPoison":                   // 0x0029
            SPoison(wp[1]);
            Bool(wp[0]);
            break;

         case "EnemyCurePoisonByID":               // 0x002A
            SPoison(wp[1]);
            Bool(wp[0]);
            break;

         case "RoleCurePoisonByID":                // 0x002B
            SPoison(wp[1]);
            Bool(wp[0]);
            break;

         case "RoleCurePoisonByLevel":             // 0x002C
            Val(wp[1]);
            Bool(wp[0]);
            break;

         case "RoleSetStatus":                     // 0x002D
         case "EnemySetStatus":                    // 0x002E
            PStatus(wp[0]);
            Val(wp[1]);
            break;

         case "RoleRemoveStatus":                  // 0x002F
            PStatus(wp[0]);
            break;

         case "RoleModifyBattleSpriteTemp":        // 0x0031
            Val(wp[0]);
            break;

         case "CaptureTheEnemy":                   // 0x0033
            Addr(wp[0]);
            break;

         case "MakeElixir":                        // 0x0034
            Addr(wp[0]);
            break;

         case "VideoShake":                        // 0x0035
            Val(wp[0]);
            Val((wp[1] == 0) ? 4 : wp[1]);
            break;

         case "SetRNG":                            // 0x0036
            Val(wp[0]);
            break;

         case "PlayRNG":                           // 0x0037
            Val(wp[0]);
            Val((wp[1] == 0) ? -1 : wp[1]);
            Val((wp[2] == 0) ? 16 : wp[2]);
            break;

         case "SceneTeleport":                     // 0x0038
            Addr(wp[0]);
            break;

         case "DrainHPFromEnemy":                  // 0x0039
            Val(wp[0]);
            break;

         case "RoleFleeBattle":                    // 0x003A
            Addr(wp[0]);
            break;

         case "SetDlgCenter":                      // 0x003B
         case "SetDlgUpper":                       // 0x003C
         case "SetDlgLower":                       // 0x003C
            SFace(wp[0]);
            Hex(wp[1], true);
            Bool(wp[2]);
            break;

         case "SetDlgBox":                         // 0x003E
            Hex(wp[0], true);
            break;

         case "RideNPCToPos":                      // 0x003F; 0x0044; 0x0097
            Val(wp[0]);
            Val(wp[1]);
            Val(wp[2]);
            switch (Cmd)
            {
               case 0x003F:
                  Val(2);
                  break;

               case 0x0044:
                  Val(4);
                  break;

               case 0x0097:
                  Val(8);
                  break;
            }
            break;

         case "EventSetTriggerMode":               // 0x0040
            GetSEvent(sp[0]);
            SEvent();
            Bool((wp[1] >= 4) ? 1 : 0);
            if (wp[1] >= 4)
            {
               Val(wp[1] - 4);
            }
            else if (wp[1] >= 1)
            {
               Val(wp[1] - 1 + 1);
            }
            else
            {
               Val(0);
            }
            break;

         case "SimulateRoleMagic":                 // 0x0042
            SMagic(wp[0]);
            Val(wp[2]);
            Val(wp[1]);
            break;

         case "MusicPlay":                         // 0x0043
            Val(wp[0]);
            Bool((wp[1] != 1) ? 1 : 0);
            Flt((wp[1] == 3 && wp[0] != 9) ? 3.0f : 0.0f);
            break;

         case "SetBattleMusic":                    // 0x0043
            Val(wp[0]);
            break;

         case "PartySetPos":                       // 0x0046
            Val(wp[0]);
            Val(wp[1]);
            Val(wp[2]);
            break;

         case "PlaySound":                         // 0x0047
            Val(wp[0]);
            break;

         case "EventSetState":                     // 0x0049
            GetSEvent(sp[0]);
            SEvent();
            SState(wp[1]);
            break;

         case "SetBattlefield":                    // 0x004A
            Val(wp[0]);
            break;

         case "NPCChase":                          // 0x004C
            Val(wp[1]);
            Val(wp[0]);
            Bool(wp[2]);
            break;

         case "FadeOut":                           // 0x0050
            Val(wp[0]);
            break;

         case "FadeIn":                            // 0x0051
            Val(wp[0]);
            break;

         case "NPCSetVanishTime":                  // 0x0052
            Val(wp[0]);
            break;

         case "SetTimeFilter":                     // 0x0053; 0x0054
            switch (Cmd)
            {
               case 0x0053:
                  Val(1);
                  break;

               case 0x0054:
                  Val(3);
                  break;
            }
            break;

         case "RoleAddMagic":                      // 0x0055
            Val(wp[1]);
            SMagic(wp[0]);
            break;

         case "RoleRemoveMagic":                   // 0x0056
            Val(wp[1]);
            SMagic(wp[0]);
            break;

         case "MagicSetBaseDamageByMP":            // 0x0057
            SMagic(wp[0]);
            Val((wp[1] == 0) ? 8 : wp[1]);
            break;

         case "JumpIfItemCountLessThan":           // 0x0058
            SItem(wp[0]);
            Val(wp[1]);
            Addr(wp[2]);
            break;

         case "SceneEnter":                        // 0x0059
            Val(wp[0]);
            break;

         case "BattleRoleVanish":                  // 0x005C
            Val(wp[0]);
            break;

         case "JumpIfRoleNotPoisoned":             // 0x005D
            SPoison(wp[0]);
            Addr(wp[1]);
            break;

         case "JumpIfEnemyNotPoisoned":            // 0x005E
            SPoison(wp[0]);
            Addr(wp[1]);
            break;

         case "JumpIfRoleNotPoisonedByLevel":      // 0x0061
            Val(0);
            Addr(wp[0]);
            break;

         case "NPCChaseSetRange":                  // 0x0062
            switch (Cmd)
            {
               case 0x0062:
                  Val(0);
                  break;

               case 0x0063:
                  Val(3);
                  break;
            }
            Val(wp[0]);
            break;

         case "JumpIfEnemyHPMoreThanPercentage":   // 0x0064
            Val(wp[0]);
            Addr(wp[1]);
            break;

         case "HeroSetSprite":                     // 0x0065
            Val(wp[0]);
            Val(wp[1]);
            Bool(wp[2]);
            break;

         case "RoleThrowWeapon":                   // 0x0066
            SMagic(wp[0]);
            Val(wp[1]);
            break;

         case "EnemySetMagic":                     // 0x0067
            SMagic(wp[0]);
            Val((wp[1] == 0) ? 10 : wp[1]);
            break;

         case "JumpIfEnemyTurn":                   // 0x0068
            Addr(wp[0]);
            break;

         case "BattleBlowAwayEnemy":               // 0x006B
            Val(sp[0]);
            break;

         case "EventWalkOneStep":                  // 0x006C
            GetSEvent(sp[0]);
            SEvent();
            Val(sp[1]);
            Val(sp[2]);
            break;

         case "SceneSetScripts":                   // 0x006D
            Val(wp[0]);
            Addr(wp[1]);
            Addr(wp[2]);
            break;

         case "RoleMoveOneStep":                   // 0x006E
            Val(sp[0]);
            Val(sp[1]);
            Val(wp[2]);
            break;

         case "EventSyncState":                    // 0x006F
            GetSEvent(sp[0]);
            SEvent();
            SState(sp[1]);
            break;

         case "PartyWalkToBlock":                  // 0x0070; 0x007A; 0x007B
            Val(wp[0]);
            Val(wp[1]);
            Val(wp[2]);
            switch (Cmd)
            {
               case 0x0070:
                  Val(2);
                  break;

               case 0x007A:
                  Val(4);
                  break;

               case 0x007B:
                  Val(8);
                  break;
            }
            break;

         case "VideoWave":                         // 0x0071
            Val(wp[0]);
            Val(sp[1]);
            break;

         case "FadeToScene":                       // 0x0073; 0x009B
            switch (Cmd)
            {
               case 0x0073:
                  Val(-1);
                  Val(wp[0]);
                  break;

               case 0x009B:
                  Val(wp[0]);
                  Val(wp[1]);
                  break;
            }
            break;

         case "JumpIfNotAllRolesFullHP":           // 0x0074
            Addr(wp[0]);
            break;

         case "PartySetRole":                      // 0x0075
            StrDec = "";
            for (i = 0; i < sizeof(Core) / sizeof(ushort) - 1; i++)
            {
               if (S_B(wp[i]))
               {
                  StrDec += $"{wp[i]}";
               }
            }
            listParameter.Add(StrDec);
            break;

         case "FadeFBP":                           // 0x0076
            Val(sp[0]);
            Val(wp[1]);
            break;

         case "JumpIfHeroInParty":                 // 0x0076
            Val(wp[0]);
            Val(wp[1]);
            break;

         case "EventModifyPos":                    // 0x007D
            GetSEvent(sp[0]);
            SEvent();
            Val(sp[1]);
            Val(sp[2]);
            break;

         case "EventSetLayer":                     // 0x007E
            GetSEvent(sp[0]);
            SEvent();
            Val(wp[1]);
            break;

         case "ViewportMove":                      // 0x007F
            Val(sp[0]);
            Val(sp[1]);
            Val(sp[2]);
            break;

         case "ToggleDayNight":                    // 0x0080
            Bool((sp[0] != 1) ? 1 : 0);
            break;

         case "JumpIfPartyNotFacingEvent":         // 0x0081
            GetSEvent(sp[0]);
            SEvent();
            Val(wp[1]);
            Addr(wp[2]);
            break;

         case "JumpIfEventNotInZone":              // 0x0083
            GetSEvent(sp[0]);
            SEvent();
            Val(wp[1]);
            Addr(wp[2]);
            break;

         case "EventSetPosToPartyAndObstacle":     // 0x0084
            GetSEvent(sp[0]);
            SEvent();
            SState(sp[1]);
            Addr(wp[2]);
            break;

         case "Delay":                             // 0x0085
            Val(wp[0]);
            break;

         case "JumpIfItemNotEquipped":             // 0x0086
            SItem(wp[0]);
            Val(wp[1]);
            Addr(wp[2]);
            break;

         case "MagicSetBaseDamageByMoney":         // 0x0088
            SMagic(wp[0]);
            Flt(0.4f);
            break;

         case "BattleSetResult":                   // 0x0089
            Val(sp[0]);
            break;

         case "SetPalette":                        // 0x008B
            Val(wp[0]);
            break;

         case "FadeColor":                         // 0x008C
            Val(wp[1]);
            Val(wp[0]);
            Bool(wp[2]);
            break;

         case "RoleModifyLevel":                   // 0x008D
            Val(sp[0]);
            break;

         case "ObjectSetScript":                   // 0x0090
            if (wp[0] >= 0x0024 && wp[0] <= 0x0029)
            {
               Val(0);
               Val(wp[0] - 0x0024);
            }
            else if (wp[0] >= 0x003D && wp[0] <= 0x0126)
            {
               Val(1);
               Val(wp[0] - 0x003D);
            }
            else if (wp[0] >= 0x0127 && wp[0] <= 0x018D)
            {
               Val(2);
               Val(wp[0] - 0x0127);
            }
            else if (wp[0] >= 0x018E && wp[0] <= 0x0226)
            {
               Val(3);
               Val(wp[0] - 0x018E);
            }
            else if (wp[0] >= 0x0227 && wp[0] <= 0x0234)
            {
               Val(4);
               Val(wp[0] - 0x0227);
            }
            Val(wp[2]);
            Addr(wp[1]);
            break;

         case "JumpIfEnemyNotFirstOfKind":         // 0x0091
            Addr(wp[0]);
            break;

         case "ShowRoleMagicAction":               // 0x0092
            Val(wp[0]);
            break;

         case "VideoFadeAndUpdate":                // 0x0093
            Val(short.Abs(sp[0]));
            Bool((sp[0] >= 0) ? 1 : 0);
            break;

         case "JumpIfEventStateMatches":           // 0x0094
            GetSEvent(sp[0]);
            SEvent();
            SState(wp[1]);
            Addr(wp[2]);
            break;

         case "JumpIfCurrentSceneMatches":         // 0x0095
            GetSEvent(sp[0]);
            Val(SceneID);
            Addr(wp[1]);
            break;

         case "PartySetFollower":                  // 0x0098
            for (i = 0; i < 3; i++)
            {
               if (S_B(wp[i]))
               {
                  Val(wp[i]);
               }
            }
            break;

         case "SceneSetMap":                       // 0x0099
            GetSEvent(sp[0]);
            Val(SceneID);
            Val(wp[1]);
            break;

         case "EventSetStateSequence":             // 0x009A
            GetSEvent(sp[0]);
            SEvent();
            GetSEvent(sp[1]);
            SEvent();
            SState(sp[2]);
            break;

         case "EnemyClone":                        // 0x009C
            Val(wp[0]);
            Addr(wp[1]);
            break;

         case "EnemySummonMonster":                // 0x009E
            Val(wp[0]);
            Val(wp[1]);
            Addr(wp[2]);
            break;

         case "EnemyTransform":                    // 0x009F
            Val(wp[0]);
            break;

         case "JumpToRandomInstruction":           // 0x00A2
            Val(wp[0]);
            break;

         case "PlayCDOrMusic":                     // 0x00A3
            Val(wp[0]);
            Val(wp[1]);
            break;

         case "ScrollFBP":                         // 0x00A4
            Val(wp[0]);
            Val(wp[1]);
            break;

         case "ShowFBPWithSprite":                 // 0x00A5
            Val(wp[0]);
            Val(wp[1]);
            break;

         default:
            throw new Exception($@"Unknown command {strCommand}: {strName} ");
      }

      strFunc = string.Join(", ", listParameter);
      strFunc = $"{strName}({strFunc})";

   end_makefunc:
      return strFunc;
   }

   public static void
   Go()
   {
      byte[]            arrCore;
      int               i, len;
      string            path;
      Tag               tag;
      List<string>      listStr;
      Core*             lpCore;

      Init();

      listStr = new List<string>();

      arrCore = File.ReadAllBytes($@"{CORE_PATH}\SSS4.smkf");

      len = arrCore.Length / sizeof(Core);

      fixed (byte* tmpCore = arrCore)
      {
         lpCore = (Core*)tmpCore;

         for (i = 0; i < len; i++, lpCore++)
         {
            if (IsSrcBegin)
            {
               IsSrcBegin = false;

               AddTag(new Tag
               {
                  Addr = i,
                  Name = $@"Scr_0x{i:X4}",
               });
            }

            listStr.Add(MakeFunc(lpCore));
         }
      }

      path = $@"{OUTPUT_PATH}\Script";
      S_MKDIR(path);
      using (StreamWriter writer = new StreamWriter($@"{path}\ScriptEntry.js"))
      {
         for (i = 0; i < listStr.Count; i++)
         {
            tag = FindTag(i);

            if (tag != null)
            {
               writer.WriteLine($@"[{tag.Name}]");
            }

            writer.WriteLine(listStr[i]);
         }
      }
   }
}
