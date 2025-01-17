declare class CommandOrigin {
    getRequestId(): string

    getName(): string

    // getBlockPosition(): BlockPos

    getWorldPosition(): Vec3

    //  getRotation(): Vec2

    getLevel(): Level

    getDimension(): Dimension

    // getEntity(): Entity

    getPermissionsLevel(): CommandEnum.CommandPermissionLevel

    //     // vIndex: 9
    //     virtual ::CommandPermissionLevel getPermissionsLevel() const = 0;
    //
    //     // vIndex: 10
    //     virtual ::std::unique_ptr<::CommandOrigin> clone() const = 0;
    //
    //     // vIndex: 11
    //     virtual ::std::optional<::BlockPos> getCursorHitBlockPos() const;
    //
    //     // vIndex: 12
    //     virtual ::std::optional<::Vec3> getCursorHitPos() const;

    hasChatPerms(): boolean

    hasTellPerms(): boolean

    canUseAbility(abilitiesIndex: PlayerEnum.AbilitiesIndex): boolean

    isWorldBuilder(): boolean

    canUseCommandsWithoutCheatsEnabled(): boolean

    isSelectorExpansionAllowed(): boolean

    // getSourceId(): NetworkIdentifier

    //  getSourceSubId(); // TODO

    getOutputReceiver(): CommandOutput

    //  getIdentity(); // TODO

    //  getOriginType(); // TODO

    //  toCommandOriginData(); // TODO

    //  getUUID(); // TODO

    handleCommandOutputCallback(int: number, string: string): void

    updateValues(): void

    //  getExecutePosition(const Arguments& args);

    isValid(): boolean

    requiresValidLevel(): boolean

    //  _setUUID(const Arguments& args); // TODO

    sUnknownSource(): NetworkIdentifier
}
