<template>
  <div class="input">
    <input type="text" class="input-text" />
    <span class="hkd">HKD</span>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.input {
  width: 100%;
  border-bottom: 1px solid #edeeef;
  padding-bottom: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
.input-text {
  height: 51px;
  width: 100%;
  border: none;
  outline: 0;
  font-size: 27px;
  color: #484848;
}
.hkd {
  font-family: SFUIDisplay;
  font-size: 16px;
  color: #484848;
}
</style>