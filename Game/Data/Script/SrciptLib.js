
/**
 * @note
 * -  0x0000
 * 
 * @deprecated
 * -  停止执行
 * 
 * @param void 无
 */
function
End()
{
   
}

/**
 * @note
 * -  0x0001
 * 
 * @deprecated
 * -  停止执行，将 调用地址 替换为 下一条命令
 * 
 * @param void 无
 */
function
ReplaceAndPause()
{
   
}

/**
 * @note
 * -  0x0002
 * 
 * @deprecated
 * -  停止执行，将 调用地址 替换为 地址 {ScrAddress}；
 *    累计触发 {Count} 次后，并将 调用地址 替换为 下一条命令
 * 
 * @param ScrAddress 欲跳转到的地址
 * @param Count 最大可触发的次数，若设置为 0 则为总是可触发
 */
function
ReplaceAndPauseWithNop(
   ScrAddress,
   Count
)
{
   
}

/**
 * @note
 * -  0x0003
 * 
 * @deprecated
 * -  跳转到地址 {ScrAddress}，完成跳转地址的执行后脚本结束；
 *    累计触发 {Count} 次后，该指令将成为 NOP
 * 
 * @param ScrAddress 欲跳转到的地址
 * @param Count 最大可触发的次数，若设置为 0 则为总是可触发
 */
function
GotoWithNop(
   ScrAddress,
   Count
)
{
   
}

/**
 * @note
 * -  0x0004
 * 
 * @deprecated
 * -  调用地址 {ScrAddress}，完成调用后返回并继续执行；
 *    参数 {SceneID} 和 {EventID} 只有 Event 触发脚本时才用到；
 *    注意：不是只有玩家才能触发脚本，Event 也是可以主动触发脚本的！
 * 
 * @param ScrAddress 欲跳转到的地址
 * @param SceneID 当前事件所在的场景ID
 * @param EventID 当前事件ID
 */
function
Call(
   ScrAddress,
   SceneID,
   EventID
)
{
   
}

/**
 * @note
 * -  0x0005
 * 
 * @deprecated
 * -  重绘屏幕并清理对话
 * 
 * @param Delay 画面更新后延迟的毫秒秒数，缺省则为 1，实际延迟 {Delay * 60} ms
 * @param UpdatePartyGestures 当 RNG 未播放 或 未进入战斗时，是否更新队伍步伐
 */
function
VideoUpdate(
   Delay,
   UpdatePartyGestures
)
{
   
}

/**
 * @note
 * -  0x0006
 * 
 * @deprecated
 * -  生成随机数1~100，若大于 {Probability}，则跳转到地址 {ScrAddress}；
 *    否则继续执行。
 * 
 * @param Probability 0~100 的数值
 * @param ScrAddress 欲跳转到的地址
 */
function
GotoWithProbability(
   Probability,
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x0007
 * 
 * @deprecated
 * -  进入战斗，将敌方队列 {EnemyTeamID} 放入战场；
 *    若战斗失败，则调用参数二指向的地址；
 *    若战斗胜利，则调用到参数三指向的地址
 * 
 * @param EnemyTeamID 敌方队列 ID
 * @param ScrDefeat 战斗失败脚本
 * @param ScrFleed 战斗逃跑脚本
 */
function
BattleStart(
   EnemyTeamID,
   ScrDefeat,
   ScrFleed
)
{
   
}

/**
 * @note
 * -  0x0008
 * 
 * @deprecated
 * -  将 调用地址 替换为 下一条命令
 * 
 * @param void 无
 */
function
Replace()
{
   
}

/**
 * @note
 * -  0x0009
 * 
 * @deprecated
 * -  所有事件的自动脚本循环 {FrameNum} 帧；
 *    期间禁止用户一切操作（包括触发事件），仅场景中的所有事件在运转
 * 
 * @param FrameNum 循环帧数
 * @param CanTriggerEvent 是否允许触发事件
 * @param UpdatePartyGestures 是否更新队伍步伐
 */
function
WaitEventAutoScriptRun(
   FrameNum,
   CanTriggerEvent,
   UpdatePartyGestures
)
{
   
}

/**
 * @note
 * -  0x000A
 * 
 * @deprecated
 * -  显示选项【"是" "否"】；
 *    选【"是"】则继续执行；
 *    选【"否"】则跳转到参数一指向的地址
 * 
 * @param ScrAddress 选 "否" 则跳转到的地址
 */
function
GotoWithSelect(
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x000B；
 *    0x000C；
 *    0x000D；
 *    0x000E；
 *    0x0087
 * 
 * @deprecated
 * -  当前事件播放 {DirectionID} 方向行走动画，速度 {Speed}；
 *    0x000B：向 0（西 左下）行，速度 2；
 *    0x000C：向 1（北 左上）行，速度 2；
 *    0x000D：向 2（东 右上）行，速度 2；
 *    0x000E：向 3（南 右下）行，速度 2；
 *    0x0087：向 -1（当前方向）行，速度 0；
 * 
 * @param DirectionID 行走方向
 * @param Speed 行走速度
 */
function
EventAnimate(
   DirectionID,
   Speed
)
{
   
}

/**
 * @note
 * -  0x000F
 * 
 * @deprecated
 * -  当前对象面向方向 {DirectionID}，帧编号 {FrameID}
 * 
 * @param DirectionID 方向（负数则方向不变） 【西-左下[0] 北-左上[1] 东-右上[2] 南-右下[3]】
 * @param FrameID 帧编号，第一帧为原地，后两帧为走路
 */
function
NPCSetDirFrame(
   DirectionID,
   FrameID
)
{
   
}

/**
 * @note
 * -  0x0010；
 *    0x0011；
 *    0x007C；
 *    0x0082
 * 
 * @deprecated
 * -  当前对象走到块坐标 {BX, BY, BH}，待对象到达终点才会继续执行下一条指令；
 *    0x0010：速度 3;
 *    0x0011：速度 2，奇偶互斥;
 *    0x007C：速度 4，奇偶互斥;
 *    0x0082：速度 8;
 * 
 * @param BX 欲走到块的 X 坐标
 * @param BY 欲走到块的 Y 坐标
 * @param BH 欲走到的块的 左右板块ID；【左板块[0] 右板块[1]】
 * @param Speed 移动速度
 * @param Distinguish 进行奇偶编号互斥执行
 */
function
NPCMoveToBlock(
   BX,
   BY,
   BH,
   Speed,
   Distinguish
)
{
   
}

/**
 * @note
 * -  0x0012
 * 
 * @deprecated
 * -  将事件 {SceneID EventID} 的坐标设置到相对于 [队伍领队] 的块 {BX, BY, BH}
 * 
 * @param SceneID 场景编号
 * @param EventID 事件编号
 * @param X 欲走到的 X 坐标
 * @param Y 欲走到的 Y 坐标
 */
function
EventSetPosRelToParty(
   SceneID,
   EventID,
   X,
   Y
)
{
   
}

/**
 * @note
 * -  0x0013
 * 
 * @deprecated
 * -  将事件 {SceneID EventID} 的坐标设置到绝对块 {BX, BY, BH}
 * 
 * @param SceneID 场景编号
 * @param EventID 事件编号
 * @param X 欲设置到的 X 坐标
 * @param Y 欲设置到的 Y 坐标
 */
function
EventSetPos(
   SceneID,
   EventID,
   X,
   Y
)
{
   
}

/**
 * @note
 * -  0x0014
 * 
 * @deprecated
 * -  将当前事件的帧号设置为 {FrameID}
 * 
 * @param FrameID 帧编号，第一帧为原地，后两帧为走路
 */
function
NPCSetFrame(
   FrameID
)
{
   
}

/**
 * @note
 * -  0x0015
 * 
 * @deprecated
 * -  将 {PartyID} 的方向设置为 {Direction}，帧号设置为 {FrameID}
 * 
 * @param PartyID 队伍中 Role 的编号
 * @param DirectionID 方向（负数则方向不变） 【西-左下[0] 北-左上[1] 东-右上[2] 南-右下[3]】
 * @param FrameID 帧编号，第一帧为原地，后两帧为走路
 */
function
RoleSetDirFrame(
   PartyID,
   DirectionID,
   FrameID
)
{
   
}

/**
 * @note
 * -  0x0016
 * 
 * @deprecated
 * -  将事件 {SceneID EventID} 的方向设置为 {Direction}，帧号设置为 {FrameID}
 * 
 * @param SceneID 场景编号
 * @param EventID 事件编号
 * @param DirectionID 方向（负数则方向不变） 【西-左下[0] 北-左上[1] 东-右上[2] 南-右下[3]】
 * @param FrameID 帧编号，第一帧为原地，后两帧为走路
 */
function
EventSetDirFrame(
   SceneID,
   EventID,
   DirectionID,
   FrameID
)
{
   
}

/**
 * @note
 * -  0x0017
 * 
 * @deprecated
 * -  将当前队员 {BodyID} 部位的装备附带属性 {AttrID} 设置为 {Value}
 * 
 * @param BodyID 装备对应身体部位的编号
 * @param AttrID 属性编号
 * @param Value 欲设置的值
 */
function
RoleSetAttrExtra(
   BodyID,
   AttrID,
   Value
)
{
   
}

/**
 * @note
 * -  0x0018
 * 
 * @deprecated
 * -  当前队员装备道具 {ItemID}，装备到部位 {BodyID}
 * 
 * @param ItemID 欲装备道具的编号
 * @param BodyID 装备对应身体部位的编号
 */
function
RoleInstallEquip(
   ItemID,
   BodyID
)
{
   
}

/**
 * @note
 * -  0x0019
 * 
 * @deprecated
 * -  将队员 {RoleID} 的基础属性 {AttrID} 变动 {Value}
 * 
 * @param RoleID 队员编号，缺省表示当前队员
 * @param AttrID 属性编号
 * @param Value 欲变动的值，正数增加，负数减少
 */
function
RoleModifyAttr(
   RoleID,
   AttrID,
   Value
)
{
   
}

/**
 * @note
 * -  0x001A
 * 
 * @deprecated
 * -  将队员 {RoleID} 的基础属性 {AttrID} 设置为 {Value}
 * 
 * @param RoleID 队员编号，缺省表示当前队员
 * @param AttrID 属性编号
 * @param Value 欲设置的值
 */
function
RoleSetAttr(
   RoleID,
   AttrID,
   Value
)
{
   
}

/**
 * @note
 * -  0x001B
 * 
 * @deprecated
 * -  我方 {ApplyToAll} HP 变动 {Value}
 * 
 * @param Value 欲变动的值，正数增加，负数减少
 * @param ApplyToAll 是否作用于我方全体，缺省则为当前队员
 */
function
RoleModifyHP(
   Value,
   ApplyToAll
)
{
   
}

/**
 * @note
 * -  0x001C
 * 
 * @deprecated
 * -  我方 {ApplyToAll} MP 变动 {Value}
 * 
 * @param Value 欲变动的值，正数增加，负数减少
 * @param ApplyToAll 是否作用于我方全体，缺省则为当前队员
 */
function
RoleModifyMP(
   Value,
   ApplyToAll
)
{
   
}

/**
 * @note
 * -  0x001D
 * 
 * @deprecated
 * -  我方 {ApplyToAll} MP 变动 {Value}
 * 
 * @param Value 欲变动的值，正数增加，负数减少
 * @param ApplyToAll 是否作用于我方全体，缺省则为当前队员
 */
function
RoleModifyHPMP(
   Value,
   ApplyToAll
)
{
   
}

/**
 * @note
 * -  0x001E
 * 
 * @deprecated
 * -  金钱变动 {Value}
 * 
 * @param Value 欲变动的值，正数增加，负数减少，
 * @param ScrAddress 金钱不足时跳转到的地址
 */
function
CashModify(
   Value,
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x001F
 * 
 * @deprecated
 * -  将道具 {ItemID} 添加到背包中，数量 {Value}
 * 
 * @param ItemID 道具编号
 * @param Value 道具数量
 */
function
AddItem(
   ItemID,
   Value
)
{
   
}

/**
 * @note
 * -  0x0020
 * 
 * @deprecated
 * -  将道具 {ItemID} 在背包中删除，数量 {Value}，背包中道具不足，则会从角色身上卸下；
 *    若道具不足，则跳转到地址 {ScrAddress}
 * 
 * @param ItemID 道具编号
 * @param Value 道具数量
 * @param ScrAddress 道具不足时跳转到的地址
 */
function
RemoveItem(
   ItemID,
   Value,
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x0021
 * 
 * @deprecated
 * -  敌方 {ApplyToAll} HP 变动 {Value}
 * 
 * @param Value 欲变动的值，正数增加，负数减少
 * @param ApplyToAll 是否作用于敌方全体，缺省则为当前敌人
 */
function
EnemyModifyHP(
   Value,
   ApplyToAll
)
{
   
}

/**
 * @note
 * -  0x0022
 * 
 * @deprecated
 * -  我方 {ApplyToAll} 复活，HP 恢复 {Value} %
 * 
 * @param Value 欲恢复 HP 的百分比
 * @param ApplyToAll 是否作用于我方全体，缺省则为当前队员
 */
function
RoleRevive(
   Value,
   ApplyToAll
)
{
   
}

/**
 * @note
 * -  0x0023
 * 
 * @deprecated
 * -  队员 {RoleID} 卸下部位 {BodyID} 的装备
 * 
 * @param RoleID 队员编号，缺省表示当前队员
 * @param BodyID 装备对应身体部位的编号
 */
function
RoleUninstallEquip(
   RoleID,
   BodyID
)
{
   
}

/**
 * @note
 * -  0x0024
 * 
 * @deprecated
 * -  将事件 {SceneID EventID} 的自动脚本设置为 {ScrAddress}
 * 
 * @param SceneID 场景编号
 * @param EventID 事件编号
 * @param ScrAddress 欲设置的脚本地址
 */
function
EventSetAutoScript(
   SceneID,
   EventID,
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x0025
 * 
 * @deprecated
 * -  将事件 {SceneID EventID} 的触发脚本设置为 {ScrAddress}
 * 
 * @param SceneID 场景编号
 * @param EventID 事件编号
 * @param ScrAddress 欲设置的脚本地址
 */
function
EventSetTriggerScript(
   SceneID,
   EventID,
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x0026
 * 
 * @deprecated
 * -  显示购买道具菜单 {StoreID}
 * 
 * @param StoreID 店铺编号
 */
function
ShowBuyItemMenu(
   StoreID
)
{
   
}

/**
 * @note
 * -  0x0027
 * 
 * @deprecated
 * -  显示出售道具菜单
 * 
 * @param void 无
 */
function
ShowSellItemMenu()
{
   
}

/**
 * @note
 * -  0x0028
 * 
 * @deprecated
 * -  敌方 {ApplyToAll} 中毒 {PoisonID}
 * 
 * @param PoisonID 毒性编号
 * @param ApplyToAll 是否作用于敌方全体，缺省则为当前敌人
 */
function
EnemyApplyPoison(
   PoisonID,
   ApplyToAll
)
{
   
}

/**
 * @note
 * -  0x0029
 * 
 * @deprecated
 * -  我方 {ApplyToAll} 中毒 {PoisonID}
 * 
 * @param PoisonID 毒性编号
 * @param ApplyToAll 是否作用于我方全体，缺省则为当前队员
 */
function
RoleApplyPoison(
   PoisonID,
   ApplyToAll
)
{
   
}

/**
 * @note
 * -  0x002A
 * 
 * @deprecated
 * -  敌方 {ApplyToAll} 解毒 {PoisonID}
 * 
 * @param PoisonID 毒性编号
 * @param ApplyToAll 是否作用于敌方全体，缺省则为当前敌人
 */
function
EnemyCurePoisonByID(
   PoisonID,
   ApplyToAll
)
{
   
}

/**
 * @note
 * -  0x002B
 * 
 * @deprecated
 * -  我方 {ApplyToAll} 解毒 {PoisonID}
 * 
 * @param PoisonID 毒性编号
 * @param ApplyToAll 是否作用于我方全体，缺省则为当前队员
 */
function
RoleCurePoisonByID(
   PoisonID,
   ApplyToAll
)
{
   
}

/**
 * @note
 * -  0x002C
 * 
 * @deprecated
 * -  我方 {ApplyToAll} 解级别 {Level} 以内的毒
 * 
 * @param Level 毒性等级
 * @param ApplyToAll 是否作用于我方全体，缺省则为当前队员
 */
function
RoleCurePoisonByLevel(
   Level,
   ApplyToAll
)
{
   
}

/**
 * @note
 * -  0x002D
 * 
 * @deprecated
 * -  当前队员获得 {IsGood} 状态 {StatusID}，持续 {Value} 回合
 * 
 * @param IsGood 是否为增益状态（true=Good，false=Bad）
 * @param StatusID 状态编号
 * @param Value 状态持续的回合数
 */
function
RoleSetStatus(
   IsGood,
   StatusID,
   Value
)
{
   
}

/**
 * @note
 * -  0x002E
 * 
 * @deprecated
 * -  当前敌人获得 {IsGood} 状态 {StatusID}，持续 {Value} 回合
 * 
 * @param IsGood 是否为增益状态（true=Good，false=Bad）
 * @param StatusID 状态编号
 * @param Value 状态持续的回合数
 */
function
EnemySetStatus(
   IsGood,
   StatusID,
   Value
)
{
   
}

/**
 * @note
 * -  0x002F
 * 
 * @deprecated
 * -  当前队员清除 {IsGood} 状态 {StatusID}
 * 
 * @param IsGood 是否为增益状态（true=Good，false=Bad）
 * @param StatusID 状态编号
 */
function
RoleRemoveStatus(
   IsGood,
   StatusID
)
{
   
}

/**
 * @note
 * -  0x0030
 * 
 * @deprecated
 * -  队员 {RoleID} 修改临时属性 {AttrID} 变动 {Value} %
 * 
 * @param RoleID 队员编号，缺省表示当前队员
 * @param AttrID 属性编号
 * @param Value 欲变动的百分比，正数增加，负数减少
 */
function
RoleModifyAttrTemp(
   RoleID,
   AttrID,
   Value
)
{
   
}

/**
 * @note
 * -  0x0031
 * 
 * @deprecated
 * -  临时将当前队员的战斗图像设置为 {BattleSpriteID}
 * 
 * 参数：BattleSpriteID 队员战斗形象编号
 */
function
RoleModifyBattleSpriteTemp(
   BattleSpriteID
)
{
   
}

/**
 * @note
 * -  0x0033
 * 
 * @deprecated
 * -  将当前敌人收入紫金葫芦；
 *    若收妖失败（敌人不存在灵葫能量），则跳转到地址 {ScrAddress}
 * 
 * @param ScrAddress 收妖失败时跳转到的地址
 */
function
CaptureTheEnemy(
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x0034
 * 
 * @deprecated
 * -  将紫金葫芦中的灵葫能量炼化为丹药；
 *    若炼丹失败（灵葫能量不足），则跳转到地址 {ScrAddress}
 * 
 * @param ScrAddress 炼丹失败时跳转到的地址
 */
function
MakeElixir(
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x0035
 * 
 * @deprecated
 * -  画面震动 {FrameNum} 帧，振幅 {Level} 级
 * 
 * @param FrameNum 震动帧数
 * @param Level 震动等级
 */
function
VideoShake(
   FrameNum,
   Level
)
{
   
}

/**
 * @note
 * -  0x0036
 * 
 * @deprecated
 * -  将 RNG 动画设置为 {RNGID}
 * 
 * @param RNGID RNG 动画编号
 */
function
SetRNG(
   RNGID
)
{
   
}

/**
 * @note
 * -  0x0037
 * 
 * @deprecated
 * -  播放 RNG 动画，从第 {BeginFrameID} 帧开始播放，播放到 {EndFrameID} 帧终止，速度 {Speed}
 * 
 * @param BeginFrameID 起始帧号
 * @param EndFrameID 结束帧号，缺省则为播放到最后一帧
 * @param Speed 播放速度
 */
function
PlayRNG(
   BeginFrameID,
   EndFrameID,
   Speed
)
{
   
}

/**
 * @note
 * -  0x0038
 * 
 * @deprecated
 * -  土遁，脱离迷宫用。若土遁失败，则跳转到 {ScrAddress}
 * 
 * @param ScrAddress 土遁失败时跳转到的地址
 */
function
SceneTeleport(
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x0039
 * 
 * @deprecated
 * -  吸取受害者 {Value} 点 HP 补充给施暴者，可我对敌，亦可敌对我
 * 
 * @param void 无
 */
function
DrainHPFromEnemy(
   Value
)
{
   
}

/**
 * @note
 * -  0x003A
 * 
 * @deprecated
 * -  非BOSS战逃跑。若逃跑失败，则跳转到 {ScrAddress}
 * 
 * @param ScrAddress 逃跑失败时跳转到的地址
 */
function
RoleFleeBattle(
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x003B
 * 
 * @deprecated
 * -  将对话框位置设置在画面中间，头像为 {FaceID}，字体颜色为 {ColorHex}
 * 
 * @param FaceID 对话框上肖像的编号
 * @param ColorHex Hex 颜色值
 * @param RNGPlaying 是否正在播放 RNG 动画
 */
function
SetDlgCenter(
   FaceID,
   ColorHex,
   RNGPlaying
)
{
   
}

/**
 * @note
 * -  0x003C
 * 
 * @deprecated
 * -  将对话框位置设置在画面上部，头像为 {FaceID}，字体颜色为 {ColorHex}
 * 
 * @param FaceID 对话框上肖像的编号
 * @param ColorHex Hex 颜色值
 * @param RNGPlaying 是否正在播放 RNG 动画
 */
function
SetDlgUpper(
   FaceID,
   ColorHex,
   RNGPlaying
)
{
   
}

/**
 * @note
 * -  0x003D
 * 
 * @deprecated
 * -  将对话框位置设置在画面下部，头像为 {FaceID}，字体颜色为 {ColorHex}
 * 
 * @param FaceID 对话框上肖像的编号
 * @param ColorHex Hex 颜色值
 * @param RNGPlaying 是否正在播放 RNG 动画
 */
function
SetDlgLower(
   FaceID,
   ColorHex,
   RNGPlaying
)
{
   
}

/**
 * @note
 * -  0x003E
 * 
 * @deprecated
 * -  将对话框位置设置在画面中间的盒子里，字体颜色为 {ColorHex}
 * 
 * @param ColorHex Hex 颜色值
 */
function
SetDlgBox(
   ColorHex
)
{
   
}

/**
 * @note
 * -  0x003F；
 *    0x0044；
 *    0x0097
 * 
 * @deprecated
 * -  乘坐当前事件行至块坐标 {BX, BY, BH}；
 *    0x003F：速度 2;
 *    0x0044：速度 4;
 *    0x0097：速度 8;
 * 
 * @param BX 欲走到块的 X 坐标
 * @param BY 欲走到块的 Y 坐标
 * @param BH 欲走到的块的 左右板块ID；【左板块[0] 右板块[1]】
 * @param Speed 行驶速度
 */
function
RideNPCToPos(
   BX,
   BY,
   BH,
   Speed
)
{
   
}

/**
 * @note
 * -  0x0040
 * 
 * @deprecated
 * -  将事件 {SceneID EventID} 的触发方式设置为 {IsAutoTrigger}，触发范围为 {TriggerDistance}
 * 
 * @param SceneID 场景编号
 * @param EventID 事件编号
 * @param IsAutoTrigger 是否走到触发范围内自动触发
 * @param TriggerDistance 触发范围
 */
function
EventSetTriggerMode(
   SceneID,
   EventID,
   IsAutoTrigger,
   TriggerDistance
)
{
   
}

/**
 * @note
 * -  0x0041
 * 
 * @deprecated
 * -  将脚本标记为失败；
 *    通常用于仙术的 Use[条件检测] 脚本，标记为失败则不再执行 Success 脚本
 * 
 * @param void 无
 */
function
ScriptFailed()
{
   
}

/**
 * @note
 * -  0x0042
 * 
 * @deprecated
 * -  模拟我方仙术 {MagicID}，攻击敌人 {EnemyID}，基础伤害为 {Value}；
 * 
 * @param MagicID 欲模拟的仙术编号
 * @param EnemyID 敌人编号，缺省则为当前敌人
 * @param Value 基础伤害
 */
function
SimulateRoleMagic(
   MagicID,
   EnemyID,
   Value
)
{
   
}

/**
 * @note
 * -  0x0043
 * 
 * @deprecated
 * -  设置场景音乐为 {MusicID}，循环播放 {Loop}，淡入淡出时间为 {FadeTime}
 * 
 * @param MusicID 欲播放的音乐编号
 * @param Loop 是否循环播放
 * @param FadeTime 淡入淡出时间；音乐 9 自带淡入淡出，无需淡入
 */
function
MusicPlay(
   MusicID,
   Loop,
   FadeTime
)
{
   
}

/**
 * @note
 * -  0x0045
 * 
 * @deprecated
 * -  设置战斗音乐为 {MusicID}
 * 
 * @param MusicID 欲播放的音乐编号
 */
function
SetBattleMusic(
   MusicID
)
{
   
}

/**
 * @note
 * -  0x0046
 * 
 * @deprecated
 * -  队伍走到块坐标 {BX, BY, BH}
 * 
 * @param BX 欲走到块的 X 坐标
 * @param BY 欲走到块的 Y 坐标
 * @param BH 欲走到的块的 左右板块ID；【左板块[0] 右板块[1]】
 */
function
PartySetPos(
   BX,
   BY,
   BH
)
{
   
}

/**
 * @note
 * -  0x0047
 * 
 * @deprecated
 * -  播放音效 {SoundID}
 * 
 * @param SoundID 欲播放音效的编号
 */
function
PlaySound(
   SoundID
)
{
   
}

/**
 * @note
 * -  0x0049
 * 
 * @deprecated
 * -  设置事件 {SceneID EventID} 的显示状态为 {Display}，阻碍队伍通行 {IsObstacle}
 * 
 * @param SceneID 场景编号
 * @param EventID 事件编号
 * @param Display 显示状态
 * @param IsObstacle 阻碍队伍通行
 */
function
EventSetState(
   SceneID,
   EventID,
   Display,
   IsObstacle
)
{
   
}

/**
 * @note
 * -  0x004A
 * 
 * @deprecated
 * -  设置战斗环境为 {BattlefieldID}
 * 
 * @param BattlefieldID 战斗环境编号
 */
function
SetBattlefield(
   BattlefieldID
)
{
   
}

/**
 * @note
 * -  0x004B
 * 
 * @deprecated
 * -  当前事件静止不动一段时间，期间无法互动
 * 
 * @param void 无
 */
function
NPCSetStillTime()
{
   
}

/**
 * @note
 * -  0x004C
 * 
 * @deprecated
 * -  当前事件追逐队伍，追逐速度 {Speed}，警戒范围 {Range}
 * 
 * @param Speed 追逐速度，缺省则为 4
 * @param Range 警戒范围，队伍走范围内开始被追逐，缺省则为 8
 * @param CanFly 能够穿墙追逐角色
 */
function
NPCChase(
   Speed,
   Range,
   CanFly
)
{
   
}

/**
 * @note
 * -  0x004D
 * 
 * @deprecated
 * -  等待按下任意键
 * 
 * @param void 无
 */
function
WaitForAnyKey()
{
   
}

/**
 * @note
 * -  0x004E
 * 
 * @deprecated
 * -  读取最近的一次存档
 * 
 * @param void 无
 */
function
LoadLastSave()
{
   
}

/**
 * @note
 * -  0x004F
 * 
 * @deprecated
 * -  屏幕泛红（我方全灭时用）
 * 
 * @param void 无
 */
function
FadeToRed()
{
   
}

/**
 * @note
 * -  0x0050
 * 
 * @deprecated
 * -  屏幕淡出
 * 
 * @param Delay 每一步的延迟时间，默认 600 ms
 */
function
FadeOut(
   Delay
)
{
   
}

/**
 * @note
 * -  0x0051
 * 
 * @deprecated
 * -  屏幕淡入
 * 
 * @param Delay 每一步的延迟时间，默认 600 ms
 */
function
FadeIn(
   Delay
)
{
   
}

/**
 * @note
 * -  0x0052
 * 
 * @deprecated
 * -  当前对象隐藏 {FrameNum} 帧
 * 
 * @param FrameNum 欲隐藏的帧数，缺省则为 800 帧
 */
function
NPCSetVanishTime(
   FrameNum
)
{
   
}

/**
 * @note
 * -  0x0053
 *    0x0054
 * 
 * @deprecated
 * -  设置时间滤镜；
 *    0x0053：白天；
 *    0x0054：晚上
 * 
 * @param TimeID 时间编号（0=白天 1=黄昏 2=晚上）
 */
function
SetTimeFilter(
   TimeID
)
{
   
}

/**
 * @note
 * -  0x0055
 * 
 * @deprecated
 * -  队员 {RoleID} 练成仙术 {MagicID}
 * 
 * @param RoleID 队员编号，缺省表示当前队员
 * @param MagicID 欲习得仙术的编号
 */
function
RoleAddMagic(
   RoleID,
   MagicID
)
{
   
}

/**
 * @note
 * -  0x0056
 * 
 * @deprecated
 * -  队员 {RoleID} 丧失仙术 {MagicID}
 * 
 * @param RoleID 队员编号，缺省表示当前队员
 * @param MagicID 欲丧失仙术的编号
 */
function
RoleRemoveMagic(
   RoleID,
   MagicID
)
{
   
}

/**
 * @note
 * -  0x0057
 * 
 * @deprecated
 * -  将仙术 {MagicID} 的基础伤害设置为 MP 的 {Multiple} 倍
 * 
 * @param MagicID 欲设置仙术的编号
 * @param Multiple 倍数
 */
function
MagicSetBaseDamageByMP(
   MagicID,
   Multiple
)
{
   
}

/**
 * @note
 * -  0x0058
 * 
 * @deprecated
 * -  如果库存中的道具 {ItemID} 少于 {Value} 个，则跳转到 {ScrAddress}
 * 
 * @param ItemID 道具编号
 * @param Value 道具数量
 * @param ScrAddress 道具不足时跳转到的地址
 */
function
JumpIfItemCountLessThan(
   ItemID,
   Value,
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x0059
 * 
 * @deprecated
 * -  切换到场景 {SceneID}
 * 
 * @param SceneID 场景编号
 */
function
SceneEnter(
   SceneID
)
{
   
}

/**
 * @note
 * -  0x005A
 * 
 * @deprecated
 * -  当前队员 HP 减半
 * 
 * @param void 无
 */
function
RoleHalveHP()
{
   
}

/**
 * @note
 * -  0x005B
 * 
 * @deprecated
 * -  当前敌人 HP 减半
 * 
 * @param void 无
 */
function
EnemyHalveHP()
{
   
}

/**
 * @note
 * -  0x005C
 * 
 * @deprecated
 * -  我方在战斗中隐身，持续 {Value} 回合
 * 
 * @param Value 持续的回合数
 */
function
BattleRoleVanish(
   Value
)
{
   
}

/**
 * @note
 * -  0x005D
 * 
 * @deprecated
 * -  如果当前队员未中毒 {PoisonID}，则跳转到 {ScrAddress}
 * 
 * @param PoisonID 毒性编号
 * @param ScrAddress 未中毒则跳转到的地址
 */
function
JumpIfRoleNotPoisoned(
   PoisonID,
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x005E
 * 
 * @deprecated
 * -  如果当前敌人未中毒 {PoisonID}，则跳转到 {ScrAddress}
 * 
 * @param PoisonID 毒性编号
 * @param ScrAddress 未中毒则跳转到的地址
 */
function
JumpIfEnemyNotPoisoned(
   PoisonID,
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x005F
 * 
 * @deprecated
 * -  当前队员直接阵亡
 * 
 * @param void 无
 */
function
KillRole()
{
   
}

/**
 * @note
 * -  0x0060
 * 
 * @deprecated
 * -  当前敌人直接阵亡
 * 
 * @param void 无
 */
function
KillEnemy()
{
   
}

/**
 * @note
 * -  0x0061
 * 
 * @deprecated
 * -  如果当前队员未中毒，则跳转到 {ScrAddress}
 * 
 * @param Level 毒性等级
 * @param ScrAddress 未中指定等级以下的毒则跳转到的地址
 */
function
JumpIfRoleNotPoisonedByLevel(
   Level,
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x0062；0x0063
 * 
 * @deprecated
 * -  事件暂停追逐队伍，持续 {FrameNum} 帧
 *    0x0062：警戒距离级别 0（停止追逐）
 *    0x0063：警戒距离级别 3
 * 
 * @param FrameNum 持续的帧数
 */
function
NPCChaseSetRange(
   Level,
   FrameNum
)
{
   
}

/**
 * @note
 * -  0x0064
 * 
 * @deprecated
 * -  如果当前敌人的 HP 大于 {Value} %，则跳转到 {ScrAddress}
 * 
 * @param Value 欲恢复 HP 的百分比
 * @param ScrAddress HP 大于指定百分比则跳转到的地址
 */
function
JumpIfEnemyHPMoreThanPercentage(
   Value,
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x0065
 * 
 * @deprecated
 * -  将英雄 {HeroID} 的形象设置为 {SpriteID}
 * 
 * @param HeroID 英雄编号
 * @param SpriteID 形象编号
 * @param Update 是否立即更新
 */
function
HeroSetSprite(
   HeroID,
   SpriteID,
   Update
)
{
   
}

/**
 * @note
 * -  0x0066
 * 
 * @deprecated
 * -  当前队员投掷当前敌人，模拟法术 {MagicID}，基础伤害 {Value}
 * 
 * @param MagicID 欲模拟仙术的编号
 * @param Value 基础伤害
 */
function
RoleThrowWeapon(
   MagicID,
   Value
)
{
   
}

/**
 * @note
 * -  0x0067
 * 
 * @deprecated
 * -  设置当前敌人的法术为 {MagicID}，施法概率 {Value} %
 * 
 * @param MagicID 仙术编号
 * @param Value 施法概率百分比
 */
function
EnemySetMagic(
   MagicID,
   Value
)
{
   
}

/**
 * @note
 * -  0x0068
 * 
 * @deprecated
 * -  如果是敌方正在行动则跳转到 {ScrAddress}
 * 
 * @param ScrAddress 敌方正在行动则跳转到的地址
 */
function
JumpIfEnemyTurn(
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x0069
 * 
 * @deprecated
 * -  敌人从战斗逃跑
 * 
 * @param void 无
 */
function
BattleEnemyEscape()
{
   
}

/**
 * @note
 * -  0x006A
 * 
 * @deprecated
 * -  当前队员偷窃当前敌人，成功率 {Value} %
 * 
 * @param Value 偷窃成功的概率百分比
 */
function
BattleStealFromEnemy()
{
   
}

/**
 * @note
 * -  0x006B
 * 
 * @deprecated
 * -  吹动敌方全体，后撤 {FrameNum} 帧
 * 
 * @param FrameNum 后撤的帧计数
 */
function
BattleBlowAwayEnemy(
   FrameNum
)
{
   
}

/**
 * @note
 * -  0x006C
 * 
 * @deprecated
 * -  事件 {SceneID EventID} 走一步，坐标移动 {X Y}
 * 
 * @param SceneID 场景编号
 * @param EventID 事件编号
 * @param X X 坐标移动的量
 * @param Y Y 坐标移动的量
 */
function
EventWalkOneStep(
   SceneID,
   EventID,
   X,
   Y
)
{
   
}

/**
 * @note
 * -  0x006D
 * 
 * @deprecated
 * -  设置场景 {SceneID} 的脚本为 {ScrEnter ScrTeleport}
 * 
 * @param SceneID 场景编号
 * @param ScrEnter 进场脚本，缺省则不设置
 * @param ScrTeleport 土遁脚本，缺省则不设置
 */
function
SceneSetScripts(
   SceneID,
   ScrEnter,
   ScrTeleport
)
{
   
}

/**
 * @note
 * -  0x006E
 * 
 * @deprecated
 * -  队伍走一步，坐标移动 {X Y}，图层变为 {Layer}
 * 
 * @param X X 坐标移动的量
 * @param Y Y 坐标移动的量
 * @param Layer 图层；实际图层数为 Layer * 8
 */
function
RoleMoveOneStep(
   X,
   Y,
   Layer
)
{
   
}

/**
 * @note
 * -  0x006F
 * 
 * @deprecated
 * -  当前事件与事件 {SceneID EventID} 同步为同一个状态
 * 
 * @param SceneID 场景编号
 * @param EventID 事件编号
 * @param Display 显示状态
 * @param IsObstacle 阻碍队伍通行
 */
function
EventSyncState(
   SceneID,
   EventID,
   Display,
   IsObstacle
)
{
   
}

/**
 * @note
 * -  0x0070；
 *    0x007A；
 *    0x007B；
 * 
 * @deprecated
 * -  队伍走到块坐标 {BX, BY, BH}；
 *    0x0070：速度 2；
 *    0x007A：速度 4；
 *    0x007B：速度 8
 * 
 * @param BX 欲走到块的 X 坐标
 * @param BY 欲走到块的 Y 坐标
 * @param BH 欲走到的块的 左右板块ID；【左板块[0] 右板块[1]】
 * @param Speed 移动速度
 */
function
PartyWalkToBlock(
   BX,
   BY,
   BH,
   Speed
)
{
   
}

/**
 * @note
 * -  0x0071
 * 
 * @deprecated
 * -  波动/扭曲屏幕，层次 {Level}，进度 {Progression}
 * 
 * @param Level 波动/扭曲层次
 * @param Progression 波动/扭曲进度
 */
function
VideoWave(
   Level,
   Progression
)
{
   
}

/**
 * @note
 * -  0x0073；
 *    0x009B
 * 
 * @deprecated
 * -  淡入到场景 {SceneID}，速度 {Speed}；
 *    0x0073：当前场景；
 * 
 * @param SceneID 场景编号
 * @param Speed 淡入速度
 */
function
FadeToScene(
   SceneID,
   Speed
)
{
   
}

/**
 * @note
 * -  0x0074
 * 
 * @deprecated
 * -  如果队伍中有 HP 不满的的队员，则跳转到 {ScrAddress}
 * 
 * @param ScrAddress 欲跳转到的地址
 */
function
JumpIfNotAllRolesFullHP(
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x0075
 * 
 * @deprecated
 * -  设置队伍中的队员，并自动计算和设置队伍人数
 * 
 * @param StrDec 十进制位字符串（1李 2赵 3林 4巫 5奴 6盖，示例：巫李（30））
 */
function
PartySetRole(
   StrDec
)
{
   
}

/**
 * @note
 * -  0x0076
 * 
 * @deprecated
 * -  淡入 FBP 图像，速度 {Speed}
 * 
 * @param FBPID FBP 图像编号
 * @param Speed 淡入速度
 */
function
FadeFBP(
   FBPID,
   Speed
)
{
   
}

/**
 * @note
 * -  0x0077
 * 
 * @deprecated
 * -  停止播放音乐
 * 
 * @param void 无
 */
function
MusicStop()
{
   
}

/**
 * @note
 * -  0x0078
 * 
 * @deprecated
 * -  战后返回地图
 * 
 * @param void 无
 */
function
BattleEnd()
{
   
}

/**
 * @note
 * -  0x0079
 * 
 * @deprecated
 * -  如果英雄 {HeroID} 在队伍中，则跳转到地址 {ScrAddress}；
 * 
 * @param HeroID 英雄编号
 * @param ScrAddress 英雄在队伍中则跳转到的地址
 */
function
JumpIfHeroInParty(
   HeroID,
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x007D
 * 
 * @deprecated
 * -  将事件 {SceneID EventID} 的坐标变动 {X Y}
 * 
 * @param SceneID 场景编号
 * @param EventID 事件编号
 * @param X X 坐标移动的量
 * @param Y Y 坐标移动的量
 */
function
EventModifyPos(
   SceneID,
   EventID,
   X,
   Y
)
{
   
}

/**
 * @note
 * -  0x007E
 * 
 * @deprecated
 * -  将事件 {SceneID EventID} 的图层设置为 {Layer}
 * 
 * @param SceneID 场景编号
 * @param EventID 事件编号
 * @param Layer 图层；
 */
function
EventSetLayer(
   SceneID,
   EventID,
   Layer
)
{
   
}

/**
 * @note
 * -  0x007F
 * 
 * @deprecated
 * -  将视口相对移动 {X Y}，以 {FrameNum} 帧完成移动
 * 
 * @param X X 坐标移动的量
 * @param Y Y 坐标移动的量
 * @param FrameNum 图层；若为 -1 ，回到原点时不更新画面，移动时不更新画面
 */
function
ViewportMove(
   X,
   Y,
   FrameNum
)
{
   
}

/**
 * @note
 * -  0x0080
 * 
 * @deprecated
 * -  昼夜时间滤镜切换
 * 
 * @param UpdateScene 是否更新画面
 */
function
ToggleDayNight(
   UpdateScene
)
{
   
}

/**
 * @note
 * -  0x0081
 * 
 * @deprecated
 * -  若队伍领队没有面向事件 {SceneID EventID}，则跳转到 {ScrAddress}
 * 
 * @param SceneID 场景编号
 * @param EventID 事件编号
 * @param TriggerDistance 触发范围
 * @param ScrAddress 队伍领队没有面向事件则跳转到的地址
 */
function
JumpIfPartyNotFacingEvent(
   SceneID,
   EventID,
   TriggerDistance,
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x0083
 * 
 * @deprecated
 * -  若事件 {SceneID EventID}，没有在当前事件的范围 {Range} 内，则跳转到 {ScrAddress}
 * 
 * @param SceneID 场景编号
 * @param EventID 事件编号
 * @param Range 范围
 * @param ScrAddress 队伍领队没有面向事件则跳转到的地址
 */
function
JumpIfEventNotInZone(
   SceneID,
   EventID,
   Range,
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x0084
 * 
 * @deprecated
 * -  将事件 {SceneID EventID} 的坐标设置到领队面前；
 *    设置显示状态为 {Display}，阻碍队伍通行 {IsObstacle}，放置失败则跳转到 {ScrAddress}
 * 
 * @param SceneID 场景编号
 * @param EventID 事件编号
 * @param Display 显示状态
 * @param IsObstacle 阻碍队伍通行
 * @param ScrAddress 队伍领队没有面向事件则跳转到的地址
 */
function
EventSetPosToPartyAndObstacle(
   SceneID,
   EventID,
   Display,
   IsObstacle,
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x0085
 * 
 * @deprecated
 * -  延迟 {Delay * 80} ms
 * 
 * @param Delay 延迟时间；实际延迟时间 {Delay * 80} ms
 */
function
Delay(
   Delay
)
{
   
}

/**
 * @note
 * -  0x0086
 * 
 * @deprecated
 * -  若所有队员中身上装备的 {ItemID} 数量不足 {Value}，则跳转到 {ScrAddress}
 * 
 * @param ItemID 道具编号
 * @param Value 道具数量
 * @param ScrAddress 装备数不足则跳转到的脚本
 */
function
JumpIfItemNotEquipped(
   Delay,
   Value,
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x0088
 * 
 * @deprecated
 * -  将仙术 {MagicID} 的基础伤害设置为金钱的 0.4 倍
 * 
 * @param MagicID 仙术编号
 * @param Multiple 倍数
 */
function
MagicSetBaseDamageByMoney(
   MagicID,
   Multiple
)
{
   
}

/**
 * @note
 * -  0x0089
 * 
 * @deprecated
 * -  设置战斗结果为 {BattleResult}
 * 
 * @param BattleResult 战斗结果（-1=逃离战斗 0=脚本结束 1=我方全灭 2=战斗胜利）
 */
function
BattleSetResult(
   BattleResult
)
{
   
}

/**
 * @note
 * -  0x008A
 * 
 * @deprecated
 * -  将下次战斗设置为自动战斗
 * 
 * @param void 无
 */
function
BattleEnableAuto()
{
   
}

/**
 * @note
 * -  0x008B
 * 
 * @deprecated
 * -  更改当前调色板；废弃的指令
 * 
 * @param PaletteID 调色板编号
 */
function
SetPalette(
   PaletteID
)
{
   
}

/**
 * @note
 * -  0x008C
 * 
 * @deprecated
 * -  淡出到颜色 {ColorHex} /从颜色 {ColorHex} 淡出
 * 
 * @param Delay 每一步的延迟，实际延迟 {Delay * 60} ms
 * @param ColorHex Hex 颜色值
 * @param IsFrom Hex 是否从 ColorHex 淡出，否则淡出到 ColorHex
 */
function
FadeColor(
   Delay,
   ColorHex,
   IsFrom
)
{
   
}

/**
 * @note
 * -  0x008D
 * 
 * @deprecated
 * -  当前队员修行变动 {Value}
 * 
 * @param Value 欲变动的值，正数增加，负数减少
 */
function
RoleModifyLevel(
   Value
)
{
   
}

/**
 * @note
 * -  0x008E
 * 
 * @deprecated
 * -  还原屏幕
 * 
 * @param void 无
 */
function
VideoRestore()
{
   
}

/**
 * @note
 * -  0x008F
 * 
 * @deprecated
 * -  金钱减半
 * 
 * @param void 无
 */
function
CashHalve()
{
   
}

/**
 * @note
 * -  0x0090
 * 
 * @deprecated
 * -  将 {ObjectType} 对象 {ObjectID} 脚本 {ScrType} 的地址设置为 {ScrAddress}
 * 
 * @param ObjectType 对象类型（0=Hero 1=Item 2=Magic 3=Enemy 4=Poison）
 * @param ObjectID 对象编号
 * @param ScrType 脚本类型
 * @param ScrAddress 欲设置的脚本地址
 */
function
ObjectSetScript(
   ObjectType,
   ObjectID,
   ScrType,
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x0091
 * 
 * @deprecated
 * -  如果战场上有多个敌人与当前敌人编号一样，
 *    且当前敌人是其中的第一个，则跳转到 {ScrAddress}
 * 
 * @param ScrAddress 则跳转到的脚本地址
 */
function
JumpIfEnemyNotFirstOfKind(
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x0092
 * 
 * @deprecated
 * -  播放队员 {RoleID} 的施法动作，之后我方全体高亮
 * 
 * @param RoleID 队员编号，缺省表示当前队员
 */
function
ShowRoleMagicAction(
   RoleID
)
{
   
}

/**
 * @note
 * -  0x0093
 * 
 * @deprecated
 * -  屏幕淡出，期间更新场景
 * 
 * @param Step 淡入步长
 */
function
VideoFadeAndUpdate(
   Step
)
{
   
}

/**
 * @note
 * -  0x0094
 * 
 * @deprecated
 * -  如果事件 {SceneID EventID} 的状态为 {State}，则跳转到 {ScrAddress}
 * 
 * @param SceneID 场景编号
 * @param EventID 事件编号
 * @param Display 显示状态
 * @param IsObstacle 阻碍队伍通行
 * @param ScrAddress 事件状态匹配则跳转到的地址
 */
function
JumpIfEventStateMatches(
   SceneID,
   EventID,
   Display,
   IsObstacle,
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x0095
 * 
 * @deprecated
 * -  如果当前场景为 {SceneID}，则跳转到 {ScrAddress}
 * 
 * @param SceneID 场景编号
 * @param ScrAddress 场景匹配则跳转到的地址
 */
function
JumpIfCurrentSceneMatches(
   SceneID,
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x0096
 * 
 * @deprecated
 * -  显示游戏通关后的动画
 * 
 * @param void 无
 */
function
ShowEndingAnimation()
{
   
}

/**
 * @note
 * -  0x0098
 * 
 * @deprecated
 * -  设置队伍随从，人数不限
 * 
 * @param SpriteID 形象编号
 */
function
PartySetFollower(
   SpriteID
)
{
   
}

/**
 * @note
 * -  0x0099
 * 
 * @deprecated
 * -  将场景 {SceneID} 的地图设置为 {MapID}
 * 
 * @param SceneID 场景编号
 * @param MapID 地图编号
 */
function
SceneSetMap(
   SceneID,
   MapID
)
{
   
}

/**
 * @note
 * -  0x009A
 * 
 * @deprecated
 * -  将事件 {EventBeginID} ~ 事件 {EventEndID} 的地图设置为 {MapID}
 * 
 * @param SceneBeginID 场景编号
 * @param EventBeginID 起始事件编号
 * @param SceneEndID 场景编号
 * @param EventEndID 终末事件编号
 * @param MapID 地图编号
 * @param Display 显示状态
 * @param IsObstacle 阻碍队伍通行
 */
function
EventSetStateSequence(
   BeginSceneID,
   BeginEventID,
   EndSceneID,
   EndEventID,
   Display,
   IsObstacle
)
{
   
}

/**
 * @note
 * -  0x009C
 * 
 * @deprecated
 * -  敌人分身，数据完全复制，分身失败则跳转到 {ScrAddress}
 * 
 * @param Value 分身的数量
 * @param ScrAddress 分身失败则跳转到的脚本地址
 */
function
EnemyClone(
   Value,
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x009E
 * 
 * @deprecated
 * -  敌人召唤 {EnemyID}，数量 {Value}，若召唤失败则跳转到 {ScrAddress}
 * 
 * @param EnemyID 欲召唤的敌人编号
 * @param Value 欲召唤的数量
 * @param ScrAddress 召唤失败则跳转到的脚本地址
 */
function
EnemySummonMonster(
   EnemyID,
   Value,
   ScrAddress
)
{
   
}

/**
 * @note
 * -  0x009F
 * 
 * @deprecated
 * -  敌方变身为 {EnemyID}
 * 
 * @param EnemyID 敌人编号
 */
function
EnemyTransform(
   EnemyID
)
{
   
}

/**
 * @note
 * -  0x00A0
 * 
 * @deprecated
 * -  退出游戏
 * 
 * @param void 无
 */
function
QuitGame()
{
   
}

/**
 * @note
 * -  0x00A1
 * 
 * @deprecated
 * -  将队伍的坐标设置为和领队重合
 * 
 * @param void 无
 */
function
PartySetPosToFirstRole()
{
   
}

/**
 * @note
 * -  0x00A2
 * 
 * @deprecated
 * -  随机跳转到后面指令 0 ～ {Range} 中的任意一条指令
 * 
 * @param Range 范围
 */
function
JumpToRandomInstruction(
   Range
)
{
   
}

/**
 * @note
 * -  0x00A3
 * 
 * @deprecated
 * -  播放 CD {CDID}，若 CD 不存在则播放 RIX {MusicID}
 * 
 * @param CDID 欲播放的音乐编号
 * @param MusicID 欲播放的音乐编号
 */
function
PlayCDOrMusic(
   CDID,
   MusicID
)
{
   
}

/**
 * @note
 * -  0x00A4
 * 
 * @deprecated
 * -  将 FBP {FBPID} 滚动到屏幕，每帧滚动延迟 {800 / Speed} 毫秒
 * 
 * @param FBPID FBP 图像编号
 * @param Speed 滚动速度
 */
function
ScrollFBP(
   FBPID,
   Speed
)
{
   
}

/**
 * @note
 * -  0x00A5
 * 
 * @deprecated
 * -  淡入被 320*200 大小的 NPC {SpriteID} 覆盖的 FBP 图像，速度 {Speed}
 * 
 * @param FBPID FBP 图像编号
 * @param SpriteID NPC 形象编号
 * @param Speed 淡入速度
 */
function
ShowFBPWithSprite(
   FBPID,
   Speed
)
{
   
}

/**
 * @note
 * -  0x00A6
 * 
 * @deprecated
 * -  备份当前屏幕
 * 
 * @param void 无
 */
function
ScreenBackup()
{
   
}

/**
 * @note
 * -  0x00A7
 * 
 * @deprecated
 * -  将对话框设置到对象描述的位置，仙术/道具
 * 
 * @param void 无
 */
function
DlgItem()
{
   
}

/**
 * @note
 * -  0xFFFF
 * 
 * @deprecated
 * -  显示对话
 * 
 * @param Msg 对话内容
 */
function
Dlg(
   Msg
)
{
   
}