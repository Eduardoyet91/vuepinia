<template>
    <div class="todo" v-bind:class="{completed: todo.completed}">
        <div class="todo-body" >
           
            {{todo.title}}
        </div>

        <div class="todo-actions">
            <button v-if="!todo.completed"  @click="checkTodo();counterstore.increment()">Realizada</button>
            <button v-if="todo.completed"  @click="$emit('delete-todo', todo.id);del.increment();tarea.decrement()">Eliminar</button>
             
        </div>
    </div>
</template>

<script>

import { useCounterStore } from '/src/stores/counter'
import { useDeletStore } from '/src/stores/delet'
import { useTareasStore } from '/src/stores/agregadas'

    export default {
        name: 'TodoItem',
        props: ['todo'],
        methods: {
            checkTodo(){
                this.todo.completed = !this.todo.completed;
            }
        },
        setup() {
    const counterstore = useCounterStore();
    const del = useDeletStore();
    const tarea = useTareasStore();



  
  return { counterstore,del,tarea}
  },
    
       
    }

    
</script>

<style scoped>
    .todo{
        border-bottom: solid 1px #ccc;
        padding: 10px;
    }

    .todo:not(.completed):hover{
        background-color: grey;
    }

    .completed{
        color: green;
        text-decoration: line-through;
    }
    .completed .todo-body{
        text-decoration: line-through;
    }

    .todo-body, .todo-actions{
        display: inline-block;
        vertical-align: top;
    }

    .todo-body{
        width: 85%;
    }
    .todo-actions{
        padding: 0 10px;
        width: 10%;
    }

    button{
        border: none;
        border-radius: 3px;
        padding: 10px;
        background-color: #ccc;
        color: black;
    }
    button:hover{
        background-color: #da2020;
        color: white;
    }
</style>