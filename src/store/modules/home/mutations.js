export const MESSAGES_UPDATED = (state, messages) => {
    state.messages.msg += messages
};
export const MESSAGES_SUBTRACT = (state, messages) => {
    state.messages.msg -= messages
};