import { useStore } from "vuex";
import { computed } from "vue";
export default function useCity(){
    const store = useStore();
    store.dispatch("city/setCity");
    let city = computed(()=>store.state.city.city);
    return city;
}