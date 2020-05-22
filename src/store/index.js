import homeMoudle from './modules/home/index';
import { createStore } from 'vuex'

const store = createStore({
  modules:{
    home:homeMoudle
  }
})

export default store;