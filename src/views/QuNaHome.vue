<template>
  <div>
    <div class="main-home">
      <router-link to="/" tag="li">home</router-link>
      <router-link to="/review" tag="li">about</router-link>
    </div>
    <div class="cont">JKY</div>
    <ul class="button">
      <li class="botton-li" @click="inster('subtract')">-</li>
      <span class="botton-value">{{value}}</span>
      <li class="botton-li" @click="inster('add')">+</li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "Home",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    let value = computed(() => store.state.home.messages.msg);
    console.log(store);
    console.log(router);
    console.log(route);
    const inster = type => {
      if (type === "add") {
        store.dispatch("home/getMessages", 1);
      } else {
        store.dispatch("home/subtract", 1);
      }
    };
    return {
      value,
      inster
    };
  },
  components: {}
};
</script>
<style scoped>
.main-home {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  line-height: 50px;
}
.cont {
  width: 100%;
  height: 333px;
  margin-top: 100px;
  color: white;
  font-size: 50px;
  text-align: center;
  line-height: 333px;
  background-image: linear-gradient(
    white,
    rgb(45, 167, 250) 30%,
    rgb(7, 82, 247) 50%,
    rgb(45, 167, 250) 70%,
    white
  );
}
.button {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 200px;
  line-height: 50px;
  font-size: 20px;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.botton-li {
  width: 120px;
  height: 20px;
  border: 1px solid #848484;
  border-radius: 5px;
  line-height: 20px;
  text-align: center;
}
</style>
