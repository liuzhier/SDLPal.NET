using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

using static PalCommon;
using static PalVideo;
using static SafeSys;

public unsafe class Script
{
   public   string      FuncName;
   public   Arg[]       arrArg;

   [StructLayout(LayoutKind.Explicit)]
   public struct Arg
   {
      [FieldOffset(0)]
      public   char        CHAR;
      [FieldOffset(0)]
      public   byte        BYTE;
      [FieldOffset(0)]
      public   short       SHORT;
      [FieldOffset(0)]
      public   ushort      WORD;
      [FieldOffset(0)]
      public   int         INT;
      [FieldOffset(0)]
      public   uint        DWORD;
      [FieldOffset(0)]
      public   long        LONG;
      [FieldOffset(0)]
      public   ulong       QWORD;
      [FieldOffset(0)]
      public   bool        BOOL;
      [FieldOffset(0)]
      public   float       FLOAT;
      [FieldOffset(sizeof(ulong))]
      public   string      STR;

      public   int               ADDR        => PalScript.GetScrAddr(STR);
      public   int               X           => SHORT;
      public   int               Y           => SHORT;
      public   int               BX          => BYTE;
      public   int               BY          => BYTE;
      public   int               BH          => BYTE;
      public   int               SCENE       => INT;
      public   int               EVENT       => INT;
      public   PalDirection      DIRECTION   => (PalDirection)INT;
      public   Screen.Filter     Filter      => (Screen.Filter)INT;
   }

   public enum ArgType : byte
   {
      LIST,

      CHAR,
      BYTE,
      SHORT,
      WORD,
      INT,
      DWORD,
      LONG,
      QWORD,
      BOOL,
      FLOAT,
      STR,

      ADDR,
      X,
      Y,
      BX,
      BY,
      BH,
      SCENE,
      EVENT,
      DIRECTION,
   }

   public   static   Dictionary<string, ArgType[]>
      FuncArgType = new()
      {
         ["End"] = [
            //
            // 0x0000
            //
         ],
         ["ReplaceAndPause"] = [
            //
            // 0x0001
            //
         ],
         ["ReplaceAndPauseWithNop"] = [
            //
            // 0x0002
            //
            ArgType.ADDR,     // ScrAddress
            ArgType.INT,      // Count
         ],
         ["GotoWithNop"] = [
            //
            // 0x0003
            //
            ArgType.ADDR,     // ScrAddress
            ArgType.INT,      // Count
         ],
         ["Call"] = [
            //
            // 0x0004
            //
            ArgType.ADDR,     // ScrAddress
            ArgType.SCENE,    // SceneID
            ArgType.EVENT,    // EventID
         ],
         ["VideoUpdate"] = [
            //
            // 0x0005
            //
            ArgType.INT,      // Delay
            ArgType.BOOL,     // UpdatePartyGestures
         ],
         ["GotoWithProbability"] = [
            //
            // 0x0006
            //
            ArgType.INT,      // Probability
            ArgType.ADDR,     // ScrAddress
         ],
         ["BattleStart"] = [
            //
            // 0x0007
            //
            ArgType.INT,      // EnemyTeamID
            ArgType.ADDR,     // ScrDefeat
            ArgType.ADDR,     // ScrFleed
         ],
         ["Replace"] = [
            //
            // 0x0008
            //
         ],
         ["WaitEventAutoScriptRun"] = [
            //
            // 0x0009
            //
            ArgType.INT,      // FrameNum
            ArgType.BOOL,     // CanTriggerEvent
            ArgType.BOOL,     // UpdatePartyGestures
         ],
         ["GotoWithSelect"] = [
            //
            // 0x000A
            //
            ArgType.ADDR,     // ScrAddress
         ],
         ["EventAnimate"] = [
            //
            // 0x000B; 0x000C; 0x000D; 0x000E; 0x0087
            //
            ArgType.DIRECTION,      // DirectionID
            ArgType.INT,            // Speed
         ],
         ["NPCSetDirFrame"] = [
            //
            // 0x000F
            //
            ArgType.DIRECTION,      // DirectionID
            ArgType.INT,            // FrameID
         ],
         ["NPCMoveToBlock"] = [
            //
            // 0x0010; 0x0011; 0x007C; 0x0082
            //
            ArgType.BX,       // BX
            ArgType.BY,       // BY
            ArgType.BH,       // BH
            ArgType.INT,      // Speed
            ArgType.BOOL,     // Distinguish
         ],
         ["EventSetPosRelToParty"] = [
            //
            // 0x0012
            //
            ArgType.SCENE,    // SceneID
            ArgType.EVENT,    // EventID
            ArgType.X,        // X
            ArgType.Y,        // Y
         ],
         ["EventSetPos"] = [
            //
            // 0x0013
            //
            ArgType.SCENE,    // SceneID
            ArgType.EVENT,    // EventID
            ArgType.X,        // X
            ArgType.Y,        // Y
         ],
         ["NPCSetFrame"] = [
            //
            // 0x0014
            //
            ArgType.INT,      // FrameID
         ],
         ["RoleSetDirFrame"] = [
            //
            // 0x0015
            //
            ArgType.INT,            // PartyID
            ArgType.DIRECTION,      // DirectionID
            ArgType.INT,            // FrameID
         ],
         ["EventSetDirFrame"] = [
            //
            // 0x0016
            //
            ArgType.SCENE,          // SceneID
            ArgType.EVENT,          // EventID
            ArgType.DIRECTION,      // DirectionID
            ArgType.INT,            // FrameID
         ],
         ["RoleSetAttrExtra"] = [
            //
            // 0x0017
            //
            ArgType.INT,      // BodyID
            ArgType.INT,      // AttrID
            ArgType.INT,      // Value
         ],
         ["RoleInstallEquip"] = [
            //
            // 0x0018
            //
            ArgType.INT,      // ItemID
            ArgType.INT,      // BodyID
         ],
         ["RoleModifyAttr"] = [
            //
            // 0x0019
            //
            ArgType.INT,      // RoleID
            ArgType.INT,      // AttrID
            ArgType.INT,      // Value
         ],
         ["RoleSetAttr"] = [
            //
            // 0x001A
            //
            ArgType.INT,      // RoleID
            ArgType.INT,      // AttrID
            ArgType.INT,      // Value
         ],
         ["RoleModifyHP"] = [
            //
            // 0x001B
            //
            ArgType.INT,      // Value
            ArgType.BOOL,     // ApplyToAll
         ],
         ["RoleModifyMP"] = [
            //
            // 0x001C
            //
            ArgType.INT,      // Value
            ArgType.BOOL,     // ApplyToAll
         ],
         ["RoleModifyHPMP"] = [
            //
            // 0x001D
            //
            ArgType.INT,      // Value
            ArgType.BOOL,     // ApplyToAll
         ],
         ["CashModify"] = [
            //
            // 0x001E
            //
            ArgType.INT,      // Value
            ArgType.ADDR,     // ScrAddress
         ],
         ["AddItem"] = [
            //
            // 0x001F
            //
            ArgType.INT,      // ItemID
            ArgType.INT,      // Value
         ],
         ["RemoveItem"] = [
            //
            // 0x0020
            //
            ArgType.INT,      // ItemID
            ArgType.INT,      // Value
            ArgType.ADDR,     // ScrAddress
         ],
         ["EnemyModifyHP"] = [
            //
            // 0x0021
            //
            ArgType.INT,      // Value
            ArgType.BOOL,     // ApplyToAll
         ],
         ["RoleRevive"] = [
            //
            // 0x0022
            //
            ArgType.INT,      // Value
            ArgType.BOOL,     // ApplyToAll
         ],
         ["RoleUninstallEquip"] = [
            //
            // 0x0023
            //
            ArgType.INT,      // RoleID
            ArgType.INT,      // BodyID
         ],
         ["EventSetAutoScript"] = [
            //
            // 0x0024
            //
            ArgType.SCENE,    // SceneID
            ArgType.EVENT,    // EventID
            ArgType.ADDR,     // ScrAddress
         ],
         ["EventSetTriggerScript"] = [
            //
            // 0x0025
            //
            ArgType.SCENE,    // SceneID
            ArgType.EVENT,    // EventID
            ArgType.ADDR,     // ScrAddress
         ],
         ["ShowBuyItemMenu"] = [
            //
            // 0x0026
            //
            ArgType.INT,      // StoreID
         ],
         ["ShowSellItemMenu"] = [
            //
            // 0x0027
            //
         ],
         ["EnemyApplyPoison"] = [
            //
            // 0x0028
            //
            ArgType.INT,      // PoisonID
            ArgType.BOOL,     // ApplyToAll
         ],
         ["RoleApplyPoison"] = [
            //
            // 0x0029
            //
            ArgType.INT,      // PoisonID
            ArgType.BOOL,     // ApplyToAll
         ],
         ["EnemyCurePoisonByID"] = [
            //
            // 0x002A
            //
            ArgType.INT,      // PoisonID
            ArgType.BOOL,     // ApplyToAll
         ],
         ["RoleCurePoisonByID"] = [
            //
            // 0x002B
            //
            ArgType.INT,      // PoisonID
            ArgType.BOOL,     // ApplyToAll
         ],
         ["RoleCurePoisonByLevel"] = [
            //
            // 0x002C
            //
            ArgType.INT,      // Level
            ArgType.BOOL,     // ApplyToAll
         ],
         ["RoleSetStatus"] = [
            //
            // 0x002D
            //
            ArgType.BOOL,     // IsGood
            ArgType.INT,      // StatusID
            ArgType.INT,      // Value
         ],
         ["EnemySetStatus"] = [
            //
            // 0x002E
            //
            ArgType.BOOL,     // IsGood
            ArgType.INT,      // StatusID
            ArgType.INT,      // Value
         ],
         ["RoleRemoveStatus"] = [
            //
            // 0x002F
            //
            ArgType.BOOL,     // IsGood
            ArgType.INT,      // StatusID
         ],
         ["RoleModifyAttrTemp"] = [
            //
            // 0x0030
            //
            ArgType.INT,      // RoleID
            ArgType.INT,      // AttrID
            ArgType.INT,      // Value
         ],
         ["RoleModifyBattleSpriteTemp"] = [
            //
            // 0x0031
            //
            ArgType.INT,      // BattleSpriteID
         ],
         ["CaptureTheEnemy"] = [
            //
            // 0x0033
            //
            ArgType.ADDR,     // ScrAddress
         ],
         ["MakeElixir"] = [
            //
            // 0x0034
            //
            ArgType.ADDR,     // ScrAddress
         ],
         ["VideoShake"] = [
            //
            // 0x0035
            //
            ArgType.INT,      // FrameNum
            ArgType.INT,      // Level
         ],
         ["SetRNG"] = [
            //
            // 0x0036
            //
            ArgType.INT,      // RNGID
         ],
         ["PlayRNG"] = [
            //
            // 0x0037
            //
            ArgType.INT,      // BeginFrameID
            ArgType.INT,      // EndFrameID
            ArgType.INT,      // Speed
         ],
         ["SceneTeleport"] = [
            //
            // 0x0038
            //
            ArgType.ADDR,     // ScrAddress
         ],
         ["DrainHPFromEnemy"] = [
            //
            // 0x0039
            //
            ArgType.INT,      // Value
         ],
         ["RoleFleeBattle"] = [
            //
            // 0x003A
            //
            ArgType.ADDR,     // ScrAddress
         ],
         ["SetDlgCenter"] = [
            //
            // 0x003B
            //
            ArgType.STR,      // FaceID
            ArgType.INT,      // ColorHex
            ArgType.BOOL,     // RNGPlaying
         ],
         ["SetDlgUpper"] = [
            //
            // 0x003C
            //
            ArgType.STR,      // FaceID
            ArgType.INT,      // ColorHex
            ArgType.BOOL,     // RNGPlaying
         ],
         ["SetDlgLower"] = [
            //
            // 0x003D
            //
            ArgType.STR,      // FaceID
            ArgType.INT,      // ColorHex
            ArgType.BOOL,     // RNGPlaying
         ],
         ["SetDlgBox"] = [
            //
            // 0x003E
            //
            ArgType.INT,      // ColorHex
         ],
         ["RideNPCToPos"] = [
            //
            // 0x003F; 0x0044; 0x0097
            //
            ArgType.BX,       // BX6
            ArgType.BY,       // BY
            ArgType.BH,       // BH
            ArgType.INT,      // Speed
         ],
         ["EventSetTriggerMode"] = [
            //
            // 0x0040
            //
            ArgType.SCENE,    // SceneID
            ArgType.EVENT,    // EventID
            ArgType.BOOL,     // IsAutoTrigger
            ArgType.INT,      // TriggerDistance
         ],
         ["ScriptFailed"] = [
            //
            // 0x0041
            //
         ],
         ["SimulateRoleMagic"] = [
            //
            // 0x0042
            //
            ArgType.INT,      // MagicID
            ArgType.INT,      // EnemyID
            ArgType.INT,      // Value
         ],
         ["MusicPlay"] = [
            //
            // 0x0043
            //
            ArgType.INT,      // MusicID
            ArgType.BOOL,     // Loop
            ArgType.FLOAT,    // FadeTime
         ],
         ["SetBattleMusic"] = [
            //
            // 0x0045
            //
            ArgType.INT,      // MusicID
         ],
         ["PartySetPos"] = [
            //
            // 0x0046
            //
            ArgType.BX,    // BX
            ArgType.BY,    // BY
            ArgType.BH,    // BH
         ],
         ["PlaySound"] = [
            //
            // 0x0047
            //
            ArgType.INT,      // SoundID
         ],
         ["EventSetState"] = [
            //
            // 0x0049
            //
            ArgType.SCENE,    // SceneID
            ArgType.EVENT,    // EventID
            ArgType.BOOL,     // Display
            ArgType.BOOL,     // IsObstacle
         ],
         ["SetBattlefield"] = [
            //
            // 0x004A
            //
            ArgType.INT,      // BattlefieldID
         ],
         ["NPCSetStillTime"] = [
            //
            // 0x004B
            //
         ],
         ["NPCChase"] = [
            //
            // 0x004C
            //
            ArgType.INT,      // Speed
            ArgType.INT,      // Range
            ArgType.BOOL,     // CanFly
         ],
         ["WaitForAnyKey"] = [
            //
            // 0x004D
            //
         ],
         ["LoadLastSave"] = [
            //
            // 0x004E
            //
         ],
         ["FadeToRed"] = [
            //
            // 0x004F
            //
         ],
         ["FadeOut"] = [
            //
            // 0x0050
            //
            ArgType.INT,      // Delay
         ],
         ["FadeIn"] = [
            //
            // 0x0051
            //
            ArgType.INT,      // Delay
         ],
         ["NPCSetVanishTime"] = [
            //
            // 0x0052
            //
            ArgType.INT,      // FrameNum
         ],
         ["SetTimeFilter"] = [
            //
            // 0x0053; 0x0054
            //
            ArgType.INT,      // TimeID
         ],
         ["RoleAddMagic"] = [
            //
            // 0x0055
            //
            ArgType.INT,      // RoleID
            ArgType.INT,      // MagicID
         ],
         ["RoleRemoveMagic"] = [
            //
            // 0x0056
            //
            ArgType.INT,      // RoleID
            ArgType.INT,      // MagicID
         ],
         ["MagicSetBaseDamageByMP"] = [
            //
            // 0x0057
            //
            ArgType.INT,      // MagicID
            ArgType.INT,      // Multiple
         ],
         ["JumpIfItemCountLessThan"] = [
            //
            // 0x0058
            //
            ArgType.INT,      // ItemID
            ArgType.INT,      // Value
            ArgType.ADDR,     // ScrAddress
         ],
         ["SceneEnter"] = [
            //
            // 0x0059
            //
            ArgType.INT,      // SceneID
         ],
         ["RoleHalveHP"] = [
            //
            // 0x005A
            //
         ],
         ["EnemyHalveHP"] = [
            //
            // 0x005B
            //
         ],
         ["BattleRoleVanish"] = [
            //
            // 0x005C
            //
            ArgType.INT,      // Value
         ],
         ["JumpIfRoleNotPoisoned"] = [
            //
            // 0x005D
            //
            ArgType.INT,      // PoisonID
            ArgType.ADDR,     // ScrAddress
         ],
         ["JumpIfEnemyNotPoisoned"] = [
            //
            // 0x005E
            //
            ArgType.INT,      // PoisonID
            ArgType.ADDR,     // ScrAddress
         ],
         ["KillRole"] = [
            //
            // 0x005F
            //
         ],
         ["KillEnemy"] = [
            //
            // 0x0060
            //
         ],
         ["JumpIfRoleNotPoisonedByLevel"] = [
            //
            // 0x0061
            //
            ArgType.INT,      // Level
            ArgType.ADDR,     // ScrAddress
         ],
         ["NPCChaseSetRange"] = [
            //
            // 0x0062; 0x0063
            //
            ArgType.INT,      // Level
            ArgType.INT,      // FrameNum
         ],
         ["JumpIfEnemyHPMoreThanPercentage"] = [
            //
            // 0x0064
            //
            ArgType.INT,      // Value
            ArgType.ADDR,     // ScrAddress
         ],
         ["HeroSetSprite"] = [
            //
            // 0x0065
            //
            ArgType.INT,      // HeroID
            ArgType.INT,      // SpriteID
            ArgType.BOOL,     // Update
         ],
         ["RoleThrowWeapon"] = [
            //
            // 0x0066
            //
            ArgType.INT,      // MagicID
            ArgType.INT,      // Value
         ],
         ["EnemySetMagic"] = [
            //
            // 0x0067
            //
            ArgType.INT,      // MagicID
            ArgType.INT,      // Value
         ],
         ["JumpIfEnemyTurn"] = [
            //
            // 0x0068
            //
            ArgType.ADDR,     // ScrAddress
         ],
         ["BattleEnemyEscape"] = [
            //
            // 0x0069
            //
         ],
         ["BattleStealFromEnemy"] = [
            //
            // 0x006A
            //
            ArgType.INT,      // Value
         ],
         ["BattleBlowAwayEnemy"] = [
            //
            // 0x006B
            //
            ArgType.INT,      // FrameNum
         ],
         ["EventWalkOneStep"] = [
            //
            // 0x006C
            //
            ArgType.SCENE,    // SceneID
            ArgType.EVENT,    // EventID
            ArgType.X,        // X
            ArgType.Y,        // Y
         ],
         ["SceneSetScripts"] = [
            //
            // 0x006D
            //
            ArgType.INT,      // SceneID
            ArgType.ADDR,     // ScrEnter
            ArgType.ADDR,     // ScrTeleport
         ],
         ["RoleMoveOneStep"] = [
            //
            // 0x006E
            //
            ArgType.X,        // X
            ArgType.Y,        // Y
            ArgType.INT,      // Layer
         ],
         ["EventSyncState"] = [
            //
            // 0x006F
            //
            ArgType.SCENE,    // SceneID
            ArgType.EVENT,    // EventID
            ArgType.BOOL,     // Display
            ArgType.BOOL,     // IsObstacle
         ],
         ["PartyWalkToBlock"] = [
            //
            // 0x0070; 0x007A; 0x007B
            //
            ArgType.BX,       // BX
            ArgType.BY,       // BY
            ArgType.BH,       // BH
            ArgType.INT,      // Speed
         ],
         ["VideoWave"] = [
            //
            // 0x0071
            //
            ArgType.INT,      // Level
            ArgType.INT,      // Progression
         ],
         ["FadeToScene"] = [
            //
            // 0x0073; 0x009B
            //
            ArgType.INT,      // SceneID
            ArgType.INT,      // Speed
         ],
         ["JumpIfNotAllRolesFullHP"] = [
            //
            // 0x0074
            //
            ArgType.ADDR,     // ScrAddress
         ],
         ["PartySetRole"] = [
            //
            // 0x0075
            //
            ArgType.INT,      // Dec sequence
         ],
         ["FadeFBP"] = [
            //
            // 0x0076
            //
            ArgType.INT,      // FBPID
            ArgType.INT,      // Speed
         ],
         ["MusicStop"] = [
            //
            // 0x0077
            //
         ],
         ["BattleEnd"] = [
            //
            // 0x0078
            //
         ],
         ["JumpIfHeroInParty"] = [
            //
            // 0x0079
            //
            ArgType.INT,      // HeroID
            ArgType.ADDR,     // ScrAddress
         ],
         ["EventModifyPos"] = [
            //
            // 0x007D
            //
            ArgType.SCENE,    // SceneID
            ArgType.EVENT,    // EventID
            ArgType.X,        // X
            ArgType.Y,        // Y
         ],
         ["EventSetLayer"] = [
            //
            // 0x007E
            //
            ArgType.SCENE,    // SceneID
            ArgType.EVENT,    // EventID
            ArgType.INT,      // Layer
         ],
         ["ViewportMove"] = [
            //
            // 0x007F
            //
            ArgType.X,        // X
            ArgType.Y,        // Y
            ArgType.INT,      // FrameNum
         ],
         ["ToggleDayNight"] = [
            //
            // 0x0080
            //
            ArgType.BOOL,     // UpdateScene
         ],
         ["JumpIfPartyNotFacingEvent"] = [
            //
            // 0x0081
            //
            ArgType.SCENE,    // SceneID
            ArgType.EVENT,    // EventID
            ArgType.INT,      // TriggerDistance
            ArgType.ADDR,     // ScrAddress
         ],
         ["JumpIfEventNotInZone"] = [
            //
            // 0x0083
            //
            ArgType.SCENE,    // SceneID
            ArgType.EVENT,    // EventID
            ArgType.INT,      // Range
            ArgType.ADDR,     // ScrAddress
         ],
         ["EventSetPosToPartyAndObstacle"] = [
            //
            // 0x0084
            //
            ArgType.SCENE,    // SceneID
            ArgType.EVENT,    // EventID
            ArgType.BOOL,     // Display
            ArgType.BOOL,     // IsObstacle
            ArgType.ADDR,     // ScrAddress
         ],
         ["Delay"] = [
            //
            // 0x0085
            //
            ArgType.INT,      // Delay
         ],
         ["JumpIfItemNotEquipped"] = [
            //
            // 0x0086
            //
            ArgType.INT,      // ItemID
            ArgType.INT,      // Value
            ArgType.ADDR,     // ScrAddress
         ],
         ["MagicSetBaseDamageByMoney"] = [
            //
            // 0x0088
            //
            ArgType.INT,      // MagicID
            ArgType.FLOAT,    // Multiple
         ],
         ["BattleSetResult"] = [
            //
            // 0x0089
            //
            ArgType.INT,      // BattleResult
         ],
         ["BattleEnableAuto"] = [
            //
            // 0x008A
            //
         ],
         ["SetPalette"] = [
            //
            // 0x008B
            //
            ArgType.INT,      // PaletteID
         ],
         ["FadeColor"] = [
            //
            // 0x008C
            //
            ArgType.INT,      // Delay
            ArgType.INT,      // ColorHex
            ArgType.BOOL,     // IsFrom
         ],
         ["RoleModifyLevel"] = [
            //
            // 0x008D
            //
            ArgType.INT,      // Value
         ],
         ["VideoRestore"] = [
            //
            // 0x008E
            //
         ],
         ["CashHalve"] = [
            //
            // 0x008F
            //
         ],
         ["ObjectSetScript"] = [
            //
            // 0x0090
            //
            ArgType.INT,      // ObjectType
            ArgType.INT,      // ObjectID
            ArgType.INT,      // ScrType
            ArgType.ADDR,     // ScrAddress
         ],
         ["JumpIfEnemyNotFirstOfKind"] = [
            //
            // 0x0091
            //
            ArgType.ADDR,     // ScrAddress
         ],
         ["ShowRoleMagicAction"] = [
            //
            // 0x0092
            //
            ArgType.INT,      // RoleID
         ],
         ["VideoFadeAndUpdate"] = [
            //
            // 0x0093
            //
            ArgType.INT,      // Step
            ArgType.BOOL,     // IsFadeOut
         ],
         ["JumpIfEventStateMatches"] = [
            //
            // 0x0094
            //
            ArgType.SCENE,    // SceneID
            ArgType.EVENT,    // EventID
            ArgType.BOOL,     // Display
            ArgType.BOOL,     // IsObstacle
            ArgType.ADDR,     // ScrAddress
         ],
         ["JumpIfCurrentSceneMatches"] = [
            //
            // 0x0095
            //
            ArgType.INT,      // SceneID
            ArgType.ADDR,     // ScrAddress
         ],
         ["ShowEndingAnimation"] = [
            //
            // 0x0096
            //
         ],
         ["PartySetFollower"] = [
            //
            // 0x0098
            //
            ArgType.LIST,     // It can be any number of parameters of the same type
            ArgType.INT,      // SpriteID
         ],
         ["SceneSetMap"] = [
            //
            // 0x0099
            //
            ArgType.INT,      // SceneID
            ArgType.INT,      // MapID
         ],
         ["EventSetStateSequence"] = [
            //
            // 0x009A
            //
            ArgType.INT,      // BeginSceneID
            ArgType.INT,      // BeginEventID
            ArgType.INT,      // EndSceneID
            ArgType.INT,      // EndEventID
            ArgType.BOOL,     // Display
            ArgType.BOOL,     // IsObstacle
         ],
         ["EnemyClone"] = [
            //
            // 0x009C
            //
            ArgType.INT,      // Value
            ArgType.ADDR,     // ScrAddress
         ],
         ["EnemySummonMonster"] = [
            //
            // 0x009E
            //
            ArgType.INT,      // EnemyID
            ArgType.INT,      // Value
            ArgType.ADDR,     // ScrAddress
         ],
         ["EnemyTransform"] = [
            //
            // 0x009F
            //
            ArgType.INT,      // EnemyID
         ],
         ["QuitGame"] = [
            //
            // 0x00A0
            //
         ],
         ["PartySetPosToFirstRole"] = [
            //
            // 0x00A1
            //
         ],
         ["JumpToRandomInstruction"] = [
            //
            // 0x00A2
            //
            ArgType.INT,      // Range
         ],
         ["PlayCDOrMusic"] = [
            //
            // 0x00A3
            //
            ArgType.INT,      // CDID
            ArgType.INT,      // MusicID
         ],
         ["ScrollFBP"] = [
            //
            // 0x00A4
            //
            ArgType.INT,      // FBPID
            ArgType.INT,      // Speed
         ],
         ["ShowFBPWithSprite"] = [
            //
            // 0x00A5
            //
            ArgType.INT,      // FBPID
            ArgType.INT,      // Speed
         ],
         ["ScreenBackup"] = [
            //
            // 0x00A6
            //
         ],
         ["DlgItem"] = [
            //
            // 0x00A7
            //
         ],
         ["Dlg"] = [
            //
            // 0xFFFF
            //
            ArgType.STR,      // Msg
         ],
      };

   public static void
   GetFuncArgType(
         string               name,
   out   Script.ArgType[]     arrArgType,
         int                  lineID   = -1
   )
   {
      if (!Script.FuncArgType.TryGetValue(name, out arrArgType))
      {
         //
         // Unknown function
         //
         S_FAILED(
            "Script.AddScrFunc",
            $"Unknown script function, Line({lineID}): {name}"
         );
      }
   }
}
