export const pingEpic = action$ =>
    action$.ofType('PING')
        .mapTo({ type: 'PONG' })