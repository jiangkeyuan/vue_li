<template>
  <div class="home">
    <HeaderImg msg="BILL" />
    <span class="home-name">{{data.name}}</span>
    <span class="home-phone">{{data.phoneNumber}}</span>
    <div class="home-bg">
      <div class="home-card">
        <Card>
          <div class="home-content">
            <Inputs></Inputs>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive } from "vue";
import HeaderImg from "@/components/headerImg.vue";
import Card from "@/components/card.vue";
import Inputs from "@/components/inputVb.vue";
import useHeader from "@/hooks/useHeader.js";
export default {
  name: "Home",
  setup() {
    let data = reactive({
      name: "",
      phoneNumber: ""
    });
    setTimeout(() => {
      data.name = useHeader("BILL").name;
      data.phoneNumber = useHeader("BILL").phoneNumber;
    }, 1000);
    return {
      data
    };
  },
  components: {
    HeaderImg,
    Card,
    Inputs
  }
};
</script>
<style scoped>
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
  margin:36px 20px 0 20px;
  background: white;
  border-radius: 8px;
}
</style>
