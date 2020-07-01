<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { useRoute } from 'vue-router'
export default {
  setup(){
    const route = useRoute();
    console.log(route)
  }
}
</script>
