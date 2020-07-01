<template>
  <div class="box">
    <div class="swiper" id="swiper" :style="{
        width:widths.widths + 'px',
        transition:['all',widths.duration + 's'],
        transform: 'translateX(' + widths.deg + 'px' + ')'
        }">
      <Swiper></Swiper>
      <Swiper></Swiper>
      <Swiper></Swiper>
    </div>
  </div>
</template>
<script>
import { reactive, onMounted,watch } from "vue";
import Swiper from "./swiper";
import useWidths,{getElement} from "@/hooks/useWidths";
export default {
  setup() {
    let widths = reactive({
      widths: 10000,
      duration:1,
      deg:0
    });
    watch(()=>widths.deg,()=>{
        if(widths.deg > 0){
            widths.deg = 0
        }else if(widths.deg < -widths.widths ){
            widths.deg = widths.widths;
        }
    })
    const round = (number) =>{
        return Math.round(number);
    }
    onMounted(() => {
      widths.widths = useWidths(window, "swiper");
      let endX,startX,moveX;
      getElement("swiper").ontouchstart = (ev)=>{
        startX = ev.changedTouches[0].screenX
    }
    getElement("swiper").ontouchmove = (ev)=>{
        moveX = ev.changedTouches[0].screenX
        widths.deg = moveX - startX;
        console.log(widths.deg)
    }
    getElement("swiper").ontouchend = (ev)=>{
        endX = ev.changedTouches[0].screenX;
        console.log(endX - startX)
        if((endX - startX) > 0){
           widths.deg = round(widths.deg/375) * 750 + 750
        }else{
            widths.deg = round(widths.deg/375) * 750 + -750
        }
        console.log();
    }
    });
    return {
      widths
    };
  },
  components: {
    Swiper
  }
};
</script>
<style lang="scss" scoped>
.box::-webkit-scrollbar {
  display: none;
}
.box {
  width: 375px;
  overflow: hidden;
  overflow-x: scroll;
}
.swiper {
  display: flex;
  flex-direction: row;
}
</style>