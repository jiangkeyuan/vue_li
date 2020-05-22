import actions from './actions';
import mutations from './mutations';

const state = {
  messages: {
      msg:1
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};