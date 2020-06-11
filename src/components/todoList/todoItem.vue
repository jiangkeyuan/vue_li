<template>
  <div class="item">
    <p>{{itemData.value}}</p>

    <div class="flex-box">
      <baseBtn theme='red' @handouleClick='deleteItem'><p>delete</p></baseBtn>
      <baseBtn theme='green' style="margin-left: 10px" :click='goTodo'><p>go</p></baseBtn>
    </div>

  </div>
</template>

<script>
  import baseBtn from '@/components/todoList/baseBtn.vue';

  export default {
    name: 'todoItem',
    props: {
      itemData: {
        type: Object,
        default: () => {}
      },
      goTodo: Function,
    },
    components: {
      baseBtn
    },
    setup(props,ctx) {
      console.log(props,ctx)
      const deleteItem = ()=>{
        ctx.emit("handouleClick",props.itemData.id)
      }
      return {
        deleteItem
      }
    },
  }
</script>

<style scoped>
.item {
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px dashed #ccc;
  justify-content: space-between;
}
.flex-box {
  display: flex;
  align-items: center;
}
</style>