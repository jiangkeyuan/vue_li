import * as actions from './actions';
import * as mutations from './mutations';

const state = {
  city:""
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};