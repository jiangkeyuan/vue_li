<template>
  <div>
    <div class="temp-header"></div>
    <div class="page-router">
      <baseBtn theme='green' :click='goTodo.bind(this, 111)'><p>add things</p></baseBtn>
    </div>
    <ul>
      <li v-for="(item, key) in pageData.list" :key='key'>
        <TodoItem :item-data='item' @handouleClick='deleteItem' @goTodo='goTodo(id)'/>
      </li>
    </ul>
  </div>
</template>

<script>
  
  import {
    reactive, provide
  } from 'vue'
  import TodoItem from '@/components/todoList/todoItem.vue'
  import baseBtn from '@/components/todoList/baseBtn.vue';

  export default {
    name: 'todoList',
    components: {
      TodoItem,
      baseBtn
    },
    provide: {
      msg: 111
    },
    setup() {
      let pageData = reactive({
        list: [
          {
            value: 'go home',
            id: 1
          },
          {
            value: 'go next page',
            id: 2
          },
        ]
      })
      const test = (id)=>{
        console.log(id,"test::::::::::::::")
      }
      const deleteItem = (value) => {
        pageData.list = pageData.list.filter((v)=>v.id !== value);
      }

      const goTodo = (id) => {
        console.log(id)
      } 

      provide('msg', deleteItem)

      return {
        test,
        pageData,
        deleteItem,
        goTodo
      }
    }
  }
</script>

<style scoped>
.temp-header {
  height: 40px;
  background: rgba(0, 0, 0, 0.1);
}
.page-router{
  margin: 10px 0 0 30px;
}
ul {
  padding: 0 30px;
  box-sizing: border-box;
}
li {
  margin-top: 10px;
}
</style>