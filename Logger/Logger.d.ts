/// <reference path= "../Logger/LoggerEnum.d.ts" />

declare abstract class Logger {
    /**
     * 获取 Logger 实例
     * @param title 日志标题
     */
    static getLogger(title?: string): Logger

    /**
     * 日志输出
     * @param logLevel 日志等级
     * @param msg 日志内容
     */
    log(logLevel: LoggerEnum.LogLevel, ...msg: any): void

    /**
     * 致命错误输出
     * @param msg 日志内容
     */
    fatal(...msg: any): void

    /**
     * 错误输出
     * @param msg 日志内容
     */
    error(...msg: any): void

    /**
     * 警告输出
     * @param msg 日志内容
     */
    warn(...msg: any): void

    /**
     * 信息输出
     * @param msg 日志内容
     */
    info(...msg: any): void

    /**
     * 调试输出
     * @param msg 日志内容
     */
    debug(...msg: any): void

    /**
     * 跟踪输出
     * @param msg 日志内容
     */
    trace(...msg: any): void

    setLevel(level: LoggerEnum.LogLevel): void
}
