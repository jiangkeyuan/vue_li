<template>
  <div class="button" :style ="{background:type === 'main' ? '#2f4b74' : ''}" @click="click">
    {{value}}
  </div>
</template>
<script>
export default {
    props:{
        value:String,
        click:Function,
        type:{
            type: String,
            default: "main"
        }
    }
}
</script>
<style scoped>
.button{
    width: 335px;
    height: 48px;
    border-radius: 5px;
    font-family: SFUIDisplay;
    font-size: 16px;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: -0.51px;
    text-align: center;
    color: #08ffd5;
}
</style>