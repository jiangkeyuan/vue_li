const key = "3c892fb73bb89a0811018dd6712d3d6e";
const url = "https://restapi.amap.com/v3";
import axios from "@/http";
export function position(){
    return axios.get(`${url}/ip?key=${key}`)
}