export const enum LogTypes {
    log = 'log',
    info = 'info',
    warning = 'warning',
    error = 'error',
    debug = 'debug',
    step = 'step',
    media = 'media',
}

export const enum LogLevel {
    verbose = 'verbose',
    debug = 'debug',
    info = 'info',
    warning = 'warning',
    error = 'error',
    silent = 'silent'
}

export const enum LoggerMessageTypes {
    REPORT = 'logger/REPORT',
    REPORT_BATCH = 'logger/REPORT_BATCH',
}

export const enum LogQueueStatus {
    EMPTY = 'EMPTY',
    RUNNING = 'RUNNING',
}

export const enum LoggerPlugins {
    beforeLog = 'beforeLog',
    onLog = 'onLog',
    onError = 'onError',
}