import { reactive } from 'vue';
import tranferScanBill from '@/assets/transfer-scan-bill.svg';
import tranferScanMerchant from '@/assets/transfer-scan-merchant.svg';
export default function useHeader(type) {
    const objValue = reactive({
        name:"",
        headerUrl:""
    });
    const filtersHeader = (type)=>{
        const objValue = {
            "BILL":{
                "headerUrl":tranferScanBill,
                "name":"BILL",
                "phoneNumber":"18134492420"
            },
            "MERCHANT":{
                "headerUrl":tranferScanMerchant,
                "name":"MERCHANT",
                "phoneNumber":"18134492421"
            },
            "default":{
                "headerUrl":"",
                "name":"COMM L** ***",
                "phoneNumber":"18134492422"
            }
        }
        return objValue[type] || objValue["default"];
    }
    objValue.name = filtersHeader(type).name;
    objValue.headerUrl = filtersHeader(type).headerUrl;
    objValue.phoneNumber = filtersHeader(type).phoneNumber;
    return objValue;
}