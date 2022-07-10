<template>
    <div id="add-container">
        <form @submit="addTodo">
             <label >Tarea nueva</label>
            <input type="text" v-model="title">
            <button @click="tarea.increment()">crear</button>
        </form>
    </div>
</template>

<script>
import { uuid } from 'vue-uuid';

import { useTareasStore } from '/src/stores/agregadas'

export default {
    name: 'TodoAdd',
    data(){
        return {
            title: ''
        }
    },
    methods:{
        addTodo(e){
            e.preventDefault();

            const newTodo = {
                id: uuid.v4(),
                title: this.title,
                completed: false
            };

            this.title = '';
            this.$emit('add-todo', newTodo);
        }
    },
    setup() {
    const tarea = useTareasStore()


  
  return { tarea}
  },
}
</script>

<style scoped>
    #add-container{
        padding: 10px;
    }
    input{
        padding: 10px;
        outline: none;
        border: solid 1px #ccc;
        width: 100%;
    }
</style>