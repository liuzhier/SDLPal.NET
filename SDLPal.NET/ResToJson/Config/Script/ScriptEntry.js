[Null]

[Scr_0x0001]

[Event_00004_00002_Auto]
EventAnimate(-1, 0)
ReplaceAndPauseWithNop(Event_00004_00002_Auto, 0)

[Event_00021_00011_Auto]
EventAnimate(-1, 0)
GotoWithNop(Event_00021_00011_Auto, 0)

[Event_00001_00020_Auto]
NPCSetDirFrame(2, 0)
ReplaceAndPauseWithNop(Event_00001_00020_Auto, 0)

[Event_00021_00016_Auto]
NPCSetDirFrame(0, 0)
ReplaceAndPauseWithNop(Event_00021_00016_Auto, 0)

[Event_00001_00026_Auto]
NPCSetDirFrame(1, 0)
ReplaceAndPauseWithNop(Event_00001_00026_Auto, 0)

[Event_00005_00014_Auto]
NPCSetDirFrame(3, 0)
ReplaceAndPauseWithNop(Event_00005_00014_Auto, 0)

[Event_00004_00026_Trigger]
EventSetState(-1, -1, false, false)

[Scr_0x0016]
EventSetState(-1, -1, true, false)
NPCSetFrame(1)

[Event_00004_00030_Trigger]
SetDlgCenter(0, 0x00000000, false)
//此门已上锁

[Event_00020_00024_Auto]
NPCSetFrame(1)
[Event_00020_00025_Auto]
NPCSetFrame(2)
[Event_00020_00027_Auto]
NPCSetFrame(3)
GotoWithNop(Event_00020_00024_Auto, 0)

[Event_00003_00003_Trigger]
RoleSetDirFrame(0, 1, 0)
RoleMoveOneStep(-10, -10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-6, -6, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-10, -10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-6, -6, 0)
WaitEventAutoScriptRun(0, false, false)
[Event_00001_00003_Trigger]
RoleSetDirFrame(0, 1, 0)
RoleMoveOneStep(-10, -10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-6, -6, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-10, -10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-6, -6, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-10, -10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-6, -6, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-10, -10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-6, -6, 0)
WaitEventAutoScriptRun(0, false, false)

[Event_00003_00004_Trigger]
RoleSetDirFrame(0, 3, 0)
RoleMoveOneStep(10, 10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(6, 6, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(10, 10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(6, 6, 0)
WaitEventAutoScriptRun(0, false, false)
[Event_00001_00002_Trigger]
RoleSetDirFrame(0, 3, 0)
RoleMoveOneStep(10, 10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(6, 6, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(10, 10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(6, 6, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(10, 10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(6, 6, 0)
WaitEventAutoScriptRun(0, false, false)
[Scr_0x0052]
RoleMoveOneStep(10, 10, 0)
[Scr_0x0053]
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(6, 6, 0)
WaitEventAutoScriptRun(0, false, false)

[Event_00025_00005_Auto]
NPCSetFrame(0)
GotoWithProbability(5, Event_00025_00005_Auto)
GotoWithProbability(50, Scr_0x005D)
[Scr_0x005A]
NPCSetFrame(1)
WaitEventAutoScriptRun(9, false, false)
ReplaceAndPauseWithNop(Event_00025_00005_Auto, 0)
[Scr_0x005D]
NPCSetFrame(2)
WaitEventAutoScriptRun(7, false, false)
NPCSetFrame(3)
WaitEventAutoScriptRun(16, false, false)
NPCSetFrame(2)
WaitEventAutoScriptRun(6, false, false)
NPCSetFrame(0)
WaitEventAutoScriptRun(4, false, false)
ReplaceAndPauseWithNop(Scr_0x005A, 0)

[Event_00005_00007_Auto]
EventAnimate(-1, 0)
EventAnimate(-1, 0)
GotoWithProbability(25, Event_00005_00007_Auto)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
[Scr_0x006E]
EventAnimate(-1, 0)
EventAnimate(-1, 0)
GotoWithProbability(40, Scr_0x006E)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(1, 2)
EventAnimate(1, 2)
[Scr_0x007B]
EventAnimate(-1, 0)
EventAnimate(-1, 0)
GotoWithProbability(50, Scr_0x007B)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
[Scr_0x00A4]
EventAnimate(-1, 0)
[Scr_0x00A5]
EventAnimate(-1, 0)
NPCSetDirFrame(3, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
GotoWithNop(Event_00005_00007_Auto, 0)

[Event_00005_00008_Auto]
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
GotoWithProbability(25, Event_00005_00008_Auto)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
[Scr_0x00C0]
EventAnimate(-1, 0)
EventAnimate(-1, 0)
GotoWithProbability(25, Scr_0x00C0)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
[Scr_0x00C7]
EventAnimate(-1, 0)
EventAnimate(-1, 0)
GotoWithProbability(25, Scr_0x00C7)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
GotoWithNop(Event_00005_00008_Auto, 0)

[Event_00019_00061_Auto]
EventAnimate(-1, 0)
GotoWithProbability(10, Event_00019_00061_Auto)
EventAnimate(0, 2)
EventWalkOneStep(-1, -1, -4, 0)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventWalkOneStep(-1, -1, 0, 2)
EventAnimate(0, 2)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventWalkOneStep(-1, -1, 4, 0)
EventAnimate(-1, 0)
EventWalkOneStep(-1, -1, 0, -2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
[Scr_0x0104]
EventAnimate(-1, 0)
GotoWithProbability(10, Scr_0x0104)
EventAnimate(2, 2)
EventWalkOneStep(-1, -1, 0, -2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(2, 2)
EventWalkOneStep(-1, -1, 4, 0)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventWalkOneStep(-1, -1, -4, 0)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventWalkOneStep(-1, -1, 0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
ReplaceAndPauseWithNop(Event_00019_00061_Auto, 0)

[Event_00019_00062_Auto]
EventAnimate(-1, 0)
GotoWithProbability(10, Event_00019_00062_Auto)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(1, 2)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(0, 2)
EventAnimate(1, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(0, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
[Scr_0x0164]
EventAnimate(-1, 0)
GotoWithProbability(10, Scr_0x0164)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventWalkOneStep(-1, -1, 0, 2)
EventAnimate(-1, 0)
EventAnimate(2, 2)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventWalkOneStep(-1, -1, 0, 4)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(-1, 0)
EventAnimate(1, 2)
EventAnimate(3, 2)
EventAnimate(1, 2)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventWalkOneStep(-1, -1, 4, 0)
EventAnimate(-1, 0)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(-1, 0)
EventWalkOneStep(-1, -1, 0, -2)
EventAnimate(-1, 0)
EventAnimate(0, 2)
EventWalkOneStep(-1, -1, 0, -4)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(3, 2)
EventAnimate(-1, 0)
EventAnimate(2, 2)
EventAnimate(1, 2)
EventAnimate(2, 2)
EventAnimate(-1, 0)
EventWalkOneStep(-1, -1, -4, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(3, 2)
ReplaceAndPauseWithNop(Event_00019_00062_Auto, 0)

[Event_00012_00002_Auto]
NPCSetFrame(0)
//?(2)
NPCSetFrame(1)
//?(4)
NPCSetFrame(2)
PlaySound(135)
//?(2)
NPCSetFrame(3)
//?(3)
ReplaceAndPauseWithNop(Event_00012_00002_Auto, 0)

[Event_00021_00002_Auto]
EventAnimate(-1, 0)
ReplaceAndPause()
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
ReplaceAndPause()
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
ReplaceAndPause()
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
ReplaceAndPause()
ReplaceAndPause()
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
ReplaceAndPause()
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
[Scr_0x01CF]
ReplaceAndPause()
GotoWithProbability(20, Scr_0x01CF)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
ReplaceAndPause()
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
[Scr_0x01DE]
ReplaceAndPause()
GotoWithProbability(20, Scr_0x01DE)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
ReplaceAndPause()
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
ReplaceAndPause()
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
ReplaceAndPause()
ReplaceAndPause()
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
ReplaceAndPauseWithNop(Event_00021_00002_Auto, 0)

[Event_00023_00005_Auto]
ReplaceAndPause()
GotoWithProbability(5, Event_00023_00005_Auto)
NPCSetDirFrame(2, 0)
[Scr_0x01F9]
ReplaceAndPause()
GotoWithProbability(8, Scr_0x01F9)
NPCSetDirFrame(3, 0)
ReplaceAndPauseWithNop(Event_00023_00005_Auto, 0)

[Event_00021_00003_Auto]
ReplaceAndPause()
GotoWithProbability(5, Event_00021_00003_Auto)
NPCSetDirFrame(2, 0)
[Scr_0x0201]
ReplaceAndPause()
GotoWithProbability(8, Scr_0x0201)
NPCSetDirFrame(1, 0)
ReplaceAndPauseWithNop(Event_00021_00003_Auto, 0)

[Event_00005_00002_Auto]
WaitEventAutoScriptRun(6, false, false)
WaitEventAutoScriptRun(6, false, false)
NPCSetFrame(1)
WaitEventAutoScriptRun(9, false, false)
NPCSetFrame(0)
ReplaceAndPauseWithNop(Event_00005_00002_Auto, 0)

[Scr_0x020D]
EventWalkOneStep(-1, -1, 4, -2)
EventModifyPos(-1, -1, 4, -2)
EventModifyPos(-1, -1, 4, -2)
EventModifyPos(-1, -1, 4, -2)
EventWalkOneStep(-1, -1, 4, -2)
EventModifyPos(-1, -1, 4, -2)
EventModifyPos(-1, -1, 4, -2)
EventModifyPos(-1, -1, 4, -2)
EventModifyPos(-1, -1, 4, -2)
EventModifyPos(-1, -1, 4, -2)
EventModifyPos(-1, -1, 4, -2)
EventModifyPos(-1, -1, 4, -2)
EventModifyPos(-1, -1, 4, -2)
EventModifyPos(-1, -1, 4, -2)
EventModifyPos(-1, -1, 4, -2)
EventModifyPos(-1, -1, 4, -2)
GotoWithNop(Scr_0x020D, 0)

[Scr_0x021F]
EventWalkOneStep(-1, -1, -4, 2)
EventModifyPos(-1, -1, -4, 2)
EventModifyPos(-1, -1, -4, 2)
EventModifyPos(-1, -1, -4, 2)
EventWalkOneStep(-1, -1, -4, 2)
EventModifyPos(-1, -1, -4, 2)
EventModifyPos(-1, -1, -4, 2)
EventModifyPos(-1, -1, -4, 2)
EventModifyPos(-1, -1, -4, 2)
EventModifyPos(-1, -1, -4, 2)
EventModifyPos(-1, -1, -4, 2)
EventModifyPos(-1, -1, -4, 2)
EventModifyPos(-1, -1, -4, 2)
EventModifyPos(-1, -1, -4, 2)
EventModifyPos(-1, -1, -4, 2)
EventModifyPos(-1, -1, -4, 2)
GotoWithNop(Scr_0x021F, 0)

[Scr_0x0231]
EventWalkOneStep(-1, -1, 8, -4)
EventModifyPos(-1, -1, 8, -4)
EventModifyPos(-1, -1, 8, -4)
EventModifyPos(-1, -1, 8, -4)
EventWalkOneStep(-1, -1, 8, -4)
EventModifyPos(-1, -1, 8, -4)
EventModifyPos(-1, -1, 8, -4)
EventModifyPos(-1, -1, 8, -4)
EventModifyPos(-1, -1, 8, -4)
EventModifyPos(-1, -1, 8, -4)
EventModifyPos(-1, -1, 8, -4)
EventModifyPos(-1, -1, 8, -4)
EventModifyPos(-1, -1, 8, -4)
EventModifyPos(-1, -1, 8, -4)
EventModifyPos(-1, -1, 8, -4)
EventModifyPos(-1, -1, 8, -4)
GotoWithNop(Scr_0x0231, 0)

[Scene_00036_Enter]
SetTimeFilter(0)

[Scene_00033_Enter]
SetTimeFilter(2)

[Event_00004_00007_Auto]
ReplaceAndPause()
NPCSetFrame(0)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(1)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(2)
WaitEventAutoScriptRun(3, false, false)
NPCSetFrame(3)
ReplaceAndPauseWithNop(Event_00004_00007_Auto, 0)

[Scr_0x0251]
NPCSetFrame(4)
WaitEventAutoScriptRun(13, false, false)
ReplaceAndPauseWithNop(Event_00004_00007_Auto, 0)

[Event_00048_00002_Auto]
ReplaceAndPause()
[Event_00048_00003_Auto]
EventAnimate(0, 2)
ReplaceAndPauseWithNop(Event_00048_00003_Auto, 0)

[Scr_0x0259]
ReplaceAndPause()
[Scr_0x025A]
EventAnimate(2, 2)
ReplaceAndPauseWithNop(Scr_0x025A, 0)

[Scr_0x025D]
ReplaceAndPause()
[Scr_0x025E]
EventAnimate(3, 2)
ReplaceAndPauseWithNop(Scr_0x025E, 0)

[Scr_0x0261]
ReplaceAndPause()
[Scr_0x0262]
EventAnimate(1, 2)
ReplaceAndPauseWithNop(Scr_0x0262, 0)

[Event_00004_00014_Auto]
NPCSetFrame(0)
NPCSetFrame(1)
GotoWithProbability(35, Event_00004_00014_Auto)
NPCSetFrame(0)
ReplaceAndPause()
NPCSetFrame(1)
ReplaceAndPause()
NPCSetFrame(2)
ReplaceAndPause()
NPCSetFrame(3)
WaitEventAutoScriptRun(4, false, false)
ReplaceAndPauseWithNop(Event_00004_00014_Auto, 0)

[Event_00004_00015_Auto]
EventAnimate(-1, 0)
GotoWithProbability(50, Event_00004_00015_Auto)
ReplaceAndPauseWithNop(Event_00004_00015_Auto, 0)

[Event_00004_00016_Auto]
EventAnimate(-1, 0)
GotoWithProbability(10, Event_00004_00016_Auto)
EventAnimate(3, 2)
ReplaceAndPause()
EventAnimate(3, 2)
WaitEventAutoScriptRun(3, false, false)
[Scr_0x027C]
EventAnimate(-1, 0)
GotoWithProbability(10, Scr_0x027C)
WaitEventAutoScriptRun(3, false, false)
EventAnimate(2, 2)
EventAnimate(2, 2)
[Scr_0x0281]
EventAnimate(-1, 0)
GotoWithProbability(10, Scr_0x0281)
EventAnimate(1, 2)
ReplaceAndPause()
EventAnimate(1, 2)
[Scr_0x0286]
EventAnimate(-1, 0)
GotoWithProbability(10, Scr_0x0286)
EventAnimate(0, 2)
EventAnimate(0, 2)
ReplaceAndPause()
ReplaceAndPauseWithNop(Event_00004_00016_Auto, 0)

[Event_00004_00017_Auto]
EventAnimate(-1, 0)
GotoWithProbability(16, Event_00004_00017_Auto)
EventAnimate(0, 2)
EventAnimate(0, 2)
ReplaceAndPause()
EventAnimate(0, 2)
EventAnimate(0, 2)
ReplaceAndPause()
ReplaceAndPause()
[Scr_0x0296]
EventAnimate(-1, 0)
GotoWithProbability(16, Scr_0x0296)
EventAnimate(1, 2)
EventAnimate(1, 2)
ReplaceAndPause()
EventAnimate(1, 2)
EventAnimate(1, 2)
ReplaceAndPause()
ReplaceAndPause()
[Scr_0x029F]
EventAnimate(-1, 0)
GotoWithProbability(16, Scr_0x029F)
EventAnimate(3, 2)
EventAnimate(3, 2)
ReplaceAndPause()
EventAnimate(2, 2)
EventAnimate(2, 2)
ReplaceAndPause()
ReplaceAndPause()
[Scr_0x02A8]
EventAnimate(-1, 0)
GotoWithProbability(16, Scr_0x02A8)
EventAnimate(3, 2)
EventAnimate(3, 2)
ReplaceAndPause()
EventAnimate(2, 2)
EventAnimate(2, 2)
ReplaceAndPauseWithNop(Event_00004_00017_Auto, 0)

[Event_00004_00018_Auto]
EventAnimate(-1, 0)
EventAnimate(-1, 0)
ReplaceAndPause()
GotoWithProbability(10, Event_00004_00018_Auto)
NPCSetFrame(9)
WaitEventAutoScriptRun(4, false, false)
GotoWithProbability(25, Event_00004_00018_Auto)
NPCSetFrame(8)
WaitEventAutoScriptRun(5, false, false)
NPCSetFrame(9)
NPCSetFrame(10)
WaitEventAutoScriptRun(6, false, false)
NPCSetFrame(11)
WaitEventAutoScriptRun(4, false, false)
NPCSetFrame(12)
NPCSetFrame(13)
WaitEventAutoScriptRun(5, false, false)
[Scr_0x02C2]
EventAnimate(-1, 0)
GotoWithProbability(10, Scr_0x02C2)
EventAnimate(3, 2)
EventAnimate(3, 2)
[Scr_0x02C6]
EventAnimate(-1, 0)
GotoWithProbability(10, Scr_0x02C6)
ReplaceAndPause()
EventAnimate(3, 2)
ReplaceAndPause()
EventAnimate(3, 2)
ReplaceAndPause()
[Scr_0x02CD]
EventAnimate(-1, 0)
GotoWithProbability(10, Scr_0x02CD)
GotoWithProbability(50, Scr_0x02D2)
NPCSetFrame(10)
GotoWithProbability(10, Scr_0x02CD)
[Scr_0x02D2]
ReplaceAndPause()
EventAnimate(1, 2)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
WaitEventAutoScriptRun(2, false, false)
EventAnimate(1, 2)
EventAnimate(1, 2)
[Scr_0x02D9]
ReplaceAndPause()
EventAnimate(-1, 0)
GotoWithProbability(40, Scr_0x02DE)
NPCSetFrame(13)
GotoWithProbability(40, Scr_0x02D9)
[Scr_0x02DE]
ReplaceAndPause()
EventAnimate(-1, 0)
ReplaceAndPause()
EventAnimate(-1, 0)
EventAnimate(-1, 0)
WaitEventAutoScriptRun(2, false, false)
EventAnimate(1, 2)
ReplaceAndPauseWithNop(Event_00004_00018_Auto, 0)

[Scr_0x02E7]
RoleSetDirFrame(0, 2, 0)
RoleMoveOneStep(10, -10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(6, -6, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(10, -10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(6, -6, 0)
WaitEventAutoScriptRun(0, false, false)
[Event_00204_00002_Trigger]
RoleSetDirFrame(0, 2, 0)
RoleMoveOneStep(10, -10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(6, -6, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(10, -10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(6, -6, 0)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 2, 0)
RoleMoveOneStep(10, -10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(6, -6, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(10, -10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(6, -6, 0)
WaitEventAutoScriptRun(0, false, false)

[Scr_0x0303]
RoleSetDirFrame(0, 0, 0)
RoleMoveOneStep(-10, 10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-6, 6, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-10, 10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-6, 6, 0)
WaitEventAutoScriptRun(0, false, false)
[Event_00204_00005_Trigger]
RoleSetDirFrame(0, 0, 0)
RoleMoveOneStep(-10, 10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-6, 6, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-10, 10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-6, 6, 0)
WaitEventAutoScriptRun(0, false, false)
[Scr_0x0315]
RoleSetDirFrame(0, 0, 1)
RoleMoveOneStep(-10, 10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-6, 6, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-10, 10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-6, 6, 0)
WaitEventAutoScriptRun(0, false, false)

[Event_00107_00003_Trigger]
RoleSetDirFrame(0, 2, 0)
RoleMoveOneStep(12, -16, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(12, -16, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(12, -16, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(12, -8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(16, -8, 0)
WaitEventAutoScriptRun(0, false, true)

[Event_00107_00004_Trigger]
RoleSetDirFrame(0, 0, 0)
RoleMoveOneStep(-12, 16, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-12, 16, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-12, 16, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-12, 8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-16, 8, 0)
WaitEventAutoScriptRun(0, false, true)

[Event_00112_00004_Trigger]
RoleSetDirFrame(0, 2, 0)
RoleMoveOneStep(16, 8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(16, 8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(16, 8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(16, 8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(16, 8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(16, -8, 0)
WaitEventAutoScriptRun(0, false, true)

[Event_00112_00003_Trigger]
RoleSetDirFrame(0, 0, 0)
RoleMoveOneStep(-16, -8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-16, -8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-16, -8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-16, -8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-16, -8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-16, 8, 0)
WaitEventAutoScriptRun(0, false, true)

[Event_00096_00005_Auto]
EventAnimate(-1, 0)
ReplaceAndPause()
ReplaceAndPauseWithNop(Event_00096_00005_Auto, 0)

[Event_00023_00038_Auto]
NPCSetDirFrame(65535, 0)
ReplaceAndPause()
NPCSetDirFrame(65535, 1)
ReplaceAndPause()
GotoWithProbability(32, Event_00023_00038_Auto)
[Scr_0x035C]
NPCSetDirFrame(65535, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
ReplaceAndPause()
GotoWithProbability(50, Scr_0x035C)
EventSetTriggerMode(-1, -1, true, 3)
GotoWithNop(Event_00023_00038_Auto, 0)

[Event_00049_00032_Auto]
NPCChase(4, 24)
GotoWithProbability(10, Event_00049_00032_Auto)
[Scr_0x0367]
ReplaceAndPause()
GotoWithProbability(20, Scr_0x0367)
ReplaceAndPauseWithNop(Event_00049_00032_Auto, 0)

[Event_00019_00007_Auto]
WaitEventAutoScriptRun(2, false, false)
GotoWithProbability(60, Event_00019_00007_Auto)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(0)
WaitEventAutoScriptRun(4, false, false)
NPCSetFrame(1)
ReplaceAndPauseWithNop(Event_00019_00007_Auto, 0)

[Scr_0x0373]
NPCSetFrame(1)
VideoUpdate(0, false)
PlaySound(78)

[Event_00184_00003_Trigger]
SetDlgCenter(0, 0x00000000, false)
//一个空箱子．．

[Scr_0x037A]
PlaySound(113)
[Scr_0x037B]
NPCSetFrame(3)
NPCSetFrame(2)
NPCSetFrame(1)
NPCSetFrame(0)

[Scr_0x0380]
PlaySound(113)
NPCSetFrame(1)
NPCSetFrame(2)
NPCSetFrame(3)
NPCSetFrame(4)

[Event_00113_00003_Auto]
GotoWithProbability(5, Null)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
ReplaceAndPause()
EventAnimate(0, 2)
GotoWithProbability(10, Null)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
EventAnimate(1, 2)
ReplaceAndPause()
EventAnimate(1, 2)
WaitEventAutoScriptRun(2, false, false)
GotoWithProbability(5, Null)
EventAnimate(3, 2)
WaitEventAutoScriptRun(2, false, false)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
GotoWithProbability(8, Null)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
ReplaceAndPause()
EventAnimate(2, 2)
GotoWithProbability(10, Null)
EventAnimate(2, 2)
ReplaceAndPauseWithNop(Event_00113_00003_Auto, 0)

[Event_00156_00021_Auto]
NPCSetFrame(0)
GotoWithProbability(3, Null)
NPCSetFrame(1)
ReplaceAndPause()
NPCSetFrame(2)
ReplaceAndPause()
NPCSetFrame(3)
ReplaceAndPause()
NPCSetFrame(4)
ReplaceAndPause()
NPCSetFrame(5)
ReplaceAndPause()
NPCSetFrame(6)
ReplaceAndPause()
NPCSetFrame(7)
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
NPCSetFrame(8)
ReplaceAndPause()
NPCSetFrame(9)
ReplaceAndPause()
NPCSetFrame(10)
ReplaceAndPause()
NPCSetFrame(11)
ReplaceAndPause()
NPCSetFrame(12)
ReplaceAndPause()
NPCSetFrame(13)
ReplaceAndPauseWithNop(Event_00156_00021_Auto, 0)

[Event_00004_00037_Auto]
NPCSetFrame(5)
GotoWithProbability(40, Event_00004_00037_Auto)
WaitEventAutoScriptRun(3, false, false)
NPCSetFrame(4)
ReplaceAndPause()
ReplaceAndPauseWithNop(Event_00004_00037_Auto, 0)

[Event_00192_00057_Auto]
NPCSetFrame(7)
ReplaceAndPause()
NPCSetFrame(6)
ReplaceAndPause()
GotoWithProbability(20, Event_00192_00057_Auto)
NPCSetFrame(0)
GotoWithProbability(8, Null)
ReplaceAndPauseWithNop(Event_00192_00057_Auto, 0)

[Event_00203_00012_Trigger]
RoleSetDirFrame(0, 0, 0)
RoleMoveOneStep(-10, 10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-6, 6, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-10, 10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-6, 6, 0)
WaitEventAutoScriptRun(0, false, false)
[Event_00203_00008_Trigger]
RoleSetDirFrame(0, 0, 0)
RoleMoveOneStep(-10, 10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-6, 6, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-10, 10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-6, 6, 0)
WaitEventAutoScriptRun(0, false, false)
[Event_00203_00006_Trigger]
RoleSetDirFrame(0, 0, 1)
RoleMoveOneStep(-10, 10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-6, 6, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-10, 10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-6, 6, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-16, 8, 0)
WaitEventAutoScriptRun(0, false, false)

[Event_00203_00009_Trigger]
RoleSetDirFrame(0, 2, 0)
RoleMoveOneStep(10, -10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(6, -6, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(10, -10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(6, -6, 0)
WaitEventAutoScriptRun(0, false, false)
[Event_00203_00007_Trigger]
RoleSetDirFrame(0, 2, 0)
RoleMoveOneStep(10, -10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(6, -6, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(10, -10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(6, -6, 0)
WaitEventAutoScriptRun(0, false, false)
[Event_00203_00005_Trigger]
RoleSetDirFrame(0, 2, 0)
RoleMoveOneStep(10, -10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(6, -6, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(10, -10, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(6, -6, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(16, -8, 0)
WaitEventAutoScriptRun(0, false, false)

[Event_00004_00010_Auto]
NPCSetFrame(0)
ReplaceAndPause()
NPCSetFrame(1)
ReplaceAndPause()
GotoWithProbability(5, Event_00004_00010_Auto)
NPCSetFrame(2)
ReplaceAndPause()
NPCSetFrame(3)
ReplaceAndPause()
NPCSetFrame(4)
ReplaceAndPause()
NPCSetFrame(5)
ReplaceAndPause()
NPCSetFrame(6)
WaitEventAutoScriptRun(5, false, false)
ReplaceAndPauseWithNop(Event_00004_00010_Auto, 0)

[Event_00021_00010_Auto]
NPCSetFrame(0)
WaitEventAutoScriptRun(8, false, false)
NPCSetFrame(1)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(2)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(3)
WaitEventAutoScriptRun(20, false, false)
NPCSetFrame(2)
ReplaceAndPause()
NPCSetFrame(1)
ReplaceAndPauseWithNop(Event_00021_00010_Auto, 0)

[Event_00259_00016_Auto]
NPCSetFrame(0)
GotoWithProbability(55, Null)
NPCSetFrame(2)
NPCSetFrame(1)
ReplaceAndPause()
NPCSetFrame(2)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(1)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(0)
GotoWithProbability(55, Null)
NPCSetFrame(3)
ReplaceAndPauseWithNop(Event_00259_00016_Auto, 0)

[Event_00259_00012_Auto]
NPCSetFrame(0)
ReplaceAndPause()
NPCSetFrame(1)
ReplaceAndPause()
GotoWithProbability(50, Event_00259_00012_Auto)
[Scr_0x044E]
NPCSetFrame(0)
ReplaceAndPause()
NPCSetFrame(2)
ReplaceAndPause()
GotoWithProbability(50, Event_00259_00012_Auto)
GotoWithNop(Scr_0x044E, 0)

[Event_00262_00001_Auto]
EventAnimate(-1, 0)
ReplaceAndPause()
ReplaceAndPauseWithNop(Event_00262_00001_Auto, 0)

[Event_00060_00069_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得１００文钱
CashModify(100, Null)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x045F]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得２００文钱
CashModify(200, Null)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00041_00016_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得３００文钱
CashModify(300, Null)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x046B]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得４００文钱
CashModify(400, Null)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0471]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得５００文钱
CashModify(500, Null)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00064_00034_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得６００文钱
CashModify(600, Null)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00243_00016_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得７００文钱
CashModify(700, Null)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00065_00109_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得８００文钱
CashModify(800, Null)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00243_00020_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得９００文钱
CashModify(900, Null)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00060_00073_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得１０００文钱
CashModify(1000, Null)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00243_00015_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得２０００文钱
CashModify(2000, Null)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00243_00017_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得３０００文钱
CashModify(3000, Null)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x04A1]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得４０００文钱
CashModify(4000, Null)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00092_00015_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得５０００文钱
CashModify(5000, Null)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x04AD]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得６０００文钱
CashModify(6000, Null)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x04B3]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得７０００文钱
CashModify(7000, Null)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x04B9]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得８０００文钱
CashModify(8000, Null)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x04BF]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得９０００文钱
CashModify(9000, Null)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00184_00036_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得１００００文钱
CashModify(10000, Null)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x04CB]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得２００００文钱
CashModify(20000, Null)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x04D1]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得３００００文钱
CashModify(30000, Null)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x04D7]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得木剑
AddItem(106, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x04DD]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得短刀
AddItem(107, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x04E3]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得铁剑
AddItem(108, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00065_00120_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得大刀
AddItem(109, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x04EF]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得长剑
AddItem(111, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x04F5]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得长鞭
AddItem(103, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x04FB]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得仙女剑
AddItem(110, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0501]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得越女剑
AddItem(113, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0507]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得红缨刀
AddItem(112, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x050D]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得芙蓉刀
AddItem(116, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00076_00061_Trigger]
EventSetState(-1, -1, false, false)
VideoUpdate(0, false)
SetDlgBox(0x00000000)
//获得戒刀
AddItem(114, 0)

[Scr_0x0519]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得柳月刀
AddItem(117, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x051F]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得九节鞭
AddItem(104, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00184_00035_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得苗刀
AddItem(119, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00168_00022_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得双龙剑
AddItem(121, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0531]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得玄铁剑
AddItem(115, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0537]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得青锋剑
AddItem(118, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00154_00032_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得凤鸣刀
AddItem(120, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0543]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得龙泉剑
AddItem(124, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0549]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得青蛇杖
AddItem(132, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00220_00004_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得鬼牙刀
AddItem(125, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0555]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得玉女剑
AddItem(122, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x055B]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得金童剑
AddItem(123, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0561]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得金蛇鞭
AddItem(105, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00220_00005_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得鬼头杖
AddItem(133, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x056D]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得七星剑
AddItem(126, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00213_00035_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得玄冥宝刀
AddItem(127, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00184_00032_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得磐龙剑
AddItem(129, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00213_00036_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得冥蛇杖
AddItem(134, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00292_00045_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得巫月神刀
AddItem(128, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00290_00011_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得太极剑
AddItem(130, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00213_00037_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得无尘剑
AddItem(131, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0597]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得头巾
AddItem(136, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x059D]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得青丝巾
AddItem(137, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x05A3]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得发饰
AddItem(138, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x05A9]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得皮帽
AddItem(141, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00047_00019_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得银钗
AddItem(139, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x05B5]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得翠玉金钗
AddItem(140, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x05BB]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得珍珠冠
AddItem(142, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00148_00035_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得天师帽
AddItem(143, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00220_00006_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得凤凰羽毛
AddItem(146, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00184_00034_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得紫金冠
AddItem(144, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00226_00046_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得天蚕丝带
AddItem(145, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00289_00037_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得冲天冠
AddItem(147, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x05DF]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得披风
AddItem(165, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00065_00108_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得护肩
AddItem(166, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00076_00053_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得武士披风
AddItem(167, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x05F1]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得护心镜
AddItem(168, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00092_00010_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得霓虹羽衣
AddItem(169, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00092_00009_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得菩提袈裟
AddItem(170, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0603]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得虎纹披风
AddItem(171, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00291_00027_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得凤纹披风
AddItem(172, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00292_00048_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得龙纹披风
AddItem(173, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0615]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得布袍
AddItem(148, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x061B]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得丝衣
AddItem(150, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00045_00024_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得藤甲
AddItem(149, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00076_00054_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得铁锁衣
AddItem(151, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00092_00034_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得夜行衣
AddItem(152, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0633]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得青铜甲
AddItem(153, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0639]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得罗汉袍
AddItem(154, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x063F]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得铁鳞甲
AddItem(155, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0645]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得天师道袍
AddItem(156, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x064B]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得精铁战甲
AddItem(157, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0651]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得金缕衣
AddItem(158, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00167_00047_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得鬼针胄
AddItem(159, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00226_00047_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得天蚕宝衣
AddItem(160, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00290_00009_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得青龙宝甲
AddItem(161, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00291_00026_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得白虎之铠
AddItem(162, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00293_00020_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得玄武战袍
AddItem(163, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00292_00052_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得朱雀战衣
AddItem(164, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x067B]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得草鞋
AddItem(175, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0681]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得木鞋
AddItem(176, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0687]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得布靴
AddItem(177, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00036_00008_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得绣花鞋
AddItem(178, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00047_00022_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得铁履
AddItem(179, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0699]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得武僧靴
AddItem(180, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x069F]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得鹿皮靴
AddItem(181, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00092_00019_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得疾风靴
AddItem(182, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x06AB]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得莲花靴
AddItem(183, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x06B1]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得虎皮靴
AddItem(184, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x06B7]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得龙鳞靴
AddItem(185, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00245_00039_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得步云靴
AddItem(186, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00226_00049_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得魅影神靴
AddItem(187, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x06C9]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得护腕
AddItem(189, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00065_00114_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得铁护腕
AddItem(190, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x06D5]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得竹笛
AddItem(191, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x06DB]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得香袋
AddItem(188, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00047_00020_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得珍珠
AddItem(192, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x06E7]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得念珠
AddItem(194, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00047_00021_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得玉镯
AddItem(193, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00047_00018_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得铜镜
AddItem(196, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00156_00067_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得八卦镜
AddItem(197, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00184_00033_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得乾坤镜
AddItem(198, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00220_00008_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得豹牙手环
AddItem(199, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x070B]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得念珠
AddItem(194, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00213_00038_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得金罡珠
AddItem(201, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00040_00034_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得止血草
AddItem(39, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00060_00072_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得行军丹
AddItem(40, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0723]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得腌肉
AddItem(34, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00059_00101_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得观音符
AddItem(1, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00060_00070_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得金创药
AddItem(41, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00154_00031_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得蟠果
AddItem(42, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00156_00075_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得圣灵符
AddItem(2, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00092_00016_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得紫菁玉蓉膏
AddItem(43, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0747]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得鼠儿果
AddItem(44, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00044_00018_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得还神丹
AddItem(45, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00166_00036_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得龙涎草
AddItem(46, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00190_00024_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得灵蛊
AddItem(85, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00139_00021_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得灵山仙芝
AddItem(47, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00289_00035_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得雪莲子
AddItem(48, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00092_00017_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得天仙玉露
AddItem(49, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0771]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得茶叶蛋
AddItem(18, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0777]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得酒
AddItem(26, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x077D]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得糖葫芦
AddItem(20, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0783]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得烧肉
AddItem(33, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00060_00071_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得蜂王蜜
AddItem(71, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00190_00028_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得神仙茶
AddItem(50, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00147_00023_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得灵葫仙丹
AddItem(51, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00059_00098_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得还魂香
AddItem(35, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00059_00102_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得赎魂灯
AddItem(36, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00103_00017_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得孟婆汤
AddItem(37, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00287_00019_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得天香续命露
AddItem(38, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x07B3]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得大蒜
AddItem(24, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00062_00006_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得金刚符
AddItem(3, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00165_00037_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得银杏子
AddItem(14, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00148_00036_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得舍利子
AddItem(12, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00167_00044_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得玉菩提
AddItem(13, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00156_00068_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得试炼果
AddItem(52, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00166_00046_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得女娲石
AddItem(53, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00231_00011_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得八仙石
AddItem(54, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00104_00039_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得雪蛤蟆
AddItem(72, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00184_00031_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得金蚕王
AddItem(90, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00064_00031_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得十里香
AddItem(31, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00167_00046_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得驱魔香
AddItem(30, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00061_00016_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得引路蜂
AddItem(91, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00103_00015_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得傀儡虫
AddItem(92, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0807]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得铜钱镖
AddItem(284, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x080D]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得银针
AddItem(195, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00060_00068_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得梅花镖
AddItem(93, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00059_00100_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得透骨钉
AddItem(95, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00070_00009_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得袖里剑
AddItem(94, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00092_00013_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得无影神针
AddItem(101, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x082B]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得雷火珠
AddItem(96, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00184_00030_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得血玲珑
AddItem(102, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00219_00030_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得毒龙砂
AddItem(97, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00070_00008_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得吸星锁
AddItem(98, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00139_00018_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得缠魂丝
AddItem(99, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00167_00045_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得綑仙绳
AddItem(100, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00064_00037_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得天师符
AddItem(6, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00165_00040_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得风灵符
AddItem(7, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00165_00030_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得雷灵符
AddItem(8, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00165_00036_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得水灵符
AddItem(9, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00165_00032_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得火灵符
AddItem(10, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00059_00104_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得土灵符
AddItem(11, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0873]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得毒蛇卵
AddItem(57, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0879]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得毒蠍卵
AddItem(58, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x087F]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得毒蟾卵
AddItem(59, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0885]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得蜘蛛卵
AddItem(60, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x088B]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得蜈蚣卵
AddItem(61, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00219_00016_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得９个毒蛇卵
AddItem(57, 9)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00219_00017_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得９个毒蠍卵
AddItem(58, 9)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00101_00033_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得９个毒蟾卵
AddItem(59, 9)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00139_00019_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得９个蜘蛛卵
AddItem(60, 9)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00219_00020_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得９个蜈蚣卵
AddItem(61, 9)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x08AF]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得腐屍肉
AddItem(56, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x08B5]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得腹蛇涎
AddItem(70, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00040_00036_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得忘魂花
AddItem(67, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00104_00031_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得紫罂粟
AddItem(68, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00139_00022_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得醍醐香
AddItem(66, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00071_00009_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得迷魂香
AddItem(75, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00139_00020_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得蜂巢
AddItem(55, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00101_00036_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得化屍水
AddItem(74, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00074_00003_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得赤蠍粉
AddItem(73, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00223_00020_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得三屍蛊
AddItem(78, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00223_00023_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得鹤顶红
AddItem(62, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00223_00026_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得孔雀胆
AddItem(63, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00223_00029_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得血海棠
AddItem(64, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00288_00040_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得断肠草
AddItem(65, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00223_00033_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得金蚕蛊
AddItem(79, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00223_00035_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得无影毒
AddItem(77, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00184_00023_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得炼蛊皿
AddItem(208, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00104_00032_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得九只蛊
AddItem(88, 9)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00101_00031_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得食妖虫
AddItem(84, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00103_00020_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得碧血蚕
AddItem(87, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00104_00035_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得灵蛊
AddItem(85, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00220_00010_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得赤血蚕
AddItem(89, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00220_00012_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得金蚕王
AddItem(90, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00092_00011_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得隐蛊
AddItem(81, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00103_00016_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得幻蛊
AddItem(80, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00102_00010_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得冰蚕蛊
AddItem(82, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00189_00041_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得火蚕蛊
AddItem(83, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00189_00043_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得爆烈蛊
AddItem(86, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0957]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得盐巴
AddItem(17, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00040_00033_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得雄黄
AddItem(27, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0963]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得酒
AddItem(26, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0969]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得雄黄酒
AddItem(28, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00062_00005_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得糯米
AddItem(15, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x0975]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得糯米糕
AddItem(16, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00059_00099_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得净衣符
AddItem(4, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00040_00035_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得银针
AddItem(195, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00148_00037_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得灵心符
AddItem(5, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00065_00111_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得鬼枯藤
AddItem(69, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00148_00034_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得九节菖蒲
AddItem(29, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00103_00019_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得九阴散
AddItem(76, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00223_00032_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//获得毒龙胆
AddItem(218, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00006_00019_Trigger]
EventSetState(-1, -1, false, false)
VideoUpdate(0, false)
PlaySound(78)
SetDlgBox(0x00000000)
//摘得止血草
AddItem(39, 0)

[Event_00014_00015_Trigger]
EventSetState(-1, -1, false, false)
VideoUpdate(0, false)
PlaySound(78)
SetDlgBox(0x00000000)
//摘得鼠儿果
AddItem(44, 0)

[Event_00101_00027_Trigger]
EventSetState(-1, -1, false, false)
VideoUpdate(0, false)
PlaySound(78)
SetDlgBox(0x00000000)
//摘得鬼枯藤
AddItem(69, 0)

[Event_00006_00020_Trigger]
EventSetState(-1, -1, false, false)
VideoUpdate(0, false)
PlaySound(78)
SetDlgBox(0x00000000)
//摘得龙涎草
AddItem(46, 0)

[Event_00101_00030_Trigger]
EventSetState(-1, -1, false, false)
VideoUpdate(0, false)
PlaySound(78)
SetDlgBox(0x00000000)
//采得银杏子
AddItem(14, 0)

[Event_00101_00032_Trigger]
EventSetState(-1, -1, false, false)
VideoUpdate(0, false)
PlaySound(78)
SetDlgBox(0x00000000)
//摘得忘魂花
AddItem(67, 0)

[Event_00101_00035_Trigger]
EventSetState(-1, -1, false, false)
VideoUpdate(0, false)
PlaySound(78)
SetDlgBox(0x00000000)
//获得紫罂粟
AddItem(68, 0)

[Event_00139_00016_Trigger]
EventSetState(-1, -1, false, false)
VideoUpdate(0, false)
PlaySound(78)
SetDlgBox(0x00000000)
//获得试炼果
AddItem(52, 0)

[Event_00139_00024_Trigger]
EventSetState(-1, -1, false, false)
VideoUpdate(0, false)
PlaySound(78)
SetDlgBox(0x00000000)
//获得九节菖蒲
AddItem(29, 0)

[Event_00180_00014_Trigger]
EventSetState(-1, -1, false, false)
VideoUpdate(0, false)
PlaySound(78)
SetDlgBox(0x00000000)
//摘得蟠果
AddItem(42, 0)

[Event_00179_00010_Trigger]
EventSetState(-1, -1, false, false)
VideoUpdate(0, false)
PlaySound(78)
SetDlgBox(0x00000000)
//摘得断肠草
AddItem(65, 0)

[Event_00186_00016_Trigger]
EventSetState(-1, -1, false, false)
VideoUpdate(0, false)
PlaySound(78)
SetDlgBox(0x00000000)
//摘得醍醐香
AddItem(66, 0)

[Event_00192_00078_Trigger]
EventSetState(-1, -1, false, false)
VideoUpdate(0, false)
PlaySound(78)
SetDlgBox(0x00000000)
//摘得玉菩提
AddItem(13, 0)

[Event_00014_00013_Trigger]
EventSetState(-1, -1, false, false)
VideoUpdate(0, false)
PlaySound(78)
SetDlgBox(0x00000000)
//获得水果
AddItem(32, 0)

[Event_00176_00010_Trigger]
EventSetState(-1, -1, false, false)
VideoUpdate(0, false)
PlaySound(78)
SetDlgBox(0x00000000)
//采得灵山仙芝
AddItem(47, 0)

[Event_00008_00010_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现５文钱
CashModify(5, Null)
EventSetState(-1, -1, false, false)

[Event_00036_00010_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现１５文钱
CashModify(15, Null)
EventSetState(-1, -1, false, false)

[Event_00002_00010_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现５０文钱
CashModify(50, Null)
EventSetState(-1, -1, false, false)

[Event_00062_00009_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现１００文钱
CashModify(100, Null)
EventSetState(-1, -1, false, false)

[Event_00207_00036_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现２３０文钱
CashModify(230, Null)
EventSetState(-1, -1, false, false)

[Event_00209_00014_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现３００文钱
CashModify(300, Null)
EventSetState(-1, -1, false, false)

[Event_00008_00008_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现糯米
AddItem(15, 0)
EventSetState(-1, -1, false, false)

[Event_00009_00006_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现糯米糕
AddItem(16, 0)
EventSetState(-1, -1, false, false)

[Event_00008_00009_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现盐巴
AddItem(17, 0)
EventSetState(-1, -1, false, false)

[Event_00004_00036_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现鸡蛋
AddItem(19, 0)
EventSetState(-1, -1, false, false)

[Event_00191_00015_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现茶叶蛋
AddItem(18, 0)
EventSetState(-1, -1, false, false)

[Scr_0x0A50]
PlaySound(78)
SetDlgBox(0x00000000)
//发现糖葫芦
AddItem(20, 0)
EventSetState(-1, -1, false, false)

[Event_00050_00026_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现大蒜
AddItem(24, 0)
EventSetState(-1, -1, false, false)

[Event_00050_00022_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现酒
AddItem(26, 0)
EventSetState(-1, -1, false, false)

[Scr_0x0A62]
PlaySound(78)
SetDlgBox(0x00000000)
//发现雄黄
AddItem(27, 0)
EventSetState(-1, -1, false, false)

[Event_00062_00011_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现雄黄酒
AddItem(28, 0)
EventSetState(-1, -1, false, false)

[Event_00003_00024_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现水果
AddItem(32, 0)
EventSetState(-1, -1, false, false)

[Event_00009_00005_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现烧肉
AddItem(33, 0)
EventSetState(-1, -1, false, false)

[Event_00024_00015_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现腌肉
AddItem(34, 0)
EventSetState(-1, -1, false, false)

[Event_00191_00008_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现还魂香
AddItem(35, 0)
EventSetState(-1, -1, false, false)

[Event_00191_00019_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现赎魂灯
AddItem(36, 0)
EventSetState(-1, -1, false, false)

[Event_00005_00029_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现止血草
AddItem(39, 0)
EventSetState(-1, -1, false, false)

[Event_00020_00053_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现行军丹
AddItem(40, 0)
EventSetState(-1, -1, false, false)

[Event_00020_00052_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现金创药
AddItem(41, 0)
EventSetState(-1, -1, false, false)

[Event_00175_00028_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现蟠果
AddItem(42, 0)
EventSetState(-1, -1, false, false)

[Event_00019_00070_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现鼠儿果
AddItem(44, 0)
EventSetState(-1, -1, false, false)

[Event_00002_00011_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现还神丹
AddItem(45, 0)
EventSetState(-1, -1, false, false)

[Event_00019_00068_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现龙涎草
AddItem(46, 0)
EventSetState(-1, -1, false, false)

[Event_00293_00023_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现灵山仙芝
AddItem(47, 0)
EventSetState(-1, -1, false, false)

[Event_00191_00020_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现雪莲子
AddItem(48, 0)
EventSetState(-1, -1, false, false)

[Event_00191_00006_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现天仙玉露
AddItem(49, 0)
EventSetState(-1, -1, false, false)

[Event_00005_00033_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现蜂王蜜
AddItem(71, 0)
EventSetState(-1, -1, false, false)

[Event_00191_00016_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现灵葫仙丹
AddItem(51, 0)
EventSetState(-1, -1, false, false)

[Event_00191_00026_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现神仙茶
AddItem(50, 0)
EventSetState(-1, -1, false, false)

[Event_00005_00032_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现蜂巢
AddItem(55, 0)
EventSetState(-1, -1, false, false)

[Event_00191_00027_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现醍醐香
AddItem(66, 0)
EventSetState(-1, -1, false, false)

[Event_00002_00012_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现忘魂花
AddItem(67, 0)
EventSetState(-1, -1, false, false)

[Event_00191_00013_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现紫罂粟
AddItem(68, 0)
EventSetState(-1, -1, false, false)

[Event_00207_00037_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现迷魂香
AddItem(75, 0)
EventSetState(-1, -1, false, false)

[Event_00207_00030_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现蛊
AddItem(88, 0)
EventSetState(-1, -1, false, false)

[Event_00207_00041_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现幻蛊
AddItem(80, 0)
EventSetState(-1, -1, false, false)

[Event_00207_00027_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现冰蚕蛊
AddItem(82, 0)
EventSetState(-1, -1, false, false)

[Event_00207_00023_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现火蚕蛊
AddItem(83, 0)
EventSetState(-1, -1, false, false)

[Event_00036_00011_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现银针
AddItem(195, 0)
EventSetState(-1, -1, false, false)

[Event_00050_00018_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现头巾
AddItem(136, 0)
EventSetState(-1, -1, false, false)

[Scr_0x0B1C]
PlaySound(78)
SetDlgBox(0x00000000)
//发现青丝巾
AddItem(137, 0)
EventSetState(-1, -1, false, false)

[Event_00050_00027_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现发饰
AddItem(138, 0)
EventSetState(-1, -1, false, false)

[Scr_0x0B28]
PlaySound(78)
SetDlgBox(0x00000000)
//发现银钗
AddItem(139, 0)
EventSetState(-1, -1, false, false)

[Event_00062_00008_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现布袍
AddItem(148, 0)
EventSetState(-1, -1, false, false)

[Event_00209_00015_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现藤甲
AddItem(149, 0)
EventSetState(-1, -1, false, false)

[Event_00207_00024_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现丝衣
AddItem(150, 0)
EventSetState(-1, -1, false, false)

[Event_00207_00031_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现披风
AddItem(165, 0)
EventSetState(-1, -1, false, false)

[Scr_0x0B46]
PlaySound(78)
SetDlgBox(0x00000000)
//发现护肩
AddItem(166, 0)
EventSetState(-1, -1, false, false)

[Scr_0x0B4C]
PlaySound(78)
SetDlgBox(0x00000000)
//发现护心镜
AddItem(168, 0)
EventSetState(-1, -1, false, false)

[Event_00050_00023_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现草鞋
AddItem(175, 0)
EventSetState(-1, -1, false, false)

[Event_00038_00012_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现木鞋
AddItem(176, 0)
EventSetState(-1, -1, false, false)

[Event_00207_00042_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现布靴
AddItem(177, 0)
EventSetState(-1, -1, false, false)

[Event_00118_00012_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现绣花鞋
AddItem(178, 0)
EventSetState(-1, -1, false, false)

[Event_00038_00009_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现香袋
AddItem(188, 0)
EventSetState(-1, -1, false, false)

[Event_00207_00026_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现护腕
AddItem(189, 0)
EventSetState(-1, -1, false, false)

[Event_00024_00016_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现珍珠
AddItem(192, 0)
EventSetState(-1, -1, false, false)

[Event_00036_00009_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现玉镯
AddItem(193, 0)
EventSetState(-1, -1, false, false)

[Event_00058_00029_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现念珠
AddItem(194, 0)
EventSetState(-1, -1, false, false)

[Event_00191_00009_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现铜镜
AddItem(196, 0)
EventSetState(-1, -1, false, false)

[Event_00058_00036_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现观音符
AddItem(1, 0)
EventSetState(-1, -1, false, false)

[Event_00038_00011_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现金刚符
AddItem(3, 0)
EventSetState(-1, -1, false, false)

[Event_00001_00032_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现净衣符
AddItem(4, 0)
EventSetState(-1, -1, false, false)

[Scr_0x0BA0]
PlaySound(78)
SetDlgBox(0x00000000)
//发现灵心符
AddItem(5, 0)
EventSetState(-1, -1, false, false)

[Scr_0x0BA6]
PlaySound(78)
SetDlgBox(0x00000000)
//发现天师符
AddItem(6, 0)
EventSetState(-1, -1, false, false)

[Event_00058_00031_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现驱魔香
AddItem(30, 0)
EventSetState(-1, -1, false, false)

[Event_00024_00017_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//发现十里香
AddItem(31, 0)
EventSetState(-1, -1, false, false)

[Event_00085_00006_Auto]
WaitEventAutoScriptRun(20, false, false)
PlaySound(52)
WaitEventAutoScriptRun(10, false, false)
GotoWithProbability(8, Null)
GotoWithProbability(50, Scr_0x0BC4)
PlaySound(53)
WaitEventAutoScriptRun(15, false, false)
GotoWithProbability(50, Scr_0x0BC7)
GotoWithProbability(4, Null)
PlaySound(53)
WaitEventAutoScriptRun(10, false, false)
GotoWithProbability(8, Null)
[Scr_0x0BC4]
PlaySound(52)
WaitEventAutoScriptRun(30, false, false)
GotoWithProbability(6, Null)
[Scr_0x0BC7]
PlaySound(53)
GotoWithProbability(3, Null)
ReplaceAndPauseWithNop(Event_00085_00006_Auto, 0)

[Event_00006_00021_Auto]
WaitEventAutoScriptRun(8, false, false)
PlaySound(66)
GotoWithProbability(60, Scr_0x0BD2)
WaitEventAutoScriptRun(6, false, false)
GotoWithProbability(20, Null)
PlaySound(66)
WaitEventAutoScriptRun(8, false, false)
[Scr_0x0BD2]
GotoWithProbability(8, Null)
GotoWithProbability(33, Event_00006_00021_Auto)
WaitEventAutoScriptRun(20, false, false)
PlaySound(73)
WaitEventAutoScriptRun(20, false, false)
GotoWithProbability(70, Event_00006_00021_Auto)
PlaySound(73)
GotoWithProbability(2, Null)
ReplaceAndPauseWithNop(Event_00006_00021_Auto, 0)

[Event_00061_00006_Auto]
WaitEventAutoScriptRun(20, false, false)
GotoWithProbability(6, Null)
PlaySound(60)
WaitEventAutoScriptRun(15, false, false)
[Scr_0x0BE0]
GotoWithProbability(50, Scr_0x0BE4)
GotoWithProbability(10, Null)
PlaySound(61)
WaitEventAutoScriptRun(12, false, false)
[Scr_0x0BE4]
GotoWithProbability(10, Null)
PlaySound(62)
WaitEventAutoScriptRun(20, false, false)
GotoWithProbability(4, Null)
GotoWithProbability(30, Scr_0x0BE0)
GotoWithProbability(2, Null)
ReplaceAndPauseWithNop(Event_00061_00006_Auto, 0)

[Event_00176_00016_Auto]
GotoWithProbability(25, Null)
GotoWithProbability(85, Scr_0x0BF7)
GotoWithProbability(82, Scr_0x0BFC)
GotoWithProbability(80, Scr_0x0C01)
GotoWithProbability(80, Scr_0x0C06)
GotoWithProbability(75, Scr_0x0C0B)
GotoWithProbability(70, Scr_0x0C10)
GotoWithProbability(65, Scr_0x0C15)
GotoWithProbability(60, Scr_0x0C1A)
GotoWithProbability(5, Null)
ReplaceAndPauseWithNop(Event_00176_00016_Auto, 0)
[Scr_0x0BF7]
PlaySound(63)
WaitEventAutoScriptRun(12, false, false)
GotoWithProbability(20, Null)
GotoWithProbability(70, Scr_0x0BFC)
ReplaceAndPauseWithNop(Event_00176_00016_Auto, 0)
[Scr_0x0BFC]
PlaySound(64)
WaitEventAutoScriptRun(14, false, false)
GotoWithProbability(20, Null)
GotoWithProbability(45, Scr_0x0BF7)
ReplaceAndPauseWithNop(Event_00176_00016_Auto, 0)
[Scr_0x0C01]
PlaySound(65)
WaitEventAutoScriptRun(6, false, false)
GotoWithProbability(20, Null)
GotoWithProbability(70, Scr_0x0C01)
ReplaceAndPauseWithNop(Event_00176_00016_Auto, 0)
[Scr_0x0C06]
PlaySound(68)
WaitEventAutoScriptRun(8, false, false)
GotoWithProbability(20, Null)
GotoWithProbability(75, Scr_0x0C0B)
ReplaceAndPauseWithNop(Event_00176_00016_Auto, 0)
[Scr_0x0C0B]
PlaySound(69)
WaitEventAutoScriptRun(6, false, false)
GotoWithProbability(20, Null)
GotoWithProbability(75, Scr_0x0C10)
ReplaceAndPauseWithNop(Event_00176_00016_Auto, 0)
[Scr_0x0C10]
PlaySound(70)
WaitEventAutoScriptRun(8, false, false)
GotoWithProbability(20, Null)
GotoWithProbability(75, Scr_0x0C06)
ReplaceAndPauseWithNop(Event_00176_00016_Auto, 0)
[Scr_0x0C15]
PlaySound(84)
WaitEventAutoScriptRun(8, false, false)
GotoWithProbability(40, Null)
GotoWithProbability(25, Scr_0x0C1A)
ReplaceAndPauseWithNop(Event_00176_00016_Auto, 0)
[Scr_0x0C1A]
PlaySound(83)
WaitEventAutoScriptRun(8, false, false)
ReplaceAndPauseWithNop(Event_00176_00016_Auto, 0)

[Event_00039_00003_Auto]
WaitEventAutoScriptRun(3, false, false)
PlaySound(79)
WaitEventAutoScriptRun(6, false, false)
GotoWithProbability(40, Event_00039_00003_Auto)
WaitEventAutoScriptRun(2, false, false)
PlaySound(67)
WaitEventAutoScriptRun(16, false, false)
ReplaceAndPauseWithNop(Event_00039_00003_Auto, 0)

[Event_00101_00007_Auto]
GotoWithProbability(8, Null)
PlaySound(80)
WaitEventAutoScriptRun(16, false, false)
GotoWithProbability(40, Event_00101_00007_Auto)
GotoWithProbability(5, Null)
PlaySound(74)
WaitEventAutoScriptRun(8, false, false)
ReplaceAndPauseWithNop(Event_00101_00007_Auto, 0)

[Event_00003_00032_Auto]
PlaySound(48)
WaitEventAutoScriptRun(10, false, false)
PlaySound(48)
WaitEventAutoScriptRun(4, false, false)
PlaySound(48)
WaitEventAutoScriptRun(12, false, false)
PlaySound(49)
WaitEventAutoScriptRun(10, false, false)
PlaySound(49)
WaitEventAutoScriptRun(4, false, false)
PlaySound(49)
WaitEventAutoScriptRun(40, false, false)
GotoWithNop(Event_00003_00032_Auto, 0)

[Event_00259_00044_Auto]
GotoWithProbability(33, Null)
GotoWithProbability(60, Scr_0x0C44)
GotoWithProbability(55, Scr_0x0C46)
GotoWithProbability(50, Scr_0x0C48)
GotoWithProbability(50, Scr_0x0C4A)
ReplaceAndPauseWithNop(Event_00259_00044_Auto, 0)
[Scr_0x0C44]
PlaySound(18)
ReplaceAndPauseWithNop(Event_00259_00044_Auto, 0)
[Scr_0x0C46]
PlaySound(17)
ReplaceAndPauseWithNop(Event_00259_00044_Auto, 0)
[Scr_0x0C48]
PlaySound(16)
ReplaceAndPauseWithNop(Event_00259_00044_Auto, 0)
[Scr_0x0C4A]
PlaySound(15)
ReplaceAndPauseWithNop(Event_00259_00044_Auto, 0)

[Scene_00004_Enter]
MusicPlay(49, true, 0.00)
ReplaceAndPause()

[Scene_00193_Enter]
SetPalette(5)
HeroSetSprite(0, 232, false)
PartySetRole(1)
PartySetPos(35, 45, 1)
VideoFadeAndUpdate(2)
WaitEventAutoScriptRun(9, false, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//$03你！．．啊～野蛮丫头！~50
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//$06亏你还认得我呀～呆瓜小贼！~70
FadeOut(3)
SceneEnter(194)

[Event_00193_00014_Auto]
NPCSetFrame(2)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(3)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(2)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(3)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(2)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(3)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(2)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(3)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(2)
WaitEventAutoScriptRun(3, false, false)
NPCSetFrame(3)
WaitEventAutoScriptRun(5, false, false)
NPCSetFrame(4)

[Event_00193_00015_Auto]
NPCMoveToBlock(35, 44, 0, 2, true)

[Scene_00194_Enter]
PartySetPos(45, 28, 0)
VideoUpdate(0, true)
EventSetDirFrame(194, 1, 1, 0)
WaitEventAutoScriptRun(3, false, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//$05瞧！我这身衣裳好不好看？~50
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//$08喔～好．．好看~70
VideoUpdate(0, false)
EventSetDirFrame(194, 1, 0, 0)
VideoUpdate(0, false)
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//$04就这样子而已吗．．？！
//人家可是好不容易才穿一次呢~50
VideoUpdate(0, false)
SetDlgUpper(1-8-1, 0x00000000, false)
//李逍遥：
//$06林姑娘，我能否私下问你一
//个问题，请你老实回答我~60
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(194, 1, 1, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//$03　　说啊！？~70
VideoUpdate(0, false)
SetDlgUpper(1-7-1, 0x00000000, false)
//李逍遥：
//$07你．．当真想要嫁给我？~80
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//$04不是我嫁给你，是你入赘到
//我们林家~70
SceneEnter(195)
FadeOut(3)

[Event_00195_00002_Auto]
NPCMoveToBlock(34, 42, 1, 3, false)

[Event_00195_00001_Auto]
NPCMoveToBlock(34, 43, 1, 2, true)
NPCSetDirFrame(3, 0)
NPCSetFrame(12)
WaitEventAutoScriptRun(3, false, false)
EventSetAutoScript(196, 0, Event_00020_00024_Auto)
WaitEventAutoScriptRun(12, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(3, false, false)
NPCMoveToBlock(34, 43, 0, 2, true)
NPCMoveToBlock(33, 43, 1, 2, true)
NPCSetDirFrame(1, 0)

[Scene_00195_Enter]
SetTimeFilter(2)
PartySetPos(33, 43, 0)
VideoFadeAndUpdate(4)
EventSetState(195, 2, true, false)
ToggleDayNight(true)
WaitEventAutoScriptRun(6, false, false)
SetDlgUpper(0, 0x00000000, false)
//丫鬟：
//$04小姐！奴婢四处都找过了
//都没看见赵姑娘~50
VideoUpdate(0, false)
EventSetDirFrame(195, 1, 2, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//林月如：
//$03叫所有的人都去找，城里找不到
//就到城外去找，翻遍全苏州也要
//把人找回来！~70
SceneEnter(196)

[Event_00196_00003_Auto]
NPCMoveToBlock(27, 63, 1, 2, true)

[Scene_00196_Enter]
PartySetPos(28, 64, 0)
FadeToScene(-1, 4)
SetDlgUpper(0, 0x00000000, false)
//李逍遥：
//$04要不要我送你回家？~50
WaitEventAutoScriptRun(7, false, false)
EventSetDirFrame(196, 1, 0, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(0, 0x00000000, false)
//林月如：
//$03少假惺惺～　看剑！~50
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(196, 1, 0, 1)
VideoUpdate(0, false)
EventSetState(196, 3, false, false)
EventSetState(197, 0, true, false)
WaitEventAutoScriptRun(3, false, false)
EventSetDirFrame(196, 1, 0, 2)
WaitEventAutoScriptRun(3, false, false)
EventSetState(196, 2, false, false)
EventSetDirFrame(197, 0, 0, 2)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(197, 0, 0, 3)
WaitEventAutoScriptRun(10, false, false)
SceneEnter(197)

[Scene_00197_Enter]
PartySetPos(16, 30, 0)
FadeToScene(-1, 4)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(198, 0, 0, 2)
WaitEventAutoScriptRun(10, false, false)
SetDlgUpper(3-4-1, 0x00000000, false)
//林月如：
//$07唉．．．．~70
VideoRestore()
//李大哥．．在你心中
//我到底是什麽呢？~60
SceneEnter(198)

[Scene_00198_Enter]
PartySetPos(12, 109, 0)
FadeToScene(-1, 4)
SetDlgUpper(1-9-1, 0x00000000, false)
//李逍遥：
//$04我只是一个不学无术的浪子
//你跟着我，不怕到时候两人
//一起去当要饭的？~55
EventSetDirFrame(198, 2, 2, 0)
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//如果真是这样
//就怪我自己倒霉啦！~55
VideoUpdate(0, false)
SetDlgUpper(1-3-1, 0x00000000, false)
//李逍遥：
//好吧～等我找到灵儿的下落~50
VideoRestore()
//把一切事情都结束後
//我带你四处游山玩水，一同
//吃遍天下珍味，看遍人间美景~55
EventSetDirFrame(198, 2, 2, 0)
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//$03嘻．．吃到老！　玩到老！~60
WaitEventAutoScriptRun(0, false, false)
EventWalkOneStep(198, 2, 4, -2)
WaitEventAutoScriptRun(2, false, false)
EventWalkOneStep(198, 2, 4, -2)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(198, 2, 2, 0)
EventWalkOneStep(198, 1, -4, 2)
WaitEventAutoScriptRun(2, false, false)
EventWalkOneStep(198, 1, -4, 2)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(198, 1, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//李逍遥：
//$08那．．我们．．．．~70
EventSetState(199, 0, true, true)
WaitEventAutoScriptRun(18, false, false)
SetDlgUpper(0, 0x00000000, false)
//彩　依：
//$02啊．．！！~35
EventWalkOneStep(198, 1, 8, -4)
WaitEventAutoScriptRun(0, false, false)
EventWalkOneStep(198, 2, -8, 4)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(198, 1, 2, 0)
EventSetDirFrame(198, 2, 3, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(198, 2, 0, 0)
WaitEventAutoScriptRun(10, false, false)
FadeOut(2)
SceneEnter(199)

[Event_00198_00003_Auto]
NPCMoveToBlock(13, 104, 0, 8, false)
NPCMoveToBlock(14, 105, 1, 3, false)
NPCMoveToBlock(13, 106, 1, 3, false)

[Scene_00199_Enter]
PartySetPos(52, 26, 1)
VideoUpdate(0, true)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//$04从今以後你我就是好姐妹啦！~60
VideoRestore()
//我们三人要永远在一起
//永远不分开！~80$02
MusicStop()
FadeOut(4)
SetPalette(0)
SceneEnter(174)

[Event_00213_00001_Auto]
JumpIfEventNotInZone(213, 2, 0, Event_00213_00001_Auto)
EventSetState(213, 2, false, false)
EventSetState(-1, -1, true, false)
EventSetTriggerMode(-1, -1, true, 0)
EventSetTriggerScript(-1, -1, Scr_0x0D3B)

[Scr_0x0D3B]
PartySetPosToFirstRole()
RideNPCToPos(15, 97, 1, 4)
PartyWalkToBlock(16, 98, 0, 4)
ReplaceAndPause()
PartySetPosToFirstRole()
RideNPCToPos(8, 90, 1, 4)
PartyWalkToBlock(9, 90, 0, 4)
ReplaceAndPauseWithNop(Scr_0x0D3B, 0)

[Event_00213_00008_Trigger]
PartySetPosToFirstRole()
RideNPCToPos(19, 94, 1, 4)
PartyWalkToBlock(20, 94, 0, 4)
ReplaceAndPause()
PartySetPosToFirstRole()
RideNPCToPos(16, 97, 1, 4)
PartyWalkToBlock(16, 98, 0, 4)
ReplaceAndPauseWithNop(Event_00213_00008_Trigger, 0)

[Event_00213_00009_Trigger]
PartySetPosToFirstRole()
RideNPCToPos(18, 100, 1, 4)
PartyWalkToBlock(19, 101, 0, 4)
ReplaceAndPause()
PartySetPosToFirstRole()
RideNPCToPos(16, 98, 1, 4)
PartyWalkToBlock(16, 98, 0, 4)
ReplaceAndPauseWithNop(Event_00213_00009_Trigger, 0)

[Event_00213_00010_Trigger]
PartySetPosToFirstRole()
RideNPCToPos(17, 91, 1, 4)
PartyWalkToBlock(17, 91, 0, 4)
ReplaceAndPause()
PartySetPosToFirstRole()
RideNPCToPos(19, 93, 1, 4)
PartyWalkToBlock(20, 94, 0, 4)
ReplaceAndPauseWithNop(Event_00213_00010_Trigger, 0)

[Event_00213_00011_Trigger]
PartySetPosToFirstRole()
RideNPCToPos(23, 86, 1, 4)
PartyWalkToBlock(24, 87, 0, 4)
ReplaceAndPause()
PartySetPosToFirstRole()
RideNPCToPos(22, 85, 1, 4)
PartyWalkToBlock(22, 86, 0, 4)
ReplaceAndPauseWithNop(Event_00213_00011_Trigger, 0)

[Event_00213_00012_Trigger]
PartySetPosToFirstRole()
RideNPCToPos(24, 102, 1, 4)
PartyWalkToBlock(25, 103, 0, 4)
ReplaceAndPause()
PartySetPosToFirstRole()
RideNPCToPos(21, 99, 0, 4)
PartyWalkToBlock(20, 98, 1, 4)
ReplaceAndPauseWithNop(Event_00213_00012_Trigger, 0)

[Event_00213_00013_Trigger]
PartySetPosToFirstRole()
RideNPCToPos(29, 99, 0, 4)
PartyWalkToBlock(29, 98, 1, 4)
ReplaceAndPause()
PartySetPosToFirstRole()
RideNPCToPos(25, 102, 1, 4)
PartyWalkToBlock(25, 103, 0, 4)
ReplaceAndPauseWithNop(Event_00213_00013_Trigger, 0)

[Event_00213_00014_Trigger]
PartySetPosToFirstRole()
RideNPCToPos(26, 93, 1, 4)
PartyWalkToBlock(26, 93, 0, 4)
ReplaceAndPause()
PartySetPosToFirstRole()
RideNPCToPos(30, 97, 0, 4)
PartyWalkToBlock(30, 97, 1, 4)
ReplaceAndPauseWithNop(Event_00213_00014_Trigger, 0)

[Event_00213_00015_Trigger]
PartySetPosToFirstRole()
RideNPCToPos(34, 93, 1, 4)
PartyWalkToBlock(35, 93, 0, 4)
ReplaceAndPause()
PartySetPosToFirstRole()
RideNPCToPos(31, 97, 0, 4)
PartyWalkToBlock(30, 97, 1, 4)
ReplaceAndPauseWithNop(Event_00213_00015_Trigger, 0)

[Event_00213_00016_Trigger]
PartySetPosToFirstRole()
RideNPCToPos(42, 87, 1, 4)
PartyWalkToBlock(43, 87, 0, 4)
ReplaceAndPause()
PartySetPosToFirstRole()
RideNPCToPos(38, 92, 0, 4)
PartyWalkToBlock(37, 92, 1, 4)
ReplaceAndPauseWithNop(Event_00213_00016_Trigger, 0)

[Event_00213_00017_Trigger]
PartySetPosToFirstRole()
RideNPCToPos(24, 92, 0, 4)
PartyWalkToBlock(24, 91, 1, 4)
ReplaceAndPause()
PartySetPosToFirstRole()
RideNPCToPos(21, 94, 1, 4)
PartyWalkToBlock(21, 95, 0, 4)
ReplaceAndPauseWithNop(Event_00213_00017_Trigger, 0)

[Event_00213_00018_Trigger]
PartySetPosToFirstRole()
RideNPCToPos(28, 87, 1, 4)
PartyWalkToBlock(29, 87, 0, 4)
ReplaceAndPause()
PartySetPosToFirstRole()
RideNPCToPos(26, 90, 0, 4)
PartyWalkToBlock(25, 90, 1, 4)
ReplaceAndPauseWithNop(Event_00213_00018_Trigger, 0)

[Event_00213_00019_Trigger]
PartySetPosToFirstRole()
RideNPCToPos(27, 87, 1, 4)
RideNPCToPos(28, 88, 1, 4)
RideNPCToPos(29, 87, 1, 4)
PartyWalkToBlock(29, 87, 0, 4)
EventSetState(213, 5, true, true)
EventSetState(213, 3, false, false)
ReplaceAndPause()
PartySetPosToFirstRole()
EventSetState(213, 3, true, true)
EventSetState(213, 4, false, false)
RideNPCToPos(28, 88, 1, 4)
RideNPCToPos(27, 87, 0, 4)
RideNPCToPos(28, 85, 1, 4)
RideNPCToPos(29, 86, 1, 4)
PartyWalkToBlock(29, 87, 0, 4)
ReplaceAndPause()
[Scr_0x0DB8]
PartySetPosToFirstRole()
RideNPCToPos(36, 79, 1, 4)
PartyWalkToBlock(37, 79, 0, 4)
ReplaceAndPause()
PartySetPosToFirstRole()
RideNPCToPos(29, 86, 1, 4)
PartyWalkToBlock(29, 87, 0, 4)
ReplaceAndPauseWithNop(Scr_0x0DB8, 0)

[Event_00213_00020_Trigger]
PartySetPosToFirstRole()
RideNPCToPos(33, 75, 1, 4)
PartyWalkToBlock(33, 75, 0, 4)
ReplaceAndPause()
PartySetPosToFirstRole()
RideNPCToPos(36, 78, 1, 4)
PartyWalkToBlock(37, 79, 0, 4)
ReplaceAndPauseWithNop(Event_00213_00020_Trigger, 0)

[Event_00213_00021_Trigger]
PartySetPosToFirstRole()
RideNPCToPos(33, 79, 0, 4)
PartyWalkToBlock(33, 79, 1, 4)
ReplaceAndPause()
PartySetPosToFirstRole()
RideNPCToPos(31, 77, 1, 4)
PartyWalkToBlock(31, 77, 0, 4)
ReplaceAndPauseWithNop(Event_00213_00021_Trigger, 0)

[Event_00213_00022_Trigger]
PartySetPosToFirstRole()
RideNPCToPos(31, 82, 0, 4)
PartyWalkToBlock(30, 82, 1, 4)
ReplaceAndPause()
PartySetPosToFirstRole()
RideNPCToPos(33, 80, 0, 4)
PartyWalkToBlock(33, 79, 1, 4)
ReplaceAndPauseWithNop(Event_00213_00022_Trigger, 0)

[Event_00213_00023_Trigger]
PartySetPosToFirstRole()
RideNPCToPos(27, 81, 1, 4)
PartyWalkToBlock(27, 81, 0, 4)
ReplaceAndPause()
PartySetPosToFirstRole()
RideNPCToPos(29, 83, 0, 4)
PartyWalkToBlock(29, 83, 1, 4)
ReplaceAndPauseWithNop(Event_00213_00023_Trigger, 0)

[Event_00213_00024_Trigger]
PartySetPosToFirstRole()
RideNPCToPos(23, 97, 1, 4)
PartyWalkToBlock(24, 98, 0, 4)
ReplaceAndPause()
PartySetPosToFirstRole()
RideNPCToPos(21, 95, 1, 4)
PartyWalkToBlock(21, 95, 0, 4)
ReplaceAndPauseWithNop(Event_00213_00024_Trigger, 0)

[Event_00213_00025_Trigger]
PartySetPosToFirstRole()
RideNPCToPos(30, 92, 0, 4)
PartyWalkToBlock(30, 91, 1, 4)
ReplaceAndPause()
PartySetPosToFirstRole()
RideNPCToPos(24, 97, 1, 4)
PartyWalkToBlock(24, 98, 0, 4)
ReplaceAndPauseWithNop(Event_00213_00025_Trigger, 0)

[Event_00213_00026_Trigger]
PartySetPosToFirstRole()
RideNPCToPos(36, 87, 0, 4)
PartyWalkToBlock(36, 86, 1, 4)
ReplaceAndPause()
PartySetPosToFirstRole()
RideNPCToPos(32, 90, 1, 4)
PartyWalkToBlock(32, 90, 0, 4)
ReplaceAndPauseWithNop(Event_00213_00026_Trigger, 0)

[Event_00213_00027_Trigger]
PartySetPosToFirstRole()
RideNPCToPos(29, 79, 1, 4)
PartyWalkToBlock(29, 79, 0, 4)
ReplaceAndPause()
PartySetPosToFirstRole()
RideNPCToPos(36, 86, 0, 4)
PartyWalkToBlock(36, 86, 1, 4)
ReplaceAndPauseWithNop(Event_00213_00027_Trigger, 0)

[Event_00213_00028_Trigger]
PartySetPosToFirstRole()
RideNPCToPos(40, 83, 1, 4)
PartyWalkToBlock(41, 83, 0, 4)
ReplaceAndPause()
PartySetPosToFirstRole()
RideNPCToPos(37, 86, 1, 4)
PartyWalkToBlock(37, 87, 0, 4)
ReplaceAndPauseWithNop(Event_00213_00028_Trigger, 0)

[Event_00213_00029_Trigger]
PartySetPosToFirstRole()
EventSetState(213, 6, false, false)
RideNPCToPos(39, 83, 0, 4)
RideNPCToPos(41, 85, 0, 4)
RideNPCToPos(43, 83, 0, 4)
RideNPCToPos(42, 82, 0, 4)
PartyWalkToBlock(41, 82, 1, 4)
EventSetState(213, 7, true, true)
ReplaceAndPause()
[Scr_0x0E1B]
PartySetPosToFirstRole()
RideNPCToPos(34, 74, 0, 4)
PartyWalkToBlock(34, 73, 1, 4)
ReplaceAndPause()
PartySetPosToFirstRole()
RideNPCToPos(42, 82, 0, 4)
PartyWalkToBlock(41, 82, 1, 4)
ReplaceAndPauseWithNop(Scr_0x0E1B, 0)

[Event_00213_00030_Trigger]
RoleAddMagic(5, 21)
EventSetState(-1, -1, false, false)
PlaySound(263)
SetDlgBox(0x00000000)
//获得召唤术风神

[Event_00213_00031_Trigger]
RoleAddMagic(1, 26)
EventSetState(-1, -1, false, false)
PlaySound(263)
SetDlgBox(0x00000000)
//获得召唤术雷神

[Event_00213_00032_Trigger]
RoleAddMagic(5, 31)
EventSetState(-1, -1, false, false)
PlaySound(263)
SetDlgBox(0x00000000)
//获得召唤术雪妖

[Event_00213_00033_Trigger]
EventSetState(-1, -1, false, false)
PlaySound(263)
SetDlgBox(0x00000000)
//获得召唤术火神
JumpIfHeroInParty(37, 3645)
RoleAddMagic(5, 95)

[Scr_0x0E3D]
RoleAddMagic(2, 95)

[Event_00213_00034_Trigger]
RoleAddMagic(1, 42)
EventSetState(-1, -1, false, false)
PlaySound(263)
SetDlgBox(0x00000000)
//获得召唤术山神

[Scene_00259_Enter]
SetBattlefield(7)
SetBattleMusic(41)
MusicPlay(21, true, 0.00)

[Event_00265_00015_Trigger]
NPCSetDirFrame(2, 0)
VideoUpdate(0, false)
SetDlgUpper(13-1-1, 0x00000000, false)
//白苗族长：
//难道．．老天无眼
//真的要让我族灭亡吗？
VideoRestore()
//女娲娘娘啊．．您若有灵
//请您保佑这些无辜的族人吧

[Scr_0x0E53]
SetDlgUpper(13-1-1, 0x00000000, false)
//白苗族长：
//你．．简直是巫后再世
//莫非你娘附灵在你身上！？
VideoUpdate(0, false)
SetDlgLower(49-1-1, 0x00000000, false)
//赵灵儿：
//一切都交给我吧
//我会化解这场战争的
ReplaceAndPause()
SetDlgUpper(0, 0x00000000, false)
//白苗族长：
//可是～你要怎麽做呢？

[Event_00265_00016_Trigger]
//侍卫：
//誓死与神殿共存亡！

[Event_00265_00017_Trigger]
//侍卫：
//誓死与神殿共存亡！

[Event_00265_00019_Trigger]
//唐钰：
//阿奴小姐，您平安没事
//实在太好了！

[Event_00265_00020_Trigger]
//汉人：
//你们苗族人自相残杀就算了
//为什麽连汉人也不放过呢？

[Event_00265_00021_Trigger]
//汉族妇女：
//黑苗人一进城，见人就杀
//仿佛死神降临一样。
//我好不容易才得以逃命
//可是我家相公却．．

[Event_00265_00022_Trigger]
//小孩：
//哇．．我爹我娘都被黑苗兵
//杀死了啊！

[Event_00265_00023_Trigger]
//苗女：
//怎麽办，万一黑苗兵杀进来
//我们就无处可逃了

[Event_00265_00024_Trigger]
//小孩：
//呜．．我好怕，我不要死啊

[Event_00263_00003_Trigger]
//士兵：
//死守神殿！

[Event_00263_00024_Trigger]
//盖罗娇：
//少主！你们赶紧到神殿内避难
//黑苗人已经攻进城了。不过您
//放心，属下一定会死守这里
//绝不让敌人踏入神殿半步！

[Event_00259_00014_Trigger]
BattleStart(316, Scr_0x9C9B, Null)
EventSetStateSequence(259, 14, 259, 15, false, false)
EventSetStateSequence(259, 32, 259, 33, true, true)

[Event_00259_00018_Trigger]
BattleStart(318, Scr_0x9C9B, Null)
EventSetStateSequence(259, 18, 259, 19, false, false)
EventSetStateSequence(259, 34, 259, 35, true, true)

[Event_00259_00020_Trigger]
BattleStart(319, Scr_0x9C9B, Null)
EventSetStateSequence(259, 20, 259, 21, false, false)
EventSetStateSequence(259, 36, 259, 37, true, true)

[Event_00259_00026_Trigger]
BattleStart(319, Scr_0x9C9B, Null)
EventSetStateSequence(259, 26, 259, 27, false, false)
EventSetStateSequence(259, 38, 259, 39, true, true)

[Event_00259_00028_Trigger]
BattleStart(318, Scr_0x9C9B, Null)
EventSetStateSequence(259, 28, 259, 29, false, false)
EventSetStateSequence(259, 40, 259, 41, true, true)

[Event_00259_00012_Trigger]
BattleStart(239, Scr_0x9C9B, Null)
EventSetStateSequence(259, 12, 259, 13, false, false)
EventSetStateSequence(259, 30, 259, 31, true, true)

[Event_00260_00016_Trigger]
BattleStart(235, Scr_0x9C9B, Null)
EventSetStateSequence(260, 16, 260, 17, false, false)
EventSetStateSequence(260, 34, 260, 35, true, true)

[Event_00260_00018_Trigger]
BattleStart(318, Scr_0x9C9B, Null)
EventSetStateSequence(260, 18, 260, 19, false, false)
EventSetStateSequence(260, 36, 260, 37, true, true)

[Event_00260_00020_Trigger]
BattleStart(319, Scr_0x9C9B, Null)
EventSetStateSequence(260, 20, 260, 21, false, false)
EventSetStateSequence(260, 38, 260, 39, true, true)

[Event_00260_00022_Trigger]
BattleStart(319, Scr_0x9C9B, Null)
EventSetStateSequence(260, 22, 260, 23, false, false)
EventSetStateSequence(260, 40, 260, 41, true, true)

[Event_00260_00024_Trigger]
BattleStart(238, Scr_0x9C9B, Null)
EventSetStateSequence(260, 24, 260, 25, false, false)
EventSetStateSequence(260, 42, 260, 43, true, true)

[Event_00260_00026_Trigger]
BattleStart(239, Scr_0x9C9B, Null)
EventSetStateSequence(260, 26, 260, 27, false, false)
EventSetStateSequence(260, 44, 260, 45, true, true)

[Event_00260_00028_Trigger]
BattleStart(318, Scr_0x9C9B, Null)
EventSetStateSequence(260, 28, 260, 29, false, false)
EventSetStateSequence(260, 46, 260, 47, true, true)

[Event_00260_00030_Trigger]
BattleStart(243, Scr_0x9C9B, Null)
EventSetStateSequence(260, 30, 260, 31, false, false)
EventSetStateSequence(260, 48, 260, 49, true, true)

[Event_00260_00032_Trigger]
BattleStart(238, Scr_0x9C9B, Null)
EventSetStateSequence(260, 32, 260, 33, false, false)
EventSetStateSequence(260, 50, 260, 51, true, true)

[Event_00259_00003_Trigger]
SetDlgCenter(0, 0x00000000, false)
//一具阵亡士兵的屍体

[Event_00259_00030_Trigger]
//白苗士兵：
//黑苗兵不知从哪突然冒出来的
//大理城内外到处一片混乱
//各部队之间都失去连络了

[Event_00259_00038_Trigger]
//白苗士兵：
//黑苗族利用魔兽兵袭击
//盖将军护卫着族长及老弱平民
//彻退到神殿内

[Event_00259_00032_Trigger]
//白苗士兵

[Scene_00291_Enter]
PartySetPos(7, 104, 1)
Replace()
[Scene_00293_Enter]
SetBattlefield(58)
MusicPlay(26, true, 0.00)

[Event_00291_00001_Trigger]
SceneEnter(292)
PartySetPos(6, 112, 1)
FadeOut(0)

[Event_00292_00001_Trigger]
SceneEnter(291)
PartySetPos(57, 34, 0)
FadeOut(0)

[Event_00292_00002_Trigger]
SceneEnter(293)
PartySetPos(7, 108, 1)
FadeOut(0)

[Event_00293_00001_Trigger]
SceneEnter(292)
PartySetPos(56, 35, 1)
FadeOut(0)

[Event_00277_00002_Trigger]
PartyWalkToBlock(27, 96, 0, 8)
RoleSetDirFrame(0, 3, 0)
[Scr_0x0EEB]
RoleMoveOneStep(8, 8, 0)
WaitEventAutoScriptRun(0, false, false)
GotoWithNop(Scr_0x0EEB, 3)
SceneEnter(285)
PartySetPos(10, 43, 1)
FadeOut(0)

[Event_00285_00001_Trigger]
RoleSetDirFrame(0, 1, 0)
[Scr_0x0EF3]
RoleMoveOneStep(-8, -8, 0)
WaitEventAutoScriptRun(0, false, false)
GotoWithNop(Scr_0x0EF3, 4)
SceneEnter(277)
PartySetPos(26, 95, 1)
FadeOut(0)

[Event_00285_00004_Trigger]
SceneEnter(286)
PartySetPos(50, 99, 0)
FadeOut(0)

[Event_00286_00001_Trigger]
SceneEnter(285)
PartySetPos(27, 32, 0)
FadeOut(0)

[Event_00285_00005_Trigger]
SceneEnter(286)
PartySetPos(41, 108, 0)
FadeOut(0)

[Event_00286_00002_Trigger]
SceneEnter(285)
PartySetPos(21, 38, 0)
FadeOut(0)

[Event_00285_00006_Trigger]
SceneEnter(286)
PartySetPos(21, 43, 1)
FadeOut(0)

[Event_00286_00003_Trigger]
SceneEnter(285)
PartySetPos(36, 31, 1)
FadeOut(0)

[Event_00285_00007_Trigger]
SceneEnter(286)
PartySetPos(29, 51, 0)
FadeOut(0)

[Event_00285_00008_Trigger]
SceneEnter(286)
PartySetPos(36, 65, 1)
FadeOut(0)

[Event_00286_00004_Trigger]
SceneEnter(285)
PartySetPos(50, 45, 1)
FadeOut(0)

[Event_00287_00001_Trigger]
SceneEnter(285)
PartySetPos(31, 44, 1)
FadeOut(0)

[Event_00287_00002_Trigger]
SceneEnter(288)
PartySetPos(54, 104, 1)
FadeOut(0)

[Event_00288_00001_Trigger]
SceneEnter(287)
PartySetPos(28, 59, 1)
FadeOut(0)

[Event_00287_00003_Trigger]
SceneEnter(289)
PartySetPos(30, 117, 1)
FadeOut(0)

[Event_00289_00001_Trigger]
SceneEnter(287)
PartySetPos(35, 59, 1)
FadeOut(0)

[Event_00288_00002_Trigger]
SceneEnter(279)
PartySetPos(53, 98, 0)
FadeOut(0)

[Event_00279_00001_Trigger]
SceneEnter(288)
PartySetPos(10, 24, 1)
FadeOut(0)

[Event_00279_00002_Trigger]
SceneEnter(290)
PartySetPos(19, 53, 1)
FadeOut(0)

[Event_00290_00001_Trigger]
SceneEnter(279)
PartySetPos(22, 40, 1)
FadeOut(0)

[Event_00279_00003_Trigger]
SceneEnter(290)
PartySetPos(35, 69, 0)
FadeOut(0)

[Event_00290_00002_Trigger]
SceneEnter(279)
PartySetPos(30, 48, 0)
FadeOut(0)

[Event_00280_00001_Trigger]
SceneEnter(281)
PartySetPos(20, 100, 0)
FadeOut(0)

[Event_00281_00001_Trigger]
SceneEnter(280)
PartySetPos(40, 49, 0)
FadeOut(0)

[Event_00281_00002_Trigger]
SceneEnter(282)
PartySetPos(36, 106, 1)
FadeOut(0)

[Event_00282_00001_Trigger]
SceneEnter(281)
PartySetPos(16, 78, 0)
FadeOut(0)

[Event_00281_00003_Trigger]
SceneEnter(283)
PartySetPos(9, 54, 1)
FadeOut(0)

[Event_00283_00001_Trigger]
SceneEnter(281)
PartySetPos(40, 105, 0)
FadeOut(0)

[Event_00281_00004_Trigger]
SceneEnter(278)
PartySetPos(22, 106, 0)
FadeOut(0)

[Event_00278_00001_Trigger]
SceneEnter(281)
PartySetPos(52, 91, 0)
FadeOut(0)

[Event_00281_00005_Trigger]
SceneEnter(278)
PartySetPos(9, 91, 0)
FadeOut(0)

[Event_00278_00002_Trigger]
SceneEnter(281)
PartySetPos(28, 67, 1)
FadeOut(0)

[Event_00281_00006_Trigger]
SceneEnter(277)
PartySetPos(22, 103, 1)
FadeOut(0)

[Event_00277_00001_Trigger]
SceneEnter(281)
PartySetPos(40, 79, 1)
FadeOut(0)

[Event_00278_00003_Trigger]
SceneEnter(284)
PartySetPos(16, 50, 1)
FadeOut(0)

[Event_00284_00001_Trigger]
SceneEnter(278)
PartySetPos(55, 89, 1)
FadeOut(0)

[Event_00293_00002_Trigger]
SceneEnter(279)
PartySetPos(44, 44, 0)
FadeOut(0)

[Event_00279_00004_Trigger]
SceneEnter(293)
PartySetPos(11, 16, 0)
FadeOut(0)

[Scene_00279_Enter]
MusicPlay(32, true, 0.00)
SetBattlefield(16)

[Event_00278_00006_Trigger]
EventSetState(-1, -1, false, false)
MusicStop()
PartyWalkToBlock(44, 69, 0, 8)
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgUpper(49-1-1, 0x00000000, false)
//赵灵儿：
//爹．．
MusicPlay(76, true, 0.00)
VideoUpdate(0, false)
SetDlgLower(36-1-1, 0x00000000, false)
//巫王：
//青．．青妹．．是你回来
//回来．．向我索命吗！
VideoUpdate(0, false)
SetDlgUpper(49-1-1, 0x00000000, false)
//赵灵儿：
//爹～　我是灵儿
//是您的女儿啊！
EventSetState(278, 4, false, false)
EventSetState(278, 5, true, false)
WaitEventAutoScriptRun(12, false, false)
SetDlgLower(36-1-1, 0x00000000, false)
//巫王：
//真的是你．．吗？　灵儿．．
VideoRestore()
//没．．没错．．你就和当年
//的阿青一模一样！
VideoRestore()
//快．．快过来．．
//让父王．．看看你．．
HeroSetSprite(0, 232, false)
PartySetRole(1)
RoleSetDirFrame(0, 0, 0)
EventSetStateSequence(278, 10, 278, 12, true, false)
EventSetState(285, 2, false, false)
WaitEventAutoScriptRun(12, false, false)
SetDlgLower(36-1-1, 0x00000000, false)
//巫王：
//女儿．．是爹无能，是爹逼死
//你母后的，但是．．爹也遭到
//了报应．．
VideoRestore()
//王宫中所有人．．都弃父王
//而去了，爹自知．．爹没有
//多少日子可活了
VideoRestore()
//我只希望．．在我死前．．
//能够得到你的原谅．．
//女儿．．你能．．原谅爹吗？
VideoUpdate(0, false)
SetDlgUpper(49-1-1, 0x00000000, false)
//赵灵儿：
//无论您以前做了什麽
//您还是我的父亲．．
VideoUpdate(0, false)
SetDlgLower(36-1-1, 0x00000000, false)
//巫王：
//太．．太好了．．
//灵儿～今後．．你要接下爹
//的王位，替爹挽救这麽国家
EventSetState(278, 7, true, false)
EventSetState(278, 8, true, false)
EventSetState(278, 9, true, false)
WaitEventAutoScriptRun(24, false, false)
MusicPlay(34, true, 0.00)
SetDlgLower(43-2-1, 0x00000000, false)
//拜月教主：
//大王～　我反对！
//怎可让一位妖女当我们的领袖
VideoUpdate(0, false)
EventSetDirFrame(278, 11, 0, 0)
VideoUpdate(0, false)
EventSetDirFrame(278, 10, 0, 0)
VideoUpdate(0, false)
EventSetDirFrame(278, 12, 0, 0)
SetDlgUpper(4-4-1, 0x00000000, false)
//阿奴：
//你这老贼！害死我好多族人
//灵儿姐姐登基後第一件事，
//就是将你斩首示众！
VideoUpdate(0, false)
SetDlgUpper(49-1-1, 0x00000000, false)
//赵灵儿：
//我无心於王位、也不想报仇
//念在你是元老重臣，只要你
//发誓不再使用邪魔兽，我可
//以饶你一命
VideoUpdate(0, false)
SetDlgLower(43-2-1, 0x00000000, false)
//拜月教主：
//哈哈哈～天大的笑话！
//你们这些小娃儿能耐我何？
VideoRestore()
//殿前武士～将他们拿下！
PartySetRole(125)
SetBattleMusic(39)
SetBattlefield(57)
BattleStart(289, Scr_0x9C9B, Null)
MusicPlay(0, true, 0.00)
BattleEnd()
EventSetStateSequence(278, 8, 278, 9, false, false)
PartySetPos(44, 71, 0)
HeroSetSprite(0, 630, false)
PartySetRole(1)
RoleSetDirFrame(0, 0, 0)
EventSetStateSequence(278, 10, 278, 12, false, false)
EventSetState(278, 5, false, false)
VideoUpdate(0, false)
SetDlgUpper(43-2-1, 0x00000000, false)
//拜月教主：
//哼．．．可恶的小鬼！
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//老妖怪～轮到你了！
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 1)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 2)
PlaySound(2)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 3)
VideoUpdate(0, false)
PlaySound(20)
SetDlgCenter(0, 0x00000000, false)
//$00啊～　！！~50
HeroSetSprite(0, 631, true)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 0, 1)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 0, 2)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 0, 3)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 0, 4)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 0, 5)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 0, 6)
WaitEventAutoScriptRun(0, false, false)
MusicPlay(26, true, 0.00)
SetDlgUpper(4-2-1, 0x00000000, false)
//阿奴：
//灵儿姐姐！！~50
HeroSetSprite(0, 632, true)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 0, 1)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 0, 2)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 0, 3)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 0, 4)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 0, 5)
WaitEventAutoScriptRun(3, false, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//$02灵儿！！
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 6)
PlaySound(212)
FadeToScene(-1, 3)
SetDlgLower(43-2-1, 0x00000000, false)
//拜月教主：
//哈哈哈．．无知的小鬼！
//真正的巫王早就被我杀了
//就让假的陪你们玩玩吧！
EventSetState(278, 7, false, false)
PlaySound(217)
FadeToScene(-1, 2)
PartySetRole(15)
SetBattleMusic(38)
BattleStart(222, Scr_0x9C9B, Null)
BattleEnd()
MusicPlay(34, true, 0.00)
EventSetState(279, 0, true, true)
EventSetState(0, 0, false, false)
EventSetState(281, 7, true, false)
EventSetState(281, 9, true, false)
PartySetPos(44, 71, 1)
HeroSetSprite(0, 193, false)
PartySetRole(1)
RoleSetDirFrame(0, 0, 7)
VideoUpdate(0, false)
SetDlgLower(1-4-1, 0x00000000, false)
//李逍遥：
//灵儿！　振作点！
VideoUpdate(0, false)
SetDlgUpper(4-5-1, 0x00000000, false)
//阿奴：
//呜～我．．我已经施了赎魂咒
//但是．．但是．．灵儿姐姐
//还是没有心跳啊！
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(3, false, false)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//可恶！！　我替灵儿报仇！

[Scene_00277_Enter]
PartySetPos(26, 95, 1)
Replace()
SetBattlefield(55)

[Event_00278_00005_Auto]
WaitEventAutoScriptRun(3, false, false)
NPCMoveToBlock(46, 66, 0, 2, true)

[Event_00278_00007_Auto]
NPCMoveToBlock(41, 72, 0, 4, true)

[Event_00278_00008_Auto]
WaitEventAutoScriptRun(3, false, false)
NPCMoveToBlock(40, 71, 0, 4, true)

[Event_00278_00009_Auto]
WaitEventAutoScriptRun(3, false, false)
NPCMoveToBlock(42, 73, 0, 4, true)

[Event_00278_00012_Auto]
EventWalkOneStep(-1, -1, 8, -8)
ReplaceAndPause()
ReplaceAndPauseWithNop(Event_00278_00012_Auto, 4)

[Event_00281_00010_Auto]
NPCMoveToBlock(36, 84, 1, 8, false)

[Event_00285_00002_Trigger]
PartyWalkToBlock(32, 43, 1, 4)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(0, false, false)
HeroSetSprite(0, 232, false)
PartySetRole(1)
RoleSetDirFrame(0, 0, 0)
EventSetDirFrame(285, 3, 0, 1)
WaitEventAutoScriptRun(2, false, false)
PlaySound(155)
EventSetAutoScript(285, 3, Event_00021_00011_Auto)
WaitEventAutoScriptRun(16, false, false)
FadeOut(0)
EventSetDirFrame(285, 3, 0, 0)
EventSetAutoScript(285, 3, Null)
HeroSetSprite(0, 2, false)
PartySetRole(215)
RoleSetDirFrame(0, 2, 0)
SceneEnter(287)
PartySetPos(15, 91, 1)

[Event_00278_00013_Trigger]
SetDlgCenter(0, 0x00000000, false)
//阿奴施法急救赵灵儿

[Event_00281_00009_Trigger]
EventSetState(-1, -1, false, false)
PartyWalkToBlock(35, 84, 1, 8)
PartyWalkToBlock(34, 85, 1, 8)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//我要替灵儿报仇！
EventSetState(281, 10, true, false)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(281, 7, 3, 0)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(281, 7, 2, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgUpper(43-2-1, 0x00000000, false)
//拜月教主：
//哈哈哈．．我的魔神兽
//再也不必惧怕任何人了
VideoRestore()
//十年了！老夫已经隐忍十年了
//要不是顾忌巫后还留个孽种在
//人世，我也不必等到现在
VideoRestore()
//现在．．没有了那臭ㄚ头
//我的魔神兽就是真正的不死
//之身，这天下再也没有任何
//力量可以阻碍我的！
VideoUpdate(0, false)
SetDlgLower(4-4-1, 0x00000000, false)
//阿奴：
//果然～这一切都是你在搞鬼！
//十年前苗疆发生的那次大洪水
//一直到这几年来的可怕的乾旱
VideoRestore()
//都是你们黑苗族破坏女娲大神
//封印，召唤太古魔兽，破坏大
//地灵气的平衡而造成的灾难。
//然後嫁祸给巫后娘娘！
VideoUpdate(0, false)
SetDlgUpper(43-2-1, 0x00000000, false)
//拜月教主：
//那些只不过是我小小的实验罢
//了，这证明我只要掌握魔神兽
//就可以操控所有天地间的力量
//我要风就风、要雨就雨。
//任何部族不听从我，我就让他
//们万劫不复！你们白苗族就是
//最好的榜样！
VideoUpdate(0, false)
SetDlgLower(4-5-1, 0x00000000, false)
//阿奴：
//你疯了．．．！
VideoUpdate(0, false)
SetDlgUpper(43-2-1, 0x00000000, false)
//拜月教主：
//谁说本座疯了！？
VideoRestore()
//这王国我的，全苗疆所有部族
//都要对本座伏首称臣！
VideoRestore()
//我第一步就要先灭掉白苗族
//然後进兵中原，让我伟大的
//黑苗族君临天下！再也没有
//人再可以轻视我黑苗族！
VideoRestore()
//你们这两个小毛头哪里知道
//老夫花了毕生的心血，为了
//就是这伟大的计划！
EventSetDirFrame(281, 7, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(43-2-1, 0x00000000, false)
//拜月教主：
//现在我只要再献上一男一女的
//鲜血，而且～最好是灵力越强
//的人．．我这心爱的水魔神兽
//就能够再次的复活了！
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//做你的春秋大梦！
EventSetDirFrame(281, 7, 2, 0)
VideoUpdate(0, false)
SetDlgUpper(43-2-1, 0x00000000, false)
//拜月教主：
//呵呵．．你们两人就做为
//迎接这伟大日子的祭品吧！
VideoUpdate(0, false)
PlaySound(212)
EventSetState(281, 11, true, false)
FadeToScene(-1, 2)
SetDlgUpper(1-2-1, 0x00000000, false)
//李逍遥：
//灵儿．．！
VideoUpdate(0, false)
SetDlgLower(49-1-1, 0x00000000, false)
//赵灵儿：
//逍遥哥哥、阿奴．．
//请你们务必帮我阻止他！
VideoUpdate(0, false)
SetDlgUpper(43-2-1, 0x00000000, false)
//拜月教主：
//你．．？　你没死！？
VideoUpdate(0, false)
SetDlgLower(49-1-1, 0x00000000, false)
//赵灵儿：
//在没有粉碎你的疯狂的野心
//之前，我是不会到阴间和我
//爹娘见面的！
PartySetRole(125)
SetBattleMusic(18)
SetBattlefield(55)
BattleStart(313, Scr_0x9C9B, Null)
BattleEnd()
MusicPlay(34, true, 0.00)
SetRNG(9)
PlayRNG(0, 1, 8)
SetDlgLower(1-9-1, 0x00000000, true)
//李逍遥：
//你已经无路可逃了
//伏首认罪吧！
VideoUpdate(0, false)
PlayRNG(1, 16, 8)
SetDlgLower(43-2-1, 0x00000000, true)
//哼．．休得羞辱老夫！
VideoUpdate(0, false)
PlayRNG(17, 54, 8)
SetDlgUpper(1-1-1, 0x00000000, true)
//李逍遥：
//这老家伙居然自己了断
VideoUpdate(0, false)
PlayRNG(55, 59, 8)
SetDlgUpper(4-6-1, 0x00000000, true)
//阿奴：
//太好了～这坏蛋再也不能
//耍什麽阴谋了！
VideoUpdate(0, false)
SetDlgLower(49-1-1, 0x00000000, true)
//赵灵儿：
//嗯．．．从今以後
//终於恢复和平的日子
VideoUpdate(0, false)
PlayRNG(60, 74, 8)
SetDlgUpper(1-1-1, 0x00000000, true)
//李逍遥：
//这次可真多亏了阿奴
SetDlgLower(4-3-1, 0x00000000, false)
//阿奴：
//嘻．．那当然
VideoUpdate(0, false)
MusicStop()
VideoShake(90, 1)
PlayRNG(75, 109, 8)
SetDlgUpper(1-1-1, 0x00000000, true)
//李逍遥：
//咦．．怎麽回事？
SetDlgLower(49-1-1, 0x00000000, false)
//赵灵儿：
//糟了！　快走！
VideoUpdate(0, false)
MusicPlay(26, true, 3.00)
PlayRNG(110, 150, 7)
PlayRNG(151, -1, 9)
FadeOut(2)
MusicPlay(25, true, 0.00)
SetPalette(5)
ScrollFBP(68, 0)
FadeOut(0)
SetPalette(4)
ShowEndingAnimation()
MusicStop()
FadeColor(7, 15, false)
Delay(5)
PlayCDOrMusic(2, 17)
SetRNG(11)
PlayRNG(0, 1, 16)
SetPalette(0)
PlayRNG(2, -1, 7)
FadeOut(3)
SetPalette(8)
SetRNG(10)
PlayRNG(0, -1, 6)
FadeFBP(71, 10)
ScreenBackup()
ShowFBPWithSprite(70, 635)
SetPalette(5)
ShowFBPWithSprite(67, 65535)
ScrollFBP(66, 65535)
ShowFBPWithSprite(65, 65535)
ShowFBPWithSprite(49, 65535)
FadeFBP(49, 6)
WaitForAnyKey()
MusicStop()
MusicPlay(9, true, 0.00)
ScrollFBP(48, 0)
ScrollFBP(47, 0)
ScrollFBP(46, 0)
ScrollFBP(45, 0)
ScrollFBP(44, 0)
ScrollFBP(43, 0)
ScrollFBP(42, 0)
ScrollFBP(41, 0)
ScrollFBP(40, 0)
Delay(30)
MusicStop()
FadeOut(4)
QuitGame()

[Scene_00006_Enter]
SetBattlefield(8)
SetBattleMusic(37)

[Event_00005_00025_Trigger]
SceneEnter(12)
PartySetPos(21, 37, 1)
FadeOut(0)

[Event_00012_00001_Trigger]
SceneEnter(5)
PartySetPos(20, 78, 0)
FadeOut(0)

[Event_00005_00022_Trigger]
SceneEnter(13)
PartySetPos(21, 55, 0)
FadeOut(0)

[Event_00013_00001_Trigger]
SceneEnter(5)
PartySetPos(12, 84, 0)
FadeOut(0)

[Event_00001_00011_Auto]
NPCMoveToBlock(36, 24, 0, 3, false)
EventSetState(1, 4, true, false)
EventSetState(-1, -1, false, false)

[Event_00004_00019_Trigger]
PartySetPos(33, 104, 0)
SceneEnter(3)
FadeOut(0)

[Event_00003_00006_Trigger]
PartySetPos(38, 47, 1)
SceneEnter(2)
FadeOut(0)

[Event_00002_00001_Trigger]
PartySetPos(40, 91, 1)
SceneEnter(3)
FadeOut(0)

[Event_00003_00007_Trigger]
PartySetPos(37, 22, 1)
SceneEnter(1)
FadeOut(0)

[Event_00001_00004_Trigger]
PartySetPos(49, 94, 0)
SceneEnter(3)
FadeOut(0)

[Event_00001_00010_Trigger]
PartySetPos(42, 17, 1)
RoleSetDirFrame(0, 2, 0)
EventWalkOneStep(1, 9, 4, 2)
VideoUpdate(0, false)
EventWalkOneStep(1, 9, 4, 2)
VideoUpdate(0, false)
EventWalkOneStep(1, 9, 4, 2)
VideoUpdate(0, false)
EventWalkOneStep(1, 9, 4, 2)
VideoUpdate(0, false)
//嘿嘿．．
VideoUpdate(0, false)
SetDlgUpper(21-1-1, 0x00000000, false)
//李大娘：
//逍遥！窝在房里做啥？
//还不快出来帮忙招呼客人
VideoUpdate(0, false)
EventWalkOneStep(1, 9, -4, -2)
VideoUpdate(0, false)
EventWalkOneStep(1, 9, -4, -2)
VideoUpdate(0, false)
EventWalkOneStep(1, 9, -4, -2)
VideoUpdate(0, false)
EventWalkOneStep(1, 9, -4, -2)
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//啊！　．．我马上就去

[Scr_0x119E]
EventWalkOneStep(1, 9, 4, 2)
VideoUpdate(0, false)
EventWalkOneStep(1, 9, 4, 2)
VideoUpdate(0, false)
EventWalkOneStep(1, 9, 4, 2)
VideoUpdate(0, false)
EventWalkOneStep(1, 9, 4, 2)
VideoUpdate(0, false)
EventSetTriggerMode(-1, -1, true, 0)
ReplaceAndPause()
EventSetTriggerMode(-1, -1, false, 2)
EventSetPos(1, 9, 1376, 288)
FadeOut(0)
PartySetPos(20, 36, 1)
HeroSetSprite(0, 193, true)
RoleSetDirFrame(0, 0, 1)
PlaySound(45)
VideoUpdate(0, false)
RoleMoveOneStep(0, 5, 0)
RoleSetDirFrame(0, 0, 1)
VideoUpdate(0, false)
RoleMoveOneStep(0, 7, 0)
RoleSetDirFrame(0, 0, 1)
VideoUpdate(0, false)
RoleMoveOneStep(0, 9, 0)
RoleSetDirFrame(0, 0, 1)
VideoUpdate(0, false)
RoleMoveOneStep(0, 11, 0)
RoleSetDirFrame(0, 0, 1)
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 2)
VideoUpdate(0, false)
PlaySound(93)
WaitEventAutoScriptRun(5, false, false)
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
ReplaceAndPauseWithNop(Scr_0x119E, 0)

[Event_00001_00008_Trigger]
HeroSetSprite(0, 193, true)
RoleSetDirFrame(0, 0, 3)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 0, 4)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 5)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 6)
WaitEventAutoScriptRun(2, false, false)
RoleMoveOneStep(0, -16, 0)
RoleSetDirFrame(0, 0, 4)
WaitEventAutoScriptRun(3, false, false)
RoleSetDirFrame(0, 0, 5)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 6)
WaitEventAutoScriptRun(2, false, false)
RoleMoveOneStep(0, -16, 0)
RoleSetDirFrame(0, 0, 4)
WaitEventAutoScriptRun(3, false, false)
RoleSetDirFrame(0, 0, 5)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 6)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(0, -16, 0)
RoleSetDirFrame(0, 0, 4)
WaitEventAutoScriptRun(3, false, false)
RoleSetDirFrame(0, 0, 5)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 6)
WaitEventAutoScriptRun(2, false, false)
RoleMoveOneStep(0, -16, 0)
RoleSetDirFrame(0, 0, 4)
VideoUpdate(0, false)
FadeOut(0)
RoleSetDirFrame(0, 0, 2)
PartySetPos(42, 18, 0)
EventSetPos(1, 9, 1392, 296)
EventSetTriggerMode(1, 10, false, 2)
EventSetTriggerScript(1, 10, Scr_0x119E)
VideoUpdate(0, false)
EventWalkOneStep(1, 9, -4, -2)
VideoUpdate(0, false)
EventWalkOneStep(1, 9, -4, -2)
VideoUpdate(0, false)
EventWalkOneStep(1, 9, -4, -2)
VideoUpdate(0, false)
EventWalkOneStep(1, 9, -4, -2)
VideoUpdate(0, false)
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)

[Scr_0x11F9]
SetDlgCenter(0, 0x00000000, false)
//"双手端着物品无法爬下去"

[Scr_0x11FC]
SetDlgCenter(0, 0x00000000, false)
//"双手端着物品无法爬上去"

[Scr_0x11FF]
EventWalkOneStep(1, 9, 4, 2)
VideoUpdate(0, false)
GotoWithNop(Scr_0x11FF, 4)
SetDlgLower(2-1-1, 0x00000000, false)
//赵灵儿：
//哦．．这通道是．．？
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//哈～那些苗人怎麽也不会料到
//我在这里做了一个密道，结果
//就刚好救了你呢．．
[Scr_0x120B]
EventWalkOneStep(1, 9, -4, -2)
VideoUpdate(0, false)
GotoWithNop(Scr_0x120B, 4)

[Scr_0x120F]
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//灵儿．．你要不要爬爬看？
SetDlgUpper(2-7-1, 0x00000000, false)
//赵灵儿：
//你好坏～叫女孩子爬这种东西
//很难看呢！人家才不要．．

[Event_00003_00008_Trigger]
PartySetPos(39, 69, 0)
SceneEnter(1)
FadeOut(0)

[Event_00001_00013_Trigger]
PartySetPos(44, 89, 0)
SceneEnter(3)
FadeOut(0)

[Event_00003_00009_Trigger]
PartySetPos(14, 23, 1)
SceneEnter(1)
FadeOut(0)

[Event_00001_00018_Trigger]
PartySetPos(39, 84, 0)
SceneEnter(3)
FadeOut(0)

[Event_00003_00010_Trigger]
PartySetPos(20, 79, 1)
SceneEnter(1)
FadeOut(0)

[Event_00001_00019_Trigger]
PartySetPos(32, 93, 0)
SceneEnter(3)
FadeOut(0)

[Event_00004_00022_Trigger]
PartySetPos(20, 31, 1)
SceneEnter(8)
FadeOut(0)

[Event_00003_00002_Trigger]
PartySetPos(17, 49, 0)
SceneEnter(1)
FadeOut(0)

[Event_00008_00001_Trigger]
PartySetPos(46, 104, 1)
SceneEnter(4)
FadeOut(0)

[Event_00001_00001_Trigger]
PartySetPos(45, 96, 0)
SceneEnter(3)
FadeOut(0)

[Scr_0x123F]
EventSyncState(4, 27, false, false)
ReplaceAndPauseWithNop(Event_00004_00026_Auto, 0)

[Scr_0x1242]
EventSyncState(4, 26, true, false)
ReplaceAndPauseWithNop(Event_00004_00027_Auto, 0)

[Event_00004_00026_Auto]
EventSyncState(4, 27, false, false)
ReplaceAndPauseWithNop(Event_00004_00026_Auto, 0)

[Event_00004_00027_Auto]
EventSyncState(4, 26, false, false)
ReplaceAndPauseWithNop(Event_00004_00027_Auto, 0)

[Event_00004_00028_Auto]
EventSyncState(4, 29, false, false)
ReplaceAndPauseWithNop(Event_00004_00028_Auto, 0)

[Event_00004_00029_Auto]
EventSyncState(4, 28, false, false)
ReplaceAndPauseWithNop(Event_00004_00029_Auto, 0)

[Event_00005_00020_Auto]
EventSyncState(5, 21, false, false)
ReplaceAndPauseWithNop(Event_00005_00020_Auto, 0)

[Event_00005_00021_Auto]
EventSyncState(5, 20, false, false)
ReplaceAndPauseWithNop(Event_00005_00021_Auto, 0)

[Event_00005_00023_Auto]
EventSyncState(5, 24, false, false)
ReplaceAndPauseWithNop(Event_00005_00023_Auto, 0)

[Event_00005_00024_Auto]
EventSyncState(5, 23, false, false)
ReplaceAndPauseWithNop(Event_00005_00024_Auto, 0)

[Event_00003_00013_Trigger]
EventSetTriggerMode(-1, -1, false, 3)
SetDlgUpper(21-1-1, 0x00000000, false)
//李大娘：
//搞什麽～慢吞吞的！
EventSetDirFrame(-1, -1, 2, 0)
VideoUpdate(0, false)
Delay(4)
EventSetState(3, 12, false, false)
VideoUpdate(0, false)
EventSetState(3, 11, false, false)
VideoUpdate(0, false)
Delay(4)
EventSetDirFrame(-1, -1, 1, 0)
VideoUpdate(0, false)
//李大娘：
//各位客倌．．里边儿请．．
VideoUpdate(0, false)
EventSetDirFrame(-1, -1, 3, 0)
VideoUpdate(0, false)
//李大娘：
//逍遥！帮我招呼客倌们歇歇腿
//我到厨房准备酒菜．．
EventSetAutoScript(3, 13, Scr_0x12B5)
WaitEventAutoScriptRun(10, false, false)
EventSetAutoScript(3, 16, Scr_0x12D6)
EventSetAutoScript(3, 17, Scr_0x12DB)
EventSetAutoScript(3, 18, Scr_0x12E4)
WaitEventAutoScriptRun(15, false, false)
SetDlgUpper(25-1-1, 0x00000000, false)
//苗人头领：
//小二！这间客栈我们包下了，
//除了老板和伙计，其他不相干
//的人全都给我请出去
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//小店今天没别的客人，各位客
//倌．．啊～不！请问各位大爷
//们还有啥吩咐的？
VideoUpdate(0, false)
SetDlgUpper(25-1-1, 0x00000000, false)
//苗人头领：
//以後没有我们的吩咐，不许闲
//杂人等上楼来，知道了吗？
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//是．．这容易，小的一定照办
VideoUpdate(0, false)
SetDlgUpper(25-1-1, 0x00000000, false)
//苗人头领：
//很好！这些银子你拿去，往後
//这几天只要你乖乖听我们的话
//办事，赏银不会少你的。
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//是～谢大爷的赏．．
//小店一定让您宾至如归！
EventSetTriggerScript(1, 10, Scr_0x119E)
CashModify(500, Null)
VideoUpdate(0, false)
SetDlgBox(0x00000000)
//得到５００文钱
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(0, false, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//哇哈！真是遇到财神爷了
ReplaceAndPause()
//别怠慢了客人

[Scr_0x12A3]
EventSetTriggerMode(-1, -1, false, 2)
VideoUpdate(0, false)
SetDlgUpper(21-1-1, 0x00000000, false)
//李大娘：
//逍遥你来的正好，快把门口
//那个臭要饭的赶走，免得妨
//碍咱们做生意
EventSetAutoScript(3, 13, Scr_0x12C2)
EventSetTriggerScript(3, 19, Scr_0x139C)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(2, false, false)
ReplaceAndPause()
//记得喔！
//等一下到厨房来帮忙端菜

[Scr_0x12B5]
EventSetTriggerMode(-1, -1, false, 0)
NPCMoveToBlock(38, 83, 0, 3, false)
NPCMoveToBlock(36, 85, 0, 3, false)
NPCMoveToBlock(36, 85, 1, 3, false)
[Scr_0x12B9]
EventWalkOneStep(-1, -1, 5, 5)
EventWalkOneStep(-1, -1, 3, 3)
ReplaceAndPauseWithNop(Scr_0x12B9, 12)
EventSetTriggerMode(-1, -1, false, 2)
NPCMoveToBlock(42, 94, 1, 3, false)
NPCMoveToBlock(35, 101, 1, 3, false)
EventSetTriggerMode(-1, -1, true, 2)
EventSetTriggerScript(-1, -1, Scr_0x12A3)

[Scr_0x12C2]
NPCMoveToBlock(31, 97, 1, 3, false)
NPCMoveToBlock(34, 95, 0, 3, false)
NPCMoveToBlock(31, 92, 1, 3, false)
EventSetState(1, 20, true, true)
EventSetState(-1, -1, false, false)

[Event_00003_00016_Trigger]
SetDlgUpper(25-1-1, 0x00000000, false)
//苗人头领：
//没事了．．去忙你的吧

[Event_00003_00017_Trigger]
//苗人喽罗：
//没事．．你可以走了

[Event_00003_00018_Trigger]
EventSetTriggerMode(-1, -1, false, 3)
//苗人喽罗：
//喂！店小二，大爷们饿了
//快点把酒菜送上来
ReplaceAndPause()
//去忙你的吧．．

[Scr_0x12D6]
NPCMoveToBlock(39, 85, 0, 2, true)
NPCMoveToBlock(41, 83, 0, 2, true)
EventSetState(1, 25, true, true)
EventSetState(-1, -1, false, false)

[Scr_0x12DB]
WaitEventAutoScriptRun(2, false, false)
NPCMoveToBlock(37, 82, 0, 2, true)
NPCMoveToBlock(44, 89, 1, 2, true)
NPCSetDirFrame(2, 0)
Call(Event_00003_00030_Trigger, 0, 0)
NPCMoveToBlock(45, 88, 1, 2, true)
EventSetState(1, 26, true, true)
EventSetState(-1, -1, false, false)

[Scr_0x12E4]
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(37, 82, 1, 2, true)
NPCMoveToBlock(44, 89, 0, 2, true)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(45, 88, 0, 2, true)
EventSetState(1, 27, true, true)
EventSetState(-1, -1, false, false)

[Event_00001_00025_Trigger]
//苗人头领：
//呵～累了，想早点休息

[Event_00001_00026_Trigger]
//苗人喽罗：
//哎～好饿！
//怎麽还不送吃的过来

[Event_00001_00027_Trigger]
//苗人喽罗：
//这房间看起来满舒服的
//今天总算可以好好睡一觉

[Scr_0x12F9]
SetDlgUpper(25-1-1, 0x00000000, false)
//苗人头领：
//送酒菜来啊？我还不饿，你先
//拿到隔璧给我的手下们吃
ReplaceAndPause()
SetDlgUpper(0, 0x00000000, false)
//苗人头领：
//本大爷说不饿
//没听到是不是？端走！
ReplaceAndPause()
[Scr_0x1303]
SetDlgUpper(0, 0x00000000, false)
//苗人头领：
//你去忙吧．．
//有事我再叫你

[Scr_0x1308]
//苗人喽罗：
//嗯．．这烧鸡味道不错
ReplaceAndPause()
//小菜也很可口．．
ReplaceAndPause()
//好饱！好饱！

[Scr_0x130F]
//苗人喽罗：
//从苗疆一路赶到这儿来
//总算可以好好吃个一顿
ReplaceAndPause()
//吃饱喝足了，明天好干大事！

[Event_00001_00016_Trigger]
EventSetState(-1, -1, false, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//两位大爷！酒菜送来了
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//拿进来！
PartyWalkToBlock(41, 67, 0, 2)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 0, 12)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(1, 27, 3, 0)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 13)
EventSetState(1, 17, true, false)
VideoUpdate(0, false)
EventWalkOneStep(1, 27, 8, 4)
VideoUpdate(0, false)
EventWalkOneStep(1, 27, 8, 4)
VideoUpdate(0, false)
EventWalkOneStep(1, 27, 8, 4)
VideoUpdate(0, false)
EventWalkOneStep(1, 27, 8, 4)
VideoUpdate(0, false)
EventWalkOneStep(1, 27, 8, 4)
VideoUpdate(0, false)
EventWalkOneStep(1, 27, 8, 4)
VideoUpdate(0, false)
EventSetDirFrame(1, 27, 0, 0)
VideoUpdate(0, false)
Delay(5)
SetDlgUpper(0, 0x00000000, false)
//苗人喽罗：
//嗯～这是什麽酒呀？
//一点味道也没有！
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//哦！大爷您有所不知，此酒乃
//本地的名产～桂花酒，清香甘
//醇无比，连当朝的贵妃娘娘都
//爱喝的不得了呢！
SetDlgUpper(0, 0x00000000, false)
//苗人喽罗：
//拿走！拿走！我们喝惯烈酒
//才不要娘们喝的酒。
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//那麽．．小的再给您换一壶来
SetDlgUpper(0, 0x00000000, false)
//苗人喽罗：
//不必了！咱们自己有带酒。
EventSetDirFrame(1, 17, 0, 1)
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 14)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 0, 15)
WaitEventAutoScriptRun(2, false, false)
SetDlgCenter(0, 0x00000000, false)
//"李逍遥把桂花酒收在怀里"
AddItem(212, 0)
HeroSetSprite(0, 2, true)
EventSetTriggerScript(1, 25, Scr_0x1303)
EventSetTriggerScript(1, 26, Scr_0x1308)
EventSetTriggerScript(1, 27, Scr_0x130F)
EventSetTriggerScript(3, 19, Scr_0x13C5)
EventSetAutoScript(1, 27, Scr_0x135D)
EventSetTriggerScript(1, 10, Scr_0x119E)
EventSetTriggerScript(1, 8, Event_00001_00008_Trigger)

[Scr_0x135D]
EventAnimate(1, 2)
ReplaceAndPauseWithNop(Scr_0x135D, 8)

[Scr_0x1360]
//苗人喽罗：
//汉人的草药也不是什麽病都能
//医的。还是咱们苗人的巫术比
//较厉害，咱们苗疆有个拜月教
//听说他们有使死人复活的法术

[Scr_0x1366]
//苗人喽罗：
//听说老板娘病了是吗？
ReplaceAndPause()
//这下可不妙了．．方圆十里内
//也只有这间客栈，咱们的晚上
//去哪儿吃喝？

[Event_00001_00020_Trigger]
//李大娘：
//那乞丐打发走了没？

[Scr_0x1370]
//李大娘：
//逍遥！快把桌上的酒菜
//端上楼去！
EventSetTriggerScript(1, 21, Scr_0x1387)

[Scr_0x1375]
//李大娘：
//别愣在这里，帮帮忙吧
//我都快忙不过来了！

[Event_00002_00003_Trigger]
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//我．．自小失了爹娘，还不
//全靠婶婶一手把我拉拔长大
//婶婶也只有我这一个亲人
//我一定要想办法找人医好她
Replace()
//可是．．连洪大夫都说没救了
//我．．我该怎麽办？

[Event_00001_00021_Trigger]
SetDlgCenter(0, 0x00000000, false)
//"桌上摆着一份丰盛的酒菜
//嗯～看起来很好吃的样子"

[Scr_0x1387]
EventSetDirFrame(1, 20, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//李大娘：
//对了！就是那盘
//赶快端去给楼上的客倌
HeroSetSprite(0, 208, true)
EventSetState(1, 21, false, false)
EventSetTriggerScript(1, 20, Scr_0x1375)
EventSetTriggerScript(1, 25, Scr_0x12F9)
EventSetTriggerScript(3, 19, Scr_0x13BE)
EventSetState(1, 16, true, false)
EventSetTriggerScript(1, 10, Scr_0x11F9)
EventSetTriggerScript(1, 8, Scr_0x11FC)

[Event_00003_00020_Auto]
EventSyncState(3, 19, false, false)
ReplaceAndPauseWithNop(Event_00003_00020_Auto, 0)

[Event_00003_00019_Trigger]
SetDlgCenter(0, 0x00000000, false)
//"一名衣衫褴褛的醉汉躺在门口"

[Scr_0x139C]
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//去去去！
//我们也很穷，没钱分给你
VideoUpdate(0, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//醉道士：
//我不是要钱，我只想讨些酒喝
//小兄弟～拜托一下嘛．．
//给我一点酒吧
SetDlgLower(1-7-1, 0x00000000, false)
//李逍遥：
//不成！不成！给婶婶知道了
//我准挨骂，你赶快走吧！
VideoUpdate(0, false)
EventSetTriggerScript(1, 20, Scr_0x1370)
EventSetState(1, 21, true, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//醉道士：
//哎呀！没酒喝我一步也走不动
//你就行行好吧．．
ReplaceAndPause()
SetDlgUpper(7-1-1, 0x00000000, false)
//醉道士：
//拜托嘛～小兄弟．．
//我只要喝一小口酒就行了
ReplaceAndPause()
SetDlgUpper(7-1-1, 0x00000000, false)
//醉道士：
//酒．．求求你．．一口就好
SetDlgLower(1-8-1, 0x00000000, false)
//李逍遥：
//没见过这麽赖皮的酒鬼

[Scr_0x13BE]
SetDlgUpper(7-1-1, 0x00000000, false)
//醉道士：
//酒．．求求你．．给我酒．．
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//不行不行～这是给客人喝的

[Scr_0x13C5]
SetDlgUpper(7-1-1, 0x00000000, false)
//醉道士：
//酒．．求求．．你．．
//一口．．喝一口．．就好

[Scr_0x13CA]
VideoUpdate(0, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//醉道士：
//酒??求求．．你．．
//一口．．喝一口．．就好
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//看你可怜，就给你喝一口吧
//喂～只能喝一口喔！
VideoUpdate(0, false)
NPCSetFrame(2)
FadeToScene(-1, 0)
EventSetAutoScript(-1, -1, Null)
SetDlgUpper(7-1-1, 0x00000000, false)
//醉道士：
//啊．．．．好酒！
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//哎呀．．你怎麽喝光了！
VideoUpdate(0, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//醉道士：
//嗝～我一口就是那麽大口
//真是不好意思．．
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//你．．．你要赔我！
VideoUpdate(0, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//醉道士：
//呵呵．．要钱我可没有
//你不是很想学剑吗？
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//你怎麽知道？
VideoUpdate(0, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//醉道士：
//看在酒的份上
//贫道可以破例指点你几招
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//．．你．．你要教我剑法？？
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//老伯．．您别逗我了
//您还是快走吧，要是给我婶婶
//知道我拿酒给你喝，准骂人的
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//醉道士：
//哈哈哈！那就明晚三更
//十里坡"山神庙"。不见不散！
EventSetState(-1, -1, false, false)
FadeToScene(-1, 0)
SetDlgCenter(0, 0x00000000, false)
//"醉道士话说完一溜烟地
//就不见了．．"
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//咦～人呢？
RemoveItem(212, 1, Null)
EventSetState(1, 17, false, false)
EventSetTriggerScript(1, 20, Scr_0x1425)
VideoUpdate(0, false)
SetDlgUpper(21-1-1, 0x00000000, false)
//李大娘：
//逍遥～你过来一下！
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//　啊．．(
ReplaceAndPause()

[Event_00003_00019_Auto]
ReplaceAndPause()
NPCSetFrame(1)
ReplaceAndPause()
NPCSetFrame(0)
WaitEventAutoScriptRun(10, false, false)
ReplaceAndPauseWithNop(Event_00003_00019_Auto, 0)

[Scr_0x1425]
SetDlgUpper(0, 0x00000000, false)
//李大娘：
//你要是有空的话，就到菜市场
//帮我买几斤新鲜的虾回来，要
//是在市场买不到，就向打渔的
//船家们问看看
SetDlgBox(0x00000000)
//得到五十文钱
CashModify(50, Null)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥低声道：
//呼．．．还好
VideoUpdate(0, false)
SetDlgUpper(21-1-1, 0x00000000, false)
//李大娘：
//你在嘀咕什麽？
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//没事！我马上就去
VideoUpdate(0, false)
Replace()
SetDlgUpper(0, 0x00000000, false)
//李大娘：
//记得哦！要新鲜的才买
ReplaceAndPauseWithNop(Scr_0x1375, 0)

[Event_00004_00010_Trigger]
//旺财嫂：
//喂～　你知道吗？
//听说卖盐的老王，上个月生了
//一场怪病，所有大夫都说没得
//医了，结果你猜怎麽着？
SetDlgLower(0, 0x00000000, false)
//来福婶：
//怎麽了？
//老王还活着好好的啊！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//旺财嫂：
//那是他的儿子小虎跑到"仙灵岛"
//上，死求活求的，结果岛上的
//仙女给他一颗仙丹，老王吃了
//仙丹，病马上好了一大半．
SetDlgLower(0, 0x00000000, false)
//来福婶：
//真有这种新鲜事？　呵～
//看不出来，小虎子还真行哪．
ReplaceAndPause()
//旺财嫂：
//常言道．．好人有好命
//而且老王平日一向乐善好施
//应该说是老天有眼．．

[Event_00004_00011_Trigger]
//来福婶：
//嗨～小李子！你婶婶还在店
//里头忙啊？怎麽没见她来这
//洗衣服．．
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//是啊．．今天一大早就来了
//一伙人要住店
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//来福婶：
//李大娘真是劳碌命啊．．
ReplaceAndPause()
//来福婶：
//洗呀～　洗呀～

[Scr_0x146C]
//来福婶：
//我看呐～
//李大娘准是累出病来的！
ReplaceAndPause()
//来福婶：
//唉～　为谁辛苦为谁忙
//劳碌命喔．．

[Event_00004_00012_Trigger]
//阿珠：
//咕．．咕．．
//快快吃，快快长大喔．．

[Event_00004_00012_Auto]
NPCSetFrame(1)
GotoWithProbability(8, Event_00004_00012_Auto)
ReplaceAndPause()
NPCSetFrame(3)
ReplaceAndPause()
NPCSetFrame(0)
WaitEventAutoScriptRun(8, false, false)
NPCSetFrame(1)
ReplaceAndPause()
NPCSetFrame(2)
NPCSetFrame(3)
NPCSetFrame(4)
EventSetAutoScript(4, 13, Scr_0x1488)
WaitEventAutoScriptRun(6, false, false)
ReplaceAndPauseWithNop(Event_00004_00012_Auto, 0)

[Scr_0x1488]
NPCSetFrame(0)
[Scr_0x1489]
EventAnimate(-1, 0)
ReplaceAndPauseWithNop(Scr_0x1489, 7)

[Event_00004_00001_Trigger]
VideoUpdate(0, false)
EventSetTriggerMode(-1, -1, false, 3)
SetDlgUpper(48-1-1, 0x00000000, false)
//王小虎：
//逍遥哥哥！你今天再带我去
//树林里去找鸟窝，好不好吗
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//小虎子，大哥哥还有事要忙
//今天不能带你去罗．．
VideoUpdate(0, false)
SetDlgUpper(48-1-1, 0x00000000, false)
//王小虎：
//呜．．好可惜喔
//那明天．．
//明天你要带我去喔！
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//呵．．再说啦
ReplaceAndPause()
[Scr_0x14A0]
//王小虎：
//明天你一定要带我去玩
//不可以赖皮喔！
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//好啦，好啦，你去玩你的吧！
ReplaceAndPauseWithNop(Scr_0x14A0, 0)

[Event_00004_00001_Auto]
NPCMoveToBlock(41, 99, 0, 2, true)
NPCMoveToBlock(40, 98, 1, 2, true)
NPCMoveToBlock(44, 94, 1, 3, false)
NPCMoveToBlock(41, 91, 0, 3, false)
NPCMoveToBlock(43, 88, 1, 3, false)
NPCMoveToBlock(39, 84, 1, 3, false)
NPCMoveToBlock(37, 87, 0, 3, false)
NPCMoveToBlock(36, 86, 0, 3, false)
NPCMoveToBlock(25, 97, 0, 3, false)
NPCMoveToBlock(25, 97, 1, 3, false)
NPCMoveToBlock(27, 95, 1, 3, false)
NPCMoveToBlock(36, 104, 0, 3, false)
GotoWithNop(Event_00004_00001_Auto, 0)

[Scr_0x14B6]
NPCMoveToBlock(54, 86, 0, 3, false)

[Scr_0x14B8]
ReplaceAndPause()
NPCSetDirFrame(3, 0)
NPCMoveToBlock(48, 92, 0, 2, true)
NPCSetDirFrame(3, 0)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(30, false, false)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(56, 100, 1, 2, true)
NPCMoveToBlock(54, 103, 0, 2, true)
WaitEventAutoScriptRun(20, false, false)
NPCMoveToBlock(54, 103, 1, 3, false)
NPCMoveToBlock(48, 109, 1, 3, false)
ReplaceAndPauseWithNop(Event_00021_00016_Auto, 0)

[Scr_0x14C7]
EventSetPosRelToParty(4, 8, 65408, 56)
EventSetDirFrame(4, 8, 2, 0)
EventSetAutoScript(4, 8, Scr_0x14B6)
EventSetTriggerMode(4, 8, false, 3)
WaitEventAutoScriptRun(12, false, false)
SetDlgUpper(18-1-1, 0x00000000, false)
//香兰：
//不好了！不好了！
//李家哥哥．．李．．
//李大娘．．她．．
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//我婶婶怎麽了？
VideoUpdate(0, false)
MusicStop()
SetDlgUpper(18-1-1, 0x00000000, false)
//香兰：
//你出门没多久．．
//李大娘就突然昏倒了！
//洪大夫请你赶快回去一趟
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//婶婶怎麽会．．
//好．．我马上回去！
MusicPlay(87, true, 3.00)
EventSetAutoScript(4, 8, Scr_0x14B8)
EventSetTriggerScript(4, 8, Scr_0x14FB)
EventSetTriggerScript(4, 9, Scr_0x14F0)
EventSetTriggerScript(4, 11, Scr_0x146C)
EventSetState(4, 1, false, false)
EventSetState(2, 5, true, true)
EventSetState(10, 1, false, false)
EventSetState(2, 4, true, true)
EventSetState(2, 3, true, false)
EventSetState(1, 20, false, false)
EventSetState(1, 25, false, false)
EventSetTriggerScript(1, 26, Scr_0x1360)
EventSetTriggerScript(1, 27, Scr_0x1366)
ReplaceAndPause()

[Scr_0x14F0]
SetDlgUpper(5-1-1, 0x00000000, false)
//秀兰：
//听大姊说～李大娘病了
//是真的吗？
//有没有我可以帮得上忙的？
VideoRestore()
//唉呀．．怎麽会这样子呢
ReplaceAndPause()
//秀兰：
//李大娘的病严不严重啊？

[Scr_0x14FB]
SetDlgUpper(18-1-1, 0x00000000, false)
//香兰：
//李家哥哥！赶快回去吧
//李大娘的病似乎很严重呢

[Scr_0x1500]
SetDlgUpper(18-1-1, 0x00000000, false)
//香兰：
//怎麽了，李大娘好点了没？

[Event_00002_00005_Trigger]
EventSetState(3, 16, true, true)
EventSetPos(3, 16, 976, 1704)
EventSetTriggerScript(3, 16, Scr_0x156E)
EventSetAutoScript(3, 16, Scr_0x15CE)
EventSetTriggerMode(3, 16, true, 2)
EventSetTriggerScript(4, 8, Scr_0x1500)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//小虎子．．
//是你去请洪大夫过来的吗？
VideoUpdate(0, false)
SetDlgUpper(48-1-1, 0x00000000, false)
//王小虎：
//是的～逍遥哥哥！我到你家来
//就看到李大娘倒在厨房内，我
//就赶快跑去叫洪大夫来
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//谢谢你，小虎子！
VideoUpdate(0, false)
SetDlgUpper(48-1-1, 0x00000000, false)
//王小虎：
//你看～李大娘会不会有事呀？
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//小虎子，你当真曾在岛上向神
//仙求得灵药，治好你爹的病？
VideoUpdate(0, false)
SetDlgUpper(48-1-1, 0x00000000, false)
//王小虎：
//对呀．．逍遥哥哥！
//你也可以到"仙灵岛"求药
//仙女姐姐给的丹药真的很灵
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//　　　仙女？
SetDlgUpper(48-1-1, 0x00000000, false)
//王小虎：
//我没骗你，那个仙女姐姐长得
//好漂亮喔，心肠又好好喔．．
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//谢谢你告诉我这些．．
//我想上仙灵岛一趟，我婶婶能
//不能麻烦你照顾
VideoUpdate(0, false)
SetDlgUpper(48-1-1, 0x00000000, false)
//王小虎：
//好！没问题！
ReplaceAndPause()
SetDlgUpper(48-1-1, 0x00000000, false)
//王小虎：
//不过最近老天爷在生气
//风浪大得紧，出海很危险呢
ReplaceAndPause()
SetDlgUpper(48-1-1, 0x00000000, false)
//王小虎：
//希望李大娘平安无事，不然以
//後就吃不到她包的粽子了

[Event_00002_00004_Trigger]
EventSetTriggerMode(0, 0, false, 2)
//洪大夫：
//你跑哪去了？
//你婶婶病倒了你知不知道！
VideoUpdate(0, false)
SetDlgLower(1-4-1, 0x00000000, false)
//李逍遥：
//是．．
//我婶婶怎麽会突然病倒呢？
//我出门的时候，她还好好的啊
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//洪大夫：
//你婶婶的病已经拖很久了
//只是她一直瞒着你．．
SetDlgLower(1-4-1, 0x00000000, false)
//李逍遥：
//那．．严不严重？
//求求你，大夫～花多少钱都没
//关系，请你一定要医好她．．
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//洪大夫：
//唉～久病未医，加上操劳过度
//恐怕．．没指望了。
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//啊！不会的，求求你！
//大夫你一定要救我婶婶！
SetDlgUpper(0, 0x00000000, false)
//洪大夫：
//我开副药试试，但也只能略尽
//人事了，你等会到我的药舖来
//抓药吧．．
EventSetState(10, 1, true, true)
EventSetTriggerScript(10, 1, Scr_0x1922)
EventSetState(-1, -1, false, false)
FadeOut(0)
RoleSetDirFrame(0, 0, 0)
EventSetDirFrame(2, 5, 0, 0)
WaitEventAutoScriptRun(3, false, false)
EventSetDirFrame(2, 5, 1, 0)

[Scr_0x156E]
EventSetPos(5, 9, 1152, 1376)
EventSetTriggerScript(5, 9, Scr_0x16F9)
EventSetDirFrame(5, 9, 3, 0)
EventSetTriggerScript(5, 10, Scr_0x1755)
AddItem(219, 0)
EventSetTriggerScript(1, 25, Scr_0x15CB)
EventSetAutoScript(3, 16, Scr_0x15D0)
EventSetTriggerMode(3, 16, false, 2)
SetDlgUpper(25-1-1, 0x00000000, false)
//苗人头领：
//呵呵～你们汉人的书上有句话
//　"树欲静而风不止"
//　　"子欲养而亲不待"．．
//可真是至理名言哪～
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//我．．我绝不会让我婶婶死掉
//就算拼了命也要想办法医好她
VideoUpdate(0, false)
SetDlgUpper(25-1-1, 0x00000000, false)
//苗人头领：
//哈哈！难得你有这份孝心
//大慈大悲的菩萨一定也会
//被你感动的．．
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//菩萨．．？
VideoUpdate(0, false)
SetDlgUpper(25-1-1, 0x00000000, false)
//苗人头领：
//你不是想上仙灵岛求仙药吗？
//但．．没有仙缘的人，是无
//法通过岛上的仙法禁制的
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//是！是！恳请大爷指点
VideoUpdate(0, false)
SetDlgUpper(25-1-1, 0x00000000, false)
//苗人头领：
//仙灵岛中央有座"水月宫"，此处
//有一班精於炼制丹药的仙姑居
//於宫内，但是宫外有仙法所设
//下的迷阵，凡人若无邪法妖术
//并不会被其中的机关所伤，但
//是若无法破去阵眼，任你花上
//一辈子也找不到水月宫所在
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//那我该如何是好？
SetDlgUpper(25-1-1, 0x00000000, false)
//苗人头领：
//阵中有六具阿修罗神像，你用
//这"破天鎚"将这些石像逐一敲
//碎，在迷阵的中央便会出现一
//块"发亮的石板"
//届时你只要往石板上一踏
//通路自会浮现
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//你??怎麽知道的？
VideoUpdate(0, false)
SetDlgUpper(25-1-1, 0x00000000, false)
//苗人头领：
//我是看你一片孝心，才泄漏
//这天机，你切勿自失良机
VideoUpdate(0, false)
SetDlgUpper(25-1-1, 0x00000000, false)
//苗人头领：
//对了．．　我这里有一颗丹丸
//服下它，可以保你不受仙灵岛
//上的瘴气所侵．．
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//　　瘴气？
VideoUpdate(0, false)
SetDlgUpper(25-1-1, 0x00000000, false)
//苗人头领：
//照我的话做就对了
//难道你不想救你婶婶吗？
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//好！　我相信你
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//"李逍遥收下破天鎚，并服下"
//"苗人给的丹丸（忘忧散）"
ReplaceAndPause()
[Scr_0x15CB]
//苗人头领：
//加油吧．．我等你的好消息

[Scr_0x15CE]
NPCMoveToBlock(32, 104, 1, 2, true)

[Scr_0x15D0]
NPCMoveToBlock(42, 94, 1, 2, true)
NPCMoveToBlock(39, 91, 0, 2, true)
[Scr_0x15D2]
EventWalkOneStep(-1, -1, -5, -5)
ReplaceAndPause()
EventWalkOneStep(-1, -1, -3, -3)
ReplaceAndPauseWithNop(Scr_0x15D2, 12)
NPCMoveToBlock(37, 83, 1, 2, true)
GotoWithNop(Scr_0x12D6, 0)

[Event_00004_00007_Trigger]
EventSetDirFrame(4, 7, 0, 4)
VideoUpdate(0, false)
EventSetAutoScript(4, 7, Scr_0x0251)
//丁大伯：
//年青人应该勤快些，可别学人
//好吃懒做！
ReplaceAndPause()
EventSetDirFrame(4, 7, 0, 4)
VideoUpdate(0, false)
EventSetAutoScript(4, 7, Scr_0x0251)
//丁大伯：
//李大娘也真辛苦，守这麽多年
//寡，自己一个人经营这间客栈
//还把你一手带大，你啊～应该
//好好孝顺她！
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//是～丁伯伯，我知道啦．
ReplaceAndPause()
EventSetDirFrame(4, 7, 0, 4)
VideoUpdate(0, false)
EventSetAutoScript(4, 7, Scr_0x0251)
//丁大伯：
//不是我爱说你，你也这麽大了
//还整天不正经似的，该找份工
//作，老老实实的做人才对

[Scr_0x15F4]
EventSetDirFrame(4, 7, 0, 4)
VideoUpdate(0, false)
EventSetAutoScript(4, 7, Scr_0x0251)
//丁大伯：
//你别老是来勾引我那两个丫头
//我可是只有这两个女儿！
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//我没有哇！
//丁伯伯．．你可别老来糊涂了
//是你那两个宝贝女儿常常来巴
//结我和我婶婶．
ReplaceAndPause()
EventSetDirFrame(4, 7, 0, 4)
VideoUpdate(0, false)
EventSetAutoScript(4, 7, Scr_0x0251)
//丁大伯：
//唉～我也懒得说你们了．．

[Event_00004_00008_Trigger]
VideoUpdate(0, false)
EventSetTriggerMode(-1, -1, false, 3)
SetDlgUpper(18-1-1, 0x00000000, false)
//香兰：
//李家哥哥．．早安～
//我．．我想．．
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//哦？什麽事．．说啊！
VideoUpdate(0, false)
SetDlgUpper(18-1-1, 0x00000000, false)
//香兰：
//没．．没什麽．．

[Scr_0x1615]
EventSetTriggerMode(-1, -1, false, 3)
SetDlgUpper(18-1-1, 0x00000000, false)
//香兰：
//李家哥哥，我．．
//我在家里熬了一锅腊八粥
//你和李大娘要是有空，晚饭後
//就过来一趟吧，尝尝我的手艺
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//好呀．．当然．．
//香兰姐煮的点心是出了名的，
//我婶婶说啊．．上回吃了你请
//的红豆汤，嘴巴直甜到现在呢
EventSetTriggerScript(4, 9, Scr_0x1645)
ReplaceAndPause()
[Scr_0x1624]
SetDlgUpper(18-1-1, 0x00000000, false)
//香兰：
//嘻．．一定要来喔！

[Scr_0x1628]
SetDlgUpper(18-1-1, 0x00000000, false)
//香兰：
//咦？
//家里的麻布袋怎麽少了一个
//该不是被猫儿叼走了吧！
ReplaceAndPauseWithNop(Scr_0x1624, 0)

[Event_00004_00009_Trigger]
SetDlgUpper(5-1-1, 0x00000000, false)
//秀兰：
//李大哥今天怎麽起的这麽早啊
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//啊．．早，秀兰妹子今天这麽
//早就在帮丁伯伯挑水浇菜呀．
VideoUpdate(0, false)
SetDlgUpper(5-1-1, 0x00000000, false)
//秀兰：
//可不是嘛．．谁能像你这麽闲
//我大姊今天天没亮就起了个早
//烧了一大锅甜粥，也不知道是
//弄给谁吃的？
//等一下我有件东西要送给你
//你等会再来找我拿
EventSetTriggerScript(4, 8, Scr_0x1615)
ReplaceAndPause()
SetDlgUpper(5-1-1, 0x00000000, false)
//秀兰：
//李大哥．．早～

[Scr_0x1645]
SetDlgUpper(5-1-1, 0x00000000, false)
//秀兰：
//这麽急着要哪．．
//嘻嘻！你看．．这件是我亲手
//缝制的布靴，你穿看看合不合
//你的脚？
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//哦！谢谢你
AddItem(177, 0)
EventSetTriggerScript(4, 7, Scr_0x15F4)
ReplaceAndPause()
SetDlgUpper(5-1-1, 0x00000000, false)
//秀兰：
//你不可以跟我爹爹和我姊姊说
//我替你缝制布靴的事喔．．
EventSetTriggerScript(4, 8, Scr_0x1628)

[Event_00004_00008_Auto]
NPCMoveToBlock(54, 102, 1, 2, true)
NPCMoveToBlock(52, 100, 1, 2, true)
NPCMoveToBlock(55, 97, 1, 2, true)
NPCMoveToBlock(50, 92, 0, 2, true)
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(5, false, false)
NPCMoveToBlock(41, 100, 1, 2, true)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(40, 99, 0, 2, true)
NPCMoveToBlock(38, 101, 0, 2, true)
ReplaceAndPause()
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(8, false, false)
NPCMoveToBlock(37, 102, 0, 2, true)
ReplaceAndPause()
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(5, false, false)
NPCMoveToBlock(43, 108, 0, 2, true)
NPCMoveToBlock(48, 103, 0, 2, true)
WaitEventAutoScriptRun(8, false, false)
NPCMoveToBlock(47, 102, 1, 2, true)
NPCMoveToBlock(47, 103, 0, 2, true)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(45, 104, 1, 2, true)
WaitEventAutoScriptRun(9, false, false)
NPCMoveToBlock(45, 105, 0, 2, true)
NPCMoveToBlock(45, 105, 1, 2, true)
WaitEventAutoScriptRun(2, false, false)
NPCMoveToBlock(49, 109, 0, 2, true)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(2, false, false)
EventSetAutoScript(4, 7, Scr_0x0251)
WaitEventAutoScriptRun(7, false, false)
NPCMoveToBlock(51, 106, 1, 3, false)
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(54, 104, 0, 3, false)
NPCMoveToBlock(53, 103, 1, 2, true)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(2, false, false)
ReplaceAndPauseWithNop(Event_00004_00008_Auto, 0)

[Event_00004_00009_Auto]
WaitEventAutoScriptRun(15, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(0, 0)
NPCMoveToBlock(31, 67, 0, 2, true)
NPCMoveToBlock(35, 71, 0, 2, true)
NPCMoveToBlock(33, 73, 0, 2, true)
NPCMoveToBlock(44, 84, 0, 2, true)
NPCMoveToBlock(42, 86, 0, 2, true)
NPCMoveToBlock(46, 90, 0, 2, true)
NPCMoveToBlock(44, 92, 0, 2, true)
NPCMoveToBlock(45, 93, 0, 2, true)
NPCMoveToBlock(40, 98, 0, 2, true)
NPCMoveToBlock(47, 105, 1, 2, true)
NPCMoveToBlock(46, 106, 1, 2, true)
NPCMoveToBlock(48, 108, 1, 2, true)
NPCMoveToBlock(50, 106, 1, 2, true)
WaitEventAutoScriptRun(15, false, false)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(47, 109, 1, 3, false)
ReplaceAndPause()
EventSetAutoScript(4, 7, Scr_0x0251)
WaitEventAutoScriptRun(10, false, false)
NPCMoveToBlock(39, 101, 1, 2, true)
NPCMoveToBlock(49, 91, 1, 2, true)
NPCMoveToBlock(29, 71, 1, 2, true)
NPCMoveToBlock(34, 66, 1, 2, true)
NPCMoveToBlock(33, 65, 1, 2, true)
NPCMoveToBlock(34, 64, 1, 2, true)
WaitEventAutoScriptRun(2, false, false)
NPCMoveToBlock(34, 64, 0, 2, true)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(2, 0)
ReplaceAndPauseWithNop(Event_00004_00009_Auto, 0)

[Event_00004_00020_Trigger]
PartySetPos(8, 103, 0)
SceneEnter(5)
FadeOut(0)

[Event_00005_00001_Trigger]
PartySetPos(54, 85, 1)
SceneEnter(4)
FadeOut(0)

[Event_00005_00004_Trigger]
//渔翁：
//传说～当年观音菩萨经过仙灵
//岛，见那岛上地气灵秀，宛然
//神仙洞府，便与侍香龙女留在
//那里修行，凡人千万冒犯不得
ReplaceAndPause()
//可是那仙灵岛四周险礁暗流密
//布，岛上又有奇石密林环绕，
//有人好不容易上了岛，却像似
//走进了迷阵内，无论怎麽绕也
//找不到通往岛内的通道
ReplaceAndPause()
//呵呵．．还听说有人曾在仙灵
//岛上看过一名美若天仙的青衣
//少女，手持玉瓶与宝剑从天而
//降，想必就是侍香龙女吧．．
//呵呵．．我活这麽一大把年纪
//也没见过神仙长什麽模样呢！
ReplaceAndPause()
//嘘．．别把鱼儿吓跑了

[Event_00005_00004_Auto]
EventAnimate(-1, 0)
ReplaceAndPauseWithNop(Event_00005_00004_Auto, 0)

[Event_00005_00006_Auto]
EventAnimate(-1, 0)
ReplaceAndPause()
EventAnimate(-1, 0)
ReplaceAndPause()
EventAnimate(-1, 0)
ReplaceAndPause()
EventAnimate(-1, 0)
WaitEventAutoScriptRun(8, false, false)
ReplaceAndPauseWithNop(Event_00005_00006_Auto, 0)

[Event_00005_00009_Trigger]
SetDlgUpper(8-1-1, 0x00000000, false)
//张四：
//这两天风浪太大了
//勉强出海打渔，结果一条鱼也
//没捞到，真是晦气！

[Scr_0x16DC]
VideoUpdate(0, false)
EventSetTriggerMode(-1, -1, false, 3)
SetDlgUpper(8-1-1, 0x00000000, false)
//张四：
//少听他们吹牛，我也到过那
//仙灵岛，哪有什麽仙女？
VideoRestore()
//只有一个又老又丑的凶肥婆
//看到我二话不说，就把我赶
//了出来！
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//你们该不是见鬼了吧？
//那荒岛上怎麽会有人．．
SceneSetScripts(4, Scr_0x14C7, Null)
ReplaceAndPause()
SetDlgUpper(8-1-1, 0x00000000, false)
//张四：
//逍遥老弟，店里没事吗？
//你不回去帮忙，还在这闲逛
//要是给李大娘知道了，你一
//定挨骂的
ReplaceAndPause()
SetDlgUpper(8-1-1, 0x00000000, false)
//张四：
//老天保佑．．保佑我今天出海
//能打到鱼，再这麽下去，一家
//老小都要喝西北风了．．

[Scr_0x16F9]
EventSetTriggerMode(5, 2, true, 2)
EventSetTriggerScript(5, 2, Scr_0x1725)
SetDlgUpper(8-1-1, 0x00000000, false)
//张四：
//你想出海？这可不是闹着玩的
//我是到过仙灵岛没错，但是现
//在的天色也不早了，到了晚上
//风浪还会更大的．．
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//张四哥～请你无论如何要帮我
//这个忙，要救我婶婶的命只有
//这个法子了
VideoUpdate(0, false)
SetDlgUpper(8-1-1, 0x00000000, false)
//张四：
//这．．．．．好吧！我试试看
//李大娘平日待人还不错，我想
//老天应该也会可怜好人吧
EventAnimate(3, 2)
VideoUpdate(0, false)
EventAnimate(3, 2)
VideoUpdate(0, false)
EventAnimate(3, 2)
VideoUpdate(0, false)
EventAnimate(3, 2)
VideoUpdate(0, false)
EventAnimate(0, 2)
VideoUpdate(0, false)
EventAnimate(0, 2)
VideoUpdate(0, false)
EventAnimate(0, 2)
VideoUpdate(0, false)
EventAnimate(0, 2)
VideoUpdate(0, false)
EventSetState(-1, -1, false, false)
EventSetState(5, 3, true, true)
EventSetAutoScript(5, 3, Null)
VideoUpdate(0, false)
SetDlgUpper(8-1-1, 0x00000000, false)
//张四：
//走吧～上船！
ReplaceAndPause()

[Scr_0x1725]
PartyWalkToBlock(38, 86, 0, 2)
VideoUpdate(0, false)
RoleSetDirFrame(1, 0, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
EventSetAutoScript(5, 3, Scr_0x020D)
RideNPCToPos(47, 77, 0, 2)
FadeOut(0)
RoleSetDirFrame(0, 0, 0)
PartySetPos(23, 50, 1)
SceneEnter(15)

[Scr_0x1732]
//张四：
//希望这求来的丹药真的灵验
ReplaceAndPause()
//张四：
//希望明天是个好天气

[Event_00005_00010_Trigger]
VideoUpdate(0, false)
EventSetTriggerMode(-1, -1, false, 3)
//水生叔：
//小李子！我跟你讲呀．．
//昨儿个我出海时看到东边岛上
//有一位好美丽的仙女喔！可惜
//我一上岸，就不见踪影了
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//少盖了．．北村的大脚婆
//你不也是成天夸她漂亮
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//水生叔：
//这．．我这次是说真的！
//我这一辈子从没见过那麽
//美的姑娘．．
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//哈哈．．水生叔．．
//我看你是想讨老婆想疯了
EventSetTriggerScript(5, 9, Scr_0x16DC)
EventSetTriggerMode(5, 9, true, 2)
ReplaceAndPause()
//水生叔：
//是真的！
//东边的仙灵岛上真的有仙女住
//在那里，我亲眼看见的！

[Scr_0x1755]
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//水生叔！救人如救火！劳您驾
//带我上仙灵岛吧！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//水生叔：
//啥！风浪这麽大，你不要命了
//是不是？昨儿个为了贪看仙女
//船险些翻了，我可不敢再去！
ReplaceAndPause()
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//水生叔～求求您．．
//您是这一带经验最老到的渔夫
//您不行，那还有谁能行呢？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
Replace()
//水生叔：
//不行就是不行！你找别人吧！

[Event_00005_00011_Trigger]
VideoUpdate(0, false)
EventSetTriggerMode(-1, -1, false, 3)
//方老板：
//呵～这不是小李子吗．
//要不要再到我的船运行来帮
//忙啊？
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//不了．．才那麽一点工钱
//每天又要搬这麽多的货，
//太累了，我才不想干呢．．
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//方老板：
//那麽．．我加你工钱！
//我这艘船要载货到苏州城
//只是运一些绸缎，很轻松的．
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//呵．．再说啦！
//等我有兴趣时再来找你吧
ReplaceAndPause()
//方老板：
//唉．．现在的年青人都怕吃苦
//没人肯当船夫，这下子．．
//船开不了，生意也甭作了．

[Event_00005_00013_Trigger]
//鱼嫂：
//呦．．买虾吗？
//这两天风浪太大了些，船家们
//都捕不到鱼货，所以新鲜的虾
//也没得买啦．．
ReplaceAndPause()
//怎麽样？买条鱼回去煮汤吧。
//刚钓上来的喔！很新鲜呢

[Event_00004_00023_Trigger]
PartySetPos(21, 102, 1)
SceneEnter(8)
FadeOut(0)

[Event_00008_00006_Trigger]
PartySetPos(39, 78, 0)
SceneEnter(4)
FadeOut(0)

[Event_00004_00024_Trigger]
PartySetPos(30, 33, 0)
SceneEnter(9)
FadeOut(0)

[Event_00009_00001_Trigger]
PartySetPos(31, 58, 0)
SceneEnter(4)
FadeOut(0)

[Event_00004_00021_Trigger]
PartySetPos(56, 119, 0)
SceneEnter(6)
FadeOut(0)

[Scene_00006_Teleport]
PartySetPos(7, 86, 0)
SceneEnter(4)
FadeOut(0)

[Event_00006_00002_Trigger]
PartySetPos(44, 58, 1)
SceneEnter(7)
FadeOut(0)

[Event_00007_00001_Trigger]
EventSetState(7, 3, false, false)
EventSetState(7, 4, false, false)
PartySetPos(6, 11, 1)
SceneEnter(6)
FadeOut(0)

[Event_00003_00001_Trigger]
PartySetPos(39, 56, 0)
SceneEnter(4)
FadeOut(0)

[Scr_0x17B5]
SetDlgCenter(0, 0x00000000, false)
//李大娘仍昏睡着．．

[Scr_0x17B8]
EventSetStateSequence(4, 26, 4, 27, true, true)
EventSetTriggerScript(4, 26, Event_00004_00030_Trigger)
EventSetTriggerScript(4, 27, Event_00004_00030_Trigger)
EventSetStateSequence(4, 28, 4, 29, true, true)
EventSetTriggerScript(4, 28, Event_00004_00030_Trigger)
EventSetTriggerScript(4, 29, Event_00004_00030_Trigger)
EventSetState(1, 26, false, false)
EventSetState(1, 27, false, false)
EventSetState(3, 17, true, true)
EventSetState(3, 18, true, true)
EventSetState(3, 16, true, true)
EventSetTriggerScript(3, 16, Scr_0x186E)
EventSetTriggerMode(3, 16, true, 3)
EventSetAutoScript(3, 16, Null)
EventSetAutoScript(3, 17, Null)
EventSetAutoScript(3, 18, Null)
EventSetTriggerMode(3, 17, false, 0)
EventSetTriggerMode(3, 18, false, 0)
EventSetPos(3, 16, 1032, 1672)
EventSetPos(3, 17, 1008, 1656)
EventSetPos(3, 18, 1056, 1680)
EventSetState(4, 37, false, false)
EventSetState(13, 2, true, true)
EventSetTriggerScript(14, 0, Scr_0x2048)
EventSetState(11, 0, false, false)
EventSetState(8, 2, true, false)
EventSetState(8, 3, true, true)
EventSetState(8, 4, true, true)
EventSetStateSequence(4, 2, 4, 18, false, false)
EventSetState(0, 0, false, false)
EventSetTriggerScript(4, 20, Scr_0x1EF4)
EventSetState(0, 0, false, false)
EventSetState(2, 3, true, false)
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//"李大娘服下紫金丹．．"
RemoveItem(213, 1, Null)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//怎．．怎麽头昏昏的？
VideoUpdate(0, false)
MusicStop()
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(6, false, false)
RoleMoveOneStep(-4, -2, 0)
WaitEventAutoScriptRun(2, false, false)
RoleMoveOneStep(-8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-8, -4, 0)
WaitEventAutoScriptRun(2, false, false)
RoleMoveOneStep(-8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-8, -4, 0)
WaitEventAutoScriptRun(3, false, false)
RoleMoveOneStep(-12, -6, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(4, false, false)
RoleMoveOneStep(-32, 0, 0)
HeroSetSprite(0, 193, true)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
PlaySound(93)
SetDlgCenter(0, 0x00000000, false)
//"李逍遥先前服下的忘忧散"
//"发作，昏倒在地．．"
FadeOut(0)
EventSetState(-1, -1, false, false)
EventSetState(2, 8, true, false)
EventSetState(5, 0, true, false)
EventSetState(4, 0, true, false)
MusicPlay(36, true, 0.00)
SetTimeFilter(2)
VideoUpdate(0, true)
SetDlgCenter(0, 0x00000000, false)
//"夜晚．．"
VideoUpdate(0, false)
SetDlgLower(21-1-1, 0x00000000, false)
//李大娘：
//逍遥！你不在自己房里睡
//躺在这儿干嘛？
VideoUpdate(0, false)
SetDlgUpper(1-10-1, 0x00000000, false)
//李逍遥：
//唔．．．　我怎麽会在这！？
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(1-3-1, 0x00000000, false)
//李逍遥：
//对了！婶婶．．
//我有很重要的事要跟您说
SetDlgLower(21-1-1, 0x00000000, false)
//什麽事？！
VideoUpdate(0, false)
SetDlgUpper(1-10-1, 0x00000000, false)
//李逍遥：
//是．．是．．
//咦？怎麽突然想不起来了
//我明明．．明明．．．
VideoUpdate(0, false)
//"李逍遥从昨天出发到仙灵岛"
//"至拿药回来的记忆全失去了"
VideoUpdate(0, false)
SetDlgLower(21-1-1, 0x00000000, false)
//李大娘：
//我看你又是在作梦！
//回房间睡觉去！
FadeOut(0)
EventSetState(3, 5, true, false)
EventSetState(3, 27, true, true)
EventSetState(3, 28, true, true)
EventSetDirFrame(3, 27, 0, 0)
EventSetDirFrame(3, 28, 0, 0)
EventSetState(2, 8, false, false)
HeroSetSprite(0, 193, true)
SceneSetScripts(1, Scr_0x1836, Null)
SceneEnter(1)

[Scr_0x1836]
PartySetPos(41, 15, 1)
RoleSetDirFrame(0, 0, 11)
WaitEventAutoScriptRun(15, false, false)
SetDlgLower(1-8-1, 0x00000000, false)
//奇怪．．好像有件很重要的事
//就是想不起来．．？
WaitEventAutoScriptRun(10, false, false)
RoleSetDirFrame(0, 0, 10)
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//哎呀．．差点给忘了！
//那位讨酒喝的老道士说～
//山神庙．．要教我剑法．．
PartySetPos(41, 16, 0)
RoleSetDirFrame(0, 0, 1)
VideoUpdate(0, false)
PartySetPos(41, 17, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 2)
VideoUpdate(0, false)
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//反正睡不着，何不去会他一会？
//说不定我真的是遇到高人了
ReplaceAndPause()

[Event_00003_00005_Trigger]
SetDlgCenter(0, 0x00000000, false)
//"婶婶房里传来声音．．"
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//李大娘：
//是逍遥吗？　要去哪呀？
//怎麽这麽晚了怎麽还不睡啊？
//你是不是又想溜出去鬼混哪？
VideoUpdate(0, false)
PartySetPos(39, 91, 1)
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//啊．．没事
//我这就回房去了
VideoUpdate(0, false)
PartyWalkToBlock(39, 91, 0, 2)

[Scr_0x1865]
//鱼嫂：
//你们刚走不久，就有一个苗人
//出了一大笔银子，租下水生叔
//的船，水生叔一口就答应下来
//这回不知又跑到哪喝花酒去了
ReplaceAndPause()
//这年头只要有钱，杀头的生意
//都有人干

[Scr_0x186E]
EventSetTriggerMode(-1, -1, false, 2)
SetDlgLower(25-1-1, 0x00000000, false)
//苗人头领：
//小兄弟，求得灵药了吧？
SetDlgUpper(1-7-1, 0x00000000, false)
//李逍遥：
//灵药！？　什麽灵药？
VideoUpdate(0, false)
SetDlgLower(25-1-1, 0x00000000, false)
//苗人头领：
//呵呵．．果然有效．．
//对了！现在是什麽时辰了
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//哦．．三更天了
VideoUpdate(0, false)
SetDlgLower(25-1-1, 0x00000000, false)
//苗人头领：
//嗯～是时候了
VideoUpdate(0, false)
SetDlgLower(25-1-1, 0x00000000, false)
//苗人头领：
//小兄弟，我们现在有事要出去
//一趟，明天一早才会回来，你
//现在可以打烊，不必等我们了
EventSetState(0, 0, true, true)
EventSetAutoScript(3, 16, Scr_0x18A3)
EventSetAutoScript(3, 17, Scr_0x18A6)
EventSetAutoScript(3, 18, Scr_0x18AA)
WaitEventAutoScriptRun(10, false, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//这麽晚了，三位要上哪去呀？
SetDlgLower(25-1-1, 0x00000000, false)
//苗人头领：
//小兄弟．．少知道一些事情
//可以活久一点！
VideoUpdate(0, false)
SetDlgLower(25-1-1, 0x00000000, false)
//苗人头领：
//要不是看你蛮听话的，昨天我
//就赏你一颗金蚕蛊啦！
//哈．．哈．．哈～
WaitEventAutoScriptRun(26, false, false)
SetDlgUpper(1-7-1, 0x00000000, false)
//李逍遥：
//哼、装得神秘兮兮的．．
//一定不是去干啥好事！
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//算了！　客人的闲事少管．．

[Scr_0x18A3]
NPCMoveToBlock(30, 106, 1, 2, true)
EventSetState(-1, -1, false, false)

[Scr_0x18A6]
NPCMoveToBlock(32, 104, 1, 2, true)
NPCMoveToBlock(30, 106, 1, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x18AA]
NPCMoveToBlock(33, 105, 0, 2, true)
NPCMoveToBlock(31, 107, 0, 2, true)
EventSetState(-1, -1, false, false)

[Event_00001_00005_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//得到止血草
AddItem(39, 0)
EventSetState(-1, -1, false, false)

[Event_00001_00006_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//得到皮帽
AddItem(141, 0)
EventSetState(-1, -1, false, false)

[Event_00001_00007_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//得到木鞋
AddItem(176, 0)
EventSetState(-1, -1, false, false)

[Event_00001_00014_Trigger]
PlaySound(78)
SetDlgLower(1-3-1, 0x00000000, false)
//哈！这不是上回投宿的镖师吃
//饭的家伙吗？居然掉了一支在
//被窝里．．
VideoUpdate(0, false)
SetDlgBox(0x00000000)
//得到一支梅花镖
AddItem(93, 0)
EventSetState(-1, -1, false, false)

[Event_00001_00015_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//这是啥玩意？
AddItem(31, 0)
EventSetState(-1, -1, false, false)

[Event_00002_00002_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//得到驱魔香
AddItem(30, 0)
EventSetState(-1, -1, false, false)

[Event_00001_00022_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//得到大蒜
AddItem(24, 0)
EventSetState(-1, -1, false, false)

[Event_00001_00023_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//得到腌肉
AddItem(34, 0)
EventSetState(-1, -1, false, false)

[Event_00001_00024_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//得到雄黄
AddItem(27, 0)
EventSetState(-1, -1, false, false)

[Event_00003_00022_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//得到糯米糕
AddItem(16, 0)
EventSetState(-1, -1, false, false)

[Event_00003_00023_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//得到还魂香
AddItem(35, 0)
EventSetState(-1, -1, false, false)

[Event_00004_00032_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//采得一颗龙涎草
AddItem(46, 0)
EventSetState(-1, -1, false, false)

[Event_00004_00033_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//采得一颗止血草
AddItem(39, 0)
EventSetState(-1, -1, false, false)

[Event_00004_00034_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//得到水果
AddItem(32, 0)
EventSetState(-1, -1, false, false)

[Event_00004_00035_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//得到水果
AddItem(32, 0)
EventSetState(-1, -1, false, false)

[Event_00005_00026_Trigger]
PlaySound(78)
SetDlgBox(0x00000000)
//捡到一件藤制的甲胄
AddItem(149, 0)
EventSetState(-1, -1, false, false)

[Event_00010_00001_Trigger]
JumpIfNotAllRolesFullHP(Scr_0x1918)
//洪大夫：
//怎麽了？你没病没痛的
//干嘛要抓药．．

[Scr_0x1918]
//洪大夫：
//小李子，是不是跟人打架啦？
//真是．．这点小伤，我替你扎
//个几针，再推拿几下就没事了
RoleModifyHPMP(9999, true)
FadeOut(0)
VideoUpdate(0, false)
//洪大夫：
//呵～老邻居了，不收你的钱

[Scr_0x1922]
//洪大夫：
//我这儿还留有一颗上好的灵芝
//看在老邻居的份上就送给你吧
//不过这药只能补补元气，李大
//娘的病，恕我爱莫能助．．
AddItem(47, 0)
ReplaceAndPause()
JumpIfNotAllRolesFullHP(Scr_0x1918)
//洪大夫：
//还想要抓那些药方？
VideoUpdate(0, false)
ShowBuyItemMenu(1)

[Event_00004_00025_Trigger]
SceneEnter(10)
PartySetPos(31, 96, 0)
FadeOut(0)

[Event_00010_00002_Trigger]
SceneEnter(4)
PartySetPos(39, 98, 0)
FadeOut(0)

[Event_00008_00004_Auto]
ReplaceAndPause()
GotoWithProbability(10, Event_00008_00004_Auto)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
EventAnimate(0, 2)
WaitEventAutoScriptRun(4, false, false)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
EventAnimate(2, 2)
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(3, 0)
ReplaceAndPauseWithNop(Event_00008_00004_Auto, 0)

[Event_00008_00002_Trigger]
//丁大伯：
//我．．我不行了．．呵～呵～
ReplaceAndPause()
//呵．．咳～

[Event_00008_00003_Trigger]
SetDlgUpper(18-1-1, 0x00000000, false)
//香兰：
//李家哥哥，拜托你帮帮忙
//我爹爹的哮喘病的突然发作了
//你能否帮我们把洪大夫请过来
EventSetTriggerScript(4, 28, Scr_0x195B)
EventSetTriggerScript(4, 29, Scr_0x195B)
ReplaceAndPause()
//这回爹爹的病发的急，现在又
//是三更半夜的，我们姐妹俩真
//不知该怎麽办才好

[Event_00008_00004_Trigger]
SetDlgUpper(5-3-1, 0x00000000, false)
//秀兰：
//呜～怎麽办．．怎麽办．．

[Scr_0x195B]
PlaySound(93)
WaitEventAutoScriptRun(3, false, false)
PlaySound(93)
WaitEventAutoScriptRun(3, false, false)
PlaySound(93)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//洪大夫，您开开门啊～
VideoUpdate(0, false)
PlaySound(93)
Delay(4)
PlaySound(93)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//洪大夫！洪大夫～
VideoUpdate(0, false)
PlaySound(93)
Delay(6)
EventSetState(4, 28, false, false)
EventSetState(4, 29, false, false)
VideoUpdate(0, false)
EventSetState(4, 31, true, true)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//洪大夫：
//三更半夜的，是谁在敲门呀～
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//洪大叔，劳您的驾．．
//丁伯伯的哮喘病又发作了，看
//起来似乎很严重呢，请您赶快
//过去看看吧．．
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//洪大夫：
//好～好的．．我马上就过去
VideoUpdate(0, false)
EventSetState(4, 31, false, false)
EventSetState(8, 5, true, true)
EventSetTriggerScript(10, 1, Scr_0x19D0)
EventSetAutoScript(8, 4, Event_00005_00014_Auto)
EventSetDirFrame(8, 3, 2, 0)
SceneSetScripts(8, Scr_0x198C, Null)
PartySetPos(37, 21, 0)
RoleSetDirFrame(0, 3, 0)
FadeOut(0)
SceneEnter(8)

[Scr_0x198C]
SceneSetScripts(8, Null, Null)
VideoUpdate(0, false)
EventSetDirFrame(8, 5, 1, 0)
VideoUpdate(0, false)
EventSetDirFrame(8, 3, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//洪大夫：
//你们可以放心
//已经稳定下来，没有危险了
//万一有什麽情况，再过来找我
FadeOut(2)
EventSetDirFrame(8, 3, 0, 0)
RoleSetDirFrame(0, 0, 0)
EventSetState(8, 5, false, false)
VideoUpdate(0, false)
EventSetDirFrame(8, 3, 1, 0)
VideoUpdate(0, false)
SetDlgUpper(18-1-1, 0x00000000, false)
//香兰：
//李家哥哥．．我．．我们
//真不知该怎麽感谢您
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//不用了，我也没帮上什麽忙
//只是跑跑腿而已．．
EventSetTriggerScript(8, 3, Scr_0x19AC)
EventSetTriggerScript(8, 4, Scr_0x19AF)
ReplaceAndPause()

[Scr_0x19AC]
SetDlgUpper(18-1-1, 0x00000000, false)
//谢谢你．．

[Scr_0x19AF]
SetDlgUpper(5-3-1, 0x00000000, false)
//秀兰：
//李大哥．．我好怕～
//你留下来陪我们好不好？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//大夫不是已经说了吗，你爹爹
//已经不会有事了，你放心吧。
//我有点事，要到山神庙走一趟
VideoUpdate(0, false)
SetDlgUpper(5-3-1, 0x00000000, false)
//秀兰：
//那不是要经过西边的十里坡？
//听说～那里到了晚上会有鬼怪
//出来吃人，很可怕呢．．
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//哈哈～那是大人用来吓小孩的
//你也信？
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//我今早跟一位老前辈有约在
//山神庙，他要教我剑法
SetDlgUpper(5-2-1, 0x00000000, false)
//秀兰：
//你才是傻小孩哩，那个疯疯癫
//癫的老酒鬼讲的话你也当真？
ReplaceAndPause()
//哼～走嘛．．不理你了

[Scr_0x19D0]
SetDlgUpper(0, 0x00000000, false)
//洪大夫：
//被你这麽一弄
//这下子我可又没得睡了
ReplaceAndPauseWithNop(Event_00010_00001_Trigger, 0)

[Event_00007_00002_Trigger]
SceneEnter(11)
PartySetPos(14, 31, 1)
FadeOut(0)

[Scene_00007_Teleport]
SceneEnter(7)
PartySetPos(32, 44, 0)
FadeOut(0)

[Event_00011_00002_Trigger]
MusicPlay(0, true, 0.00)
VideoUpdate(0, false)
EventSetTriggerMode(-1, -1, false, 2)
SetDlgUpper(7-1-1, 0x00000000, false)
//醉道士：
//哈哈哈！小伙子你果然守信
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//要不是婶婶看得紧，晚辈原本
//还想替老前辈带几壶好酒来
SetDlgUpper(7-1-1, 0x00000000, false)
//醉道士：
//呵呵！那倒不必了
//老夫喝遍天下名酒，要不是酒
//虫闹得凶，才不稀罕那掺了水
//的酸酒。
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//让前辈见笑了，乡下小店没啥
//美酒佳肴，怠慢不周之处还请
//前辈多多见谅
VideoUpdate(0, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//醉道士：
//哈～哈哈！这样说才像句人话
//我一生从不亏欠别人，现在就
//教你一式剑招，算是回报你赐
//酒之恩，仔细看清楚了
FadeOut(0)
SetRNG(1)
MusicPlay(86, true, 0.00)
PlayRNG(0, -1, 14)
FadeOut(0)
PartySetPos(21, 25, 0)
HeroSetSprite(0, 193, true)
RoleSetDirFrame(0, 0, 9)
SetTimeFilter(0)
EventSetState(5, 0, false, false)
EventSetState(4, 0, false, false)
EventSetState(7, 0, false, false)
EventSetState(8, 0, false, false)
EventSetTriggerScript(4, 21, Event_00004_00021_Trigger)
EventSetTriggerScript(4, 20, Event_00004_00020_Trigger)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//前辈！请您收我为徒。
SetDlgUpper(7-1-1, 0x00000000, false)
//醉道士：
//贫道一向漂泊惯了
//不想收徒弟
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 8)
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//前辈～求求您．．晚辈愿意孝
//敬您下半辈子，跟随您行侠仗
//义，云游四海．．
SetDlgUpper(7-1-1, 0x00000000, false)
//醉道士：
//你学此一招剑法，便可一生受
//用无穷，你我缘尽於此，回家
//去吧．．
EventSetState(-1, -1, false, false)
FadeToScene(-1, 2)
RoleSetDirFrame(0, 0, 9)
WaitEventAutoScriptRun(5, false, false)
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//前．．前辈！
//还不知道您尊姓大名呢
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//"远远传来宏亮的朗诗声"
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//"御剑乘风来　除魔天地间"
//"有酒乐逍遥　无酒我亦癫"
//"一饮尽江河　再饮吞日月"
//"千杯醉不倒　唯我酒剑仙"
SetDlgLower(0, 0x00000000, false)
//酒．．剑仙？
RoleAddMagic(1, 51)
RoleModifyHPMP(9999, true)
SceneSetScripts(7, Scr_0x1A6F, Null)
EventSetState(7, 3, true, true)
EventSetState(7, 4, true, true)
EventSetState(3, 5, false, false)
EventSetState(4, 26, false, false)
EventSetState(4, 27, false, false)
EventSetState(4, 28, false, false)
EventSetState(4, 29, false, false)
EventSetState(4, 2, true, true)
EventSetState(4, 3, true, true)
EventSetState(4, 4, true, true)
EventSetState(4, 5, true, true)
EventSetState(4, 6, true, true)
EventSetState(4, 12, true, true)
EventSetState(4, 13, true, false)
EventSetState(4, 10, true, true)
EventSetTriggerScript(4, 10, Scr_0x1AC0)
EventSetState(4, 11, true, true)
EventSetTriggerScript(4, 11, Scr_0x1AC6)
EventSetState(4, 14, true, true)
EventSetState(4, 15, true, true)
EventSetState(4, 16, true, true)
EventSetState(4, 17, true, false)
EventSetState(4, 18, true, false)
EventSetTriggerScript(8, 7, Scr_0x1E6E)
EventSetTriggerScript(8, 2, Null)
EventSetTriggerScript(8, 3, Scr_0x1ACA)
EventSetTriggerScript(8, 4, Scr_0x1AD4)
EventSetAutoScript(8, 4, Event_00005_00014_Auto)
EventSetState(4, 1, true, true)
EventSetPos(4, 1, 1152, 1248)
EventSetAutoScript(4, 1, Null)
EventSetTriggerScript(4, 1, Scr_0x1AE3)
EventSetState(3, 13, true, true)
EventSetTriggerMode(3, 13, true, 2)
EventSetAutoScript(3, 13, Null)
EventSetPos(3, 13, 1088, 1648)
EventSetTriggerScript(3, 13, Scr_0x1A78)
EventSetState(3, 17, true, true)
EventSetState(3, 18, true, true)
EventSetPos(3, 17, 1552, 1496)
EventSetPos(3, 18, 1552, 1512)
EventSetTriggerScript(3, 17, Scr_0x1ADD)
EventSetTriggerScript(3, 18, Scr_0x1ADD)
EventSetTriggerMode(3, 17, true, 2)
EventSetAutoScript(3, 17, Event_00001_00026_Auto)
EventSetAutoScript(3, 18, Event_00021_00016_Auto)
EventSetState(1, 28, true, true)

[Scr_0x1A6F]
MusicStop()
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//啥．．已经天亮了呀
//惨了～等会回去又要捱骂了
MusicPlay(70, true, 0.00)
SceneSetScripts(4, Scene_00004_Enter, Null)
ReplaceAndPause()

[Scr_0x1A78]
VideoUpdate(0, false)
EventSetTriggerMode(-1, -1, false, 2)
SetDlgUpper(21-1-1, 0x00000000, false)
//李大娘：
//你昨晚又跑到哪玩了？居然到
//早上才回来，连店门也没拴！
//万一遭了小偷怎麽办！
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//婶婶！我昨晚遇到一位仙人呢
//就是一大早躺在店门口要酒喝
//的那个道士，他还教了我一套
//剑法，你要不要瞧看看．．
VideoUpdate(0, false)
SetDlgUpper(21-1-1, 0x00000000, false)
//李大娘：
//别在那瞎说梦话，对了．．
//那些苗人客倌今早回来时又
//要多订一间客房
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//可是．．咱们客栈也才不过
//两间客房吧
VideoUpdate(0, false)
SetDlgUpper(21-1-1, 0x00000000, false)
//李大娘：
//我上楼找不到你，就把你的房
//间收拾收拾，先让给客倌住下
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//啥！那我要睡哪里？
VideoUpdate(0, false)
SetDlgUpper(21-1-1, 0x00000000, false)
//李大娘：
//他们今晚就要走了，就忍耐一
//下吧，一天不睡午觉又不会死
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//哦～我的房间是住了谁？
VideoUpdate(0, false)
SetDlgUpper(21-1-1, 0x00000000, false)
//李大娘：
//也没住人，就只见他们抬了一
//只鼓鼓的麻布袋进去，也不许
//咱们任何人进去那房间
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//哦？这般人神神秘秘的
//莫非是啥宝贝不成．．
VideoUpdate(0, false)
Replace()
SetDlgUpper(21-1-1, 0x00000000, false)
//李大娘：
//你管人家那麽多干啥？
//快去梳洗一下，准备吃早饭啦
EventSetAutoScript(3, 13, Null)
EventSetTriggerScript(1, 4, Scr_0x1AB6)

[Scr_0x1AB6]
//这样走出去会被发现的
RoleMoveOneStep(8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(8, -4, 0)
WaitEventAutoScriptRun(0, false, false)

[Scr_0x1AC0]
//旺财嫂：
//早呀！你婶婶的病好了点没？
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//托您的福，已经没事了

[Scr_0x1AC6]
//来福婶：
//小李子呀，你婶婶大病初癒
//别再让她太操劳了

[Scr_0x1ACA]
SetDlgUpper(18-1-1, 0x00000000, false)
//香兰：
//我爹病了，大夫说只要能渡过
//这几天就会没事了，我们姐妹
//俩得轮流看护他
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//丁大伯有你们两个这麽孝顺的
//好女儿，一定会好起来的

[Scr_0x1AD4]
SetDlgUpper(5-1-1, 0x00000000, false)
//秀兰：
//李大哥是来探望我爹的病吗？
ReplaceAndPause()
SetDlgUpper(5-3-1, 0x00000000, false)
//秀兰：
//爹爹的病是多年的老毛病了
//可是一直都治不好

[Scr_0x1ADD]
VideoUpdate(0, false)
EventSetTriggerMode(-1, -1, false, 2)
//苗人喽罗：
//贼头贼脑的瞧什麽？
//没有吩咐不准靠近这房间！

[Scr_0x1AE3]
EventSetTriggerMode(-1, -1, false, 2)
SetDlgUpper(48-1-1, 0x00000000, false)
//王小虎：
//逍遥哥哥！
//你教我如何造秘道好不好？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//这．．太乱来了吧
//给你爹知道的话，准挨揍的
VideoUpdate(0, false)
SetDlgUpper(48-1-1, 0x00000000, false)
//可是～你自己还不是在房间做
//了一个秘道，通到楼下的柴房
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//嘘～别大声嚷嚷，给我婶婶知
//道就惨了，改天我再教你吧
VideoUpdate(0, false)
SetDlgUpper(48-1-1, 0x00000000, false)
//又是改天哪～
//逍遥大哥最爱赖皮了

[Event_00001_00028_Trigger]
MusicPlay(34, true, 0.00)
EventSetTriggerScript(1, 4, Event_00001_00004_Trigger)
NPCSetFrame(1)
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//哇！是位大姑娘．．．．
//．．咦～好像在哪见过？
FadeOut(0)
PartySetPos(40, 16, 1)
RoleSetDirFrame(0, 1, 0)
EventSetState(-1, -1, false, false)
EventSetState(1, 30, true, false)
EventSetState(1, 29, true, false)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//姑娘～这是怎麽一回事？
//那些人为什麽把你抓来？
VideoUpdate(0, false)
SetDlgUpper(2-3-1, 0x00000000, false)
//赵灵儿：
//呜～姥姥．．
//我要回去救姥姥！
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//嘘～别作声．．
EventSetState(3, 17, false, false)
EventSetState(3, 18, false, false)
EventSetState(1, 26, true, true)
EventSetState(1, 27, true, true)
EventSetPos(1, 26, 1168, 376)
EventSetPos(1, 27, 1200, 376)
EventSetAutoScript(1, 26, Scr_0x1B6D)
EventSetAutoScript(1, 27, Scr_0x1B6D)
WaitEventAutoScriptRun(12, false, false)
SetDlgUpper(0, 0x00000000, false)
//苗人喽罗：
//你是怎麽溜进来的！
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//喂～你们把这位姑娘绑来这里
//到底作何居心？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//苗人喽罗：
//咱们拜月教的事你最好别管！
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//嘿～这是我们家开的客栈
//我当然非管不可
SetDlgUpper(0, 0x00000000, false)
//苗人喽罗：
//　找死！
PartySetRole(12)
SetBattlefield(21)
BattleStart(18, Scr_0x9C9B, Null)
MusicPlay(24, true, 3.00)
PartySetRole(1)
BattleEnd()
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//苗人喽罗：
//小子，算你厉害。咱们走！
EventSetAutoScript(1, 26, Scr_0x1B72)
EventSetAutoScript(1, 27, Scr_0x1B72)
WaitEventAutoScriptRun(12, false, false)
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//那些苗人为什麽要抓你？
VideoUpdate(0, false)
SetDlgUpper(2-3-1, 0x00000000, false)
//赵灵儿：
//姥姥．．姥姥受了重伤，我好
//担心呐，求求你带我回岛上
//姥姥就快死了．．
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//岛．．？　哪一个岛？
VideoUpdate(0, false)
SetDlgUpper(2-8-1, 0x00000000, false)
//赵灵儿：
//当然是仙灵岛啊！！
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//好好好～你别慌，镇静点
//这样吧．．我去帮你借一艘船
EventSetState(1, 29, false, false)
EventSetTriggerScript(3, 13, Scr_0x1B77)
EventSetTriggerMode(3, 13, true, 2)
PartySetRole(12)
RoleSetDirFrame(0, 3, 0)
RoleRevive(10, true)
RoleModifyHPMP(9999, true)
EventSetTriggerMode(4, 1, true, 2)
EventSetTriggerScript(4, 1, Scr_0x1DCE)
EventSetTriggerScript(8, 3, Scr_0x1DE9)
EventSetState(8, 4, false, false)
EventSetState(4, 9, true, true)
EventSetTriggerScript(4, 9, Scr_0x1E05)
EventSetTriggerScript(4, 10, Scr_0x1E16)
EventSetTriggerScript(4, 11, Scr_0x1E1C)
EventSetTriggerScript(5, 13, Scr_0x1E1F)
EventSetTriggerScript(10, 1, Scr_0x1E23)
EventSetTriggerScript(1, 10, Scr_0x11FF)
EventSetTriggerScript(1, 8, Scr_0x120F)

[Event_00001_00030_Trigger]
SetDlgBox(0x00000000)
//一只空的麻布袋

[Scr_0x1B6D]
NPCSetDirFrame(2, 0)
[Scr_0x1B6E]
EventWalkOneStep(-1, -1, 16, -8)
GotoWithNop(Scr_0x1B6E, 9)
NPCSetDirFrame(1, 0)

[Scr_0x1B72]
NPCSetDirFrame(0, 0)
[Scr_0x1B73]
EventWalkOneStep(-1, -1, -16, 8)
GotoWithNop(Scr_0x1B73, 9)
EventSetState(-1, -1, false, false)

[Scr_0x1B77]
VideoUpdate(0, false)
EventSetTriggerMode(-1, -1, false, 2)
SetDlgUpper(21-1-1, 0x00000000, false)
//李大娘：
//你疯了是不是！得罪了客倌
//咱们生意还做不做？
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//婶婶～
//那些苗人根本是采花贼
//这位姑娘差点就被抓去卖掉
VideoUpdate(0, false)
SetDlgUpper(21-1-1, 0x00000000, false)
//李大娘：
//哎呦～　真是该打
//咦？这丫头是哪户人家的千金
//我怎麽从没见过？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//婶婶～您别尽盯着人家瞧呐！
//我得尽快将这位姑娘送回家去
SetDlgUpper(21-1-1, 0x00000000, false)
//李大娘：
//你可得快去快回啊！
//别又惹上麻烦了
EventSetTriggerScript(5, 9, Scr_0x1B9F)
EventSetState(20, 2, false, false)
EventSetState(20, 8, false, false)
EventSetState(20, 9, true, true)
EventSetState(20, 11, true, false)
EventSetState(20, 12, true, false)
EventSetStateSequence(19, 10, 19, 16, false, false)
EventSetStateSequence(20, 13, 20, 18, true, true)
ReplaceAndPause()
SetDlgUpper(21-1-1, 0x00000000, false)
//李大娘：
//千万别再惹麻烦．．

[Scr_0x1B9F]
EventSetTriggerMode(5, 2, true, 2)
EventSetTriggerScript(5, 2, Scr_0x1725)
EventSetTriggerScript(15, 1, Scr_0x24E9)
SceneSetScripts(15, Scr_0x2545, Null)
SetDlgUpper(8-1-1, 0x00000000, false)
//张四：
//我没听错吧？
//这位姑娘也要去仙灵岛！
VideoUpdate(0, false)
SetDlgUpper(8-1-1, 0x00000000, false)
//张四：
//小姐！你也是去求仙丹的吗？
//仙灵岛可不是啥好玩的地方啊
//听说～岛上有吃人的妖怪哦！
VideoUpdate(0, false)
SetDlgLower(2-8-1, 0x00000000, false)
//赵灵儿：
//你乱讲！　才不是妖怪呢
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//四哥～　拜托拜托嘛．．
//眼前就只有您能帮我这个忙了
//现在没时间多作解释，总而言
//之，是人命关天的事就对了
SetDlgUpper(8-1-1, 0x00000000, false)
//张四：
//好吧．．既然是逍遥老弟拜托
//四哥我就帮到底啦～上船吧！
EventAnimate(3, 2)
VideoUpdate(0, false)
EventAnimate(3, 2)
VideoUpdate(0, false)
EventAnimate(3, 2)
VideoUpdate(0, false)
EventAnimate(3, 2)
VideoUpdate(0, false)
EventAnimate(0, 2)
VideoUpdate(0, false)
EventAnimate(0, 2)
VideoUpdate(0, false)
EventAnimate(0, 2)
VideoUpdate(0, false)
EventAnimate(0, 2)
VideoUpdate(0, false)
EventSetState(-1, -1, false, false)
EventSetState(5, 3, true, true)
EventSetAutoScript(5, 3, Null)
EventSetPos(5, 3, 1120, 1424)
VideoUpdate(0, false)
SetDlgUpper(8-1-1, 0x00000000, false)
//张四：
//我就好人做到底
//再跑这一趟吧！

[Scr_0x1BD6]
SetBattleMusic(38)
SetBattlefield(21)
BattleStart(19, Scr_0x9C9B, Null)
MusicPlay(30, true, 0.00)
BattleEnd()
PartySetRole(1)
EventSetState(3, 25, true, true)
EventSetPos(3, 25, 1184, 1696)
EventSetDirFrame(3, 25, 1, 0)
PartySetPos(36, 106, 0)
RoleSetDirFrame(0, 1, 0)
EventSetPos(3, 16, 1056, 1648)
EventSetPos(3, 15, 1088, 1664)
EventSetState(3, 17, false, false)
EventSetState(3, 18, false, false)
EventSetAutoScript(3, 16, Null)
EventSetDirFrame(3, 16, 3, 0)
EventSetState(3, 13, true, true)
EventSetPos(3, 13, 992, 1712)
EventSetPos(3, 14, 1072, 1672)
EventSetDirFrame(3, 13, 2, 0)
EventSetAutoScript(3, 13, Scr_0x1DBE)
WaitEventAutoScriptRun(22, false, false)
SetDlgLower(21-1-1, 0x00000000, false)
//李大娘：
//又怎麽啦！　发生什麽事了？
EventSetState(3, 16, false, false)
EventSetState(3, 15, true, true)
EventSetState(3, 13, false, false)
EventSetState(3, 14, true, true)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//苗人头领：
//不许动！
//不然我就要这老太婆的命
VideoUpdate(0, false)
PartyWalkToBlock(35, 105, 0, 4)
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//啊．．你！你卑鄙！！
//快放开我婶婶．．
VideoUpdate(0, false)
EventSetDirFrame(3, 14, 0, 1)
VideoUpdate(0, false)
PlaySound(92)
EventSetDirFrame(3, 15, 0, 1)
VideoUpdate(0, false)
EventSetDirFrame(3, 17, 0, 0)
EventSetDirFrame(3, 18, 0, 0)
EventSetDirFrame(3, 15, 0, 2)
EventModifyPos(3, 15, -16, -16)
VideoUpdate(0, false)
EventModifyPos(3, 15, -16, -16)
EventSetLayer(3, 15, 3)
VideoUpdate(0, false)
EventModifyPos(3, 15, -16, -8)
VideoUpdate(0, false)
EventModifyPos(3, 15, -16, -8)
VideoUpdate(0, false)
PlaySound(90)
WaitEventAutoScriptRun(2, false, false)
EventModifyPos(3, 15, 0, 2)
WaitEventAutoScriptRun(0, false, false)
EventModifyPos(3, 15, 0, 4)
VideoUpdate(0, false)
EventModifyPos(3, 15, 0, 8)
EventSetLayer(3, 15, 0)
VideoUpdate(0, false)
PlaySound(93)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(3, 14, 0, 2)
VideoUpdate(0, false)
SetDlgLower(21-1-1, 0x00000000, false)
//李大娘：
//谁是老太婆呀！你们这几个不
//长眼睛的混蛋先给我打听清楚
//老娘是何许人物？
VideoRestore()
//竟敢在我的店里撒野？要闹事
//就给我滚到别处去，小心老娘
//拆了你们的骨头拿去熬汤！
VideoRestore()
//喂．．黑脸的？　喂．．
EventSetState(3, 13, true, true)
EventSetState(3, 14, false, false)
EventSetDirFrame(3, 13, 1, 0)
EventSetAutoScript(3, 13, Scr_0x1C70)
WaitEventAutoScriptRun(15, false, false)
VideoUpdate(0, false)
SetDlgLower(21-1-1, 0x00000000, false)
//李大娘：
//糟糕～　一不小心用了穿云掌
//这胖子大概没救了．．
PartyWalkToBlock(34, 104, 0, 4)
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//哇．．婶婶！你好厉害喔．．
EventSetDirFrame(3, 13, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(21-1-1, 0x00000000, false)
//李大娘：
//这种三脚猫货色我才不放
//在眼里，想当年你婶婶我．．
//算了．．不提了。
//
//喂～　你高兴个什麽劲
//闹出人命啦！这下怎麽收拾？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//这班苗匪杀人越货、强掳弱女
//死有余辜！婶婶这是替天行道
SetDlgUpper(21-1-1, 0x00000000, false)
//李大娘：
//去你的．．
//日後官差问起来总是件麻烦事
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//那．．这位小姑娘怎麽办？
//她的一家人全遇难了
//咱们总不能不管她吧？
VideoUpdate(0, false)
SetDlgUpper(21-1-1, 0x00000000, false)
//李大娘：
//唉～　造孽．．．
//那就先让她在这里住下来吧
//你去楼上挑一间比较安静的
//房间，让她好好休息一下
//人家遇到这种惨事，心里一定
//很难过。你可要多多关照人家
//别让她想不开呀！
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//放心．．我知道
FadeOut(0)
EventModifyPos(3, 13, 0, 16)
EventSetTriggerScript(3, 13, Scr_0x1C7E)
EventSetTriggerMode(3, 13, true, 2)
EventSetState(1, 10, false, false)
EventSetTriggerScript(1, 9, Scr_0x1C94)
EventSetTriggerScript(1, 8, Scr_0x1C94)
EventSetTriggerScript(4, 1, Scr_0x1EC9)
EventSetTriggerScript(4, 9, Scr_0x1DF4)
EventSetState(3, 25, false, false)
EventSetState(3, 15, false, false)
EventSetState(1, 30, false, false)
EventSetState(1, 31, true, false)
SceneSetScripts(1, Scr_0x1C73, Null)
SceneEnter(1)
MusicPlay(24, true, 0.00)

[Scr_0x1C70]
NPCMoveToBlock(34, 104, 0, 3, false)
NPCMoveToBlock(33, 103, 0, 3, false)

[Scr_0x1C73]
PartySetPos(22, 20, 1)
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//她真的是累坏了．．
ReplaceAndPause()

[Event_00001_00031_Trigger]
SetDlgCenter(0, 0x00000000, false)
//赵灵儿睡着了．．

[Scr_0x1C7E]
SetDlgLower(21-1-1, 0x00000000, false)
//李大娘：
//小姑娘还好吧？
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//倒头便睡着了
//看来．．她一夜都未曾合过眼
VideoUpdate(0, false)
SetDlgLower(21-1-1, 0x00000000, false)
//李大娘：
//好吧．．这里没你的事了
//回房去吧．．
EventSetState(1, 31, false, false)
FadeOut(0)
FadeFBP(-1, 0)
FadeIn(65535)
//"　　　　　当夜．．"
FadeOut(0)
SceneEnter(1)
SceneSetScripts(1, Scr_0x1C9F, Null)
EventSetState(-1, -1, false, false)

[Scr_0x1C94]
SetDlgCenter(0, 0x00000000, false)
//"密道坏了．．"
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//啊．．一定是上次跟苗人
//打架给打坏了
ReplaceAndPause()
SetDlgCenter(0, 0x00000000, false)
//"密道坏了．．"

[Scr_0x1C9F]
HeroSetSprite(0, 193, true)
PartySetPos(41, 15, 1)
RoleSetDirFrame(0, 0, 11)
SetTimeFilter(2)
WaitEventAutoScriptRun(10, false, false)
//"门外传来哭泣声．．"
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 0, 0)
PartySetPos(40, 16, 1)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//是谁呀？
EventSetState(3, 25, true, true)
EventSetDirFrame(3, 25, 0, 0)
EventSetTriggerMode(3, 25, true, 3)
EventSetTriggerScript(3, 25, Scr_0x1CB2)
EventSetPos(3, 25, 1616, 1528)
ReplaceAndPause()

[Scr_0x1CB2]
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(5, false, false)
PartyWalkToBlock(50, 95, 0, 2)
WaitEventAutoScriptRun(4, false, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//你怎麽了？
VideoUpdate(0, false)
SetDlgLower(2-5-1, 0x00000000, false)
//赵灵儿：
//逍遥哥哥．．我好怕．．
//我．．我又梦见姥姥被．．
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//是不是作了恶梦？
//别怕．．你在这里很安全
//我跟婶婶都会保护你的．．
VideoUpdate(0, false)
SetDlgLower(2-7-1, 0x00000000, false)
//赵灵儿：
//我要跟你一起睡．．
SetDlgUpper(1-10-1, 0x00000000, false)
//李逍遥：
//啥！？　一起．．．
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(1-10-1, 0x00000000, false)
//李逍遥：
//这．．不太妥吧！？
SetDlgLower(2-7-1, 0x00000000, false)
//赵灵儿：
//为什麽不行．．？
VideoUpdate(0, false)
SetDlgUpper(1-9-1, 0x00000000, false)
//李逍遥：
//我是很同情你，但．．这
//男女授受不亲．．你懂吧？
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(0, 0)
VideoUpdate(0, false)
SetDlgLower(2-5-1, 0x00000000, false)
//赵灵儿：
//你．．你是不是嫌弃我！
NPCSetDirFrame(3, 0)
VideoUpdate(0, false)
SetDlgLower(2-5-1, 0x00000000, false)
//赵灵儿：
//呜．．．
//逍遥哥哥也不要灵儿了吗？！
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(5, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(0, false, false)
SetDlgUpper(1-10-1, 0x00000000, false)
//李逍遥：
//我！？　这．．．
EventSetState(3, 13, true, true)
EventSetDirFrame(3, 13, 3, 0)
EventSetPos(3, 13, 1440, 1456)
EventSetAutoScript(3, 13, Scr_0x1D2F)
WaitEventAutoScriptRun(12, false, false)
SetDlgUpper(21-1-1, 0x00000000, false)
//李大娘：
//逍遥！　你欺负人家啦？
PartyWalkToBlock(49, 95, 1, 4)
PartyWalkToBlock(47, 93, 1, 4)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//我哪敢啊！？
EventSetAutoScript(3, 13, Scr_0x1D31)
WaitEventAutoScriptRun(10, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(10, false, false)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(3, false, false)
SetDlgUpper(21-1-1, 0x00000000, false)
//李大娘：
//别理那浑小子！
VideoUpdate(0, false)
SetDlgUpper(21-1-1, 0x00000000, false)
//李大娘：
//走．．到我房里来
//有什麽委屈就说给大娘听
//大娘替你作主！
EventSetAutoScript(3, 13, Scr_0x1D34)
WaitEventAutoScriptRun(0, false, false)
EventSetAutoScript(3, 25, Scr_0x1D37)
WaitEventAutoScriptRun(15, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 1, 0)
VideoFadeAndUpdate(65534)
FadeFBP(-1, 0)
FadeIn(65535)
//"　次日．．"
FadeOut(0)
SetTimeFilter(0)
EventSetState(2, 7, true, true)
EventSetState(2, 9, true, false)
EventSetState(2, 6, true, true)
RoleSetDirFrame(0, 0, 0)
PartySetPos(40, 16, 1)
SceneEnter(1)
MusicPlay(8, true, 0.00)

[Scr_0x1D2F]
NPCMoveToBlock(46, 92, 1, 3, false)

[Scr_0x1D31]
NPCMoveToBlock(47, 92, 0, 3, false)
NPCMoveToBlock(50, 95, 0, 3, false)

[Scr_0x1D34]
NPCMoveToBlock(43, 88, 0, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x1D37]
NPCMoveToBlock(43, 88, 0, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x1D3A]
NPCMoveToBlock(43, 46, 1, 2, true)
NPCSetDirFrame(3, 0)
EventSetState(2, 9, false, false)
ReplaceAndPause()
NPCSetDirFrame(2, 0)

[Event_00002_00007_Trigger]
EventSetTriggerMode(-1, -1, false, 2)
SetDlgLower(21-1-1, 0x00000000, false)
//李大娘：
//呵～　呵～　你这小子！
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//婶婶．．你干嘛笑得那麽诡异
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(4, false, false)
EventWalkOneStep(-1, -1, -8, -4)
VideoUpdate(0, false)
EventWalkOneStep(-1, -1, -8, -4)
VideoUpdate(0, false)
SetDlgLower(21-1-1, 0x00000000, false)
//李大娘：
//少跟老娘装傻！
//自己干了啥坏事还会不知？
SetDlgUpper(1-2-1, 0x00000000, false)
//李逍遥：
//我！？　．．．我又怎麽了？
VideoUpdate(0, false)
SetDlgLower(21-1-1, 0x00000000, false)
//李大娘：
//老娘决定了！！
//就让你带灵儿去苗疆找妈妈
VideoUpdate(0, false)
SetDlgUpper(1-4-1, 0x00000000, false)
//李逍遥：
//她都告诉您啦？
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(0, 0)
VideoUpdate(0, false)
NPCSetDirFrame(3, 0)
VideoUpdate(0, false)
SetDlgLower(21-1-1, 0x00000000, false)
//李大娘：
//嘿～　从小到大．．
//你有哪件事瞒得过你婶婶的？
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//到苗疆可是数千里之远喔！
//我要是去了，这一趟可不只是
//十天半个月的哦！
SetDlgLower(21-1-1, 0x00000000, false)
//李大娘：
//你这麽大了。再说．．你这个
//性．．也不可能在这乡下地方
//待的下去。年青人出去见见世
//面也未尝不好
VideoUpdate(0, false)
SetDlgUpper(1-3-1, 0x00000000, false)
//李逍遥：
//婶婶～　您终於了解我了！
VideoUpdate(0, false)
SetDlgLower(21-1-1, 0x00000000, false)
//李大娘：
//先别得意忘形．．这趟路呢
//你得给我办成一件事！
SetDlgUpper(1-3-1, 0x00000000, false)
//李逍遥：
//哈！别说一件、一百件也行！
VideoUpdate(0, false)
SetDlgLower(21-1-1, 0x00000000, false)
//李大娘：
//你见到赵夫人後．．就当面
//向她提亲．．说你想娶灵儿
//为妻。
SetDlgUpper(1-10-1, 0x00000000, false)
//李逍遥：
//　啥！？
VideoUpdate(0, false)
SetDlgLower(21-1-1, 0x00000000, false)
//李大娘：
//婚姻大事～父母之命！
//你的婚事当然由婶婶我作主
//灵儿呢．．如果她娘亲尚在
//人世，就该向人家当面禀明
VideoUpdate(0, false)
SetDlgUpper(1-10-1, 0x00000000, false)
//李逍遥：
//万一．．找不到呢？
SetDlgLower(21-1-1, 0x00000000, false)
//李大娘：
//要是找不到，你们直接抱
//个孙子回来也行
VideoUpdate(0, false)
SetDlgUpper(1-10-1, 0x00000000, false)
//李逍遥：
//哪有那麽快的．．
EventSetAutoScript(2, 7, Scr_0x1D3A)
WaitEventAutoScriptRun(25, false, false)
SetDlgLower(21-1-1, 0x00000000, false)
//李大娘：
//少罗唆．．这包袱拿着！
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//里面是什麽东西啊？
SetDlgLower(21-1-1, 0x00000000, false)
//李大娘：
//自己不会打开来看看
AddItem(220, 0)
EventSetTriggerScript(8, 3, Scr_0x1DED)
EventSetTriggerScript(4, 9, Scr_0x1DF9)
EventSetTriggerScript(4, 1, Scr_0x1DFE)
ReplaceAndPause()
SetDlgLower(21-1-1, 0x00000000, false)
//李大娘：
//去吧．．路上小心

[Event_00002_00006_Trigger]
SceneSetScripts(4, Scr_0x1F02, Null)
EventSetTriggerScript(5, 11, Scr_0x1ED4)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//咱们走吧．．！
SetDlgUpper(2-1-1, 0x00000000, false)
//赵灵儿：
//　嗯．．．
PartySetRole(12)
EventSetState(-1, -1, false, false)

[Scr_0x1DBE]
NPCMoveToBlock(33, 104, 1, 3, false)
ReplaceAndPause()
NPCSetDirFrame(3, 0)
ReplaceAndPause()
NPCSetDirFrame(2, 0)
ReplaceAndPause()
ReplaceAndPause()
NPCSetDirFrame(3, 0)

[Scr_0x1DC7]
SetDlgUpper(8-1-1, 0x00000000, false)
//张四：
//这麽个折腾下来，可真是累人
ReplaceAndPause()
//以後这种吃力不讨好的事可别
//再找我啦

[Scr_0x1DCE]
EventSetTriggerMode(-1, -1, false, 3)
SetDlgUpper(48-1-1, 0x00000000, false)
//王小虎：
//哈～是仙女姐姐！
//我是小虎子，您还记得我吗？
SetDlgLower(2-4-1, 0x00000000, false)
//赵灵儿：
//嗯～我当然记得．．
//小虎～你爹爹的病好了吧？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//咦～你们认识？
SetDlgUpper(48-1-1, 0x00000000, false)
//王小虎：
//　　对啊！
//我跟你说的仙女姐姐就是她
ReplaceAndPause()
SetDlgUpper(48-1-1, 0x00000000, false)
//王小虎：
//逍遥哥哥配仙女姐姐
//哈哈～天生一对！
ReplaceAndPause()
SetDlgUpper(0, 0x00000000, false)
//王小虎：
//你们要去哪？带我去好不好

[Scr_0x1DE9]
SetDlgUpper(18-1-1, 0x00000000, false)
//香兰：
//　啊．．你好

[Scr_0x1DED]
SetDlgLower(18-1-1, 0x00000000, false)
//香兰：
//李家哥哥．．
//听说．．你要远行吗？
ReplaceAndPause()
//要记得我喔．．

[Scr_0x1DF4]
SetDlgLower(5-2-1, 0x00000000, false)
//秀兰：
//逍遥哥哥，那个女孩子是谁？
//怎麽会住在你家？

[Scr_0x1DF9]
SetDlgLower(5-3-1, 0x00000000, false)
//秀兰：
//逍遥哥哥．．你不要走嘛～
//人家会想你呢．．

[Scr_0x1DFE]
EventSetTriggerMode(-1, -1, false, 2)
//王小虎：
//逍遥哥哥．．我要跟你去
ReplaceAndPause()
//呜～　逍遥哥哥都不理人家了
ReplaceAndPauseWithNop(Scr_0x1DFE, 0)

[Scr_0x1E05]
SetDlgUpper(5-2-1, 0x00000000, false)
//秀兰：
//逍遥哥哥～她是谁？
//怎麽会跟你在一起．．
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//她．．她是我远房的表妹
//到我家来玩几天
SetDlgUpper(5-2-1, 0x00000000, false)
//秀兰：
//少骗人了，你家什麽时候冒出
//个远房亲戚来？我怎麽不知道
ReplaceAndPause()
//喂～！
//你可不许打逍遥哥的主意

[Scr_0x1E16]
//旺财嫂：
//噢～这是那户人家的千金哪？
//外地来的吗？怎麽都没见过？
ReplaceAndPause()
//为谁洗衣～为谁忙．．

[Scr_0x1E1C]
//来福婶：
//呵呵～小李子．．不简单哦！

[Scr_0x1E1F]
//鱼嫂：
//这几天出入仙灵岛的人
//怎麽突然多了起来？

[Scr_0x1E23]
JumpIfNotAllRolesFullHP(Scr_0x1E2F)
//洪大夫：
//我说小李子呀～你老大不小了
//也该趁早讨个媳妇，安定下来
//别老是让你婶婶操心
VideoRestore()
//呵呵～我怎麽说教起来了
//你们是来抓药的吧？
//自己随便挑吧．．
VideoUpdate(0, false)
ShowBuyItemMenu(1)

[Scr_0x1E2F]
//洪大夫：
//你们俩怎麽受伤啦？
//听说你们打跑了一伙强盗
//呵～真是勇气可嘉！
RoleRevive(10, true)
RoleModifyHPMP(9999, true)
FadeOut(0)
VideoUpdate(0, false)
//洪大夫：
//以後有需要尽管来找我
//洪大叔最喜欢你们这样的年青人

[Event_00004_00037_Trigger]
//林木匠：
//啊～逍遥，你来的正好
//过来帮帮我吧．．
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//喔．．林师父，对不起啦
//我家里头还有事，帮不了您了
ReplaceAndPause()
//唉．．你们这些年青人真是的
//村子里的围篱破了这麽大一个
//洞也没人管，还得我这把老骨
//头动手来修
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//林师父的木工手艺是咱们这镇
//上最在行的，这种事只要您出
//马就搞定了
ReplaceAndPause()
//就会耍嘴皮子．．
ReplaceAndPause()
//去！去！
//不想帮忙就给我站一边去
//别老是在这儿碍手碍脚的

[Event_00012_00002_Trigger]
NPCSetFrame(0)
//曾伯：
//要买什麽就自个儿挑吧．．
VideoUpdate(0, false)
ShowBuyItemMenu(2)

[Event_00013_00002_Trigger]
//林木匠：
//材料不够，没把围篱补好
//改明儿再去进一些竹板
VideoUpdate(0, false)
//说来说去还不都是一些
//猴死囝仔，讲也讲不听
//常常爬墙跑到十里坡去
//捕蝉找鸟窝，给攀垮的
ReplaceAndPause()
//你要买啥？
VideoUpdate(0, false)
ShowBuyItemMenu(3)

[Event_00008_00007_Trigger]
//老王：
//哦～逍遥老弟．．
//你有没有看到我们家小虎子啊
ReplaceAndPause()
//这孩子又不知跑到哪里玩去了
//这麽晚了还不知道要回来
ReplaceAndPauseWithNop(Event_00008_00007_Trigger, 0)

[Scr_0x1E6E]
//老王：
//呵．．听说你跑到仙灵岛上去
//求仙药，救了你婶婶一命是吧
ReplaceAndPause()
//好～真是孝顺的好孩子啊．．
ReplaceAndPauseWithNop(Scr_0x1E6E, 0)

[Scr_0x1E75]
EventSetTriggerMode(-1, -1, false, 2)
SetDlgUpper(48-1-1, 0x00000000, false)
//王小虎：
//不好了～不好了，逍遥哥哥！
//有三个坏人拿着刀子，在村子
//里到处找你呢！他们看起来好
//凶喔．．
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//一定是那些死不成的家伙．．
//嘿～想找我报仇吗？他们现在
//人在哪里？
SetDlgUpper(48-1-1, 0x00000000, false)
//王小虎：
//他们找不到你，就在你家里等
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//啊．．我婶婶呢？
SetDlgUpper(48-1-1, 0x00000000, false)
//王小虎：
//李大娘出去买菜，还没回来。
VideoUpdate(0, false)
SetDlgUpper(5-3-1, 0x00000000, false)
//秀兰：
//李大哥．．你怎麽会惹上那些
//苗人呢？我好怕会闹出人命呢
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//哈哈．．我这是替天行道
//你不要担心，我现在武功高强
//没人打得过我的．．
ReplaceAndPause()
//逍遥哥哥加油！
ReplaceAndPause()
//打死那些坏蛋！

[Scr_0x1E9B]
SetDlgUpper(5-3-1, 0x00000000, false)
//秀兰：
//李大哥，你千万不要回家呀！
//有三个苗人就在你家里等你呢
//他们说：如果你不出现，他们
//就要把你家给拆了
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//啥！这样我不回去怎行？
VideoUpdate(0, false)
SetDlgUpper(5-3-1, 0x00000000, false)
//秀兰：
//你看．．要不要报官啊
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//不必～有我就行了
//那些人不过是我的手下败将
SetDlgUpper(5-3-1, 0x00000000, false)
//秀兰：
//可是．．对方人多呢．．
//要打架总要准备些家伙吧
ReplaceAndPause()
SetDlgUpper(5-3-1, 0x00000000, false)
//秀兰：
//渔港边打铁的曾大伯和林木匠
//家里有卖一些兵器，我想你多
//少先准备一下嘛．．
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//好啦～好啦，我知道．．
VideoUpdate(0, false)
SetDlgUpper(5-3-1, 0x00000000, false)
//秀兰：
//还有．．要不要先我替你去
//洪大夫家里买些伤药回来？
//万一．．万一．．
SetDlgLower(1-8-1, 0x00000000, false)
//李逍遥：
//啧．．你少触我霉头！
ReplaceAndPause()
SetDlgUpper(5-2-1, 0x00000000, false)
//秀兰：
//哼～人家担心你嘛．．

[Scr_0x1EC9]
EventSetTriggerMode(-1, -1, false, 2)
//王小虎：
//逍遥哥哥好厉害喔！
ReplaceAndPause()
//逍遥哥哥你当我师父好不好？
ReplaceAndPauseWithNop(Scr_0x1EC9, 0)

[Scr_0x1ED0]
SetDlgUpper(5-3-1, 0x00000000, false)
//秀兰：
//好可怕～你们会用法术．．

[Scr_0x1ED4]
//小李子，你终於想回来我的
//船上工作了吗！？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//不．．方老板，我们兄妹俩
//要出远门，能否搭您的便船？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//方老板：
//啧．．好吧。
//不过．．我这艘船只到苏州
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//也成！
FadeOut(0)
PartySetPos(39, 75, 0)
HeroSetSprite(0, 232, false)
RoleSetDirFrame(0, 0, 0)
PartySetRole(1)
EventSetTriggerMode(5, 12, true, 4)
EventSetState(-1, -1, false, false)
VideoUpdate(0, false)

[Event_00005_00012_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
RideNPCToPos(30, 66, 0, 2)
HeroSetSprite(0, 2, false)
PartySetRole(12)
PartySetPos(42, 105, 1)
SceneEnter(22)
FadeOut(0)

[Scr_0x1EF4]
//半夜三更的，菜市场早打烊了
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-8, 4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-8, 4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-8, 4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-8, 4, 0)
WaitEventAutoScriptRun(0, false, false)

[Scr_0x1F02]
RoleMoveOneStep(-8, 4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-8, 4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-8, 4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-8, 4, 0)
WaitEventAutoScriptRun(0, false, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//哇～　哈～　我自由了！
RoleModifyHPMP(9999, true)
ReplaceAndPause()

[Scene_00001_Enter]
MusicPlay(31, true, 0.00)
SetBattleMusic(37)
PartySetPos(41, 18, 0)
HeroSetSprite(0, 193, false)
RoleSetDirFrame(0, 0, 0)
PartySetRole(1)
VideoUpdate(0, false)

SetDlgUpper(21-1-1, 0x00000000, false)
//李大娘：
//李逍遥！你皮痒啊？
//敢说老娘是什麽鬼婆！
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//哎呦～疼啊！
VideoUpdate(0, false)
SetDlgUpper(21-1-1, 0x00000000, false)
//李大娘：
//又在作白日梦了！你也老大不
//小了，整天疯疯癫癫地，也不学
//学做正经事！
WaitEventAutoScriptRun(3, false, false)
RoleSetDirFrame(0, 0, 2)
VideoUpdate(0, false)
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgUpper(1-8-1, 0x00000000, false)
//李逍遥：
//婶婶～
//你不要每次叫人起床都拿锅
//呀、铲呀，乱敲一通的，会
//吓死人哪！
//咱们这木床又不牢靠，万一我
//给摔死了，咱们李家就绝後啦
VideoUpdate(0, false)
SetDlgLower(21-1-1, 0x00000000, false)
//李大娘：
//不这样叫得醒你吗？好歹你也
//跟林师傅学过几个月的木工，
//床不牢自己动手修一修不就好
//了？
//就只会削些木刀木剑的，成天
//学你爹舞刀弄剑，没个定性，
//有哪家姑娘愿意嫁给你喔．．
VideoUpdate(0, false)
SetDlgUpper(1-7-1, 0x00000000, false)
//李逍遥：
//那我爹怎麽会娶到我娘？
VideoUpdate(0, false)
SetDlgLower(21-1-1, 0x00000000, false)
//李大娘：
//啧！你娘也是跟你爹一个样儿
//嫁到咱们李家来，也不做针线
//女红，就只会跟着你爹疯．．
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//嘿．．大家都说～他们是江湖
//上人人羡慕的鸳鸯侠侣呢！
VideoUpdate(0, false)
SetDlgLower(21-1-1, 0x00000000, false)
//李大娘：
//是哦～侠侣？说要去行侠仗义
//丢下你这惹祸精，一去无回
VideoRestore()
//还不是我这老太婆省吃俭用的
//开了这麽一家小小的客栈，才
//把你拉拔到这麽大，结果养出
//这麽一个懒鬼！
VideoUpdate(0, false)
HeroSetSprite(0, 627, true)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgUpper(1-7-1, 0x00000000, false)
//李逍遥：
//谁说我是懒鬼啦？
RoleSetDirFrame(0, 0, 1)
VideoUpdate(0, false)
SetDlgUpper(1-9-1, 0x00000000, false)
//李逍遥：
//我将来要像我爹娘一样
//练成绝世武功，纵横四海、
//称霸江湖的一代大侠！
EventSetDirFrame(1, 12, 0, 1)
WaitEventAutoScriptRun(3, false, false)
PlaySound(98)
EventSetDirFrame(1, 12, 0, 2)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 0, 2)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(1, 12, 0, 3)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 0, 3)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(1, 12, 0, 0)
WaitEventAutoScriptRun(3, false, false)
SetDlgLower(21-1-1, 0x00000000, false)
//李大娘：
//少跟老娘鬼扯淡！
VideoRestore()
//你呀～游手好闲是出了名的
//要不是这回我忙不过来，才
//不指望你这懒鬼来帮忙呢！
EventSetState(1, 12, false, false)
EventSetState(1, 11, true, true)
WaitEventAutoScriptRun(8, false, false)
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgUpper(1-10-1, 0x00000000, false)
//李逍遥：
//一大早就有客人上门啦？
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(1, 11, 2, 0)
VideoUpdate(0, false)
SetDlgLower(21-1-1, 0x00000000, false)
//李大娘：
//是啊．．还不快过来帮忙！
WaitEventAutoScriptRun(12, false, false)
PartyWalkToBlock(41, 18, 1, 2)
PartyWalkToBlock(42, 18, 0, 2)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(1-8-1, 0x00000000, false)
//李逍遥：
//真没意思．．一大清早就要
//人家做这个又做那个的．．
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(2, false, false)
HeroSetSprite(0, 193, true)
RoleSetDirFrame(0, 0, 9)
VideoUpdate(0, false)
EventWalkOneStep(1, 9, 4, 2)
VideoUpdate(0, false)
EventWalkOneStep(1, 9, 4, 2)
VideoUpdate(0, false)
EventWalkOneStep(1, 9, 4, 2)
VideoUpdate(0, false)
EventWalkOneStep(1, 9, 4, 2)
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//嘿．．
//昨晚做好的密道正好派上用场
//这次就从这里溜出去吧．．
VideoUpdate(0, false)
SetDlgUpper(21-1-1, 0x00000000, false)
//李大娘：
//逍遥！还窝在房里干啥？
//快出来帮忙招呼客人
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(5, false, false)
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//喔！　．．我马上就去
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(10, false, false)
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(1-8-1, 0x00000000, false)
//啧～算了，晚上再用密道吧
//现在被发现就惨了
VideoUpdate(0, false)
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
HeroSetSprite(0, 193, true)
RoleSetDirFrame(0, 0, 9)
EventWalkOneStep(1, 9, -4, -2)
VideoUpdate(0, false)
EventWalkOneStep(1, 9, -4, -2)
VideoUpdate(0, false)
EventWalkOneStep(1, 9, -4, -2)
VideoUpdate(0, false)
EventWalkOneStep(1, 9, -4, -2)
WaitEventAutoScriptRun(3, false, false)
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 0)
ReplaceAndPause()

[Event_00003_00027_Trigger]
Call(Scr_0x0016, 3, 27)
Call(Scr_0x0016, 3, 28)

[Event_00003_00030_Trigger]
Call(Scr_0x0016, 3, 30)
Call(Scr_0x0016, 3, 31)

[Scr_0x1FD8]
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//喔．．我没带那麽多钱呢
[Scr_0x1FDC]
ReplaceAndPause()
[Event_00005_00014_Trigger]
//水果贩：
//来喔！这儿全都是今儿
//个刚摘下来的新鲜水果
//要不要来几个啊？
GotoWithSelect(Scr_0x1FDC)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//多少钱一斤？
SetDlgUpper(0, 0x00000000, false)
//水果贩：
//老顾客了，算你一斤２５文钱
CashModify(-25, Scr_0x1FD8)
AddItem(32, 0)
SetDlgBox(0x00000000)
//获得"水果"

[Event_00005_00015_Trigger]
//卖菜老杨：
//小李子！你看看人家王家的
//小虎子，为了父亲的病远赴
//仙灵岛求仙丹，孝心可嘉啊！
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//这有啥了不起？要是我婶婶也
//遇到这种事，我也会去！
ReplaceAndPause()
//卖菜老杨：
//我常提醒老王说～上了年纪
//的人要多吃青菜、少沾油腻
//他不信。现在大病了一场，
//改吃起全素来了。

[Event_00005_00016_Trigger]
//卖酱老苏：
//真是奇怪了，怎麽最近这个酱
//的生意那麽难做呢？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//嗯．．我看看．．
VideoRestore()
//苏伯伯！　你这些酱
//有股酸味，恐怕是没腌好吧
//难怪会卖不出去
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//卖酱老苏：
//真的啊！　我怎麽闻不出来？
ReplaceAndPause()
//卖酱老苏：
//呜．．这些酱全都不能卖了

[Event_00005_00017_Trigger]
//猪肉张：
//小李子啊！你也老大不小了
//还不找份正经的活儿做做，
//整天吊儿啷当、无所事事地
//成何体统。
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//学你做杀猪、卖猪肉？
//我才不干．．！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//猪肉张：
//说这什麽话！？
//杀猪也是正当行业呢
ReplaceAndPause()
//猪肉张：
//卖猪肉喔～纯正的黑毛猪肉！

[Event_00005_00018_Trigger]
//卖包子：
//肉包、菜包、叉烧包、豆沙包
//、莲蓉包、大烧包应有尽有。
VideoRestore()
//小哥哥，要不要带几个回去
//给你婶婶吃啊？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//不用啦，我婶婶自己做的包子
//比你卖的还好吃
ReplaceAndPause()
//卖包子：
//肉包、菜包、叉烧包、豆沙包
//、莲蓉包、大烧包．．．

[Event_00005_00019_Trigger]
//妇人：
//嘿！小李子
//又跑出来闲逛啊？
//客栈里没事情做吗？

[Event_00005_00027_Trigger]
SceneEnter(9)
PartySetPos(19, 75, 0)
FadeOut(0)

[Event_00009_00002_Trigger]
SceneEnter(5)
PartySetPos(18, 106, 1)
FadeOut(0)

[Event_00010_00003_Trigger]
//居民：
//你也来买药吗？

[Event_00013_00003_Trigger]
//学徒：
//林师父出去修十里坡山下
//的围篱，很晚才会回来

[Scr_0x2048]
//学徒：
//做木匠是很辛苦的喔

[Event_00009_00003_Trigger]
//居民：
//啊～　请随便坐

[Event_00009_00004_Trigger]
//居民：
//我有一个故事你想要听吗？
GotoWithSelect(Scr_0x208E)
VideoUpdate(0, false)
//中年人：
//你相不相信老夫就是十多年前
//叱吒江南的名捕，人称铁臂神
//鹰的皇甫英？
GotoWithSelect(Scr_0x208E)
VideoUpdate(0, false)
//中年人：
//哈哈～好小子！
//终於有人相信我说的话了
VideoRestore()
//小伙子～不是老夫在吹牛
//十二年前，老夫曾亲手擒服四
//大恶人中的东江虎－游天霸、
//西淫鼠－司马无忧、北神偷－
//钱无通。这铁臂神英的封号
//就是当时的皇上亲口御封的
VideoRestore()
//唉．．可是．．
//老夫在追捕南盗侠李三思时
//却犯下这一生最大的错误．．
//使得老夫自此退隐江湖
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//哦！是什麽事情那麽严重？
VideoUpdate(0, false)
//中年人：
//说来就惭愧．．老夫不但数次
//败在南盗侠夫妇的手下，还欠
//下他们一份永远无法还的恩情
VideoRestore()
//老夫为了练烈鹰毒爪，长期用
//断肠草汁液浸泡十指，却因而
//毒入及腑脏而不自知
VideoRestore()
//直到当时老夫性命垂危之际
//李三思夫妇却不计前嫌，远
//赴苗疆，从苗人那里偷来一
//颗毒龙胆解了我的毒
//虽然．．我捡回一条命
//但一身武功也废了．．
VideoRestore()
//当我想到要报答他们夫妇时
//却听说盗侠夫妇已双双亡故
//年幼的儿子也不知所踪
VideoRestore()
//而且～据说盗侠夫妇是因为
//盗走苗人的圣物而被诅咒
//所以才会突然暴毙的
ReplaceAndPause()
//中年人：
//咦．．小伙子，我怎麽越看你
//越觉得～你跟南盗侠有几分神
//似哩！
ReplaceAndPause()
//中年人：
//呵．．怎麽可能嘛，不要放
//在心上，大概是我老眼昏花
//看错了。

[Scr_0x208E]
VideoUpdate(0, false)
//中年人：
//啧．．那就算了
ReplaceAndPauseWithNop(Event_00009_00004_Trigger, 0)

[Event_00007_00003_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
SetDlgLower(0, 0x00000000, false)
//白苗使者：
//请问一下．．
//往余杭县怎麽走？
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//往这方向一直走
//过了十里坡就到了．．
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//白苗使者：
//好．．谢谢
EventSetAutoScript(7, 4, Scr_0x20BA)
WaitEventAutoScriptRun(2, false, false)
EventSetAutoScript(7, 3, Scr_0x20BA)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(7, 3, 1, 0)
VideoUpdate(0, false)
EventSetDirFrame(7, 4, 0, 0)
SetDlgLower(0, 0x00000000, false)
//白苗使者：
//对了．．再请问一下
//城里头有客栈可以投宿吗？
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//只有一间，就是我家开的
//不过．．已经有客人包下了
//暂时不作别人的生意
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//白苗使者：
//啧．．好吧
//我们另外想办法
WaitEventAutoScriptRun(4, false, false)

[Scr_0x20BA]
NPCMoveToBlock(50, 62, 0, 2, true)
EventSetState(-1, -1, false, false)

[Event_00004_00002_Trigger]
//孩童唱道：
//小李子、志气高
//想学剑仙登云霄
//日上三竿不觉醒
//天天梦里乐陶陶。
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//你们三个小鬼
//竟敢编歌来笑我！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//孩童：
//呵呵！这是我哥教我的
//全村的孩童都会唱呢！
ReplaceAndPause()
//孩童唱道：
//吕洞宾，乘风飘
//肩背龙剑斩群妖
//悲心救苦传妙道
//至今万古姓名标。
//韩湘子，品玉箫
//志学修行家室抛
//雪拥蓝关难行马
//曾度文公上九霄。
ReplaceAndPause()
//孩童唱道：
//曹国舅，爱逍遥
//不恋荣华卸锦袍
//世上万般修行好
//手执云阳仙板敲。
//李铁拐，相咆哮
//黑脸浓眉腿又跷
//虔心修炼长生法
//挂拐登云蔼蔼飘。
ReplaceAndPause()
//孩童唱道：
//汉钟离，性儿矫
//识透人情事态枭
//终南山上修妙道
//列位仙班道行高。
//何仙姑，容貌娇
//懒伴红尘愿寂寥
//苦志真修千百载
//也归仙界乐逍遥。
ReplaceAndPause()
//孩童唱道：
//蓝采和，年纪小
//最爱修行却富饶
//名山修炼成真果
//使执棕篮驾海潮。
//张果老，年纪高
//须发苍苍两鬓萧
//到骑驴子呵呵笑
//竟把繁华世界抛。
ReplaceAndPause()
//孩童：
//嘻．．哈．．

[Event_00015_00002_Trigger]
PartySetPos(13, 104, 0)
SceneEnter(16)
FadeOut(0)

[Event_00016_00001_Trigger]
PartySetPos(18, 72, 0)
SceneEnter(17)
FadeOut(0)

[Scene_00015_Teleport]
PartySetPos(44, 30, 0)
SceneEnter(15)
FadeOut(0)

[Scene_00016_Teleport]
PartySetPos(56, 60, 0)
SceneEnter(16)
FadeOut(0)

[Event_00019_00002_Trigger]
PartySetPos(16, 95, 0)
SceneEnter(20)
FadeOut(0)

[Event_00020_00001_Trigger]
PartySetPos(32, 39, 0)
SceneEnter(19)
FadeOut(0)

[Event_00017_00010_Trigger]
RideNPCToPos(27, 53, 0, 4)
PartyWalkToBlock(26, 52, 1, 4)
ReplaceAndPause()
RideNPCToPos(29, 55, 1, 4)
PartyWalkToBlock(30, 56, 0, 4)
ReplaceAndPauseWithNop(Event_00017_00010_Trigger, 0)

[Event_00017_00011_Trigger]
RideNPCToPos(33, 45, 1, 4)
RideNPCToPos(22, 34, 0, 4)
PartyWalkToBlock(21, 33, 1, 4)
ReplaceAndPause()
RideNPCToPos(33, 45, 1, 4)
RideNPCToPos(27, 52, 0, 4)
PartyWalkToBlock(26, 52, 1, 4)
ReplaceAndPauseWithNop(Event_00017_00011_Trigger, 0)

[Event_00017_00012_Trigger]
RideNPCToPos(37, 63, 0, 4)
RideNPCToPos(48, 51, 1, 4)
PartyWalkToBlock(49, 51, 0, 4)
ReplaceAndPause()
RideNPCToPos(37, 63, 0, 4)
RideNPCToPos(34, 60, 0, 4)
PartyWalkToBlock(33, 59, 1, 4)
ReplaceAndPauseWithNop(Event_00017_00012_Trigger, 0)

[Event_00017_00013_Trigger]
RideNPCToPos(40, 41, 1, 4)
PartyWalkToBlock(40, 41, 0, 4)
ReplaceAndPause()
RideNPCToPos(48, 49, 0, 4)
PartyWalkToBlock(48, 49, 1, 4)
ReplaceAndPauseWithNop(Event_00017_00013_Trigger, 0)

[Event_00017_00014_Trigger]
RideNPCToPos(56, 45, 0, 4)
PartyWalkToBlock(56, 44, 1, 4)
ReplaceAndPause()
RideNPCToPos(51, 50, 0, 4)
PartyWalkToBlock(50, 50, 1, 4)
ReplaceAndPauseWithNop(Event_00017_00014_Trigger, 0)

[Event_00017_00015_Trigger]
RideNPCToPos(39, 51, 0, 4)
PartyWalkToBlock(39, 50, 1, 4)
ReplaceAndPause()
RideNPCToPos(35, 55, 0, 4)
PartyWalkToBlock(34, 55, 1, 4)
ReplaceAndPauseWithNop(Event_00017_00015_Trigger, 0)

[Event_00017_00016_Trigger]
RideNPCToPos(13, 42, 0, 4)
RideNPCToPos(16, 45, 0, 4)
PartyWalkToBlock(16, 45, 1, 4)
ReplaceAndPause()
RideNPCToPos(13, 42, 0, 4)
RideNPCToPos(21, 34, 0, 4)
PartyWalkToBlock(21, 33, 1, 4)
ReplaceAndPauseWithNop(Event_00017_00016_Trigger, 0)

[Event_00017_00017_Trigger]
RideNPCToPos(46, 57, 0, 4)
RideNPCToPos(38, 64, 1, 4)
RideNPCToPos(45, 71, 1, 4)
PartyWalkToBlock(46, 72, 0, 4)
ReplaceAndPause()
RideNPCToPos(38, 64, 1, 4)
RideNPCToPos(46, 57, 0, 4)
RideNPCToPos(40, 51, 1, 4)
PartyWalkToBlock(40, 51, 0, 4)
ReplaceAndPauseWithNop(Event_00017_00017_Trigger, 0)

[Event_00017_00018_Trigger]
RideNPCToPos(33, 78, 0, 4)
PartyWalkToBlock(32, 78, 1, 4)
ReplaceAndPause()
RideNPCToPos(45, 66, 0, 4)
PartyWalkToBlock(45, 65, 1, 4)
ReplaceAndPauseWithNop(Event_00017_00018_Trigger, 0)

[Event_00017_00019_Trigger]
RideNPCToPos(38, 56, 1, 4)
PartyWalkToBlock(38, 56, 0, 4)
ReplaceAndPause()
RideNPCToPos(44, 62, 1, 4)
PartyWalkToBlock(45, 63, 0, 4)
ReplaceAndPauseWithNop(Event_00017_00019_Trigger, 0)

[Event_00017_00020_Trigger]
RideNPCToPos(34, 52, 1, 4)
PartyWalkToBlock(34, 52, 0, 4)
ReplaceAndPause()
RideNPCToPos(37, 55, 0, 4)
PartyWalkToBlock(37, 55, 1, 4)
ReplaceAndPauseWithNop(Event_00017_00020_Trigger, 0)

[Event_00017_00021_Trigger]
RideNPCToPos(48, 45, 1, 4)
RideNPCToPos(29, 26, 0, 4)
PartyWalkToBlock(28, 25, 1, 4)
ReplaceAndPause()
RideNPCToPos(48, 45, 1, 4)
RideNPCToPos(39, 55, 0, 4)
PartyWalkToBlock(38, 55, 1, 4)
ReplaceAndPauseWithNop(Event_00017_00021_Trigger, 0)

[Event_00017_00022_Trigger]
RideNPCToPos(46, 40, 1, 4)
RideNPCToPos(42, 36, 0, 4)
PartyWalkToBlock(41, 35, 1, 4)
ReplaceAndPause()
RideNPCToPos(46, 40, 1, 4)
RideNPCToPos(38, 48, 1, 4)
PartyWalkToBlock(38, 49, 0, 4)
ReplaceAndPauseWithNop(Event_00017_00022_Trigger, 0)

[Event_00017_00023_Trigger]
RideNPCToPos(44, 33, 0, 4)
PartyWalkToBlock(44, 32, 1, 4)
ReplaceAndPause()
RideNPCToPos(42, 35, 0, 4)
PartyWalkToBlock(41, 35, 1, 4)
ReplaceAndPauseWithNop(Event_00017_00023_Trigger, 0)

[Event_00017_00024_Trigger]
RideNPCToPos(31, 48, 1, 4)
RideNPCToPos(17, 34, 1, 4)
PartyWalkToBlock(17, 34, 0, 4)
ReplaceAndPause()
RideNPCToPos(31, 48, 1, 4)
RideNPCToPos(34, 46, 0, 4)
PartyWalkToBlock(34, 45, 1, 4)
ReplaceAndPauseWithNop(Event_00017_00024_Trigger, 0)

[Event_00017_00025_Trigger]
RideNPCToPos(26, 28, 1, 4)
PartyWalkToBlock(26, 28, 0, 4)
ReplaceAndPause()
RideNPCToPos(35, 37, 1, 4)
PartyWalkToBlock(36, 38, 0, 4)
ReplaceAndPauseWithNop(Event_00017_00025_Trigger, 0)

[Event_00017_00026_Trigger]
RideNPCToPos(41, 37, 1, 4)
RideNPCToPos(43, 35, 1, 4)
RideNPCToPos(41, 33, 1, 4)
[Scr_0x2193]
RideNPCToPos(40, 35, 0, 4)
EventSetState(17, 27, false, false)
EventSetState(17, 27, false, false)
EventSetState(17, 28, true, true)
PartyWalkToBlock(40, 35, 1, 4)
ReplaceAndPause()
RideNPCToPos(34, 29, 1, 4)
PartyWalkToBlock(34, 29, 0, 4)
ReplaceAndPauseWithNop(Scr_0x2193, 0)

[Event_00017_00002_Trigger]
SetDlgBox(0x00000000)
//摘得一颗雪莲子
AddItem(48, 0)
ReplaceAndPause()
SetDlgBox(0x00000000)
//一朵空的莲蓬．．

[Scene_00016_Enter]
SetBattlefield(6)

[Scene_00018_Enter]
EventSetTriggerScript(16, 1, Scr_0x21AC)
EventSetTriggerScript(0, 0, Scr_0x21B0)
PlaySound(260)
FadeToScene(-1, 2)
ReplaceAndPause()

[Scr_0x21AC]
PartySetPos(18, 72, 0)
SceneEnter(18)
FadeOut(0)

[Scr_0x21B0]
PartySetPos(57, 32, 0)
SceneEnter(18)
FadeOut(0)

[Event_00017_00029_Trigger]
SceneEnter(18)

[Event_00020_00022_Trigger]
SetDlgLower(0, 0x00000000, false)
//哇．．好清澈的泉水
VideoUpdate(0, false)
Replace()
PlaySound(263)
RoleModifyHPMP(999, true)
SetDlgCenter(0, 0x00000000, false)
//"李逍遥饮下一口灵池中的泉水
//只觉得疲痨一扫而空精神饱满"

[Event_00019_00009_Trigger]
//墓碑上题字："恩师灵月之墓"

[Event_00019_00019_Trigger]
SetDlgUpper(2-5-1, 0x00000000, false)
//赵灵儿：
//姥姥～我．．都怪灵儿不好
//没有好好听您的话．．
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//好了．．别难过了
//我想你姥姥也不希望你一直
//这麽愁眉不展吧．．
ReplaceAndPause()
SetDlgUpper(2-7-1, 0x00000000, false)
//赵灵儿：
//姥姥～灵儿就此拜别，您在天
//有灵，保佑孩儿早日找到娘亲
ReplaceAndPause()
//墓碑上题字："姥姥姜氏之墓"

[Event_00015_00001_Trigger]
//张四哥：
//怎麽了，找到菩萨娘娘了吗？
ReplaceAndPause()
//张四哥：
//加油啊！我这有帖止血疗伤的
//药，你带着或许用的上
AddItem(40, 0)
ReplaceAndPause()
//张四哥：
//我看～咱们还是回去算了．．
//那些仙女啦～仙药啦，也许是
//村里那些三姑六婆捏造出来的
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//不！我绝不放弃．．

[Scr_0x21E4]
SetDlgUpper(8-1-1, 0x00000000, false)
//张四哥：
//哇～你这一去就是一天一夜
//我差点就以为你回不来了！
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//哈哈～福人自有福星照
//我这一趟有非凡奇遇呢！
SetDlgUpper(8-1-1, 0x00000000, false)
//张四哥：
//哦！　你真的见到仙女了吗？
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//嘿嘿．．可以说差不多啦！
//不过老妖婆也遇上了，还好
//灵药已经求到，咱们快回去吧
EventSetTriggerScript(2, 3, Scr_0x17B5)
EventSetTriggerScript(5, 13, Scr_0x1865)
EventSetTriggerScript(5, 9, Scr_0x1732)
EventSetTriggerScript(5, 2, Null)
EventSetTriggerMode(5, 2, false, 0)
EventSetState(2, 4, false, false)
EventSetState(10, 1, true, true)
EventSetState(2, 5, false, false)
EventSetState(3, 16, false, false)
EventSetState(1, 25, false, false)
EventSetState(5, 10, false, false)
EventSetState(5, 9, true, true)
EventSetPos(5, 2, 1184, 1424)
EventSetPos(5, 9, 1152, 1376)
EventSetState(5, 3, false, false)
PartySetPos(34, 84, 1)
SceneEnter(5)
FadeOut(0)
MusicPlay(8, true, 0.00)

[Event_00019_00004_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetDirFrame(0, 0)
VideoUpdate(0, false)
SetDlgLower(2-4-1, 0x00000000, false)
//少女：
//好极了，姥姥正好不在
//你跟我进去拿药吧。
NPCSetDirFrame(3, 0)
VideoUpdate(0, false)
NPCSetDirFrame(2, 0)
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//要．．去见观音娘娘吗？
NPCSetDirFrame(0, 0)
VideoUpdate(0, false)
SetDlgUpper(2-4-1, 0x00000000, false)
//少女：
//呵呵！才不是呢！想拿药还不
//快点，我姥姥最讨厌外人了，
//等她回来就拿不成了。
EventSetAutoScript(19, 4, Scr_0x2223)
WaitEventAutoScriptRun(14, false, false)
EventSetState(-1, -1, false, false)

[Scr_0x2223]
NPCMoveToBlock(37, 7, 0, 3, false)

[Event_00020_00002_Trigger]
VideoUpdate(0, false)
EventSetTriggerMode(-1, -1, false, 2)
EventSetTriggerScript(15, 1, Scr_0x21E4)
AddItem(213, 0)
SetDlgUpper(2-1-1, 0x00000000, false)
//赵灵儿：
//让你婶婶服下这颗"紫金丹"，再
//睡上几个时辰就会好起来的
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//仙女姊姊的大恩大德，我．．
//我真不知该如何报答。
VideoUpdate(0, false)
SetDlgUpper(2-4-1, 0x00000000, false)
//少女：
//嘻嘻嘻．．！
//你真的以为我是仙女？
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//难道．．你．．
//你是菩萨娘娘！！
SetDlgUpper(2-4-1, 0x00000000, false)
//少女：
//呵呵～怎麽可能嘛～
//我可是有名字的，不要一直
//仙女、菩萨的这样叫人家
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//那～姑娘的芳名是？
VideoUpdate(0, false)
SetDlgUpper(2-1-1, 0x00000000, false)
//少女：
//我叫赵灵儿～你呢？
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//敝姓李，名逍遥
VideoUpdate(0, false)
SetDlgUpper(2-4-1, 0x00000000, false)
//赵灵儿：
//刚才你好笨喔～　用一点
//小法术就把你吓得团团转
//喂．．你几岁啦？
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//我今年十九。
VideoUpdate(0, false)
SetDlgUpper(2-4-1, 0x00000000, false)
//赵灵儿：
//你还比我大三岁哩！
//那．．你应该比较知道
//外头有什麽新鲜好玩的？
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//啊．．这．．
VideoUpdate(0, false)
SetDlgUpper(2-7-1, 0x00000000, false)
//赵灵儿：
//说给我听嘛～人家已经不是
//小孩子了，姥姥还是不许我
//到外头去，每天在宫内修炼
//都快闷死了。
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//那．．下回有机会我再陪你到
//城里头逛逛庙会
SetDlgUpper(2-2-1, 0x00000000, false)
//赵灵儿：
//嘻！你可不能赖皮喔．．
//我们来打勾勾！
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//好！打勾勾，赖皮的是小狗
EventSetState(20, 8, true, true)
ReplaceAndPause()
SetDlgUpper(2-4-1, 0x00000000, false)
//赵灵儿：
//不许赖皮喔．．

[Event_00020_00008_Trigger]
MusicPlay(11, true, 0.00)
EventSetTriggerMode(-1, -1, false, 0)
NPCSetDirFrame(2, 0)
EventWalkOneStep(-1, -1, 8, -4)
VideoUpdate(0, false)
EventWalkOneStep(-1, -1, 8, -4)
PartySetPos(16, 94, 1)
RoleMoveOneStep(16, -8, 0)
VideoUpdate(0, false)
RoleMoveOneStep(16, -8, 0)
VideoUpdate(0, false)
SetDlgUpper(20-1-1, 0x00000000, false)
//小子！你怎麽进来的？
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//哇．．．我．．我．．。
EventSetDirFrame(20, 2, 0, 0)
EventSetPos(20, 2, 632, 1444)
VideoUpdate(0, false)
EventWalkOneStep(20, 2, -16, 8)
VideoUpdate(0, false)
EventWalkOneStep(20, 2, -16, 8)
VideoUpdate(0, false)
EventWalkOneStep(20, 2, -16, 8)
VideoUpdate(0, false)
EventWalkOneStep(20, 2, -16, 8)
VideoUpdate(0, false)
EventWalkOneStep(20, 2, -16, 8)
VideoUpdate(0, false)
EventWalkOneStep(20, 2, -16, 8)
VideoUpdate(0, false)
EventWalkOneStep(20, 2, -8, 4)
VideoUpdate(0, false)
EventWalkOneStep(20, 2, -8, 4)
EventSetDirFrame(20, 2, 3, 0)
VideoUpdate(0, false)
EventWalkOneStep(20, 2, 16, 8)
VideoUpdate(0, false)
EventSetDirFrame(20, 2, 0, 0)
VideoUpdate(0, false)
SetDlgLower(2-7-1, 0x00000000, false)
//姥姥～　不要为难他
//他不是坏人．．
VideoUpdate(0, false)
SetDlgUpper(20-1-1, 0x00000000, false)
//你怎麽知道他不是坏人？
//灵儿！我告诉你多少次了
//不可以让外人到岛上来
VideoUpdate(0, false)
SetDlgLower(2-1-1, 0x00000000, false)
//可是～师父说过，百善孝为先
//他为婶婶来此求药，他是好人
VideoUpdate(0, false)
SetDlgUpper(20-1-1, 0x00000000, false)
//外面的人心险恶，你一点也不
//知道，你师父生前将你托付给
//我，就是要我好好的保护你，
//万一你有任何闪失，你叫老身
//如何向你死去的师父和你爹娘
//交待？
VideoUpdate(0, false)
SetDlgLower(2-7-1, 0x00000000, false)
//可～可是．．他．．
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//老婆婆．．请你不要责怪她
//我马上离开这里就是了
SetDlgUpper(20-1-1, 0x00000000, false)
//离开？！
//水月宫岂能由你来去自如的！
PlaySound(212)
NPCSetFrame(12)
FadeToScene(-1, 0)
SetDlgUpper(20-1-1, 0x00000000, false)
//　哼、留你不得！！
VideoUpdate(0, false)
RoleMoveOneStep(8, -4, 0)
VideoUpdate(0, false)
RoleMoveOneStep(8, -4, 0)
WaitEventAutoScriptRun(3, false, false)
HeroSetSprite(0, 193, true)
RoleSetDirFrame(0, 0, 12)
VideoUpdate(0, false)
PlaySound(93)
//　哇～　　妖怪．．．
VideoUpdate(0, false)
EventModifyPos(20, 2, 16, -8)
VideoUpdate(0, false)
SetDlgLower(2-8-1, 0x00000000, false)
//　　　姥姥！　不要！！
SetDlgUpper(20-1-1, 0x00000000, false)
//这小子能通过岛上迷阵进到这
//里来，一旦放他回去，水月宫
//的所在不就全都曝露了！
VideoUpdate(0, false)
EventSetDirFrame(20, 2, 2, 0)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(20, 2, 3, 0)
VideoUpdate(0, false)
EventSetDirFrame(20, 2, 0, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(2-7-1, 0x00000000, false)
//是．．是人家带他进来的嘛～
VideoUpdate(0, false)
SetDlgLower(2-5-1, 0x00000000, false)
//姥姥～人家他是来求药医治
//亲人的病呢，您就放过他嘛～
SetDlgUpper(20-1-1, 0x00000000, false)
//三言两语就把你骗住了！？
VideoRestore()
//你是怎麽答应他的？
VideoUpdate(0, false)
SetDlgLower(2-7-1, 0x00000000, false)
//因为．．他．．把人家的～
WaitEventAutoScriptRun(5, false, false)
EventSetDirFrame(20, 2, 0, 13)
VideoUpdate(0, false)
MusicStop()
SetDlgLower(2-9-1, 0x00000000, false)
//人家的．．所以．．所以
//人家才．．才答应他嘛～
SetDlgUpper(20-1-1, 0x00000000, false)
//这小子对你做了什麽！？
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(20, 2, 3, 0)
WaitEventAutoScriptRun(6, false, false)
EventWalkOneStep(20, 2, 4, 2)
WaitEventAutoScriptRun(2, false, false)
EventWalkOneStep(20, 2, 4, 2)
WaitEventAutoScriptRun(0, false, false)
EventWalkOneStep(20, 2, 4, 2)
WaitEventAutoScriptRun(0, false, false)
EventWalkOneStep(20, 2, 4, 2)
WaitEventAutoScriptRun(0, false, false)
EventWalkOneStep(20, 2, 4, 2)
WaitEventAutoScriptRun(0, false, false)
EventWalkOneStep(20, 2, 4, 2)
WaitEventAutoScriptRun(0, false, false)
EventWalkOneStep(20, 2, 4, 2)
WaitEventAutoScriptRun(0, false, false)
EventWalkOneStep(20, 2, 4, 2)
WaitEventAutoScriptRun(5, false, false)
EventSetDirFrame(20, 2, 0, 13)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(20, 2, 0, 12)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(2-9-1, 0x00000000, false)
//今天人家在灵池沐浴时他．．
//他～　人家才答应．．说～
VideoUpdate(0, false)
SetDlgUpper(20-1-1, 0x00000000, false)
//混帐东西！！
NPCSetDirFrame(2, 0)
FadeToScene(-1, 2)
SetDlgUpper(20-1-1, 0x00000000, false)
//小子！　给我站起来！
VideoUpdate(0, false)
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
PlaySound(51)
SetDlgUpper(0, 0x00000000, false)
//　　　　啊～是！
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(5, false, false)
SetDlgUpper(20-1-1, 0x00000000, false)
//你好大的狗胆哪！
//竟敢欺负我宝贝的灵儿？
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//那．．纯属意外．．意外！
VideoUpdate(0, false)
SetDlgUpper(20-1-1, 0x00000000, false)
//我给你两条路选！一是娶灵儿
//为妻，永远不得离开仙灵岛。
//二是～留下一双手一条舌头让
//你永远无法说出水月宫的秘密
VideoUpdate(0, false)
RoleMoveOneStep(-16, 8, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-16, 8, 0)
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//那～　没第三条路了吗？
VideoUpdate(0, false)
NPCSetDirFrame(2, 0)
VideoUpdate(0, false)
SetDlgUpper(20-1-1, 0x00000000, false)
//要我现在就吃了你也行！
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//　我娶．．我娶！
MusicStop()
FadeOut(3)
MusicPlay(24, true, 0.00)
EventSetState(20, 2, false, false)
EventSetState(20, 3, true, false)
EventSetState(20, 4, true, false)
HeroSetSprite(0, 232, true)
RoleSetDirFrame(0, 0, 0)
PartySetPos(37, 71, 0)
VideoFadeAndUpdate(1)
SetDlgLower(1-7-1, 0x00000000, false)
//李逍遥：
//我一定得想办法逃出去．．
//你．．能不能帮我？
VideoUpdate(0, false)
SetDlgUpper(2-1-1, 0x00000000, false)
//那．．你还会不会再回来？
SetDlgLower(1-8-1, 0x00000000, false)
//李逍遥：
//开玩笑！？
//要是跟一只会吃人的老妖怪住
//在一起，有几条命也不够用！
VideoRestore()
//你呢？　你难道不会害怕吗？
//如果你肯，我可以带你一起走
VideoUpdate(0, false)
SetDlgUpper(2-1-1, 0x00000000, false)
//不会啦～那是姥姥吓你的！
//从小就是姥姥和师父把我带大
//的。姥姥虽然有时看起来很凶
VideoRestore()
//但是．．只要你跟她相处久了
//你会发现其实她对人很好
VideoUpdate(0, false)
SetDlgLower(1-8-1, 0x00000000, false)
//李逍遥：
//不不．．我若不把灵药带回去
//婶婶就活不成了
VideoRestore()
//况且～我还年轻
//要我一辈子永远呆在这鬼地方
//这一生不就玩完了？
VideoUpdate(0, false)
SetDlgUpper(2-5-1, 0x00000000, false)
//．．．．．．．．．
VideoRestore()
//明天．．是师父的忌辰
//一大早姥姥会到师父坟前上香
VideoRestore()
//趁那时候一口气跑到海边
//姥姥应该不会发现．．
VideoUpdate(0, false)
EventSetDirFrame(20, 4, 2, 0)
VideoUpdate(0, false)
EventSetDirFrame(20, 4, 1, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//真的！？　太好了！
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//谢谢～谢谢你！
EventSetState(20, 6, true, false)
EventSetState(20, 4, false, false)
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//大恩大德，我李逍遥永世不忘
WaitEventAutoScriptRun(10, false, false)
SetDlgUpper(2-5-1, 0x00000000, false)
//不忘．．．．！？
EventSetState(20, 6, false, false)
EventSetState(20, 4, true, false)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(20, 3, 0, 2)
WaitEventAutoScriptRun(10, false, false)
SetDlgUpper(0, 0x00000000, false)
//赵灵儿低头吟唱着：
//$08既不回头　何必不忘
//既然无缘　何须誓言
//今日种种　似水无痕
//明夕何夕　君已陌路．．．
WaitEventAutoScriptRun(4, false, false)
EventSetAutoScript(20, 3, Scr_0x250D)
WaitEventAutoScriptRun(24, false, false)
//$02"赵灵儿说着说着就哭了起来"
EventSetAutoScript(20, 4, Scr_0x272A)
WaitEventAutoScriptRun(10, false, false)
EventSetState(20, 4, false, false)
EventSetState(20, 5, true, false)
WaitEventAutoScriptRun(5, false, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//你不要这样嘛～　我．．
//我既然答应说要娶你
//就一定说话算话！
VideoRestore()
//等我婶婶病好了，我请她老人
//家作主，正式上门来提亲！
VideoUpdate(0, false)
EventSetDirFrame(20, 3, 0, 12)
WaitEventAutoScriptRun(6, false, false)
SetDlgUpper(2-9-1, 0x00000000, false)
//可当真．．？
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(20, 5, 0, 1)
EventSetDirFrame(20, 3, 0, 13)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//句句出自肺腑．．相信我
WaitEventAutoScriptRun(8, false, false)
EventSetState(20, 3, false, false)
EventSetDirFrame(20, 5, 0, 2)
WaitEventAutoScriptRun(15, false, false)
ToggleDayNight(true)
FadeOut(3)
FadeFBP(-1, 0)
EventSetState(20, 5, false, false)
EventSetState(20, 8, false, false)
EventSetState(19, 7, false, false)
EventSetStateSequence(20, 19, 20, 21, false, false)
EventSetStateSequence(19, 10, 19, 16, true, true)
EventSetState(5, 19, false, false)
EventSetDirFrame(20, 51, 0, 0)
EventSetAutoScript(20, 51, Null)
PartySetPos(36, 72, 0)
HeroSetSprite(0, 2, true)
EventSetState(20, 7, true, false)
SetDlgCenter(0, 0x00000000, false)
//"一夜过去．．"~40
SetTimeFilter(0)
FadeIn(0)
Delay(30)
RoleSetDirFrame(0, 0, 0)
FadeToScene(-1, 3)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(20, 7, 0, 1)
WaitEventAutoScriptRun(10, false, false)
SetDlgUpper(0, 0x00000000, false)
//逍遥哥哥．．．．~70
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(8, false, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//$07天亮了．．我必须走了。~60
FadeOut(3)
EventSetState(20, 7, false, false)
EventSetState(20, 2, true, true)
EventSetTriggerScript(20, 2, Scr_0x23E3)
EventSetPos(20, 2, 544, 1504)
EventSetDirFrame(20, 2, 0, 0)
PartySetPos(16, 94, 1)
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, true)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//$02灵儿～等我．．
//我一定会尽快回来接你
SetDlgUpper(2-1-1, 0x00000000, false)
//嗯～
VideoUpdate(0, false)
SetDlgUpper(2-1-1, 0x00000000, false)
//逍遥哥哥．．保重～

[Scr_0x23E3]
SetDlgUpper(2-5-1, 0x00000000, false)
//逍遥哥哥．．一路小心～
ReplaceAndPause()
SetDlgUpper(2-1-1, 0x00000000, false)
//快走吧．．姥姥一会就回来了

[Event_00017_00003_Trigger]
//观音像上刻着一行字：
//"苦海无涯　回头是岸"

[Event_00020_00009_Trigger]
EventSetTriggerMode(-1, -1, false, 2)
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
MusicPlay(75, true, 0.00)
SetDlgLower(2-3-1, 0x00000000, false)
//姥姥！！　姥姥．．
//您不能死．．不能死啊．．
WaitEventAutoScriptRun(8, false, false)
SetDlgUpper(0, 0x00000000, false)
//唉．．十年了．．终究躲不过
VideoUpdate(0, false)
//灵儿．．．姥姥．．
//不能再．．保护你了
VideoUpdate(0, false)
//以後．．你自己一个人．．
//千万要坚强．．
VideoUpdate(0, false)
SetDlgLower(2-3-1, 0x00000000, false)
//不要．．灵儿不要．．
//您要是死了，您叫灵儿怎麽办
WaitEventAutoScriptRun(8, false, false)
SetDlgUpper(42-1-1, 0x00000000, false)
//小伙子．．！
SetDlgLower(1-2-1, 0x00000000, false)
//唔～我！？
VideoUpdate(0, false)
SetDlgUpper(42-1-1, 0x00000000, false)
//我已经．．活不成了
//以後～　灵儿就托付给你了
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//给．．给我！？
VideoUpdate(0, false)
SetDlgUpper(42-1-1, 0x00000000, false)
//黑苗族的人不可能就此罢休
//十年来．．他们千方百计．．
//就是要找到灵儿
VideoRestore()
//以後．．你可要好好保护她
//不然我做鬼也不饶你！
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//好好．．我明白．．
//您安心的去吧
VideoUpdate(0, false)
//"李逍遥心想：惨啦．．"
//"这下子可惹个大麻烦上身了"
VideoUpdate(0, false)
SetDlgUpper(42-1-1, 0x00000000, false)
//还有．．你要带灵儿回故乡
//找到她的娘亲的下落
SetDlgLower(2-1-1, 0x00000000, false)
//娘还在人世！？
VideoUpdate(0, false)
SetDlgUpper(42-1-1, 0x00000000, false)
//嗯．．．．你师父生前曾回
//苗疆打听过夫人的下落．．
VideoRestore()
//後来打听到．．大理的白苗
//族有你娘的衣冠塚和石像，
//但从没有人见过夫人的遗体
VideoRestore()
//也许．．可能只是也许．．
//不管夫人是生是死．．至少
//这是你为人子女应尽的孝道
//也是老身最後的一桩心愿．．
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(20, 10, 0, 0)
VideoUpdate(0, false)
SetDlgLower(2-5-1, 0x00000000, false)
//是．．孩儿遵命．．
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//"说完．．姥姥便断气了．．"
WaitEventAutoScriptRun(5, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(5, false, false)
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//别难过了．．先把她们安葬吧
EventSetState(-1, -1, false, false)
EventSetState(20, 10, false, false)
EventSetState(20, 11, false, false)
EventSetStateSequence(20, 13, 20, 18, false, false)
EventSetTriggerScript(15, 1, Scr_0x24EE)
EventSetTriggerScript(5, 9, Scr_0x1DC7)
EventSetState(3, 13, false, false)
EventSetState(3, 16, true, true)
EventSetState(3, 17, true, true)
EventSetState(3, 18, true, true)
EventSetPos(3, 16, 1128, 1624)
EventSetPos(3, 17, 1184, 1616)
EventSetPos(3, 18, 1168, 1704)
EventSetDirFrame(3, 16, 0, 0)
EventSetDirFrame(3, 17, 0, 0)
EventSetDirFrame(3, 18, 1, 0)
EventSetTriggerScript(3, 16, Scr_0x1BD6)
EventSetTriggerScript(3, 17, Scr_0x1BD6)
EventSetTriggerScript(3, 18, Scr_0x1BD6)
EventSetTriggerScript(4, 9, Scr_0x1E9B)
EventSetPos(4, 9, 1376, 944)
EventSetDirFrame(4, 9, 0, 0)
EventSetAutoScript(4, 9, Null)
EventSetTriggerScript(4, 1, Scr_0x1E75)
EventSetPos(4, 1, 1360, 952)
EventSetAutoScript(4, 1, Event_00001_00026_Auto)
EventSetStateSequence(4, 10, 4, 18, false, false)
EventSetAutoScript(3, 16, Null)
EventSetAutoScript(3, 17, Event_00040_00003_Auto)
EventSetAutoScript(3, 18, Event_00040_00003_Auto)
EventSetTriggerMode(3, 16, true, 2)
EventSetTriggerMode(3, 17, true, 2)
EventSetTriggerMode(3, 18, true, 2)
SceneSetScripts(19, Scr_0x2469, Null)
FadeOut(0)
SceneEnter(19)

[Scr_0x2469]
MusicPlay(76, true, 0.00)
PartySetPos(44, 22, 0)
RoleSetDirFrame(0, 3, 0)
EventSetState(19, 17, true, false)
EventSetStateSequence(19, 18, 19, 45, true, true)
VideoUpdate(0, false)
SetDlgUpper(2-5-1, 0x00000000, false)
//姥姥、师父．．还有诸位师姑
//你们地下有知，保佑孩儿早日
//找到娘亲．．
VideoRestore()
//灵儿．．就此拜别．．
FadeOut(0)
PartySetPos(44, 23, 1)
PartySetRole(12)
RoleSetDirFrame(0, 2, 0)
RoleSetDirFrame(1, 3, 0)
EventSetState(19, 17, false, false)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//你．．以後有何打算？
SetDlgUpper(2-1-1, 0x00000000, false)
//当然是．．跟着你．．
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//好吧！
//事到如今，走一步算一步啦
//是福是祸到时候再说吧！
VideoRestore()
//反正．．你也没地方去了，不
//如先住在我家吧，反正我家是
//开客栈的，空房间多的是
ReplaceAndPause()

[Scr_0x248E]
EventWalkOneStep(-1, -1, 12, -6)
GotoWithNop(Scr_0x248E, 0)

[Event_00020_00012_Trigger]
EventSetState(-1, -1, false, false)
MusicPlay(33, true, 0.00)
EventSetState(20, 10, true, true)
PartySetRole(12)
RoleMoveOneStep(8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//天啊！好惨．．
RoleMoveOneStep(8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(8, -4, 0)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(5, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(4, false, false)
RoleMoveOneStep(-8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 1, 0)
RoleSetDirFrame(1, 1, 0)
WaitEventAutoScriptRun(0, false, false)
SetDlgCenter(0, 0x00000000, false)
//"二人环顾四周，只见水月宫内"
//"众人皆倒卧於血泊之中，显然"
//"全都遭到苗人的毒手"
RoleSetDirFrame(1, 2, 0)
VideoUpdate(0, false)
SetDlgLower(2-8-1, 0x00000000, false)
//．．姥姥！
PartySetRole(1)
EventSetDirFrame(20, 2, 2, 0)
EventSetState(20, 2, true, false)
EventSetPos(20, 2, 842, 1352)
EventSetAutoScript(20, 2, Scr_0x248E)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(12, false, false)

[Event_00020_00013_Trigger]
SetDlgCenter(0, 0x00000000, false)
//此人已死．．

[Event_00017_00004_Trigger]
VideoUpdate(0, false)
EventSetState(-1, -1, false, false)
PlaySound(262)
FadeToScene(-1, 2)
JumpIfEventStateMatches(17, 4, true, true, Null)
JumpIfEventStateMatches(17, 5, true, true, Null)
JumpIfEventStateMatches(17, 6, true, true, Null)
JumpIfEventStateMatches(17, 7, true, true, Null)
JumpIfEventStateMatches(17, 8, true, true, Null)
JumpIfEventStateMatches(17, 9, true, true, Null)
SetDlgCenter(0, 0x00000000, false)
//"第六具石像亦应声而碎
//然而破天鎚也断了"
RemoveItem(219, 1, Null)
EventSetState(17, 29, true, false)

[Scr_0x24E9]
SetDlgUpper(8-1-1, 0x00000000, false)
//快去办完这档事，早点回家吧
//这座岛阴阳怪气的，在这里多
//留一会，心里头总是毛毛的

[Scr_0x24EE]
SetDlgUpper(8-1-1, 0x00000000, false)
//回来啦！？　那就走人啦．．
EventSetPos(5, 2, 1184, 1424)
EventSetPos(5, 9, 1152, 1376)
EventSetState(5, 9, true, true)
EventSetTriggerMode(5, 2, false, 0)
EventSetTriggerScript(5, 2, Null)
PartySetPos(34, 84, 1)
SceneEnter(5)
FadeOut(0)
MusicPlay(49, true, 0.00)

[Event_00019_00007_Trigger]
//您是少宫主的朋友吗？
ReplaceAndPause()
//平常人是不容易进到水月宫来

[Event_00020_00019_Trigger]
//善哉．．善哉．．
//水月宫乃清修之地，不欢迎外
//人，施主取药後就请马上离开

[Event_00020_00020_Trigger]
//好久没见到少宫主这麽开心了
//少宫主自幼就在水月宫里长大
//从来都没有一个玩伴，也怪可
//怜的．．

[Event_00020_00021_Trigger]
//唉．．少宫主真是的
//怎麽可以让陌生人进来呢
ReplaceAndPause()
//唉唉．．天意．．
//水月宫近日必有凶劫

[Scr_0x250D]
NPCSetFrame(3)
ReplaceAndPause()
NPCSetFrame(4)
ReplaceAndPause()
NPCSetFrame(5)
ReplaceAndPause()
NPCSetFrame(6)
ReplaceAndPause()
NPCSetFrame(7)
ReplaceAndPause()
NPCSetFrame(8)
ReplaceAndPause()
NPCSetFrame(9)
ReplaceAndPause()
NPCSetFrame(10)
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
NPCSetFrame(11)

[Event_00019_00011_Trigger]
//今天是灵月宫主的祭日
//老夫人特地前来上香

[Event_00019_00010_Trigger]
//姥姥：
//唉～　阿玟．．
//灵儿～这个月就满十六了
//咱们两老盼了这久，总算是
//盼到了这一天呀．．
//只可惜．．你比老身先走一步
//看不到这丫头出嫁的模样了
VideoRestore()
//那个叫李逍遥的年青人．．
//看来．．跟灵儿十分有缘
//小俩口也很情投意合的样子
//老身就擅自作主，凑合她们了
//老身来日无多．．只盼日後～
//她们二人能平平安安过日子
//也不枉咱们这多年来的心血
ReplaceAndPause()
//"姥姥全神贯注的在祭拜"

[Scene_00015_Enter]
SetBattleMusic(37)
MusicPlay(70, true, 0.00)
RoleSetDirFrame(0, 0, 0)
PartySetPos(23, 50, 1)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//谢谢啦．．
SetDlgUpper(8-1-1, 0x00000000, false)
//张四哥：
//总算靠岸了。逍遥老弟，你可
//要早去早回啊，可千万别迷路
//我在这里看船，不陪你进去了
ReplaceAndPause()

[Scr_0x2545]
PartySetRole(21)
SetBattleMusic(37)
MusicPlay(70, true, 0.00)
ReplaceAndPause()

[Scene_00017_Enter]
MusicPlay(77, true, 0.00)

[Event_00020_00023_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//打开箱子，取得三张观音符
AddItem(1, 3)
ReplaceAndPause()
SetDlgBox(0x00000000)
//一个空箱子．．
ReplaceAndPause()
SetDlgBox(0x00000000)
//箱子底下发现一柄苗刀
AddItem(119, 0)
ReplaceAndPause()
SetDlgBox(0x00000000)
//箱子里什麽都没有

[Event_00017_00029_Auto]
NPCSetFrame(0)
ReplaceAndPause()
NPCSetFrame(1)
ReplaceAndPause()
NPCSetFrame(2)
ReplaceAndPause()
NPCSetFrame(3)
ReplaceAndPause()
NPCSetFrame(2)
ReplaceAndPause()
NPCSetFrame(1)
ReplaceAndPauseWithNop(Event_00017_00029_Auto, 0)

[Event_00017_00030_Trigger]
Call(Scr_0x0373, 0, 0)
VideoUpdate(0, false)
SetDlgBox(0x00000000)
//得到五张灵符
AddItem(7, 0)
AddItem(8, 0)
AddItem(9, 0)
AddItem(10, 0)
AddItem(11, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00014_00001_Trigger]
SceneEnter(18)
PartySetPos(57, 32, 0)
FadeOut(0)

[Scene_00018_Teleport]
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//仙．．灵．．洞天！？
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
Replace()
SceneEnter(14)
PartySetPos(9, 51, 1)
FadeOut(0)

[Event_00014_00002_Trigger]
SceneEnter(19)
PartySetPos(9, 68, 0)
FadeOut(0)

[Scene_00014_Teleport]
SceneEnter(14)
PartySetPos(56, 66, 1)
FadeOut(0)

[Event_00014_00007_Trigger]
SetDlgBox(0x00000000)
//一股力量将李逍遥挡了回来
RoleMoveOneStep(-32, 16, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-12, 6, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-4, 2, 0)
WaitEventAutoScriptRun(0, false, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//　？　？　？

[Event_00014_00008_Auto]
NPCSetFrame(0)
ReplaceAndPause()
NPCSetFrame(1)
ReplaceAndPause()
NPCSetFrame(2)
ReplaceAndPause()
NPCSetFrame(3)
ReplaceAndPause()
NPCSetFrame(4)
ReplaceAndPause()
NPCSetFrame(5)
ReplaceAndPause()
NPCSetFrame(6)
ReplaceAndPause()
NPCSetFrame(7)
ReplaceAndPauseWithNop(Event_00014_00008_Auto, 0)

[Scene_00014_Enter]
MusicPlay(77, true, 0.00)

[Event_00014_00003_Trigger]
SetDlgUpper(1-10-1, 0x00000000, false)
//咦？　怎麽会有女孩子的衣裳
MusicStop()
VideoUpdate(0, false)
SetDlgUpper(1-6-1, 0x00000000, false)
//难道．．．．
MusicPlay(61, false, 0.00)
ViewportMove(4, 2, 48)
WaitEventAutoScriptRun(10, false, false)
FadeOut(0)
HeroSetSprite(0, 361, true)
RoleSetDirFrame(0, 0, 0)
ViewportMove(0, 0, 0)
WaitEventAutoScriptRun(10, false, false)
//这种地方，如此貌美的姑娘
//．．莫非真的让我遇上了仙女
RoleSetDirFrame(0, 0, 1)
VideoUpdate(0, false)
//嘿．．　有了！
MusicPlay(65, true, 0.00)
FadeOut(0)
ViewportMove(192, 96, 0)
EventSetDirFrame(14, 8, 0, 0)
EventSetAutoScript(14, 8, Event_00014_00008_Auto)
WaitEventAutoScriptRun(16, false, false)
EventSetAutoScript(14, 8, Null)
VideoUpdate(0, false)
EventSetDirFrame(14, 8, 0, 8)
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//嗯～？
FadeOut(0)
EventSetState(-1, -1, false, false)
EventModifyPos(14, 8, -128, -64)
EventSetDirFrame(14, 8, 0, 10)
RoleSetDirFrame(0, 0, 4)
ViewportMove(0, 0, 0)
WaitEventAutoScriptRun(10, false, false)
EventSetDirFrame(14, 8, 0, 9)
PlaySound(194)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(14, 8, 0, 10)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(0, 0x00000000, false)
//少女：
//咦．．我的衣服呢？
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 0, 2)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 3)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 2)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 3)
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//你在找这东西吗？
EventSetDirFrame(14, 8, 0, 11)
PlaySound(275)
WaitEventAutoScriptRun(3, false, false)
EventSetDirFrame(14, 8, 0, 12)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(14, 8, 0, 13)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(14, 8, 0, 14)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(14, 8, 0, 15)
WaitEventAutoScriptRun(3, false, false)
SetDlgLower(0, 0x00000000, false)
//少女：
//．．你．．你是谁！？
EventSetDirFrame(14, 8, 0, 16)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 0, 2)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 3)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 2)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 3)
WaitEventAutoScriptRun(0, false, false)
SetDlgUpper(1-9-1, 0x00000000, false)
//我是谁你不用管。
//只要仙女姐姐赐给我一颗
//仙丹，我就把衣裳还给你。
EventSetDirFrame(14, 8, 0, 15)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//少女：
//仙丹．．？！
//那是我师父的遗物
//不可以随便给别人
VideoUpdate(0, false)
SetDlgUpper(1-9-1, 0x00000000, false)
//那～你就要光着身子回家罗！
EventSetDirFrame(14, 8, 0, 16)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//少女：
//好．．好嘛～　我答应你
//可是．．你先把衣服还我！
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(1-3-1, 0x00000000, false)
//真的！？
VideoUpdate(0, false)
EventSetDirFrame(14, 8, 0, 15)
VideoUpdate(0, false)
PlaySound(26)
SetDlgLower(0, 0x00000000, false)
//少女：
//啊～！！　不要看！
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgUpper(1-10-1, 0x00000000, false)
//是、我没看见！
EventSetDirFrame(14, 8, 0, 16)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//少女：
//你．．你把我的衣服放着
//走到五丈．．不！十丈外
//等我穿好衣服才可以回来
VideoRestore()
//不许回头看喔！
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//是的．．我走。你答应过的喔
//真的要给我仙丹
EventSetState(-1, -1, true, false)
VideoUpdate(0, false)
PartySetPos(34, 89, 0)
PartyWalkToBlock(21, 76, 0, 8)
WaitEventAutoScriptRun(10, false, false)
SetDlgUpper(0, 0x00000000, false)
//仙女姐姐！我可以回头了吗？
VideoRestore()
//仙女．．．．？
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
EventSetState(14, 8, false, false)
EventSetState(-1, -1, false, false)
EventSetState(14, 4, true, false)

[Event_00014_00004_Trigger]
EventSetState(-1, -1, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//咦？　．．人呢？
MusicStop()
EventSetState(14, 9, true, false)
EventSetAutoScript(14, 9, Event_00014_00009_Auto)
PlaySound(107)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-16, -8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-16, -8, 0)
WaitEventAutoScriptRun(10, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(5, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(0, false, false)
SetDlgLower(0, 0x00000000, false)
//怎麽～突然打起雷了？！~55
EventModifyPos(14, 9, -128, 16)
EventSetState(14, 9, true, false)
EventSetAutoScript(14, 9, Event_00014_00009_Auto)
PlaySound(107)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(16, -8, 0)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(0, false, false)
PartyWalkToBlock(35, 84, 1, 4)
EventSetPos(14, 9, 1152, 1344)
EventSetState(14, 9, true, false)
EventSetAutoScript(14, 9, Event_00014_00009_Auto)
PlaySound(107)
WaitEventAutoScriptRun(2, false, false)
RoleMoveOneStep(-16, 8, 0)
WaitEventAutoScriptRun(7, false, false)
PartyWalkToBlock(34, 86, 0, 4)
PartyWalkToBlock(33, 85, 0, 4)
EventSetPos(14, 9, 1072, 1378)
EventSetState(14, 9, true, false)
EventSetAutoScript(14, 9, Event_00014_00009_Auto)
PlaySound(107)
PartyWalkToBlock(32, 84, 0, 8)
EventSetPos(14, 9, 1030, 1350)
EventSetState(14, 9, true, false)
EventSetAutoScript(14, 9, Event_00014_00009_Auto)
PlaySound(107)
PartyWalkToBlock(31, 83, 0, 8)
PartyWalkToBlock(33, 81, 0, 8)
EventSetPos(14, 9, 1088, 1280)
EventSetState(14, 9, true, false)
EventSetAutoScript(14, 9, Event_00014_00009_Auto)
PlaySound(107)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-8, 4, 0)
WaitEventAutoScriptRun(3, false, false)
RoleMoveOneStep(8, -4, 0)
HeroSetSprite(0, 193, true)
RoleSetDirFrame(0, 0, 9)
WaitEventAutoScriptRun(5, false, false)
SetDlgLower(0, 0x00000000, false)
//哇．．这！？~30
EventSetPos(14, 9, 1072, 1270)
EventSetState(14, 9, true, false)
EventSetAutoScript(14, 9, Event_00014_00009_Auto)
PlaySound(107)
WaitEventAutoScriptRun(2, false, false)
RoleMoveOneStep(0, -2, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(0, 2, 0)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(3, false, false)
SetDlgUpper(0, 0x00000000, false)
//雷公饶命啊！下次不敢了！~40
WaitEventAutoScriptRun(6, false, false)
EventSetState(14, 10, true, true)
EventSetState(14, 11, true, false)
PlaySound(170)
WaitEventAutoScriptRun(32, false, false)
SetDlgUpper(2-6-1, 0x00000000, false)
//少女：
//你．．你好不要脸！
//怎麽可以．．可以．．。~40
VideoRestore()
//你到底是谁？　为何来此？
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//哗．．你果然是仙女！
VideoUpdate(0, false)
EventSetPos(14, 9, 1032, 1288)
EventSetState(14, 9, true, false)
EventSetAutoScript(14, 9, Event_00014_00009_Auto)
PlaySound(107)
WaitEventAutoScriptRun(4, false, false)
HeroSetSprite(0, 193, true)
RoleSetDirFrame(0, 0, 7)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(0, 0x00000000, false)
//　哇～仙女饶命！
VideoUpdate(0, false)
SetDlgUpper(2-8-1, 0x00000000, false)
//少女：
//从实招来！　不然．．
//不然．．我劈死你这淫贼！
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//不不不！　杀生不好
//杀了人会下地狱。仙女姐姐
//最温柔、最可爱、最心地善良
VideoRestore()
//要不是小的婶婶患了重病，命
//在旦夕，小的为了求仙丹灵药
//医治婶婶，才出此下策。
VideoRestore()
//只要仙女姐姐愿意大发慈悲
//救我婶婶一命，小的愿意一
//死，保全仙女姐姐的名节。
VideoUpdate(0, false)
SetDlgUpper(2-1-1, 0x00000000, false)
//少女：
//$06这麽说．．．
//你是为了救你的亲人？
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//$04是是．．小的听人说
//仙灵岛上大慈大悲的仙女，有
//起死回生的仙丹灵药，所以～
WaitEventAutoScriptRun(16, false, false)
EventSetAutoScript(14, 10, Scr_0x270D)
WaitEventAutoScriptRun(16, false, false)
MusicPlay(12, true, 3.00)
SetDlgUpper(2-1-1, 0x00000000, false)
//少女：
//$06你．．婶婶对你很好罗？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//$02犹如亲生爹娘！
SetDlgUpper(2-1-1, 0x00000000, false)
//少女：
//$06那．．你爹娘呢？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//$05我．．我从小就没有爹娘
//是婶婶一手把我带大的．．
EventSetState(14, 10, false, false)
EventSetState(14, 12, true, true)
WaitEventAutoScriptRun(8, false, false)
SetDlgUpper(2-1-1, 0x00000000, false)
//少女：
//$07原来．．你和我一样．．
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(14, 12, 2, 0)
WaitEventAutoScriptRun(5, false, false)
EventSetDirFrame(14, 12, 3, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgUpper(2-1-1, 0x00000000, false)
//少女：
//$02好吧．．．你跟我来～
EventSetAutoScript(14, 12, Scr_0x2715)
WaitEventAutoScriptRun(12, false, false)
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 2, 0)
EventSetState(14, 7, false, false)

[Event_00014_00009_Auto]
NPCSetFrame(0)
NPCSetFrame(1)
NPCSetFrame(2)
NPCSetFrame(3)
EventSetState(-1, -1, false, false)

[Event_00014_00011_Auto]
EventModifyPos(14, 10, 8, 4)
GotoWithNop(Event_00014_00011_Auto, 10)
EventModifyPos(14, 10, 4, 2)
EventModifyPos(14, 10, 4, 2)
EventModifyPos(14, 10, 2, 1)
EventModifyPos(14, 10, 2, 1)
EventModifyPos(14, 10, 2, 1)
EventModifyPos(14, 10, 2, 1)
EventSetState(-1, -1, false, false)

[Event_00014_00010_Auto]
NPCSetFrame(0)
NPCSetFrame(1)
NPCSetFrame(2)
NPCSetFrame(3)
GotoWithNop(Event_00014_00010_Auto, 0)

[Scr_0x270D]
NPCSetFrame(4)
NPCSetFrame(5)
NPCSetFrame(6)
NPCSetFrame(7)
NPCSetFrame(8)
NPCSetFrame(9)
NPCSetFrame(10)

[Scr_0x2715]
NPCMoveToBlock(36, 75, 0, 3, false)
NPCMoveToBlock(38, 73, 0, 8, false)
NPCMoveToBlock(41, 76, 0, 8, false)
NPCMoveToBlock(44, 73, 0, 8, false)
NPCMoveToBlock(47, 76, 0, 8, false)
NPCMoveToBlock(61, 62, 0, 8, false)
EventSetState(-1, -1, false, false)

[Event_00020_00004_Auto]
NPCMoveToBlock(38, 73, 0, 2, true)
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(37, 74, 0, 2, true)
NPCSetDirFrame(3, 0)
ReplaceAndPause()
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(37, 73, 1, 2, true)
ReplaceAndPause()
NPCSetDirFrame(3, 0)

[Scr_0x272A]
NPCMoveToBlock(36, 72, 1, 3, false)
WaitEventAutoScriptRun(2, false, false)
EventModifyPos(-1, -1, 4, -2)
NPCSetDirFrame(0, 0)

[Scene_00019_Enter]
EventSetState(14, 12, false, false)

[Event_00021_00008_Trigger]
SceneEnter(23)

[Event_00023_00037_Trigger]
SceneEnter(21)

[Event_00022_00002_Trigger]
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(2, false, false)
EventSetState(-1, -1, false, false)
EventSetState(22, 4, true, true)

[Event_00022_00004_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//这位大姐，他们俩犯了什麽错
//为什麽要这样打他们？
VideoUpdate(0, false)
SetDlgUpper(3-3-1, 0x00000000, false)
//林月如：
//这两人是咱们家的丫鬟和长工
//也不知道暗通款曲多久了，居
//然想要私奔！现在让我撞见了
//就该受罚！
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//既然他们两情相悦，何不做个
//顺水人情，做主撮合他们，不
//是美事一桩吗？何必苦苦相逼
VideoUpdate(0, false)
SetDlgUpper(3-2-1, 0x00000000, false)
//林月如：
//胆敢坏了我们家规矩
//岂能便宜了他们？
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//敢问小姐可有心上人？
SetDlgUpper(3-2-1, 0x00000000, false)
//林月如：
//没、没有．你这话什麽意思！
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//哈！这就是了，像姑娘这样的
//美人居然没有心上人？难怪、
//难怪会见不得别人双宿双飞
VideoUpdate(0, false)
SetDlgUpper(3-3-1, 0x00000000, false)
//林月如：
//你！狗嘴吐不出象牙！
//本小姐管教下人，干你何事？
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//下人也是人呐，像你这样打法
//会出人命的！
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//好！我就饶他们一命．．．。
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//　　姑娘果然是个明理人
//　　我来帮他们解开绳索
VideoUpdate(0, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(4, false, false)
RoleMoveOneStep(8, -4, 0)
VideoUpdate(0, false)
RoleMoveOneStep(8, -4, 0)
VideoUpdate(0, false)
SetDlgUpper(3-3-1, 0x00000000, false)
//林月如：
//　　　慢着！
EventAnimate(2, 2)
WaitEventAutoScriptRun(2, false, false)
EventAnimate(2, 2)
WaitEventAutoScriptRun(2, false, false)
EventAnimate(2, 2)
WaitEventAutoScriptRun(2, false, false)
EventAnimate(2, 2)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(3, 0)
VideoUpdate(0, false)
SetDlgUpper(3-2-1, 0x00000000, false)
//林月如：
//死罪可免，活罪难逃
//各砍断一只手，作为警惕！
VideoUpdate(0, false)
EventAnimate(2, 2)
VideoUpdate(0, false)
EventAnimate(2, 2)
VideoUpdate(0, false)
SetDlgLower(2-8-1, 0x00000000, false)
//赵灵儿：
//啊～不可以！
SetBattlefield(3)
BattleStart(21, Scr_0x2963, Null)
BattleEnd()
EventSetState(-1, -1, false, false)
EventSetState(22, 7, false, false)
EventSetState(22, 8, true, true)
EventSetState(22, 9, true, true)
EventSetState(22, 10, true, true)
PartySetPos(29, 64, 0)
RoleSetDirFrame(0, 2, 0)
RoleSetDirFrame(1, 2, 0)
VideoUpdate(0, false)
SetDlgUpper(3-3-1, 0x00000000, false)
//林月如：
//小贼！你想干什麽？
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//像你这种蛮横的人，不给你
//一点教训怎行？让你也尝尝
//被吊在树上的滋味！
VideoUpdate(0, false)
SetDlgUpper(3-3-1, 0x00000000, false)
//林月如：
//你！！快把我放了！不然我回
//去一定叫我爹派人把你们通通
//抓起来，打断你们的腿！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//银花：
//公子！您放了小姐吧！
//是奴婢对不起小姐，小姐只是
//在气头上，并不是真的要杀害
//我们
VideoUpdate(0, false)
SetDlgUpper(3-3-1, 0x00000000, false)
//林月如：
//银花！还不替我松绑！
//回头看我怎麽整治你这贱人
VideoUpdate(0, false)
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//不成不成！你们若是真心想在
//一起，就趁这个机会赶快走吧
//逃的越远越好！等你们走远了
//我自然会放了你家小姐
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//长贵：
//是．．多谢公子
VideoUpdate(0, false)
EventSetDirFrame(22, 8, 0, 0)
VideoUpdate(0, false)
EventSetDirFrame(22, 9, 2, 0)
VideoUpdate(0, false)
//长贵：
//银花！我们快走吧
EventSetAutoScript(22, 8, Scr_0x27EA)
EventSetAutoScript(22, 9, Scr_0x27EA)
RoleSetDirFrame(1, 3, 0)
WaitEventAutoScriptRun(16, false, false)
EventSetState(22, 8, false, false)
EventSetState(22, 9, false, false)
VideoUpdate(0, false)
SetDlgUpper(3-3-1, 0x00000000, false)
//林月如：
//狗男女！给我滚回来！
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//灵儿咱们进城去吧！这苏州城
//可热闹了，我带你去瞧瞧新鲜
VideoUpdate(0, false)
RoleSetDirFrame(1, 2, 0)
VideoUpdate(0, false)
SetDlgUpper(2-1-1, 0x00000000, false)
//赵灵儿：
//留她一个人在这里，不妥吧？
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//现在就放了她，岂不是前功尽
//弃？等他们小俩口逃得够远了
//我们再回来放了这蛮千金
EventSetState(22, 11, true, false)

[Scr_0x27EA]
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
EventAnimate(3, 2)
[Scr_0x27EE]
EventWalkOneStep(-1, -1, 8, 4)
GotoWithNop(Scr_0x27EE, 0)

[Event_00022_00010_Trigger]
//小贼！快放了我！

[Scr_0x27F3]
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//怎麽了？是你在喊救命吗？
//是不是害怕了，想求饶？
VideoUpdate(0, false)
SetDlgUpper(3-5-1, 0x00000000, false)
//林月如：
//谁．．谁怕了！
//我随便喊喊，关你什麽事？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//这可是你自己说的
//这回我真的不管你罗．．
VideoUpdate(0, false)
SetDlgUpper(3-3-1, 0x00000000, false)
//林月如：
//你走啊，下次再让我遇到你
//我一定要你好看！
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//奉陪！谁怕谁！
EventSetTriggerScript(22, 11, Scr_0x283F)
ReplaceAndPause()
//哼！

[Event_00022_00011_Trigger]
EventSetTriggerScript(22, 10, Scr_0x27F3)
SetDlgBox(0x00000000)
//远远传来一声尖叫
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//"救命啊．．．救命啊！"
VideoUpdate(0, false)
RoleSetDirFrame(1, 3, 0)
VideoUpdate(0, false)
RoleSetDirFrame(1, 0, 0)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(1, 3, 0)
VideoUpdate(0, false)
RoleSetDirFrame(1, 2, 0)
VideoUpdate(0, false)
SetDlgUpper(2-8-1, 0x00000000, false)
//赵灵儿：
//逍遥哥！
//是刚才那位姑娘在喊救命！
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//别理她！八成是她在装模作样
//骗我们回去。
VideoUpdate(0, false)
Replace()
SetDlgUpper(2-1-1, 0x00000000, false)
//赵灵儿：
//可是．．我不放心呢
//我们还是回去看看吧
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//好吧！既然你这麽说．．
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
RoleSetDirFrame(1, 0, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-8, 4, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-8, 4, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-8, 4, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-8, 4, 0)
VideoUpdate(0, false)

[Scr_0x283F]
EventSetTriggerScript(22, 10, Scr_0x2875)
EventSetTriggerMode(22, 10, true, 3)
EventSetDirFrame(22, 10, 0, 5)
SetDlgBox(0x00000000)
//远远又传来一阵尖叫声
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//"呀！！不要哇！"
//"救命啊！救命啊．．"
VideoUpdate(0, false)
RoleSetDirFrame(1, 3, 0)
VideoUpdate(0, false)
RoleSetDirFrame(1, 0, 0)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(1, 3, 0)
VideoUpdate(0, false)
RoleSetDirFrame(1, 2, 0)
VideoUpdate(0, false)
SetDlgUpper(2-1-1, 0x00000000, false)
//赵灵儿：
//逍遥哥！她好像真的出事了！
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(1-7-1, 0x00000000, false)
//李逍遥：
//啧！又来了．．
//真是受不了那野丫头
VideoUpdate(0, false)
Replace()
SetDlgUpper(2-1-1, 0x00000000, false)
//赵灵儿：
//可是．．
//我觉得我们做得太过份了
//还是回去把她放了吧
SetDlgLower(1-8-1, 0x00000000, false)
//李逍遥：
//好啦！好啦！灵儿妹子
//听你的就是了
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
RoleSetDirFrame(1, 0, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-8, 4, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-8, 4, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-8, 4, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-8, 4, 0)
VideoUpdate(0, false)

[Scr_0x2875]
//住手！
EventSetState(22, 11, false, false)
BattleStart(22, Scr_0x9C9B, Null)
BattleEnd()
PartySetRole(1)
EventSetState(22, 10, false, false)
EventSetState(22, 6, true, false)
PartySetPos(27, 63, 0)
RoleSetDirFrame(0, 3, 0)
EventSetState(22, 4, false, false)
EventSetState(22, 3, true, false)
VideoUpdate(0, false)
SetDlgLower(2-1-1, 0x00000000, false)
//赵灵儿：
//你看吧！还好我们及时折回来
//不然可闯大祸了．．
VideoUpdate(0, false)
SetDlgUpper(1-2-1, 0x00000000, false)
//李逍遥：
//实在很抱歉，没想到害了姑娘
//受到这般惊吓。还好没有受伤
//要不要我送你回家？
WaitEventAutoScriptRun(2, false, false)
RoleMoveOneStep(8, 4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(8, 4, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(22, 3, 0, 0)
VideoUpdate(0, false)
SetDlgLower(3-3-1, 0x00000000, false)
//林月如：
//少假惺惺～　看剑！

[Event_00022_00003_Trigger]
VideoUpdate(0, false)
NPCSetDirFrame(0, 1)
VideoUpdate(0, false)
PlaySound(43)
HeroSetSprite(0, 228, true)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(0, 2)
WaitEventAutoScriptRun(3, false, false)
RoleSetDirFrame(0, 0, 1)
VideoUpdate(0, false)
NPCSetDirFrame(0, 3)
VideoUpdate(0, false)
EventSetState(22, 6, false, false)
RoleSetDirFrame(0, 0, 2)
VideoUpdate(0, false)
SetDlgUpper(2-8-1, 0x00000000, false)
//赵灵儿：
//逍遥哥哥！！
VideoUpdate(0, false)
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//你．．你怎麽不闪呀！
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 0, 3)
VideoUpdate(0, false)
SetDlgUpper(1-4-1, 0x00000000, false)
//李逍遥：
//小生无礼．．冒犯姑娘．．
//以致．．姑娘名节受损．．
//自当受你一剑．．以赎其罪
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//我．．我不是故意的．．
//都怪你．．是你太过份！
//我才．．我．．
EventSetState(-1, -1, false, false)
EventSetState(22, 4, true, false)
EventSetDirFrame(22, 4, 1, 0)
EventSetState(22, 5, true, false)
VideoUpdate(0, false)
PlaySound(14)
EventSetDirFrame(22, 4, 2, 0)
VideoUpdate(0, false)
EventSetAutoScript(22, 4, Scr_0x295E)
WaitEventAutoScriptRun(16, false, false)
EventSetState(22, 4, false, false)
RoleSetDirFrame(0, 0, 2)
WaitEventAutoScriptRun(4, false, false)
SetDlgUpper(0, 0x00000000, false)
//李逍遥：
//开什麽玩笑．．这一剑．．
//又快又突然。躲得掉才怪．．
RoleSetDirFrame(0, 0, 4)
VideoUpdate(0, false)
PlaySound(93)
SetDlgUpper(0, 0x00000000, false)
//赵灵儿：
//啊！逍遥哥哥，你不要死！
WaitEventAutoScriptRun(6, false, false)
//怎麽办．．怎麽办？！
//这样下去逍遥哥哥会死掉．．
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 0, 5)
VideoUpdate(0, false)
//我．．只有赌赌看了
WaitEventAutoScriptRun(5, false, false)
SetDlgCenter(0, 0x00000000, false)
//"灵儿念起咒文．．"~50
RoleSetDirFrame(0, 0, 6)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 5)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 0, 6)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 5)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 6)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 0, 5)
WaitEventAutoScriptRun(3, false, false)
RoleSetDirFrame(0, 0, 6)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 5)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 0, 6)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 5)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 6)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 5)
WaitEventAutoScriptRun(3, false, false)
RoleSetDirFrame(0, 0, 6)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 5)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 0, 6)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 7)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 0, 8)
WaitEventAutoScriptRun(5, false, false)
RoleSetDirFrame(0, 0, 9)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 10)
WaitEventAutoScriptRun(3, false, false)
PlaySound(263)
RoleSetDirFrame(0, 0, 11)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 0, 10)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 0, 9)
WaitEventAutoScriptRun(3, false, false)
RoleSetDirFrame(0, 0, 12)
WaitEventAutoScriptRun(10, false, false)
RoleSetDirFrame(0, 0, 13)
WaitEventAutoScriptRun(3, false, false)
RoleSetDirFrame(0, 0, 14)
WaitEventAutoScriptRun(3, false, false)
RoleSetDirFrame(0, 0, 15)
WaitEventAutoScriptRun(8, false, false)
SetDlgCenter(0, 0x00000000, false)
//"灵儿真气消耗过度，晕了过去"
FadeOut(3)
RoleSetDirFrame(0, 0, 16)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//"不知过了几个时辰"
//"俩人才转醒过来．．"
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//咦？我胸口的伤．．
//怎麽不痛了？
SetDlgUpper(2-7-1, 0x00000000, false)
//赵灵儿：
//你刚才昏死过去，我担心死了
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//哈哈！　我福大命大
//这点小伤死不了的
VideoUpdate(0, false)
SetDlgUpper(2-1-1, 0x00000000, false)
//赵灵儿：
//你还笑的出来！刚才那一剑刺
//中你的心脉，你差一点就没命
//了。
//
//我情急之下只好冒险一试
//师父教我背过的还魂咒，幸好
//上苍保佑，侥幸生效。
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//哎呀！我听说强行使用未练成
//的法术，很容易走火入魔的！
VideoRestore()
//这麽说．．
//你是拼了命才救了我的罗？
RoleSetDirFrame(0, 0, 17)
VideoUpdate(0, false)
SetDlgUpper(2-5-1, 0x00000000, false)
//赵灵儿：
//都怪我以前不好好学，要是我
//早一点练成这法术，姥姥．．
//姥姥就不会死了。
//
//现在要是你也死了．．
//我．．我怎麽办？
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//好了～别哭了，现在我不是没
//事了吗？
RoleSetDirFrame(0, 0, 18)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//你放心．．我李逍遥可以对天
//发誓，从今以後决不会让你一
//个人孤苦伶仃！
RoleSetDirFrame(0, 0, 19)
WaitEventAutoScriptRun(6, false, false)
SetDlgUpper(2-1-1, 0x00000000, false)
//赵灵儿：
//谢谢你．．逍遥哥哥
VideoUpdate(0, false)
HeroSetSprite(0, 2, false)
PartySetRole(12)
RoleSetDirFrame(0, 0, 0)
RoleAddMagic(2, 7)
RoleModifyHPMP(9999, true)

[Event_00022_00005_Trigger]
SetDlgBox(0x00000000)
//拾起地上的宝剑
AddItem(113, 0)
EventSetState(-1, -1, false, false)

[Scr_0x295E]
EventWalkOneStep(-1, -1, 3, -1)
EventWalkOneStep(-1, -1, 5, -3)
[Scr_0x2960]
EventWalkOneStep(-1, -1, 8, -4)
GotoWithNop(Scr_0x2960, 0)

[Scr_0x2963]
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//多管闲事．．活该！
GotoWithNop(Scr_0x9C9B, 0)

[Event_00022_00001_Trigger]
SceneEnter(21)
PartySetPos(14, 81, 0)
FadeOut(0)

[Event_00021_00009_Trigger]
SceneEnter(22)
PartySetPos(42, 24, 1)
FadeOut(0)

[Event_00023_00001_Trigger]
SceneEnter(32)
PartySetPos(43, 54, 0)
FadeOut(0)

[Scr_0x2974]
SceneEnter(33)
PartySetPos(43, 54, 0)
FadeOut(0)

[Event_00023_00017_Trigger]
//报名者甲：
//唉呦～别挤啦！

[Event_00023_00018_Trigger]
//报名者乙：
//喂～别插队！

[Event_00023_00019_Trigger]
//报名者丁：
//你也是来报名比武招亲的吗？
//听说参加的资格蛮苛的呢
ReplaceAndPause()
//不过～要是真的当上林家姑爷
//那可是一辈子的荣华富贵呀！
ReplaceAndPauseWithNop(Event_00023_00019_Trigger, 0)

[Event_00023_00026_Trigger]
//报名者戊：
//哇～这麽多人排队，什麽时候
//才轮到我呀，我已经在这站了
//三个时辰．．唉．．
ReplaceAndPause()
//喂～你哪里来的，排後面去！

[Event_00023_00027_Trigger]
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//这位大哥能否请问一下．．
//为何这里聚集了这麽多人？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//报名者丙：
//你不知道吗！比武招亲报名啊
//林堡主替他唯一的千金办这次
//的比武招亲，闻风而来的年青
//小伙子把林家大院给挤满了
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//这麽轰动！莫非～那林家小姐
//是位绝世美女？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//报名者丙：
//呵．．还好啦．．
//若是林家大小姐脾气稍为好一点
//也可以算是位大美人啦，只不过
//林家的财富更吸引人呢！
ReplaceAndPause()
//林堡主膝下就这麽一位独生女
//娶了她，将来就是林家堡的主
//人了．．

[Scr_0x29A9]
//．流氓乙

[Scr_0x29AB]
//．流氓甲

[Event_00023_00003_Trigger]
//算命仙：
//算命吗？

[Event_00023_00009_Trigger]
SetDlgUpper(0, 0x00000000, false)
//路人甲：
//嘿～你知道吗，听说啊．．
//这回林家办这场比武招亲哪
//肯定又是比不出个结果来
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//　　怎麽说？？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//路人甲：
//怎麽说！那林家大小姐自幼便
//承袭家传剑指双绝，十三岁起
//全苏州城就没一个男孩子打得
//过她
VideoRestore()
//更何况那林家千金眼高於顶
//咱们这城里公子哥们登门求
//亲的，也不下十几位啦
VideoRestore()
//哪一个不是连滚带爬的被她
//给轰了出来
ReplaceAndPause()
//路人甲：
//姑娘家呀～还是温柔点比较好
//岂码容易找到丈夫

[Event_00023_00010_Trigger]
//路人乙：
//这几天街坊都在谈论林家办
//比武招亲的事呢．．
ReplaceAndPause()
//路人乙：
//以前有个看相的居然说～
//林家小姐将来会出家当道姑呢
//林堡主一听，可紧张的不得了
//想尽办法要把女儿嫁出去
//其实说哪～
//林堡主这麽急着找女婿也不
//是办法，林大小姐看不上眼
//任谁也没辄！
ReplaceAndPauseWithNop(Event_00023_00010_Trigger, 0)

[Event_00023_00013_Trigger]
//民女乙：
//有事吗？

[Event_00023_00012_Trigger]
//民女甲：
//林家的千金小姐可风光了
//每次举办招亲的活动都有
//成百上千的人参加。
VideoUpdate(0, false)
//民女乙：
//就是说嘛！已经第五次了
//她的眼光未免也太高了吧？

[Event_00023_00014_Trigger]
//书生：
//要是我会武功，能去参加林家
//比武招亲的话，那该有多好。

[Event_00023_00007_Trigger]
//小孩：
//两斤猪肉、四两葱花????
SetDlgLower(2-1-1, 0x00000000, false)
//赵灵儿：
//小弟弟，你嘴里念念有词地
//在说些什麽啊？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//小孩：
//我娘叫我出来买东西，我要
//一直念着念着才记得住啊
//????哎唷！都是你啦！
//我已经忘记我要买什麽了
VideoUpdate(0, false)
SetDlgLower(2-1-1, 0x00000000, false)
//赵灵儿：
//对不起、真是对不起！
ReplaceAndPause()
//小孩：
//好像．．好像是．．
//四两猪肉、二斤葱花吧？

[Event_00023_00011_Trigger]
JumpIfHeroInParty(37, 10758)
[Scr_0x2A01]
Replace()
//杂货小贩：
//来喔～来喔～便宜卖喔！
ShowBuyItemMenu(7)

[Scr_0x2A06]
CashModify(-400, Scr_0x2A01)
//杂货小贩：
//来喔～来喔～便宜卖喔！
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//灵儿．．这银钗你戴起来
//一定很好看！　我买给你
SetDlgUpper(2-1-1, 0x00000000, false)
//可是．．好像很贵呢．．
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//话不能这麽说！
//女孩子就是要会打扮
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//老板！　我要这只银钗
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//杂货小贩：
//哦～　这位姑娘要戴的吗？
//公子．．您真有眼光！
VideoUpdate(0, false)
//原价４２０文钱，算你４００
//文钱就行啦！
AddItem(139, 0)
ReplaceAndPauseWithNop(Scr_0x2A01, 0)

[Event_00023_00004_Trigger]
//卖吃小贩：
//最近咱们这苏州城可热闹了
//上个月林家才办过绣球选亲
//这一回又搞个比武招亲，林
//家还真是有钱有闲呀！
//说起上回的绣球选亲可有趣了
//林家大小姐居然在绣球里装火
//药，把好几个有钱公子的眉毛
//给烧掉了，真是．．
VideoUpdate(0, false)
//啊．．我不该说这些的
Replace()
//俩位要买什麽吗？
ShowBuyItemMenu(4)

[Event_00023_00005_Trigger]
RemoveItem(16, 1, Scr_0x2A4A)
//小豆子：
//姊姊．．我肚子好饿
//你的糯米糕分给我吃好不好？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//赵灵儿：
//好．．给你，真的那麽饿啊？
ReplaceAndPause()
RemoveItem(20, 1, Scr_0x2A4A)
//小豆子：
//大哥哥．．我好想吃糖葫芦喔
SetDlgLower(0, 0x00000000, false)
//赵灵儿：
//还不够！？　好好．．给你
ReplaceAndPause()
RemoveItem(18, 1, Scr_0x2A4A)
//小豆子：
//大哥哥．．我还想吃茶叶蛋
SetDlgLower(0, 0x00000000, false)
//赵灵儿：
//　　还不够啊！？
ReplaceAndPause()
[Scr_0x2A4A]
//小豆子：
//　　肚子好饿．．

[Event_00023_00031_Trigger]
SceneEnter(25)
PartySetPos(30, 51, 0)
FadeOut(0)

[Event_00025_00003_Trigger]
//店小二：
//大爷，欢迎光临。住宿、
//休息、吃饭，要什麽请跟
//我们掌柜的说。

[Event_00025_00004_Trigger]
SetDlgUpper(0, 0x00000000, false)
//掌柜：
//呵～客倌是外地来的吗？
//想必你也是来参加林家大小姐
//的比武招亲大会吧．．
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//　　不是不是．．
//我们只是路过此地，想找个地
//方过夜，明天还要继续赶路
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//掌柜：
//这～很抱歉．．
//本店所有的客房都被林家出钱
//包下来了，给外地来报名参加
//比武招亲的人免费住宿
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//啊！真的连一间也没有？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//掌柜：
//是的．．真的很抱歉啊
//如果你有报名，那又另当别论
ReplaceAndPause()
//掌柜：
//呵～真的很抱歉．．

[Scr_0x2A73]
SetDlgUpper(0, 0x00000000, false)
//掌柜：
//住店的客人几乎都到林家堡
//去看比武招亲大会了

[Event_00025_00005_Trigger]
SetDlgLower(0, 0x00000000, false)
//客人甲：
//来来来，喝酒、喝酒
//这一次的比武招亲
//我是势在必得啊！
VideoUpdate(0, false)
//客人乙：
//少盖了，上次被那林家小姐一
//脚给踹了下来的是谁啊？！
VideoUpdate(0, false)
//客人丙：
//就是说嘛！吹大气儿还不会
//脸红，真有你的。

[Event_00025_00009_Trigger]
SetDlgLower(0, 0x00000000, false)
//客人丁：
//苏州城一到了这个时候
//还真够热闹的。
VideoUpdate(0, false)
//客人戊：
//可不是吗！
//大江南北各个武林高手
//齐聚一堂，不就是为了
//要得到林家小姐嘛！
VideoUpdate(0, false)
//客人丁：
//我看不见得．．来参加的人有
//一半以上可能是为了想要藉着
//林家堡堡主林天南在武林中的
//势力一步登天，或者是要得到
//林家的财产才是真的。

[Event_00025_00012_Trigger]
//客人：
//怎麽搞了半天，大爷我叫的
//酒菜还不来呢？不知道大爷
//我是彭门「五虎断门刀」的二
//当家彭霸天吗？
ReplaceAndPause()
//客人：
//呜．．铁打的汉子
//也经不起饿肚皮啊

[Event_00025_00011_Trigger]
//客人：
//我已经久仰林家小姐的名声
//希望明日能目睹她的庐山真
//面目。

[Event_00025_00013_Trigger]
//客人：
//我也是第一次来参加林家堡
//的招亲，希望能技压群雄，
//拔得头筹。

[Event_00025_00014_Trigger]
//赌客：
//呜～　怎麽办？把钱给赌光了
//没脸回去见家中妻小

[Event_00025_00015_Trigger]
SceneEnter(23)
PartySetPos(36, 52, 0)
FadeOut(0)

[Event_00025_00016_Trigger]
SceneEnter(28)
PartySetPos(31, 51, 1)
FadeOut(0)

[Event_00028_00001_Trigger]
SceneEnter(25)
PartySetPos(15, 44, 1)
FadeOut(0)

[Scr_0x2ABC]
//管家

[Event_00021_00001_Trigger]
//大宝：
//一、二、三??嗯??
ReplaceAndPause()
//大宝：
//五、六??八、十????

[Event_00021_00002_Trigger]
//二宝：
//马儿快跑、马儿快跑
//马儿不吃墙头草???

[Event_00028_00003_Trigger]
//赌场老板：
//欢迎呀！客倌，来玩几手吧！
//所谓「小赌可创业、大赌可兴
//家」的道理您有没有听过啊？

[Event_00028_00004_Trigger]
//赌客：
//小兄弟啊！我劝告你
//俗语说：「十赌九输」
//千万别沈迷赌博喔！

[Event_00028_00005_Trigger]
//赌客：
//奇怪了，怎麽今天运气这麽差

[Event_00028_00006_Trigger]
//赌客：
//小心！这家赌场好像会出老千
//要不然今天怎麽会输的那麽惨

[Event_00028_00007_Trigger]
//赌客：
//哈！哈！哈！
//今天我可捞回本了。

[Event_00028_00008_Trigger]
//赌客：
//完蛋了！连棺材本都赔了进
//去，这下子嗝屁了。

[Event_00028_00009_Trigger]
//赌客：
//小兄弟，快！
//跟着我下，准没错。

[Scr_0x2AE5]
//赌客：
//哎呀！为什麽我一押单就开双
//、押双就开单，这家赌场是不
//是作弊啊！

[Event_00028_00010_Trigger]
//赌客：
//下下下！
//下好离手，就要开啦！

[Event_00023_00032_Trigger]
SceneEnter(29)
PartySetPos(22, 39, 0)
FadeOut(0)

[Event_00029_00001_Trigger]
SceneEnter(23)
PartySetPos(22, 58, 1)
FadeOut(0)

[Event_00029_00002_Trigger]
//当铺老板：
//来当东西的是吧？
//闲话咱们就甭说了，把
//你要典当的东西拿出来！
VideoUpdate(0, false)
Replace()
ShowSellItemMenu()

[Event_00031_00002_Trigger]
//铁铺老板：
//小兄弟！是不是想要参加
//明儿个林家的比武招亲？
//赶紧挑一样称手的兵器吧！
VideoUpdate(0, false)
Replace()
ShowBuyItemMenu(6)

[Event_00030_00002_Trigger]
//药铺老板：
//客倌您好，
//想要抓些什麽药吗？
VideoUpdate(0, false)
Replace()
ShowBuyItemMenu(5)

[Event_00030_00001_Trigger]
SceneEnter(23)
PartySetPos(17, 53, 1)
FadeOut(0)

[Event_00031_00001_Trigger]
SceneEnter(23)
PartySetPos(43, 44, 0)
FadeOut(0)

[Event_00023_00033_Trigger]
SceneEnter(30)
PartySetPos(26, 41, 0)
FadeOut(0)

[Event_00023_00034_Trigger]
SceneEnter(31)
PartySetPos(26, 46, 0)
FadeOut(0)

[Event_00025_00017_Trigger]
SceneEnter(26)
PartySetPos(17, 67, 0)
FadeOut(0)

[Event_00025_00018_Trigger]
SceneEnter(26)
PartySetPos(44, 25, 0)
FadeOut(0)

[Event_00025_00019_Trigger]
SceneEnter(26)
PartySetPos(19, 30, 0)
FadeOut(0)

[Event_00025_00020_Trigger]
SceneEnter(27)
PartySetPos(45, 30, 0)
FadeOut(0)

[Event_00025_00021_Trigger]
SceneEnter(27)
PartySetPos(40, 35, 0)
FadeOut(0)

[Event_00025_00022_Trigger]
SceneEnter(27)
PartySetPos(35, 40, 0)
FadeOut(0)

[Event_00026_00001_Trigger]
SceneEnter(25)
PartySetPos(25, 29, 1)
FadeOut(0)

[Event_00026_00002_Trigger]
SceneEnter(25)
PartySetPos(30, 34, 1)
FadeOut(0)

[Event_00026_00003_Trigger]
SceneEnter(25)
PartySetPos(35, 39, 1)
FadeOut(0)

[Event_00027_00001_Trigger]
SceneEnter(25)
PartySetPos(23, 29, 1)
FadeOut(0)

[Event_00027_00002_Trigger]
SceneEnter(25)
PartySetPos(18, 34, 1)
FadeOut(0)

[Event_00027_00003_Trigger]
SceneEnter(25)
PartySetPos(13, 39, 1)
FadeOut(0)

[Event_00023_00035_Trigger]
SceneEnter(24)
PartySetPos(11, 28, 1)
FadeOut(0)

[Event_00023_00036_Trigger]
SceneEnter(24)
PartySetPos(38, 29, 1)
FadeOut(0)

[Event_00021_00006_Trigger]
SceneEnter(24)
PartySetPos(10, 67, 0)
FadeOut(0)

[Event_00021_00007_Trigger]
SceneEnter(24)
PartySetPos(37, 69, 1)
FadeOut(0)

[Event_00024_00001_Trigger]
SceneEnter(23)
PartySetPos(44, 19, 0)
FadeOut(0)

[Event_00024_00002_Trigger]
SceneEnter(23)
PartySetPos(50, 25, 0)
FadeOut(0)

[Event_00024_00003_Trigger]
SceneEnter(21)
PartySetPos(33, 90, 0)
FadeOut(0)

[Event_00024_00004_Trigger]
SceneEnter(21)
PartySetPos(40, 97, 0)
FadeOut(0)

[Event_00021_00003_Trigger]
//小宝：
//呜．．哥哥都不跟我玩

[Event_00021_00004_Trigger]
//员外：
//哎．．．．
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//老伯～　您为何唉声叹气呢？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//员外：
//我的宝贝女儿小玉，前些日子
//到城外河边游玩时人就不见了
//我派许多人去找一直找不到
VideoRestore()
//有人看到她是被妖怪给抓走的
//呜．．如果真是这样，我可能
//永远再也见不到小玉了．．
VideoUpdate(0, false)
SetDlgLower(2-1-1, 0x00000000, false)
//赵灵儿：
//老伯，这也很难说呀
//并非妖怪都是会害人的
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//员外：
//如果我女儿真的有什麽三长
//两短，只能怪她命不好
VideoRestore()
//我担心的是．．听说那妖怪
//是只生性淫恶的半人蛇妖
//要是．．要是．．叫她以後
//如何做人呐！
SetDlgLower(2-5-1, 0x00000000, false)
//赵灵儿：
//．．．．．．．
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//员外：
//对了．．这位姑娘
//你最好也要小心，那蛇妖所
//抓走的，都是像你这般年纪
//的女孩子
ReplaceAndPause()
//员外：
//呜．．我的女儿

[Event_00028_00002_Trigger]
MusicStop()
WaitEventAutoScriptRun(6, false, false)
//打死他！　踹死他！
//癞蛤蟆想吃天鹅肉
//自己撒泡尿去照照吧！
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//等等！　诸位有话好说
SetBattlefield(21)
BattleStart(23, Scr_0x9C9B, Null)
BattleEnd()
EventSetStateSequence(23, 16, 23, 30, false, false)
EventSetAutoScript(28, 2, Null)
EventSetDirFrame(28, 2, 0, 2)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//书生：
//哎呦．．得救了．．
EventSetState(-1, -1, false, false)
SceneSetScripts(26, Scr_0x2BB6, Null)
SceneEnter(26)
FadeOut(0)
MusicPlay(71, true, 0.00)

[Scr_0x2BB6]
EventSetState(26, 6, true, false)
EventSetState(26, 7, true, false)
EventSetState(26, 4, true, false)
EventSetState(26, 5, true, false)
PartySetPos(18, 25, 0)
HeroSetSprite(0, 236, false)
PartySetRole(1)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(6, false, false)
SetDlgLower(9-1-1, 0x00000000, false)
//刘晋元：
//李兄仗义相救，刘某不胜感激
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//这也没什麽啦！　倒是刘兄
//特地准备这麽一桌美酒佳肴
//我还觉得受之有愧呢
VideoUpdate(0, false)
SetDlgLower(9-1-1, 0x00000000, false)
//刘晋元：
//李兄您太客气了！在下想交您
//这朋友，不知李兄意下如何？
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//四海之内皆兄弟，有何不可？
VideoUpdate(0, false)
SetDlgLower(9-1-1, 0x00000000, false)
//刘晋元：
//好．．咱们乾！
FadeOut(2)
EventSetState(26, 6, false, false)
EventSetState(26, 8, true, false)
SetTimeFilter(2)
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//赵灵儿不胜酒力，睡着了
//李刘二人酒逢知己千杯少
//继续喝酒聊天，就这样过
//了一夜．．
FadeOut(0)
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 3, 0)
PartySetPos(18, 27, 1)
EventSetState(26, 7, false, false)
EventSetState(26, 10, true, true)
EventSetStateSequence(25, 5, 25, 14, false, false)
EventSetTriggerScript(25, 4, Scr_0x2A73)
EventSetTriggerScript(25, 9, Scr_0x2ED3)
EventSetTriggerScript(25, 10, Scr_0x2ED7)
EventSetState(23, 5, false, false)
EventSetState(23, 7, false, false)
EventSetState(23, 6, true, true)
EventSetState(23, 8, true, true)
EventSetState(23, 14, false, false)
EventSetState(23, 9, false, false)
EventSetState(23, 10, false, false)
SetTimeFilter(0)
VideoUpdate(0, false)
SetDlgLower(9-1-1, 0x00000000, false)
//刘晋元：
//李兄．．我有要事先行告辞了
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//　　後会有期．．
EventSetAutoScript(26, 10, Scr_0x2C57)
WaitEventAutoScriptRun(4, false, false)
PartyWalkToBlock(20, 29, 0, 2)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(10, false, false)
SetDlgUpper(9-1-1, 0x00000000, false)
//刘晋元：
//李兄，不必送了．．
WaitEventAutoScriptRun(8, false, false)
EventSetPos(23, 3, 1168, 808)
EventSetDirFrame(23, 3, 0, 0)
EventSetTriggerScript(23, 3, Scr_0x2C67)
EventSetAutoScript(23, 3, Null)
SceneSetScripts(23, Scr_0x2C0B, Null)
EventSetTriggerScript(25, 15, Scr_0x2C6A)
RoleModifyHPMP(9999, true)
EventSetState(0, 0, false, false)
ReplaceAndPause()

[Scr_0x2C0B]
MusicPlay(50, true, 0.00)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//算命仙：
//铁口直断．．不灵免钱
//二位要算命吗？
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(1, 2, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//不灵免钱！？　好～
//帮我算算我最近的运气如何？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//算命仙：
//．．．．．．嗯．．
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//算命仙：
//公子气色泛红，面带桃花
//准是走桃花运了！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//算命仙：
//女子为水，水载舟亦覆舟
//公子千万要谨慎～切记～切记
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//嘿！　我有桃花运？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//算命仙：
//这位姑娘要不要也算一算？
SetDlgLower(2-1-1, 0x00000000, false)
//好呀．．．！
WaitEventAutoScriptRun(6, false, false)
SetDlgUpper(0, 0x00000000, false)
//算命仙：
//嗯．．我来看看．．
VideoRestore()
//哦！　姑娘瑶光聚顶
//灵气逼人．．人世少见
//在朝必为帝后，在野亦为人杰
VideoRestore()
//但．．眉宇间隐含煞气
//恐怕．．近日必有劫难！
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//呸呸呸．．．鬼话连篇！
//灵儿我们走人了！
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
RoleMoveOneStep(8, 4, 0)
VideoUpdate(0, false)
RoleMoveOneStep(8, 4, 0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//算命仙：
//公子．．您还没给钱呢？！
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//你不是说不灵免钱吗？
EventSetAutoScript(23, 3, Scr_0x2CB8)
SetDlgUpper(0, 0x00000000, false)
//算命仙：
//唉～贫道说的都是真话
RoleSetDirFrame(0, 3, 0)
ReplaceAndPause()

[Scr_0x2C57]
NPCMoveToBlock(18, 30, 1, 2, true)
ReplaceAndPause()
NPCSetDirFrame(3, 0)
NPCSetDirFrame(2, 0)
ReplaceAndPause()
ReplaceAndPause()
NPCSetDirFrame(3, 0)
NPCSetDirFrame(0, 0)
NPCMoveToBlock(18, 31, 0, 2, true)
EventSetState(-1, -1, false, false)

[Event_00026_00004_Trigger]
SetDlgBox(0x00000000)
//满桌都是吃剩的酒菜

[Scene_00021_Enter]
MusicPlay(50, true, 0.00)

[Scr_0x2C67]
//算命仙：
//铁口直断．．

[Scr_0x2C6A]
SetDlgCenter(0, 0x00000000, false)
//留赵灵儿一个人在房间里
//你．．放心吗？
RoleMoveOneStep(-16, -8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-16, -8, 0)
WaitEventAutoScriptRun(0, false, false)

[Event_00026_00008_Trigger]
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//灵儿～该起床罗！
SetDlgUpper(0, 0x00000000, false)
//赵灵儿：
//唔～　人家还要睡嘛．．
WaitEventAutoScriptRun(8, false, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//太阳晒屁股罗～快起来快起来
//逍遥哥哥说好要带你逛苏州城
//你再赖床，我就不带你去罗！
EventSetState(-1, -1, false, false)
EventSetState(26, 9, true, false)
VideoUpdate(0, false)
SetDlgUpper(2-2-1, 0x00000000, false)
//赵灵儿：
//嘻～　人家要去！
EventSetState(26, 9, false, false)
PartySetRole(12)
EventSetTriggerScript(25, 15, Event_00025_00015_Trigger)

[Event_00023_00006_Trigger]
//小豆子：
//哗～里面好热闹喔，是林家的
//月如姐姐在比武招亲呢！

[Event_00023_00008_Trigger]
//小花：
//好像很好玩呢～我也想进去看

[Scene_00022_Enter]
MusicPlay(71, true, 0.00)
PartySetPos(34, 86, 1)
RoleSetDirFrame(0, 3, 0)
RoleSetDirFrame(1, 3, 0)
PartySetRole(12)
SetBattleMusic(37)
VideoUpdate(0, false)
//方老板：
//祝你们一路顺风，我只能送你
//们到这里了，前面不远就是苏
//州城。
ReplaceAndPause()
MusicPlay(71, true, 0.00)

[Event_00023_00003_Auto]
EventAnimate(0, 2)
ReplaceAndPause()
EventAnimate(0, 2)
ReplaceAndPause()
EventAnimate(0, 2)
ReplaceAndPause()
EventAnimate(0, 2)
ReplaceAndPause()
ReplaceAndPause()
EventAnimate(0, 2)
ReplaceAndPause()
ReplaceAndPause()
EventAnimate(0, 2)
ReplaceAndPause()
ReplaceAndPause()
EventAnimate(0, 2)
ReplaceAndPause()
ReplaceAndPause()
EventAnimate(0, 2)
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
NPCSetDirFrame(3, 0)
GotoWithProbability(50, Scr_0x2CB8)
[Scr_0x2CB6]
ReplaceAndPause()
GotoWithProbability(2, Scr_0x2CB6)
[Scr_0x2CB8]
EventAnimate(2, 2)
WaitEventAutoScriptRun(2, false, false)
EventAnimate(2, 2)
WaitEventAutoScriptRun(2, false, false)
EventAnimate(2, 2)
ReplaceAndPause()
EventAnimate(2, 2)
ReplaceAndPause()
EventAnimate(2, 2)
ReplaceAndPause()
EventAnimate(2, 2)
ReplaceAndPause()
EventAnimate(2, 2)
ReplaceAndPause()
EventAnimate(2, 2)
ReplaceAndPause()
EventAnimate(2, 2)
ReplaceAndPause()
EventAnimate(2, 2)
ReplaceAndPause()
EventAnimate(2, 2)
ReplaceAndPause()
EventAnimate(2, 2)
ReplaceAndPause()
NPCSetDirFrame(1, 0)
ReplaceAndPause()
EventAnimate(0, 2)
ReplaceAndPause()
EventAnimate(0, 2)
ReplaceAndPause()
EventAnimate(0, 2)
ReplaceAndPause()
EventAnimate(0, 2)
ReplaceAndPauseWithNop(Event_00023_00003_Auto, 0)

[Scr_0x2CDB]
ReplaceAndPause()
GotoWithProbability(4, Scr_0x2CDB)
NPCMoveToBlock(37, 53, 0, 2, true)
NPCMoveToBlock(33, 49, 1, 2, true)
NPCMoveToBlock(33, 50, 0, 2, true)
NPCMoveToBlock(35, 52, 0, 2, true)
ReplaceAndPause()
ReplaceAndPause()
[Scr_0x2CE3]
ReplaceAndPause()
GotoWithProbability(3, Scr_0x2CE3)
NPCMoveToBlock(37, 54, 0, 2, true)
NPCMoveToBlock(39, 51, 1, 2, true)
NPCMoveToBlock(41, 53, 1, 2, true)
WaitEventAutoScriptRun(9, false, false)
NPCMoveToBlock(47, 48, 0, 2, true)
NPCMoveToBlock(44, 45, 0, 2, true)
NPCMoveToBlock(41, 42, 0, 2, true)
WaitEventAutoScriptRun(3, false, false)
NPCMoveToBlock(41, 41, 1, 2, true)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(44, 44, 1, 2, true)
WaitEventAutoScriptRun(7, false, false)
NPCMoveToBlock(33, 56, 0, 2, true)
WaitEventAutoScriptRun(2, false, false)
NPCMoveToBlock(33, 56, 1, 2, true)
ReplaceAndPauseWithNop(Scr_0x2CDB, 0)

[Event_00025_00003_Auto]
ReplaceAndPause()
GotoWithProbability(10, Event_00025_00003_Auto)
NPCMoveToBlock(30, 35, 0, 2, true)
ReplaceAndPause()
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(7, false, false)
NPCMoveToBlock(25, 30, 1, 2, true)
NPCMoveToBlock(23, 32, 1, 2, true)
NPCMoveToBlock(25, 34, 0, 2, true)
ReplaceAndPause()
EventWalkOneStep(-1, -1, 5, 5)
ReplaceAndPause()
EventWalkOneStep(-1, -1, 3, 3)
ReplaceAndPause()
EventWalkOneStep(-1, -1, 5, 5)
ReplaceAndPause()
EventWalkOneStep(-1, -1, 3, 3)
ReplaceAndPause()
EventWalkOneStep(-1, -1, 5, 5)
ReplaceAndPause()
EventWalkOneStep(-1, -1, 3, 3)
ReplaceAndPause()
EventWalkOneStep(-1, -1, 5, 5)
ReplaceAndPause()
EventWalkOneStep(-1, -1, 3, 3)
ReplaceAndPause()
EventWalkOneStep(-1, -1, 5, 5)
ReplaceAndPause()
EventWalkOneStep(-1, -1, 3, 3)
ReplaceAndPause()
EventWalkOneStep(-1, -1, 5, 5)
ReplaceAndPause()
EventWalkOneStep(-1, -1, 3, 3)
ReplaceAndPause()
EventWalkOneStep(-1, -1, 5, 5)
ReplaceAndPause()
EventWalkOneStep(-1, -1, 3, 3)
ReplaceAndPause()
EventWalkOneStep(-1, -1, 5, 5)
ReplaceAndPause()
EventWalkOneStep(-1, -1, 3, 3)
ReplaceAndPause()
EventWalkOneStep(-1, -1, 5, 5)
ReplaceAndPause()
EventWalkOneStep(-1, -1, 3, 3)
ReplaceAndPause()
EventWalkOneStep(-1, -1, 5, 5)
ReplaceAndPause()
EventWalkOneStep(-1, -1, 3, 3)
ReplaceAndPause()
EventWalkOneStep(-1, -1, 5, 5)
ReplaceAndPause()
EventWalkOneStep(-1, -1, 3, 3)
ReplaceAndPause()
EventWalkOneStep(-1, -1, 5, 5)
EventWalkOneStep(-1, -1, 3, 3)
NPCMoveToBlock(30, 42, 0, 2, true)
NPCMoveToBlock(31, 40, 1, 2, true)
NPCMoveToBlock(34, 43, 0, 2, true)
NPCMoveToBlock(32, 44, 1, 2, true)
[Scr_0x2D32]
ReplaceAndPause()
GotoWithProbability(4, Scr_0x2D32)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(33, 45, 0, 2, true)
NPCMoveToBlock(34, 44, 0, 2, true)
NPCMoveToBlock(31, 41, 0, 2, true)
NPCMoveToBlock(27, 45, 0, 2, true)
NPCMoveToBlock(25, 43, 1, 2, true)
NPCMoveToBlock(22, 46, 1, 2, true)
NPCMoveToBlock(19, 43, 0, 2, true)
NPCMoveToBlock(16, 46, 0, 2, true)
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(3, false, false)
NPCMoveToBlock(19, 49, 1, 2, true)
NPCMoveToBlock(28, 40, 1, 2, true)
NPCMoveToBlock(28, 40, 0, 2, true)
NPCMoveToBlock(27, 39, 1, 2, true)
ReplaceAndPause()
EventWalkOneStep(-1, -1, -5, -5)
ReplaceAndPause()
EventWalkOneStep(-1, -1, -3, -3)
ReplaceAndPause()
EventWalkOneStep(-1, -1, -5, -5)
ReplaceAndPause()
EventWalkOneStep(-1, -1, -3, -3)
ReplaceAndPause()
EventWalkOneStep(-1, -1, -5, -5)
ReplaceAndPause()
EventWalkOneStep(-1, -1, -3, -3)
ReplaceAndPause()
EventWalkOneStep(-1, -1, -5, -5)
ReplaceAndPause()
EventWalkOneStep(-1, -1, -3, -3)
ReplaceAndPause()
EventWalkOneStep(-1, -1, -5, -5)
ReplaceAndPause()
EventWalkOneStep(-1, -1, -3, -3)
ReplaceAndPause()
EventWalkOneStep(-1, -1, -5, -5)
ReplaceAndPause()
EventWalkOneStep(-1, -1, -3, -3)
ReplaceAndPause()
EventWalkOneStep(-1, -1, -5, -5)
ReplaceAndPause()
EventWalkOneStep(-1, -1, -3, -3)
ReplaceAndPause()
EventWalkOneStep(-1, -1, -5, -5)
ReplaceAndPause()
EventWalkOneStep(-1, -1, -3, -3)
ReplaceAndPause()
EventWalkOneStep(-1, -1, -5, -5)
ReplaceAndPause()
EventWalkOneStep(-1, -1, -3, -3)
ReplaceAndPause()
EventWalkOneStep(-1, -1, -5, -5)
ReplaceAndPause()
EventWalkOneStep(-1, -1, -3, -3)
ReplaceAndPause()
EventWalkOneStep(-1, -1, -5, -5)
ReplaceAndPause()
EventWalkOneStep(-1, -1, -3, -3)
ReplaceAndPause()
EventWalkOneStep(-1, -1, -5, -5)
ReplaceAndPause()
EventWalkOneStep(-1, -1, -3, -3)
ReplaceAndPause()
NPCMoveToBlock(22, 31, 0, 2, true)
NPCMoveToBlock(14, 38, 1, 2, true)
WaitEventAutoScriptRun(6, false, false)
NPCMoveToBlock(15, 39, 0, 2, true)
WaitEventAutoScriptRun(12, false, false)
NPCMoveToBlock(21, 32, 1, 2, true)
NPCMoveToBlock(22, 33, 1, 2, true)
NPCMoveToBlock(25, 30, 1, 2, true)
NPCMoveToBlock(36, 41, 0, 2, true)
ReplaceAndPauseWithNop(Event_00025_00003_Auto, 0)

[Event_00027_00004_Trigger]
SetDlgBox(0x00000000)
//捡到一颗八仙石
AddItem(54, 0)
ReplaceAndPause()
SetDlgBox(0x00000000)
//一个空的木箱

[Event_00023_00007_Auto]
NPCMoveToBlock(37, 27, 0, 3, false)
NPCMoveToBlock(36, 27, 1, 2, true)
NPCMoveToBlock(45, 36, 0, 2, true)
NPCMoveToBlock(45, 35, 1, 2, true)
NPCMoveToBlock(51, 41, 0, 2, true)
NPCMoveToBlock(35, 56, 1, 2, true)
NPCMoveToBlock(34, 55, 0, 2, true)
[Scr_0x2D8D]
ReplaceAndPause()
GotoWithProbability(4, Scr_0x2D8D)
NPCMoveToBlock(35, 53, 1, 2, true)
NPCMoveToBlock(35, 53, 0, 2, true)
[Scr_0x2D91]
ReplaceAndPause()
GotoWithProbability(4, Scr_0x2D91)
NPCMoveToBlock(45, 42, 1, 2, true)
NPCMoveToBlock(43, 40, 0, 2, true)
NPCMoveToBlock(46, 38, 0, 2, true)
NPCMoveToBlock(31, 23, 1, 2, true)
NPCMoveToBlock(28, 27, 0, 2, true)
NPCMoveToBlock(32, 22, 1, 3, false)
ReplaceAndPauseWithNop(Event_00023_00007_Auto, 0)

[Event_00021_00004_Auto]
NPCMoveToBlock(39, 101, 1, 2, true)
WaitEventAutoScriptRun(8, false, false)
NPCMoveToBlock(41, 99, 1, 2, true)
NPCMoveToBlock(37, 95, 0, 2, true)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(39, 93, 0, 2, true)
NPCMoveToBlock(37, 94, 1, 2, true)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(25, 82, 0, 2, true)
NPCMoveToBlock(23, 83, 1, 2, true)
NPCMoveToBlock(32, 92, 0, 2, true)
NPCMoveToBlock(33, 91, 0, 2, true)
WaitEventAutoScriptRun(8, false, false)
NPCMoveToBlock(41, 99, 1, 2, true)
NPCMoveToBlock(42, 99, 0, 2, true)
ReplaceAndPauseWithNop(Event_00021_00004_Auto, 0)

[Event_00021_00005_Auto]
NPCMoveToBlock(25, 85, 0, 2, true)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(29, 89, 1, 2, true)
NPCMoveToBlock(22, 82, 1, 2, true)
NPCMoveToBlock(23, 82, 0, 2, true)
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(8, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(18, 77, 0, 2, true)
NPCMoveToBlock(12, 82, 1, 2, true)
WaitEventAutoScriptRun(8, false, false)
NPCMoveToBlock(13, 83, 0, 2, true)
NPCMoveToBlock(18, 78, 0, 2, true)
WaitEventAutoScriptRun(2, false, false)
NPCMoveToBlock(26, 86, 0, 2, true)
NPCMoveToBlock(28, 84, 0, 2, true)
WaitEventAutoScriptRun(3, false, false)
NPCMoveToBlock(27, 83, 0, 2, true)
WaitEventAutoScriptRun(5, false, false)
ReplaceAndPauseWithNop(Event_00021_00005_Auto, 0)

[Event_00022_00002_Auto]
WaitEventAutoScriptRun(7, false, false)
NPCSetFrame(1)
ReplaceAndPause()
NPCSetFrame(2)
EventSetDirFrame(22, 7, 0, 1)
NPCSetFrame(0)
WaitEventAutoScriptRun(3, false, false)
EventSetDirFrame(22, 7, 0, 0)
ReplaceAndPauseWithNop(Event_00022_00002_Auto, 0)

[Event_00022_00012_Auto]
EventModifyPos(-1, -1, 0, -1)
WaitEventAutoScriptRun(16, false, false)
EventModifyPos(-1, -1, 0, -1)
WaitEventAutoScriptRun(16, false, false)
GotoWithNop(Event_00022_00012_Auto, 0)

[Event_00026_00006_Auto]
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(1)
WaitEventAutoScriptRun(6, false, false)
NPCSetFrame(0)
WaitEventAutoScriptRun(7, false, false)
ReplaceAndPauseWithNop(Event_00026_00006_Auto, 0)

[Event_00028_00002_Auto]
NPCSetFrame(0)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(1)
ReplaceAndPause()
ReplaceAndPauseWithNop(Event_00028_00002_Auto, 0)

[Event_00022_00013_Auto]
NPCSetDirFrame(0, 0)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(3, false, false)
EventSetAutoScript(22, 12, Scr_0x2DE4)
[Scr_0x2DE4]
EventModifyPos(-1, -1, 2, 1)
GotoWithNop(Scr_0x2DE4, 140)
EventSetState(-1, -1, false, false)

[Event_00023_00038_Trigger]
EventSetTriggerMode(-1, -1, false, 3)
PlaySound(54)

[Event_00027_00010_Auto]
NPCMoveToBlock(31, 33, 1, 2, true)
ReplaceAndPause()
NPCSetDirFrame(0, 0)
ReplaceAndPause()
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(6, false, false)
NPCMoveToBlock(34, 36, 0, 2, true)
WaitEventAutoScriptRun(6, false, false)
NPCSetDirFrame(0, 0)
ReplaceAndPauseWithNop(Event_00027_00010_Auto, 0)

[Event_00027_00005_Trigger]
//书生：
//在下只是一介书生，又不
//懂得武术，怎敢觊觎林家
//的千金小姐呢？

[Event_00027_00006_Trigger]
//刘楚香：
//小生练的是「瞬息万变」的
//绝世轻功，要是打不过对方
//我可以用逃的啊！
VideoRestore()
//大丈夫能屈能伸嘛！

[Event_00027_00007_Trigger]
//拳师：
//看啥子？他奶奶个熊！
//再看当心俺一掌把你给劈了！

[Event_00027_00008_Trigger]
//护院：
//就见侬那骨瘦如柴、弱不
//禁风的样子，也知道侬绝
//不是咱家的对手。

[Event_00027_00009_Trigger]
//小厮：
//客官您别误会
//我只不过是一个打扫
//房间的小厮而已。

[Event_00027_00010_Trigger]
//铁面煞星：
//别吵我！我正在练功，警告
//你离我远一点，小心被我运
//劲发出的气功给震伤。

[Event_00027_00011_Trigger]
//剑客：
//比武招亲志在必得
//鱼跃龙门一步登天
//人人有希望，个个没把握

[Event_00026_00011_Trigger]
//赵海：
//我乃是太湖巨鲸帮少帮
//主─赵海，林天南的女儿
//我是要定了。
VideoRestore()
//你们别想跟我抢！

[Event_00026_00012_Trigger]
//宋元祺：
//吾乃岭南十三鹰排行老七的
//宋元祺，阁下八成也是来
//参加林家的比武招亲吧？
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//不是！不是！
//我们只是路过此地的人。

[Event_00031_00004_Trigger]
//顾客：
//你知道林家老头为什麽
//突然急着找女婿吗？
VideoRestore()
//还不是觉得自己老了、不行了
//可是偏偏他老婆只给林家留下
//一个女儿，所以他想赶快找一
//个武功高强的年轻人来继承林
//家堡，免得林家在武林上的声
//望没落了
ReplaceAndPause()
//顾客：
//挑个顺手的武器
//明天好赢得美娇娘啊

[Event_00031_00003_Trigger]
//居民：
//听说上个月啊．．西边的村子
//闹蛇妖，不但抢走许多财物
//还把张老头的孙女儿给掳走了
VideoRestore()
//他那孙女才十六岁，可怜那张
//老头年高七十了，爷孙俩一直
//相依为命。这下子张老头可难
//过了，街坊邻居一齐跑到林家
//哀求林堡主出面，林堡主便义
//不容辞，率十几位壮丁前去除
//妖救人，结果妖怪没见着，却
//折损七、八条人命。
//我看呐．．林家堡在武林上
//亦不过徒具虚名罢了
ReplaceAndPause()
//居民：
//不过林堡主的女儿却是强悍
//出了名的，小小年纪武功就
//很了得，一点也不像女孩子

[Event_00030_00003_Trigger]
//少女：
//我该怎麽办？娘身染重病、
//我又没钱配药，难道这真的
//就是穷人家的命吗？
SetDlgLower(2-1-1, 0x00000000, false)
//赵灵儿：
//逍遥哥哥～我们帮她好不好？
GotoWithSelect(Scr_0x2E66)
VideoUpdate(0, false)
CashModify(-100, Scr_0x2E6E)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//小妹妹来，这儿有一百文钱
//先拿去用，买了药後赶紧回
//家吧！
VideoUpdate(0, false)
Replace()
SetDlgUpper(0, 0x00000000, false)
//少女：
//谢谢、谢谢您的大恩大德。

[Scr_0x2E63]
//少女：
//唉．．为什麽我们家要这麽穷

[Scr_0x2E66]
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//我也是很同情她
//但是我们的盘缠也不多
//要省着用啊
ReplaceAndPauseWithNop(Scr_0x2E63, 0)

[Scr_0x2E6E]
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//好是好．．
//但是我们的钱也不够

[Event_00029_00003_Trigger]
//赌鬼：
//借我钱翻本好不好
GotoWithSelect(Scr_0x2E6E)
CashModify(-50, Null)
EventSetTriggerScript(30, 0, Scr_0x2E87)
EventSetAutoScript(-1, -1, Scr_0x2E7D)
VideoUpdate(0, false)
Replace()
//谢谢，我赢了钱一定还你

[Scr_0x2E7D]
NPCMoveToBlock(24, 40, 0, 8, false)
NPCMoveToBlock(22, 38, 1, 8, false)
NPCMoveToBlock(20, 40, 1, 8, false)
EventSetState(-1, -1, false, false)

[Event_00029_00004_Trigger]
//居民：
//别理那个赌鬼
//他把家产全睹光了，还不甘心
//见到人就借钱，还想翻本

[Scr_0x2E87]
//居民：
//唉．．你被骗了
//那赌鬼已已经不知道向多少
//人借过钱，从来没还过

[Event_00024_00005_Trigger]
//居民：
//咦，您是哪位？
//是不是要找咱们当家的
//他现在不在家喔！

[Event_00024_00008_Trigger]
//居民：
//菩萨保佑，保佑我女儿嫁到一
//户好人家，以後不愁吃不愁穿
//这样子我就心满意足了。

[Event_00024_00009_Trigger]
//少女：
//不要随便进来人家的房间呐！

[Event_00024_00006_Trigger]
//我在跟小狗狗玩

[Event_00024_00007_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
//小狗狗！　过来
EventSetAutoScript(24, 6, Scr_0x2EAE)
EventSetAutoScript(-1, -1, Scr_0x2EBB)

[Event_00024_00010_Trigger]
//居民：
//你们也来喝一杯吧！

[Event_00024_00011_Trigger]
//居民：
//这笔生意要是谈成
//我就发了

[Event_00024_00012_Trigger]
//夫：
//饭做好了没，老伴？我饿坏了

[Event_00024_00013_Trigger]
//妻：
//快好啦～就只会坐在那边
//催催催，也不帮忙。

[Scr_0x2EAE]
NPCMoveToBlock(15, 27, 0, 3, false)
NPCMoveToBlock(17, 29, 1, 3, false)
NPCMoveToBlock(20, 26, 1, 3, false)
NPCMoveToBlock(19, 28, 0, 3, false)
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(3, false, false)
NPCMoveToBlock(20, 26, 1, 3, false)
NPCMoveToBlock(18, 24, 0, 3, false)
NPCMoveToBlock(13, 29, 0, 3, false)
NPCMoveToBlock(12, 28, 1, 3, false)
NPCMoveToBlock(11, 30, 0, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x2EBB]
NPCMoveToBlock(18, 28, 1, 3, false)
NPCMoveToBlock(20, 26, 1, 3, false)
NPCMoveToBlock(18, 24, 1, 3, false)
NPCMoveToBlock(16, 26, 1, 3, false)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(17, 27, 1, 3, false)
WaitEventAutoScriptRun(6, false, false)
NPCMoveToBlock(15, 30, 0, 8, false)
NPCMoveToBlock(13, 28, 0, 8, false)
NPCMoveToBlock(10, 30, 1, 8, false)
EventSetState(-1, -1, false, false)

[Scr_0x2EC7]
ReplaceAndPause()
[Event_00023_00015_Trigger]
//买糖葫芦吗？
GotoWithSelect(Scr_0x2EC7)
CashModify(-20, Scr_0x2ECE)
AddItem(20, 0)
ReplaceAndPauseWithNop(Event_00023_00015_Trigger, 0)

[Scr_0x2ECE]
//小贩：
//先生．．一串２０文钱
//您的钱不够
ReplaceAndPauseWithNop(Event_00023_00015_Trigger, 0)

[Scr_0x2ED3]
//客人：
//所有人都已经到林家堡去了
//还不赶快去。

[Scr_0x2ED7]
//客人：
//是啊！比武招亲已经开始罗！

[Event_00021_00005_Trigger]
//少女：
//大家都说苏州出美女
//你们瞧～我算不算是美女啊
ReplaceAndPause()
//少女：
//哼～真没眼光

[Event_00021_00010_Trigger]
//来、来、来！
//要看精彩的表演赶紧来
ReplaceAndPause()
[Event_00021_00011_Trigger]
//我们兄弟游走大江南北
//靠的是真功夫、硬本事
//请大家多多捧场
ReplaceAndPause()
//呵～　啊～！

[Event_00021_00012_Trigger]
//观众：
//哎呦．．好可怕
ReplaceAndPause()
//观众：
//把剑吞下去，肚子不痛吗？
ReplaceAndPauseWithNop(Event_00021_00012_Trigger, 0)

[Event_00021_00013_Trigger]
//小孩：
//他真的把剑吞到肚子里面吗？
ReplaceAndPause()
//小孩：
//好像是真的呢

[Event_00021_00014_Trigger]
//观众：
//老把戏～看多啦！

[Event_00021_00015_Trigger]
//观众：
//这两位功夫耍的不错
//就不知一天能赚多少钱

[Event_00021_00016_Trigger]
//小孩：
//哗．．好厉害喔！

[Event_00032_00001_Trigger]
SceneEnter(23)
PartySetPos(24, 30, 0)
FadeOut(0)

[Event_00032_00002_Trigger]
SceneEnter(34)
PartySetPos(44, 86, 1)
FadeOut(0)

[Event_00034_00001_Trigger]
SceneEnter(33)
PartySetPos(22, 34, 1)
FadeOut(0)

[Event_00034_00002_Trigger]
SceneEnter(35)
PartySetPos(47, 48, 1)
FadeOut(0)

[Event_00035_00001_Trigger]
SceneEnter(34)
PartySetPos(22, 71, 1)
FadeOut(0)

[Event_00035_00005_Trigger]
SceneEnter(38)
PartySetPos(13, 48, 1)
FadeOut(0)

[Event_00035_00006_Trigger]
SceneEnter(38)
PartySetPos(45, 72, 0)
FadeOut(0)

[Event_00035_00007_Trigger]
SceneEnter(38)
PartySetPos(12, 83, 1)
FadeOut(0)

[Event_00036_00001_Trigger]
SceneEnter(35)
PartySetPos(16, 52, 1)
FadeOut(0)

[Event_00038_00001_Trigger]
SceneEnter(35)
PartySetPos(33, 8, 0)
FadeOut(0)

[Event_00038_00002_Trigger]
SceneEnter(35)
PartySetPos(41, 16, 0)
FadeOut(0)

[Event_00038_00003_Trigger]
SceneEnter(35)
PartySetPos(54, 29, 1)
FadeOut(0)

[Event_00035_00008_Trigger]
SceneEnter(36)
PartySetPos(34, 31, 0)
FadeOut(0)

[Scr_0x2F35]
SceneEnter(37)
PartySetPos(34, 31, 0)
FadeOut(0)

[Event_00037_00002_Trigger]
SceneEnter(39)
PartySetPos(51, 60, 1)
FadeOut(0)

[Event_00032_00008_Trigger]
//林家家仆：
//小姐好厉害喔！

[Event_00032_00009_Trigger]
//林家家仆：
//这男的功夫好菜！

[Event_00032_00010_Trigger]
//林家家仆：
//我们堡主亲传的剑法果然厉害

[Event_00032_00011_Trigger]
//林家家仆：
//这些兴致勃勃的年轻人真可怜
//根本不是我们家小姐的对手。

[Event_00032_00012_Trigger]
//林家家仆：
//小姐加油！　啊．．不对
//每次小姐都赢，这比武招亲
//何时才会有个结果出来？

[Event_00032_00006_Trigger]
EventSetTriggerMode(-1, -1, false, 2)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//咦，这不是刘兄吗？
VideoUpdate(0, false)
SetDlgUpper(9-1-1, 0x00000000, false)
//刘晋元：
//李兄！你怎麽也在这里？
//难不成你是来参加招亲！
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//我只是看到这里热闹非常
//凑过来瞧瞧罢了。
VideoRestore()
//刘兄，你怎麽不上台试试？
VideoUpdate(0, false)
SetDlgUpper(9-1-1, 0x00000000, false)
//刘晋元：
//李兄～您别挖苦我了．．
//我若有学过那麽一点点武功
//早就向月如表妹求亲了
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//此话怎讲？
//刘兄温文有礼又长得一表人才
//你那什麽月如表妹若看不上你
//那真是没啥眼光
VideoUpdate(0, false)
SetDlgUpper(9-1-1, 0x00000000, false)
//刘晋元：
//嘘．．别让台上听到了
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//哦？莫非台上的就是
//刘兄的月如表妹？
VideoRestore()
//嘿．．能令刘兄如此挂意
//应该是位美人罗？
VideoUpdate(0, false)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(6, false, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//我看看．．
//哗～打得不错嘛！
RoleSetDirFrame(1, 1, 0)
WaitEventAutoScriptRun(2, false, false)
ViewportMove(-2, -1, 72)
WaitEventAutoScriptRun(20, false, false)
EventSetAutoScript(32, 3, Null)
EventSetAutoScript(32, 5, Null)
EventSetDirFrame(32, 3, 0, 2)
EventSetDirFrame(32, 5, 0, 0)
EventModifyPos(32, 3, 16, 8)
VideoUpdate(0, false)
PlaySound(7)
EventSetDirFrame(32, 3, 0, 11)
VideoUpdate(0, false)
EventSetDirFrame(32, 5, 0, 3)
VideoUpdate(0, false)
PlaySound(91)
EventModifyPos(32, 5, 8, 0)
VideoUpdate(0, false)
EventSetDirFrame(32, 5, 0, 4)
EventModifyPos(32, 5, 8, 0)
VideoUpdate(0, false)
PlaySound(189)
EventModifyPos(32, 5, 8, 2)
VideoUpdate(0, false)
EventModifyPos(32, 5, 8, 4)
VideoUpdate(0, false)
EventModifyPos(32, 5, 8, 6)
VideoUpdate(0, false)
EventModifyPos(32, 5, 8, 8)
VideoUpdate(0, false)
EventModifyPos(32, 5, 8, 10)
VideoUpdate(0, false)
EventSetDirFrame(32, 5, 0, 5)
EventModifyPos(32, 5, 8, 12)
VideoUpdate(0, false)
EventModifyPos(32, 5, 8, 14)
VideoUpdate(0, false)
EventModifyPos(32, 5, 8, 16)
EventModifyPos(32, 6, 16, -8)
EventSetDirFrame(32, 6, 0, 0)
EventModifyPos(32, 15, 32, -16)
EventSetDirFrame(32, 15, 0, 0)
EventModifyPos(32, 22, 16, -8)
EventSetDirFrame(32, 22, 0, 0)
VideoUpdate(0, false)
EventSetState(32, 5, false, false)
HeroSetSprite(0, 242, true)
RoleSetDirFrame(0, 0, 0)
PlaySound(92)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 1)
WaitEventAutoScriptRun(0, false, false)
PlaySound(90)
EventSetDirFrame(32, 3, 0, 0)
WaitEventAutoScriptRun(8, false, false)
EventSetState(32, 3, false, false)
EventSetState(32, 4, true, true)
WaitEventAutoScriptRun(4, false, false)
SetDlgUpper(3-5-1, 0x00000000, false)
//林月如：
//　　哼！真没用
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(32, 4, 0, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(32, 4, 3, 0)
VideoUpdate(0, false)
EventSetDirFrame(32, 4, 2, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(32, 4, 3, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgUpper(3-3-1, 0x00000000, false)
//林月如：
//喂！　还有哪个欠揍的
//上来呀？！
WaitEventAutoScriptRun(10, false, false)
EventSetDirFrame(32, 4, 0, 0)
VideoUpdate(0, false)
EventSetDirFrame(32, 4, 1, 0)
EventSetAutoScript(32, 4, Scr_0x30EE)
WaitEventAutoScriptRun(8, false, false)
EventSetAutoScript(32, 4, Null)
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//爹！这些家伙没有一个像样的
//一点也不好玩，我们回去算了
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//如儿！你出手未免太重了吧
//挑擂台的不是被你折断手
//就是打瞎眼，谁还敢上来？
VideoUpdate(0, false)
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//又怪我？我是女孩子耶
//是这些臭男生太没用！
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//爹三番两次替你找机会让你挑
//选丈夫，费尽多少心思？你从
//没有一次认真过
VideoUpdate(0, false)
EventSetDirFrame(32, 4, 3, 0)
VideoUpdate(0, false)
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//我才没有呢，你自己瞧！
//台下那些男生全部都畏畏
//缩缩的，怎配做林家女婿？
ViewportMove(8, 4, 16)
WaitEventAutoScriptRun(2, false, false)
EventSetAutoScript(32, 4, Scr_0x30F1)
EventSetState(32, 5, true, false)
EventSetDirFrame(32, 5, 0, 6)
EventSetLayer(32, 5, 0)
RoleSetDirFrame(0, 0, 2)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 3)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 2)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 3)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 2)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 3)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 2)
WaitEventAutoScriptRun(3, false, false)
RoleSetDirFrame(0, 0, 3)
WaitEventAutoScriptRun(4, false, false)
EventSetAutoScript(32, 4, Null)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 0, 4)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//你！．．啊～野蛮丫头！！
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//亏你还认得我呀～呆瓜小贼！
//怎麽啦，今天是不是又想把我
//绑起来吊在树上呀？
VideoUpdate(0, false)
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(0, 0)
VideoUpdate(0, false)
SetDlgLower(9-1-1, 0x00000000, false)
//刘晋元：
//　你们认识？
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//不！只是先前有点小误会
EventSetAutoScript(32, 4, Scr_0x30F4)
ViewportMove(-8, -4, 12)
EventSetAutoScript(32, 4, Null)
VideoUpdate(0, false)
EventSetDirFrame(32, 4, 3, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(32, 4, 1, 0)
VideoUpdate(0, false)
SetDlgLower(3-3-1, 0x00000000, false)
//林月如：
//爹！就是他，昨天欺负我的人
//就是他！你叫他上来，我要打
//他一顿。
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//如儿，别耍性子！
VideoUpdate(0, false)
EventSetDirFrame(32, 4, 3, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgUpper(3-2-1, 0x00000000, false)
//林月如：
//我不管，你叫他上来
//我一定出这口气！
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
ViewportMove(16, 8, 4)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//虽然在下曾冒犯姑娘在先，但
//我自愿捱你一剑，已经两不相
//欠。姑娘又何必逼人太甚呢？
VideoUpdate(0, false)
SetDlgUpper(3-2-1, 0x00000000, false)
//林月如：
//我不服气！昨天你们两个打我
//一个。今天有种就来单打独斗
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//哈哈！　手下败将
//还想自讨苦吃吗？
VideoUpdate(0, false)
SetDlgUpper(3-2-1, 0x00000000, false)
//林月如：
//要是你胜了，咱们之间的过节
//就一笔勾消。要是你输了，就
//得在我家当一年的长工。来抵
//被你放走的银花和长贵的份！
//怎麽着，怕了吗？
VideoUpdate(0, false)
PartySetRole(1)
RoleMoveOneStep(-8, -4, 0)
ViewportMove(8, 4, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-8, -4, 0)
ViewportMove(8, 4, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-8, -8, 0)
ViewportMove(8, 4, 0)
RoleMoveOneStep(-8, -8, 0)
ViewportMove(8, 4, 0)
EventSetDirFrame(32, 6, 1, 0)
RoleMoveOneStep(-8, -8, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-8, -8, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-8, -4, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-8, -4, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-8, -4, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-8, -4, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//话可是你说的呦！只要我打赢
//你，昨天的事就一笔勾消？
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//　没错！
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//如儿！不可儿戏！
VideoUpdate(0, false)
EventSetDirFrame(32, 4, 0, 0)
VideoUpdate(0, false)
EventSetDirFrame(32, 4, 1, 0)
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//爹～你别管嘛！今天我要是不
//在众人面前讨回这面子，岂不
//让人家看轻咱们苏州林家堡
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//好好好．．你爱怎麽样都随你
//不过～只许点到为止，知道吗
VideoUpdate(0, false)
EventSetDirFrame(32, 4, 0, 0)
VideoUpdate(0, false)
EventSetDirFrame(32, 4, 3, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetState(32, 4, false, false)
EventModifyPos(32, 3, -24, -7)
EventSetState(32, 3, true, true)
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//嘻．．亮招吧！
VideoUpdate(0, false)
SetBattleMusic(14)
SetBattlefield(26)
BattleStart(24, Scr_0x9C9B, Null)
MusicPlay(0, true, 0.00)
BattleEnd()
EventSetState(32, 4, true, false)
EventSetState(32, 3, false, false)
EventModifyPos(32, 7, 16, 40)
PartySetPos(34, 43, 1)
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//我认输了．．。
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//承让～
VideoUpdate(0, false)
PlaySound(214)
SetDlgCenter(0, 0x00000000, false)
//擂台下响起一片掌声
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//啊．．谢谢，谢谢各位
VideoUpdate(0, false)
EventSetDirFrame(32, 7, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//呵呵呵．．太好了！太好了！
//诸位乡亲～今日小女的比武招
//亲终於有了结果，多谢诸位乡
//亲共襄盛举。明日起我林某人
//於林家堡席开三日，诸位乡亲
//父老务必赏光！
EventSetDirFrame(32, 4, 0, 0)
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//爹～！　人家才不依呢．．
VideoUpdate(0, false)
EventSetLayer(32, 4, 7)
EventSetAutoScript(32, 4, Scr_0x347E)
WaitEventAutoScriptRun(9, false, false)
EventSetDirFrame(32, 7, 1, 0)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(3, false, false)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(6, false, false)
EventSetState(32, 4, false, false)
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//哈哈哈！难得～难得～
//想不到如儿也会害臊
PartyWalkToBlock(33, 42, 0, 2)
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//　　怎．．怎麽？
EventSetDirFrame(32, 7, 2, 0)
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//呵呵呵．．小伙子，还愣在那
//干什麽？跟着如儿去呀！
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//我！？．．为什麽？
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//还装傻！？比武招亲擂台之上
//你既胜了如儿，自然就是我林
//家的女婿了。
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//　　啊～！！！
FadeOut(0)
EventSetTriggerScript(23, 1, Scr_0x2974)
SceneEnter(34)

[Scr_0x30EE]
EventAnimate(1, 2)
ReplaceAndPauseWithNop(Scr_0x30EE, 0)

[Scr_0x30F1]
EventAnimate(3, 2)
ReplaceAndPauseWithNop(Scr_0x30F1, 0)

[Scr_0x30F4]
EventAnimate(1, 2)
GotoWithNop(Scr_0x30F4, 0)

[Event_00032_00013_Trigger]
//观众：
//别挤啊！

[Event_00032_00014_Trigger]
//观众：
//姓林的这娘们好厉害！

[Event_00032_00016_Trigger]
//观众：
//只听得林家千金多麽泼辣
//今日一看，手上的功夫倒
//也不弱。

[Event_00032_00018_Trigger]
//观众：
//林家堡堡主林天南的家传剑法
//果然名不虚传，林家小姐已得
//七分真传了。

[Event_00032_00023_Trigger]
//观众：
//场上这男的下盘不稳，我看
//不出百招，一定败下阵来。

[Event_00032_00003_Auto]
NPCSetFrame(0)
GotoWithProbability(70, Event_00032_00003_Auto)
EventSetAutoScript(32, 5, Scr_0x3137)
NPCSetFrame(1)
NPCSetFrame(2)
NPCSetFrame(3)
NPCSetFrame(4)
NPCSetFrame(5)
NPCSetFrame(6)
NPCSetFrame(7)
NPCSetFrame(8)
NPCSetFrame(9)
NPCSetFrame(10)
ReplaceAndPause()
GotoWithProbability(50, Event_00032_00003_Auto)
GotoWithProbability(40, Scr_0x3125)
EventSetAutoScript(32, 5, Scr_0x3141)
NPCSetFrame(0)
NPCSetFrame(1)
NPCSetFrame(2)
NPCSetFrame(11)
PlaySound(91)
WaitEventAutoScriptRun(4, false, false)
NPCSetFrame(0)
ReplaceAndPauseWithNop(Event_00032_00003_Auto, 0)

[Scr_0x3125]
EventSetAutoScript(32, 5, Scr_0x312E)
ReplaceAndPause()
EventModifyPos(-1, -1, 2, 1)
NPCSetFrame(8)
WaitEventAutoScriptRun(3, false, false)
NPCSetFrame(0)
EventModifyPos(-1, -1, -2, -1)
ReplaceAndPauseWithNop(Event_00032_00003_Auto, 0)

[Scr_0x312E]
EventModifyPos(-1, -1, 10, 7)
NPCSetFrame(0)
EventModifyPos(-1, -1, 2, 1)
ReplaceAndPause()
NPCSetFrame(1)
EventModifyPos(-1, -1, -16, -12)
EventModifyPos(-1, -1, 4, 4)
PlaySound(17)

[Scr_0x3137]
NPCSetFrame(0)
EventModifyPos(-1, -1, 0, -8)
ReplaceAndPause()
EventModifyPos(-1, -1, 8, 4)
NPCSetFrame(2)
PlaySound(17)
NPCSetFrame(1)
EventModifyPos(-1, -1, -8, 4)
PlaySound(15)

[Scr_0x3141]
EventModifyPos(-1, -1, -8, -4)
ReplaceAndPause()
ReplaceAndPause()
PlaySound(7)
NPCSetFrame(3)
EventModifyPos(-1, -1, 6, 3)
EventModifyPos(-1, -1, 2, 1)
ReplaceAndPause()
NPCSetFrame(0)

[Scene_00034_Enter]
PartySetPos(38, 77, 1)
RoleSetDirFrame(0, 0, 0)
MusicPlay(74, true, 0.00)
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//李少侠年纪轻轻就有如此身手
//剑法更是精妙绝伦，相貌亦是
//出类拔萃，能得少侠为婿实在
//是小女的福气呀～呵呵呵！
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//晚辈只是侥幸．．其实．．
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//对了～适才见你使的剑法．．
//可是蜀山仙剑派的御剑术？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//是的．．。
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//原来你是独孤剑圣的弟子呀
//呵呵～实在是太巧了，老夫
//和尊师是十几年的拜把兄弟
//算起来你还是老夫的师侄呢
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//独孤．．剑圣．．？
//不．．不对啊！
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//哦！不是吗？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//实不相瞒，晚辈因缘而得一名
//醉道人传授一招剑法，晚辈本
//想向他拜师但未能如愿
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//哦．．没有师承吗？
//没关系，这也没啥重要的，
//老夫关心的，是你跟如儿的
//婚事啊！
//我林家三代单传，而老夫又
//只有如儿这麽一个女儿，所
//以老夫希望你能入赘到我们
//林家，好继承我林家的产业
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//晚辈万万承担不起！
EventSetState(34, 7, true, true)
WaitEventAutoScriptRun(20, false, false)
EventSetAutoScript(34, 7, Null)
SetDlgLower(9-1-1, 0x00000000, false)
//刘晋元：
//世伯且慢！月如怎能嫁给他？
EventSetDirFrame(34, 4, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//　有何不能？
VideoUpdate(0, false)
SetDlgLower(9-1-1, 0x00000000, false)
//刘晋元：
//您明知我不会武功，却以比
//武来决定月如的婚事
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//既是比武招亲，擂台
//胜负已分．．．。
VideoUpdate(0, false)
SetDlgLower(9-1-1, 0x00000000, false)
//刘晋元：
//不！这不能算数的，月如
//的终身大事怎可如此草率！
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//　对！不能算．．
VideoUpdate(0, false)
EventSetDirFrame(34, 4, 2, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(34, 4, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//住口！月如是我女儿
//这件事你有何资格反对？
VideoUpdate(0, false)
SetDlgLower(9-1-1, 0x00000000, false)
//刘晋元：
//我．．请您把月如许配给我！
//改明儿我叫我爹派人上门提亲
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//月如根本就不喜欢你。更何况
//你一介书生，如何继承我南武
//林盟主之位？
VideoUpdate(0, false)
SetDlgLower(9-1-1, 0x00000000, false)
//刘晋元：
//　　我．．．．
VideoUpdate(0, false)
SetDlgLower(9-1-1, 0x00000000, false)
//刘晋元：
//我．．我明白了．．
EventSetDirFrame(34, 7, 2, 0)
VideoUpdate(0, false)
SetDlgLower(9-1-1, 0x00000000, false)
//刘晋元：
//李兄～我祝福你跟月如．．
EventSetDirFrame(34, 7, 1, 0)
VideoUpdate(0, false)
SetDlgLower(9-1-1, 0x00000000, false)
//刘晋元：
//世伯，请代我向月如告别
//．．我决定回京城去了
EventSetAutoScript(34, 7, Scr_0x323F)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//　　刘兄．．！
WaitEventAutoScriptRun(20, false, false)
EventSetState(34, 7, false, false)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(34, 4, 2, 0)
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//就这麽决定了！呵呵呵．．
//能得少侠为婿，实乃小女福气
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//我与令嫒略有误会，才上擂台
//比试，招亲这．．这事还请前
//辈三思
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//难道少侠嫌弃小女？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//真是对不起，在下尚有要事在
//身，这婚姻大事并非儿戏，晚
//辈不敢轻言承诺，只怕辜负了
//小姐。
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//还有甚麽事比娶妻重要？
VideoUpdate(0, false)
EventSetDirFrame(34, 3, 0, 0)
WaitEventAutoScriptRun(5, false, false)
EventSetDirFrame(34, 3, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(2-5-1, 0x00000000, false)
//赵灵儿：
//逍遥哥哥．．如果你．．
//我．．可以自己去苗疆
//你不必顾虑我．．没关系
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//这怎麽行！说好的要带你去
//苗疆找妈妈，怎能轻诺食言！
SetDlgUpper(2-5-1, 0x00000000, false)
//赵灵儿：
//我．．我拖累了你
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//你要离开！难道你想毁婚？
//入赘我林家有哪一点不好？
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//我比武得胜，只想依照约定
//化解误会，并未想到婚姻一层
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//谁不知苏州林家乃江南名门，
//虽称不上富可敌国，但亦是一
//方豪贾，我女儿虽不是倾国美
//女，亦是花容月貌的闺秀
//多少名门公子想娶都娶不到
//谅你也没理由嫌弃她！
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//是为了她吗？
//她是你什麽人？
EventSetDirFrame(34, 3, 0, 0)
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//她．．跟我．．这．．
//因为这件事来的太过突然
//况且未禀明家中长辈，怎
//敢私自婚娶？
EventSetDirFrame(34, 3, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//说的也对！我马上派人去请你
//婶婶过来，到时再谈下聘的事
//你们二人就先在这住下来吧
VideoUpdate(0, false)
EventSetDirFrame(34, 4, 1, 0)
VideoUpdate(0, false)
//林天南：
//春兰！替赵姑娘在西厢房准备
//一间客房，秋菊！带姑爷到东
//厢房下去歇息
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//春兰：
//是．．老爷！
EventSetState(34, 8, false, false)
EventSetState(34, 9, false, false)
EventSetState(34, 3, false, false)
SceneEnter(38)
FadeOut(0)
ReplaceAndPause()
SetTimeFilter(0)

[Event_00034_00007_Auto]
NPCMoveToBlock(38, 80, 1, 3, false)

[Scr_0x323F]
NPCMoveToBlock(42, 84, 1, 4, true)
EventSetState(-1, -1, false, false)

[Scene_00038_Enter]
MusicPlay(51, true, 0.00)
PartySetPos(48, 67, 0)
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
//春兰：
//姑爷～您若是还有任何需要的
//请尽量吩咐我们下人们，奴婢
//先下去了
WaitEventAutoScriptRun(16, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//哇．．好漂亮的房子
//大户人家就是不一样
ReplaceAndPause()
SetTimeFilter(0)

[Event_00034_00004_Trigger]
//林天南：
//是不是已经想通了要入
//赘到我们林家啊！？

[Event_00036_00002_Trigger]
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//灵儿，你怎麽了？
//看你脸色似乎不太好呢！
VideoUpdate(0, false)
SetDlgUpper(2-5-1, 0x00000000, false)
//赵灵儿：
//我．．胸口很闷，头有点疼
//不过．．不碍事的。
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//哎呀～病了可就不好
//早点睡．．别着凉了
VideoUpdate(0, false)
SetDlgUpper(2-7-1, 0x00000000, false)
//赵灵儿：
//逍遥哥哥～你还记不记得姥姥
//死的时候对你说的．．．
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//我怎麽会忘呢！你放心．．
//我会照顾你，直到找到你娘为
//止，我答应过的事，绝不反悔
VideoUpdate(0, false)
SetDlgUpper(2-7-1, 0x00000000, false)
//赵灵儿：
//可是．．．．
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//嗯～　你想说什麽？
VideoUpdate(0, false)
SetDlgUpper(2-5-1, 0x00000000, false)
//赵灵儿：
//如果．．我．．是．．
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//嗯？？　别胡思乱想了
//傻丫头～不会有事的．．
EventSetState(36, 4, true, true)
EventSetState(35, 9, true, true)
EventSetState(35, 11, true, true)
EventSetState(35, 12, true, true)
EventSetTriggerScript(35, 10, Scr_0x34DB)
ReplaceAndPause()
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//早点睡吧，明天一早我再
//陪你去街上玩

[Event_00036_00004_Trigger]
//夏竹：
//姑爷您要找小姐吗？小姐不在
//房里，她在後花园赏月

[Event_00035_00009_Trigger]
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//瞧！我这身衣裳好不好看？)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//喔～好．．好看
VideoUpdate(0, false)
SetDlgUpper(3-2-1, 0x00000000, false)
//林月如：
//就这样子而已吗．．？！
//人家可是好不容易才穿一次呢
VideoUpdate(0, false)
SetDlgLower(1-8-1, 0x00000000, false)
//李逍遥：
//林姑娘，我能否私下问你一
//个问题，请你老实回答我
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//　　说啊！？
VideoUpdate(0, false)
SetDlgLower(1-7-1, 0x00000000, false)
//李逍遥：
//你．．当真想要嫁给我？
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//不是我嫁给你，是你入赘到
//我们林家
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//不是指这个，我是指比武
//招亲太草率了，这门亲事
//不一定要算数
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//没关系，我爹说了就算
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//这．．其实我今天上擂台与你
//比武，只是想化解误会，并未
//想到招亲这一层．．
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//嘻～谁叫你要打赢我
//现在全苏州城的人都知道你是
//林家的新姑爷了，难道你想赖
//帐不成？
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//可是～我们认识才不过二天
VideoUpdate(0, false)
SetDlgUpper(3-5-1, 0x00000000, false)
//林月如：
//说了半天，原来你讨厌我！
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//不．．而是．．
//我总觉得这样太随便了
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//我才不是随随便便的女人呢！
//我在做什麽，心里清楚的很
VideoUpdate(0, false)
SetDlgLower(1-7-1, 0x00000000, false)
//李逍遥：
//你该不会是为了昨天的事
//还怀恨在心，故意捉弄我吧？
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//嘻．．你说呢？)
EventSetState(35, 13, true, true)
EventSetTriggerScript(34, 4, Scr_0x3307)
EventSetTriggerMode(34, 4, true, 2)
EventSetDirFrame(34, 4, 3, 0)
EventModifyPos(34, 4, -32, -16)
EventSetState(34, 5, true, true)
EventSetPos(34, 6, 1104, 1256)
EventSetDirFrame(34, 6, 3, 0)
EventSetState(34, 8, true, true)
EventSetState(34, 9, true, true)
EventSetPos(34, 8, 1216, 1248)
EventSetPos(34, 9, 1200, 1240)
EventSetAutoScript(34, 8, Event_00021_00016_Auto)
EventSetAutoScript(34, 9, Event_00021_00016_Auto)
ReplaceAndPause()
//我们家的花园很漂亮吧？
//在苏州城就属我家的庭院是
//最大的呢。
ReplaceAndPause()
//你可以四处逛逛看看
//包你这乡巴佬大开眼界！

[Event_00034_00006_Trigger]
//管家林忠：
//也只有像姑爷您这等身手
//才配得上我们家小姐。

[Event_00034_00008_Trigger]
//仆人：
//姑爷好！

[Event_00035_00013_Trigger]
EventSetTriggerMode(-1, -1, false, 2)
//秋菊：
//姑爷！
//老爷在前厅请您过去一趟
ReplaceAndPause()
//老爷请来了一位算命先生
//要替您跟小姐合八字呢！

[Scr_0x3307]
EventSetTriggerMode(-1, -1, false, 2)
SceneSetScripts(36, Scene_00033_Enter, Null)
SceneSetScripts(37, Scene_00033_Enter, Null)
EventSetAutoScript(36, 5, Null)
EventSetAutoScript(36, 6, Null)
EventSetAutoScript(36, 7, Null)
EventSetDirFrame(36, 5, 0, 0)
EventSetDirFrame(36, 6, 0, 0)
EventSetDirFrame(36, 7, 0, 0)
EventSetState(36, 2, false, false)
EventSetState(36, 3, true, true)
EventSetState(36, 4, false, false)
EventSetState(35, 9, false, false)
EventSetState(35, 10, false, false)
EventSetState(35, 11, false, false)
EventSetState(35, 12, false, false)
EventSetState(35, 13, false, false)
EventSetState(35, 15, true, true)
EventSetState(35, 16, true, true)
EventSetState(35, 17, true, true)
EventSetState(36, 0, true, true)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//贤婿，你来的正好
//告诉我你的生辰、年月
//这位算命先生是我特地请来
//为你和月如合八字的
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//哦．．我是乙丑年腊月十九
//辰时出生的
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//算命先生：
//嗯．．．我算算．．
VideoRestore()
//恭喜老爷，李公子和令千金
//乃是人间双璧、佳偶天成呀！
VideoRestore()
//依二人的八字看来，绝对是
//儿孙满堂、大富大贵
NPCSetDirFrame(3, 0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//林天南：
//呵呵呵．．真是太好了！
NPCSetDirFrame(0, 0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//林天南：
//阿忠～带先生到帐房取款
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//林忠：
//是．．老爷
FadeOut(0)
EventSetState(34, 5, false, false)
EventSetDirFrame(0, 0, 3, 0)
EventSetTriggerMode(0, 0, false, 0)
RoleSetDirFrame(0, 2, 0)
NPCSetDirFrame(0, 0)
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//呵呵呵～我太高兴了
//这真是我林家的福气啊！
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//贤婿，我们林家人丁单薄
//往後就要靠你和如儿多多替
//我们林家添壮丁啦～哈哈哈！
VideoUpdate(0, false)
MusicStop()
EventSetState(35, 0, true, true)
SetDlgUpper(0, 0x00000000, false)
//丫鬟：
//老爷～老爷！快来人呀！
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(10, false, false)
SetDlgLower(30-1-1, 0x00000000, false)
//林天南：
//冬梅～喳呼什麽！？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//冬梅：
//有妖怪呀！西厢房里有
//妖怪，好可怕啊！！
VideoUpdate(0, false)
SetDlgLower(30-1-1, 0x00000000, false)
//林天南：
//林忠！快去召集家丁
//切记多带些火把
EventSetDirFrame(34, 6, 2, 0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//林忠：
//是．．老爷！
EventSetAutoScript(34, 6, Scr_0x347A)
MusicPlay(34, true, 0.00)
ReplaceAndPause()
//林忠：
//妖怪？竟然敢在林家堡作乱！

[Event_00035_00016_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
//丫鬟：
//妖怪呀！有妖怪啊！

[Event_00035_00015_Trigger]
EventSetTriggerMode(-1, -1, false, 2)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//究竟发生了什麽事？
VideoUpdate(0, false)
SetDlgUpper(3-3-1, 0x00000000, false)
//林月如：
//蛇妖！是只半人半蛇的妖怪
//就在西厢房里面！
RoleMoveOneStep(-16, 8, 0)
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//灵儿！灵儿人呢？
SetDlgUpper(3-3-1, 0x00000000, false)
//林月如：
//赵姑娘不见了！
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-16, 8, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-16, 8, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-16, 8, 0)
NPCSetDirFrame(3, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-16, 8, 0)
NPCSetDirFrame(0, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-16, 8, 0)
EventWalkOneStep(-1, -1, -16, 8)
VideoUpdate(0, false)
RoleMoveOneStep(-16, 8, 0)
EventWalkOneStep(-1, -1, -16, 8)
VideoUpdate(0, false)
RoleMoveOneStep(-16, 8, 0)
EventWalkOneStep(-1, -1, -32, 16)
VideoUpdate(0, false)
RoleMoveOneStep(-16, 8, 0)
EventWalkOneStep(-1, -1, -16, 8)
VideoUpdate(0, false)
SetDlgUpper(3-4-1, 0x00000000, false)
//林月如：
//等一等！很危险呀！
//现在里面一片漆黑，什麽也看
//不见，我已经叫人去取灯火了
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//灵儿一定还在里面
//我去救灵儿出来！
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(3-4-1, 0x00000000, false)
//林月如：
//我跟你去！
EventSetState(-1, -1, false, false)
HeroSetSprite(2, 245, false)
PartySetRole(13)
RoleMoveOneStep(-16, 8, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-16, 8, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-16, 8, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-16, 8, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-16, 8, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-16, 8, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-16, 8, 0)

[Event_00036_00003_Trigger]
EventSetState(35, 16, false, false)
EventSetState(35, 17, false, false)
EventSetState(36, 0, false, false)
EventSetState(34, 4, false, false)
EventSetState(34, 6, false, false)
EventSetState(34, 8, false, false)
EventSetState(34, 9, false, false)
EventSetState(35, 0, false, false)
EventSetTriggerScript(35, 8, Scr_0x2F35)
PartySetRole(13)
SetBattlefield(21)
SetBattleMusic(47)
BattleStart(25, Null, Null)
MusicStop()
SceneSetScripts(37, Scr_0x33D0, Null)
SceneEnter(37)

[Scr_0x33D0]
PartySetPos(33, 43, 0)
PartySetRole(1)
RoleSetDirFrame(0, 0, 0)
EventSetAutoScript(37, 6, Scr_0x3464)
WaitEventAutoScriptRun(16, false, false)
EventSetState(37, 7, true, true)
ToggleDayNight(true)
WaitEventAutoScriptRun(6, false, false)
SetDlgLower(0, 0x00000000, false)
//丫鬟：
//小姐！奴婢四处都找过了
//都没看见赵姑娘
EventSetDirFrame(37, 6, 2, 0)
VideoUpdate(0, false)
SetDlgUpper(3-3-1, 0x00000000, false)
//林月如：
//叫所有的人都去找，城里找不到
//就到城外去找，翻遍全苏州也要
//把人找回来！
EventSetState(37, 8, true, true)
EventSetState(38, 0, true, true)
WaitEventAutoScriptRun(16, false, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//不必了！由她去吧！
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//爹！为什麽！
EventSetAutoScript(37, 7, Scr_0x34BD)
WaitEventAutoScriptRun(24, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(11, false, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//你们自己问问冬梅吧！
//是她最先发现妖怪的
EventSetAutoScript(37, 8, Scr_0x34C3)
WaitEventAutoScriptRun(10, false, false)
SetDlgLower(3-3-1, 0x00000000, false)
//林月如：
//阿梅，妖怪从哪跑进来的？
//赵姑娘又到哪里去了？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//冬梅：
//奴婢正在打扫小姐的房间时，
//突然听到赵小姐的惨叫声，就
//急忙赶过来，就看到．．看到
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//你看到什麽！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//冬梅：
//那只蛇妖．．好像是～赵姑娘
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//你．．你胡说！！
VideoUpdate(0, false)
SetDlgLower(3-3-1, 0x00000000, false)
//林月如：
//阿梅！你怎麽可以随便诬赖人
//赵姑娘明明就是被妖怪抓走的
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//冬梅：
//我．．我看到．．牠的脸．．
//那个蛇妖的上半身是人身，她
//的面貌很像就是赵姑娘，然後
//突然一阵狂风．．．
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//我不相信！！
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//这件事我自会查清楚，没有
//找到灵儿我是不会回来的！
VideoUpdate(0, false)
EventSetDirFrame(37, 6, 1, 0)
RoleMoveOneStep(-16, 8, 0)
ViewportMove(16, -8, 0)
EventSetDirFrame(37, 6, 0, 0)
RoleMoveOneStep(-16, 8, 0)
ViewportMove(16, -8, 0)
RoleMoveOneStep(-16, 8, 0)
ViewportMove(16, -8, 0)
RoleMoveOneStep(-16, 8, 0)
ViewportMove(16, -8, 0)
RoleMoveOneStep(-16, 8, 0)
ViewportMove(16, -8, 0)
RoleMoveOneStep(-16, 8, 0)
ViewportMove(16, -8, 0)
RoleMoveOneStep(-16, 8, 0)
ViewportMove(16, -8, 0)
RoleMoveOneStep(-16, 8, 0)
ViewportMove(16, -8, 0)
HeroSetSprite(0, 232, true)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(37, 6, 2, 0)
VideoUpdate(0, false)
SetDlgLower(3-3-1, 0x00000000, false)
//林月如：
//阿梅！你是不是吓昏头了
//怎麽可以胡言乱语，诬赖
//赵姑娘！？
SetDlgUpper(0, 0x00000000, false)
//冬梅：
//冬梅就算有天大的胆子
//也不敢欺骗小姐．．
EventSetDirFrame(37, 8, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//哼～真是看走了眼。想不到那
//李逍遥竟然跟蛇妖是一伙的，
//这件事要是传了出去，叫我们
//林家的脸往哪摆？
//如儿！这件婚事就此取消
//林家不屑与邪魔歪道来往
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//我不要！！！既然爹许过婚
//怎可出尔反尔？除了李大哥
//我谁也不嫁！
EventSetAutoScript(37, 6, Scr_0x3470)
WaitEventAutoScriptRun(18, false, false)
EventSetState(37, 6, false, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//唉．．女儿大了，留不住了。
FadeOut(0)
EventSetState(37, 7, false, false)
EventSetState(37, 8, false, false)
EventSetState(38, 0, false, false)
HeroSetSprite(0, 2, true)
SceneEnter(39)
PartySetPos(50, 61, 1)
ViewportMove(0, 0, -1)
ReplaceAndPause()
SetTimeFilter(0)

[Scr_0x3464]
NPCMoveToBlock(34, 43, 1, 2, true)
NPCSetDirFrame(3, 0)
NPCSetFrame(12)
WaitEventAutoScriptRun(3, false, false)
EventSetAutoScript(37, 3, Event_00020_00024_Auto)
WaitEventAutoScriptRun(12, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(3, false, false)
NPCMoveToBlock(34, 43, 0, 2, true)
NPCMoveToBlock(33, 43, 1, 2, true)
NPCSetDirFrame(1, 0)

[Scr_0x3470]
EventAnimate(0, 2)
EventWalkOneStep(-1, -1, -12, 6)
EventWalkOneStep(-1, -1, -16, 0)
EventWalkOneStep(-1, -1, -16, 0)
[Scr_0x3474]
EventWalkOneStep(-1, -1, -16, 8)
GotoWithNop(Scr_0x3474, 0)

[Event_00034_00012_Trigger]
//妖怪！真的有妖怪
//赵小姐的房里有妖怪

[Scr_0x347A]
NPCMoveToBlock(31, 81, 1, 3, false)
NPCMoveToBlock(21, 71, 1, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x347E]
NPCSetDirFrame(1, 0)
[Scr_0x347F]
EventWalkOneStep(-1, -1, -8, -4)
GotoWithNop(Scr_0x347F, 0)

[Event_00035_00014_Trigger]
//丫鬟：
//这里是小姐住的西厢房

[Scene_00032_Enter]
PartySetPos(43, 54, 0)
PlayCDOrMusic(9, 14)
ReplaceAndPause()

[Event_00038_00005_Auto]
ReplaceAndPause()
[Event_00038_00004_Auto]
NPCMoveToBlock(43, 73, 1, 4, true)
EventSetState(-1, -1, false, false)

[Event_00035_00010_Auto]
NPCMoveToBlock(34, 7, 1, 2, true)
WaitEventAutoScriptRun(5, false, false)
NPCMoveToBlock(33, 8, 1, 2, true)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(54, 29, 1, 2, true)
NPCMoveToBlock(56, 28, 0, 2, true)
NPCMoveToBlock(56, 28, 1, 2, true)
NPCMoveToBlock(55, 30, 0, 2, true)
WaitEventAutoScriptRun(7, false, false)
NPCMoveToBlock(41, 16, 1, 2, true)
NPCMoveToBlock(34, 23, 1, 2, true)
NPCMoveToBlock(34, 23, 1, 2, true)
NPCMoveToBlock(34, 23, 0, 2, true)
WaitEventAutoScriptRun(3, false, false)
NPCMoveToBlock(29, 27, 1, 2, true)
NPCMoveToBlock(31, 29, 0, 2, true)
NPCMoveToBlock(28, 31, 1, 2, true)
NPCMoveToBlock(33, 36, 0, 2, true)
NPCMoveToBlock(38, 31, 0, 2, true)
NPCMoveToBlock(33, 26, 0, 2, true)
WaitEventAutoScriptRun(7, false, false)
NPCMoveToBlock(40, 18, 1, 2, true)
NPCMoveToBlock(39, 17, 0, 2, true)
NPCMoveToBlock(40, 16, 0, 2, true)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(33, 9, 0, 2, true)
NPCMoveToBlock(34, 7, 1, 2, true)
[Scr_0x34A8]
ReplaceAndPause()
GotoWithProbability(10, Scr_0x34A8)
GotoWithNop(Event_00035_00010_Auto, 0)

[Event_00035_00016_Auto]
NPCMoveToBlock(41, 50, 1, 3, false)
NPCMoveToBlock(45, 47, 0, 3, false)
NPCMoveToBlock(48, 50, 1, 3, false)
EventSetState(-1, -1, false, false)

[Event_00035_00017_Auto]
NPCMoveToBlock(45, 47, 1, 3, false)
NPCMoveToBlock(48, 50, 1, 3, false)
EventSetState(-1, -1, false, false)

[Event_00035_00018_Auto]
NPCMoveToBlock(47, 45, 0, 3, false)
NPCMoveToBlock(48, 46, 0, 3, false)
NPCMoveToBlock(47, 47, 0, 3, false)
NPCMoveToBlock(49, 49, 1, 3, false)
EventSetState(-1, -1, false, false)

[Event_00037_00007_Auto]
NPCMoveToBlock(34, 42, 1, 3, false)

[Scr_0x34BD]
NPCMoveToBlock(33, 41, 0, 3, false)
NPCSetDirFrame(2, 0)
NPCSetDirFrame(3, 0)

[Event_00037_00008_Auto]
NPCMoveToBlock(34, 42, 1, 2, true)

[Scr_0x34C3]
NPCMoveToBlock(34, 42, 0, 2, true)

[Event_00037_00009_Auto]
WaitEventAutoScriptRun(2, false, false)
NPCMoveToBlock(35, 42, 0, 2, true)

[Event_00034_00012_Auto]
NPCMoveToBlock(32, 81, 1, 3, false)
NPCMoveToBlock(34, 79, 1, 3, false)
WaitEventAutoScriptRun(2, false, false)
NPCMoveToBlock(34, 79, 0, 3, false)
NPCSetDirFrame(3, 0)

[Event_00035_00010_Trigger]
//丫鬟：
//姑爷好！有什麽事吗？
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//别叫我姑爷！
//你知不知道跟我一道来
//的那位姑娘的房间在哪里？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//丫鬟：
//她住在西厢房，从後花园的
//小径一直走就可以看见了。

[Scr_0x34DB]
//丫鬟：
//姑爷您要找小姐吗？
//她在後花园赏月
ReplaceAndPause()
//丫鬟：
//姑爷您好

[Event_00039_00001_Trigger]
SceneEnter(42)
PartySetPos(55, 112, 0)
FadeOut(0)

[Event_00042_00001_Trigger]
SceneEnter(39)
PartySetPos(7, 16, 0)
FadeOut(0)

[Scene_00040_Teleport]
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//这里就是蛇妖的洞窟吗？
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//没错，就是这里
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//你留下来，在这里等我
SetDlgUpper(3-2-1, 0x00000000, false)
//林月如：
//不行～　我也要进去
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//你是女孩子，万一有个什麽
//．．岂不是太危险了！
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//我要是出了什麽事．．
//你会保护我吧？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//那是当然的
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//嘻～这不就结了
//还磨菇什麽，走嘛！
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
Replace()
SceneEnter(44)
PartySetPos(57, 117, 0)
FadeOut(0)
PartySetRole(13)

[Event_00044_00001_Trigger]
SceneEnter(42)
PartySetPos(15, 46, 0)
FadeOut(0)

[Event_00041_00001_Trigger]
SceneEnter(47)
PartySetPos(40, 83, 0)
FadeOut(0)

[Event_00047_00003_Trigger]
SceneEnter(41)
PartySetPos(25, 43, 0)
FadeOut(0)

[Event_00042_00003_Trigger]
SceneEnter(43)
PartySetPos(21, 41, 0)
FadeOut(0)

[Event_00043_00002_Trigger]
SceneEnter(42)
PartySetPos(55, 91, 1)
FadeOut(0)

[Event_00039_00002_Trigger]
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//喂～呆瓜小贼，三更半夜的
//你打算从何找起呀？
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//林姑娘！怎麽你也来了？
VideoUpdate(0, false)
SetDlgUpper(3-2-1, 0x00000000, false)
//林月如：
//怎麽？我不能来吗？好歹～
//赵姑娘是在我家失踪，道义上
//我有责任帮你去寻找她的下落
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//谢谢你！林姑娘．．
//我从不知道，你是这样一个
//热血心肠的女孩。
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//你怎麽还叫我林姑娘呐～！！
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//不然．．该怎麽叫？
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//我们都已经．．已经是伙伴了
//以後应该兄妹相称，我喊你一
//句李大哥，你就应该回我一声
//月如妹子．．
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//好～月如妹子．．
//　这样可以了吧？
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//　　嘻．．！
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//对了，说正格的，这一带你熟
//依你看～抓走灵儿的妖怪会往
//哪去了？
VideoUpdate(0, false)
EventSetDirFrame(39, 2, 1, 0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//林月如：
//嗯．．．
EventSetDirFrame(39, 2, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//前面不远处有座"隐龙窟"
//听说洞窟内深处住着一群蛇妖
//常在附近出没，有不少年轻的
//少女被牠掳到洞中下落不明。
//我爹曾多次招募志士进入洞内
//除妖，可是都没有成功过，还
//死伤了不少人，因此我爹对那
//些蛇妖恨之入骨，也才会说出
//那些误解赵姑娘的话来．．
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//好～你带我到隐龙窟
//等我找到灵儿，一切就明白了
EventSetState(-1, -1, false, false)
HeroSetSprite(2, 7, false)
PartySetRole(31)

[Event_00043_00001_Trigger]
EventSetTriggerMode(-1, -1, false, 2)
SetDlgUpper(0, 0x00000000, false)
//张老头：
//哇．．不要抓我呀！
//老汉家里就只有这些破木柴
//可没啥值钱的东西给你们了
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//老伯～您别误会！
//我们不是坏人。
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//张老头：
//你．．你们．．不是妖怪啊？
ReplaceAndPause()
SetDlgUpper(0, 0x00000000, false)
//张老头：
//我的孙女被蛇妖掳走了
//至今生死不明，我好担心呐
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//您孙女叫什麽名字？
//我们正要去找那只蛇妖
//说不定可以把她救出来
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//张老头：
//真的啊．．那太好了！
VideoRestore()
//我孙女叫晓慧，那蛇妖的窝
//就在西边山脚下一处洞窟内
//可是那洞内崎岖百折，又有
//许多毒蛇出没，进去很危险的
ReplaceAndPause()
SetDlgUpper(0, 0x00000000, false)
//张老头：
//你们千万要小心啊，之前已经
//有许多人在那洞窟中丧命了

[Event_00044_00002_Trigger]
SceneEnter(46)
PartySetPos(17, 42, 1)
FadeOut(0)

[Event_00044_00004_Trigger]
SceneEnter(46)
PartySetPos(47, 86, 0)
FadeOut(0)

[Event_00045_00001_Trigger]
SceneEnter(46)
PartySetPos(43, 49, 1)
FadeOut(0)

[Event_00045_00002_Trigger]
SceneEnter(46)
PartySetPos(32, 64, 1)
FadeOut(0)

[Event_00045_00003_Trigger]
SceneEnter(46)
PartySetPos(25, 102, 0)
FadeOut(0)

[Event_00040_00001_Trigger]
SceneEnter(46)
PartySetPos(18, 105, 1)
FadeOut(0)

[Event_00040_00002_Trigger]
SceneEnter(46)
PartySetPos(52, 106, 0)
FadeOut(0)

[Event_00041_00003_Trigger]
SceneEnter(46)
PartySetPos(50, 98, 0)
FadeOut(0)

[Event_00041_00004_Trigger]
SceneEnter(46)
PartySetPos(20, 64, 0)
FadeOut(0)

[Event_00041_00005_Trigger]
SceneEnter(46)
PartySetPos(7, 71, 0)
FadeOut(0)

[Event_00046_00001_Trigger]
SceneEnter(44)
PartySetPos(30, 80, 0)
FadeOut(0)

[Event_00046_00002_Trigger]
SceneEnter(45)
PartySetPos(8, 90, 1)
FadeOut(0)

[Event_00046_00003_Trigger]
SceneEnter(44)
PartySetPos(40, 40, 0)
FadeOut(0)

[Event_00046_00004_Trigger]
SceneEnter(45)
PartySetPos(8, 120, 1)
FadeOut(0)

[Event_00046_00005_Trigger]
SceneEnter(44)
PartySetPos(21, 92, 0)
FadeOut(0)

[Event_00046_00006_Trigger]
SceneEnter(45)
PartySetPos(39, 20, 0)
FadeOut(0)

[Event_00046_00007_Trigger]
SceneEnter(40)
PartySetPos(55, 115, 1)
FadeOut(0)

[Event_00046_00008_Trigger]
SceneEnter(40)
PartySetPos(18, 61, 0)
FadeOut(0)

[Event_00046_00009_Trigger]
SceneEnter(41)
PartySetPos(14, 51, 0)
FadeOut(0)

[Event_00046_00010_Trigger]
SceneEnter(41)
PartySetPos(44, 55, 1)
FadeOut(0)

[Event_00046_00011_Trigger]
SceneEnter(41)
PartySetPos(36, 59, 0)
FadeOut(0)

[Event_00044_00003_Trigger]
SceneEnter(46)
PartySetPos(24, 33, 1)
FadeOut(0)

[Event_00047_00002_Trigger]
SceneEnter(48)
PartySetPos(14, 104, 1)
FadeOut(0)

[Scene_00039_Enter]
PartySetPos(50, 61, 1)
Replace()
[Scene_00042_Enter]
SetTimeFilter(2)
MusicPlay(82, true, 0.00)
SetBattlefield(3)
SetBattleMusic(37)

[Event_00047_00005_Trigger]
EventSetTriggerMode(-1, -1, false, 2)
EventModifyPos(-1, -1, -16, -8)
NPCSetDirFrame(3, 0)
VideoUpdate(0, false)
//少女：
//啊～！？　不要杀我！
ReplaceAndPause()
//少女：
//我只是在这儿倒倒茶、端端
//东西，什麽都不知道！

[Event_00047_00006_Trigger]
//少女：
//你是谁？不要杀我！
//我??我什麽都不知道。

[Event_00047_00007_Trigger]
//少女：
//小英雄，求求你救救我们
//这些女孩子吧！

[Event_00047_00008_Trigger]
//少女：
//救命啊！
//不???不要杀我，求求你。

[Event_00047_00009_Trigger]
//少女：
//我原先住在河东黑水镇，是
//在熟睡中不知不觉地被带到
//这儿来的。

[Event_00047_00010_Trigger]
//少女：
//快救我们出去吧！求求你。

[Event_00047_00011_Trigger]
//少女：
//求求你，我是来自附近村镇的
//请你救救我们。

[Event_00047_00012_Trigger]
//小玉：
//你是谁？
//是我爹娘请你来救我的吗？
VideoRestore()
//我和晓慧都是被妖怪抓来的
//当时我和她正在河边戏水，
//突然出现了一只妖怪把我们
//俩给带到这个洞穴来。

[Event_00047_00013_Trigger]
SetDlgLower(1-1-1, 0x00000000, false)
//姑娘～
//你们都是被蛇妖抓来的吗？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//晓慧：
//是啊～那时候我真吓坏了！
//还好到这以後，妖怪只要我
//们做一些打杂的工作，并没
//有伤害我们。

[Event_00041_00002_Trigger]
EventSetTriggerMode(-1, -1, false, 2)
SetDlgUpper(23-1-1, 0x00000000, false)
//蛇妖男：
//你们闯进我的洞府来做什麽？
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//你就是那只蛇妖！？
//把灵儿还我
VideoUpdate(0, false)
SetDlgUpper(23-1-1, 0x00000000, false)
//蛇妖男：
//谁是灵儿？
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//再不交出人就吃我一剑！
NPCSetFrame(1)
SetBattleMusic(39)
SetBattlefield(24)
BattleStart(45, Scr_0x9C9B, Null)
SetBattleMusic(40)
ReplaceAndPause()
SetDlgCenter(0, 0x00000000, false)
//蛇妖已死．．

[Event_00047_00004_Trigger]
//妖狐女：
//你们．．想干什麽？
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//灵儿呢？你们把她藏在哪里？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//妖狐女：
//老娘这儿是有不少丫鬟
//是从外头抓来的。有慧儿
//、珠儿、湘儿、兰儿、
//就是没有一个叫灵儿的
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//今天我可是豁出去了
//不要以为你是女的我就
//不敢对你怎麽样
//不交出人，我一样杀了你！
VideoUpdate(0, false)
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//李大哥，你冷静点．．
//先问清楚再说
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//管不了那麽多了！
//灵儿要是少了一根寒毛
//我就要这里的妖怪全部陪葬
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//妖狐女：
//好大的口气！
VideoRestore()
//老伴！
//快过来帮我把这两人撵出去
VideoRestore()
//老伴？
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//叫也没用！
//门口那只半人蛇妖
//已经死在我剑下了
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//妖狐女：
//什麽！？　你杀了我相公
//老娘跟你拼了！
EventSetState(-1, -1, false, false)
SetBattleMusic(38)
SetBattlefield(24)
BattleStart(44, Scr_0x9C9B, Null)
SetBattleMusic(40)
AddItem(229, 0)
SetDlgBox(0x00000000)
//得到一把"石钥匙"
BattleEnd()
VideoUpdate(0, false)
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//李大哥．．
//刚才你的神情好骇人
VideoUpdate(0, false)
SetDlgLower(1-4-1, 0x00000000, false)
//李逍遥：
//我．．．我．．
VideoUpdate(0, false)
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//可能．．赵姑娘真的
//不在这里
VideoUpdate(0, false)
SetDlgLower(1-4-1, 0x00000000, false)
//李逍遥：
//那．．会是谁干的？
VideoUpdate(0, false)
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//．．．．．．．
VideoRestore()
//我们先把这里被妖怪
//抓来的女孩子们救出去
//赵姑娘的下落我们另外再
//从头查起吧．．
VideoUpdate(0, false)
SetDlgLower(1-4-1, 0x00000000, false)
//李逍遥：
//好．．．好吧

[Event_00047_00014_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
EventSetAutoScript(-1, -1, Scr_0x36C7)
ReplaceAndPause()
//少女：
//救命啊！不???
//不要杀我，求求你。

[Event_00047_00015_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
EventSetAutoScript(-1, -1, Scr_0x36CF)
ReplaceAndPause()
EventSetTriggerMode(-1, -1, false, 0)
EventSetAutoScript(-1, -1, Scr_0x36D5)
ReplaceAndPause()
//少女：
//救命啊！不要过来

[Event_00047_00016_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
EventSetAutoScript(-1, -1, Scr_0x36E5)
ReplaceAndPause()
//啊！！！

[Event_00047_00017_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
EventSetAutoScript(-1, -1, Scr_0x36EC)
ReplaceAndPause()
//你．．你们是谁！？

[Scr_0x36C7]
NPCMoveToBlock(26, 77, 1, 3, false)
NPCMoveToBlock(13, 64, 1, 3, false)
NPCMoveToBlock(25, 52, 1, 3, false)
NPCMoveToBlock(21, 48, 0, 3, false)
NPCMoveToBlock(19, 49, 1, 3, false)
NPCSetDirFrame(3, 0)
EventSetTriggerMode(-1, -1, false, 2)

[Scr_0x36CF]
NPCMoveToBlock(25, 68, 0, 3, false)
NPCMoveToBlock(26, 66, 1, 3, false)
NPCMoveToBlock(23, 63, 1, 3, false)
NPCSetDirFrame(3, 0)
EventSetTriggerMode(-1, -1, true, 2)

[Scr_0x36D5]
NPCMoveToBlock(24, 63, 0, 3, false)
NPCMoveToBlock(26, 65, 1, 3, false)
NPCMoveToBlock(26, 66, 0, 3, false)
NPCMoveToBlock(28, 68, 1, 3, false)
NPCMoveToBlock(27, 70, 0, 3, false)
NPCMoveToBlock(30, 73, 1, 3, false)
NPCMoveToBlock(26, 78, 0, 3, false)
NPCMoveToBlock(14, 66, 0, 3, false)
NPCMoveToBlock(27, 52, 1, 3, false)
NPCMoveToBlock(25, 50, 1, 3, false)
NPCMoveToBlock(24, 51, 1, 3, false)
NPCMoveToBlock(23, 50, 0, 3, false)
NPCMoveToBlock(18, 54, 1, 3, false)
NPCSetDirFrame(2, 0)
EventSetTriggerMode(-1, -1, false, 2)

[Scr_0x36E5]
NPCMoveToBlock(26, 52, 1, 3, false)
NPCMoveToBlock(23, 49, 1, 3, false)
NPCMoveToBlock(22, 50, 1, 3, false)
NPCMoveToBlock(21, 49, 0, 3, false)
NPCSetDirFrame(2, 0)
EventSetTriggerMode(-1, -1, false, 2)

[Scr_0x36EC]
NPCMoveToBlock(24, 50, 0, 3, false)
NPCMoveToBlock(23, 50, 1, 3, false)
NPCMoveToBlock(22, 49, 1, 3, false)
NPCSetDirFrame(3, 0)
EventSetTriggerMode(-1, -1, false, 2)

[Event_00047_00001_Trigger]
SetDlgCenter(0, 0x00000000, false)
//此石门已上锁．．

[Scr_0x36F5]
EventSetTriggerMode(-1, -1, false, 0)
EventSetState(-1, -1, true, false)
PlaySound(155)
NPCSetFrame(1)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(2)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(3)

[Scene_00044_Enter]
SetBattlefield(24)
SetBattleMusic(37)
MusicPlay(78, true, 0.00)

[Event_00049_00030_Trigger]
SceneEnter(50)
PartySetPos(25, 57, 1)
FadeOut(0)

[Event_00050_00001_Trigger]
SceneEnter(49)
PartySetPos(28, 53, 0)
FadeOut(0)

[Scene_00054_Teleport]
RoleSetDirFrame(0, 3, 0)
SceneEnter(49)
PartySetPos(22, 31, 1)
FadeOut(0)

[Event_00054_00003_Trigger]
SceneEnter(55)
PartySetPos(54, 93, 0)
FadeOut(0)

[Event_00055_00002_Trigger]
SceneEnter(54)
PartySetPos(8, 79, 0)
FadeOut(0)

[Event_00054_00004_Trigger]
SceneEnter(56)
PartySetPos(46, 114, 0)
FadeOut(0)

[Scr_0x371B]
SceneEnter(57)
PartySetPos(46, 114, 0)
FadeOut(0)

[Event_00049_00003_Trigger]
SceneEnter(52)
PartySetPos(13, 79, 0)
FadeOut(0)

[Event_00052_00001_Trigger]
SceneEnter(49)
PartySetPos(50, 45, 0)
FadeOut(0)

[Event_00049_00002_Trigger]
SceneEnter(54)
PartySetPos(33, 112, 0)
FadeOut(0)

[Event_00054_00002_Trigger]
SceneEnter(61)
PartySetPos(41, 86, 0)
FadeOut(0)

[Event_00049_00004_Trigger]
SceneEnter(51)
PartySetPos(23, 28, 1)
FadeOut(0)

[Event_00049_00005_Trigger]
SceneEnter(51)
PartySetPos(20, 67, 1)
FadeOut(0)

[Event_00049_00006_Trigger]
SceneEnter(51)
PartySetPos(26, 104, 0)
FadeOut(0)

[Event_00049_00007_Trigger]
SceneEnter(51)
PartySetPos(50, 62, 1)
FadeOut(0)

[Event_00049_00008_Trigger]
SceneEnter(51)
PartySetPos(51, 28, 1)
FadeOut(0)

[Event_00049_00009_Trigger]
SceneEnter(51)
PartySetPos(48, 106, 0)
FadeOut(0)

[Event_00051_00001_Trigger]
SceneEnter(49)
PartySetPos(29, 74, 0)
FadeOut(0)

[Event_00051_00002_Trigger]
SceneEnter(49)
PartySetPos(20, 82, 1)
FadeOut(0)

[Event_00051_00003_Trigger]
SceneEnter(49)
PartySetPos(34, 79, 1)
FadeOut(0)

[Event_00051_00004_Trigger]
SceneEnter(49)
PartySetPos(26, 88, 0)
FadeOut(0)

[Event_00051_00005_Trigger]
SceneEnter(49)
PartySetPos(41, 89, 0)
FadeOut(0)

[Event_00051_00006_Trigger]
SceneEnter(49)
PartySetPos(33, 97, 0)
FadeOut(0)

[Event_00052_00002_Trigger]
SceneEnter(53)
PartySetPos(40, 55, 0)
FadeOut(0)

[Event_00053_00001_Trigger]
SceneEnter(52)
PartySetPos(28, 52, 0)
FadeOut(0)

[Scene_00048_Teleport]
SceneEnter(49)
PartySetPos(18, 102, 0)
FadeOut(0)

[Event_00049_00001_Trigger]
SceneEnter(48)
PartySetPos(55, 95, 1)
FadeOut(0)

[Event_00049_00010_Trigger]
//阿九：
//大哥哥，告诉你喔！
//遇到殭屍的时候，想要
//活命的话就停止呼吸！

[Event_00049_00010_Auto]
ReplaceAndPause()
GotoWithProbability(5, Event_00049_00010_Auto)
NPCMoveToBlock(25, 89, 0, 2, true)
NPCMoveToBlock(25, 89, 1, 2, true)
NPCMoveToBlock(25, 89, 0, 3, false)
NPCMoveToBlock(22, 91, 1, 3, false)
NPCMoveToBlock(18, 87, 0, 3, false)
NPCMoveToBlock(20, 85, 0, 3, false)
NPCMoveToBlock(19, 84, 0, 3, false)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(6, false, false)
NPCMoveToBlock(26, 77, 0, 2, true)
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(5, false, false)
NPCMoveToBlock(31, 82, 1, 3, false)
NPCMoveToBlock(26, 87, 1, 3, false)
NPCMoveToBlock(27, 87, 0, 3, false)
WaitEventAutoScriptRun(11, false, false)
NPCMoveToBlock(22, 91, 1, 3, false)
ReplaceAndPauseWithNop(Event_00049_00010_Auto, 0)

[Event_00049_00011_Trigger]
//小孩：
//妈妈说不可以跟陌生人讲话
EventSetAutoScript(-1, -1, Scr_0x3790)
ReplaceAndPause()

[Scr_0x3790]
NPCMoveToBlock(27, 90, 0, 3, false)
NPCMoveToBlock(25, 88, 1, 3, false)
NPCMoveToBlock(26, 88, 0, 3, false)
NPCMoveToBlock(24, 86, 1, 3, false)
EventSetState(-1, -1, false, false)

[Event_00051_00007_Trigger]
//渔夫：今天是钓鱼的好天气

[Scr_0x3798]
//村民：
//嗯．．今天天气不错
//是钓鱼的好日子
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//这位大叔，我的一位朋友
//生病需要活鲤鱼作药引
//可否向您借一下钓具？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//村民：
//喔．．好啊
EventSetState(51, 8, false, false)
VideoUpdate(0, false)
AddItem(224, 0)
Replace()
//村民：
//用完记得要还我喔

[Scr_0x37AC]
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//钓竿还您，谢谢！
RemoveItem(224, 1, Null)
ReplaceAndPause()
//村民：
//钓鱼可以修身养性
//是项不错的休闲娱乐

[Event_00049_00012_Trigger]
//居民：
//韩医仙不但医术好、人也好
//所以啊～他当上本村的村长
//实在是众望所归
ReplaceAndPause()
//居民：
//韩医仙的女儿是个大美人哩！
//更难得是～她的心地跟他爹一
//样的善良，不知道哪家小伙子
//有幸能娶到她当媳妇呢！

[Event_00049_00013_Trigger]
//小孩：
//妈妈带我去给韩医仙看病
//我的肚子就不痛了

[Event_00049_00014_Trigger]
//守桥壮丁：
//这座桥再过去的黑水村正
//在闹殭屍，千万别到那边去。
VideoRestore()
//这是村长下的令

[Event_00049_00017_Trigger]
//小童：
//我们在玩骑马赛跑
//看谁的木马比较快

[Event_00049_00018_Trigger]
//小孩：
//好好玩喔！

[Event_00049_00017_Auto]
NPCSetDirFrame(1, 0)
GotoWithProbability(50, Event_00049_00017_Auto)
NPCMoveToBlock(38, 49, 0, 3, false)
NPCMoveToBlock(37, 49, 1, 3, false)
NPCMoveToBlock(42, 54, 1, 3, false)
NPCMoveToBlock(43, 54, 0, 3, false)
GotoWithNop(Event_00049_00017_Auto, 0)

[Event_00049_00018_Auto]
WaitEventAutoScriptRun(3, false, false)
NPCMoveToBlock(39, 48, 0, 3, false)
NPCSetDirFrame(0, 0)
NPCMoveToBlock(44, 53, 1, 3, false)
NPCSetDirFrame(0, 0)
NPCSetDirFrame(1, 0)
NPCMoveToBlock(44, 53, 0, 3, false)
GotoWithNop(Event_00049_00018_Auto, 0)

[Event_00049_00019_Trigger]
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//小朋友你知不知道村长
//的家怎麽去啊？
NPCSetDirFrame(2, 0)
VideoUpdate(0, false)
//小童：
//我知道啊！
//韩爷爷的家就在前面。

[Event_00049_00033_Trigger]
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//你们在这儿做什麽啊？
SetDlgUpper(0, 0x00000000, false)
//我们在排队买糯米呀！
//难道你不知道糯米可以
//治殭屍的吗？

[Event_00049_00034_Trigger]
//村民：
//欸！骆记的米店老板趁这个
//紧急的时候抬高售价，苦的
//是我们老百姓啊！

[Event_00049_00035_Trigger]
//村民：
//不知道那黑水镇的屍妖会不会
//跑到咱们白河村来作怪。

[Event_00049_00036_Trigger]
//村民：
//要不是韩村长好心收留从黑水
//镇逃出来的百姓，真不知道现
//在他们该怎麽办。

[Event_00049_00037_Trigger]
//村民：
//不要挤啊！
//小兄弟，买东西是要排队的。

[Event_00049_00038_Trigger]
//村民：
//小兄弟，我看你是外地来
//的吧？！你可能不知道河东
//的黑水镇现在正在闹殭屍
//千万不要接近那里！

[Event_00049_00039_Trigger]
//村民：
//小伙子，别挤！

[Event_00049_00040_Trigger]
//村民：
//不知道糯米对付殭屍
//是不是真的有效。

[Event_00049_00031_Trigger]
SetDlgBox(0x00000000)
//河中有鲤鱼游来游去．．

[Scr_0x3816]
FadeOut(0)
HeroSetSprite(0, 259, false)
PartySetRole(1)
RoleSetDirFrame(0, 0, 0)
PartySetPos(7, 91, 0)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 0, 1)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 2)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 3)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 4)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 5)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 4)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 5)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 6)
WaitEventAutoScriptRun(5, false, false)
RoleSetDirFrame(0, 0, 7)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 8)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 9)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 10)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 11)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 12)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 13)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 14)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 15)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 16)
WaitEventAutoScriptRun(40, false, false)
EventSetState(49, 20, false, false)
RoleSetDirFrame(0, 0, 17)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 18)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 17)
WaitEventAutoScriptRun(10, false, false)
RoleSetDirFrame(0, 0, 18)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 17)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 0, 18)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 19)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 20)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 21)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 22)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 23)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 24)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 25)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 26)
WaitEventAutoScriptRun(0, false, false)
SetDlgBox(0x00000000)
//钓到一条鲤鱼
FadeOut(0)
AddItem(222, 0)
EventSetTriggerScript(51, 7, Scr_0x37AC)
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 0, 0)
EventSetState(-1, -1, false, false)
PartySetPos(8, 87, 1)

[Event_00053_00006_Auto]
NPCSetDirFrame(2, 0)
GotoWithProbability(6, Event_00053_00006_Auto)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(40, 33, 0, 2, true)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(7, false, false)
NPCMoveToBlock(38, 35, 0, 2, true)
NPCMoveToBlock(37, 34, 1, 2, true)
WaitEventAutoScriptRun(3, false, false)
NPCMoveToBlock(36, 35, 1, 2, true)
NPCMoveToBlock(35, 34, 0, 2, true)
ReplaceAndPause()
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(11, false, false)
NPCSetDirFrame(3, 0)
ReplaceAndPause()
NPCMoveToBlock(36, 35, 1, 2, true)
NPCMoveToBlock(35, 37, 0, 2, true)
NPCMoveToBlock(33, 35, 1, 2, true)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(7, false, false)
NPCMoveToBlock(35, 37, 0, 2, true)
NPCMoveToBlock(38, 34, 0, 2, true)
WaitEventAutoScriptRun(9, false, false)
NPCSetDirFrame(2, 0)
ReplaceAndPause()
NPCMoveToBlock(37, 33, 0, 2, true)
WaitEventAutoScriptRun(10, false, false)
NPCMoveToBlock(38, 34, 1, 2, true)
NPCMoveToBlock(34, 38, 1, 2, true)
NPCMoveToBlock(35, 39, 1, 2, true)
NPCMoveToBlock(33, 41, 1, 2, true)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(14, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(9, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(12, false, false)
NPCMoveToBlock(36, 38, 1, 2, true)
NPCMoveToBlock(35, 37, 0, 2, true)
NPCMoveToBlock(39, 32, 1, 2, true)
NPCMoveToBlock(40, 33, 0, 2, true)
WaitEventAutoScriptRun(5, false, false)
NPCMoveToBlock(38, 31, 0, 2, true)
ReplaceAndPauseWithNop(Event_00053_00006_Auto, 0)

[Event_00053_00003_Trigger]
EventSetTriggerMode(-1, -1, false, 2)
RoleSetDirFrame(0, 2, 0)
RoleSetDirFrame(1, 2, 0)
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//灵儿．．！！
VideoUpdate(0, false)
SetDlgUpper(31-1-1, 0x00000000, false)
//韩医仙：
//二位认识她吗？
RoleSetDirFrame(1, 1, 0)
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//赵姑娘在我家作客时突然失踪
//还好．．吉人天相
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//医仙，谢谢您
//是您救了灵儿吧？
VideoUpdate(0, false)
SetDlgUpper(31-1-1, 0x00000000, false)
//韩医仙：
//呵～小女出外采药时
//发现赵姑娘昏倒在村外林子
//里，於是将她带回来
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//灵儿病了吗？严不严重？
VideoUpdate(0, false)
SetDlgUpper(31-1-1, 0x00000000, false)
//韩医仙：
//这．．你放心，我会医好她的
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//我能帮的上忙吗？
//医仙若有何差遣，我一定
//万死不辞
VideoUpdate(0, false)
SetDlgUpper(31-1-1, 0x00000000, false)
//韩医仙：
//嗯．．这样吧
//最近因为病患实在太多
//许多药材都用完了
VideoRestore()
//我这里有种药方应该可以
//对赵姑娘的身体有所帮助
//但是因药材缺乏而作罢
VideoRestore()
//既然二位有心，就麻烦二
//位替我弄到这些药材来
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(3, 0)
VideoUpdate(0, false)
SetDlgUpper(31-1-1, 0x00000000, false)
//韩医仙：
//你把这药单交给门口的阿宝
//叫他照单子上的配方煎药
EventSetTriggerScript(52, 14, Scr_0x393C)
ReplaceAndPause()
SetDlgUpper(31-1-1, 0x00000000, false)
//韩医仙：
//药煎好了吗？
ReplaceAndPause()
SetDlgUpper(31-1-1, 0x00000000, false)
//韩医仙：
//老夫身为村长，又是村里唯一
//的医生，能多救一个算一个。

[Scr_0x38E3]
NPCMoveToBlock(46, 39, 0, 2, true)
NPCMoveToBlock(38, 46, 1, 2, true)
NPCMoveToBlock(34, 42, 1, 2, true)
ReplaceAndPauseWithNop(Event_00001_00020_Auto, 0)

[Event_00053_00020_Trigger]
//待诊病人：
//我娘亲已经被妖怪杀害了
//我爹也身受重伤躺在里面
//如果连我爹都????
VideoRestore()
//我孤苦无依的一个人该怎麽办

[Event_00053_00006_Trigger]
SetDlgUpper(17-2-1, 0x00000000, false)
//韩梦慈：
//河东的黑水镇屍妖肆虐，百姓
//们束手无策，只好逃到本村来
//而且许多人都受了伤，我和爹
//实在忙不过来

[Event_00052_00005_Trigger]
//村人：
//邻镇的屍妖越来越猖獗
//总有一天这村子也会遭殃
//到底该如何是好呢？

[Event_00052_00006_Trigger]
//村人：
//大夥儿说说看，去请一两位道
//士到黑水镇作法捉妖，这法子
//是不是行得通？

[Event_00052_00007_Trigger]
//村人：
//所谓「重赏之下必有勇夫」
//我们可以贴出布告，谁能替
//咱们白河村消灭屍妖，就有
//重赏。

[Event_00052_00008_Trigger]
//村人：
//我们应该准备桃木剑、黑狗血
//以及一大堆符咒才能来对付殭
//屍。

[Event_00052_00009_Trigger]
//村人：
//太可怕了，我在想是不是该
//撤离本村的百姓逃避屍妖的
//威胁？

[Event_00052_00010_Trigger]
//村人：
//咱们趁着白天殭屍们在休息
//的时候，一把火给他们全烧
//光，不就结了？

[Event_00052_00011_Trigger]
//村人：
//照古书上讲，刚成形的殭屍
//是看不见人的，再这样拖下
//去，等到牠们成了精看得见
//人的话，那就更难对付了

[Event_00052_00012_Trigger]
//村人：
//那些从黑水镇逃过来的伤患
//会不会也变成殭屍啊？
//我看为了自保是不是该??

[Event_00052_00013_Trigger]
//村人：
//大家在商量对付殭屍的事
//真是伤透脑筋．．小兄弟
//你是不是有什麽更好的对策？

[Event_00052_00003_Trigger]
SetDlgBox(0x00000000)
//采得一颗银杏果
AddItem(221, 0)
ReplaceAndPause()

[Event_00048_00007_Trigger]
EventSetAutoScript(48, 7, Scr_0x0251)
WaitEventAutoScriptRun(0, false, false)
//老农夫：
//这处林子里有许多野鹿呢
//如果运气好，你也许能碰到
ReplaceAndPause()
//不过～野鹿跑的很快，只有在
//牠常经过的路上设下陷阱，才
//能捕捉的到

[Event_00055_00003_Trigger]
SceneEnter(70)
PartySetPos(51, 45, 0)
FadeOut(0)

[Event_00052_00014_Trigger]
//煎药僮子：
//你要找韩医仙吗？
//他就在屋子里。

[Scr_0x393C]
EventSetState(48, 9, true, true)
EventSetState(48, 10, true, true)
EventSetTriggerScript(51, 7, Scr_0x3798)
SetDlgUpper(0, 0x00000000, false)
//煎药僮子：
//需要药材"人蔘"、"雪莲子"
//"何首乌"、"银杏子"、"鹿茸"
//外加一条活的"鲤鱼"
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//活鲤鱼！？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//煎药僮子：
//没错！这付药方要活鲤鱼
//的肝作药引才有疗效
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//我们分头去弄这些药材
//人蔘、雪莲子、何首乌
//这三样药材我可以弄的到
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//好！　其它的三项我来想办法
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//正午之前我会赶回来
FadeOut(0)
HeroSetSprite(0, 232, false)
PartySetRole(1)
RoleSetDirFrame(0, 0, 0)
SceneSetScripts(53, Scr_0x3ADA, Null)
SceneEnter(53)
ReplaceAndPause()
[Scr_0x3960]
SetDlgUpper(0, 0x00000000, false)
//煎药僮子：
//你听好："人蔘"、"雪莲子"、"何首乌"
//"银杏子"、"鹿茸"、"鲤鱼"
VideoUpdate(0, false)
JumpIfItemCountLessThan(221, 1, Scr_0x398A)
JumpIfItemCountLessThan(223, 1, Scr_0x398F)
JumpIfItemCountLessThan(222, 1, Scr_0x398F)
//嗯．．这下药材都齐全了
//你再等一下，药马上就煎好
FadeOut(0)
WaitEventAutoScriptRun(0, false, false)
RemoveItem(221, 1, Null)
RemoveItem(223, 1, Null)
RemoveItem(222, 1, Null)
AddItem(226, 0)
//让病人服下这帖六神丹
//要趁热喝喔！
EventSetAutoScript(53, 3, Event_00001_00020_Auto)
EventSetAutoScript(53, 6, Null)
EventSetDirFrame(53, 6, 1, 0)
EventSetTriggerScript(53, 3, Scr_0x3AC2)
EventSetTriggerScript(53, 6, Scr_0x3AC6)
EventSetPos(53, 3, 1392, 584)
EventSetPos(53, 6, 1456, 616)
EventSetState(52, 4, false, false)
PartySetRole(13)
ReplaceAndPause()
//煎药僮子：
//六神丹乃我韩家祖传秘方．．
//药性温和、滋补强身，对贫血
//伤风、气虚等极俱神效。妇女
//服用，还有调血、安胎之疗效
VideoUpdate(0, false)
Replace()
//煎药僮子：
//你们还要别的药方吗？
//方圆百里之内，就我们
//韩家药铺是最出名的
VideoUpdate(0, false)
ShowBuyItemMenu(8)

[Scr_0x398A]
//煎药僮子：
//屋後院子里有一棵银杏果树
//摘一颗果子便足够了
ReplaceAndPauseWithNop(Scr_0x3960, 0)

[Scr_0x398F]
//煎药僮子：
//鹿茸和鲤鱼肝是很珍贵的
//这两种药材也都缺货啊
ReplaceAndPauseWithNop(Scr_0x3960, 0)

[Event_00053_00008_Trigger]
SetDlgBox(0x00000000)
//得到一包九阴散
AddItem(76, 0)
EventSetState(-1, -1, false, false)

[Event_00053_00009_Trigger]
SetDlgBox(0x00000000)
//得到九节菖蒲
AddItem(29, 0)
EventSetState(-1, -1, false, false)

[Event_00053_00010_Trigger]
SetDlgBox(0x00000000)
//得到天香续命露
AddItem(38, 0)
EventSetState(-1, -1, false, false)

[Event_00053_00011_Trigger]
SetDlgBox(0x00000000)
//得到神仙茶
AddItem(50, 0)
EventSetState(-1, -1, false, false)

[Event_00053_00012_Trigger]
SetDlgBox(0x00000000)
//得到试炼果
AddItem(52, 0)
EventSetState(-1, -1, false, false)

[Event_00048_00008_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
EventSetAutoScript(-1, -1, Scr_0x39C0)
ReplaceAndPause()
EventSetTriggerMode(-1, -1, false, 0)
EventSetAutoScript(-1, -1, Scr_0x39C5)
ReplaceAndPause()
EventSetTriggerMode(-1, -1, false, 0)
EventSetAutoScript(-1, -1, Scr_0x39CB)
ReplaceAndPause()
[Scr_0x39B6]
EventSetTriggerMode(-1, -1, false, 0)
EventSetAutoScript(-1, -1, Scr_0x39D0)
ReplaceAndPause()
EventSetTriggerMode(-1, -1, false, 0)
EventSetAutoScript(-1, -1, Scr_0x39D8)
ReplaceAndPause()
EventSetTriggerMode(-1, -1, false, 0)
EventSetAutoScript(-1, -1, Scr_0x39E0)
ReplaceAndPauseWithNop(Scr_0x39B6, 0)

[Scr_0x39C0]
NPCMoveToBlock(17, 55, 0, 8, false)
NPCMoveToBlock(18, 54, 0, 3, false)
NPCSetDirFrame(3, 0)
EventSetTriggerMode(-1, -1, true, 3)

[Scr_0x39C5]
NPCMoveToBlock(8, 43, 0, 8, false)
NPCMoveToBlock(15, 36, 0, 8, false)
NPCMoveToBlock(20, 40, 1, 8, false)
NPCMoveToBlock(29, 31, 1, 8, false)
EventSetTriggerMode(-1, -1, true, 4)

[Scr_0x39CB]
NPCMoveToBlock(28, 30, 1, 3, false)
NPCMoveToBlock(31, 27, 1, 8, false)
NPCMoveToBlock(38, 34, 0, 8, false)
EventSetTriggerMode(-1, -1, true, 4)

[Scr_0x39D0]
NPCMoveToBlock(37, 34, 1, 3, false)
NPCMoveToBlock(34, 31, 1, 8, false)
NPCMoveToBlock(36, 30, 0, 8, false)
NPCMoveToBlock(34, 28, 0, 8, false)
NPCMoveToBlock(35, 26, 1, 8, false)
NPCMoveToBlock(34, 25, 0, 8, false)
EventSetTriggerMode(-1, -1, true, 4)

[Scr_0x39D8]
NPCMoveToBlock(39, 20, 0, 8, false)
NPCMoveToBlock(42, 23, 0, 8, false)
NPCMoveToBlock(43, 21, 1, 8, false)
NPCMoveToBlock(42, 20, 0, 8, false)
NPCMoveToBlock(40, 22, 0, 8, false)
NPCMoveToBlock(38, 20, 0, 8, false)
EventSetTriggerMode(-1, -1, true, 3)

[Scr_0x39E0]
NPCMoveToBlock(24, 33, 1, 8, false)
NPCMoveToBlock(26, 35, 0, 8, false)
NPCMoveToBlock(24, 36, 1, 8, false)
NPCMoveToBlock(29, 41, 1, 8, false)
NPCMoveToBlock(36, 34, 1, 8, false)
NPCMoveToBlock(37, 35, 0, 3, false)
EventSetTriggerMode(-1, -1, true, 4)

[Event_00048_00009_Trigger]
EventSetState(-1, -1, false, false)
AddItem(225, 0)
VideoUpdate(0, false)
SetDlgBox(0x00000000)
//收起捕兽夹

[Event_00048_00009_Auto]
JumpIfEventNotInZone(48, 8, 0, Event_00048_00009_Auto)
Call(Scr_0x39F2, 0, 0)
EventSetState(-1, -1, false, false)

[Scr_0x39F2]
EventSetAutoScript(48, 8, Null)
EventSetTriggerScript(48, 8, Scr_0x39F8)
EventSetTriggerMode(48, 8, false, 1)
EventSetDirFrame(48, 8, 0, 16)
PlaySound(14)

[Scr_0x39F8]
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//鹿兄啊～鹿兄！对不起啦
//我的朋友生了病，所以借你头
//上的角来入药，不会伤你性命
AddItem(223, 0)
FadeOut(0)
EventSetDirFrame(48, 8, 1, 0)
EventSetAutoScript(48, 8, Scr_0x3A07)
WaitEventAutoScriptRun(12, false, false)
EventSetState(48, 8, false, false)
SetDlgBox(0x00000000)
//取得鹿茸後，放鹿逃走
EventSetState(52, 4, true, true)

[Scr_0x3A07]
EventWalkOneStep(-1, -1, -8, -4)
EventWalkOneStep(-1, -1, -11, -5)
EventWalkOneStep(-1, -1, -13, -7)
[Scr_0x3A0A]
EventWalkOneStep(-1, -1, -16, -8)
GotoWithNop(Scr_0x3A0A, 0)

[Event_00053_00002_Trigger]
SetDlgBox(0x00000000)
//赵灵儿仍昏迷不醒

[Scr_0x3A10]
VideoUpdate(0, false)
SetDlgBox(0x00000000)
//让赵灵儿饮下药汤
MusicStop()
FadeOut(3)
PlayCDOrMusic(5, 55)
SceneSetScripts(49, Scr_0x3C9D, Null)
NPCSetDirFrame(0, 1)
VideoUpdate(0, true)
SetDlgUpper(2-9-1, 0x00000000, false)
//赵灵儿：
//逍遥哥哥．．你们．．
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//啊～你还不要起来
//乖乖的躺着休息
VideoUpdate(0, false)
SetDlgUpper(31-1-1, 0x00000000, false)
//韩医仙：
//呵．．没关系
//赵姑娘已经可以下床走动了
EventSetState(-1, -1, false, false)
PartySetPos(44, 37, 1)
PartySetRole(123)
RoleSetDirFrame(1, 1, 0)
RoleSetDirFrame(0, 0, 0)
EventSetDirFrame(53, 3, 3, 0)
EventSetAutoScript(53, 3, Null)
EventSetDirFrame(53, 6, 1, 0)
FadeOut(0)
WaitEventAutoScriptRun(0, false, false)
SetDlgLower(2-1-1, 0x00000000, false)
//赵灵儿：
//我想留下来，以我的法术多少
//可以帮韩大夫医治一些村民
VideoUpdate(0, false)
SetDlgUpper(31-1-1, 0x00000000, false)
//韩医仙：
//这附近一带的村子饱受屍妖肆
//孽，能搬走的人早就都走了，
//本村幸有河水阻隔，才暂时得
//以安泰。三位既不是本地人，
//老夫劝你们还是早点离开吧。
SetDlgLower(2-1-1, 0x00000000, false)
//赵灵儿：
//不．．看到村民们遭受这般苦
//难，我觉得．．我应该替村民
//们做点事，以报答医仙的恩情
VideoUpdate(0, false)
SetDlgUpper(31-1-1, 0x00000000, false)
//赵姑娘这般慈悲心肠
//老夫实在太感激了．．
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//光是医人也不能解决问题吧！
//屍妖一日不除，这里的居民还
//是永无宁日。大家何不想个办
//法来把屍妖除掉？
VideoUpdate(0, false)
SetDlgUpper(31-1-1, 0x00000000, false)
//韩医仙：
//唉．．谈何容易。屍妖不同於
//其它妖怪。他们刀枪不侵、水
//火不入，更可怕的是会放屍毒
//一旦毒气攻心，老夫也医不活
//以前只有在没有月光的夜晚才
//会出现，到了最近，在大白天
//都会四处横行。再这样下去，
//连这白河村也不能住人了
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//您身为村长怎可说这般丧气话
//天下一物克一物，妖怪也不例
//外。我不相信没人能治得了那
//些屍妖
VideoUpdate(0, false)
SetDlgLower(17-1-1, 0x00000000, false)
//韩梦慈：
//我知道有个人能对付屍妖！
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(1, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//哦！韩姑娘知道？
VideoUpdate(0, false)
SetDlgLower(17-1-1, 0x00000000, false)
//韩梦慈：
//大约一个月前"玉佛寺"的主持
//智修大师曾驱退一群屍妖，救
//了江家的三位公子的命，後来
//三兄弟还一起出家成为智修大
//师门下弟子。据说这件事之後
//屍妖都不敢再靠近玉佛寺
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(1-3-1, 0x00000000, false)
//李逍遥：
//那好极了，我们这就去请
//玉佛寺的和尚下山收妖！
VideoUpdate(0, false)
SetDlgLower(17-2-1, 0x00000000, false)
//韩梦慈：
//不．．但是．．你．．
//还是打消这念头。因为．．
SetDlgUpper(31-1-1, 0x00000000, false)
//韩医仙：
//梦慈～让爹来说吧．．
RoleSetDirFrame(0, 1, 0)
EventSetDirFrame(53, 6, 2, 0)
VideoUpdate(0, false)
RoleSetDirFrame(1, 2, 0)
EventSetDirFrame(53, 6, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(31-1-1, 0x00000000, false)
//韩医仙：
//坦白说．．老夫也曾派人去请
//智修大师下山，但是．．至今
//见过主持方丈的人，没有一个
//人回来
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//不会吧．．．
//难不成那些和尚会吃人！？
VideoUpdate(0, false)
SetDlgUpper(31-1-1, 0x00000000, false)
//韩医仙：
//当然不．．而是都当了和尚
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(0, false, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//也许．．
//那位大师真的是佛法无边
VideoUpdate(0, false)
SetDlgUpper(31-1-1, 0x00000000, false)
//韩医仙：
//不．．少侠且听我说
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
RoleSetDirFrame(1, 1, 0)
VideoUpdate(0, false)
SetDlgUpper(31-1-1, 0x00000000, false)
//韩医仙：
//小女梦慈和江家大公子少云自
//幼就订了亲的，俩人感情一向
//很好。前不久两家才说好，等
//到梦慈满十六岁就要来下聘。
//一个月前老夫听说玉佛寺的智
//修大师法力高深，於是想请他
//下山除妖。少云和二个弟弟便
//自告奋勇前往，结果一去不返
//老夫和小女多次前往查问，才
//知道兄弟三人都出家当了和尚
//这件事至今仍令人想不透．．
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(1, 2, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//听起来．．这村子的
//灾难还真不少．．
EventSetTriggerScript(53, 3, Scr_0x3ACA)
EventSetTriggerScript(53, 6, Scr_0x3ACE)
EventModifyPos(49, 14, 0, 32)
EventSetTriggerScript(49, 14, Scr_0x3B92)
EventSetState(49, 15, false, false)
EventSetState(49, 16, false, false)

[Scr_0x3AC2]
SetDlgUpper(31-1-1, 0x00000000, false)
//韩医仙：
//快让赵姑娘服药吧

[Scr_0x3AC6]
SetDlgUpper(17-1-1, 0x00000000, false)
//韩梦慈：
//辛苦你们了．．

[Scr_0x3ACA]
//韩医仙：
//呵～不必客气
//此乃我行医者本份

[Scr_0x3ACE]
//韩梦慈：
//如果你们还需要别的药材
//可以找我弟弟阿宝

[Event_00048_00010_Trigger]
//猎户：
//这位小兄弟，我在前面的林子
//里放了捕兽夹，你走这条路可
//要留神点，别踩着了。
ReplaceAndPause()
//这次我一定要逮到那头雄鹿
ReplaceAndPauseWithNop(Event_00048_00010_Trigger, 0)

[Scr_0x3ADA]
PartySetPos(45, 36, 0)
EventSetDirFrame(53, 2, 0, 1)
EventSetDirFrame(53, 3, 3, 0)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(53, 3, 2, 0)
VideoUpdate(0, false)
SetDlgLower(31-1-1, 0x00000000, false)
//韩医仙：
//赵姑娘．．．恕老夫多言
//他二人对你颇为关心
//姑娘为何避不见面呢？
VideoUpdate(0, false)
SetDlgUpper(2-5-1, 0x00000000, false)
//赵灵儿：
//我．．
//不想让他们知道这件事
SetDlgLower(31-1-1, 0x00000000, false)
//韩医仙：
//好吧．．你放心
//老夫会继续替你瞒着其他人
VideoUpdate(0, false)
SetDlgLower(31-1-1, 0x00000000, false)
//韩医仙：
//唉～　但是．．
//你一个未出嫁的姑娘，就．．
//加上身子又很虚弱，若没有人
//照顾，往後的日子怎麽过呢？
VideoUpdate(0, false)
SetDlgUpper(2-7-1, 0x00000000, false)
//赵灵儿：
//大夫．．．．
SetDlgLower(31-1-1, 0x00000000, false)
//韩医仙：
//你先在我这里养好身子
//这些日子你再好好想想吧
VideoUpdate(0, false)
SetDlgLower(31-1-1, 0x00000000, false)
//韩医仙：
//老夫看人是不会错的
//李少侠～不会是个薄情之人
EventSetAutoScript(53, 3, Scr_0x38E3)
EventSetDirFrame(53, 2, 0, 0)
FadeOut(0)
SceneEnter(52)
PartySetPos(28, 56, 0)
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 3, 0)
ReplaceAndPause()

[Scene_00048_Enter]
MusicPlay(12, true, 0.00)
PartySetPos(14, 104, 1)
RoleSetDirFrame(0, 0, 0)
SetTimeFilter(0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//少女：
//多谢公子相救之恩
//请受小女子一拜．．
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//不，这点小事你不必放在心上
//我们也是举手之劳而已。
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//少女：
//寒舍就在前面不远的白河村
//二位若不嫌弃，欢迎到寒舍
//来奉茶
WaitEventAutoScriptRun(30, false, false)
VideoFadeAndUpdate(65532)
EventSetState(48, 2, false, false)
EventSetState(48, 3, false, false)
EventSetState(48, 4, false, false)
EventSetState(48, 5, false, false)
EventSetState(48, 6, false, false)
VideoUpdate(0, true)
SetDlgLower(1-4-1, 0x00000000, false)
//李逍遥：
//唉．．无心插柳～
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//别灰心嘛～我相信灵儿妹子
//一定不会有事的．．
SetDlgLower(1-4-1, 0x00000000, false)
//李逍遥：
//看来．．只得从头找起了
Replace()
SetBattlefield(2)

[Event_00055_00004_Trigger]
EventSetTriggerMode(55, 4, false, 2)
EventSetTriggerMode(56, 0, false, 2)
EventSetDirFrame(55, 4, 3, 0)
EventSetDirFrame(56, 0, 3, 0)
//苗人：
//看什麽看！　滚开！
ReplaceAndPause()
//苗人：
//没听到是不是？！　欠扁吗？

[Event_00053_00004_Trigger]
FadeOut(0)
EventSetState(-1, -1, false, false)
EventSetState(53, 5, true, true)
EventSetState(49, 14, false, false)
EventSetTriggerScript(55, 4, Scr_0x3B6C)
EventSetTriggerScript(56, 0, Scr_0x3B6C)
VideoUpdate(0, false)
SetDlgUpper(31-1-1, 0x00000000, false)
//韩医仙：
//不好了～梦慈被抓走了！
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//是谁干的？
VideoUpdate(0, false)
SetDlgUpper(31-1-1, 0x00000000, false)
//韩医仙：
//那带头的人自称是拜月教的长老
//他说～如果要我女儿平安，就要
//赵姑娘自己一个人到"鬼阴山"
VideoUpdate(0, false)
SetDlgLower(1-8-1, 0x00000000, false)
//李逍遥：
//可恶．．
//又是那些阴魂不散的苗人！
VideoUpdate(0, false)
SetDlgLower(2-1-1, 0x00000000, false)
//赵灵儿：
//韩伯父～您放心，他们的目的
//是我，不会对梦慈姐姐不利的
VideoUpdate(0, false)
SetDlgLower(2-1-1, 0x00000000, false)
//赵灵儿：
//逍遥哥哥～梦慈姐姐对我有恩
//我一定要去救她
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//那当然！这次我一定要
//把他们全部打回老家
//永远不敢再来烦你！

[Event_00053_00005_Trigger]
//韩医仙：
//求求你们，救救梦慈啊！

[Scr_0x3B6C]
//苗人：
//来者何人？报上名来！
VideoUpdate(0, false)
SetDlgLower(2-1-1, 0x00000000, false)
//赵灵儿：
//我就是赵灵儿
//你们快将梦慈姐姐放了
VideoUpdate(0, false)
//苗人：
//是～赵小姐请随小人来
//我们长老已恭候多时了
//至於其他人．．就请回去吧
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//岂有此理，通通给我让开！
//本少爷要过去，谁也别想
//拦住我！
VideoUpdate(0, false)
//苗人：
//哼～擅闯者、杀无赦！
SetBattlefield(52)
BattleStart(33, Null, Null)
EventSetState(55, 4, false, false)
EventSetState(56, 0, false, false)

[Event_00052_00004_Trigger]
EventSetTriggerMode(-1, -1, false, 2)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//看吧！　我的动作还是比你快
//三样药材我已弄到手了
ReplaceAndPause()
//问我哪弄来的？　嘻．．
//我爹喜欢收藏天下名贵药材
//我只不过溜回家拿了一些出来
ReplaceAndPause()
//其它的三项药材都找到了吗？

[Scr_0x3B92]
//守桥壮丁：
//过了此桥往西北走便是"玉佛寺"
//往东北方是"黑水镇"，那里闹
//屍妖闹得很凶，已经没住人了
VideoUpdate(0, false)
//往西南方是"鬼阴山"，从前是
//自称鬼阴帮的山贼贼窟。
//山贼被赶跑後，最近出现了一
//群来路不明的苗人，杀人不眨
//眼，比山贼还可怕，你们最好
//不要随便靠近那一带

[Event_00051_00008_Trigger]
SetDlgBox(0x00000000)
//一付钓具

[Event_00051_00009_Trigger]
//老汉：
//谢谢小兄弟的大恩大德，小女
//尚有三分姿色，不知恩公会不
//会嫌弃小女。
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//啊！老丈，别开这种玩笑
//在下还有要事在身，只是路见
//不平、拔刀相助，要是没有别
//的事情，在下就此告辞

[Event_00051_00010_Trigger]
//少女：
//啊！原来是恩公
//还没请教您尊姓大名。
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//我姓李，名叫逍遥。
//这点小事，你就不必一直
//挂在心上了。

[Event_00051_00011_Trigger]
//村姑：
//啊．．恩公将奴家自蛇妖
//手中救出来，奴家还没报
//答您呢！
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//免了、免了！

[Event_00051_00012_Trigger]
//小孩：
//妈妈说：到了晚上会有殭屍
//到处跑来跑去，不可以出去玩

[Event_00051_00013_Trigger]
//居民：
//唉．．天灾人祸四起
//这村子快不能住人了

[Event_00051_00014_Trigger]
//居民：
//我那口子跑到山里去打猎
//一去就是一整天，也不知
//道要回来吃午饭

[Event_00053_00007_Trigger]
SetDlgUpper(7-2-1, 0x00000000, false)
//江少云：
//　　谢谢你们

[Scr_0x3BCE]
//韩梦慈：
//　　谢谢你们

[Scr_0x3BD1]
//韩医仙：
//　　谢谢你们

[Event_00050_00007_Trigger]
//村民：
//虽然这儿的糯米卖得很贵
//但是附近村落只有这家有卖。

[Event_00050_00008_Trigger]
//村民：
//小兄弟，看你小小年纪
//还是别到处乱跑的好
//这附近有殭屍出没。

[Event_00050_00009_Trigger]
//村民：
//天呐！难道我们村上就没有
//人可以去对付屍妖吗？

[Event_00050_00010_Trigger]
//村民：
//如果能得到玉佛寺和尚们的
//帮助，也许就可以对付黑水
//镇的殭屍。

[Event_00050_00011_Trigger]
//村民：
//早知道，咱们家也改行种糯米
//现在我也可以大捞一笔

[Event_00050_00012_Trigger]
//村民：
//真是气死人了，竟然还有
//商人在这个时候故意把糯
//米卖那麽贵。

[Event_00050_00013_Trigger]
//村民：
//这些商人真是没天良，以後
//生小孩一定没屁眼。

[Event_00050_00014_Trigger]
//村民：
//你也是来买糯米的吗？
//当心他们拿黏米当糯米卖喔！

[Event_00050_00015_Trigger]
//村民：
//喂喂喂！
//你想插队啊？小心老子扁你！

[Event_00050_00016_Trigger]
//村民：
//小老弟，俺憋了一肚子的尿
//是不是可以帮俺排一下队
//俺去解个手。

[Event_00050_00017_Trigger]
//村民：
//不要吵。

[Event_00050_00002_Trigger]
SetDlgUpper(32-1-1, 0x00000000, false)
//骆员外：
//找我有什麽事啊？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//现在白河村的百姓正处於最
//紧张的时刻，每天就怕河东
//黑水镇的屍妖会跑过来
VideoRestore()
//你也知道只有糯米能防治殭屍
//但是你却趁机抬高米价，这麽
//做也未免太没良心了吧？
VideoUpdate(0, false)
SetDlgUpper(32-1-1, 0x00000000, false)
//骆员外：
//乳臭未乾的小子！敢管大爷的
//事？你管的也太多了吧！
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//这可不是谁管谁的问题，发生
//这种事任谁都看不过去的。
VideoUpdate(0, false)
SetDlgUpper(32-1-1, 0x00000000, false)
//骆员外：
//要怪就怪他们没有生意头脑
//当初黑水镇那边传出闹殭屍时
//大家只是幸灾乐祸，不当做一
//回事
//而我就看准了这一点，把附近
//所有的糯米都买下来了，转手
//间就赚了十倍呢～哈哈！
VideoUpdate(0, false)
Replace()
SetDlgUpper(32-1-1, 0x00000000, false)
//骆员外：
//做生意就要像我一样有眼光，
//会抓时机。小兄弟！学着点吧
VideoRestore()
//本店也贩卖各式高级武器
//要不要采购一些来防身呀？
//不然碰到屍妖可就吃力了
VideoUpdate(0, false)
ShowBuyItemMenu(9)

[Event_00050_00005_Trigger]
//保镳：
//小伙子，要买糯米的话，
//到那儿去排队。

[Event_00050_00006_Trigger]
//骆记总管：
//手头紧吗？要变卖东西吗？
//本店高价收购二手货
VideoUpdate(0, false)
ShowSellItemMenu()

[Scr_0x3C3B]
VideoUpdate(0, false)
//伙计：
//没钱买就走开
//还有很多人在排队呢！
ReplaceAndPause()
[Event_00050_00003_Trigger]
//伙计：
//买糯米吗？一包１００文钱
GotoWithSelect(Scr_0x3C3B)
CashModify(-100, Scr_0x3C3B)
AddItem(15, 0)

[Event_00053_00018_Trigger]
//病人：
//我是从河东黑水镇逃出来的人
//幸好我命大只伤了一条腿。

[Event_00053_00019_Trigger]
//病人：
//我手臂上被殭屍咬的伤口
//不知道为了什麽奇痒无比？

[Event_00053_00013_Trigger]
//病人：
//哎呦????好痛喔！

[Event_00053_00014_Trigger]
//病人：
//????好可怕的妖怪呀！

[Event_00053_00015_Trigger]
//病人：
//玉儿啊～玉儿、你在哪里呀？

[Event_00053_00016_Trigger]
//病人：
//????嗯！好难受！

[Event_00053_00017_Trigger]
//病人：
//小兄弟，您行行好
//脖子可不可以借我咬一下？

[Scr_0x3C5E]
//骆家伙计：
//这下可惨了，没人要买糯米了。

[Scr_0x3C61]
//骆家总管：
//哇．．还一堆存货没卖完呢

[Scr_0x3C64]
//骆员外：
//都是你们害的啦！
//这下子我可赔老本了
ReplaceAndPause()
//骆员外：
//呜．．．这堆糯米要等到
//端午节包粽子时才有人买了

[Scr_0x3C6C]
//守桥壮丁：
//你们真的消灭屍妖了？
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//是的
VideoUpdate(0, false)
//守桥壮丁：
//哗～真厉害！
//大家知道这个好消息
//一定很高兴
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//我想～也该向韩大夫辞行了
ReplaceAndPause()
//守桥壮丁：
//太好了，我终於可以放假了

[Scr_0x3C7E]
//居民：
//小兄弟，看不出你年纪轻轻
//身手如此矫健，打败了屍妖。
ReplaceAndPause()
//居民：
//我们白河村终於恢复
//了往日的安宁。

[Scr_0x3C86]
//居民：
//哈！我果然没有看错人
//您一进村子，我就感觉
//您器宇非凡、深藏不露、
//出类拔萃、气盖山河??
ReplaceAndPause()
//居民：
//其实我是不想出手而已，
//要不然、哪有你说话的份。

[Scr_0x3C90]
//居民：
//感谢您的大恩大德，我们白
//河村的百姓们无以回报。

[Scr_0x3C94]
//居民：
//大侠，雕一尊像吧。
//我们好天天拜着你！

[Scene_00055_Enter]
SetBattlefield(2)

[Scene_00054_Enter]
SetBattlefield(8)
MusicPlay(78, true, 0.00)

[Scr_0x3C9D]
MusicPlay(55, true, 0.00)

[Scene_00049_Enter]
MusicPlay(12, true, 0.00)

[Event_00056_00001_Trigger]
SceneEnter(54)
PartySetPos(13, 34, 0)
FadeOut(0)

[Scr_0x3CA5]
FadeOut(0)
PartySetPos(32, 71, 0)
SceneEnter(56)

[Event_00056_00003_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
SetDlgUpper(0, 0x00000000, false)
//智泽：
//啊．．．施主．．是．．
//．．是来参佛的吗？
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//我们想求见贵寺的智修大师
NPCSetDirFrame(3, 0)
VideoUpdate(0, false)
NPCSetDirFrame(2, 0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//智泽：
//方．．方丈～有人来啦！！
NPCSetDirFrame(3, 0)
VideoUpdate(0, false)
NPCSetDirFrame(0, 0)
VideoUpdate(0, false)
//智泽：
//各位．．各位施主．．请留步
//贫．．贫僧先进去通报一声
EventSetAutoScript(-1, -1, Scr_0x3D0C)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(1, 1, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(3-5-1, 0x00000000, false)
//林月如：
//这个和尚怎麽一见我们神色如
//此慌张，正眼也不敢瞧一下？
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(0, false, false)
SetDlgUpper(1-6-1, 0x00000000, false)
//李逍遥：
//哈～　出家人四大皆空
//突然看到两位美女驾到
//怎麽可能面不改色呢？
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//　　哼～一脸不正经！
RoleSetDirFrame(1, 2, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(1, 3, 0)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(1, 0, 0)
WaitEventAutoScriptRun(0, false, false)
SetDlgUpper(2-1-1, 0x00000000, false)
//赵灵儿：
//．．．．．．．．．。
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//　　灵儿．．你怎麽了？
RoleSetDirFrame(1, 3, 0)
WaitEventAutoScriptRun(0, false, false)
SetDlgUpper(2-7-1, 0x00000000, false)
//赵灵儿：
//我总觉得这间寺庙四周
//似乎．．有股妖气
RoleSetDirFrame(2, 1, 0)
WaitEventAutoScriptRun(0, false, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//妖气？　怎麽可能！
//这里可是佛门清修之地呢
RoleSetDirFrame(1, 2, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgUpper(2-7-1, 0x00000000, false)
//赵灵儿：
//我也说不上来．．
//但．．并非是邪恶的妖气
EventSetAutoScript(-1, -1, Scr_0x3D0E)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgUpper(0, 0x00000000, false)
//智泽：
//三位施主，很抱歉．．
//寺里出了点事，不便待客
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//哦！　智修大师不在寺中吗？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//小和尚：
//不．．不是。　寺中有些杂乱
//尚未打扫，请施主莫见怪．．
RoleSetDirFrame(2, 2, 0)
VideoUpdate(0, false)
SetDlgLower(3-3-1, 0x00000000, false)
//林月如：
//罗哩八嗦！　叫你们方丈出来
//难道寺内有什麽见不得人的事
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//智泽：
//是．．是！
EventSetAutoScript(-1, -1, Scr_0x3D10)

[Scr_0x3D0C]
NPCMoveToBlock(38, 65, 0, 3, false)

[Scr_0x3D0E]
NPCMoveToBlock(34, 69, 0, 8, false)

[Scr_0x3D10]
NPCSetDirFrame(1, 0)
NPCMoveToBlock(38, 65, 0, 3, false)
EventSetState(-1, -1, false, false)

[Event_00056_00002_Trigger]
SceneEnter(58)
PartySetPos(43, 87, 1)
FadeOut(0)

[Event_00058_00001_Trigger]
SceneEnter(56)
PartySetPos(33, 37, 0)
FadeOut(0)

[Event_00058_00010_Trigger]
//和尚：
//阿弥陀佛．．．．
ReplaceAndPause()
//和尚：
//阿弥陀佛．．．．
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//林月如：
//这里的和尚怎麽都只会
//说阿弥陀佛

[Event_00056_00006_Trigger]
EventSetState(-1, -1, false, false)
EventSetState(56, 7, true, true)
EventSetState(57, 0, true, true)
WaitEventAutoScriptRun(12, false, false)
//小和尚：
//哇～！~30
PartySetPos(43, 55, 0)
PartyWalkToBlock(45, 52, 1, 4)
WaitEventAutoScriptRun(8, false, false)
PartyWalkToBlock(45, 52, 0, 4)
RoleSetDirFrame(0, 2, 0)
RoleSetDirFrame(1, 2, 0)
RoleSetDirFrame(2, 2, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//喂喂～大师！　有话好说！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//智杖：
//我受不了啦！
//让我砍了这小王八蛋
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//可否告诉在下怎麽一回事？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//智杖：
//这小王八蛋骗俺！
//俺本来是个杀猪的
//每天至少要吃五斤肉
//不然浑身都会不对劲
//他骗俺说来这里当和尚
//可以每天有吃有喝的
//结果俺一来才发现根本
//不是那麽一回事
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//智泽：
//是有吃有喝没错啊？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//智杖：
//吃大米喝凉茶是吗！？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//可能你弄错了．．
//出家人本来就不能吃荤的
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//智杖：
//老子不当和尚了行不行？
VideoRestore()
//刚才俺好不容易抓到一头鹿
//正想煮来解解馋，谁料居然
//被这小兔崽子把一锅子连肉
//带汤全给倒掉了
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//鹿．．．？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//智杖：
//是啊～有只头上断了角而且
//脚也受伤的雄鹿跑进寺内来
//我看牠伤口都烂的透骨了
//就让牠早早解脱啦！
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//你．．．．(
VideoUpdate(0, false)
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//你不想继续出家，何不还俗
//归乡，这样实在太难看了
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//智杖：
//俺能回去早就回去了
VideoUpdate(0, false)
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//此话怎讲？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//智杖：
//自从方丈大师替俺剃渡後
//出家以前的事俺就全记不起
//来了。俺只知道俺是杀猪的
//俺只想要吃肉！
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//真可笑，有这种怪人！
EventSetAutoScript(56, 7, Scr_0x3DAA)
WaitEventAutoScriptRun(20, false, false)
SetDlgUpper(0, 0x00000000, false)
//智泽：
//各位施主，我来引见各位
//见方丈大师吧
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 1, 0)

[Event_00056_00008_Trigger]
//智杖：
//俺要吃肉．．

[Event_00056_00007_Auto]
NPCMoveToBlock(47, 53, 0, 8, false)
NPCSetDirFrame(2, 0)
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(3, false, false)
NPCMoveToBlock(48, 51, 1, 8, false)
NPCMoveToBlock(47, 50, 0, 8, false)
NPCMoveToBlock(43, 54, 0, 8, false)
NPCSetDirFrame(3, 0)
NPCSetDirFrame(2, 0)

[Event_00056_00008_Auto]
NPCMoveToBlock(47, 53, 0, 8, false)
ReplaceAndPause()
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(3, false, false)
NPCMoveToBlock(48, 51, 1, 8, false)
NPCMoveToBlock(47, 50, 0, 8, false)
NPCMoveToBlock(46, 51, 0, 8, false)

[Scr_0x3DAA]
NPCMoveToBlock(42, 53, 0, 3, false)
NPCMoveToBlock(44, 51, 0, 3, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(2, false, false)
NPCMoveToBlock(45, 50, 0, 3, false)
NPCMoveToBlock(31, 36, 1, 8, false)
EventSetState(-1, -1, false, false)

[Event_00058_00015_Trigger]
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(2, false, false)
ReplaceAndPause()
EventSetTriggerMode(-1, -1, false, 2)
SetDlgUpper(0, 0x00000000, false)
//智泽：
//这位便是我们方丈大师

[Scr_0x3DBA]
NPCMoveToBlock(24, 62, 0, 3, false)
NPCMoveToBlock(22, 60, 0, 3, false)
NPCMoveToBlock(27, 55, 0, 3, false)

[Event_00058_00014_Trigger]
EventSetDirFrame(58, 15, 1, 0)
VideoUpdate(0, false)
//智修大师：
//阿弥陀佛．．．
//三位施主所为何来？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//是这样子的～
//我们听说大师您法力高强
//想请大师下山治退屍妖
//替此地村民除害
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//智修大师：
//老衲是佛门中人，从不过问
//外界之俗事，三位请回吧
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//大师此言差矣，出家人降魔
//卫道本天经地义，何以是外
//界的俗事呢？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//智修大师：
//嗯．．．由此言观之
//施主颇具慧根！
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//不敢当～不敢当～
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//智修大师：
//好～只要施主答应替老衲
//做一件事，老衲就答应你
//下山收妖
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//只要是不伤天害理的事
//我李某人一定办到！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//智修大师：
//你放心～是做好事
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//那就好办～！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//智修大师：
//呵呵呵～好～太好了！
VideoRestore()
//智泽，去把剃剪和袈裟拿出来
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//智泽：
//是．．！
EventSetAutoScript(58, 15, Scr_0x3DBA)
WaitEventAutoScriptRun(16, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(22, false, false)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(6, false, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//大师～莫非您是要．．？
MusicStop()
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//智修大师：
//替你剃渡啊！
//你得在我这出家当和尚
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//三人齐声道：
//那有这种事！？　我才不要！
EventSetState(57, 0, false, false)
EventSetState(58, 16, true, true)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//智修大师：
//阿弥陀佛～　既然施主答应
//了，就由不得你不依！
WaitEventAutoScriptRun(8, false, false)
//智修大师：
//智杖！　把他们抓住！
SetBattleMusic(42)
SetBattlefield(15)
BattleStart(28, Scr_0x9C9B, Null)
EventSetState(58, 15, false, false)
EventSetState(58, 16, false, false)
RoleSetDirFrame(0, 1, 0)
PartySetPos(22, 64, 0)
NPCSetDirFrame(3, 0)
BattleEnd()
VideoUpdate(0, false)
//智修大师：
//哦！　何必挣扎呢？
//当和尚只要把头发剃乾净
//就行了，不会有什麽痛苦的
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//这是什麽条件？我才不干
//我还没娶老婆咧！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//智修大师：
//愚蠢～愚蠢！皈依我佛的人
//死後才不会下地狱，还可以
//到西方极乐世界，有何不好？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//您的好意我心领了
//这种好事就留给您自己吧
//这一头发型我自己很满意
//不必麻烦您了～再见！
VideoUpdate(0, false)
PartySetPos(22, 64, 0)
VideoUpdate(0, false)
PartyWalkToBlock(28, 70, 1, 8)
EventSetState(58, 28, true, false)
FadeToScene(-1, 0)
VideoUpdate(0, false)
SetDlgUpper(1-6-1, 0x00000000, false)
//啊．．．不劳您相送了
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//智修大师：
//老衲让你进得来出不得！
SetBattleMusic(45)
BattleStart(35, Scr_0x9C9B, Null)
BattleEnd()
PartySetPos(22, 64, 0)
RoleSetDirFrame(0, 1, 0)
PartySetRole(2)
EventSetState(58, 22, true, false)
EventSetState(58, 23, true, false)
EventSetState(58, 20, false, false)
EventSetState(58, 21, false, false)
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//你这妖僧．．我踢死你！
VideoUpdate(0, false)
SetDlgLower(2-1-1, 0x00000000, false)
//赵灵儿：
//逍遥哥哥～等一等！
VideoUpdate(0, false)
EventSetState(-1, -1, false, false)
EventSetState(58, 17, true, true)
FadeToScene(-1, 0)
SetDlgUpper(47-1-1, 0x00000000, false)
//智泽：
//呜．．．饶命啊．．
//下次不敢了．．
VideoUpdate(0, false)
SetDlgLower(3-3-1, 0x00000000, false)
//林月如：
//怎麽会是这个小和尚！
//刚才那些人都是你变的？
VideoUpdate(0, false)
SetDlgUpper(47-1-1, 0x00000000, false)
//智泽：
//我乃达摩法师所持佛珠所化
//已经修行九百九十九年了
VideoUpdate(0, false)
SetDlgLower(2-7-1, 0x00000000, false)
//赵灵儿：
//既然你已有千年的道行
//应该潜心修炼，求渡化之道
//为何自甘堕落，依仗法力
//逼人落发出家，迫害村民！
VideoUpdate(0, false)
SetDlgUpper(47-1-1, 0x00000000, false)
//智泽：
//我．．我只是让他们当和尚
//又不是逼他们做坏事
//佛经曰：普渡众生
//又曰：人人皆有佛性
//所以我想，如果我能让很多很
//人成为佛门弟子，佛祖看到了
//一定会很感动，就会来接我到
//天界，成为佛．．
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//我的天哪．．
//这是哪门子的修炼方法！
//小和尚．．是谁教你的？
VideoUpdate(0, false)
SetDlgUpper(47-1-1, 0x00000000, false)
//智泽：
//我我．．我读佛经想到的．．
VideoUpdate(0, false)
SetDlgLower(2-1-1, 0x00000000, false)
//赵灵儿：
//修业之本在於舍己助人
//佛曰无我乃舍己，佛曰慈悲
//即助人。而你所作所为却背
//道而驰，自毁功德。
//枉费你有千年道行，竟只有
//孩童般的智慧。如此下去只
//怕向佛未果，反而先堕魔道
VideoUpdate(0, false)
EventSetState(58, 17, false, false)
EventSetState(58, 18, true, false)
WaitEventAutoScriptRun(0, false, false)
PlaySound(93)
WaitEventAutoScriptRun(3, false, false)
SetDlgUpper(47-1-1, 0x00000000, false)
//智泽：
//啊？．菩萨！你是菩萨！
VideoUpdate(0, false)
SetDlgLower(2-8-1, 0x00000000, false)
//赵灵儿：
//你、你别这样，我不是菩萨
EventSetDirFrame(58, 18, 0, 1)
VideoUpdate(0, false)
SetDlgUpper(47-1-1, 0x00000000, false)
//智泽：
//呜．．我太感动了．．
//从来都没有人教过我这些
//道理，求求菩萨收我当弟子
VideoUpdate(0, false)
SetDlgLower(2-1-1, 0x00000000, false)
//赵灵儿：
//这些道理是我师父
//平时教我的．．
VideoUpdate(0, false)
SetDlgUpper(1-9-1, 0x00000000, false)
//李逍遥：
//让他将功折罪好了
//我们正要去降伏屍妖
//这小不点也许派得上用场
EventSetDirFrame(58, 18, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(47-1-1, 0x00000000, false)
//智泽：
//好好好．．．！
//让我跟着您，我知道是谁在
//背後操纵屍妖，我可以帮您
//们找到他
//山下那些屍妖大多是从黑水镇
//北方的乱葬岗来的，那里有一
//座隋朝的将军塚，"赤鬼王"就
//躲在那地底下的血池中，他用
//邪法操纵死屍吸食人血，供他
//修炼魔功
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//乖乖．．这麽邪恶的妖魔！
VideoUpdate(0, false)
SetDlgLower(2-1-1, 0x00000000, false)
//赵灵儿：
//好吧．．既然你有心．．
//从今以後，你就以原形面貌
//跟着我吧。
VideoRestore()
//以後你就叫做"小石头"吧
//我唤你的名字时你再出来
EventSetDirFrame(58, 18, 0, 1)
VideoUpdate(0, false)
SetDlgUpper(47-1-1, 0x00000000, false)
//智泽：
//　　是．．．
EventSetState(58, 18, false, false)
EventSetState(58, 19, true, true)
FadeToScene(-1, 0)
SetDlgUpper(0, 0x00000000, false)
//小石头：
//主人．．请将我配带在身上
//我可以增加您的法力，还可
//以替你抵挡墓穴内的阴气
PartyWalkToBlock(21, 63, 0, 2)
WaitEventAutoScriptRun(2, false, false)
EventSetState(58, 19, false, false)
VideoUpdate(0, false)
SetDlgBox(0x00000000)
//得到玉佛珠
AddItem(214, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(6, false, false)
PartyWalkToBlock(22, 64, 0, 2)
VideoUpdate(0, false)
EventSetState(56, 3, false, false)
EventSetState(56, 4, false, false)
EventSetState(56, 5, false, false)
EventSetState(58, 10, false, false)
EventSetState(58, 11, false, false)
EventSetState(58, 12, false, false)
EventSetState(58, 13, false, false)
EventSetState(58, 24, true, false)
EventSetState(58, 25, true, false)
EventSetState(58, 26, true, false)
EventSetState(58, 27, true, false)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(58, 22, 3, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(58, 23, 3, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(0, 0x00000000, false)
//众人：
//　谢谢三位大侠，我们终於
//　不必再受妖怪的控制了
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥:
//诸位之中，哪位是江少云？
VideoUpdate(0, false)
EventWalkOneStep(58, 25, -8, -4)
VideoUpdate(0, false)
EventWalkOneStep(58, 25, -8, -4)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//江少云：
//我就是．．！
VideoUpdate(0, false)
SetDlgUpper(1-6-1, 0x00000000, false)
//李逍遥：
//呵～　韩家小姐很思念你呢
//赶快回去看她吧！
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//江少云：
//再造之恩．．江某永铭於心
EventSetAutoScript(58, 24, Scr_0x3F57)
EventSetAutoScript(58, 25, Scr_0x3F57)
EventSetAutoScript(58, 26, Scr_0x3F57)
EventSetAutoScript(58, 27, Scr_0x3F57)
WaitEventAutoScriptRun(12, false, false)
EventSetDirFrame(58, 22, 2, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(58, 23, 0, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetState(58, 24, false, false)
EventSetState(58, 25, false, false)
EventSetState(58, 26, false, false)
EventSetState(58, 27, false, false)
VideoUpdate(0, false)
SetDlgUpper(1-3-1, 0x00000000, false)
//李逍遥：
//哈！　功德圆满
EventSetState(58, 22, false, false)
EventSetState(58, 23, false, false)
PartySetRole(123)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(2, false, false)
SceneEnter(57)

[Event_00058_00016_Auto]
NPCMoveToBlock(24, 66, 0, 8, false)

[Scene_00056_Enter]
MusicPlay(10, true, 0.00)

[Event_00056_00004_Auto]
NPCMoveToBlock(38, 113, 0, 2, true)
NPCMoveToBlock(44, 106, 1, 2, true)
NPCMoveToBlock(39, 101, 0, 2, true)
NPCMoveToBlock(34, 106, 0, 2, true)
NPCMoveToBlock(29, 101, 0, 2, true)
NPCMoveToBlock(31, 99, 0, 2, true)
NPCMoveToBlock(30, 98, 0, 2, true)
NPCMoveToBlock(40, 88, 0, 2, true)
NPCMoveToBlock(38, 86, 1, 2, true)
NPCMoveToBlock(40, 84, 1, 2, true)
NPCMoveToBlock(34, 78, 0, 2, true)
NPCMoveToBlock(31, 81, 0, 2, true)
NPCMoveToBlock(28, 78, 0, 2, true)
NPCMoveToBlock(34, 72, 0, 2, true)
NPCMoveToBlock(33, 71, 0, 2, true)
NPCMoveToBlock(36, 68, 0, 2, true)
EventSetState(-1, -1, false, false)

[Event_00056_00005_Trigger]
//和尚：
//阿弥陀佛．．

[Event_00056_00004_Trigger]
//和尚：
//阿弥陀佛．．
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//大师～请问此去是玉佛寺吗？
VideoUpdate(0, false)
//和尚：
//阿弥陀佛．．
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//大师，我们是．．
VideoUpdate(0, false)
//和尚：
//阿弥陀佛．．
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//这．．．．(
ReplaceAndPause()
//和尚：
//阿弥陀佛．．

[Event_00058_00024_Auto]
EventAnimate(1, 2)
GotoWithNop(Event_00058_00024_Auto, 0)

[Scr_0x3F57]
EventAnimate(3, 2)
GotoWithNop(Scr_0x3F57, 0)

[Scene_00057_Enter]
PartySetPos(37, 35, 0)
FadeToScene(-1, 2)
EventSetTriggerScript(54, 4, Scr_0x371B)
SetDlgLower(1-2-1, 0x00000000, false)
//哇！　连这间庙也是变出来的
Replace()
MusicPlay(78, true, 0.00)

[Event_00061_00003_Trigger]
SceneEnter(62)
PartySetPos(30, 48, 0)
FadeOut(0)

[Event_00061_00004_Trigger]
SceneEnter(62)
PartySetPos(29, 100, 0)
FadeOut(0)

[Event_00061_00005_Trigger]
SceneEnter(62)
PartySetPos(39, 82, 0)
FadeOut(0)

[Event_00062_00001_Trigger]
SceneEnter(61)
PartySetPos(39, 51, 0)
FadeOut(0)

[Event_00062_00002_Trigger]
SceneEnter(61)
PartySetPos(29, 42, 1)
FadeOut(0)

[Event_00062_00003_Trigger]
SceneEnter(61)
PartySetPos(15, 33, 1)
FadeOut(0)

[Event_00061_00001_Trigger]
SceneEnter(54)
PartySetPos(43, 20, 0)
FadeOut(0)

[Event_00061_00002_Trigger]
SceneEnter(63)
PartySetPos(57, 118, 1)
FadeOut(0)

[Scene_00063_Teleport]
RoleSetDirFrame(0, 3, 0)
SceneEnter(61)
PartySetPos(6, 29, 0)
FadeOut(0)

[Event_00063_00002_Trigger]
SceneEnter(64)
PartySetPos(13, 115, 0)
FadeOut(0)

[Event_00064_00001_Trigger]
SceneEnter(63)
PartySetPos(49, 18, 0)
FadeOut(0)

[Scr_0x3F8F]
Call(Scr_0x0315, 0, 0)
SceneEnter(60)
PartySetPos(42, 95, 1)
FadeOut(0)

[Event_00060_00001_Trigger]
Call(Scr_0x421A, 0, 0)
[Scene_00060_Teleport]
VideoShake(0, 4)
VideoWave(0, 0)
SceneEnter(64)
PartySetPos(19, 15, 0)
FadeOut(0)

[Event_00060_00002_Trigger]
Call(Scr_0x0315, 0, 0)
SceneEnter(65)
PartySetPos(38, 72, 1)
FadeOut(0)

[Event_00060_00003_Trigger]
Call(Scr_0x0315, 0, 0)
SceneEnter(65)
PartySetPos(43, 56, 1)
FadeOut(0)

[Event_00060_00004_Trigger]
Call(Scr_0x0315, 0, 0)
SceneEnter(65)
PartySetPos(51, 50, 0)
FadeOut(0)

[Event_00060_00005_Trigger]
Call(Scr_0x0315, 0, 0)
SceneEnter(65)
PartySetPos(46, 33, 0)
FadeOut(0)

[Event_00060_00006_Trigger]
Call(Scr_0x0315, 0, 0)
SceneEnter(65)
PartySetPos(36, 26, 1)
FadeOut(0)

[Event_00060_00007_Trigger]
Call(Scr_0x0315, 0, 0)
SceneEnter(65)
PartySetPos(12, 52, 1)
FadeOut(0)

[Event_00060_00008_Trigger]
Call(Scr_0x0315, 0, 0)
SceneEnter(65)
PartySetPos(9, 70, 0)
FadeOut(0)

[Event_00060_00009_Trigger]
Call(Scr_0x0315, 0, 0)
SceneEnter(65)
PartySetPos(15, 116, 1)
FadeOut(0)

[Event_00060_00010_Trigger]
Call(Scr_0x0315, 0, 0)
SceneEnter(65)
PartySetPos(24, 102, 1)
FadeOut(0)

[Event_00060_00011_Trigger]
Call(Scr_0x0315, 0, 0)
SceneEnter(65)
PartySetPos(20, 87, 0)
FadeOut(0)

[Event_00060_00012_Trigger]
Call(Scr_0x0315, 0, 0)
SceneEnter(65)
PartySetPos(31, 65, 1)
FadeOut(0)

[Event_00065_00001_Trigger]
Call(Scr_0x421A, 0, 0)
SceneEnter(60)
PartySetPos(44, 62, 0)
FadeOut(0)

[Event_00065_00002_Trigger]
Call(Scr_0x421A, 0, 0)
SceneEnter(60)
PartySetPos(49, 46, 0)
FadeOut(0)

[Event_00065_00003_Trigger]
Call(Scr_0x421A, 0, 0)
SceneEnter(60)
PartySetPos(56, 39, 1)
FadeOut(0)

[Event_00065_00004_Trigger]
Call(Scr_0x421A, 0, 0)
SceneEnter(60)
PartySetPos(51, 22, 1)
FadeOut(0)

[Event_00065_00005_Trigger]
Call(Scr_0x421A, 0, 0)
SceneEnter(60)
PartySetPos(42, 16, 0)
FadeOut(0)

[Event_00065_00006_Trigger]
Call(Scr_0x421A, 0, 0)
SceneEnter(60)
PartySetPos(18, 42, 0)
FadeOut(0)

[Event_00065_00007_Trigger]
Call(Scr_0x421A, 0, 0)
SceneEnter(60)
PartySetPos(14, 59, 1)
FadeOut(0)

[Event_00065_00008_Trigger]
Call(Scr_0x421A, 0, 0)
SceneEnter(60)
PartySetPos(21, 106, 1)
FadeOut(0)

[Event_00065_00009_Trigger]
Call(Scr_0x421A, 0, 0)
SceneEnter(60)
PartySetPos(30, 92, 0)
FadeOut(0)

[Event_00065_00010_Trigger]
Call(Scr_0x421A, 0, 0)
SceneEnter(60)
PartySetPos(25, 76, 1)
FadeOut(0)

[Event_00065_00011_Trigger]
Call(Scr_0x421A, 0, 0)
SceneEnter(60)
PartySetPos(37, 55, 0)
FadeOut(0)

[Event_00064_00002_Trigger]
JumpIfItemNotEquipped(214, 0, Scr_0x400E)
EventSetState(64, 3, false, false)
FadeToScene(-1, 0)
ReplaceAndPauseWithNop(Scr_0x3F8F, 0)

[Scr_0x400E]
RoleMoveOneStep(16, -8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(16, -8, 0)
WaitEventAutoScriptRun(0, false, false)
SetDlgCenter(0, 0x00000000, false)
//一股强大的阴气迎面扑来
//逼得众人倒退数步

[Event_00060_00025_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(60, 13, Scr_0x0380)
EventSetState(60, 13, true, false)
EventSetState(60, 14, false, false)

[Event_00060_00026_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(60, 15, Scr_0x0380)
EventSetState(60, 15, true, false)
EventSetState(60, 16, false, false)

[Event_00060_00027_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(60, 17, Scr_0x0380)
EventSetState(60, 17, true, false)
EventSetState(60, 18, false, false)

[Event_00060_00028_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(60, 19, Scr_0x0380)
EventSetState(60, 19, true, false)
EventSetState(60, 20, false, false)

[Event_00060_00029_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(60, 21, Scr_0x0380)
EventSetState(60, 21, true, false)
EventSetState(60, 22, false, false)

[Event_00060_00030_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(60, 23, Scr_0x0380)
EventSetState(60, 23, true, false)
EventSetState(60, 24, false, false)

[Event_00065_00048_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(65, 12, Scr_0x0380)
EventSetState(65, 12, true, false)
EventSetState(65, 13, false, false)

[Event_00065_00049_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(65, 14, Scr_0x0380)
EventSetState(65, 14, true, false)
EventSetState(65, 15, false, false)

[Event_00065_00050_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(65, 16, Scr_0x0380)
EventSetState(65, 16, true, false)
EventSetState(65, 17, false, false)

[Event_00065_00051_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(65, 18, Scr_0x0380)
EventSetState(65, 18, true, false)
EventSetState(65, 19, false, false)

[Event_00065_00052_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(65, 20, Scr_0x0380)
EventSetState(65, 20, true, false)
EventSetState(65, 21, false, false)

[Event_00065_00053_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(65, 22, Scr_0x0380)
EventSetState(65, 22, true, false)
EventSetState(65, 23, false, false)

[Event_00065_00054_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(65, 24, Scr_0x0380)
EventSetState(65, 24, true, false)
EventSetState(65, 25, false, false)

[Event_00065_00055_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(65, 26, Scr_0x0380)
EventSetState(65, 26, true, false)
EventSetState(65, 27, false, false)

[Event_00065_00056_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(65, 28, Scr_0x0380)
EventSetState(65, 28, true, false)
EventSetState(65, 29, false, false)

[Event_00065_00057_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(65, 30, Scr_0x0380)
EventSetState(65, 30, true, false)
EventSetState(65, 31, false, false)

[Event_00065_00058_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(65, 32, Scr_0x0380)
EventSetState(65, 32, true, false)
EventSetState(65, 33, false, false)

[Event_00065_00059_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(65, 34, Scr_0x0380)
EventSetState(65, 34, true, false)
EventSetState(65, 35, false, false)

[Event_00065_00060_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(65, 36, Scr_0x0380)
EventSetState(65, 36, true, false)
EventSetState(65, 37, false, false)

[Event_00065_00061_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(65, 38, Scr_0x0380)
EventSetState(65, 38, true, false)
EventSetState(65, 39, false, false)

[Event_00065_00062_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(65, 40, Scr_0x0380)
EventSetState(65, 40, true, false)
EventSetState(65, 41, false, false)

[Event_00065_00063_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(65, 42, Scr_0x0380)
EventSetState(65, 42, true, false)
EventSetState(65, 43, false, false)

[Event_00065_00064_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(65, 44, Scr_0x0380)
EventSetState(65, 44, true, false)
EventSetState(65, 45, false, false)

[Event_00065_00065_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(65, 46, Scr_0x0380)
EventSetState(65, 46, true, false)
EventSetState(65, 47, false, false)

[Event_00065_00066_Trigger]
MusicPlay(0, true, 0.00)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(1)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(2)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(3)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(4)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(5)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(6)
WaitEventAutoScriptRun(2, false, false)
SetDlgUpper(0, 0x00000000, false)
//是～谁～吵～醒～本～将～军
EventSetState(-1, -1, false, false)
SetBattleMusic(45)
SetBattlefield(18)
BattleStart(26, Scr_0x9C9B, Null)
BattleEnd()
SceneEnter(66)

[Scene_00066_Enter]
PartySetPos(15, 18, 0)
HeroSetSprite(0, 232, false)
PartySetRole(1)
RoleSetDirFrame(0, 0, 0)
VideoShake(90, 4)
SetRNG(0)
MusicPlay(26, true, 0.00)
WaitEventAutoScriptRun(25, false, false)
PlaySound(117)
PlayRNG(0, -1, 14)
EventSetState(66, 2, false, false)
EventSetState(66, 1, false, false)
EventSetState(67, 0, false, false)
SceneEnter(59)
FadeOut(0)

[Scene_00059_Enter]
MusicPlay(83, true, 0.00)
SetBattlefield(32)
VideoWave(2, 0)
PartySetPos(54, 112, 1)
RoleMoveOneStep(0, 0, 6)
HeroSetSprite(0, 273, false)
PartySetRole(1)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(30, false, false)
RoleSetDirFrame(0, 0, 1)
WaitEventAutoScriptRun(10, false, false)
RoleSetDirFrame(0, 0, 2)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 0, 3)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 0, 2)
WaitEventAutoScriptRun(2, false, false)
SetDlgUpper(0, 0x00000000, false)
//灵儿！月如！
FadeOut(2)
EventSetState(59, 1, true, true)
EventSetState(59, 2, true, true)
HeroSetSprite(0, 2, true)
PartySetPos(55, 112, 0)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(59, 2, 0, 0)
WaitEventAutoScriptRun(7, false, false)
EventSetDirFrame(59, 2, 1, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(3-2-1, 0x00000000, false)
//好臭的味道！
//这里是什麽鬼地方？
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(59, 1, 0, 0)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(5, false, false)
EventSetDirFrame(59, 1, 3, 0)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(59, 1, 0, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(2-1-1, 0x00000000, false)
//这一大片红色的池子
//应该就是赤鬼王所在的血池
VideoUpdate(0, false)
SetDlgUpper(3-3-1, 0x00000000, false)
//天哪～好恶心．．
//哪来这麽多血水啊！？
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//恶．．难闻死了
//这股血腥味实在令人受不了
VideoUpdate(0, false)
SetDlgLower(2-1-1, 0x00000000, false)
//这麽多的血，可见这妖魔
//不知残害了多少生命
PartySetRole(123)
EventSetState(59, 1, false, false)
EventSetState(59, 2, false, false)
ReplaceAndPause()

[Event_00059_00010_Trigger]
PlaySound(134)
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(59, 3, Scr_0x037B)
EventSetAutoScript(59, 5, Scr_0x037B)
EventSetAutoScript(59, 6, Scr_0x037B)
EventSetAutoScript(59, 7, Scr_0x037B)
EventSetAutoScript(59, 8, Scr_0x037B)
EventSetState(59, 4, false, false)
EventSetState(59, 9, false, false)

[Event_00059_00013_Trigger]
PlaySound(134)
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(59, 11, Scr_0x037B)
EventSetState(59, 12, false, false)

[Event_00059_00022_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
PlaySound(134)
EventSetAutoScript(59, 14, Scr_0x037B)
EventSetAutoScript(59, 16, Scr_0x037B)
EventSetAutoScript(59, 17, Scr_0x037B)
EventSetAutoScript(59, 18, Scr_0x037B)
EventSetAutoScript(59, 19, Scr_0x037B)
EventSetAutoScript(59, 20, Scr_0x037B)
EventSetState(59, 15, false, false)
EventSetState(59, 21, false, false)

[Event_00059_00025_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
PlaySound(134)
EventSetAutoScript(59, 23, Scr_0x037B)
EventSetState(59, 24, false, false)

[Event_00059_00028_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
PlaySound(134)
EventSetAutoScript(59, 26, Scr_0x037B)
EventSetState(59, 27, false, false)

[Event_00059_00031_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
PlaySound(134)
EventSetAutoScript(59, 29, Scr_0x037B)
EventSetState(59, 30, false, false)

[Event_00059_00036_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
PlaySound(134)
EventSetAutoScript(59, 32, Scr_0x037B)
EventSetAutoScript(59, 33, Scr_0x037B)
EventSetState(59, 34, false, false)
EventSetState(59, 35, false, false)

[Event_00059_00041_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
PlaySound(134)
EventSetAutoScript(59, 37, Scr_0x037B)
EventSetAutoScript(59, 38, Scr_0x037B)
EventSetState(59, 39, false, false)
EventSetState(59, 40, false, false)

[Event_00059_00046_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
PlaySound(134)
EventSetAutoScript(59, 42, Scr_0x037B)
EventSetAutoScript(59, 43, Scr_0x037B)
EventSetState(59, 44, false, false)
EventSetState(59, 45, false, false)

[Event_00059_00049_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
PlaySound(134)
EventSetAutoScript(59, 47, Scr_0x037B)
EventSetState(59, 48, false, false)

[Event_00059_00057_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
PlaySound(134)
EventSetAutoScript(59, 50, Scr_0x037B)
EventSetAutoScript(59, 52, Scr_0x037B)
EventSetAutoScript(59, 53, Scr_0x037B)
EventSetAutoScript(59, 54, Scr_0x037B)
EventSetAutoScript(59, 55, Scr_0x037B)
EventSetState(59, 51, false, false)
EventSetState(59, 56, false, false)

[Event_00059_00064_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
PlaySound(134)
EventSetAutoScript(59, 58, Scr_0x037B)
EventSetAutoScript(59, 60, Scr_0x037B)
EventSetAutoScript(59, 61, Scr_0x037B)
EventSetAutoScript(59, 62, Scr_0x037B)
EventSetState(59, 59, false, false)
EventSetState(59, 63, false, false)

[Event_00059_00069_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
PlaySound(134)
EventSetAutoScript(59, 65, Scr_0x037B)
EventSetAutoScript(59, 67, Scr_0x037B)
EventSetAutoScript(59, 68, Scr_0x037B)
EventSetState(59, 66, false, false)

[Event_00059_00070_Trigger]
SetDlgBox(0x00000000)
//从骷颅头内取得二只傀儡虫
AddItem(92, 2)
ReplaceAndPause()
SetDlgBox(0x00000000)
//一具骷颅头

[Event_00059_00071_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
MusicPlay(26, true, 0.00)
EventSetState(59, 72, true, false)
WaitEventAutoScriptRun(22, false, false)
SetDlgLower(47-1-1, 0x00000000, false)
//小石头：
//主人～他就是赤鬼王！
VideoUpdate(0, false)
SetDlgUpper(27-1-1, 0x00000000, false)
//刚才我还在纳闷．．
//凡人怎麽可能到的了这里！？
//原来～是玉佛珠在帮你们
VideoRestore()
//哼！　小秃驴．．
//你修你的佛，我炼我的魔
//咱们曾言明井水不犯河水
//今日你竟背信带凡人来砸
//我的地盘！？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//谁理你，看这血池就知道
//你这妖魔残害了多少人命。
//今日我等便要为世间除害！
VideoUpdate(0, false)
SetDlgUpper(27-1-1, 0x00000000, false)
//笑话．．！
EventSetState(-1, -1, false, false)
SceneSetScripts(59, Null, Scene_00060_Teleport)
EventSetStateSequence(61, 6, 61, 15, false, false)
EventSetStateSequence(63, 3, 64, 0, false, false)
EventSetStateSequence(64, 4, 64, 29, false, false)
EventSetStateSequence(60, 31, 60, 67, false, false)
EventSetStateSequence(65, 67, 65, 106, false, false)
EventSetStateSequence(59, 73, 59, 97, false, false)
EventSetStateSequence(53, 13, 54, 0, false, false)
EventSetStateSequence(52, 5, 52, 14, false, false)
EventSetStateSequence(50, 3, 50, 17, false, false)
EventSetStateSequence(49, 33, 49, 40, false, false)
EventSetState(53, 3, false, false)
EventSetState(53, 4, true, true)
EventSetState(53, 6, false, false)
EventSetTriggerScript(50, 3, Scr_0x3C5E)
EventSetTriggerScript(50, 4, Scr_0x3C61)
EventSetTriggerScript(50, 2, Scr_0x3C64)
EventSetTriggerScript(49, 14, Scr_0x3C6C)
EventSetTriggerScript(49, 12, Scr_0x3C7E)
EventSetTriggerScript(51, 9, Scr_0x3C94)
EventSetTriggerScript(51, 13, Scr_0x3C90)
EventSetTriggerScript(52, 0, Scr_0x3C86)
SetBattleMusic(44)
SetBattlefield(19)
BattleStart(27, Scr_0x9C9B, Null)
AddItem(207, 0)
SetDlgBox(0x00000000)
//得到一颗土灵珠
SetBattlefield(32)
SetBattleMusic(39)
MusicPlay(30, true, 0.00)
BattleEnd()
VideoUpdate(0, false)
EventSetState(59, 72, false, false)
VideoShake(72, 4)
FadeToScene(-1, 5)
SetDlgLower(2-1-1, 0x00000000, false)
//原来．．．
//土灵珠在这妖怪身上！
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//土灵珠．．这又是啥玩意？
VideoUpdate(0, false)
SetDlgLower(2-1-1, 0x00000000, false)
//我听师父说过．．自古相传
//女娲大神聚天地灵气～风、雷
//、水、火、土，炼成五珠以镇
//伏群魔。
//传说～这些灵珠早已失落多年
//我们今日竟能得到此物，莫非
//是天意．．
VideoUpdate(0, false)
SetDlgUpper(1-3-1, 0x00000000, false)
//哈！　既然是千年古物．．
//应该值不少钱罗！
SetDlgLower(3-2-1, 0x00000000, false)
//就只会想到钱！
VideoUpdate(0, false)
SetDlgLower(2-1-1, 0x00000000, false)
//我们逃脱这洞窟就靠这灵珠了
//灵珠於此时此地现世，或许意
//谓着．．我．．不该再躲藏了
VideoUpdate(0, false)
SetDlgUpper(1-4-1, 0x00000000, false)
//灵儿．．怎麽你今天讲的话
//都好深奥，好像变个人似的
//是有什麽心事吗？
VideoUpdate(0, false)
SetDlgLower(2-1-1, 0x00000000, false)
//没．．没有啦，我没事
//这些日子．．我过得很快乐
//你们不要担心．．
SetDlgUpper(3-4-1, 0x00000000, false)
//．．．．．．．．
VideoUpdate(0, false)
SetDlgLower(2-1-1, 0x00000000, false)
//我们快离开这里吧
//村民们在等我们的好消息呢

[Event_00059_00072_Auto]
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(1)
WaitEventAutoScriptRun(3, false, false)
NPCSetFrame(2)
WaitEventAutoScriptRun(3, false, false)
NPCSetFrame(3)
WaitEventAutoScriptRun(3, false, false)
NPCSetFrame(4)
WaitEventAutoScriptRun(3, false, false)
NPCSetFrame(5)

[Event_00066_00001_Auto]
WaitEventAutoScriptRun(7, false, false)
NPCSetDirFrame(3, 0)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(6, false, false)
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(0, 0)

[Event_00066_00002_Auto]
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(3, 0)

[Event_00066_00003_Auto]
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(8, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(1, 0)

[Scene_00060_Enter]
SetBattlefield(34)
MusicPlay(78, true, 0.00)
SetBattleMusic(40)

[Scene_00062_Enter]
SetBattlefield(21)

[Scene_00061_Enter]
SetBattlefield(20)
MusicPlay(60, true, 0.00)
SetBattleMusic(40)

[Scene_00063_Enter]
SetBattlefield(29)

[Scene_00064_Enter]
SetBattlefield(50)
MusicPlay(60, true, 0.00)

[Scr_0x421A]
RoleSetDirFrame(0, 2, 0)
RoleMoveOneStep(10, -10, 1)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(6, -6, 2)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(10, -10, 3)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(6, -6, 4)
WaitEventAutoScriptRun(0, false, false)

[Event_00068_00001_Trigger]
SceneEnter(70)
PartySetPos(48, 62, 1)
FadeOut(0)

[Event_00068_00002_Trigger]
SceneEnter(71)
PartySetPos(35, 66, 0)
FadeOut(0)

[Event_00068_00003_Trigger]
SceneEnter(71)
PartySetPos(53, 69, 0)
FadeOut(0)

[Event_00068_00004_Trigger]
SceneEnter(72)
PartySetPos(49, 107, 0)
FadeOut(0)

[Event_00068_00005_Trigger]
SceneEnter(72)
PartySetPos(10, 81, 1)
FadeOut(0)

[Event_00068_00008_Trigger]
SceneEnter(74)
PartySetPos(19, 99, 1)
FadeOut(0)

[Event_00068_00009_Trigger]
SceneEnter(74)
PartySetPos(13, 73, 0)
FadeOut(0)

[Event_00068_00006_Trigger]
SceneEnter(73)
PartySetPos(36, 74, 1)
FadeOut(0)

[Event_00068_00007_Trigger]
SceneEnter(73)
PartySetPos(38, 49, 0)
FadeOut(0)

[Event_00068_00010_Trigger]
SceneEnter(75)
PartySetPos(54, 71, 0)
FadeOut(0)

[Event_00068_00011_Trigger]
SceneEnter(69)
PartySetPos(17, 115, 1)

[Event_00069_00001_Trigger]
SceneEnter(68)
PartySetPos(16, 34, 0)

[Scene_00070_Teleport]
SceneEnter(68)
PartySetPos(53, 108, 0)
FadeOut(0)

[Event_00070_00002_Trigger]
SceneEnter(55)
PartySetPos(7, 95, 1)
FadeOut(0)

[Scene_00071_Teleport]
SceneEnter(68)
PartySetPos(44, 73, 0)
FadeOut(0)

[Event_00071_00002_Trigger]
SceneEnter(68)
PartySetPos(45, 37, 0)
FadeOut(0)

[Scene_00072_Teleport]
SceneEnter(68)
PartySetPos(53, 77, 1)
FadeOut(0)

[Event_00072_00002_Trigger]
SceneEnter(68)
PartySetPos(31, 42, 0)
FadeOut(0)

[Scene_00073_Teleport]
SceneEnter(68)
PartySetPos(19, 67, 1)
FadeOut(0)

[Event_00073_00002_Trigger]
SceneEnter(68)
PartySetPos(11, 51, 1)
FadeOut(0)

[Scene_00074_Teleport]
SceneEnter(68)
PartySetPos(43, 58, 0)
FadeOut(0)

[Event_00074_00002_Trigger]
SceneEnter(68)
PartySetPos(28, 56, 0)
FadeOut(0)

[Scene_00075_Teleport]
SceneEnter(68)
PartySetPos(21, 81, 1)
FadeOut(0)

[Event_00069_00002_Trigger]
SceneEnter(76)
PartySetPos(30, 117, 1)
FadeOut(0)

[Event_00069_00003_Trigger]
SceneEnter(76)
PartySetPos(24, 111, 0)
FadeOut(0)

[Scene_00067_Teleport]
SceneEnter(69)
PartySetPos(42, 53, 0)
FadeOut(0)

[Event_00076_00002_Trigger]
SceneEnter(69)
PartySetPos(36, 47, 1)
FadeOut(0)

[Event_00076_00003_Trigger]
SceneEnter(67)
PartySetPos(25, 106, 1)
FadeOut(0)

[Event_00067_00001_Trigger]
SceneEnter(76)
PartySetPos(15, 33, 0)
FadeOut(0)

[Event_00077_00001_Trigger]
SceneEnter(78)
PartySetPos(13, 66, 0)
FadeOut(0)

[Event_00078_00001_Trigger]
SceneEnter(77)
PartySetPos(36, 57, 0)
FadeOut(0)

[Event_00078_00002_Trigger]
SceneEnter(80)
PartySetPos(9, 28, 0)
FadeOut(0)

[Scene_00068_Enter]
SetBattlefield(6)
MusicPlay(83, true, 0.00)
SetBattleMusic(37)

[Event_00067_00004_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
MusicStop()
SetDlgLower(17-2-1, 0x00000000, false)
//韩梦慈：
//小心！　有埋伏
PlaySound(113)
EventSetState(67, 2, false, false)
EventSetState(67, 3, false, false)
EventSetState(67, 5, true, true)
EventSetState(67, 6, true, true)
EventSetState(67, 7, true, true)
RoleSetDirFrame(1, 1, 0)
RoleSetDirFrame(2, 1, 0)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(6, false, false)
PartyWalkToBlock(40, 63, 1, 8)
PartyWalkToBlock(38, 61, 1, 8)
WaitEventAutoScriptRun(7, false, false)
SetBattlefield(16)
SetBattleMusic(40)
BattleStart(34, Null, Null)
MusicPlay(33, true, 0.00)
BattleEnd()
HeroSetSprite(0, 394, false)
PartySetRole(1)
RoleSetDirFrame(0, 0, 0)
EventSetState(67, 8, true, false)
EventSetState(67, 9, true, false)
WaitEventAutoScriptRun(10, false, false)
RoleSetDirFrame(0, 0, 1)
WaitEventAutoScriptRun(6, false, false)
HeroSetSprite(0, 3, true)
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgUpper(26-1-1, 0x00000000, false)
//石长老：
//殿下～老臣得罪了
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
ViewportMove(16, 8, 8)
WaitEventAutoScriptRun(4, false, false)
SetDlgUpper(2-8-1, 0x00000000, false)
//赵灵儿：
//逍遥哥哥！　林姐姐！
ViewportMove(-16, -8, 8)
SetDlgUpper(26-1-1, 0x00000000, false)
//石长老：
//这位姓李的年轻人
//三番两次阻挠我们的任务
//按理．．是不能留他活命
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(2-6-1, 0x00000000, false)
//赵灵儿：
//如果你们敢伤害他
//我．．我就立刻自尽！
VideoUpdate(0, false)
SetDlgUpper(26-1-1, 0x00000000, false)
//石长老：
//这万万不可～大王可是一直
//盼着能见到失散十年的亲生
//女儿最後一面啊
VideoUpdate(0, false)
SetDlgLower(2-7-1, 0x00000000, false)
//赵灵儿：
//最後一面．．？
VideoUpdate(0, false)
SetDlgUpper(26-1-1, 0x00000000, false)
//石长老：
//巫王陛下得了重病
//已经没有多少日子了
VideoRestore()
//大王说：不论当前什麽误会
//也不论当初巫后娘娘是为何
//而带您离开苗疆的
VideoRestore()
//毕竟～骨肉亲情．．希望您
//念在父女情份上回到他身边去
VideoUpdate(0, false)
SetDlgLower(2-8-1, 0x00000000, false)
//赵灵儿：
//．．我要先找到我娘！
VideoUpdate(0, false)
SetDlgUpper(26-1-1, 0x00000000, false)
//石长老：
//这．．．巫后娘娘．．
//已失踪十年之久，恐怕早已
//不在人世了，何况．．
SetDlgLower(2-8-1, 0x00000000, false)
//赵灵儿：
//何况什麽？　说啊！
VideoUpdate(0, false)
SetDlgUpper(26-1-1, 0x00000000, false)
//石长老：
//容老臣直言～殿下若知道
//巫后娘娘的．．身份，应该
//就能体会当初大王为何会那
//样对待娘娘了．．
VideoUpdate(0, false)
SetDlgLower(2-7-1, 0x00000000, false)
//赵灵儿：
//如果我也和娘一样呢？
//你们是不是也会像对我娘
//那样来对待我？
VideoUpdate(0, false)
SetDlgUpper(26-1-1, 0x00000000, false)
//石长老：
//自然不同，您是大王唯一的亲
//骨肉，也是我黑苗族中唯一有
//资格继承王位的身份的人
VideoRestore()
//无论发生什麽事，老臣也要把
//您带回大王身边。同样的～无
//论是谁来阻挠，老臣绝对不惜
//一切代价排除到底！
VideoUpdate(0, false)
SetDlgLower(2-5-1, 0x00000000, false)
//赵灵儿：
//．．．．．．．
VideoRestore()
//你们要答应我．．．
//以後决不许对他们出手
VideoUpdate(0, false)
SetDlgUpper(26-1-1, 0x00000000, false)
//石长老：
//老臣愿以人格担保
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(2-1-1, 0x00000000, false)
//赵灵儿：
//好．．．放了他们
//我就跟你们走．．
VideoUpdate(0, false)
SetDlgUpper(26-1-1, 0x00000000, false)
//石长老：
//公主殿下睿智！
RoleUninstallEquip(1, 6)
RemoveItem(214, 1, Null)
VideoUpdate(0, false)
SetDlgLower(47-1-1, 0x00000000, false)
//小石头：
//主人！　等等我啊～
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//玉佛珠随赵灵儿离去
SceneEnter(77)
FadeOut(2)

[Event_00067_00006_Auto]
NPCMoveToBlock(33, 58, 1, 8, false)
NPCMoveToBlock(34, 59, 1, 8, false)

[Event_00067_00007_Auto]
NPCMoveToBlock(35, 56, 1, 8, false)
NPCMoveToBlock(37, 58, 0, 8, false)

[Event_00067_00005_Auto]
NPCMoveToBlock(35, 58, 0, 8, false)
NPCMoveToBlock(36, 59, 1, 8, false)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(12)

[Event_00067_00002_Trigger]
SetDlgBox(0x00000000)
//推不动石门

[Scene_00077_Enter]
HeroSetSprite(0, 193, false)
PartySetRole(1)
RoleSetDirFrame(0, 0, 12)
PartySetPos(38, 61, 0)
WaitEventAutoScriptRun(16, false, false)
EventSetDirFrame(77, 2, 0, 0)
WaitEventAutoScriptRun(20, false, false)
SetDlgLower(31-1-1, 0x00000000, false)
//韩医仙：
//乖女儿！　你没事吧？
SetDlgUpper(17-2-1, 0x00000000, false)
//韩梦慈：
//爹～您先医治李少侠
//他被苗人打伤了
EventSetDirFrame(77, 3, 1, 0)
EventSetDirFrame(77, 2, 1, 0)
VideoUpdate(0, false)
EventSetAutoScript(77, 3, Scr_0x43A9)
WaitEventAutoScriptRun(10, false, false)
SetDlgUpper(3-6-1, 0x00000000, false)
//林月如：
//医仙，求您救救李大哥！
SetDlgLower(31-1-1, 0x00000000, false)
//韩医仙：
//放心～有我在死不了的
FadeOut(0)
EventSetState(77, 7, false, false)
HeroSetSprite(0, 2, false)
PartySetRole(13)
RoleSetDirFrame(0, 3, 0)
RoleSetDirFrame(1, 0, 0)
EventModifyPos(77, 3, 32, 16)
EventSetDirFrame(77, 3, 1, 0)
RoleRevive(10, true)
VideoUpdate(0, false)
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//谢谢你，韩大夫
VideoUpdate(0, false)
SetDlgLower(31-1-1, 0x00000000, false)
//韩医仙：
//哪儿的话，我们才要向
//你们道谢呢．．．
VideoRestore()
//对了．．赵姑娘呢？
VideoUpdate(0, false)
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//她．．为了救我们
//跟那些苗人走了
VideoUpdate(0, false)
SetDlgLower(31-1-1, 0x00000000, false)
//韩医仙：
//唉．．赵姑娘是个好女孩
//许多事情她不愿连累别人
//都自己承担了．．
VideoRestore()
//李大侠．．你可要再
//去找赵姑娘吗？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//我不会让她离开我！
VideoUpdate(0, false)
SetDlgLower(31-1-1, 0x00000000, false)
//韩医仙：
//呵呵～那我就安心了．．
VideoRestore()
//打起精神来吧！
//我相信你和赵姑娘还有缘份的
FadeOut(0)
RoleSetDirFrame(0, 0, 0)
RoleSetDirFrame(1, 0, 0)
EventSetState(77, 2, false, false)
EventSetState(77, 3, false, false)
EventSetState(77, 4, false, false)
EventSetState(77, 5, false, false)
EventSetState(77, 6, false, false)
EventSetState(53, 5, false, false)
EventSetState(53, 7, true, true)
EventSetState(53, 6, true, true)
EventSetAutoScript(53, 6, Event_00001_00026_Auto)
EventSetState(53, 3, true, true)
EventSetState(54, 0, true, false)
EventSetState(52, 14, true, true)
EventSetTriggerScript(53, 6, Scr_0x3BCE)
EventSetTriggerScript(53, 3, Scr_0x3BD1)
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//"韩医仙一行人走了"
ReplaceAndPause()

[Event_00077_00003_Auto]
NPCMoveToBlock(38, 62, 1, 3, false)

[Scr_0x43A9]
NPCMoveToBlock(37, 61, 1, 3, false)
NPCSetDirFrame(2, 0)

[Event_00077_00004_Auto]
NPCMoveToBlock(36, 62, 1, 3, false)

[Event_00077_00005_Auto]
NPCMoveToBlock(38, 64, 0, 3, false)
NPCSetDirFrame(1, 0)

[Event_00077_00006_Auto]
NPCMoveToBlock(36, 61, 0, 3, false)
ReplaceAndPause()
NPCSetDirFrame(3, 0)

[Scene_00067_Enter]
MusicPlay(19, true, 0.00)
SetBattleMusic(39)
SetBattlefield(16)

[Scene_00069_Enter]
SetBattlefield(6)

[Scene_00070_Enter]
SetBattlefield(59)

[Scene_00078_Enter]
SetBattlefield(59)

[Scene_00080_Enter]
SetBattlefield(9)

[Scene_00079_Enter]
MusicPlay(54, true, 0.00)
SetBattleMusic(38)

[Event_00086_00002_Trigger]
Call(Event_00001_00002_Trigger, 0, 0)
SceneEnter(84)

[Event_00084_00007_Trigger]
Call(Event_00001_00003_Trigger, 0, 0)
SceneEnter(86)

[Event_00080_00001_Trigger]
SceneEnter(78)
PartySetPos(33, 80, 1)
FadeOut(0)

[Event_00080_00002_Trigger]
SceneEnter(83)
PartySetPos(7, 53, 0)
FadeOut(0)

[Event_00083_00001_Trigger]
SceneEnter(80)
PartySetPos(50, 75, 0)
FadeOut(0)

[Event_00083_00002_Trigger]
SceneEnter(79)
PartySetPos(13, 91, 0)
FadeOut(0)

[Event_00079_00001_Trigger]
SceneEnter(83)
PartySetPos(53, 47, 0)
FadeOut(0)

[Event_00082_00001_Trigger]
SceneEnter(84)
PartySetPos(6, 23, 1)
FadeOut(0)

[Event_00082_00002_Trigger]
SceneEnter(84)
PartySetPos(11, 80, 1)
FadeOut(0)

[Event_00084_00001_Trigger]
SceneEnter(82)
PartySetPos(53, 25, 1)
FadeOut(0)

[Event_00084_00002_Trigger]
SceneEnter(82)
PartySetPos(52, 77, 0)
FadeOut(0)

[Event_00082_00003_Trigger]
SceneEnter(93)
PartySetPos(25, 56, 1)
FadeOut(0)

[Event_00093_00001_Trigger]
SceneEnter(82)
PartySetPos(22, 34, 0)
FadeOut(0)

[Event_00093_00002_Trigger]
SceneEnter(85)
PartySetPos(28, 22, 1)
FadeOut(0)

[Event_00082_00004_Trigger]
SceneEnter(96)
PartySetPos(21, 41, 0)
FadeOut(0)

[Event_00082_00005_Trigger]
SceneEnter(96)
PartySetPos(45, 42, 1)
FadeOut(0)

[Event_00082_00006_Trigger]
SceneEnter(96)
PartySetPos(17, 67, 0)
FadeOut(0)

[Event_00084_00003_Trigger]
SceneEnter(96)
PartySetPos(38, 62, 1)
FadeOut(0)

[Event_00084_00004_Trigger]
EventSetDirFrame(84, 19, 3, 0)
VideoUpdate(0, false)
//衙役：
//这里是县衙，没事别乱闯
PartySetPos(17, 57, 0)
PartyWalkToBlock(16, 58, 0, 8)

[Scr_0x4411]
SceneEnter(81)
PartySetPos(28, 82, 0)
FadeOut(0)

[Event_00084_00005_Trigger]
SceneEnter(88)
PartySetPos(14, 113, 1)
FadeOut(0)

[Event_00096_00001_Trigger]
SceneEnter(82)
PartySetPos(25, 58, 1)
FadeOut(0)

[Event_00096_00002_Trigger]
SceneEnter(82)
PartySetPos(36, 47, 1)
FadeOut(0)

[Event_00096_00003_Trigger]
SceneEnter(82)
PartySetPos(31, 72, 0)
FadeOut(0)

[Event_00096_00004_Trigger]
SceneEnter(84)
PartySetPos(10, 24, 1)
FadeOut(0)

[Event_00081_00001_Trigger]
SceneEnter(84)
PartySetPos(16, 58, 0)
FadeOut(0)

[Event_00092_00001_Trigger]
Call(Scr_0x02E7, 0, 0)
SceneEnter(92)
PartySetPos(17, 106, 0)
FadeOut(0)

[Event_00092_00002_Trigger]
Call(Event_00204_00005_Trigger, 0, 0)
SceneEnter(92)
PartySetPos(46, 74, 1)
FadeOut(0)

[Event_00082_00007_Trigger]
SceneEnter(95)
PartySetPos(17, 44, 0)
FadeOut(0)

[Event_00082_00008_Trigger]
SceneEnter(94)
PartySetPos(15, 31, 0)
FadeOut(0)

[Event_00095_00001_Trigger]
SceneEnter(82)
PartySetPos(26, 38, 0)
FadeOut(0)

[Event_00094_00001_Trigger]
SceneEnter(82)
PartySetPos(18, 30, 0)
FadeOut(0)

[Event_00094_00002_Trigger]
SceneEnter(93)
PartySetPos(18, 44, 1)
FadeOut(0)

[Event_00093_00003_Trigger]
SceneEnter(94)
PartySetPos(20, 30, 1)
FadeOut(0)

[Event_00093_00004_Trigger]
SceneEnter(95)
PartySetPos(20, 35, 1)
FadeOut(0)

[Event_00095_00002_Trigger]
SceneEnter(93)
PartySetPos(38, 53, 0)
FadeOut(0)

[Event_00084_00006_Trigger]
SceneEnter(89)
PartySetPos(25, 76, 1)
FadeOut(0)

[Event_00088_00001_Trigger]
SceneEnter(84)
PartySetPos(52, 64, 0)
FadeOut(0)

[Scr_0x445F]
SceneEnter(90)
PartySetPos(25, 76, 1)
FadeOut(0)

[Event_00089_00001_Trigger]
SceneEnter(84)
PartySetPos(34, 29, 0)
FadeOut(0)

[Event_00097_00001_Trigger]
SceneEnter(93)
PartySetPos(37, 45, 1)
FadeOut(0)

[Event_00093_00005_Trigger]
SceneEnter(97)
PartySetPos(12, 31, 1)
FadeOut(0)

[Event_00097_00002_Trigger]
SceneEnter(93)
PartySetPos(32, 40, 0)
FadeOut(0)

[Event_00093_00006_Trigger]
SceneEnter(97)
PartySetPos(42, 27, 0)
FadeOut(0)

[Event_00097_00003_Trigger]
SceneEnter(93)
PartySetPos(27, 35, 0)
FadeOut(0)

[Event_00085_00001_Trigger]
SceneEnter(93)
PartySetPos(23, 31, 0)
FadeOut(0)

[Event_00093_00007_Trigger]
SceneEnter(97)
PartySetPos(10, 79, 0)
FadeOut(0)

[Event_00098_00001_Trigger]
SceneEnter(87)
PartySetPos(10, 105, 1)
FadeOut(0)

[Event_00098_00002_Trigger]
SceneEnter(87)
PartySetPos(43, 110, 1)
FadeOut(0)

[Event_00087_00001_Trigger]
SceneEnter(98)
PartySetPos(14, 31, 0)
FadeOut(0)

[Event_00087_00002_Trigger]
SceneEnter(98)
PartySetPos(44, 30, 0)
FadeOut(0)

[Event_00085_00002_Trigger]
SceneEnter(98)
PartySetPos(18, 35, 0)
FadeOut(0)

[Event_00085_00003_Trigger]
SceneEnter(98)
PartySetPos(40, 33, 1)
FadeOut(0)

[Event_00085_00004_Trigger]
SceneEnter(98)
PartySetPos(13, 68, 1)
FadeOut(0)

[Event_00098_00003_Trigger]
SceneEnter(85)
PartySetPos(14, 9, 1)
FadeOut(0)

[Event_00098_00004_Trigger]
SceneEnter(85)
PartySetPos(40, 14, 1)
FadeOut(0)

[Event_00098_00005_Trigger]
SceneEnter(85)
PartySetPos(56, 20, 0)
FadeOut(0)

[Event_00098_00006_Trigger]
SceneEnter(86)
PartySetPos(11, 14, 0)
FadeOut(0)

[Event_00086_00001_Trigger]
SceneEnter(98)
PartySetPos(17, 65, 0)
FadeOut(0)

[Event_00084_00008_Trigger]
SceneEnter(99)
PartySetPos(17, 29, 0)
FadeOut(0)

[Event_00099_00001_Trigger]
SceneEnter(84)
PartySetPos(20, 28, 1)
FadeOut(0)

[Event_00084_00009_Trigger]
SceneEnter(99)
PartySetPos(38, 24, 1)
FadeOut(0)

[Event_00099_00002_Trigger]
SceneEnter(84)
PartySetPos(23, 30, 1)
FadeOut(0)

[Event_00088_00002_Trigger]
RoleMoveOneStep(-8, 8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-8, 8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-8, 8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-8, 8, 0)
WaitEventAutoScriptRun(0, false, false)
SceneEnter(91)
PartySetPos(33, 79, 0)
FadeOut(0)

[Event_00091_00001_Trigger]
RoleMoveOneStep(8, -8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(8, -8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(8, -8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(8, -8, 0)
WaitEventAutoScriptRun(0, false, false)
SceneEnter(88)
PartySetPos(14, 98, 0)
FadeOut(0)

[Event_00105_00002_Trigger]
SceneEnter(84)
PartySetPos(55, 26, 0)
FadeOut(0)

[Event_00079_00005_Trigger]
//官差：
//小兄弟，要进城的话，小心
//自己身上的财物。

[Event_00079_00006_Trigger]
//官差：
//看什麽看！没见过官差啊！

[Event_00079_00004_Trigger]
EventSetTriggerMode(-1, -1, false, 2)
//巡捕：
//我是扬州府巡捕，为了过滤盘
//查疑犯，要进去可以，不过一
//概不准出城。
EventWalkOneStep(-1, -1, -8, 0)
WaitEventAutoScriptRun(0, false, false)
EventWalkOneStep(-1, -1, -8, 0)
WaitEventAutoScriptRun(0, false, false)
EventWalkOneStep(-1, -1, -8, 0)
WaitEventAutoScriptRun(0, false, false)
EventWalkOneStep(-1, -1, -8, 0)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(4, false, false)
PartyWalkToBlock(13, 75, 0, 2)
RoleSetDirFrame(0, 2, 0)
RoleMoveOneStep(8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(8, -4, 0)
EventSetDirFrame(79, 5, 3, 0)
EventSetDirFrame(79, 6, 1, 0)
EventWalkOneStep(-1, -1, 8, 4)
EventWalkOneStep(79, 5, 8, 4)
EventWalkOneStep(79, 6, -8, -4)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(8, -4, 0)
EventWalkOneStep(0, 0, 8, 4)
EventWalkOneStep(79, 5, 8, 4)
EventWalkOneStep(79, 6, -8, -4)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
SceneEnter(82)

[Event_00082_00009_Auto]
NPCMoveToBlock(29, 71, 0, 3, false)
NPCMoveToBlock(28, 72, 0, 3, false)
[Event_00082_00010_Auto]
NPCMoveToBlock(29, 73, 0, 3, false)
NPCMoveToBlock(30, 72, 0, 3, false)
GotoWithNop(Event_00082_00009_Auto, 0)

[Event_00082_00011_Auto]
NPCMoveToBlock(29, 41, 0, 2, true)
NPCMoveToBlock(21, 33, 1, 2, true)
ReplaceAndPause()
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(15, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(6, false, false)
NPCSetDirFrame(3, 0)
ReplaceAndPause()
NPCMoveToBlock(30, 42, 0, 2, true)
NPCMoveToBlock(50, 21, 1, 2, true)
NPCMoveToBlock(49, 20, 1, 3, false)
GotoWithNop(Event_00082_00011_Auto, 0)

[Event_00082_00014_Auto]
NPCMoveToBlock(42, 87, 0, 2, true)
NPCMoveToBlock(28, 73, 1, 2, true)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(8, false, false)
NPCSetDirFrame(1, 0)
ReplaceAndPause()
NPCMoveToBlock(20, 65, 0, 2, true)
NPCMoveToBlock(45, 40, 0, 2, true)
WaitEventAutoScriptRun(8, false, false)
NPCSetDirFrame(3, 0)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(6, false, false)
NPCMoveToBlock(20, 65, 0, 2, true)
NPCMoveToBlock(42, 87, 0, 2, true)
NPCMoveToBlock(57, 72, 0, 2, true)
ReplaceAndPauseWithNop(Event_00082_00014_Auto, 0)

[Event_00082_00015_Auto]
NPCMoveToBlock(41, 86, 1, 2, true)
NPCMoveToBlock(29, 74, 1, 2, true)
WaitEventAutoScriptRun(10, false, false)
NPCMoveToBlock(19, 64, 1, 2, true)
NPCMoveToBlock(44, 39, 1, 2, true)
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(3, 0)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(3, false, false)
NPCMoveToBlock(19, 64, 1, 2, true)
NPCMoveToBlock(41, 86, 1, 2, true)
NPCMoveToBlock(56, 71, 1, 2, true)
ReplaceAndPauseWithNop(Event_00082_00015_Auto, 0)

[Event_00082_00016_Auto]
NPCMoveToBlock(42, 87, 1, 2, true)
NPCMoveToBlock(30, 75, 1, 2, true)
WaitEventAutoScriptRun(10, false, false)
NPCMoveToBlock(20, 65, 1, 2, true)
NPCMoveToBlock(45, 40, 1, 2, true)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(3, 0)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(20, 65, 1, 2, true)
NPCMoveToBlock(42, 87, 1, 2, true)
NPCMoveToBlock(57, 72, 1, 2, true)
ReplaceAndPauseWithNop(Event_00082_00016_Auto, 0)

[Event_00082_00017_Auto]
NPCMoveToBlock(16, 69, 0, 2, true)
ReplaceAndPause()
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(7, false, false)
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(10, false, false)
NPCSetDirFrame(1, 0)
NPCMoveToBlock(7, 60, 1, 2, true)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(10, false, false)
NPCMoveToBlock(30, 83, 0, 2, true)
WaitEventAutoScriptRun(3, false, false)
ReplaceAndPauseWithNop(Event_00082_00017_Auto, 0)

[Event_00093_00027_Trigger]
Call(Scr_0x0016, 93, 27)
Call(Scr_0x0016, 93, 28)

[Event_00093_00029_Trigger]
Call(Scr_0x0016, 93, 29)
Call(Scr_0x0016, 93, 30)

[Event_00093_00031_Trigger]
Call(Scr_0x0016, 93, 31)
Call(Scr_0x0016, 93, 32)

[Event_00093_00033_Trigger]
Call(Scr_0x0016, 93, 33)
Call(Scr_0x0016, 93, 34)

[Event_00084_00013_Auto]
WaitEventAutoScriptRun(2, false, false)
NPCMoveToBlock(53, 63, 1, 2, true)
ReplaceAndPause()
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(2, false, false)
NPCMoveToBlock(52, 62, 0, 2, true)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(6, false, false)
NPCSetDirFrame(3, 0)
ReplaceAndPauseWithNop(Event_00084_00013_Auto, 0)

[Event_00084_00016_Auto]
ReplaceAndPause()
GotoWithProbability(8, Event_00084_00016_Auto)
NPCMoveToBlock(33, 85, 0, 2, true)
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(10, false, false)
NPCMoveToBlock(28, 80, 1, 2, true)
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(11, false, false)
NPCSetDirFrame(1, 0)
NPCMoveToBlock(27, 79, 0, 2, true)
ReplaceAndPause()
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(3, false, false)
NPCMoveToBlock(29, 81, 0, 2, true)
ReplaceAndPauseWithNop(Event_00084_00016_Auto, 0)

[Scr_0x4591]
NPCSetDirFrame(3, 0)
NPCMoveToBlock(1, 90, 0, 2, true)
EventSetState(-1, -1, false, false)

[Scr_0x4595]
WaitEventAutoScriptRun(3, false, false)
NPCMoveToBlock(1, 90, 0, 2, true)
EventSetState(-1, -1, false, false)

[Event_00084_00037_Trigger]
EventSetState(-1, -1, false, false)
SceneEnter(92)
PartySetPos(16, 19, 0)
RoleSetDirFrame(0, 3, 0)
FadeOut(0)

[Scr_0x459F]
PartySetRole(1)
SceneEnter(84)
PartySetPos(16, 18, 0)
RoleSetDirFrame(0, 2, 0)
FadeOut(0)

[Event_00096_00005_Trigger]
//磨刀老头：
//铸兵器呢、讲究的是质良、水净
//及火侯。当然啦，最重要的一点
//就是铸刀师父本身的功力够不够
ReplaceAndPause()
//磨刀老头：
//嘿咻．．嘿咻．．

[Event_00093_00035_Trigger]
EventSetAutoScript(93, 35, Scr_0x45B1)
EventSetTriggerMode(-1, -1, false, 0)
PlaySound(178)

[Scr_0x45B1]
NPCMoveToBlock(24, 39, 0, 8, false)
NPCMoveToBlock(25, 40, 0, 8, false)
NPCMoveToBlock(25, 39, 1, 8, false)
NPCMoveToBlock(40, 53, 1, 8, false)
EventSetState(-1, -1, false, false)

[Event_00085_00005_Trigger]
EventSetAutoScript(85, 5, Scr_0x45BF)
EventSetTriggerMode(-1, -1, false, 0)
PlaySound(178)
ReplaceAndPause()
EventSetAutoScript(85, 5, Scr_0x45C3)
EventSetTriggerMode(-1, -1, false, 0)
PlaySound(178)

[Scr_0x45BF]
NPCMoveToBlock(22, 16, 1, 8, false)
NPCMoveToBlock(15, 9, 0, 8, false)
EventSetTriggerMode(-1, -1, true, 2)

[Scr_0x45C3]
NPCMoveToBlock(32, 26, 0, 8, false)
NPCMoveToBlock(35, 22, 1, 3, false)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(16)

[Event_00082_00024_Trigger]
//醉鬼：
//辣块妈妈地，这县太爷真不是
//东西???呃！??
//我弟弟也没犯什麽罪，无缘无
//故地就被抓了起来???
EventSetAutoScript(-1, -1, Scr_0x45E7)
EventSetTriggerMode(-1, -1, false, 0)

[Event_00082_00025_Trigger]
//醉鬼：
//呃！???好喝、真好喝！
EventSetAutoScript(-1, -1, Scr_0x4601)
EventSetTriggerMode(-1, -1, false, 0)

[Event_00082_00024_Auto]
NPCSetFrame(0)
ReplaceAndPause()
NPCSetFrame(1)
WaitEventAutoScriptRun(4, false, false)
NPCSetFrame(0)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(2)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(0)
ReplaceAndPause()
NPCSetFrame(3)
WaitEventAutoScriptRun(5, false, false)
NPCSetFrame(0)
ReplaceAndPause()
NPCSetFrame(2)
WaitEventAutoScriptRun(3, false, false)
ReplaceAndPauseWithNop(Event_00082_00024_Auto, 0)

[Scr_0x45E7]
NPCSetFrame(4)
ReplaceAndPause()
NPCSetFrame(5)
ReplaceAndPause()
NPCSetFrame(6)
NPCSetFrame(7)
ReplaceAndPause()
NPCSetFrame(8)
WaitEventAutoScriptRun(5, false, false)
[Scr_0x45F0]
ReplaceAndPause()
GotoWithProbability(30, Scr_0x45F0)
NPCSetFrame(9)
ReplaceAndPause()
NPCSetFrame(10)
WaitEventAutoScriptRun(9, false, false)
GotoWithProbability(16, Scr_0x45F0)
EventSetTriggerMode(-1, -1, false, 2)
ReplaceAndPauseWithNop(Event_00082_00024_Auto, 0)

[Event_00082_00025_Auto]
NPCSetFrame(0)
GotoWithProbability(40, Event_00082_00025_Auto)
WaitEventAutoScriptRun(12, false, false)
NPCSetFrame(1)
ReplaceAndPause()
ReplaceAndPauseWithNop(Event_00082_00025_Auto, 0)

[Scr_0x4601]
NPCSetFrame(2)
ReplaceAndPause()
NPCSetFrame(0)
ReplaceAndPause()
NPCSetFrame(3)
ReplaceAndPause()
NPCSetFrame(0)
NPCSetFrame(4)
WaitEventAutoScriptRun(11, false, false)
NPCSetFrame(5)
ReplaceAndPause()
NPCSetFrame(6)
[Scr_0x460D]
NPCSetFrame(7)
GotoWithProbability(25, Scr_0x460D)
WaitEventAutoScriptRun(3, false, false)
NPCSetFrame(8)
WaitEventAutoScriptRun(2, false, false)
GotoWithProbability(20, Scr_0x460D)
WaitEventAutoScriptRun(4, false, false)
NPCSetFrame(9)
WaitEventAutoScriptRun(10, false, false)
GotoWithProbability(16, Scr_0x460D)
EventSetTriggerMode(-1, -1, false, 2)
ReplaceAndPauseWithNop(Event_00082_00025_Auto, 0)

[Event_00093_00017_Auto]
WaitEventAutoScriptRun(5, false, false)
NPCMoveToBlock(23, 31, 0, 2, true)
NPCMoveToBlock(26, 34, 1, 2, true)
NPCSetDirFrame(2, 0)
Call(Event_00093_00031_Trigger, 0, 0)
NPCMoveToBlock(27, 33, 1, 2, true)
EventSetState(97, 6, true, true)
EventSetState(-1, -1, false, false)

[Event_00093_00016_Trigger]
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
//无赖：
//小娘子，你好香喔！
//让大爷抱一抱吧！
VideoRestore()
//看你细皮嫩肉的，真想捏你一把
VideoRestore()
//晚上有没有空啊？
//跟咱们快活快活。
EventSetState(-1, -1, false, false)
EventSetAutoScript(93, 10, Null)
EventSetAutoScript(93, 11, Null)
EventSetAutoScript(93, 12, Null)
EventSetState(93, 17, true, true)
EventSetDirFrame(93, 10, 2, 0)
VideoUpdate(0, false)
//哼．．！
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(93, 11, 2, 0)
WaitEventAutoScriptRun(10, false, false)
EventSetState(93, 10, false, false)
EventSetState(93, 11, false, false)
EventSetState(93, 12, false, false)
EventSetState(93, 13, true, false)
EventSetState(93, 14, true, false)
EventSetState(93, 15, true, false)
WaitEventAutoScriptRun(15, false, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//哇．．好悍的女人

[Event_00093_00013_Auto]
WaitEventAutoScriptRun(4, false, false)
NPCSetFrame(1)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(2)
PlaySound(93)

[Event_00093_00014_Auto]
WaitEventAutoScriptRun(7, false, false)
NPCSetFrame(1)
WaitEventAutoScriptRun(3, false, false)
NPCSetFrame(2)
PlaySound(93)

[Event_00093_00015_Auto]
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(1)
ReplaceAndPause()
NPCSetFrame(2)
PlaySound(93)

[Event_00093_00017_Trigger]
//柳媚娘：
//那三个白痴只是中了醍醐香
//躺在那睡上一个时辰自会醒来
ReplaceAndPause()
//这是我的房间，请你们出去！

[Scr_0x465B]
NPCMoveToBlock(15, 25, 0, 2, true)
NPCSetDirFrame(2, 0)

[Event_00097_00007_Trigger]
EventSetState(-1, -1, false, false)
EventSetTriggerMode(93, 1, false, 0)
EventSetTriggerMode(94, 1, false, 0)
EventSetTriggerMode(95, 1, false, 0)
EventSetState(93, 13, false, false)
EventSetState(93, 14, false, false)
EventSetState(93, 15, false, false)
EventSetState(93, 17, false, false)
EventSetState(93, 18, false, false)
EventSetState(93, 19, true, true)
EventSetState(93, 20, false, false)
EventSetState(93, 21, false, false)
EventSetState(93, 22, false, false)
EventSetState(93, 23, false, false)
EventSetState(93, 24, false, false)
EventSetState(93, 25, false, false)
EventSetState(93, 26, false, false)
EventSetState(97, 6, false, false)
EventSetState(95, 3, false, false)
EventSetState(84, 35, true, true)
EventSetState(84, 36, true, true)
EventSetState(86, 6, true, true)
EventSetState(86, 7, true, true)
EventSetState(97, 5, false, false)
EventSetPos(97, 4, 1408, 400)
EventSetTriggerScript(97, 4, Scr_0x481F)
PartyWalkToBlock(17, 27, 0, 8)
PartyWalkToBlock(15, 25, 0, 8)
WaitEventAutoScriptRun(3, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(1, 1, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(0, false, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//这．．只有一张床
//怎麽办？
VideoUpdate(0, false)
SetDlgLower(3-5-1, 0x00000000, false)
//林月如：
//什．．什麽怎麽办？
//不就只好这样了，还能怎麽样
VideoUpdate(0, false)
SetDlgUpper(1-3-1, 0x00000000, false)
//李逍遥：
//那．．你是女孩子，你睡床上
//我就委屈点趴在桌上就行了
VideoUpdate(0, false)
EventSetState(98, 0, true, false)
PartySetRole(1)
PartyWalkToBlock(14, 25, 1, 4)
PartyWalkToBlock(17, 28, 1, 4)
EventSetDirFrame(98, 0, 0, 0)
PartyWalkToBlock(16, 29, 1, 4)
EventSetDirFrame(98, 0, 3, 0)
SetDlgUpper(3-2-1, 0x00000000, false)
//林月如：
//大木头～
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//　　什麽？
EventSetDirFrame(98, 0, 1, 0)
VideoUpdate(0, false)
SetDlgUpper(3-5-1, 0x00000000, false)
//林月如：
//没事～　我在打嗝
EventSetAutoScript(98, 0, Scr_0x465B)
WaitEventAutoScriptRun(15, false, false)
MusicStop()
FadeOut(2)
MusicPlay(35, true, 0.00)
RoleModifyHPMP(9999, true)
PartySetPos(16, 30, 0)
HeroSetSprite(0, 379, false)
PartySetRole(1)
RoleSetDirFrame(0, 0, 0)
RoleMoveOneStep(0, 0, 5)
EventSetState(98, 0, false, false)
EventSetState(97, 8, true, false)
SetTimeFilter(2)
WaitEventAutoScriptRun(5, false, false)
EventSetState(97, 8, false, false)
RoleSetDirFrame(0, 0, 1)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 0, 2)
WaitEventAutoScriptRun(10, false, false)
SetDlgUpper(3-4-1, 0x00000000, false)
//林月如：
//$08唉．．．．
VideoRestore()
//李大哥．．在你心中
//我到底是什麽呢？$02
MusicStop()
WaitEventAutoScriptRun(5, false, false)
//"门外有人喊叫：有贼啊！"
MusicPlay(36, true, 0.00)
RoleSetDirFrame(0, 0, 3)
EventSetState(97, 8, true, false)
EventSetDirFrame(97, 8, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(3-3-1, 0x00000000, false)
//林月如：
//　　贼！？
EventSetAutoScript(97, 8, Scr_0x4703)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(97, 8, 3, 0)
WaitEventAutoScriptRun(5, false, false)
EventSetDirFrame(97, 8, 0, 0)
WaitEventAutoScriptRun(5, false, false)
EventSetAutoScript(97, 8, Scr_0x4706)
WaitEventAutoScriptRun(5, false, false)
RoleSetDirFrame(0, 0, 4)
WaitEventAutoScriptRun(8, false, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//　　怎麽了！？
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 0, 0)
PartySetPos(16, 29, 1)
RoleMoveOneStep(0, 0, 0)
EventSetState(93, 36, true, false)
EventSetState(94, 0, true, false)

[Event_00093_00018_Trigger]
EventSetState(97, 7, true, false)
//掌柜：
//客倌，如果想住宿的话
//只剩下楼上最右边的一间厢房。
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//哦？一间房???
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//掌柜：
//你们小俩口挤一下
//有什麽关系呢？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//不是、不是，您老误会了
//我们不是夫妻。
VideoUpdate(0, false)
//林月如：
//?????
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//掌柜：
//不是．．也没办法啊！
//全扬州城就我们一家客栈
//到了晚上，一般老百姓又不
//得任意外出，你们不住这儿
//就没地方睡了。
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//嗯??好吧！只好将就一下。
ReplaceAndPause()
//掌柜：
//你们的房间在楼上
//最右边的那间

[Scr_0x4703]
NPCMoveToBlock(15, 29, 0, 3, false)
NPCSetDirFrame(0, 0)

[Scr_0x4706]
NPCMoveToBlock(11, 33, 0, 8, false)
EventSetState(-1, -1, false, false)

[Event_00093_00037_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
SetDlgUpper(3-3-1, 0x00000000, false)
//林月如：
//李大哥！　快拦下她
SetBattlefield(21)
BattleStart(29, Scr_0x470F, Null)
[Scr_0x470F]
BattleEnd()
EventSetState(93, 36, false, false)
PartySetRole(31)
PartySetPos(24, 32, 1)
EventModifyPos(-1, -1, -32, -16)
NPCSetDirFrame(3, 0)
VideoUpdate(0, false)
EventSetAutoScript(-1, -1, Scr_0x473E)
EventSetLayer(94, 0, 13)
WaitEventAutoScriptRun(0, false, false)
PlaySound(201)
WaitEventAutoScriptRun(12, false, false)
EventSetState(-1, -1, false, false)
PartyWalkToBlock(23, 31, 1, 8)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//如妹！　别追了
VideoUpdate(0, false)
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(3-2-1, 0x00000000, false)
//林月如：
//不能这样就算了．．啊～
//李大哥．．刚才你怎麽这麽快
//就赶过来了！？
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//有个人替我盖被子，还在我耳
//边讲一些奇怪的话，我怎麽可
//能不知不觉？
SetDlgUpper(3-4-1, 0x00000000, false)
//林月如：
//原来．．你都听到了！
//你．．你好坏。
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//你也太逞强了，那个黑衣贼
//身手不弱，你一个人对付她
//太冒险了
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//我们二人联手就不怕她了吧！
//走！　咱们出去逮那黑衣贼

[Scr_0x473E]
NPCSetFrame(12)
[Scr_0x473F]
EventModifyPos(-1, -1, -6, -12)
GotoWithNop(Scr_0x473F, 0)

[Event_00086_00006_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
MusicPlay(0, true, 0.00)
//哈～别想跑！
SetBattleMusic(48)
BattleStart(29, Scr_0x9C9B, Null)
PartySetRole(13)
PartySetPos(39, 16, 0)
BattleEnd()
VideoUpdate(0, false)
ToggleDayNight(false)
SetDlgLower(10-1-1, 0x00000000, false)
//女飞贼：
//哎呦～　天都亮了！
//东西还给你们，我不玩了
EventSetStateSequence(87, 3, 87, 10, false, false)
EventSetAutoScript(-1, -1, Scr_0x4766)
EventSetTriggerMode(93, 1, true, 1)
EventSetTriggerMode(94, 1, true, 1)
EventSetTriggerMode(95, 1, true, 1)
EventSetState(93, 19, false, false)
EventSetState(93, 18, true, true)
EventSetTriggerScript(93, 18, Scr_0x4933)
EventSetState(95, 3, true, true)
EventSetState(93, 23, true, true)
EventSetState(93, 24, true, true)
WaitEventAutoScriptRun(3, false, false)
PartyWalkToBlock(40, 17, 1, 8)
PartyWalkToBlock(35, 23, 0, 8)
WaitEventAutoScriptRun(8, false, false)
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//逃的真快！
MusicPlay(54, true, 0.00)

[Scene_00085_Enter]
SetBattlefield(30)

[Scr_0x4766]
NPCMoveToBlock(34, 23, 1, 8, false)
NPCSetFrame(13)
PlaySound(45)
EventModifyPos(-1, -1, -20, 8)
EventModifyPos(-1, -1, -16, 8)
EventModifyPos(-1, -1, -12, 8)
EventModifyPos(-1, -1, -8, 10)
EventModifyPos(-1, -1, -4, 12)
EventModifyPos(-1, -1, 0, 14)
EventModifyPos(-1, -1, 0, 16)
EventSetState(-1, -1, false, false)

[Event_00089_00002_Trigger]
//婢女：
//对不住，现在我们家主人
//不在，如果有什麽事请晚
//点再来。

[Event_00089_00003_Trigger]
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//请问．．．
VideoUpdate(0, false)
SetDlgUpper(10-2-1, 0x00000000, false)
//姬三娘：
//哦？　小哥哥～
//您找奴家有何贵事？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//昨晚我追一群飞贼，追到这附
//近来时给追丢了，所以顺道过
//来看看是否有线索可循
VideoUpdate(0, false)
SetDlgUpper(10-2-1, 0x00000000, false)
//姬三娘：
//呦～难不成您认为
//飞贼躲在我这吗？
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//啊～不是，夫人这麽年轻貌美
//怎麽可能是飞贼的同夥呢
VideoUpdate(0, false)
SetDlgUpper(10-2-1, 0x00000000, false)
//姬三娘：
//呵呵呵～公子您真爱说笑
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//昨天夜里～夫人可曾听见
//屋外有任何不寻常的声响？
VideoUpdate(0, false)
SetDlgUpper(10-2-1, 0x00000000, false)
//姬三娘：
//呵～　当然有啊．．
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//那可曾看见有人从您这
//屋顶跳入院子中？
VideoUpdate(0, false)
SetDlgUpper(10-2-1, 0x00000000, false)
//姬三娘：
//月圆之夜．．独守空闺
//奴家昨夜又是孤枕难眠
VideoRestore()
//盼呀盼呀，看会不会盼到
//一位翩翩郎君从天而降，
//来陪陪奴家，不过．．
VideoRestore()
//却没有去盼一个飞贼从
//我家屋顶跳下来啊．．
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//就是说～没有罗？
VideoUpdate(0, false)
SetDlgUpper(10-2-1, 0x00000000, false)
//姬三娘：
//小哥哥～您这麽想抓贼的话
//今晚何不在我家住下来嘛
//说不定，那飞贼又从我这屋顶
//经过，不就可以逮个正着吗？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//这．．不太妥当吧．．(
VideoUpdate(0, false)
SetDlgUpper(10-2-1, 0x00000000, false)
//姬三娘：
//哎呀～奴家最崇拜有正义感
//的侠士了．．您就让奴家达
//成这个小小的心愿嘛．．
VideoUpdate(0, false)
SetDlgLower(3-5-1, 0x00000000, false)
//林月如嘟嚷：
//脸皮真厚．．
VideoUpdate(0, false)
SetDlgUpper(10-2-1, 0x00000000, false)
//姬三娘：
//呵呵～比起孤男寡女双宿双飞
//投宿客栈还同寝一室的．．
//奴家的脸皮还算薄了点呢
VideoUpdate(0, false)
SetDlgLower(3-3-1, 0x00000000, false)
//林月如：
//你．．．！
VideoUpdate(0, false)
SetDlgUpper(10-2-1, 0x00000000, false)
//姬三娘：
//怎麽着？　又不是在说你
VideoRestore()
//呵呵～小哥哥．．
//在客栈投宿多花钱呀！
VideoRestore()
//这扬州城治安这麽差
//我这房子这麽大，就是没
//有一个男主人，到了晚上
//奴家心里会害怕呢．．
//您何不搬来我这住下，岂不
//两全其美？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//　这．．我考虑看看．．
VideoUpdate(0, false)
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//　　哼！
PartySetRole(1)
RoleSetDirFrame(0, 0, 0)
EventSetState(89, 12, true, true)
VideoUpdate(0, false)
EventSetState(86, 8, true, true)
EventSetState(84, 42, true, true)
WaitEventAutoScriptRun(4, false, false)
RoleMoveOneStep(-8, 4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-8, 4, 0)
WaitEventAutoScriptRun(8, false, false)
SetDlgUpper(1-10-1, 0x00000000, false)
//李逍遥：
//月如！　你去哪？
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//对不起，告辞！
RoleSetDirFrame(0, 0, 0)
SceneSetScripts(84, Scr_0x4800, Null)
ReplaceAndPause()
SetDlgUpper(10-2-1, 0x00000000, false)
//姬三娘：
//呦．．小妹妹气跑啦？

[Scr_0x4800]
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(1-2-1, 0x00000000, false)
//李逍遥：
//月如！　你爬那麽高干嘛
EventSetDirFrame(84, 42, 1, 0)
VideoUpdate(0, false)
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//　　你管我！
EventSetAutoScript(84, 42, Scr_0x48BD)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 1, 0)
ReplaceAndPause()

[Event_00086_00007_Trigger]
EventSetState(-1, -1, false, false)
VideoUpdate(0, false)
SetDlgBox(0x00000000)
//拾起布包
AddItem(211, 0)

[Event_00097_00004_Trigger]
//古董商：
//我顺道经过扬州来做生意
//谁知道进城後就出不去了
ReplaceAndPause()
//古董商：
//现在城内又传女飞贼到处做
//案，害得我成天提心吊胆的

[Scr_0x481F]
//古董商：
//呜．．我的行李被偷了
//我的财产全在里面呀！
ReplaceAndPause()
//我的金元宝．．古董．．
//呜．．这下子我破产了！
ReplaceAndPauseWithNop(Scr_0x481F, 0)

[Scr_0x4827]
RemoveItem(211, 1, Null)
//古董商：
//啊～太好了！
EventSetAutoScript(-1, -1, Scr_0x4867)
WaitEventAutoScriptRun(4, false, false)
EventSetState(97, 5, true, false)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(97, 5, 0, 1)
WaitEventAutoScriptRun(6, false, false)
//古董商：
//咦．．？　怎麽少了一样
EventSetAutoScript(-1, -1, Scr_0x4869)
WaitEventAutoScriptRun(5, false, false)
VideoUpdate(0, false)
//古董商：
//我的"紫金葫芦"呢？
//是不是你们偷藏起来了
//你们跟飞贼是不是一夥的！
VideoUpdate(0, false)
SetDlgLower(3-3-1, 0x00000000, false)
//林月如：
//是我们冒着生命危险才把你的
//东西抢回来的，你不但不感激
//反而诬赖起我们来了！？
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//这位员外，我们若是真的拿
//了你的葫芦，又何必把这包
//东西还你！？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//古董商：
//那紫金葫芦可是我花了大半
//辈子的积蓄才弄到手的！
VideoRestore()
//不．．我要去报官
//对～报官！
EventSetDirFrame(97, 4, 1, 0)
EventSetAutoScript(-1, -1, Scr_0x486C)
WaitEventAutoScriptRun(13, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(1, 0, 0)
WaitEventAutoScriptRun(15, false, false)
SetDlgUpper(3-2-1, 0x00000000, false)
//林月如：
//真是好心没好报
//这种人被偷光了活该！
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//如妹！　算了．．
//我看咱们是中了那女飞贼的
//计了，那位员外少的宝物一
//定是在那女飞贼的手中
//我们抢回来的，只是其它
//无关紧要的东西
VideoUpdate(0, false)
SetDlgUpper(3-3-1, 0x00000000, false)
//林月如：
//我们岂不是白忙一场！？
EventSetState(89, 2, false, false)
EventSetStateSequence(89, 3, 89, 11, true, true)

[Scr_0x4867]
NPCMoveToBlock(43, 24, 1, 3, false)

[Scr_0x4869]
NPCMoveToBlock(44, 25, 0, 3, false)
NPCSetDirFrame(0, 0)

[Scr_0x486C]
NPCMoveToBlock(43, 24, 1, 3, false)
EventSetState(97, 5, false, false)
ReplaceAndPause()
ReplaceAndPause()
NPCMoveToBlock(40, 28, 0, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x4873]
//母亲
EventSetAutoScript(-1, -1, Event_00084_00033_Auto)
EventSetAutoScript(84, 34, Scr_0x4595)

[Scr_0x4877]
//小孩

[Event_00079_00007_Trigger]
//告示上写着：
//"奉扬州太守之令，近日城内宵
//小猖獗，为确实追查嫌疑犯，
//一干人等一律只许进城不许出城"

[Event_00082_00018_Trigger]
//告示：
//"近日女飞贼集团目无法纪
//於城中四处行窃、作恶多端
//特颁此令，有消息密报经证
//实者赏银二百两。"

[Event_00084_00041_Trigger]
//查封告示：
//公孙氏一家，贪赃枉法、官商
//勾结，判决财产全数充公
//及查封屋宅，公孙氏一家十
//四口流放边疆。

[Event_00084_00040_Trigger]
//悬赏告示：
//江洋大盗游天霸，杀人放火、
//奸淫掳掠、偷抢拐骗、无恶不
//作，特颁此令，严厉缉捕游天
//霸，协助捕获者赏银五百两。

[Event_00084_00039_Trigger]
//告示：
//奉扬州城县令口谕，严格实施
//宵禁，一干闲杂人等晚间一律
//不准外出，违反规定者拘禁三
//日并罚银三十两。
//於犯罪集团知情不报者
//罚银三百两。
//随地吐痰、小便者罚银二十两。
//妨碍官差公务者罚银一百两。
//严禁聚赌，违反者罚银三百两。
//纵犬伤人，罚银十两。

[Event_00084_00035_Trigger]
SetDlgLower(0, 0x00000000, false)
//六婆：
//隔壁这户人家呀～
//前不久搬来一位寡妇
//虽说是寡妇，但是她家中
//可有钱呢。
//有次我到她家串门子，不小心
//瞧见她家中有处秘室呢．．
//里头堆满金银珠宝，看得我都
//傻眼了

[Event_00084_00036_Trigger]
SetDlgLower(0, 0x00000000, false)
//三姑：
//我跟你说啊～隔壁那栋宅子
//就是门口挂着灯笼的那户
//前不久才搬来一位寡妇
VideoRestore()
//说也奇怪，白天很少见到有人
//出来，到了半夜却常听见许多
//人进进出出的声音
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//三姑：
//也不知那寡妇靠什麽发的财
//连家里头的丫环都穿金戴银的
//那些婢女都守口如瓶，问也问
//不出个头绪来。

[Event_00084_00019_Trigger]
//衙役：
//申冤的去击鼓
//探监的走侧门
//要见老爷的先上拜帖。

[Scr_0x48BD]
NPCMoveToBlock(38, 26, 0, 8, false)
NPCMoveToBlock(32, 20, 0, 8, false)
NPCMoveToBlock(30, 22, 0, 8, false)
NPCMoveToBlock(16, 8, 0, 8, false)
NPCMoveToBlock(13, 11, 0, 8, false)
NPCSetDirFrame(2, 0)

[Event_00089_00012_Auto]
NPCMoveToBlock(24, 78, 0, 8, false)
EventSetState(-1, -1, false, false)

[Event_00086_00008_Trigger]
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//你在生什麽气啊？
NPCSetDirFrame(3, 0)
VideoUpdate(0, false)
SetDlgUpper(3-3-1, 0x00000000, false)
//林月如：
//你去跟那个不要脸的女人
//一起算了！
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//我又哪里得罪你了？
VideoUpdate(0, false)
SetDlgUpper(3-2-1, 0x00000000, false)
//林月如：
//你们男人都是一个样
//看到漂亮的女人就失了魂似的
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//那个寡妇？我怎麽会？
//她又没有你漂亮？
NPCSetDirFrame(2, 0)
VideoUpdate(0, false)
SetDlgUpper(3-4-1, 0x00000000, false)
//林月如：
//你．．你最爱骗人了
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(7, false, false)
MusicStop()
SetDlgUpper(3-5-1, 0x00000000, false)
//林月如：
//咦．．！？
EventSetAutoScript(86, 8, Scr_0x490D)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(86, 8, 2, 0)
VideoUpdate(0, false)
SetDlgUpper(3-3-1, 0x00000000, false)
//林月如：
//李大哥！　快躲起来！
EventSetDirFrame(86, 8, 3, 0)
PartyWalkToBlock(10, 15, 0, 8)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//又怎麽了？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//林月如：
//嘘～　你看！
MusicPlay(11, true, 0.00)
EventSetState(86, 9, true, false)
ViewportMove(4, 0, 48)
WaitEventAutoScriptRun(60, false, false)
ViewportMove(-16, 0, 12)
EventSetAutoScript(86, 8, Scr_0x4922)
WaitEventAutoScriptRun(4, false, false)
PartyWalkToBlock(12, 12, 1, 4)
RoleSetDirFrame(0, 3, 0)
SetDlgUpper(3-2-1, 0x00000000, false)
//林月如：
//鬼鬼祟祟的．．
//井里头一定有古怪！
EventSetState(84, 37, true, false)
PartySetRole(31)
EventSetState(-1, -1, false, false)
EventSetState(84, 42, false, false)
EventSetState(89, 2, true, true)
EventSetStateSequence(89, 3, 89, 11, false, false)

[Scr_0x490D]
NPCMoveToBlock(10, 14, 0, 8, false)
NPCMoveToBlock(11, 15, 0, 8, false)

[Event_00086_00009_Auto]
NPCMoveToBlock(18, 20, 1, 2, true)
NPCMoveToBlock(16, 18, 0, 2, true)
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(0, 0)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(3, 0)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(3, false, false)
EventSetState(86, 10, true, false)
EventSetState(-1, -1, false, false)

[Event_00086_00010_Auto]
NPCMoveToBlock(18, 20, 0, 3, false)
NPCMoveToBlock(15, 22, 1, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x4922]
NPCMoveToBlock(10, 14, 0, 8, false)
NPCMoveToBlock(13, 12, 0, 8, false)
NPCSetDirFrame(3, 0)

[Event_00092_00003_Trigger]
EventSetState(-1, -1, false, false)
VideoUpdate(0, false)
//找到紫金葫芦
EventSetState(84, 21, true, false)
EventSetState(84, 22, true, false)
EventSetState(84, 23, true, false)
EventSetState(84, 24, true, false)
EventSetState(84, 25, true, false)
EventSetState(84, 26, true, false)
SceneSetScripts(84, Scr_0x4A11, Null)
SceneEnter(84)
FadeOut(0)

[Scr_0x4933]
//掌柜：
//抓到女飞贼了吗？
ReplaceAndPause()
//唉～那女飞贼狡猾的很
//在城里干了几件大案子
//都从未失手，还弄得衙门
//灰头土脸的

[Event_00093_00019_Trigger]
//掌柜：
//快去抓贼呀！
//别让那飞贼跑了

[Scene_00081_Enter]
HeroSetSprite(0, 385, false)
PartySetRole(1)
RoleSetDirFrame(0, 0, 0)
PartySetPos(47, 63, 0)
PlaySound(213)
WaitEventAutoScriptRun(10, false, false)
MusicPlay(31, true, 0.00)
SetDlgUpper(28-1-1, 0x00000000, false)
//太守：
//现在人赃俱获，还有什麽话
//好说，赶快招出你的党羽，
//或许本官会考虑从轻发落！
VideoUpdate(0, false)
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//招什麽？我们又不是贼！
VideoUpdate(0, false)
SetDlgUpper(28-1-1, 0x00000000, false)
//太守：
//还想狡辩？
//女飞贼、你给本官从实招来。
//否则有你好受的！
VideoUpdate(0, false)
SetDlgLower(3-3-1, 0x00000000, false)
//林月如：
//你敢！
VideoRestore()
//本姑娘不是什麽女飞贼
//我爹爹是苏州林家堡堡主
//也就是当今南武林盟主林天南
//而我伯父正是当今朝中刘尚书
//你给我小心点，赶快放我们走
//要是惹火了本姑娘，定要你乌
//纱帽落地！
VideoUpdate(0, false)
SetDlgUpper(28-1-1, 0x00000000, false)
//太守：
//大胆刁贼，竟敢对
//本官出言不逊！
EventSetDirFrame(81, 3, 1, 0)
VideoUpdate(0, false)
//师爷：
//大人息怒～这娘们说得跟真
//的似的如果真的如其所说，
//那我们还真不能得罪她
VideoUpdate(0, false)
//太守：
//唔．．如果是假的呢？
EventSetDirFrame(81, 3, 0, 0)
WaitEventAutoScriptRun(7, false, false)
EventSetDirFrame(81, 3, 1, 0)
WaitEventAutoScriptRun(3, false, false)
//师爷：
//不妨从那男的下手．．
VideoUpdate(0, false)
//太守：
//本官听说这帮飞贼的成员全
//是女的，跟这男的有何干系？
VideoUpdate(0, false)
//师爷：
//女飞贼总也有姘头吧？
VideoUpdate(0, false)
//太守：
//喔～　我懂了！
EventSetDirFrame(81, 3, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(28-1-1, 0x00000000, false)
//太守：
//小伙子，你又是哪里来的？
//家中有何人？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//小的是余杭县人
//父母早亡，无兄弟姊妹
//有一婶婶在家乡开一间
//小客栈营生．．
VideoUpdate(0, false)
SetDlgUpper(28-1-1, 0x00000000, false)
//太守：
//好！　来人！
//先打二十大板
VideoUpdate(0, false)
EventSetAutoScript(81, 23, Scr_0x4BDB)
EventSetAutoScript(81, 24, Scr_0x4BE4)
EventSetAutoScript(81, 22, Scr_0x4BE8)
WaitEventAutoScriptRun(5, false, false)
RoleSetDirFrame(0, 0, 1)
WaitEventAutoScriptRun(16, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 0, 1)
WaitEventAutoScriptRun(10, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//等等！　别打啊！
EventSetAutoScript(81, 23, Null)
EventSetAutoScript(81, 24, Null)
EventSetAutoScript(81, 22, Null)
EventSetDirFrame(81, 23, 0, 0)
EventSetDirFrame(81, 24, 0, 0)
EventSetDirFrame(81, 22, 0, 0)
VideoUpdate(0, false)
SetDlgLower(28-1-1, 0x00000000, false)
//太守：
//　从实招来！
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//哎呦！???
//我们真的是冤枉的呀
//大人???哎呦！
VideoUpdate(0, false)
SetDlgLower(28-1-1, 0x00000000, false)
//太守：
//还不肯招？再打！
[Scr_0x49B5]
GotoWithNop(Scr_0x49B9, 0)
SetDlgLower(28-1-1, 0x00000000, false)
//太守：
//不招？再打！
[Scr_0x49B9]
EventSetAutoScript(81, 23, Scr_0x4BDB)
EventSetAutoScript(81, 24, Scr_0x4BE4)
EventSetAutoScript(81, 22, Scr_0x4BE8)
WaitEventAutoScriptRun(3, false, false)
RoleSetDirFrame(0, 0, 1)
WaitEventAutoScriptRun(15, false, false)
EventSetDirFrame(81, 3, 1, 0)
WaitEventAutoScriptRun(20, false, false)
EventSetDirFrame(81, 3, 0, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetAutoScript(81, 23, Null)
EventSetAutoScript(81, 24, Null)
EventSetAutoScript(81, 22, Null)
EventSetDirFrame(81, 23, 0, 0)
EventSetDirFrame(81, 24, 0, 0)
EventSetDirFrame(81, 22, 0, 0)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(28-1-1, 0x00000000, false)
//太守：
//你招是不招！？
GotoWithSelect(Scr_0x49B5)
VideoUpdate(0, false)
//李逍遥：
//大人、大人，别打了！
//我有话要说???哎呦～
EventSetDirFrame(81, 3, 1, 0)
VideoUpdate(0, false)
//师爷：
//大人，不妨听听看他想说些什麽。
VideoUpdate(0, false)
SetDlgLower(28-1-1, 0x00000000, false)
//太守：
//好！停手。那就让你说说看。
EventSetDirFrame(81, 3, 0, 0)
VideoUpdate(0, false)
//李逍遥：
//谢谢大人，我要澄清的是
//我们是看见城内一户人家的
//女主人，拿着这件失物走到
//井边丢下，随後我们在井中
//找到後，爬出来就见你们已
//经包围我们了．．
VideoUpdate(0, false)
SetDlgLower(28-1-1, 0x00000000, false)
//太守：
//大胆！还想狡赖？
VideoUpdate(0, false)
//李逍遥：
//不是啊，大人。我是说
//能不能给我们几天时间
//我一定能抓到这票飞贼
EventSetDirFrame(81, 3, 1, 0)
VideoUpdate(0, false)
//师爷：
//大人，这主意不错，就利用利用
//他们。能抓到人是最好，要是抓
//不到，就可以名正言顺地把他们
//俩给定罪，您意下如何？
VideoUpdate(0, false)
SetDlgLower(28-1-1, 0x00000000, false)
//太守：
//好！就这麽办，限你两天内抓
//到女飞贼。不过～这女孩子要
//先留下来
VideoUpdate(0, false)
//李逍遥：
//什麽！???
VideoUpdate(0, false)
SetDlgLower(28-1-1, 0x00000000, false)
//太守：
//如果你敢逃走，我立刻办她！
EventSetState(81, 22, false, false)
EventSetState(81, 23, false, false)
EventSetState(81, 24, false, false)
EventSetState(91, 16, true, false)
EventSetTriggerScript(84, 11, Scr_0x4A2D)
EventSetTriggerScript(84, 12, Scr_0x4A2D)
EventSetState(89, 2, false, false)
EventSetState(92, 5, true, true)
EventSetState(92, 7, true, true)
EventSetState(92, 8, true, true)
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 0, 0)
Call(Event_00081_00001_Trigger, 0, 0)
MusicPlay(54, true, 0.00)
ReplaceAndPause()

[Scr_0x4A11]
MusicStop()
PartySetPos(17, 18, 0)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(5, false, false)
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
//官差：
//有人密报女飞贼在此藏匿赃物
//果然人赃俱获！
VideoRestore()
//通通给我拿下！
EventModifyPos(84, 21, -32, -16)
EventModifyPos(84, 26, 16, -8)
EventSetAutoScript(84, 21, Event_00005_00014_Auto)
EventSetAutoScript(84, 26, Event_00021_00016_Auto)
EventSetState(84, 22, false, false)
EventSetState(84, 23, false, false)
EventSetState(84, 24, false, false)
EventSetState(84, 25, false, false)
SceneEnter(81)
FadeOut(0)
ReplaceAndPause()

[Scr_0x4A2A]
VideoUpdate(0, false)
//有钱好办事．没钱免谈！
ReplaceAndPause()
[Scr_0x4A2D]
//衙役：
//要探监吗？先缴１００文钱
GotoWithSelect(Scr_0x4A2A)
CashModify(-100, Scr_0x4A2A)
VideoUpdate(0, false)
//衙役：
//请吧！
EventSetAutoScript(84, 11, Scr_0x4A3C)
EventSetAutoScript(84, 12, Scr_0x4A40)
EventSetTriggerScript(84, 11, Scr_0x4A39)
EventSetTriggerScript(84, 12, Scr_0x4A39)
ReplaceAndPause()
[Scr_0x4A39]
//衙役：
//还有事吗？

[Scr_0x4A3C]
NPCMoveToBlock(44, 59, 0, 2, true)
NPCSetDirFrame(3, 0)
NPCSetDirFrame(0, 0)

[Scr_0x4A40]
NPCMoveToBlock(42, 60, 1, 2, true)
NPCSetDirFrame(3, 0)
NPCSetDirFrame(2, 0)

[Event_00091_00016_Trigger]
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//月如．．你还好吗？
NPCSetDirFrame(2, 0)
VideoUpdate(0, false)
//林月如：
//哼．．还不都是你害的
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//别这样嘛．．
//我发誓～我一定抓到真正
//的女飞贼，救你出来
NPCSetDirFrame(0, 0)
VideoUpdate(0, false)
SetDlgUpper(3-2-1, 0x00000000, false)
//林月如：
//最好是这样
//不然我一辈子都不理你了
NPCSetDirFrame(2, 0)
EventSetTriggerMode(-1, -1, false, 0)

[Event_00091_00002_Trigger]
Call(Scr_0x0303, 0, 0)
Call(Scr_0x0303, 0, 0)

[Event_00091_00003_Trigger]
Call(Scr_0x02E7, 0, 0)
Call(Scr_0x02E7, 0, 0)

[Event_00089_00013_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
VideoUpdate(0, false)
EventSetTriggerScript(84, 6, Scr_0x445F)
SceneEnter(90)
ReplaceAndPause()

[Scene_00090_Enter]
PlaySound(134)
FadeToScene(-1, 0)
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
//"屏风後面出现一道秘门"
EventSetStateSequence(92, 20, 92, 23, true, true)
ReplaceAndPause()

[Event_00090_00002_Trigger]
SceneEnter(92)
PartySetPos(16, 85, 0)
FadeOut(0)

[Event_00092_00004_Trigger]
HeroSetSprite(0, 193, true)
RoleSetDirFrame(0, 0, 1)
RoleMoveOneStep(16, 8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(0, 8, 0)
RoleSetDirFrame(0, 0, 1)
VideoUpdate(0, false)
RoleMoveOneStep(0, 16, 0)
RoleSetDirFrame(0, 0, 1)
VideoUpdate(0, false)
RoleMoveOneStep(0, 24, 0)
RoleSetDirFrame(0, 0, 2)
VideoUpdate(0, false)
PlaySound(93)
WaitEventAutoScriptRun(5, false, false)
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 0, 0)

[Event_00092_00005_Trigger]
SetDlgUpper(10-2-1, 0x00000000, false)
//姬三娘：
//呦～这麽快就追来啦？
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//看你还逃到哪去！
VideoUpdate(0, false)
NPCSetDirFrame(0, 0)
PlaySound(201)
VideoUpdate(0, false)
NPCSetDirFrame(1, 0)
VideoUpdate(0, false)
NPCSetDirFrame(2, 0)
VideoUpdate(0, false)
EventSetState(-1, -1, false, false)
EventSetState(92, 6, true, true)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(10-1-1, 0x00000000, false)
//女飞贼：
//小哥哥～要奴家杀了你这
//英俊小生，真有点舍不得呢
SetBattleMusic(40)
BattleStart(30, Scr_0x9C9B, Null)
BattleEnd()
EventSetState(92, 6, false, false)
EventSetState(92, 7, false, false)
EventSetState(92, 8, false, false)
EventSetTriggerScript(84, 5, Event_00084_00005_Trigger)
SceneSetScripts(81, Scr_0x4AAB, Null)
SceneEnter(81)

[Scr_0x4AA4]
NPCSetDirFrame(1, 0)
EventWalkOneStep(-1, -1, 0, -8)
EventWalkOneStep(-1, -1, -4, -2)
EventWalkOneStep(-1, -1, -4, -2)
EventWalkOneStep(-1, -1, -4, -2)
EventWalkOneStep(-1, -1, -4, -2)

[Scr_0x4AAB]
EventSetState(81, 26, true, true)
EventSetState(81, 27, true, true)
EventSetState(82, 0, true, true)
EventSetState(0, 0, true, true)
EventSetState(0, 0, true, true)
EventSetState(0, 0, true, true)
EventSetState(0, 0, true, true)
EventSetState(0, 0, true, true)
EventSetState(0, 0, true, true)
EventSetState(0, 0, true, true)
EventSetState(93, 18, false, false)
EventSetState(84, 30, false, false)
EventSetState(84, 32, false, false)
EventSetState(84, 35, false, false)
EventSetState(84, 36, false, false)
EventSetState(82, 11, false, false)
EventSetState(82, 12, false, false)
EventSetState(82, 13, false, false)
PartySetPos(48, 63, 0)
RoleSetDirFrame(0, 2, 0)
PlaySound(213)
WaitEventAutoScriptRun(10, false, false)
MusicPlay(31, true, 0.00)
SetDlgUpper(28-1-1, 0x00000000, false)
//太守：
//哦？　想不到你这麽快
//就把人抓到啦？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//我早跟您说我们是冤枉的
VideoUpdate(0, false)
SetDlgLower(28-1-1, 0x00000000, false)
//太守：
//堂前的女子抬起头来
//本官有话要问你。
SetDlgUpper(10-2-1, 0x00000000, false)
//姬三娘：
//???????
VideoUpdate(0, false)
SetDlgLower(28-1-1, 0x00000000, false)
//太守：
//大胆刁妇，本官问话
//为何不答？
VideoUpdate(0, false)
SetDlgUpper(10-2-1, 0x00000000, false)
//姬三娘：
//你在跟我说话？
//我还以为你在唱戏哩
VideoUpdate(0, false)
SetDlgLower(28-1-1, 0x00000000, false)
//太守：
//大～胆！
//竟敢无视本官的存在
//我看你是活得不耐烦了！
VideoUpdate(0, false)
SetDlgUpper(10-2-1, 0x00000000, false)
//姬三娘：
//哈哈哈哈！
SetDlgLower(28-1-1, 0x00000000, false)
//太守：
//住口！死到临头还笑得出来！
VideoUpdate(0, false)
SetDlgUpper(10-2-1, 0x00000000, false)
//姬三娘：
//我笑自己一念之仁
//那天晚上我到王员外家，撞
//见你跟王家三姨太在後花园
//办好事，没顺手一刀宰了你
//现在倒成了祸害
VideoUpdate(0, false)
SetDlgLower(28-1-1, 0x00000000, false)
//太守：
//　你???
VideoUpdate(0, false)
SetDlgUpper(1-3-1, 0x00000000, false)
//李逍遥：
//噗哧！
SetDlgLower(28-1-1, 0x00000000, false)
//太守：
//笑什麽！！不准笑～
VideoUpdate(0, false)
//师爷：
//大．大人，不要跟她一般
//见识，开始问案吧！
SetDlgUpper(28-1-1, 0x00000000, false)
//太守：
//气．．气死我了！
VideoUpdate(0, false)
SetDlgLower(28-1-1, 0x00000000, false)
//太守：
//本官问你，去年十月初六城北
//苏府，後花园埋的一缸黄金，
//被换成一缸屎尿，是不是汝等
//所为？
VideoUpdate(0, false)
SetDlgUpper(10-2-1, 0x00000000, false)
//姬三娘：
//那麽久的事，我哪里记得啦？
VideoUpdate(0, false)
SetDlgLower(28-1-1, 0x00000000, false)
//太守：
//还这麽跩，再不招
//休怪本官对你动大刑！
VideoUpdate(0, false)
SetDlgUpper(10-2-1, 0x00000000, false)
//姬三娘：
//喔～我想起来了，那老头无缘
//无故把一缸黄金埋在那，我们
//以为他不要了嘛！还好心留给
//他一缸肥水好浇花呢。
//各位评评理，咱们够良心了吧。
VideoUpdate(0, false)
SetDlgLower(28-1-1, 0x00000000, false)
//太守：
//你还有理～好好好！
VideoRestore()
//去年腊月十六，城门口李记
//当铺的银库中五千两银子被盗
//是不是你们所为？
VideoUpdate(0, false)
SetDlgUpper(10-2-1, 0x00000000, false)
//姬三娘：
//说盗就难听了，当铺不就是
//让人借钱的，咱们不过是借用
//点生活费花花，何况那李老头
//祖先留下那麽大家产给他，分
//一点给咱们穷老百姓又死不了
//干嘛那麽紧张～
VideoUpdate(0, false)
SetDlgLower(28-1-1, 0x00000000, false)
//太守：
//你还真罩得住！我再问你！
//今年正月初三扬州首富顾员外
//家中，一万两黄金被窃，也是
//你们所为，是不是？
VideoUpdate(0, false)
SetDlgUpper(10-2-1, 0x00000000, false)
//姬三娘：
//顾员外不是经常逢人就夸说
//他家的财富吃几十代也吃不
//完，我看他整天数黄金数的
//太累了，帮他分担一点而已
VideoUpdate(0, false)
SetDlgLower(28-1-1, 0x00000000, false)
//太守：
//住口！寡廉鲜耻之徒
//你们当真没救了！
VideoUpdate(0, false)
SetDlgUpper(10-2-1, 0x00000000, false)
//姬三娘：
//唉哟～咱们就这麽点癖好，也
//给大人您说得没救了，那种晚
//上到後院同别人家老婆相好的
//不死得更快？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//太守：
//你、你．．师爷．快、快把我
//的心．心肺活气散拿来．．
EventSetAutoScript(81, 3, Scr_0x4AA4)
WaitEventAutoScriptRun(8, false, false)
FadeOut(0)
EventModifyPos(81, 3, 16, 16)
VideoUpdate(0, false)
//师爷：
//大人，您挺着点！
//犯．犯不着同小贼呕气啊．
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//太守：
//欸～呼．．呼．．
//刚才差．差点嗝屁了！
EventSetDirFrame(81, 3, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(10-2-1, 0x00000000, false)
//姬三娘：
//我说嘛～这种人不短命才怪？
VideoUpdate(0, false)
SetDlgLower(28-1-1, 0x00000000, false)
//太守：
//大胆～！你再敢胡言乱语
//立刻大刑伺候！！
VideoRestore()
//本官再问你，前些日子本城
//客栈有一位古董商失窃一古董
//，我看跟你也脱不了干系吧！
VideoUpdate(0, false)
SetDlgUpper(10-2-1, 0x00000000, false)
//姬三娘：
//古董？???我可
//不记得什麽古董。
EventSetDirFrame(82, 0, 2, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//掌柜：
//大人，小的亲眼看见，就是
//她这身打扮偷走房客东西的
//还有、是这两位仗义出手追
//这女飞贼的。
EventSetDirFrame(81, 27, 2, 0)
VideoUpdate(0, false)
//古董商：
//草民没看清楚偷东西的是谁
//不过的确是这两位大侠找回
//其余的失物。
VideoUpdate(0, false)
SetDlgLower(28-1-1, 0x00000000, false)
//太守：
//现在人证物证俱在
//你还有什麽话说？！
VideoUpdate(0, false)
SetDlgUpper(10-2-1, 0x00000000, false)
//姬三娘：
//原来是那个小葫芦！
//我还以为是什麽宝贝儿
VideoRestore()
//哈哈哈、出道这麽久，干过的
//票子也不少，没想到居然栽在
//一个葫芦上，只道气数已尽，
//怨不得人呐～
VideoUpdate(0, false)
SetDlgLower(28-1-1, 0x00000000, false)
//太守：
//既然承认是你做的案，其余
//两位疑犯当场无罪释放！
VideoRestore()
//来人呐！将这女贼押入大牢。
FadeOut(0)
EventSetState(81, 26, false, false)
EventSetDirFrame(82, 0, 3, 0)
EventSetDirFrame(81, 27, 3, 0)
EventSetState(91, 17, true, false)
EventSetState(91, 16, false, false)
EventSetState(81, 25, true, false)
WaitEventAutoScriptRun(12, false, false)
RoleSetDirFrame(0, 3, 0)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//　　李大哥！
WaitEventAutoScriptRun(12, false, false)
SetDlgLower(28-1-1, 0x00000000, false)
//太守：
//好啦～本官还你们清白
//你们可以自由离去了！
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
EventSetDirFrame(81, 25, 2, 0)
VideoUpdate(0, false)
//林月如：
//　　谢谢！
RoleSetDirFrame(0, 3, 0)
EventSetDirFrame(81, 25, 1, 0)
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//在牢中还好吧？
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//嘻～有爹爹和世伯做靠山
//他们不敢拿我怎麽样！
EventSetState(81, 25, false, false)
PartySetRole(13)
RoleSetDirFrame(0, 0, 0)
EventSetTriggerScript(84, 27, Scr_0x4BC6)
EventSetTriggerScript(84, 28, Scr_0x4BC6)
EventSetTriggerScript(84, 29, Scr_0x4BC6)
EventSetStateSequence(84, 43, 85, 0, true, true)

[Event_00084_00043_Trigger]
//官差：
//这户宅院已被下令查封
//任何人不得进入

[Event_00081_00027_Trigger]
//古董商：
//谢谢你啊！小兄弟
//帮我找回紫金葫芦。

[Event_00081_00028_Trigger]
//掌柜：
//小兄弟，终於沉冤得雪了！

[Event_00081_00025_Auto]
NPCMoveToBlock(51, 66, 1, 8, false)
NPCMoveToBlock(48, 63, 1, 3, false)

[Scr_0x4BC6]
//巡捕：
//奉太守之命，可让两位出城。
EventModifyPos(84, 27, -32, 0)
VideoUpdate(0, false)
EventSetAutoScript(84, 27, Event_00005_00014_Auto)
EventSetTriggerScript(84, 27, Scr_0x4BCF)
EventSetTriggerScript(84, 28, Scr_0x4BCF)
EventSetTriggerScript(84, 29, Scr_0x4BCF)
ReplaceAndPause()
[Scr_0x4BCF]
//巡捕：
//你就是那位抓到女飞贼
//集团首领的少侠吗？
VideoRestore()
//真了不起！

[Event_00092_00014_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//得到五把袖里剑
AddItem(94, 5)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Scr_0x4BDB]
NPCSetFrame(1)
WaitEventAutoScriptRun(3, false, false)
[Scr_0x4BDD]
NPCSetFrame(2)
WaitEventAutoScriptRun(4, false, false)
NPCSetFrame(3)
PlaySound(92)
WaitEventAutoScriptRun(2, false, false)
ReplaceAndPauseWithNop(Scr_0x4BDD, 0)

[Scr_0x4BE4]
NPCSetFrame(1)
WaitEventAutoScriptRun(6, false, false)
ReplaceAndPauseWithNop(Scr_0x4BDD, 0)

[Scr_0x4BE8]
WaitEventAutoScriptRun(10, false, false)
[Scr_0x4BE9]
NPCSetFrame(1)
ReplaceAndPause()
NPCSetFrame(2)
NPCSetFrame(0)
ReplaceAndPauseWithNop(Scr_0x4BE9, 0)

[Event_00084_00021_Trigger]
//此井已被查封

[Event_00083_00003_Trigger]
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//这位大姐????请问
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//小兄弟
//借问一下扬州城怎麽个走法？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//啊，我们也正想问这个问题。
VideoUpdate(0, false)
Replace()
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//原来如此，真不好意思。

[Event_00096_00007_Trigger]
//官差：
//你可曾见过使用
//此种暗器的人吗？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//没有．．
ReplaceAndPause()
//官差：
//那些飞贼所用的暗器
//定是有人供应，只要我在
//各个武器店搜察，一定可
//以找出飞贼的窝

[Event_00096_00006_Trigger]
//老板：
//客倌，要买些什麽兵器吗？
VideoUpdate(0, false)
ShowBuyItemMenu(10)

[Event_00096_00008_Trigger]
//药铺老板：
//公子，瞧您脸色不大好
//是不是要配点药吃吃？
VideoUpdate(0, false)
ShowBuyItemMenu(11)

[Event_00099_00003_Trigger]
//居民：
//为什麽随便闯进我家
ReplaceAndPause()
//居民：
//不要乱来喔！还不赶快出去。

[Event_00099_00004_Trigger]
SetDlgLower(0, 0x00000000, false)
//父：
//素兰，你都二十多岁了
//还不赶紧找户人家嫁了。
VideoUpdate(0, false)
//女：
//人家还不想离开您的身边嘛！

[Event_00099_00006_Trigger]
//小孩：
//你不会是江洋大盗吧？
ReplaceAndPause()
//小孩：
//看你的样子也不像。

[Event_00096_00009_Trigger]
//居民：
//现在扬州城里的生活太没
//保障了，赶紧买把刀防身

[Event_00096_00010_Trigger]
//居民：
//真不知道这新任太守是干什麽
//吃的，抓几个贼有那麽难吗？

[Event_00096_00011_Trigger]
//居民：
//现在扬州城里要做点小买卖都
//不行，三天两头地遭劫挨窃，
//真是太不安全了。

[Event_00079_00008_Trigger]
//路人：
//最近扬州城里不太平静
//偷窃案、灭门血案还有强盗案
//到处都是，你们如果是来旅游
//还是考虑一下比较好。

[Event_00082_00019_Trigger]
//少女：
//客人，要买什麽东西，尽管挑。
VideoUpdate(0, false)
ShowBuyItemMenu(12)

[Event_00082_00020_Trigger]
//当铺老板：
//是不是要典当些什麽东西啊？
//赶紧拿出来吧！
VideoUpdate(0, false)
ShowSellItemMenu()

[Event_00082_00009_Trigger]
//大宝：
//喂，你不要跑嘛！
SetDlgLower(0, 0x00000000, false)
//二宝：
//你不要追，我就不会跑了呀！

[Event_00082_00014_Trigger]
//巡捕：
//小子，你是从哪儿来的？
//一副贼头贼脑的样子，说！
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//我是从余杭县来的
//只是要找人而已。

[Event_00082_00015_Trigger]
//官差：
//小伙子，在扬州城里可别
//想动什麽歪脑筋喔！

[Event_00082_00016_Trigger]
//官差：
//看你是外地来的吧？！
//小心一点，晚上不要到处乱跑

[Event_00082_00012_Trigger]
//路人：
//最近女飞贼实在有够猖狂
//什麽好东西都偷走了
//搞得我们只好喝西北风。

[Event_00082_00013_Trigger]
//路人：
//欸！这也难怪扬州城的治
//安日渐恶化，太守没作为
//养的手下又是一群废物
//想破案，难喔！

[Event_00095_00003_Trigger]
//煮饭婆：
//小伙子，你走错地方了
//这儿是厨房。

[Event_00093_00023_Trigger]
//旅客：
//奉了师父之命，要到京城去
//谁知道一经过扬州，竟然出
//不了城，这该怎麽办才好？

[Event_00093_00026_Trigger]
//旅客：
//最近女飞贼集团闹得满城风雨
//家家户户不得安宁，这新上任
//的太守，我看还是没什麽办法
//可以解决。

[Event_00093_00025_Trigger]
//旅客：
//我看呐、这新任的太守八成也
//是用走後门的。京里头在传言
//现在普通的县令，两千两银子
//就可以买到，六百两银子一个
//师爷、二百两就可以买到一个
//巡捕的位子，你看是不是很夸
//张？
ReplaceAndPause()
//旅客：
//赶明儿个出城後
//我也去买个县令的位子玩玩。

[Event_00093_00020_Trigger]
//客人：
//怎麽办，扬州城再继续
//这样下去，哪还能住人啊？

[Event_00093_00022_Trigger]
//客人：
//我就是因为城里那麽乱
//才特地请到威震镖局的
//人来保护我一家大小的性命

[Event_00093_00021_Trigger]
//客人：
//我是泉州「威震镖局」总镖头
//─萧剑虹，要是还有鼠辈来骚
//扰，我见一个杀一个，来两个
//杀一双。

[Event_00082_00011_Trigger]
//居民：
//城内人心惶惶，老百姓们都
//想要快快离开这个鬼地方。

[Event_00084_00034_Trigger]
//小孩：
//娘叫我不要和陌生人说话。

[Event_00084_00032_Trigger]
//乞丐：
//哪有这样子的罚钱方式，
//太夸张了吧！

[Event_00084_00033_Trigger]
SetDlgLower(0, 0x00000000, false)
//欸！城内发生这麽多可怕的事
//情，已经够叫人心烦的，这时
//候又来了这麽一个太守???
//麻烦大了。

[Event_00084_00030_Trigger]
//路人：
//这新太守一上任，就只会罚这
//儿罚那儿的，不用说也知道，
//到最後所有收来的银子都到他
//自己的荷包去了。

[Event_00084_00031_Trigger]
//路人：
//贼不好好抓，定那麽多的禁令
//这县太爷是要对付我们老百姓
//还是要对付贼啊？

[Event_00084_00016_Trigger]
//巡捕：
//小伙子，不要到处乱跑
//这儿不是你来的地方。

[Event_00084_00017_Trigger]
//官差：
//欸！现在当差的真辛苦。
//工作累的半死，还要被
//老百姓骂

[Event_00084_00018_Trigger]
//官差：
//原本想说当差能多捞一点钱
//现在这种情形，可是赔了夫
//人又折兵。

[Event_00084_00033_Auto]
NPCMoveToBlock(15, 76, 0, 2, true)
NPCMoveToBlock(7, 68, 1, 2, true)
NPCMoveToBlock(13, 62, 1, 2, true)
NPCMoveToBlock(17, 66, 0, 2, true)
NPCMoveToBlock(18, 64, 1, 2, true)
NPCMoveToBlock(24, 70, 0, 2, true)
NPCMoveToBlock(39, 55, 0, 2, true)
NPCMoveToBlock(32, 48, 0, 2, true)
NPCMoveToBlock(35, 44, 1, 2, true)
NPCMoveToBlock(22, 31, 0, 2, true)
NPCMoveToBlock(19, 34, 0, 2, true)
NPCMoveToBlock(9, 24, 1, 2, true)
NPCMoveToBlock(8, 25, 1, 2, true)
NPCMoveToBlock(4, 21, 0, 2, true)
EventSetState(-1, -1, false, false)

[Event_00084_00027_Trigger]
//巡捕：
//我是北门守城巡捕
//现在太守有令，任何人
//不得离开扬州城。

[Event_00084_00028_Trigger]
//官差：
//还在这儿磨磨蹭蹭地
//干什麽，赶快滚。

[Event_00084_00029_Trigger]
//官差：
//此处不准久留，赶快离开。

[Event_00084_00011_Trigger]
//巡捕：
//这儿是牢房重地，不准随意进入。

[Event_00084_00012_Trigger]
//官差：
//牢房重地，不准随意进入。

[Event_00084_00013_Trigger]
//来探监的吗？
//有没有带违禁物品啊？

[Event_00089_00004_Trigger]
//婢女：
//客人您好，我家主人回来了。

[Event_00089_00005_Trigger]
//婢女：
//客人，有何贵干？

[Event_00089_00006_Trigger]
//婢女：
//客人您好。

[Event_00081_00004_Trigger]
//威～　武～

[Event_00081_00002_Trigger]
SetDlgUpper(28-1-1, 0x00000000, false)
//太守：
//还有事吗？
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//奖金啊，抓到飞贼应该
//有悬赏的奖金吧？
VideoUpdate(0, false)
SetDlgUpper(28-1-1, 0x00000000, false)
//太守：
//哎呀呀！　你看看．．
//给那女贼气的差点给忘了
VideoRestore()
//本府原先悬赏二百两，另外
//李员外和王员外等地方士绅
//集资一千两赏给破案有功者
//一共是一千二百两纹银
//折合现钱约六十万文钱
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//哗～　这麽多！
VideoUpdate(0, false)
SetDlgUpper(28-1-1, 0x00000000, false)
//太守：
//本官还没说完．．
VideoRestore()
//按我大唐律法，缉凶赏银
//需先扣除二成的横财税
//另外本城最近在修筑护城河
//要徵收一成的建设捐
//这几次捉拿飞贼的行动中
//有二名捕快殉职，七位负伤
//他们的抚恤金一共须二十八
//万文钱．．．
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//好了好了，告诉我们一共剩
//多少可以领吧
VideoUpdate(0, false)
SetDlgUpper(28-1-1, 0x00000000, false)
//太守：
//余十四万．．参加此次行动的
//有功人员连同二位一共是二十
//名，每人平分应得七千文钱
VideoRestore()
//还有～本府事先订制了一块
//匾额，用来送给协助官府破
//案的民众．．造价是一千五
VideoRestore()
//好啦～剩下这五千五是你的了
CashModify(5500, Null)
VideoUpdate(0, false)
SetDlgBox(0x00000000)
//获得五千五百文钱
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//这．．．就这麽一点？
ReplaceAndPause()
SetDlgUpper(28-1-1, 0x00000000, false)
//太守：
//匾额你不拿吗？
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//你自个儿留着用吧！
ReplaceAndPause()
//太守：
//呵呵．．欢迎再来！

[Scene_00092_Enter]
MusicPlay(81, true, 0.00)
VideoUpdate(0, false)
SetDlgUpper(1-2-1, 0x00000000, false)
//李逍遥：
//这井底之下居然别有洞天！
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//这里面一定有什麽名堂
//我们进去探它一探
ReplaceAndPause()
MusicPlay(81, true, 0.00)
SetBattlefield(16)

[Event_00091_00023_Auto]
NPCMoveToBlock(32, 100, 0, 2, true)
GotoWithProbability(10, Null)
NPCMoveToBlock(34, 102, 1, 2, true)
GotoWithProbability(10, Null)
ReplaceAndPauseWithNop(Event_00091_00023_Auto, 0)

[Event_00091_00018_Trigger]
EventSetTriggerMode(-1, -1, false, 2)
SetDlgLower(0, 0x00000000, false)
//衙役：
//探监的吗？照规定要缴
//三百文的探监许可费
GotoWithSelect(Scr_0x4D5E)
CashModify(-300, Scr_0x4D5E)
VideoUpdate(0, false)
//衙役：
//你可以过去了
ReplaceAndPause()
SetDlgLower(0, 0x00000000, false)
//衙役：
//很好～你很懂规矩

[Scr_0x4D5E]
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//李逍遥：
//没钱就是没钱，不然你想怎样
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//衙役：
//哦．．那．．对了
//贫苦百姓可以免费
//大侠～您若没钱缴也没关系
ReplaceAndPause()
SetDlgLower(0, 0x00000000, false)
//衙役：
//请吧．．

[Event_00091_00019_Trigger]
//犯人：
//格老子的，老子只不过
//揍了衙役一拳，就被罚
//五千文钱外加坐牢一年
//这简直是没有天理了！

[Event_00091_00020_Trigger]
//犯人：
//看什麽看！　没看过坏人吗？

[Event_00091_00021_Trigger]
//胖男：
//呜．．自从新太守上任後
//上青楼寻欢也犯法了
//而且越胖的人罚得越重

[Event_00091_00022_Trigger]
//妓女：
//真是倒楣～奴家才刚到迎春阁
//做不到三天呢，就被抓来这了
ReplaceAndPause()
//妓女：
//唉．．嬷嬷怎麽
//还不来保我出去呢？

[Event_00091_00023_Trigger]
//乞丐：
//太守新官上任三把火
//定下一大堆新的禁令
//就连沿街讨饭也算犯法
VideoRestore()
//我才不过讨了两块铜钱
//就被捕快抓进来了
ReplaceAndPause()
//乞丐：
//不过这样也好，至少在牢
//里不愁吃也不愁住，只是
//不太自由罢了

[Event_00091_00017_Trigger]
//女飞贼：
//啧～　这种烂牢房
//哪是给人住的啊！
VideoRestore()
//伙食又这麽差，这些官差
//们真不知怜香惜玉啊！

[Scr_0x4D97]
//EGIN
[Scene_00105_Enter]
MusicPlay(8, true, 0.00)
SetBattleMusic(41)
SetBattlefield(3)

[Event_00084_00010_Trigger]
SceneEnter(105)
PartySetPos(7, 67, 0)
FadeOut(0)

[Event_00105_00003_Trigger]
SceneEnter(113)
PartySetPos(15, 116, 0)
FadeOut(0)

[Event_00113_00001_Trigger]
SceneEnter(105)
PartySetPos(8, 27, 0)
FadeOut(0)

[Event_00105_00004_Trigger]
SceneEnter(113)
PartySetPos(51, 118, 0)
FadeOut(0)

[Event_00113_00002_Trigger]
SceneEnter(105)
PartySetPos(30, 11, 0)
FadeOut(0)

[Event_00105_00001_Trigger]
SceneEnter(102)
PartySetPos(18, 86, 0)
FadeOut(0)

[Event_00102_00001_Trigger]
SceneEnter(105)
PartySetPos(55, 40, 1)
FadeOut(0)

[Event_00102_00002_Trigger]
SceneEnter(101)
PartySetPos(56, 109, 0)
FadeOut(0)

[Event_00101_00001_Trigger]
SceneEnter(102)
PartySetPos(19, 67, 1)
FadeOut(0)

[Scr_0x4DC0]
SceneEnter(109)
PartySetPos(12, 66, 0)
FadeOut(0)

[Event_00107_00002_Trigger]
SceneEnter(112)
PartySetPos(38, 108, 0)
FadeOut(0)

[Event_00112_00002_Trigger]
SceneEnter(107)
PartySetPos(27, 55, 0)
FadeOut(0)

[Event_00111_00001_Trigger]
//要搭船等一下再来吧

[Scr_0x4DCE]
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//船家！能否载我们到城里去
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//船夫：
//小的这艘船已经给尚书府包下
//来了，今天一整天不做别人的
//生意，等尚书夫人上完香，还
//要搭小的船回府呢
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//喔！云姨也来啦？
EventSetState(111, 4, true, true)
EventSetState(111, 5, true, true)
EventSetState(111, 6, true, true)
WaitEventAutoScriptRun(2, false, true)
WaitEventAutoScriptRun(34, false, false)
SetDlgLower(0, 0x00000000, false)
//尚书夫人：
//咦～　是．．月如吗？
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//．．．云姨！
RoleSetDirFrame(1, 0, 0)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(1, 1, 0)
PartySetPos(40, 57, 0)
WaitEventAutoScriptRun(0, false, false)
PartyWalkToBlock(39, 56, 0, 4)
WaitEventAutoScriptRun(2, false, false)
SetDlgUpper(33-1-1, 0x00000000, false)
//尚书夫人：
//你这丫头，怎麽这麽久
//都没来看云姨！
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//别这麽说嘛～人家这不是来了
//对了．．伯父跟晋元还好吧
VideoUpdate(0, false)
SetDlgUpper(33-1-1, 0x00000000, false)
//尚书夫人：
//唉．．晋元从苏州回来不久後
//突然生了一场怪病，看过许多
//大夫都不见起色。我这做娘的
//只好天天来上香，替他祈福
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//喔？　我可以去看看他吗？
SetDlgUpper(33-1-1, 0x00000000, false)
//尚书夫人：
//当然．．．
//坐船一块回去吧
FadeOut(0)
SceneEnter(100)

[Event_00111_00004_Auto]
NPCMoveToBlock(37, 54, 1, 2, true)
NPCMoveToBlock(38, 55, 1, 2, true)

[Event_00111_00005_Auto]
NPCMoveToBlock(37, 54, 1, 2, true)
NPCSetDirFrame(3, 0)

[Event_00111_00006_Auto]
NPCMoveToBlock(37, 55, 0, 2, true)
NPCSetDirFrame(3, 0)

[Event_00100_00006_Auto]
NPCMoveToBlock(11, 17, 1, 2, true)
EventSetState(-1, -1, false, false)

[Event_00100_00007_Auto]
WaitEventAutoScriptRun(3, false, false)
NPCMoveToBlock(12, 17, 0, 2, true)
EventSetState(-1, -1, false, false)

[Event_00108_00001_Trigger]
SceneEnter(117)
PartySetPos(8, 117, 0)
FadeOut(0)

[Event_00117_00002_Trigger]
SceneEnter(108)
PartySetPos(34, 67, 1)
FadeOut(0)

[Event_00108_00002_Trigger]
SceneEnter(122)
PartySetPos(25, 41, 0)
FadeOut(0)

[Event_00122_00001_Trigger]
SceneEnter(108)
PartySetPos(27, 69, 0)
FadeOut(0)

[Event_00122_00002_Trigger]
SceneEnter(122)
PartySetPos(45, 33, 0)
FadeOut(0)

[Event_00122_00003_Trigger]
SceneEnter(122)
PartySetPos(24, 33, 0)
FadeOut(0)

[Event_00123_00002_Trigger]
SceneEnter(124)
PartySetPos(25, 44, 0)
FadeOut(0)

[Event_00124_00001_Trigger]
SceneEnter(123)
PartySetPos(11, 39, 0)
FadeOut(0)

[Event_00108_00003_Trigger]
SceneEnter(116)
PartySetPos(21, 91, 1)
FadeOut(0)

[Event_00116_00001_Trigger]
SceneEnter(108)
PartySetPos(19, 116, 0)
FadeOut(0)

[Event_00116_00002_Trigger]
SceneEnter(115)
PartySetPos(8, 48, 0)
FadeOut(0)

[Event_00115_00001_Trigger]
SceneEnter(116)
PartySetPos(54, 111, 1)
FadeOut(0)

[Event_00115_00002_Trigger]
SceneEnter(118)
PartySetPos(22, 32, 1)
FadeOut(0)

[Event_00118_00001_Trigger]
SceneEnter(115)
PartySetPos(32, 58, 0)
FadeOut(0)

[Event_00118_00002_Trigger]
Call(Scr_0x02E7, 0, 0)
SceneEnter(119)
PartySetPos(22, 32, 0)
FadeOut(0)

[Event_00119_00001_Trigger]
Call(Scr_0x0315, 0, 0)
SceneEnter(118)
PartySetPos(31, 25, 0)
FadeOut(0)

[Event_00118_00003_Trigger]
SceneEnter(114)
PartySetPos(40, 66, 1)
FadeOut(0)

[Event_00114_00001_Trigger]
SceneEnter(118)
PartySetPos(34, 40, 1)
FadeOut(0)

[Event_00114_00002_Trigger]
SceneEnter(100)
PartySetPos(13, 19, 1)
FadeOut(0)

[Event_00100_00010_Trigger]
SceneEnter(114)
PartySetPos(49, 76, 0)
FadeOut(0)

[Event_00122_00004_Trigger]
PartySetPos(20, 34, 0)
Call(Scr_0x02E7, 0, 0)
SceneEnter(123)

[Event_00123_00001_Trigger]
PartySetPos(22, 28, 1)
Call(Scr_0x0303, 0, 0)
SceneEnter(122)

[Event_00100_00011_Trigger]
SceneEnter(127)
PartySetPos(23, 42, 1)
FadeOut(0)

[Event_00127_00001_Trigger]
SceneEnter(100)
PartySetPos(29, 37, 1)
FadeOut(0)

[Event_00127_00002_Trigger]
Call(Scr_0x02E7, 0, 0)
SceneEnter(128)
PartySetPos(22, 81, 1)
FadeOut(0)

[Event_00128_00001_Trigger]
Call(Scr_0x0315, 0, 0)
SceneEnter(127)
PartySetPos(21, 35, 1)
FadeOut(0)

[Event_00111_00014_Trigger]
SceneEnter(112)

[Event_00112_00001_Trigger]
SceneEnter(111)

[Event_00118_00005_Auto]
NPCMoveToBlock(23, 32, 1, 2, true)
NPCMoveToBlock(28, 37, 1, 2, true)
NPCMoveToBlock(25, 40, 1, 2, true)
NPCMoveToBlock(28, 43, 0, 2, true)
NPCMoveToBlock(24, 46, 1, 2, true)
ReplaceAndPause()
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(10, false, false)
[Scr_0x4E94]
WaitEventAutoScriptRun(2, false, false)
GotoWithProbability(10, Scr_0x4E94)
ReplaceAndPause()
NPCSetDirFrame(1, 0)
ReplaceAndPause()
NPCMoveToBlock(28, 43, 0, 2, true)
NPCMoveToBlock(29, 44, 1, 2, true)
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(13, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(2, 0)
ReplaceAndPause()
NPCSetDirFrame(1, 0)
ReplaceAndPause()
NPCMoveToBlock(19, 34, 0, 2, true)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(6, false, false)
NPCMoveToBlock(26, 41, 0, 2, true)
NPCMoveToBlock(28, 38, 1, 2, true)
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(1, 0)
ReplaceAndPause()
NPCMoveToBlock(23, 33, 0, 2, true)
NPCMoveToBlock(31, 25, 0, 2, true)
WaitEventAutoScriptRun(7, false, false)
ReplaceAndPauseWithNop(Event_00118_00005_Auto, 0)

[Scene_00114_Enter]
MusicPlay(73, true, 0.00)

[Event_00129_00001_Trigger]
SceneEnter(100)
PartySetPos(37, 90, 1)
FadeOut(0)

[Event_00100_00019_Trigger]
SceneEnter(129)
PartySetPos(30, 45, 0)
FadeOut(0)

[Event_00131_00001_Trigger]
Call(Scr_0x0303, 0, 0)
SceneEnter(130)
FadeOut(0)

[Event_00130_00002_Trigger]
Call(Scr_0x02E7, 0, 0)
SceneEnter(131)
FadeOut(0)

[Event_00130_00001_Trigger]
SceneEnter(100)
PartySetPos(30, 64, 0)
FadeOut(0)

[Event_00100_00020_Trigger]
EventSetState(100, 24, true, true)
PartySetRole(1)
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//姑娘家不方便进出这种地方
//我留在门外等你
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SceneEnter(130)
PartySetPos(23, 69, 0)
FadeOut(0)
ReplaceAndPause()
EventSetState(100, 24, true, true)
PartySetRole(1)
SceneEnter(130)
PartySetPos(23, 69, 0)
FadeOut(0)

[Event_00101_00003_Trigger]
//"古董商印堂发紫，脸上长满青
//绿色肿瘤、显然是中剧毒而死"
VideoUpdate(0, false)
SetDlgUpper(3-4-1, 0x00000000, false)
//林月如：
//啊～　好恶心！
//他．．他是遇到盗匪吗？
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//我看看．．
VideoUpdate(0, false)
SetDlgBox(0x00000000)
//搜得布包
AddItem(211, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//应该不是．．
//他身上带的财物都还在
SetDlgUpper(3-4-1, 0x00000000, false)
//林月如：
//又不像毒蛇咬死的
//还是．．蛤蟆精咬死的？
ReplaceAndPause()
SetDlgCenter(0, 0x00000000, false)
//此人已死

[Event_00107_00005_Trigger]
PlaySound(177)
SetDlgCenter(0, 0x00000000, false)
//哞．．．

[Event_00131_00002_Trigger]
SceneEnter(134)
PartySetPos(15, 24, 1)
FadeOut(0)

[Event_00134_00001_Trigger]
SceneEnter(131)
PartySetPos(9, 49, 0)
FadeOut(0)

[Event_00131_00003_Trigger]
SceneEnter(132)
PartySetPos(14, 48, 0)
FadeOut(0)

[Event_00132_00001_Trigger]
SceneEnter(131)
PartySetPos(12, 51, 0)
FadeOut(0)

[Event_00131_00004_Trigger]
SceneEnter(132)
PartySetPos(14, 70, 1)
FadeOut(0)

[Event_00132_00002_Trigger]
SceneEnter(131)
PartySetPos(15, 54, 1)
FadeOut(0)

[Event_00131_00005_Trigger]
SceneEnter(132)
PartySetPos(18, 90, 0)
FadeOut(0)

[Event_00132_00003_Trigger]
SceneEnter(131)
PartySetPos(22, 54, 1)
FadeOut(0)

[Event_00131_00006_Trigger]
SceneEnter(132)
PartySetPos(16, 113, 1)
FadeOut(0)

[Event_00132_00004_Trigger]
SceneEnter(131)
PartySetPos(26, 51, 0)
FadeOut(0)

[Event_00131_00007_Trigger]
SceneEnter(132)
PartySetPos(35, 22, 1)
FadeOut(0)

[Event_00132_00005_Trigger]
SceneEnter(131)
PartySetPos(32, 49, 0)
FadeOut(0)

[Event_00131_00008_Trigger]
SceneEnter(132)
PartySetPos(31, 43, 0)
FadeOut(0)

[Event_00132_00006_Trigger]
SceneEnter(131)
PartySetPos(34, 50, 0)
FadeOut(0)

[Event_00131_00009_Trigger]
SceneEnter(132)
PartySetPos(34, 69, 1)
FadeOut(0)

[Event_00132_00007_Trigger]
SceneEnter(131)
PartySetPos(40, 48, 1)
FadeOut(0)

[Event_00131_00010_Trigger]
SceneEnter(132)
PartySetPos(35, 90, 1)
FadeOut(0)

[Event_00132_00008_Trigger]
SceneEnter(131)
PartySetPos(43, 50, 1)
FadeOut(0)

[Event_00131_00011_Trigger]
SceneEnter(132)
PartySetPos(34, 111, 1)
FadeOut(0)

[Event_00100_00021_Trigger]
SceneEnter(137)
PartySetPos(19, 36, 0)
FadeOut(0)

[Event_00137_00001_Trigger]
SceneEnter(100)
PartySetPos(22, 29, 0)
FadeOut(0)

[Event_00100_00022_Trigger]
SceneEnter(135)
PartySetPos(12, 29, 1)
FadeOut(0)

[Event_00135_00001_Trigger]
SceneEnter(100)
PartySetPos(44, 53, 0)
FadeOut(0)

[Event_00100_00023_Trigger]
SceneEnter(136)
PartySetPos(22, 39, 0)
FadeOut(0)

[Event_00136_00001_Trigger]
SceneEnter(100)
PartySetPos(41, 76, 0)
FadeOut(0)

[Event_00132_00009_Trigger]
SceneEnter(131)
PartySetPos(47, 54, 0)
FadeOut(0)

[Event_00134_00002_Trigger]
//妓　女：
//呀～　出去、出去！

[Event_00132_00010_Trigger]
//啊！　有人跑进来偷看

[Event_00132_00013_Trigger]
//妓　女：
//公子、您好

[Event_00132_00019_Trigger]
//胖妓女：
//公子，你要我吗？
//我是最便宜的

[Event_00134_00003_Trigger]
//嫖　客：
//你跑进来干什麽？！
//我们正要办好事，别进来打扰
ReplaceAndPause()
[Event_00132_00015_Trigger]
//嫖客：
//看什麽？出去！当心长针眼。

[Event_00132_00011_Trigger]
//咦？　你怎麽可以随便跑进来！

[Event_00132_00012_Trigger]
//嫖客：
//老子有钱，每次到这里来
//她们都把我当成皇帝一样
ReplaceAndPause()
//嫖客：
//哈哈～有钱就是要这麽花！

[Event_00131_00012_Trigger]
//老鸨：
//悠呵～　英俊的公子爷～
//第一次来吗？要叫姑娘吗？
//一次只要二千文钱．．
GotoWithSelect(Scr_0x4FB8)
VideoUpdate(0, false)
CashModify(-2000, Scr_0x4FC6)
//老鸨：
//呵呵呵～　公子～
//您喜欢清纯一点的呀！
VideoRestore()
//那好极了，我给您介绍一位
//本院最出色的新人～"小雪"
FadeOut(0)
SceneEnter(133)
ReplaceAndPause()
//老鸨：
//怎麽样？
//公子．．还满意吗？
GotoWithSelect(Scr_0x4F99)
VideoUpdate(0, false)
//老鸨：
//呵呵呵～您满意就好了
//下次再来啊！

[Scr_0x4F99]
VideoUpdate(0, false)
//老鸨：
//呦～　不对您的味呀！？
VideoRestore()
//可是刚好也没别的姑娘了
//那这样吧～　嬷嬷我就亲自
//来伺候您啦！
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//哇喔！　开啥玩笑
//谁要你这老太婆！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//老鸨：
//别这麽说嘛．．
//嬷嬷我二十年前还曾经是
//江南十大名妓之一呢
VideoRestore()
//别害臊嘛～就这麽说定了
//嬷嬷我今天就免费送你啦！
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//谁理你呀，去照照镜子吧！
ReplaceAndPause()
//老鸨：
//呜．．免费赠送也没人要
//想当年～我年轻当红的时候
//多少公子哥抱着大把金元宝
//来捧我的场呢！

[Scr_0x4FB8]
VideoUpdate(0, false)
//老鸨：
//哟～　不要？！
VideoRestore()
//这京城之中有谁不知我们
//怡红院的姑娘个个是国色
//天香，温柔可人
//就独独您这麽不识货！
VideoRestore()
//到怡红院来，不找姑娘
//那你是来干什麽？
//．．．逛大街吗！？
ReplaceAndPauseWithNop(Event_00131_00012_Trigger, 0)

[Scr_0x4FC6]
//老鸨：
//啥！？　没带钱？
//没钱就滚出去
ReplaceAndPauseWithNop(Event_00131_00012_Trigger, 0)

[Event_00132_00018_Trigger]
//小雪：
//我一定是学的还不够
//不然为什麽客人都不喜欢我？

[Event_00133_00002_Trigger]
//小雪：
//呜．．我怎麽又搞砸了
//是不是什麽地方又弄错了？
//怎麽办．．我一定会被
//嬷嬷责罚的！
ReplaceAndPause()
//小雪：
//呜．．．我好命苦啊．．
ReplaceAndPause()
//小雪：
//不行！　我要更努力

[Event_00133_00003_Auto]
NPCMoveToBlock(34, 69, 0, 3, false)
NPCMoveToBlock(36, 66, 1, 3, false)
NPCMoveToBlock(34, 64, 0, 3, false)
NPCSetDirFrame(2, 0)
EventSetDirFrame(133, 2, 0, 0)
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(3, 0)

[Scr_0x4FE3]
NPCMoveToBlock(32, 66, 0, 3, false)
NPCMoveToBlock(35, 69, 1, 3, false)
NPCMoveToBlock(35, 70, 0, 3, false)
NPCMoveToBlock(35, 70, 1, 3, false)
EventSetState(-1, -1, false, false)

[Scene_00133_Enter]
PartySetPos(35, 70, 1)
WaitEventAutoScriptRun(8, false, false)
PartyWalkToBlock(34, 69, 0, 4)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(4, false, false)
PartyWalkToBlock(37, 65, 1, 4)
PartyWalkToBlock(36, 64, 0, 4)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(0, 0x00000000, false)
//老鸨：
//她就是小雪姑娘
EventSetDirFrame(134, 0, 2, 0)
VideoUpdate(0, false)
//老鸨：
//小雪！　见过公子
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(133, 2, 3, 0)
VideoUpdate(0, false)
//小雪：
//公子万安～
EventSetDirFrame(134, 0, 3, 0)
VideoUpdate(0, false)
//老鸨：
//咱们小雪呀～
//琴棋书画、花鸟刺绣、
//诗词歌赋样样精通
//是咱们怡红院的才女哟！
EventSetDirFrame(134, 0, 2, 0)
VideoUpdate(0, false)
EventSetDirFrame(133, 2, 0, 0)
VideoUpdate(0, false)
//老鸨：
//小雪，好好的伺候公子
//知道吗！？
VideoUpdate(0, false)
//小雪：
//是．．嬷嬷．．
EventSetAutoScript(134, 0, Scr_0x4FE3)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(10, false, false)
EventSetDirFrame(134, 0, 2, 0)
VideoUpdate(0, false)
//老鸨：
//记住呀！
//这次不许又搞砸了
WaitEventAutoScriptRun(14, false, false)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(133, 2, 3, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgUpper(0, 0x00000000, false)
//小雪：
//公子．．那．．我们开始吧
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//怎麽不先来点酒助兴？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//小雪：
//公子．．
//我．．我不会喝酒．．
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//　不会喝酒！？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//小雪：
//我．．我可以弹琴给您听
//我会很多曲子！
VideoRestore()
//那．．．那．．
//还是．．我陪您下盘棋？
VideoRestore()
//要不然．．
//我写字、画画给你看？
//我会临摹王羲之的真迹哦
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//你总该会点特别的吧？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//小雪：
//我．．我还会．．刺绣
//要不要小雪替您绣一条手绢
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//算了～不用、不用！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//小雪：
//不．．我还会吟诗作赋！
//我念一首自己做的诗给您听
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(133, 2, 0, 0)
WaitEventAutoScriptRun(6, false, false)
//床前人成双、衣裳脱光光
//举头捉小鸟、低头吃香蕉
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//这．．这是什麽怪诗！
EventSetDirFrame(133, 2, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//小雪：
//您～不喜欢吗？
//可是．．上个月来的
//那位李公子很喜欢呢
VideoRestore()
//他说他听过这首诗後，突然
//灵感大发，写出许多首好诗
//後来，皇上看到他写的诗後
//还召见他到长乐宫喝酒呢
VideoRestore()
//但是．．後来
//那位李公子就再也没来了
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//小雪姑娘，我看你还是
//别当妓女了～不适合你啊
SetDlgUpper(0, 0x00000000, false)
//小雪：
//不．．不行啊．．
//我又不会做别的工作

[Event_00131_00013_Auto]
NPCMoveToBlock(41, 48, 1, 2, true)
NPCMoveToBlock(37, 53, 0, 2, true)
[Scr_0x5070]
NPCMoveToBlock(33, 49, 0, 2, true)
NPCMoveToBlock(27, 55, 0, 2, true)
NPCMoveToBlock(25, 53, 0, 2, true)
NPCMoveToBlock(19, 58, 1, 2, true)
NPCMoveToBlock(12, 51, 0, 2, true)
NPCMoveToBlock(13, 50, 0, 2, true)
WaitEventAutoScriptRun(9, false, false)
NPCMoveToBlock(12, 51, 0, 2, true)
WaitEventAutoScriptRun(5, false, false)
NPCMoveToBlock(20, 59, 0, 2, true)
NPCMoveToBlock(27, 52, 0, 2, true)
NPCMoveToBlock(29, 53, 1, 2, true)
NPCMoveToBlock(33, 49, 1, 2, true)
WaitEventAutoScriptRun(2, false, false)
ReplaceAndPauseWithNop(Scr_0x5070, 0)

[Event_00127_00003_Trigger]
//小二：
//客倌，楼上雅座。

[Event_00127_00003_Auto]
NPCMoveToBlock(35, 37, 1, 2, true)
NPCMoveToBlock(30, 43, 0, 2, true)
WaitEventAutoScriptRun(8, false, false)
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(3, false, false)
NPCMoveToBlock(25, 38, 1, 2, true)
WaitEventAutoScriptRun(8, false, false)
NPCMoveToBlock(28, 36, 0, 3, false)
NPCMoveToBlock(26, 34, 1, 3, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(8, false, false)
NPCMoveToBlock(33, 40, 1, 2, true)
NPCMoveToBlock(36, 38, 0, 2, true)
NPCMoveToBlock(31, 33, 1, 2, true)
WaitEventAutoScriptRun(8, false, false)
ReplaceAndPauseWithNop(Event_00127_00003_Auto, 0)

[Scr_0x5094]
ReplaceAndPause()
[Event_00127_00004_Trigger]
//酒馆老板：
//公子，要买酒吗？
//每壶一百文钱．．
GotoWithSelect(Scr_0x5094)
VideoUpdate(0, false)
CashModify(-100, Scr_0x5094)
AddItem(26, 0)
VideoUpdate(0, false)
//酒馆老板：
//谢谢您的惠顾

[Event_00127_00005_Trigger]
//小二：
//我在这儿打工，从早做到晚
//累得要命，但是工钱就那麽
//一丁点儿，真不是滋味。

[Event_00128_00002_Trigger]
WaitEventAutoScriptRun(0, false, false)
SetDlgLower(0, 0x00000000, false)
//飞鹰帮：
//阁下是哪条道上的
//报出个名号来！
VideoUpdate(0, false)
//巨鲸帮：
//我是太湖巨鲸帮的
//少帮主─赵大海。
VideoUpdate(0, false)
//飞鹰帮：
//巨鲸帮????混水上的
//爬到陆上来干啥？
VideoUpdate(0, false)
//巨鲸帮：
//水上混的就不能上陆地啊！
//谁规定的？我知道最近京城
//会有一桩大买卖，我们想要
//分一票。
VideoUpdate(0, false)
//飞鹰帮：
//说分就分，那我们算什麽！
VideoUpdate(0, false)
//巨鲸帮：
//你们算哪根葱啊！
//告诉你，当朝杨太师是我爹
//舅父的妹夫，你听清楚没有！
VideoUpdate(0, false)
//飞鹰帮：
//竟敢在太岁头上动土，朝
//中丞相是我娘叔叔的表兄
//你活得不耐烦啦！
VideoUpdate(0, false)
//巨鲸帮：
//搞不清楚状况，皇上身边的大
//红人杨公公是我舅娘岳丈的拜
//把兄弟。
VideoUpdate(0, false)
//飞鹰帮：
//哼！你们是关公面前耍大刀
//皇帝的宠妃冯妃是我祖父三
//姨婆的外孙女，要想动我们
//的地盘，也要看清楚对象。
ReplaceAndPause()
WaitEventAutoScriptRun(0, false, false)
SetDlgLower(0, 0x00000000, false)
//巨鲸帮：
//不服气就来比划比划！
VideoUpdate(0, false)
//飞鹰帮：
//来呀！　谁怕谁？

[Event_00128_00003_Trigger]
//巨鲸帮众：
//看什麽？走开！

[Event_00128_00008_Trigger]
//飞鹰堡：
//没见过黑道谈判吗！？
//离远一点！

[Event_00128_00011_Trigger]
//小妹：
//好可怕～那边都是黑道的人

[Event_00128_00012_Trigger]
//酒客：
//今朝有酒今朝醉
//家事、国事、天下事
//．．．关我屁事

[Event_00128_00014_Trigger]
//酒客：
//京城里龙蛇杂处，什麽人都有
//你在这儿可要小心点儿。

[Event_00129_00010_Trigger]
//澡堂老板：
//我们这里是城里最有名的澡堂
//浴池中还特别加入百花香精，
//让你洗後全身皮肤光滑细腻、
//容光焕发、芳香迷人！
//只要常常来我们这洗香水澡
//保证你就像刘家少夫人那样
//让男人们迷得神魂颠倒

[Event_00129_00011_Trigger]
EventSetDirFrame(129, 10, 1, 0)
VideoUpdate(0, false)
//澡堂老板：
//喂～这里只做女客人的生意
//男人不可以进去
EventSetState(-1, -1, false, false)
EventSetState(129, 12, true, true)
PartySetRole(3)

[Event_00129_00012_Trigger]
EventSetState(-1, -1, false, false)
PartySetRole(31)
RoleSetDirFrame(0, 3, 0)
PartySetPos(31, 40, 1)
EventSetState(129, 11, true, false)

[Event_00100_00024_Trigger]
EventSetState(-1, -1, false, false)
PartySetRole(31)

[Event_00135_00002_Trigger]
//老板：
//客人好，我们这儿有京城里最
//好的打铁师父，打造出来的武
//器一定让您满意，挑挑看吧！
VideoUpdate(0, false)
ShowBuyItemMenu(13)
VideoUpdate(0, false)
//老板：
//欢迎再来！

[Event_00135_00003_Trigger]
//顾客：
//这儿卖的兵器都十分的名贵
//就怕有名无实。

[Event_00135_00004_Trigger]
//顾客：
//京城卖的东西就是不一样
//好～贵！

[Event_00137_00003_Auto]
NPCMoveToBlock(30, 24, 1, 2, true)
ReplaceAndPause()
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(3, false, false)
NPCMoveToBlock(28, 27, 0, 2, true)
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(3, 0)
ReplaceAndPauseWithNop(Event_00137_00003_Auto, 0)

[Event_00136_00002_Trigger]
WaitEventAutoScriptRun(0, false, false)
//妇人：
//孩子的爹，快来吃饭吧！
//饭菜都要凉了。

[Event_00136_00003_Trigger]
//孩童：
//哇！终於可以开饭罗。

[Event_00136_00004_Trigger]
//居民：
//咦，小兄弟您是哪位啊？
ReplaceAndPause()
//居民：
//在寒舍吃顿便饭再走吧

[Scene_00106_Enter]
MusicPlay(12, true, 0.00)

[Event_00110_00001_Trigger]
SceneEnter(106)
PartySetPos(28, 66, 1)
FadeOut(0)

[Scr_0x5136]
SceneEnter(109)
PartySetPos(28, 66, 1)
FadeOut(0)

[Event_00106_00003_Trigger]
SceneEnter(110)
PartySetPos(30, 44, 1)
FadeOut(0)

[Event_00102_00005_Trigger]
EventSetState(-1, -1, false, false)
EventSetState(102, 6, true, false)
WaitEventAutoScriptRun(12, false, false)
SetDlgUpper(29-1-1, 0x00000000, false)
//剑圣：
//此地凶险，切莫久留！
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//请问您是．．？
VideoUpdate(0, false)
SetDlgUpper(29-1-1, 0x00000000, false)
//剑圣：
//老夫夜观星相，预见今日
//此地将发生极大的血光之灾
//劝你们快离开吧！
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//这可不成，我们还得赶路呢
SetDlgUpper(29-1-1, 0x00000000, false)
//剑圣：
//听不听由你，想活命的话
//速速回头下山去吧！
EventSetAutoScript(102, 6, Scr_0x51BC)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(1, 3, 0)
WaitEventAutoScriptRun(6, false, false)
SetDlgUpper(1-2-1, 0x00000000, false)
//李逍遥：
//御剑飞仙！　哗～高人！
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//我想起来了，他是剑圣前辈！
//当今武林第一人！
//我小时候曾见过他一面
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//哎呀．．可惜！
RoleSetDirFrame(1, 2, 0)
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//可惜什麽．．？
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//早知道我就求他收我为徒
VideoUpdate(0, false)
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//想得美咧！　当人家蜀山派的
//弟子是要出家当三清道士的，
//你这花心大萝卜人家才不收呢
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//我哪一点花啦！？
RoleSetDirFrame(1, 3, 0)
VideoUpdate(0, false)
SetDlgLower(3-5-1, 0x00000000, false)
//林月如：
//哼～你自己说呢？
VideoUpdate(0, false)
SetDlgUpper(1-10-1, 0x00000000, false)
//李逍遥：
//好啦好啦．．饶了我吧
//当我是痴人说梦，行了吧？
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//你本来就是痴人说梦
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//别闹了，咱们还要赶路呢
//要是日落以前没过这山谷
//咱们可就要摸黑下山了
JumpIfEventStateMatches(102, 4, false, false, Scr_0x5194)
EventSetState(102, 4, false, false)

[Scr_0x5193]
VideoUpdate(0, false)
[Scr_0x5194]
SetDlgLower(0, 0x00000000, false)
//秀才：
//二．．二位．．英雄
//我．．．我看．．
RoleSetDirFrame(1, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//你怎麽了？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//秀才：
//我看．．我还是回去吧．．
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//为什麽？又不是没见过妖怪
//有啥好怕的？难道你不相信
//我们？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//秀才：
//这．．我．．我想
//先前的约定就打消了
VideoRestore()
//告辞．．
PartySetFollower()
FadeOut(0)
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//秀才一溜烟的便往回跑走了
VideoUpdate(0, false)
SetDlgUpper(3-2-1, 0x00000000, false)
//林月如：
//去～　这些读书人真没用
EventSetState(102, 4, false, false)

[Event_00102_00006_Auto]
EventModifyPos(-1, -1, 0, 8)
GotoWithNop(Event_00102_00006_Auto, 12)

[Scr_0x51BC]
NPCSetFrame(1)
EventModifyPos(-1, -1, 1, 0)
EventModifyPos(-1, -1, 4, 0)
EventModifyPos(-1, -1, 6, 0)
EventModifyPos(-1, -1, 8, 0)
EventModifyPos(-1, -1, 12, 0)
[Scr_0x51C2]
EventModifyPos(-1, -1, 16, 0)
GotoWithNop(Scr_0x51C2, 0)

[Event_00137_00002_Trigger]
//宋氏：
//听说二位打从扬州来？
VideoRestore()
//我家相公是个古董商
//上个月到扬州作买卖
//至今音讯全无，我好担心呐！

[Event_00137_00003_Trigger]
//书生：
//十年寒窗无人问
//一举成名天下知．．
VideoRestore()
//我娘说～想要得取功名
//出人头地，唯有靠勤奋读书

[Scr_0x51D3]
EventSetTriggerMode(-1, -1, false, 2)
SetDlgUpper(0, 0x00000000, false)
//宋氏：
//这．．这是我家相公
//出门时带的包袱．．
//怎麽会在你们手上！？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//我们经过山谷时发现你丈夫
//的屍首，这些是他的遗物．．
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//宋氏：
//呜．．．呜．．都怪我
//当初我应该劝他不要去的
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//夫人．．请您节哀．．
//您点点看，包袱中的物品
//可有短缺？
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(0, 0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//宋氏：
//嗯．．．．
NPCSetDirFrame(1, 0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//宋氏：
//您千里迢迢替把这些东西
//送回来，我们已经很感激了
VideoRestore()
//唉．．都是为了这紫金葫芦
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//这葫芦有什麽不对吗？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//宋氏：
//不．．姑娘别误会
//这葫芦是我相公向一个盗墓
//者买来的，据说是上古神物
VideoRestore()
//自从相公得到这葫芦後
//家中就多次遭到妖魔的侵扰
//後来听说扬州有人出高价要
//买这葫芦，相公就去谈价钱
//想不到．．竟．．
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//妖魔！？　想必．．
//这葫芦若不是神灵之器
//就是不祥之物
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//宋氏：
//我曾听我相公说过．．
//紫金葫芦若由会仙术的人
//持有，会是相当厉害的宝贝
VideoRestore()
//我们一介妇孺留这东西也没用
//二位大侠若不嫌弃，我想把这
//紫金葫芦相赠．．
VideoUpdate(0, false)
SetDlgBox(0x00000000)
//获得紫金葫芦
AddItem(210, 0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//宋氏：
//葫芦底部有些文字，据说是
//使用它的咒语，可惜我们不
//会法术，不会使用
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//哦？　让我看看．．
SetDlgBox(0x00000000)
//得到灵葫咒
RoleAddMagic(1, 90)
ReplaceAndPause()
//宋氏：
//呜．．我好可怜呐

[Scr_0x522B]
MusicPlay(26, true, 0.00)
HeroSetSprite(0, 232, false)
PartySetRole(1)
PartySetPos(29, 58, 0)
PlaySound(123)
WaitEventAutoScriptRun(8, false, false)
PlaySound(190)
ViewportMove(0, 4, 40)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(26-1-1, 0x00000000, false)
//石长老：
//你们是白苗族的人？
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//石长老．．投降吧！
//你打不过这麽多人的
//把公主殿下交给我们吧
VideoUpdate(0, false)
SetDlgLower(26-1-1, 0x00000000, false)
//石长老：
//哼～就凭你们这些臭娘们？
WaitEventAutoScriptRun(8, false, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//公主殿下．．属下知道您就
//在轿子中。可否现身一见？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//轿中之人：
//　　．．．．．．．
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//公主殿下的两位汉人朋友
//属下也已经请到，现在就
//在客栈内休息呢．．
//想必殿下很想见他们吧？
VideoUpdate(0, false)
//轿中之人：
//　　是．．逍遥哥哥吗！？
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//是的．．
//奉我族族长之命，想请公主
//及公主的朋友到大理城做客
SetDlgLower(26-1-1, 0x00000000, false)
//石长老：
//　　　　　做梦！
PartySetRole(565)
AddItem(88, 9)
AddItem(78, 9)
BattleEnableAuto()
SetBattleMusic(18)
SetBattlefield(20)
BattleStart(37, Null, Null)
SetBattleMusic(37)
MusicPlay(18, true, 0.00)
PartySetRole(1)
BattleEnd()
RemoveItem(88, 9, Null)
RemoveItem(78, 9, Null)
PartySetPos(29, 69, 0)
ViewportMove(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(26-1-1, 0x00000000, false)
//石长老：
//可～恶．．
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//石长老．．任你再神通广大
//一次要对付我们这麽多人
//法力终究是要耗尽的．．
VideoRestore()
//您这麽大把年纪了，犯不着
//为那残暴无道的巫王拼命吧？
VideoUpdate(0, false)
SetDlgLower(26-1-1, 0x00000000, false)
//石长老：
//哼！　休得污辱我们大王
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//在苗疆，谁人不知
//巫王听信谗言，修练拜月教的
//魔功以至走火入魔、命在旦夕
//而身後无子嗣以继大统
VideoRestore()
//这时却又想起十年前被自己
//亲手迫害，而流亡出走的妻
//子及亲生女儿．．哼～
VideoUpdate(0, false)
SetDlgLower(26-1-1, 0x00000000, false)
//石长老：
//这是我族的家务事
//别族无权过问！
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//照我们白苗族的习俗～
//与丈夫离异的妻儿，自是归
//娘舅家养。
VideoRestore()
//巫后娘娘原是我白苗大祭司
//我等奉族长之命，迎娘娘之
//女回大理，乃名正言顺之事
VideoUpdate(0, false)
SetDlgLower(26-1-1, 0x00000000, false)
//石长老：
//强词夺理！
//公主乃我南绍王国唯一正统
//继承者，你们分明是想挟持
//她，来威胁我们大王
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//呵～您说这话可就伤人了
//我们哪来这种胆子呢？
EventSetState(106, 16, false, false)
EventSetState(106, 17, true, false)
EventModifyPos(106, 12, -16, 8)
VideoUpdate(0, false)
SetDlgLower(26-1-1, 0x00000000, false)
//石长老：
//身为长老，就算死
//也绝不让你们如愿
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//呦～　困兽之斗啊？
VideoUpdate(0, false)
SetDlgLower(26-1-1, 0x00000000, false)
//石长老：
//领教老夫最後绝招！
MusicStop()
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//赤血毒焰~50
VideoShake(30, 4)
WaitEventAutoScriptRun(14, false, false)
PlaySound(175)
FadeColor(2, 26, false)
EventSetTriggerScript(107, 1, Scr_0x4DC0)
EventSetTriggerScript(110, 1, Scr_0x5136)
EventSetTriggerScript(104, 3, Scr_0x63E9)
SceneSetScripts(110, Scr_0x5386, Null)
SceneEnter(110)
ReplaceAndPause()

[Event_00110_00007_Auto]
ReplaceAndPause()
NPCMoveToBlock(26, 40, 0, 3, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(7, false, false)
NPCSetDirFrame(0, 0)

[Scr_0x52C8]
NPCMoveToBlock(23, 40, 1, 3, false)
NPCMoveToBlock(24, 41, 0, 2, true)
NPCSetDirFrame(3, 0)

[Scr_0x52CC]
NPCMoveToBlock(27, 38, 0, 3, false)

[Event_00110_00007_Trigger]
//两位吗？　请这边坐．．
VideoFadeAndUpdate(65532)
HeroSetSprite(0, 232, false)
PartySetRole(1)
RoleSetDirFrame(0, 0, 0)
PartySetPos(24, 41, 1)
EventSetState(110, 5, true, false)
EventSetState(110, 6, true, false)
EventSetAutoScript(110, 2, Scr_0x52C8)
WaitEventAutoScriptRun(28, false, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//呦～呵～
//小夫妻俩出来游山玩水吗？
//真令人羡煞呀．．
VideoRestore()
//呵．．不说笑了
//俩位要点什麽？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//老板娘～　有酒吗？
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//小店的陈年茅台远近驰名呢！
EventSetDirFrame(110, 5, 0, 1)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//好～来两壶暖暖身子
//贵店有啥拿手下酒好菜？
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//小店最拿手的蜜汁燻火腿
//不知是否合您的味？
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(110, 5, 0, 0)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(110, 5, 0, 1)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//好．．来一盘吧！
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//马上来！
EventSetAutoScript(110, 2, Scr_0x52CC)
WaitEventAutoScriptRun(18, false, false)
EventSetDirFrame(110, 5, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//这山中野店，别有一番风味呢
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//这间客栈似乎是新开的
//去年我到京城，路过这
//里时没见过有这间店
FadeOut(0)
EventSetState(110, 2, false, false)
EventSetState(110, 7, false, false)
EventSetState(110, 15, true, false)
EventSetState(111, 0, true, false)
EventSetState(110, 3, true, false)
EventSetDirFrame(110, 5, 0, 0)
WaitEventAutoScriptRun(5, false, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//敢问～　少侠怎麽称呼？
//府上哪里呀？
EventSetDirFrame(110, 5, 0, 1)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//敝姓李．．余杭县人
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//呦～　余杭啊．．．
//这麽远的地方来的呀！
//敢情～两位是．．回娘家？
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//不不．．大姐您爱说笑了
//我们出来，是为了找寻一个人
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//呵～　那是我猜错啦！
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//我呢～　我叫盖罗娇
//手下这班姐妹呢．．都是跟我
//从故乡大理，来中土讨生活的
VideoRestore()
//最近几年呐．．苗疆战乱不休
//许多人不是迁到岭南，就是来
//中土讨生活，我们想等到天下
//太平了再回故乡
EventSetDirFrame(110, 5, 0, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//嗯．．难怪这店里全是苗女
//连酒和菜都是西南边疆的特产
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//呵呵～
//两位喜欢的话，就尽量用
EventSetState(110, 8, true, false)
WaitEventAutoScriptRun(15, false, false)
MusicStop()
//苗女：
//　　大姐！　他们来了
EventSetDirFrame(110, 5, 0, 1)
VideoUpdate(0, false)
SetDlgLower(12-1-1, 0x00000000, false)
//盖罗娇：
//嗯．．也该差不多了！
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//不好意思，我有重要的客人
//到了，不能陪二位．．
//二位就请．．小睡片刻吧！
EventSetDirFrame(110, 3, 0, 1)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(110, 3, 0, 2)
PlaySound(144)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(110, 5, 0, 2)
EventSetDirFrame(110, 6, 0, 1)
VideoUpdate(0, false)
PlaySound(93)
WaitEventAutoScriptRun(10, false, false)
EventSetState(110, 3, false, false)
EventSetState(110, 4, true, false)
VideoUpdate(0, false)
SetDlgLower(12-1-1, 0x00000000, false)
//盖罗娇：
//通知所有的人，大鱼入网了
EventSetAutoScript(110, 8, Scr_0x5383)
WaitEventAutoScriptRun(12, false, false)
EventSetState(110, 8, false, false)
EventSetState(110, 4, false, false)
EventSetState(110, 9, false, false)
EventSetState(110, 10, false, false)
EventSetState(110, 11, false, false)
EventSetState(110, 12, false, false)
EventSetState(110, 13, false, false)
EventSetState(110, 14, false, false)
EventSetState(0, 0, false, false)
EventSetState(0, 0, false, false)
EventSetState(106, 4, true, false)
EventSetState(106, 5, true, false)
EventSetState(106, 6, true, false)
EventSetState(106, 7, true, false)
EventSetState(106, 8, true, false)
EventSetState(106, 9, true, false)
EventSetState(106, 10, true, false)
EventSetState(106, 11, true, false)
EventSetState(106, 12, true, false)
EventSetState(106, 13, true, false)
EventSetState(106, 14, true, false)
EventSetState(106, 15, true, false)
EventSetState(106, 16, true, false)
EventSetState(107, 0, true, false)
EventSetState(106, 18, true, true)
EventSetState(106, 19, true, true)
EventSetState(106, 20, true, true)
EventSetState(106, 21, true, true)
SceneSetScripts(106, Scr_0x522B, Null)
FadeOut(0)
SceneEnter(106)

[Event_00110_00008_Auto]
NPCMoveToBlock(25, 39, 1, 8, false)
NPCMoveToBlock(24, 40, 1, 8, false)

[Scr_0x5383]
NPCMoveToBlock(25, 39, 1, 8, false)
NPCMoveToBlock(32, 46, 0, 8, false)

[Scr_0x5386]
Delay(10)
VideoShake(0, 4)
PartySetPos(0, 0, 0)
VideoUpdate(0, false)
FadeColor(4, 26, true)
SetDlgCenter(0, 0x00000000, false)
//　　何方妖孽　在此逞凶！
//　　饶你不得．．．看飞剑
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//不！　他们不是我杀的！
FadeOut(0)
PartySetPos(26, 41, 0)
PlaySound(26)
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//　　"屋外传来一声惊叫之後"
//　　"又恢复寂静．．"
EventSetDirFrame(110, 5, 0, 0)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(110, 6, 0, 0)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(110, 5, 0, 1)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(110, 5, 0, 0)
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//　．．．．．！？
PartySetPos(25, 41, 1)
RoleSetDirFrame(0, 3, 0)
EventSetState(110, 5, false, false)
EventSetState(110, 6, false, false)
HeroSetSprite(0, 2, false)
PartySetRole(13)
VideoUpdate(0, false)
//李逍遥：
//　灵儿！　是灵儿的声音！
RoleRevive(10, true)
RoleModifyHPMP(9999, true)
ReplaceAndPause()

[Event_00109_00007_Trigger]
SetDlgCenter(0, 0x00000000, false)
//此人已死．．

[Event_00109_00005_Trigger]
SetDlgCenter(0, 0x00000000, false)
//李逍遥救醒盖罗娇
FadeOut(0)
EventSetState(-1, -1, false, false)
EventSetState(109, 6, true, true)
PartySetPos(27, 71, 1)
RoleSetDirFrame(0, 0, 0)
EventSetTriggerScript(111, 1, Scr_0x4DCE)
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//呵～刚才真不好意思
//对你们下了迷药。不过．．
//我们没有恶意
VideoRestore()
//如你所见，我们并不想让你们
//介入这场战斗，所以使了一点
//手段，希望李少侠莫见怪
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//老板娘．．刚才．．
//除了这些死去的人
//是否还有一位女孩子？
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//公主殿下被一位青衣白发
//的老道士带走了
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//　　公主．．？
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//就是你在找的赵灵儿
//你们的事，我调查很久了
//所以知道你们要经过这里
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//那．．
//你可知带走灵儿的是何人？
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//那位老道士自称是独孤剑圣
//我中了石长老的赤血毒焰
//只能眼睁睁的看着殿下．．
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//剑圣前辈一向嫉恶如仇、为人
//正直，向来为武林同道所敬仰
//灵儿妹子既然被他所搭救，应
//该是福非祸
//李大哥．．我们应该可以放心
SetDlgLower(1-4-1, 0x00000000, false)
//李逍遥：
//唉．．希望如此。只是．．
EventSetDirFrame(109, 6, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//没想到任务没达成，还把事
//情弄成这样。看来～我只有
//回大理，向族长请罪了
FadeOut(0)
EventSetState(109, 6, false, false)
VideoUpdate(0, false)
SetDlgLower(1-4-1, 0x00000000, false)
//李逍遥：
//唉．．眼看着灵儿就在我们
//身边不远，却又这样分开了
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//李大哥～这里离京城不远
//我有位姨妈住在那，我想
//顺道去看看她，好吗？
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//也好．．
PartySetRole(31)

[Event_00130_00016_Auto]
NPCSetFrame(0)
ReplaceAndPause()
NPCSetFrame(1)
ReplaceAndPause()
NPCSetFrame(2)
ReplaceAndPause()
NPCSetFrame(3)
ReplaceAndPause()
NPCSetFrame(4)
ReplaceAndPause()
NPCSetFrame(5)
ReplaceAndPause()
NPCSetFrame(0)
ReplaceAndPause()
NPCSetFrame(1)
ReplaceAndPause()
NPCSetFrame(2)
ReplaceAndPause()
NPCSetFrame(3)
ReplaceAndPause()
NPCSetFrame(4)
ReplaceAndPause()
NPCSetFrame(5)
ReplaceAndPause()
NPCSetFrame(0)
ReplaceAndPause()
NPCSetFrame(1)
ReplaceAndPause()
NPCSetFrame(2)
ReplaceAndPause()
NPCSetFrame(3)
ReplaceAndPause()
NPCSetFrame(4)
ReplaceAndPause()
NPCSetFrame(5)
ReplaceAndPause()
[Event_00130_00017_Auto]
NPCSetFrame(6)
ReplaceAndPause()
NPCSetFrame(7)
ReplaceAndPause()
NPCSetFrame(8)
ReplaceAndPause()
NPCSetFrame(9)
ReplaceAndPause()
NPCSetFrame(10)
ReplaceAndPause()
NPCSetFrame(11)
ReplaceAndPause()
NPCSetFrame(6)
ReplaceAndPause()
NPCSetFrame(7)
ReplaceAndPause()
NPCSetFrame(8)
ReplaceAndPause()
NPCSetFrame(9)
ReplaceAndPause()
NPCSetFrame(10)
ReplaceAndPause()
NPCSetFrame(11)
ReplaceAndPause()
NPCSetFrame(6)
ReplaceAndPause()
NPCSetFrame(7)
ReplaceAndPause()
NPCSetFrame(8)
ReplaceAndPause()
NPCSetFrame(9)
ReplaceAndPause()
NPCSetFrame(10)
ReplaceAndPause()
NPCSetFrame(11)
ReplaceAndPause()
ReplaceAndPauseWithNop(Event_00130_00016_Auto, 0)

[Scr_0x5452]
ReplaceAndPause()
[Event_00111_00015_Trigger]
//小贩：
//好吃的糖葫芦．．便宜卖喔～
GotoWithSelect(Scr_0x5452)
CashModify(-30, Scr_0x5459)
AddItem(20, 0)

[Scr_0x5459]
VideoUpdate(0, false)
//小贩：
//一串３０文钱，您的钱不够哦
ReplaceAndPauseWithNop(Event_00111_00015_Trigger, 0)

[Scene_00108_Enter]
SceneSetScripts(114, Scr_0x5460, Null)
Replace()
[Scr_0x5460]
MusicPlay(52, true, 0.00)

[Scene_00118_Enter]
PartyWalkToBlock(30, 36, 1, 8)
PartyWalkToBlock(35, 31, 1, 8)
EventSetDirFrame(118, 8, 0, 0)
EventSetDirFrame(0, 0, 0, 0)
PartyWalkToBlock(36, 32, 0, 2)
RoleSetDirFrame(0, 2, 0)
RoleSetDirFrame(1, 2, 0)
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//云姨，月如给您请安
//您老人家近来身体可好？
VideoUpdate(0, false)
SetDlgUpper(33-1-1, 0x00000000, false)
//刘夫人：
//乖～　你这小丫头．．
//几年不见，长得更标致了呢
//看样子．．不怕嫁不出去了
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//云姨．．您又取笑人家．．
VideoUpdate(0, false)
SetDlgUpper(33-1-1, 0x00000000, false)
//刘夫人：
//这位可是李公子？
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//是～　晚辈李逍遥，见过夫人
VideoUpdate(0, false)
SetDlgUpper(33-1-1, 0x00000000, false)
//刘夫人：
//别那麽见外，你也叫我云姨
//就行了。我一向把月如当自
//己的女儿看待
VideoRestore()
//所以大家都是一家人
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//云姨～　您怎麽这样说嘛
//我跟他又还没有．．
VideoUpdate(0, false)
SetDlgUpper(33-1-1, 0x00000000, false)
//刘夫人：
//还没有～也快了吧？
VideoRestore()
//你的事情，晋元都跟我说了
//呵呵．．你小时候就很好强
//不愿服输
VideoRestore()
//这位李公子能在比武招亲
//赢得你的芳心，想必武功
//一定非常了得
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//哪有～　他呀．．只会那麽
//一招半式罢了。我要是认真
//打，他才不是我的对手呢
RoleSetDirFrame(1, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(1-10-1, 0x00000000, false)
//李逍遥：
//耶？　说起来好像
//是你故意让我似的？
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//哼～本来就是！
//这一路上要不是我
//你早就被妖怪吃了
VideoUpdate(0, false)
SetDlgUpper(1-8-1, 0x00000000, false)
//李逍遥：
//你给我点面子行不行？
//老是在别人面前漏我的气
VideoUpdate(0, false)
SetDlgUpper(33-1-1, 0x00000000, false)
//刘夫人：
//好了．．你们别斗嘴了
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgUpper(33-1-1, 0x00000000, false)
//刘夫人：
//月如．．你的个性就是这样
//得理不饶人，硬嘴巴。
//这毛病怎麽老是改不掉
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//　云姨．．　！
VideoUpdate(0, false)
SetDlgUpper(33-1-1, 0x00000000, false)
//刘夫人：
//呵呵～　不过．．
//还是这样的月如才可爱
VideoRestore()
//唉．．晋元就是没那福份
//从前云姨多麽希望你能当我
//们家的媳妇，要是你能嫁到
//我们刘家来，那该多好．．
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//从小我一直把晋元哥哥当
//亲大哥看待，没有想过那些
VideoUpdate(0, false)
SetDlgUpper(33-1-1, 0x00000000, false)
//刘夫人：
//我知道．．晋元的个性
//太文弱了，你也不会喜欢
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//对了！
//怎麽不见晋元大哥呢？
VideoUpdate(0, false)
SetDlgUpper(33-1-1, 0x00000000, false)
//刘夫人：
//晋元自从上次从苏州回来後
//就染上一种怪病，找了许多
//大夫都查不出病因
VideoRestore()
//最近一个月以来，我都让他
//在後花园的厢房中静养
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//哦～　病了！？
//我可以去看他吗？
SetDlgUpper(33-1-1, 0x00000000, false)
//刘夫人：
//当然可以，你去看他
//他一定很高兴的
ReplaceAndPause()

[Event_00118_00008_Trigger]
SetDlgUpper(33-1-1, 0x00000000, false)
//刘夫人：
//最近我们的後花园种了许多名
//贵的牡丹，花朵盛开的时候非
//常美呢，你们不妨去观赏
ReplaceAndPause()
SetDlgUpper(33-1-1, 0x00000000, false)
//刘夫人：
//我已经叫厨房准备饭菜
//你们一定要留下来用餐喔

[Scr_0x54F3]
//刘夫人：
//你们见到晋元了吗？
//他今天吃过药了没？

[Event_00124_00002_Auto]
NPCMoveToBlock(24, 42, 0, 4, true)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(3, false, false)
NPCMoveToBlock(29, 37, 0, 8, false)
NPCMoveToBlock(28, 36, 0, 8, false)

[Event_00124_00003_Trigger]
SetDlgUpper(16-1-1, 0x00000000, false)
//彩　依：
//相公已经入睡了，二位
//若还有事请改明儿再来
ReplaceAndPause()
//彩　依：
//二位还有事吗？

[Event_00124_00004_Trigger]
//刘晋元：
//呜．．哇．．好痛苦啊
//彩依．．彩依！
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//他．．怎麽了！？
EventSetState(124, 2, true, false)
WaitEventAutoScriptRun(31, false, false)
SetDlgLower(16-1-1, 0x00000000, false)
//彩　依：
//啊！　相公，真对不起
//妾身回来晚了，我马上
//伺候您服药
WaitEventAutoScriptRun(0, false, false)
EventSetState(-1, -1, false, false)
EventSetState(124, 2, false, false)
EventSetState(124, 5, true, false)
EventSetState(124, 6, true, false)
EventSetState(124, 7, true, false)
PartySetPos(27, 36, 1)
RoleSetDirFrame(0, 2, 0)
PartySetRole(3)
FadeOut(0)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(124, 6, 0, 1)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(124, 6, 0, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(124, 6, 0, 1)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(124, 6, 0, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(124, 5, 0, 1)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(16-1-1, 0x00000000, false)
//彩　依：
//相公．．您觉得怎麽样了？
VideoUpdate(0, false)
SetDlgUpper(9-1-1, 0x00000000, false)
//刘晋元：
//呼．．舒坦些了
VideoRestore()
//不过，服了这麽久的药，每次
//发病时却是一次比一次难受。
//我这病真的能医得好吗？
VideoUpdate(0, false)
SetDlgLower(16-1-1, 0x00000000, false)
//彩　依：
//相公，您要忍耐
//妾身相信只要再过几天
//您就会好起来的．．
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//相公！？
VideoRestore()
//刘大哥，你何时娶了这麽美丽
//的妻子，怎麽都不曾通知小妹
VideoUpdate(0, false)
SetDlgUpper(9-1-1, 0x00000000, false)
//刘晋元：
//这．．．说来话长。
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//刘大哥您究竟得的是什麽病？
//这一路上我们有认识一些名医
//或许能有些帮助
VideoUpdate(0, false)
SetDlgUpper(9-1-1, 0x00000000, false)
//刘晋元：
//唉．．不用了
//你们的好意我心领了。
VideoRestore()
//爹娘已经不知道请过多少大夫
//可是～连我得的是什麽病也查
//不出来
VideoRestore()
//还好有彩依从家乡带来的药
//方，我最近才好转了一些
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//大嫂是哪里人？
EventSetState(124, 6, false, false)
EventSetState(124, 3, true, true)
WaitEventAutoScriptRun(5, false, false)
EventSetDirFrame(124, 3, 0, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgUpper(16-1-1, 0x00000000, false)
//彩　依：
//奴家的父母是苏州府人
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//嗯？　你也住苏州城！
//我怎麽从没见过你
VideoUpdate(0, false)
SetDlgUpper(16-1-1, 0x00000000, false)
//彩　依：
//我．．．．
EventSetDirFrame(124, 5, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(1-9-1, 0x00000000, false)
//李逍遥：
//人家是名门闺秀，足不出户
//怎麽可能天天让你看到
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//你这句话是在讽刺我吗！？
VideoUpdate(0, false)
EventSetDirFrame(124, 3, 1, 0)
WaitEventAutoScriptRun(5, false, false)
EventSetDirFrame(124, 3, 0, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgUpper(16-1-1, 0x00000000, false)
//彩　依：
//失礼了，相公服过药後
//需要安静歇息，二位有话
//等明天再跟我家相公聊
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//喔！　那我们不打扰了
SetDlgUpper(16-1-1, 0x00000000, false)
//彩　依：
//真是抱歉，没有招待二位
EventSetAutoScript(124, 3, Event_00001_00026_Auto)
EventSetState(124, 7, false, false)
PartySetRole(31)
EventSetState(108, 7, true, false)
SceneSetScripts(123, Scr_0x5776, Null)
ReplaceAndPause()

[Event_00100_00025_Trigger]
NPCSetFrame(0)
//好心的老爷、夫人赏点钱吧
//我已经三天没吃饭了～
GotoWithSelect(Scr_0x5594)
CashModify(-10, Null)

[Scr_0x5594]
SetDlgLower(1-1-1, 0x00000000, false)
//看你耳聪目明、四肢健全
//谋生之途很多，为何自甘堕落
//在街头行乞？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//呜．．小姐您有所不知
//小的家遭祝融，落得分文不名
VideoUpdate(0, false)
//又身染痨疾，一双腿也被恶棍
//打瘸，连想找份糊口的工作，
//都没有店家肯收
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//你．．难道没有亲人吗？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//有一结发妻子，嫌贫爱富
//在小的落难之际，抛夫弃子
//跑去妓院为娼卖淫
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//有这种人？　太过份了！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//是啊～　公子、小姐．．
//您就可怜可怜小的吧
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//你妻子叫什麽名字？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//她叫苏氏．．在怡红院
//的花名叫作"莺莺"
EventSetTriggerScript(131, 13, Scr_0x55C2)
ReplaceAndPause()
//呜．．心事谁人知

[Event_00100_00025_Auto]
EventAnimate(-1, 0)
WaitEventAutoScriptRun(3, false, false)
ReplaceAndPauseWithNop(Event_00100_00025_Auto, 0)

[Event_00131_00013_Trigger]
//茶水小妹：
//公子您找错人了
//我只是倒茶小妹，不接客的

[Scr_0x55C2]
//您找莺莺夫人？
//她在左边最里面的房间
EventSetTriggerScript(134, 2, Scr_0x55CA)
ReplaceAndPause()
//客人．．请您不要随便
//闯入其他客人的房间
ReplaceAndPauseWithNop(Scr_0x55C2, 0)

[Scr_0x55CA]
EventSetTriggerScript(134, 3, Scr_0x55DD)
SceneSetScripts(131, Scr_0x55E6, Null)
//公子．．请您出去
//别打扰我们办事
VideoUpdate(0, false)
//嫖客：对啊．．本大爷我出了
//一百两银子，莺莺小姐今天一
//整天都是我的，你闪一边去！
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//我说完话就走。莺莺小姐．．
//我是为了你丈夫的事而来
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//是他！？　　．．好吧
Replace()
//请你到门外等一下
//我穿好衣服就来

[Scr_0x55DD]
//你找莺莺小姐谈啥事情？
ReplaceAndPause()
//要谈就快一点！
//别扫了本大爷的兴致
//我可是花了大笔银子

[Event_00131_00014_Auto]
NPCMoveToBlock(9, 49, 1, 4, true)
NPCSetDirFrame(0, 0)

[Scr_0x55E6]
EventSetState(134, 2, false, false)
PartyWalkToBlock(9, 49, 1, 2)
PartyWalkToBlock(8, 50, 1, 2)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(6, false, false)
EventSetState(132, 0, true, true)
WaitEventAutoScriptRun(14, false, false)
SetDlgUpper(22-1-1, 0x00000000, false)
//莺莺夫人：
//说吧．．他这次欠了多少？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//钱！？　您误会我的来意了
VideoUpdate(0, false)
SetDlgUpper(22-1-1, 0x00000000, false)
//莺莺夫人：
//你不是来讨债的？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//不．．我们在街上看到你丈夫
//向人行乞，又病又残很可怜呢
//你身为人妻，为何置他於不顾
VideoUpdate(0, false)
SetDlgUpper(22-1-1, 0x00000000, false)
//莺莺夫人：
//笑话！　我置他於不顾？
//他也不想想看，我在这里
//出卖灵肉、陪尽笑脸、忍辱
//偷生，是被谁逼的？
//要不是我赚钱替他还债
//他早就被人活活打死了！
VideoRestore()
//那死鬼一有钱就跑去抽鸦片
//把家产抽光了还不够，还把
//女儿卖了．．我．．呜呜～
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//我明白了，我会替你
//讨回公道。告辞．．
EventSetTriggerScript(100, 25, Scr_0x5618)
ReplaceAndPause()

[Event_00131_00014_Trigger]
SetDlgUpper(22-1-1, 0x00000000, false)
//莺莺夫人：
//你．．你想对他怎麽样？
//你不要伤害他呀．．

[Scr_0x5618]
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//我见到你的妻子了，但是．．
//事情似乎不是如你所讲的喔
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//乞丐：
//你们．．真的．．
//跑去怡红院找我老婆！
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//若如她所说，那你当乞丐
//可是咎由自取的，不值得
//同情！
VideoUpdate(0, false)
SetDlgLower(3-3-1, 0x00000000, false)
//林月如：
//逼自己老婆和女儿去卖淫
//这种人饿死了活该！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//乞丐：
//冤枉啊．．！
//我是把女儿卖了没错，但是我
//可没有让我老婆去妓院啊！
VideoUpdate(0, false)
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//哦！？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//乞丐：
//是她自己说．．女儿还太小
//由她去代替女儿的．．
VideoUpdate(0, false)
SetDlgLower(3-3-1, 0x00000000, false)
//林月如：
//什麽！　那你更该死！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//乞丐：
//哇．．　饶命啊！
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//月如、别这样！
//他已经够可怜了，你这样子
//变成在欺负人家呢
VideoUpdate(0, false)
SetDlgUpper(3-3-1, 0x00000000, false)
//林月如：
//这种混帐事，不知道就算了
//既然给我知道了，怎麽看得
//过去！？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//你家和刘家那麽有钱有势
//帮人一下应该不难吧？
SetDlgUpper(3-2-1, 0x00000000, false)
//林月如：
//也得看对象呀！
EventSetState(131, 13, false, false)
EventSetState(132, 0, false, false)
EventSetState(134, 3, false, false)
EventSetState(134, 4, true, true)
EventSetState(135, 0, true, true)
ReplaceAndPause()
//呜．．我错了，不要打我

[Event_00134_00005_Trigger]
NPCSetDirFrame(3, 0)
VideoUpdate(0, false)
//娘．．喝茶．．
ReplaceAndPause()
//．．．．．．

[Event_00134_00004_Trigger]
SetDlgUpper(22-1-1, 0x00000000, false)
//莺莺夫人：
//公子的好意．．我心领了
//这是我们的家务事，外人
//也很难评断的
ReplaceAndPause()
//莺莺夫人：
//可怜的是我这乖女儿．．

[Scr_0x566E]
VideoUpdate(0, false)
//乞丐：
//不给我钱～　我诅咒你．．
//嫁老公是秃头、生儿子没屁眼
ReplaceAndPause()
[Event_00100_00026_Trigger]
//乞丐：
//善良的小姐．．赏点钱吧
GotoWithSelect(Scr_0x566E)
VideoUpdate(0, false)
//乞丐：
//就这麽一点呀！　小姐．．
//当乞丐的也有乞丐的自尊呢
//这年头物价涨得快，这
//点钱买块豆腐也不够
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//哦～那你想要多少？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//乞丐：
//如果你把身上一半的钱给我
//我就告诉你一个大秘密
GotoWithSelect(Scr_0x566E)
VideoUpdate(0, false)
EventSetState(100, 9, true, true)
//您真大方！　好～靠近点
//我告诉你这天大的秘密．．
VideoUpdate(0, false)
//刘尚书的公子最近不是娶了
//一位美若天仙的媳妇吗？
VideoUpdate(0, false)
//那位刘公子夫人，有多美呢
//听说～男人只要多望她一眼
//魂都会给吸过去
VideoUpdate(0, false)
//还有～　她身上经常散发出
//一股醉人的花香，经过她身
//边的人无不神魂巅倒呢
VideoUpdate(0, false)
//嘿～　奇怪的是．．
//刘公子自从娶妻後
//身体一天比一天虚弱
VideoUpdate(0, false)
//所以有人说呀～　刘家少奶奶
//是山里的蝶精变的，专门吸男
//人的精气而活
SetDlgLower(3-3-1, 0x00000000, false)
//胡说八道！
//这些谣言是从哪传出来的
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//是我亲眼见到的喔．．
//有一天晚上，我经过刘府花园
//後门附近，因为内急就躲在附
//近的草丛里．．然後．．
//我看见刘家少奶奶抱着很多奇
//花异草从树林里，偷偷摸摸的
//走进屋内，我还亲眼看见她拿
//花来吃呢！
VideoUpdate(0, false)
SetDlgLower(3-2-1, 0x00000000, false)
//好～钱我会给你
//但是我警告你，这些乱七八糟
//的谣言，不许你再跟任何人说
SceneSetScripts(118, Scr_0x588D, Null)
CashHalve()
[Scr_0x56B0]
ReplaceAndPause()
//乞丐：
//您想不想再打听别的呢？
//我的消息是最灵通的喔！
//只要一百文钱．．
GotoWithSelect(Scr_0x56B0)
VideoUpdate(0, false)
//乞丐：
//先付钱．．．．！
CashModify(-100, Scr_0x56B0)
VideoUpdate(0, false)
//乞丐：
//好～您说．．您想打听什麽？
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//嗯～　我们在找一个女孩子
//约十六岁，穿青衣、白长裤
//面貌清秀，梳着两条长长的
//辫子，你可曾见过这样的人
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//乞丐：
//嗯．．　这你就问对人了！
//前些日子，有位长的就像您
//所描述的姑娘．．可怜呐～
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//那位姑娘人在哪里？
//叫什麽名字？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//乞丐：
//听说啊～那姑娘家逢变故
//只身来到京城，寻亲不遇
//流落街头，落入黑道手里
//被卖到妓院
//她姓什麽叫什麽，我不知道
//我只知道现在她的花名叫作
//"小莲儿姑娘"
EventSetTriggerScript(133, 0, Scr_0x5F64)
ReplaceAndPause()
//乞丐：
//今天的生意真好！

[Scene_00100_Enter]
MusicPlay(53, true, 0.00)
PartySetRole(31)
RoleSetDirFrame(0, 2, 0)
RoleSetDirFrame(1, 2, 0)
PartySetPos(13, 21, 0)
VideoUpdate(0, false)
WaitEventAutoScriptRun(9, false, false)
PartyWalkToBlock(13, 20, 1, 2)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//刘．．刘晋元的家．．
//是尚书府！？
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//当然啊，刘伯伯是当朝大学士
//官拜二品礼部尚书，现在他家
//的房子比我家的还大一倍呢！
SetDlgLower(1-4-1, 0x00000000, false)
//李逍遥：
//可是．．我最怕和那些
//当官的打交道了．．．．
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//放心～没有人敢把你当外人的
//刘家跟我们林家是世交，我小
//时候，刘伯伯在还没高中举人
//以前，一家人都寄住在我家呢
//走吧！
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//我穿这样，会不会太失礼了？
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//你穿什麽还不都是那样子
//．．乡下土包子～哈哈！
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//哦？　偏偏就有些千金大小姐
//喜欢吃土土的包子
VideoUpdate(0, false)
SetDlgUpper(3-2-1, 0x00000000, false)
//林月如：
//哼、你少贫嘴
//谁喜欢吃包子了！？
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(0, false, false)
ReplaceAndPause()
MusicPlay(53, true, 0.00)

[Event_00120_00001_Trigger]
SceneEnter(118)
PartySetPos(26, 28, 1)
FadeOut(0)

[Event_00118_00004_Trigger]
SceneEnter(120)
PartySetPos(17, 42, 0)
FadeOut(0)

[Scr_0x5720]
SceneEnter(121)
PartySetPos(17, 42, 0)
FadeOut(0)

[Event_00120_00002_Trigger]
EventSetTriggerMode(-1, -1, false, 2)
//婢　女：
//啊．．李公子、林小姐
//晚宴还没准备好，请稍待片刻
ReplaceAndPause()
//婢　女：
//等一下厨房把酒菜准备齐了
//奴婢会再去请公子和小姐

[Event_00120_00003_Trigger]
//煮饭婆：
//菜很快就会做好！
//林小姐．．您要是饿了
//奴婢可以先弄一些点心给您吃
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//不～　您忙．．我不饿
ReplaceAndPause()
//煮饭婆：
//我烧的菜老爷和夫人最喜欢
//只要府里有招待客人，夫人
//总是会请我来掌厨

[Event_00120_00004_Trigger]
//婢　女：
//林小姐好、李公子好
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//你在做什麽呢？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//婢　女：
//回禀小姐～这些青菜必须把
//太老的叶子和被虫咬过的部
//份挑乾净才可以下锅
VideoRestore()
//要是端出去的菜里看到
//任何不该有的东西，我
//们会被夫人责罚的
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//嘿～　这是我专门的
//要不要我帮忙？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//婢　女：
//不～　不敢劳动公子
//奴婢自己来就行了
ReplaceAndPause()
//婢　女：
//老爷和夫人非常好客
//每次有重要的客人到来
//就会叫我们准备很多很多菜
ReplaceAndPause()
//婢　女：
//这些青菜和水果都是刚买
//回来的，很新鲜呢！

[Event_00128_00015_Trigger]
//茅山道士：
//各位乡亲父佬！
//张天师伏魔降妖灵符廉价大
//拍卖，要买要快～数量有限
//晚来就没机会啦！
VideoUpdate(0, false)
ShowBuyItemMenu(20)
VideoUpdate(0, false)
//茅山道士：
//谢谢～
//府上若是需要请人收惊、
//捉妖、勘风水．．请来找
//本山人就对啦！

[Event_00108_00007_Trigger]
//婢女：
//林小姐、李公子．．
//夫人要奴婢过来请二位
//到膳厅用餐
FadeOut(0)
EventSetState(-1, -1, false, false)
SceneSetScripts(120, Scr_0x5797, Null)
SceneEnter(120)

[Scr_0x5776]
PartyWalkToBlock(12, 40, 1, 2)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//刘大哥也怪可怜的．．
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//怎麽会可怜？
//我反倒觉得刘兄最幸福呢！
VideoRestore()
//有这麽一个漂亮又贤淑的妻子
//天天照顾他，要是我也娶到这
//种老婆，作鬼也甘愿呢！
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//那你就去死一死吧你
//去讨个女鬼当老婆！
SetDlgUpper(1-6-1, 0x00000000, false)
//李逍遥：
//开玩笑的啦．．
//干嘛生那麽大的气
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//哼！　才懒得理你
ReplaceAndPause()

[Scr_0x5797]
EventSetState(118, 8, false, false)
EventSetState(120, 2, false, false)
EventSetState(120, 3, false, false)
EventSetState(120, 4, false, false)
EventSetState(120, 5, true, false)
EventSetState(121, 0, true, false)
PartySetRole(3)
PartySetPos(18, 32, 1)
RoleMoveOneStep(0, 0, 1)
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgLower(33-1-1, 0x00000000, false)
//刘夫人：
//李公子，别客气～尽量吃喔
VideoUpdate(0, false)
SetDlgUpper(1-6-1, 0x00000000, false)
//李逍遥：
//谢谢夫人．．
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//对了．．云姨！
//怎麽不请嫂子一起用餐呢？
VideoUpdate(0, false)
SetDlgLower(33-1-1, 0x00000000, false)
//刘夫人：
//是这样的．．晋元生病後
//稍微生荤或油腻的食物都不
//能吃，每天三餐都是彩依替
//他另外料理的
//彩依说夫妻应该同甘共苦
//所以每天三餐都陪晋元吃
//同样的素斋淡粥，别的不吃
VideoRestore()
//我劝过她，但是她执意如此
//所以现在她们夫妻俩已经很久
//没有和我们二老同桌而食了
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//晋元大哥是怎麽认识大嫂的？
//直到刚才我才知道大哥娶妻了
//真的吃了我一惊呢！
VideoUpdate(0, false)
SetDlgLower(33-1-1, 0x00000000, false)
//刘夫人：
//彩依是在一个月前来到这里的
//当时～她一家人出外旅游至此
//遇上盗匪，双亲都遇害了，只
//有她侥幸逃生
VideoRestore()
//可怜她身无分文，无依无靠
//想卖身葬父母，委身於我们
//家当婢女
VideoRestore()
//我和老爷见她知书达礼
//温柔细心，人也长得漂亮
//又通晓医理。我就让她负
//责伺候晋元
VideoRestore()
//说也奇怪，当时晋元不知得
//了什麽怪病，找来许多大夫
//都医不好
VideoRestore()
//但是自从彩依来了以後
//在她照料之下，晋元一
//天天的有了起色．．．
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//然後他们就成亲了？
VideoUpdate(0, false)
SetDlgLower(33-1-1, 0x00000000, false)
//刘夫人：
//是啊．．我是想
//让晋元早点成亲，冲冲喜
//说不定就会不药而癒
VideoUpdate(0, false)
SetDlgUpper(1-9-1, 0x00000000, false)
//李逍遥低声道：
//真是趁人之危．．
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//什麽？
VideoUpdate(0, false)
SetDlgUpper(1-3-1, 0x00000000, false)
//李逍遥：
//我是说．．真是天赐良缘！
VideoUpdate(0, false)
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//吃你的菜！
//嘴巴别乱说话
EventSetTriggerScript(118, 4, Scr_0x5720)
SceneEnter(121)
FadeOut(0)
ReplaceAndPause()

[Scene_00121_Enter]
RoleModifyHPMP(9999, true)
PartySetPos(17, 32, 1)
RoleSetDirFrame(0, 2, 0)
PartySetRole(31)
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//云姨！
//李大哥是第一次来到京城
//我想带他到处去逛逛
VideoUpdate(0, false)
SetDlgUpper(33-1-1, 0x00000000, false)
//刘夫人：
//呵呵．．你呀～就是闲不住
//去吧～你们去玩吧
EventSetState(100, 25, true, true)
EventSetState(100, 26, true, true)
EventSetState(108, 6, true, true)
EventSetState(124, 3, false, false)
ReplaceAndPause()

[Event_00121_00002_Trigger]
//刘夫人：
//这城里有些地方很乱
//不要随便乱闯哦！

[Event_00121_00003_Trigger]
WaitEventAutoScriptRun(0, false, false)
//婢　女：
//呜．．这麽多碗要洗

[Event_00114_00009_Trigger]
//婢　女：
//林小姐好、李公子好

[Event_00116_00003_Trigger]
//婢　女：
//夫人特别吩咐
//院子里里外外都要扫乾净
ReplaceAndPause()
//婢　女：
//夫人和少夫人都很爱乾净
//地上连一片落叶都不能留
ReplaceAndPauseWithNop(Event_00116_00003_Trigger, 0)

[Event_00108_00004_Trigger]
//婢　女：
//这里是少爷和少夫人
//居住的的厢房
ReplaceAndPause()
//婢　女：
//少夫人和少爷非常恩爱呢
//每天少夫人都陪在生病的
//少爷枕榻边，一步也没离开
VideoRestore()
//少夫人除了每天亲自伺候少爷
//用膳、沐浴更衣，还每天为少
//爷煎药，都不让下人们代劳
ReplaceAndPause()
//婢　女：
//有的时後，少爷因为身体不适
//会乱发脾气，少夫人也不曾有
//怨言

[Event_00108_00005_Trigger]
//婢　女：
//少夫人非常爱花呢，房间
//里里外外栽满了各种花卉
VideoRestore()
//而且～少夫人还是养花高手
//院子里这麽多盛开的牡丹花
//都是少夫人亲手植的
VideoRestore()
//有许多老爷的朋友出高价想
//买几株回去观赏，少夫人怎
//麽也不肯割爱
ReplaceAndPause()
//婢　女：
//别小看这些牡丹哦！
//它们在市面上都是极为名贵的
VideoRestore()
//少夫人有空的时候
//就会到花园里来赏花

[Event_00108_00006_Trigger]
EventSetTriggerMode(-1, -1, false, 2)
WaitEventAutoScriptRun(2, false, true)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//嗯．．好香呀！
//这些花都是你种的啊？
VideoUpdate(0, false)
SetDlgUpper(16-1-1, 0x00000000, false)
//彩　依：
//公子也喜欢牡丹花吗？
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//美丽的事物，谁不喜欢呢？
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//哗～这里这麽多蝴蝶．．
//想必也是被花香吸引来的
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(3, 0)
VideoUpdate(0, false)
SetDlgUpper(16-1-1, 0x00000000, false)
//彩　依：
//是啊．．蝴蝶的生命很短暂
//但求飞舞在最美丽的花朵身边
//伴着花儿盛开、随着花儿凋谢
//这一生心愿足矣．．．
RoleSetDirFrame(0, 0, 0)
ReplaceAndPause()
//彩　依：
//这些牡丹很美吧？
NPCSetDirFrame(3, 0)

[Scene_00122_Enter]
RoleSetDirFrame(1, 1, 0)
VideoUpdate(0, false)
SetDlgLower(1-7-1, 0x00000000, false)
//李逍遥：
//我觉得．．刘晋元是不是
//因为你不答应嫁给他，所以
//他才病倒的？
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(3-2-1, 0x00000000, false)
//林月如：
//我．．关我什麽事！？
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//话不能这麽说。
//我总觉得咱们亏欠他．．
VideoUpdate(0, false)
SetDlgUpper(3-2-1, 0x00000000, false)
//林月如：
//虽然晋元大哥和我是从小一块
//长大的，但是这并不代表我一
//定要对他有什麽情爱，我只当
//他是亲大哥看待
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//人家可不是这麽想啊！
//在苏州时，他曾当面向你爹
//请求把你许配给他呢．．
SetDlgUpper(3-5-1, 0x00000000, false)
//林月如：
//就算我爹答应又怎麽样
//我跟你说，我一直当刘晋元是
//自己哥哥。信不信由你！
RoleSetDirFrame(0, 1, 0)
ReplaceAndPause()

[Scr_0x588D]
MusicStop()
EventSetState(100, 9, false, false)
EventSetState(118, 9, true, true)
EventSetState(118, 10, true, true)
EventSetState(121, 2, false, false)
PartyWalkToBlock(33, 39, 1, 4)
PartyWalkToBlock(35, 38, 0, 4)
RoleSetDirFrame(0, 1, 0)
RoleSetDirFrame(1, 1, 0)
EventSetDirFrame(118, 9, 3, 0)
VideoUpdate(0, false)
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//爹！！　您．．
//您怎麽会到这来？
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//我来找我的女儿～不对吗？
VideoUpdate(0, false)
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//我才不要回去！
EventSetDirFrame(118, 10, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(33-1-1, 0x00000000, false)
//刘夫人：
//月如．．对你爹说话
//怎麽可以用这种态度呢
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgLower(3-3-1, 0x00000000, false)
//林月如：
//爹爹一下子千方百计要逼
//我嫁人，一下子却又要把
//逍遥大哥赶走
VideoRestore()
//出尔反尔，根本不管
//女儿心里的感受！
VideoUpdate(0, false)
SetDlgUpper(33-1-1, 0x00000000, false)
//刘夫人：
//我想．．你爹是为了你着想
VideoUpdate(0, false)
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//才怪！　．．对了
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(3-3-1, 0x00000000, false)
//林月如：
//爹怎麽会知道我在这里？
//云姨，是不是您向我爹告的密
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//哼～何须告密！做爹的
//对你的脾气还不够了解吗？
VideoRestore()
//从小～每当你犯了错怕被爹
//责骂，就跑到云姨那里躲起
//来，好让云姨替你求情
VideoRestore()
//虽然你云姨已经搬到京城来
//但是爹猜也猜得到，你这回
//离家出走，一定会来找云姨
EventSetDirFrame(118, 10, 0, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//刘夫人：
//林大哥～月如不是小孩子了
//她有她自己的想法，咱们做
//长辈的，也不必太为难他们
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(118, 9, 2, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//林天南：
//云妹，你放心．．我今天
//来这里只是要确定一件事
//并非想责难她们
EventSetDirFrame(118, 9, 3, 0)
EventSetDirFrame(118, 10, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//如儿！　爹问你．．
//你离开家的这些日子
//都是和他在一起？
VideoUpdate(0, false)
SetDlgLower(3-5-1, 0x00000000, false)
//林月如：
//是．．是又怎样
//我和李大哥之间是清白的
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//李少侠．．当初比武招亲
//依旧可以算数，只要．．
//你答应我一件事
VideoRestore()
//只要你以後不再去找那
//姓赵的蛇妖女，我立刻
//将月如许配给你
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//．．．．．．．．
//．．恕晚辈难以从命！
VideoRestore()
//於情於理，我都不能
//置灵儿於不顾
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//那你把我女儿当做什麽！
//．．．你的跟班吗！？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//前辈～　这是两回事．．
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(5, false, false)
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//爹～　我们的事，您别管嘛！
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//住口！
//我怎能放任我的亲生女儿
//在外面跟男人游荡厮混！？
VideoUpdate(0, false)
//林月如：
//爹！　您怎麽可以
//说的这麽难听
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//算了～咱们父女俩也别吵了
//爹知道再说什麽你也不会听
VideoRestore()
//李少侠～　有几句话
//我想与你私底下谈，可否？
VideoUpdate(0, false)
RoleSetDirFrame(1, 2, 0)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(1, 1, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//好的．．．。
EventSetState(118, 9, false, false)
SceneSetScripts(117, Scr_0x5939, Null)
SceneEnter(117)
FadeOut(0)
ReplaceAndPause()

[Event_00118_00010_Trigger]
//刘夫人：
//你爹怎麽突然又离开了？
ReplaceAndPause()
//刘夫人：
//唉．．
//其实林大哥也是用心良苦

[Event_00119_00002_Trigger]
SetDlgCenter(0, 0x00000000, false)
//刘晋元睡着了．．

[Scr_0x5939]
MusicPlay(34, true, 0.00)
PartySetRole(1)
EventSetState(117, 3, true, true)
PartySetPos(9, 113, 0)
RoleSetDirFrame(0, 2, 0)
PartyWalkToBlock(10, 111, 1, 2)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(117, 3, 3, 0)
VideoUpdate(0, false)
EventSetDirFrame(117, 3, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//李少侠，你是不是也在
//恨我当初片面悔婚？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//晚辈不敢。您是月如的父亲
//月如的事由您作主，晚辈怎
//敢有怨言．．
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//哼．．．
//月如能像你这麽懂事就好了
VideoRestore()
//并非老夫言而无信，存心作梗
//而是～老夫见你和那赵姑娘关
//系暧眛，姑且不论她是正或邪
VideoRestore()
//你都不应该有了月如，心里
//还挂念着别的女人
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//恕晚辈愚眛～　晚辈认为
//男子汉大丈夫立於天地
//有情、也要有义
VideoRestore()
//灵儿际遇堪怜，家婶千叮万嘱
//要我护送她回苗疆家乡寻母
//而且灵儿与我相识在先，且曾
//对我有救命之恩
//我若是为了攀龙附凤，而弃
//她於不顾，岂不是不仁不义
//不孝的人吗！？
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//说的倒是动听，可是．．
//就这样让我女儿不明不白
//的继续跟着你吗？！
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//　我．．．．
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//不必多说，拔剑吧！
//我倒要看看～你真是个男子汉
//大丈夫、还是个只会耍嘴皮子
//的无赖
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//不～晚辈怎敢跟您动手？！
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//我可是认真的～接招吧！
//你若是有真功夫、真胆量
//就不得退後半步，接下我
//林家的七诀剑气
VideoRestore()
//你若赢得过我。从此以後
//我便不再过问你们的事
VideoRestore()
//反之～你若是个胆小鼠辈
//我就当场一剑毙了你
//免得你误了我女儿的终身！
SetBattleMusic(86)
SetBattlefield(7)
BattleStart(38, Scr_0x9C9B, Null)
MusicPlay(0, true, 0.00)
BattleEnd()
RoleModifyHPMP(9999, true)
PartySetPos(12, 109, 0)
RoleSetDirFrame(0, 0, 0)
EventModifyPos(117, 3, -80, 40)
EventSetDirFrame(117, 3, 2, 0)
Call(Scr_0xA53F, 0, 0)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//唉．．！　我真的老了
EventSetState(117, 4, true, true)
WaitEventAutoScriptRun(10, false, false)
EventSetDirFrame(117, 3, 0, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//爹．．！
VideoUpdate(0, false)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(117, 3, 3, 0)
WaitEventAutoScriptRun(5, false, false)
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//李大哥！　你有没有受伤？
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(117, 3, 0, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//罢了．．罢了．．
//女儿养大了，终究是别人的
EventSetAutoScript(117, 3, Scr_0x5A69)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(117, 4, 3, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(117, 4, 0, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//前辈．．．！
VideoUpdate(0, false)
SetDlgUpper(30-1-1, 0x00000000, false)
//林天南：
//月如从小娇生惯养，没吃过苦
//希望你能好好照顾她
WaitEventAutoScriptRun(22, false, false)
SetDlgUpper(1-9-1, 0x00000000, false)
//李逍遥：
//你爹．．还是很关心你的
VideoUpdate(0, false)
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//我知道．．．但是．．我想
//我已长大了，应该自己独立
//不能一辈子都依靠父母
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//你真的打算不回家了？
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(117, 4, 2, 0)
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//我喜欢像现在这样的生活
//到各地去游历、冒险．．
//可以认识许多人、许多事物
//更可以锻链自己的武功
VideoRestore()
//而且．．．
EventSetDirFrame(117, 4, 3, 0)
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//这样才能和你在一起
VideoUpdate(0, false)
SetDlgUpper(1-9-1, 0x00000000, false)
//李逍遥：
//我只是一个不学无术的浪子
//你跟着我，不怕到时候两人
//一起去当要饭的？
EventSetDirFrame(117, 4, 2, 0)
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//如果真是这样
//就怪我自己倒霉啦！
VideoUpdate(0, false)
SetDlgUpper(1-3-1, 0x00000000, false)
//李逍遥：
//好吧～等我找到灵儿的下落
VideoRestore()
//把一切事情都结束後，我带你
//四处游山玩水，一同吃遍天下
//珍味，看遍人间美景
EventSetDirFrame(117, 4, 2, 0)
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//嘻．．吃到老！　玩到老！
EventWalkOneStep(117, 4, 4, -2)
WaitEventAutoScriptRun(2, false, false)
EventWalkOneStep(117, 4, 4, -2)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(117, 4, 2, 0)
RoleMoveOneStep(-4, 2, 0)
WaitEventAutoScriptRun(2, false, false)
RoleMoveOneStep(-4, 2, 0)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(1-6-1, 0x00000000, false)
//李逍遥：
//那．．我们．．．．
EventSetState(108, 6, false, false)
EventSetState(117, 5, true, true)
WaitEventAutoScriptRun(18, false, false)
SetDlgUpper(16-1-1, 0x00000000, false)
//彩　依：
//啊．．！！
RoleMoveOneStep(8, -4, 0)
WaitEventAutoScriptRun(0, false, false)
EventWalkOneStep(117, 4, -8, 4)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(117, 4, 0, 0)
WaitEventAutoScriptRun(0, false, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//哇！？　大嫂．．
//你突然出现，害我吓了一跳
VideoUpdate(0, false)
SetDlgUpper(16-1-1, 0x00000000, false)
//彩　依：
//是．．真是抱歉．．
//我急着赶路，没向您打招呼
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//大嫂出来外面采花吗？
VideoUpdate(0, false)
SetDlgUpper(16-1-1, 0x00000000, false)
//彩　依：
//是的．．
EventSetDirFrame(117, 4, 3, 0)
VideoUpdate(0, false)
EventSetDirFrame(117, 4, 2, 0)
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//这麽说，这树林里生长
//着许多美丽的野花罗？！
EventSetAutoScript(117, 4, Scr_0x5DD1)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(0, false, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//好耶，逍遥哥～我也要去摘！
VideoUpdate(0, false)
SetDlgUpper(16-1-1, 0x00000000, false)
//彩　依：
//不．．　不可以．．
EventSetDirFrame(117, 4, 2, 0)
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//为什麽不可以？！
EventSetDirFrame(117, 4, 1, 0)
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//走嘛～逍遥哥，我们一块去
VideoUpdate(0, false)
SetDlgUpper(16-1-1, 0x00000000, false)
//彩　依：
//因为．．这树林里．．
//有很多毒蜘蛛，还有些花草
//是具有毒性的。
VideoRestore()
//万一．．你们不小心误触
//可能会中毒的
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//大嫂对这里的环境比较熟悉
//月如～那不如不要去吧
//要摘花，院子里多的是
VideoUpdate(0, false)
SetDlgUpper(16-1-1, 0x00000000, false)
//彩　依：
//对不起．．相公在等着我
//回去为他煎药，告辞了
EventSetAutoScript(117, 5, Scr_0x5A72)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(117, 4, 3, 0)
WaitEventAutoScriptRun(12, false, false)
EventSetDirFrame(117, 4, 0, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(30, false, false)
EventSetDirFrame(117, 4, 1, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//看样子．．大嫂似乎经常
//到树林里采集奇花异草
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//难怪她身上常有股醉人的花香
//也许是经常接触花的缘故吧！
EventSetState(117, 4, false, false)
PartySetRole(31)
SceneSetScripts(124, Scr_0x5A76, Null)
ReplaceAndPause()

[Scr_0x5A69]
NPCMoveToBlock(6, 115, 1, 4, true)
EventSetState(-1, -1, false, false)

[Event_00117_00004_Auto]
NPCMoveToBlock(11, 110, 0, 3, false)

[Event_00117_00005_Auto]
NPCMoveToBlock(13, 104, 0, 8, false)
NPCMoveToBlock(14, 105, 1, 3, false)
NPCMoveToBlock(13, 106, 1, 3, false)

[Scr_0x5A72]
NPCMoveToBlock(15, 108, 0, 3, false)
NPCMoveToBlock(7, 116, 0, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x5A76]
EventSetState(124, 6, true, false)
EventSetDirFrame(124, 6, 0, 0)
EventSetDirFrame(124, 5, 0, 3)
PartyWalkToBlock(24, 43, 0, 2)
WaitEventAutoScriptRun(2, false, true)
RoleSetDirFrame(0, 2, 0)
MusicStop()
ViewportMove(8, -6, 22)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(124, 5, 0, 2)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(0, 0x00000000, false)
//彩　依：
//相公．．求求您．．
//把这药喝了吧，这样您的
//病才会早点好起来．．
EventSetDirFrame(124, 5, 0, 6)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(124, 5, 0, 5)
EventSetDirFrame(124, 6, 0, 2)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(124, 6, 0, 3)
VideoUpdate(0, false)
PlaySound(262)
EventSetDirFrame(124, 6, 0, 4)
EventSetLayer(124, 6, 0)
VideoUpdate(0, false)
EventSetDirFrame(124, 6, 0, 5)
VideoUpdate(0, false)
EventSetDirFrame(124, 6, 0, 6)
EventSetDirFrame(124, 5, 0, 6)
VideoUpdate(0, false)
EventSetDirFrame(124, 6, 0, 7)
VideoUpdate(0, false)
//彩　依：
//啊！　相公．．你．．
EventSetDirFrame(124, 6, 0, 8)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(124, 6, 0, 9)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(124, 6, 0, 10)
WaitEventAutoScriptRun(3, false, false)
EventSetDirFrame(124, 6, 0, 11)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(124, 6, 0, 12)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(124, 6, 0, 13)
WaitEventAutoScriptRun(2, false, false)
SetDlgUpper(0, 0x00000000, false)
//刘晋元：
//你每天给我喝的药根本不是
//用来治我的病的，而是迷药
//是不是！？
EventSetDirFrame(124, 6, 0, 14)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(0, 0x00000000, false)
//彩　依：
//相公．．您．．您何出此言
//这些药是妾身辛辛苦苦去采
//来的，世间也只有这种药方
//才能医好您的．．
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//刘晋元：
//哼！
//我的病，所有大夫都束手无策
//难道依你这不知哪弄来的偏方
//就会有效！？
VideoRestore()
//而且～　为何我喝了这种药
//就会昏睡数时辰不醒人事？
VideoRestore()
//我问你！　每天晚上我昏睡
//的时候，你都跑到哪里去了？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//彩　依：
//我．．　妾身怎麽会呢！
EventSetDirFrame(124, 5, 0, 6)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//刘晋元：
//你骗得了爹娘，但骗不了我
//结婚至今，你根本未与我同
//床过。你眼里只当我是个废
//人，对吧！？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//彩　依：
//相公．．那种事．．
//等您病好了，妾身自然
//自然．．该服伺您的
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//刘晋元：
//还有～！　你说你父母是
//苏州船商，举家出游遇上
//盗匪，才落难流落京城
VideoRestore()
//你说的这些事，我都叫人
//调查过，结果都是你编的
//你说！你还有多少事情
//瞒着我？！
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//彩　依：
//相公．．请您相信妾身
//妾身做的任何事，都是为了您
VideoRestore()
//求求您，把剩下的药喝了吧！
//不足的份量，妾身再去采
VideoRestore()
//只要再三日．．
//再服完最後这三日的药
//您的病就会完全好了
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//刘晋元：
//住口！　我绝不再喝
//那种来路不明的药
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//彩　依：
//相公．．您这是何苦．．
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//刘晋元：
//我再也不相信你了
//我要告诉爹娘！
VideoRestore()
//去叫我爹娘来．．快去！
VideoUpdate(0, false)
EventSetDirFrame(124, 6, 0, 15)
VideoUpdate(0, false)
EventModifyPos(124, 6, 0, -3)
VideoUpdate(0, false)
EventModifyPos(124, 6, 0, -4)
VideoUpdate(0, false)
EventModifyPos(124, 6, 0, -4)
VideoUpdate(0, false)
EventModifyPos(124, 6, 0, -1)
VideoUpdate(0, false)
EventSetDirFrame(124, 5, 0, 8)
SetDlgUpper(0, 0x00000000, false)
//刘晋元：
//你．．你想做什麽！？
VideoUpdate(0, false)
EventSetDirFrame(124, 6, 0, 16)
WaitEventAutoScriptRun(0, false, false)
PlaySound(141)
EventSetDirFrame(124, 6, 0, 17)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(124, 6, 0, 18)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(124, 6, 0, 19)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(124, 6, 0, 20)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(124, 6, 0, 21)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(124, 6, 0, 15)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//刘晋元：
//　你．．．．
EventSetDirFrame(124, 5, 0, 9)
VideoUpdate(0, false)
PlaySound(93)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(124, 6, 0, 22)
VideoUpdate(0, false)
SetDlgLower(16-1-1, 0x00000000, false)
//彩　依：
//原谅我．．相公
//妾身不得不如此做了
VideoUpdate(0, false)
EventSetState(124, 6, false, false)
EventSetState(124, 3, true, false)
EventSetAutoScript(124, 3, Scr_0x5B3E)
WaitEventAutoScriptRun(60, false, false)
PartySetPos(21, 37, 0)
ViewportMove(0, 0, 0)
WaitEventAutoScriptRun(28, false, false)
SetDlgUpper(0, 0x00000000, false)
//林月如：
//．．．．．．．。
PartyWalkToBlock(21, 36, 1, 4)
PartyWalkToBlock(22, 35, 1, 4)
PartyWalkToBlock(25, 38, 0, 4)
RoleSetDirFrame(0, 0, 0)
RoleSetDirFrame(1, 3, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgUpper(3-4-1, 0x00000000, false)
//林月如：
//怎麽会这样呢！？
EventSetTriggerScript(124, 5, Scr_0x5B51)
ReplaceAndPause()

[Scr_0x5B3E]
NPCMoveToBlock(28, 35, 0, 2, true)
ReplaceAndPause()
NPCSetDirFrame(2, 0)
ReplaceAndPause()
EventSetDirFrame(124, 5, 0, 0)
WaitEventAutoScriptRun(6, false, false)
EventModifyPos(-1, -1, 0, 2)
EventModifyPos(-1, -1, 0, 2)
EventModifyPos(-1, -1, 0, 4)
EventModifyPos(-1, -1, 0, 4)
EventModifyPos(-1, -1, 0, 2)
EventModifyPos(-1, -1, 0, 2)
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(1, 0)
NPCSetDirFrame(0, 0)
NPCMoveToBlock(23, 41, 0, 3, false)
NPCMoveToBlock(27, 45, 0, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x5B51]
SetDlgCenter(0, 0x00000000, false)
//"二人叫醒刘晋元．．"
EventSetState(-1, -1, false, false)
SceneEnter(125)
FadeOut(0)

[Scene_00125_Enter]
PartySetPos(27, 36, 0)
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgUpper(9-1-1, 0x00000000, false)
//刘晋元：
//如妹，谢谢你又救了我
VideoRestore()
//你也亲眼看见了吧！
//那女人～会．．会使妖法
VideoRestore()
//我早就怀疑她不是人类
//她一定是妖怪，要来害我的！
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//刘大哥！　真相尚未
//查明切莫妄加猜测呀
//你一定是误会大嫂了
VideoUpdate(0, false)
SetDlgUpper(9-1-1, 0x00000000, false)
//刘晋元：
//如妹！　你要相信我
//这桩婚事是爹娘擅自作主的
//我对她从来没有感情。
VideoRestore()
//你可知道．．
//这些日子我有多痛苦吗？
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//但是．．刘大哥．．
//你不能因为这样就抹煞
//大嫂对你的好
VideoUpdate(0, false)
SetDlgUpper(9-1-1, 0x00000000, false)
//刘晋元：
//那都是假的！我与她朝夕相
//处。她的行为举动，怎麽看
//都不像是正常人！
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//刘大哥，你冷静点．．
EventSetDirFrame(126, 0, 3, 0)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(126, 0, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(9-1-1, 0x00000000, false)
//刘晋元：
//对，我要去找爹娘商量！
EventSetAutoScript(126, 0, Scr_0x5BA1)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(1, 3, 0)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(1, 0, 0)
WaitEventAutoScriptRun(12, false, false)
SetDlgUpper(0, 0x00000000, false)
//李逍遥：
//等一下！　刘兄．．
WaitEventAutoScriptRun(20, false, false)
RoleSetDirFrame(1, 2, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//月如，我们跟去看看！
EventSetState(118, 10, false, false)
EventSetState(118, 6, false, false)
EventSetState(118, 7, false, false)
EventSetTriggerScript(100, 18, Scr_0x5ED4)
EventSetState(108, 11, true, true)
RoleSetDirFrame(0, 0, 0)
ReplaceAndPause()

[Scr_0x5BA1]
NPCMoveToBlock(28, 35, 1, 3, false)
NPCMoveToBlock(23, 41, 0, 3, false)
NPCMoveToBlock(27, 45, 0, 3, false)
EventSetState(-1, -1, false, false)

[Event_00108_00011_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
EventSetAutoScript(-1, -1, Scr_0x5C46)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(4, false, false)
PartyWalkToBlock(18, 88, 1, 8)
WaitEventAutoScriptRun(2, false, false)
EventSetState(108, 8, true, true)
EventSetState(108, 9, true, true)
EventSetState(108, 10, true, true)
WaitEventAutoScriptRun(2, false, false)
PartyWalkToBlock(21, 91, 0, 8)
WaitEventAutoScriptRun(2, false, true)
RoleSetDirFrame(0, 0, 0)
RoleSetDirFrame(1, 0, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(0, 0x00000000, false)
//刘夫人：
//哎啊！晋元，外面风这麽大
//你怎麽可以跑出来。彩依呢？
//彩依怎麽没有陪着你？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//刘晋元：
//娘！　您快去请爹回来做主。
SetDlgLower(0, 0x00000000, false)
//刘夫人：
//你爹还尚未归来呀．．
//到底发生什麽大事了？
EventWalkOneStep(-1, -1, -8, 4)
VideoUpdate(0, false)
EventWalkOneStep(-1, -1, -8, 4)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//刘晋元：
//娘～您要救救孩儿
//彩依．．她要害我呀！
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//刘夫人：
//说这什麽话！？
//彩依为什麽要害你呢？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//刘晋元：
//彩依．．她．．她是妖怪！
//她会施妖法，她想害死孩儿啊
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//刘夫人：
//怎麽可能呢．．！？我可怜的
//孩子～你一定是身体不舒服
//所以神智有些不清楚．．
VideoRestore()
//听娘的话～　回房去躺着
//娘炖了两份莲子燕窝汤，
//给你和彩依补补身子
EventWalkOneStep(-1, -1, 8, -4)
VideoUpdate(0, false)
EventWalkOneStep(-1, -1, 8, -4)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//刘晋元：
//不要！　我不要回去那里
//我不要吃药，我会死掉的
//我会被害死的！！
VideoUpdate(0, false)
SetDlgLower(41-1-1, 0x00000000, false)
//婢女阿香：
//夫人．．依奴婢之见
//少爷可能是梦餍未醒
//或是受了惊吓也说不定
VideoUpdate(0, false)
EventSetDirFrame(108, 8, 0, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//刘夫人：
//嗯．．说的对～
//那该如何是好？
VideoUpdate(0, false)
SetDlgLower(41-1-1, 0x00000000, false)
//婢女阿香：
//可以请"道士"来替少爷作法收惊
//在奴婢的家乡，发生这种症状
//的人，都是这麽做就好了
VideoUpdate(0, false)
EventSetDirFrame(108, 8, 1, 0)
VideoUpdate(0, false)
EventSetDirFrame(108, 8, 2, 0)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(108, 8, 0, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(0, 0x00000000, false)
//刘夫人：
//你们先带少爷到我房间
//这件事我自有打算
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//婢女齐声道：
//是！
EventSetAutoScript(108, 9, Scr_0x5C52)
EventSetAutoScript(108, 10, Scr_0x5C55)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(108, 8, 3, 0)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(108, 8, 2, 0)
WaitEventAutoScriptRun(14, false, false)
SetDlgLower(41-1-1, 0x00000000, false)
//婢女阿香：
//少爷！　请吧．．
EventSetAutoScript(108, 11, Scr_0x5C58)
EventSetAutoScript(108, 9, Scr_0x5C5D)
EventSetAutoScript(108, 10, Scr_0x5C5F)
WaitEventAutoScriptRun(30, false, false)
EventSetDirFrame(108, 8, 3, 0)
WaitEventAutoScriptRun(10, false, false)
EventSetAutoScript(108, 8, Scr_0x5C62)
WaitEventAutoScriptRun(16, false, false)
SetDlgUpper(33-1-1, 0x00000000, false)
//刘夫人：
//唉．．老爷又不在
//我实在不知该怎麽办才好
EventSetDirFrame(108, 8, 1, 0)
VideoUpdate(0, false)
SetDlgUpper(33-1-1, 0x00000000, false)
//刘夫人：
//月如、李公子．．
//你们世面见得多，这件事
//可否请你们替我拿个主意？
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//好的．．云姨，您放心！
//我们一定会帮您的
SetDlgUpper(33-1-1, 0x00000000, false)
//刘夫人：
//老身先谢过二位了．．
EventSetAutoScript(108, 8, Scr_0x5C64)
EventSetTriggerScript(129, 0, Scr_0x5CA7)
EventSetTriggerScript(108, 4, Scr_0x5C37)
EventSetTriggerScript(108, 5, Scr_0x5C43)
EventSetState(119, 2, true, false)
EventSetState(119, 3, true, true)
EventSetState(119, 4, true, true)

[Scr_0x5C37]
//婢　女：
//少夫人和少爷吵架後
//就不知道跑到哪里去了
ReplaceAndPause()
//婢　女：
//奴婢也觉得少夫人有些古怪
//但是．．少夫人对待少爷绝
//对是真心的
ReplaceAndPause()
//婢　女：
//我也觉得少夫人好可怜．．

[Scr_0x5C43]
//婢　女：
//少夫人好可怜．．

[Scr_0x5C46]
NPCMoveToBlock(22, 92, 0, 3, false)
NPCMoveToBlock(21, 92, 1, 3, false)

[Event_00108_00008_Auto]
EventWalkOneStep(-1, -1, 8, -4)
EventWalkOneStep(-1, -1, 8, -4)
EventWalkOneStep(-1, -1, 8, -4)
EventWalkOneStep(-1, -1, 8, -4)
EventWalkOneStep(-1, -1, 8, -4)
EventWalkOneStep(-1, -1, 8, -4)
EventWalkOneStep(-1, -1, 8, -4)
EventWalkOneStep(-1, -1, 8, -4)

[Scr_0x5C52]
NPCMoveToBlock(21, 92, 0, 3, false)
NPCSetDirFrame(3, 0)

[Scr_0x5C55]
NPCMoveToBlock(22, 93, 0, 3, false)
NPCSetDirFrame(1, 0)

[Scr_0x5C58]
WaitEventAutoScriptRun(2, false, false)
NPCMoveToBlock(22, 93, 0, 4, true)
NPCMoveToBlock(17, 98, 0, 4, true)
EventSetState(-1, -1, false, false)

[Scr_0x5C5D]
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(22, 93, 0, 4, true)
[Scr_0x5C5F]
NPCMoveToBlock(17, 98, 0, 4, true)
EventSetState(-1, -1, false, false)

[Scr_0x5C62]
NPCMoveToBlock(22, 92, 0, 4, true)

[Scr_0x5C64]
WaitEventAutoScriptRun(9, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(7, false, false)
NPCMoveToBlock(22, 91, 1, 2, true)
NPCMoveToBlock(16, 85, 1, 2, true)
NPCMoveToBlock(22, 80, 0, 2, true)
NPCMoveToBlock(21, 79, 0, 2, true)
NPCSetDirFrame(2, 0)

[Event_00108_00008_Trigger]
SetDlgUpper(33-1-1, 0x00000000, false)
//刘夫人：
//若是要用到钱
//尽管向云姨开口吧
VideoUpdate(0, false)
CashModify(30000, Null)
SetDlgBox(0x00000000)
//得三万文钱
[Scr_0x5C75]
VideoUpdate(0, false)
SetDlgUpper(33-1-1, 0x00000000, false)
//刘夫人：
//那麽．．一切拜托你们了
ReplaceAndPause()
CashModify(-30000, Scr_0x5C7D)
CashModify(30000, Null)
GotoWithNop(Scr_0x5C75, 0)
[Scr_0x5C7D]
SetDlgUpper(33-1-1, 0x00000000, false)
//刘夫人：
//还需要用钱吗？
GotoWithSelect(Scr_0x5C75)
VideoUpdate(0, false)
SetDlgUpper(33-1-1, 0x00000000, false)
//刘夫人：
//只要能救晋元
//花多少钱都没关系
CashModify(30000, Null)
SetDlgBox(0x00000000)
//得三万文钱
[Scr_0x5C89]
VideoUpdate(0, false)
SetDlgUpper(33-1-1, 0x00000000, false)
//刘夫人：
//那麽．．拜托你们了
ReplaceAndPause()
CashModify(-30000, Scr_0x5C91)
CashModify(30000, Null)
GotoWithNop(Scr_0x5C89, 0)
[Scr_0x5C91]
SetDlgUpper(33-1-1, 0x00000000, false)
//刘夫人：
//钱还不够吗？
GotoWithSelect(Scr_0x5C89)
VideoUpdate(0, false)
SetDlgUpper(33-1-1, 0x00000000, false)
//刘夫人：
//没关系～我这还有．．
CashModify(30000, Null)
SetDlgBox(0x00000000)
//得三万文钱
VideoUpdate(0, false)
Replace()
SetDlgUpper(33-1-1, 0x00000000, false)
//刘夫人：
//找道士来．．会有用吗？

[Scr_0x5CA2]
VideoUpdate(0, false)
//茅山道士：
//把钱凑足了再来找我吧！
[Scr_0x5CA5]
ReplaceAndPauseWithNop(Scr_0x5CCE, 0)

[Scr_0x5CA7]
//茅山道士：
//想请本山人作法吗
//那你可找对人了！
VideoRestore()
//只要有我茅山道人出马
//有灾消灾、有难解难
//任何妖魔鬼怪、恶灵鬼魅
//全部无所遁形！
VideoRestore()
//想当年～我和我师父太乙真人
//联手对付阴山鬼姥，我师父就
//只用一招．．
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//好了好了～我知道了
//既然道长法力高深，可否随
//我们到刘尚书府上，替刘尚
//书的公子收惊
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//茅山道士：
//哦．．是尚书的公子啊
//那麽价钱可要贵一点罗．．
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//要多少？您说！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//茅山道士：
//呵．．是这样子的
//通常～穷苦人家我会看情形
//最多可以打五折～做善事嘛
VideoRestore()
//高官富贾的话．．就照我们
//祖师爷所立下的规矩．．
//嗯．．我算算．．
VideoUpdate(0, false)
[Scr_0x5CCE]
//茅山道士：
//一万五、不二价！
GotoWithSelect(Scr_0x5CA5)
CashModify(-15000, Scr_0x5CA2)
VideoUpdate(0, false)
//茅山道士：
//成交！
EventSetState(-1, -1, false, false)
SceneSetScripts(119, Scr_0x5CDC, Null)
SceneEnter(119)
MusicStop()
FadeOut(0)
MusicPlay(32, true, 0.00)

[Scr_0x5CDC]
EventSetState(119, 3, false, false)
EventSetState(119, 4, false, false)
EventSetState(119, 5, true, true)
EventSetState(119, 6, true, true)
EventSetState(108, 8, false, false)
EventSetState(119, 7, true, true)
EventSetState(119, 8, true, false)
EventSetState(119, 9, true, false)
PartySetPos(16, 40, 0)
PartySetRole(3)
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//茅山道士：
//嗯．．嗯．．．。
EventSetDirFrame(119, 9, 0, 0)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(119, 9, 3, 0)
VideoUpdate(0, false)
//茅山道士：
//刘公子两眼泛青、经脉浮肿
//眉宇间凝结着紫黑之气．．
//八成是中了极厉害的巫毒
VideoUpdate(0, false)
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//巫毒？！
VideoUpdate(0, false)
//茅山道士：
//所谓巫毒～是用咒术加上
//毒蛊复合施在人身上
VideoRestore()
//只有道行很高的巫蛊师
//或是毒物所幻化的精怪
//才会使这类的邪术。
VideoRestore()
//通常．．中了此种毒
//只有施毒的人才能解
VideoUpdate(0, false)
//刘夫人：
//那．．我儿子．．
//我儿子还有救吗．．？
EventSetDirFrame(119, 9, 0, 0)
VideoUpdate(0, false)
//茅山道士：
//很难说．．　刘公子体内似乎
//还有另一种不明的毒抑制住了
//巫蛊的毒性。短时间之内毒性
//应该不会发作
VideoRestore()
//不过～　奇怪的是．．
//一般人若同时中了二种这样
//的毒。即使毒未发作，不出
//七日之内早就元气枯竭而亡了
VideoRestore()
//照刘公子的脉象推算，中毒
//至少已有一个月以上了．．
//他是不是服了什麽大补仙丹
//竟然能支撑到现在！？
VideoUpdate(0, false)
//刘夫人：
//没．．没有啊
//道长～会不会是您看错了？
//自从那时候起，只有我媳妇
//熬一些草药给我儿子服用
VideoRestore()
//其他大夫开的药因为我儿子
//吃下去就会呕吐，所以就没
//再给他吃了
VideoUpdate(0, false)
//茅山道士：
//事情并不单纯，我想～
//必须到刘公子平时所居住的
//房间查看．．
EventSetState(119, 5, false, false)
EventSetState(119, 6, false, false)
EventSetState(119, 7, false, false)
EventSetState(119, 8, false, false)
EventSetState(119, 9, false, false)
SceneEnter(126)
FadeOut(0)

[Scene_00126_Enter]
PartySetPos(25, 34, 1)
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
ViewportMove(4, 2, 10)
EventSetDirFrame(126, 4, 3, 0)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(126, 4, 0, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//茅山道士：
//哎呀．．好重的妖气啊
//妖怪一定就在这附近！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//刘夫人：
//道长．．请您想想办法
EventSetState(126, 4, false, false)
EventSetState(126, 5, true, false)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//茅山道士：
//您放心～
//本山人是有备而来的
EventSetDirFrame(126, 5, 0, 1)
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//铃～　铃～　铃．．
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//茅山道士：
//天灵灵、地灵灵
//四方神明听我令．．
EventSetDirFrame(126, 5, 0, 2)
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//唔！？
VideoUpdate(0, false)
EventSetAutoScript(126, 5, Scr_0x5DE5)
WaitEventAutoScriptRun(12, false, false)
SetDlgLower(0, 0x00000000, false)
//茅山道士：
//这．．．．！？
SetDlgUpper(0, 0x00000000, false)
//刘夫人：
//道长，怎麽回事？
VideoUpdate(0, false)
EventSetDirFrame(126, 5, 0, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//茅山道士：
//喔．．没事．．没事！
EventSetDirFrame(126, 5, 0, 13)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(126, 5, 0, 14)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(126, 5, 0, 13)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(126, 5, 0, 14)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(126, 5, 0, 15)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(126, 5, 0, 16)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(0, 0x00000000, false)
//茅山道士：
//看我的～张天师金刚降魔符！
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(126, 5, 0, 17)
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//咦！？
EventSetDirFrame(126, 5, 0, 18)
WaitEventAutoScriptRun(4, false, false)
EventSetAutoScript(126, 5, Scr_0x5DE5)
WaitEventAutoScriptRun(12, false, false)
EventSetState(126, 5, false, false)
EventSetState(126, 4, true, true)
EventSetDirFrame(126, 4, 3, 0)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(126, 4, 0, 0)
WaitEventAutoScriptRun(5, false, false)
EventSetDirFrame(126, 4, 3, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(0, 0x00000000, false)
//茅山道士：
//大胆妖孽，竟敢戏弄本天师
//还不快给我现形！
WaitEventAutoScriptRun(5, false, false)
//茅山道士：
//．．．．．．．．．。
EventSetState(126, 4, false, false)
EventSetState(126, 5, true, false)
EventSetDirFrame(126, 5, 0, 0)
VideoUpdate(0, false)
EventSetDirFrame(126, 5, 0, 19)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(126, 5, 0, 20)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(126, 5, 0, 21)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(126, 5, 0, 22)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(0, 0x00000000, false)
//茅山道士：
//休怪我拿出真本领了！
VideoRestore()
//太上老君、急急如令
//天兵天将、速速驾临！
VideoUpdate(0, false)
EventSetAutoScript(126, 5, Scr_0x5DF1)
WaitEventAutoScriptRun(6, false, false)
EventSetState(127, 0, true, false)
WaitEventAutoScriptRun(0, false, false)
SetDlgCenter(0, 0x00000000, false)
//哇．．救命呀！
WaitEventAutoScriptRun(8, false, false)
EventSetAutoScript(126, 2, Scr_0x5E05)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(126, 3, 0, 0)
WaitEventAutoScriptRun(6, false, false)
SetDlgUpper(0, 0x00000000, false)
//刘夫人：
//道长！　道长．．
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//茅山道士：
//哇～我还想活命啊！
//您另请高明吧
EventSetState(126, 4, false, false)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(126, 2, 1, 0)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(126, 2, 0, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//刘夫人：
//怎麽办！元儿若是有个三长
//两短，叫我怎麽向刘家列祖
//列宗交代啊．．
EventSetAutoScript(126, 2, Scr_0x5E08)
WaitEventAutoScriptRun(15, false, false)
ViewportMove(-2, -1, 20)
EventSetDirFrame(126, 3, 3, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgUpper(3-3-1, 0x00000000, false)
//林月如：
//花了大把银子
//就请来这个笨蛋！？
EventSetDirFrame(126, 3, 2, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//可能我们这回遇到的
//真的是非常厉害的妖怪
//而且就躲在这尚书府中
EventSetState(126, 3, false, false)
PartySetRole(31)
EventSetState(136, 0, true, true)
SceneSetScripts(108, Scr_0x5E27, Null)
ReplaceAndPause()

[Scr_0x5DD1]
EventWalkOneStep(-1, -1, 8, 0)
EventWalkOneStep(-1, -1, 8, 0)
EventWalkOneStep(-1, -1, 8, 0)
EventWalkOneStep(-1, -1, 8, 0)
EventWalkOneStep(-1, -1, 8, -4)
EventWalkOneStep(-1, -1, 8, -4)
NPCSetDirFrame(1, 0)

[Event_00119_00003_Trigger]
//婢女阿香：
//不知怎麽搞的
//少爷突然又陷入昏睡

[Event_00119_00004_Trigger]
//婢女阿萍：
//夫人吩咐．．
//不许任何人打扰少爷

[Event_00119_00007_Trigger]
//刘夫人：
//唉．．　怎麽办．．
//这孩子究竟出了什麽事

[Scr_0x5DE5]
NPCSetFrame(3)
NPCSetFrame(4)
NPCSetFrame(5)
ReplaceAndPause()
NPCSetFrame(6)
NPCSetFrame(7)
NPCSetFrame(8)
NPCSetFrame(9)
NPCSetFrame(10)
NPCSetFrame(11)
NPCSetFrame(12)

[Scr_0x5DF1]
NPCSetFrame(23)
NPCSetFrame(24)
NPCSetFrame(25)
NPCSetFrame(26)
NPCSetFrame(27)
NPCSetFrame(28)
NPCSetFrame(29)
NPCSetFrame(30)
NPCSetFrame(31)
NPCSetFrame(32)
NPCSetFrame(33)
NPCSetFrame(34)
ReplaceAndPause()
NPCSetFrame(35)
ReplaceAndPause()
EventSetState(-1, -1, false, false)

[Event_00126_00006_Auto]
EventWalkOneStep(-1, -1, -10, 5)
GotoWithNop(Event_00126_00006_Auto, 0)

[Scr_0x5E05]
NPCMoveToBlock(28, 35, 0, 3, false)
NPCMoveToBlock(26, 36, 1, 3, false)

[Scr_0x5E08]
NPCMoveToBlock(22, 40, 1, 3, false)
NPCMoveToBlock(26, 44, 1, 3, false)
EventSetState(-1, -1, false, false)

[Event_00135_00005_Trigger]
//茅山道士：
//什麽！？
//要退回那一万五！
VideoRestore()
//我的梵音铃、桃木剑全没了
//还有那十二张天师符，是我
//用每张一千文钱买来的！
VideoRestore()
//作这趟生意，不旦钱没赚到
//还害我的头发给烧掉一半！
ReplaceAndPause()
//茅山道士：
//我没有找你们赔就不错了
//居然还想退钱！

[Event_00108_00012_Auto]
Call(Scr_0x5E21, 0, 0)
EventModifyPos(-1, -1, 12, -5)
Call(Scr_0x5E24, 0, 0)
EventModifyPos(-1, -1, 12, -5)
GotoWithNop(Event_00108_00012_Auto, 0)

[Scr_0x5E21]
NPCSetFrame(4)
EventModifyPos(-1, -1, 10, -6)

[Scr_0x5E24]
NPCSetFrame(5)
EventModifyPos(-1, -1, 10, -6)

[Scr_0x5E27]
VideoWave(2, 0)
EventSetState(108, 12, true, false)
PartyWalkToBlock(28, 70, 0, 2)
WaitEventAutoScriptRun(10, false, false)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(5, false, false)
RoleSetDirFrame(0, 2, 0)
EventSetState(108, 12, false, false)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(1, 2, 0)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(1, 3, 0)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//好像有什麽东西飞过去了！？
RoleSetDirFrame(1, 2, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//我也没瞧清楚．．
RoleSetDirFrame(1, 3, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//嗯？　好浓的花香
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(10, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(8, false, false)
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//是牡丹花的香味．．
//怎麽突然变得这麽浓！？
PartyWalkToBlock(29, 71, 0, 2)
WaitEventAutoScriptRun(5, false, false)
PartyWalkToBlock(28, 71, 1, 2)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//唔．．．怎麽．．
//我觉得好困、想睡觉．．
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//这香味有点古怪．．
VideoRestore()
//月如！暂时别呼吸
//咱们尽快离开这里
EventSetState(114, 11, true, true)
EventSetState(115, 0, true, true)
EventSetState(116, 0, true, true)
EventSetState(118, 11, true, true)
EventSetState(122, 0, true, true)
EventSetState(108, 13, true, true)
EventSetState(108, 14, true, true)
EventSetState(119, 11, true, true)
EventSetState(119, 12, true, true)
EventSetState(119, 13, true, true)
EventSetState(108, 4, false, false)
EventSetState(108, 5, false, false)
EventSetState(114, 9, false, false)
EventSetState(114, 10, false, false)
EventSetState(0, 0, false, false)
EventSetState(117, 0, false, false)
EventSetState(118, 5, false, false)
EventSetState(118, 6, false, false)
EventSetState(118, 7, false, false)
EventSetState(121, 3, false, false)
EventSetState(119, 2, false, false)
EventSetState(100, 38, true, false)
EventSetState(100, 32, false, false)
EventSetState(0, 0, false, false)
EventSetState(100, 14, false, false)
EventSetState(100, 15, false, false)
EventSetState(100, 16, false, false)
EventSetState(100, 35, true, true)
EventSetState(100, 36, true, true)
EventSetState(100, 37, true, true)
EventSetState(0, 0, true, true)
EventSetState(100, 1, false, false)
EventSetState(100, 2, false, false)
EventSetTriggerScript(100, 12, Scr_0x5EC8)
EventSetTriggerScript(100, 13, Scr_0x5ED0)
SceneSetScripts(114, Scr_0x5E88, Null)
SceneSetScripts(115, Scr_0x5E88, Null)
SceneSetScripts(118, Scr_0x5E88, Null)
SceneSetScripts(119, Scr_0x5E88, Null)
SceneSetScripts(121, Scr_0x5E88, Null)
SceneSetScripts(116, Scr_0x5E88, Null)
SceneSetScripts(122, Scr_0x5E88, Null)
SceneSetScripts(123, Scr_0x5E88, Null)
SceneSetScripts(124, Scr_0x5E88, Null)
ReplaceAndPause()
[Scr_0x5E88]
VideoWave(2, 0)
MusicPlay(32, true, 0.00)

[Event_00100_00012_Trigger]
//守　卫：
//这里是刘尚书府
ReplaceAndPause()
[Event_00100_00013_Trigger]
//守　卫：
//大人上早朝去了，尚未归来

[Event_00100_00014_Trigger]
//守卫阿德：
//我们正在执勤中
//不可以跟别人聊天

[Event_00100_00016_Trigger]
//守卫阿方：
//夫人身边的婢女都是美人
//尤其是阿香．．在彩依小姐
//还没进尚书府之前，一直是
//大家心目中的偶像
VideoRestore()
//不过．．说到美女．．
//尚书府的天字第一号大美人
//那是非彩依小姐莫属啊
VideoRestore()
//唉．．彩依小姐刚来没多久
//就嫁给少爷了。当时呀～
//许多弟兄都失恋了呢
ReplaceAndPause()
//守卫阿方：
//嘘．．这些话可不能让
//夫人听见了

[Event_00100_00017_Trigger]
//守卫阿坤：
//府里的规矩很严。守卫的士
//兵不得与内苑的婢女交谈
//除了扫地、煮饭的低等下人
//内苑的婢女亦不得擅自外出

[Scr_0x5EAD]
VideoUpdate(0, false)
//守卫阿辉：
//呜．．那就算了
ReplaceAndPause()
[Event_00100_00018_Trigger]
//守卫阿辉：
//林小姐、李公子．．
//可否帮小的一个忙？
GotoWithSelect(Scr_0x5EAD)
VideoUpdate(0, false)
//守卫阿辉：
//小的．．有一封书信
//想．．想请您．．替我
//拿给阿香小姐．．
AddItem(227, 0)
SetDlgBox(0x00000000)
//得到一封情书
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//守卫阿辉：
//拜托您了．．
//千万不可让旁人知道
ReplaceAndPause()
//守卫阿辉：
//我只有在每天早上
//阿香陪夫人去庙里上香时
//才可以偷偷瞄她一眼．．

[Scr_0x5EC8]
//守　卫：
//今天吹的是什麽风？
//院子内牡丹花的香味
//居然在大门口也闻的到
VideoRestore()
//我在这里当差这麽久了
//这种事还是头一回碰到

[Scr_0x5ED0]
//守　卫：
//刚才进来的那位茅山道士
//仓惶的跑出去了
ReplaceAndPause()
[Scr_0x5ED4]
//守　卫：
//没有尚书大人的命令
//士兵们不可以进入府院内

[Event_00118_00006_Trigger]
//婢女阿香：
//林小姐好、李公子好

[Event_00118_00007_Trigger]
//婢女阿萍：
//林小姐好、李公子好

[Scr_0x5EDE]
EventSetTriggerMode(-1, -1, false, 2)
VideoUpdate(0, false)
SetDlgUpper(41-1-1, 0x00000000, false)
//阿香低声道：
//这是．．阿辉写给我的！？
VideoRestore()
//谢谢你们．．我．．
//我这里有块玉佩，可否请
//你们替我还给阿辉？
GotoWithSelect(Scr_0x5F04)
VideoUpdate(0, false)
SetDlgUpper(41-1-1, 0x00000000, false)
//阿香低声道：
//这是昨天，他趁夫人没注
//意时，偷偷放到我提的篮
//子内的。
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//哦？　你怎麽知道是他偷放的
VideoUpdate(0, false)
SetDlgUpper(41-1-1, 0x00000000, false)
//阿香低声道：
//除了他还会有谁？
//请你们对他说：他的心意
//我能了解，但是这东西太
//贵重了，我不能收。
AddItem(228, 0)
ReplaceAndPause()
SetDlgUpper(41-1-1, 0x00000000, false)
//阿香低声道：
//那个笨蛋～差一点害死我
//夫人发现篮子里多了这块
//玉佩时，我差点没有吓死
VideoRestore()
//幸好我编了谎，说是刚才
//在路上捡到的，才瞒过夫人

[Scr_0x5F04]
VideoUpdate(0, false)
SetDlgUpper(41-1-1, 0x00000000, false)
//婢女阿香：
//那就算了．．不过
//我还是要谢谢你们

[Scr_0x5F0A]
EventSetTriggerMode(-1, -1, false, 2)
VideoUpdate(0, false)
EventSetState(100, 14, false, false)
EventSetState(100, 15, true, true)
//守卫阿辉：
//这玉佩不是我的呀！
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//不是你送给阿香的！
//那会是谁送的？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//守卫阿辉：
//我也不知道！
ReplaceAndPause()
//守卫阿辉：
//难道．．难道有别的人
//也在暗恋阿香！

[Scr_0x5F1D]
EventSetTriggerMode(-1, -1, false, 2)
VideoUpdate(0, false)
//守卫阿德：
//那．．那块玉佩．．
//是我偷．．偷偷送给阿香的
//请你们把它．．还给我．．
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//堂堂一个大男人，喜欢哪
//个姑娘就直接跟她说嘛！
//何必如此偷偷摸摸的？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//守卫阿德：
//可是～　我．．
//我每次．．遇到她．．就
//就．．说不出．．话
EventSetTriggerScript(118, 6, Scr_0x5F35)
ReplaceAndPause()
//守卫阿德：
//拜托．．这件事
//请你千万不要向别人提起

[Scr_0x5F35]
SetDlgUpper(41-1-1, 0x00000000, false)
//婢女阿香：
//玉佩是阿德送我的！？
//．．他也在暗恋我！？
VideoRestore()
//可是．．我喜欢的是少爷
//有朝一日～我要成为刘家
//的二少奶奶。请你跟他们
//说．．别再痴心妄想了！
ReplaceAndPause()
SetDlgUpper(41-1-1, 0x00000000, false)
//婢女阿香：
//唉．．为什麽彩依就可以
//嫁给少爷，我就不行？
//凭我的姿色，并不输给她呀！

[Event_00108_00013_Trigger]
SetDlgCenter(0, 0x00000000, false)
//此人熟睡中．．

[Event_00119_00013_Trigger]
EventSetTriggerMode(-1, -1, false, 2)
SetDlgCenter(0, 0x00000000, false)
//床上躺着尚书夫人
//而刘晋元却不见了．．
ReplaceAndPause()
SetDlgLower(0, 0x00000000, false)
//林月如：
//云姨～　云姨～！
ReplaceAndPause()
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//没用的．．她们一定是中了
//什麽法术，怎麽叫也叫不醒
VideoUpdate(0, false)
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//怎麽办．．
//李大哥～你可有办法？
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//若继续待在这屋内，恐怕
//连我们也会有危险．．
VideoRestore()
//我们先到外面，看看是否
//能请人来帮忙
ReplaceAndPauseWithNop(Event_00108_00013_Trigger, 0)

[Scr_0x5F64]
//胖妓女：
//我就是小莲儿
//公子、找我有何贵事？
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//你．．是．．小莲儿姑娘！？
SetDlgUpper(0, 0x00000000, false)
//胖妓女：
//是啊．．！
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//没事．．我找错人了
ReplaceAndPauseWithNop(Event_00132_00019_Trigger, 0)

[Event_00100_00027_Trigger]
//妓女：
//公子、来嘛～进来坐嘛～

[Event_00100_00029_Trigger]
//妓女：
//公子、里面坐嘛～
//咱们怡红院的姑娘最漂亮了

[Event_00127_00008_Trigger]
//算命仙：
//呵～　公子，我们又见面了！
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//您是．．．？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//算命仙：
//公子真是贵人多忘事
VideoRestore()
//贫道曾经在苏州替你和另一位
//小姑娘看过相。结果公子说：
//贫道胡言乱语，拒不付钱
//你忘记了吗？
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//对对对．．我想起来了
//那时你说我会有桃花运
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//算命仙：
//贫道还推算出，那位小姑娘
//会遭遇人生中的劫难．．
//结果．．您认为准不准呀？
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//现在回想．．道长说的
//还真是一字不差！
VideoRestore()
//当初～实在不好意思
//我现在把看相的钱补给您
VideoUpdate(0, false)
[Scr_0x5F9D]
SetDlgUpper(0, 0x00000000, false)
//算命仙：
//呵～　过去就算了
ReplaceAndPause()
CashModify(-500, Scr_0x5F9D)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//道长，这些钱您收下吧
//要不然我们实在过意不去呢
SetDlgBox(0x00000000)
//付给算命仙五百文钱
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//算命仙：
//嗯～看在你这份心上
//贫道再奉送你一句箴言
//"魔非魔、道非道，善恶在人心"
//"慾非慾、情非情，姻缘由天定"
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//．．．．．．不懂。
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//算命仙：
//时候到了，你自然会懂
ReplaceAndPause()
SetDlgUpper(0, 0x00000000, false)
//算命仙：
//魔非魔、道非道，善恶在人心
//慾非慾、情非情，姻缘由天定
//谨之～　慎之～

[Event_00100_00030_Trigger]
WaitEventAutoScriptRun(0, false, false)
SetDlgLower(0, 0x00000000, false)
//张大夫：
//我行医二十余年
//从来没见过那种怪病
VideoUpdate(0, false)
//赵大夫：
//是啊，我也查不出来
//刘公子的病症实在太奇特了
VideoUpdate(0, false)
//张大夫：
//我想～也许不是生病，搞不
//好是中了什麽奇门邪术的毒
//要不然怎麽可能数十位名医
//联手也诊断不出病因
ReplaceAndPause()
WaitEventAutoScriptRun(0, false, false)
SetDlgLower(0, 0x00000000, false)
//张大夫：
//我只能说，那已经不是医者
//能做到的范围了。换句话说
//要救刘公子，可能要想别的
//途径

[Event_00100_00031_Trigger]
WaitEventAutoScriptRun(0, false, false)
//赵大夫：
//唉．．实在丢脸
//刘夫人请我们师兄弟前来
//医治尚书公子的病。
VideoRestore()
//可是我们花了七天
//试过所有的方法，还是没用
//只好放弃了
ReplaceAndPause()
WaitEventAutoScriptRun(0, false, false)
//赵大夫：
//现在我们师兄弟没脸在这
//京城混下去了，想明天就
//离开回家乡

[Event_00127_00009_Trigger]
SetDlgLower(0, 0x00000000, false)
//醉汉甲：
//呵．．啊．．我告诉你呀！
//咱们这里出了一位神秘的
//美女，知道是谁吗？
VideoUpdate(0, false)
//醉汉乙：
//不用你说大家都知道
//．．是刘家少奶奶！
VideoUpdate(0, false)
//醉汉甲：
//哈哈～大家都在猜．．
//她的出身、她的来历～哈
//大家通通不知道她是哪里
//来的，只有我知道！
VideoUpdate(0, false)
//醉汉乙：
//哦～你倒是说说看！
VideoUpdate(0, false)
//醉汉甲：
//她叫～彩依，对不对？
//她是皇上的亲妹妹～宁国公主
VideoRestore()
//听说是因为她的皇帝哥哥要把
//她嫁给回纥王子和亲，她不肯
//就在迎亲的途中逃走，躲着、
//躲着，就躲到尚书府去了
VideoUpdate(0, false)
//醉汉乙：
//不对、不对！我说的才对
//我在洛阳见过彩依姑娘
//她是迎春阁的第一名妓
//以前她跟我是老相好呢！
VideoUpdate(0, false)
//醉汉甲：
//你醉啦！　在胡说些什麽呀
//你什麽时候去过洛阳了？
VideoUpdate(0, false)
//醉汉乙：
//你才醉了呢！　人家是尚书
//是朝廷大臣，怎麽会认不出
//来她是公主
ReplaceAndPause()
//醉汉：
//嗝～　你才醉了，我没醉！

[Event_00129_00013_Trigger]
//澡堂女客甲：
//洗完澡真舒服～！
ReplaceAndPause()
//澡堂女客甲：
//这家澡堂自从推出百花香浴
//後，生意变得好的不得了

[Event_00129_00014_Trigger]
//澡堂女客乙：
//我家那个死鬼呀～
//居然说我身上常有股怪味
VideoUpdate(0, false)
//澡堂女客甲：
//我怎麽闻不出来？！
WaitEventAutoScriptRun(0, false, false)
//澡堂女客乙：
//还不都是刘家少夫人害的
VideoUpdate(0, false)
//澡堂女客甲：
//那个女人！　关她什麽事？
VideoUpdate(0, false)
//澡堂女客乙：
//还不是那天，刘府订了两只
//人蔘，要我家相公给送过去
//恰巧遇到那位少夫人
VideoRestore()
//我相公回来後，就一整天魂不
//守舍，嘴里直嚷嚷说：好香～
//好香～。而我只要靠近他时
//他就嫌我身上有骚味
ReplaceAndPause()
//澡堂女客乙：
//为了讨我相公的欢心
//我只好天天来这泡香水浴
//看看是否能像她一样迷人

[Event_00100_00009_Auto]
NPCMoveToBlock(14, 47, 0, 3, false)
[Scr_0x6037]
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(14, 47, 1, 2, true)
WaitEventAutoScriptRun(12, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(8, false, false)
NPCMoveToBlock(22, 39, 1, 2, true)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(22, 39, 0, 2, true)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(9, false, false)
ReplaceAndPauseWithNop(Scr_0x6037, 0)

[Scr_0x6043]
WaitEventAutoScriptRun(5, false, false)
NPCMoveToBlock(22, 39, 0, 3, false)
NPCMoveToBlock(13, 30, 0, 3, false)
NPCMoveToBlock(17, 26, 0, 3, false)
NPCMoveToBlock(13, 22, 0, 3, false)
NPCMoveToBlock(15, 20, 0, 3, false)
NPCMoveToBlock(11, 16, 1, 3, false)
EventSetState(-1, -1, false, false)

[Event_00100_00009_Trigger]
EventSetTriggerMode(-1, -1, false, 2)
EventSetAutoScript(-1, -1, Scr_0x6043)
//婢女阿萍：
//林小姐、李公子！
//夫人有要紧的事，想请
//二位尽快回府
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//哦～是什麽事？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//婢女阿萍：
//是．．是．．
//夫人说：您回去就知道了
VideoUpdate(0, false)
Replace()
//婢女阿萍：
//奴婢话已带到，奴婢告退

[Event_00127_00006_Trigger]
SetDlgLower(0, 0x00000000, false)
//客人甲：
//刘尚书的公子到底得了什麽怪
//病，已经好久没见到他人影了。
VideoUpdate(0, false)
//客人乙：
//我也不太清楚，听我在尚书府
//做事的朋友说，每天一犯起病
//来，痛不欲生，难过的要命。

[Event_00100_00032_Auto]
NPCSetDirFrame(0, 0)
GotoWithProbability(5, Event_00100_00032_Auto)
NPCMoveToBlock(13, 32, 1, 3, false)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(6, false, false)
NPCMoveToBlock(15, 34, 0, 2, true)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(6, false, false)
NPCMoveToBlock(11, 30, 0, 3, false)
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(11, 30, 0, 2, true)
ReplaceAndPauseWithNop(Event_00100_00032_Auto, 0)

[Event_00100_00032_Trigger]
//小童：
//呜．．．
//我把彩依姐姐给的花
//掉到河里去了
VideoRestore()
//可是～水好脏，我不敢
//下去拿
ReplaceAndPause()
//小童：
//昨天我抓到一只蝴蝶
//彩依姐姐看到了，就拿
//一朵花和十文钱跟我交换
VideoRestore()
//後来彩依姐姐把蝴蝶放走
//那些钱被我娘拿去，刚才
//我又不小心把花弄掉了
ReplaceAndPause()
//小童：
//我跟你说哦～彩依姐姐很
//漂亮喔，我爹和我哥哥都
//在偷偷喜欢她呢
ReplaceAndPause()
//小童：
//我也喜欢彩依姐姐！

[Event_00100_00033_Trigger]
SetDlgLower(0, 0x00000000, false)
//才　子：
//小姐．．有没有空啊？
//我请你去喝茶，好不好？
VideoUpdate(0, false)
//佳　人：
//不要啦～人家会不好意思
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//才　子：
//别这麽说嘛～
//我可是诚心诚意的邀请你呢
VideoUpdate(0, false)
//佳　人：
//不行啦．．！
//太晚回去，爹娘会骂我的
ReplaceAndPause()
SetDlgLower(0, 0x00000000, false)
//才　子：
//真是太不给面子了
//我玉面书生想要泡的妞
//还没有攻不下来的！

[Event_00100_00034_Trigger]
//佳　人：
//嗯～．．真是不好意思

[Event_00100_00035_Trigger]
//小童：
//哇～你们快来看！
//水里有死人耶
NPCSetDirFrame(1, 0)

[Event_00100_00036_Trigger]
//士兵：
//一定又是喝醉酒
//掉进运河里淹死的醉汉

[Event_00100_00037_Trigger]
//士兵：
//唔．．这具屍首全是酒味！
ReplaceAndPause()
//士兵：
//少惹麻烦，还是别去碰为妙

[Scr_0x60BA]
VideoUpdate(0, false)
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//呜．．好臭的酒味！
ReplaceAndPause()
[Event_00100_00038_Trigger]
SetDlgCenter(0, 0x00000000, false)
//运河中漂浮着一个人
//要把他捞起来吗？
GotoWithSelect(Scr_0x60BA)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//这样泡在水里太可怜了
//咱们把他捞起来吧
FadeOut(0)
EventModifyPos(100, 35, 0, -48)
EventModifyPos(-1, -1, 16, -56)
EventSetState(100, 36, false, false)
EventSetState(100, 37, false, false)
EventSetState(100, 15, true, true)
EventSetState(100, 16, true, true)
PartySetRole(13)
PartySetPos(12, 23, 0)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(10, false, false)
EventSetState(-1, -1, false, false)
EventSetState(100, 39, true, true)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//酒剑仙：
//呵～～～～
//这一觉睡得好饱！
VideoUpdate(0, false)
//小童：
//哇～！　死人会说话！
EventSetAutoScript(100, 35, Scr_0x615F)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(100, 39, 0, 0)
WaitEventAutoScriptRun(5, false, false)
EventSetDirFrame(100, 39, 1, 0)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(100, 39, 0, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(100, 39, 3, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(7-1-1, 0x00000000, false)
//酒剑仙：
//嗯？我怎麽全身湿答答的？
//咦．．这又是哪里？
PartyWalkToBlock(11, 23, 1, 2)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//师．．师父！！！
VideoUpdate(0, false)
EventSetDirFrame(100, 39, 2, 0)
WaitEventAutoScriptRun(5, false, false)
SetDlgLower(7-1-1, 0x00000000, false)
//酒剑仙：
//哦！　怎麽又是你这小子？
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//师父！　好久没见到您了
//您老人家可安好！？
VideoUpdate(0, false)
SetDlgLower(7-1-1, 0x00000000, false)
//酒剑仙：
//少肉麻了～谁是你师父啊？
//我只是为了赔你一壶酒
//教了你一招剑法而已
//我酒剑仙可是从来不收徒弟的
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//不～　一日为师、终身为父
//在晚辈的心目中，您就像我
//的师父一样
VideoUpdate(0, false)
SetDlgLower(7-1-1, 0x00000000, false)
//酒剑仙：
//好啦好啦～随便你怎麽叫
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//老前辈，你怎麽会泡在河里呢
//刚才我们还以为你是死人哩
VideoUpdate(0, false)
SetDlgLower(7-1-1, 0x00000000, false)
//酒剑仙：
//哈哈～我想起来了！
//大概是酒馆的老板趁我熟睡
//时，把我丢入河中的
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//他们怎麽可以这样对待您！
VideoUpdate(0, false)
SetDlgLower(7-1-1, 0x00000000, false)
//酒剑仙：
//哈哈～差不多啦！
//我喝光了酒馆私酿的陈年绍兴
//身上又没有钱付给他们，双方
//算是扯平啦
VideoUpdate(0, false)
SetDlgUpper(3-4-1, 0x00000000, false)
//林月如：
//这．．．．．
//李大哥～你的剑法就是．．
//向这位奇怪的老伯学的！？
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//月如！我不许你这样说前辈
WaitEventAutoScriptRun(8, false, false)
SetDlgLower(7-1-1, 0x00000000, false)
//酒剑仙：
//嗯～　好奇怪的花香
EventSetDirFrame(100, 39, 1, 0)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(7-1-1, 0x00000000, false)
//酒剑仙：
//好像是这里面传出来的．．
//唔～　好重的妖气呀！
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//前辈也看得出里面有妖怪？
EventSetDirFrame(100, 39, 2, 0)
VideoUpdate(0, false)
SetDlgLower(7-1-1, 0x00000000, false)
//酒剑仙：
//开玩笑？
//什麽妖魔鬼怪我没见过
//用肚脐眼也看得出来
//这处府邸被施了咒！
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//师父可有办法对付这妖怪？
VideoUpdate(0, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//酒剑仙：
//这妖怪长什麽样子？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//其实～连个影子也没瞧见过
//只知道现在尚书府内除了我们
//全部的人都中了妖术昏迷不醒
VideoUpdate(0, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//酒剑仙：
//啧～连对方是啥东西
//也不知道，怎麽打？
VideoRestore()
//这样子吧！我来开坛作法
//先破了这妖怪的幻术，逼
//他现形再说
VideoRestore()
//你们去给我弄几项道具来．．
//"蜡烛"、"符纸"、"檀香"，还有～
//顺便给我带一壶上好的"酒"来

[Scr_0x615F]
NPCMoveToBlock(16, 30, 0, 3, false)
EventSetState(-1, -1, false, false)

[Event_00100_00039_Trigger]
JumpIfItemCountLessThan(21, 1, Scr_0x6175)
JumpIfItemCountLessThan(23, 1, Scr_0x6175)
JumpIfItemCountLessThan(22, 1, Scr_0x6175)
JumpIfItemCountLessThan(26, 1, Scr_0x6179)
RemoveItem(21, 1, Null)
RemoveItem(23, 1, Null)
RemoveItem(22, 1, Null)
RemoveItem(26, 1, Null)
SetDlgUpper(7-1-1, 0x00000000, false)
//酒剑仙：
//很好！都弄齐了。让你们这些
//小娃儿瞧瞧我尘封已久的独门
//绝招～醉仙封魔大法！
EventSetState(-1, -1, false, false)
SceneSetScripts(115, Scr_0x617E, Null)
SceneEnter(115)
FadeOut(0)
MusicPlay(32, true, 0.00)

[Scr_0x6175]
//酒剑仙：
//蜡烛、符纸、檀香，还有一壶酒
ReplaceAndPauseWithNop(Event_00100_00039_Trigger, 0)

[Scr_0x6179]
//酒剑仙：
//酒呢～？要我施展真功夫
//怎麽可以没有酒！
ReplaceAndPauseWithNop(Event_00100_00039_Trigger, 0)

[Scr_0x617E]
EventSetStateSequence(115, 3, 115, 11, true, true)
EventSetState(115, 12, true, true)
EventSetState(115, 13, true, true)
PartySetPos(34, 32, 1)
RoleSetDirFrame(0, 3, 0)
RoleSetDirFrame(1, 3, 0)
PartySetRole(1)
ReplaceAndPause()

[Scr_0x6187]
SetDlgCenter(0, 0x00000000, false)
//月如好像不是往这里去的
RoleMoveOneStep(-16, -8, 0)

[Event_00115_00012_Trigger]
EventSetTriggerMode(-1, -1, false, 2)
EventSetTriggerScript(115, 2, Scr_0x6187)
WaitEventAutoScriptRun(6, false, false)
NPCSetDirFrame(0, 1)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(0, 2)
WaitEventAutoScriptRun(20, false, false)
NPCSetDirFrame(0, 3)
WaitEventAutoScriptRun(8, false, false)
NPCSetDirFrame(0, 4)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(0, 5)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//酒剑仙：
//啊～　这酒来劲．．
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(0, 7)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(0, 6)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(0, 7)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(0, 6)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(0, 7)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(0, 6)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(0, 7)
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(0, 8)
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(0, 9)
WaitEventAutoScriptRun(0, false, false)
NPCSetDirFrame(0, 10)
WaitEventAutoScriptRun(0, false, false)
NPCSetDirFrame(0, 11)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(7-1-1, 0x00000000, false)
//酒剑仙：
//我要开始施法罗！
//我在还没完成以前，你们二人
//千万不要离开我七步以外
VideoRestore()
//无论发生了什麽事，切记不可
//轻举妄动。要不然有什麽不良
//後果，我可不负责喔！
VideoUpdate(0, false)
PlaySound(265)
SetDlgCenter(0, 0x00000000, false)
//喝～！
MusicPlay(64, true, 0.00)
WaitEventAutoScriptRun(8, false, false)
Call(Scr_0x6220, 0, 0)
Call(Scr_0x6245, 0, 0)
Call(Scr_0x6220, 0, 0)
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(0, 21)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(0, 19)
WaitEventAutoScriptRun(6, false, false)
NPCSetDirFrame(0, 22)
WaitEventAutoScriptRun(0, false, false)
NPCSetDirFrame(0, 23)
EventSetAutoScript(115, 3, Scr_0x6212)
WaitEventAutoScriptRun(32, false, false)
MusicStop()
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//师．．师父！？
PartyWalkToBlock(34, 32, 1, 4)
PartyWalkToBlock(36, 34, 0, 4)
SetDlgCenter(0, 0x00000000, false)
//Ｚ．．Ｚ．．Ｚ．．～
WaitEventAutoScriptRun(8, false, false)
SetDlgUpper(3-4-1, 0x00000000, false)
//林月如：
//他．．睡着了！？
SetDlgLower(1-4-1, 0x00000000, false)
//李逍遥：
//看起来～好像是的．．
VideoUpdate(0, false)
SetDlgUpper(3-5-1, 0x00000000, false)
//林月如：
//什麽跟什麽嘛！
//又是一个来装神弄鬼的
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//不～师父的本领真的很高强
//也许．．也许是．．
VideoUpdate(0, false)
SetDlgUpper(3-2-1, 0x00000000, false)
//林月如：
//也许是酒喝多了，是不是？
EventSetAutoScript(115, 13, Scr_0x6260)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(3, false, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//月如！　等一下，你要去哪？
WaitEventAutoScriptRun(0, false, false)
SetDlgUpper(3-3-1, 0x00000000, false)
//林月如：
//去找出妖怪呀！
//难道还要在这里浪费时间？
WaitEventAutoScriptRun(5, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
EventSetState(108, 17, true, false)
EventSetState(108, 15, true, false)
EventSetState(108, 16, true, false)
SceneSetScripts(114, Scr_0x6210, Null)
SceneSetScripts(115, Scr_0x6210, Null)
SceneSetScripts(116, Scr_0x6210, Null)
SceneSetScripts(108, Scr_0x6210, Null)
SceneSetScripts(118, Scr_0x6210, Null)
SceneSetScripts(119, Scr_0x6210, Null)
SceneSetScripts(121, Scr_0x6210, Null)
SceneSetScripts(122, Scr_0x6210, Null)
SceneSetScripts(123, Scr_0x6210, Null)
SceneSetScripts(124, Scr_0x6210, Null)
VideoWave(0, 0)
MusicPlay(32, true, 0.00)
ReplaceAndPause()
SetDlgCenter(0, 0x00000000, false)
//酒剑仙呼呼大睡中．．

[Scr_0x6210]
MusicPlay(32, true, 0.00)

[Scr_0x6212]
NPCSetFrame(1)
ReplaceAndPause()
NPCSetFrame(2)
ReplaceAndPause()
NPCSetFrame(3)
ReplaceAndPause()
NPCSetFrame(4)
WaitEventAutoScriptRun(7, false, false)
[Scr_0x621A]
NPCSetFrame(5)
ReplaceAndPause()
NPCSetFrame(4)
WaitEventAutoScriptRun(8, false, false)
ReplaceAndPauseWithNop(Scr_0x621A, 0)

[Scr_0x6220]
NPCSetDirFrame(0, 11)
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(0, 12)
WaitEventAutoScriptRun(7, false, false)
NPCSetDirFrame(0, 13)
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(0, 14)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(0, 15)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(0, 16)
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(0, 17)
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(0, 18)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(0, 19)
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(0, 12)
WaitEventAutoScriptRun(0, false, false)
NPCSetDirFrame(0, 15)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(0, 17)
WaitEventAutoScriptRun(0, false, false)
NPCSetDirFrame(0, 19)
WaitEventAutoScriptRun(0, false, false)
NPCSetDirFrame(0, 18)
WaitEventAutoScriptRun(6, false, false)
NPCSetDirFrame(0, 16)
WaitEventAutoScriptRun(0, false, false)
NPCSetDirFrame(0, 15)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(0, 13)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(0, 22)
WaitEventAutoScriptRun(5, false, false)

[Scr_0x6245]
NPCSetDirFrame(0, 22)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(0, 20)
WaitEventAutoScriptRun(0, false, false)
NPCSetDirFrame(0, 19)
WaitEventAutoScriptRun(0, false, false)
NPCSetDirFrame(0, 18)
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(0, 19)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(0, 20)
WaitEventAutoScriptRun(8, false, false)
NPCSetDirFrame(0, 19)
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(0, 20)
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(0, 19)
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(0, 20)
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(0, 19)
WaitEventAutoScriptRun(6, false, false)
NPCSetDirFrame(0, 21)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(0, 19)
WaitEventAutoScriptRun(6, false, false)

[Scr_0x6260]
NPCMoveToBlock(33, 34, 0, 3, false)
NPCMoveToBlock(34, 35, 1, 3, false)
NPCSetDirFrame(2, 0)
ReplaceAndPause()
NPCMoveToBlock(29, 40, 1, 3, false)
EventSetState(-1, -1, false, false)

[Event_00108_00015_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
EventSetTriggerScript(115, 2, Event_00115_00002_Trigger)
RoleSetDirFrame(0, 2, 0)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(6, false, false)
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(6, false, false)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(16-1-1, 0x00000000, false)
//彩　依：
//李公子～你们．．
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//李大哥，你来的正好
//她把刘晋元抓到花丛中藏身
//被我给找出来啦！我们合力
//拿下这妖女
NPCSetDirFrame(1, 0)
VideoUpdate(0, false)
SetDlgLower(16-1-1, 0x00000000, false)
//彩　依：
//不．．因为相公今天没有服药
//病情恶化了。妾身只好带他来
//这里，用百花之精气为他驱毒
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//大嫂．．竟然是只蝶精！
NPCSetDirFrame(0, 0)
VideoUpdate(0, false)
SetDlgLower(16-1-1, 0x00000000, false)
//彩　依：
//你．．看得见我的原形？！
VideoUpdate(0, false)
SetDlgUpper(3-2-1, 0x00000000, false)
//林月如：
//光着身子，露出背後那麽
//大一双翅膀，谁会看不出来？
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(6, false, false)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(6, false, false)
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(16-1-1, 0x00000000, false)
//彩　依：
//你也～　难道．．
//我施的幻术被破解了！
VideoUpdate(0, false)
SetDlgUpper(3-3-1, 0x00000000, false)
//林月如：
//快把刘大哥放了！
//不然别怪我对你不客气
VideoUpdate(0, false)
SetDlgLower(16-1-1, 0x00000000, false)
//彩　依：
//不～不可以！
//一旦停下来，就前功尽弃了
SetDlgUpper(3-3-1, 0x00000000, false)
//林月如：
//还想拿这种话骗人
//当我们是三岁小孩吗？
PartySetRole(31)
SetBattleMusic(48)
SetBattlefield(28)
BattleStart(39, Null, Null)
PartySetRole(31)
RoleRevive(10, true)
RoleModifyHPMP(9999, true)
BattleEnd()
EventSetState(108, 17, false, false)
EventSetState(108, 16, false, false)
EventModifyPos(-1, -1, 0, -80)
EventSetLayer(-1, -1, 33)
EventSetAutoScript(-1, -1, Event_00108_00012_Auto)
PartySetPos(20, 92, 1)
ViewportMove(128, -96, 0)
PartyWalkToBlock(22, 91, 0, 4)
ViewportMove(10, -7, 42)
WaitEventAutoScriptRun(20, false, false)
EventSetState(-1, -1, false, false)
ViewportMove(0, 0, 0)
EventSetStateSequence(115, 3, 115, 11, false, false)
EventSetState(115, 12, false, false)
EventSetStateSequence(117, 6, 117, 8, false, false)
EventSetState(118, 0, true, false)

[Event_00119_00014_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//得到檀香、蜡烛
AddItem(23, 0)
AddItem(21, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00119_00015_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//得到符纸
AddItem(22, 0)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00119_00016_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgBox(0x00000000)
//得到三千文钱
CashModify(3000, Null)
ReplaceAndPauseWithNop(Event_00184_00003_Trigger, 0)

[Event_00117_00006_Trigger]
EventSetTriggerMode(-1, -1, false, 2)
SetDlgCenter(0, 0x00000000, false)
//一张巨大的蜘蛛网
//挡住了树林的入口

[Scene_00138_Teleport]
SceneEnter(117)
PartySetPos(16, 106, 0)
FadeOut(0)

[Event_00112_00024_Auto]
GotoWithProbability(40, Null)
NPCSetFrame(0)
GotoWithProbability(30, Null)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(1)
GotoWithProbability(30, Event_00112_00024_Auto)
[Scr_0x62E3]
NPCSetFrame(2)
GotoWithProbability(50, Null)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(1)
GotoWithProbability(40, Null)
GotoWithProbability(30, Scr_0x62E3)
[Scr_0x62E9]
NPCSetFrame(3)
ReplaceAndPause()
GotoWithProbability(30, Null)
NPCSetFrame(4)
ReplaceAndPause()
GotoWithProbability(40, Null)
GotoWithProbability(30, Scr_0x62E9)
ReplaceAndPauseWithNop(Event_00112_00024_Auto, 0)

[Event_00112_00008_Trigger]
//小贩：
//客倌要买些什麽
//东西，这儿应有尽有。

[Event_00112_00005_Trigger]
//商人：
//待会儿我们就准备搭渡船进城
//趁现在休息一下。
VideoUpdate(0, false)
//伙计：
//是的，老板。

[Event_00112_00007_Trigger]
//旅客：
//要赶紧趁天黑之前
//进城，否则没地方住啊！

[Event_00112_00009_Trigger]
//小贩：
//本店的青草茶是京城内外远近
//驰名的，喝过的人都称赞！

[Event_00112_00020_Trigger]
//孩童甲：
//哈哈～站在这里看得好清楚呢

[Event_00112_00021_Trigger]
SetDlgLower(0, 0x00000000, false)
//孩童乙：
//今天是演什麽戏啊？
VideoUpdate(0, false)
//孩童甲：
//就是水淹什麽金山的嘛！
//你自己不会看呐。
VideoUpdate(0, false)
//孩童乙：
//为什麽不是银山，而是金山？
EventSetDirFrame(112, 20, 0, 0)
VideoUpdate(0, false)
//孩童甲：
//笨喔！　金山比银山值钱嘛
VideoUpdate(0, false)
//孩童乙：
//喔．．．．

[Event_00112_00022_Trigger]
//孩童丙：
//白蛇传那麽好看吗？
//怎麽这麽多人喜欢看。

[Event_00112_00023_Trigger]
//观众：
//这出戏我前前後後看了十几
//二十遍，怎麽看都不腻。
//白蛇精化身的白素贞为了报恩
//而嫁给许仙，最後却悲剧收场

[Event_00112_00012_Trigger]
//观众：
//呜??白素贞好可怜喔！

[Event_00112_00014_Trigger]
//路人：
//江湖好汉是不看这玩意儿的
//我只是刚巧在这儿歇歇脚。

[Event_00112_00018_Trigger]
//老头：
//想当年我演许仙的时候
//你们都还不知道在哪儿！

[Event_00112_00013_Trigger]
//观众：
//这个许仙到底是
//谁演的，真烂！

[Event_00112_00010_Trigger]
//观众：
//西湖断桥、借伞姻缘
//我看现实生活中是碰
//不到这种好事的

[Event_00112_00016_Trigger]
//观众：
//喂！别挡着人看戏。

[Event_00112_00019_Trigger]
//观众：
//嘘，小声点～
//现在正是最精彩的一段。

[Event_00112_00017_Trigger]
//观众：
//这扮小青的娘们儿长的不错。

[Event_00112_00015_Trigger]
//观众：
//别吵！老子正在看戏。

[Event_00112_00011_Trigger]
//观众：
//法海，好样的！
//快把那蛇妖给收进雷峰塔！

[Event_00111_00007_Trigger]
//官兵：
//闲杂人等不得随意进入。

[Event_00111_00009_Trigger]
//官兵：
//此处不可进入，赶快离开。

[Event_00111_00010_Trigger]
//官兵：
//对不起，当今朝廷尚书
//夫人在此，请您离开。

[Event_00111_00011_Trigger]
//夫人实在很疼少爷

[Event_00111_00012_Trigger]
//婢女阿萍：
//我们家少爷身染怪病
//夫人特地前来上香祈福

[Event_00111_00013_Trigger]
//婢女阿香：
//希望我们家少爷病能够赶快好
//不要再让夫人担心。

[Event_00130_00008_Trigger]
WaitEventAutoScriptRun(0, false, false)
SetDlgLower(0, 0x00000000, false)
//嫖客：
//来嘛！春宵一刻值千金
//今晚你是大爷我的了。
VideoUpdate(0, false)
//妓女：
//不要嘛！人家不好意思。
VideoUpdate(0, false)
//嫖客：
//有什麽不好意思的
//给你一串珍珠项链如何？
VideoUpdate(0, false)
//妓女：
//再加一条纯金的手链！
VideoUpdate(0, false)
//嫖客：
//??????

[Event_00130_00015_Trigger]
//妓女：
//去去去！怡红院不是你
//这种穷小子来玩的地方。

[Event_00130_00007_Trigger]
//嫖客：
//今晚谁要陪我的
//我手上的银票都是她的。

[Event_00130_00006_Trigger]
//妓女：
//奴家是卖笑不卖身的
//客人请多多包涵。

[Event_00130_00005_Trigger]
//男子：
//自从我见过一次彩依姑娘後
//她的倩影便深深地刻划在我的
//心坎里，所谓「牡丹花下死、
//做鬼也风流」，我要是那刘晋
//元，受再重的伤、生再苦的病
//我都心甘情愿。

[Event_00130_00003_Trigger]
WaitEventAutoScriptRun(0, false, false)
SetDlgLower(0, 0x00000000, false)
//妓女：
//你到底什麽时候才要把你老婆
//给休了，然後赎我出去？
VideoUpdate(0, false)
//员外：
//不要急，就快了、就快了。
VideoUpdate(0, false)
//妓女：
//你每次都这样子讲
//是不是在骗我啊？
VideoUpdate(0, false)
//员外：
//我怎麽会骗你呢？
//你要相信我啊！
VideoUpdate(0, false)
//妓女：
//好，我再相信你一次
//给你三天时间，一定要搞定。
VideoUpdate(0, false)
//员外：
//好好好，现在别讲这个
//喝酒、喝酒。

[Event_00130_00010_Trigger]
//妓女：
//帅哥～今晚要不要我陪你啊？

[Event_00130_00011_Trigger]
WaitEventAutoScriptRun(0, false, false)
SetDlgLower(0, 0x00000000, false)
//男：
//茹茵，为什麽你都不肯接受
//我，我为了你什麽都愿意做。
VideoUpdate(0, false)
//女：
//我心仪的是江家公子
//没有办法接受你。
VideoUpdate(0, false)
//男：
//江邵！？那穷小子有什麽好的
//又没我家有钱，我叫我爹动动
//手指，他马上就从京城中消失。
VideoUpdate(0, false)
//女：
//我就是喜欢他，即使他一贫
//如洗、家徒四壁，我也永远
//不会离开他。

[Event_00130_00013_Trigger]
WaitEventAutoScriptRun(0, false, false)
SetDlgLower(0, 0x00000000, false)
//男子：
//你知不知道那尚书府的彩依
//姑娘是什麽来头？
VideoUpdate(0, false)
//妓女：
//我也不知道，尚书府的人个
//个守口如瓶，连我在尚书府
//做婢女的妹妹阿萍都不知道
//彩依真正的来历。

[Event_00129_00002_Trigger]
//女客：
//听说刘家少奶奶身上无时无刻
//都会传出一阵阵花香的味道，
//不知道是怎麽弄的，真想知道。

[Event_00129_00003_Trigger]
//女客：
//我天天都来这洗身子
//为什麽身上的味道还是不够香

[Event_00129_00004_Trigger]
//女客：
//咦？小姑娘，你也是要来洗澡
//的吧！怎麽不把衣裳给脱了？

[Event_00129_00005_Trigger]
//女客：
//刘家公子不知道造了什麽孽
//得了一身怪病，生不如死。
//又不知道积了什麽福，娶到
//一个美若天仙的贤慧姑娘。

[Event_00129_00006_Trigger]
//女客：
//现在城里面到处都在讨论关於
//刘家公子的病，和彩依姑娘的
//身世与来历，真的有那麽多的
//事好谈吗？

[Event_00106_00002_Trigger]
SceneEnter(107)
PartySetPos(54, 109, 1)
FadeOut(0)

[Event_00107_00001_Trigger]
SceneEnter(106)
PartySetPos(12, 66, 0)
FadeOut(0)

[Event_00106_00001_Trigger]
SceneEnter(104)
PartySetPos(10, 24, 0)
FadeOut(0)

[Event_00104_00003_Trigger]
SceneEnter(106)
PartySetPos(52, 32, 1)
FadeOut(0)

[Scr_0x63E9]
SceneEnter(109)
PartySetPos(52, 32, 1)
FadeOut(0)

[Scene_00109_Enter]
MusicPlay(36, true, 0.00)

[Scene_00107_Enter]
MusicPlay(12, true, 0.00)

[Event_00100_00040_Trigger]
ShowBuyItemMenu(14)

[Event_00100_00041_Trigger]
ShowBuyItemMenu(15)

[Event_00100_00042_Trigger]
ShowSellItemMenu()

[Event_00102_00004_Trigger]
//秀才：
//你们也要过这座山吗？
VideoRestore()
//我听人说，这山上出了只蛤
//蟆精，长的就像头牛那麽大
//专吃过往人畜，昨天已经死
//了好几个人呢！
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//蛤蟆有什麽好怕的？长的再大
//也不过一张嘴、四条腿，噗通
//一声就把它踢下水
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//秀才：
//是．．兄台所言甚是
//小生见兄台身配宝剑
//想必是习武之人。
VideoRestore()
//小生愿意出价二千文钱，请兄
//台当我的保镖，护送我过这段
//山路，不知兄台意下如何？
GotoWithSelect(Scr_0x641B)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//秀才：
//太好了．．我先付您
//一半的前金，另一半等
//到了京城再付给您
SetDlgBox(0x00000000)
//得一千文钱
CashModify(1000, Null)
EventSetState(-1, -1, false, false)
PartySetFollower(Scr_0x0052)

[Scr_0x641B]
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//不干，我向来只保护女的
//不替男的卖命
ReplaceAndPause()
SetDlgUpper(0, 0x00000000, false)
//秀才：
//兄台再考虑一下吧
ReplaceAndPause()
SetDlgUpper(0, 0x00000000, false)
//秀才：
//唉．．十年寒窗苦读，就为了
//这次进京赶考，却因妖畜挡道
//而不得其途．．我该怎麽办啊
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//好吧～见人有难不能不管
//我答应护送你过这段山路
//我们的脚程可是很快的，
//你可要跟紧点
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//秀才：
//好．．谢谢。
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//至於这个价钱嘛．．
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//秀才：
//我再加一千，一共是三千
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//好～先付一半！
VideoUpdate(0, false)
SetDlgBox(0x00000000)
//得一千五百文钱
CashModify(1500, Null)
EventSetState(-1, -1, false, false)
PartySetFollower(Scr_0x0053)

[Event_00102_00007_Trigger]
//旅人：
//一听说有这有妖怪吃人
//我雇的车夫脚役就全跑光了
//真是一群没胆的家伙
VideoRestore()
//唉唉唉～本公子一路游山玩水
//泡女人，怎料偏偏给困在这穷
//山恶水之处，前进也不是、回
//头心又不甘哪！

[Event_00102_00008_Trigger]
//猎人：
//这山里头的野猪啦、野鹿啦
//突然全都无影无踪，反倒是
//满山遍野冒出成群的癞蛤蟆
//爬来爬去，真是古怪
ReplaceAndPause()
//猎人：
//传说～如果猎得成了精的蛤蟆
//剖开它的肚皮，可以找到一颗
//"五毒珠"，而这种宝珠可以避
//百毒，是无价之宝呢！

[Scene_00102_Enter]
SetBattlefield(5)
MusicPlay(35, true, 0.00)

[Scr_0x6461]
NPCMoveToBlock(23, 26, 0, 8, false)

[Event_00101_00004_Trigger]
EventSetState(-1, -1, false, false)
SetDlgCenter(0, 0x00000000, false)
//"前方栈道已塌"

[Event_00101_00005_Trigger]
PartyWalkToBlock(25, 55, 1, 8)
RoleSetDirFrame(0, 3, 0)
RoleSetDirFrame(1, 3, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//咦．．姑娘，你受伤了吗？
EventSetState(-1, -1, false, false)
EventSetState(101, 6, true, false)
VideoUpdate(0, false)
SetDlgLower(45-1-1, 0x00000000, false)
//女子：
//．．．．．．．
VideoUpdate(0, false)
SetDlgUpper(1-6-1, 0x00000000, false)
//李逍遥：
//唔～姑娘．．
//咱们好像曾见过面喔？
EventSetAutoScript(101, 6, Scr_0x64B2)
WaitEventAutoScriptRun(16, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(8, false, false)
PartyWalkToBlock(26, 56, 1, 4)
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//喂～姑娘！　你去哪啊？
VideoUpdate(0, false)
SetDlgUpper(45-1-1, 0x00000000, false)
//女子：
//这是我家！
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//你的脸色不太好呢．．
//需要帮忙吗？
EventSetDirFrame(101, 6, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(45-1-1, 0x00000000, false)
//女子：
//别跟来～
//靠近我的男人会没命的！
EventSetAutoScript(101, 6, Scr_0x64B6)
WaitEventAutoScriptRun(10, false, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//哇～　这娘们还挺酷的！
VideoUpdate(0, false)
SetDlgUpper(3-2-1, 0x00000000, false)
//林月如：
//瞧你那付无赖嘴脸
//人家会理你才怪！
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//我可是好心好意耶
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//你瞧～像那样的美女，怎麽
//会住在这麽一个山洞之中，
//你不觉得有点古怪吗？
VideoUpdate(0, false)
SetDlgUpper(3-5-1, 0x00000000, false)
//林月如：
//你还有闲功夫去管人家？
//咱们还得找路呢
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//既然那姑娘是住在这里的
//直接找她问路岂不是比较快？

[Scr_0x64B2]
NPCSetDirFrame(3, 0)
NPCSetDirFrame(2, 0)
NPCMoveToBlock(29, 53, 1, 4, true)

[Scr_0x64B6]
NPCSetDirFrame(2, 0)
NPCMoveToBlock(30, 52, 1, 4, true)
EventSetState(-1, -1, false, false)

[Scr_0x64BA]
SetBattlefield(18)
BattleStart(36, Scr_0x9C9B, Null)
NPCSetFrame(1)
PartySetPos(19, 22, 1)
SetBattlefield(53)
ReplaceAndPause()
NPCSetFrame(2)
VideoUpdate(0, false)
AddItem(202, 0)
SetDlgCenter(0, 0x00000000, false)
//"剖开蛤蟆肚，得五毒珠"
ReplaceAndPause()
SetDlgCenter(0, 0x00000000, false)
//蛤蟆精已死

[Event_00101_00002_Trigger]
SceneEnter(103)
PartySetPos(17, 113, 0)
FadeOut(0)

[Event_00103_00001_Trigger]
SceneEnter(101)
PartySetPos(28, 56, 0)
FadeOut(0)

[Event_00103_00002_Trigger]
SceneEnter(104)
PartySetPos(42, 110, 0)
FadeOut(0)

[Event_00104_00001_Trigger]
SceneEnter(103)
PartySetPos(23, 53, 0)
FadeOut(0)

[Event_00103_00003_Trigger]
SceneEnter(104)
PartySetPos(47, 106, 0)
FadeOut(0)

[Event_00104_00002_Trigger]
SceneEnter(103)
PartySetPos(26, 49, 1)
FadeOut(0)

[Event_00103_00005_Trigger]
VideoUpdate(0, false)
SetDlgUpper(45-1-1, 0x00000000, false)
//女子：
//你们擅自闯进我家来
//不觉得失礼吗？
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//是．．恕在下冒眛
//我们只是想问个路
VideoUpdate(0, false)
SetDlgUpper(45-1-1, 0x00000000, false)
//女子：
//没路了．．
//这山谷往北的栈道被我拆了
//再过几天，我得把往南的山
//路封起来
SetDlgLower(3-3-1, 0x00000000, false)
//林月如：
//你这是为什麽？
VideoUpdate(0, false)
SetDlgUpper(45-1-1, 0x00000000, false)
//女子：
//省得再有无聊的男人闯进来
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//姑娘，这里是来往必经之路
//就算这座山谷是你的，你也
//不能这样做呀！
VideoUpdate(0, false)
SetDlgUpper(45-1-1, 0x00000000, false)
//女子：
//你管不着！
VideoUpdate(0, false)
SetDlgLower(3-3-1, 0x00000000, false)
//林月如：
//喂．．你这个人很不讲理喔！
VideoUpdate(0, false)
SetDlgUpper(45-1-1, 0x00000000, false)
//女子：
//这是我住的地方
//请你们出去！
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//好好～算我们失礼
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//月如～算了，咱们走吧
RoleMoveOneStep(16, 8, 0)
VideoUpdate(0, false)
RoleMoveOneStep(16, 8, 0)
VideoUpdate(0, false)
SceneSetScripts(101, Scr_0x6523, Null)
ReplaceAndPause()
SetDlgUpper(45-1-1, 0x00000000, false)
//女子：
//你们还不走吗！？
RoleSetDirFrame(0, 3, 0)
RoleMoveOneStep(16, 8, 0)
VideoUpdate(0, false)
RoleMoveOneStep(16, 8, 0)
VideoUpdate(0, false)

[Scr_0x6523]
MusicPlay(35, true, 0.00)
EventSetState(103, 6, true, true)
EventModifyPos(103, 5, 32, 0)
EventSetTriggerScript(103, 5, Scr_0x6542)
EventSetDirFrame(103, 5, 0, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-16, 8, 0)
VideoUpdate(0, false)
RoleMoveOneStep(-16, 8, 0)
RoleSetDirFrame(1, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(3-5-1, 0x00000000, false)
//林月如：
//李大哥～我越想越不对！
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgUpper(3-2-1, 0x00000000, false)
//林月如：
//我觉得那女人绝非善类
//一定是有什麽见不得人的勾当
//才会躲在洞窟里，还不许别人
//靠近这里
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//我也这麽觉得
Replace()
[Scene_00101_Enter]
SetBattlefield(17)
MusicPlay(35, true, 0.00)

[Scr_0x6542]
SetDlgLower(3-3-1, 0x00000000, false)
//林月如：
//哇．．　妖．．妖怪！
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//姑娘，你快过来
//那只大蟾蜍可能有毒啊！
VideoUpdate(0, false)
SetDlgUpper(45-2-1, 0x00000000, false)
//金蟾鬼母：
//哼．．毒？　人心更毒！
VideoRestore()
//比起天下人恶毒的耻笑、凌辱
//还有什麽毒可怕？
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//你．．你的脸．．(
VideoUpdate(0, false)
SetDlgUpper(45-2-1, 0x00000000, false)
//金蟾鬼母：
//既然被你们看到我的脸
//就别想活着走出此洞窟！
NPCSetDirFrame(0, 0)
VideoUpdate(0, false)
SetDlgUpper(45-2-1, 0x00000000, false)
//金蟾鬼母：
//乖儿子～
//这对男女就给你当点心
NPCSetDirFrame(3, 0)
VideoUpdate(0, false)
EventSetState(-1, -1, false, false)
EventSetDirFrame(103, 6, 0, 1)
EventSetStateSequence(103, 7, 103, 14, true, true)
BattleStart(36, Scr_0x9C9B, Null)
MusicPlay(82, true, 0.00)

[Event_00103_00007_Trigger]
EventSetDirFrame(103, 6, 0, 2)
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//剖开蛤蟆精肚皮，发现"五毒珠"
AddItem(202, 0)
ReplaceAndPause()
SetDlgCenter(0, 0x00000000, false)
//蛤蟆精已死．．

[Scene_00103_Enter]
SetBattlefield(18)
SetBattleMusic(45)
MusicPlay(36, true, 0.00)

[Scene_00104_Enter]
SetBattlefield(18)
SetBattleMusic(37)
MusicPlay(82, true, 0.00)

[Event_00108_00040_Trigger]
EventSetState(-1, -1, false, false)
VideoUpdate(0, false)
SetDlgBox(0x00000000)
//拾得一瓶天仙玉露
AddItem(49, 0)

[Scene_00132_Enter]
MusicPlay(66, true, 0.00)

[Event_00112_00025_Trigger]
//许仙：
//想不到无双艳质今双遇，
//分明是第一佳人第一仙。
//二位娘子听我言，
//贵姓高名何方住，
//为何的冒雨冲风到此间？
VideoUpdate(0, false)
//白娘子：
//乍闻此言暗含笑，半是欢喜半羞惭
//定睛把那许仙看，目秀眉清非等闲
VideoUpdate(0, false)
//群唱：
//必是前生缘法今生遇，
//千里姻缘一线牵。
ReplaceAndPause()
//小青：
//娘子呵！
//公子问你话，
//为何对面相逢无一言？
VideoUpdate(0, false)
//白娘子：
//奴家住杭州城黑竹巷
//姓白今年虚度十八秋
//祖居云南年深久，
//如今寄居在杭州。
VideoUpdate(0, false)
//许仙：
//敝人也在城南住，姓许名仙家业寒
//今日游湖归来晚，偏遇天气雨连绵
VideoUpdate(0, false)
//白娘子：
//鞋弓袜小难移步
//弱体柔姿太可怜
VideoUpdate(0, false)
//许仙：
//我居心与你们同路走
//送你到家中我心也安。
ReplaceAndPause()
//小青：
//小姐哦！
//这秀才胆大似狂颠
//听他的话头真有趣
//奉劝娘子休错过
//何不学那文箫配彩鸾？
VideoUpdate(0, false)
//白娘子：
//此人总是多情种，
//还要试探他真心虔不虔，
//你我行踪须隐密，
//休要泄露巧机关。
VideoUpdate(0, false)
//小青：
//小姐！那该如何是好？
VideoUpdate(0, false)
//白娘子：
//借他的伞儿打回去
//约他来取在两日间
//那时我自有瞒天手
//妙法通灵元上元。
VideoUpdate(0, false)
//小青：
//不怕他不入迷魂阵
//就是那八洞神仙要脱逃难
//岂不是人间天上无双美
//玉洞金屋巧姻缘。
ReplaceAndPause()
//群唱：
//人间天上无双美呀无双美，
//玉洞金屋巧姻缘呀巧姻缘。

[Scene_00139_Enter]
SetBattlefield(7)
SetBattleMusic(39)
MusicPlay(36, true, 0.00)

[Event_00117_00001_Trigger]
SceneEnter(139)
PartySetPos(15, 113, 0)
FadeOut(0)

[Event_00139_00002_Trigger]
SceneEnter(138)
PartySetPos(48, 89, 1)
FadeOut(0)

[Event_00138_00001_Trigger]
SceneEnter(139)
PartySetPos(19, 49, 0)
FadeOut(0)

[Event_00139_00004_Auto]
EventModifyPos(-1, -1, 0, 2)
EventModifyPos(-1, -1, 0, 4)
EventModifyPos(-1, -1, 0, 8)
EventModifyPos(-1, -1, 0, 12)
EventModifyPos(-1, -1, 0, 16)
EventModifyPos(-1, -1, 0, 18)
EventModifyPos(-1, -1, 0, 18)
EventModifyPos(-1, -1, 0, 18)

[Event_00139_00003_Trigger]
EventSetState(-1, -1, false, false)
SetDlgLower(0, 0x00000000, false)
//月如～小心！
EventSetState(139, 4, true, false)
PlaySound(182)
WaitEventAutoScriptRun(4, false, false)
RoleMoveOneStep(8, 4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(8, 4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(8, 4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(8, 4, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgUpper(0, 0x00000000, false)
//黑蜘蛛：
//唧～唧～　擅入者死！
EventSetState(139, 4, false, false)
BattleStart(43, Scr_0x9C9B, Null)

[Event_00138_00006_Trigger]
EventSetState(-1, -1, false, false)
EventSetPos(3, 0, 85, 0)
PartyWalkToBlock(42, 83, 0, 8)
MusicPlay(34, true, 0.00)
ViewportMove(0, -4, 28)
SetDlgUpper(19-1-1, 0x00000000, false)
//毒娘子：
//呵呵～你终於低头来找我了！
VideoUpdate(0, false)
SetDlgLower(16-1-1, 0x00000000, false)
//彩　依：
//要不是．．不是．．．
VideoUpdate(0, false)
SetDlgUpper(19-1-1, 0x00000000, false)
//毒娘子：
//你以为～用你炼制的百花仙酿
//就可以解掉我在这男人身上下
//的缠魂丝！？
VideoRestore()
//哼～顶多让他晚几天死罢了
//我早跟你说过：天下间除了我
//没人能救得了他。
VideoRestore()
//你耗掉这麽多法力救他，只是
//徒劳无功而已。原本你的道行
//还比我高出四百年，可是现在
//你已经没有力量对付我了！
VideoUpdate(0, false)
SetDlgLower(16-1-1, 0x00000000, false)
//彩　依：
//我～求求您．．救他．．
VideoUpdate(0, false)
SetDlgUpper(19-1-1, 0x00000000, false)
//毒娘子：
//求我！？　呵呵．．
//你也会有这麽一天？
VideoRestore()
//哼！这个男人的命我要定了
//以前～我是怕你，但是现在
//你能拿我怎麽样？
VideoUpdate(0, false)
SetDlgLower(16-1-1, 0x00000000, false)
//彩　依：
//我．．　我愿意．．
//用我的命．．换他一命
VideoRestore()
//只要您肯解他身上的毒
//我．．我随你处置。你．．
//你想吃了我．．也可以
VideoUpdate(0, false)
SetDlgUpper(19-1-1, 0x00000000, false)
//毒娘子：
//哦～！　这男人真的值得
//你为他这样做？
VideoUpdate(0, false)
SetDlgLower(16-1-1, 0x00000000, false)
//彩　依：
//只．．只要你答应我～救了他
VideoUpdate(0, false)
SetDlgUpper(19-1-1, 0x00000000, false)
//毒娘子：
//好～　我就成全你！
//这男的从我手中救了你一次
//到头来～你还是得乖乖的送
//上门来！
VideoUpdate(0, false)
EventSetState(138, 2, false, false)
EventSetState(138, 3, true, false)
PlaySound(260)
FadeToScene(-1, 2)
EventSetDirFrame(138, 3, 0, 0)
VideoUpdate(0, false)
//蜘蛛精：
//哈～哈～．．不废吹灰之力
//我又可以增加千年的道行！
VideoRestore()
//这次可是你自己自愿的
//我就先吃了你～认命吧！
ViewportMove(0, 14, 8)
SetDlgLower(0, 0x00000000, false)
//二人齐声道：
//住手！！
PartyWalkToBlock(43, 81, 1, 8)
PartyWalkToBlock(41, 79, 0, 8)
PartyWalkToBlock(43, 76, 1, 8)
RoleSetDirFrame(0, 1, 0)
RoleSetDirFrame(1, 1, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//林月如：
//不许动我大嫂一根寒毛！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//蜘蛛精：
//竟敢来插手本座的事
//连你们一块吃了！！
VideoUpdate(0, false)
EventModifyPos(138, 3, 16, 8)
EventSetDirFrame(138, 3, 0, 1)
WaitEventAutoScriptRun(2, false, false)
EventModifyPos(138, 3, 16, 8)
EventSetDirFrame(138, 3, 0, 0)
WaitEventAutoScriptRun(2, false, false)
EventModifyPos(138, 3, 16, 8)
EventSetDirFrame(138, 3, 0, 1)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(138, 3, 0, 0)
WaitEventAutoScriptRun(0, false, false)
PartySetRole(13)
SetBattlefield(27)
SetBattleMusic(38)
BattleStart(42, Null, Null)
ObjectSetScript(3, 37, 0, Null)
MusicPlay(0, true, 0.00)
BattleEnd()
SetDlgUpper(0, 0x00000000, false)
//空中传来宏亮的声音：
//孽畜！～休得伤人！
MusicPlay(21, true, 0.00)
EventSetState(138, 7, true, false)
EventSetState(138, 4, false, false)
EventSetState(138, 5, false, false)
EventSetState(0, 0, true, true)
EventSetState(0, 0, true, true)
ViewportMove(42, 32, -1)
ViewportMove(0, 24, 18)
ViewportMove(0, 0, 0)
EventSetState(138, 7, false, false)
EventSetDirFrame(138, 3, 0, 2)
PlaySound(95)
WaitEventAutoScriptRun(8, false, false)
PlaySound(269)
EventSetDirFrame(138, 3, 0, 3)
FadeToScene(-1, 2)
EventSetState(139, 0, true, true)
WaitEventAutoScriptRun(16, false, false)
EventSetAutoScript(139, 0, Scr_0x66BC)
WaitEventAutoScriptRun(10, false, false)
EventSetAutoScript(139, 0, Null)
PartyWalkToBlock(43, 76, 0, 2)
SetDlgUpper(0, 0x00000000, false)
//酒剑仙：
//哦？　这畜牲体内居然有
//"雷灵珠"！难怪这麽猖狂
MusicStop()
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//师父！
EventSetDirFrame(139, 0, 0, 0)
VideoUpdate(0, false)
EventSetDirFrame(139, 0, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//酒剑仙：
//真是乱来！你们这两个小毛头
//叫你们别乱跑，偏要乱跑。
//在我元神离窍时擅自行动
//差一点就出事了！
VideoUpdate(0, false)
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//你．．你不是醉倒了吗？
VideoUpdate(0, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//酒剑仙：
//什麽叫做醉倒呀！？
//喝了酒才是我发功的时候
//我可比你们二人还清醒呢
//．．没搞清楚状况就乱来！
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//．．．．．．．。
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//师父不愧是酒中之剑仙！
SetDlgUpper(7-1-1, 0x00000000, false)
//酒剑仙：
//少来这套了．．！
//先看看他们的情况要紧
PartySetRole(1)
FadeOut(0)
SceneEnter(140)

[Event_00138_00007_Auto]
EventModifyPos(-1, -1, 0, 32)
GotoWithNop(Event_00138_00007_Auto, 0)

[Event_00138_00008_Auto]
EventModifyPos(-1, -1, 0, 16)
EventModifyPos(-1, -1, 0, 16)
EventModifyPos(-1, -1, 0, 16)
EventModifyPos(-1, -1, 0, 16)
EventModifyPos(-1, -1, 0, 16)
EventModifyPos(-1, -1, 0, 16)
EventModifyPos(-1, -1, 0, 16)
EventModifyPos(-1, -1, 0, 16)
EventModifyPos(-1, -1, 0, 16)
EventModifyPos(-1, -1, 0, 10)
EventModifyPos(-1, -1, 0, 4)
EventModifyPos(-1, -1, 0, 2)

[Scr_0x66BC]
NPCMoveToBlock(41, 74, 1, 2, true)
EventSetState(138, 3, false, false)

[Scene_00140_Enter]
PartySetPos(42, 83, 0)
RoleSetDirFrame(0, 3, 0)
MusicPlay(7, true, 0.00)
VideoUpdate(0, false)
SetDlgUpper(1-6-1, 0x00000000, false)
//李逍遥：
//蝶．．．啊不～嫂子
//真对不起。先前我们错怪您了
//幸好罪魁祸首已死，现在一切
//都没事了．．
VideoUpdate(0, false)
SetDlgLower(16-2-1, 0x00000000, false)
//彩　依：
//呜．．来不及了．．
//相公．．已经没救了
VideoRestore()
//毒娘子一死，相公的毒
//．．就没人能解了
VideoUpdate(0, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//酒剑仙：
//小蝴蝶．．你要面对现实
//就算你赔上一命，那只蜘蛛精
//也不可能履行诺言的
VideoUpdate(0, false)
SetDlgLower(16-2-1, 0x00000000, false)
//彩　依：
//可是．．可是．．
//我已经～没有别的办法了
VideoRestore()
//只有．．只有．．．
EventSetAutoScript(140, 2, Scr_0x687A)
WaitEventAutoScriptRun(42, false, false)
SetDlgLower(0, 0x00000000, false)
//酒剑仙：
//小蝴蝶．．你何苦．．
//千年修行得来不易呀！
WaitEventAutoScriptRun(12, false, false)
//彩　依：
//我这条命．．是相公给我的
//不能眼睁睁的．．看他死掉
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//酒剑仙：
//你这样子～自废千年道行
//也只能换得他十年的寿命而已
VideoUpdate(0, false)
//彩　依：
//只要相公能活下去
//妾身．．此生心愿已了
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(140, 2, 0, 8)
EventSetState(140, 1, true, false)
WaitEventAutoScriptRun(6, false, false)
SetDlgLower(16-2-1, 0x00000000, false)
//彩　依：
//这件事．．
//请诸位永远不要让相公知道
SetDlgUpper(3-4-1, 0x00000000, false)
//林月如：
//为什麽？　你为刘大哥做如
//此大的牺牲，还不要他知道！
VideoUpdate(0, false)
SetDlgLower(16-2-1, 0x00000000, false)
//彩　依：
//因为．．如果让相公知道这件
//事，只是徒令他自责伤心罢了
VideoRestore()
//这是～奴家最後的心愿
//请诸位成全．．
MusicStop()
Delay(10)
PlayCDOrMusic(8, 13)
FadeToScene(-1, 5)
EventSetLayer(140, 1, 33)
EventSetAutoScript(140, 1, Scr_0x679B)
WaitEventAutoScriptRun(48, false, false)
EventSetState(140, 1, false, false)
EventSetState(140, 6, true, false)
FadeToScene(-1, 7)
WaitEventAutoScriptRun(60, false, false)
FadeOut(2)
SceneEnter(141)
ReplaceAndPause()
SetPalette(0)
EventSetState(140, 7, true, false)
EventSetState(141, 0, true, false)
ViewportMove(0, 0, 0)
WaitEventAutoScriptRun(50, false, false)
SceneEnter(142)
FadeOut(2)
ReplaceAndPause()
SetPalette(0)
EventSetState(140, 2, false, false)
EventSetState(140, 3, true, false)
ViewportMove(0, 0, 0)
WaitEventAutoScriptRun(40, false, false)
EventSetDirFrame(140, 5, 0, 0)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(32, false, false)
MusicStop()
FadeOut(5)
EventSetState(140, 6, false, false)
EventSetDirFrame(140, 4, 0, 0)
EventModifyPos(140, 5, 4, 32)
EventSetState(140, 3, false, false)
EventSetState(140, 7, false, false)
EventSetState(141, 0, false, false)
MusicPlay(15, true, 0.00)
VideoUpdate(0, true)
SetDlgUpper(7-1-1, 0x00000000, false)
//酒剑仙：
//$03唉．．哎．．
//世间有无情人，妖却有深情
VideoRestore()
//自从三十六岁下山以来，立誓
//尝遍人间美酒、杀尽天下妖魔
VideoRestore()
//唉．．孰知～孰知～如今．．
//酒喝多了，只是成瘾乱性
//妖怪杀光了，也无法渡化人心
VideoRestore()
//唉．．哎～扪心自问
//这些年来究竟干了啥正事？
//罢矣～不如回山上重新修炼吧
WaitEventAutoScriptRun(5, false, false)
EventSetDirFrame(140, 5, 1, 0)
VideoUpdate(0, false)
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//$04李大哥．．如果～有一天
//我也遇到这种事，你．．
//会不会牺牲自己来救我？
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//$02啧～别说这种不吉利的话！
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//问一问而已嘛．．
//若换作是你，我也会这麽做
//因为～没有人希望自己心爱
//的人比自己先离开人世
//为了让自己所爱的人好好的
//活下去，再大的牺牲都是值
//得的．．彩依的心情，我想
//我能体会
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//傻瓜～想这些干什麽
//这种事不会发生在我们身上的
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//女孩子比较多愁善感嘛～
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//哦！　你哪一点像女孩子了？
VideoUpdate(0, false)
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//你！　真不知好歹
EventSetDirFrame(140, 5, 3, 0)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(140, 4, 1, 0)
VideoUpdate(0, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//酒剑仙：
//我要走了，你们二人好自为之
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//师父！　您要去哪里？
SetDlgUpper(7-1-1, 0x00000000, false)
//酒剑仙：
//回蜀山闭关修炼去也
PartyWalkToBlock(41, 82, 1, 4)
EventSetDirFrame(140, 5, 1, 0)
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//蜀山！
//师父，您认识独孤剑圣吗？
EventSetDirFrame(140, 4, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//酒剑仙：
//怎麽不认识？他是我大师兄
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//太好了！　可否带徒儿前去？
//徒儿有一位朋友被剑圣师伯
//救走了，徒儿想去找她！
VideoUpdate(0, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//酒剑仙：
//也好～　你也算是仙剑派
//的弟子，应该去师门看看
EventSetDirFrame(140, 4, 1, 0)
VideoUpdate(0, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//酒剑仙：
//闭上双眼，我要施法罗！
FadeOut(2)
SetPalette(2)
SetRNG(3)
MusicPlay(72, true, 0.00)
PlayRNG(0, -1, 8)
MusicStop()
FadeOut(2)
SetPalette(0)
SceneEnter(155)

[Scr_0x679B]
EventModifyPos(-1, -1, 0, -1)
GotoWithNop(Scr_0x679B, 0)

[Event_00140_00006_Auto]
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
NPCMoveToBlock(43, 81, 0, 3, false)
NPCMoveToBlock(44, 82, 0, 3, false)
NPCMoveToBlock(46, 80, 0, 3, false)
NPCMoveToBlock(44, 78, 0, 3, false)
NPCMoveToBlock(42, 80, 0, 3, false)
NPCMoveToBlock(42, 80, 1, 3, false)
NPCMoveToBlock(42, 81, 0, 3, false)
NPCMoveToBlock(43, 82, 1, 3, false)
NPCMoveToBlock(45, 80, 1, 3, false)
NPCMoveToBlock(44, 79, 1, 3, false)
NPCMoveToBlock(43, 80, 1, 3, false)
NPCSetDirFrame(3, 0)
EventWalkOneStep(-1, -1, 4, 2)
EventWalkOneStep(-1, -1, 2, 1)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventWalkOneStep(-1, -1, 1, 1)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventWalkOneStep(-1, -1, 1, 1)
EventAnimate(-1, 0)
EventWalkOneStep(-1, -1, 1, 1)
EventWalkOneStep(-1, -1, 1, 1)
EventAnimate(-1, 0)
EventWalkOneStep(-1, -1, 1, 1)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
NPCSetDirFrame(0, 0)
EventAnimate(-1, 0)
EventWalkOneStep(-1, -1, -2, 1)
EventWalkOneStep(-1, -1, -4, 1)
[Scr_0x67DF]
EventWalkOneStep(-1, -1, -6, 2)
GotoWithNop(Scr_0x67DF, 0)

[Event_00141_00001_Auto]
NPCMoveToBlock(43, 25, 0, 2, true)

[Scr_0x67E4]
NPCMoveToBlock(42, 24, 0, 3, false)

[Event_00141_00002_Auto]
EventAnimate(-1, 0)
EventAnimate(-1, 0)
WaitEventAutoScriptRun(5, false, false)
EventAnimate(-1, 0)
WaitEventAutoScriptRun(2, false, false)
ReplaceAndPauseWithNop(Event_00141_00002_Auto, 0)

[Scr_0x67ED]
EventWalkOneStep(-1, -1, 6, 3)
EventWalkOneStep(-1, -1, 4, 2)
EventWalkOneStep(-1, -1, 1, 1)
EventWalkOneStep(-1, -1, 1, 1)
EventWalkOneStep(-1, -1, 1, 1)
EventAnimate(-1, 0)
NPCSetDirFrame(3, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventAnimate(-1, 0)
EventWalkOneStep(-1, -1, 2, 1)
EventWalkOneStep(-1, -1, 4, 2)
EventWalkOneStep(-1, -1, 6, 3)
[Scr_0x6801]
EventWalkOneStep(-1, -1, 8, 4)
GotoWithNop(Scr_0x6801, 0)

[Scene_00141_Enter]
SetPalette(5)
ViewportMove(42, 24, -1)
WaitEventAutoScriptRun(36, false, false)
EventSetDirFrame(141, 1, 1, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(0, 0x00000000, false)
//刘晋元：
//$07咦．．？
//有只蝴蝶黏在蜘蛛网上了~30
WaitEventAutoScriptRun(4, false, false)
EventSetAutoScript(141, 1, Scr_0x67E4)
WaitEventAutoScriptRun(8, false, false)
//刘晋元：
//哗．．好美的蝴蝶~30
VideoRestore()
//别怕！　我来救你了~40
EventSetState(141, 2, false, false)
WaitEventAutoScriptRun(5, false, false)
EventWalkOneStep(142, 0, 8, 4)
WaitEventAutoScriptRun(3, false, false)
EventWalkOneStep(142, 0, -4, -2)
WaitEventAutoScriptRun(0, false, false)
EventModifyPos(141, 1, 8, 4)
EventSetDirFrame(141, 1, 1, 1)
WaitEventAutoScriptRun(0, false, false)
EventModifyPos(141, 1, 8, 4)
EventSetDirFrame(141, 1, 1, 0)
WaitEventAutoScriptRun(0, false, false)
//刘晋元：
//哎呦～　好痛！
//这蜘蛛会咬人呐？~40
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(141, 1, 0, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(141, 1, 3, 0)
WaitEventAutoScriptRun(2, false, false)
EventSetState(141, 2, true, false)
EventModifyPos(141, 2, 48, 8)
EventSetAutoScript(141, 2, Scr_0x67ED)
WaitEventAutoScriptRun(36, false, false)
SceneEnter(140)
FadeOut(2)
ReplaceAndPause()

[Event_00142_00001_Auto]
EventWalkOneStep(-1, -1, -1, 4)
GotoWithNop(Event_00142_00001_Auto, 0)

[Event_00142_00003_Auto]
NPCSetDirFrame(1, 0)
NPCSetDirFrame(2, 0)
NPCSetDirFrame(3, 0)
NPCSetDirFrame(0, 0)

[Scene_00142_Enter]
SetPalette(5)
ViewportMove(15, 56, -1)
WaitEventAutoScriptRun(30, false, false)
EventSetAutoScript(142, 1, Null)
WaitEventAutoScriptRun(8, false, false)
EventSetState(142, 1, false, false)
EventSetState(142, 2, true, false)
FadeToScene(-1, 3)
EventSetDirFrame(142, 2, 1, 0)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(142, 2, 3, 0)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(142, 2, 0, 0)
WaitEventAutoScriptRun(6, false, false)
EventSetAutoScript(142, 2, Event_00142_00003_Auto)
WaitEventAutoScriptRun(4, false, false)
EventSetState(142, 2, false, false)
EventSetState(143, 0, true, false)
WaitEventAutoScriptRun(10, false, false)
SceneEnter(143)
FadeOut(0)
ReplaceAndPause()

[Scene_00143_Enter]
ViewportMove(28, 35, -1)
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//少爷．．您该服药了~50
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(143, 1, 0, 0)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(143, 4, 3, 0)
EventSetDirFrame(144, 0, 1, 0)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(143, 4, 2, 0)
EventSetDirFrame(144, 0, 2, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgUpper(33-1-1, 0x00000000, false)
//尚书夫人：
//$05彩依～你该改口叫相公啦！~60
VideoUpdate(0, false)
EventSetState(143, 2, false, false)
EventSetState(143, 3, true, false)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(143, 3, 0, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(16-1-1, 0x00000000, false)
//彩　依：
//承蒙老爷和夫人收留，奴婢
//已感激不尽。奴婢不敢忘记
//自己原来的身份．．~50
WaitEventAutoScriptRun(6, false, false)
SetDlgUpper(33-1-1, 0x00000000, false)
//尚书夫人：
//你千万别这麽想～元儿能
//娶到你，是我们刘家的福气~40
VideoRestore()
//等到元儿的病好了，我们还
//着等你替我们刘家添个胖小
//子呢！　．．呵呵~55
SetDlgLower(16-1-1, 0x00000000, false)
//彩　依：
//是．．．。~70
FadeOut(4)
SceneEnter(140)
ReplaceAndPause()

[Scr_0x687A]
ReplaceAndPause()
NPCSetFrame(1)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(2)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(3)
WaitEventAutoScriptRun(7, false, false)
NPCSetFrame(4)
ReplaceAndPause()
NPCSetFrame(5)
ReplaceAndPause()
NPCSetFrame(6)
ReplaceAndPause()
NPCSetFrame(7)
WaitEventAutoScriptRun(6, false, false)
NPCSetFrame(6)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(5)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(4)
WaitEventAutoScriptRun(5, false, false)
NPCSetFrame(3)
ReplaceAndPause()
NPCSetFrame(2)
ReplaceAndPause()
NPCSetFrame(1)
ReplaceAndPause()
NPCSetFrame(0)

[Event_00140_00007_Auto]
NPCMoveToBlock(44, 85, 1, 3, false)

[Event_00140_00008_Auto]
NPCMoveToBlock(46, 86, 0, 3, false)

[Scene_00161_Enter]
SetBattlefield(10)
MusicPlay(69, true, 0.00)

[Scene_00146_Enter]
PartySetRole(13)
SetBattlefield(35)
SetBattleMusic(43)
PartySetPos(37, 35, 0)
MusicPlay(80, true, 0.00)

[Scene_00147_Enter]
SetBattleMusic(39)

[Scene_00148_Enter]
MusicPlay(79, true, 0.00)
SetBattleMusic(37)

[Scene_00156_Enter]
MusicPlay(78, true, 0.00)
PartySetPos(10, 107, 0)
RoleMoveOneStep(0, 0, 6)
[Scene_00168_Enter]
SetBattlefield(32)

[Event_00161_00001_Trigger]
SceneEnter(162)
PartySetPos(13, 10, 1)
FadeOut(0)

[Event_00162_00001_Trigger]
SceneEnter(161)
PartySetPos(54, 56, 1)
FadeOut(0)

[Event_00162_00002_Trigger]
SceneEnter(163)
PartySetPos(21, 44, 0)
FadeOut(0)

[Event_00163_00001_Trigger]
SceneEnter(162)
PartySetPos(25, 85, 0)
FadeOut(0)

[Event_00146_00001_Trigger]
SceneEnter(165)
PartySetPos(45, 18, 0)
FadeOut(0)

[Event_00165_00001_Trigger]
SceneEnter(166)
PartySetPos(32, 45, 0)
FadeOut(0)

[Event_00166_00001_Trigger]
SceneEnter(147)
PartySetPos(47, 72, 1)
FadeOut(0)

[Event_00147_00001_Trigger]
SceneEnter(167)
PartySetPos(26, 44, 1)
FadeOut(0)

[Event_00167_00001_Trigger]
SceneEnter(148)
PartySetPos(40, 18, 0)
FadeOut(0)

[Event_00148_00001_Trigger]
SceneEnter(154)
PartySetPos(45, 86, 1)
FadeOut(0)

[Event_00154_00001_Trigger]
SceneEnter(148)
PartySetPos(11, 37, 1)
FadeOut(0)

[Event_00154_00002_Trigger]
SceneEnter(156)
PartySetPos(10, 107, 0)
FadeOut(0)

[Event_00156_00001_Trigger]
SceneEnter(168)
PartySetPos(14, 53, 1)
FadeOut(0)

[Scene_00155_Enter]
PartySetPos(32, 100, 0)
RoleSetDirFrame(0, 2, 0)
MusicPlay(69, true, 0.00)
WaitEventAutoScriptRun(8, false, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//酒剑仙：
//"到啦！　可以睁开眼睛了
WaitEventAutoScriptRun(5, false, false)
EventSetDirFrame(155, 3, 1, 0)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(155, 3, 3, 0)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(155, 3, 2, 0)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(155, 3, 3, 0)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//真神奇！　您施的是什麽法术
//这麽快就到了？
VideoUpdate(0, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//酒剑仙：
//呵呵～这是本门的飞仙术
//无论多远的地方，只要一
//眨眼的功夫就到了
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//哗～您一定要教我这种法术！
SetDlgUpper(7-1-1, 0x00000000, false)
//酒剑仙：
//有时间我再教你，先随我
//去见大师兄吧！
EventSetAutoScript(155, 1, Scr_0x6944)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(155, 3, 2, 0)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(155, 3, 3, 0)
WaitEventAutoScriptRun(6, false, false)
SetDlgLower(3-5-1, 0x00000000, false)
//林月如：
//这里好冷喔．．
//跟我想像的不太一样
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//冷？　那就快进去屋内吧
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//李大哥．．要是．．
//他们要正式收你做弟子
//你．．你会留下来吗？
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//这．．．看情形吧
EventSetDirFrame(155, 3, 0, 0)
VideoUpdate(0, false)
SetDlgLower(3-5-1, 0x00000000, false)
//林月如：
//那～你自己进去！
//我在这里等到你出来为止
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//好好好～我只去打听灵儿
//的下落，其他的事都不做
//可以了吧？
EventSetDirFrame(155, 3, 3, 0)
VideoUpdate(0, false)
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//那当然！　你要是当了道士
//我就先剃光你的头再说
PartySetRole(13)
EventSetState(155, 3, false, false)
RoleRevive(10, true)
RoleModifyHPMP(9999, true)
ReplaceAndPause()
MusicPlay(69, true, 0.00)

[Event_00155_00001_Auto]
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(3, 0)
ReplaceAndPause()
NPCSetDirFrame(0, 0)

[Scr_0x6944]
NPCMoveToBlock(37, 95, 0, 4, true)
EventSetState(-1, -1, false, false)

[Event_00155_00002_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
WaitEventAutoScriptRun(0, false, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//酒剑仙：
//"对了！　你记住．．暂时
//在我师兄面前不要叫我师父
//依本派门规未经掌门人同意
//门下弟子不得在外擅自收徒
//你可别害我被大师兄骂
//知道吗？
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//是．．！
EventSetAutoScript(155, 2, Scr_0x6957)
WaitEventAutoScriptRun(4, false, false)

[Scr_0x6957]
NPCMoveToBlock(50, 82, 0, 4, true)
EventSetState(-1, -1, false, false)

[Event_00156_00006_Trigger]
PlaySound(134)
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(156, 2, Scr_0x037B)
EventSetAutoScript(156, 3, Scr_0x037B)
EventSetState(156, 4, false, false)
EventSetState(156, 5, false, false)

[Event_00156_00013_Trigger]
PlaySound(134)
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(156, 7, Scr_0x037B)
EventSetAutoScript(156, 8, Scr_0x037B)
EventSetAutoScript(156, 9, Scr_0x037B)
EventSetAutoScript(156, 10, Scr_0x037B)
EventSetState(156, 11, false, false)
EventSetState(156, 12, false, false)

[Event_00156_00020_Trigger]
PlaySound(134)
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(156, 14, Scr_0x037B)
EventSetAutoScript(156, 15, Scr_0x037B)
EventSetAutoScript(156, 16, Scr_0x037B)
EventSetAutoScript(156, 17, Scr_0x037B)
EventSetState(156, 18, false, false)
EventSetState(156, 19, false, false)

[Scene_00145_Enter]
MusicPlay(81, true, 0.00)

[Event_00145_00001_Trigger]
SceneEnter(168)
PartySetPos(40, 44, 1)
FadeOut(0)

[Scr_0x697C]
SceneEnter(152)
PartySetPos(14, 72, 1)
FadeOut(0)

[Event_00168_00001_Trigger]
SceneEnter(145)
PartySetPos(14, 72, 1)
FadeOut(0)

[Event_00155_00004_Trigger]
SceneEnter(157)
PartySetPos(18, 104, 0)
FadeOut(0)

[Event_00157_00001_Trigger]
SceneEnter(155)
PartySetPos(44, 87, 1)
FadeOut(0)

[Event_00157_00002_Trigger]
SceneEnter(159)
PartySetPos(19, 93, 0)
FadeOut(0)

[Event_00159_00003_Trigger]
SceneEnter(157)
PartySetPos(37, 82, 0)
FadeOut(0)

[Event_00159_00004_Trigger]
SceneEnter(158)
PartySetPos(20, 96, 1)
FadeOut(0)

[Event_00158_00001_Trigger]
SceneEnter(159)
PartySetPos(38, 72, 0)
FadeOut(0)

[Event_00159_00005_Trigger]
SceneEnter(160)
PartySetPos(20, 95, 1)
FadeOut(0)

[Event_00160_00002_Trigger]
SceneEnter(159)
PartySetPos(30, 72, 0)
FadeOut(0)

[Event_00159_00006_Trigger]
SceneEnter(160)
PartySetPos(19, 49, 0)
FadeOut(0)

[Event_00160_00001_Trigger]
SceneEnter(159)
PartySetPos(28, 72, 0)
FadeOut(0)

[Scr_0x69AC]
//青衣弟子：
//你们真的要去闯锁妖塔啊！？
//哗．．希望你们能活着回来
Replace()
SceneEnter(161)
PartySetPos(14, 108, 1)
FadeOut(0)

[Scene_00161_Teleport]
SceneEnter(158)
PartySetPos(29, 86, 1)
FadeOut(0)

[Event_00163_00002_Trigger]
HeroSetSprite(0, 232, false)
PartySetRole(1)
RoleSetDirFrame(0, 0, 0)
FadeToScene(-1, 0)
SceneEnter(164)
FadeOut(0)

[Scene_00164_Enter]
PartySetPos(33, 119, 0)
ViewportMove(0, -16, 100)
ViewportMove(0, -8, 20)
ViewportMove(0, 4, 40)
PartySetPos(33, 19, 0)
ViewportMove(0, 0, 0)
VideoUpdate(0, false)
HeroSetSprite(0, 2, false)
PartySetRole(13)
RoleSetDirFrame(0, 2, 0)
RoleSetDirFrame(1, 2, 0)
FadeToScene(-1, 0)
SceneEnter(146)
FadeOut(3)

[Scene_00159_Enter]
PartyWalkToBlock(22, 89, 1, 8)
PartyWalkToBlock(23, 90, 1, 8)
PartyWalkToBlock(33, 80, 1, 8)
PartyWalkToBlock(32, 79, 1, 8)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(1, 2, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//晚辈李逍遥，拜见前辈
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(159, 1, 1, 0)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(159, 1, 0, 0)
WaitEventAutoScriptRun(0, false, false)
SetDlgUpper(29-1-1, 0x00000000, false)
//剑圣：
//嗯．．．好．．。
VideoUpdate(0, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//酒剑仙：
//师兄．．怎麽样？
//我看中的人不错吧！
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(159, 1, 1, 0)
VideoUpdate(0, false)
SetDlgUpper(29-1-1, 0x00000000, false)
//剑圣：
//师弟，难得你肯收起玩心
//不再四处乱跑了？
VideoUpdate(0, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//酒剑仙：
//哈哈哈！老啦～跑不动了
VideoUpdate(0, false)
SetDlgUpper(29-1-1, 0x00000000, false)
//剑圣：
//是啊，我们都老了
//是该好好找个合适的传人
//继承本门的绝学了
EventSetDirFrame(159, 1, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(29-1-1, 0x00000000, false)
//剑圣：
//不过．．师弟，你也真乱来
//把本门的剑术传给外人，若是
//让心术不正之徒学去怎行？
VideoUpdate(0, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//酒剑仙：
//放心啦，我看人一向很准的
//而且，这小子天份极高，我
//只教他一次，就学会了
VideoUpdate(0, false)
SetDlgUpper(29-1-1, 0x00000000, false)
//剑圣：
//嗯．．．这倒是没错．．
VideoUpdate(0, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//酒剑仙：
//哈哈～逍遥！　师兄答应收
//你做我仙剑派的弟子呢！
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//这．．．
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//前辈的厚爱．．晚辈心领了
VideoUpdate(0, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//酒剑仙：
//为什麽！？　你不是很想
//学咱们仙剑派的法术吗？
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//因为．．．因为．．
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(1, 3, 0)
WaitEventAutoScriptRun(10, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//晚辈乃世俗之人，俗心未净
//怕不适合这世外清修的生活
VideoUpdate(0, false)
SetDlgUpper(29-1-1, 0x00000000, false)
//剑圣：
//嗯．．有这种顾虑是对的
//不过你放心，本门弟子除了掌
//门人，其余者并非一定要出家
//只要遵守本门的戒律即可
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//晚辈．．．考虑看看
EventSetDirFrame(159, 1, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(29-1-1, 0x00000000, false)
//剑圣：
//好吧！　这也算是人生大事
//你考虑几天再做决定
EventSetDirFrame(159, 1, 2, 0)
RoleSetDirFrame(1, 1, 0)
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//酒剑仙：
//哎～你什麽时候变得这麽
//扭扭捏捏的，像个娘们似的？
VideoRestore()
//我们仙剑派的武学冠绝天下
//只要你习得其中九牛一毛
//便可傲视武林，学得一半
//就可以纵横三界
VideoRestore()
//武林中多少人梦寐以求
//的机会，都摆到你眼前了
//你还有什麽好犹豫的？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//前辈如此看重我，晚辈心中
//十分感激，但是～晚辈还得
//把一些俗事处理完才行
VideoUpdate(0, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//酒剑仙：
//我知道了，是不是还有
//一堆红粉知己没摆平啊？
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//让前辈见笑了．．
VideoUpdate(0, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//酒剑仙：
//你们就留在这儿住几天
//顺便参观参观吧！
//你会喜欢这地方的
ReplaceAndPause()

[Event_00159_00001_Trigger]
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//前辈～晚辈想向您打听一个人
VideoRestore()
//前些日子您是否曾救了一位
//年约十六岁的女孩子？
//不知那位姑娘现在何处？
VideoUpdate(0, false)
SetDlgUpper(29-1-1, 0x00000000, false)
//剑圣：
//我何时救过年轻的女孩？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//没有吗．．！？
VideoUpdate(0, false)
SetDlgUpper(29-1-1, 0x00000000, false)
//剑圣：
//没有～！
ReplaceAndPause()
SetDlgUpper(0, 0x00000000, false)
//剑圣：
//对了，先提醒你们．．後山
//是本门的禁地，不可随意擅闯

[Event_00159_00002_Trigger]
//酒剑仙：
//怎麽样，考虑的如何？

[Event_00158_00002_Trigger]
//青衣弟子：
//二位请留步，此去乃蜀山禁地
//没有掌门的命令，不可进入
RoleSetDirFrame(0, 0, 0)
RoleMoveOneStep(-16, 8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-16, 8, 0)
WaitEventAutoScriptRun(0, false, false)

[Event_00158_00003_Trigger]
//青衣弟子：
//听说蜀山禁地的尽头是一座
//"锁妖塔"，自本门开山立派
//以来，历代祖师降伏的妖魔
//都关在塔内
VideoRestore()
//妖魔一旦被关入锁妖塔内，就
//永远也别想出来，直到塔中的
//化妖水将它们的妖气化尽，成
//为尘土为止。
ReplaceAndPause()
//青衣弟子：
//我来这里三年了，也没到过
//禁地，更甭说看过锁妖塔了
//不过～听师父说：那座塔足
//足有百丈高呢！

[Event_00158_00004_Trigger]
//青衣弟子：
//掌门师父是位嫉恶如仇的人
//他老人家只要听到哪里有妖怪
//作乱，就会立刻御剑乘风而去
VideoRestore()
//半柱香时间不到，就见他拎着
//乾坤袋回来，定又是收了妖怪
VideoRestore()
//前不久，掌门师父曾在一天
//之内就收了一只蛤蟆精和一
//只蛇妖女。
VideoRestore()
//这等本事，我想～即使是
//二郎神下凡也得汗颜吧！
ReplaceAndPause()
//青衣弟子：
//不知道要到哪一天，我才能
//修炼到像掌门师父那般出神
//入化的本事

[Event_00157_00003_Trigger]
//青衣弟子：
//此地是蜀山仙剑派所在
ReplaceAndPause()
//青衣弟子：
//最近天气变得很不正常
//这麽大的雪我还是头一次遇到
VideoRestore()
//听说西南方的南绍、大理一带
//却是热的反常，已经一整年没
//有过下雨了

[Event_00157_00004_Trigger]
//青衣弟子：
//呼．．好冷～好冷！

[Event_00160_00003_Trigger]
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//这．．这不是灵儿戴的
//玉佛珠吗！怎麽会在这里？
WaitEventAutoScriptRun(2, false, true)
SetDlgUpper(0, 0x00000000, false)
//青衣弟子：
//唉呀！　不能拿走哇
//那是掌门师父交待我
//要拿去炼丹炉销毁的
//我差点给忘了
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//销毁？这怎麽行！
//这串佛珠是我一个朋友的
EventSetState(-1, -1, false, false)
AddItem(214, 0)
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//"李逍遥收起玉佛珠"
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//青衣弟子：
//那佛珠是妖魔所化身的呀！
//师父说不能留它在人间
//虽然它的法力被师父封住了
//但还是很危险的！
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//先把它交给我吧
//我自会向你们掌门说清楚的
VideoUpdate(0, false)
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//李逍遥问道：
//小石头！　小石头！
//你还在吗？
VideoUpdate(0, false)
SetDlgLower(47-1-1, 0x00000000, false)
//小石头：
//呜．．．主人．．
//主人被关起来了．．
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//李逍遥问道：
//主人？．．是说灵儿吗！
//到底发生什麽事了，快告诉我
VideoUpdate(0, false)
SetDlgLower(47-1-1, 0x00000000, false)
//小石头：
//有一伙苗疆人为了争夺主人
//跟一个独眼的打了起来
//结果通通都死掉了。
VideoRestore()
//住在这里的老头子刚好经过
//硬说那些人是主人杀的，我
//拼命想保护主人，结果主人
//还是被抓走了
VideoRestore()
//我听见那老头子说，他要把
//主人关进锁妖塔
VideoUpdate(0, false)
SetDlgLower(3-3-1, 0x00000000, false)
//林月如：
//他们怎麽可以这麽不讲理！？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//李逍遥：
//怎麽．．怎麽可能！
//灵儿是活生生的人呐
//怎麽会被剑圣前辈当作
//妖怪捉起来了？
VideoUpdate(0, false)
SetDlgLower(47-1-1, 0x00000000, false)
//小石头：
//求求你们一定要救我的主人
//一旦被关入锁妖的人，绝无
//生还的机会啊！
EventSetTriggerScript(160, 4, Scr_0x6B16)
EventSetTriggerScript(159, 1, Scr_0x6B24)
EventSetTriggerScript(159, 2, Scr_0x6B1A)

[Event_00160_00004_Trigger]
//阿青：
//你好，我是负责炼丹的阿青

[Scr_0x6B16]
//青衣弟子：
//我可不管了
//你别害我被掌门骂啊！

[Scr_0x6B1A]
//酒剑仙：
//怎麽啦？
//看你一副气急败坏的样子

[Scr_0x6B1E]
NPCMoveToBlock(27, 71, 0, 4, true)
EventSetState(160, 5, true, true)
EventSetState(-1, -1, false, false)

[Event_00160_00005_Trigger]
//无可救药！

[Scr_0x6B24]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetDirFrame(0, 0)
PartySetPos(33, 78, 1)
RoleSetDirFrame(0, 2, 0)
RoleSetDirFrame(1, 2, 0)
EventSetTriggerScript(158, 2, Scr_0x69AC)
VideoUpdate(0, false)
SetDlgUpper(1-7-1, 0x00000000, false)
//李逍遥：
//前辈！　这是什麽意思？
VideoUpdate(0, false)
SetDlgLower(29-1-1, 0x00000000, false)
//剑圣：
//嗯？　阿青怎麽还没把这
//东西烧掉呢！　真是的．．
VideoUpdate(0, false)
SetDlgUpper(1-7-1, 0x00000000, false)
//李逍遥：
//不．．我是问～原来持有
//这佛珠的主人呢？！
//您是不是把她关起来了？
VideoUpdate(0, false)
SetDlgLower(29-1-1, 0x00000000, false)
//剑圣：
//妖邪魔物，自该打入锁妖塔
VideoUpdate(0, false)
SetDlgUpper(1-5-1, 0x00000000, false)
//李逍遥：
//你．．．竟然．．
SetDlgLower(29-1-1, 0x00000000, false)
//剑圣：
//怎麽了？有什麽不对吗？
VideoUpdate(0, false)
SetDlgUpper(1-5-1, 0x00000000, false)
//李逍遥：
//她．．她是我的朋友啊！
VideoRestore()
//她只是一个柔弱的女孩子
//你把她当作妖怪囚入那种地方
//岂不是要致她於死地！？
VideoUpdate(0, false)
SetDlgLower(29-1-1, 0x00000000, false)
//剑圣：
//朋友？　李少侠，以後
//少去结交那些邪魔歪道
VideoRestore()
//修炼仙剑派的剑术者，最忌
//受到狐精鬼魅所诱，丧失心
//志、因而坠入魔道。
//这番道理你要明白呀．．
VideoUpdate(0, false)
SetDlgUpper(1-5-1, 0x00000000, false)
//李逍遥：
//我不是来听你这些大道理
//请你马上把灵儿放出来！！
EventSetDirFrame(159, 2, 3, 0)
VideoUpdate(0, false)
SetDlgLower(29-1-1, 0x00000000, false)
//剑圣：
//你死了这条心吧！
//锁妖塔内乃另一处世界，收入
//塔中的妖怪，绝无放出之途
VideoUpdate(0, false)
SetDlgUpper(1-5-1, 0x00000000, false)
//李逍遥：
//你们．．把人命当成什麽了？
SetDlgLower(29-1-1, 0x00000000, false)
//剑圣：
//对长辈说话是这种态度吗！
VideoUpdate(0, false)
SetDlgLower(7-1-1, 0x00000000, false)
//酒剑仙：
//哎唉呀！你们俩个怎麽回事
//突然吵起来了？
VideoUpdate(0, false)
SetDlgUpper(1-5-1, 0x00000000, false)
//李逍遥：
//你们不放人，我自己去救！
VideoUpdate(0, false)
SetDlgLower(29-1-1, 0x00000000, false)
//剑圣：
//哼～　不懂事！
EventSetDirFrame(159, 1, 2, 0)
VideoUpdate(0, false)
SetDlgLower(29-1-1, 0x00000000, false)
//剑圣：
//本派创立百年以来
//从未有人进入塔中能活着回来
//你要是不怕死就请自便吧！
EventSetAutoScript(159, 1, Scr_0x6B1E)
WaitEventAutoScriptRun(20, false, false)
EventSetDirFrame(159, 2, 2, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(159, 2, 1, 0)
WaitEventAutoScriptRun(12, false, false)
EventSetDirFrame(159, 2, 3, 0)
WaitEventAutoScriptRun(8, false, false)
SetDlgLower(7-1-1, 0x00000000, false)
//酒剑仙苦笑曰：
//逍遥～你这玩笑可开大了
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgUpper(1-5-1, 0x00000000, false)
//李逍遥：
//前辈，我是认真的！
VideoUpdate(0, false)
SetDlgLower(7-1-1, 0x00000000, false)
//酒剑仙：
//凡事都太认真就不好了
//我师兄说的没错，进塔
//容易、出塔难
VideoRestore()
//收入锁妖塔的全是极凶恶的
//妖魔，数百年来从没有一个
//人进到塔内深处还能活着回
//来的
VideoUpdate(0, false)
SetDlgUpper(1-7-1, 0x00000000, false)
//李逍遥：
//换句话说，就是有人
//曾进入塔中罗？
VideoUpdate(0, false)
SetDlgLower(7-1-1, 0x00000000, false)
//酒剑仙：
//是．．是没错．．
//在我太师父那一代，曾发生过
//一件惨事。有一位我的太师叔
//犯了门规，畏罪逃入锁妖塔中
//当时本门数十位弟子追入缉捕
//结果没有一个人回来。
//自此以後，太师父立下规定
//严禁门下弟子进入锁妖塔
//违者尽废武功并逐出师门．．
VideoUpdate(0, false)
SetDlgUpper(1-7-1, 0x00000000, false)
//李逍遥：
//我不做蜀山弟子
//就不必遵守你们的门规！
VideoUpdate(0, false)
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//李大哥．．．前辈说的没错
//此事非人类之力所能及
//救人的事，须从长计议才是
VideoUpdate(0, false)
SetDlgUpper(1-5-1, 0x00000000, false)
//李逍遥：
//不！　灵儿挺得了那麽久吗？
//况且，她根本没有做错任何事
//为何要受这种罪？！
WaitEventAutoScriptRun(8, false, false)
SetDlgCenter(0, 0x00000000, false)
//众人默然．．．．
WaitEventAutoScriptRun(10, false, false)
EventSetDirFrame(159, 2, 0, 0)
VideoUpdate(0, false)
SetDlgLower(7-1-1, 0x00000000, false)
//酒剑仙：
//唉．．好吧．．．
VideoRestore()
//跟我到外面来！
EventSetState(159, 2, false, false)
SceneSetScripts(158, Scr_0x6BCA, Null)
SceneEnter(158)
FadeOut(0)

[Scr_0x6BCA]
PartySetRole(1)
PartySetPos(26, 90, 0)
RoleSetDirFrame(0, 2, 0)
EventSetState(158, 5, true, true)
EventSetState(159, 0, true, true)
WaitEventAutoScriptRun(6, false, false)
SetDlgLower(7-1-1, 0x00000000, false)
//酒剑仙：
//你当真非要去不可？
SetDlgUpper(1-8-1, 0x00000000, false)
//李逍遥：
//晚辈心意已决！
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(158, 5, 3, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(158, 5, 0, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(7-1-1, 0x00000000, false)
//酒剑仙：
//唉～哎．．造化弄人啊
EventSetAutoScript(158, 5, Scr_0x6C24)
WaitEventAutoScriptRun(25, false, false)
SetDlgLower(7-1-1, 0x00000000, false)
//酒剑仙：
//收下这些吧．．
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//$05酒剑仙传授给李逍遥"酒神咒"、
//"醉仙望月步"、"仙风云体术"，
//并赠予"雷灵珠"、符咒若干张
//以及"酒"二壶
RoleAddMagic(1, 76)
RoleAddMagic(1, 96)
RoleAddMagic(1, 99)
AddItem(204, 0)
AddItem(2, 3)
AddItem(6, 3)
AddItem(3, 3)
AddItem(26, 2)
VideoUpdate(0, false)
SetDlgLower(7-1-1, 0x00000000, false)
//酒剑仙：
//$02这些是为师所有的法宝了
//这颗雷灵珠呢，是从蜘蛛精身
//上得到的，反正我也用不着
VideoRestore()
//酒呢～不是给你喝的，而是让
//你使法术用的，这招"酒神咒"
//是我自创的法术，其威力不下
//於本门任何一项绝学
//不过千万要记住．．由於此法
//术威力过於强大，所以一生之
//中只能使用九次，否则必气竭
//而亡
VideoRestore()
//而且～每次使出此招，必耗尽
//全身的灵力，所以除非紧要关
//头，勿轻易使用
EventSetAutoScript(158, 5, Scr_0x6C26)
WaitEventAutoScriptRun(16, false, false)
SetDlgLower(7-1-1, 0x00000000, false)
//酒剑仙：
//虽是短暂的时日
//毕竟～你我算是师徒一场
//我能帮你的，只有这些了
VideoRestore()
//你．．好自为之．．
WaitEventAutoScriptRun(2, false, false)
EventSetAutoScript(159, 0, Scr_0x6C2B)
WaitEventAutoScriptRun(8, false, false)
SetDlgUpper(3-4-1, 0x00000000, false)
//林月如：
//我．．我跟你去！
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//不．．这是我一个人
//的事情，不能连累你
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//林月如：
//还说这种话！？
VideoRestore()
//你的事就是我的事，救灵儿
//妹子的事，怎能少我一份？
EventSetState(159, 0, false, false)
PartySetRole(13)
ReplaceAndPause()

[Scr_0x6C24]
NPCMoveToBlock(26, 89, 1, 2, true)

[Scr_0x6C26]
NPCMoveToBlock(25, 88, 0, 2, true)

[Event_00158_00005_Trigger]
//酒剑仙：
//唉～　好自为之．．

[Scr_0x6C2B]
NPCMoveToBlock(25, 89, 1, 3, false)

[Event_00148_00008_Auto]
NPCMoveToBlock(12, 38, 0, 4, true)
ReplaceAndPause()
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(3, false, false)
NPCMoveToBlock(11, 37, 1, 4, true)

[Event_00148_00003_Trigger]
SetDlgCenter(0, 0x00000000, false)
//一扇厚重的铜门．．

[Scr_0x6C36]
EventSetState(148, 8, true, false)
FadeToScene(-1, 0)
SetDlgLower(11-1-1, 0x00000000, false)
//天鬼皇：
//让我来吧！
WaitEventAutoScriptRun(6, false, false)
PartyWalkToBlock(11, 37, 1, 8)
PartyWalkToBlock(13, 39, 1, 4)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(1, 1, 0)
WaitEventAutoScriptRun(16, false, false)
EventSetState(148, 8, false, false)
EventSetDirFrame(148, 2, 0, 1)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(148, 2, 0, 2)
WaitEventAutoScriptRun(6, false, false)
SetDlgCenter(0, 0x00000000, false)
//$07"喝～　啊～"~50$02
WaitEventAutoScriptRun(2, false, false)
PlaySound(132)
EventSetDirFrame(148, 2, 0, 3)
WaitEventAutoScriptRun(5, false, false)
EventSetDirFrame(148, 2, 0, 4)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(148, 2, 0, 5)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(148, 2, 0, 6)
EventSetState(148, 8, true, false)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(148, 8, 0, 0)
WaitEventAutoScriptRun(3, false, false)
EventSetDirFrame(148, 8, 3, 0)
WaitEventAutoScriptRun(3, false, false)
SetDlgLower(11-1-1, 0x00000000, false)
//天鬼皇：
//後会有期！
EventSetState(148, 8, false, false)
FadeToScene(-1, 0)
EventSetState(148, 3, false, false)
EventSetState(148, 4, false, false)
EventSetState(148, 5, false, false)

[Event_00147_00002_Trigger]
EventSetState(147, 5, true, false)
NPCSetFrame(1)
VideoUpdate(0, false)
SetDlgBox(0x00000000)
//得到一把"七星剑"
AddItem(126, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgCenter(0, 0x00000000, false)
//死屍发出哭声~40
RoleSetDirFrame(0, 1, 0)
RoleMoveOneStep(16, 8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(16, 8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(16, 8, 0)
WaitEventAutoScriptRun(0, false, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//　　　是．．是谁！？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//$08呜．．呼．．大师兄
//我对不起你．．
EventSetState(147, 3, true, false)
PlaySound(212)
FadeToScene(-1, 2)
SetDlgUpper(24-1-1, 0x00000000, false)
//死灵：
//$06你们又是谁？
VideoRestore()
//$02唔！活人？
//活人怎麽可以进来这里！
VideoRestore()
//你的师父谁？他没告诉你
//这里是不许进来的吗！
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//我．．我不是．．
VideoUpdate(0, false)
SetDlgUpper(24-1-1, 0x00000000, false)
//死灵：
//胆敢违逆师门禁令
//我来代替你师父惩罚你！
SetBattleMusic(48)
SetBattlefield(35)
BattleStart(163, Scr_0x9C9B, Null)
SetBattleMusic(39)
MusicPlay(87, true, 0.00)
BattleEnd()
PartySetPos(47, 73, 1)
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//死灵：
//$06呜呼．．师弟．．
//是我．．是我害死你们的．．$02~70
EventSetState(147, 3, false, false)
FadeToScene(-1, 3)
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//从他的衣着看来，也许是以
//前冤死在塔中的蜀山仙剑派
//的前辈．．
EventSetState(147, 4, true, false)
FadeToScene(-1, 0)
WaitEventAutoScriptRun(10, false, false)
PartyWalkToBlock(47, 73, 0, 2)
WaitEventAutoScriptRun(6, false, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//姑娘．．．你是．．？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//姜婉儿：
//我是他女儿．．
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//你．．．是人？
EventSetDirFrame(147, 4, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(15-1-1, 0x00000000, false)
//姜婉儿：
//你说呢？
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//令尊．．啊～真对不起
//冒犯了令尊的英灵．．
EventSetDirFrame(147, 4, 2, 0)
VideoUpdate(0, false)
SetDlgUpper(15-1-1, 0x00000000, false)
//姜婉儿：
//十八年了，爹一直到死後
//灵魂还无法从自责中解脱
//我．．应该感谢你们才是．．
VideoUpdate(0, false)
SetDlgLower(3-4-1, 0x00000000, false)
//林月如：
//你．．在这里生活十八年了？
EventSetDirFrame(147, 4, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(15-1-1, 0x00000000, false)
//姜婉儿：
//我娘在这里生下我的．．
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//这里这麽多妖怪．．你．．
VideoUpdate(0, false)
SetDlgUpper(15-1-1, 0x00000000, false)
//姜婉儿：
//我有一半是妖族的血统，何况
//看在我死去的娘亲的面子上，
//其它的妖怪不会对我怎麽样
VideoRestore()
//倒是你们．．突然有人类闯进
//来的话，那些妖怪是会群起攻
//之的
VideoRestore()
//他们都相信～吞吃掉九十九
//个人类，或是一千只妖怪，
//就能获得离开这里的力量．．
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//这方法太残忍了吧！
//会是真的吗？
VideoUpdate(0, false)
SetDlgUpper(15-1-1, 0x00000000, false)
//姜婉儿：
//讹言罢了，不过．．
//这里许多妖怪都相信这传说
//所以～劝你们还是小心为是
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//你．．跟我们一道走吧
//我们此来是为了救一位朋友
//等我们找到她後，让我们一
//起想办法离开这鬼地方
VideoUpdate(0, false)
SetDlgUpper(15-1-1, 0x00000000, false)
//姜婉儿：
//离开～？　那是不可能的
//能出去，大家早就出去了
EventSetDirFrame(147, 4, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(15-1-1, 0x00000000, false)
//姜婉儿：
//你们的好意，我心领了
//我自有我的生存之道
VideoRestore()
//告辞～
EventSetState(147, 4, false, false)
MusicStop()
PlaySound(170)
FadeToScene(-1, 3)
MusicPlay(80, true, 3.00)
ReplaceAndPause()
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//前辈．．您安息吧

[Event_00147_00004_Auto]
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(2, false, false)
NPCMoveToBlock(45, 71, 1, 2, true)

[Scene_00154_Enter]
PartySetPos(45, 86, 1)
ReplaceAndPause()

[Scr_0x6D0C]
ReplaceAndPause()
[Event_00148_00007_Trigger]
//坛中妖怪：
//放．．我．．出．．去！
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//李大哥，要救他出来吗？
GotoWithSelect(Scr_0x6D0C)
FadeOut(0)
NPCSetFrame(1)
EventSetState(148, 6, true, true)
PartySetPos(29, 91, 1)
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//是你们放我出来的吗？
//嗯．．我应该报答你们才是
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//哦！)
VideoUpdate(0, false)
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//我的报答，就是吃了你们
//让你们成为我的一部份！
BattleStart(293, Null, Null)
BattleEnd()
RoleRevive(5, true)
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//等一下，你先听我说！
VideoUpdate(0, false)
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//你们还有什麽遗愿，说来
//听听吧？等我吃足九十九人
//离开这锁妖塔後，说不定可
//以替你们办到
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//我们救了你，为什麽还要被
//你吃掉，这太没道理了吧！
VideoUpdate(0, false)
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//这是我们天鬼族的规矩
//你们怨不得我
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//我若不放你出来，就不会
//有现在这件事了，对不对？
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//唔．．．没错
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//事情既然是因我而起，就应该
//由我来承担这责任，你不必负
//责～你说是不是？
VideoUpdate(0, false)
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//唔．．．这当然！
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//既然是我的责任，而非你的
//就应该照我们人类的规矩来办
VideoUpdate(0, false)
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//这．．．唔．．好像有道理
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//照我们人类的规矩，就不用
//这样打得你死我活了
//只要被救的人答应替救他的人
//做一件不违悖道义的事就行了
VideoUpdate(0, false)
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//但是．．我是鬼，你是人
//我能替你做什麽事？
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//李逍遥心里想：
//"哈～　太好了
//果然鬼怪头脑都很单纯"
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//这样吧．．．你帮我们
//离开这层迷宫到下一层就行了
VideoUpdate(0, false)
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//小事一件，你们往西北方走
//到一扇铜门旁边等我
EventSetState(148, 6, false, false)
EventSetTriggerScript(148, 3, Scr_0x6C36)
ReplaceAndPauseWithNop(Scr_0x6D79, 0)

[Scr_0x6D79]
SetDlgCenter(0, 0x00000000, false)
//一个空的坛子

[Event_00146_00002_Trigger]
EventSetState(-1, -1, false, false)
EventSetState(147, 0, true, false)
FadeToScene(-1, 0)
RoleMoveOneStep(-16, 8, 0)
WaitEventAutoScriptRun(2, false, false)
//镇狱明王：
//汝为何人，所为何来？
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//何．．何方妖孽？报上名来！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//镇狱明王：
//无礼之徒！
//吾乃此塔之守护神～"镇狱明王"
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//这座塔就是您创建的吗？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//镇狱明王：
//非也～锁妖塔乃人类所建
//吾乃天界诸神顺应人界之请托
//下凡前来协助镇守此塔．．
VideoRestore()
//你们还没回答我的问题！
//不说出来意，不许通过！
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//喔～　我们来找一个人
//可否请您帮个忙．．
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//镇狱明王：
//人．．？
VideoRestore()
//塔内关的只有妖魔，没有人类
//凡人之躯进入塔内只死无生
//汝等速速回去吧！
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//我有一位朋友身陷塔中
//就是因为只死无生，所以
//我非去救她不可
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//镇狱明王：
//唔．．．汝是蜀山弟子吗？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//不是！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//镇狱明王：
//嗯．．我的职责是
//不让妖魔逃出塔外
VideoRestore()
//除了蜀山弟子，其余人要
//进塔中，并不在禁令之列
//汝要进入，我不必阻止
VideoRestore()
//你请吧．．
VideoUpdate(0, false)
EventSetState(147, 0, false, false)
FadeToScene(-1, 0)

[Event_00154_00006_Trigger]
EventSetTriggerScript(154, 4, Scr_0x6E48)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//这位妖怪仁兄，不想打架
//的话，就请让路吧！
VideoUpdate(0, false)
//沉思鬼：
//我是很想走开呀
//可是．．我有很大的困难．．
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//困难？　什麽困难说来听听
//也许我可以帮你一把
VideoUpdate(0, false)
//沉思鬼：
//你～真的要帮我．．？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//只要你让路，说出来我就帮你
VideoUpdate(0, false)
//沉思鬼：
//太好了～请你们告诉我
//我应该先踏出左脚．．
//还是先踏出右脚呢？
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//这．．．？
//先踏哪只脚不都一样！
VideoUpdate(0, false)
//沉思鬼：
//不对～不对！
//左脚是左脚，右脚是右脚
//二者怎麽会一样
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//那就随便啦，你习惯哪只脚
//就是那只脚不就好了，拜托
//你快让路吧！
VideoUpdate(0, false)
//沉思鬼：
//怎麽可以随便呢！
//我在这里想了五百年了
//一直参不透这道理呢
VideoUpdate(0, false)
SetDlgLower(1-7-1, 0x00000000, false)
//李逍遥：
//那．．左脚吧
VideoUpdate(0, false)
//沉思鬼：
//左脚．．为何不是右脚呢？
//先踏右脚也是走的到，为什麽
//走路要先出左脚而不出右脚呢
VideoUpdate(0, false)
SetDlgLower(3-2-1, 0x00000000, false)
//林月如：
//你很烦呢！
//不是左脚那就右脚吧
VideoUpdate(0, false)
//沉思鬼：
//右脚？右脚是我的脚，左脚也
//是我的脚呀！为什麽二只脚要
//有左右先後之分呢？为什麽？
WaitEventAutoScriptRun(0, false, false)
SetDlgLower(3-3-1, 0x00000000, false)
//林月如：
//这．．．你．．
//你再不走开我就砍你！
NPCSetDirFrame(1, 0)
VideoUpdate(0, false)
//沉思鬼：
//你砍我？　我没有砍你
//你又为何要砍我呢？
//你知道这问题的答案吗？
WaitEventAutoScriptRun(2, false, true)
SetDlgLower(3-3-1, 0x00000000, false)
//林月如：
//　　你．．！！
VideoUpdate(0, false)
RoleSetDirFrame(0, 1, 0)
SetDlgLower(1-8-1, 0x00000000, false)
//李逍遥：
//月如～算了！
//这种蠢问题应该难不倒我们的
//何况我们答应帮助人家在先
ReplaceAndPause()
//沉思鬼：
//你知道这问题的答案吗？

[Scr_0x6E1F]
//沉思鬼：
//我应该先踏出左脚．．
//还是先踏出右脚呢？
//你知道这问题的答案吗？
VideoUpdate(0, false)
SetDlgLower(35-1-1, 0x00000000, false)
//哈哈哈～太可笑了
//原来是这麽无聊的问题！
VideoUpdate(0, false)
//沉思鬼：
//怎麽是无聊的问题！？
//五百年来这问题一直困扰着我
VideoUpdate(0, false)
SetDlgLower(35-1-1, 0x00000000, false)
//你把两只脚一齐砍下来
//不就没这问题了
VideoUpdate(0, false)
//沉思鬼：
//啊～～！！　然也～然也．．
EventSetState(-1, -1, false, false)
FadeToScene(-1, 0)

[Event_00154_00004_Trigger]
NPCSetFrame(1)
FadeToScene(-1, 0)
SetDlgLower(35-1-1, 0x00000000, false)
//书中仙：
//走开～走开
//俺在看书，别吵！
NPCSetFrame(0)
ReplaceAndPause()
NPCSetFrame(1)
VideoUpdate(0, false)
SetDlgLower(35-1-1, 0x00000000, false)
//书中仙：
//走开！俺在看书的时候
//不喜欢旁人打扰
NPCSetFrame(0)
ReplaceAndPause()
SetDlgCenter(0, 0x00000000, false)
//"书简中的妖怪不理睬你"

[Scr_0x6E48]
NPCSetFrame(1)
VideoUpdate(0, false)
SetDlgLower(35-1-1, 0x00000000, false)
//书中仙：
//我在看书，别吵！
NPCSetFrame(0)
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//等等！　老伯．．
NPCSetFrame(1)
VideoUpdate(0, false)
SetDlgLower(35-1-1, 0x00000000, false)
//书中仙：
//没礼貌！　叫我仙人
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//仙．．人？
VideoUpdate(0, false)
SetDlgLower(35-1-1, 0x00000000, false)
//书中仙：
//有何不对！
//老夫生平阅遍经史子集
//拜读诸子百家着作，死後附灵
//於书简之中，五百年来参遍天
//地人三界无数经文
//论学问之渊、知识之广，就连
//天界的神佛也不一定比得过我
//汝等小辈尊我一声书中之仙人
//不过恰如其份
VideoUpdate(0, false)
SetDlgUpper(1-6-1, 0x00000000, false)
//李逍遥：
//真是失敬了
//　书～中～仙～前辈．．
VideoUpdate(0, false)
SetDlgLower(35-1-1, 0x00000000, false)
//书中仙：
//哇哈哈～这话听得令人舒坦！
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//书仙前辈，既然您读过这麽
//多书，学问一定很好罗？
SetDlgLower(35-1-1, 0x00000000, false)
//书中仙：
//问这什麽废话！
VideoUpdate(0, false)
SetDlgUpper(1-6-1, 0x00000000, false)
//李逍遥：
//任何谜题都难不倒您罗？
SetDlgLower(35-1-1, 0x00000000, false)
//书中仙：
//那是当然！
VideoUpdate(0, false)
SetDlgUpper(1-6-1, 0x00000000, false)
//李逍遥：
//那～有个问题想请教您．．
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//"李逍遥将沉思鬼的
//问题转述一遍．．"
VideoUpdate(0, false)
SetDlgLower(35-1-1, 0x00000000, false)
//书中仙：
//这问题还不简单！
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//您可否告诉我们答案
VideoUpdate(0, false)
SetDlgLower(35-1-1, 0x00000000, false)
//书中仙：
//不行！由我来跟他说
//你们带我走
NPCSetFrame(0)
WaitEventAutoScriptRun(2, false, false)
EventSetState(-1, -1, false, false)
EventSetState(154, 5, false, false)
AddItem(230, 0)
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//书中仙自动跳入李逍遥行囊中
SetDlgBox(0x00000000)
//得到"天书"
EventSetTriggerScript(154, 6, Scr_0x6E1F)

[Scr_0x6E9F]
NPCMoveToBlock(52, 27, 0, 3, false)
NPCSetDirFrame(2, 0)

[Scr_0x6EA2]
NPCMoveToBlock(52, 26, 1, 3, false)
NPCSetDirFrame(2, 0)

[Event_00145_00006_Auto]
EventModifyPos(-1, -1, -16, 8)
EventModifyPos(-1, -1, -16, 8)
EventModifyPos(-1, -1, -12, 6)
EventModifyPos(-1, -1, -12, 6)
EventModifyPos(-1, -1, -8, 4)
EventModifyPos(-1, -1, -8, 4)
EventModifyPos(-1, -1, -6, 3)
EventModifyPos(-1, -1, -6, 3)
EventModifyPos(-1, -1, -4, 2)
EventModifyPos(-1, -1, -4, 2)
EventModifyPos(-1, -1, -2, 1)
EventModifyPos(-1, -1, -2, 1)

[Event_00145_00003_Trigger]
EventSetState(-1, -1, false, false)
MusicStop()
PartyWalkToBlock(49, 25, 1, 8)
RoleSetDirFrame(0, 2, 0)
ViewportMove(4, -4, 24)
ViewportMove(0, -2, 56)
SetDlgLower(50-1-1, 0x00000000, false)
//逍遥哥．．哥．．
EventSetState(145, 4, true, false)
PartySetRole(1)
ViewportMove(0, 0, 0)
RoleMoveOneStep(-16, 8, 0)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(145, 4, 3, 0)
WaitEventAutoScriptRun(2, false, false)
RoleMoveOneStep(-8, 4, 0)
WaitEventAutoScriptRun(3, false, false)
RoleMoveOneStep(-8, 4, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//$09灵儿．．你．．真的．．
//．．真的是你吗？~70
ViewportMove(52, 11, -1)
SetDlgLower(50-1-1, 0x00000000, false)
//$07我只是只丑陋的蛇女
//又失去化成人形的能力
//活着对我来说．．已经
//没有意义
//你．．何必犯险来救我~80
ViewportMove(0, 0, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(4, false, false)
//　$04不．．不可能！~70
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
//$05我的灵儿．．我的灵儿是．．~60
SceneEnter(169)
PlayCDOrMusic(2, 22)
FadeOut(2)

[Scr_0x6EDC]
SetPalette(0)
PartySetPos(48, 26, 1)
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 2, 0)
EventSetDirFrame(145, 4, 2, 0)
ViewportMove(52, 11, -1)
VideoUpdate(0, false)
SetDlgUpper(50-1-1, 0x00000000, false)
SetDlgLower(0, 0x00000000, false)
//赵灵儿：
//$11"仙灵仙岛藏仙踪　翩翩少年把仙求
//仙宫仙女不相识　错把牛郎当情郎"~80
FadeOut(2)
ViewportMove(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//$01我．．我．．想起来了
//．．我想起来了！~50
EventSetDirFrame(145, 4, 3, 0)
WaitEventAutoScriptRun(2, false, false)
PartyWalkToBlock(49, 25, 1, 4)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//$02灵儿！　是我不好
//是我对不起你！~60
ViewportMove(52, 11, -1)
SetDlgUpper(50-1-1, 0x00000000, false)
SetDlgLower(0, 0x00000000, false)
//赵灵儿：
//$09那已是．．过去．．的事．．~70
ViewportMove(0, 0, 0)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//$04一夜夫妻、一世恩情
//你要是有什麽不测
//我岂能苟活！？~65
FadeOut(0)
EventSetState(145, 4, false, false)
EventSetState(145, 5, true, false)
HeroSetSprite(0, 511, true)
PartySetPos(53, 16, 0)
RoleMoveOneStep(0, 0, 10)
RoleSetDirFrame(0, 0, 0)
ViewportMove(0, 0, 0)
RoleMoveOneStep(0, 16, 10)
RoleSetDirFrame(0, 0, 1)
VideoUpdate(0, false)
PlaySound(45)
RoleMoveOneStep(0, 16, 10)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
RoleMoveOneStep(0, 16, 10)
RoleSetDirFrame(0, 0, 1)
VideoUpdate(0, false)
RoleMoveOneStep(0, 16, 10)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
RoleMoveOneStep(0, 16, 10)
RoleSetDirFrame(0, 0, 1)
VideoUpdate(0, false)
RoleMoveOneStep(0, 16, 10)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
RoleMoveOneStep(0, 16, 4)
RoleSetDirFrame(0, 0, 1)
VideoUpdate(0, false)
RoleMoveOneStep(0, 16, 3)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
RoleMoveOneStep(0, 16, 2)
RoleSetDirFrame(0, 0, 1)
VideoUpdate(0, false)
RoleMoveOneStep(0, 16, 0)
RoleSetDirFrame(0, 0, 2)
WaitEventAutoScriptRun(0, false, false)
PlaySound(92)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 0, 3)
WaitEventAutoScriptRun(3, false, false)
RoleSetDirFrame(0, 0, 4)
EventSetAutoScript(145, 5, Scr_0x6E9F)
WaitEventAutoScriptRun(14, false, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//　太好了．．)
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//灵儿～　一切都没事了！)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(50-1-1, 0x00000000, false)
//赵灵儿：
//林姐姐．．我．．
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//你别在意，当初在苏州时
//我就大概猜出你和李大哥
//的关系了
VideoRestore()
//反倒是～你不会怪我．．
//抢了你的逍遥大哥吧？
VideoUpdate(0, false)
SetDlgLower(50-1-1, 0x00000000, false)
//赵灵儿：
//林姐姐．．谢谢你
EventSetAutoScript(145, 5, Scr_0x6EA2)
WaitEventAutoScriptRun(5, false, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//从今以後你我就是好姐妹啦！
VideoRestore()
//我们三人要永远在一起，永远
//不分开！)$02
MusicStop()
EventSetState(146, 0, true, false)
PlaySound(122)
VideoShake(10, 4)
WaitEventAutoScriptRun(12, false, false)
SetDlgUpper(0, 0x00000000, false)
//镇狱明王：
//大胆狂徒！！
//竟敢私纵犯妖，饶不得！
RoleSetAttr(2, 0, 91)
RoleSetAttr(2, 1, 5)
RoleSetAttr(2, 2, 512)
RoleSetAttr(2, 64, 4)
RoleAddMagic(2, 1)
PartySetRole(123)
RoleModifyHP(999, true)
SetBattlefield(31)
SetBattleMusic(45)
BattleStart(188, Scr_0x9C9B, Null)
MusicPlay(36, true, 0.00)
BattleEnd()
SceneEnter(153)

[Event_00153_00003_Auto]
NPCMoveToBlock(50, 24, 0, 4, true)

[Scr_0x6F68]
NPCMoveToBlock(50, 24, 1, 4, true)

[Event_00153_00004_Auto]
NPCMoveToBlock(51, 23, 0, 3, false)
NPCSetDirFrame(3, 0)

[Event_00153_00005_Auto]
NPCMoveToBlock(49, 25, 0, 3, false)
NPCSetDirFrame(3, 0)

[Event_00153_00006_Auto]
NPCMoveToBlock(51, 22, 0, 4, true)

[Event_00153_00007_Auto]
NPCMoveToBlock(49, 22, 0, 4, true)

[Event_00153_00008_Auto]
NPCMoveToBlock(48, 28, 0, 3, false)
NPCMoveToBlock(50, 30, 1, 3, false)
NPCSetDirFrame(2, 0)

[Event_00153_00009_Auto]
NPCMoveToBlock(48, 28, 0, 3, false)
NPCMoveToBlock(49, 29, 1, 3, false)
NPCSetDirFrame(2, 0)

[Event_00153_00010_Auto]
NPCMoveToBlock(48, 28, 0, 3, false)
NPCMoveToBlock(48, 28, 1, 3, false)
NPCSetDirFrame(2, 0)

[Event_00153_00011_Auto]
NPCMoveToBlock(48, 26, 0, 3, false)

[Event_00153_00012_Auto]
NPCMoveToBlock(48, 24, 0, 4, true)

[Event_00153_00013_Auto]
NPCMoveToBlock(49, 20, 1, 4, true)

[Scr_0x6F86]
NPCMoveToBlock(52, 26, 1, 2, true)
NPCSetDirFrame(1, 0)

[Scene_00153_Enter]
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 3, 0)
PartySetRole(1)
PartySetPos(52, 25, 1)
WaitEventAutoScriptRun(20, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(153, 1, 1, 0)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(153, 1, 0, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(3-3-1, 0x00000000, false)
//林月如：
//你们．．想干什麽！？
EventSetState(153, 3, true, false)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(153, 6, 0, 0)
EventSetDirFrame(153, 7, 0, 0)
EventSetDirFrame(153, 11, 2, 0)
EventSetDirFrame(153, 12, 2, 0)
EventSetDirFrame(153, 13, 0, 0)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(153, 4, 0, 0)
EventSetDirFrame(153, 5, 2, 0)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(153, 1, 1, 0)
WaitEventAutoScriptRun(10, false, false)
Call(Scr_0x717E, 0, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//你们这是什麽意思！
//想倚多取胜、坐收渔利吗？
VideoUpdate(0, false)
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//不敢～我等再有天大的胆子
//也不敢对打败镇狱明王的人
//干戈相向．．
EventSetAutoScript(153, 3, Scr_0x6F68)
WaitEventAutoScriptRun(8, false, false)
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//请您帮助我们离开这地方吧！
//既然您能打败明王，您一定
//有这本事的
EventSetAutoScript(153, 2, Scr_0x6F86)
WaitEventAutoScriptRun(18, false, false)
SetDlgLower(50-2-1, 0x00000000, false)
//赵灵儿：
//我？　我也不知道该如何
//离开这里．．
VideoUpdate(0, false)
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//啊．．．难道．．
//我们的希望又破灭了．．
VideoUpdate(0, false)
Call(Scr_0x715E, 0, 0)
EventSetDirFrame(153, 2, 0, 0)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(153, 2, 1, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(50-2-1, 0x00000000, false)
//赵灵儿：
//你们．．你们大家听我说！
EventSetDirFrame(153, 4, 3, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(153, 3, 3, 0)
EventSetDirFrame(153, 5, 3, 0)
EventSetDirFrame(153, 8, 2, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(153, 6, 3, 0)
EventSetDirFrame(153, 11, 3, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(153, 12, 3, 0)
EventSetDirFrame(153, 7, 3, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(153, 9, 2, 0)
EventSetDirFrame(153, 10, 2, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(153, 13, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//难不成要我们去找九十九个人
//类，或是一千只妖怪来吃掉
//才能够出去？
VideoRestore()
//这五百年来我想尽办法
//也只吃到五个人、八十只妖怪
//这样子我要再等多少个五百年
//才能出去啊！
VideoUpdate(0, false)
SetDlgLower(50-2-1, 0x00000000, false)
//赵灵儿：
//就算真的是如此，到时候
//还是不知道出去的方法啊！
VideoRestore()
//吃九十九人或一千只妖
//这种传言恐怕是一项毒计
//用意是要被关入塔中的妖怪
//自相残食而尽
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//唔．．有道理．．
VideoUpdate(0, false)
SetDlgLower(50-2-1, 0x00000000, false)
//赵灵儿：
//各位！人类有句话说～
//天下无难事，只怕有心人
VideoRestore()
//虽说这锁妖塔号称五百年来
//禁锢无数妖魔，无一得以逃出
//但是．．这座塔必竟是由人所
//建造出来的．．
//所以我想～不可能没有方法
//大家静下心来，好好的思考
//集众人之智慧，定会想出个
//办法来
VideoUpdate(0, false)
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//嗯．．．好，就这麽办！
EventSetDirFrame(153, 3, 1, 0)
WaitEventAutoScriptRun(7, false, false)
EventSetDirFrame(153, 3, 0, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(11-1-1, 0x00000000, false)
//天鬼皇：
//诸位兄弟！我以老大的身份在
//此宣示：从今而後～同伴之间
//绝对不许再发生互残相食的事
//违者我天鬼皇绝不饶过牠！
//知道了吗？！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//众妖答道：
//是～　大哥！
EventSetDirFrame(153, 3, 1, 0)
VideoUpdate(0, false)
SetDlgLower(11-1-1, 0x00000000, false)
//天鬼皇：
//另外．．在座的～不管是谁
//只要拿得出法子，带大伙出去
//我就把这大哥的位置让给牠！
VideoUpdate(0, false)
Call(Scr_0x715E, 0, 0)
EventSetDirFrame(153, 3, 0, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(11-1-1, 0x00000000, false)
//天鬼皇：
//怎麽？没有人肯试看看吗？
WaitEventAutoScriptRun(4, false, false)
EventSetState(154, 0, true, true)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(154, 0, 0, 1)
VideoUpdate(0, false)
SetDlgLower(35-1-1, 0x00000000, false)
//书中仙：
//这等深奥问题，想破了你们的
//鬼头鬼脑，也甭想出个屁来！
EventSetDirFrame(153, 1, 3, 0)
EventSetDirFrame(153, 2, 3, 0)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(35-1-1, 0x00000000, false)
//书中仙：
//欲穷天地之理、解古今之谜
//来请教我书中仙人～就对啦！
EventSetDirFrame(153, 3, 3, 0)
VideoUpdate(0, false)
Call(Scr_0x717E, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//老书呆子！你又来搅和什麽
SetDlgLower(35-1-1, 0x00000000, false)
//书中仙：
//耶！鬼流氓头，说话客气点！
//老夫现在可是～仙～人～呢
VideoUpdate(0, false)
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//不过区区一只下等小妖
//也敢妄自称仙人！
//是不是上回受的教训还不够？
VideoUpdate(0, false)
SetDlgLower(35-1-1, 0x00000000, false)
//书中仙：
//哈哈～我这书中仙人的封号
//可是圣灵小姐的相公亲口封的
//由不得你不承认！
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//相公？．．．我封的？
EventSetDirFrame(153, 3, 1, 0)
VideoUpdate(0, false)
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//哼～有靠山就了不起啦！
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(35-1-1, 0x00000000, false)
//书中仙：
//喂！　你们听不听我说呀？
//逃出这锁妖塔的方法只有一个
//而且．．只有我知道！
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(1-3-1, 0x00000000, false)
//李逍遥：
//真的！　前辈请快说
EventSetDirFrame(153, 3, 3, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//别信那老书呆的鬼话
//他每次都是提出一些令人
//哭笑不得的法子
SetDlgLower(35-1-1, 0x00000000, false)
//书中仙：
//嘿嘿～你不得不承认，那些
//都是最直接解决事情的方法
VideoUpdate(0, false)
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//哼～就像八年前我的一位弟兄
//误入吸妖坛中，你教我让他脱
//困的方法，就是要我用头去撞
VideoRestore()
//结果害我被吸入坛中
//受困了八年之久！
SetDlgLower(35-1-1, 0x00000000, false)
//书中仙：
//你的那位小兄弟不也就
//因此而得救了吗？
VideoUpdate(0, false)
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//你分明是在害我！
EventSetDirFrame(153, 2, 0, 0)
VideoUpdate(0, false)
SetDlgLower(50-2-1, 0x00000000, false)
//赵灵儿：
//二位别争吵了，既然书仙前辈
//有出塔的方法，大家不妨先
//听听他怎麽说
EventSetDirFrame(153, 2, 3, 0)
VideoUpdate(0, false)
SetDlgLower(35-1-1, 0x00000000, false)
//书中仙：
//哈哈～既然圣灵小姐肯给
//面子，老夫就献宝啦！
//听我道来．．．
VideoRestore()
//此塔乃五百八十四年前
//梁武帝遍集天下金刚白玉石
//召数千名一流工匠耗费二十年
//而建成．．
//并请无数高僧、法师，於塔内
//外布下无数的禁咒。历经数百
//年的变迁，此塔乃由蜀山仙剑
//派所接管～
//从学理上来说～此塔只有入口
//没有出口，而且～四面的墙壁
//神兵利器不能损，雷击火焚亦
//不能伤，仙法魔咒更是罔然
//只有从它建筑结构上的弱点
//下手，大家才能出去
VideoUpdate(0, false)
SetDlgUpper(50-2-1, 0x00000000, false)
//赵灵儿：
//意即．．从内部毁了这座塔？
VideoUpdate(0, false)
SetDlgLower(35-1-1, 0x00000000, false)
//书中仙：
//没错！　大家看见四周
//这十一支巨大的剑柱了吗？
VideoRestore()
//据我积年累月的观察．．
//此处乃锁妖塔最底层，这些
//精铁所铸的巨剑，便是支撑
//这座塔的支柱
//除了我们所在的这支以外～
//其中七支呈北斗七星磐龙阵方
//位排列，余三支列於神龙摆尾
//之方位，意即锁住龙尾
VideoRestore()
//而旁边这支最大的一把剑
//正好钉死住龙头，就成了飞龙
//困於陆，上绝天、下绝地之势
VideoUpdate(0, false)
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//哦～那好办
//就把这些剑柱全部打断！
VideoUpdate(0, false)
SetDlgLower(35-1-1, 0x00000000, false)
//书中仙：
//听我说完～鬼流氓头！
//用点大脑行不行？柱子是
//从底下支撑的，砍断上面
//的部份有啥用？
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//你．．！
VideoUpdate(0, false)
SetDlgLower(35-1-1, 0x00000000, false)
//书中仙：
//此处的化妖水池之下
//必定有这些剑柱的支撑点
VideoRestore()
//只要有人潜下去，找到这
//些地点加以破坏，这座塔
//想不垮也难
VideoUpdate(0, false)
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//开什麽玩笑！　谁去？
//这种化妖水我们稍为沾到一滴
//就受不了。整个人潜下去不就
//全身给化得精光！
VideoUpdate(0, false)
SetDlgLower(35-1-1, 0x00000000, false)
//书中仙：
//没错～当初设计此塔者，在塔
//底注入化妖水，就是为了防止
//妖怪从塔底土遁，另一方面也
//是保护这些剑柱不被腐蚀
//嘿嘿～　可是．．当初他们
//绝对没想到，会有人类能走
//到这最底层来
SetDlgUpper(1-2-1, 0x00000000, false)
//李逍遥：
//您是说．．由我去？
VideoUpdate(0, false)
SetDlgLower(35-1-1, 0x00000000, false)
//书中仙：
//化妖水对妖怪是致命的
//．．对人类却是无害
VideoUpdate(0, false)
EventSetDirFrame(153, 1, 2, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//好～　李大哥，我们去！
VideoUpdate(0, false)
SetDlgLower(35-1-1, 0x00000000, false)
//书中仙：
//化妖池水表面浮着一层十分
//黏稠的油脂，以二位的体重
//来说，恐怕是很难潜下去
VideoRestore()
//但是此处池水是缓慢在流动的
//若在出水口附近，流动较剧烈
//之处，油脂层较薄，应该可以
//潜下去的
EventSetDirFrame(153, 1, 3, 0)
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//在何处？　这附近吗？
VideoUpdate(0, false)
SetDlgLower(35-1-1, 0x00000000, false)
//书中仙：
//出水口的位置经常改变
//我也不知道在哪里
//自己去找吧！
VideoRestore()
//呼．．我的话说完了
//剩下的就交给你们
//我要回书中休息啦！
VideoUpdate(0, false)
EventSetState(154, 0, false, false)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 0, 0)
EventSetDirFrame(153, 1, 2, 0)
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//就这麽办！
EventSetDirFrame(153, 2, 0, 0)
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
EventSetDirFrame(153, 1, 1, 0)
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//天鬼兄，这件事就交给我
//请你通知塔内所有的人
//事成之後大家到这里来会合
//要出去就大家一起出去！
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//好～咱们分头行事
EventSetDirFrame(153, 3, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//大家听着！回去把你们的
//老婆孩子都集合起来，想带
//走的家当也全都打点好
//听我召唤，就回到这里集合
VideoUpdate(0, false)
EventSetAutoScript(153, 5, Scr_0x718E)
EventSetAutoScript(153, 6, Scr_0x7192)
WaitEventAutoScriptRun(0, false, false)
EventSetAutoScript(153, 4, Scr_0x7189)
EventSetAutoScript(153, 7, Scr_0x7195)
WaitEventAutoScriptRun(0, false, false)
EventSetAutoScript(153, 8, Scr_0x7198)
EventSetAutoScript(153, 9, Scr_0x7198)
WaitEventAutoScriptRun(0, false, false)
EventSetAutoScript(153, 10, Scr_0x7198)
EventSetAutoScript(153, 11, Scr_0x719C)
EventSetAutoScript(153, 12, Scr_0x719F)
WaitEventAutoScriptRun(0, false, false)
EventSetAutoScript(153, 13, Scr_0x71A2)
WaitEventAutoScriptRun(26, false, false)
EventSetDirFrame(153, 3, 3, 0)
WaitEventAutoScriptRun(8, false, false)
EventSetState(153, 3, false, false)
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//祝一切顺利～　回头见！
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(153, 1, 2, 0)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//我们也出发吧！)
EventSetDirFrame(153, 2, 1, 0)
VideoUpdate(0, false)
SetDlgLower(50-2-1, 0x00000000, false)
//赵灵儿：
//．．．．我也去。
RoleSetDirFrame(0, 0, 0)
EventSetDirFrame(153, 1, 2, 0)
VideoUpdate(0, false)
SetDlgUpper(3-4-1, 0x00000000, false)
//林月如：
//你．．．
EventSetDirFrame(153, 2, 0, 0)
VideoUpdate(0, false)
SetDlgLower(50-2-1, 0x00000000, false)
//赵灵儿：
//我．．也算是半个人类．．
VideoRestore()
//何况～我的力量和牠们不同
//对化妖池水我可以忍受
//因此明王怕我逃脱，才把我
//锁在剑柱上．．
VideoUpdate(0, false)
SetDlgUpper(1-3-1, 0x00000000, false)
//李逍遥：
//那太好了，我们三个人又
//可以一起行动了)
SceneEnter(152)
ReplaceAndPause()

[Scr_0x715E]
EventSetDirFrame(153, 4, 1, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(153, 8, 1, 0)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(153, 5, 0, 0)
EventSetDirFrame(153, 6, 1, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(153, 7, 0, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(153, 9, 3, 0)
EventSetDirFrame(153, 10, 1, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(153, 3, 0, 0)
EventSetDirFrame(153, 11, 2, 0)
EventSetDirFrame(153, 12, 2, 0)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(153, 13, 0, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(153, 4, 0, 0)
EventSetDirFrame(153, 6, 0, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(153, 11, 1, 0)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(153, 9, 1, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(153, 10, 3, 0)
EventSetDirFrame(153, 3, 1, 0)
EventSetDirFrame(153, 12, 3, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(153, 4, 1, 0)
WaitEventAutoScriptRun(0, false, false)

[Scr_0x717E]
EventSetDirFrame(153, 4, 3, 0)
EventSetDirFrame(153, 5, 3, 0)
EventSetDirFrame(153, 6, 3, 0)
EventSetDirFrame(153, 7, 3, 0)
EventSetDirFrame(153, 8, 2, 0)
EventSetDirFrame(153, 9, 2, 0)
EventSetDirFrame(153, 10, 2, 0)
EventSetDirFrame(153, 11, 3, 0)
EventSetDirFrame(153, 12, 3, 0)
EventSetDirFrame(153, 13, 3, 0)

[Scr_0x7189]
NPCMoveToBlock(47, 25, 1, 3, false)
NPCMoveToBlock(48, 26, 0, 3, false)
NPCMoveToBlock(45, 28, 1, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x718E]
NPCMoveToBlock(48, 25, 1, 3, false)
NPCMoveToBlock(45, 28, 1, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x7192]
NPCMoveToBlock(48, 19, 0, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x7195]
NPCMoveToBlock(47, 20, 0, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x7198]
NPCMoveToBlock(48, 28, 0, 3, false)
NPCMoveToBlock(45, 30, 1, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x719C]
NPCMoveToBlock(45, 28, 1, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x719F]
NPCMoveToBlock(45, 21, 1, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x71A2]
NPCMoveToBlock(48, 19, 0, 3, false)
EventSetState(-1, -1, false, false)

[Scene_00152_Enter]
PartySetPos(52, 25, 1)
EventSetTriggerScript(168, 1, Scr_0x697C)
PartySetRole(213)
ReplaceAndPause()

[Scene_00171_Enter]
PartySetPos(27, 63, 1)
HeroSetSprite(0, 228, true)
RoleSetDirFrame(0, 0, 16)
FadeToScene(-1, 6)
RoleSetDirFrame(0, 0, 17)
WaitEventAutoScriptRun(14, false, false)
RoleSetDirFrame(0, 0, 18)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//$07你放心．．我李逍遥可以对天
//发誓，从今以後决不会让你一
//个人孤苦伶仃！~70
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 19)
WaitEventAutoScriptRun(10, false, false)
SceneEnter(169)

[Scene_00169_Enter]
SetPalette(5)
HeroSetSprite(0, 193, true)
RoleSetDirFrame(0, 0, 12)
PartySetPos(18, 93, 0)
VideoUpdate(0, true)
SetDlgLower(0, 0x00000000, false)
//　$07姥姥～人家他是来求药医治
//　亲人的病呢，您就放过他嘛～~70
SceneEnter(170)
ReplaceAndPause()
PartySetPos(36, 72, 0)
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 0, 0)
FadeToScene(-1, 6)
EventSetDirFrame(170, 0, 0, 1)
WaitEventAutoScriptRun(10, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(6, false, false)
SetDlgLower(0, 0x00000000, false)
//天亮了．．我必须走了。~70
SceneSetScripts(145, Scr_0x6EDC, Null)
SceneEnter(145)
FadeOut(4)

[Scene_00170_Enter]
PartySetPos(34, 89, 0)
HeroSetSprite(0, 361, true)
RoleSetDirFrame(0, 0, 4)
FadeToScene(-1, 6)
EventSetDirFrame(171, 0, 0, 9)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(171, 0, 0, 10)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(0, 0x00000000, false)
//$05我的衣服呢？~65
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 0, 2)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 0, 3)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 2)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 3)
EventSetDirFrame(171, 0, 0, 11)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 2)
EventSetDirFrame(171, 0, 0, 12)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 3)
EventSetDirFrame(171, 0, 0, 13)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(171, 0, 0, 14)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(171, 0, 0, 15)
WaitEventAutoScriptRun(10, false, false)
SceneEnter(171)

[Event_00152_00002_Trigger]
SceneEnter(144)
FadeOut(0)

[Scene_00144_Enter]
SetBattlefield(31)
SetBattleMusic(42)
HeroSetSprite(0, 532, false)
HeroSetSprite(1, 534, false)
HeroSetSprite(2, 533, false)
RoleSetAttr(2, 64, 4)
PartySetRole(213)
RoleSetDirFrame(0, 3, 0)
PartySetPos(37, 17, 0)
VideoWave(2, 0)
VideoUpdate(0, false)
SetDlgBox(0x00000000)
//七星磐龙柱
ReplaceAndPause()

[Event_00144_00001_Trigger]
BattleStart(305, Scr_0x9C9B, Scr_0x9C99)
EventSetState(-1, -1, true, false)
GotoWithNop(Scr_0x7219, 0)
[Event_00144_00002_Trigger]
BattleStart(306, Scr_0x9C9B, Scr_0x9C99)
EventSetState(-1, -1, true, false)
GotoWithNop(Scr_0x7219, 0)
[Event_00144_00003_Trigger]
BattleStart(307, Scr_0x9C9B, Scr_0x9C99)
EventSetState(-1, -1, true, false)
GotoWithNop(Scr_0x7219, 0)
[Event_00144_00004_Trigger]
BattleStart(308, Scr_0x9C9B, Scr_0x9C99)
EventSetState(-1, -1, true, false)
GotoWithNop(Scr_0x7219, 0)
[Event_00144_00005_Trigger]
BattleStart(309, Scr_0x9C9B, Scr_0x9C99)
EventSetState(-1, -1, true, false)
GotoWithNop(Scr_0x7219, 0)
[Event_00144_00006_Trigger]
BattleStart(310, Scr_0x9C9B, Scr_0x9C99)
EventSetState(-1, -1, true, false)
GotoWithNop(Scr_0x7219, 0)
[Event_00144_00007_Trigger]
BattleStart(311, Scr_0x9C9B, Scr_0x9C99)
EventSetState(-1, -1, true, false)
[Scr_0x7219]
JumpIfEventStateMatches(144, 1, true, true, Scr_0x723D)
JumpIfEventStateMatches(144, 2, true, true, Scr_0x723D)
JumpIfEventStateMatches(144, 3, true, true, Scr_0x723D)
JumpIfEventStateMatches(144, 4, true, true, Scr_0x723D)
JumpIfEventStateMatches(144, 5, true, true, Scr_0x723D)
JumpIfEventStateMatches(144, 6, true, true, Scr_0x723D)
JumpIfEventStateMatches(145, 0, true, true, Scr_0x723D)
EventSetState(-1, -1, false, false)
MusicPlay(0, true, 0.00)
BattleEnd()
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//七根龙柱全部毁去
MusicPlay(23, true, 0.00)
VideoShake(99, 1)
WaitEventAutoScriptRun(10, false, false)
RoleSetDirFrame(1, 2, 0)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(2, 1, 0)
WaitEventAutoScriptRun(4, false, false)
VideoShake(99, 2)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(1, 3, 0)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(2, 0, 0)
WaitEventAutoScriptRun(4, false, false)
VideoShake(99, 3)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(1, 1, 0)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(2, 3, 0)
VideoFadeAndUpdate(65532)
SceneEnter(149)

[Scr_0x723D]
BattleEnd()
VideoUpdate(0, false)
EventSetState(-1, -1, false, false)
PlaySound(262)
FadeToScene(-1, 2)

[Event_00149_00001_Auto]
NPCMoveToBlock(28, 64, 1, 3, false)
NPCMoveToBlock(23, 69, 1, 3, false)
NPCMoveToBlock(29, 75, 0, 3, false)

[Event_00149_00002_Auto]
NPCMoveToBlock(24, 69, 0, 3, false)
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(3, false, false)
NPCMoveToBlock(30, 75, 0, 8, false)

[Event_00149_00003_Auto]
NPCMoveToBlock(26, 66, 0, 3, false)
NPCMoveToBlock(28, 63, 1, 3, false)
NPCMoveToBlock(27, 62, 0, 3, false)
NPCMoveToBlock(28, 63, 0, 3, false)
NPCMoveToBlock(22, 68, 1, 3, false)

[Event_00149_00004_Auto]
NPCMoveToBlock(27, 65, 0, 3, false)
NPCMoveToBlock(26, 64, 1, 3, false)
NPCMoveToBlock(24, 66, 1, 3, false)
NPCMoveToBlock(25, 65, 1, 3, false)
NPCMoveToBlock(23, 68, 0, 3, false)
NPCMoveToBlock(30, 75, 1, 3, false)

[Event_00149_00005_Auto]
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(23, 69, 0, 3, false)
WaitEventAutoScriptRun(2, false, false)
NPCMoveToBlock(30, 75, 0, 3, false)

[Event_00149_00006_Auto]
NPCMoveToBlock(25, 66, 1, 3, false)
NPCMoveToBlock(26, 67, 1, 3, false)
NPCMoveToBlock(26, 68, 0, 3, false)
NPCMoveToBlock(25, 68, 0, 3, false)
NPCMoveToBlock(25, 69, 0, 3, false)
NPCMoveToBlock(24, 68, 0, 3, false)
NPCMoveToBlock(21, 70, 1, 3, false)
NPCMoveToBlock(21, 71, 1, 3, false)
NPCMoveToBlock(28, 78, 1, 3, false)

[Scene_00149_Enter]
PartySetPos(26, 65, 0)
HeroSetSprite(0, 232, false)
RoleSetDirFrame(0, 0, 0)
PartySetRole(1)
VideoShake(999, 4)
SetRNG(5)
PlayRNG(0, -1, 7)
FadeOut(0)
VideoFadeAndUpdate(8)
WaitEventAutoScriptRun(30, false, false)
VideoFadeAndUpdate(65534)
VideoShake(999, 1)
SetRNG(2)
PlayRNG(0, -1, 16)
FadeOut(0)
SceneEnter(150)

[Scene_00151_Enter]
MusicPlay(15, true, 0.00)
VideoShake(0, 4)
PartySetPos(51, 104, 0)
VideoUpdate(0, false)
EventSetState(151, 1, true, false)
FadeToScene(-1, 0)
EventSetState(151, 2, true, false)
EventSetState(151, 3, true, false)
EventSetState(151, 4, true, false)
FadeToScene(-1, 0)
EventSetDirFrame(151, 1, 1, 0)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(151, 2, 3, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(151, 3, 3, 0)
EventSetDirFrame(151, 4, 3, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetState(151, 5, true, false)
EventSetState(152, 0, true, false)
FadeToScene(-1, 0)
EventSetDirFrame(151, 1, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//$04我们终於重见天日了！~55
EventSetDirFrame(151, 5, 1, 0)
EventSetDirFrame(152, 0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//小妖：
//嘎．．．咕．．哈~55
VideoUpdate(0, false)
SetDlgUpper(11-1-1, 0x00000000, false)
//天鬼皇：
//$02哎呀～糟糕．．三位恩公呢？
//有谁看见他们逃出来？~70
EventSetDirFrame(151, 5, 0, 0)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(152, 0, 2, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(151, 5, 1, 0)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(152, 0, 1, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(151, 1, 1, 0)
VideoUpdate(0, false)
SetDlgLower(11-1-1, 0x00000000, false)
//天鬼皇：
//你们呢？　也没看见！？~60
EventSetDirFrame(151, 2, 0, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(151, 3, 2, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(151, 2, 0, 0)
WaitEventAutoScriptRun(0, false, false)
SetDlgUpper(0, 0x00000000, false)
//小妖：
//$07呜．．．咕．．~50
EventSetDirFrame(151, 1, 0, 0)
VideoUpdate(0, false)
SetDlgLower(11-1-1, 0x00000000, false)
//天鬼皇：
//$02真该死～大家只顾自己逃命
//居然忘了三位恩公！~60
RemoveItem(230, 1, Null)
FadeOut(2)
SceneEnter(172)

[Event_00149_00007_Auto]
NPCMoveToBlock(29, 63, 0, 3, false)
NPCMoveToBlock(30, 62, 0, 3, false)
WaitEventAutoScriptRun(5, false, false)
NPCMoveToBlock(28, 63, 1, 8, false)
NPCMoveToBlock(22, 57, 0, 8, false)

[Event_00149_00008_Auto]
NPCMoveToBlock(29, 75, 0, 3, false)
NPCMoveToBlock(23, 69, 1, 3, false)
NPCMoveToBlock(30, 63, 0, 3, false)
NPCMoveToBlock(29, 63, 1, 3, false)
NPCMoveToBlock(20, 54, 1, 3, false)

[Event_00150_00002_Auto]
EventWalkOneStep(-1, -1, 8, -4)
GotoWithNop(Event_00150_00002_Auto, 0)

[Event_00150_00003_Auto]
EventModifyPos(-1, -1, 6, 0)
EventModifyPos(-1, -1, 8, -1)
EventModifyPos(-1, -1, 10, -2)
EventModifyPos(-1, -1, 12, -3)
[Scr_0x72D8]
EventModifyPos(-1, -1, 12, -4)
GotoWithNop(Scr_0x72D8, 0)

[Scene_00150_Enter]
VideoShake(0, 4)
PartySetPos(35, 33, 0)
WaitEventAutoScriptRun(15, false, false)
EventSetAutoScript(150, 2, Null)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(150, 2, 1, 0)
VideoUpdate(0, false)
SetDlgLower(29-1-1, 0x00000000, false)
//剑圣：
//$03你怎麽不阻止他们呢！？~60
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(150, 1, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(7-1-1, 0x00000000, false)
//$05师兄．．你不觉得
//这是天意吗？~70
VideoUpdate(0, false)
SetDlgLower(29-1-1, 0x00000000, false)
//剑圣：
//$02岂有此理！~60
EventSetDirFrame(150, 2, 3, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetState(150, 2, false, false)
EventSetState(151, 0, true, false)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(150, 1, 2, 0)
WaitEventAutoScriptRun(12, false, false)
SetDlgLower(7-1-1, 0x00000000, false)
//$05唉．．．．~65$02
FadeOut(0)
VideoShake(99, 4)
SetRNG(4)
PlayRNG(0, 21, 6)
VideoShake(0, 4)
PlayRNG(22, -1, 9)
MusicStop()
FadeOut(3)
SceneEnter(151)

[Event_00160_00006_Trigger]
EventSetState(-1, -1, false, false)
AddItem(38, 0)
SetDlgBox(0x00000000)
//得到天香续命露

[Event_00160_00007_Trigger]
EventSetState(-1, -1, false, false)
AddItem(43, 0)
SetDlgBox(0x00000000)
//得到紫菁玉蓉膏

[Event_00160_00008_Trigger]
EventSetState(-1, -1, false, false)
AddItem(48, 0)
SetDlgBox(0x00000000)
//得到雪莲子

[Event_00160_00009_Trigger]
EventSetState(-1, -1, false, false)
AddItem(51, 0)
SetDlgBox(0x00000000)
//得到灵葫仙丹

[Event_00160_00010_Trigger]
EventSetState(-1, -1, false, false)
AddItem(76, 0)
SetDlgBox(0x00000000)
//得到九阴散

[Event_00160_00011_Trigger]
EventSetState(-1, -1, false, false)
AddItem(3, 0)
SetDlgBox(0x00000000)
//得到金刚符

[Event_00160_00012_Trigger]
EventSetState(-1, -1, false, false)
AddItem(2, 0)
SetDlgBox(0x00000000)
//得到圣灵符

[Event_00186_00005_Trigger]
SceneEnter(187)
PartySetPos(47, 61, 0)
FadeOut(0)

[Event_00187_00001_Trigger]
SceneEnter(186)
PartySetPos(7, 88, 0)
FadeOut(0)

[Event_00187_00002_Trigger]
SceneEnter(184)
PartySetPos(9, 88, 1)
FadeOut(0)

[Event_00184_00001_Trigger]
SceneEnter(187)
PartySetPos(12, 78, 0)
FadeOut(0)

[Event_00184_00002_Trigger]
SceneEnter(188)
PartySetPos(38, 71, 0)
FadeOut(0)

[Scene_00184_Teleport]
SceneEnter(184)
PartySetPos(10, 39, 0)
FadeOut(0)

[Event_00180_00002_Trigger]
SceneEnter(182)
PartySetPos(44, 103, 1)
FadeOut(0)

[Scr_0x7341]
SceneEnter(175)
PartySetPos(44, 103, 1)
FadeOut(0)

[Event_00175_00006_Trigger]
SceneEnter(180)
PartySetPos(29, 32, 1)
FadeOut(0)

[Event_00175_00007_Trigger]
SceneEnter(190)
PartySetPos(29, 117, 1)
FadeOut(0)

[Scene_00190_Teleport]
SceneEnter(175)
PartySetPos(8, 100, 1)
FadeOut(0)

[Event_00190_00001_Trigger]
SceneEnter(181)
PartySetPos(48, 117, 1)
FadeOut(0)

[Event_00181_00001_Trigger]
SceneEnter(190)
PartySetPos(56, 48, 0)
FadeOut(0)

[Event_00191_00001_Trigger]
SceneEnter(175)
PartySetPos(16, 93, 1)
FadeOut(0)

[Event_00175_00001_Trigger]
SceneEnter(191)
PartySetPos(43, 83, 0)
FadeOut(0)

[Event_00191_00002_Trigger]
SceneEnter(175)
PartySetPos(31, 77, 0)
FadeOut(0)

[Event_00175_00002_Trigger]
SceneEnter(191)
PartySetPos(29, 60, 1)
FadeOut(0)

[Event_00191_00003_Trigger]
SceneEnter(175)
PartySetPos(34, 98, 0)
FadeOut(0)

[Event_00175_00003_Trigger]
SceneEnter(191)
PartySetPos(46, 31, 1)
FadeOut(0)

[Event_00191_00004_Trigger]
SceneEnter(175)
PartySetPos(25, 67, 0)
FadeOut(0)

[Event_00175_00004_Trigger]
SceneEnter(191)
PartySetPos(19, 22, 0)
FadeOut(0)

[Event_00191_00005_Trigger]
SceneEnter(175)
PartySetPos(43, 89, 0)
FadeOut(0)

[Event_00175_00005_Trigger]
SceneEnter(191)
PartySetPos(16, 92, 1)
FadeOut(0)

[Event_00186_00004_Trigger]
SceneEnter(178)
PartySetPos(52, 106, 0)
FadeOut(0)

[Scr_0x7385]
SceneEnter(180)
PartySetPos(52, 106, 0)
FadeOut(0)

[Event_00178_00001_Trigger]
SceneEnter(186)
PartySetPos(38, 70, 0)
FadeOut(0)

[Scene_00180_Teleport]
SceneEnter(186)
PartySetPos(38, 70, 0)
FadeOut(0)

[Event_00192_00055_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
EventSetAutoScript(-1, -1, Scr_0x739C)
PartyWalkToBlock(51, 71, 0, 4)
EventSetAutoScript(-1, -1, Event_00021_00011_Auto)
HeroSetSprite(0, 541, true)
RoleSetDirFrame(0, 0, 0)
RideNPCToPos(51, 36, 0, 4)
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 3, 0)
EventSetAutoScript(-1, -1, Scr_0x739F)

[Scr_0x739C]
EventWalkOneStep(-1, -1, 0, -4)
GotoWithNop(Scr_0x739C, 0)

[Scr_0x739F]
EventWalkOneStep(-1, -1, 0, -8)
EventWalkOneStep(-1, -1, 0, -10)
EventWalkOneStep(-1, -1, 0, -12)
EventWalkOneStep(-1, -1, 0, -12)
EventWalkOneStep(-1, -1, 0, -12)
EventWalkOneStep(-1, -1, 0, -12)
EventWalkOneStep(-1, -1, 0, -12)
EventWalkOneStep(-1, -1, 0, -12)
EventWalkOneStep(-1, -1, 0, -12)
EventWalkOneStep(-1, -1, 0, -12)
EventWalkOneStep(-1, -1, 0, -12)
EventSetState(-1, -1, false, false)

[Event_00192_00056_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
EventSetAutoScript(-1, -1, Scr_0x739C)
PartyWalkToBlock(34, 61, 1, 4)
EventSetAutoScript(-1, -1, Event_00021_00011_Auto)
HeroSetSprite(0, 541, true)
RoleSetDirFrame(0, 0, 0)
RideNPCToPos(34, 19, 1, 4)
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 3, 0)
EventSetAutoScript(-1, -1, Scr_0x739F)

[Event_00185_00064_Trigger]
PartyWalkToBlock(32, 36, 0, 4)
RoleMoveOneStep(0, 16, 0)
PartyWalkToBlock(32, 37, 1, 4)

[Event_00185_00065_Trigger]
PartyWalkToBlock(30, 35, 0, 4)
PartyWalkToBlock(29, 35, 1, 4)

[Event_00185_00066_Trigger]
PartyWalkToBlock(47, 59, 1, 4)
PartySetPos(47, 61, 1)
PartyWalkToBlock(49, 63, 0, 4)

[Event_00185_00067_Trigger]
PartyWalkToBlock(46, 60, 1, 4)
PartyWalkToBlock(46, 61, 0, 4)

[Event_00185_00002_Trigger]
PartyWalkToBlock(24, 82, 1, 4)
ViewportMove(0, -8, 34)
PartySetPos(24, 65, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(26, 67, 0, 4)

[Event_00185_00003_Trigger]
PartyWalkToBlock(24, 65, 1, 4)
ViewportMove(0, 8, 34)
PartySetPos(24, 82, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(26, 84, 0, 4)

[Event_00185_00004_Trigger]
PartyWalkToBlock(30, 68, 1, 4)
ViewportMove(0, -8, 18)
PartySetPos(30, 59, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(29, 60, 1, 4)

[Event_00185_00005_Trigger]
PartyWalkToBlock(31, 59, 0, 4)
ViewportMove(0, 10, 16)
PartySetPos(31, 69, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(28, 66, 1, 8)

[Event_00185_00006_Trigger]
PartyWalkToBlock(24, 58, 0, 4)
ViewportMove(0, 6, 16)
PartySetPos(24, 64, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(22, 62, 0, 4)

[Event_00185_00007_Trigger]
PartyWalkToBlock(24, 64, 0, 4)
ViewportMove(0, -6, 16)
PartySetPos(24, 58, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(26, 60, 0, 4)

[Event_00185_00008_Trigger]
PartyWalkToBlock(12, 53, 1, 4)
ViewportMove(0, -4, 8)
PartySetPos(12, 51, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(14, 49, 1, 4)

[Event_00185_00009_Trigger]
PartyWalkToBlock(13, 51, 0, 4)
PartySetPos(13, 54, 0)
WaitEventAutoScriptRun(0, false, false)
PartyWalkToBlock(14, 55, 0, 4)

[Event_00185_00010_Trigger]
PartyWalkToBlock(24, 39, 1, 4)
ViewportMove(0, -7, 16)
PartySetPos(24, 32, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(26, 34, 0, 4)

[Event_00185_00011_Trigger]
PartyWalkToBlock(24, 32, 1, 4)
ViewportMove(0, 14, 8)
PartySetPos(24, 39, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(23, 41, 0, 4)

[Event_00185_00012_Trigger]
PartySetPos(31, 45, 1)
WaitEventAutoScriptRun(0, false, false)
PartyWalkToBlock(29, 47, 1, 4)

[Event_00185_00013_Trigger]
PartyWalkToBlock(31, 46, 0, 4)
ViewportMove(0, -4, 8)
PartySetPos(31, 44, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(33, 42, 0, 4)

[Event_00185_00014_Trigger]
PartyWalkToBlock(31, 50, 0, 4)
ViewportMove(0, 7, 32)
PartySetPos(31, 64, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(32, 65, 1, 4)

[Event_00185_00015_Trigger]
PartyWalkToBlock(31, 64, 0, 4)
ViewportMove(0, -7, 32)
PartySetPos(31, 50, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(32, 51, 1, 4)

[Event_00185_00016_Trigger]
PartyWalkToBlock(41, 50, 0, 4)
ViewportMove(-4, 2, 16)
ViewportMove(0, 16, 8)
ViewportMove(-4, 2, 16)
PartySetPos(37, 62, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(36, 63, 0, 4)
PartyWalkToBlock(35, 62, 1, 4)

[Event_00185_00017_Trigger]
PartyWalkToBlock(37, 63, 0, 4)
ViewportMove(4, -2, 16)
ViewportMove(0, -9, 16)
ViewportMove(4, -2, 16)
PartySetPos(41, 50, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(42, 51, 1, 4)

[Event_00185_00018_Trigger]
PartyWalkToBlock(46, 54, 1, 4)
PartyWalkToBlock(47, 54, 0, 4)
ViewportMove(0, -8, 42)
PartySetPos(47, 33, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(46, 34, 0, 4)

[Event_00185_00019_Trigger]
PartyWalkToBlock(47, 32, 1, 4)
ViewportMove(0, 16, 23)
PartySetPos(47, 55, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(45, 53, 0, 4)

[Event_00185_00020_Trigger]
PartyWalkToBlock(41, 35, 0, 4)
ViewportMove(0, -8, 18)
PartySetPos(41, 26, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(42, 27, 1, 4)

[Event_00185_00021_Trigger]
PartyWalkToBlock(41, 26, 0, 4)
ViewportMove(0, 9, 16)
PartySetPos(41, 35, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(42, 36, 1, 4)

[Event_00185_00022_Trigger]
PartyWalkToBlock(46, 30, 1, 4)
ViewportMove(0, -8, 8)
ViewportMove(4, -2, 8)
PartySetPos(47, 25, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(48, 25, 0, 4)
PartyWalkToBlock(49, 26, 0, 4)

[Event_00185_00023_Trigger]
PartyWalkToBlock(47, 24, 1, 4)
ViewportMove(0, 10, 8)
ViewportMove(-4, 2, 8)
PartySetPos(46, 30, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(45, 29, 0, 4)

[Event_00185_00024_Trigger]
PartyWalkToBlock(56, 24, 0, 4)
ViewportMove(0, 9, 32)
PartySetPos(56, 42, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(54, 43, 1, 4)

[Event_00185_00025_Trigger]
PartyWalkToBlock(56, 42, 0, 4)
ViewportMove(0, -9, 32)
PartySetPos(56, 24, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(54, 25, 1, 4)

[Event_00185_00026_Trigger]
PartyWalkToBlock(47, 42, 1, 4)
ViewportMove(0, 11, 16)
PartySetPos(47, 53, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(49, 55, 0, 4)

[Event_00185_00027_Trigger]
PartyWalkToBlock(47, 53, 1, 4)
ViewportMove(0, -8, 22)
PartySetPos(47, 42, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(49, 44, 0, 4)

[Event_00185_00028_Trigger]
PartyWalkToBlock(55, 54, 1, 4)
ViewportMove(0, 32, 2)
PartySetPos(55, 60, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(54, 61, 1, 4)

[Event_00185_00029_Trigger]
PartyWalkToBlock(56, 60, 0, 4)
ViewportMove(0, -5, 16)
PartySetPos(56, 55, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(53, 52, 1, 4)

[Event_00185_00030_Trigger]
PartyWalkToBlock(40, 81, 1, 4)
ViewportMove(0, -8, 16)
PartySetPos(40, 73, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(42, 75, 1, 4)

[Event_00185_00031_Trigger]
PartyWalkToBlock(40, 73, 1, 4)
ViewportMove(0, 16, 8)
PartySetPos(40, 81, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(38, 79, 1, 4)

[Event_00185_00032_Trigger]
PartyWalkToBlock(47, 77, 1, 4)
ViewportMove(0, -4, 16)
PartySetPos(47, 73, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(49, 71, 1, 4)

[Event_00185_00033_Trigger]
PartyWalkToBlock(47, 73, 1, 4)
ViewportMove(0, 16, 4)
PartySetPos(47, 77, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(46, 79, 0, 4)

[Event_00185_00034_Trigger]
PartyWalkToBlock(19, 83, 0, 4)
ViewportMove(0, 16, 2)
PartySetPos(19, 85, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(17, 87, 0, 4)

[Event_00185_00035_Trigger]
PartyWalkToBlock(18, 85, 1, 4)
ViewportMove(0, -4, 8)
PartySetPos(18, 83, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(20, 81, 1, 4)

[Event_00185_00036_Trigger]
PartyWalkToBlock(12, 83, 1, 4)
ViewportMove(0, -4, 8)
PartySetPos(12, 81, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(12, 81, 0, 4)
PartyWalkToBlock(11, 82, 0, 4)

[Event_00185_00037_Trigger]
PartyWalkToBlock(12, 81, 1, 4)
PartySetPos(12, 83, 1)
PartyWalkToBlock(14, 85, 0, 4)

[Event_00185_00038_Trigger]
PartyWalkToBlock(5, 81, 0, 4)
ViewportMove(0, -4, 12)
PartySetPos(5, 78, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(7, 76, 0, 4)

[Event_00185_00039_Trigger]
PartyWalkToBlock(5, 78, 1, 4)
PartySetPos(5, 81, 1)
PartyWalkToBlock(6, 82, 1, 4)

[Event_00185_00040_Trigger]
PartyWalkToBlock(18, 65, 1, 4)
ViewportMove(0, 10, 16)
PartySetPos(18, 75, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(17, 77, 0, 4)

[Event_00185_00041_Trigger]
PartyWalkToBlock(18, 75, 1, 4)
ViewportMove(0, -8, 20)
PartySetPos(18, 65, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(17, 67, 0, 4)

[Event_00185_00042_Trigger]
PartyWalkToBlock(12, 77, 0, 4)
ViewportMove(0, -6, 16)
ViewportMove(-4, -2, 8)
PartySetPos(11, 70, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(10, 70, 0, 4)

[Event_00185_00043_Trigger]
PartyWalkToBlock(11, 70, 1, 4)
ViewportMove(0, 12, 8)
ViewportMove(4, 2, 8)
PartySetPos(12, 77, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(14, 79, 0, 4)

[Event_00185_00044_Trigger]
PartyWalkToBlock(5, 64, 0, 4)
ViewportMove(0, -7, 16)
PartySetPos(5, 57, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(7, 55, 0, 4)

[Event_00185_00045_Trigger]
PartyWalkToBlock(5, 57, 1, 4)
ViewportMove(0, 16, 7)
PartySetPos(5, 64, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(6, 65, 1, 4)

[Event_00185_00046_Trigger]
PartyWalkToBlock(12, 48, 1, 4)
ViewportMove(0, -7, 16)
ViewportMove(-4, -2, 8)
PartySetPos(11, 40, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(10, 39, 0, 4)

[Event_00185_00047_Trigger]
PartyWalkToBlock(11, 41, 1, 4)
ViewportMove(4, 2, 8)
ViewportMove(0, 16, 6)
PartySetPos(12, 48, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(11, 50, 0, 4)

[Event_00185_00048_Trigger]
PartyWalkToBlock(5, 39, 0, 4)
ViewportMove(0, -6, 32)
PartySetPos(5, 27, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(6, 28, 1, 4)

[Event_00185_00049_Trigger]
PartyWalkToBlock(5, 27, 0, 4)
ViewportMove(0, 12, 16)
PartySetPos(5, 39, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(6, 40, 1, 4)

[Event_00185_00050_Trigger]
PartyWalkToBlock(12, 22, 1, 4)
ViewportMove(0, -4, 12)
ViewportMove(-4, -2, 8)
PartySetPos(11, 18, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(10, 17, 0, 4)

[Event_00185_00051_Trigger]
PartyWalkToBlock(12, 20, 0, 4)
PartySetPos(12, 23, 0)
WaitEventAutoScriptRun(0, false, false)
PartyWalkToBlock(11, 24, 0, 4)

[Event_00185_00052_Trigger]
PartyWalkToBlock(24, 50, 0, 4)
PartyWalkToBlock(23, 51, 0, 4)

[Event_00185_00053_Trigger]
PartyWalkToBlock(25, 51, 1, 4)
PartyWalkToBlock(26, 50, 1, 4)

[Event_00185_00054_Trigger]
PartyWalkToBlock(38, 48, 0, 4)
ViewportMove(4, -2, 28)
ViewportMove(0, -8, 16)
PartySetPos(41, 37, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(39, 38, 1, 4)

[Event_00185_00055_Trigger]
PartyWalkToBlock(41, 37, 0, 4)
ViewportMove(0, 16, 8)
ViewportMove(-4, 2, 24)
PartySetPos(38, 48, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(36, 49, 1, 4)

[Event_00185_00056_Trigger]
PartyWalkToBlock(41, 26, 0, 4)
ViewportMove(0, 9, 16)
PartySetPos(41, 35, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(42, 36, 1, 4)

[Event_00185_00057_Trigger]
PartyWalkToBlock(41, 35, 0, 4)
ViewportMove(0, -9, 16)
PartySetPos(41, 26, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(42, 27, 1, 4)

[Event_00185_00058_Trigger]
PartyWalkToBlock(38, 17, 0, 4)
ViewportMove(0, 11, 16)
ViewportMove(-4, 2, 8)
PartySetPos(37, 29, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(35, 27, 1, 4)

[Event_00185_00059_Trigger]
PartyWalkToBlock(37, 29, 0, 4)
ViewportMove(4, -2, 8)
ViewportMove(0, -11, 16)
PartySetPos(38, 17, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(36, 18, 1, 4)

[Event_00185_00060_Trigger]
PartyWalkToBlock(23, 35, 1, 4)
ViewportMove(4, -2, 8)
ViewportMove(0, -16, 23)
PartySetPos(24, 11, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(23, 13, 0, 4)

[Event_00185_00061_Trigger]
PartyWalkToBlock(24, 11, 1, 4)
ViewportMove(0, 16, 23)
ViewportMove(-4, 2, 8)
PartySetPos(23, 35, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(22, 34, 0, 4)

[Event_00185_00062_Trigger]
PartyWalkToBlock(18, 19, 1, 4)
ViewportMove(0, -11, 16)
PartySetPos(18, 8, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(20, 10, 0, 4)

[Event_00185_00063_Trigger]
PartyWalkToBlock(18, 8, 1, 4)
ViewportMove(0, 16, 11)
PartySetPos(18, 19, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(20, 21, 0, 4)

[Event_00185_00001_Trigger]
SceneEnter(192)
PartySetPos(6, 18, 0)
FadeOut(0)

[Event_00192_00054_Trigger]
SceneEnter(185)
PartySetPos(28, 84, 1)
FadeOut(0)

[Event_00192_00002_Trigger]
PartyWalkToBlock(41, 96, 0, 4)
ViewportMove(0, -4, 16)
PartySetPos(41, 92, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(39, 93, 1, 4)

[Event_00192_00003_Trigger]
PartyWalkToBlock(41, 92, 0, 4)
ViewportMove(0, 4, 16)
PartySetPos(41, 96, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(42, 97, 1, 4)

[Event_00192_00004_Trigger]
PartyWalkToBlock(30, 88, 1, 4)
ViewportMove(0, 4, 32)
PartySetPos(30, 96, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(28, 94, 1, 4)

[Event_00192_00005_Trigger]
PartyWalkToBlock(30, 96, 0, 4)
ViewportMove(0, -4, 32)
PartySetPos(30, 88, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(32, 90, 1, 4)

[Event_00192_00006_Trigger]
PartyWalkToBlock(18, 92, 1, 4)
ViewportMove(0, -5, 32)
PartySetPos(18, 82, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(20, 81, 0, 4)

[Event_00192_00007_Trigger]
PartyWalkToBlock(18, 82, 1, 4)
ViewportMove(0, 5, 32)
PartySetPos(18, 92, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(20, 94, 0, 4)

[Event_00192_00008_Trigger]
PartyWalkToBlock(41, 82, 0, 4)
ViewportMove(0, -4, 32)
PartySetPos(41, 74, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(42, 75, 1, 4)

[Event_00192_00009_Trigger]
PartyWalkToBlock(41, 74, 0, 4)
ViewportMove(0, 4, 32)
PartySetPos(41, 82, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(38, 79, 1, 4)

[Event_00192_00010_Trigger]
PartyWalkToBlock(47, 77, 1, 4)
ViewportMove(0, -4, 16)
PartySetPos(47, 73, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(49, 71, 1, 4)

[Event_00192_00011_Trigger]
PartyWalkToBlock(47, 73, 1, 4)
ViewportMove(0, 4, 16)
PartySetPos(47, 77, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(46, 79, 0, 4)

[Event_00192_00012_Trigger]
PartyWalkToBlock(56, 33, 0, 4)
ViewportMove(0, 4, 36)
PartySetPos(56, 42, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(54, 43, 1, 4)

[Event_00192_00013_Trigger]
PartyWalkToBlock(56, 42, 0, 4)
ViewportMove(0, -4, 36)
PartySetPos(56, 33, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(54, 34, 1, 4)

[Event_00192_00014_Trigger]
PartyWalkToBlock(47, 42, 1, 4)
ViewportMove(0, -5, 32)
PartySetPos(47, 32, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(46, 34, 0, 4)

[Event_00192_00015_Trigger]
PartyWalkToBlock(47, 32, 1, 4)
ViewportMove(0, 5, 32)
PartySetPos(47, 42, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(49, 44, 0, 4)

[Event_00192_00016_Trigger]
PartyWalkToBlock(31, 44, 0, 4)
ViewportMove(0, -5, 32)
PartySetPos(31, 34, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(29, 35, 1, 4)

[Event_00192_00017_Trigger]
PartyWalkToBlock(31, 34, 0, 4)
ViewportMove(0, 5, 32)
PartySetPos(31, 44, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(32, 42, 1, 4)
PartyWalkToBlock(33, 43, 0, 4)

[Event_00192_00018_Trigger]
PartyWalkToBlock(24, 32, 1, 4)
ViewportMove(0, 5, 64)
PartySetPos(24, 52, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(26, 50, 1, 4)

[Event_00192_00019_Trigger]
PartyWalkToBlock(25, 52, 0, 4)
ViewportMove(0, -4, 76)
PartySetPos(25, 33, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(26, 34, 0, 4)

[Event_00192_00020_Trigger]
PartyWalkToBlock(31, 46, 0, 4)
ViewportMove(0, 8, 8)
PartySetPos(31, 50, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(32, 51, 1, 4)

[Event_00192_00021_Trigger]
PartyWalkToBlock(31, 50, 0, 4)
ViewportMove(0, -4, 16)
PartySetPos(31, 46, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(29, 47, 1, 4)

[Event_00192_00022_Trigger]
PartyWalkToBlock(46, 54, 1, 4)
PartyWalkToBlock(47, 53, 1, 4)
PartyWalkToBlock(49, 55, 0, 4)

[Event_00192_00023_Trigger]
PartyWalkToBlock(47, 53, 1, 4)
PartyWalkToBlock(46, 54, 1, 4)
PartyWalkToBlock(45, 53, 0, 4)

[Event_00192_00024_Trigger]
PartyWalkToBlock(55, 54, 1, 4)
ViewportMove(0, 6, 16)
PartySetPos(55, 60, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(54, 61, 1, 4)

[Event_00192_00025_Trigger]
PartyWalkToBlock(56, 60, 0, 4)
ViewportMove(0, -5, 16)
PartySetPos(56, 55, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(53, 52, 1, 4)

[Event_00192_00026_Trigger]
PartyWalkToBlock(55, 69, 1, 4)
ViewportMove(0, -4, 36)
PartySetPos(55, 60, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(54, 61, 1, 4)

[Event_00192_00027_Trigger]
PartyWalkToBlock(56, 77, 0, 4)
ViewportMove(0, -4, 88)
ViewportMove(-4, -2, 8)
PartySetPos(55, 54, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(53, 52, 1, 4)

[Event_00192_00028_Trigger]
PartyWalkToBlock(38, 64, 1, 4)
PartyWalkToBlock(35, 61, 1, 4)

[Event_00192_00029_Trigger]
PartyWalkToBlock(38, 64, 1, 4)
PartyWalkToBlock(36, 66, 1, 4)

[Event_00192_00030_Trigger]
PartyWalkToBlock(38, 17, 0, 4)
ViewportMove(0, 8, 26)
ViewportMove(-4, -2, 8)
PartySetPos(37, 29, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(35, 27, 1, 4)

[Event_00192_00031_Trigger]
PartyWalkToBlock(37, 29, 1, 4)
ViewportMove(0, -4, 48)
PartySetPos(37, 17, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(36, 18, 1, 4)

[Event_00192_00032_Trigger]
PartyWalkToBlock(18, 19, 1, 4)
ViewportMove(0, 8, 112)
PartySetPos(18, 75, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(17, 77, 0, 4)

[Event_00192_00033_Trigger]
PartyWalkToBlock(18, 75, 1, 4)
ViewportMove(0, -8, 112)
PartySetPos(18, 19, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(20, 21, 0, 4)

[Event_00192_00034_Trigger]
PartyWalkToBlock(12, 77, 1, 4)
ViewportMove(0, 3, 16)
PartySetPos(12, 80, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(11, 82, 0, 4)

[Event_00192_00035_Trigger]
PartyWalkToBlock(12, 80, 1, 4)
ViewportMove(0, -3, 16)
PartySetPos(12, 77, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(14, 79, 0, 4)

[Event_00192_00036_Trigger]
PartyWalkToBlock(5, 81, 0, 4)
ViewportMove(0, -3, 16)
PartySetPos(5, 78, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(7, 76, 0, 4)

[Event_00192_00037_Trigger]
PartyWalkToBlock(5, 77, 1, 4)
ViewportMove(0, 6, 8)
PartySetPos(5, 81, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(6, 82, 1, 4)

[Event_00192_00038_Trigger]
PartyWalkToBlock(24, 71, 1, 4)
ViewportMove(0, -3, 32)
PartySetPos(24, 65, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(26, 67, 0, 4)

[Event_00192_00039_Trigger]
PartyWalkToBlock(24, 65, 1, 4)
ViewportMove(0, 6, 16)
PartySetPos(24, 71, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(23, 73, 0, 4)

[Event_00192_00040_Trigger]
PartyWalkToBlock(30, 68, 0, 4)
PartyWalkToBlock(30, 67, 1, 4)
ViewportMove(0, -4, 32)
PartySetPos(30, 59, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(29, 60, 1, 4)

[Event_00192_00041_Trigger]
PartyWalkToBlock(31, 59, 0, 4)
ViewportMove(0, 4, 36)
PartySetPos(31, 68, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(30, 68, 1, 4)
PartyWalkToBlock(28, 66, 1, 4)

[Event_00192_00042_Trigger]
PartyWalkToBlock(24, 58, 1, 4)
ViewportMove(0, 5, 16)
ViewportMove(-4, 2, 8)
PartySetPos(23, 64, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(22, 63, 0, 4)

[Event_00192_00043_Trigger]
PartyWalkToBlock(24, 64, 1, 4)
ViewportMove(0, -6, 16)
PartySetPos(24, 58, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(26, 60, 0, 4)

[Event_00192_00044_Trigger]
PartyWalkToBlock(12, 53, 1, 4)
ViewportMove(0, 8, 32)
ViewportMove(-4, 2, 8)
PartySetPos(11, 70, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(10, 69, 0, 4)

[Event_00192_00045_Trigger]
PartyWalkToBlock(11, 70, 1, 4)
ViewportMove(0, -4, 64)
ViewportMove(4, -2, 8)
PartySetPos(12, 53, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(14, 55, 0, 4)

[Event_00192_00046_Trigger]
PartyWalkToBlock(5, 64, 0, 4)
ViewportMove(0, -4, 28)
PartySetPos(5, 57, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(7, 55, 0, 4)

[Event_00192_00047_Trigger]
PartyWalkToBlock(5, 56, 1, 4)
ViewportMove(0, 8, 16)
PartySetPos(5, 64, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(6, 65, 1, 4)

[Event_00192_00048_Trigger]
PartyWalkToBlock(24, 39, 1, 4)
ViewportMove(0, -2, 16)
ViewportMove(-4, -2, 8)
PartySetPos(23, 36, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(22, 35, 0, 4)

[Event_00192_00049_Trigger]
PartyWalkToBlock(24, 37, 0, 4)
ViewportMove(0, 6, 8)
PartySetPos(24, 40, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(23, 41, 0, 4)

[Event_00192_00050_Trigger]
PartyWalkToBlock(5, 39, 0, 4)
ViewportMove(0, -4, 48)
PartySetPos(5, 27, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(6, 28, 1, 4)

[Event_00192_00051_Trigger]
PartyWalkToBlock(5, 27, 0, 4)
ViewportMove(0, 6, 32)
PartySetPos(5, 39, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(6, 40, 1, 4)

[Event_00192_00052_Trigger]
PartyWalkToBlock(12, 22, 1, 4)
ViewportMove(0, -2, 16)
ViewportMove(-4, -2, 8)
PartySetPos(11, 19, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(10, 18, 0, 4)

[Event_00192_00053_Trigger]
PartyWalkToBlock(12, 20, 0, 4)
ViewportMove(0, 6, 8)
PartySetPos(12, 23, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(11, 24, 0, 4)

[Event_00179_00001_Trigger]
PartyWalkToBlock(40, 44, 0, 4)
ViewportMove(0, -4, 16)
PartySetPos(40, 40, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(38, 41, 1, 4)

[Event_00179_00002_Trigger]
PartyWalkToBlock(40, 40, 0, 4)
ViewportMove(0, 4, 16)
PartySetPos(40, 44, 0)
ViewportMove(0, 0, 0)
PartyWalkToBlock(41, 45, 1, 4)

[Event_00179_00003_Trigger]
PartyWalkToBlock(27, 39, 1, 4)
ViewportMove(0, 8, 48)
PartySetPos(27, 63, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(29, 65, 0, 4)

[Event_00179_00004_Trigger]
PartyWalkToBlock(27, 63, 1, 4)
ViewportMove(0, -8, 48)
PartySetPos(27, 39, 1)
ViewportMove(0, 0, 0)
PartyWalkToBlock(28, 40, 1, 4)

[Event_00179_00005_Trigger]
SceneEnter(186)
PartySetPos(57, 64, 1)
RoleSetDirFrame(0, 3, 0)
FadeOut(0)

[Event_00186_00002_Trigger]
SceneEnter(179)
PartySetPos(52, 90, 0)
RoleSetDirFrame(0, 0, 0)
FadeOut(0)

[Event_00186_00003_Trigger]
SceneEnter(192)
PartySetPos(46, 94, 1)
RoleSetDirFrame(0, 0, 0)
FadeOut(0)

[Event_00192_00001_Trigger]
SceneEnter(186)
PartySetPos(20, 72, 0)
RoleSetDirFrame(0, 3, 0)
FadeOut(0)

[Event_00186_00006_Trigger]
SetDlgBox(0x00000000)
//摘得一颗"蟠果"
AddItem(42, 0)
ReplaceAndPause()

[Event_00176_00017_Trigger]
NPCSetFrame(1)
VideoUpdate(0, false)
SetDlgBox(0x00000000)
//摘得两支"香蕉"
AddItem(231, 2)
ReplaceAndPause()

[Event_00192_00057_Trigger]
EventSetAutoScript(-1, -1, Null)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//小猴子，借过一下好不好？
NPCSetFrame(1)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(0)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(1)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(0)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(1)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(0)
WaitEventAutoScriptRun(2, false, false)
ReplaceAndPause()
SetDlgLower(1-7-1, 0x00000000, false)
//李逍遥：
//不走开我打你喔！
VideoUpdate(0, false)
NPCSetFrame(2)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//这死猴子．．．(
ReplaceAndPause()
SetDlgCenter(0, 0x00000000, false)
//"小猴子不甩你．．"

[Scr_0x76D6]
EventSetTriggerMode(-1, -1, false, 0)
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//来～来～给你香蕉！
NPCSetFrame(9)
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//　　叽咕～叽咕．．~35
EventSetAutoScript(-1, -1, Null)
NPCSetFrame(0)
WaitEventAutoScriptRun(4, false, false)
NPCSetFrame(9)
EventModifyPos(-1, -1, -16, 8)
VideoUpdate(0, false)
NPCSetFrame(10)
EventModifyPos(-1, -1, -16, 8)
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
NPCSetFrame(9)
EventModifyPos(-1, -1, -16, 8)
VideoUpdate(0, false)
NPCSetFrame(0)
EventModifyPos(-1, -1, -16, 8)
VideoUpdate(0, false)
NPCSetFrame(9)
EventModifyPos(-1, -1, -16, 8)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
NPCSetFrame(10)
EventModifyPos(-1, -1, -16, 8)
VideoUpdate(0, false)
NPCSetFrame(9)
EventModifyPos(-1, -1, -16, 8)
VideoUpdate(0, false)
NPCSetFrame(0)
EventModifyPos(-1, -1, -16, 8)
VideoUpdate(0, false)
EventSetState(-1, -1, false, false)

[Event_00192_00058_Trigger]
EventSetAutoScript(-1, -1, Null)
NPCSetFrame(5)
//呜．．！
ReplaceAndPause()

[Scr_0x7703]
EventSetTriggerMode(-1, -1, false, 0)
EventSetState(-1, -1, true, false)
EventSetAutoScript(-1, -1, Null)
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//你也要香蕉，对吧？
VideoUpdate(0, false)
NPCSetFrame(4)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(3)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(4)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(3)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(4)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(3)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//这只猴子居然会不好意思
VideoRestore()
//来吧！　没关系，送你的！
NPCSetFrame(9)
EventSetState(192, 59, true, false)
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//吱～！
NPCSetFrame(10)
EventSetAutoScript(192, 59, Event_00192_00060_Auto)
WaitEventAutoScriptRun(0, false, false)
NPCSetFrame(11)
WaitEventAutoScriptRun(0, false, false)
NPCSetFrame(12)
WaitEventAutoScriptRun(0, false, false)
NPCSetFrame(13)
EventSetState(192, 60, true, false)
WaitEventAutoScriptRun(0, false, false)
NPCSetFrame(14)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 3, 0)
NPCSetFrame(15)
WaitEventAutoScriptRun(0, false, false)
EventSetState(192, 61, true, false)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 0, 0)

[Event_00192_00060_Auto]
EventModifyPos(-1, -1, -8, 4)
EventModifyPos(-1, -1, -8, 4)
EventModifyPos(-1, -1, -8, 4)
EventModifyPos(-1, -1, -8, 4)
ReplaceAndPause()
EventModifyPos(-1, -1, -16, 8)
EventModifyPos(-1, -1, -16, 8)
EventModifyPos(-1, -1, -16, 8)
EventModifyPos(-1, -1, -16, 8)
EventModifyPos(-1, -1, -16, 8)
EventModifyPos(-1, -1, -16, 8)
EventModifyPos(-1, -1, -16, 8)
EventModifyPos(-1, -1, -16, 8)
EventSetState(-1, -1, false, false)

[Event_00185_00071_Auto]
EventModifyPos(-1, -1, 1, 11)
EventModifyPos(-1, -1, 1, 12)
EventModifyPos(-1, -1, 1, 14)
EventModifyPos(-1, -1, 1, 15)
EventModifyPos(-1, -1, 1, 16)
EventModifyPos(-1, -1, 1, 16)
EventModifyPos(-1, -1, 1, 18)
NPCSetFrame(1)
ReplaceAndPause()
NPCSetFrame(2)
NPCSetFrame(3)
ReplaceAndPause()
NPCSetFrame(4)
NPCSetFrame(5)
NPCSetFrame(6)
NPCSetFrame(7)
NPCSetFrame(8)
EventSetState(185, 70, false, false)
NPCSetFrame(9)
NPCSetFrame(10)
NPCSetFrame(11)
EventWalkOneStep(-1, -1, 12, 6)
EventWalkOneStep(-1, -1, 12, 6)
EventWalkOneStep(-1, -1, 12, 6)
Call(Scr_0x777C, 0, 0)
EventWalkOneStep(-1, -1, -12, 6)
EventWalkOneStep(-1, -1, -12, 6)
EventWalkOneStep(-1, -1, -12, 6)
Call(Scr_0x777C, 0, 0)
EventWalkOneStep(-1, -1, -12, 6)
EventWalkOneStep(-1, -1, -12, 6)
EventWalkOneStep(-1, -1, -12, 6)
NPCSetFrame(11)
EventWalkOneStep(-1, -1, 12, 6)
EventWalkOneStep(-1, -1, 12, 6)
NPCSetFrame(15)
NPCSetFrame(16)
EventSetState(185, 72, true, false)
NPCSetFrame(17)
NPCSetFrame(18)
NPCSetFrame(19)
NPCSetFrame(19)
NPCSetFrame(18)
NPCSetFrame(17)
NPCSetFrame(20)
NPCSetFrame(21)
NPCSetFrame(22)
NPCSetFrame(10)

[Event_00185_00072_Auto]
EventModifyPos(185, 71, 16, 6)
EventModifyPos(185, 71, 16, 7)
EventModifyPos(185, 71, 16, 8)
EventModifyPos(185, 71, 16, 9)
EventModifyPos(185, 71, 16, 10)
EventModifyPos(185, 71, 16, 11)
EventModifyPos(185, 71, 16, 12)

[Scr_0x777C]
EventModifyPos(-1, -1, -12, 6)
NPCSetFrame(23)

[Scr_0x777F]
EventModifyPos(-1, -1, 12, 6)
NPCSetFrame(11)

[Scr_0x7782]
EventWalkOneStep(-1, -1, -8, 2)
GotoWithNop(Scr_0x7782, 0)

[Event_00185_00073_Trigger]
EventSetState(-1, -1, false, false)
EventSetState(185, 74, true, false)
PlaySound(71)
WaitEventAutoScriptRun(7, false, false)
RoleMoveOneStep(8, 4, 0)
WaitEventAutoScriptRun(2, false, false)
RoleMoveOneStep(8, 4, 0)
WaitEventAutoScriptRun(3, false, false)
SetBattlefield(14)
SetBattleMusic(42)
BattleStart(203, Scr_0x9C9B, Null)
SetBattleMusic(39)
SetDlgBox(0x00000000)
//得到"风灵珠"
AddItem(203, 0)
BattleEnd()
PartySetPos(10, 17, 0)
EventSetAutoScript(185, 74, Scr_0x7782)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(14, false, false)
EventSetState(185, 74, false, false)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//对不起啦！　凤凰妈妈
//借你生的蛋一用
EventSetState(185, 71, true, false)
WaitEventAutoScriptRun(20, false, false)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(6, false, false)
PartyWalkToBlock(9, 16, 1, 2)
PartyWalkToBlock(7, 19, 1, 4)
WaitEventAutoScriptRun(4, false, false)
SetDlgUpper(1-5-1, 0x00000000, false)
//李逍遥：
//喂！　小偷～把蛋还给我啊！
EventSetDirFrame(185, 71, 0, 27)
VideoUpdate(0, false)
SetDlgUpper(4-4-1, 0x00000000, false)
//阿奴：
//你才是小偷呢！
VideoRestore()
//这是我们族人守护圣兽
//的蛋，不许你碰它！
VideoUpdate(0, false)
SetDlgUpper(1-7-1, 0x00000000, false)
//李逍遥：
//你．．不给我就用抢的罗！
VideoUpdate(0, false)
SetDlgUpper(4-3-1, 0x00000000, false)
//阿奴：
//嘻～抢得到就来呀！
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(5, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(5, false, false)
PartyWalkToBlock(7, 19, 0, 4)
PartyWalkToBlock(9, 17, 0, 4)
PartyWalkToBlock(12, 20, 1, 4)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(0, 8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(0, 8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(0, 8, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetAutoScript(185, 71, Scr_0x77FF)
RoleMoveOneStep(0, 8, 0)
WaitEventAutoScriptRun(0, false, false)
PartyWalkToBlock(6, 29, 0, 4)
PartyWalkToBlock(6, 29, 1, 4)
EventSetDirFrame(185, 71, 0, 27)
VideoUpdate(0, false)
SetDlgUpper(1-3-1, 0x00000000, false)
//李逍遥：
//你己经没有去路了
//乖乖的把凤凰蛋交给我吧！
VideoUpdate(0, false)
SetDlgLower(4-2-1, 0x00000000, false)
//阿奴：
//想个美咧～才不要给你！
EventSetDirFrame(185, 71, 0, 10)
WaitEventAutoScriptRun(4, false, false)
SetDlgUpper(1-10-1, 0x00000000, false)
//李逍遥：
//你．．你想做什麽？(
EventSetDirFrame(185, 71, 0, 15)
WaitEventAutoScriptRun(3, false, false)
EventSetDirFrame(185, 71, 0, 16)
WaitEventAutoScriptRun(0, false, false)
PartyWalkToBlock(7, 30, 0, 4)
//李逍遥：
//喂～　别做傻事啊！
PartyWalkToBlock(8, 31, 0, 4)
EventSetAutoScript(185, 71, Scr_0x7815)
EventSetAutoScript(185, 72, Event_00185_00072_Auto)
EventSetLayer(185, 71, 10)
HeroSetSprite(0, 232, true)
RoleSetDirFrame(0, 0, 0)
EventSetState(185, 75, true, false)
ViewportMove(2, 0, 5)
SetDlgCenter(0, 0x00000000, false)
//啊．．~25
WaitEventAutoScriptRun(4, false, false)
ViewportMove(0, 24, 40)
FadeOut(0)
EventSetState(185, 76, true, false)
EventSetState(185, 77, true, false)
EventSetState(185, 78, true, false)
EventSetState(185, 79, true, false)
ViewportMove(31, 39, -1)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(0, 0x00000000, false)
//阿奴：
//　　哎呀呀．．(
FadeOut(2)
SceneEnter(188)
ReplaceAndPause()

[Scr_0x77FF]
Call(Scr_0x777C, 0, 0)
EventWalkOneStep(-1, -1, -12, 6)
EventWalkOneStep(-1, -1, -12, 6)
EventWalkOneStep(-1, -1, -12, 6)
Call(Scr_0x777C, 0, 0)
EventWalkOneStep(-1, -1, -12, 6)
EventWalkOneStep(-1, -1, -12, 6)
EventWalkOneStep(-1, -1, -12, 6)
Call(Scr_0x777C, 0, 0)
EventWalkOneStep(-1, -1, -12, 6)
EventWalkOneStep(-1, -1, -12, 6)
EventWalkOneStep(-1, -1, -12, 6)
Call(Scr_0x777C, 0, 0)
EventWalkOneStep(-1, -1, -10, 5)
Call(Scr_0x777F, 0, 0)
EventWalkOneStep(-1, -1, 12, 6)
EventWalkOneStep(-1, -1, 12, 6)
EventWalkOneStep(-1, -1, 12, 6)
Call(Scr_0x777F, 0, 0)
EventWalkOneStep(-1, -1, 12, 6)
EventWalkOneStep(-1, -1, 12, 6)

[Scr_0x7815]
NPCSetFrame(17)
NPCSetFrame(18)
NPCSetFrame(19)
NPCSetFrame(19)
NPCSetFrame(19)
NPCSetFrame(19)
NPCSetFrame(18)
EventModifyPos(185, 71, 16, 12)
NPCSetFrame(29)
EventModifyPos(-1, -1, 10, 10)
EventModifyPos(-1, -1, 10, 8)
EventModifyPos(-1, -1, 10, 6)
EventModifyPos(-1, -1, 10, 4)
EventModifyPos(-1, -1, 10, 2)
EventModifyPos(-1, -1, 10, 1)
EventModifyPos(-1, -1, 10, 0)
EventSetState(-1, -1, false, false)

[Event_00185_00075_Auto]
ReplaceAndPause()
NPCSetFrame(1)
NPCSetFrame(2)
NPCSetFrame(3)
NPCSetFrame(4)
ReplaceAndPause()
NPCSetFrame(5)
NPCSetFrame(6)
[Scr_0x782F]
EventModifyPos(-1, -1, 0, 25)
GotoWithNop(Scr_0x782F, 0)

[Event_00185_00074_Auto]
EventWalkOneStep(-1, -1, 0, 8)
GotoWithNop(Event_00185_00074_Auto, 0)

[Scene_00188_Enter]
HeroSetSprite(0, 521, true)
RoleSetDirFrame(0, 0, 0)
PartySetPos(17, 90, 0)
VideoUpdate(0, true)
RoleSetDirFrame(0, 0, 1)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 0, 2)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 1)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 2)
WaitEventAutoScriptRun(1, false, false)
RoleSetDirFrame(0, 0, 1)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 2)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 1)
WaitEventAutoScriptRun(3, false, false)
RoleSetDirFrame(0, 0, 2)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 1)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 2)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 3)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 0, 4)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 0, 5)
WaitEventAutoScriptRun(5, false, false)
RoleSetDirFrame(0, 0, 6)
WaitEventAutoScriptRun(3, false, false)
PlaySound(263)
RoleSetDirFrame(0, 0, 7)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 0, 6)
WaitEventAutoScriptRun(3, false, false)
RoleSetDirFrame(0, 0, 5)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 8)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 9)
WaitEventAutoScriptRun(3, false, false)
RoleSetDirFrame(0, 0, 10)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 0, 11)
WaitEventAutoScriptRun(20, false, false)
RoleSetDirFrame(0, 0, 12)
WaitEventAutoScriptRun(14, false, false)
RoleSetDirFrame(0, 0, 13)
WaitEventAutoScriptRun(10, false, false)
RoleSetDirFrame(0, 0, 12)
WaitEventAutoScriptRun(3, false, false)
RoleSetDirFrame(0, 0, 13)
WaitEventAutoScriptRun(10, false, false)
RoleSetDirFrame(0, 0, 14)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//　　$06唔．．．．~50
RoleSetDirFrame(0, 0, 15)
VideoUpdate(0, false)
//李逍遥：
//　　$02灵儿！！~40
RoleSetDirFrame(0, 0, 16)
WaitEventAutoScriptRun(3, false, false)
RoleSetDirFrame(0, 0, 17)
WaitEventAutoScriptRun(5, false, false)
//李逍遥：
//$06太好了．．灵儿！
//你没事了．．我．．~40
RoleSetDirFrame(0, 0, 18)
WaitEventAutoScriptRun(3, false, false)
RoleSetDirFrame(0, 0, 17)
WaitEventAutoScriptRun(7, false, false)
RoleSetDirFrame(0, 0, 18)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 17)
WaitEventAutoScriptRun(5, false, false)
RoleSetDirFrame(0, 0, 18)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 17)
WaitEventAutoScriptRun(24, false, false)
RoleSetDirFrame(0, 0, 19)
WaitEventAutoScriptRun(3, false, false)
RoleSetDirFrame(0, 0, 20)
VideoUpdate(0, false)
PlaySound(26)
SetDlgCenter(0, 0x00000000, false)
//$00"呀　～　啊！！"~40
RoleSetDirFrame(0, 0, 21)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 0, 22)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//　　$02灵儿．．你？~50
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 23)
FadeToScene(-1, 4)
//李逍遥：
//　　啊．．．！？(
VideoUpdate(0, false)
SetDlgLower(4-4-1, 0x00000000, false)
//阿奴：
//人家．．人家．．
//好心救你，你～你却．．
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//对不起，我一时迷糊
//将你看错为另一个人
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 2, 0)
EventSetState(188, 2, true, true)
VideoUpdate(0, false)
EventSetDirFrame(188, 2, 2, 0)
VideoUpdate(0, false)
SetDlgUpper(4-2-1, 0x00000000, false)
//阿奴：
//哼～好心好意救你
//你却轻薄人家！你们汉族
//的男人就是这麽下流呐？
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//是．．在下不该
//不过我真的是认错人了
//请姑娘宽宏大量．．(
EventSetDirFrame(188, 2, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(4-2-1, 0x00000000, false)
//阿奴：
//我长得跟那位叫灵儿的人
//真的跟那麽相像吗？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//不．．并非是容貌
//而是方才姑娘对在下所施的
//救命法术，造成在下的错觉
VideoUpdate(0, false)
SetDlgUpper(4-1-1, 0x00000000, false)
//阿奴：
//哦？　她也会赎魂咒？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//是．．
//因为感觉很类似，所以．．
VideoUpdate(0, false)
SetDlgUpper(4-4-1, 0x00000000, false)
//阿奴：
//对了！　我问你．．
//你要凤凰蛋做什麽？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//因为在下的妻子怀有身孕
//却因故受了重伤，必须找到
//凤凰蛋壳和火麒麟角二种圣药
//才能医治其母子二人
VideoUpdate(0, false)
SetDlgUpper(4-1-1, 0x00000000, false)
//阿奴：
//你把我认错成你的妻子？
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//是．．．实在很抱歉(
VideoUpdate(0, false)
SetDlgUpper(4-1-1, 0x00000000, false)
//阿奴：
//嗯．．你说～你只要蛋壳吧？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//是，可否请姑娘通融
VideoUpdate(0, false)
SetDlgUpper(4-1-1, 0x00000000, false)
//阿奴：
//好～这颗蛋暂时由我保管
//等小凤凰孵出来後，再把
//蛋壳给你
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//这颗蛋．．你．．孵？(
VideoUpdate(0, false)
SetDlgUpper(4-1-1, 0x00000000, false)
//阿奴：
//我自有方法，不用你操心
VideoRestore()
//而且我也不是白白送你的！
//你也得帮我去拿一件东西
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//可以，那是应该的
SetDlgUpper(4-3-1, 0x00000000, false)
//阿奴：
//嘻嘻～一言为定，跟我走！)
EventSetState(188, 2, false, false)
PartySetRole(51)
RoleSetDirFrame(0, 0, 0)
RoleRevive(10, true)
RoleModifyHPMP(9999, true)
VideoUpdate(0, false)
SetDlgUpper(1-10-1, 0x00000000, false)
//李逍遥：
//去哪啊？
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgUpper(4-3-1, 0x00000000, false)
//阿奴：
//这个树林里有处隐密的树洞
//洞里藏有妖怪所藏的宝物，
//我要你跟我去找一件东西
RoleSetDirFrame(0, 0, 0)
EventSetDirFrame(174, 2, 0, 0)
EventSetTriggerScript(174, 8, Scr_0x80BC)
SceneSetScripts(182, Scr_0x7C6D, Null)
EventSetTriggerScript(180, 2, Scr_0x7341)
Replace()
SetBattlefield(12)

[Event_00187_00005_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
NPCSetFrame(1)
EventSetAutoScript(187, 3, Scr_0x0380)
EventSetState(187, 3, true, false)
EventSetState(187, 4, false, false)

[Scene_00184_Enter]
MusicStop()
PartySetPos(10, 38, 1)
PartySetRole(51)
RoleSetDirFrame(0, 2, 0)
RoleSetDirFrame(1, 2, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//这．．这是什麽地方？
//你要拿的东西就在这里？
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(4-1-1, 0x00000000, false)
//阿奴：
//对呀，昨天我潜进来过一次
//确定东西就在这里面，可惜牠
//们的头头太厉害，我斗不过
//不过，今天我瞧见那魔头外出
//洞内只剩下一些小妖，再加上
//你助阵，这回铁定会成功！
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//搞了半天～
//你是找我来当打手的？
VideoUpdate(0, false)
SetDlgUpper(4-3-1, 0x00000000, false)
//阿奴：
//嘻嘻～能够打败圣兽金翅凤凰
//的人，手底下的功夫应该不会
//输给这里的小妖才对
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//啧～　上了贼船．．
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
Replace()
SetBattlefield(37)
SetBattleMusic(39)
MusicPlay(36, true, 0.00)

[Event_00184_00004_Trigger]
EventSetState(-1, -1, false, false)
SetDlgCenter(0, 0x00000000, false)
//"．．．！！"
PartyWalkToBlock(21, 73, 0, 8)
PartyWalkToBlock(24, 69, 1, 8)
PartyWalkToBlock(21, 66, 1, 8)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(8, false, false)
PartyWalkToBlock(23, 64, 1, 8)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(184, 3, 0, 1)
VideoUpdate(0, false)
PlaySound(78)
WaitEventAutoScriptRun(4, false, false)
SetDlgUpper(4-4-1, 0x00000000, false)
//阿奴：
//可恶．．是空的！
//昨天明明看见他放在里面
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//你到底在找什麽？
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(4-1-1, 0x00000000, false)
//阿奴：
//告诉你也无妨．．
//　我在找水灵珠！
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//灵珠？　我这儿有雷灵珠
//和风灵珠，能代替吗？
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(4-4-1, 0x00000000, false)
//阿奴：
//你是真的不懂
//还是在开我玩笑？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//我只知道这些灵珠似乎是
//妖怪用来修炼法术的法宝．．
VideoUpdate(0, false)
SetDlgUpper(4-2-1, 0x00000000, false)
//阿奴：
//什麽妖怪！　不知道别乱讲
VideoRestore()
//在我们苗族相传，太古时代～
//北方的蛮族和我们南方的苗族
//发生战争，起初蛮族被我们打
//败。於是蛮族的法师就作法请
//他们天上的神明帮忙，天帝就
//派了水、火、雷、风四神，和
//魔女旱魃下凡来对付我们苗人
//可是战争结束後，五位神魔却
//不愿回到天上。结果～天雷地
//火烧光了地上的草木，乾旱和
//饥荒饿死成群的牲畜，继而～
//洪水淹没了整个大地，苗人和
//蛮人都失去了家园。此时有一
//位人形蛇身的巫女出现，诛杀
//四神、封印旱魃，敉平了洪灾
//使大地恢复生机，此女巫就是
//我们族人所崇拜的女娲娘娘
VideoRestore()
//女娲娘娘将五位作乱的神魔的
//骨骸炼化成五颗灵珠，传给後
//世，要她们世世代代用以守护
//千千万万苗族子民．．
//可是传到巫后娘娘那一代时，
//发生了一些变故，五颗灵珠
//遗落各地，被一些妖怪给拾
//去占有了
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//原来还有这麽一个典故．．
VideoUpdate(0, false)
SetDlgUpper(4-1-1, 0x00000000, false)
//阿奴：
//据我追查的结果，水灵珠
//就是在这里的妖怪手中
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//如果是真的，我们也犯不着
//跟妖怪争抢吧，太冒险了！
VideoUpdate(0, false)
SetDlgUpper(4-2-1, 0x00000000, false)
//阿奴：
//你以为我是找好玩的呀！？
//我们苗疆闹大旱灾，很久很久
//都没下雨了，河水都已乾涸
//食物也快吃完了．．
//白苗、黑苗两族为了争夺水源
//已经打了九年的战争了！
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//怪了～打仗能解决什麽事？
VideoUpdate(0, false)
SetDlgUpper(4-1-1, 0x00000000, false)
//阿奴：
//所以罗～　我得找到水灵珠
VideoRestore()
//我阿娘年轻的时候也曾遇到一
//次大旱灾，巫后娘娘当时还只
//是一位女祭司，她用水灵珠施
//法祭天，乾旱就解除了
//所以我相信，只要找到水灵珠
//就能解决这一切
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//呵～看不出你小小年纪
//就有这种心志．．好～我帮你
VideoRestore()
//我猜想～水灵珠也许是被带出
//洞府了，我们到外面附近找找
//说不定会有收获
RoleSetDirFrame(1, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(4-3-1, 0x00000000, false)
//阿奴：
//等一下！
//先把这里的宝物全拿走再说
RoleSetDirFrame(1, 2, 0)
VideoUpdate(0, false)
SetDlgUpper(4-3-1, 0x00000000, false)
//阿奴：
//咱们不能白跑一趟
//反正这些都是妖怪搜刮
//来的，不拿白不拿！)
PartySetRole(15)

[Scene_00175_Enter]
MusicPlay(56, true, 0.00)

[Scr_0x79D8]
NPCMoveToBlock(40, 97, 0, 3, false)
NPCMoveToBlock(45, 91, 1, 8, false)
NPCMoveToBlock(42, 88, 0, 8, false)
NPCSetDirFrame(3, 0)
EventSetTriggerMode(-1, -1, true, 2)

[Event_00175_00010_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//这位大婶，请问．．
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//村民：
//　　呀　～　啊！！
EventSetAutoScript(-1, -1, Scr_0x79D8)
WaitEventAutoScriptRun(8, false, false)
RoleMoveOneStep(-16, -8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-16, -8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-16, -8, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(2, false, false)
ReplaceAndPause()
//村民：
//你是谁？　不要进来！
EventSetState(-1, -1, false, false)
VideoUpdate(0, false)
EventSetState(175, 8, true, true)
EventSetState(175, 9, true, true)
VideoUpdate(0, false)

[Scr_0x79F9]
NPCMoveToBlock(33, 96, 0, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x79FC]
NPCMoveToBlock(32, 96, 1, 3, false)
EventSetState(-1, -1, false, false)

[Event_00175_00011_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
EventSetAutoScript(175, 11, Scr_0x79F9)
WaitEventAutoScriptRun(8, false, false)
//小孩：
//你们是谁呀？
VideoUpdate(0, false)
//妇人：
//丹丹！　快进来！
EventSetDirFrame(175, 12, 1, 0)
WaitEventAutoScriptRun(5, false, false)
EventSetDirFrame(175, 12, 3, 0)
WaitEventAutoScriptRun(5, false, false)
EventSetAutoScript(175, 12, Scr_0x79FC)
WaitEventAutoScriptRun(6, false, false)
EventSetState(175, 14, true, true)
EventSetState(175, 15, true, true)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//怎麽．．这里的人一
//看到我们就躲起来？

[Event_00175_00013_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
EventSetAutoScript(-1, -1, Scr_0x7A1B)
SetDlgCenter(0, 0x00000000, false)
//啊．．！
WaitEventAutoScriptRun(2, false, false)

[Scr_0x7A1B]
NPCMoveToBlock(16, 95, 0, 8, false)
NPCMoveToBlock(18, 93, 0, 8, false)
EventSetState(175, 16, true, true)
EventSetState(175, 17, true, true)
EventSetState(-1, -1, false, false)

[Event_00175_00022_Trigger]
EventSetTriggerMode(-1, -1, false, 2)
WaitEventAutoScriptRun(0, false, true)
SetDlgLower(14-1-1, 0x00000000, false)
//阿桃：
//请问你们是．．．？
RoleSetDirFrame(0, 0, 0)
RoleSetDirFrame(1, 0, 0)
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//太好了，终於有人肯跟我们说话
VideoUpdate(0, false)
SetDlgUpper(14-1-1, 0x00000000, false)
//阿桃：
//你们是如何进来的？　一般
//外人是不可能找到我们村子的
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//我们糊里糊涂的就走到这来了
VideoRestore()
//对了．．请问这是什麽地方？
//为何村民们看到我们就躲起来
VideoUpdate(0, false)
SetDlgUpper(14-1-1, 0x00000000, false)
//阿桃：
//我们这儿叫桃源村
//很少有外人能走进村子来
VideoRestore()
//而且最近发生了一件事
//所以大家看到陌生人会害怕
EventSetState(175, 23, true, true)
EventSetState(175, 24, true, true)
EventSetState(175, 25, true, true)
EventSetState(175, 26, true, true)
EventSetState(175, 27, true, true)
WaitEventAutoScriptRun(24, false, false)
RoleSetDirFrame(1, 3, 0)
WaitEventAutoScriptRun(10, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(14, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(20, false, false)
SetDlgUpper(0, 0x00000000, false)
//妇人甲：
//阿桃呀～你忘了教训了吗？
//不要随便相信外来人啊！
NPCSetDirFrame(3, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//妇人乙：
//是啊，阿桃．．
//外面的人都不是好东西
//你不要又受骗一次了
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//村民：
//咱们桃源乡一向与世隔绝
//自给自足，生活无忧无虑
//自从那个叫宋贺文的小子
//来过之後就全变样了
NPCSetDirFrame(2, 0)
EventSetDirFrame(175, 24, 3, 0)
VideoUpdate(0, false)
//妇人乙：
//是啊！那小子真不是东西
//枉费我们对他那麽好，竟然
//恩将仇报
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//各位别误会，我们不是坏人
//我们来这里没有任何恶意
EventSetDirFrame(175, 24, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//妇人乙：
//我又不是说你
//我们说的是姓宋的那王八蛋
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//你们能不能告诉我
//那宋什麽的到底做了什麽
//会让你们痛恨成这个样子？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//村民：
//不行，桃源乡的秘密绝对不能
//让外人知道，否则麻烦就大了
EventSetDirFrame(175, 25, 3, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//村人丙：
//现在再说这个有啥用？
//阿桃她爹都已经被他们抓走了
VideoRestore()
//可怜呐～村长那麽大把年纪
//一定禁不起那些坏人的折腾
//说不定已经把藏宝物的地方
//给供出来了
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//村民：
//唉．．
//一个月前，阿桃救了一位误闯
//桃树林的采药郎中，还医好他
//的桃花瘴。我们看难得有外人
//来此，想尽尽地主之谊，於是
//款待他住了几天，最後依照惯
//例送他出桃源乡之前，让他喝
//下仙水好忘记这里的一切，谁
//知道阿桃竟把仙水给偷换了
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//村人丙：
//那厮真贪心，知道我们桃源乡
//有件宝物，就和一群妖道合谋
//来抢夺。他们抓走了村长，想
//要逼问出宝物的所在
VideoRestore()
//对了～你们该不会也是和
//他们一夥儿的吧？
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//不不，我生平最痛恨的也就是
//忘恩负义之徒。你们告诉我
//那些家伙在哪里，我帮你们
//把村长救回来
EventSetDirFrame(175, 25, 0, 0)
VideoUpdate(0, false)
SetDlgLower(14-1-1, 0x00000000, false)
//阿桃：
//真的！　那太好了．．
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//村民：
//阿桃！　你又犯了
//这麽轻易就相信外来人
SetDlgLower(14-1-1, 0x00000000, false)
//阿桃：
//可是．．我好担心爹．．
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//妇人乙：
//那个鼻子长长的道士不是说
//只要交出宝物，他们是不会
//伤害村长的
VideoUpdate(0, false)
SetDlgLower(14-1-1, 0x00000000, false)
//阿桃：
//可是．．爹已经跟他们
//去大半天了～会不会．．
RoleSetDirFrame(1, 2, 0)
VideoUpdate(0, false)
SetDlgLower(4-1-1, 0x00000000, false)
//阿奴：
//你们说的那个长鼻子道士
//是不是叫作木道人？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//村民：
//你们怎麽知道？
RoleSetDirFrame(1, 0, 0)
VideoUpdate(0, false)
SetDlgLower(4-3-1, 0x00000000, false)
//阿奴：
//哈～这就对了！　那木道人是
//只树精变的，他最喜欢四处收
//集奇珍异宝，而且得不到就用
//抢的
//我们也正在找他，要向他讨
//回一件东西。你们快告诉我
//他在哪里？
NPCSetDirFrame(1, 0)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(14-1-1, 0x00000000, false)
//阿桃：
//我爹带着他们从这方向
//往林子里走去了
EventSetState(175, 8, false, false)
EventSetState(175, 9, false, false)
EventSetState(175, 14, false, false)
EventSetState(175, 15, false, false)
EventSetState(175, 16, false, false)
EventSetState(175, 17, false, false)
EventSetState(175, 18, false, false)
EventSetState(175, 19, false, false)
EventSetState(175, 20, false, false)
EventSetState(175, 21, false, false)
EventSetState(175, 10, false, false)
EventSetState(175, 11, false, false)
EventSetState(175, 12, false, false)
EventSetState(175, 13, false, false)
ReplaceAndPause()
SetDlgUpper(14-1-1, 0x00000000, false)
//阿桃：
//求求你把我爹救回来
//还有．．
//请你们不要为难宋公子
ReplaceAndPause()
SetDlgUpper(14-1-1, 0x00000000, false)
//阿桃：
//宋公子～他本性并不坏
//他这麽做一定是被逼的

[Event_00175_00023_Auto]
NPCMoveToBlock(16, 108, 0, 3, false)
NPCSetDirFrame(1, 0)

[Event_00175_00024_Auto]
NPCMoveToBlock(19, 100, 1, 3, false)
NPCMoveToBlock(16, 103, 1, 2, true)

[Event_00175_00025_Auto]
NPCMoveToBlock(15, 102, 0, 3, false)
NPCMoveToBlock(16, 103, 0, 2, true)
NPCSetDirFrame(0, 0)

[Event_00175_00026_Auto]
NPCMoveToBlock(17, 104, 0, 2, true)

[Event_00175_00027_Auto]
NPCMoveToBlock(17, 107, 1, 2, true)

[Event_00175_00023_Trigger]
//妇人甲：
//可是～你们有这个本事
//可以打的过那群妖道吗？
ReplaceAndPause()
//妇人甲：
//他们会妖法呀！
//你们不要白白去送死

[Event_00175_00024_Trigger]
//妇人乙：
//我原先看宋贺文的样子
//不像是个坏蛋呀？

[Event_00175_00025_Trigger]
//村人：
//唉．．眼睁睁看村长被抓走
//而我们竟然都束手无策。

[Event_00175_00026_Trigger]
//村民：
//我就知道不能相信外人，这是
//历代先人传下来的祖训，果然
//不听老人言吃亏在眼前！
ReplaceAndPause()
//村民：
//报应、报应啊！

[Event_00175_00027_Trigger]
//村人：
//唉～知人之面不知心呐

[Event_00190_00003_Trigger]
EventSetTriggerMode(-1, -1, false, 2)
//宋贺文：
//咦！？　你们是．．
WaitEventAutoScriptRun(0, false, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//你就是宋公子吧？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//宋贺文：
//是．．在下宋贺文
//兄台有何指教
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//指教？　我想揍人呢！
EventModifyPos(-1, -1, 8, -4)
VideoUpdate(0, false)
EventModifyPos(-1, -1, 8, -4)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//宋贺文：
//你．．你们想做什麽！？
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//我问你．．你是不是对桃源村
//的村民恩将仇报，还带了一群
//妖道来此谋夺宝物
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//宋贺文：
//我．．我也没想到会变成这样
//当初他们说可以帮我，所以～
RoleMoveOneStep(16, -8, 0)
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//所以你就见财起意？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//宋贺文：
//不！　我不是为了寿葫芦
//而是．．而是．．阿桃小姐
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//哦？　这我可听糊涂了
//你给我从实招来，不然
//可有你受的！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//宋贺文：
//当初我在桃花林中迷了路
//又中了瘴毒，幸亏阿桃救了我
//後来．．他们要送我走的时候
//阿桃偷偷把仙水换掉
//因为．．她不想我把她忘了
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//哈哈哈～原来是这麽回事
//你当真不是贪图他们的宝物？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//宋贺文：
//是的，我只想和阿桃在一起
//可是村人们坚决不许外人留在
//桃源村。所以我就凭着记忆，
//沿路潜回来，想带阿桃一起走
//可是．．我又怕被村民发现
//後来我在桃花林外遇见木道人
//他说可以帮助我，所以我就带
//他们通过桃花林进来这里
//谁知～他们是在利用我．．
//而我手无缚鸡之力，斗不过他
//村民又对我误解甚深，我．．
//我真不知该如何是好
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//好吧，你闪一边去
//我来会一会那位木道人！
ReplaceAndPause()
//宋贺文：
//你们要千万小心他手上的金铃
//木道人会用金铃使出很厉害的
//法术

[Scene_00181_Enter]
PartySetPos(48, 117, 1)
ReplaceAndPause()

[Event_00181_00003_Trigger]
EventSetState(-1, -1, false, false)
SetDlgLower(0, 0x00000000, false)
//木道人：
//你这死老头子！
//带我在树林子里绕来绕去
//绕了半天，是想跟我拖延
//时间吗？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//老村长：
//呵～快了，就快到了．．
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//木道人：
//这句话你已经对我说
//六十八遍了！你再不带我
//去取寿葫芦，我就宰了你！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//老村长：
//唉．．我说～道长呀
//以你的修行，只要安安份份
//的，要活个几百年应该不难
//何必倚靠寿葫芦呢？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//木道人：
//少废话！既然被我知道有
//这项宝物，我就非得到不可！
PartyWalkToBlock(23, 105, 1, 4)
PartyWalkToBlock(23, 105, 0, 4)
EventSetDirFrame(181, 2, 3, 0)
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//．．．！！
EventSetState(181, 2, false, false)
SetBattlefield(11)
SetBattleMusic(38)
BattleStart(221, Scr_0x9C9B, Null)
BattleEnd()
SetBattleMusic(39)
SetDlgBox(0x00000000)
//获得金罡珠
AddItem(201, 0)
SetDlgLower(4-2-1, 0x00000000, false)
//咦．．不是水灵珠？
EventSetState(181, 5, true, false)
PartySetPos(21, 102, 1)
Call(Scr_0xA53C, 0, 0)
WaitEventAutoScriptRun(20, false, false)
SetDlgLower(0, 0x00000000, false)
//阿桃：
//爹．．孩儿害您受苦了
//都是孩儿惹出来的祸
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//老村长：
//这不能怪你，你也是无心的
//要怪～就应该怪咱们不该怀
//有珍宝、引人觊觎
VideoRestore()
//幸好有二位英雄仗义相助
//本村得以免去一场劫难
EventSetDirFrame(181, 5, 2, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//阿桃：
//感谢二位的救了我爹．．
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//哈哈～这没什麽啦！
//千万别放在心上
RoleSetDirFrame(1, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(4-3-1, 0x00000000, false)
//阿奴：
//是啊～要是又有女孩子想
//报恩，他可会消受不了！
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgLower(1-7-1, 0x00000000, false)
//李逍遥：
//你胡扯些什麽
RoleSetDirFrame(1, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(4-3-1, 0x00000000, false)
//阿奴：
//嘻嘻～那边就有一位
//念念不忘救命恩人的人
RoleSetDirFrame(1, 0, 0)
EventSetState(182, 0, true, false)
WaitEventAutoScriptRun(20, false, false)
EventSetDirFrame(181, 5, 3, 0)
WaitEventAutoScriptRun(8, false, false)
EventWalkOneStep(181, 5, 8, 4)
WaitEventAutoScriptRun(0, false, false)
EventWalkOneStep(181, 5, 8, 4)
WaitEventAutoScriptRun(3, false, false)
SetDlgUpper(14-1-1, 0x00000000, false)
//阿桃：
//宋．．宋公子．．
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//老村长：
//小伙子，你过来！
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//宋贺文：
//是．．．
EventSetAutoScript(182, 0, Scr_0x7C4D)
WaitEventAutoScriptRun(16, false, false)
EventSetDirFrame(181, 5, 2, 0)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(181, 5, 1, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//阿桃：
//爹～这件事都是我引起的
//求求您不要责怪宋公子
//您要责罚，就罚我吧
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//老村长：
//你紧张个什麽劲？
//爹又没说要对他怎麽样
EventSetDirFrame(182, 0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//宋贺文：
//阿桃小姐．．你不必再替我
//求情了，这样子我会更良心
//不安的．．
EventSetDirFrame(181, 5, 2, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//阿桃：
//不．．要不是我．．
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//老村长：
//你们两个在争什麽呀？
//我又没说要责怪谁！
EventSetDirFrame(182, 0, 1, 0)
EventSetDirFrame(181, 5, 1, 0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//老村长：
//都怪我老眼昏花，竟然没
//发觉我的女儿喜欢上外地人
//才会惹出这麽多事情来！
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//阿桃：
//爹　～
EventSetDirFrame(181, 5, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//老村长：
//小伙子～你真的喜欢阿桃？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//宋贺文：
//是．．请伯父成全
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//老村长：
//既然你知道我们的身份
//可知～要跟我们一起生活
//要付出什麽代价吗？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//宋贺文：
//我知道．．
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//老村长：
//不後悔？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//宋贺文：
//贺文心意已定，决不会後悔
EventSetDirFrame(181, 5, 2, 0)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(181, 4, 4, 0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//老村长：
//好．．你来
//把这颗桃子吃了
EventSetAutoScript(182, 0, Scr_0x7C52)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(181, 5, 1, 0)
WaitEventAutoScriptRun(20, false, false)
EventSetDirFrame(181, 4, 3, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetAutoScript(182, 0, Scr_0x7C54)
WaitEventAutoScriptRun(25, false, false)
SetDlgUpper(0, 0x00000000, false)
//老村长：
//今後，你就是我们
//桃源村的一份子了
EventSetDirFrame(181, 5, 2, 0)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(182, 0, 0, 0)
WaitEventAutoScriptRun(10, false, false)
FadeOut(2)
SceneEnter(183)

[Event_00181_00006_Auto]
NPCMoveToBlock(24, 106, 0, 2, true)

[Scr_0x7C4D]
NPCMoveToBlock(22, 104, 0, 3, false)
ReplaceAndPause()
ReplaceAndPause()
NPCMoveToBlock(21, 103, 1, 2, true)

[Scr_0x7C52]
NPCMoveToBlock(20, 102, 1, 2, true)

[Scr_0x7C54]
EventModifyPos(-1, -1, 4, 2)
ReplaceAndPause()
ReplaceAndPause()
EventModifyPos(-1, -1, 4, 2)
ReplaceAndPause()
ReplaceAndPause()
EventModifyPos(-1, -1, 4, 2)
ReplaceAndPause()
ReplaceAndPause()
EventModifyPos(-1, -1, 4, 2)
ReplaceAndPause()
ReplaceAndPause()
EventModifyPos(-1, -1, 4, 2)
ReplaceAndPause()
ReplaceAndPause()
EventModifyPos(-1, -1, 4, 2)
ReplaceAndPause()
ReplaceAndPause()
EventModifyPos(-1, -1, 4, 2)

[Scr_0x7C68]
NPCMoveToBlock(30, 83, 0, 3, false)
NPCSetDirFrame(1, 0)

[Scr_0x7C6B]
NPCMoveToBlock(32, 81, 0, 3, false)

[Scr_0x7C6D]
EventSetTriggerScript(180, 2, Event_00180_00002_Trigger)
FadeToScene(-1, 0)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(7, false, false)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(3, false, false)
SetDlgUpper(1-2-1, 0x00000000, false)
//李逍遥：
//哗．．．
VideoUpdate(0, false)
JumpIfEventStateMatches(254, 6, false, false, Scr_0x7CA7)
EventSetDirFrame(182, 2, 3, 0)
VideoUpdate(0, false)
SetDlgLower(4-6-1, 0x00000000, false)
//阿奴：
//嘻～虽然水灵珠没找着
//却赚了不少好东西
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//水灵珠应该是什麽样子？
VideoUpdate(0, false)
SetDlgLower(4-1-1, 0x00000000, false)
//阿奴：
//我阿娘说～那是一颗姆指般大
//、水蓝色的宝珠，外表会自然
//透出水气来，而靠近此珠会感
//受到一股凉意
VideoUpdate(0, false)
SetDlgUpper(1-3-1, 0x00000000, false)
//李逍遥：
//嘿．．照你这麽一说
//好像是我小时候常玩的弹珠
VideoUpdate(0, false)
SetDlgLower(4-2-1, 0x00000000, false)
//阿奴：
//少胡说八道了！
VideoUpdate(0, false)
SetDlgUpper(1-5-1, 0x00000000, false)
//李逍遥：
//那你的凤凰蛋什麽
//时候才能给我呢？
EventSetDirFrame(182, 2, 2, 0)
VideoUpdate(0, false)
SetDlgLower(4-2-1, 0x00000000, false)
//阿奴：
//你急什麽？又不是不给你
//等小凤凰孵出来，剩下的
//蛋壳自然就是你的了！
//难道你忍心伤害这小生命？
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//好啦，我等就是了
JumpIfEventStateMatches(205, 18, false, false, Scr_0x7CAB)
[Scr_0x7CA7]
EventSetState(182, 2, false, false)
PartySetRole(51)
ReplaceAndPause()

[Scr_0x7CAB]
VideoUpdate(0, false)
SetDlgLower(4-1-1, 0x00000000, false)
//阿奴：
//那．．这段期间
//我先带你去取"火麒麟角"
VideoUpdate(0, false)
SetDlgUpper(1-10-1, 0x00000000, false)
//李逍遥：
//麒麟角！　你知道在哪里？
VideoUpdate(0, false)
SetDlgLower(4-3-1, 0x00000000, false)
//阿奴：
//怎麽会不知道，不过～
//要先经过我阿娘同意才行
SetDlgUpper(1-10-1, 0x00000000, false)
//李逍遥：
//你阿娘？
EventSetDirFrame(182, 2, 3, 0)
VideoUpdate(0, false)
SetDlgLower(4-1-1, 0x00000000, false)
//阿奴：
//哎呀～跟我走就对了
EventSetState(182, 2, false, false)
PartySetRole(51)
ReplaceAndPause()

[Event_00178_00002_Trigger]
SetDlgCenter(0, 0x00000000, false)
//树林内弥漫着浓雾，无法前进
RoleMoveOneStep(16, 8, 0)

[Scene_00180_Enter]
MusicStop()
PlaySound(103)
FadeToScene(-1, 2)
SetDlgCenter(0, 0x00000000, false)
//阿奴祭起风灵珠
//随即一阵风吹散了浓雾
Replace()
SetBattlefield(54)
SetBattleMusic(39)
MusicPlay(35, true, 0.00)

[Scene_00190_Enter]
SetBattleMusic(37)

[Scene_00183_Enter]
Call(Scr_0xA542, 0, 0)
PartySetRole(1)
RoleSetDirFrame(0, 1, 0)
PartySetPos(32, 80, 1)
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//恭喜三位一切圆满
//我们也该告辞了．．
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//老村长：
//等等，老朽有个东西
//想赠予二位英雄
VideoUpdate(0, false)
SetDlgLower(4-1-1, 0x00000000, false)
//阿奴：
//哦！　是什麽宝物？)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//老村长：
//请女英雄在您左手边
//的井口内一探便知．．
RoleSetDirFrame(0, 0, 0)
EventSetAutoScript(183, 1, Scr_0x7C68)
WaitEventAutoScriptRun(18, false, false)
EventSetAutoScript(183, 1, Scr_0x7C6B)
WaitEventAutoScriptRun(14, false, false)
SetDlgLower(4-2-1, 0x00000000, false)
//阿奴：
//哗～　你看！
//是琥珀雕成的葫芦呢
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//老伯，这东西太贵重了
//我们不能收
EventSetDirFrame(183, 1, 1, 0)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(183, 1, 2, 0)
VideoUpdate(0, false)
SetDlgLower(4-4-1, 0x00000000, false)
//阿奴：
//喂！　你很死脑筋呢
//人家诚心诚意要送我们的
//你不收，我可没说不要
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//老村长：
//呵呵～此物乃是寿葫芦
//是我年轻时在一次偶然的
//机会中所得到的稀世珍宝
VideoRestore()
//可是～这东西对我们桃源村
//的人说，却是毫无用处
//而且还惹来这麽一场风波
VideoRestore()
//不如送给二位，对你们行走
//江湖的人来说，或多或少会
//有所帮助
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//晚辈就恭敬不如从命了
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//老村长：
//呵呵～天下无不散的宴席
//让老朽送你们一程．．
EventSetDirFrame(183, 1, 1, 0)
VideoUpdate(0, false)
SetDlgLower(4-1-1, 0x00000000, false)
//阿奴：
//你不会也要我们喝仙水
//把这里的事忘掉吧？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//老村长：
//二位是我们的恩人
//我们怎会如此对待呢？
VideoRestore()
//二位若再有机会经过此地
//看见这片桃树结满果实时
//别忘了来喝我孙子的满月
//酒喔，呵呵．．．
VideoUpdate(0, false)
EventSetState(183, 5, false, false)
EventSetState(183, 6, false, false)
EventSetState(183, 7, false, false)
EventSetState(183, 13, true, true)
EventSetState(183, 14, true, true)
EventSetState(183, 15, true, true)
FadeToScene(-1, 0)
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
EventSetState(183, 8, false, false)
EventSetState(183, 9, false, false)
EventSetState(183, 16, true, true)
EventSetState(184, 0, true, true)
FadeToScene(-1, 0)
EventSetDirFrame(183, 1, 0, 0)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(183, 1, 1, 0)
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//原来你们是桃树精！
//那～宋兄．．．
VideoUpdate(0, false)
EventSetState(183, 2, false, false)
EventSetState(183, 3, false, false)
EventSetState(183, 4, false, false)
EventSetState(183, 10, true, true)
EventSetState(183, 11, true, true)
EventSetState(183, 12, true, true)
FadeToScene(-1, 2)
SetDlgCenter(0, 0x00000000, false)
//谢谢你们．．再见～
AddItem(209, 0)
SceneEnter(182)

[Event_00181_00005_Auto]
NPCMoveToBlock(20, 103, 1, 3, false)

[Scene_00186_Enter]
SetBattlefield(22)
MusicPlay(70, true, 0.00)
SetBattleMusic(41)

[Scene_00192_Enter]
SetBattlefield(13)
SetBattleMusic(41)

[Scene_00187_Enter]
SetBattlefield(11)
MusicPlay(36, true, 0.00)

[Event_00180_00012_Trigger]
SceneEnter(189)
PartySetPos(19, 120, 0)
FadeOut(0)

[Event_00189_00001_Trigger]
SceneEnter(180)
PartySetPos(55, 39, 0)
FadeOut(0)

[Event_00180_00013_Trigger]
SceneEnter(189)
PartySetPos(55, 44, 1)
FadeOut(0)

[Event_00189_00002_Trigger]
SceneEnter(180)
PartySetPos(7, 80, 0)
FadeOut(0)

[Event_00176_00001_Trigger]
SceneEnter(186)
PartySetPos(56, 72, 1)
FadeOut(0)

[Scene_00179_Teleport]
SceneEnter(176)
PartySetPos(12, 59, 0)
FadeOut(0)

[Event_00179_00006_Trigger]
SceneEnter(202)
PartySetPos(6, 31, 1)
FadeOut(0)

[Scr_0x7D7A]
SceneEnter(259)
PartySetPos(6, 31, 1)
FadeOut(0)

[Event_00202_00001_Trigger]
SceneEnter(179)
PartySetPos(54, 64, 1)
FadeOut(0)

[Event_00173_00001_Trigger]
SceneEnter(176)
PartySetPos(44, 44, 1)
FadeOut(0)

[Event_00176_00002_Trigger]
SceneEnter(174)
PartySetPos(22, 39, 0)
FadeOut(0)

[Scr_0x7D8A]
SceneEnter(173)
PartySetPos(22, 39, 0)
FadeOut(0)

[Scr_0x7D8E]
EventAnimate(-1, 0)
GotoWithNop(Scr_0x7D8E, 0)

[Scene_00172_Enter]
MusicPlay(28, true, 0.00)
RoleUninstallEquip(1, 6)
RoleUninstallEquip(2, 0)
PartySetPos(15, 23, 0)
HeroSetSprite(0, 232, true)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
//$12"李大哥　我娘想见你
//我带你去见她　好不好？"~60
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(0, 0x00000000, false)
//$07　哎呦～我很累了
//　　下次再说吧！~50
WaitEventAutoScriptRun(4, false, false)
SetDlgUpper(0, 0x00000000, false)
//$12"好吧．．．~70
VideoRestore()
//那．．我自己过去了．．"$02~60
FadeToScene(-1, 0)
EventSetAutoScript(172, 1, Scr_0x7D8E)
WaitEventAutoScriptRun(37, false, false)
EventSetState(172, 1, false, false)
WaitEventAutoScriptRun(3, false, false)
SceneEnter(174)

[Event_00174_00007_Auto]
NPCMoveToBlock(19, 31, 0, 4, true)

[Scr_0x7DAC]
WaitEventAutoScriptRun(16, false, false)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(10, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(24, 36, 1, 4, true)
NPCMoveToBlock(20, 40, 1, 4, true)

[Scene_00174_Enter]
PartySetPos(28, 31, 1)
WaitEventAutoScriptRun(5, false, false)
EventSetDirFrame(174, 4, 0, 1)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//月如！　等等我．．
VideoUpdate(0, false)
SetDlgLower(44-1-1, 0x00000000, false)
//老婆婆：
//月神保佑．．
//您可终於醒过来了！
EventSetDirFrame(174, 4, 0, 2)
VideoUpdate(0, false)
SetDlgUpper(1-10-1, 0x00000000, false)
//李逍遥：
//我．．这里是．．
VideoRestore()
//她们．．月如和灵儿呢？
VideoUpdate(0, false)
SetDlgLower(44-1-1, 0x00000000, false)
//老婆婆：
//这里是我家，二位姑娘在
//另外一间病房．．
EventSetState(174, 4, false, false)
HeroSetSprite(0, 538, true)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(174, 6, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(44-1-1, 0x00000000, false)
//老婆婆：
//等等！你的伤的不轻啊
//不可以乱动！~50
PartyWalkToBlock(24, 36, 0, 8)
WaitEventAutoScriptRun(3, false, false)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(3, false, false)
PartyWalkToBlock(17, 29, 1, 8)
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//　　　灵儿！~40
EventSetState(174, 6, false, false)
EventSetState(174, 7, true, true)
PartyWalkToBlock(18, 29, 0, 4)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//　灵儿．．你听得见我吗？
WaitEventAutoScriptRun(22, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgUpper(1-2-1, 0x00000000, false)
//李逍遥：
//老婆婆，灵儿要不要紧？
VideoUpdate(0, false)
SetDlgLower(44-1-1, 0x00000000, false)
//老婆婆：
//放心～女人虽弱、为母则强
//照她的情形看来～死不了的！
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//为母．．．？
VideoUpdate(0, false)
SetDlgLower(44-1-1, 0x00000000, false)
//老婆婆：
//这丫头一直凝聚着全身的真气
//护着肚子里胎儿，只要这股气
//不散，加上我的灵药，十天半
//个月内不成问题
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(7, false, false)
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(1-2-1, 0x00000000, false)
//李逍遥：
//胎儿．．我～我的？
VideoUpdate(0, false)
SetDlgLower(44-1-1, 0x00000000, false)
//老婆婆：
//这要问你自己，我怎麽知道？
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgUpper(1-3-1, 0x00000000, false)
//李逍遥：
//哈．．想不到我要当爹了)
VideoUpdate(0, false)
SetDlgLower(44-1-1, 0x00000000, false)
//老婆婆：
//别高兴的太早，她的身体能不
//能复原还大有问题哩．．
VideoRestore()
//凡人的病，用凡人的药来医
//仙人的命，可得用仙药来救
//要救她母子二人的命，不用
//特别的仙药是办不到的
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(1-4-1, 0x00000000, false)
//李逍遥：
//仙药？
VideoUpdate(0, false)
SetDlgLower(44-1-1, 0x00000000, false)
//老婆婆：
//要治好她们母子的伤
//唯有得"凤凰蛋"、"麒麟角"二物
VideoRestore()
//在这灵山"神木林"深处，找到
//"金翅凤凰"的窝，可取其蛋壳
//，白苗族居住的"大理城麒麟
//洞"中，有只千年火眼麒麟精
//将之降伏可得其角，不过你要
//记住．．此二兽乃我苗族圣兽
//只可取药，不可伤其性命，否
//则会遭天谴
VideoUpdate(0, false)
SetDlgUpper(1-9-1, 0x00000000, false)
//李逍遥：
//好～取药的事就交给我！
VideoRestore()
//对了．．月如呢？
//我找月如跟我一块去好了
//她比我精明，有她在比较
//不会失手
VideoUpdate(0, false)
EventSetDirFrame(174, 7, 0, 0)
WaitEventAutoScriptRun(6, false, false)
SetDlgLower(44-1-1, 0x00000000, false)
//老婆婆：
//唉．．有你这句话
//她可以瞑目了．．
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//．．．．．！
PartyWalkToBlock(16, 31, 0, 8)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
//$07她．．是．．月．．月如？
//老婆婆．．您别跟我开玩笑
EventSetDirFrame(174, 7, 3, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(44-1-1, 0x00000000, false)
//老婆婆：
//$05天灵碎裂，回天乏术．．送到
//我这里来时，就已经断气了
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(8, false, false)
HeroSetSprite(0, 232, true)
EventSetDirFrame(174, 2, 0, 1)
WaitEventAutoScriptRun(5, false, false)
EventSetDirFrame(174, 2, 0, 2)
WaitEventAutoScriptRun(20, false, false)
EventSetDirFrame(174, 2, 0, 3)
WaitEventAutoScriptRun(10, false, false)
MusicStop()
SetDlgUpper(0, 0x00000000, false)
//$08不．．这不会是真的．．~60
FadeOut(6)
PlayCDOrMusic(8, 27)
SceneEnter(193)
ReplaceAndPause()
PartySetPos(16, 31, 0)
EventSetAutoScript(174, 7, Scr_0x7DAC)
VideoFadeAndUpdate(1)
MusicStop()
SetDlgCenter(0, 0x00000000, false)
//月如．．．．
EventSetDirFrame(174, 2, 0, 4)
EventSetState(174, 7, false, false)
EventSetState(174, 8, true, true)
SceneEnter(177)
FadeOut(0)
ReplaceAndPause()
PartySetPos(16, 30, 1)
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 3, 0)
ReplaceAndPause()

[Scene_00177_Enter]
PartySetPos(44, 44, 0)
WaitEventAutoScriptRun(26, false, false)
EventSetDirFrame(178, 0, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(29-1-1, 0x00000000, false)
//剑圣：
//圣姑，他们的情况如何？
VideoUpdate(0, false)
SetDlgLower(44-1-1, 0x00000000, false)
//老婆婆：
//小俩口的命是捡回来了
//而林姑娘那边我就没办法了。
VideoRestore()
//你可真有一套，居然找上我
//这用毒的老太婆来医病人。
//还有～我早已经退位几十年
//别再叫我圣姑啦！
VideoUpdate(0, false)
SetDlgUpper(29-1-1, 0x00000000, false)
//剑圣：
//唉．．天下人皆知～
//您的医术是世上绝无仅有
//连您也救不活那丫头吗？
VideoUpdate(0, false)
SetDlgLower(44-1-1, 0x00000000, false)
//老婆婆：
//要她活过来是不可能，不过～
//让她不死的方法我倒是不少
VideoUpdate(0, false)
SetDlgUpper(29-1-1, 0x00000000, false)
//剑圣：
//您这话我可听糊涂了
VideoUpdate(0, false)
SetDlgLower(44-1-1, 0x00000000, false)
//老婆婆：
//呵呵．．时候到了你自然明白
//只不过～我可不保证一定成功
VideoUpdate(0, false)
SetDlgUpper(29-1-1, 0x00000000, false)
//剑圣：
//好吧～无论如何请您一定要
//帮助这些孩子．．
EventSetDirFrame(178, 0, 2, 0)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(178, 0, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(29-1-1, 0x00000000, false)
//剑圣：
//我该告辞了．．
//别让他们知道我来过这里
EventSetAutoScript(178, 0, Scr_0x7EAC)
WaitEventAutoScriptRun(12, false, false)
EventSetDirFrame(177, 1, 0, 0)
WaitEventAutoScriptRun(30, false, false)
FadeOut(0)
EventSetState(177, 1, false, false)
EventSetState(178, 0, false, false)
SceneEnter(174)
ReplaceAndPause()

[Event_00173_00011_Trigger]
SetDlgCenter(0, 0x00000000, false)
//林月如冰冷的身躯

[Event_00174_00005_Trigger]
//赵灵儿依然昏迷不醒

[Event_00177_00001_Auto]
NPCMoveToBlock(44, 44, 1, 2, true)
NPCSetDirFrame(1, 0)

[Scr_0x7EAC]
NPCSetDirFrame(0, 0)
NPCMoveToBlock(38, 49, 0, 4, true)

[Scr_0x7EAF]
SetDlgUpper(44-1-1, 0x00000000, false)
//老婆婆：
//两种圣药都拿到了吗？
//呵呵．．还好赶上了产期
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//一切都拜托婆婆您了
VideoUpdate(0, false)
SetDlgUpper(44-1-1, 0x00000000, false)
//老婆婆：
//听阿奴说～你在神殿
//蒙女娲娘娘显灵召见是吗？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//其实神殿中的石像是巫后本人
//也就是灵儿失散多年的母亲
//晚辈机缘巧遇，才得知原由
//也算是替灵儿了却一番心愿
//晚辈并且在幻境中得到失落的
//水灵珠。我想～这些都是娘娘
//在冥冥之中安排的吧．．
VideoUpdate(0, false)
SetDlgUpper(4-2-1, 0x00000000, false)
//阿奴：
//水灵珠！？
//逍遥哥，你是从哪里找到的？
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//这．．就．．不必提起了吧
VideoUpdate(0, false)
//李逍遥心里想：
//总不能告诉她们
//是当年我爹娘偷走的吧
VideoUpdate(0, false)
SetDlgLower(4-6-1, 0x00000000, false)
//阿奴：
//快～　快给我！
VideoUpdate(0, false)
SetDlgUpper(44-1-1, 0x00000000, false)
//老婆婆：
//你要灵珠做什麽！？
VideoUpdate(0, false)
SetDlgLower(4-1-1, 0x00000000, false)
//阿奴：
//有水灵珠就可以解除乾旱了！
VideoUpdate(0, false)
SetDlgUpper(44-1-1, 0x00000000, false)
//老婆婆：
//你知道灵珠的咒文吗？
VideoUpdate(0, false)
SetDlgLower(4-5-1, 0x00000000, false)
//阿奴：
//我．．不知道．．
VideoUpdate(0, false)
SetDlgUpper(44-1-1, 0x00000000, false)
//老婆婆：
//傻丫头．．五灵珠的咒文
//只有巫后娘娘才知道，而且
//也只有她的女儿能够继承这
//种力量
VideoRestore()
//这些灵珠，就等待它们真正
//的主人，赵姑娘身子恢复後
//就能重现光芒，让我们族人
//走出苦难的日子
FadeOut(2)
FadeFBP(-1, 0)
SetDlgCenter(0, 0x00000000, false)
//"数月後．．．"~30
MusicPlay(24, true, 0.00)
SetTimeFilter(0)
FadeIn(0)
Delay(20)
RemoveItem(215, 1, Null)
RemoveItem(216, 1, Null)
SceneEnter(173)
FadeOut(0)

[Event_00174_00008_Trigger]
SetDlgLower(44-1-1, 0x00000000, false)
//老婆婆：
//你的伤好的差不多了
//可以出去走走啦，两个丫头
//婆婆我会替你看好的
ReplaceAndPause()
SetDlgLower(44-1-1, 0x00000000, false)
//老婆婆：
//千万记住喔～
//金翅凤凰喜欢在巨树顶端筑巢
//你到神木林高处找找，也许会
//有收获
ReplaceAndPause()
SetDlgLower(44-1-1, 0x00000000, false)
//老婆婆：
//大理城外附近黑苗、白苗二族
//经常发生战争，我建议你暂时
//不要靠近那里，等局面平静些
//再去火麟洞吧
ReplaceAndPause()
SetDlgLower(44-1-1, 0x00000000, false)
//老婆婆：
//对了．．我这房里有许多毒蛊
//和灵药，你可以自由运用
VideoRestore()
//不过～有些胡乱吃会丧命的
//还没搞清楚药性之前，可别
//乱用喔！
ReplaceAndPauseWithNop(Event_00174_00008_Trigger, 0)

[Event_00174_00012_Trigger]
SetDlgBox(0x00000000)
//得到一只金蚕王
AddItem(90, 0)
ReplaceAndPause()

[Event_00174_00014_Trigger]
SetDlgBox(0x00000000)
//得到一包九阴散
AddItem(76, 0)
ReplaceAndPause()

[Event_00174_00015_Trigger]
SetDlgBox(0x00000000)
//得到三株断肠草
AddItem(65, 3)
ReplaceAndPause()

[Event_00174_00016_Trigger]
SetDlgBox(0x00000000)
//得到三包毒龙砂
AddItem(97, 3)
ReplaceAndPause()

[Event_00174_00017_Trigger]
SetDlgBox(0x00000000)
//得到一包无影毒
AddItem(77, 0)
ReplaceAndPause()

[Event_00174_00018_Trigger]
SetDlgBox(0x00000000)
//得到七只碧血蚕
AddItem(87, 7)
ReplaceAndPause()
[Event_00174_00019_Trigger]
SetDlgBox(0x00000000)
//得到一只炼蛊皿
AddItem(208, 0)
ReplaceAndPause()

[Event_00176_00003_Trigger]
SetDlgBox(0x00000000)
//得到九只蛊
AddItem(88, 9)
ReplaceAndPause()

[Event_00176_00004_Trigger]
SetDlgBox(0x00000000)
//采得二株忘魂花
AddItem(67, 2)
ReplaceAndPause()

[Event_00176_00005_Trigger]
SetDlgBox(0x00000000)
//采得一株血海棠
AddItem(64, 0)
ReplaceAndPause()

[Event_00176_00006_Trigger]
SetDlgBox(0x00000000)
//采得二颗试炼果
AddItem(52, 2)
ReplaceAndPause()

[Event_00176_00007_Trigger]
SetDlgBox(0x00000000)
//采得一颗鼠儿果
AddItem(44, 0)

[Event_00176_00008_Trigger]
SetDlgBox(0x00000000)
//采得一颗龙涎草
AddItem(46, 0)
ReplaceAndPause()

[Event_00176_00009_Trigger]
SetDlgBox(0x00000000)
//采得一颗九节菖蒲
AddItem(29, 0)
ReplaceAndPause()

[Event_00176_00013_Trigger]
EventSetState(-1, -1, false, false)
VideoUpdate(0, false)
//摘得一株紫罂粟
AddItem(68, 0)

[Event_00176_00014_Trigger]
EventSetState(-1, -1, false, false)
VideoUpdate(0, false)
//摘得一株醍醐香
AddItem(66, 0)

[Event_00176_00015_Trigger]
EventSetState(-1, -1, false, false)
VideoUpdate(0, false)
//摘得一株鬼枯藤
AddItem(69, 0)

[Event_00173_00005_Auto]
NPCMoveToBlock(21, 35, 1, 2, true)
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(3, 0)
ReplaceAndPause()
NPCMoveToBlock(23, 34, 0, 2, true)
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(3, 0)
ReplaceAndPauseWithNop(Event_00173_00005_Auto, 0)

[Event_00173_00009_Auto]
NPCMoveToBlock(21, 33, 1, 3, false)

[Scr_0x7F7C]
NPCMoveToBlock(17, 29, 1, 3, false)
NPCSetDirFrame(2, 0)

[Event_00173_00007_Auto]
NPCSetDirFrame(0, 0)

[Scr_0x7F81]
NPCMoveToBlock(21, 33, 1, 3, false)
NPCMoveToBlock(18, 30, 1, 3, false)
NPCMoveToBlock(19, 30, 0, 3, false)
NPCSetDirFrame(1, 0)

[Scr_0x7F86]
NPCMoveToBlock(18, 29, 1, 3, false)

[Event_00173_00008_Auto]
WaitEventAutoScriptRun(6, false, false)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(3, 0)
ReplaceAndPause()
NPCMoveToBlock(19, 30, 1, 3, false)
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(0, 0)
NPCSetDirFrame(1, 0)
NPCSetDirFrame(2, 0)
NPCSetDirFrame(3, 0)
NPCSetDirFrame(0, 0)

[Scene_00173_Enter]
SceneSetScripts(182, Null, Null)
EventSetTriggerScript(180, 2, Event_00180_00002_Trigger)
PartySetPos(22, 34, 1)
HeroSetSprite(0, 232, false)
PartySetRole(1)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(42, false, false)
SetDlgUpper(4-5-1, 0x00000000, false)
//阿奴：
//唔．．生小娃娃
//怎麽要那麽久啊！
EventSetAutoScript(173, 5, Event_00001_00026_Auto)
EventSetState(173, 6, false, false)
EventSetState(173, 7, true, false)
EventSetState(173, 2, false, false)
EventSetState(173, 3, false, false)
EventSetState(173, 9, true, true)
WaitEventAutoScriptRun(6, false, false)
SetDlgUpper(44-1-1, 0x00000000, false)
//$01快！快去厨房提热水来
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//是～　马上来！
EventSetAutoScript(173, 5, Scr_0x80B2)
WaitEventAutoScriptRun(12, false, false)
EventSetDirFrame(173, 9, 2, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(4-2-1, 0x00000000, false)
//阿奴：
//$02小宝宝生出来了吗？
VideoUpdate(0, false)
SetDlgUpper(44-1-1, 0x00000000, false)
//还早哩！
//你也别闲着，进来帮忙
VideoUpdate(0, false)
SetDlgLower(4-3-1, 0x00000000, false)
//阿奴：
//好～！
EventSetAutoScript(173, 7, Scr_0x7F81)
EventSetAutoScript(173, 9, Scr_0x7F7C)
VideoFadeAndUpdate(65535)
EventModifyPos(173, 9, -32, 16)
EventSetDirFrame(173, 4, 0, 1)
EventSetState(173, 10, true, false)
EventSetState(173, 5, false, false)
PartySetPos(18, 29, 0)
HeroSetSprite(0, 550, true)
RoleSetDirFrame(0, 0, 0)
PlaySound(272)
VideoUpdate(0, true)
SetDlgCenter(0, 0x00000000, false)
//哇～．．哇～．．
WaitEventAutoScriptRun(12, false, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//是个女儿！　灵儿～你瞧
//她长得好像你呢！我们的
//女儿将来一定也是个大美人
VideoRestore()
//对了～
//该替她取什麽名字好呢？
VideoUpdate(0, false)
SetDlgUpper(2-1-1, 0x00000000, false)
//赵灵儿：
//我想．．就叫"忆如"吧．．
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//李忆如．．嗯～好名字！
VideoUpdate(0, false)
SetDlgUpper(2-5-1, 0x00000000, false)
//赵灵儿：
//这个孩子，等於是月如姐姐
//牺牲性命换来的，我希望月如
//姐姐在天之灵能继续庇佑这孩
//子平安长大．．．
EventSetAutoScript(173, 7, Scr_0x7F86)
WaitEventAutoScriptRun(8, false, false)
EventSetState(173, 10, false, false)
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 3, 0)
SetDlgLower(4-6-1, 0x00000000, false)
//阿奴：
//哇～　也给我抱抱嘛！
EventSetState(173, 10, false, false)
EventSetState(173, 7, false, false)
EventSetState(173, 8, true, true)
WaitEventAutoScriptRun(22, false, false)
PlaySound(273)
WaitEventAutoScriptRun(6, false, false)
SetDlgCenter(0, 0x00000000, false)
//哈．．哈．．哈．．
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(4, false, false)
PartyWalkToBlock(17, 29, 1, 2)
SetDlgUpper(1-9-1, 0x00000000, false)
//李逍遥：
//老婆婆．．谢谢您
//您的大恩大德，晚辈即使
//粉身碎骨亦不足以回报
VideoUpdate(0, false)
SetDlgLower(44-1-1, 0x00000000, false)
//老婆婆：
//呵呵～现在谢我还早哩！
//等婆婆我完成另一件事
//再谢我也不迟．．
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//哦？　什麽样的事？
VideoUpdate(0, false)
SetDlgLower(44-1-1, 0x00000000, false)
//老婆婆：
//呵呵．．天机不可泄漏
VideoRestore()
//如果你真的想谢我
//就替我跑个腿吧！
VideoUpdate(0, false)
SetDlgUpper(1-9-1, 0x00000000, false)
//李逍遥：
//只要您吩咐的
//晚辈必定万死不辞
VideoUpdate(0, false)
SetDlgLower(44-1-1, 0x00000000, false)
//老婆婆：
//干嘛说的那麽严重似的
//要不是婆婆我最近风湿又犯了
//跑不动啦，才要你替我跑个腿
//走一趟"试炼窟"
//替我收集三十六只"傀儡虫"
EventSetStateSequence(214, 3, 215, 0, false, false)
EventSetAutoScript(173, 8, Scr_0x8041)
EventSetDirFrame(173, 4, 0, 0)
EventSetTriggerScript(176, 2, Scr_0x7D8A)
EventSetTriggerScript(205, 3, Scr_0x8454)
EventSetTriggerScript(205, 4, Scr_0x848C)
EventSetState(202, 11, false, false)
EventSetState(202, 4, false, false)
EventSetState(202, 6, false, false)
EventSetState(206, 16, false, false)
EventSetState(206, 17, false, false)
EventSetState(205, 8, false, false)
EventSetState(205, 9, false, false)
EventSetState(212, 0, false, false)
EventSetState(205, 5, false, false)
EventSetState(206, 29, false, false)
ReplaceAndPause()
MusicPlay(24, true, 0.00)

[Scr_0x802A]
SetDlgLower(44-1-1, 0x00000000, false)
//老婆婆：
//从"大理城外东南方"一直走
//有座山谷。谷中洞窟内毒虫
//遍布，是我们巫蛊师经常采
//集炼蛊药材之处
VideoRestore()
//我要三十六只"傀儡虫"
//东西找齐了可要尽快回来喔！
//千万不要贪功恋战
VideoRestore()
//如果不小心被困在洞窟中
//记得用土灵珠脱身，莫要逞强
ReplaceAndPause()
[Event_00173_00009_Trigger]
JumpIfItemCountLessThan(92, 36, Scr_0x802A)
SetDlgLower(44-1-1, 0x00000000, false)
//老婆婆：
//呵呵．．干的不错！
RemoveItem(92, 36, Null)
FadeOut(0)
SceneSetScripts(174, Scr_0x8068, Null)
SceneEnter(174)

[Scr_0x8041]
NPCMoveToBlock(18, 29, 0, 2, true)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(30, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(8, false, false)
NPCMoveToBlock(19, 30, 1, 2, true)
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(0, 0)
NPCMoveToBlock(18, 29, 0, 2, true)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(0, 0)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(19, 30, 1, 2, true)
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(3, false, false)
ReplaceAndPauseWithNop(Scr_0x8041, 0)

[Event_00173_00008_Trigger]
SetDlgLower(0, 0x00000000, false)
//阿奴：
//嘘．．不要吵
//小宝宝快睡着罗
ReplaceAndPause()
SetDlgLower(0, 0x00000000, false)
//阿奴：
//宝宝乖．．快快睡．．

[Event_00173_00004_Trigger]
//赵灵儿：
//逍遥哥哥～你要去哪里
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//我哪都不去，你安心休养吧
ReplaceAndPause()
SetDlgCenter(0, 0x00000000, false)
//赵灵儿睡着了．．

[Scr_0x8068]
RoleSetAttr(2, 0, 11)
RoleSetAttr(2, 1, 1)
RoleSetAttr(2, 2, 3)
RoleSetAttr(2, 64, 3)
EventSetTriggerScript(179, 6, Scr_0x7D7A)
EventSetTriggerScript(214, 2, Scr_0x89DE)
EventSetTriggerScript(176, 2, Event_00176_00002_Trigger)
EventSetStateSequence(174, 4, 174, 7, false, false)
EventSetState(174, 11, true, false)
EventSetState(174, 2, false, false)
EventSetState(174, 3, true, false)
EventSetState(174, 9, true, false)
EventSetState(174, 10, true, false)
EventSetState(174, 8, true, true)
EventSetDirFrame(174, 8, 0, 0)
EventSetTriggerScript(174, 8, Scr_0x80AE)
PartySetRole(2)
PartySetPos(23, 37, 1)
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, true)
SetDlgUpper(44-1-1, 0x00000000, false)
//老婆婆：
//你不多休养几天再走吗？
VideoUpdate(0, false)
SetDlgLower(2-1-1, 0x00000000, false)
//赵灵儿：
//我想去祭拜我娘亲．．
VideoUpdate(0, false)
SetDlgUpper(44-1-1, 0x00000000, false)
//老婆婆：
//灵儿姑娘～你的母亲是白苗族
//人，而你父亲是黑苗族的国王
//於情於理你都要尽力去化解这
//两族之间的仇恨
//族人有难，我也不该坐视才对
//可惜～岁月不饶人，这把老骨
//头没这力气去拼命了。
VideoRestore()
//如今婆婆我将一切希望放在
//你们几位年轻一辈的人身上了
//阿奴、李少侠，请你们一定要
//同心协力帮助赵姑娘啊
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//晚辈一定会的
VideoUpdate(0, false)
SetDlgLower(4-1-1, 0x00000000, false)
//阿奴：
//阿奴会的！
VideoUpdate(0, false)
SetDlgLower(44-1-1, 0x00000000, false)
//老婆婆：
//去吧．．孩子寄放在我这
//你们可以放心
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 0)
EventSetDirFrame(174, 10, 1, 0)
WaitEventAutoScriptRun(5, false, false)
PartyWalkToBlock(22, 38, 1, 2)
VideoUpdate(0, false)
SetDlgLower(2-1-1, 0x00000000, false)
//赵灵儿：
//走吧，我们到神殿去
EventSetStateSequence(174, 9, 174, 10, false, false)
EventSetStateSequence(215, 5, 215, 11, false, false)
PartySetRole(215)
ReplaceAndPause()

[Scr_0x80AE]
SetDlgLower(44-1-1, 0x00000000, false)
//老婆婆：
//去吧！我等你们的好消息

[Scr_0x80B2]
NPCMoveToBlock(24, 33, 0, 8, false)
NPCMoveToBlock(23, 32, 0, 8, false)
NPCMoveToBlock(26, 29, 0, 8, false)
NPCMoveToBlock(22, 25, 0, 8, false)

[Event_00173_00010_Auto]
RoleSetDirFrame(0, 0, 0)
ReplaceAndPause()
RoleSetDirFrame(0, 0, 1)
ReplaceAndPauseWithNop(Event_00173_00010_Auto, 0)

[Scr_0x80BC]
SetDlgLower(4-6-1, 0x00000000, false)
//阿奴：
//婆婆～　阿奴来看您了！
VideoUpdate(0, false)
SetDlgUpper(44-1-1, 0x00000000, false)
//老婆婆：
//呵呵呵．．乖～
VideoRestore()
//阿奴啊．．你怎麽会跟
//李少侠在一道呢？
VideoUpdate(0, false)
SetDlgLower(4-2-1, 0x00000000, false)
//阿奴：
//哦？　婆婆早就认识他啦！
//人家本来是想介绍给您认识呢
VideoRestore()
//这个人呐～好不要脸喔．．
//不但想偷凤凰蛋，还想占
//人家的便宜呢！
//婆婆，您说这人可不可恶啊？
VideoUpdate(0, false)
SetDlgUpper(44-1-1, 0x00000000, false)
//老婆婆：
//呵呵～凤凰蛋是我叫他去拿的
//你这丫头怎麽又不听你阿娘
//的话，乖乖的待在城里享福
//老是跑到深山里玩，真的被
//人占便宜算你活该
VideoUpdate(0, false)
SetDlgLower(4-3-1, 0x00000000, false)
//阿奴：
//嘻嘻～城里好无聊喔
//山上比较好玩嘛！
VideoUpdate(0, false)
SetDlgUpper(44-1-1, 0x00000000, false)
//老婆婆：
//李少侠～顺便向你介绍吧
//阿奴是我最小的弟子．．
VideoRestore()
//这丫头别的毛病没有
//就是有点贪玩、又爱黏人
//你跟她在一起可得小心点
//呵呵呵．．．！
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//呃．．原来是前辈的高徒
//难怪她小小年纪，身手就
//如此了得！
VideoUpdate(0, false)
SetDlgUpper(44-1-1, 0x00000000, false)
//老婆婆：
//你们还有事没办完
//就快去办吧
ReplaceAndPause()
SetDlgLower(4-3-1, 0x00000000, false)
//阿奴：
//婆婆～阿奴改天再来看您
VideoUpdate(0, false)
SetDlgUpper(44-1-1, 0x00000000, false)
//老婆婆：
//呵呵～　快去吧！

[Event_00174_00011_Trigger]
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//忆如～爹要出去打坏人
//你要乖乖的喔！

[Event_00173_00012_Trigger]
SetDlgCenter(0, 0x00000000, false)
//灵儿和忆如正熟睡中．．

[Scene_00176_Enter]
MusicPlay(70, true, 0.00)

[Scene_00202_Enter]
SetBattlefield(7)

[Scene_00206_Enter]
SetBattlefield(20)
MusicPlay(55, true, 0.00)

[Scene_00211_Enter]
MusicPlay(55, true, 0.00)

[Scene_00203_Enter]
MusicPlay(16, true, 0.00)

[Scene_00200_Enter]
SetBattlefield(19)
VideoWave(2, 0)
MusicPlay(83, true, 0.00)
SetBattleMusic(38)

[Event_00202_00002_Trigger]
SceneEnter(206)
PartySetPos(11, 109, 0)
FadeOut(0)

[Event_00206_00001_Trigger]
SceneEnter(202)
PartySetPos(47, 26, 0)
FadeOut(0)

[Scr_0x811B]
SceneEnter(259)
PartySetPos(47, 26, 0)
FadeOut(0)

[Event_00208_00001_Trigger]
SceneEnter(206)
PartySetPos(47, 106, 1)
FadeOut(0)

[Event_00206_00002_Trigger]
SceneEnter(208)
PartySetPos(16, 29, 1)
FadeOut(0)

[Event_00206_00003_Trigger]
SceneEnter(205)
PartySetPos(46, 99, 1)
FadeOut(0)

[Event_00205_00001_Trigger]
SceneEnter(206)
PartySetPos(15, 18, 1)
FadeOut(0)

[Event_00206_00004_Trigger]
SceneEnter(211)
PartySetPos(17, 79, 1)
FadeOut(0)

[Event_00211_00001_Trigger]
SceneEnter(206)
PartySetPos(14, 59, 0)
FadeOut(0)

[Event_00211_00002_Trigger]
SceneEnter(203)
PartySetPos(9, 87, 0)
FadeOut(0)

[Event_00203_00001_Trigger]
SceneEnter(211)
PartySetPos(41, 46, 0)
FadeOut(0)

[Event_00203_00002_Trigger]
SceneEnter(204)
PartySetPos(15, 93, 0)
FadeOut(0)

[Event_00204_00001_Trigger]
SceneEnter(203)
PartySetPos(54, 73, 1)
FadeOut(0)

[Event_00209_00001_Trigger]
SceneEnter(208)
PartySetPos(36, 50, 0)
FadeOut(0)

[Event_00208_00002_Trigger]
SceneEnter(209)
PartySetPos(22, 87, 0)
FadeOut(0)

[Event_00209_00002_Trigger]
SceneEnter(208)
PartySetPos(30, 36, 0)
FadeOut(0)

[Event_00208_00003_Trigger]
SceneEnter(209)
PartySetPos(28, 59, 0)
FadeOut(0)

[Event_00209_00003_Trigger]
SceneEnter(208)
PartySetPos(23, 62, 0)
FadeOut(0)

[Event_00208_00004_Trigger]
SceneEnter(209)
PartySetPos(42, 59, 0)
FadeOut(0)

[Event_00209_00004_Trigger]
SceneEnter(208)
PartySetPos(21, 45, 0)
FadeOut(0)

[Event_00208_00005_Trigger]
SceneEnter(209)
PartySetPos(24, 28, 1)
FadeOut(0)

[Event_00209_00005_Trigger]
SceneEnter(208)
PartySetPos(30, 51, 0)
FadeOut(0)

[Event_00208_00006_Trigger]
SceneEnter(209)
PartySetPos(45, 28, 0)
FadeOut(0)

[Event_00206_00005_Trigger]
SceneEnter(207)
PartySetPos(35, 85, 1)
FadeOut(0)

[Event_00207_00001_Trigger]
SceneEnter(206)
PartySetPos(17, 113, 0)
FadeOut(0)

[Event_00206_00006_Trigger]
SceneEnter(207)
PartySetPos(44, 112, 1)
FadeOut(0)

[Event_00207_00002_Trigger]
SceneEnter(206)
PartySetPos(51, 94, 0)
FadeOut(0)

[Event_00206_00007_Trigger]
SceneEnter(207)
PartySetPos(23, 110, 0)
FadeOut(0)

[Event_00207_00003_Trigger]
SceneEnter(206)
PartySetPos(31, 99, 0)
FadeOut(0)

[Event_00206_00008_Trigger]
SceneEnter(207)
PartySetPos(20, 81, 1)
FadeOut(0)

[Event_00207_00004_Trigger]
SceneEnter(206)
PartySetPos(8, 105, 1)
FadeOut(0)

[Event_00206_00009_Trigger]
SceneEnter(207)
PartySetPos(19, 54, 0)
FadeOut(0)

[Event_00207_00005_Trigger]
SceneEnter(206)
PartySetPos(50, 76, 0)
FadeOut(0)

[Event_00206_00010_Trigger]
SceneEnter(207)
PartySetPos(45, 59, 0)
FadeOut(0)

[Event_00207_00006_Trigger]
SceneEnter(206)
PartySetPos(13, 83, 0)
FadeOut(0)

[Event_00206_00011_Trigger]
SceneEnter(207)
PartySetPos(44, 32, 0)
FadeOut(0)

[Event_00207_00007_Trigger]
SceneEnter(206)
PartySetPos(17, 89, 0)
FadeOut(0)

[Event_00206_00012_Trigger]
SceneEnter(207)
PartySetPos(17, 24, 1)
FadeOut(0)

[Event_00207_00008_Trigger]
SceneEnter(206)
PartySetPos(23, 81, 1)
FadeOut(0)

[Scene_00200_Teleport]
SceneEnter(206)
PartySetPos(52, 54, 0)
FadeOut(0)

[Event_00206_00013_Trigger]
SceneEnter(212)
PartySetPos(8, 100, 1)
FadeOut(0)

[Event_00212_00001_Trigger]
SceneEnter(200)
PartySetPos(54, 81, 0)
FadeOut(0)

[Event_00200_00001_Trigger]
SceneEnter(212)
PartySetPos(20, 28, 1)
FadeOut(0)

[Event_00205_00002_Trigger]
SceneEnter(210)
PartySetPos(27, 25, 1)
FadeOut(0)

[Event_00210_00001_Trigger]
SceneEnter(205)
PartySetPos(36, 76, 1)
FadeOut(0)

[Event_00202_00011_Trigger]
JumpIfHeroInParty(39, 33234)
//士兵：
//什麽人？　不许在此地逗留
RoleMoveOneStep(-16, 8, 0)
ReplaceAndPause()
JumpIfHeroInParty(39, 33234)
//士兵：
//族长有令
//严禁陌生人通关进城
RoleMoveOneStep(-16, 8, 0)

[Scr_0x81D2]
EventSetTriggerMode(-1, -1, false, 2)
NPCSetDirFrame(0, 0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//士兵：
//少主～您回来啦！
VideoUpdate(0, false)
SetDlgLower(4-1-1, 0x00000000, false)
//阿奴：
//我不在的这段日子
//一切还好吧？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//士兵：
//还不是那些黑苗族的人，三天
//两头就来叫阵。前天夜里还跑
//来偷袭，不过都给咱们打回去
//了！
VideoUpdate(0, false)
SetDlgLower(4-1-1, 0x00000000, false)
//阿奴：
//阿娘有找我吗？
SetDlgUpper(0, 0x00000000, false)
//士兵：
//您一声不响的就溜出去
//这次族长好像很不高兴呢
VideoUpdate(0, false)
SetDlgLower(4-3-1, 0x00000000, false)
//阿奴：
//哎呀～不会有事啦！
//每次她看到我就生气不起来了)
EventSetAutoScript(-1, -1, Scr_0x81F9)
ReplaceAndPause()
//士兵：
//少主，请您赶快回去吧．．

[Scr_0x81F6]
//士兵：
//少主～您要到哪去？

[Scr_0x81F9]
NPCMoveToBlock(46, 25, 1, 3, false)
NPCSetDirFrame(3, 0)

[Event_00202_00004_Trigger]
//守门士兵：
//少主，你回来就好了，我们
//还在担心你会不会被黑苗族
//的人给抓走了。

[Event_00202_00005_Trigger]
//守门士兵：
//前天夜里，黑苗族人又来偷袭
//但全被我们给解决掉了。

[Event_00202_00006_Trigger]
//守门士兵：
//真咽不下这口气！
//小少主，我们挑个时间
//也给他们来个夜袭。

[Event_00202_00007_Trigger]
//守门士兵：
//我们白苗族战士的士气十分
//高昂，决不会让黑苗族的人
//有可趁之机。

[Event_00202_00012_Trigger]
SetDlgCenter(0, 0x00000000, false)
//黑苗族士兵的屍体

[Event_00206_00014_Trigger]
//守卫：
//此处是火麒麟洞圣地
//没有族长的准许，不得擅入

[Scr_0x8216]
EventSetTriggerMode(-1, -1, false, 0)
//守卫：
//此处是火麒麟洞圣地
//没有族长的准许，不得擅入
VideoUpdate(0, false)
SetDlgLower(4-1-1, 0x00000000, false)
//阿奴：
//怎麽只剩你一个人在看守
//其他的卫兵呢？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//守卫：
//刚才我们抓到一个可疑的人
//我叫她押他去见族长
VideoUpdate(0, false)
SetDlgLower(4-1-1, 0x00000000, false)
//阿奴：
//我才刚从阿娘那里过来
//那卫兵比我早走一步，怎麽
//我巡视到这头，却没见人影？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//守卫：
//啊．．．这．．
//也许少主走路比较快(
VideoUpdate(0, false)
SetDlgLower(4-4-1, 0x00000000, false)
//阿奴：
//鬼扯！她一定是趁机偷懒去了
//去把她找回来！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//守卫：
//可是．．．(
VideoUpdate(0, false)
SetDlgLower(4-4-1, 0x00000000, false)
//阿奴：
//这里我暂时替你守着
//快去！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//守卫：
//是．．！
EventSetAutoScript(-1, -1, Scr_0x824D)
WaitEventAutoScriptRun(16, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(1, 0, 0)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgUpper(0, 0x00000000, false)
//阿奴：
//嘻嘻．．走吧！)

[Scr_0x824D]
NPCMoveToBlock(48, 64, 1, 3, false)
NPCMoveToBlock(49, 65, 0, 3, false)
NPCMoveToBlock(48, 66, 0, 3, false)
NPCMoveToBlock(55, 73, 0, 8, false)
EventSetState(-1, -1, false, false)

[Event_00206_00022_Auto]
NPCMoveToBlock(20, 94, 1, 2, true)
NPCMoveToBlock(24, 90, 1, 2, true)
NPCMoveToBlock(20, 86, 0, 2, true)
NPCMoveToBlock(16, 90, 0, 2, true)
NPCSetDirFrame(1, 0)
ReplaceAndPause()
GotoWithProbability(2, Null)
NPCMoveToBlock(15, 91, 0, 2, true)
NPCMoveToBlock(18, 94, 1, 2, true)
NPCMoveToBlock(18, 95, 0, 2, true)
NPCMoveToBlock(19, 96, 0, 2, true)
NPCMoveToBlock(20, 95, 0, 2, true)
NPCMoveToBlock(25, 100, 1, 2, true)
NPCSetDirFrame(2, 0)
ReplaceAndPause()
GotoWithProbability(5, Null)
NPCMoveToBlock(26, 99, 1, 2, true)
ReplaceAndPause()
GotoWithProbability(4, Null)
NPCSetDirFrame(1, 0)
NPCSetDirFrame(0, 0)
GotoWithProbability(8, Null)
NPCMoveToBlock(26, 100, 0, 2, true)
GotoWithProbability(15, Null)
ReplaceAndPause()
ReplaceAndPauseWithNop(Event_00206_00022_Auto, 0)

[Event_00206_00023_Auto]
NPCMoveToBlock(30, 114, 1, 2, true)
NPCMoveToBlock(36, 109, 0, 2, true)
NPCMoveToBlock(37, 110, 1, 2, true)
NPCMoveToBlock(44, 103, 1, 2, true)
NPCMoveToBlock(56, 115, 0, 2, true)
NPCMoveToBlock(44, 103, 1, 2, true)
NPCMoveToBlock(37, 110, 1, 2, true)
NPCMoveToBlock(36, 109, 0, 2, true)
NPCMoveToBlock(30, 114, 1, 2, true)
NPCMoveToBlock(20, 104, 0, 2, true)
NPCSetDirFrame(0, 0)
GotoWithProbability(3, Null)
ReplaceAndPauseWithNop(Event_00206_00023_Auto, 0)

[Event_00206_00018_Auto]
NPCSetDirFrame(2, 0)
GotoWithProbability(8, Event_00206_00018_Auto)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(6, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(0, 0)
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(4, false, false)
GotoWithProbability(20, Null)
NPCMoveToBlock(47, 90, 1, 3, false)
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(7, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(1, 0)
ReplaceAndPause()
EventSetAutoScript(206, 19, Scr_0x829E)
NPCMoveToBlock(45, 88, 0, 3, false)
ReplaceAndPause()
GotoWithProbability(10, Null)
EventSetAutoScript(206, 19, Scr_0x82A0)
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(2, false, false)
NPCMoveToBlock(48, 91, 1, 3, false)
WaitEventAutoScriptRun(3, false, false)
GotoWithProbability(10, Null)
EventSetAutoScript(206, 19, Scr_0x82A6)
WaitEventAutoScriptRun(3, false, false)
NPCMoveToBlock(49, 92, 1, 2, true)
ReplaceAndPauseWithNop(Event_00001_00020_Auto, 0)

[Scr_0x829E]
NPCMoveToBlock(54, 96, 0, 2, true)

[Scr_0x82A0]
NPCMoveToBlock(53, 96, 1, 3, false)
NPCMoveToBlock(50, 93, 0, 3, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(1, 0)

[Scr_0x82A6]
NPCMoveToBlock(49, 94, 0, 3, false)
NPCMoveToBlock(48, 93, 0, 3, false)
NPCMoveToBlock(51, 96, 0, 3, false)
NPCMoveToBlock(52, 95, 0, 3, false)
NPCMoveToBlock(53, 96, 1, 3, false)
NPCMoveToBlock(55, 94, 1, 3, false)
NPCMoveToBlock(54, 95, 1, 2, true)
EventSetAutoScript(206, 18, Event_00206_00018_Auto)

[Event_00206_00018_Trigger]
//小孩：
//阿奴姊姊，你有没有看到
//我阿妹躲在哪里？
ReplaceAndPause()
//小孩：
//我们在玩躲猫猫，我当鬼

[Event_00206_00019_Trigger]
//小孩：
//嘻嘻～阿妹都抓不到我

[Event_00206_00026_Trigger]
WaitEventAutoScriptRun(0, false, false)
//小玉：
//呜．．人家不要小咪死掉

[Event_00206_00031_Trigger]
PlaySound(178)
SetDlgCenter(0, 0x00000000, false)
//喵～

[Event_00206_00024_Auto]
NPCSetDirFrame(3, 0)
GotoWithProbability(6, Event_00206_00024_Auto)
NPCMoveToBlock(52, 80, 1, 2, true)
NPCSetDirFrame(3, 0)
GotoWithProbability(6, Null)
NPCMoveToBlock(51, 79, 1, 2, true)
GotoWithProbability(4, Null)
ReplaceAndPauseWithNop(Event_00206_00024_Auto, 0)

[Event_00206_00016_Trigger]
//白苗女兵：
//小少主，您回来啦！
ReplaceAndPause()
//白苗女兵：
//此地是族长居住的宫社

[Event_00206_00017_Trigger]
//白苗女兵：
//族长正在和各部长老开会。
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//阿奴：
//开会？开什麽会？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//白苗女兵：
//对不起，小少主，属下不知。

[Event_00206_00020_Trigger]
//白苗居民：
//这些黑苗族真不是个东西
//三番两次地来触我们霉头
//老虎不发威还给他们当成
//病猫了！

[Event_00206_00021_Trigger]
//白苗居民：
//我决定要跟我们白苗族的战士
//一同去抵抗黑苗人的入侵。

[Event_00206_00022_Trigger]
//白苗居民：
//如果我也能成为白苗族战士
//和族人一同并肩作战，是一
//件多麽光荣的事啊！

[Event_00206_00023_Trigger]
//白苗居民：
//最近黑苗族的动静很不寻常
//所以要特别的小心。

[Event_00206_00024_Trigger]
//苗女：
//小鸡啊！小鸡，快快长大
//我们家已经没有什麽粮食吃了
//就看你们怎样报答我们罗。

[Event_00206_00025_Trigger]
//白苗妇女：
//没办法，家里已经没有什麽
//粮食可吃了，所以这只小猫
//我们不得不????

[Event_00206_00027_Trigger]
WaitEventAutoScriptRun(0, false, false)
SetDlgLower(0, 0x00000000, false)
//白苗壮丁：
//为了我们白苗族，我要出征了
//你千万不要阻止我。
VideoUpdate(0, false)
//白苗少女：
//为了我们两个，你要尽力杀敌喔
//我会等你回来的，永远！

[Event_00206_00029_Trigger]
//路人：
//?????????
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//阿奴：
//咦？你看到我怎麽没打招呼呢？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//路人：
//我为什麽要跟你打招呼？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//阿奴：
//你是谁？我怎麽从没见过你。
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//路人：
//你这小丫头才是谁呐！
//为什麽一定要见过我？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//阿奴：
//我阿娘是白苗族的族长
//全白苗族的人谁不认得我？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//路人：
//喔！对对对，你是族长的
//女儿嘛！我知道、我知道。
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//阿奴：
//不对，你不是白苗族的人
//你是不是黑苗族派来的间谍！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//路人：
//呸！臭丫头，被你给发现了
//留你不得！
EventSetState(-1, -1, false, false)
SetBattlefield(20)
SetBattleMusic(37)
BattleStart(240, Scr_0x9C9B, Null)

[Event_00206_00030_Trigger]
//小孩：
//我阿爹被族长叫去，听说
//好像有什麽重要的会要开

[Event_00208_00008_Trigger]
WaitEventAutoScriptRun(3, false, false)
//阿蛮：
//汉家哥哥～你是真心爱我吗？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//汉家郎：
//我当然是真心的！
//纵使石可烂、海可枯．．
//我仍然要一辈子守着你
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//阿蛮：
//这里哪来的海呀？你们汉人
//最会编这些花言巧语了～
NPCSetDirFrame(1, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//汉家郎：
//那就这条河吧！
//我对这条河发誓．．
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//阿蛮：
//换别的啦～
//这条河都已经乾了
NPCSetDirFrame(2, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//汉家郎：
//．．．．．．．．
ReplaceAndPause()
WaitEventAutoScriptRun(3, false, false)
SetDlgLower(0, 0x00000000, false)
//汉家郎：
//阿蛮～嫁给我吧
//我发誓，我会使你幸福的！

[Event_00208_00013_Trigger]
//汉人居民：
//唉．．何时才会下雨呢？

[Event_00208_00017_Auto]
NPCMoveToBlock(27, 39, 0, 2, true)
NPCSetDirFrame(2, 0)
ReplaceAndPause()
EventSetAutoScript(208, 13, Event_00021_00016_Auto)
ReplaceAndPause()
GotoWithProbability(4, Null)
NPCMoveToBlock(33, 45, 1, 2, true)
NPCMoveToBlock(32, 46, 1, 2, true)
NPCMoveToBlock(34, 48, 0, 2, true)
NPCMoveToBlock(32, 49, 1, 2, true)
NPCSetDirFrame(1, 0)

[Event_00208_00014_Trigger]
//汉人居民：
//吃的食物没了倒还好，如果
//连喝的水都没有，就不知道
//还能熬多久了。

[Event_00208_00015_Trigger]
//汉人妇女：
//不光是没水喝，衣服也没得洗
//澡也没得泡，真不是人过的生活

[Event_00208_00016_Trigger]
//汉人居民：
//欸！现在连唯一的水井都乾了
//该怎麽办呢？

[Event_00208_00017_Trigger]
//汉人居民：
//每天都要过着战战兢兢的日子
//谁知道黑苗族的人什麽时候又
//会打过来。

[Event_00208_00018_Trigger]
//汉人少女：
//多亏白苗人的宽宏大量
//我们汉苗两方才能融洽相处
VideoRestore()
//但是黑苗族的人就不一样了
//见到汉人就像仇人似的
//不知道是为了什麽。

[Event_00208_00009_Trigger]
//小孩：
//看，我可以跳那麽多下
//你行吗？

[Event_00208_00010_Trigger]
//小孩：
//大姊姊，来啊！
//一起跟我们玩嘛！

[Event_00208_00011_Trigger]
//苗族小孩：
//还要多久嘛
//人家等不及了啦！

[Event_00208_00012_Trigger]
WaitEventAutoScriptRun(0, false, false)
//小孩：
//不要急，就快要轮到我们玩了。

[Event_00205_00003_Trigger]
//守卫：
//公子，请留步！
//族长与众长老正在开会
//外人不得进入
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(4-1-1, 0x00000000, false)
//阿奴：
//那．．你先在这里等我一下
//我去见阿娘
EventSetState(205, 17, true, false)
PartySetRole(5)
PartySetPos(27, 80, 0)
Call(Scr_0x02E7, 0, 0)
PartyWalkToBlock(35, 69, 0, 8)
PartyWalkToBlock(34, 68, 0, 8)
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgLower(4-6-1, 0x00000000, false)
//阿奴：
//阿娘～　我回来了！
EventSetDirFrame(205, 12, 0, 0)
EventSetDirFrame(205, 10, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(13-1-1, 0x00000000, false)
//白苗族长：
//阿奴，娘和诸位长老
//有重要的军情要商议
//你先退下吧
VideoUpdate(0, false)
SetDlgLower(4-5-1, 0x00000000, false)
//阿奴：
//唔～　为什麽？
//我也要参加嘛．．
VideoUpdate(0, false)
SetDlgUpper(13-1-1, 0x00000000, false)
//白苗族长：
//别孩子气，我们一会就又
//要和黑苗族的人开战了
//你乖乖待在城里不要乱跑
VideoUpdate(0, false)
SetDlgLower(4-5-1, 0x00000000, false)
//阿奴：
//人家才不是小孩呢～
//我的法术已经不输给盖大姐了
//我也可以跟你们去打仗！
VideoUpdate(0, false)
SetDlgLower(6-1-1, 0x00000000, false)
//唐钰：
//阿奴，你是白族的继承人
//你阿娘当然不能让你去冒险呀
VideoRestore()
//不过你放心．．唐大哥会
//尽力替你保护你阿娘的
VideoUpdate(0, false)
SetDlgLower(4-4-1, 0x00000000, false)
//阿奴：
//谁准你直呼我的小名？！
//没大没小！
VideoUpdate(0, false)
SetDlgLower(6-1-1, 0x00000000, false)
//唐钰：
//是～是．．少主，属下失态
EventSetDirFrame(205, 10, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(13-1-1, 0x00000000, false)
//白苗族长：
//对於刚才所订定的策略
//诸位可有意见？
EventSetDirFrame(205, 12, 1, 0)
VideoUpdate(0, false)
SetDlgLower(6-1-1, 0x00000000, false)
//唐钰：
//使用五毒兽来作战，会不会
//有风险？万一毒兽反过头来
//攻击我们自己的人怎麽办？
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//这点你大可放心，调教那些大
//家伙是我拿手的。何况～黑苗
//人都已经用魔兽来对付咱们了
//咱们可不能白白吃闷亏
EventSetDirFrame(205, 10, 1, 0)
VideoUpdate(0, false)
SetDlgLower(13-1-1, 0x00000000, false)
//白苗族长：
//阿娇，训练五毒兽的事
//就拜托你了
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//是．．交给我～您放心！
VideoUpdate(0, false)
SetDlgLower(4-1-1, 0x00000000, false)
//阿奴：
//阿娘～我想求您一件事．．
EventSetDirFrame(205, 10, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(13-1-1, 0x00000000, false)
//白苗族长：
//求也没用，我是决
//不可能带你上战场的
VideoUpdate(0, false)
SetDlgLower(4-3-1, 0x00000000, false)
//阿奴：
//不是啦．．
//人家是想进麒麟洞一趟
VideoUpdate(0, false)
SetDlgUpper(13-1-1, 0x00000000, false)
//白苗族长：
//不准！麒麟洞又不是什麽好玩
//的地方，而且你一个人进去太
//危险了
VideoUpdate(0, false)
SetDlgLower(4-1-1, 0x00000000, false)
//阿奴：
//自然有人会陪我去嘛．．
//而且～他的武功很厉害喔！
VideoUpdate(0, false)
SetDlgUpper(13-1-1, 0x00000000, false)
//白苗族长：
//阿奴！你这麽大了，阿娘也
//管不了你。可是你要知道．．
//我不在的时候，你就是算是
//代理族长，如果你真的有心
//想帮阿娘的忙，就安份一点
//不要成天到处乱跑
VideoUpdate(0, false)
SetDlgLower(4-5-1, 0x00000000, false)
//阿奴：
//人家真的是想帮大家的忙嘛
//我想～只要把水灵珠找回来
//就可以解除这场旱灾。
VideoRestore()
//有了雨水，大家就不必再为
//争夺水源而打来打去了
VideoUpdate(0, false)
SetDlgUpper(13-1-1, 0x00000000, false)
//白苗族长：
//傻孩子～事情没那麽简单
//水灵珠自从十二年前被盗後
//阿娘派人多方追查，至今仍
//毫无下落。
VideoRestore()
//而且～就算我们真的能找回
//水灵珠，但是现今世上已经
//没有人会使用灵珠。除非巫
//后娘娘再世，否则也是枉然
VideoUpdate(0, false)
SetDlgLower(4-5-1, 0x00000000, false)
//阿奴：
//唔．．．
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//少主～属下认为．．
//眼前最重要的是，我们必须靠
//自己的力量渡过目前的难关
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(4-1-1, 0x00000000, false)
//阿奴：
//这场战争，真的非要
//一直打下去不可了吗？
VideoUpdate(0, false)
SetDlgUpper(13-1-1, 0x00000000, false)
//白苗族长：
//黑、白苗疆二大族之间，已经
//不可能再回复过去那种和睦共
//存的日子了．．
VideoRestore()
//没有人愿意战争，可是我身为
//族长就必须为全族人的生命财
//产而战，既然巫王派人来攻打
//我们，我就得奉陪到底．．
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgLower(4-5-1, 0x00000000, false)
//阿奴：
//唔．．我要是男孩子就好了
VideoUpdate(0, false)
SetDlgUpper(13-1-1, 0x00000000, false)
//白苗族长：
//呵～丫头．．等你再长大些
//选一位勇敢而善良的男人做
//丈夫，就可以替阿娘分担这
//些事了．．．
EventSetState(206, 15, false, false)
EventSetState(205, 18, true, true)
EventSetState(206, 0, true, true)
EventSetTriggerMode(206, 14, true, 2)
EventSetTriggerScript(206, 14, Scr_0x8216)
ReplaceAndPause()
EventSetState(205, 17, true, false)
PartySetRole(5)
[Scr_0x8454]
PartySetPos(27, 80, 0)
Call(Scr_0x02E7, 0, 0)

[Event_00205_00004_Trigger]
PartySetPos(29, 75, 0)
Call(Scr_0x0303, 0, 0)
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(4-1-1, 0x00000000, false)
//阿奴：
//这个人是怎麽回事？
EventSetDirFrame(205, 18, 1, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//守卫：
//禀少主～属下是守火麒麟洞口
//的卫兵，刚才我们发现这个人
//鬼鬼祟祟的在洞口附近窥探
//就把他抓起来，正准备要交
//给族长发落
VideoUpdate(0, false)
SetDlgUpper(4-1-1, 0x00000000, false)
//阿奴：
//你做的很好，不过我阿娘
//他们还在开会，你先在这里等
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//守卫：
//是．．！
EventSetState(205, 17, false, false)
PartySetRole(51)
PartyWalkToBlock(25, 82, 0, 8)
EventSetAutoScript(205, 18, Event_00001_00020_Auto)
PartyWalkToBlock(28, 85, 1, 8)
PartyWalkToBlock(29, 84, 1, 8)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//阿奴：
//　　．．．．．．．．
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(4-3-1, 0x00000000, false)
//阿奴：
//嘻．．有了！快跟我来
PartyWalkToBlock(31, 83, 0, 8)
PartyWalkToBlock(35, 87, 0, 8)
SceneSetScripts(206, Scr_0x8541, Null)
SceneEnter(206)
FadeOut(0)
ReplaceAndPause()
PartySetPos(29, 75, 0)
Call(Scr_0x0303, 0, 0)
EventSetState(205, 17, false, false)
PartySetRole(51)

[Scr_0x848C]
PartySetPos(29, 75, 0)
Call(Scr_0x0303, 0, 0)

[Event_00205_00007_Trigger]
//侍卫：
//族长和各部落长老在楼上开会

[Event_00205_00008_Trigger]
//侍卫：
//小少主，您好！

[Event_00205_00009_Trigger]
//侍卫：
//小少主，你可回来了
//族长正在找你。

[Event_00211_00005_Auto]
NPCMoveToBlock(39, 47, 1, 2, true)
ReplaceAndPause()
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(40, 48, 1, 2, true)
ReplaceAndPause()
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(3, false, false)
ReplaceAndPauseWithNop(Event_00211_00005_Auto, 0)

[Event_00211_00005_Trigger]
EventSetTriggerMode(-1, -1, false, 2)
//守卫：
//少主，带外族人进入神殿
//是违反族规的
VideoUpdate(0, false)
SetDlgLower(4-1-1, 0x00000000, false)
//阿奴：
//我只是带他参观一下不行？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//守卫：
//属下是按律行事．．
//请少主不要为难属下
VideoUpdate(0, false)
SetDlgLower(4-4-1, 0x00000000, false)
//阿奴：
//我是族长的女儿
//我说了算！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//守卫：
//是．．．
ReplaceAndPause()
//守卫：
//少主您可别让族长知道啊

[Event_00211_00003_Trigger]
//守卫：
//此神殿乃供奉女娲娘娘圣灵
//之所在，而且也是城内唯一
//仅存的水源之处

[Event_00211_00004_Trigger]
//守卫：
//我等奉命在此严密看守
//以防敌人潜入破坏

[Event_00207_00009_Trigger]
//店家：
//您要买什麽武器吗？
//请随便挑。
VideoUpdate(0, false)
ShowBuyItemMenu(16)

[Event_00207_00010_Trigger]
//顾客：
//我要赶紧买一件武器
//加入我们白苗族战士的行列
//一同对抗黑苗族的侵略。

[Event_00207_00011_Trigger]
WaitEventAutoScriptRun(0, false, false)
//小孩：
//阿娘，为什麽那些黑苗族的
//人常常要来攻打我们呢？
VideoUpdate(0, false)
//白苗妇女：
//阿欣啊！这件事太复杂了
//等你长大点再告诉你。

[Event_00207_00013_Trigger]
//店主：
//需要什麽尽管挑
//算你便宜点。
VideoUpdate(0, false)
ShowBuyItemMenu(18)

[Event_00207_00015_Trigger]
//居民：
//我阿爹是个白苗族英勇的战士
//可是在一次黑苗族的偷袭下遇
//害身亡，现在我要继承我阿爹
//做个为白苗族奉献的好战士

[Event_00207_00016_Trigger]
WaitEventAutoScriptRun(0, false, false)
//居民：
//来啊！阿宝听话
//让阿爹帮你把裤子穿上。
VideoUpdate(0, false)
//阿宝：
//不要！不要！我自己会穿
//???哎哟，有人在看啦！

[Event_00209_00006_Trigger]
//当舖老板：
//客倌您好～
//有什麽东西要当吗？
VideoUpdate(0, false)
ShowSellItemMenu()
VideoUpdate(0, false)
//当舖老板：
//时局这麽乱，到当铺来典当
//东西的人越来越多了

[Event_00209_00007_Trigger]
//老板：
//来来来～咱们这儿别的没有
//专卖一等一的家伙！
VideoUpdate(0, false)
ShowBuyItemMenu(17)

[Event_00209_00008_Trigger]
//药铺老板：
//请问你们要买些什麽？
VideoUpdate(0, false)
ShowBuyItemMenu(19)
VideoUpdate(0, false)
//药铺老板：
//最近黑苗白苗常常开战
//我的生意特别好

[Event_00209_00009_Trigger]
//顾客：
//阿爹前夜和黑苗族作战受伤了
//我要买药回去替他疗伤

[Event_00209_00010_Trigger]
WaitEventAutoScriptRun(0, false, false)
SetDlgLower(0, 0x00000000, false)
//妻：
//都是你说要来什麽偏远一点
//的地方，过着与世无争的生活。
//你看看现在呢？旱灾那麽严重
//简直不是人住的地方。
VideoUpdate(0, false)
//夫：
//哼！当初说嫁鸡随鸡、嫁狗
//随狗的是谁？又说我要去哪
//就跟我去哪的是谁？说要跟
//我同甘苦共生死的又是谁？
//现在这点小事就大呼小叫的

[Event_00205_00010_Trigger]
//白苗族长：
//阿奴～没你的事
//快回去吧，阿娘还有事
//和诸位长老商议

[Event_00205_00011_Trigger]
//盖罗娇：
//小少主，听你阿娘的话
//等明天盖大姐打胜仗回来
//会带战利品回来送你

[Event_00205_00012_Trigger]
SetDlgLower(6-1-1, 0x00000000, false)
//唐钰：
//阿奴小姐～你放心！
//我们住在大理的汉人会全力
//协助你阿娘，打败黑苗族人

[Event_00205_00013_Trigger]
//白苗长老：
//少主～你的年纪还太小了
//等再过四、五年，你也可以像
//盖罗娇盖将军一样指挥军队啊

[Event_00205_00014_Trigger]
//白苗长老：
//日後少主应该选择一位
//英勇善战的白苗战士做夫婿
//才好继承族长的重责大任
VideoRestore()
//就是因为老族长不幸战死
//才使得你阿娘必须代夫出征啊

[Event_00205_00015_Trigger]
//汉人壮丁：
//不分汉人苗人，大理是我们
//的家园，我们誓死与大理城
//共存亡！

[Event_00205_00016_Trigger]
//汉人壮士：
//盖将军虽是女流，上战场杀敌
//却是万夫莫敌，实在令人敬佩

[Scr_0x8541]
PartySetPos(15, 18, 1)
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//令堂允许我们去取
//火麒麟角了吗？
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(4-3-1, 0x00000000, false)
//阿奴：
//差不多啦，跟我走就对了
RoleSetDirFrame(0, 3, 0)
ReplaceAndPause()

[Event_00200_00002_Trigger]
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//这只就是火麒麟兽吗？
//看起来不怎麽可怕嘛．．
VideoUpdate(0, false)
SetDlgLower(4-3-1, 0x00000000, false)
//阿奴：
//咦～　牠好像在打瞌睡呢！
VideoRestore()
//嘻嘻．．我来拔牠一根胡须
NPCSetFrame(1)
VideoUpdate(0, false)
PlaySound(236)
//麒麟：
//吼～　吵死啦！
VideoUpdate(0, false)
SetBattlefield(19)
SetBattleMusic(42)
BattleStart(224, Scr_0x9C9B, Null)
SetBattleMusic(37)
SetDlgBox(0x00000000)
//获得火灵珠
AddItem(206, 0)
EventSetState(200, 11, true, false)
PartySetRole(1)
PartySetPos(50, 91, 0)
RoleSetDirFrame(0, 1, 0)
BattleEnd()
WaitEventAutoScriptRun(4, false, false)
EventSetState(-1, -1, false, false)
EventSetStateSequence(200, 3, 200, 9, false, false)
EventSetState(200, 10, true, true)
FadeToScene(-1, 2)
SetDlgLower(4-2-1, 0x00000000, false)
//阿奴：
//哇！　变成人了耶
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//麒麟老人：
//呼～咳～　我说怎麽这十年来
//喉咙一直不太舒服，原来是卡
//了一颗奇怪的珠子在里面
VideoRestore()
SetDlgLower(0, 0x00000000, false)
//麒麟老人：
//我说～两位小朋友呀．．
//你们老师没有教过你们
//要敬老尊贤吗？
VideoRestore()
//出手这麽重，我这麽一把
//老骨头差点给你们给拆散了！
VideoUpdate(0, false)
SetDlgLower(4-2-1, 0x00000000, false)
//阿奴：
//你．．你是妖怪吗！？
//不然怎麽会变成人的样子
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//麒麟老人：
//你说我是神灵圣兽也好
//要说我是妖魔鬼怪也行
//反正有智慧的非人类
//随便你们爱怎麽叫都行
//只要不要随便吵醒老人家
//的午睡就可以了
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//是～　真是很抱歉
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//麒麟老人：
//此地并非游玩之地
//你们跑进来干什麽？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//晚辈的妻子伤重难产
//急须要凤凰蛋壳与您
//头上的麒麟角救命
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//麒麟老人：
//要拿我的角去作安胎药！
//你哪里听来的这门偏方？
//人类妈妈若是同时吃了这二种
//东西，搞不好娃娃蹦不出来
//反而生出蛋来！
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//蛋．．．这．．(
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//麒麟老人：
//灵兽圣药凡人怎麽可能消受
//的住？不吃的流鼻血才怪～
//除非你妻子不是人类！
VideoUpdate(0, false)
SetDlgLower(1-4-1, 0x00000000, false)
//李逍遥：
//是．．晚辈的妻子乃女娲族裔
//外形上有时一半是蛇身，可是
//除此之外，并和常人无异
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//麒麟老人：
//哦！！！　她现在在哪里？
//快带过来给我看看！
VideoUpdate(0, false)
SetDlgLower(1-4-1, 0x00000000, false)
//李逍遥：
//晚辈的妻子伤重未癒．．
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//麒麟老人：
//哎呀～我一时高兴给忘了！
VideoRestore()
//我问你，你老婆叫什麽名字？
//今年几岁了？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//她叫赵灵儿，今年一十六
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//麒麟老人：
//灵？　嗯．．这就错不了！
WaitEventAutoScriptRun(3, false, false)
EventSetDirFrame(200, 10, 0, 1)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(200, 10, 0, 2)
WaitEventAutoScriptRun(3, false, false)
SetDlgLower(0, 0x00000000, false)
//麒麟老人：
//来～　这支角拿去！
VideoUpdate(0, false)
SetDlgBox(0x00000000)
//获得火眼麒麟角
AddItem(216, 0)
EventSetDirFrame(200, 10, 0, 3)
VideoUpdate(0, false)
SetDlgLower(1-4-1, 0x00000000, false)
//李逍遥：
//对不起，为了我们
//害得您自伤其身．．
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//麒麟老人：
//哈哈～没关系！
//反正过几年又会长回来
//千年来，我常作同样的事
VideoRestore()
//最近的一次是三十七年前
//你妻子的外婆生你丈母娘时
//也是如此
VideoRestore()
//年纪轻轻的就偷尝禁果，在
//本身灵力与体质都未成熟之下
//就怀人类的小孩子，是会失去
//变化人形的能力！
//我跟你丈母娘的先祖略有交情
//每次发生这种事的时候，她们
//就会来找我。
VideoRestore()
//这支麒麟角加上凤凰蛋壳
//能帮助她们提早脱胎换骨
//恢复灵力
EventSetDirFrame(200, 11, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(4-3-1, 0x00000000, false)
//阿奴：
//这样子生出来的小娃娃
//会不会像小蛇一样
//从蛋里面跑出来？
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//这．．．(
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//麒麟老人：
//呵呵呵～你放心！
//基本上完全跟人类一样
EventSetDirFrame(200, 11, 1, 0)
VideoUpdate(0, false)
SetDlgUpper(4-1-1, 0x00000000, false)
//阿奴：
//那～人又是怎麽生小孩的呀？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//麒麟老人：
//这．．自己回去问你娘吧！
//好啦～东西拿到了就快回去吧
//此地十分酷热，对你们的身体
//不太好，不要逗留太久．．
VideoUpdate(0, false)
EventSetState(200, 10, false, false)
FadeToScene(-1, 0)
EventSetDirFrame(200, 11, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(4-6-1, 0x00000000, false)
//阿奴：
//嘻嘻～小娃娃生下来的时候
//我可不可以去看？
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgLower(1-8-1, 0x00000000, false)
//李逍遥：
//有什麽好看的？
VideoUpdate(0, false)
SetDlgUpper(4-5-1, 0x00000000, false)
//阿奴：
//人家想看看你们的小孩，生
//下来的时候会是什麽模样嘛
SetDlgLower(1-7-1, 0x00000000, false)
//李逍遥：
//你也太无聊了吧？
VideoUpdate(0, false)
EventSetState(200, 10, true, false)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//麒麟老人：
//哎呦～差点忘了告诉你一件事
EventSetDirFrame(200, 11, 1, 0)
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//麒麟老人：
//你离开大理城之前
//务必到女娲神殿去一趟
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//到了那里我该做什麽？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//麒麟老人：
//去了自然明了！
EventSetState(200, 10, false, false)
VideoUpdate(0, false)
EventSetState(200, 11, false, false)
PartySetRole(51)
EventSetState(205, 8, false, false)
EventSetState(205, 9, false, false)
EventSetState(205, 10, false, false)
EventSetState(205, 11, false, false)
EventSetState(205, 12, false, false)
EventSetState(205, 13, false, false)
EventSetState(205, 14, false, false)
EventSetState(205, 15, false, false)
EventSetState(205, 16, false, false)
EventSetState(205, 18, false, false)
EventSetState(206, 0, false, false)
EventSetTriggerScript(205, 7, Scr_0x8658)
EventSetTriggerScript(206, 16, Scr_0x8658)
EventSetTriggerScript(206, 17, Scr_0x8658)
EventSetTriggerScript(211, 3, Scr_0x8658)
EventSetTriggerScript(211, 4, Scr_0x8658)
EventSetTriggerScript(203, 3, Scr_0x86BB)
EventSetTriggerScript(206, 1, Scr_0x87A8)
EventSetTriggerScript(202, 11, Scr_0x81F6)

[Scr_0x8658]
//守卫：
//族长率众人出城去了

[Event_00203_00015_Trigger]
//守卫：
//女娲大神是我们苗族百姓
//信仰的精神支柱。能够被
//派来此处值勤是我的荣耀

[Event_00203_00016_Trigger]
//守卫：
//大家都说苗疆这几来年的天灾
//人祸，一定是妖魔在作怪，只
//有这处神殿受到女娲娘娘圣灵
//的庇佑
VideoRestore()
//才会别的地方的水源都已乾涸
//殆尽，而殿内祭坛四周却依旧
//源源不断涌出泉水来

[Event_00203_00017_Trigger]
//守卫：
//我搞不懂为什麽女娲大神
//会是半人半蛇身，既然我们
//人类是她创造出来的，那就
//应该跟她长的一样才对呀？

[Event_00203_00018_Trigger]
//守卫：
//听说这里供俸的女娲神像
//是十年前随着洪水从上游
//被冲到这里来的
VideoRestore()
//记得那一年正好是巫后娘娘
//亡故那年，苗疆正发生一场
//罕见的大水灾。像天河决堤
//般大雨连续下了一个多月，
//大理城内外全成了一遍汪洋
//当时洪水都已淹进这里来了
//许多族人都躲到山上去避难
//有人发现了这具石像，并将
//她供奉在祭坛上，说也奇怪
//不久之後雨就停了，洪水也
//消退了
VideoRestore()
//从此以後，大家就把这石像
//当作女娲大神的祭拜，此处
//祭坛就改建为女娲神殿，供
//白苗族的百姓前来瞻仰

[Event_00203_00019_Trigger]
//守卫：
//真不知女娲大神的石像是
//那一位工匠所做，雕刻的
//栩栩如生，就像活着似的

[Event_00203_00020_Trigger]
//守卫：
//前天夜里我在这里当班时
//听到神像发出叹息的声音
//可是大家都不相信，说是
//我打瞌睡才有的幻觉
ReplaceAndPause()
//守卫：
//我一直有个感觉．．
//觉得这尊女娲神像会突然
//变成活的走下祭坛来

[Event_00203_00004_Trigger]
PartySetPos(35, 50, 0)
WaitEventAutoScriptRun(0, false, false)
Call(Event_00204_00005_Trigger, 0, 0)

[Scr_0x869A]
NPCMoveToBlock(37, 46, 1, 2, true)

[Event_00203_00024_Auto]
ReplaceAndPause()
NPCSetFrame(1)
ReplaceAndPause()
NPCSetFrame(2)
ReplaceAndPause()
NPCSetFrame(3)
ReplaceAndPause()
NPCSetFrame(4)
WaitEventAutoScriptRun(4, false, false)
NPCSetFrame(5)
ReplaceAndPause()
NPCSetFrame(6)
WaitEventAutoScriptRun(2, false, false)
NPCSetFrame(5)
ReplaceAndPause()
NPCSetFrame(4)
ReplaceAndPause()
NPCSetFrame(3)
ReplaceAndPause()
NPCSetFrame(2)
ReplaceAndPause()
NPCSetFrame(1)
ReplaceAndPause()
NPCSetFrame(0)

[Event_00203_00025_Auto]
NPCMoveToBlock(36, 46, 1, 2, true)
NPCMoveToBlock(36, 47, 0, 2, true)
NPCSetDirFrame(3, 0)

[Scr_0x86B9]
NPCMoveToBlock(37, 46, 0, 3, false)

[Scr_0x86BB]
EventSetTriggerScript(206, 1, Event_00206_00001_Trigger)
PartySetRole(51)
PartySetPos(33, 52, 1)
WaitEventAutoScriptRun(0, false, false)
Call(Event_00204_00002_Trigger, 0, 0)
PartyWalkToBlock(37, 47, 0, 8)
WaitEventAutoScriptRun(6, false, false)
HeroSetSprite(0, 232, false)
PartySetRole(1)
RoleSetDirFrame(0, 0, 0)
EventSetState(203, 24, true, false)
EventSetState(203, 22, true, false)
WaitEventAutoScriptRun(15, false, false)
//阿奴：
//$08女娲娘娘．．阿奴求您圣灵
//保佑我族，早日脱离苦难．．$02
WaitEventAutoScriptRun(14, false, false)
EventSetState(203, 24, false, false)
EventSetState(203, 25, true, false)
VideoUpdate(0, false)
//阿奴：
//不知麒麟老公公叫我们来这
//里是何用意，如果可能的话～
//我真希望女娲娘娘能显灵．．
EventSetDirFrame(203, 25, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(4-1-1, 0x00000000, false)
//阿奴：
//喂～你也来参拜娘娘吧
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//这．．．．
VideoUpdate(0, false)
SetDlgUpper(4-1-1, 0x00000000, false)
//阿奴：
//怎麽？
//难道你也像其他外族的异教徒
//一样，宁死也不拜我们的神？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//不．．不，我也没信过什麽教
//只是我还不知道你们的礼仪
//怕胡乱拜而亵渎了你们的神明
VideoUpdate(0, false)
SetDlgUpper(4-6-1, 0x00000000, false)
//阿奴：
//嘻～你果然跟其他汉人不一样
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//我们汉人有一句话叫～
//入境随俗嘛．．
VideoUpdate(0, false)
SetDlgUpper(4-1-1, 0x00000000, false)
//阿奴：
//女娲娘娘是大地之母
//是对人类最最慈爱的神
//你不懂祭拜的规矩也不要紧
//只要诚心敬意就行了
//娘娘是从不生气的
WaitEventAutoScriptRun(20, false, false)
EventSetAutoScript(203, 22, Scr_0x869A)
WaitEventAutoScriptRun(26, false, false)
EventSetDirFrame(203, 25, 2, 0)
WaitEventAutoScriptRun(12, false, false)
EventSetState(203, 22, false, false)
EventSetState(203, 23, true, false)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//庶民李逍遥受麒麟老人指示
//特前来拜见娘娘。庶民无能
//，累及妻子及未出世的孩子
VideoRestore()
//求娘娘保佑她们母子平安
//、长命百岁．．
EventSetAutoScript(203, 23, Scr_0x872D)
WaitEventAutoScriptRun(0, false, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//　咦．．！？
WaitEventAutoScriptRun(10, false, false)
EventSetAutoScript(203, 23, Null)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//竟然．．我怎麽一直没注意到
//这具石像的相貌和灵儿如此神
//似！
EventSetAutoScript(203, 25, Scr_0x86B9)
WaitEventAutoScriptRun(0, false, false)
SetDlgUpper(4-2-1, 0x00000000, false)
//阿奴：
//喂！　你想做什麽？
//不可以对娘娘不敬呀！
EventSetAutoScript(203, 23, Scr_0x872D)
WaitEventAutoScriptRun(0, false, false)
//李逍遥：
//她．．似乎．．在叫我．．
PlaySound(170)
WaitEventAutoScriptRun(16, false, false)
EventSetState(203, 23, false, false)
WaitEventAutoScriptRun(5, false, false)
//阿奴：
//哎呀！？
FadeOut(0)
HeroSetSprite(0, 2, true)
SceneEnter(201)
ReplaceAndPause()
[Event_00203_00003_Trigger]
PartySetPos(33, 52, 1)
WaitEventAutoScriptRun(0, false, false)
Call(Event_00204_00002_Trigger, 0, 0)

[Scr_0x872D]
EventAnimate(-1, 0)
ReplaceAndPauseWithNop(Scr_0x872D, 0)

[Event_00205_00005_Trigger]
//少主，您好！

[Scr_0x8732]
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(6, false, false)
NPCSetDirFrame(3, 0)

[Event_00203_00027_Auto]
ReplaceAndPause()
NPCSetDirFrame(1, 0)
NPCSetDirFrame(0, 0)
ReplaceAndPause()
NPCMoveToBlock(37, 47, 0, 3, false)

[Scr_0x873D]
VideoWave(0, 0)
EventSetState(203, 15, false, false)
EventSetState(203, 16, false, false)
EventSetState(203, 17, false, false)
EventSetState(203, 18, false, false)
EventSetState(203, 19, false, false)
EventSetState(203, 20, false, false)
EventSetState(203, 25, false, false)
EventSetState(203, 26, true, false)
PartySetPos(36, 47, 1)
HeroSetSprite(0, 232, true)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
//阿奴：
//$07娘娘啊．．阿奴诚心向您乞求
//求您让逍遥大哥平安归来．．$02
VideoUpdate(0, false)
HeroSetSprite(0, 2, true)
FadeToScene(-1, 2)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//咦～我回来了吗？
EventSetState(203, 26, false, false)
EventSetState(203, 27, true, false)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(4-2-1, 0x00000000, false)
//阿奴：
//啊～　逍遥哥哥！
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(2, false, false)
EventSetState(203, 27, false, false)
HeroSetSprite(0, 607, true)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//阿奴：
//呜．．．太好了．．
//娘娘终於放你回来了！
RoleSetDirFrame(0, 0, 1)
VideoUpdate(0, false)
SetDlgUpper(1-6-1, 0x00000000, false)
//李逍遥：
//乖～别哭了
//我这不是平安回来了吗？
VideoUpdate(0, false)
SetDlgLower(4-5-1, 0x00000000, false)
//阿奴：
//你到底跑到哪去
//人家担心死了呢！
VideoUpdate(0, false)
SetDlgUpper(1-9-1, 0x00000000, false)
//李逍遥：
//这就说来话长了
//回头我再慢慢告诉你吧
RoleSetDirFrame(0, 0, 2)
VideoUpdate(0, false)
SetDlgLower(4-2-1, 0x00000000, false)
//阿奴：
//对了～你看！
RoleSetDirFrame(0, 0, 3)
VideoUpdate(0, false)
SetDlgLower(4-6-1, 0x00000000, false)
//阿奴：
//小凤凰孵出来了
//我们说好的～蛋壳给你
AddItem(215, 0)
SetDlgBox(0x00000000)
//得到金凤凰蛋壳
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//这麽快？
VideoUpdate(0, false)
SetDlgLower(4-5-1, 0x00000000, false)
//阿奴：
//哪有～你一失踪就是一个月
//人家天天在女娲娘娘神像面前
//跪拜祷告，膝盖都破皮了呢！
SetDlgUpper(1-2-1, 0x00000000, false)
//李逍遥：
//我这一去竟然这麽久？
//糟．．希望灵儿不会有事才好
HeroSetSprite(0, 2, false)
PartySetRole(15)
RoleSetDirFrame(0, 0, 0)
EventSetTriggerScript(174, 8, Scr_0x7EAF)
EventSetTriggerScript(204, 0, Event_00265_00026_Trigger)
MusicPlay(55, true, 0.00)
ReplaceAndPause()

[Event_00203_00028_Trigger]
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//这尊石像看起来好面熟．．
ReplaceAndPause()
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//的确是栩栩如生
//简直就是活人变成的
ReplaceAndPauseWithNop(Event_00203_00028_Trigger, 0)

[Event_00205_00018_Trigger]
//守卫：
//族长还没开完会吗？

[Event_00205_00019_Trigger]
//黑苗人：
//哎呦．．算你们狠呐．．

[Scr_0x87A8]
SetDlgLower(4-1-1, 0x00000000, false)
//阿奴：
//等一等～麒麟老伯伯要我们
//先到神殿，一定有重要的事
RoleMoveOneStep(16, -8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(16, -8, 0)
WaitEventAutoScriptRun(0, false, false)

[Event_00202_00003_Trigger]
SceneEnter(214)
PartySetPos(23, 11, 1)
FadeOut(0)

[Event_00204_00009_Trigger]
//妇人：
//自从巫后娘娘离开大理之後
//这处祭坛就没有人再使用过了
VideoRestore()
//十多年来，我每个月都来打扫
//这座祭坛一次，因为我们相信
//总有一天～会有继承娘娘的人
//出现，继续守护我们全族人
ReplaceAndPause()
//妇人：
//巫后娘娘原本是我族世袭的
//祭司，她曾经数次施展法力
//拯救全族人。说她是大理的
//守护女神亦不为过。

[Event_00203_00021_Trigger]
//守卫：
//此处是往祭坛的入口
//是过去我族历代大祭司
//祭天祈福的圣地
ReplaceAndPause()
//守卫：
//不过．．这座祭坛已经
//荒废很久了

[Scene_00201_Enter]
SetPalette(5)
PartySetPos(28, 52, 0)
RoleSetDirFrame(0, 2, 0)
MusicPlay(59, true, 3.00)
VideoUpdate(0, true)
EventSetState(202, 0, true, false)
FadeToScene(-1, 4)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//$05你．．你．．是人．．
//还是．．鬼！？
VideoUpdate(0, false)
SetDlgUpper(38-1-1, 0x00000000, false)
//巫后：
//$08李逍遥．．哀家问你～
//你可是真心爱着灵儿？
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//$02啊．．．难道．．
//您就是灵儿的娘亲！？
SetDlgUpper(38-1-1, 0x00000000, false)
//巫后：
//$03回答我的话！
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//是～　灵儿是我的妻子
//我当然永远爱她
VideoUpdate(0, false)
SetDlgUpper(38-1-1, 0x00000000, false)
//巫后：
//$06即使．．她非人类？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//$03我的灵儿是人间的仙女
//当然与凡人不同
VideoUpdate(0, false)
SetDlgUpper(38-1-1, 0x00000000, false)
//巫后：
//$08．．．．．．．
//好．．你去吧．．
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//$02我？　去哪？！
VideoUpdate(0, false)
SetDlgUpper(38-1-1, 0x00000000, false)
//巫后：
//$08我要你回到十年前
//去做一件你该做的事．．
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//$02咦．．？(
FadeOut(2)
SetPalette(0)
SceneEnter(227)

[Scene_00214_Enter]
MusicPlay(70, true, 0.00)
SetBattlefield(6)

[Scene_00216_Enter]
MusicPlay(35, true, 0.00)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//这是什麽地方？
VideoUpdate(0, false)
SetDlgUpper(4-1-1, 0x00000000, false)
//阿奴：
//这处洞穴我们称之为试炼之窟
//里面栖息着非常多巨大的毒虫
//、毒兽，是个很可怕的地方
VideoRestore()
//从前曾有许多巫蛊师深入洞内
//修炼蛊术，来证明自己的道行
//高深，所以因此而得名
VideoRestore()
//传说．．在这洞窟底最深处
//有太古时代女娲娘娘的遗蹟喔
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//　遗蹟．．？
VideoUpdate(0, false)
SetDlgUpper(4-1-1, 0x00000000, false)
//阿奴：
//听说很久很久以前，有人曾
//曾在洞窟最深处，发现女娲
//娘娘的陵墓
VideoRestore()
//不过这也只是传说罢了
//这试炼之窟深不见底，要走
//到尽头之处根本是不可能的
Replace()
MusicPlay(35, true, 0.00)
SetBattlefield(58)

[Scene_00213_Enter]
PartySetPos(45, 19, 1)
MusicPlay(16, true, 0.00)

[Event_00214_00001_Trigger]
SceneEnter(215)
PartySetPos(55, 96, 1)
FadeOut(0)

[Event_00215_00001_Trigger]
SceneEnter(214)
PartySetPos(12, 54, 0)
FadeOut(0)

[Event_00216_00001_Trigger]
SceneEnter(217)
PartySetPos(38, 71, 1)
FadeOut(0)

[Event_00217_00001_Trigger]
SceneEnter(216)
PartySetPos(17, 43, 0)
FadeOut(0)

[Event_00216_00002_Trigger]
SceneEnter(217)
PartySetPos(36, 90, 1)
FadeOut(0)

[Event_00217_00002_Trigger]
SceneEnter(216)
PartySetPos(50, 36, 1)
FadeOut(0)

[Event_00216_00003_Trigger]
SceneEnter(217)
PartySetPos(33, 14, 1)
FadeOut(0)

[Event_00217_00003_Trigger]
SceneEnter(218)
PartySetPos(29, 17, 0)
FadeOut(0)

[Event_00217_00004_Trigger]
SceneEnter(218)
PartySetPos(19, 45, 1)
FadeOut(0)

[Event_00218_00001_Trigger]
SceneEnter(217)
PartySetPos(21, 87, 1)
FadeOut(0)

[Event_00217_00005_Trigger]
SceneEnter(218)
PartySetPos(21, 68, 0)
FadeOut(0)

[Event_00218_00002_Trigger]
SceneEnter(217)
PartySetPos(48, 103, 0)
FadeOut(0)

[Event_00218_00003_Trigger]
SceneEnter(219)
PartySetPos(24, 20, 0)
FadeOut(0)

[Event_00219_00001_Trigger]
SceneEnter(218)
PartySetPos(52, 95, 1)
FadeOut(0)

[Event_00218_00004_Trigger]
SceneEnter(219)
PartySetPos(52, 17, 0)
FadeOut(0)

[Event_00219_00002_Trigger]
SceneEnter(218)
PartySetPos(30, 40, 0)
FadeOut(0)

[Event_00216_00004_Trigger]
SceneEnter(217)
PartySetPos(29, 111, 1)
FadeOut(0)

[Event_00217_00006_Trigger]
SceneEnter(218)
PartySetPos(49, 76, 0)
FadeOut(0)

[Event_00218_00005_Trigger]
SceneEnter(219)
PartySetPos(48, 72, 1)
FadeOut(0)

[Event_00215_00002_Trigger]
SceneEnter(216)
PartySetPos(14, 72, 0)
FadeOut(0)

[Scene_00213_Teleport]
SceneEnter(215)
PartySetPos(26, 46, 0)
FadeOut(0)

[Event_00215_00003_Trigger]
SceneEnter(216)
PartySetPos(21, 80, 0)
FadeOut(0)

[Event_00216_00006_Trigger]
SceneEnter(215)
PartySetPos(32, 52, 0)
FadeOut(0)

[Event_00215_00004_Trigger]
SceneEnter(216)
PartySetPos(33, 52, 1)
FadeOut(0)

[Event_00216_00007_Trigger]
SceneEnter(215)
PartySetPos(32, 41, 0)
FadeOut(0)

[Event_00223_00001_Trigger]
SceneEnter(224)
PartySetPos(37, 94, 0)
FadeOut(0)

[Event_00224_00001_Trigger]
SceneEnter(223)
PartySetPos(14, 60, 0)
FadeOut(0)

[Event_00220_00001_Trigger]
SceneEnter(222)
PartySetPos(39, 29, 0)
FadeOut(0)

[Event_00222_00001_Trigger]
SceneEnter(220)
PartySetPos(47, 69, 1)
FadeOut(0)

[Event_00220_00002_Trigger]
SceneEnter(222)
PartySetPos(13, 74, 1)
FadeOut(0)

[Event_00222_00002_Trigger]
SceneEnter(223)
PartySetPos(22, 96, 1)
FadeOut(0)

[Event_00223_00002_Trigger]
SceneEnter(222)
PartySetPos(37, 84, 1)
FadeOut(0)

[Event_00222_00003_Trigger]
SceneEnter(223)
PartySetPos(28, 66, 1)
FadeOut(0)

[Event_00223_00003_Trigger]
SceneEnter(222)
PartySetPos(22, 28, 1)
FadeOut(0)

[Event_00222_00004_Trigger]
SceneEnter(223)
PartySetPos(31, 42, 1)
FadeOut(0)

[Event_00223_00004_Trigger]
SceneEnter(221)
PartySetPos(32, 33, 0)
FadeOut(0)

[Event_00221_00001_Trigger]
SceneEnter(221)
PartySetPos(33, 29, 0)
FadeOut(0)

[Event_00221_00002_Trigger]
SceneEnter(221)
PartySetPos(7, 99, 1)
FadeOut(0)

[Event_00223_00005_Trigger]
SceneEnter(223)
PartySetPos(52, 98, 1)
FadeOut(0)

[Event_00223_00006_Trigger]
SceneEnter(223)
PartySetPos(8, 51, 0)
FadeOut(0)

[Event_00223_00007_Trigger]
SceneEnter(223)
PartySetPos(55, 63, 0)
FadeOut(0)

[Event_00223_00008_Trigger]
SceneEnter(223)
PartySetPos(15, 105, 1)
FadeOut(0)

[Scr_0x88DA]
SceneEnter(225)
PartySetPos(29, 56, 0)
FadeOut(0)

[Event_00219_00003_Trigger]
SceneEnter(220)
PartySetPos(23, 30, 0)
FadeOut(0)

[Event_00220_00003_Trigger]
SceneEnter(219)
PartySetPos(45, 24, 1)
FadeOut(0)

[Event_00225_00001_Trigger]
SceneEnter(225)
PartySetPos(18, 75, 0)
FadeOut(0)

[Event_00225_00002_Trigger]
SceneEnter(225)
PartySetPos(23, 41, 0)
FadeOut(0)

[Event_00225_00003_Trigger]
SceneEnter(225)
PartySetPos(45, 97, 1)
FadeOut(0)

[Event_00225_00004_Trigger]
SceneEnter(225)
PartySetPos(35, 28, 1)
FadeOut(0)

[Event_00225_00005_Trigger]
SceneEnter(225)
PartySetPos(49, 93, 1)
FadeOut(0)

[Event_00225_00006_Trigger]
SceneEnter(225)
PartySetPos(50, 14, 1)
FadeOut(0)

[Event_00225_00007_Trigger]
SceneEnter(225)
PartySetPos(15, 62, 1)
FadeOut(0)

[Event_00225_00008_Trigger]
SceneEnter(225)
PartySetPos(51, 53, 1)
FadeOut(0)

[Event_00225_00009_Trigger]
SceneEnter(225)
PartySetPos(21, 106, 1)
FadeOut(0)

[Event_00225_00010_Trigger]
SceneEnter(225)
PartySetPos(13, 100, 0)
FadeOut(0)

[Event_00225_00011_Trigger]
SceneEnter(225)
PartySetPos(34, 77, 0)
FadeOut(0)

[Event_00225_00012_Trigger]
SceneEnter(225)
PartySetPos(29, 27, 1)
FadeOut(0)

[Event_00225_00014_Trigger]
SceneEnter(225)
PartySetPos(44, 32, 0)
FadeOut(0)

[Event_00226_00002_Trigger]
SceneEnter(225)
PartySetPos(42, 86, 0)
FadeOut(0)

[Event_00225_00022_Trigger]
SceneEnter(226)
PartySetPos(25, 59, 0)
FadeOut(0)

[Event_00226_00003_Trigger]
SceneEnter(225)
PartySetPos(13, 26, 1)
FadeOut(0)

[Event_00225_00023_Trigger]
SceneEnter(226)
PartySetPos(7, 52, 0)
FadeOut(0)

[Event_00226_00004_Trigger]
SceneEnter(225)
PartySetPos(48, 44, 1)
FadeOut(0)

[Event_00225_00024_Trigger]
SceneEnter(226)
PartySetPos(46, 79, 1)
FadeOut(0)

[Event_00226_00005_Trigger]
SceneEnter(226)
PartySetPos(31, 88, 1)
FadeOut(0)

[Event_00225_00025_Trigger]
SceneEnter(226)
PartySetPos(53, 71, 0)
FadeOut(0)

[Event_00226_00006_Trigger]
SceneEnter(226)
PartySetPos(34, 93, 1)
FadeOut(0)

[Event_00225_00026_Trigger]
SceneEnter(226)
PartySetPos(35, 115, 1)
FadeOut(0)

[Event_00226_00007_Trigger]
SceneEnter(226)
PartySetPos(27, 78, 0)
FadeOut(0)

[Event_00226_00008_Trigger]
SceneEnter(226)
PartySetPos(27, 107, 1)
FadeOut(0)

[Event_00226_00009_Trigger]
SceneEnter(226)
PartySetPos(37, 67, 1)
FadeOut(0)

[Event_00226_00010_Trigger]
SceneEnter(226)
PartySetPos(21, 100, 1)
FadeOut(0)

[Event_00226_00011_Trigger]
SceneEnter(226)
PartySetPos(47, 56, 1)
FadeOut(0)

[Event_00226_00012_Trigger]
SceneEnter(226)
PartySetPos(15, 94, 0)
FadeOut(0)

[Event_00226_00013_Trigger]
SceneEnter(226)
PartySetPos(28, 37, 0)
FadeOut(0)

[Event_00226_00014_Trigger]
SceneEnter(226)
PartySetPos(9, 90, 0)
FadeOut(0)

[Event_00226_00015_Trigger]
SceneEnter(226)
PartySetPos(39, 42, 1)
FadeOut(0)

[Event_00226_00016_Trigger]
SceneEnter(226)
PartySetPos(55, 50, 1)
FadeOut(0)

[Event_00226_00017_Trigger]
SceneEnter(226)
PartySetPos(39, 82, 0)
FadeOut(0)

[Event_00226_00018_Trigger]
SceneEnter(226)
PartySetPos(43, 61, 0)
FadeOut(0)

[Event_00226_00019_Trigger]
SceneEnter(226)
PartySetPos(29, 53, 1)
FadeOut(0)

[Event_00226_00020_Trigger]
SceneEnter(226)
PartySetPos(24, 23, 1)
FadeOut(0)

[Event_00226_00021_Trigger]
SceneEnter(226)
PartySetPos(36, 37, 1)
FadeOut(0)

[Event_00226_00022_Trigger]
SceneEnter(226)
PartySetPos(43, 19, 0)
FadeOut(0)

[Event_00225_00027_Trigger]
SceneEnter(226)
PartySetPos(41, 106, 0)
FadeOut(0)

[Event_00226_00023_Trigger]
SceneEnter(225)
PartySetPos(46, 25, 0)
FadeOut(0)

[Event_00226_00024_Trigger]
SceneEnter(225)
PartySetPos(28, 90, 1)
FadeOut(0)

[Event_00225_00028_Trigger]
SceneEnter(226)
PartySetPos(55, 92, 0)
FadeOut(0)

[Event_00225_00029_Trigger]
SceneEnter(226)
PartySetPos(34, 92, 1)
FadeOut(0)

[Event_00226_00025_Trigger]
SceneEnter(225)
PartySetPos(36, 56, 1)
FadeOut(0)

[Event_00226_00026_Trigger]
SceneEnter(225)
PartySetPos(43, 75, 1)
FadeOut(0)

[Event_00225_00030_Trigger]
SceneEnter(226)
PartySetPos(31, 89, 0)
FadeOut(0)

[Event_00225_00031_Trigger]
SceneEnter(226)
PartySetPos(18, 81, 1)
FadeOut(0)

[Event_00225_00032_Trigger]
SceneEnter(226)
PartySetPos(9, 60, 1)
FadeOut(0)

[Event_00225_00021_Trigger]
SceneEnter(226)
PartySetPos(12, 72, 0)
FadeOut(0)

[Event_00225_00013_Trigger]
SceneEnter(225)
PartySetPos(41, 20, 0)
FadeOut(0)

[Event_00221_00003_Trigger]
SceneEnter(225)
PartySetPos(29, 56, 0)
FadeOut(0)

[Event_00226_00027_Trigger]
SceneEnter(225)
PartySetPos(43, 23, 0)
FadeOut(0)

[Event_00226_00028_Trigger]
SceneEnter(225)
PartySetPos(18, 59, 1)
FadeOut(0)

[Event_00226_00029_Trigger]
SceneEnter(225)
PartySetPos(12, 54, 0)
FadeOut(0)

[Event_00225_00019_Trigger]
SceneEnter(225)
PartySetPos(20, 83, 0)
FadeOut(0)

[Event_00225_00020_Trigger]
SceneEnter(225)
PartySetPos(37, 51, 0)
FadeOut(0)

[Event_00225_00015_Trigger]
SceneEnter(225)
PartySetPos(18, 81, 0)
FadeOut(0)

[Event_00225_00016_Trigger]
SceneEnter(225)
PartySetPos(35, 49, 0)
FadeOut(0)

[Event_00225_00017_Trigger]
SceneEnter(225)
PartySetPos(22, 85, 0)
FadeOut(0)

[Event_00225_00018_Trigger]
SceneEnter(225)
PartySetPos(33, 47, 0)
FadeOut(0)

[Event_00214_00002_Trigger]
SceneEnter(202)
PartySetPos(39, 50, 0)
FadeOut(0)

[Scr_0x89DE]
SceneEnter(259)
PartySetPos(39, 50, 0)
FadeOut(0)

[Event_00226_00001_Trigger]
SceneEnter(213)
PartySetPos(45, 19, 1)
FadeOut(0)

[Event_00214_00003_Trigger]
//白苗士兵：
//这位兄弟，请留步！
//我们正在围捕五毒兽
//请不要随便靠近，以免危险
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//啊．．对不起
//我改走别的路好了
VideoUpdate(0, false)
//白苗士兵：
//这座山谷暂时封闭了
//闲杂人等不得近入
//等到我们任务完成後
//才可以通行
RoleMoveOneStep(16, -8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(16, -8, 0)
WaitEventAutoScriptRun(0, false, false)
ReplaceAndPause()
//白苗士兵：
//请不要在此逗留，妨碍
//我们的任务
RoleMoveOneStep(16, -8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(16, -8, 0)
WaitEventAutoScriptRun(0, false, false)

[Event_00215_00012_Auto]
NPCMoveToBlock(36, 22, 0, 3, false)
NPCMoveToBlock(36, 21, 1, 3, false)
NPCSetDirFrame(2, 0)

[Event_00215_00005_Trigger]
MusicStop()
SetDlgCenter(0, 0x00000000, false)
//谁！？
SetBattleMusic(38)
BattleStart(223, Null, Null)
SetBattleMusic(37)
BattleEnd()
EventSetState(215, 12, true, false)
WaitEventAutoScriptRun(18, false, false)
SetDlgLower(0, 0x00000000, false)
//阿奴：
//通通给我住手！！
WaitEventAutoScriptRun(18, false, false)
SetDlgLower(4-2-1, 0x00000000, false)
//阿奴：
//盖姐！你这是做什麽？
//为何对逍遥大哥动手？
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//此人看见我军的机密
//为了谨慎起见，所以属下
//必须将他擒下
VideoRestore()
//咱们在这培养毒兽的事
//可不能让外人知道啊！
VideoUpdate(0, false)
SetDlgLower(4-4-1, 0x00000000, false)
//阿奴：
//他是我和婆婆的朋友
//你们不许对他无礼！
//而且，是婆婆要他来这里的
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//是．．既然是圣姑的朋友
//那也就是我族的朋友
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//阿奴～盖将军是职责所在
//这只是一场误会，大家把话
//说明白就没事了
EventSetDirFrame(215, 12, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(4-1-1, 0x00000000, false)
//阿奴：
//逍遥哥～你有没有怎样？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//我．．没什麽～还好
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//小少主．．．
//你怎麽跟这汉人在一起？
//他可是有妻室的人呢．．
EventSetDirFrame(215, 12, 1, 0)
VideoUpdate(0, false)
SetDlgLower(4-1-1, 0x00000000, false)
//阿奴：
//盖姐～　你别管人家嘛！
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//盖大姐，我来此地别无他意
//而是此谷盛产傀儡虫，老婆婆
//要我替他前来采集，还请大姐
//通融放行．．
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//呦～李公子这麽说就太客
//气了，您可是位大贵人呢！
//我等先前无知冒犯，还请您
//大人不记小人过才是
VideoRestore()
//不打扰您和小少主
//．．．告辞了！
EventSetState(173, 8, false, false)
EventSetState(174, 0, true, false)
EventSetStateSequence(215, 5, 215, 11, false, false)
EventSetDirFrame(215, 12, 3, 0)
RoleSetDirFrame(0, 3, 0)
FadeOut(0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(2, false, false)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//你怎麽也来了？我女儿呢？
VideoUpdate(0, false)
SetDlgUpper(4-1-1, 0x00000000, false)
//阿奴：
//小宝宝要妈妈抱才肯乖乖的
//其他人抱着就一直哭个不停
//我就交给灵儿姐姐啦
VideoRestore()
//对了．．
//是婆婆要你来收集傀儡虫吗？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//是的，要凑齐三十六只
VideoUpdate(0, false)
SetDlgUpper(4-1-1, 0x00000000, false)
//阿奴：
//这麽多啊！？
VideoRestore()
//奇怪．．婆婆一次要
//这麽多傀儡虫做什麽？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//我也不清楚．．总之～
//尽快完成老婆婆交待的事吧
EventSetState(215, 12, false, false)
PartySetRole(15)
MusicPlay(70, true, 0.00)

[Event_00213_00001_Trigger]
EventSetState(-1, -1, false, false)
AddItem(234, 0)
SetDlgBox(0x00000000)
//拾起芦苇漂

[Scene_00227_Enter]
PlaySound(274)
PartySetPos(49, 106, 0)
RoleSetDirFrame(0, 2, 0)
VideoWave(255, -4)
VideoFadeAndUpdate(1)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//咦．．这是哪里？
SetBattlefield(9)
ReplaceAndPause()

[Scene_00236_Enter]
MusicPlay(58, true, 0.00)

[Scene_00229_Enter]
MusicPlay(59, true, 0.00)

[Scene_00230_Enter]
MusicPlay(60, true, 0.00)

[Scene_00228_Enter]
SetBattlefield(56)
MusicPlay(16, true, 0.00)

[Event_00229_00001_Trigger]
SceneEnter(236)
PartySetPos(20, 100, 0)
FadeOut(0)

[Event_00236_00001_Trigger]
SceneEnter(229)
PartySetPos(40, 49, 0)
FadeOut(0)

[Event_00236_00002_Trigger]
SceneEnter(239)
PartySetPos(36, 106, 1)
FadeOut(0)

[Event_00239_00001_Trigger]
SceneEnter(236)
PartySetPos(16, 78, 0)
FadeOut(0)

[Event_00236_00003_Trigger]
SceneEnter(240)
PartySetPos(9, 54, 1)
FadeOut(0)

[Event_00240_00001_Trigger]
SceneEnter(236)
PartySetPos(40, 105, 0)
FadeOut(0)

[Event_00236_00004_Trigger]
SceneEnter(237)
PartySetPos(22, 106, 0)
FadeOut(0)

[Event_00237_00001_Trigger]
SceneEnter(236)
PartySetPos(52, 91, 0)
FadeOut(0)

[Event_00236_00005_Trigger]
SceneEnter(237)
PartySetPos(9, 91, 0)
FadeOut(0)

[Event_00237_00002_Trigger]
SceneEnter(236)
PartySetPos(28, 67, 1)
FadeOut(0)

[Event_00236_00006_Trigger]
SceneEnter(238)
PartySetPos(22, 103, 1)
FadeOut(0)

[Event_00238_00001_Trigger]
SceneEnter(236)
PartySetPos(40, 79, 1)
FadeOut(0)

[Event_00237_00003_Trigger]
SceneEnter(228)
PartySetPos(17, 51, 1)
FadeOut(0)

[Event_00228_00001_Trigger]
SceneEnter(237)
PartySetPos(55, 89, 1)
FadeOut(0)

[Event_00231_00001_Trigger]
SceneEnter(233)
PartySetPos(55, 70, 0)
FadeOut(0)

[Event_00233_00001_Trigger]
SceneEnter(231)
PartySetPos(10, 23, 0)
FadeOut(0)

[Event_00227_00001_Auto]
EventWalkOneStep(-1, -1, 0, 4)
EventModifyPos(-1, -1, 0, 4)
GotoWithNop(Event_00227_00001_Auto, 0)

[Event_00227_00002_Auto]
EventWalkOneStep(-1, -1, 0, -4)
EventModifyPos(-1, -1, 0, -6)
EventWalkOneStep(-1, -1, 0, -8)
EventModifyPos(-1, -1, 0, -8)
EventWalkOneStep(-1, -1, 0, -8)
EventModifyPos(-1, -1, 0, -8)
EventWalkOneStep(-1, -1, 0, -6)
EventModifyPos(-1, -1, 0, -4)
EventWalkOneStep(-1, -1, 0, -2)
EventModifyPos(-1, -1, 0, -1)
EventWalkOneStep(-1, -1, 0, -1)
ReplaceAndPause()
EventAnimate(-1, 0)
ReplaceAndPause()
EventAnimate(-1, 0)
ReplaceAndPause()
EventAnimate(-1, 0)
EventModifyPos(-1, -1, 0, 1)
EventWalkOneStep(-1, -1, 1, 1)
EventModifyPos(-1, -1, 2, 2)
EventWalkOneStep(-1, -1, 3, 3)
EventModifyPos(-1, -1, 4, 4)
EventWalkOneStep(-1, -1, 5, 5)
EventModifyPos(-1, -1, 6, 6)
EventWalkOneStep(-1, -1, 7, 7)
EventModifyPos(-1, -1, 8, 8)
EventWalkOneStep(-1, -1, 9, 9)
EventModifyPos(-1, -1, 10, 10)
EventWalkOneStep(-1, -1, 11, 11)
EventModifyPos(-1, -1, 12, 12)
EventWalkOneStep(-1, -1, 12, 12)
EventModifyPos(-1, -1, 12, 12)
EventWalkOneStep(-1, -1, 12, 12)
EventModifyPos(-1, -1, 12, 12)
EventWalkOneStep(-1, -1, 12, 12)
EventModifyPos(-1, -1, 12, 12)
EventWalkOneStep(-1, -1, 12, 12)
EventModifyPos(-1, -1, 12, 12)
EventWalkOneStep(-1, -1, 12, 12)
EventSetState(-1, -1, false, false)

[Scr_0x8B0B]
NPCSetDirFrame(2, 0)
ReplaceAndPause()
NPCMoveToBlock(40, 112, 0, 2, true)
ReplaceAndPause()
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(0, 0)

[Scr_0x8B13]
EventModifyPos(-1, -1, 48, 8)
NPCMoveToBlock(35, 112, 1, 8, false)

[Event_00227_00009_Auto]
NPCMoveToBlock(34, 110, 0, 8, false)

[Event_00227_00010_Auto]
NPCMoveToBlock(34, 111, 1, 8, false)

[Event_00227_00003_Trigger]
EventSetState(-1, -1, false, false)
RoleSetDirFrame(0, 1, 0)
ViewportMove(-8, -4, 16)
SetDlgUpper(40-1-1, 0x00000000, false)
//妇人：
//是谁派你们来的？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//黑苗士兵：
//奉教主之命，凡王后的
//同党一律格杀！
VideoUpdate(0, false)
SetDlgUpper(40-1-1, 0x00000000, false)
//妇人：
//哼～　教主、教主、
//你们眼中还有巫王吗！？
//竟然连小公主也不放过
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//黑苗士兵：
//哈哈哈～此事乃教主奉了
//巫王陛下的旨意，制裁你们
//这群妖言惑众的妖女！拯救
//黑苗族
VideoUpdate(0, false)
SetDlgUpper(40-1-1, 0x00000000, false)
//妇人：
//哼！你们那狗屁教主才是妖孽
//你们不相信巫后娘娘，竟然相
//信那老魔头的鬼话！
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//黑苗士兵：
//好一付尖牙利嘴，弟兄们～
//砍下这泼妇的头去见教主！
VideoUpdate(0, false)
SetDlgLower(1-2-1, 0x00000000, false)
//李逍遥：
//请问．．．你们是谁？
//这里又是哪里？
EventSetDirFrame(227, 6, 3, 0)
EventSetDirFrame(227, 7, 3, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//黑苗士兵：
//哦！　居然还有汉人
//是漏网之鱼吗？
ViewportMove(8, 4, 16)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//　　咦．．！(
SetBattlefield(9)
BattleStart(102, Scr_0x9C9B, Null)
BattleEnd()
EventSetState(227, 5, false, false)
EventSetState(227, 6, false, false)
EventSetState(227, 7, false, false)
EventSetState(227, 11, true, true)
EventSetState(227, 12, true, true)
FadeOut(0)
RoleSetDirFrame(0, 3, 0)
PartySetPos(37, 111, 1)
EventSetState(227, 1, true, false)
EventSetState(227, 4, true, false)
WaitEventAutoScriptRun(44, false, false)
EventSetAutoScript(227, 1, Null)
EventSetAutoScript(227, 4, Scr_0x8B0B)
WaitEventAutoScriptRun(36, false, false)
SetDlgLower(40-1-1, 0x00000000, false)
//妇人：
//谢谢你替我们解围
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//大婶．．可否请你告诉我
//这里到底是什麽地方？
//我刚刚才到神殿祭拜一具
//石像，然後就突然在这里了
VideoUpdate(0, false)
SetDlgLower(40-1-1, 0x00000000, false)
//妇人：
//这里是黑苗族的都城－南绍
VideoUpdate(0, false)
SetDlgUpper(1-2-1, 0x00000000, false)
//李逍遥：
//南绍！？我明明在大理城．．
VideoUpdate(0, false)
SetDlgLower(40-1-1, 0x00000000, false)
//妇人：
//你穿着汉人的服装，又杀了
//那三名士兵，你得赶紧想办
//法离开，否则你的处境会很
//危险
VideoRestore()
//我得带公主离开了．．
//年轻人～请好自为之
EventSetDirFrame(227, 4, 3, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetState(227, 4, false, false)
EventSetState(227, 1, false, false)
EventSetState(227, 2, true, false)
VideoUpdate(0, false)
//嘟儿．．飞吧！
WaitEventAutoScriptRun(28, false, false)
EventSetAutoScript(227, 8, Scr_0x8B13)
EventSetState(227, 9, true, false)
EventSetState(227, 10, true, false)
WaitEventAutoScriptRun(10, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(0, 0x00000000, false)
//黑苗士兵：
//啊～被她们逃了！！
EventSetDirFrame(227, 8, 2, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(227, 10, 2, 0)
VideoUpdate(0, false)
//黑苗士兵：
//这汉狗一定是她的同夥
//抓他去见教主！
BattleStart(113, Scr_0x9C9B, Null)
BattleEnd()
EventSetState(227, 8, false, false)
EventSetState(227, 9, false, false)
EventSetState(227, 10, false, false)
EventSetState(227, 13, true, true)
EventSetState(227, 14, true, true)
EventSetState(227, 15, true, true)
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//这些喽罗杀完一批又来一批
//这样下去不是办法．．．
VideoRestore()
//嗯～　对了．．
RoleMoveOneStep(-16, 8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-16, 8, 0)
WaitEventAutoScriptRun(3, false, false)
FadeOut(0)
EventSetState(227, 11, false, false)
EventSetState(227, 12, false, false)
EventSetState(227, 13, false, false)
EventSetState(227, 14, false, false)
EventSetState(227, 15, false, false)
HeroSetSprite(0, 563, true)
VideoUpdate(0, false)
//李逍遥：
//嘿．．还满好看的

[Event_00227_00017_Trigger]
//黑苗士兵：
//喂！　你是哪个单位的？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//我．．．我是新来的
//跟伙伴走散了
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//黑苗士兵：
//喔～　你还有没有看到
//这里还有其他的弟兄？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//没有，就只我一人
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//黑苗士兵：
//教主有重要的事
//要所有弟兄回王宫报到
//你就搭我们的船一道回去吧
FadeOut(0)
SceneEnter(235)
PartySetPos(52, 107, 1)

[Event_00235_00001_Trigger]
SceneEnter(229)
PartySetPos(38, 94, 0)
FadeOut(0)

[Event_00229_00002_Trigger]
SceneEnter(235)
PartySetPos(8, 60, 0)
FadeOut(0)

[Scene_00235_Enter]
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//士兵甲：
//啧．．洪水好像又淹的更高了
//这样下去恐怕连王宫也会不保
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//士兵乙：
//可不是吗．．
//我家房子完全泡在水底啦！
EventSetDirFrame(235, 2, 1, 0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//士兵甲：
//听说这场灾难都是巫后搞的鬼
//真不知我们族人跟她有什麽仇
//竟然要毁灭我们的国家
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//士兵乙：
//是啊，要不是教主揭穿那妖女
//的真面目，不然连大王都被蒙
//在鼓里
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//士兵甲：
//啧．．想不到一向受族人敬爱
//的巫后娘娘居然是蛇妖女
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//士兵乙：
//是呀～传说蛇女出现之处必定
//带来灾难，所以只要妖女一死
//洪水一定就会退了
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//士兵甲：
//可是你想～大王和那妖女毕竟
//是多年的夫妻，大王能狠下心
//处死她吗？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//士兵乙：
//所以说啦，这回教主突然召集
//所有人到王宫，一定是有重要
//的决定要向大家宣布
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//请问．．．．
EventSetDirFrame(235, 2, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//士兵甲：
//你还站在这里干什麽？
VideoRestore()
//我们还要跟其它弟兄会合
//你又不是我们小队的人
//自己去王宫报到
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//好～是、是！
ReplaceAndPause()

[Event_00235_00004_Auto]
NPCMoveToBlock(41, 87, 0, 2, true)
GotoWithProbability(5, Null)
ReplaceAndPause()
NPCSetDirFrame(2, 0)
GotoWithProbability(8, Null)
NPCSetDirFrame(0, 0)
GotoWithProbability(10, Null)
NPCMoveToBlock(37, 91, 0, 2, true)
GotoWithProbability(6, Null)
ReplaceAndPauseWithNop(Event_00235_00004_Auto, 0)

[Event_00235_00006_Auto]
NPCMoveToBlock(36, 97, 0, 2, true)
GotoWithProbability(10, Null)
NPCSetDirFrame(2, 0)
GotoWithProbability(8, Null)
NPCMoveToBlock(37, 98, 1, 2, true)
GotoWithProbability(10, Null)
NPCSetDirFrame(2, 0)
GotoWithProbability(10, Null)
ReplaceAndPauseWithNop(Event_00235_00006_Auto, 0)

[Event_00235_00011_Auto]
NPCMoveToBlock(26, 88, 0, 2, true)
GotoWithProbability(20, Null)
NPCMoveToBlock(17, 79, 0, 2, true)
GotoWithProbability(3, Null)
NPCMoveToBlock(28, 90, 1, 2, true)
GotoWithProbability(10, Null)
NPCSetDirFrame(0, 0)
GotoWithProbability(4, Null)
NPCMoveToBlock(26, 88, 1, 2, true)
NPCSetDirFrame(2, 0)
GotoWithProbability(5, Null)
ReplaceAndPauseWithNop(Event_00235_00011_Auto, 0)

[Event_00235_00003_Trigger]
SetDlgLower(0, 0x00000000, false)
//黑苗士兵甲：
//哼！我说咧～几百年来黑苗、
//白苗两族一向水火不容，而
//白苗族的人竟然会让他们的
//大祭司嫁给我们大王
//现在想起来，这一定是白苗
//族的兵力比不过我们，於是
//使出这种阴毒的计谋

[Event_00235_00002_Trigger]
//黑苗士兵乙：
//快去王宫集合！
ReplaceAndPause()
//黑苗士兵乙：
//还有事吗？

[Event_00235_00004_Trigger]
//苗民：
//呜．．．该死的水灾
//我的家当全泡水了

[Event_00235_00005_Trigger]
//苗女：
//打从我出娘胎以来
//从没见过这麽大的洪水
//整个南绍除了王宫以外
//都被淹没了

[Event_00235_00006_Trigger]
//苗民：
//这是天谴！一定是有人冒犯了
//天神，天神要来惩罚我们的
//听说～王后就是罪魁祸首
//是她使的妖术！

[Event_00235_00007_Trigger]
SetDlgLower(0, 0x00000000, false)
//苗女：
//听说从前王后还是白苗族祭司
//的时候，曾使呼风唤雨的咒术
//现在我们的国家变成这样，一
//定是她搞的把戏！
//我就知道白苗族的人全都不是
//好东西，王后一定是他们派来
//的间谍，用美色来迷惑大王
//让我们的国家灭亡後，白苗族
//就可以并吞我们

[Event_00235_00008_Trigger]
SetDlgLower(0, 0x00000000, false)
//苗女：
//哎．．自从洪水来犯後
//族人们都人心惶惶
VideoRestore()
//听说大王下令将境内的汉人
//全部抓起来了，不知道要做
//什麽耶

[Event_00235_00009_Trigger]
//小孩：
//哗～　你看！好多水喔

[Event_00235_00010_Trigger]
//小孩：
//大人都说巫后娘娘是坏妖女
//可是．．娘娘一向对我们
//很好呀！

[Event_00235_00011_Trigger]
SetDlgLower(0, 0x00000000, false)
//苗民：
//我们苗人一向非常重视树木
//每户人家若是生了一个男孩
//就得到山上种一百株树，等
//到这孩子要娶老婆时，才能
//上山砍下这些树来盖新房子
//要是违反这禁忌，可是会触
//怒山神的。万一山神生气了
//会用山崩和洪水来惩罚我们
//可是那些外地来的汉族商人
//就很乱来，随便砍伐我们的
//树林，讲也讲不听！

[Event_00235_00012_Trigger]
//小孩：
//我阿爹是英勇的战士
//他要把可恶的汉人赶出苗疆！

[Event_00235_00013_Trigger]
//小孩：
//这麽大的洪水，不知道
//有没有人被淹死喔

[Event_00235_00014_Trigger]
//苗女：
//幸亏教主神通广大，事先警告
//大家避难，才没有人被淹死

[Event_00235_00015_Trigger]
//苗女：
//我们族人都信奉拜月教，可是
//汉人都说他们的神明比较伟大
//什麽佛祖啦、玉帝啦～
//说我们拜的都只是一些地缚灵

[Event_00235_00016_Trigger]
//苗女：
//听说王宫里出了大事啦
//王后被关起来了，而
//小公主下落不明

[Event_00235_00017_Trigger]
//苗民：
//水呀～水呀！　我痛恨水啊！

[Event_00229_00003_Auto]
NPCMoveToBlock(38, 51, 0, 2, true)

[Event_00229_00004_Auto]
NPCMoveToBlock(38, 50, 0, 3, false)
NPCMoveToBlock(37, 49, 0, 3, false)
NPCSetDirFrame(3, 0)

[Event_00229_00005_Auto]
NPCMoveToBlock(39, 51, 0, 3, false)
NPCMoveToBlock(40, 52, 0, 3, false)
NPCSetDirFrame(1, 0)

[Scr_0x8CA6]
NPCSetDirFrame(3, 0)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(8, false, false)
NPCMoveToBlock(36, 50, 1, 2, true)
NPCMoveToBlock(36, 51, 0, 2, true)
NPCSetDirFrame(3, 0)

[Event_00229_00024_Trigger]
EventSetState(-1, -1, false, false)
PartyWalkToBlock(31, 60, 0, 8)
PartyWalkToBlock(32, 59, 0, 2)
ViewportMove(8, -4, 14)
SetDlgUpper(0, 0x00000000, false)
//石长老：
//你们聚集在这里想做什麽？
//这里是王宫，你们想造反吗？
VideoUpdate(0, false)
Call(Scr_0x8FCF, 0, 0)
SetDlgLower(0, 0x00000000, false)
//众士兵：
//　我们要见教主！
VideoUpdate(0, false)
Call(Scr_0x8FDC, 0, 0)
EventSetAutoScript(229, 6, Scr_0x8CA6)
WaitEventAutoScriptRun(5, false, false)
EventSetState(229, 3, true, true)
EventSetState(229, 4, true, true)
EventSetState(229, 5, true, true)
ViewportMove(2, -1, 32)
WaitEventAutoScriptRun(24, false, false)
Call(Scr_0x8FCF, 0, 0)
SetDlgLower(0, 0x00000000, false)
//众士兵：
//教主英明！教主万岁！
VideoUpdate(0, false)
Call(Scr_0x8FDC, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(43-1-1, 0x00000000, false)
//拜月教主：
//各位！　我们的国家、我们
//的人民，正面临着一场劫难
VideoRestore()
//我们的城楼淹没在洪水之中
//我们的族人已经无家可归
//我们的耕地化为一片泽国
//这些～都是谁造成的！？
VideoUpdate(0, false)
Call(Scr_0x8FCF, 0, 0)
SetDlgLower(0, 0x00000000, false)
//众士兵：
//是蛇妖女！！
VideoUpdate(0, false)
Call(Scr_0x8FDC, 0, 0)
SetDlgUpper(43-1-1, 0x00000000, false)
//拜月教主：
//国之将亡、必有妖孽
//历代先祖亡灵降坛昭示於我
//南绍王国数百基业将毁於一
//妖女之手，我们若再不有所
//行动，黑苗族将会遭到灭亡
//的命运！而我们的一国之主
//却受美色所惑，迟迟不肯下
//令处死那妖女。这样下去，
//先祖亡灵的愤怒无法平息
//我们将会面临更大的灾难
VideoRestore()
//本人身为大祭师，又是你们
//的教主，有这义务负起责任
//拯救我们的社稷！
VideoUpdate(0, false)
Call(Scr_0x8FCF, 0, 0)
SetDlgLower(0, 0x00000000, false)
//众士兵：
//教主英明！！教主万岁！！
VideoUpdate(0, false)
Call(Scr_0x8FDC, 0, 0)
SetDlgUpper(43-1-1, 0x00000000, false)
//拜月教主：
//请各位弟兄务必支持我
//杀妖孽、清君侧！
VideoRestore()
//今天一定要大王下令当众处死
//巫后，所有站在巫后那边的人
//也全都要铲除！
VideoUpdate(0, false)
Call(Scr_0x8FCF, 0, 0)
SetDlgLower(0, 0x00000000, false)
//众士兵：
//　杀！　杀！　杀！
EventSetAutoScript(229, 6, Scr_0x8D32)
WaitEventAutoScriptRun(3, false, false)
Call(Scr_0x8FDC, 0, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(0, 0x00000000, false)
//石长老：
//教主！　这样做是犯上啊！
//大王纵然有所不是，毕竟是
//我们的大王啊。　带兵包围
//王宫更不是大臣所应为！
VideoUpdate(0, false)
SetDlgUpper(43-1-1, 0x00000000, false)
//拜月教主：
//要救国家，就要用非常的手段
//这时候墨守成规，就不是忠臣
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//石长老：
//　但是．．
VideoUpdate(0, false)
SetDlgUpper(43-1-1, 0x00000000, false)
//拜月教主：
//石长老，这件事你不必管
//一切後果由我承担！
EventSetAutoScript(229, 3, Scr_0x8D37)
WaitEventAutoScriptRun(10, false, false)
EventSetAutoScript(229, 11, Scr_0x8D3A)
EventSetAutoScript(229, 12, Scr_0x8D40)
WaitEventAutoScriptRun(0, false, false)
EventSetAutoScript(229, 13, Scr_0x8D43)
EventSetAutoScript(229, 14, Scr_0x8D46)
EventSetAutoScript(229, 15, Scr_0x8D49)
WaitEventAutoScriptRun(0, false, false)
EventSetAutoScript(229, 16, Scr_0x8D4E)
WaitEventAutoScriptRun(0, false, false)
EventSetAutoScript(229, 17, Scr_0x8D51)
WaitEventAutoScriptRun(0, false, false)
EventSetAutoScript(229, 18, Scr_0x8D55)
EventSetAutoScript(229, 19, Scr_0x8D58)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(229, 6, 0, 0)
WaitEventAutoScriptRun(6, false, false)
EventSetDirFrame(229, 6, 1, 0)
WaitEventAutoScriptRun(10, false, false)
EventSetDirFrame(229, 6, 0, 0)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(229, 6, 3, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetAutoScript(229, 6, Scr_0x8D35)
WaitEventAutoScriptRun(6, false, false)
ViewportMove(-4, 2, 44)

[Scr_0x8D32]
NPCMoveToBlock(37, 52, 0, 3, false)
NPCSetDirFrame(2, 0)

[Scr_0x8D35]
NPCMoveToBlock(42, 47, 0, 2, true)

[Scr_0x8D37]
NPCMoveToBlock(42, 47, 0, 2, true)
EventSetState(-1, -1, false, false)

[Scr_0x8D3A]
NPCMoveToBlock(36, 56, 0, 3, false)
NPCMoveToBlock(38, 53, 1, 3, false)
NPCMoveToBlock(38, 53, 0, 3, false)
NPCMoveToBlock(42, 49, 0, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x8D40]
NPCMoveToBlock(42, 48, 0, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x8D43]
NPCMoveToBlock(42, 46, 0, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x8D46]
NPCMoveToBlock(42, 47, 0, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x8D49]
NPCMoveToBlock(37, 54, 1, 3, false)
NPCMoveToBlock(37, 54, 0, 3, false)
NPCMoveToBlock(42, 49, 0, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x8D4E]
NPCMoveToBlock(42, 48, 0, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x8D51]
NPCMoveToBlock(33, 58, 0, 3, false)
NPCMoveToBlock(42, 49, 0, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x8D55]
NPCMoveToBlock(42, 48, 0, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x8D58]
NPCMoveToBlock(33, 56, 0, 3, false)
NPCMoveToBlock(42, 47, 0, 3, false)
EventSetState(-1, -1, false, false)

[Event_00236_00045_Auto]
NPCMoveToBlock(49, 90, 1, 2, true)
NPCMoveToBlock(27, 68, 1, 2, true)
NPCMoveToBlock(30, 66, 0, 2, true)
EventSetState(-1, -1, false, false)

[Event_00236_00046_Auto]
NPCMoveToBlock(29, 90, 0, 2, true)
NPCMoveToBlock(25, 94, 0, 2, true)
GotoWithProbability(10, Null)
NPCSetDirFrame(1, 0)
GotoWithProbability(8, Null)
NPCSetDirFrame(0, 0)
NPCSetDirFrame(3, 0)
GotoWithProbability(10, Null)
NPCMoveToBlock(29, 90, 0, 2, true)
NPCMoveToBlock(36, 97, 0, 2, true)
NPCMoveToBlock(31, 102, 0, 2, true)
NPCMoveToBlock(35, 106, 1, 2, true)
NPCMoveToBlock(43, 99, 0, 2, true)
NPCMoveToBlock(39, 95, 0, 2, true)

[Event_00236_00007_Auto]
GotoWithProbability(40, Null)
EventModifyPos(-1, -1, 0, 1)
WaitEventAutoScriptRun(6, false, false)
EventModifyPos(-1, -1, 0, -1)
GotoWithProbability(50, Null)
WaitEventAutoScriptRun(6, false, false)
ReplaceAndPauseWithNop(Event_00236_00007_Auto, 0)

[Event_00237_00007_Trigger]
EventSetState(-1, -1, false, false)
EventSetDirFrame(237, 6, 0, 0)
VideoUpdate(0, false)
//守卫：
//这里是牢房重地
//你跑进来做什麽？
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//我～我奉了大王的命令
//要传话给巫后娘娘
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//守卫：
//喔．．你进去吧！
RoleSetDirFrame(0, 3, 0)

[Event_00228_00005_Auto]
WaitEventAutoScriptRun(3, false, false)
NPCMoveToBlock(42, 62, 0, 2, true)
NPCMoveToBlock(43, 63, 1, 2, true)

[Event_00228_00003_Trigger]
EventSetTriggerMode(-1, -1, false, 2)
RoleSetDirFrame(0, 1, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//您是．．．巫后娘娘吗？
EventSetDirFrame(228, 4, 0, 1)
WaitEventAutoScriptRun(7, false, false)
EventSetDirFrame(228, 4, 0, 2)
VideoUpdate(0, false)
//巫后：
//．．．．．．．
VideoUpdate(0, false)
//李逍遥：
//娘娘～外头有许多人要
//逼你们大王处死你呢！
//我想办法放你出来，您
//赶紧逃命吧！
EventSetDirFrame(228, 4, 0, 1)
VideoUpdate(0, false)
//巫后：
//你的好意我心领了．．
//我不能走，我要留在这里
//我若逃走，不就证明我就是
//如他们所说的亡国妖女吗？
//如果我的性命可以换回这个
//国家的和平，那麽．．我的
//死也是值得的
VideoUpdate(0, false)
//李逍遥：
//留得青山在总比没命好吧
//您若牺牲了，您的冤情谁
//来替您洗清呢？
VideoUpdate(0, false)
//巫后：
//我只希望我的女儿能平安
//就好，其它的都不重要了
VideoUpdate(0, false)
//李逍遥：
//对了～我在城外的路上遇见
//一群士兵在追杀一位老妇人
//她身边还带着小公主．．
EventSetDirFrame(228, 4, 0, 2)
VideoUpdate(0, false)
//巫后：
//你说什麽！？
EventSetDirFrame(228, 4, 0, 1)
VideoUpdate(0, false)
EventSetState(228, 4, false, false)
EventSetState(229, 0, true, true)
WaitEventAutoScriptRun(8, false, false)
PartyWalkToBlock(45, 65, 1, 2)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(30, false, false)
SetDlgLower(38-1-1, 0x00000000, false)
//巫后：
//後来呢？她们逃走了吗？
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//要不是我替她们挡了一阵
//让她们骑着凤凰逃走，不然
//她们差一点就被杀害了
VideoRestore()
//娘娘～　您有没有想过
//您一人牺牲了不要紧，但是
//许多您身边的人呢？谁来救
//她们？
VideoUpdate(0, false)
SetDlgLower(38-1-1, 0x00000000, false)
//巫后：
//年轻人．．．你究竟是．．？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//您别管我是谁，只要您相信
//我是来帮助您的就行了
VideoUpdate(0, false)
SetDlgLower(38-1-1, 0x00000000, false)
//巫后：
//好吧．．你放心
//我不会白白送死的
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//太好了～
//我立刻砍断这门锁救您出来
//然後咱们一块趁乱杀出去
VideoUpdate(0, false)
SetDlgLower(38-1-1, 0x00000000, false)
//巫后：
//且慢～现在还不能打草惊蛇
//大王为了禁止我再使用法术
//而将我的法杖没收，锁在王
//宫的地下宫殿中
VideoRestore()
//请你先替我取回我的"天蛇杖"
//只要我的法力一恢复，这座
//牢房根本关不住我的
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//好．．我去
VideoUpdate(0, false)
SetDlgLower(38-1-1, 0x00000000, false)
//巫后：
//负责守护地下宫殿的是石长老
//如果你遇见他，你只要告诉他
//是青儿找你来摘一朵莲花的
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//青儿．．摘莲花．．？
VideoUpdate(0, false)
SetDlgLower(38-1-1, 0x00000000, false)
//巫后：
//只要你报上这句话
//长老应该不会为难你的
EventSetTriggerScript(243, 3, Scr_0x90E9)
ReplaceAndPause()
[Scr_0x8E07]
JumpIfItemCountLessThan(135, 1, Scr_0x8E0F)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//娘娘～我拿到天蛇杖了
RemoveItem(135, 1, Null)
FadeOut(0)
SceneEnter(234)

[Scr_0x8E0F]
SetDlgLower(38-1-1, 0x00000000, false)
//巫后：
//壮士．．请小心．．
ReplaceAndPauseWithNop(Scr_0x8E07, 0)

[Scene_00234_Enter]
PartySetPos(44, 68, 0)
PartySetRole(14)
RoleSetDirFrame(0, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//李逍遥：
//娘娘．．有件事
//我不知道该不该问
VideoUpdate(0, false)
SetDlgLower(38-1-1, 0x00000000, false)
//巫后：
//你有什麽要求就说吧
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//李逍遥：
//不～我并不想要求报酬
//而是想问您．．
//．．您还爱巫王吗？
RoleSetDirFrame(0, 3, 1)
VideoUpdate(0, false)
SetDlgLower(38-1-1, 0x00000000, false)
//巫后：
//．．．．．．
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//李逍遥：
//您不便回答那就算了
VideoUpdate(0, false)
SetDlgLower(38-1-1, 0x00000000, false)
//巫后：
//我仍然像当初一样爱着他．．
//不管他今天对我们母子做了
//什麽，毕竟～他给了我这八
//年来幸福快乐的日子．．
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//李逍遥：
//我想你丈夫不至於那麽绝情
//才是。那什麽教主的不是好
//东西，我猜都是他在搞鬼
VideoRestore()
//找机会我一定想办法揭穿他
//的阴谋，还您的清白。让你
//们一家人团聚
VideoUpdate(0, false)
SetDlgLower(38-1-1, 0x00000000, false)
//巫后：
//唉．．你的好意我心领
//我自己不敢抱这种希望了

[Scr_0x8E46]
NPCMoveToBlock(35, 70, 0, 2, true)

[Scr_0x8E48]
NPCMoveToBlock(34, 69, 0, 4, true)

[Scr_0x8E4A]
NPCMoveToBlock(36, 70, 0, 3, false)
NPCSetDirFrame(0, 0)

[Scr_0x8E4D]
NPCMoveToBlock(35, 70, 1, 2, true)
NPCSetDirFrame(3, 0)

[Scr_0x8E50]
NPCMoveToBlock(37, 72, 0, 3, false)

[Scr_0x8E52]
NPCMoveToBlock(35, 69, 0, 3, false)

[Scr_0x8E54]
NPCMoveToBlock(38, 72, 1, 3, false)

[Scr_0x8E56]
NPCMoveToBlock(34, 71, 0, 3, false)

[Scr_0x8E58]
NPCMoveToBlock(37, 74, 0, 3, false)

[Scr_0x8E5A]
EventAnimate(-1, 0)
ReplaceAndPauseWithNop(Scr_0x8E5A, 6)
EventAnimate(-1, 0)
PlaySound(261)
[Scr_0x8E5E]
EventAnimate(-1, 0)
ReplaceAndPauseWithNop(Scr_0x8E5E, 6)

[Event_00234_00006_Trigger]
EventSetState(-1, -1, false, false)
PartyWalkToBlock(39, 72, 0, 8)
PartyWalkToBlock(37, 74, 0, 8)
PartyWalkToBlock(36, 73, 1, 8)
SetDlgUpper(0, 0x00000000, false)
//站住．．！
RoleSetDirFrame(1, 1, 0)
EventSetAutoScript(234, 2, Scr_0x8E46)
ViewportMove(-2, -1, 24)
SetDlgLower(38-1-1, 0x00000000, false)
//巫后：
//大王．．．
VideoUpdate(0, false)
SetDlgUpper(36-2-1, 0x00000000, false)
//巫王：
//青儿．．你真的要背叛我吗？
VideoUpdate(0, false)
SetDlgLower(38-1-1, 0x00000000, false)
//巫后：
//大王～您误会臣妾了
VideoUpdate(0, false)
SetDlgUpper(36-2-1, 0x00000000, false)
//巫王：
//他们都说～你不是人、而是妖
//你说，我该不该相信你呢？
SetDlgLower(38-1-1, 0x00000000, false)
//巫后：
//臣妾．．臣妾对大王的
//忠心天地可表，神人共监
//臣妾绝无害大王之心啊！
EventSetAutoScript(234, 3, Scr_0x8E4A)
WaitEventAutoScriptRun(16, false, false)
SetDlgUpper(43-1-1, 0x00000000, false)
//拜月教主：
//大王！不必听她狡辩
//事实证明一切
EventSetDirFrame(234, 3, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(43-1-1, 0x00000000, false)
//拜月教主：
//属下就让她在您面前现
//出原形，让她伏首认罪！
VideoUpdate(0, false)
SetDlgUpper(36-2-1, 0x00000000, false)
//巫王：
//．．．．．．．．
EventSetDirFrame(234, 2, 0, 0)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(234, 2, 1, 0)
WaitEventAutoScriptRun(3, false, false)
SetDlgUpper(0, 0x00000000, false)
//巫王：
//你动手吧！
EventSetAutoScript(234, 2, Scr_0x8E48)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(234, 3, 0, 0)
WaitEventAutoScriptRun(4, false, false)
MusicPlay(26, true, 0.00)
EventSetAutoScript(234, 3, Scr_0x8E4D)
EventSetAutoScript(234, 4, Scr_0x8E52)
EventSetAutoScript(234, 5, Scr_0x8E56)
WaitEventAutoScriptRun(16, false, false)
SetDlgLower(0, 0x00000000, false)
//巫后：
//大王．．！！
VideoUpdate(0, false)
EventSetDirFrame(234, 3, 0, 12)
VideoUpdate(0, false)
SetDlgUpper(43-1-1, 0x00000000, false)
//拜月教主：
//妖女！现出原形吧！
PlaySound(175)
FadeColor(2, 79, false)
HeroSetSprite(0, 2, false)
PartySetRole(1)
EventSetState(235, 0, true, false)
VideoUpdate(0, false)
FadeColor(2, 79, true)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//哇呀～　！！(
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(234, 3, 3, 0)
PartyWalkToBlock(37, 72, 1, 4)
HeroSetSprite(0, 232, true)
RoleSetDirFrame(0, 0, 0)
EventSetDirFrame(235, 0, 0, 1)
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//你们想动她，先过我这一关！
VideoUpdate(0, false)
SetDlgUpper(43-1-1, 0x00000000, false)
//拜月教主：
//小子，你算哪根葱？
EventSetDirFrame(235, 0, 0, 2)
WaitEventAutoScriptRun(3, false, false)
EventSetDirFrame(235, 0, 0, 3)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//巫后：
//你敌不过他们的，快跟我走！
EventSetAutoScript(235, 0, Scr_0x8E5A)
WaitEventAutoScriptRun(4, false, false)
EventSetAutoScript(234, 3, Scr_0x8E50)
EventSetAutoScript(234, 4, Scr_0x8E54)
EventSetAutoScript(234, 5, Scr_0x8E58)
ViewportMove(4, 2, 16)
EventSetState(235, 0, false, false)
WaitEventAutoScriptRun(14, false, false)
FadeOut(0)
SceneEnter(233)

[Scene_00233_Enter]
HeroSetSprite(0, 531, false)
HeroSetSprite(3, 576, false)
PartySetRole(41)
RoleSetDirFrame(0, 3, 0)
PartySetPos(10, 23, 1)
VideoWave(2, 0)
MusicPlay(82, true, 0.00)

[Event_00233_00004_Trigger]
EventSetState(-1, -1, false, false)
WaitEventAutoScriptRun(0, false, true)
EventSetState(233, 3, true, false)
FadeToScene(-1, 0)
SetDlgLower(43-1-1, 0x00000000, false)
//拜月教主：
//哈哈哈～想水遁？
//你们就等着变成我的
//水魔兽的饵食吧！
VideoUpdate(0, false)
EventSetState(233, 2, true, false)
PlaySound(212)
FadeToScene(-1, 2)
RoleSetDirFrame(1, 1, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(5, false, false)
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
SetDlgUpper(38-1-1, 0x00000000, false)
//巫后：
//你．．！
//你竟然真的在培养邪魔兽？
//你可知道这会召来多麽严重
//的灾祸吗！？
VideoUpdate(0, false)
SetDlgLower(43-1-1, 0x00000000, false)
//拜月教主：
//只不过引来小小的洪水罢了
//这点损失根本不算什麽
//更何况，全族的人都相信
//你就是那兴风作浪的妖孽
//为了平息天神的愤怒
//你只有一死！
VideoUpdate(0, false)
SetDlgUpper(38-1-1, 0x00000000, false)
//巫后：
//果然～
//这一切都是你算计好的！？
VideoUpdate(0, false)
SetDlgLower(43-1-1, 0x00000000, false)
//拜月教主：
//呵呵～这就要怪你不是人类
//没有人会相信一只蛇妖的话
VideoRestore()
//哈哈哈．．．
EventSetState(233, 3, false, false)
PlaySound(217)
FadeToScene(-1, 2)
SetBattlefield(64)
SetBattleMusic(45)
BattleStart(315, Scr_0x9C9B, Null)
SetBattleMusic(39)
SetBattlefield(4)
BattleEnd()
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(8, false, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//这丑家伙还在动！？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//巫后：
//水魔兽遇水则生
//只在水中牠就是不死之身
//不管把牠砍成几截也没用
VideoUpdate(0, false)
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//哇．．那只有逃啦！(

[Event_00233_00002_Auto]
NPCChase(2, 128)
ReplaceAndPauseWithNop(Event_00233_00002_Auto, 0)

[Scr_0x8F28]
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
EventModifyPos(-1, -1, 1, 0)
EventModifyPos(-1, -1, -1, 0)
EventModifyPos(-1, -1, 1, 0)
EventModifyPos(-1, -1, -1, 0)
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
EventModifyPos(-1, -1, 1, 0)
EventModifyPos(-1, -1, -1, 0)
EventModifyPos(-1, -1, 1, 0)
EventModifyPos(-1, -1, -1, 0)
ReplaceAndPauseWithNop(Scr_0x8F28, 4)
EventSetTriggerMode(-1, -1, true, 3)
[Event_00231_00002_Auto]
NPCChase(4, 128)
GotoWithProbability(4, Event_00231_00002_Auto)
WaitEventAutoScriptRun(10, false, false)
ReplaceAndPauseWithNop(Event_00231_00002_Auto, 0)

[Event_00231_00002_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
EventSetAutoScript(-1, -1, Scr_0x8F28)
SetBattleMusic(38)
BattleStart(315, Scr_0x9C9B, Null)
SetBattleMusic(39)

[Event_00231_00004_Trigger]
EventSetState(-1, -1, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetState(231, 2, false, false)
EventSetState(231, 3, true, false)
FadeToScene(-1, 0)
RoleSetDirFrame(1, 2, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//可恶～无路可逃了！
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//巫后：
//你退开～　我来对付牠！
[Scr_0x8F5A]
RoleMoveOneStep(16, -8, 0)
WaitEventAutoScriptRun(0, false, false)
GotoWithNop(Scr_0x8F5A, 3)
SetDlgLower(38-1-1, 0x00000000, false)
//巫后：
//年轻人～虽然我还不知道你
//的姓名，但是．．希望你能
//答应我．．
VideoRestore()
//日後～如果你遇到我的女儿
//请你能代我好好照顾她．．
RoleSetDirFrame(0, 3, 0)
VideoUpdate(0, false)
RoleSetDirFrame(0, 0, 12)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//巫后：
//　去吧！
VideoUpdate(0, false)
PartySetRole(4)
RoleSetDirFrame(0, 0, 12)
EventSetState(231, 5, true, false)
EventSetState(231, 6, true, false)
PlaySound(103)
WaitEventAutoScriptRun(20, false, false)
EventSetAutoScript(231, 6, Event_00231_00005_Auto)
WaitEventAutoScriptRun(4, false, false)
EventSetAutoScript(231, 3, Event_00233_00002_Auto)
WaitEventAutoScriptRun(5, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(22, false, false)
EventSetState(231, 5, true, false)
EventSetState(231, 6, false, false)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//巫后：
//妖孽！你我原本都不该存在这
//世上，与我一同化为尘土吧！
FadeColor(4, 127, false)
SceneEnter(232)

[Scene_00232_Enter]
MusicStop()
PartySetPos(16, 91, 1)
HeroSetSprite(0, 193, false)
PartySetRole(1)
RoleSetDirFrame(0, 0, 8)
VideoUpdate(0, false)
FadeColor(0, 127, true)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 0, 9)
WaitEventAutoScriptRun(2, false, false)
EventSetState(232, 1, true, false)
PlaySound(175)
FadeToScene(-1, 0)
EventSetDirFrame(232, 1, 0, 1)
FadeToScene(-1, 2)
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(8, false, false)
PlaySound(192)
EventSetDirFrame(232, 1, 0, 2)
FadeToScene(-1, 4)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//娘娘．．．？！
EventSetState(233, 0, true, false)
WaitEventAutoScriptRun(14, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(4, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(2, false, false)

[Event_00232_00002_Auto]
EventWalkOneStep(-1, -1, 6, 4)
EventModifyPos(-1, -1, 6, 4)
GotoWithNop(Event_00232_00002_Auto, 9)
EventWalkOneStep(-1, -1, 4, 2)
EventModifyPos(-1, -1, 2, 1)
EventSetTriggerMode(-1, -1, true, 3)
[Scr_0x8FAA]
EventAnimate(-1, 0)
ReplaceAndPause()
GotoWithNop(Scr_0x8FAA, 0)

[Event_00232_00002_Trigger]
EventSetTriggerMode(-1, -1, false, 0)
HeroSetSprite(0, 541, true)
RoleSetDirFrame(0, 0, 0)
RoleMoveOneStep(0, 0, 9)
RideNPCToPos(45, 120, 0, 8)
FadeOut(0)
SceneEnter(247)

[Event_00231_00005_Auto]
EventWalkOneStep(-1, -1, 0, -1)
EventWalkOneStep(-1, -1, 0, -1)
EventWalkOneStep(-1, -1, 0, -2)
EventWalkOneStep(-1, -1, 0, -2)
EventWalkOneStep(-1, -1, 0, -3)
EventWalkOneStep(-1, -1, 0, -3)
EventWalkOneStep(-1, -1, 0, -4)
EventWalkOneStep(-1, -1, 0, -4)
[Scr_0x8FBE]
EventWalkOneStep(-1, -1, 0, -5)
GotoWithNop(Scr_0x8FBE, 0)

[Event_00229_00020_Trigger]
//士兵：
//东张西望贼头贼脑的干什麽？
//快去前面集合！

[Event_00229_00021_Trigger]
//士兵：
//站王宫门口的卫兵真是辛苦

[Event_00229_00022_Trigger]
//士兵：
//看什麽？　有什麽好看的？

[Event_00229_00023_Trigger]
//士兵：
//今天雨终於停了
//前些日子下的大雨真是可怕呀

[Scr_0x8FCF]
EventSetDirFrame(229, 11, 0, 12)
EventSetDirFrame(229, 12, 0, 12)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(229, 13, 0, 12)
EventSetDirFrame(229, 14, 0, 12)
EventSetDirFrame(229, 15, 0, 12)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(229, 16, 0, 12)
EventSetDirFrame(229, 17, 0, 12)
EventSetDirFrame(229, 18, 0, 12)
EventSetDirFrame(229, 19, 0, 12)
VideoUpdate(0, false)

[Scr_0x8FDC]
EventSetDirFrame(229, 18, 2, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(229, 13, 2, 0)
EventSetDirFrame(229, 19, 2, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(229, 11, 2, 0)
EventSetDirFrame(229, 12, 2, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(229, 14, 2, 0)
WaitEventAutoScriptRun(0, false, false)
EventSetDirFrame(229, 15, 2, 0)
EventSetDirFrame(229, 16, 2, 0)
EventSetDirFrame(229, 17, 2, 0)
WaitEventAutoScriptRun(0, false, false)

[Event_00229_00004_Trigger]
//士兵：
//教主万岁！

[Event_00229_00005_Trigger]
//士兵：
//教主万岁！

[Event_00229_00007_Trigger]
//士兵：
//这座王宫是先王所建
//已经有五十年历史了

[Event_00229_00008_Trigger]
//士兵：
//要进去就赶快进去
//别在这逗留！

[Event_00229_00009_Trigger]
//士兵：
//下一班卫兵什麽时候来换班啊
//我也想跟进去看热闹

[Event_00229_00010_Trigger]
//士兵：
//唉．．希望别出乱子才好
VideoRestore()
//喂～你是站在哪一边的？
//听说替王后讲话的人，都要
//被拜月教徒视为乱党而杀害

[Event_00236_00045_Trigger]
//士兵：
//哈哈～真是大快人心，这些
//外来的汉狗仗着他们是天朝
//子民，一直欺压我们苗人
VideoRestore()
//教主一声令下，把汉人通通
//抓起来，不愿归化入黑苗族
//者就通通处死，归化者可免
//一死，然後下放成为奴隶

[Event_00236_00046_Trigger]
//士兵：
//别跟汉人做生意，他们最
//奸诈了。上次有个外地来的
//汉人用一箱假的黄金骗走我
//全部的田产
//这回我可逮着机会，逼他全
//家做奴隶，夺回我的土地！

[Event_00236_00039_Trigger]
//刽子手：
//砍头是我最拿手的
//我一天可以砍一百二十个
//人头，手还不会酸呢

[Event_00236_00025_Trigger]
//刽子手：
//一天之内要杀那麽多人
//我都有点手软了

[Event_00236_00037_Trigger]
//士兵：
//革命就要流血！
//当然～要流血的是汉人
//要生存下去的是我们

[Event_00236_00038_Trigger]
//士兵：
//南绍城内外的汉人不是逃走
//就是都被抓来了，几乎一个
//都不剩

[Event_00236_00040_Trigger]
//士兵：
//教主下令女人小孩也不能放过
//这就有点残忍了．．

[Event_00236_00041_Trigger]
//士兵：
//这些汉人还真不识好歹
//在脸上刺个青，当了奴隶
//就可以保住性命，却不要

[Event_00236_00042_Trigger]
//士兵：
//黑苗族的士兵之中，大多数人
//信仰拜月教，这任杨教主又身
//兼大祭司，所以他的势力相当
//的大，大王也要敬他三分

[Event_00236_00043_Trigger]
//士兵：
//我们也不想屠杀汉人
//但是上面的命令如此
//我们是军人，必需听命

[Event_00236_00044_Trigger]
//士兵：
//这王宫变成血淋淋的屠宰场了

[Event_00236_00026_Trigger]
//汉人俘虏：
//呜．．．我不要死

[Event_00237_00004_Trigger]
//王宫卫兵：
//要见大王吗？
//自己进去吧，别来烦我们！
VideoRestore()
//虽然我也是拜月教徒
//但王后娘娘一向对王宫内的
//下人很好，我觉得她并不坏
//所以我不站在任何一边

[Event_00237_00005_Trigger]
//王宫卫兵：
//真是没王法了，拜月教主
//带着一堆士兵人拿着兵器
//跑进王宫来，根本不把大
//王看在眼里
//他们已经逼得大王将巫后
//娘娘打入大牢了还不满足
//难道非要逼死娘娘不可吗？
//到底娘娘哪里得罪拜月教了
//就算娘娘不是人类又怎麽样
//她的为人是大家有目共赌的

[Event_00237_00006_Trigger]
//王宫卫兵：
//听说娘娘是半人半蛇的妖女
//不知道这是真的还是假的
//搞不好是拜月教捏造的罪名
VideoRestore()
//唉．．就算大王把娘娘囚禁
//起来，还是无法平息众怒的
VideoRestore()
//照这情形看来，恐怕必需大
//王下令处死娘娘，才能平息
//这场动乱．．

[Event_00238_00002_Trigger]
PartyWalkToBlock(27, 96, 0, 8)
RoleSetDirFrame(0, 3, 0)
[Scr_0x9066]
RoleMoveOneStep(8, 8, 0)
WaitEventAutoScriptRun(0, false, false)
GotoWithNop(Scr_0x9066, 3)
[Scene_00230_Teleport]
SceneEnter(230)
PartySetPos(10, 43, 1)
FadeOut(0)

[Event_00230_00001_Trigger]
RoleSetDirFrame(0, 1, 0)
[Scr_0x906E]
RoleMoveOneStep(-8, -8, 0)
WaitEventAutoScriptRun(0, false, false)
GotoWithNop(Scr_0x906E, 4)
SceneEnter(238)
PartySetPos(26, 95, 1)
FadeOut(0)

[Event_00230_00002_Trigger]
PartyWalkToBlock(32, 43, 1, 8)
WaitEventAutoScriptRun(0, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(0, false, false)
HeroSetSprite(0, 232, true)
RoleSetDirFrame(0, 0, 0)
EventSetDirFrame(230, 3, 0, 1)
WaitEventAutoScriptRun(2, false, false)
EventSetAutoScript(230, 3, Event_00021_00011_Auto)
PlaySound(155)
WaitEventAutoScriptRun(16, false, false)
FadeOut(0)
EventSetDirFrame(230, 3, 0, 0)
EventSetAutoScript(230, 3, Null)
HeroSetSprite(0, 563, true)
RoleSetDirFrame(0, 2, 0)
[Scene_00242_Teleport]
SceneEnter(242)
PartySetPos(15, 91, 1)

[Event_00242_00001_Trigger]
SceneEnter(230)
PartySetPos(31, 44, 1)
FadeOut(0)

[Event_00230_00004_Trigger]
SceneEnter(241)
PartySetPos(50, 99, 0)
FadeOut(0)

[Event_00241_00001_Trigger]
SceneEnter(230)
PartySetPos(27, 32, 0)
FadeOut(0)

[Event_00230_00005_Trigger]
SceneEnter(241)
PartySetPos(41, 108, 0)
FadeOut(0)

[Event_00241_00002_Trigger]
SceneEnter(230)
PartySetPos(21, 38, 0)
FadeOut(0)

[Event_00230_00006_Trigger]
SceneEnter(241)
PartySetPos(21, 43, 1)
FadeOut(0)

[Event_00241_00003_Trigger]
SceneEnter(230)
PartySetPos(36, 31, 1)
FadeOut(0)

[Event_00230_00007_Trigger]
SceneEnter(241)
PartySetPos(29, 51, 0)
FadeOut(0)

[Event_00230_00008_Trigger]
SceneEnter(241)
PartySetPos(36, 65, 1)
FadeOut(0)

[Event_00241_00004_Trigger]
SceneEnter(230)
PartySetPos(50, 45, 1)
FadeOut(0)

[Event_00242_00002_Trigger]
SceneEnter(243)
PartySetPos(54, 104, 1)
FadeOut(0)

[Event_00243_00001_Trigger]
SceneEnter(242)
PartySetPos(28, 59, 1)
FadeOut(0)

[Event_00242_00003_Trigger]
SceneEnter(245)
PartySetPos(30, 117, 1)
FadeOut(0)

[Event_00245_00001_Trigger]
SceneEnter(242)
PartySetPos(35, 59, 1)
FadeOut(0)

[Event_00243_00002_Trigger]
SceneEnter(244)
PartySetPos(53, 98, 0)
FadeOut(0)

[Event_00244_00001_Trigger]
SceneEnter(243)
PartySetPos(10, 24, 1)
FadeOut(0)

[Event_00244_00002_Trigger]
SceneEnter(246)
PartySetPos(19, 53, 1)
FadeOut(0)

[Event_00246_00001_Trigger]
SceneEnter(244)
PartySetPos(22, 40, 1)
FadeOut(0)

[Event_00244_00003_Trigger]
SceneEnter(246)
PartySetPos(35, 69, 0)
FadeOut(0)

[Event_00246_00002_Trigger]
SceneEnter(244)
PartySetPos(30, 48, 0)
FadeOut(0)

[Event_00246_00003_Trigger]
EventSetState(-1, -1, false, false)
EventSetState(243, 3, false, false)
AddItem(135, 0)
VideoUpdate(0, false)
SetDlgBox(0x00000000)
//取得天蛇杖

[Event_00243_00003_Trigger]
SetDlgUpper(0, 0x00000000, false)
//石长老：
//你来这里干什麽？走开！
//这不是小兵该来的地方
RoleSetDirFrame(0, 3, 0)
RoleMoveOneStep(16, 8, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(16, 8, 0)
WaitEventAutoScriptRun(0, false, false)

[Scr_0x90E9]
EventSetTriggerMode(-1, -1, false, 2)
SetDlgUpper(0, 0x00000000, false)
//石长老：
//你来这里干什麽？走开！
//这不是小兵该来的地方
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//您是石长老吗？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//石长老：
//正是老夫，你找我什麽事？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//是青儿找我来摘一朵莲花的
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//石长老：
//哦．．．．
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(3, 0)
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//石长老：
//你进来这里可有被人看见？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//我这一路都很小心
//应该是没有被别人发现
EventSetAutoScript(-1, -1, Scr_0x9122)
WaitEventAutoScriptRun(10, false, false)
SetDlgUpper(0, 0x00000000, false)
//石长老：
//娘娘的蛇杖就放在此地下
//宫殿的尽头。你小心点～
//千万别被教主的手下发现
ReplaceAndPause()
SetDlgUpper(0, 0x00000000, false)
//石长老：
//唉．．原本是桩美好的姻缘
//当初大王大婚的时候，老夫
//还是他们的媒人呢
VideoRestore()
//黑苗族王子和白苗族大祭司
//相识相爱而结成夫妻，两族
//人民化敌为友，举国欢腾
//想不到今天却变成这种结局
ReplaceAndPause()
SetDlgUpper(0, 0x00000000, false)
//石长老：
//你还在这里干什麽？
//东西拿到了就快交给娘娘

[Scr_0x9122]
NPCMoveToBlock(46, 94, 0, 4, true)
NPCSetDirFrame(0, 0)

[Event_00245_00022_Trigger]
EventSetDirFrame(245, 22, 0, 1)
EventSetState(245, 22, true, false)
EventSetState(245, 23, false, false)
EventSetTriggerMode(245, 22, false, 0)

[Event_00245_00024_Trigger]
EventSetDirFrame(245, 24, 0, 1)
EventSetState(245, 24, true, false)
EventSetState(245, 25, false, false)
EventSetTriggerMode(245, 24, false, 0)

[Event_00245_00026_Trigger]
EventSetDirFrame(245, 26, 0, 1)
EventSetState(245, 26, true, false)
EventSetState(245, 27, false, false)
EventSetTriggerMode(245, 26, false, 0)

[Event_00250_00001_Trigger]
PartySetPos(44, 58, 1)
SceneEnter(247)
FadeOut(0)

[Event_00247_00001_Trigger]
PartySetPos(6, 11, 1)
SceneEnter(250)
FadeOut(0)

[Event_00247_00002_Trigger]
SceneEnter(249)
PartySetPos(14, 31, 1)
FadeOut(0)

[Event_00249_00001_Trigger]
SceneEnter(247)
PartySetPos(32, 44, 0)
FadeOut(0)

[Event_00252_00001_Trigger]
SceneEnter(251)
PartySetPos(32, 93, 0)
FadeOut(0)

[Event_00251_00001_Trigger]
SceneEnter(252)
PartySetPos(20, 79, 0)
FadeOut(0)

[Event_00252_00002_Trigger]
SceneEnter(251)
PartySetPos(45, 96, 1)
FadeOut(0)

[Event_00251_00002_Trigger]
SceneEnter(252)
PartySetPos(17, 48, 1)
FadeOut(0)

[Event_00252_00003_Trigger]
SceneEnter(251)
PartySetPos(39, 84, 0)
FadeOut(0)

[Event_00251_00003_Trigger]
SceneEnter(252)
PartySetPos(14, 23, 1)
FadeOut(0)

[Event_00252_00004_Trigger]
SceneEnter(251)
PartySetPos(49, 94, 0)
FadeOut(0)

[Event_00251_00004_Trigger]
SceneEnter(252)
PartySetPos(37, 22, 1)
FadeOut(0)

[Event_00252_00005_Trigger]
SceneEnter(251)
PartySetPos(40, 91, 0)
FadeOut(0)

[Event_00251_00005_Trigger]
SceneEnter(252)
PartySetPos(38, 47, 1)
FadeOut(0)

[Event_00252_00006_Trigger]
SceneEnter(251)
PartySetPos(44, 89, 0)
FadeOut(0)

[Event_00251_00006_Trigger]
SceneEnter(252)
PartySetPos(39, 69, 0)
FadeOut(0)

[Scene_00248_Enter]
PartySetPos(11, 74, 0)
ReplaceAndPause()

[Event_00250_00002_Trigger]
SceneEnter(248)
PartySetPos(10, 73, 1)
FadeOut(0)

[Event_00248_00002_Trigger]
SceneEnter(250)
PartySetPos(55, 118, 1)
FadeOut(0)

[Event_00248_00003_Trigger]
SceneEnter(251)
PartySetPos(32, 104, 1)
FadeOut(0)

[Event_00251_00007_Trigger]
SceneEnter(248)
PartySetPos(38, 38, 1)
FadeOut(0)

[Event_00248_00004_Trigger]
SceneEnter(253)
PartySetPos(21, 102, 1)
FadeOut(0)

[Event_00253_00001_Trigger]
SceneEnter(248)
PartySetPos(39, 61, 0)
FadeOut(0)

[Event_00248_00005_Trigger]
SceneEnter(253)
PartySetPos(19, 66, 1)
FadeOut(0)

[Event_00253_00002_Trigger]
SceneEnter(248)
PartySetPos(31, 72, 0)
FadeOut(0)

[Event_00248_00006_Trigger]
SceneEnter(253)
PartySetPos(21, 31, 0)
FadeOut(0)

[Event_00253_00003_Trigger]
SceneEnter(248)
PartySetPos(46, 86, 1)
FadeOut(0)

[Event_00248_00001_Trigger]
SceneEnter(254)
PartySetPos(7, 102, 1)
FadeOut(0)

[Event_00254_00001_Trigger]
SceneEnter(248)
PartySetPos(51, 72, 1)
FadeOut(0)

[Event_00254_00004_Trigger]
SceneEnter(255)
PartySetPos(19, 75, 0)
FadeOut(0)

[Event_00255_00001_Trigger]
SceneEnter(254)
PartySetPos(18, 106, 1)
FadeOut(0)

[Event_00254_00003_Trigger]
SceneEnter(256)
PartySetPos(21, 37, 1)
FadeOut(0)

[Event_00256_00001_Trigger]
SceneEnter(254)
PartySetPos(20, 78, 0)
FadeOut(0)

[Event_00254_00002_Trigger]
SceneEnter(257)
PartySetPos(21, 55, 0)
FadeOut(0)

[Event_00257_00001_Trigger]
SceneEnter(254)
PartySetPos(12, 84, 0)
FadeOut(0)

[Event_00247_00004_Auto]
EventWalkOneStep(-1, -1, 0, 4)
EventModifyPos(-1, -1, 0, 4)
GotoWithNop(Event_00247_00004_Auto, 15)
EventWalkOneStep(-1, -1, 0, 3)
EventModifyPos(-1, -1, 0, 2)
EventWalkOneStep(-1, -1, 0, 2)
EventModifyPos(-1, -1, 0, 1)
[Scr_0x91C6]
EventAnimate(-1, 0)
ReplaceAndPauseWithNop(Scr_0x91C6, 4)
EventWalkOneStep(-1, -1, 0, -2)
EventModifyPos(-1, -1, 0, -2)
EventWalkOneStep(-1, -1, 0, -3)
EventModifyPos(-1, -1, 0, -3)
EventWalkOneStep(-1, -1, 0, -4)
EventModifyPos(-1, -1, 0, -4)
[Scr_0x91CE]
EventWalkOneStep(-1, -1, 0, -5)
EventModifyPos(-1, -1, 0, -5)
GotoWithNop(Scr_0x91CE, 0)

[Scr_0x91D2]
NPCMoveToBlock(31, 44, 1, 3, false)

[Scr_0x91D4]
NPCMoveToBlock(33, 42, 1, 3, false)
EventSetState(-1, -1, false, false)

[Scene_00247_Enter]
MusicPlay(59, true, 0.00)
SetBattlefield(8)
SetBattleMusic(37)
PartySetPos(30, 46, 0)
HeroSetSprite(0, 232, true)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(22, false, false)
EventSetDirFrame(247, 3, 0, 0)
WaitEventAutoScriptRun(14, false, false)
EventSetState(247, 5, false, false)
HeroSetSprite(0, 2, true)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(12, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 1, 0)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetState(247, 4, false, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//咦？　这里．．
//不就是山神庙吗
EventSetAutoScript(247, 3, Scr_0x91D2)
WaitEventAutoScriptRun(7, false, false)
SetDlgUpper(46-1-1, 0x00000000, false)
//小孩：
//哗！　你是仙人吗？
//我看见你从天上下来
//你一定是仙人！
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//李逍遥：
//我？　我怎麽可能是．．
VideoUpdate(0, false)
EventSetDirFrame(247, 3, 2, 0)
WaitEventAutoScriptRun(4, false, false)
EventSetDirFrame(247, 3, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(46-1-1, 0x00000000, false)
//小孩：
//仙人，请你帮帮忙
//在山神庙里面有一位老婆婆
//受了伤，请你救救她好不好？
EventSetAutoScript(247, 3, Scr_0x91D4)
WaitEventAutoScriptRun(12, false, false)
ReplaceAndPause()

[Scene_00249_Enter]
PartyWalkToBlock(15, 30, 1, 8)
EventSetDirFrame(249, 5, 0, 0)
VideoUpdate(0, false)
SetDlgLower(46-1-1, 0x00000000, false)
//小孩：
//她们就在里面，不过你要小心
//她身边的小妹妹，她很凶喔！
ReplaceAndPause()

[Event_00249_00005_Trigger]
SetDlgLower(46-1-1, 0x00000000, false)
//小孩：
//那小妹妹好凶喔

[Event_00249_00004_Trigger]
NPCSetDirFrame(3, 0)
EventSetTriggerMode(-1, -1, false, 2)
PartyWalkToBlock(25, 23, 0, 4)
RoleSetDirFrame(0, 2, 0)
VideoUpdate(0, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//小妹妹～这位老婆婆怎麽了？
NPCSetFrame(12)
VideoUpdate(0, false)
SetDlgUpper(39-1-1, 0x00000000, false)
//小女孩：
//　不要过来～我打你喔！
RoleMoveOneStep(-8, 4, 0)
WaitEventAutoScriptRun(3, false, false)
RoleMoveOneStep(-8, 4, 0)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(1-6-1, 0x00000000, false)
//李逍遥：
//等等！小妹妹～你不要怕
//我是来帮助你们的．．
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//　　　"火来！"~40
EventSetState(249, 6, true, false)
PlaySound(115)
WaitEventAutoScriptRun(4, false, false)
RoleMoveOneStep(-8, 4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-8, 4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-8, 4, 0)
WaitEventAutoScriptRun(0, false, false)
RoleMoveOneStep(-8, 4, 0)
WaitEventAutoScriptRun(13, false, false)
EventSetAutoScript(249, 6, Null)
SetDlgUpper(39-1-1, 0x00000000, false)
//小女孩：
//你们欺侮阿娘、害姥姥受伤
//你们全部都是坏人！
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//好～好～我不靠近你就是了
//你别怕，我真的不是坏人
VideoUpdate(0, false)
EventSetDirFrame(249, 2, 0, 1)
WaitEventAutoScriptRun(2, false, false)
SetDlgLower(40-1-1, 0x00000000, false)
//老妇人：
//这位公子，请你过来一下
NPCSetDirFrame(0, 0)
VideoUpdate(0, false)
NPCSetDirFrame(3, 0)
ReplaceAndPause()
SetDlgUpper(39-1-1, 0x00000000, false)
//小女孩：
//你要是害姥姥，我就打你！
NPCSetDirFrame(3, 0)

[Event_00249_00002_Trigger]
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//老婆婆～您受伤了吗？
VideoUpdate(0, false)
SetDlgUpper(40-1-1, 0x00000000, false)
//老妇人：
//没什麽～只是脚踝扭伤了
VideoRestore()
//公子～可否请你帮我一个忙？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//只要我帮的上的，您尽管说
VideoUpdate(0, false)
SetDlgUpper(40-1-1, 0x00000000, false)
//老妇人：
//请你拿着这条手绢到港口边
//若有人认出这条手绢的话，
//请你告诉她：我带小青的女儿
//来找灵月宫主
AddItem(232, 0)
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//老妇人交给李逍遥
//一条"凤纹手绢"
ReplaceAndPause()
SetDlgUpper(40-1-1, 0x00000000, false)
//老妇人：
//拜托你了．．．

[Scr_0x926E]
NPCMoveToBlock(34, 103, 0, 3, false)
NPCSetDirFrame(0, 0)

[Scene_00251_Enter]
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(3, false, false)
EventSetDirFrame(252, 0, 0, 0)
VideoUpdate(0, false)
//小女孩：
//啊．．．~40
EventSetAutoScript(252, 0, Scr_0x926E)
WaitEventAutoScriptRun(10, false, false)
//小女孩：
//客人～对不起，老板娘有事
//出去了，请你等一下再来
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//小妹妹～
//这客栈是你家开的吗？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//小女孩：
//不是，因为李家哥哥不见了
//李大娘出去找他回来，要我
//替她看店
ReplaceAndPause()

[Event_00251_00010_Trigger]
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//小妹妹～你叫什麽名字？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//小女孩：
//我叫丁香兰
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//原来香兰姐小时候就这麽乖巧
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//小女孩：
//？？
ReplaceAndPause()
SetDlgUpper(0, 0x00000000, false)
//小女孩：
//客人～请您出去吧
//老板娘说今天暂时不作生意了

[Scr_0x929E]
NPCSetDirFrame(1, 0)
NPCSetDirFrame(2, 0)
NPCSetDirFrame(3, 0)
NPCSetDirFrame(0, 0)

[Scr_0x92A3]
//船商：
//你怎麽会有这条手绢？
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李逍遥：
//是一位苗族打扮的老妇人
//交给我的，她说：她带小青的
//女儿来找灵月宫主
VideoUpdate(0, false)
EventSetAutoScript(-1, -1, Scr_0x929E)
WaitEventAutoScriptRun(4, false, false)
EventSetState(-1, -1, false, false)
EventSetState(254, 7, true, true)
PlaySound(263)
FadeToScene(-1, 2)
SetDlgUpper(37-1-1, 0x00000000, false)
//灵月宫主：
//贫道正是灵月，请问公子
//公主在什麽地方？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//在山神庙，我来带路吧！
EventSetState(249, 5, false, false)
EventSetTriggerScript(249, 2, Scr_0x92C1)
EventSetTriggerMode(249, 2, true, 2)
EventSetState(254, 7, false, false)
SceneSetScripts(249, Scr_0x92C1, Null)
SceneEnter(249)

[Scr_0x92C1]
EventSetState(249, 2, false, false)
EventSetState(249, 3, true, false)
EventSetState(250, 0, true, false)
PartySetPos(23, 23, 1)
RoleSetDirFrame(0, 2, 0)
ViewportMove(26, 19, 1)
SetDlgLower(37-1-1, 0x00000000, false)
//灵月宫主：
//好了，你的脚应该没事了
EventSetDirFrame(249, 4, 0, 0)
WaitEventAutoScriptRun(5, false, false)
EventSetDirFrame(249, 4, 3, 0)
WaitEventAutoScriptRun(5, false, false)
EventSetDirFrame(249, 4, 0, 0)
VideoUpdate(0, false)
SetDlgUpper(39-1-1, 0x00000000, false)
//小女孩：
//阿姨！你的法术好棒喔
VideoUpdate(0, false)
SetDlgLower(37-1-1, 0x00000000, false)
//灵月宫主：
//小公主～你想学吗？
VideoUpdate(0, false)
SetDlgUpper(39-1-1, 0x00000000, false)
//小女孩：
//嗯～我想学！
VideoRestore()
//阿姨，是不是我学会这法术
//坏人就不敢欺侮我阿娘了
VideoUpdate(0, false)
SetDlgLower(37-1-1, 0x00000000, false)
//灵月宫主：
//水月宫的法术是用来
//救人，而非与人争斗的
//你可要记住这句话
EventSetDirFrame(249, 3, 1, 0)
VideoUpdate(0, false)
SetDlgLower(40-1-1, 0x00000000, false)
//老妇人：
//殿下，以後这位阿姨
//就当你的师父好不好？
SetDlgUpper(39-1-1, 0x00000000, false)
//小女孩：
//好啊！
EventSetState(249, 3, false, false)
EventSetState(249, 4, false, false)
EventSetState(250, 0, false, false)
SceneSetScripts(254, Scr_0x930A, Null)
SceneEnter(254)
FadeOut(0)
ReplaceAndPause()

[Scr_0x92F5]
ReplaceAndPause()
NPCSetDirFrame(0, 0)
ReplaceAndPause()
NPCSetDirFrame(1, 0)
ReplaceAndPause()
NPCSetDirFrame(0, 0)
NPCSetDirFrame(3, 0)

[Scr_0x92FD]
NPCMoveToBlock(34, 90, 0, 3, false)
NPCMoveToBlock(35, 89, 0, 3, false)
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(3, 0)

[Scr_0x9302]
NPCMoveToBlock(34, 90, 0, 2, true)
NPCMoveToBlock(34, 89, 1, 2, true)
ReplaceAndPause()
NPCSetDirFrame(1, 0)

[Scr_0x9307]
NPCMoveToBlock(33, 90, 1, 2, true)
NPCSetDirFrame(2, 0)

[Scr_0x930A]
PartySetPos(29, 86, 1)
RoleSetDirFrame(0, 3, 0)
EventSetState(254, 8, true, false)
EventSetState(254, 9, true, false)
EventSetState(254, 10, true, false)
ViewportMove(0, 0, 0)
WaitEventAutoScriptRun(5, false, false)
SetDlgLower(37-1-1, 0x00000000, false)
//灵月宫主：
//李公子，我们就此告别
EventSetDirFrame(254, 8, 0, 0)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(254, 8, 3, 0)
WaitEventAutoScriptRun(2, false, false)
//灵月宫主：
//　上船吧．．
EventSetAutoScript(254, 10, Scr_0x92FD)
WaitEventAutoScriptRun(2, false, false)
EventSetAutoScript(254, 9, Scr_0x9302)
WaitEventAutoScriptRun(5, false, false)
EventSetAutoScript(254, 8, Scr_0x9307)
WaitEventAutoScriptRun(40, false, false)
EventSetDirFrame(254, 8, 2, 0)
PartyWalkToBlock(32, 89, 0, 4)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//道长～！
EventSetDirFrame(254, 8, 1, 0)
VideoUpdate(0, false)
SetDlgLower(37-1-1, 0x00000000, false)
//灵月宫主：
//您还有什麽事吗？
VideoUpdate(0, false)
SetDlgUpper(1-6-1, 0x00000000, false)
//李逍遥：
//您相信时光倒流吗？
VideoUpdate(0, false)
SetDlgLower(37-1-1, 0x00000000, false)
//灵月宫主：
//相信．．
//有一种法术叫回魂仙梦
//可以使人在梦中看到过去
VideoUpdate(0, false)
SetDlgUpper(1-1-1, 0x00000000, false)
//李逍遥：
//如果这是场梦，那麽～
//该如何结束这场梦呢？
VideoUpdate(0, false)
SetDlgLower(37-1-1, 0x00000000, false)
//灵月宫主：
//如果这是场梦，当做梦的人
//在梦中满足他心底的愿望时
//自然而然就会回到现实中了
EventSetDirFrame(254, 10, 0, 0)
VideoUpdate(0, false)
SetDlgLower(39-1-1, 0x00000000, false)
//小女孩：
//姥姥～　阿娘呢？
//阿娘怎麽还没有来？
EventSetDirFrame(0, 0, 2, 0)
VideoUpdate(0, false)
SetDlgUpper(40-1-1, 0x00000000, false)
//老妇人：
//你母后有事情不能来
//我们先去师父的家好不好？
EventSetDirFrame(254, 8, 2, 0)
VideoUpdate(0, false)
SetDlgLower(39-1-1, 0x00000000, false)
//小女孩：
//不要！我要等阿娘来
//再一起走嘛．．
VideoUpdate(0, false)
SetDlgUpper(37-1-1, 0x00000000, false)
//灵月宫主：
//不行喔～师父告诉你阿娘
//灵儿很乖、灵儿在仙灵岛等她
//如果我们不回去仙灵岛，等你
//阿娘来了，会找不到我们的
VideoUpdate(0, false)
SetDlgLower(39-1-1, 0x00000000, false)
//赵灵儿：
//喔．．．．
VideoUpdate(0, false)
SetDlgUpper(37-1-1, 0x00000000, false)
//灵月宫主：
//好了．．我们走吧
EventSetAutoScript(254, 5, Scr_0x9392)
EventSetAutoScript(254, 8, Scr_0x9392)
EventSetAutoScript(254, 9, Scr_0x9392)
EventSetAutoScript(254, 10, Scr_0x9392)
EventSetState(247, 7, true, true)
EventSetState(255, 0, true, true)
WaitEventAutoScriptRun(27, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(20, false, false)
PartyWalkToBlock(31, 88, 0, 2)
WaitEventAutoScriptRun(4, false, false)
SetDlgLower(21-1-1, 0x00000000, false)
//李大娘：
//请问你有没有看到
//我家的小李子啊？
EventSetDirFrame(255, 0, 0, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//李大娘：
//这孩子不知又死到哪去了
EventSetAutoScript(255, 0, Scr_0x9381)
ReplaceAndPause()

[Event_00254_00011_Auto]
NPCMoveToBlock(28, 85, 1, 3, false)
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(6, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(29, 86, 0, 3, false)

[Scr_0x9381]
NPCMoveToBlock(13, 102, 0, 3, false)
NPCMoveToBlock(18, 107, 1, 3, false)
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(16, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(6, false, false)
NPCMoveToBlock(23, 112, 0, 3, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(10, false, false)
NPCMoveToBlock(11, 100, 0, 3, false)
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(10, false, false)
NPCMoveToBlock(5, 106, 0, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x9392]
EventModifyPos(-1, -1, 2, -1)
GotoWithNop(Scr_0x9392, 320)
EventSetState(-1, -1, false, false)

[Event_00247_00008_Auto]
NPCMoveToBlock(32, 102, 1, 3, false)

[Scr_0x9398]
NPCMoveToBlock(33, 103, 1, 3, false)
NPCMoveToBlock(35, 101, 1, 3, false)
NPCSetDirFrame(1, 0)
ReplaceAndPause()
EventSetState(247, 6, false, false)
ReplaceAndPause()
NPCMoveToBlock(34, 100, 1, 3, false)

[Scr_0x93A0]
NPCMoveToBlock(34, 101, 0, 3, false)

[Event_00247_00007_Trigger]
EventSetState(247, 6, true, true)
//秀兰：
//大哥哥～你有没有看到
//李家哥哥呀？
VideoRestore()
//大娘叫我来找李家哥哥
//他再不回家，会被打屁股喔
ReplaceAndPause()
//秀兰：
//你看到李家哥哥了没？

[Event_00247_00007_Auto]
NPCMoveToBlock(27, 40, 0, 3, false)
WaitEventAutoScriptRun(10, false, false)
NPCMoveToBlock(28, 39, 0, 3, false)
WaitEventAutoScriptRun(8, false, false)
NPCMoveToBlock(25, 42, 0, 3, false)
WaitEventAutoScriptRun(20, false, false)
NPCMoveToBlock(33, 50, 0, 3, false)
WaitEventAutoScriptRun(8, false, false)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(8, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(10, false, false)
NPCMoveToBlock(29, 46, 1, 3, false)
WaitEventAutoScriptRun(8, false, false)
NPCMoveToBlock(31, 44, 1, 3, false)
WaitEventAutoScriptRun(30, false, false)
ReplaceAndPauseWithNop(Event_00247_00007_Auto, 0)

[Event_00247_00006_Trigger]
Call(Scr_0x0373, 0, 0)
SetDlgCenter(0, 0x00000000, false)
//箱中有若干童玩
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//啊～这颗珠子不就是．．
EventSetState(248, 0, true, true)
WaitEventAutoScriptRun(16, false, false)
RoleSetDirFrame(0, 0, 0)
WaitEventAutoScriptRun(5, false, false)
SetDlgLower(46-1-1, 0x00000000, false)
//小孩：
//喂！　不许动我的东西
PartyWalkToBlock(34, 101, 0, 2)
SetDlgUpper(1-6-1, 0x00000000, false)
//小朋友～你叫什麽名字？
//这些珠子都是你的吗？
VideoUpdate(0, false)
SetDlgLower(46-1-1, 0x00000000, false)
//小孩：
//那是我爹给我的！
//不许你碰它
EventSetAutoScript(248, 0, Scr_0x9398)
PartyWalkToBlock(33, 102, 0, 2)
WaitEventAutoScriptRun(6, false, false)
RoleSetDirFrame(0, 3, 0)
WaitEventAutoScriptRun(8, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(6, false, false)
SetDlgLower(1-3-1, 0x00000000, false)
//咱们打个商量如何？
//你的那些弹珠我很喜欢
//我出钱向你买，可以吗？
EventSetAutoScript(248, 0, Scr_0x93A0)
WaitEventAutoScriptRun(4, false, false)
SetDlgUpper(46-1-1, 0x00000000, false)
//小孩：
//真的！？
VideoUpdate(0, false)
SetDlgLower(1-3-1, 0x00000000, false)
//真的没骗你，你要多少钱？
VideoUpdate(0, false)
SetDlgUpper(46-1-1, 0x00000000, false)
//小孩：
//我不要钱，你把你的宝剑给我
//我就把这颗珠子送给你
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//我这是真剑呢，小孩子不能玩
//万一伤到自己怎麽办？
VideoUpdate(0, false)
SetDlgUpper(46-1-1, 0x00000000, false)
//小孩：
//我不管～我想要一把剑很久了
//我要练成绝世武功，出去找我
//爹娘！
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//那．．这样吧
//我给你一把木剑
VideoUpdate(0, false)
SetDlgUpper(46-1-1, 0x00000000, false)
//小孩：
//可以～只要是剑就行了
ReplaceAndPause()

[Scr_0x9401]
NPCMoveToBlock(44, 58, 0, 3, false)
NPCMoveToBlock(52, 66, 0, 8, false)

[Scr_0x9404]
NPCMoveToBlock(50, 62, 0, 3, false)

[Event_00257_00002_Trigger]
//木匠：
//唉．．最近生意越来越差
//都被对面打铁的给抢走了
VideoUpdate(0, false)
Replace()
//木匠：
//公子～你要买东西吗？
//我这家店的价格最公道了
ShowBuyItemMenu(3)

[Event_00256_00002_Trigger]
//铁匠：
//客人～我跟您说啊
//隔壁那家木材行卖的器具
//都是劣等货，你别去那买
//我这里的东西才是上等的
//您挑吧，我算您便宜
ShowBuyItemMenu(2)

[Scr_0x9418]
ReplaceAndPause()
[Event_00247_00008_Trigger]
SetDlgUpper(46-1-1, 0x00000000, false)
//小孩：
//木剑呢？
//不是说好要给我一把木剑吗？
VideoUpdate(0, false)
RemoveItem(106, 1, Scr_0x9418)
SetDlgLower(1-3-1, 0x00000000, false)
//瞧～这不是拿来了？
VideoUpdate(0, false)
SetDlgUpper(46-1-1, 0x00000000, false)
//小孩：
//好～交换！
SetDlgBox(0x00000000)
//得到水灵珠
AddItem(205, 0)
VideoWave(1, 2)
WaitEventAutoScriptRun(60, false, false)
VideoFadeAndUpdate(65535)
SceneSetScripts(203, Scr_0x873D, Null)
SceneEnter(203)

[Event_00248_00008_Trigger]
//旺财嫂：
//我说啊．．李家夫妇是不是
//死了啊？怎麽这麽久都没回来
//留着宝贝儿子在家里也没人管
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//来福婶：
//那小鬼活像是个小流氓似的
//看到就令人讨厌
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//旺财嫂：
//可不是吗，贼生的儿子就是
//一付贼头贼脑的样子
VideoUpdate(0, false)
//来福婶：
//我家前天掉了一把锄头，我
//一直怀疑是不是那小鬼偷去的
ReplaceAndPause()
SetDlgUpper(0, 0x00000000, false)
//旺财嫂：
//昨天那小鬼还跟我家大牛打架
//大牛的头被他打一个好大的苞
//看的我好心疼哩
VideoRestore()
//要不是看在李大婶的面子上
//我早就把那小鬼抓来教训一顿
ReplaceAndPauseWithNop(Event_00248_00008_Trigger, 0)

[Event_00248_00009_Trigger]
SetDlgLower(0, 0x00000000, false)
//来福婶：
//其实那孩子本性并不坏
//他婶婶一个人照顾店里的生意
//就忙不过来了，哪还有时间管
//教他？小孩子没人管会变坏的
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//旺财嫂：
//唉．．其实小李子也蛮可怜的
//他爹娘干了一辈子的贼，却没
//留下半分家产，李大娘一个女
//人家要扶养他可不容易啊
ReplaceAndPause()
SetDlgLower(0, 0x00000000, false)
//来福婶：
//听说李大娘的来头也不小呢
//好像是叫什麽铁掌飞凤来着
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//旺财嫂：
//呦～那李家岂不是江湖世家吗
ReplaceAndPauseWithNop(Event_00248_00009_Trigger, 0)

[Event_00253_00004_Trigger]
//老王：
//哈哈！我老王祖上有德
//让我终於生个胖儿子啦

[Event_00253_00005_Trigger]
//王婶：
//这孩子哭的时候嘴张大大的
//活像头猛虎似的，咱们就给
//他取个小名叫小虎子好了

[Event_00253_00006_Trigger]
//来福伯：
//哦～李公子，你回来啦？
VideoRestore()
//啊．．对不起，我认错人了
ReplaceAndPause()
//来福伯：
//这位公子，你的相貌和
//李家少爷有几分神似呢
//只不过年轻许多了
ReplaceAndPause()
//来福伯：
//这位公子～你是外地来的吗？
//好像以前都没见过，你是李家
//的亲戚吗？

[Event_00248_00007_Trigger]
//丁大伯：
//嘿咻～嘿咻～
//春夏勤耕种、秋冬收满仓
ReplaceAndPause()
//丁大伯：
//嘿咻～嘿咻～
//儿女若不教、老来没人要
ReplaceAndPauseWithNop(Event_00248_00007_Trigger, 0)

[Event_00254_00006_Trigger]
//船商：
//公子～我的船运行缺人手
//您愿意来我这工作吗？
ReplaceAndPause()
//船商：
//如果你知道有合适的人
//可以介绍给我，我会付
//介绍费的！

[Event_00265_00025_Trigger]
EventSetState(-1, -1, false, false)
RoleSetDirFrame(0, 2, 0)
WaitEventAutoScriptRun(4, false, false)
SceneEnter(264)

[Scene_00264_Enter]
MusicStop()
HeroSetSprite(0, 232, true)
PartySetRole(1)
RoleSetDirFrame(0, 0, 0)
PartySetPos(37, 46, 1)
VideoUpdate(0, false)
SetDlgLower(2-1-1, 0x00000000, false)
//赵灵儿：
//$08娘亲．．．孩儿来看您了
VideoUpdate(0, false)
MusicPlay(76, true, 0.00)
EventSetState(264, 1, true, false)
FadeToScene(-1, 4)
SetDlgLower(38-1-1, 0x00000000, false)
//灵儿．．我的孩子～辛苦你了
//你能够到这里来，一定受了不
//少委屈和苦难吧．．
VideoRestore()
//为娘最感到欣慰的是．．
//你有一位能宽容你、爱护你
//的丈夫，这一点．．你比为
//娘的幸福多了
//希望你能继承为娘最後的心愿
//用爱来化解两族之间的仇恨。
//这是你做得到、也应该做的
VideoRestore()
//娘虽不能在人世间与你团聚
//但是娘在天上，也会默默的
//为你祝福．．
VideoUpdate(0, false)
EventSetDirFrame(264, 1, 0, 1)
FadeToScene(-1, 3)
SetDlgLower(2-1-1, 0x00000000, false)
//赵灵儿：
//娘．．．！
FadeOut(0)
EventSetState(264, 1, false, false)
EventSetState(264, 2, false, false)
EventSetState(264, 3, true, false)
WaitEventAutoScriptRun(10, false, false)
AddItem(200, 0)
AddItem(174, 0)
AddItem(135, 0)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(264, 4, 1, 0)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(265, 0, 3, 0)
WaitEventAutoScriptRun(8, false, false)
EventSetDirFrame(264, 4, 0, 0)
WaitEventAutoScriptRun(2, false, false)
EventSetDirFrame(265, 0, 0, 0)
ViewportMove(-2, 1, 32)
WaitEventAutoScriptRun(5, false, false)
EventSetDirFrame(264, 3, 3, 0)
VideoUpdate(0, false)
EventSetDirFrame(264, 3, 2, 0)
VideoUpdate(0, false)
SetDlgLower(49-1-1, 0x00000000, false)
//赵灵儿：
//$02走吧～到祭坛去！
//我要学娘一样施法祭天祈雨
//只要解除乾旱，大家就不必
//再为争夺水源而打战了
EventSetTriggerScript(265, 15, Scr_0x0E53)
EventSetState(264, 3, false, false)
EventSetState(264, 4, false, false)
EventSetState(265, 0, false, false)
RoleSetAttr(2, 0, 88)
RoleSetAttr(2, 2, 38)
RoleSetAttr(2, 1, 9)
HeroSetSprite(0, 2, false)
PartySetPos(35, 48, 1)
PartySetRole(215)
RoleSetDirFrame(0, 0, 0)
ViewportMove(0, 0, 0)
SceneEnter(265)

[Event_00264_00003_Auto]
WaitEventAutoScriptRun(6, false, false)
NPCSetDirFrame(3, 0)
ReplaceAndPause()
NPCSetDirFrame(0, 0)
NPCMoveToBlock(35, 48, 1, 2, true)

[Event_00259_00001_Trigger]
SceneEnter(260)
PartySetPos(10, 108, 1)
FadeOut(0)

[Event_00260_00001_Trigger]
SceneEnter(259)
PartySetPos(47, 26, 0)
FadeOut(0)

[Event_00269_00001_Trigger]
SceneEnter(260)
PartySetPos(47, 106, 1)
FadeOut(0)

[Event_00260_00002_Trigger]
SceneEnter(269)
PartySetPos(16, 29, 1)
FadeOut(0)

[Event_00260_00003_Trigger]
SceneEnter(267)
PartySetPos(46, 99, 1)
FadeOut(0)

[Event_00267_00001_Trigger]
SceneEnter(260)
PartySetPos(15, 18, 1)
FadeOut(0)

[Event_00260_00004_Trigger]
SceneEnter(263)
PartySetPos(17, 79, 1)
FadeOut(0)

[Event_00263_00001_Trigger]
SceneEnter(260)
PartySetPos(14, 59, 0)
FadeOut(0)

[Event_00263_00002_Trigger]
SceneEnter(265)
PartySetPos(9, 87, 0)
FadeOut(0)

[Event_00265_00001_Trigger]
SceneEnter(263)
PartySetPos(41, 46, 0)
FadeOut(0)

[Event_00265_00002_Trigger]
SceneEnter(272)
PartySetPos(15, 93, 0)
FadeOut(0)

[Event_00272_00001_Trigger]
SceneEnter(265)
PartySetPos(54, 73, 1)
FadeOut(0)

[Event_00270_00001_Trigger]
SceneEnter(269)
PartySetPos(36, 50, 0)
FadeOut(0)

[Event_00269_00002_Trigger]
SceneEnter(270)
PartySetPos(22, 87, 0)
FadeOut(0)

[Event_00270_00002_Trigger]
SceneEnter(269)
PartySetPos(30, 36, 0)
FadeOut(0)

[Event_00269_00003_Trigger]
SceneEnter(270)
PartySetPos(28, 59, 0)
FadeOut(0)

[Event_00270_00003_Trigger]
SceneEnter(269)
PartySetPos(23, 62, 0)
FadeOut(0)

[Event_00269_00004_Trigger]
SceneEnter(270)
PartySetPos(42, 59, 0)
FadeOut(0)

[Event_00270_00004_Trigger]
SceneEnter(269)
PartySetPos(21, 45, 0)
FadeOut(0)

[Event_00269_00005_Trigger]
SceneEnter(270)
PartySetPos(24, 28, 1)
FadeOut(0)

[Event_00270_00005_Trigger]
SceneEnter(269)
PartySetPos(30, 51, 0)
FadeOut(0)

[Event_00269_00006_Trigger]
SceneEnter(270)
PartySetPos(45, 28, 0)
FadeOut(0)

[Event_00260_00005_Trigger]
SceneEnter(268)
PartySetPos(35, 85, 1)
FadeOut(0)

[Event_00268_00001_Trigger]
SceneEnter(260)
PartySetPos(17, 113, 0)
FadeOut(0)

[Event_00260_00006_Trigger]
SceneEnter(268)
PartySetPos(44, 112, 1)
FadeOut(0)

[Event_00268_00002_Trigger]
SceneEnter(260)
PartySetPos(51, 94, 0)
FadeOut(0)

[Event_00260_00007_Trigger]
SceneEnter(268)
PartySetPos(23, 110, 0)
FadeOut(0)

[Event_00268_00003_Trigger]
SceneEnter(260)
PartySetPos(31, 99, 0)
FadeOut(0)

[Event_00260_00008_Trigger]
SceneEnter(268)
PartySetPos(20, 81, 1)
FadeOut(0)

[Event_00268_00004_Trigger]
SceneEnter(260)
PartySetPos(8, 105, 1)
FadeOut(0)

[Event_00260_00009_Trigger]
SceneEnter(268)
PartySetPos(19, 54, 0)
FadeOut(0)

[Event_00268_00005_Trigger]
SceneEnter(260)
PartySetPos(50, 76, 0)
FadeOut(0)

[Event_00260_00010_Trigger]
SceneEnter(268)
PartySetPos(45, 59, 0)
FadeOut(0)

[Event_00268_00006_Trigger]
SceneEnter(260)
PartySetPos(13, 83, 0)
FadeOut(0)

[Event_00260_00011_Trigger]
SceneEnter(268)
PartySetPos(44, 32, 0)
FadeOut(0)

[Event_00268_00007_Trigger]
SceneEnter(260)
PartySetPos(17, 89, 0)
FadeOut(0)

[Event_00260_00012_Trigger]
SceneEnter(268)
PartySetPos(17, 24, 1)
FadeOut(0)

[Event_00268_00008_Trigger]
SceneEnter(260)
PartySetPos(23, 81, 1)
FadeOut(0)

[Scene_00266_Teleport]
SceneEnter(260)
PartySetPos(52, 54, 0)
FadeOut(0)

[Event_00260_00013_Trigger]
SceneEnter(273)
PartySetPos(8, 100, 1)
FadeOut(0)

[Event_00273_00001_Trigger]
SceneEnter(266)
PartySetPos(54, 81, 0)
FadeOut(0)

[Event_00266_00001_Trigger]
SceneEnter(273)
PartySetPos(20, 28, 1)
FadeOut(0)

[Event_00267_00002_Trigger]
SceneEnter(271)
PartySetPos(27, 25, 1)
FadeOut(0)

[Event_00271_00001_Trigger]
SceneEnter(267)
PartySetPos(36, 76, 1)
FadeOut(0)

[Event_00267_00003_Trigger]
PartySetPos(27, 80, 0)
Call(Scr_0x02E7, 0, 0)

[Event_00267_00004_Trigger]
PartySetPos(29, 75, 0)
Call(Scr_0x0303, 0, 0)

[Event_00265_00003_Trigger]
PartySetPos(33, 52, 1)
WaitEventAutoScriptRun(0, false, false)
Call(Event_00204_00002_Trigger, 0, 0)

[Event_00265_00004_Trigger]
PartySetPos(35, 50, 0)
WaitEventAutoScriptRun(0, false, false)
Call(Event_00204_00005_Trigger, 0, 0)

[Event_00263_00015_Auto]
NPCMoveToBlock(28, 59, 1, 3, false)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(30, false, false)
NPCMoveToBlock(36, 51, 1, 3, false)
WaitEventAutoScriptRun(10, false, false)
NPCMoveToBlock(34, 49, 0, 3, false)
ReplaceAndPauseWithNop(Event_00001_00026_Auto, 0)

[Scene_00263_Enter]
PartySetPos(17, 79, 1)
ReplaceAndPause()

[Event_00272_00004_Trigger]
SetDlgCenter(0, 0x00000000, false)
//石柱顶端有一处半圆球形凹孔

[Scene_00261_Enter]
PlayCDOrMusic(65535, 68)
PartySetPos(48, 22, 0)
HeroSetSprite(0, 232, true)
RoleSetDirFrame(0, 0, 0)
VideoFadeAndUpdate(2)
PlaySound(255)
EventSetState(262, 0, true, false)
WaitEventAutoScriptRun(25, false, false)
SceneSetMap(-1, Scr_0x00A4)
FadeToScene(2, 65535)
PlaySound(256)
WaitEventAutoScriptRun(16, false, false)
EventSetState(261, 5, false, false)
EventSetState(261, 6, false, false)
EventSetState(261, 11, true, false)
EventSetState(261, 12, true, false)
WaitEventAutoScriptRun(6, false, false)
EventSetState(261, 3, false, false)
EventSetState(261, 4, false, false)
EventSetState(261, 9, true, false)
EventSetState(261, 10, true, false)
WaitEventAutoScriptRun(4, false, false)
EventSetState(261, 1, false, false)
EventSetState(261, 2, false, false)
EventSetState(261, 7, true, false)
EventSetState(261, 8, true, false)
PlaySound(256)
WaitEventAutoScriptRun(30, false, false)
SceneEnter(274)

[Scene_00274_Enter]
PlaySound(255)
PartySetPos(44, 108, 0)
WaitEventAutoScriptRun(12, false, false)
SceneSetMap(-1, Scr_0x00A5)
FadeToScene(2, 65535)
WaitEventAutoScriptRun(25, false, false)
PlaySound(256)
EventSetState(274, 1, false, false)
EventSetState(274, 12, true, false)
EventSetState(274, 2, false, false)
EventSetState(274, 13, true, false)
WaitEventAutoScriptRun(5, false, false)
EventSetState(274, 3, false, false)
EventSetState(274, 14, true, false)
EventSetState(274, 4, false, false)
EventSetState(274, 15, true, false)
WaitEventAutoScriptRun(6, false, false)
EventSetState(274, 5, false, false)
EventSetState(274, 16, true, false)
PlaySound(256)
WaitEventAutoScriptRun(30, false, false)
PlaySound(256)
FadeOut(0)
SceneEnter(275)

[Scene_00275_Enter]
PartySetPos(21, 81, 0)
ViewportMove(0, 2, 150)
VideoFadeAndUpdate(65534)
SceneEnter(276)

[Event_00275_00019_Auto]
PlaySound(256)
WaitEventAutoScriptRun(28, false, false)
ReplaceAndPauseWithNop(Event_00275_00019_Auto, 0)

[Event_00275_00001_Auto]
WaitEventAutoScriptRun(6, false, false)
NPCMoveToBlock(24, 82, 0, 3, false)
NPCMoveToBlock(21, 85, 0, 3, false)
NPCMoveToBlock(21, 85, 1, 3, false)
[Scr_0x95F5]
NPCMoveToBlock(22, 85, 0, 3, false)
NPCMoveToBlock(21, 84, 0, 3, false)
NPCMoveToBlock(20, 85, 0, 3, false)
NPCMoveToBlock(21, 86, 0, 3, false)
GotoWithNop(Scr_0x95F5, 0)

[Event_00275_00002_Auto]
WaitEventAutoScriptRun(12, false, false)
NPCMoveToBlock(23, 80, 1, 3, false)
WaitEventAutoScriptRun(5, false, false)
NPCMoveToBlock(24, 81, 1, 3, false)
WaitEventAutoScriptRun(6, false, false)
NPCMoveToBlock(22, 83, 1, 3, false)
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(6, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(0, 0)

[Event_00275_00003_Auto]
WaitEventAutoScriptRun(6, false, false)
NPCMoveToBlock(18, 89, 0, 3, false)
WaitEventAutoScriptRun(8, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(19, 87, 0, 3, false)
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(2, 0)
NPCMoveToBlock(19, 87, 0, 3, false)
NPCMoveToBlock(20, 86, 0, 3, false)
NPCMoveToBlock(24, 90, 1, 3, false)
WaitEventAutoScriptRun(6, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(6, false, false)
NPCMoveToBlock(22, 88, 0, 3, false)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(0, 0)

[Event_00275_00004_Auto]
WaitEventAutoScriptRun(30, false, false)
NPCMoveToBlock(17, 89, 0, 2, true)
WaitEventAutoScriptRun(8, false, false)
NPCMoveToBlock(17, 88, 1, 3, false)
WaitEventAutoScriptRun(6, false, false)
ReplaceAndPauseWithNop(Event_00261_00007_Auto, 0)

[Scene_00276_Enter]
PlaySound(256)
PartySetPos(39, 46, 0)
VideoUpdate(0, false)
//白苗族长：
//$05这．．这是神蹟啊！~70
SetRNG(8)
PlaySound(256)
FadeOut(0)
PlayRNG(0, -1, 8)
PlaySound(256)
FadeOut(0)
EventSetState(276, 3, true, false)
EventSetState(276, 4, true, false)
EventSetStateSequence(276, 7, 276, 15, true, false)
PartySetPos(26, 61, 0)
VideoUpdate(0, false)
//士兵：
//$00哗～　快逃啊！
//女娲娘娘显灵了！~50
PlaySound(256)
WaitEventAutoScriptRun(30, false, false)
PlaySound(256)
WaitEventAutoScriptRun(10, false, false)
EventSetDirFrame(276, 7, 0, 0)
WaitEventAutoScriptRun(0, false, false)
SetDlgLower(43-2-1, 0x00000000, false)
//拜月教主：
//不许退！　通通不许走！~50$02
PlaySound(256)
VideoFadeAndUpdate(65534)
HeroSetSprite(0, 232, true)
SceneEnter(258)

[Event_00276_00008_Auto]
GotoWithProbability(30, Null)
NPCSetDirFrame(0, 0)
[Scr_0x964E]
EventWalkOneStep(-1, -1, -8, 4)
GotoWithNop(Scr_0x964E, 0)

[Event_00276_00010_Auto]
WaitEventAutoScriptRun(10, false, false)
ReplaceAndPauseWithNop(Event_00276_00008_Auto, 0)

[Event_00276_00011_Auto]
WaitEventAutoScriptRun(5, false, false)
ReplaceAndPauseWithNop(Event_00276_00008_Auto, 0)

[Event_00276_00014_Auto]
WaitEventAutoScriptRun(4, false, false)
ReplaceAndPauseWithNop(Event_00276_00008_Auto, 0)

[Event_00276_00015_Auto]
WaitEventAutoScriptRun(7, false, false)
ReplaceAndPauseWithNop(Event_00276_00008_Auto, 0)

[Event_00261_00007_Auto]
WaitEventAutoScriptRun(4, false, false)
GotoWithProbability(40, Null)
GotoWithProbability(75, Scr_0x9665)
GotoWithProbability(66, Scr_0x9668)
GotoWithProbability(50, Scr_0x966B)
NPCSetDirFrame(2, 0)
ReplaceAndPauseWithNop(Event_00261_00007_Auto, 0)

[Scr_0x9665]
NPCSetDirFrame(0, 0)
ReplaceAndPauseWithNop(Event_00261_00007_Auto, 0)

[Scr_0x9668]
NPCSetDirFrame(1, 0)
ReplaceAndPauseWithNop(Event_00261_00007_Auto, 0)

[Scr_0x966B]
NPCSetDirFrame(3, 0)
ReplaceAndPauseWithNop(Event_00261_00007_Auto, 0)

[Scene_00258_Enter]
PlayCDOrMusic(4, 67)
PartySetPos(36, 65, 0)
HeroSetSprite(0, 232, false)
PartySetRole(1)
RoleSetDirFrame(0, 0, 0)
ViewportMove(0, 0, 0)
WaitEventAutoScriptRun(8, false, false)
SetDlgCenter(0, 0x00000000, false)
//$12灵儿念出祭雨咒文~60~80
EventSetDirFrame(258, 4, 0, 6)
EventSetDirFrame(258, 5, 0, 6)
EventSetDirFrame(258, 6, 0, 6)
EventSetDirFrame(258, 7, 0, 6)
EventSetDirFrame(259, 0, 0, 6)
FadeToScene(-1, 5)
SetRNG(7)
FadeOut(2)
SetPalette(6)
PlayRNG(0, -1, 8)
SetDlgUpper(0, 0x00000000, false)
//天地诸神啊～我以女娲圣灵之名
//请求您赐予这片土地新的生命~90
MusicStop()
FadeOut(3)
SetPalette(0)
SceneEnter(261)
ReplaceAndPause()
PartySetPos(36, 65, 0)
ViewportMove(0, 0, 0)
SetDlgUpper(0, 0x00000000, false)
//赵灵儿：
//太好了．．．
FadeOut(0)
SceneEnter(262)

[Event_00204_00008_Trigger]
SetDlgCenter(0, 0x00000000, false)
//石碑中央有一处圆形小孔
//碑面并刻有文字．．
VideoUpdate(0, false)
[Event_00272_00003_Trigger]
//碑文记载：
//蛇纹之姬　圣灵之身
//西疆斩风魔　东海杀雷神
//南山收土妖　北荒伏火怪
//终以平水患　而大地重生

[Scene_00262_Enter]
AddItem(200, 0)
AddItem(203, 0)
AddItem(204, 0)
AddItem(205, 0)
AddItem(206, 0)
AddItem(207, 0)
MusicPlay(84, true, 0.00)
HeroSetSprite(0, 2, false)
PartySetRole(215)
RoleSetDirFrame(0, 0, 0)
PartySetPos(30, 73, 1)
PartyWalkToBlock(29, 74, 1, 4)
[Scr_0x96A7]
RoleMoveOneStep(-6, 7, 0)
WaitEventAutoScriptRun(0, false, false)
GotoWithNop(Scr_0x96A7, 8)
WaitEventAutoScriptRun(8, false, false)
EventSetAutoScript(263, 0, Scr_0x971D)
WaitEventAutoScriptRun(26, false, false)
SetDlgUpper(13-1-1, 0x00000000, false)
//白苗族长：
//公主殿下～
//我代全族的人向您致谢
VideoUpdate(0, false)
SetDlgLower(49-2-1, 0x00000000, false)
//赵灵儿：
//我只是遵照我娘未竟之志
//做我应该做的事罢了
VideoUpdate(0, false)
SetDlgUpper(13-1-1, 0x00000000, false)
//白苗族长：
//您是我族的大恩人
//请您留下来继承巫后娘娘
//留下的祭司之位好吗？
VideoUpdate(0, false)
SetDlgLower(49-2-1, 0x00000000, false)
//赵灵儿：
//谢谢．．我会考虑看看
VideoUpdate(0, false)
SetDlgUpper(13-1-1, 0x00000000, false)
//白苗族长：
//请您一定要答应，这场庆功
//大典就是为您而开的，大家
//都希望您能留下来呢！
EventSetAutoScript(263, 0, Scr_0x9722)
WaitEventAutoScriptRun(18, false, false)
PartyWalkToBlock(27, 78, 1, 2)
ViewportMove(-2, 1, 48)
WaitEventAutoScriptRun(32, false, false)
MusicStop()
VideoShake(99, 1)
WaitEventAutoScriptRun(10, false, false)
EventSetAutoScript(0, 0, Event_00261_00007_Auto)
EventSetAutoScript(263, 0, Event_00261_00007_Auto)
WaitEventAutoScriptRun(4, false, false)
EventSetStateSequence(262, 1, 262, 3, false, false)
EventSetStateSequence(262, 12, 262, 14, true, false)
WaitEventAutoScriptRun(2, false, false)
EventSetStateSequence(262, 4, 262, 5, false, false)
EventSetStateSequence(262, 15, 262, 16, true, false)
WaitEventAutoScriptRun(2, false, false)
EventSetStateSequence(262, 6, 262, 9, false, false)
EventSetStateSequence(262, 17, 262, 20, true, false)
VideoShake(99, 2)
WaitEventAutoScriptRun(3, false, false)
EventSetStateSequence(262, 10, 262, 11, false, false)
EventSetStateSequence(262, 21, 262, 22, true, false)
WaitEventAutoScriptRun(20, false, false)
VideoShake(99, 5)
EventSetState(262, 23, true, false)
PlaySound(132)
WaitEventAutoScriptRun(2, false, false)
MusicPlay(26, true, 0.00)
VideoShake(28, 4)
EventSetAutoScript(263, 0, Scr_0x9726)
EventSetAutoScript(262, 12, Scr_0x972C)
EventSetAutoScript(262, 13, Scr_0x9732)
EventSetAutoScript(262, 14, Scr_0x9738)
EventSetAutoScript(262, 15, Scr_0x973E)
EventSetAutoScript(262, 16, Scr_0x9745)
EventSetAutoScript(262, 17, Scr_0x974B)
EventSetAutoScript(262, 18, Scr_0x9751)
EventSetAutoScript(262, 19, Scr_0x9756)
EventSetAutoScript(262, 20, Scr_0x975C)
EventSetAutoScript(262, 21, Scr_0x9763)
EventSetAutoScript(262, 22, Scr_0x9769)
WaitEventAutoScriptRun(36, false, false)
SetDlgLower(13-1-1, 0x00000000, false)
//白苗族长：
//地魔兽！？黑苗人竟然
//真的使用魔兽来作战！
VideoUpdate(0, false)
SetDlgLower(49-1-1, 0x00000000, false)
//赵灵儿：
//收拾这妖孽！
//不能让牠伤害到无辜的人
EventSetAutoScript(262, 23, Null)
EventSetDirFrame(262, 23, 0, 6)
EventSetLayer(262, 23, 65526)
SetBattleMusic(38)
SetBattlefield(36)
BattleStart(287, Scr_0x9C9B, Null)
BattleEnd()
PartySetPos(27, 79, 0)
ViewportMove(0, 0, 0)
SetDlgUpper(4-1-1, 0x00000000, false)
//阿奴：
//一定有人在背後操纵魔兽
//我们去揪出这幕後的主使者！
VideoUpdate(0, false)
SetDlgLower(49-1-1, 0x00000000, false)
//赵灵儿：
//．．．．．．．
VideoUpdate(0, false)
SetDlgUpper(1-4-1, 0x00000000, false)
//李逍遥：
//灵儿．．有什麽困难吗？
VideoUpdate(0, false)
SetDlgLower(49-1-1, 0x00000000, false)
//赵灵儿：
//没什麽．．
VideoRestore()
//该面对的．．总是该去面对
VideoRestore()
//我们走吧～
[Scr_0x9717]
RoleMoveOneStep(-6, 7, 0)
WaitEventAutoScriptRun(0, false, false)
GotoWithNop(Scr_0x9717, 8)
FadeOut(0)
SceneEnter(291)

[Scr_0x971D]
EventWalkOneStep(-1, -1, 6, -7)
ReplaceAndPause()
ReplaceAndPauseWithNop(Scr_0x971D, 8)
NPCSetDirFrame(2, 0)

[Scr_0x9722]
NPCMoveToBlock(27, 78, 1, 2, true)
NPCMoveToBlock(28, 79, 1, 2, true)
NPCSetDirFrame(0, 0)

[Scr_0x9726]
ReplaceAndPause()
NPCSetDirFrame(0, 0)
WaitEventAutoScriptRun(3, false, false)
NPCMoveToBlock(29, 78, 1, 3, false)
NPCSetDirFrame(0, 0)

[Scr_0x972C]
ReplaceAndPause()
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(3, false, false)
NPCMoveToBlock(19, 83, 1, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x9732]
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(2, false, false)
NPCMoveToBlock(22, 79, 0, 3, false)
NPCMoveToBlock(19, 82, 0, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x9738]
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(3, 0)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(19, 83, 0, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x973E]
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(2, false, false)
NPCSetDirFrame(3, 0)
NPCMoveToBlock(19, 86, 1, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x9745]
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(1, 0)
ReplaceAndPause()
NPCMoveToBlock(21, 88, 1, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x974B]
WaitEventAutoScriptRun(5, false, false)
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(2, false, false)
NPCMoveToBlock(24, 88, 1, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x9751]
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(25, 89, 1, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x9756]
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(4, false, false)
NPCMoveToBlock(24, 89, 0, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x975C]
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(1, 0)
NPCMoveToBlock(18, 85, 1, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x9763]
ReplaceAndPause()
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(2, false, false)
NPCMoveToBlock(20, 88, 0, 3, false)
EventSetState(-1, -1, false, false)

[Scr_0x9769]
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(1, 0)
WaitEventAutoScriptRun(4, false, false)
NPCSetDirFrame(2, 0)
WaitEventAutoScriptRun(3, false, false)
NPCSetDirFrame(1, 0)
NPCMoveToBlock(21, 90, 0, 3, false)
EventSetState(-1, -1, false, false)

[Event_00262_00023_Auto]
EventAnimate(-1, 0)
ReplaceAndPause()
ReplaceAndPauseWithNop(Event_00262_00023_Auto, 5)

[Event_00275_00018_Auto]
EventWalkOneStep(-1, -1, 0, 2)
GotoWithNop(Event_00275_00018_Auto, 0)

[Event_00265_00026_Trigger]
SetDlgCenter(0, 0x00000000, false)
//巫后的石像

[Event_00259_00002_Trigger]
SceneEnter(214)
PartySetPos(23, 11, 1)
FadeOut(0)

[Scr_0x9780]
SetDlgBox(0x00000000)
//这项物品此人不能装备

[Scr_0x9783]
SetDlgBox(0x00000000)
//这玩意可不能随便丢掉

[Scr_0x9786]
SetDlgBox(0x00000000)
//这项物品此人无法使用

[Scr_0x9789]
SetDlgBox(0x00000000)
//无任何效果

[Scr_0x978C]
SetDlgBox(0x00000000)
//攻击无效

[Scr_0x978F]
SetDlgBox(0x00000000)
//在此场合无法使用

[Item_00136_Equip]
RoleInstallEquip(0, 196)
RoleSetAttrExtra(11, 19, 1)

[Item_00137_Equip]
RoleInstallEquip(0, 197)
RoleSetAttrExtra(11, 19, 2)

[Item_00138_Equip]
RoleInstallEquip(0, 198)
RoleSetAttrExtra(11, 19, 3)

[Item_00139_Equip]
RoleInstallEquip(0, 199)
RoleSetAttrExtra(11, 19, 5)

[Item_00140_Equip]
RoleInstallEquip(0, 200)
RoleSetAttrExtra(11, 19, 9)

[Item_00141_Equip]
RoleInstallEquip(0, 201)
RoleSetAttrExtra(11, 19, 4)

[Item_00142_Equip]
RoleInstallEquip(0, 202)
RoleSetAttrExtra(11, 19, 13)

[Item_00143_Equip]
RoleInstallEquip(0, 203)
RoleSetAttrExtra(11, 19, 11)
RoleSetAttrExtra(11, 18, 3)

[Item_00144_Equip]
RoleInstallEquip(0, 204)
RoleSetAttrExtra(11, 19, 18)

[Item_00145_Equip]
RoleInstallEquip(0, 205)
RoleSetAttrExtra(11, 19, 25)
RoleSetAttrExtra(11, 20, 8)

[Item_00146_Equip]
RoleInstallEquip(0, 206)
RoleSetAttrExtra(11, 19, 7)
RoleSetAttrExtra(11, 20, 24)
RoleSetAttrExtra(11, 21, 9)

[Item_00147_Equip]
RoleInstallEquip(0, 207)
RoleSetAttrExtra(11, 19, 28)
RoleSetAttrExtra(11, 20, 5)
RoleSetAttrExtra(11, 18, 3)
RoleSetAttrExtra(11, 21, 3)

[Item_00148_Equip]
RoleInstallEquip(0, 208)
RoleSetAttrExtra(13, 19, 3)

[Item_00150_Equip]
RoleInstallEquip(0, 210)
RoleSetAttrExtra(13, 19, 3)
RoleSetAttrExtra(13, 20, 4)

[Item_00149_Equip]
RoleInstallEquip(0, 209)
RoleSetAttrExtra(13, 19, 7)

[Item_00151_Equip]
RoleInstallEquip(0, 211)
RoleSetAttrExtra(13, 19, 13)
RoleSetAttrExtra(13, 20, -10)

[Item_00154_Equip]
RoleInstallEquip(0, 214)
RoleSetAttrExtra(13, 19, 10)
RoleSetAttrExtra(13, 21, 10)
RoleSetAttrExtra(13, 18, 10)

[Item_00152_Equip]
RoleInstallEquip(0, 212)
RoleSetAttrExtra(13, 19, 18)
RoleSetAttrExtra(13, 20, 12)
RoleSetAttrExtra(13, 21, 12)

[Item_00153_Equip]
RoleInstallEquip(0, 213)
RoleSetAttrExtra(13, 19, 22)
RoleSetAttrExtra(13, 20, -13)

[Item_00155_Equip]
RoleInstallEquip(0, 215)
RoleSetAttrExtra(13, 19, 28)
RoleSetAttrExtra(13, 20, -4)

[Item_00156_Equip]
RoleInstallEquip(0, 216)
RoleSetAttrExtra(13, 19, 33)
RoleSetAttrExtra(13, 18, 28)

[Item_00157_Equip]
RoleInstallEquip(0, 217)
RoleSetAttrExtra(13, 19, 40)
RoleSetAttrExtra(13, 20, -7)

[Item_00158_Equip]
RoleInstallEquip(0, 218)
RoleSetAttrExtra(13, 19, 47)
RoleSetAttrExtra(13, 20, -10)

[Item_00159_Equip]
RoleInstallEquip(0, 219)
RoleSetAttrExtra(13, 19, 55)
RoleSetAttrExtra(13, 17, 9)

[Item_00160_Equip]
RoleInstallEquip(0, 220)
RoleSetAttrExtra(13, 19, 66)

[Item_00161_Equip]
RoleInstallEquip(0, 221)
RoleSetAttrExtra(13, 19, 90)

[Item_00162_Equip]
RoleInstallEquip(0, 222)
RoleSetAttrExtra(13, 19, 80)

[Item_00163_Equip]
RoleInstallEquip(0, 223)
RoleSetAttrExtra(13, 19, 80)

[Item_00164_Equip]
RoleInstallEquip(0, 224)
RoleSetAttrExtra(13, 19, 80)

[Item_00165_Equip]
RoleInstallEquip(0, 225)
RoleSetAttrExtra(12, 19, 2)

[Item_00166_Equip]
RoleInstallEquip(0, 226)
RoleSetAttrExtra(12, 19, 6)

[Item_00167_Equip]
RoleInstallEquip(0, 227)
RoleSetAttrExtra(12, 19, 12)

[Item_00168_Equip]
RoleInstallEquip(0, 228)
RoleSetAttrExtra(12, 19, 20)

[Item_00169_Equip]
RoleInstallEquip(0, 229)
RoleSetAttrExtra(12, 19, 18)
RoleSetAttrExtra(12, 20, 18)
RoleSetAttrExtra(12, 21, 18)

[Item_00170_Equip]
RoleInstallEquip(0, 230)
RoleSetAttrExtra(12, 19, 31)
RoleSetAttrExtra(12, 18, 16)

[Item_00171_Equip]
RoleInstallEquip(0, 231)
RoleSetAttrExtra(12, 19, 40)

[Item_00172_Equip]
RoleInstallEquip(0, 232)
RoleSetAttrExtra(12, 19, 52)

[Item_00173_Equip]
RoleInstallEquip(0, 233)
RoleSetAttrExtra(12, 19, 60)

[Item_00174_Equip]
RoleInstallEquip(0, 234)
RoleSetAttrExtra(12, 19, 66)
RoleSetAttrExtra(12, 18, 30)

[Item_00175_Equip]
RoleInstallEquip(0, 235)
RoleSetAttrExtra(15, 19, 1)

[Item_00176_Equip]
RoleInstallEquip(0, 236)
RoleSetAttrExtra(15, 19, 2)

[Item_00177_Equip]
RoleInstallEquip(0, 237)
RoleSetAttrExtra(15, 19, 3)
RoleSetAttrExtra(15, 20, 2)

[Item_00178_Equip]
RoleInstallEquip(0, 238)
RoleSetAttrExtra(15, 19, 4)

[Item_00179_Equip]
RoleInstallEquip(0, 239)
RoleSetAttrExtra(15, 19, 6)

[Item_00180_Equip]
RoleInstallEquip(0, 240)
RoleSetAttrExtra(15, 19, 8)
RoleSetAttrExtra(15, 20, 6)

[Item_00181_Equip]
RoleInstallEquip(0, 241)
RoleSetAttrExtra(15, 19, 11)
RoleSetAttrExtra(15, 20, 9)

[Item_00182_Equip]
RoleInstallEquip(0, 242)
RoleSetAttrExtra(15, 19, 14)
RoleSetAttrExtra(15, 20, 17)

[Item_00183_Equip]
RoleInstallEquip(0, 243)
RoleSetAttrExtra(15, 19, 18)
RoleSetAttrExtra(15, 20, 5)

[Item_00184_Equip]
RoleInstallEquip(0, 244)
RoleSetAttrExtra(15, 19, 21)
RoleSetAttrExtra(15, 20, 16)

[Item_00185_Equip]
RoleInstallEquip(0, 245)
RoleSetAttrExtra(15, 19, 25)
RoleSetAttrExtra(15, 20, 12)

[Item_00186_Equip]
RoleInstallEquip(0, 246)
RoleSetAttrExtra(15, 19, 28)
RoleSetAttrExtra(15, 20, 20)

[Item_00187_Equip]
RoleInstallEquip(0, 247)
RoleSetAttrExtra(15, 19, 32)
RoleSetAttrExtra(15, 20, 26)

[Item_00189_Equip]
RoleInstallEquip(0, 249)
RoleSetAttrExtra(16, 19, 2)

[Item_00190_Equip]
RoleInstallEquip(0, 250)
RoleSetAttrExtra(16, 19, 5)

[Item_00191_Equip]
RoleInstallEquip(0, 251)
RoleSetAttrExtra(16, 21, 18)

[Item_00193_Equip]
RoleInstallEquip(0, 253)
RoleSetAttrExtra(16, 19, 5)
RoleSetAttrExtra(16, 21, 9)

[Item_00192_Equip]
RoleInstallEquip(0, 252)
RoleSetAttrExtra(16, 21, 20)

[Item_00194_Equip]
RoleInstallEquip(0, 254)
RoleSetAttrExtra(16, 18, 5)
RoleSetAttrExtra(16, 19, 5)

[Item_00197_Equip]
RoleInstallEquip(0, 257)
RoleSetAttrExtra(16, 18, 8)
RoleSetAttrExtra(16, 19, 8)

[Item_00198_Equip]
RoleInstallEquip(0, 258)
RoleSetAttrExtra(16, 18, 14)
RoleSetAttrExtra(16, 19, 14)

[Item_00199_Equip]
RoleInstallEquip(0, 259)
RoleSetAttrExtra(16, 19, 9)

[Item_00196_Equip]
RoleInstallEquip(0, 256)
RoleSetAttrExtra(16, 19, 6)

[Item_00106_Equip]
RoleInstallEquip(0, 166)
RoleSetAttrExtra(14, 17, 2)
RoleSetAttrExtra(14, 20, 3)

[Item_00107_Equip]
RoleInstallEquip(0, 167)
RoleSetAttrExtra(14, 17, 6)
RoleSetAttrExtra(14, 20, -5)

[Item_00108_Equip]
RoleInstallEquip(0, 168)
RoleSetAttrExtra(14, 17, 10)
RoleSetAttrExtra(14, 19, 3)

[Item_00109_Equip]
RoleInstallEquip(0, 169)
RoleSetAttrExtra(14, 17, 16)
RoleSetAttrExtra(14, 19, 1)

[Item_00110_Equip]
RoleInstallEquip(0, 170)
RoleSetAttrExtra(14, 17, 8)
RoleSetAttrExtra(14, 19, 5)
RoleSetStatus(true, 4, 32760)

[Item_00111_Equip]
RoleInstallEquip(0, 171)
RoleSetAttrExtra(14, 17, 25)

[Item_00112_Equip]
RoleInstallEquip(0, 172)
RoleSetAttrExtra(14, 17, 38)

[Item_00113_Equip]
RoleInstallEquip(0, 173)
RoleSetAttrExtra(14, 17, 22)
RoleSetAttrExtra(14, 20, 8)

[Item_00116_Equip]
RoleInstallEquip(0, 176)
RoleSetAttrExtra(14, 17, 16)
RoleSetAttrExtra(14, 20, 8)
RoleSetStatus(true, 4, 32760)

[Item_00114_Equip]
RoleInstallEquip(0, 174)
RoleSetAttrExtra(14, 17, 55)
RoleSetAttrExtra(14, 19, 5)
RoleSetAttrExtra(14, 18, 10)

[Item_00117_Equip]
RoleInstallEquip(0, 177)
RoleSetAttrExtra(14, 17, 28)
RoleSetAttrExtra(14, 20, 12)
RoleSetAttrExtra(14, 19, 3)
RoleSetStatus(true, 4, 32760)

[Item_00115_Equip]
RoleInstallEquip(0, 175)
RoleSetAttrExtra(14, 17, 70)
RoleSetAttrExtra(14, 20, -20)
RoleSetAttrExtra(14, 18, -15)
RoleSetAttrExtra(14, 19, 9)

[Item_00121_Equip]
RoleInstallEquip(0, 181)
RoleSetAttrExtra(14, 17, 62)
RoleSetAttrExtra(14, 19, 9)
RoleSetAttrExtra(14, 20, 9)
RoleSetStatus(true, 4, 32760)

[Item_00118_Equip]
RoleInstallEquip(0, 178)
RoleSetAttrExtra(14, 17, 75)
RoleSetAttrExtra(14, 20, 15)

[Item_00124_Equip]
RoleInstallEquip(0, 184)
RoleSetAttrExtra(14, 17, 88)
RoleSetAttrExtra(14, 20, 20)
RoleSetAttrExtra(14, 21, 22)

[Item_00122_Equip]
RoleInstallEquip(0, 182)
RoleSetAttrExtra(14, 17, 100)
RoleSetAttrExtra(14, 18, 15)
RoleSetAttrExtra(14, 20, 20)
RoleSetAttrExtra(14, 21, 30)

[Item_00123_Equip]
RoleInstallEquip(0, 183)
RoleSetAttrExtra(14, 17, 100)
RoleSetAttrExtra(14, 21, 30)
RoleSetAttrExtra(14, 20, 20)
RoleSetAttrExtra(14, 18, 15)
RoleSetAttrExtra(14, 19, 3)

[Item_00120_Equip]
RoleInstallEquip(0, 180)
RoleSetAttrExtra(14, 17, 124)
RoleSetAttrExtra(14, 19, 9)
RoleSetAttrExtra(14, 20, 32)
RoleSetAttrExtra(14, 18, 16)

[Item_00126_Equip]
RoleInstallEquip(0, 186)
RoleSetAttrExtra(14, 17, 120)
RoleSetAttrExtra(14, 18, 50)
RoleSetAttrExtra(14, 20, 32)
RoleSetAttrExtra(14, 21, 33)
RoleSetAttrExtra(14, 19, 7)

[Item_00129_Equip]
RoleInstallEquip(0, 189)
RoleSetAttrExtra(14, 17, 134)
RoleSetAttrExtra(14, 18, 37)
RoleSetAttrExtra(14, 19, 8)
RoleSetAttrExtra(14, 20, 40)
RoleSetAttrExtra(14, 21, 32)

[Item_00130_Equip]
RoleInstallEquip(0, 190)
RoleSetAttrExtra(14, 17, 158)
RoleSetAttrExtra(14, 18, 90)
RoleSetAttrExtra(14, 19, 35)
RoleSetAttrExtra(14, 20, 50)
RoleSetAttrExtra(14, 21, 33)

[Item_00131_Equip]
RoleInstallEquip(0, 191)
RoleSetAttrExtra(14, 17, 200)
RoleSetAttrExtra(14, 19, 20)
RoleSetAttrExtra(14, 20, 77)
RoleSetAttrExtra(14, 21, 33)

[Item_00132_Equip]
RoleInstallEquip(0, 192)
RoleSetAttrExtra(14, 17, 50)
RoleSetAttrExtra(14, 18, 62)
RoleSetAttrExtra(14, 19, 6)

[Item_00133_Equip]
RoleInstallEquip(0, 193)
RoleSetAttrExtra(14, 17, 70)
RoleSetAttrExtra(14, 18, 88)
RoleSetAttrExtra(14, 19, 11)

[Item_00134_Equip]
RoleInstallEquip(0, 194)
RoleSetAttrExtra(14, 17, 88)
RoleSetAttrExtra(14, 18, 120)
RoleSetAttrExtra(14, 19, 22)

[Item_00135_Equip]
RoleInstallEquip(0, 195)
RoleSetAttrExtra(14, 17, 100)
RoleSetAttrExtra(14, 18, 150)
RoleSetAttrExtra(14, 19, 33)
RoleSetAttrExtra(14, 21, 36)

[Item_00188_Equip]
RoleInstallEquip(0, 248)
RoleSetAttrExtra(16, 18, 8)
RoleSetAttrExtra(16, 21, 9)
RoleSetAttrExtra(16, 22, 20)

[Item_00214_Equip]
RoleInstallEquip(0, 274)
RoleSetAttrExtra(16, 18, 88)
RoleSetAttrExtra(16, 19, 18)
RoleSetAttrExtra(16, 22, 30)
RoleSetAttr(0, 65, 383)

[Item_00200_Equip]
RoleInstallEquip(0, 260)
RoleSetAttr(0, 65, 351)
RoleSetAttrExtra(16, 18, 128)
RoleSetAttrExtra(16, 19, 15)
RoleSetAttrExtra(16, 22, 35)

[Item_00209_Equip]
RoleInstallEquip(0, 269)
RoleApplyPoison(13, false)
RoleApplyPoison(14, false)

[Item_00201_Equip]
RoleInstallEquip(0, 261)
RoleSetAttrExtra(16, 19, 90)

[Item_00203_Equip]
RoleInstallEquip(0, 263)
RoleSetAttrExtra(16, 23, 50)
RoleSetAttr(0, 65, 315)

[Item_00204_Equip]
RoleInstallEquip(0, 264)
RoleSetAttrExtra(16, 24, 50)
RoleSetAttr(0, 65, 320)

[Item_00205_Equip]
RoleInstallEquip(0, 265)
RoleSetAttrExtra(16, 25, 50)
RoleSetAttr(0, 65, 325)

[Item_00206_Equip]
RoleInstallEquip(0, 266)
RoleSetAttrExtra(16, 26, 50)
RoleSetAttr(0, 65, 389)

[Item_00207_Equip]
RoleInstallEquip(0, 267)
RoleSetAttrExtra(16, 27, 50)
RoleSetAttr(0, 65, 336)

[Item_00195_Use]
RoleModifyHP(-9, false)
RoleRemoveStatus(false, 1)
RoleRemoveStatus(false, 2)
RoleRemoveStatus(false, 0)

[Item_00039_Use]
RoleModifyHP(50, false)

[Item_00040_Use]
RoleModifyHP(100, false)

[Item_00041_Use]
RoleModifyHP(200, false)

[Item_00042_Use]
RoleModifyHP(450, false)

[Item_00043_Use]
RoleModifyHP(1000, false)

[Item_00044_Use]
RoleModifyMP(36, false)

[Item_00045_Use]
RoleModifyMP(50, false)

[Item_00046_Use]
RoleModifyMP(110, false)

[Item_00047_Use]
RoleModifyMP(260, false)

[Item_00048_Use]
RoleModifyMP(400, false)

[Item_00049_Use]
RoleModifyMP(700, false)

[Item_00050_Use]
RoleModifyHPMP(440, false)

[Item_00051_Use]
RoleModifyHPMP(250, false)

[Item_00037_Use]
RoleRevive(5, false)

[Item_00038_Use]
RoleRevive(10, false)

[Item_00072_Use]
RoleModifyAttr(0, 17, 2)
RoleModifyAttr(0, 19, 2)
RoleModifyAttr(0, 18, 2)

[Item_00052_Use]
RoleModifyAttr(0, 18, 3)

[Item_00053_Use]
RoleModifyAttr(0, 19, 3)

[Item_00054_Use]
RoleModifyAttr(0, 19, 2)

[Item_00093_Throw]
SimulateRoleMagic(0, 0, 0)
EnemyModifyHP(90, false)

[Item_00195_Throw]
SimulateRoleMagic(0, 0, 0)
EnemyModifyHP(120, false)

[Item_00094_Throw]
SimulateRoleMagic(0, 0, 0)
EnemyModifyHP(170, false)

[Item_00095_Throw]
SimulateRoleMagic(0, 0, 0)
EnemyModifyHP(250, false)

[Item_00101_Throw]
SimulateRoleMagic(0, 0, 0)
EnemyModifyHP(400, false)

[Item_00102_Throw]
SimulateRoleMagic(43, 0, 0)
EnemyModifyHP(300, true)

[Item_00096_Throw]
SimulateRoleMagic(87, 0, 0)
EnemyModifyHP(135, false)

[Item_00097_Throw]
SimulateRoleMagic(79, 0, 0)
EnemyApplyPoison(3, true)
EnemyModifyHP(55, true)

[Item_00073_Throw]
SimulateRoleMagic(78, 0, 0)
EnemyApplyPoison(1, true)

[Item_00098_Throw]
SimulateRoleMagic(0, 0, 0)
DrainHPFromEnemy(180)

[Item_00099_Throw]
SimulateRoleMagic(0, 0, 0)
EnemyApplyPoison(4, false)

[Item_00099_Use]
RoleApplyPoison(4, false)

[Item_00106_Throw]
RoleThrowWeapon(50, 0)

[Item_00107_Throw]
RoleThrowWeapon(50, 10)

[Item_00103_Throw]
RoleThrowWeapon(66, 32)

[Item_00108_Throw]
RoleThrowWeapon(50, 30)

[Item_00109_Throw]
RoleThrowWeapon(50, 36)

[Item_00110_Throw]
RoleThrowWeapon(50, 44)

[Item_00113_Throw]
RoleThrowWeapon(50, 52)

[Item_00111_Throw]
RoleThrowWeapon(50, 70)

[Item_00112_Throw]
RoleThrowWeapon(50, 78)

[Item_00116_Throw]
RoleThrowWeapon(50, 90)

[Item_00119_Throw]
RoleThrowWeapon(50, 105)

[Item_00104_Throw]
RoleThrowWeapon(66, 115)

[Item_00114_Throw]
RoleThrowWeapon(50, 130)

[Item_00117_Throw]
RoleThrowWeapon(50, 145)

[Item_00115_Throw]
RoleThrowWeapon(50, 178)

[Item_00118_Throw]
RoleThrowWeapon(50, 210)

[Item_00105_Throw]
RoleThrowWeapon(66, 255)

[Item_00121_Throw]
RoleThrowWeapon(50, 300)

[Item_00132_Throw]
RoleThrowWeapon(50, 320)

[Item_00124_Throw]
RoleThrowWeapon(50, 332)

[Item_00122_Throw]
RoleThrowWeapon(50, 440)

[Item_00123_Throw]
RoleThrowWeapon(50, 440)

[Item_00125_Throw]
RoleThrowWeapon(50, 410)

[Item_00133_Throw]
RoleThrowWeapon(50, 250)

[Item_00126_Throw]
RoleThrowWeapon(50, 460)

[Item_00120_Throw]
RoleThrowWeapon(50, 480)

[Item_00134_Throw]
RoleThrowWeapon(50, 400)

[Item_00127_Throw]
RoleThrowWeapon(50, 570)

[Item_00129_Throw]
RoleThrowWeapon(50, 610)

[Item_00128_Throw]
RoleThrowWeapon(50, 660)

[Item_00130_Throw]
RoleThrowWeapon(50, 720)

[Item_00131_Throw]
RoleThrowWeapon(50, 800)

[Item_00057_Use]
RoleApplyPoison(1, false)

[Item_00057_Throw]
SimulateRoleMagic(0, 0, 0)
EnemyApplyPoison(1, false)

[Item_00070_Use]
RoleApplyPoison(3, false)

[Item_00070_Throw]
SimulateRoleMagic(0, 0, 0)
EnemyApplyPoison(3, false)

[Item_00004_Use]
RoleCurePoisonByID(1, false)
RoleCurePoisonByID(3, false)
RoleCurePoisonByID(2, false)

[Item_00005_Use]
RoleRemoveStatus(false, 0)
RoleRemoveStatus(false, 1)
RoleRemoveStatus(false, 2)
RoleRemoveStatus(false, 3)

[Item_00056_Use]
RoleApplyPoison(2, false)

[Item_00056_Throw]
SimulateRoleMagic(0, 0, 0)
EnemyApplyPoison(2, false)

[Item_00015_Use]
RoleCurePoisonByID(2, false)

[Item_00016_Use]
RoleModifyHP(25, false)
RoleCurePoisonByID(2, false)

[Item_00026_Use]
RoleModifyHPMP(15, false)
RoleCurePoisonByID(1, false)

[Item_00027_Use]
RoleCurePoisonByID(1, false)

[Scr_0x99D6]
RoleCurePoisonByID(3, false)
RoleCurePoisonByID(1, false)

[Item_00029_Use]
RoleCurePoisonByLevel(2, false)

[Item_00202_Equip]
RoleInstallEquip(0, 262)
RoleSetAttrExtra(16, 22, 100)

[Item_00075_Use]
RoleSetStatus(false, 2, 5)
RoleModifyHP(-1, false)

[Item_00075_Throw]
SimulateRoleMagic(0, 0, 0)
EnemySetStatus(false, 2, 5)
EnemyModifyHP(1, false)

[Item_00066_Use]
RoleSetStatus(false, 1, 4)
RoleModifyHP(-1, false)

[Item_00066_Throw]
SimulateRoleMagic(0, 0, 0)
EnemySetStatus(false, 1, 4)
EnemyModifyHP(1, false)

[Item_00067_Use]
RoleSetStatus(false, 2, 3)
RoleModifyHP(-1, false)

[Item_00067_Throw]
SimulateRoleMagic(0, 0, 0)
EnemySetStatus(false, 2, 3)
EnemyModifyHP(1, false)

[Item_00068_Use]
RoleSetStatus(false, 0, 3)
RoleModifyHP(-1, false)

[Item_00068_Throw]
SimulateRoleMagic(0, 0, 0)
EnemySetStatus(false, 0, 3)
EnemyModifyHP(3, false)

[Item_00100_Use]
RoleSetStatus(false, 1, 5)
RoleModifyHP(-4, false)

[Item_00100_Throw]
SimulateRoleMagic(0, 0, 0)
EnemySetStatus(false, 1, 5)
EnemyModifyHP(4, false)

[Scr_0x9A01]
RoleSetStatus(false, 3, 4)
RoleModifyHP(-2, false)

[Scr_0x9A04]
SimulateRoleMagic(0, 0, 0)
EnemySetStatus(false, 3, 4)
EnemyModifyHP(2, false)

[Item_00078_Use]
JumpIfRoleNotPoisoned(7, Scr_0x9A0B)
RoleCurePoisonByID(7, false)

[Scr_0x9A0B]
JumpIfRoleNotPoisoned(8, Scr_0x9A0E)
KillRole()

[Scr_0x9A0E]
RoleApplyPoison(5, false)

[Item_00065_Use]
JumpIfRoleNotPoisoned(5, Scr_0x9A13)
RoleCurePoisonByID(5, false)

[Scr_0x9A13]
JumpIfRoleNotPoisoned(10, Scr_0x9A16)
KillRole()

[Scr_0x9A16]
RoleApplyPoison(9, false)

[Item_00064_Use]
JumpIfRoleNotPoisoned(9, Scr_0x9A1B)
RoleCurePoisonByID(9, false)

[Scr_0x9A1B]
JumpIfRoleNotPoisoned(5, Scr_0x9A1E)
KillRole()

[Scr_0x9A1E]
RoleApplyPoison(8, false)

[Item_00062_Use]
JumpIfRoleNotPoisoned(8, Scr_0x9A23)
RoleCurePoisonByID(8, false)

[Scr_0x9A23]
JumpIfRoleNotPoisoned(7, Scr_0x9A26)
KillRole()

[Scr_0x9A26]
RoleApplyPoison(6, false)

[Item_00079_Use]
JumpIfRoleNotPoisoned(6, Scr_0x9A2B)
RoleCurePoisonByID(6, false)

[Scr_0x9A2B]
JumpIfRoleNotPoisoned(9, Scr_0x9A2E)
KillRole()

[Scr_0x9A2E]
RoleApplyPoison(10, false)

[Item_00063_Use]
JumpIfRoleNotPoisoned(10, Scr_0x9A33)
RoleCurePoisonByID(10, false)

[Scr_0x9A33]
JumpIfRoleNotPoisoned(6, Scr_0x9A36)
KillRole()

[Scr_0x9A36]
RoleApplyPoison(7, false)

[Item_00077_Use]
RoleHalveHP()

[Item_00078_Throw]
SimulateRoleMagic(0, 0, 0)
EnemyApplyPoison(5, false)
JumpIfEnemyNotPoisoned(8, Scr_0x9A3E)
KillEnemy()
[Scr_0x9A3E]

[Item_00065_Throw]
SimulateRoleMagic(0, 0, 0)
EnemyApplyPoison(9, false)
JumpIfEnemyNotPoisoned(10, Scr_0x9A43)
KillEnemy()
[Scr_0x9A43]

[Item_00064_Throw]
SimulateRoleMagic(0, 0, 0)
EnemyApplyPoison(8, false)
JumpIfEnemyNotPoisoned(5, Scr_0x9A48)
KillEnemy()
[Scr_0x9A48]

[Item_00062_Throw]
SimulateRoleMagic(0, 0, 0)
EnemyApplyPoison(6, false)
JumpIfEnemyNotPoisoned(7, Scr_0x9A4D)
KillEnemy()
[Scr_0x9A4D]

[Item_00079_Throw]
SimulateRoleMagic(0, 0, 0)
EnemyApplyPoison(10, false)
JumpIfEnemyNotPoisoned(9, Scr_0x9A52)
KillEnemy()
[Scr_0x9A52]

[Item_00063_Throw]
SimulateRoleMagic(0, 0, 0)
EnemyApplyPoison(7, false)
JumpIfEnemyNotPoisoned(6, Scr_0x9A57)
KillEnemy()
[Scr_0x9A57]

[Item_00077_Throw]
SimulateRoleMagic(0, 0, 0)
EnemyHalveHP()

[Item_00076_Use]
JumpIfRoleNotPoisonedByLevel(0, Scr_0x9A5E)
RoleModifyHP(999, false)

[Scr_0x9A5E]
KillRole()

[Item_00081_Use]
BattleRoleVanish(3)

[Item_00080_Use]
RoleSetStatus(false, 0, 5)
RoleModifyHP(-1, false)

[Item_00080_Throw]
SimulateRoleMagic(0, 0, 0)
EnemySetStatus(false, 0, 5)
EnemyModifyHP(1, false)

[Item_00084_Throw]
SimulateRoleMagic(0, 0, 0)
EnemyApplyPoison(11, false)

[Item_00087_Throw]
SimulateRoleMagic(0, 0, 0)
EnemyApplyPoison(12, false)

[Item_00092_Use]
RoleSetStatus(true, 0, 9)

[Item_00085_Use]
RoleModifyMP(250, true)

[Item_00089_Use]
RoleModifyHP(1000, false)

[Scr_0x9A75]
RoleRemoveStatus(false, 1)

[Scr_0x9A77]
RoleRemoveStatus(false, 2)

[Scr_0x9A79]
RoleRemoveStatus(false, 0)

[Scr_0x9A7B]
RoleRemoveStatus(false, 3)

[Item_00024_Use]
RoleSetAttrExtra(17, 22, 30)

[Item_00032_Use]
RoleModifyHPMP(20, false)

[Item_00033_Use]
RoleModifyHPMP(30, false)

[Item_00034_Use]
RoleModifyHP(85, false)

[Item_00012_Use]
RoleModifyAttr(0, 8, 3)

[Item_00013_Use]
RoleModifyAttr(0, 8, 5)

[Item_00014_Use]
RoleModifyAttr(0, 7, 3)

[Item_00071_Use]
RoleModifyHPMP(150, false)

[Item_00020_Use]
RoleModifyHPMP(22, false)

[Item_00002_Use]
RoleModifyHP(300, true)

[Item_00003_Use]
RoleSetStatus(true, 2, 7)

[Item_00069_Use]
RoleCurePoisonByLevel(2, false)
RoleModifyHP(-30, false)

[Item_00090_Use]
RoleModifyLevel(1)

[Item_00006_Throw]
SimulateRoleMagic(55, 0, 0)

[Item_00007_Throw]
SimulateRoleMagic(70, 0, 0)

[Item_00008_Throw]
SimulateRoleMagic(71, 0, 0)

[Item_00009_Throw]
SimulateRoleMagic(72, 0, 0)

[Item_00010_Throw]
SimulateRoleMagic(73, 0, 0)

[Item_00082_Throw]
SimulateRoleMagic(29, 0, 0)

[Item_00083_Throw]
SimulateRoleMagic(35, 0, 0)

[Item_00011_Throw]
SimulateRoleMagic(74, 0, 0)

[Item_00017_Use]
GotoWithProbability(50, Scr_0x9789)
RoleCurePoisonByID(1, true)

[Item_00019_Use]
RoleModifyHPMP(10, false)

[Item_00018_Use]
RoleModifyHPMP(15, false)

[Item_00030_Use]
NPCChaseSetRange(0, 600)

[Item_00031_Use]
NPCChaseSetRange(3, 600)

[Item_00055_Throw]
SimulateRoleMagic(59, 0, 0)

[Item_00074_Throw]
JumpIfEnemyHPMoreThanPercentage(5, Scr_0x9789)
KillEnemy()

[Scr_0x9AB8]
SetDlgBox(0x00000000)
//炼蛊的材料不足

[Item_00208_Use]
RemoveItem(57, 1, Scr_0x9ABD)
GotoWithNop(Scr_0x9AC4, 0)
[Scr_0x9ABD]
RemoveItem(58, 1, Scr_0x9ABF)
GotoWithNop(Scr_0x9AC4, 0)
[Scr_0x9ABF]
RemoveItem(59, 1, Scr_0x9AC1)
GotoWithNop(Scr_0x9AC4, 0)
[Scr_0x9AC1]
RemoveItem(60, 1, Scr_0x9AC3)
GotoWithNop(Scr_0x9AC4, 0)
[Scr_0x9AC3]
RemoveItem(61, 1, Scr_0x9AB8)
[Scr_0x9AC4]
AddItem(88, 0)
SetDlgBox(0x00000000)
//炼成一只蛊．．

[Item_00086_Throw]
SimulateRoleMagic(80, 0, 0)

[Item_00220_Use]
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//打开包袱，里面有５００文钱
//一本手卷，一些疗伤药、一双
//绣花鞋、玉镯子、以及一把略
//为生锈的铁剑．．
CashModify(500, Null)
AddItem(41, 2)
AddItem(45, 2)
AddItem(178, 0)
AddItem(193, 0)
AddItem(108, 0)
AddItem(233, 0)
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//咦？这不是爹的配剑吗，我还
//以为不见了呢，原来婶婶一直
//把它收藏着．．

[Item_00219_Use]
JumpIfPartyNotFacingEvent(17, 4, 1)

[Scr_0x9ADF]
JumpIfPartyNotFacingEvent(17, 5, 1)

[Scr_0x9AE1]
JumpIfPartyNotFacingEvent(17, 6, 1)

[Scr_0x9AE3]
JumpIfPartyNotFacingEvent(17, 7, 1)

[Scr_0x9AE5]
JumpIfPartyNotFacingEvent(17, 8, 1)

[Scr_0x9AE7]
JumpIfPartyNotFacingEvent(17, 9, 1)

[Item_00213_Use]
JumpIfPartyNotFacingEvent(2, 3, 1)
EventSetTriggerScript(2, 3, Scr_0x17B8)

[Item_00212_Use]
VideoUpdate(0, false)
JumpIfPartyNotFacingEvent(3, 19, 1)
EventSetTriggerScript(3, 19, Scr_0x13CA)

[Item_00224_Use]
JumpIfPartyNotFacingEvent(49, 31, 1)
EventSetTriggerScript(49, 31, Scr_0x3816)

[Item_00225_Use]
EventSetPosToPartyAndObstacle(48, 9, true, true, Scr_0x9AF5)

[Scr_0x9AF5]
SetDlgBox(0x00000000)
//此处无法放置
ScriptFailed()

[Item_00226_Use]
JumpIfPartyNotFacingEvent(53, 2, 1)
EventSetTriggerScript(53, 2, Scr_0x3A10)

[Item_00091_Use]
VideoUpdate(0, false)
SceneTeleport(Scr_0x9789)
PlaySound(45)
PartySetPosToFirstRole()

[Item_00103_Equip]
RoleInstallEquip(0, 163)
RoleSetAttrExtra(14, 17, 20)
RoleSetAttrExtra(14, 20, 20)
RoleSetAttr(0, 4, 1)
RoleSetAttr(0, 1, 6)

[Item_00104_Equip]
RoleInstallEquip(0, 164)
RoleSetAttrExtra(14, 17, 66)
RoleSetAttrExtra(14, 20, 33)
RoleSetAttr(0, 4, 1)
RoleSetAttr(0, 1, 6)

[Item_00105_Equip]
RoleInstallEquip(0, 165)
RoleSetAttrExtra(14, 17, 99)
RoleSetAttrExtra(14, 20, 60)
RoleSetAttr(0, 4, 1)
RoleSetAttr(0, 1, 6)

[Item_00119_Equip]
RoleInstallEquip(0, 179)
RoleSetAttrExtra(14, 17, 70)
RoleSetAttrExtra(14, 20, 32)
RoleSetAttr(0, 1, 7)

[Item_00125_Equip]
RoleInstallEquip(0, 185)
RoleSetAttrExtra(14, 17, 90)
RoleSetAttrExtra(14, 20, 26)
RoleSetAttrExtra(14, 21, -9)
RoleSetAttr(0, 1, 7)

[Item_00127_Equip]
RoleInstallEquip(0, 187)
RoleSetAttrExtra(14, 17, 98)
RoleSetAttrExtra(14, 20, 98)
RoleSetAttrExtra(14, 21, 98)
RoleSetAttr(0, 1, 7)
RoleSetAttr(0, 4, 1)
RoleSetStatus(true, 4, 32760)

[Item_00128_Equip]
RoleInstallEquip(0, 188)
RoleSetAttrExtra(14, 17, 132)
RoleSetAttrExtra(14, 18, 55)
RoleSetAttrExtra(14, 19, 29)
RoleSetAttrExtra(14, 20, 45)
RoleSetAttrExtra(14, 21, 36)
RoleSetAttr(0, 1, 7)

[Item_00210_Use]
MakeElixir(Scr_0x9789)

[Item_00211_Use]
JumpIfPartyNotFacingEvent(97, 4, 1)
EventSetTriggerScript(97, 4, Scr_0x4827)

[Scr_0x9B33]
JumpIfPartyNotFacingEvent(137, 2, 1)
EventSetTriggerScript(137, 2, Scr_0x51D3)
RemoveItem(211, 1, Null)

[Item_00227_Use]
JumpIfPartyNotFacingEvent(118, 6, 1)
EventSetTriggerScript(118, 6, Scr_0x5EDE)
RemoveItem(227, 1, Null)

[Scr_0x9B3B]
JumpIfPartyNotFacingEvent(118, 8, 1)
EventSetTriggerScript(118, 8, Scr_0x9B45)

[Scr_0x9B3E]
VideoUpdate(0, false)
//书信上写着：
//"美丽温柔大方可爱善良贤淑"
//"的阿香小姐，我已仰幕您很久"
//"很久很久了．．．．．．
//"．．．．．．．．．．阿辉。"

[Scr_0x9B45]
EventSetTriggerMode(-1, -1, false, 2)
SetDlgUpper(33-1-1, 0x00000000, false)
//尚书夫人：
//这是什麽？　给我的吗？
ReplaceAndPauseWithNop(Event_00118_00008_Trigger, 0)

[Item_00228_Use]
JumpIfPartyNotFacingEvent(100, 18, 1)
EventSetTriggerScript(100, 18, Scr_0x5F0A)

[Scr_0x9B4E]
JumpIfPartyNotFacingEvent(100, 15, 1)
EventSetTriggerScript(100, 15, Scr_0x5F1D)
RemoveItem(228, 1, Null)

[Item_00229_Use]
JumpIfPartyNotFacingEvent(47, 1, 1)
EventSetTriggerScript(47, 1, Scr_0x36F5)
RemoveItem(229, 1, Null)

[Item_00230_Use]
VideoUpdate(0, false)
SetDlgLower(35-1-1, 0x00000000, false)
//我在看书，没事别吵我！

[Item_00231_Use]
JumpIfPartyNotFacingEvent(192, 57, 1)
EventSetTriggerScript(192, 57, Scr_0x76D6)
RemoveItem(231, 1, Null)

[Scr_0x9B5E]
JumpIfPartyNotFacingEvent(192, 58, 1)
EventSetTriggerScript(192, 58, Scr_0x7703)
RemoveItem(231, 1, Null)

[Item_00218_Use]
JumpIfRoleNotPoisonedByLevel(0, Scr_0x9A5E)
RoleCurePoisonByLevel(3, false)

[Item_00200_Use]
JumpIfPartyNotFacingEvent(272, 2, 1)
EventSetState(272, 2, false, false)
EventSetState(272, 3, true, false)
RemoveItem(200, 1, Null)
VideoUpdate(0, false)
FadeOut(0)
ViewportMove(35, 66, -1)
EventSetStateSequence(272, 4, 272, 8, true, true)
PlaySound(260)
FadeToScene(-1, 2)
FadeOut(0)
ViewportMove(0, 0, 0)

[Item_00203_Use]
JumpIfPartyNotFacingEvent(272, 4, 0)
EventSetState(272, 4, true, true)
EventSetDirFrame(272, 4, 0, 4)
RemoveItem(203, 1, Null)
GotoWithNop(Scr_0x9B90, 0)

[Item_00204_Use]
JumpIfPartyNotFacingEvent(272, 6, 0)
EventSetState(272, 6, true, true)
EventSetDirFrame(272, 6, 0, 2)
RemoveItem(204, 1, Null)
GotoWithNop(Scr_0x9B90, 0)

[Item_00205_Use]
JumpIfPartyNotFacingEvent(272, 8, 0)
EventSetState(272, 8, true, true)
EventSetDirFrame(272, 8, 0, 3)
RemoveItem(205, 1, Null)
GotoWithNop(Scr_0x9B90, 0)

[Item_00206_Use]
JumpIfPartyNotFacingEvent(272, 5, 0)
EventSetState(272, 5, true, true)
EventSetDirFrame(272, 5, 0, 1)
RemoveItem(206, 1, Null)
GotoWithNop(Scr_0x9B90, 0)

[Item_00207_Use]
JumpIfPartyNotFacingEvent(272, 7, 0)
EventSetState(272, 7, true, true)
EventSetDirFrame(272, 7, 0, 5)
RemoveItem(207, 1, Null)
GotoWithNop(Scr_0x9B90, 0)

[Scr_0x9B90]
JumpIfEventStateMatches(272, 4, false, false, Null)
JumpIfEventStateMatches(272, 5, false, false, Null)
JumpIfEventStateMatches(272, 6, false, false, Null)
JumpIfEventStateMatches(272, 7, false, false, Null)
JumpIfEventStateMatches(272, 8, false, false, Null)
JumpIfEventStateMatches(272, 4, true, true, Null)
JumpIfEventStateMatches(272, 5, true, true, Null)
JumpIfEventStateMatches(272, 6, true, true, Null)
JumpIfEventStateMatches(272, 7, true, true, Null)
JumpIfEventStateMatches(272, 8, true, true, Null)
FadeOut(0)
SceneEnter(258)

[Scr_0x9B9D]
JumpIfCurrentSceneMatches(8, Scr_0x9BA0)
GotoWithNop(Scr_0x9789, 0)

[Scr_0x9BA0]
VideoUpdate(0, false)
EventSetTriggerScript(186, 4, Scr_0x7385)
SceneEnter(180)

[Item_00232_Use]
JumpIfPartyNotFacingEvent(254, 6, 2)
EventSetTriggerScript(254, 6, Scr_0x92A3)
RemoveItem(232, 1, Null)

[Item_00233_Use]
VideoUpdate(0, false)
SetDlgLower(0, 0x00000000, false)
//手卷上记载着：
//"飞龙探云手"以及"冰心诀"
//的口诀及图解还有一封信
VideoUpdate(0, false)
//信上写着：
//逍遥．．
//探云手乃你爹娘生前成名於江
//湖的绝技，现在是传给你的时
//候了，你要将此绝技用於正途
//切莫辱没你爹南盗侠的美名
RoleAddMagic(1, 83)
RoleAddMagic(1, 13)
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//李逍遥学得"飞龙探云手"
//及"冰心诀"二种绝技

[Item_00025_Use]
RoleSetStatus(false, 3, 3)

[Item_00234_Use]
EventSetPosToPartyAndObstacle(213, 1, true, true, Scr_0x9AF5)

[Item_00028_Use]
RoleCurePoisonByID(1, false)
RoleCurePoisonByID(3, false)

[Poison_00014_Player]
RoleModifyMP(20, false)

[Poison_00013_Player]
RoleModifyHP(20, false)

[Poison_00001_Player]
RoleModifyHP(-7, false)

[Poison_00001_Enemy]
EnemyModifyHP(7, false)

[Poison_00002_Player]
RoleModifyHP(-12, false)

[Poison_00002_Enemy]
EnemyModifyHP(12, false)

[Poison_00003_Player]
RoleModifyHP(-20, false)

[Poison_00003_Enemy]
EnemyModifyHP(20, false)

[Poison_00004_Player]
RoleModifyHP(-32, false)

[Poison_00004_Enemy]
EnemyModifyHP(32, false)

[Poison_00005_Player]
ReplaceAndPause()
ReplaceAndPause()
RoleModifyHP(-1, false)
ReplaceAndPause()
RoleModifyHP(-2, false)
ReplaceAndPause()
RoleModifyHP(-3, false)
ReplaceAndPause()
RoleModifyHP(-200, false)
RoleCurePoisonByID(5, false)

[Poison_00005_Enemy]
ReplaceAndPause()
EnemyModifyHP(111, false)
ReplaceAndPause()
EnemyModifyHP(222, false)
ReplaceAndPause()
EnemyModifyHP(333, false)
EnemyCurePoisonByID(5, false)

[Poison_00006_Player]
RoleModifyHP(-50, false)

[Poison_00007_Player]
RoleModifyHP(-50, false)

[Poison_00008_Player]
RoleModifyHP(-50, false)

[Poison_00009_Player]
RoleModifyHP(-50, false)

[Poison_00010_Player]
RoleModifyHP(-50, false)

[Poison_00006_Enemy]
EnemyModifyHP(100, false)

[Poison_00007_Enemy]
EnemyModifyHP(100, false)

[Poison_00008_Enemy]
EnemyModifyHP(100, false)

[Poison_00009_Enemy]
EnemyModifyHP(100, false)

[Poison_00010_Enemy]
EnemyModifyHP(100, false)

[Poison_00011_Enemy]
ReplaceAndPause()
EnemyModifyHP(1, false)
ReplaceAndPause()
EnemyModifyHP(2, false)
ReplaceAndPause()
EnemyModifyHP(3, false)
ReplaceAndPause()
EnemyModifyHP(4, false)
ReplaceAndPause()
EnemyModifyHP(5, false)
ReplaceAndPause()
EnemyModifyHP(6, false)
ReplaceAndPause()
EnemyModifyHP(7, false)
ReplaceAndPause()
EnemyModifyHP(8, false)
ReplaceAndPause()
SetDlgBox(0x00000000)
//由食妖虫炼成一只灵蛊
AddItem(85, 0)
EnemyCurePoisonByID(11, false)
ReplaceAndPause()

[Poison_00012_Enemy]
ReplaceAndPause()
EnemyModifyHP(1, false)
ReplaceAndPause()
EnemyModifyHP(2, false)
ReplaceAndPause()
EnemyModifyHP(3, false)
ReplaceAndPause()
EnemyModifyHP(4, false)
ReplaceAndPause()
EnemyModifyHP(5, false)
ReplaceAndPause()
EnemyModifyHP(6, false)
ReplaceAndPause()
EnemyModifyHP(7, false)
ReplaceAndPause()
EnemyModifyHP(8, false)
ReplaceAndPause()
SetDlgBox(0x00000000)
//由碧血蚕炼成一只赤血蚕
AddItem(89, 0)
EnemyCurePoisonByID(12, false)
ReplaceAndPause()

[Enemy_00102_TurnStart]
JumpIfHeroInParty(37, 39981)

[Scr_0x9C2D]
SetDlgLower(2-8-1, 0x00000000, false)
//通通退下．．他是我的朋友
//你们不可以乱来！
SetDlgUpper(0, 0x00000000, false)
//吱～　咕．．嘎．．
BattleEnemyEscape()
GotoWithProbability(30, Null)
SetDlgLower(1-3-1, 0x00000000, false)
//这～这些小妖怪真听你的话？
SetDlgUpper(2-1-1, 0x00000000, false)
//嗯．．它们是我师父养的
//在这里负责守护山谷入口
//所以看到陌生人就会攻击
//其实．．它们平常很乖的

[Enemy_00012_TurnStart]
JumpIfEnemyNotFirstOfKind(Null)
PlaySound(205)
//嘿．．嘿．．嘿．．
//又有香甜的人肉送上门来了
ReplaceAndPause()
//喔．．喔．．
//好像不太容易吃到喔．．
ReplaceAndPause()

[Enemy_00012_ReadyToAction]
ReplaceAndPause()
GotoWithProbability(60, Null)
EnemySummonMonster(433, 0, Null)
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()
EnemySummonMonster(433, 0, Null)
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySummonMonster(407, 2, Null)
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPauseWithNop(Enemy_00012_ReadyToAction, 0)

[Enemy_00005_BattleWon]
AddItem(44, 0)
SetDlgBox(0x00000000)
//捡到一颗鼠儿果

[Enemy_00004_BattleWon]
GotoWithProbability(20, Null)
AddItem(27, 0)
SetDlgBox(0x00000000)
//得到一颗雄黄

[Enemy_00003_BattleWon]
GotoWithProbability(22, Null)
AddItem(39, 0)
SetDlgBox(0x00000000)
//获得一棵止血草

[Enemy_00007_BattleWon]
GotoWithProbability(16, Null)
AddItem(71, 0)
SetDlgBox(0x00000000)
//得到蜂王蜜

[Enemy_00006_BattleWon]
GotoWithProbability(12, Null)
AddItem(55, 0)
SetDlgBox(0x00000000)
//获得一个蜂巢

[Enemy_00012_BattleWon]
AddItem(37, 0)
SetDlgBox(0x00000000)
//得到孟婆汤

[Enemy_00071_TurnStart]
SetDlgUpper(16-1-1, 0x00000000, false)
//求求你们．．相信奴家
//刘公子．．刘公子就快死了
SetDlgLower(3-3-1, 0x00000000, false)
//分明就是你这只妖怪想害死他
//还妄想装做好人！
EnemySetMagic(65241, 10)
ReplaceAndPause()
SetDlgUpper(16-1-1, 0x00000000, false)
//你们误会了，相公中了缠魂丝
//奴家这麽作是为了要救他
SetDlgLower(3-3-1, 0x00000000, false)
//你要想害人，先过我这一关
ReplaceAndPause()
SetDlgUpper(16-1-1, 0x00000000, false)
//对不起．．既然各位不相信奴家
//奴家只好得罪了
EnemySetMagic(61, 10)
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
BattleEnemyEscape()

[Enemy_00105_TurnStart]
EnemySetMagic(65241, 10)
SetDlgLower(1-5-1, 0x00000000, false)
//何方妖孽，竟敢在此撒野
//见了本大侠，还不束手就擒！
SetDlgUpper(3-4-1, 0x00000000, false)
//李大哥等一下．．．
VideoUpdate(0, false)
SetDlgUpper(50-1-1, 0x00000000, false)
//．．．．．．．　．　．
BattleEnemyEscape()
SetDlgBox(0x00000000)
//半人蛇妖撞破墙壁，逃走了

[Scr_0x9C99]
NPCSetStillTime()

[Scr_0x9C9B]
MusicPlay(1, false, 0.00)
FadeToRed()
SetDlgCenter(0, 0x00000000, false)
//$00
//胜败乃兵家常事也
//大侠请重新来过吧
//$02
LoadLastSave()

[Event_00006_00007_Auto]
NPCChase(6, 8)
GotoWithNop(Event_00006_00007_Auto, 0)

[Scr_0x9CA7]
NPCChase(6, 8)
GotoWithNop(Event_00006_00007_Auto, 0)

[Event_00006_00003_Auto]
NPCChase(4, 8)
GotoWithNop(Event_00006_00003_Auto, 0)

[Event_00060_00037_Auto]
NPCChase(0, 7)
GotoWithNop(Event_00060_00037_Auto, 0)

[Scr_0x9CB0]
NPCChase(8, 0)
ReplaceAndPauseWithNop(Scr_0x9CB0, 0)

[Event_00040_00003_Auto]
NPCChase(0, 0)
GotoWithNop(Event_00040_00003_Auto, 0)

[Event_00259_00042_Auto]
NPCChase(0, 12)
GotoWithNop(Event_00040_00003_Auto, 0)

[Event_00054_00005_Auto]
NPCChase(0, 8)
NPCChase(0, 8)
NPCChase(0, 8)
NPCChase(0, 8)
NPCSetDirFrame(65535, 0)
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPauseWithNop(Event_00054_00005_Auto, 0)

[Event_00180_00006_Auto]
NPCChase(0, 8)
NPCChase(0, 8)
NPCSetDirFrame(65535, 0)
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPauseWithNop(Event_00180_00006_Auto, 0)

[Event_00006_00005_Auto]
NPCChase(2, 6)
GotoWithNop(Event_00006_00005_Auto, 0)

[Event_00059_00074_Auto]
NPCChase(0, 9)
ReplaceAndPauseWithNop(Event_00059_00074_Auto, 0)

[Scr_0x9CCF]
NPCSetVanishTime(0)
FadeOut(0)

[Event_00006_00005_Trigger]
BattleStart(0, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Event_00006_00003_Trigger]
BattleStart(1, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Event_00006_00004_Trigger]
BattleStart(2, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Event_00006_00012_Trigger]
BattleStart(3, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Event_00006_00007_Trigger]
BattleStart(4, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Event_00006_00009_Trigger]
BattleStart(5, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Event_00006_00018_Trigger]
BattleStart(6, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Event_00040_00004_Trigger]
BattleStart(7, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Event_00006_00011_Trigger]
BattleStart(8, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Event_00006_00015_Trigger]
BattleStart(9, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Event_00006_00016_Trigger]
BattleStart(10, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Event_00006_00013_Trigger]
BattleStart(11, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Event_00006_00014_Trigger]
BattleStart(12, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Event_00250_00005_Trigger]
BattleStart(13, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Event_00040_00006_Trigger]
BattleStart(14, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Event_00016_00004_Trigger]
BattleStart(15, Scr_0x9C9B, Scr_0x9C99)
NPCSetVanishTime(150)
FadeOut(0)

[Event_00016_00003_Trigger]
BattleStart(16, Scr_0x9C9B, Scr_0x9C99)
NPCSetVanishTime(100)
FadeOut(0)

[Event_00016_00006_Trigger]
BattleStart(17, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Event_00076_00006_Trigger]
BattleStart(18, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Event_00070_00004_Trigger]
BattleStart(19, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Scr_0x9D10]
BattleStart(20, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Scr_0x9D13]
BattleStart(21, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Scr_0x9D16]
BattleStart(22, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Event_00071_00005_Trigger]
BattleStart(23, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Scr_0x9D1C]
BattleStart(24, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Scr_0x9D1F]
BattleStart(25, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Scr_0x9D22]
BattleStart(26, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Scr_0x9D25]
BattleStart(27, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Scr_0x9D28]
BattleStart(28, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Scr_0x9D2B]
BattleStart(29, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Scr_0x9D2E]
BattleStart(30, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Event_00087_00003_Trigger]
BattleStart(31, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Event_00087_00004_Trigger]
BattleStart(32, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Event_00070_00006_Trigger]
BattleStart(33, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Scr_0x9D3A]
BattleStart(34, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Scr_0x9D3D]
BattleStart(35, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Scr_0x9D40]
BattleStart(36, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Scr_0x9D43]
BattleStart(37, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Scr_0x9D46]
BattleStart(38, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Scr_0x9D49]
BattleStart(39, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Event_00016_00005_Trigger]
BattleStart(40, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Scr_0x9D4F]
BattleStart(41, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Scr_0x9D52]
BattleStart(42, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Event_00217_00011_Trigger]
BattleStart(43, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Event_00148_00011_Trigger]
BattleStart(44, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Enemy_00057_TurnStart]
JumpIfEnemyNotFirstOfKind(Null)
SetDlgLower(1-9-1, 0x00000000, false)
//灵儿！　咱们动手吧．．
//给这些流氓一些教训
SetDlgUpper(2-1-1, 0x00000000, false)
//可是～大娘交待过
//叫我们别惹事生非．．
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//这叫行侠仗义，不是惹事
SetDlgUpper(2-7-1, 0x00000000, false)
//那．．可是～
ObjectSetScript(3, 56, 0, Null)
ReplaceAndPause()

[Enemy_00088_TurnStart]
JumpIfHeroInParty(37, 40300)

[Scr_0x9D6C]
SetDlgUpper(25-1-1, 0x00000000, false)
//哦～你这小子可真是深藏不露
//我的手下告诉我说，那个胆大
//包天、不知死活、想跟我们拜
//月教作对的．．就是你？
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//彼此彼此～小的也没想到客倌
//您会是个豺子狼心、强掳弱女
//的江湖败类
VideoUpdate(0, false)
SetDlgUpper(25-1-1, 0x00000000, false)
//呸！你可知道你在做什麽吗？
VideoUpdate(0, false)
SetDlgUpper(25-1-1, 0x00000000, false)
//我们是苗疆拜月教的使者，这
//趟到中原来，为的是一项攸关
//我苗疆数百万苗民兴亡存续的
//重大任务，你若再插手阻扰，
//将是与我全族人为敌！
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//别跟我说这些我听不懂的大话
//有哪个干强盗的不会编理由？
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//我只管我看到的．．你们杀人
//行凶、强掳少女。嘿～被我遇
//上了就算是你们的报应！
VideoUpdate(0, false)
SetDlgUpper(25-1-1, 0x00000000, false)
//．．．．公主殿下！
//请你跟我们回苗疆，我们奉了
//巫王之命，不惜任何代价也一
//定要找到你，把你带回去
VideoUpdate(0, false)
SetDlgLower(2-6-1, 0x00000000, false)
//不要！你们杀了姥姥
//还我姥姥的命来！
VideoUpdate(0, false)
SetDlgUpper(25-1-1, 0x00000000, false)
//乱臣贼子，人人得而诛之！
//这老妖婆将你偷抱出宫逃到中
//原来。害得你和你父王骨肉分
//离十年，是个大叛徒！
//居然还让你拜师水月宫的门下
//让你学习汉人邪魔外道的法术
//你可知这十年来．．
SetDlgLower(2-8-1, 0x00000000, false)
//你胡说！　我．．我没有爹
//姥姥说我爹爹早死了
VideoUpdate(0, false)
SetDlgUpper(25-1-1, 0x00000000, false)
//你亲生爹爹是巫王
//统领苗疆各族的领袖
VideoUpdate(0, false)
SetDlgUpper(25-1-1, 0x00000000, false)
//你被带离开王宫时才六岁
//那时候你还小，所以不明白
VideoUpdate(0, false)
SetDlgLower(2-6-1, 0x00000000, false)
//骗人～你们骗人！
//我不要再见到你们，你们走开
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//喂！公主叫你们滚听到了没？
VideoUpdate(0, false)
SetDlgUpper(25-1-1, 0x00000000, false)
//臭小子！这里没你说话的余地
//你胆敢再阻饶，我连你也杀！
VideoUpdate(0, false)
SetDlgLower(2-8-1, 0x00000000, false)
//不要！我才不要相信你们的话
//我要跟逍遥哥哥一起去找我娘
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//听到了没有～灵儿说不跟你们
//走，就是不跟你们走，识相的
//就快滚吧。不然我可要赶人了
SetDlgUpper(25-1-1, 0x00000000, false)
//好～莫怪我们来硬的！
ObjectSetScript(3, 87, 0, Null)
ReplaceAndPause()

[Enemy_00083_TurnStart]
SetDlgUpper(3-3-1, 0x00000000, false)
//让开！！
SetDlgLower(1-5-1, 0x00000000, false)
//太过份了！虽然是你的奴仆
//你也不能草菅人命！
VideoUpdate(0, false)
SetDlgUpper(3-2-1, 0x00000000, false)
//我爱怎麽做就怎麽做
//你管不着！
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//很不巧！我李逍遥生平最恨的
//就是欺侮弱小的人，既然被我
//遇上了，就不容你仗势欺人！
SetDlgUpper(3-2-1, 0x00000000, false)
//好！我打的你说不出话来！
ReplaceAndPause()

[Enemy_00086_TurnStart]
SetDlgUpper(3-2-1, 0x00000000, false)
//喂．．小贼！
VideoRestore()
//本姑娘不想欺负受伤的人
//只要你向本姑娘磕三个响头
//本姑娘也可以饶了你！
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//这你不用担心。　这点小伤
//本公子才不放在眼里，你尽管
//放马过来
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//好～　是你找的！
//输了～可别怪我欺你有伤在身
SetDlgLower(1-9-1, 0x00000000, false)
//彼此～彼此～　你输了．．
//也别说本公子欺负女孩子！
MusicStop()
VideoUpdate(0, false)
SetDlgUpper(3-1-1, 0x00000000, false)
//哼～　放马过来吧！~10
PlaySound(213)
Delay(20)
MusicPlay(38, true, 0.00)
ReplaceAndPause()

[Enemy_00081_TurnStart]
JumpIfHeroInParty(38, 40437)
ReplaceAndPause()
PlaySound(193)
SetDlgUpper(10-1-1, 0x00000000, false)
//嘿！　小帅哥．．身手不赖嘛
//可惜奴家没空陪您玩了
BattleEnemyEscape()

[Scr_0x9DF5]
SetDlgUpper(10-1-1, 0x00000000, false)
//女飞贼：
//想抓我？　门都没有！
EnemySetMagic(87, 10)
ReplaceAndPause()
PlaySound(193)
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(49, 10)
ReplaceAndPause()

[Enemy_00099_TurnStart]
JumpIfHeroInParty(41, 40489)
SetDlgLower(2-8-1, 0x00000000, false)
//赵灵儿：
//快把梦慈姐姐放了！
VideoUpdate(0, false)
SetDlgUpper(26-1-1, 0x00000000, false)
//石长老：
//公主殿下请放心，我们的
//目的不是韩姑娘。只要殿
//下跟我们走，我们绝不为
//难其他任何人
VideoUpdate(0, false)
SetDlgLower(2-1-1, 0x00000000, false)
//赵灵儿：
//你们把梦慈姐姐抓来
//就是为了把我们引来？
VideoUpdate(0, false)
SetDlgUpper(26-1-1, 0x00000000, false)
//石长老：
//为了大事，用了一点手段
//还请殿下见谅．．
VideoUpdate(0, false)
SetDlgLower(1-7-1, 0x00000000, false)
//李逍遥：
//死了这条心吧！
//灵儿不会跟你们走的
VideoUpdate(0, false)
SetDlgUpper(26-1-1, 0x00000000, false)
//石长老：
//哦？　如果软的不行
//要我们来硬的也可以！
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//来呀！　怕你不成？
VideoUpdate(0, false)
SetDlgUpper(26-1-1, 0x00000000, false)
//石长老：
//哼！　不知死活的小子
ReplaceAndPause()

[Scr_0x9E29]
SetDlgUpper(26-1-1, 0x00000000, false)
//石长老：
//别以为仗着人多就能赢得了我
VideoUpdate(0, false)
SetDlgLower(12-1-1, 0x00000000, false)
//盖罗娇：
//好说．．石老长您虽神功盖世
//终究要叹岁月不饶人吧
VideoUpdate(0, false)
SetDlgUpper(26-1-1, 0x00000000, false)
//石长老：
//哼！　老夫就算敌不过你
//也要拼个同归於尽
EnemySetMagic(84, 10)
ReplaceAndPause()
ReplaceAndPause()
EnemySetMagic(34, 10)
ReplaceAndPause()
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(65241, 10)
BattleSetResult(0)

[Enemy_00128_TurnStart]
SetDlgUpper(0, 0x00000000, false)
//林天南：
//拿出你的真本领吧！
//不然．．死在我的剑下
//就别怨我
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
SetDlgUpper(0, 0x00000000, false)
//林天南：
//　注意罗！
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
BattleSetResult(0)

[Enemy_00128_ReadyToAction]
EnemySetMagic(0, 10)
ReplaceAndPause()
SetDlgUpper(0, 0x00000000, false)
//林天南：
//好～　第二剑！
EnemySetMagic(43, 10)
ReplaceAndPause()
EnemySetMagic(45, 10)
ReplaceAndPause()
EnemySetMagic(94, 10)
ReplaceAndPause()
EnemySetMagic(86, 10)
ReplaceAndPause()
EnemySetMagic(85, 10)
ReplaceAndPause()
//林天南：
//最後一招～看清楚了！
EnemySetMagic(48, 10)
ReplaceAndPause()

[Enemy_00038_TurnStart]
PlaySound(245)
//蜘蛛精：
//不自量力的家伙！
ReplaceAndPause()
ReplaceAndPause()
//蜘蛛精：
//可恶！　你们点厉害瞧瞧！
EnemySetMagic(23, 10)
ReplaceAndPause()
ReplaceAndPause()
//蜘蛛精：
//哇～哈～哈～受不住了吧！
//我还有更厉害的招术
EnemySetMagic(24, 10)
ReplaceAndPause()
ReplaceAndPause()
//蜘蛛精：
//死吧！
EnemySetMagic(25, 10)
ReplaceAndPause()
BattleSetResult(0)

[Scr_0x9E7B]
BattleStart(45, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00217_00016_Trigger]
BattleStart(46, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00042_00007_Trigger]
BattleStart(47, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(48, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00041_00011_Trigger]
BattleStart(49, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00040_00007_Trigger]
BattleStart(50, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00040_00010_Trigger]
BattleStart(51, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00045_00009_Trigger]
BattleStart(52, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00080_00004_Trigger]
BattleStart(53, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00065_00072_Trigger]
BattleStart(54, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00040_00017_Trigger]
BattleStart(55, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00040_00018_Trigger]
BattleStart(56, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00040_00013_Trigger]
BattleStart(57, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00054_00008_Trigger]
BattleStart(58, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00060_00054_Trigger]
BattleStart(59, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00060_00052_Trigger]
BattleStart(60, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00060_00033_Trigger]
BattleStart(61, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00063_00011_Trigger]
BattleStart(62, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00060_00067_Trigger]
BattleStart(63, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00061_00011_Trigger]
BattleStart(64, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00060_00031_Trigger]
BattleStart(65, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00060_00042_Trigger]
BattleStart(66, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00059_00085_Trigger]
BattleStart(67, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00060_00039_Trigger]
BattleStart(68, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00060_00032_Trigger]
BattleStart(69, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00060_00035_Trigger]
BattleStart(70, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00060_00036_Trigger]
BattleStart(71, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00060_00055_Trigger]
BattleStart(72, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00060_00043_Trigger]
BattleStart(73, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00060_00056_Trigger]
BattleStart(74, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00060_00038_Trigger]
BattleStart(75, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00060_00058_Trigger]
BattleStart(76, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00060_00040_Trigger]
BattleStart(77, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00064_00016_Trigger]
BattleStart(78, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00060_00044_Trigger]
BattleStart(79, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00060_00041_Trigger]
BattleStart(80, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00059_00076_Trigger]
BattleStart(81, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00059_00091_Trigger]
BattleStart(82, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00065_00070_Trigger]
BattleStart(83, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00059_00073_Trigger]
BattleStart(84, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(85, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00059_00074_Trigger]
BattleStart(86, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00059_00078_Trigger]
BattleStart(87, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00059_00077_Trigger]
BattleStart(88, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00059_00089_Trigger]
BattleStart(89, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00059_00082_Trigger]
BattleStart(90, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00059_00075_Trigger]
BattleStart(91, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00059_00097_Trigger]
BattleStart(92, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00102_00016_Trigger]
BattleStart(93, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00101_00018_Trigger]
BattleStart(94, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00165_00019_Trigger]
BattleStart(95, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00080_00008_Trigger]
BattleStart(96, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00102_00012_Trigger]
BattleStart(97, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(98, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00080_00010_Trigger]
BattleStart(99, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(100, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00102_00021_Trigger]
BattleStart(101, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00076_00013_Trigger]
BattleStart(102, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(103, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00071_00007_Trigger]
BattleStart(104, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00070_00005_Trigger]
BattleStart(105, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00070_00007_Trigger]
BattleStart(106, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00076_00009_Trigger]
BattleStart(107, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(108, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00072_00004_Trigger]
BattleStart(109, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00076_00010_Trigger]
BattleStart(110, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00073_00003_Trigger]
BattleStart(111, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(112, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(113, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00076_00004_Trigger]
BattleStart(114, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00059_00083_Trigger]
BattleStart(115, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00059_00081_Trigger]
BattleStart(116, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00101_00019_Trigger]
BattleStart(117, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00080_00007_Trigger]
BattleStart(118, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00040_00005_Trigger]
BattleStart(119, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00113_00006_Trigger]
BattleStart(120, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00102_00017_Trigger]
BattleStart(121, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00104_00012_Trigger]
BattleStart(122, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00042_00009_Trigger]
BattleStart(123, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00042_00008_Trigger]
BattleStart(124, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00101_00013_Trigger]
BattleStart(125, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00101_00008_Trigger]
BattleStart(126, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(127, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(128, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00101_00021_Trigger]
BattleStart(129, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00101_00017_Trigger]
BattleStart(130, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00102_00014_Trigger]
BattleStart(131, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00102_00018_Trigger]
BattleStart(132, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00101_00010_Trigger]
BattleStart(133, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00101_00011_Trigger]
BattleStart(134, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00101_00016_Trigger]
BattleStart(135, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00101_00014_Trigger]
BattleStart(136, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00101_00012_Trigger]
BattleStart(137, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(138, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00139_00005_Trigger]
BattleStart(139, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(140, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00139_00011_Trigger]
BattleStart(141, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00139_00013_Trigger]
BattleStart(142, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00139_00006_Trigger]
BattleStart(143, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00139_00014_Trigger]
BattleStart(144, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00139_00007_Trigger]
BattleStart(145, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00139_00009_Trigger]
BattleStart(146, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00139_00010_Trigger]
BattleStart(147, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00139_00008_Trigger]
BattleStart(148, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(149, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(150, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00161_00006_Trigger]
BattleStart(151, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00161_00008_Trigger]
BattleStart(152, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(153, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00161_00007_Trigger]
BattleStart(154, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00161_00009_Trigger]
BattleStart(155, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00161_00004_Trigger]
BattleStart(156, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00161_00003_Trigger]
BattleStart(157, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00161_00011_Trigger]
BattleStart(158, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(159, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00161_00005_Trigger]
BattleStart(160, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(161, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00161_00010_Trigger]
BattleStart(162, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(163, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00148_00020_Trigger]
BattleStart(164, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00148_00009_Trigger]
BattleStart(165, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00148_00010_Trigger]
BattleStart(166, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00148_00018_Trigger]
BattleStart(167, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00154_00027_Trigger]
BattleStart(168, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00154_00009_Trigger]
BattleStart(169, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00154_00010_Trigger]
BattleStart(170, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00154_00018_Trigger]
BattleStart(171, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00165_00006_Trigger]
BattleStart(172, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(173, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00147_00011_Trigger]
BattleStart(174, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00147_00007_Trigger]
BattleStart(175, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00154_00030_Trigger]
BattleStart(176, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00147_00008_Trigger]
BattleStart(177, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00148_00014_Trigger]
BattleStart(178, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00147_00006_Trigger]
BattleStart(179, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00148_00022_Trigger]
BattleStart(180, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00148_00013_Trigger]
BattleStart(181, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00148_00016_Trigger]
BattleStart(182, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00147_00009_Trigger]
BattleStart(183, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00147_00012_Trigger]
BattleStart(184, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00147_00014_Trigger]
BattleStart(185, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(186, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00156_00035_Trigger]
BattleStart(187, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(188, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(189, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00185_00081_Trigger]
BattleStart(190, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(191, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(192, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00192_00063_Trigger]
BattleStart(193, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(194, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00185_00088_Trigger]
BattleStart(195, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00185_00083_Trigger]
BattleStart(196, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00185_00082_Trigger]
BattleStart(197, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(198, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00185_00084_Trigger]
BattleStart(199, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00185_00085_Trigger]
BattleStart(200, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00185_00086_Trigger]
BattleStart(201, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00189_00004_Trigger]
BattleStart(202, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(203, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00180_00005_Trigger]
BattleStart(204, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00184_00007_Trigger]
BattleStart(205, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00180_00010_Trigger]
BattleStart(206, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00180_00003_Trigger]
BattleStart(207, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00180_00008_Trigger]
BattleStart(208, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00184_00012_Trigger]
BattleStart(209, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00184_00016_Trigger]
BattleStart(210, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00184_00018_Trigger]
BattleStart(211, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(212, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00180_00009_Trigger]
BattleStart(213, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00180_00004_Trigger]
BattleStart(214, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00189_00009_Trigger]
BattleStart(215, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00180_00006_Trigger]
BattleStart(216, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00180_00011_Trigger]
BattleStart(217, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00184_00009_Trigger]
BattleStart(218, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00184_00006_Trigger]
BattleStart(219, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00184_00011_Trigger]
BattleStart(220, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(221, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(222, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(223, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(224, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00200_00015_Trigger]
BattleStart(225, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00200_00014_Trigger]
BattleStart(226, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00212_00003_Trigger]
BattleStart(227, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00200_00024_Trigger]
BattleStart(228, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00200_00016_Trigger]
BattleStart(229, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00200_00013_Trigger]
BattleStart(230, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00200_00043_Trigger]
BattleStart(231, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00212_00004_Trigger]
BattleStart(232, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00200_00018_Trigger]
BattleStart(233, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00040_00009_Trigger]
BattleStart(234, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00260_00059_Trigger]
BattleStart(235, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00260_00058_Trigger]
BattleStart(236, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00260_00065_Trigger]
BattleStart(237, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00260_00063_Trigger]
BattleStart(238, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00259_00043_Trigger]
BattleStart(239, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00287_00014_Trigger]
BattleStart(240, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00260_00057_Trigger]
BattleStart(241, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00285_00009_Trigger]
BattleStart(242, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(243, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00231_00023_Trigger]
BattleStart(244, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00231_00019_Trigger]
BattleStart(245, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00231_00016_Trigger]
BattleStart(246, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00231_00031_Trigger]
BattleStart(247, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00231_00036_Trigger]
BattleStart(248, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00231_00029_Trigger]
BattleStart(249, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00231_00028_Trigger]
BattleStart(250, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00231_00015_Trigger]
BattleStart(251, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00231_00018_Trigger]
BattleStart(252, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00231_00027_Trigger]
BattleStart(253, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00231_00021_Trigger]
BattleStart(254, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00231_00033_Trigger]
BattleStart(255, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00231_00017_Trigger]
BattleStart(256, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00231_00022_Trigger]
BattleStart(257, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00233_00023_Trigger]
BattleStart(258, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00231_00025_Trigger]
BattleStart(259, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00233_00015_Trigger]
BattleStart(260, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(261, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00286_00010_Trigger]
BattleStart(262, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00286_00012_Trigger]
BattleStart(263, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00279_00019_Trigger]
BattleStart(264, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00287_00006_Trigger]
BattleStart(265, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(266, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00286_00016_Trigger]
BattleStart(267, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00279_00007_Trigger]
BattleStart(268, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00279_00017_Trigger]
BattleStart(269, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(270, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00279_00015_Trigger]
BattleStart(271, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00279_00010_Trigger]
BattleStart(272, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00218_00007_Trigger]
BattleStart(273, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00292_00014_Trigger]
BattleStart(274, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00289_00006_Trigger]
BattleStart(275, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00279_00008_Trigger]
BattleStart(276, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00286_00014_Trigger]
BattleStart(277, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00287_00009_Trigger]
BattleStart(278, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00222_00016_Trigger]
BattleStart(279, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00289_00013_Trigger]
BattleStart(280, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00287_00013_Trigger]
BattleStart(281, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00288_00011_Trigger]
BattleStart(282, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00291_00024_Trigger]
BattleStart(283, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00219_00004_Trigger]
BattleStart(284, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00279_00006_Trigger]
BattleStart(285, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00279_00025_Trigger]
BattleStart(286, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00279_00024_Trigger]
BattleStart(287, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00279_00009_Trigger]
BattleStart(288, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00279_00011_Trigger]
BattleStart(289, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00286_00007_Trigger]
BattleStart(290, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00279_00012_Trigger]
BattleStart(291, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00279_00005_Trigger]
BattleStart(292, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(293, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00154_00008_Trigger]
BattleStart(294, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00156_00034_Trigger]
BattleStart(295, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00076_00011_Trigger]
BattleStart(296, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(297, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(298, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(299, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00054_00005_Trigger]
BattleStart(300, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00044_00012_Trigger]
BattleStart(301, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00040_00003_Trigger]
BattleStart(302, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00059_00086_Trigger]
BattleStart(303, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00059_00094_Trigger]
BattleStart(304, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00288_00008_Trigger]
BattleStart(314, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00260_00053_Trigger]
BattleStart(316, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00260_00055_Trigger]
BattleStart(317, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00260_00064_Trigger]
BattleStart(318, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00259_00042_Trigger]
BattleStart(319, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00224_00002_Trigger]
BattleStart(320, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(321, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00223_00014_Trigger]
BattleStart(322, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(323, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00219_00013_Trigger]
BattleStart(324, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(325, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00223_00012_Trigger]
BattleStart(326, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(327, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00219_00007_Trigger]
BattleStart(328, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00219_00009_Trigger]
BattleStart(329, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00217_00008_Trigger]
BattleStart(330, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(331, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00219_00005_Trigger]
BattleStart(332, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00220_00026_Trigger]
BattleStart(333, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00217_00019_Trigger]
BattleStart(334, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00217_00014_Trigger]
BattleStart(335, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(336, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00218_00021_Trigger]
BattleStart(337, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(338, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(339, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00148_00030_Trigger]
BattleStart(340, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00220_00028_Trigger]
BattleStart(341, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00218_00017_Trigger]
BattleStart(342, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00218_00009_Trigger]
BattleStart(343, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00218_00013_Trigger]
BattleStart(344, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(345, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00218_00020_Trigger]
BattleStart(346, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00218_00016_Trigger]
BattleStart(347, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00222_00006_Trigger]
BattleStart(348, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00212_00007_Trigger]
BattleStart(349, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(350, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00224_00003_Trigger]
BattleStart(351, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00219_00011_Trigger]
BattleStart(352, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00217_00021_Trigger]
BattleStart(353, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(354, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00218_00015_Trigger]
BattleStart(355, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00219_00014_Trigger]
BattleStart(356, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00223_00009_Trigger]
BattleStart(357, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00220_00030_Trigger]
BattleStart(358, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00220_00033_Trigger]
BattleStart(359, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(360, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(361, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(362, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00222_00015_Trigger]
BattleStart(363, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00222_00018_Trigger]
BattleStart(364, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00226_00031_Trigger]
BattleStart(365, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(366, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00226_00041_Trigger]
BattleStart(367, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00226_00032_Trigger]
BattleStart(368, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00226_00033_Trigger]
BattleStart(369, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00226_00034_Trigger]
BattleStart(370, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00226_00035_Trigger]
BattleStart(371, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00226_00036_Trigger]
BattleStart(372, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00226_00037_Trigger]
BattleStart(373, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00189_00013_Trigger]
BattleStart(374, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00190_00005_Trigger]
BattleStart(375, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00190_00008_Trigger]
BattleStart(376, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00190_00013_Trigger]
BattleStart(377, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
[Event_00148_00012_Trigger]
BattleStart(378, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(379, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)
BattleStart(380, Scr_0x9C9B, Scr_0x9C99)
GotoWithNop(Scr_0x9CCF, 0)

[Enemy_00132_TurnStart]
SetDlgLower(3-3-1, 0x00000000, false)
//你这臭妖怪，恩将仇报！
VideoUpdate(0, false)
SetDlgUpper(11-1-1, 0x00000000, false)
//我们鬼族报答人类的方式
//就是吃了对方的身体，让
//他们成为我们的伙伴！
EnemySetMagic(0, 10)
ReplaceAndPause()
EnemySetMagic(40, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()
EnemySetMagic(24, 10)
ReplaceAndPause()
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()
EnemySetMagic(88, 10)
ReplaceAndPause()
EnemySetMagic(40, 10)
ReplaceAndPause()
EnemySetMagic(36, 10)
ReplaceAndPause()
SetDlgLower(1-10-1, 0x00000000, false)
//李逍遥：
//等等～！
BattleSetResult(0)

[Enemy_00122_TurnStart]
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//灵儿犯了什麽罪？
//你们要如此迫害於她！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//镇狱明王：
//此蛇女具有极可怕的妖力潜能
//如不将之铲除，一旦任其觉醒
//必将危祸人世！
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//是妖怪又怎麽样
//她又不曾害过任何人！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//镇狱明王：
//哼！幼虎虽温驯，谁敢保证将
//来不会成为一头吃人的猛虎？
VideoRestore()
//我既受命镇守此塔，斩除魔
//族祸根乃我职责天命所在，
//绝不容情！
VideoUpdate(0, false)
SetDlgLower(1-5-1, 0x00000000, false)
//李逍遥：
//放屁！　神又怎麽样
//生了六只手、三只眼睛
//一付嘴脸比妖怪更像妖怪
VideoRestore()
//灵儿天生灵力高强，是她的
//福气！　你们嫉妒什麽！？
//你呢～　你不也是法力无边
//怎麽不先杀掉你自己？
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//镇狱明王：
//无知愚民！我乃仙界之神明
//不同於这般下等山精水怪
VideoUpdate(0, false)
//汝等回头是岸，莫与妖魔为伍
//而逆天行事！　否则一并打入
//炼狱之中，受永世劫火之苦！
VideoUpdate(0, false)
SetDlgLower(50-2-1, 0x00000000, false)
//赵灵儿：
//我娘乃是女娲氏嫡系族裔
//我身虽为妖，心却非魔
//你怎可凭此而加罪於我！
VideoUpdate(0, false)
SetDlgUpper(0, 0x00000000, false)
//镇狱明王：
//女娲？　西天如来座下、天界
//神佛之中，并无此号人物在列
VideoRestore()
//汝之先祖～只不过是南夷苗
//民女巫所崇拜的圣灵罢了
//当今人世业已深受我佛教化
//旁门左道再无须容身之理！
//觉悟吧！！
ReplaceAndPause()
SetDlgLower(50-2-1, 0x00000000, false)
//赵灵儿：
//$06上天既赐予我不同於凡人之力
//就有我必须去做的事，我若死
//於此，不但有愧天地，更对不
//起千千万万崇拜我的苗民黔首~60
VideoRestore()
//$04道归道、魔归魔、而我是我
//$02神佛也不能决定我的命运！~70
MusicPlay(18, true, 0.00)
RoleModifyAttr(2, 7, 170)
RoleModifyAttr(2, 8, 190)
RoleModifyAttr(2, 6, 11)
RoleModifyAttr(2, 17, 100)
RoleModifyAttr(2, 18, 155)
RoleModifyAttr(2, 19, 55)
RoleModifyAttr(2, 20, 80)
RoleModifyAttr(2, 21, 30)
RoleRevive(10, true)
RoleModifyHPMP(9999, true)
ShowRoleMagicAction(2)
VideoUpdate(0, false)
SetDlgCenter(0, 0x00000000, false)
//"赵灵儿力量觉醒"~45
VideoUpdate(0, false)
SetDlgLower(1-9-1, 0x00000000, false)
//李逍遥：
//跟他拼了！~45
VideoUpdate(0, false)
SetDlgLower(3-1-1, 0x00000000, false)
//林月如：
//好　～！~45
EnemySetMagic(88, 10)
ReplaceAndPause()
[Scr_0xA185]
EnemySetMagic(0, 10)
ReplaceAndPause()
EnemySetMagic(36, 10)
ReplaceAndPause()
EnemySetMagic(25, 10)
ReplaceAndPause()
ReplaceAndPause()
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(36, 10)
ReplaceAndPause()
EnemySetMagic(40, 10)
ReplaceAndPause()
EnemySetMagic(24, 10)
ReplaceAndPause()
EnemySetMagic(30, 10)
ReplaceAndPause()
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(36, 10)
ReplaceAndPause()
EnemySetMagic(24, 10)
ReplaceAndPause()
EnemySetMagic(25, 10)
ReplaceAndPause()
EnemySummonMonster(448, 0, Null)
EnemySummonMonster(448, 0, Null)
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(88, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()
EnemySetMagic(88, 10)
ReplaceAndPause()
ReplaceAndPause()
EnemySetMagic(36, 10)
ReplaceAndPause()
EnemySetMagic(40, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()
EnemySetMagic(24, 10)
ReplaceAndPause()
ReplaceAndPause()
EnemySummonMonster(448, 2, Null)
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(25, 10)
ReplaceAndPauseWithNop(Scr_0xA185, 0)

[Enemy_00122_ReadyToAction]
SetDlgLower(0, 0x00000000, false)
//镇狱明王：
//哼　一群邪魔外道
//让你们永世不得超生！~50
ReplaceAndPause()
SetDlgLower(0, 0x00000000, false)
//镇狱明王：
//愚蠢的人类！下地狱吧！~50
ReplaceAndPause()

[Enemy_00142_TurnStart]
ReplaceAndPause()
ReplaceAndPause()
EnemySetMagic(65241, 10)
ReplaceAndPause()
GotoWithProbability(80, Scr_0xA1CB)
GotoWithProbability(50, Scr_0xA1CE)
EnemySetMagic(78, 4)
ReplaceAndPauseWithNop(Enemy_00142_TurnStart, 0)

[Scr_0xA1CB]
EnemySetMagic(79, 3)
ReplaceAndPauseWithNop(Enemy_00142_TurnStart, 0)

[Scr_0xA1CE]
EnemySetMagic(58, 4)
ReplaceAndPauseWithNop(Enemy_00142_TurnStart, 0)

[Event_00101_00008_Auto]
NPCChase(8, 10)
NPCChase(8, 10)
NPCChase(8, 10)
EventAnimate(-1, 0)
WaitEventAutoScriptRun(4, false, false)
ReplaceAndPauseWithNop(Event_00101_00008_Auto, 0)

[Enemy_00127_BattleWon]
AddItem(154, 0)
SetDlgBox(0x00000000)
//得到罗汉袍

[Enemy_00097_BattleWon]
AddItem(156, 0)
SetDlgBox(0x00000000)
//得到天师道袍

[Enemy_00122_BattleWon]
AddItem(170, 0)
SetDlgBox(0x00000000)
//得到菩提袈裟

[Enemy_00072_ReadyToAction]
GotoWithProbability(40, Null)
ReplaceAndPause()
EnemySetMagic(9, 10)
ReplaceAndPause()
EnemySummonMonster(403, 4, Null)
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(22, 10)
ReplaceAndPause()
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()
EnemySetMagic(23, 10)
GotoWithProbability(40, Null)
EnemySetMagic(0, 10)
ReplaceAndPause()
EnemySetMagic(9, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
GotoWithProbability(50, Null)
ReplaceAndPause()
EnemySummonMonster(403, 4, Null)
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(23, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPauseWithNop(Enemy_00072_ReadyToAction, 0)

[Enemy_00089_ReadyToAction]
GotoWithProbability(30, Null)
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
//蛇妖：
//可恶的人类～死吧！~45
EnemySetMagic(44, 10)
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()
ReplaceAndPauseWithNop(Enemy_00089_ReadyToAction, 0)

[Enemy_00075_TurnStart]
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(63, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()
EnemySetMagic(77, 10)
ReplaceAndPause()
EnemySetMagic(11, 10)
ReplaceAndPause()
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(63, 10)
ReplaceAndPause()
ReplaceAndPause()
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(77, 10)
ReplaceAndPause()
ReplaceAndPause()
EnemySetMagic(11, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()
ReplaceAndPause()
EnemySetMagic(77, 10)
ReplaceAndPause()
EnemySetMagic(63, 10)
ReplaceAndPause()
EnemySetMagic(65241, 10)
ReplaceAndPause()
ReplaceAndPauseWithNop(Enemy_00075_TurnStart, 0)

[Enemy_00076_ReadyToAction]
EnemySetMagic(0, 10)
ReplaceAndPause()
ReplaceAndPause()
EnemySummonMonster(419, 2, Null)
EnemySetMagic(65241, 10)
ReplaceAndPause()
PlaySound(267)
EnemySetMagic(64, 10)
ReplaceAndPause()
EnemySetMagic(33, 10)
ReplaceAndPause()
EnemySetMagic(39, 10)
ReplaceAndPause()
EnemySetMagic(10, 10)
ReplaceAndPause()
EnemySummonMonster(433, 2, Scr_0xA246)
EnemySetMagic(65241, 10)
[Scr_0xA246]
ReplaceAndPause()
PlaySound(267)
EnemySetMagic(64, 10)
ReplaceAndPause()
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()
EnemySetMagic(10, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()
PlaySound(267)
EnemySetMagic(64, 10)
ReplaceAndPause()
PlaySound(267)
EnemySetMagic(64, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()
EnemySummonMonster(452, 2, Scr_0xA25C)
EnemySetMagic(65241, 10)
ReplaceAndPause()
[Scr_0xA25C]
EnemySetMagic(23, 10)
ReplaceAndPause()
EnemySetMagic(34, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()
EnemySummonMonster(433, 2, Scr_0xA265)
EnemySetMagic(65241, 10)
ReplaceAndPause()
[Scr_0xA265]
PlaySound(267)
EnemySetMagic(64, 10)
ReplaceAndPause()
EnemySetMagic(23, 10)
ReplaceAndPauseWithNop(Enemy_00076_ReadyToAction, 0)

[Enemy_00097_TurnStart]
EnemySetMagic(55, 10)
ReplaceAndPause()
ReplaceAndPause()
EnemySetMagic(67, 10)
ReplaceAndPause()
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(55, 10)
ReplaceAndPause()
EnemySetMagic(43, 10)
ReplaceAndPause()
EnemySetMagic(67, 10)
ReplaceAndPause()
EnemySetMagic(55, 10)
ReplaceAndPause()
EnemySetMagic(43, 10)
ReplaceAndPause()
EnemySetMagic(67, 10)
ReplaceAndPause()
EnemySetMagic(94, 10)
ReplaceAndPause()
EnemySetMagic(55, 10)
ReplaceAndPause()
EnemySetMagic(67, 10)
ReplaceAndPause()
ReplaceAndPauseWithNop(Enemy_00097_TurnStart, 0)

[Enemy_00133_TurnStart]
EnemySetMagic(18, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()

[Enemy_00137_TurnStart]
ReplaceAndPause()
EnemyClone(0, Null)
ReplaceAndPauseWithNop(Enemy_00137_TurnStart, 0)

[Enemy_00005_ReadyToAction]
ReplaceAndPause()
GotoWithProbability(60, Null)
EnemyTransform(470)
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(65, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()
EnemySetMagic(65, 7)
ReplaceAndPause()

[Enemy_00032_ReadyToAction]
ReplaceAndPause()
ReplaceAndPause()
GotoWithProbability(35, Null)
EnemyTransform(461)
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(23, 5)
ReplaceAndPause()

[Enemy_00013_ReadyToAction]
ReplaceAndPause()
GotoWithProbability(60, Null)
EnemyTransform(434)
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()
GotoWithProbability(60, Null)
EnemyTransform(410)
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(32, 7)
ReplaceAndPauseWithNop(Enemy_00013_ReadyToAction, 0)

[Enemy_00025_ReadyToAction]
GotoWithProbability(41653, Null)
EnemySetMagic(11, 10)
ReplaceAndPause()
[Scr_0xA2B5]
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(11, 10)
ReplaceAndPauseWithNop(Scr_0xA2B5, 0)

[Enemy_00103_ReadyToAction]
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(82, 10)
ReplaceAndPause()
EnemySetMagic(82, 10)
ReplaceAndPause()
EnemySetMagic(11, 10)
ReplaceAndPause()
ReplaceAndPause()
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(58, 10)
ReplaceAndPause()
EnemySetMagic(82, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()
EnemySetMagic(11, 10)
ReplaceAndPause()
ReplaceAndPause()
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()
EnemySetMagic(77, 10)
ReplaceAndPause()
EnemySetMagic(77, 10)
ReplaceAndPause()
ReplaceAndPause()
EnemySetMagic(11, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()
ReplaceAndPauseWithNop(Enemy_00103_ReadyToAction, 0)

[Enemy_00024_ReadyToAction]
GotoWithProbability(60, Scr_0xA2EB)
GotoWithProbability(60, Null)
EnemySummonMonster(441, 2, Null)
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()
EnemySummonMonster(441, 2, Null)
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPauseWithNop(Enemy_00024_ReadyToAction, 0)
[Scr_0xA2EB]
GotoWithProbability(50, Null)
EnemySummonMonster(0, 0, Null)
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPauseWithNop(Enemy_00024_ReadyToAction, 0)

[Enemy_00048_TurnStart]
ReplaceAndPause()
GotoWithProbability(50, Null)
EnemyClone(0, Null)
ReplaceAndPauseWithNop(Enemy_00048_TurnStart, 0)

[Enemy_00077_TurnStart]
SetDlgLower(4-1-1, 0x00000000, false)
//阿奴：
//快放了村长伯伯
//还有～交出水灵珠
//不然有你受的！
VideoUpdate(0, false)
//木道人：
//哪来的小鬼！？找死吗？
//胆敢插手本山人的事！
ReplaceAndPause()

[Enemy_00077_ReadyToAction]
EnemySetMagic(55, 10)
ReplaceAndPause()
ReplaceAndPause()
EnemySummonMonster(512, 0, Null)
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySummonMonster(512, 0, Null)
EnemySetMagic(65241, 10)
ReplaceAndPause()
ReplaceAndPause()
//木道人：
//哼．．看不出你们这些小鬼
//还颇有两下子的．．
//看来～非拿出绝招不可了！~50
EnemySetMagic(81, 10)
ReplaceAndPause()
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(81, 10)
ReplaceAndPause()
EnemySetMagic(23, 10)
ReplaceAndPause()
EnemySetMagic(9, 10)
ReplaceAndPause()
EnemySummonMonster(512, 0, Null)
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySummonMonster(512, 0, Null)
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(24, 10)
ReplaceAndPause()
EnemySetMagic(30, 10)
ReplaceAndPause()
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()
EnemySetMagic(81, 10)
ReplaceAndPause()
EnemySetMagic(81, 10)
ReplaceAndPause()
EnemySetMagic(81, 10)
ReplaceAndPause()
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(55, 10)
ReplaceAndPause()
ReplaceAndPause()
EnemySetMagic(30, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()
EnemySummonMonster(512, 0, Null)
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(81, 10)
ReplaceAndPause()
EnemySummonMonster(512, 0, Null)
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(81, 10)
ReplaceAndPause()
ReplaceAndPause()
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()
EnemySetMagic(9, 10)
ReplaceAndPause()
EnemySetMagic(24, 10)
ReplaceAndPause()
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(19, 10)
ReplaceAndPause()
EnemySetMagic(81, 5)
ReplaceAndPause()

[Enemy_00127_ReadyToAction]
EnemySummonMonster(442, 2, Null)
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(89, 10)
ReplaceAndPause()
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(89, 10)
ReplaceAndPause()
ReplaceAndPause()
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(89, 10)
ReplaceAndPause()
ReplaceAndPause()
EnemySummonMonster(453, 0, Null)
EnemySummonMonster(453, 0, Null)
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(89, 10)
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(89, 10)
ReplaceAndPause()
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(89, 10)
ReplaceAndPause()
ReplaceAndPauseWithNop(Enemy_00127_ReadyToAction, 0)

[Enemy_00068_BattleWon]
AddItem(92, 0)
SetDlgBox(0x00000000)
//获得一只傀儡虫

[Enemy_00116_TurnStart]
JumpIfEnemyNotFirstOfKind(Null)
PlaySound(206)
ReplaceAndPause()

[Enemy_00039_TurnStart]
JumpIfEnemyNotFirstOfKind(Null)
PlaySound(245)
ReplaceAndPause()

[Enemy_00023_TurnStart]
JumpIfEnemyNotFirstOfKind(Null)
PlaySound(258)
GotoWithProbability(45, Null)
ReplaceAndPauseWithNop(Enemy_00023_TurnStart, 0)

[Enemy_00104_TurnStart]
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//喂～　等等！
//怎麽见到人就打呀？
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//你鬼鬼祟祟的跑到这做什麽？
VideoUpdate(0, false)
SetDlgLower(1-1-1, 0x00000000, false)
//李逍遥：
//我？　这里不能来吗？
VideoUpdate(0, false)
SetDlgUpper(12-1-1, 0x00000000, false)
//盖罗娇：
//来人可以，走人不行！
ReplaceAndPause()

[Enemy_00125_ReadyToAction]
EnemySetMagic(9, 10)
ReplaceAndPause()
EnemySetMagic(11, 10)
ReplaceAndPause()
GotoWithProbability(30, Null)
EnemySummonMonster(490, 0, Null)
EnemySummonMonster(490, 0, Null)
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(10, 5)
ReplaceAndPause()

[Enemy_00126_ReadyToAction]
EnemySetMagic(85, 10)
ReplaceAndPause()
EnemySetMagic(24, 10)
ReplaceAndPause()
GotoWithProbability(40, Null)
EnemySummonMonster(492, 0, Null)
EnemySummonMonster(492, 0, Null)
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(25, 5)
ReplaceAndPause()

[Enemy_00050_TurnStart]
PlaySound(267)
ReplaceAndPause()

[Enemy_00023_ReadyToAction]
ReplaceAndPause()
GotoWithProbability(66, Null)
EnemySummonMonster(0, 0, Null)
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)

[Enemy_00121_ReadyToAction]
ReplaceAndPause()
EnemySetMagic(32, 10)
ReplaceAndPause()
EnemySetMagic(33, 10)
ReplaceAndPause()
EnemySetMagic(34, 10)
ReplaceAndPause()

[Enemy_00141_ReadyToAction]
ReplaceAndPause()
EnemySetMagic(27, 10)
ReplaceAndPause()
ReplaceAndPause()
EnemySetMagic(28, 10)
ReplaceAndPause()

[Enemy_00150_ReadyToAction]
JumpToRandomInstruction(4)
GotoWithNop(Scr_0xA3CD, 0)
GotoWithNop(Scr_0xA3D1, 0)
GotoWithNop(Scr_0xA3D5, 0)
GotoWithNop(Scr_0xA3D7, 0)
[Scr_0xA3CD]
EnemySetMagic(65241, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPauseWithNop(Enemy_00150_ReadyToAction, 0)
[Scr_0xA3D1]
EnemySetMagic(79, 10)
ReplaceAndPause()
EnemySetMagic(10, 10)
ReplaceAndPauseWithNop(Enemy_00150_ReadyToAction, 0)
[Scr_0xA3D5]
EnemySetMagic(30, 10)
ReplaceAndPauseWithNop(Enemy_00150_ReadyToAction, 0)
[Scr_0xA3D7]
EnemySetMagic(40, 10)
ReplaceAndPauseWithNop(Enemy_00150_ReadyToAction, 0)

[Enemy_00066_ReadyToAction]
GotoWithProbability(60, Scr_0xA3DF)
GotoWithProbability(40, Scr_0xA3E1)
GotoWithProbability(20, Scr_0xA3E3)
EnemySetMagic(65241, 10)
ReplaceAndPauseWithNop(Enemy_00066_ReadyToAction, 0)
[Scr_0xA3DF]
EnemySetMagic(34, 10)
ReplaceAndPauseWithNop(Enemy_00066_ReadyToAction, 0)
[Scr_0xA3E1]
EnemySetMagic(87, 10)
ReplaceAndPauseWithNop(Enemy_00066_ReadyToAction, 0)
[Scr_0xA3E3]
EnemySetMagic(84, 10)
ReplaceAndPauseWithNop(Enemy_00066_ReadyToAction, 0)

[Enemy_00149_TurnStart]
//拜月教主：
//想打倒我？　哼！
//再回去修练一百年吧
ReplaceAndPause()

[Enemy_00149_ReadyToAction]
EnemySetMagic(102, 10)
ReplaceAndPause()
EnemySetMagic(103, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()
[Scr_0xA3F1]
JumpToRandomInstruction(14)
GotoWithNop(Scr_0xA400, 0)
GotoWithNop(Scr_0xA406, 0)
GotoWithNop(Scr_0xA40A, 0)
GotoWithNop(Scr_0xA40C, 0)
GotoWithNop(Scr_0xA40E, 0)
GotoWithNop(Scr_0xA410, 0)
GotoWithNop(Scr_0xA414, 0)
GotoWithNop(Scr_0xA416, 0)
GotoWithNop(Scr_0xA41A, 0)
GotoWithNop(Scr_0xA41E, 0)
GotoWithNop(Scr_0xA422, 0)
GotoWithNop(Scr_0xA426, 0)
GotoWithNop(Scr_0xA429, 0)
GotoWithNop(Scr_0xA42C, 0)
[Scr_0xA400]
EnemySetMagic(103, 10)
ReplaceAndPause()
EnemySetMagic(0, 10)
ReplaceAndPause()
EnemySetMagic(102, 10)
ReplaceAndPauseWithNop(Scr_0xA3F1, 0)
[Scr_0xA406]
EnemySetMagic(80, 10)
ReplaceAndPause()
EnemySetMagic(36, 10)
ReplaceAndPauseWithNop(Scr_0xA3F1, 0)
[Scr_0xA40A]
EnemySetMagic(65, 10)
ReplaceAndPauseWithNop(Scr_0xA3F1, 0)
[Scr_0xA40C]
EnemySetMagic(30, 10)
ReplaceAndPauseWithNop(Scr_0xA3F1, 0)
[Scr_0xA40E]
EnemySetMagic(40, 10)
ReplaceAndPauseWithNop(Scr_0xA3F1, 0)
[Scr_0xA410]
EnemySetMagic(24, 10)
ReplaceAndPause()
EnemySetMagic(25, 10)
ReplaceAndPauseWithNop(Scr_0xA3F1, 0)
[Scr_0xA414]
EnemySetMagic(79, 10)
ReplaceAndPauseWithNop(Scr_0xA3F1, 0)
[Scr_0xA416]
EnemySetMagic(101, 10)
ReplaceAndPause()
EnemySetMagic(60, 10)
ReplaceAndPauseWithNop(Scr_0xA3F1, 0)
[Scr_0xA41A]
EnemySetMagic(11, 10)
ReplaceAndPause()
EnemySetMagic(11, 10)
ReplaceAndPauseWithNop(Scr_0xA3F1, 0)
[Scr_0xA41E]
EnemySetMagic(63, 10)
ReplaceAndPause()
EnemySetMagic(103, 10)
ReplaceAndPauseWithNop(Scr_0xA3F1, 0)
[Scr_0xA422]
EnemySetMagic(85, 10)
ReplaceAndPause()
EnemySetMagic(86, 10)
ReplaceAndPauseWithNop(Scr_0xA3F1, 0)
[Scr_0xA426]
EnemySummonMonster(503, 2, Scr_0xA400)
EnemySetMagic(65241, 10)
ReplaceAndPauseWithNop(Scr_0xA3F1, 0)
[Scr_0xA429]
EnemySummonMonster(493, 2, Scr_0xA414)
EnemySetMagic(65241, 10)
ReplaceAndPauseWithNop(Scr_0xA3F1, 0)
[Scr_0xA42C]
EnemySummonMonster(511, 2, Scr_0xA41E)
EnemySetMagic(65241, 10)
ReplaceAndPauseWithNop(Scr_0xA3F1, 0)

[Magic_00002_Success]
RoleModifyHP(75, false)

[Magic_00004_Success]
RoleModifyHP(220, false)

[Magic_00005_Success]
RoleModifyHP(500, false)

[Item_00001_Use]
RoleModifyHP(150, false)

[Item_00035_Use]
RoleRevive(1, false)

[Item_00036_Use]
RoleRevive(3, false)

[Magic_00001_Success]
RoleModifyBattleSpriteTemp(5)
RoleModifyAttrTemp(0, 17, 100)
RoleModifyAttrTemp(0, 20, 100)

[Magic_00016_Success]
RoleSetStatus(true, 2, 9)

[Magic_00017_Success]
RoleSetStatus(true, 1, 7)

[Magic_00079_Success]
JumpIfEnemyTurn(Scr_0xA447)
EnemyApplyPoison(10, true)

[Scr_0xA447]
RoleApplyPoison(10, true)

[Magic_00079_Use]
JumpIfEnemyTurn(Scr_0xA44B)
RemoveItem(88, 1, Scr_0xA45A)
[Scr_0xA44B]

[Magic_00078_Success]
JumpIfEnemyTurn(Scr_0xA44F)
EnemyApplyPoison(5, true)

[Scr_0xA44F]
RoleApplyPoison(5, true)

[Magic_00078_Use]
JumpIfEnemyTurn(Scr_0xA453)
RemoveItem(88, 1, Scr_0xA45A)
[Scr_0xA453]

[Magic_00058_Success]
JumpIfEnemyTurn(Item_00078_Use)
EnemyApplyPoison(5, false)

[Magic_00058_Use]
JumpIfEnemyTurn(Scr_0xA459)
RemoveItem(88, 1, Scr_0xA45A)
[Scr_0xA459]

[Scr_0xA45A]
SetDlgBox(0x00000000)
//道具不足无法使用
ScriptFailed()

[Magic_00050_Use]
CashModify(-500, Scr_0xA460)

[Scr_0xA460]
SetDlgBox(0x00000000)
//钱不够，只好作罢
ScriptFailed()

[Magic_00100_Use]
CashModify(-1, Scr_0xA460)
CashModify(1, Null)
MagicSetBaseDamageByMoney(100, 0.40)

[Scr_0xA468]
SetDlgBox(0x00000000)
//失败　没有效果

[SummonGold_00006_Use]
RemoveItem(26, 1, Scr_0xA46E)
MagicSetBaseDamageByMP(76, 8)

[Scr_0xA46E]
SetDlgCenter(0, 0x00000000, false)
//酒不足，无法召唤酒神
ScriptFailed()

[Magic_00014_Success]
RoleCurePoisonByLevel(2, false)
GotoWithNop(Item_00005_Use, 0)

[Magic_00009_Success]
JumpIfEnemyTurn(Scr_0xA479)
GotoWithProbability(60, Scr_0x978C)
EnemySetStatus(false, 2, 4)

[Scr_0xA479]
GotoWithProbability(70, Scr_0xA468)
GotoWithNop(Item_00067_Use, 0)

[Magic_00011_Success]
JumpIfEnemyTurn(Scr_0xA480)
GotoWithProbability(44, Scr_0x978C)
EnemySetStatus(false, 0, 4)

[Scr_0xA480]
GotoWithProbability(50, Scr_0xA468)
GotoWithNop(Item_00068_Use, 0)

[Magic_00082_Success]
RoleApplyPoison(3, false)

[Magic_00101_Success]
RoleApplyPoison(3, true)

[Magic_00020_Use]
BattleBlowAwayEnemy(-2)

[SummonGold_00005_Use]
BattleBlowAwayEnemy(-3)

[Magic_00063_Use]
VideoShake(24, 4)

[Magic_00036_Use]
VideoShake(20, 4)

[Magic_00048_Use]
VideoShake(14, 4)

[Magic_00090_Success]
JumpIfEnemyHPMoreThanPercentage(25, Scr_0xA468)
GotoWithProbability(60, Scr_0xA468)
CaptureTheEnemy(Scr_0xA468)
KillEnemy()

[Magic_00010_Success]
JumpIfEnemyTurn(Scr_0xA49B)
EnemySetStatus(false, 0, 0)
GotoWithProbability(33, Scr_0xA468)
KillEnemy()

[Scr_0xA49B]
GotoWithProbability(30, Scr_0xA468)
KillRole()

[SummonGold_00006_Success]
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
ReplaceAndPause()
RoleRemoveMagic(1, 76)
SetDlgCenter(0, 0x00000000, false)
//"酒神咒"使用次数已用尽

[Magic_00096_Success]
RoleSetStatus(true, 4, 5)

[Magic_00099_Success]
RoleSetStatus(true, 3, 9)

[Magic_00098_Use]
RoleFleeBattle(Scr_0xA468)

[Magic_00083_Success]
PlaySound(174)
BattleStealFromEnemy()

[Hero_00002_Dying]
GotoWithProbability(75, Scr_0xA4B9)
GotoWithProbability(66, Scr_0xA4BF)
GotoWithProbability(50, Scr_0xA4C6)
SetDlgLower(2-5-1, 0x00000000, false)
//我．．支持不住了．．~60

[Scr_0xA4B9]
SetDlgLower(1-2-1, 0x00000000, false)
//灵儿～你还好吧？~60
SetDlgUpper(2-5-1, 0x00000000, false)
//我．．我没事．
//这点伤．．我还捱得了~60

[Scr_0xA4BF]
SetDlgLower(1-2-1, 0x00000000, false)
//哎呀，你伤得不轻呢！
//先替你疗伤再说~60
SetDlgUpper(2-1-1, 0x00000000, false)
//谢谢．．逍遥哥哥
//你自己也受了伤吧~60

[Scr_0xA4C6]
SetDlgUpper(2-5-1, 0x00000000, false)
//逍遥哥哥．．对不起．．
//我．．都是我连累了你~60
SetDlgLower(1-9-1, 0x00000000, false)
//说这什麽傻话！
//我保护你是应该的~60

[Hero_00003_Dying]
GotoWithProbability(75, Scr_0xA4D3)
GotoWithProbability(66, Scr_0xA4D6)
GotoWithProbability(50, Scr_0xA4E1)
SetDlgUpper(3-4-1, 0x00000000, false)
//喂～人家受伤了，站不起来啦~60

[Scr_0xA4D3]
SetDlgLower(3-4-1, 0x00000000, false)
//呜．．好痛喔～不来了啦！~60

[Scr_0xA4D6]
SetDlgUpper(3-2-1, 0x00000000, false)
//喂～人家不行了啦！
//你看见了没有？~60
SetDlgLower(1-8-1, 0x00000000, false)
//我的大小姐，你还真麻烦呢~60
VideoUpdate(0, false)
SetDlgUpper(3-2-1, 0x00000000, false)
//呜．．你根本就不关心我~60
SetDlgLower(1-10-1, 0x00000000, false)
//这．．你说到哪去了~60

[Scr_0xA4E1]
SetDlgUpper(3-2-1, 0x00000000, false)
//喂～别只是顾着对付敌人
//人家受了伤，你都不管吗？~60
SetDlgLower(1-9-1, 0x00000000, false)
//我来护着你，赶快疗伤吧~60

[Hero_00004_Dying]
GotoWithProbability(75, Scr_0xA4ED)
GotoWithProbability(66, Scr_0xA4F1)
GotoWithProbability(50, Scr_0xA4F4)
SetDlgLower(4-5-1, 0x00000000, false)
//逍遥哥哥，阿奴快没体力了~60

[Scr_0xA4ED]
SetDlgUpper(4-5-1, 0x00000000, false)
//逍遥哥哥，阿奴受了伤呢～
//你怎麽都不管阿奴．．~60

[Scr_0xA4F1]
SetDlgLower(4-5-1, 0x00000000, false)
//呜．．好痛喔．．~60

[Scr_0xA4F4]
SetDlgLower(1-2-1, 0x00000000, false)
//阿奴．．你还撑得住吗？~60
SetDlgUpper(4-5-1, 0x00000000, false)
//呜．．逍遥哥哥，对不起
//都是阿奴拖累了你．．~60

[Hero_00001_FriendDeath]
GotoWithProbability(75, Scr_0xA504)
GotoWithProbability(66, Scr_0xA50B)
GotoWithProbability(50, Scr_0xA512)
SetDlgLower(1-5-1, 0x00000000, false)
//　　啊～！~60
SetDlgBox(0x00000000)
//李逍遥怒火燃烧，体力恢复
RoleModifyHP(9999, false)
RoleModifyAttrTemp(0, 17, 5)

[Scr_0xA504]
SetDlgLower(1-5-1, 0x00000000, false)
//　可恶的家伙！~60
SetDlgBox(0x00000000)
//李逍遥斗志燃烧，真气恢复
RoleModifyMP(9999, false)
RoleModifyAttrTemp(0, 18, 10)

[Scr_0xA50B]
SetDlgLower(1-5-1, 0x00000000, false)
//　　　可恶～！~60
SetDlgBox(0x00000000)
//李逍遥发出怒吼，力量提高
RoleModifyAttrTemp(0, 17, 25)
RoleModifyAttrTemp(0, 18, 25)

[Scr_0xA512]
SetDlgLower(1-10-1, 0x00000000, false)
//　　啊．．糟了～！~60
RoleModifyAttrTemp(0, 20, 90)
RoleModifyAttrTemp(0, 21, 90)

[Hero_00003_FriendDeath]
GotoWithProbability(75, Scr_0xA521)
GotoWithProbability(66, Scr_0xA528)
GotoWithProbability(50, Scr_0xA52F)
SetDlgLower(3-3-1, 0x00000000, false)
//　可恶～看招！~60
SetDlgBox(0x00000000)
//林月如力量突然提高
RoleModifyAttrTemp(0, 17, 25)
RoleModifyAttrTemp(0, 18, 25)

[Scr_0xA521]
SetDlgLower(3-3-1, 0x00000000, false)
//可恶～我替你报仇！~60
SetDlgBox(0x00000000)
//林月如怒火燃烧，体力恢复
RoleModifyHP(9999, false)
RoleModifyAttrTemp(0, 17, 5)

[Scr_0xA528]
SetDlgLower(3-2-1, 0x00000000, false)
//　真没用～看我的！~60
SetDlgBox(0x00000000)
//林月如斗志燃烧，真气恢复
RoleModifyMP(9999, false)
RoleModifyAttrTemp(0, 18, 9)

[Scr_0xA52F]
SetDlgLower(3-4-1, 0x00000000, false)
//　哇～　怎麽办！~60
RoleModifyAttrTemp(0, 20, 50)
RoleModifyAttrTemp(0, 21, 90)

[Event_00241_00006_Trigger]
SceneEnter(230)
PartySetPos(44, 39, 0)
FadeOut(0)

[Event_00286_00018_Trigger]
SceneEnter(285)
PartySetPos(44, 39, 0)
FadeOut(0)

[Scr_0xA53C]
PlayCDOrMusic(6, 56)
RoleSetDirFrame(0, 0, 0)

[Scr_0xA53F]
PlayCDOrMusic(3, 24)
VideoUpdate(0, false)

[Scr_0xA542]
MusicPlay(56, true, 0.00)
EventSetState(182, 2, true, false)

