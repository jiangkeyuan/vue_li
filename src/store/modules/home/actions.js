//import axios from '@/http/index'

const getMessages = (context,value = 2) => {
    context.commit('MESSAGES_UPDATED', value);
};

export default {
  getMessages,
};