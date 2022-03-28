import { reactive, toRefs } from 'vue';

export const useStorage = () => {
    const KEY = 'my-todo-list';
    const storage_obj = reactive({ storage_id: 0 })
    const loadTodos = (initTodos) => {
        let temp_todos = JSON.parse(localStorage.getItem(KEY) || '[]')
        // 배열형태의 데이터에 id값을 부여
        temp_todos.forEach((todo, idx) => {
            todo.id = idx
        })
        storage_obj.storage_id = temp_todos.length
        initTodos(temp_todos)
    }
    const saveTodos = (todos) => {
        // 로컬스토리지에 배열형태로 저장
        localStorage.setItem(KEY, JSON.stringify(todos.value))
    }
    return {
        ...toRefs(storage_obj),     // spread operator로 풀린 반응성을 다시 주입하기 위해 toRefs API 사용
        loadTodos,
        saveTodos
    }
}