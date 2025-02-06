/// <reference path="../Player/PlayerEnum.d.ts" />
/// <reference path="../Player/LayeredAbilities.d.ts" />
/// <reference path="../Player/GameMode.d.ts" />
/// <reference path="../Player/ActorDamageSource.d.ts" />
/// <reference path="../Player/ServerPlayer.d.ts" />
/// <reference path="../Player/SimulatedPlayerEnum.d.ts" />
/// <reference path="../Player/SimulatedPlayer.d.ts" />

declare abstract class Player extends Mob {
    readonly xuid: string
    readonly uuid: string
    readonly realName: string
    readonly name: string
    readonly IPAndPort: string
    readonly localeCode: string
    readonly shadowRadius: number
    readonly speed: number
    readonly userId: number
    readonly itemUseDuration: number
    readonly itemUseStartupProgress: number
    readonly itemUseIntervalProgress: number
    readonly maxChunkBuildRadius: number
    readonly blockedUsingDamagedShieldTimeStamp: number
    readonly blockedUsingShieldTimeStamp: number
    readonly blockingStartTimeStamp: number
    readonly chunkRadius: number
    readonly enchantmentSeed: number
    readonly direction: number
    readonly luck: number
    readonly mapIndex: number
    readonly maxItemCooldownLeft: number
    readonly interactText: string
    readonly playerIndex: number
    readonly playerLevel: number
    readonly selectedItemSlot: number
    readonly playerSessionId: string
    readonly platformOnlineId: string
    readonly serverId: string
    readonly sleepRotation: number
    readonly usedPotion: number
    readonly xpEarnedAtCurrentLevel: number
    readonly xpNeededForNextLevel: number
    readonly isLoading: boolean
    readonly isPlayerInitialized: boolean
    readonly isImmobile: boolean
    readonly isSleeping: boolean
    readonly isTeacher: boolean
    readonly isSimulated: boolean
    readonly isFireImmune: boolean
    readonly isInTrialMode: boolean
    readonly isBlocking: boolean
    readonly isSilentObserver: boolean
    readonly isEmoting: boolean
    readonly isFlying: boolean
    readonly isForcedRespawn: boolean
    readonly isHostingPlayer: boolean
    readonly isHungry: boolean
    readonly isHurt: boolean
    readonly isInRaid: boolean
    readonly isRespawningFromTheEnd: boolean
    readonly isSleepingLongEnough: boolean
    readonly isSpawned: boolean
    readonly isUsingItem: boolean
    readonly isValidSpawn: boolean
    readonly canStartSleepInBed: boolean
    readonly canExistWhenDisallowMob: boolean
    readonly canFreeze: boolean
    readonly canChangeDimensionsUsingPortal: boolean
    readonly canInteractWithOtherEntitiesInGame: boolean
    readonly canObstructSpawningAndBlockPlacement: boolean
    readonly canBeSeenOnMap: boolean
    readonly canJump: boolean
    readonly canOpenContainerScreen: boolean
    readonly canSleep: boolean
    readonly canUseOperatorBlocks: boolean
    readonly hasDiedBefore: boolean
    readonly hasBedPosition: boolean
    readonly hasOpenContainer: boolean
    readonly hasOwnedChunkSource: boolean
    readonly hasRespawnAnchorPosition: boolean
    readonly hasRespawnPosition: boolean

    disconnect(reason: string): boolean

    sendMessage(msg: string): boolean

    setAbility(index: number, value: boolean): boolean

    addAndRefresh(item: ItemStack): boolean

    broadcastPlayerSpawnedMobEvent(spawnedType: number, spawnMethod: number): void

    canUseAbility(abilityIndex: number): boolean

    causeFoodExhaustion(exhaustionAmount: number): boolean

    checkBed(spawnBlockSource: BlockSource, positionToCheck: Vec3): boolean

    checkNeedAutoJump(inputMoveX: number, inputMoveZ: number): boolean

    checkSpawnBlock(region: BlockSource): boolean

    clearRespawnPosition(): boolean

    completeUsingItem(): boolean

    eat(instance: ItemStack): boolean

    eat(hungerValue: number, saturationModifier: number): boolean

    equippedArmorItemCanBeMoved(item: ItemStack): boolean

    fireDimensionChangedEvent(fromDimension: any, toDimension: any): any// TODO

    forceAllowEating(): boolean

    getAbilities(): LayeredAbilities

    getAgent(): Agent

    getAgentID(): ActorUniqueID // TODO

    getAgentIfAllowed(callerCanAccessOtherAgents: boolean, callerAgentID: ActorUniqueID): Agent

    getBedPosition(): BlockPos

    getCapePos(a: number): Vec3

    getContainerManager(): any

    getContainerRegistryAccess(): any

    getContainerRegistryTracker(): any

    getCurrentActiveShield(): ItemStack

    getDestroyProgress(): any

    getDynamicContainerSerialization(): any

    getExpectedSpawnDimensionId(): any

    getExpectedSpawnPosition(): BlockPos

    getGameMode(): GameMode

    getInventory(): Container

    getItemCooldownLeft(typeHash: number): number

    getItemInUse(): ItemStack

    getItemInteractText(item: Item): string

    getItemStackNetManager(): any

    getPlatform(): any

    getItemStackNetManager(): any

    getPlayerGameType(): any

    getPlayerPermissionLevel(): any

    getPlayerUIItem(playerUISlot: any): any

    getRespawnAnchorPosition(): BlockPos

    getSelectedItem(): ItemStack

    getSkin(): any

    getSpawnDimension(): any

    getSpawnPosition(): BlockPos

    getSupplies(): any

    getTrackedBosses(): ActorUniqueID[]

    getXpNeededForLevelRange(startlevel: number, endlevel: number): number

    hasOpenContainerOfContainerType(containerType: any): any

    hasResource(resource: any): any

    interact(actor: Actor, location: Vec3): boolean

    inventoryChanged(container: Container, slot: number, oldItem: ItemStack, newItem: ItemStack, forceBalanced: boolean): void

    is2DPositionRelevant(dimension: any, position: BlockPos): any

    isHiddenFrom(target: Mob): any

    isItemOnCooldown(type: any): any

    passengerCheckMovementStats(): boolean

    playPredictiveSynchronizedSound(type: any, pos: Vec3, block: Block, entityType: any, isGlobal: boolean): void

    playPredictiveSynchronizedSound(type: any, pos: Vec3, entityType: any, data: number, isGlobal: boolean): void

    recheckRespawnPosition(): boolean

    registerTrackedBoss(mob: ActorUniqueID): void

    releaseUsingItem(): boolean

    resendAllChunks(): boolean

    resetPlayerLevel(): boolean

    resetPublisherInitialSpawn(): boolean

    resetToDefaultGameMode(): boolean

    saveLastDeathLocation(tag: any): boolean

    sendEventPacket(packet: any): boolean

    sendPlayerTeleported(): boolean

    sendSpawnExperienceOrbPacketToServer(): boolean

    setAgent(agent: Agent): boolean

    setBedRespawnPosition(bedPosition: BlockPos): boolean

    setBlockRespawnUntilClientMessage(val: boolean): boolean

    setChunkRadius(chunkRadius: number): boolean

    setContainerManagerModel(manager: any): boolean

    setCursorSelectedItem(item: ItemStack): boolean

    setCursorSelectedItemGroup(itemGroup: any): boolean

    setEmotingStatus(emoteTicks: number): boolean

    setEnchantmentSeed(newSeed: number): boolean

    setHasDied(hasDied: boolean): boolean

    setHasSeenCredits(value: boolean): boolean

    setInventoryOptions(options: any): boolean

    setLastDeathDimension(dimension: any): boolean

    setLastDeathPos(pos: BlockPos): boolean

    setMapIndex(mapIndex: number): boolean

    setName(newName: string): boolean

    setPermissions(permissions: any): boolean

    setPlatformOnlineId(platformOnlineId: string): boolean

    setPlayerIndex(index: number): boolean

    setPlayerUIItem(slot: any, item: ItemStack, forceBalance: boolean): boolean

    setRespawnPosition(inRespawnPosition: BlockPos, dimension: any): boolean

    setRespawnPositionCandidate(): boolean

    setRespawnReady(respawnPosition: Vec3): boolean

    setSelectedItem(item: ItemStack): boolean

    setSelectedSlot(slot: number): any

    setSpawnBlockRespawnPosition(spawnBlockPosition: BlockPos, dimension: any): any

    setUsedPotion(used: boolean): boolean

    shouldShowCredits(): boolean

    startCooldown(item: Item, updateClient: boolean): any

    startCooldown(type: any, tickDuration: number, updateClient: boolean): any

    startDestroying(): boolean

    startItemUseOn(face: any, blockPos: BlockPos, buildBlockPos: BlockPos, item: ItemStack): any

    startUsingItem(instance: ItemStack, duration: number): any

    stopDestroying(): boolean

    stopGliding(): boolean

    stopItemUseOn(blockPos: BlockPos, item: ItemStack): boolean

    stopUsingItem(): boolean

    take(): any

    tickArmor(): boolean

    tryDisableShield(): boolean

    tryStartGliding(): boolean

    tryStartSleeping(blockPos: BlockPos): boolean

    unRegisterTrackedBoss(mob: ActorUniqueID): any

    updateBlockSourceTick(): boolean

    updateInventoryTransactions(): boolean

    updateSkin(skin: any, clientSubID: number): boolean

    updateTouch(): boolean

    updateTrackedBosses(): boolean

    useSelectedItem(itemUseMethod: any, consumeItem: boolean): any

    static checkAndFixSpawnPosition_DEPRECATED(spawnPosition: Vec3, regions: BlockSource[], aabb: any, adjustYToSolidGround: boolean, _: boolean, searchUp: boolean, positionFromSave: boolean, spawningAtForcedSpawn: boolean, dimensionHeight: number): any

    static checkNeedAutoJump(region: any, aabbShape: any, actorRotation: any, movementSpeed: number, stateVector: any, collisionShapeInterface: any, inputMoveX: number, inputMoveZ: number): any

    static getCustomHurtSound(mob: Mob, cause: any): any

    static isDangerousVolumeForSpawn(region: any, centeredAABB: any): any

    static tryGetFromComponent(playerComponent: any, actorOwnerComponent: any, includeRemoved: boolean): any

    static tryGetFromEntity(entity: any, includeRemoved: boolean): any

    static updatePlayerGameTypeEntityData(entity: any, gameType: any, defaultGameType: any): any
}
