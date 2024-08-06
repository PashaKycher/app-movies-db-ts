

export function createReduser(initialState, handlers) {
    return function (state, action) {
        state ??= initialState;
        const handler = handlers[action.type];
        
        if (handler) {
            return handler(state, action);
        }
        return state;
    }
};


