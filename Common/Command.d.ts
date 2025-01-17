/* eslint-disable max-len */
declare class Command {
    static newCommand(name: string, description?: string, permissionLevel?: CommandEnum.CommandPermissionLevel, flag?: CommandEnum.CommandFlagValue): Command

    setAlias(alias: string): boolean

    setCallback(callback: (command: Command, commandOrigin: CommandOrigin, commandOutput: CommandOutput, args: Record<string, any>) => void): boolean

    optional(arg: string, type: CommandEnum.ParamKindKind, option: CommandEnum.CommandParameterOption, enumName?: string): this

    required(arg: string, type: CommandEnum.ParamKindKind, option: CommandEnum.CommandParameterOption, enumName?: string): this

    overload(): void

    text(arg: string): this

    addEnum(name: string, values: string[]): void

    setSoftEnum(name: string, values: string[]): void

    addSoftEnum(name: string, values: string[]): void

    removeSoftEnum(name: string, values: string[]): void
}
