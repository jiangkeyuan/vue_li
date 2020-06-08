<template>
    <div class="swiper-cont">
        <Item v-for="item in iconList" :key="item.id" :obj="item"></Item>
    </div>
</template>
<script>
import Json from "../../../static/mock/index.json";
import Item from './item';
import { computed } from "vue";
export default {
  setup(){
    const iconList = computed(()=>Json.iconList.slice(0,7));
    return {
        iconList
    }
  },
  components:{
      Item,
  }
}
</script>
<style lang="scss" scoped>
    .swiper-cont{
        width: 100%;
        height: 185px;
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        padding-top: 5px;
    }
</style>