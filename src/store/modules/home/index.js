import * as actions from './actions';
import * as mutations from './mutations';

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