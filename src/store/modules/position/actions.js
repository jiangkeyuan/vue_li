//import axios from '@/http/index'
import { position } from "@/api"
const setCity = async (context) => {
    const obj = await position();
    context.commit('SET_CITY', obj.city);
};

export default {
  setCity,
};