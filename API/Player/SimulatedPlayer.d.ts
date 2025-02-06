declare abstract class SimulatedPlayer extends ServerPlayer {
    /**
     * 创建模拟玩家
     * @param name 模拟玩家名
     * @param vec3 坐标
     * @param dimensionType 维度
     * @param vec2 视线
     */
    static newSimulatedPlayer(name: string, vec3: Vec3, dimensionType: DimensionType, vec2: Vec2): SimulatedPlayer

    /**
     * 是否为模拟玩家
     */
    readonly isSimulated: boolean

    /**
     * 模拟玩家的 XUID
     */
    readonly xuid: string

    readonly _spawnChunkLimit: number

    /**
     * 潜行
     */
    simulateSneaking(): boolean

    /**
     * 停止潜行
     */
    simulateStopSneaking(): boolean

    /**
    * 使用物品
    * @param itemStack 物品堆
    */
    simulateUseItem(itemStack?: ItemStack): boolean

    /**
     * 破坏看向方向
     * @param handLength 破坏长度
     */
    simulateDestroyLookAt(handLength: number): boolean

    _addMoveComponent(): void

    //  _createNavigationResult ();
    _trySwing(): boolean

    _updateMovement(): void

    _updateRidingComponents(): void

    //  getGameTestHelper ();
    postAiStep(): void

    preAiStep(): void

    //  setGameTestHelper (): void
    setXuid(name: string): void

    simulateAttack(actor?: Actor): boolean

    simulateChat(message: string): void

    // face 实际类型 ::ScriptModuleMinecraft::ScriptFacing
    simulateDestroyBlock(pos: BlockPos, face: number): boolean

    simulateDisconnect(): void

    simulateDropSelectedItem(): boolean

    simulateFly(): void

    simulateGiveItem(item: ItemStack, selectSlot: boolean): boolean

    simulateInteract(actor?: Actor): boolean

    // face 实际类型 ::ScriptModuleMinecraft::ScriptFacing
    simulateInteract(pos: BlockPos, face: number): boolean

    simulateJump(): boolean

    simulateLocalMove(localDirection: Vec3, float: number): boolean

    simulateLookAt(actor: Actor, lookType: SimulatedPlayerEnum.LookDuration): void

    simulateLookAt(pos: BlockPos, lookType: SimulatedPlayerEnum.LookDuration): void

    simulateLookAt(pos: Vec3, lookType: SimulatedPlayerEnum.LookDuration): void

    simulateMoveToLocation(position: Vec3, speed: number, facetarget: boolean): void

    //  simulateNavigateToEntity ();
    //  simulateNavigateToLocation ();

    simulateNavigateToLocations(positions: Vec3[], speed: number): void

    simulateRespawn(): boolean

    simulateSetBodyRotation(degY: number): void

    simulateSetItem(item: ItemStack, selectSlot: boolean, slot: number): boolean

    simulateStartBuildInSlot(slot: number): void

    simulateStopBuild(): void

    simulateStopDestroyingBlock(): void

    simulateStopFlying(): void

    simulateStopInteracting(): void

    simulateStopMoving(): void

    simulateStopUsingItem(): void

    simulateUseItemInSlot(item: ItemStack): boolean

    simulateUseItemInSlotOnBlock(slot: number): boolean

    // face 实际类型 ::ScriptModuleMinecraft::ScriptFacing
    simulateUseItemOnBlock(slot: number, pos: BlockPos, face: number, facePos: Vec3): boolean

    simulateWorldMove(worldDirection: Vec3, float: number): boolean
}
