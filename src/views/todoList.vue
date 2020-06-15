<template>
  <div>
    <div class="temp-header"></div>
    <div class="page-router">
      <baseBtn theme='green' @handouleclick='addThings'><p>add things</p></baseBtn>
      <baseBtn theme='green' @handouleclick='addCount' style="margin-left:10px"><p>add counts</p></baseBtn>
    </div>
    <div class="count-item">
      <span>{{count}}</span> | 
      <span>{{plusOne}}</span>
    </div>
    <ul>
      <li v-for="(item, key) in pageData.list" :key='key'>
        <TodoItem :item-data='item' @handouleclick='deleteItem' @goTodo='goTodo(id)'/>
      </li>
    </ul>
  </div>
</template>

<script>
  
  import {
    reactive, provide, ref, computed, watch, onMounted,
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

      let count = ref(1)
      // computed state
      let plusOne = computed(() => count.value + 1)

      watch(() => count.value, val => {
        console.log(val)
      })

      onMounted(() => {
        console.log('onMounted')
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

      const addThings = () => {
        let tempId = pageData.list[pageData.list.length - 1].id
        pageData.list.push({
          value: `add things  ${tempId}`,
          id: ++tempId
        })
      }

      const addCount = () => {
        ++count.value
        console.log(count, plusOne)
      }

      provide('msg', deleteItem)

      return {
        test,
        pageData,
        deleteItem,
        goTodo,
        addThings,
        addCount,
        count,
        plusOne
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
  display: flex;
  align-items: center;

}
ul {
  padding: 0 30px;
  box-sizing: border-box;
}
li {
  margin-top: 10px;
}
.count-item{
  height: 40px;
  line-height: 40px;
  background:  rgb(47, 75, 116);
  color: #08ffd5;
  margin: 20px 30px;
}
</style>