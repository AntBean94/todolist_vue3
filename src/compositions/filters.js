import { inject } from 'vue'

export const useFilter = () => {
  const today = inject('today')
  const fnSort = (a, b) => {
    const a_date = Date.parse(a.date)
    const b_date = Date.parse(b.date)
    // 최근 날짜순 및 최근 생성일 순 기준 정렬 필터
    if (a_date > b_date) return 1
    else if (a_date < b_date) return 0
    else return a.id - b.id
  }

  const getPendingTodos = (todos) => {
    return todos.value.filter((todo) => todo.date < today && !todo.completed)
      .slice()
      .sort(fnSort)
  }

  const getActiveTodayTodos = (todos) => {
    return todos.value
      .filter((todo) => todo.date == today && !todo.completed)
      .slice()
      .sort(fnSort)
  }

  const getCompletedTodayTodos = (todos) => {
    return todos.value
      .filter((todo) => todo.date == today && todo.completed)
      .slice()
      .sort(fnSort)
  }

  const getAllTodayTodos = (todos) => {
    return getActiveTodayTodos(todos)
      .concat(getCompletedTodayTodos(todos))
      .slice()
      .sort(fnSort)
  }

  const getAllTodos = (todos) => {
    return todos.value.slice().sort(fnSort)
  }

  return {
    getPendingTodos,
    getActiveTodayTodos,
    getCompletedTodayTodos,
    getAllTodayTodos,
    getAllTodos,
  }
}