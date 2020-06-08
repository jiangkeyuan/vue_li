import homeMoudle from './modules/home/index';
import cityMoudle from "./modules/position/index"
import { createStore } from 'vuex'

const store = createStore({
  modules:{
    home:homeMoudle,
    city:cityMoudle
  }
})

export default store;