//import axios from '@/http/index'
import { position } from "@/api"
export const setCity = async (context) => {
    const obj = await position();
    context.commit('SET_CITY', obj.city);
};