<template>
  <div class="card">
    <slot></slot>
  </div>
</template>
<style scoped>
.card{
    min-height: 20px;
    border-radius: 8px;
    padding: 11px 20px 13px 20px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.08);
    box-sizing:border-box;
}
</style>