using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Runtime.InteropServices.ComTypes;
using System.Text;
using System.Threading.Tasks;

using static GoMain;
using static PalMap;
using static PalSave;
using static PalCommon;
using static SafeSys;

using SHORT = System.Int16;
using USHORT = System.UInt16;
using WORD = System.UInt16;

public unsafe class GoScene
{
   [StructLayout(LayoutKind.Sequential, Pack = 1)]
   public struct _Scene
   {
      public WORD wMapNum;         // number of the map
      public WORD wScriptOnEnter;  // when entering this scene, execute script from here
      public WORD wScriptOnTeleport;  // when teleporting out of this scene, execute script from here
      public WORD wEventObjectIndex;  // event objects in this scene begins from number wEventObjectIndex + 1
   }

   [StructLayout(LayoutKind.Sequential, Pack = 1)]
   public struct _Event
   {
      public SHORT sVanishTime;         // vanish time (?)
      public SHORT x;                   // X coordinate on the map
      public SHORT y;                   // Y coordinate on the map
      public SHORT sLayer;              // layer value
      public WORD wTriggerScript;      // Trigger script entry
      public WORD wAutoScript;         // Auto script entry
      public SHORT sState;              // state of this object
      public WORD wTriggerMode;        // trigger mode
      public WORD wSpriteNum;          // number of the sprite
      public USHORT nSpriteFrames;       // total number of frames of the sprite
      public WORD wDirection;          // direction
      public WORD wCurrentFrameNum;    // current frame number
      public USHORT nScriptIdleFrame;    // count of idle frames, used by trigger script
      public WORD wSpritePtrOffset;    // FIXME: ???
      public USHORT nSpriteFramesAuto;   // total number of frames of the sprite, used by auto script
      public WORD wScriptIdleFrameCountAuto;     // count of idle frames, used by auto script
   }

   public static void
   Go()
   {
      _Scene*     lpScene;
      _Event*     lpEvent;
      int         i, ai, j, aj, len_i, len_j;
      Scene       scene;
      Event       eventObj;
      string      path, name;

      lpScene = (_Scene*)GoData.listCoreBuf[1].Item1;
      lpEvent = (_Event*)GoData.listCoreBuf[0].Item1;
      len_i = GoData.listCoreBuf[1].Item2 / sizeof(_Scene) - 1;

      S_MKDIR($@"{DATA_PATH}\Scene");
      for (i = 0; i < len_i; i++, lpScene++)
      {
         ai = i + 1;

         try
         {
            name = GoMsg.dictScene[ai];
         }
         catch
         {
            name = "";
         }

         scene = new Scene
         {
            Name = name,
            MapID = lpScene->wMapNum,
            _Script = new Scene.Script
            {
               ScrEnter = GoScript.AddTag(new GoScript.Tag
               {
                  Addr = lpScene->wScriptOnEnter,
                  Name = $@"Scene_{ai:D5}_Enter",
               }).Name,
               ScrTeleport = GoScript.AddTag(new GoScript.Tag
               {
                  Addr = lpScene->wScriptOnTeleport,
                  Name = $@"Scene_{ai:D5}_Teleport",
               }).Name,
            },
         };

         path = $@"{DATA_PATH}\Scene\{ai:D5}";
         S_MKDIR(path);

         File.WriteAllText(
            $@"{path}\Scene.json",
            JsonConvert.SerializeObject(scene, Formatting.Indented)
         );

         path = $@"{path}\Event";
         Directory.CreateDirectory(path);

         len_j = lpScene[1].wEventObjectIndex - lpScene[0].wEventObjectIndex;
         for (j = 0; j < len_j; j++, lpEvent++)
         {
            aj = j + 1;

            try
            {
               name = GoMsg.dictSprite[lpEvent->wSpriteNum];
            }
            catch
            {
               name = "";
            }

            eventObj = new Event
            {
               Comment = name,
               _Frame = new Event.Frame
               {
                  VanishTime = lpEvent->sVanishTime,
                  StillTime = 0,
                  LayerOffset = lpEvent->sLayer,
                  SpriteID = lpEvent->wSpriteNum,
                  SpriteFrames = lpEvent->nSpriteFrames,
                  Trail = new Trail
                  {
                     Pos = new PalMap.Pos
                     {
                        X = lpEvent->x,
                        Y = lpEvent->y,
                     },
                     Direction = (PalCommon.PalDirection)lpEvent->wDirection,
                     FrameID = lpEvent->wCurrentFrameNum,
                     SpriteFramesAuto = lpEvent->nSpriteFramesAuto,
                  },
               },
               _Status = new Event.Status
               {
                  Display = lpEvent->sState != 0,
                  IsObstacle = lpEvent->sState == 2,
                  IsAutoTrigger = false,
                  TriggerDistance = 0,
               },
               _Script = new Event.Script
               {
                  SrcTrigger = GoScript.AddTag(new GoScript.Tag
                  {
                     Addr = lpEvent->wTriggerScript,
                     Name = $@"Event_{ai:D5}_{aj:D5}_Trigger",
                  }).Name,
                  ScrAuto = GoScript.AddTag(new GoScript.Tag
                  {
                     Addr = lpEvent->wAutoScript,
                     Name = $@"Event_{ai:D5}_{aj:D5}_Auto",
                  }).Name,
               },
               _ScriptFrame = new Event.ScriptFrame
               {
                  TriggerIdleFrame = lpEvent->nScriptIdleFrame,
                  AutoIdleFrame = lpEvent->wScriptIdleFrameCountAuto,
               },
            };

            if (lpEvent->wTriggerMode >= 4)
            {
               //
               // Automatic trigger
               //
               eventObj._Status.IsAutoTrigger = true;
               eventObj._Status.TriggerDistance = (ushort)(lpEvent->wTriggerMode - 4);
            }
            else if (lpEvent->wTriggerMode >= 1)
            {
               //
               // Manual trigger
               //
               eventObj._Status.TriggerDistance = (ushort)(lpEvent->wTriggerMode - 1) + 1;
            }

            File.WriteAllText(
               $@"{path}\{aj:D5}.json",
               JsonConvert.SerializeObject(eventObj, Formatting.Indented)
            );
         }
      }
   }
}
