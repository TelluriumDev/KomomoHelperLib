declare class Logger {
    static getLogger(title?: string): Logger

    log(logLevel: LoggerEnum.LogLevel, msg: string): void

    fatal(msg: string): void

    error(msg: string): void

    warn(msg: string): void

    info(msg: string): void

    debug(msg: string): void

    trace(msg: string): void

    setLevel(level: LoggerEnum.LogLevel): void
}
