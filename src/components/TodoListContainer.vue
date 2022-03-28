<template>

</template>
<script>
import { ref, readonly, provide, compile } from 'vue';

export default {
    name: 'TodoListContainer',
    setup() {
        // todolist 객체와 하위컴포넌트로 전달
        const todos = ref([])
        provide('todos', readonly(todos))
        // todolist 객체 초기화
        const initTodos = (init_todos) => {
            todos.value = init_todos
        }

        // todolist 조작 함수
        const addTodo = (todo, date) => {}
        const removeTodo = (id) => {}
        const completeTodo = (id) => {}

        // 함수를 provide로 하위 컴포넌트에 전달
        provide('addTodo', addTodo)
        provide('removeTodo', removeTodo)
        provide('completeTodo', completeTodo)
    }
}
</script>
<style>
    
</style>