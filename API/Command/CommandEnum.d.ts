declare namespace CommandEnum {
    enum CommandPermissionLevel {
        Any = 0,
        GameDirectors = 1,
        Admin = 2,
        Host = 3,
        Owner = 4,
        Internal = 5,
    }
    enum CommandFlagValue {
        None = 0,
        UsageTest = 1 << 0,
        HiddenFromCommandBlockOrigin = 1 << 1,
        HiddenFromPlayerOrigin = 1 << 2,
        HiddenFromAutomationOrigin = 1 << 3,
        SyncLocal = 1 << 4,
        ExecuteDisallowed = 1 << 5,
        TypeMessage = 1 << 6,
        NotCheat = 1 << 7,
        Async = 1 << 8,
        NoEditor = 1 << 9,
        Hidden = HiddenFromPlayerOrigin | HiddenFromCommandBlockOrigin,
        Removed = Hidden | HiddenFromAutomationOrigin,
    }
    enum ParamKindKind {
        Int = 0,
        Bool,
        Float,
        Dimension,
        String,
        Enum,
        SoftEnum,
        Actor,
        Player,
        BlockPos,
        Vec3,
        RawText,
        Message,
        JsonValue,
        Item,
        BlockName,
        BlockState,
        Effect,
        ActorType,
        Command,
        RelativeFloat,
        IntegerRange,
        FilePath,
        WildcardInt,
        WildcardActor,
        // New types can only be added here, to keep the ABI stable.
        Count,
    }
    enum CommandParameterOption {
        // bitfield representation
        None = 0,
        EnumAutocompleteExpansion = 1 << 0,
        HasSemanticConstraint = 1 << 1,
        EnumAsChainedCommand = 1 << 2,
    }
}
