import React from 'react'
import { connect } from 'react-redux'
import { addTodos, toggleAll } from '../../store/action'

function Header(props) {
  const { todos, dispatch } = props
  const addTodo = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      props.dispatch(addTodos(e.target.value))
      e.target.value = ''
    }
  }

  const allStatus = todos.every((item) => item.completed)
  const toggleChange = () => {
    console.log(!allStatus)
    dispatch(toggleAll(!allStatus))
  }
  return (
    <div className="header">
      <input type="checkbox" checked={allStatus} onChange={toggleChange} />
      <input type="text" onKeyDown={(e) => addTodo(e)} />
    </div>
  )
}

const mapStateToProps = (store) => {
  return store
}

export default connect(mapStateToProps)(Header)
