<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { getCurrentInstance} from "vue";
export default {
  setup(){
    const { ctx } = getCurrentInstance();
    console.log(ctx.$router)
  }
}
</script>
