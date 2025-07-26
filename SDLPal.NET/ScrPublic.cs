using SDL3;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Runtime.InteropServices.JavaScript;
using System.Text;
using System.Threading.Tasks;

using static PalCommon;
using static PalGame;
using static PalMap;
using static PalSave;
using static PalVideo;
using static PalVideo.Screen;
using static SafeSys;
using static Script;

public unsafe partial class PalScript
{
   public   static   ReadOnlySpan<char>         FUNC_DLG    => "Dlg".AsSpan();
   public   static   Dictionary<string, int>    dictScrTag  = new Dictionary<string, int>();
   public   static   Dictionary<int, string>    dictScrAddr = new Dictionary<int, string>();
   public   static   List<Script>               listScript  = new List<Script>();
   
   public   static   bool     g_fScriptSuccess     = true;
   public   static   bool     g_fUpdatedInBattle   = false;

   public static void
   Init()
   {
      int                     i, begin, end, addr;
      List<string>            listArg;
      ReadOnlySpan<char>      entry, name, tmp;

      using (var reader = new StreamReader($@"{DATA_PATH}\Script\ScriptEntry.js", Encoding.UTF8))
      {
         for (i = 1, addr = 0; ; i++)
         {
            //
            // Read a line of text
            //
            entry = reader.ReadLine().AsSpan();

            if (entry == null)
            {
               //
               // The end of the text has been read
               //
               break;
            }

            entry = entry.Trim();
            listArg = [];

            if (entry == "")
            {
               //
               // An empty line is the sign of the end of the script
               //
               name = "End";
            }
            else
            {
               //
               // Check the script flag
               //
               if (entry.StartsWith('[') && entry.EndsWith(']'))
               {
                  //
                  // Script address
                  //
                  // Extract the address name
                  //
                  entry = entry[1..(entry.Length - 1)].Trim();

                  //
                  // Put the addresses into the list
                  //
                  dictScrTag[entry.ToString()] = addr;
                  continue;
               }
               else if (entry.StartsWith("//"))
               {
                  //
                  // Dialogue script
                  //
                  // Extract the dialogue
                  //
                  name = FUNC_DLG;
                  listArg.Add(entry.Slice(2).ToString()); 
               }
               else if (entry.EndsWith(')'))
               {
                  //
                  // Call the function
                  //
                  // Start splitting the function name and parameter list
                  //
                  name = entry[0..entry.IndexOf('(')].Trim();
                  begin = entry.IndexOf('(') + 1;
                  end = entry.Length - 1;

                  if (end > begin)
                  {
                     entry = entry[begin..end].Trim();

                     foreach (Range range in entry.Split(','))
                     {
                        listArg.Add(entry[range].Trim().ToString());
                     }
                  }
               }
               else
               {
                  //
                  // Syntax error
                  //
                  S_FAILED(
                     "Script.Init",
                     $"Syntax error! Line({i}): '{entry.ToString()}'"
                  );
                  continue;
               }
            }

            //
            // Add the function information to the list
            //
            AddScrFunc(name.ToString(), listArg, i);

            //
            // Address increase
            //
            addr++;
         }
      }

      if (listScript.Count > 0 && listScript[^1].FuncName != "End")
      {
         //
         // If the last function is not End(),
         // add it to prevent the last script block from failing to exit normally
         //
         AddScrFunc("End", null);
      }
   }

   public static void
   AddAddr(
      string      strTag,
      int         iAddr
   )
   {
      dictScrTag.Add(strTag, iAddr);
      dictScrAddr.Add(iAddr, strTag);
   }

   public static void
   AddScrFunc(
      string            name,
      List<string>      args,
      int               lineID = -1
   )
   {
      int                  i, j, len;
      bool                 fIsList;
      string               strVal;
      Script.ArgType[]     arrArgType;
      Script.Arg[]         arrArg;
      Script.ArgType       argType;

      Script.GetFuncArgType(name, out arrArgType, lineID);

      fIsList = (arrArgType.Length > 0) && (arrArgType[0] == ArgType.LIST);
      arrArg = new Script.Arg[fIsList ? args.Count : arrArgType.Length];
      len = arrArg.Length;

      for (i = 0; i < len; i++)
      {
         arrArg[i] = new Script.Arg();
         strVal = args[i];
         j = fIsList ? 1 : i;

         switch (arrArgType[j])
         {
            case Script.ArgType.CHAR:
               arrArg[i].CHAR = S_CHAR(strVal);
               break;

            case Script.ArgType.BYTE:
            case Script.ArgType.BX:
            case Script.ArgType.BY:
            case Script.ArgType.BH:
               arrArg[i].BYTE = S_BYTE(strVal);
               break;

            case Script.ArgType.SHORT:
            case Script.ArgType.X:
            case Script.ArgType.Y:
               arrArg[i].SHORT = S_SHORT(strVal);
               break;

            case Script.ArgType.WORD:
               arrArg[i].WORD = S_WORD(strVal);
               break;

            case Script.ArgType.INT:
            case Script.ArgType.SCENE:
            case Script.ArgType.EVENT:
            case Script.ArgType.DIRECTION:
               arrArg[i].INT = S_INT(strVal);
               break;

            case Script.ArgType.DWORD:
               arrArg[i].DWORD = S_DWORD(strVal);
               break;

            case Script.ArgType.LONG:
               arrArg[i].LONG = S_LONG(strVal);
               break;

            case Script.ArgType.QWORD:
               arrArg[i].QWORD = S_QWORD(strVal);
               break;

            case Script.ArgType.BOOL:
               arrArg[i].BOOL = S_BOOL(strVal);
               break;

            case Script.ArgType.FLOAT:
               arrArg[i].FLOAT = S_FLOAT(strVal);
               break;

            case Script.ArgType.STR:
            case Script.ArgType.ADDR:
               arrArg[i].STR = strVal;
               break;
         }
      }

      //
      // Put the function parsing result into the script list
      //
      listScript.Add(new()
      {
         FuncName = name,
         arrArg = arrArg,
      });
   }

   public static string
   MakeFunc(
      Script      scr
   )
   {
      int                  i, j;
      bool                 fIsList;
      StringBuilder        func;
      Script.Arg           arg;
      Script.ArgType[]     arrArgType;

      if (!Script.FuncArgType.TryGetValue(scr.FuncName, out arrArgType))
      {
         S_FAILED(
            "Script.MakeFunc",
            $"Unknown script function: {scr.FuncName}"
         );
      }

      func = new StringBuilder($"{scr.FuncName}(");
      fIsList = (arrArgType.Length > 0) && (arrArgType[0] == ArgType.LIST);

      for (i = 0; i < scr.arrArg.Length; i++)
      {
         arg = scr.arrArg[i];

         if (i != 0)
         {
            func.Append(", ");
         }

         j = fIsList ? 1 : i;

         switch (arrArgType[j])
         {
            case Script.ArgType.LONG:
               func.Append($"{arg.LONG}");
               break;

            case Script.ArgType.DWORD:
               func.Append($"{arg.DWORD}");
               break;

            case Script.ArgType.BOOL:
               func.Append($"{arg.BOOL}");
               break;

            case Script.ArgType.FLOAT:
               func.Append($"{arg.FLOAT}");
               break;

            case Script.ArgType.STR:
               func.Append(arg.STR);
               break;

            default:
               func.Append($"{arg.INT}");
               break;
         }
      }

      func.Append(")");

      return func.ToString();
   }

   public static int
   GetScrAddr(
      string      strAddrName
   )
   {
      int      addr;

      strAddrName = strAddrName.Trim();

      if (!dictScrTag.TryGetValue(strAddrName, out addr))
      {
         S_FAILED(
            "Script.GetScrAddr",
            $"Unknown script tag: {strAddrName}"
         );
      }

      return addr;
   }

   public static Script
   GetScript(
      int      iScrAddr
   )
   {
      string      strTag;

      if (iScrAddr >= listScript.Count)
      {
         if (!dictScrAddr.TryGetValue(iScrAddr, out strTag))
         {
            strTag = "Undefined";
         }

         S_FAILED(
            "Script.GetScript",
            $"The script address [{strTag}: 0x{iScrAddr:X4}] does not exist"
         );
      }

      return listScript[iScrAddr];
   }

   public static int
   RunPublic(
      int      iScrAddr,
      int      iSceneID,
      int      iEvtID
   )
   /*++
     Purpose:

       Interpret and execute one instruction in the script.

     Parameters:

       [IN]  iScrAddr - The script entry to execute.

       [IN]  iSceneID - The ID of the scene where the event object of the calling script is located..

       [IN]  iEvtID - The event object ID which invoked the script.

     Return value:

       The address of the next script instruction to execute.

   --*/
   {
      int                  roleID, heroID, i, j, x, y, w, sceneCurrID, evtCurrID;
      Scene                scene, sceneCurr;
      Event                evt, evtCurr;
      Script               scr;
      PalSave              save;
      Party                party;
      Trail                trail;
      BlockPos             bposTmp;
      Pos                  posTmp;
      PalDirection         dirCurr;
      Script.Arg[]         args;
      Script.ArgType[]     arrArgType;

      scr = listScript[iScrAddr];
      args = scr.arrArg;
      Script.GetFuncArgType(scr.FuncName, out arrArgType);

      save = S_GetSave();
      bposTmp = new BlockPos();

      sceneCurrID = -1;
      evtCurrID = -1;
      scene = null;
      evt = null;
      sceneCurr = null;
      evtCurr = null;
      trail = null;

      if (iSceneID != 0)
      {
         scene = S_GetScene(iSceneID);

         if (iEvtID != 0 && iEvtID != -1 && iEvtID < scene.listEvent.Count)
         {
            evt = scene.listEvent[iEvtID];
         }
      }

      if (arrArgType.Length >= 1)
      {
         switch (arrArgType[0])
         {
            case ArgType.SCENE:
               switch (args[0].SCENE)
               {
                  case -1:
                  case 0:
                     sceneCurrID = save.SceneID;
                     sceneCurr = save.CurrScene;
                     break;

                  default:
                     if (args[0].SCENE < save.listScene.Count)
                     {
                        sceneCurrID = args[0].SCENE;
                        sceneCurr = save.listScene[sceneCurrID];
                     }
                     break;
               }
               break;

            case ArgType.BX:
               bposTmp.X = args[0].BYTE;
               break;
         }
      }

      if (arrArgType.Length >= 2)
      {
         switch (arrArgType[1])
         {
            case ArgType.EVENT:
               switch (args[1].EVENT)
               {
                  case -1:
                  case 0:
                     evtCurrID = iEvtID;
                     break;

                  default:
                     evtCurrID = args[1].EVENT;
                     break;
               }

               if (args[1].EVENT < sceneCurr.listEvent.Count)
               {
                  evtCurr = sceneCurr.listEvent[evtCurrID];

                  //
                  // Generally speaking, automatic scripts cannot directly use this variable
                  //
                  trail = evtCurr._Frame.Trail;
               }
               break;

            case ArgType.BY:
               bposTmp.Y = args[1].BYTE;
               break;
         }
      }
      
      if (arrArgType.Length >= 3)
      {
         switch (arrArgType[2])
         {
            case ArgType.BH:
               bposTmp.H = args[2].BYTE;
               break;
         }
      }

      //roleID = (scr.iP(0) < MAX_HERO_NUM) ? scr.iP(0) : 0;
      //heroID = PalScene.GetParty(roleID).HeroID;

      switch (scr.FuncName)
      {
         case "EventAnimate":
            //
            // 0x000B, 0x000C, 0x000D, 0x000E, 0x0087
            // walk one step
            //
            if (args[0].INT != -1)
            {
               evt._Frame.Trail.Direction = args[0].DIRECTION;
            }
            PalScene.NPCWalkOneStep(iSceneID, iEvtID, args[1].INT);
            break;

         case "NPCSetDirFrame":
            //
            // 0x000F
            // Set the direction and/or gesture for event object
            //
            if (args[0].DIRECTION != PalDirection.Unknown)
            {
               evt._Frame.Trail.Direction = args[0].DIRECTION;
            }
            if (args[1].INT != -1)
            {
               evt._Frame.Trail.FrameID = args[1].INT;
            }
            break;

         case "NPCMoveToBlock":
            //
            // 0x0010, 0x0011, 0x007C, 0x0082
            // Walk straight to the specified position
            //
            if (!args[4].BOOL || S_B((iEvtID & 1) ^ (PalGlobal.FrameNum & 1)))
            {
               if (!PalScene.NPCWalkTo(iSceneID, iEvtID, bposTmp, args[3].INT))
               {
                  iScrAddr--;
               }
            }
            else
            {
               iScrAddr--;
            }
            break;

         case "EventSetPosRelToParty":
            //
            // 0x0013
            // Set the position of the event object, relative to the party
            //
            posTmp = S_GetPartyPos();
            trail.Pos.X = posTmp.X + args[2].X;
            trail.Pos.Y = posTmp.Y + args[3].Y;
            break;

         case "EventSetPos":
            //
            // 0x0013
            // Set the position of the event object
            //
            trail.Pos.X = args[2].X;
            trail.Pos.Y = args[3].Y;
            break;

         case "NPCSetFrame":
            //
            // 0x0014
            // Set the gesture of the event object
            //
            evt._Frame.Trail.FrameID = args[0].INT;
            evt._Frame.Trail.Direction = PalDirection.South;
            break;

         case "RoleSetDirFrame":
            //
            // 0x0015
            // Set the direction and gesture for a party member
            //
            trail = S_GetRoleTrail(args[0].INT);
            S_SetRoleDirection(args[0].INT, args[1].DIRECTION);
            //trail.Direction = (PalDirection)scr.INT(1);
            trail.FrameID = args[2].INT;
            break;

         case "EventSetDirFrame":
            //
            // 0x0016
            // Set the direction and gesture for an event object
            //
            //trail = evtCurr._Frame._Trail;
            if (args[0].BOOL && args[1].BOOL)
            {
               trail.Direction = args[2].DIRECTION;
               trail.FrameID = args[3].INT;
            }
            break;

         case "RoleModifyHPMP":
            //
            // 0x001D
            // Increase/decrease player's HP and MP
            //
            if (args[1].BOOL)
            {
               //
               // Apply to everyone
               //
               for (i = 0; i <= S_GetSave().PartySize; i++)
               {
                  w = S_GetRole(i).HeroID;
                  S_HeroModifyHPMP(w, args[1].INT, args[1].INT);
               }
            }
            else
            {
               //
               // Apply to one player.
               // The wEventObjectID parameter should indicate the player role.
               //
               if (!S_HeroModifyHPMP(iEvtID, args[1].INT, args[1].INT))
               {
                  g_fScriptSuccess = false;
               }
            }
            break;

         case "CashModify":
            //
            // 0x001E
            // Increase or decrease cash by the specified amount
            //
            if (args[0].INT < 0 && save.Cash < -args[0].INT)
            {
               //
               // not enough cash
               //
               //iScrAddr = scr.ADDR(1) - 1;
               iScrAddr = args[1].ADDR;
            }
            else
            {
               save.Cash += args[0].INT;
            }
            break;

         case "AddItem":
            //
            // 0x001F
            // Add item to inventory
            //
            S_InventoryAddItem(args[0].INT, args[1].INT);
            break;

         case "RemoveItem":
            //
            // 0x0020
            // Remove item from inventory
            //
            {
               Hero     hero;
               int*     ipEquip;

               x = args[0].INT;     // Item ID
               y = args[1].INT;     // Number of Item

               if (y == 0)
               {
                  //
                  // No operation is required
                  //
                  break;
               }

               //
               // Count the actual quantity of this item that exists
               //
               w = S_InventoryCountItem(x);

               var RemoveRet = S_InventoryAddItem(x, -y);

               if (!RemoveRet.fIsSuccess)
               {
                  //
                  // Try removing equipped item
                  //
                  for (i = 0; i <= S_GetSave().PartySize; i++)
                  {
                     hero = S_GetHero(S_GetRole(i).HeroID);

                     fixed (HeroBase.Equip* lpEquip = &hero._HeroBase._Equip)
                     {
                        for (j = 0; j < MAX_PLAYER_EQUIPMENTS; j++)
                        {
                           ipEquip = (int*)lpEquip;

                           if (ipEquip[j] == x)
                           {
                              //
                              // Remove this equipment from the team member
                              //
                              ipEquip[j] = 0;

                              S_RemoveEquipEffect(w, (EquipPart)j);

                              if (--x == 0)
                              {
                                 goto case_RemoveItem_end;
                              }
                           }
                        }
                     }
                  }
               }
            }
         case_RemoveItem_end:
            break;

         case "EventSetAutoScript":
            //
            // 0x0024
            // Set the autoscript entry address for an event object
            //
            if (args[0].INT != 0)
            {
               evtCurr._Script._ScrAuto = args[2].ADDR;
            }
            break;

         case "EventSetTriggerScript":
            //
            // 0x0025
            // Set the trigger script entry address for an event object
            //
            if (args[0].INT != 0)
            {
               evtCurr._Script._SrcTrigger = args[2].ADDR;
            }
            break;

         case "SetRNG":
            //
            // 0x0036
            // Set the current playing RNG animation
            //
            PalGlobal.CurrRngID = args[0].INT;
            break;

         case "PlayRNG":
            //
            // 0x0037
            // Play RNG animation
            //
            PalRng.Play(PalGlobal.CurrRngID, args[0].INT, args[1].INT > 0 ? args[1].INT : -1,
               args[2].INT > 0 ? args[2].INT : 16);
            break;

         case "RideNPCToPos":
            //
            // 0x003F
            // Ride the event object to the specified position, at a low speed
            //
            PalScene.PartyRideEventObject(iSceneID, iEvtID, bposTmp, args[3].INT);
            break;

         case "EventSetTriggerMode":
            //
            // 0x0040
            // set the trigger method for a event object
            //
            if (args[0].INT != 0)
            {
               evtCurr._Status.IsAutoTrigger = args[2].BOOL;
               evtCurr._Status.TriggerDistance = args[3].INT;
            }
            break;

         case "MusicPlay":
            //
            // 0x0043
            // Set background music
            //
            save.MusicID = args[0].INT;
            PalAudio.PlayMusic(save.MusicID, (args[2].FLOAT == 3 && args[2].FLOAT != 9) ? 3.0f : 0.0f, args[1].BOOL);
            break;

         case "SetBattleMusic":
            //
            // 0x0045
            // Set battle music
            //
            save.BattleMusicID = args[0].INT;
            break;

         case "PartySetPos":
            //
            // 0x0046
            // Set the party position on the map
            //
            S_SetPartyPos(
               args[0].BX * 32 + args[2].BH * 16,
               args[1].BY * 16 + args[2].BH * 8
            );
            break;

         case "PlaySound":
            //
            // 0x0047
            // Play sound effect
            //
            PalAudio.PlaySound(args[0].INT);
            break;

         case "EventSetState":
            //
            // 0x0049
            // Set the state of event object
            //
            if (args[0].BOOL)
            {
               evtCurr._Status.Display = args[2].BOOL;
               evtCurr._Status.IsObstacle = args[3].BOOL;
            }
            break;

         case "SetBattlefield":
            //
            // 0x004A
            // Set the current battlefield
            //
            save.BattleFieldID = args[0].INT;
            break;

         case "NPCChase":
            //
            // 0x004C
            // chase the player
            //
            i = args[0].INT;     // speed
            j = args[1].INT;     // max. distance

            if (i == 0)
            {
               i = 4;
            }

            if (j == 0)
            {
               j = 8;
            }

            PalScene.MonsterChasePlayer(iSceneID, iEvtID, i, j, args[2].BOOL);
            break;

         case "FadeOut":
            //
            // 0x0050
            // screen fade out
            //
            Screen.Update();
            Screen.Fade(args[0].BOOL ? args[0].INT : 1);
            PalGlobal.NeedToFadeIn = true;
            break;

         case "FadeIn":
            //
            // 0x0051
            // screen fade in
            //
            Screen.Update();
            Screen.Fade(args[0].BOOL ? args[0].INT : 1, false);
            PalGlobal.NeedToFadeIn = false;
            break;

         case "NPCSetVanishTime":
            //
            // 0x0052
            // hide the event object for a while, default 800 frames
            //
            evt._Status.Display = false;;
            evt._Frame.VanishTime = (args[0].INT != 0) ? args[0].INT : 800;
            break;

         case "SetTimeFilter":
            //
            // 0x0053
            // Set the time filter
            //
            S_GetSave().Filter = args[0].Filter;
            break;

         case "RoleAddMagic":
            //
            // 0x0055
            // Add magic to a player
            //
            S_RoleAddMagic(args[0].INT, args[1].INT);
            break;

         case "RoleRemoveMagic":
            //
            // 0x0056
            // Remove magic from a player
            //
            S_RoleRemoveMagic(args[0].INT, args[1].INT);
            break;

         case "SceneEnter":
            //
            // 0x0059
            // Change to the specified scene
            //
            if (args[0].INT > 0
               && args[0].INT <= save.listScene.Count
               && save.SceneID != args[0].INT)
            {
               //
               // Set data to load the scene in the next frame
               //
               save.SceneID = args[0].INT;
               PalResource.SetLoadFlags(PalResource.LoadFlag.Scene);
               PalGlobal.EnterScene = true;
               save.PartyLayerOffset = 0;
            }
            break;

         case "HeroSetSprite":
            //
            // 0x0065
            // Set the player's sprite
            //
            save._Entity.Hero[args[0].INT + 1]._HeroBase.SpriteID = args[1].INT;
            if (!PalGlobal.InBattle && args[2].BOOL)
            {
               PalResource.SetLoadFlags(PalResource.LoadFlag.RoleSprite);
               PalResource.Load();
            }
            break;

         case "EventWalkOneStep":
            //
            // 0x006C
            // Walk the NPC in one step
            //
            trail.Pos.X += args[2].SHORT;
            trail.Pos.Y += args[3].SHORT;
            PalScene.NPCWalkOneStep(sceneCurrID, evtCurrID, 0);
            break;

         case "SceneSetScripts":
            //
            // 0x006D
            // Set the enter script and teleport script for a scene
            //
            if (args[0].INT != 0)
            {
               scene = S_GetScene(args[0].INT);

               if (args[1].ADDR != 0)
               {
                  scene._Script._ScrEnter = args[1].ADDR;
               }

               if (args[2].ADDR != 0)
               {
                  scene._Script._ScrTeleport = args[2].ADDR;
               }
            }
            break;

         case "RoleMoveOneStep":
            //
            // 0x006E
            // Move the player to the specified position in one step
            //
            posTmp = S_GetPartyPos();
            posTmp.X += args[0].X;
            posTmp.Y += args[1].Y;
            PalScene.UpdateTeamPos(posTmp);

            save.PartyLayerOffset = args[2].INT * 8;

            if (args[0].X != 0 || args[1].Y != 0)
            {
               PalScene.UpdatePartyGestures(true);
            }
            break;

         case "EventSyncState":
            //
            // 0x006F
            // Sync the state of current event object with another event object
            //
            if (evtCurr._Status.Display == args[2].BOOL
               && evtCurr._Status.IsObstacle == args[3].BOOL)
            {
               evt._Status.Display = args[2].BOOL;
               evt._Status.IsObstacle = args[3].BOOL;
            }
            break;

         case "PartyWalkToBlock":
            //
            // 0x0070, 0x007A, 0x007B
            // Walk the party to the specified position
            //
            PalScene.PartyWalkTo(bposTmp, args[3].INT);
            break;

         case "FadeToScene":
            //
            // 0x0073; 0x009B
            // Fade the screen to scene
            //
            Screen.Backup(g_pScreen);
            PalScene.Draw();
            Screen.FadeToScreen(args[1].INT);
            break;

         case "PartySetRole":
            //
            // 0x0075
            // Set the player party
            //
            save.PartySize = 0;

            for (i = 0; i < args.Length; i++)
            {
               party = save.arrParty[i];

               party.HeroID = args[i].INT;
               party.Trail.Direction = S_GetPartyDirection();

               save.PartySize++;
            }

            //
            // Reload the player sprites
            //
            PalResource.SetLoadFlags(PalResource.LoadFlag.RoleSprite);
            PalResource.Load();

            //
            // Updating equipment provides attribute bonuses for team members
            //
            PalGlobal.UpdateEquipEffect();
            break;

         case "FadeFBP":
            //
            // 0x0076
            // Show FBP picture
            //
            S_CleanUpTex(g_pScreen, 0x000000FF);
            break;

         case "MusicStop":
            //
            // 0x0077
            // Stop current playing music
            //
            PalAudio.StopMusic();
            S_GetSave().MusicID = 0;
            break;

         case "EventModifyPos":
            //
            // 0x007D
            // Move the event object
            //
            trail.Pos.X += args[2].X;
            trail.Pos.Y += args[3].Y;
            break;

         case "ViewportMove":
            //
            // 0x007F
            // Move the viewport
            //
            posTmp = S_GetRolePos(0);

            x = args[0].X;
            y = args[1].Y;

            if (x == 0 && y == 0)
            {
               //
               // Move the viewport back to normal state
               //
               Viewport.Offset.X = x;
               Viewport.Offset.Y = y;

               if (args[2].INT != -1)
               {
                  PalScene.Draw();
                  Screen.Update();
               }
            }
            else
            {
               uint     time;

               i = 0;
               time = (uint)(SDL.GetTicks() + FRAME_TIME);

               do
               {
                  if (args[2].INT == -1)
                  {
                     Viewport.Offset.X = x * 32;
                     Viewport.Offset.Y = y * 16;
                  }
                  else
                  {
                     Viewport.Offset.X += x;
                     Viewport.Offset.Y += y;
                  }

                  if (args[2].INT != -1)
                  {
                     PalPlay.GameUpdate(false);
                  }

                  PalScene.Draw();
                  Screen.Update();

                  //
                  // Delay for one frame
                  //
                  PalTimer.DelayUntil(time);
                  time = (uint)(SDL.GetTicks() + FRAME_TIME);
               } while (++i < args[2].INT && args[2].INT != -1);
            }
            break;

         case "ToggleDayNight":
            //
            // 0x0080
            // Toggle noon/night filter
            //
            {
               bool     fIsSoon;

               fIsSoon = (S_GetSave().Filter == Screen.Filter.Noon);

               S_GetSave().Filter = Filter.Night;
               Screen.FadeToFilter(Screen.Filter.Night, args[0].BOOL,
                  fIsFadeOut: fIsSoon
               );
               S_GetSave().Filter = fIsSoon ? Filter.Night : Filter.Noon;
            }
            break;

         case "JumpIfPartyNotFacingEvent":
            //
            // 0x0081
            // Jump if the player is not facing the specified event object
            //
            {
               if (args[0].INT != save.SceneID)
               {
                  //
                  // The event object is not in the current scene
                  //
                  iScrAddr = args[3].ADDR - 1;
                  g_fScriptSuccess = false;
                  break;
               }

               posTmp = S_GetPartyPos();
               x = trail.Pos.X - posTmp.X;
               y = trail.Pos.Y - posTmp.Y;

               dirCurr = S_GetPartyDirection();
               x += (dirCurr == PalDirection.West || dirCurr == PalDirection.South) ? 16 : -16;
               y += (dirCurr == PalDirection.West || dirCurr == PalDirection.North) ? 8 : -8;

               if (Math.Abs(x) + Math.Abs(y * 2) < args[2].INT * 32 + 16
                  && S_GetEvent(-1, args[1].INT)._Status.Display)
               {
                  if (args[2].INT > 0)
                  {
                     //
                     // Change the trigger mode so that the object can be triggered in next frame
                     //
                     evtCurr._Status.IsAutoTrigger = true;
                     evtCurr._Status.TriggerDistance = args[2].INT + 1;
                  }
               }
               else
               {
                  iScrAddr = args[3].ADDR - 1;
                  g_fScriptSuccess = false;
               }
            }
            break;

         case "Delay":
            //
            // 0x0085
            // Delay for a period
            //
            PalTimer.Delay(args[0].INT * 80);
            break;

         case "VideoFadeAndUpdate":
            //
            // 0x0093
            // Fade the screen. Update scene in the process.
            //
            Screen.FadeAndUpdate(args[0].INT, args[1].BOOL);
            PalGlobal.NeedToFadeIn = (args[0].INT < 0);
            break;

         case "JumpIfEventStateMatches":
            //
            // 0x0094
            // Jump if the state of event object is the specified one
            //
            if (evtCurr._Status.Display == args[2].BOOL &&
               evtCurr._Status.IsObstacle == args[3].BOOL)
            {
               iScrAddr = args[4].ADDR;
            }
            break;

         case "EventSetStateSequence":
            //
            // 0x009A
            // Uniformly set the collection of events within a certain range to the specified state
            //
            scene = S_GetScene(args[0].SCENE);
            for (i = args[1].EVENT; i < scene.listEvent.Count; i++)
            {
               evt = scene.listEvent[i];

               evt._Status.Display = args[2].BOOL;
               evt._Status.IsObstacle = args[3].BOOL;
            }
            for (i = args[0].SCENE + 1; i < args[2].SCENE; i++)
            {
               scene = S_GetScene(i);

               for (j = 1; j < scene.listEvent.Count; j++)
               {
                  evt = scene.listEvent[j];

                  evt._Status.Display = args[2].BOOL;
                  evt._Status.IsObstacle = args[3].BOOL;
               }
            }
            if (args[2].SCENE > args[0].SCENE)
            {
               scene = S_GetScene(args[2].SCENE);
               for (i = 1; i <= args[3].EVENT; i++)
               {
                  evt = scene.listEvent[i];

                  evt._Status.Display = args[2].BOOL;
                  evt._Status.IsObstacle = args[3].BOOL;
               }
            }
            break;

         default:
            PalLog.Go(
               $@"Unknown function: {MakeFunc(scr)}",
#if DEBUG
               PalLog.Level.Warning
#else
               PalLog.Level.Error
#endif // DEBUG
            );
            break;
      }

      return iScrAddr + 1;
   }
}
