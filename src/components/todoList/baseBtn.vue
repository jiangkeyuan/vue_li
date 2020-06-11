<template>
  <div @click='handouleClick'>
    <button
      :class="{
        square: true, 
        theme1: theme === 'red' ? true : false, 
        theme2: theme === 'green' ? true : false}" 
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>

  // import {
  //   inject
  // } from 'vue'

  export default {
    props: {
      theme: {
        type: String,
        default: 'green'
      }
    },
    inject: ['msg'],
    setup(props,ctx) { 
      console.log(props)
      const handouleClick = ()=>{
        ctx.emit("handouleClick","子传父")
      }
      return {
        handouleClick
      }
    }
  }
</script>

<style scoped>
.square{
  border-radius: 3px;
  padding: 0 5px;
  box-sizing: border-box;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: transparent;
  font-size: 12px;
  border: none;
  min-width: 30px;
}
.theme1 {
  background: brown;
  color: #fff;
}
.theme2 {
  background:  rgb(47, 75, 116);
  color: #08ffd5;
}
</style>