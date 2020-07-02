//import axios from '@/http/index'

export const getMessages = (context, value = 2) => {
    context.commit('MESSAGES_UPDATED', value);
};
export const subtract = (context, value = 1) => {
    context.commit('MESSAGES_SUBTRACT', value);
};