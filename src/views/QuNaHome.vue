<template>
  <div class="main-home">
    <Header></Header>
    <SwiperCont></SwiperCont>
    <Nearby></Nearby>
    <MapContent></MapContent>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/header.vue";
import SwiperCont from "@/components/swiper";
import Nearby from "@/components/nearby";
import MapContent from "@/components/map";
import { useRouter,useRoute } from 'vue-router'
export default {
  name: "Home",
  setup() {
    const router = useRouter();
    const route = useRoute();
    console.log(router);
    console.log(route);
    return {

    };
  },
  components: {
      Header,
      SwiperCont,
      Nearby,
      MapContent
  }
};
</script>
<style scoped>

</style>
