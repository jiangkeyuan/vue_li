import homeMoudle from './modules/home/index';
import cityMoudle from "./modules/position/index"
import { createStore,createLogger } from 'vuex'
const debug = process.env.NODE_ENV !== "production";
console.log(debug);
const store = createStore({
  modules:{
    home:homeMoudle,
    city:cityMoudle
  },
  plugins:debug ? [createLogger()]:[]
})

export default store;