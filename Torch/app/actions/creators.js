import Types from './types'

export const startup = () => ({ type: Types.STARTUP })
export const watchLocation = () => ({ type: Types.WATCH_LOCATION });
export const unwatchLocation = () => ({ type: Types.UNWATCH_LOCATION });