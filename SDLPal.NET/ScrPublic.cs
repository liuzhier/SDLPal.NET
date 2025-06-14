using SDL3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.JavaScript;
using System.Text;
using System.Threading.Tasks;

using static PalCommon;
using static PalMap;
using static PalSave;
using static PalVideo;
using static SafeSys;
using static SDL3.SDL;

public unsafe partial class PalScript
{
   public   static   Dictionary<string, int>    dictScrTag  = new Dictionary<string, int>();
   public   static   List<Script>               listScript  = new List<Script>();
   
   public   static   bool     g_fScriptSuccess = true;
   public   static   bool     g_fUpdatedInBattle = false;

   public static void
   Init()
   {
      int         i, addr;
      string      entry, name;
      string[]    arrTmp, arrArg;

      using (var reader = new StreamReader($@"{DATA_PATH}\Script\ScriptEntry.js", Encoding.UTF8))
      {
         for (i = 0, addr = 0; ; i++)
         {
            entry = reader.ReadLine();

            if (entry == null)
            {
               //
               // The end of the text has been read
               //
               break;
            }

            entry = entry.Trim();

            if (entry == "")
            {
               //
               // An empty line is the sign of the end of the script
               //
               name = "End";
               arrArg = null;
            }
            else
            {
               //
               // Check the script flag
               //
               switch (entry[0])
               {
                  case '[':   // Script address
                     {
                        //
                        // Extract the address name
                        //
                        name = entry.Split('[')[1].Split(']')[0].Trim();

                        //
                        // Put the addresses into the list
                        //
                        dictScrTag.Add(name, addr);
                        continue;
                     }

                  case '/':   // Dialogue script
                     {
                        //
                        // Extract the dialogue
                        //
                        name = "Dlg";
                        arrArg = [entry.Split("//")[1]];
                     }
                     break;

                  default:    // Call the function
                     {
                        //
                        // Normal function call
                        //

                        //
                        // Start splitting the function name and parameter list
                        //
                        arrTmp = entry.Split("(");
                        name = arrTmp[0];
                        arrArg = arrTmp[1].Split(")")[0].Split(",");
                        for (i = 0; i < arrArg.Length; i++)
                        {
                           arrArg[i] = arrArg[i].Trim();
                        }
                     }
                     break;
               }
            }

            //
            // Add the function information to the list
            //
            listScript.Add(new Script
            {
               FuncName = name,
               Args = arrArg,
            });

            //
            // Address increase
            //
            addr++;
         }
      }
   }

   public static void
   Free()
   {
      dictScrTag.Clear();
      listScript.Clear();
   }

   public static int
   GetScrAddr(
      string      strAddrName
   )
   {
      int      addr;

      strAddrName = strAddrName.Trim();

      //if (strAddrName.StartsWith("Scr_"))
      if (strAddrName.StartsWith("0x"))
      {
         //
         // General script address
         //
         addr = S_INT(strAddrName);
      }
      else if (!dictScrTag.TryGetValue(strAddrName, out addr))
      {
         S_FAILED(
            "Script.GetScrAddr",
            $"Unknown script tag: {strAddrName}"
         );
      }

      return addr;
   }

   public static string
   MKScrTag(
      int      iScrAddr
   )
   {
      //return $"Scr_0x{iScrAddr:X4}";
      return $"0x{iScrAddr:X4}";
   }

   public static Script
   GetScript(
      int      iScrAddr
   )
   {
      S_FAILED(
         "Script.GetScript",
         $"The script address {MKScrTag(iScrAddr)} does not exist",
         iScrAddr >= listScript.Count
      );

      return listScript[iScrAddr];
   }

   public static string
   MakeFunc(
      Script      scr
   )
   {
      string      arg;

      arg = (scr.Args != null) ? string.Join(", ", scr.Args) : "";

      return $"{scr.FuncName}({arg})";
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
      int         roleID, heroID, i, j, x, y, w, sceneCurrID, evtCurrID;
      string      arg;
      Scene       scene, sceneCurr;
      Event       evt, evtCurr;
      Script      scr;
      PalSave     save;
      Party       party;
      Trail       trail;
      BlockPos    bposTmp;
      Pos         posTmp;

      scr = listScript[iScrAddr];

      save = PalGlobal.Save;
      bposTmp = new BlockPos();

      sceneCurrID = -1;
      evtCurrID = -1;
      scene = null;
      evt = null;
      sceneCurr = null;
      evtCurr = null;
      trail = null;

      void
      GetEvt()
      {
         switch (iSceneID)
         {
            case -1:
               scene = save.CurrScene;
               goto evt;

            case 0:
               break;

            default:
               scene = save.listScene[iSceneID];
               goto evt;

            evt:
               switch (iEvtID)
               {
                  case 0:
                  case -1:
                     break;

                  default:
                     //evt = scene.listEvent[iEvtID - 1];
                     evt = scene.listEvent[iEvtID];
                     break;

               }
               break;
         }

         try
         {
            switch (scr.INT(0))
            {
               case -1:
               case 0:
                  sceneCurrID = save.SceneID;
                  sceneCurr = save.CurrScene;
                  break;

               default:
                  if (scr.INT(0) < save.listScene.Count)
                  {
                     sceneCurrID = scr.INT(0);
                     sceneCurr = save.listScene[sceneCurrID];
                  }
                  break;
            }

            switch (scr.INT(1))
            {
               case -1:
               case 0:
                  evtCurrID = iEvtID;
                  evtCurr = sceneCurr.listEvent[evtCurrID];
                  break;

               default:
                  if (scr.INT(1) < sceneCurr.listEvent.Count)
                  {
                     evtCurrID = scr.INT(1);
                     evtCurr = sceneCurr.listEvent[evtCurrID];
                  }
                  break;
            }

            trail = evtCurr._Frame._Trail;
         }
         catch (Exception e)
         {

         }
      }

      void
      GetBlockPos()
      {
         bposTmp.X = scr.BYTE(0);
         bposTmp.Y = scr.BYTE(1);
         bposTmp.H = scr.BYTE(2);
      }

      //roleID = (scr.iP(0) < MAX_HERO_NUM) ? scr.iP(0) : 0;
      //heroID = PalScene.GetParty(roleID).HeroID;

      switch (scr.FuncName)
      {
         case "NPCSetDirFrame":
            //
            // 0x000F
            // Set the direction and/or gesture for event object
            //
            GetEvt();
            if (scr.INT(0) != -1)
            {
               evt._Frame._Trail.Direction = (PalDirection)scr.INT(0);
            }
            if (scr.INT(1) != -1)
            {
               evt._Frame._Trail.FrameID = scr.INT(1);
            }
            break;

         case "NPCMoveToBlock":
            //
            // 0x0010, 0x0011, 0x007C, 0x0082
            // Walk straight to the specified position
            //
            GetBlockPos();
            
            if (!scr.BOOL(4) || S_B((iEvtID & 1) ^ (PalGlobal.FrameNum & 1)))
            {
               if (!PalScene.NPCWalkTo(iSceneID, iEvtID, bposTmp, scr.INT(3)))
               {
                  iScrAddr--;
               }
            }
            else
            {
               iScrAddr--;
            }
            break;

         case "EventSetPos":
            //
            // 0x0013
            // Set the position of the event object
            //
            GetEvt();
            trail.Pos.X = scr.INT(2);
            trail.Pos.Y = scr.INT(3);
            break;

         case "NPCSetFrame":
            //
            // 0x0014
            // Set the gesture of the event object
            //
            GetEvt();
            evt._Frame._Trail.FrameID = scr.INT(0);
            evt._Frame._Trail.Direction = PalDirection.South;
            break;

         case "RoleSetDirFrame":
            //
            // 0x0015
            // Set the direction and gesture for a party member
            //
            trail = S_GetRoleTrail(scr.INT(0));
            S_SetRoleDirection(scr.INT(0), (PalDirection)scr.INT(1));
            //trail.Direction = (PalDirection)scr.INT(1);
            trail.FrameID = scr.INT(2);
            break;

         case "EventSetDirFrame":
            //
            // 0x0016
            // Set the direction and gesture for an event object
            //
            GetEvt();
            trail = evtCurr._Frame._Trail;
            if (scr.BOOL(0) && scr.BOOL(1))
            {
               trail.Direction = (PalDirection)scr.INT(2);
               trail.FrameID = scr.INT(3);
            }
            break;

         case "CashModify":
            //
            // 0x001E
            // Increase or decrease cash by the specified amount
            //
            if (scr.INT(0) < 0 && save.Cash < -scr.INT(0))
            {
               //
               // not enough cash
               //
               //iScrAddr = scr.ADDR(1) - 1;
               iScrAddr = scr.ADDR(1);
            }
            else
            {
               save.Cash += scr.INT(0);
            }
            break;

         case "AddItem":
            //
            // 0x001F
            // Add item to inventory
            //
            S_InventoryAddItem(scr.INT(0), scr.INT(1));
            break;

         case "EventSetAutoScript":
            //
            // 0x0024
            // Set the autoscript entry address for an event object
            //
            GetEvt();
            if (scr.INT(0) != 0)
            {
               evtCurr._Script.ScrAuto = scr.STR(2);
            }
            break;

         case "EventSetTriggerScript":
            //
            // 0x0025
            // Set the trigger script entry address for an event object
            //
            GetEvt();
            if (scr.INT(0) != 0)
            {
               evtCurr._Script.SrcTrigger = scr.STR(2);
            }
            break;

         case "EventSetTriggerMode":
            //
            // 0x0040
            // set the trigger method for a event object
            //
            GetEvt();
            if (scr.INT(0) != 0)
            {
               evtCurr._Status.IsAutoTrigger = scr.BOOL(2);
               evtCurr._Status.TriggerDistance = scr.INT(3);
            }
            break;

         case "MusicPlay":
            //
            // 0x0043
            // Set background music
            //
            save.MusicID = scr.INT(0);
            PalAudio.PlayMusic(save.MusicID, (scr.FLOAT(0) == 3 && scr.FLOAT(0) != 9) ? 3.0f : 0.0f, scr.BOOL(1));
            break;

         case "SetBattleMusic":
            //
            // 0x0045
            // Set battle music
            //
            save.BattleMusicID = scr.INT(0);
            break;

         case "PartySetPos":
            //
            // 0x0046
            // Set the party position on the map
            //
            S_SetPartyPos(
               scr.INT(0) * 32 + scr.INT(2) * 16,
               scr.INT(1) * 16 + scr.INT(2) * 8
            );
            break;

         case "PlaySound":
            //
            // 0x0047
            // Play sound effect
            //
            PalAudio.PlaySound(scr.INT(0));
            break;

         case "EventSetState":
            //
            // 0x0049
            // Set the state of event object
            //
            GetEvt();
            if (scr.BOOL(0))
            {
               evtCurr._Status.Display = scr.BOOL(2);
               evtCurr._Status.IsObstacle = scr.BOOL(3);
            }
            break;

         case "FadeOut":
            //
            // 0x0050
            // screen fade out
            //
            Screen.Update();
            Screen.Fade(scr.BOOL(0) ? scr.INT(0) : 1);
            PalGlobal.NeedToFadeIn = true;
            break;

         case "FadeIn":
            //
            // 0x0051
            // screen fade in
            //
            Screen.Update();
            Screen.Fade(scr.BOOL(0) ? scr.INT(0) : 1, false);
            PalGlobal.NeedToFadeIn = false;
            break;

         case "SceneEnter":
            //
            // 0x0059
            // Change to the specified scene
            //
            if (scr.INT(0) > 0 && scr.INT(0) <= save.listScene.Count
               && save.SceneID != scr.INT(0))
            {
               //
               // Set data to load the scene in the next frame
               //
               save.SceneID = scr.INT(0);
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
            save._Entity.Hero[scr.INT(0) + 1]._HeroBase.SpriteID = scr.INT(1);
            if (!PalGlobal.InBattle && scr.BOOL(2))
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
            GetEvt();
            trail.Pos.X += scr.SHORT(2);
            trail.Pos.Y += scr.SHORT(3);
            PalScene.NPCWalkOneStep(sceneCurrID, evtCurrID, 0);
            break;

         case "RoleMoveOneStep":
            //
            // 0x006E
            // Move the player to the specified position in one step
            //
            posTmp = S_GetPartyPos();
            posTmp.X += scr.INT(0);
            posTmp.Y += scr.INT(1);
            PalScene.UpdateTeamPos(posTmp);

            save.PartyLayerOffset = scr.INT(2) * 8;

            if (scr.INT(0) != 0 || scr.INT(1) != 0)
            {
               PalScene.UpdatePartyGestures(true);
            }
            break;

         case "EventSyncState":
            //
            // 0x006F
            // Sync the state of current event object with another event object
            //
            GetEvt();
            if (evtCurr._Status.IsAutoTrigger == scr.BOOL(2)
               && evtCurr._Status.IsObstacle == scr.BOOL(3))
            {
               evt._Status.IsAutoTrigger = scr.BOOL(2);
               evt._Status.IsObstacle = scr.BOOL(4);
            }
            break;

         case "PartyWalkToBlock":
            //
            // 0x0070, 0x007A, 0x007B
            // Walk the party to the specified position
            //
            GetBlockPos();
            PalScene.PartyWalkTo(bposTmp, scr.INT(3));
            break;

         case "PartySetRole":
            //
            // 0x0075
            // Set the player party
            //
            arg = scr.Args[0];
            save.PartySize = 0;

            for (i = 0; i < arg.Length; i++)
            {
               party = save.arrParty[i];

               party.HeroID = S_INT(arg[i]);

               party._Trail.Direction = S_GetPartyDirection();
               save.PartySize++;
            }

            //
            // Reload the player sprites
            //
            PalResource.SetLoadFlags(PalResource.LoadFlag.RoleSprite);
            PalResource.Load();

            PalGlobal.UpdateEquipEffect();
            break;

         case "Delay":
            //
            // 0x0085
            // Delay for a period
            //
            PalTimer.Delay(scr.INT(0) * 80);
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
