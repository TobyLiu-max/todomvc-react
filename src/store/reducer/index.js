import { combineReducers } from 'redux'
import { initData } from './initData'
import shortid from 'shortid'
import {
  ADD_TODOS,
  DEL_TODOS,
  TOGGLE_TODOS,
  TOGGLE_ALL,
  VISIBILITY
} from '../type'

function todos(state = initData, action) {
  switch (action.type) {
    case ADD_TODOS:
      return [
        ...state,
        { id: shortid.generate(), text: action.text, completed: false }
      ]
    case DEL_TODOS:
      return state.filter((item) => item.id !== action.id)
    case TOGGLE_TODOS:
      return state.map((item) => {
        return item.id === action.id
          ? { ...item, completed: !item.completed }
          : item
      })
    case TOGGLE_ALL:
      return state.map((item) => ({ ...item, completed: action.checked }))
    default:
      return state
  }
}

function visibility(state = 'All', action) {
  if (VISIBILITY === action.type) {
    return action.v
  }
  return state
}

const rootReducer = combineReducers({
  todos,
  visibility
})
export default rootReducer
