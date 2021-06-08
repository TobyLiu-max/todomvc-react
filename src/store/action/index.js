import {
  ADD_TODOS,
  DEL_TODOS,
  TOGGLE_TODOS,
  TOGGLE_ALL,
  VISIBILITY
} from '../type'
export const addTodos = (text) => ({ type: ADD_TODOS, text })
export const delTodos = (id) => ({ type: DEL_TODOS, id })
export const toggleTodos = (id) => ({ type: TOGGLE_TODOS, id })
export const toggleAll = (checked) => ({ type: TOGGLE_ALL, checked })
export const setVisitility = (v) => ({ type: VISIBILITY, v })
