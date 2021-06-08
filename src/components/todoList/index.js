import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { delTodos, toggleTodos } from '../../store/action'
import './index.css'

function TodoList(props) {
  const { todos, dispatch } = props
  console.log('props', props)
  const toggle = (id) => {
    dispatch(toggleTodos(id))
  }
  useEffect(() => {
    const allStatus = todos.every((item) => item.completed)
    console.log('allStatus', allStatus)
  })
  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>
          <input
            type="checkbox"
            onChange={() => toggle(item.id)}
            checked={item.completed}
          />
          <span className={item.completed ? 'line' : ''}>{item.text}</span>
          <span
            style={{ marginLeft: '30px' }}
            onClick={() => dispatch(delTodos(item.id))}
          >
            x
          </span>
        </li>
      ))}
    </ul>
  )
}
const getvisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'Active':
      return todos.filter((item) => !item.completed)
    case 'Completed':
      return todos.filter((item) => item.completed)
    case 'All':
    default:
      return todos
  }
}

const mapStateToProps = (store) => {
  return { todos: getvisibleTodos(store.todos, store.visibility) }
}

export default connect(mapStateToProps)(TodoList)
