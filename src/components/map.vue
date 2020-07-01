<template>
  <div id="container"></div>
</template>
<script>
import MapLoader from "@/plugins/amap.js";
import { onMounted, reactive } from "vue";
export default {
  setup() {
    var maps = reactive({});
    var marker;
    let lastX, lastY;
    const handleClick = (ev, Amap) => {
      const x = ev.lnglat.lng;
      const y = ev.lnglat.lat;
      console.log(x, y);
      if (lastX === x && lastY === y) {
        maps.remove(marker);
        marker = null;
      } else {
        marker = new Amap.Marker({
          icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png", // 自定义点标记
          position: [x, y], // 基点位置
          offset: new Amap.Pixel(-10, 0), // 设置点标记偏移量
          anchor: "bottom-left" // 设置锚点方位
        });
        lastX = x;
        lastY = y;
        maps.add(marker);
      }
      //maps.setMapStyle("amap://styles/ca93799fdfab9a769b4c0680e559b93d");
    };
    onMounted(() => {
      MapLoader().then(
        AMap => {
          maps = new AMap.Map("container", {
            resizeEnable: true,
            zoom: 15
          });
          maps.on("click", ev => {
            handleClick(ev, AMap);
          });
        },
        e => {
          console.log("地图加载失败", e);
        }
      );
    });
    return {
      onMounted
    };
  }
};
</script>
<style lang="scss" scoped>
#container {
  width: 335px;
  height: 180px;
  margin: 0 auto;
}
</style>