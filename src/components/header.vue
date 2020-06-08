<template>
  <div class="header">
    <i class="iconfont icon-fanhui"></i>
    <div class="header-cont">
        <i class="iconfont icon-tubiao-"></i>
        <span class="header-cont-plaholder">输入城市/景点/游玩主题</span>
    </div>
    <span class="header-right">
        <span class="header-right-city">{{city}}</span>
        <i class="iconfont icon-drop-down"></i>
    </span>
  </div>
</template>
<script>
import {ref} from "vue";
export default {
  setup(){
      let city = ref("北京");
      return {
          city
      }
  }
}
</script>
<style lang="scss" scoped>
.header{
    width:355px;
    height: 44px;
    padding: 0 10px;
    background: #00bcd4;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;
    &-cont{
        width: 230px;
        height: 30px;
        background: white;
        border-radius: 5px;
        display: flex;
        align-items: center;
        &-plaholder{
            display: inline-block;
            font-size: 14px;
            height: 30px;
            line-height: 30px;
            color: #e4e7ea;
        }
    }
    &-right{
        height: 100%;
        max-width: 96px;
        display: flex;
        flex-direction: row;
        align-items: center;
        &-city{
            max-width: 48px;
            height: 30px;
            line-height: 30px;
            overflow: hidden;
        }
    }
}
.icon-fanhui{
    font-size: 20px;
}
.icon-drop-down{
    font-size: 20px;
}
.icon-tubiao-{
    font-size: 30px;
    color: #e4e7ea;
    margin: 0 3px;
}
</style>
