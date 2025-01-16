declare class Logger {
    static getLogger(title?: string): Logger

    log(logLevel: LoggerEnum.LogLevel, ...msg: any): void

    fatal(...msg: any): void

    error(...msg: any): void

    warn(...msg: any): void

    info(...msg: any): void

    debug(...msg: any): void

    trace(...msg: any): void

    setLevel(level: LoggerEnum.LogLevel): void
}
