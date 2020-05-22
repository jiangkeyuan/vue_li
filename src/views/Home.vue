<template>
  <div class="main-home">
    <div class="home">
      <HeaderImg msg="BILL" />
      <span class="home-name">{{data.name}}</span>
      <span class="home-phone">{{data.phoneNumber}}</span>
      <div class="home-bg">
        <div class="home-card">
          <Card>
            <div class="home-content">
              <div class="home-content-title">Transfer Amount</div>
              <Inputs></Inputs>
              <div class="home-content-bottom">本日剩余转账限额 99,880.00HKD</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
    {{msg}}
    <Button class="home-button" value="done" :click="handleClick"></Button>
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive, onMounted,computed } from "vue";
import { useRouter } from 'vue-router'
import { useStore } from "vuex";
import HeaderImg from "@/components/headerImg.vue";
import Card from "@/components/card.vue";
import Button from "@/components/button.vue";
import Inputs from "@/components/inputVb.vue";
import useHeader from "@/hooks/useHeader.js";
export default {
  name: "Home",
  setup() {
    const store = useStore();
    const router = useRouter();
    console.log(router);
    let msg = computed(()=>store.state.home.messages.msg)
    let data = reactive({
      name: "",
      phoneNumber: ""
    });

    setTimeout(() => {
      data.name = useHeader("BILL").name;
      data.phoneNumber = useHeader("BILL").phoneNumber;
    }, 1000);

    onMounted(() => {
      store.dispatch("home/getMessages",20)
    });

    const handleClick = ()=>{
      store.dispatch("home/getMessages",20);
      router.push({
        path:"review",
        params:{
          id:msg
        }
      }) // -> /user/123
    }

    return {
      data,
      onMounted,
      msg,
      handleClick
    };
  },
  components: {
    HeaderImg,
    Card,
    Inputs,
    Button
  }
};
</script>
<style scoped>
.main-home {
  padding: 36px 0 30px 0;
  min-height: 603px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home-name {
  min-width: 120px;
  height: 24px;
  margin-top: 17px;
  font-family: SFUIDisplay;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.51px;
  color: #484848;
  text-align: center;
}
.home-phone {
  min-width: 93px;
  height: 17px;
  margin-top: 2px;
  font-family: PingFangSC;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  color: #848484;
}
.home-bg {
  width: 375px;
  height: 244px;
  background: url("../assets/transfer-scan-content.svg") no-repeat;
  background-size: 100% 100%;
}
.home-content {
  width: 295px;
  margin: 0 auto;
}
.home-card {
  margin: 36px 20px 0 20px;
  background: white;
  border-radius: 8px;
}
.home-content-title {
  height: 14px;
  margin-bottom: 11px;
  font-family: SFUIDisplay;
  font-size: 12px;
  font-weight: bold;
  color: #484848;
}
.home-content-bottom {
  height: 17px;
  margin-top: 7px;
  font-family: SFUIDisplay;
  font-size: 12px;
  color: #848484;
}
.home-button {
  margin: 0 auto;
}
</style>
