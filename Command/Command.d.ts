/* eslint-disable max-len */

/** 命令类 */
declare abstract class Command {
    /**
     * 创建命令
     * @param name 命令名
     * @param description 命令描述
     * @param permissionLevel 命令权限
     * @param flag 命令标志
     */
    static newCommand(name: string, description?: string, permissionLevel?: CommandEnum.CommandPermissionLevel, flag?: CommandEnum.CommandFlagValue): Command

    /**
     * 命令别名
     * @param alias 命令别名
     */
    setAlias(alias: string): boolean

    /**
     * 设置命令回调
     * @param callback 回调函数
     */
    setCallback(callback: (command: Command, commandOrigin: CommandOrigin, commandOutput: CommandOutput, args: Record<string, any>) => void): boolean

    /**
     * 设置可选参数
     * @param name 参数名
     * @param type 参数类型
     * @param option 参数枚举类型
     * @param enumName 枚举名
     */
    optional(name: string, type: CommandEnum.ParamKindKind, option: CommandEnum.CommandParameterOption, enumName?: string): this

    /**
     * 设置必选参数
     * @param name 参数名
     * @param type 参数类型
     * @param option 参数枚举类型
     * @param enumName 枚举名
     */
    required(name: string, type: CommandEnum.ParamKindKind, option: CommandEnum.CommandParameterOption, enumName?: string): this

    /**
     * 设置命令重载
     */
    overload(): void

    /**
     * 添加文本
     * @param name 文本
     */
    text(name: string): this

    /**
     * 添加枚举
     * @param name 枚举名
     * @param values 枚举值
     */
    addEnum(name: string, values: string[]): void

    /**
     * 设置动态枚举
     * @param name 枚举名
     * @param values 枚举值
     */
    setSoftEnum(name: string, values: string[]): void

    /**
     * 添加动态枚举
     * @param name 枚举名
     * @param values 枚举值
     */
    addSoftEnum(name: string, values: string[]): void

    /**
     * 移除动态枚举
     * @param name 枚举名
     * @param values 枚举值
     */
    removeSoftEnum(name: string, values: string[]): void
}
