<template>
  <div class="header">
    <img :src='observeValue.headerUrl' v-if="observeValue.headerUrl" class="header-img" alt="vue log"/>
    <span v-else class="header-name">
        {{observeValue.name}}
    </span>
  </div>
</template>
<script>
import { computed,reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import useHeader from "@/hooks/useHeader.js"
export default {
  props:{
    msg:String
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const observeValue = reactive({
      name:"",
      headerUrl:"",
      phoneNumber:""
    })
    setTimeout(()=>{
      const { name, headerUrl} = useHeader(props.msg);
      observeValue.name = name.slice(0,1);
      observeValue.headerUrl = headerUrl;
    },1000)
    console.log(router);
    const count = computed(() => store.state.count)
    // const change = () => store.commit('increment')
    const change = () => {
      observeValue.name = ("change" + 1)
      store.dispatch('increment')
    }
    return { 
      count, 
      change,
      observeValue
    }
  }
}
</script>
<style scoped>
.header{
  width: 54px;
  height: 54px;
}
.header-img{
  width: 100%;
  height: 100%;
}
.header-name{
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  text-align: center;
  line-height: 54px;
  background:#b2b5bf;
  font-size: 24px;
  color: white;
}
</style>