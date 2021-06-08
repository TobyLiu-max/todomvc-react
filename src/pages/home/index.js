import React from 'react'
import { connect } from 'react-redux'
import Header from '../../components/header'
import TodoList from '../../components/todoList'
import Footer from '../../components/footer'
import './index.css'

class Home extends React.Component {
  render() {
    console.log(1, this.props)
    console.log(window)
    return (
      <div className="home">
        <Header />
        <TodoList />
        <Footer />
      </div>
    )
  }
}
const mapStateToProps = (store) => {
  return store
}
export default connect(mapStateToProps)(Home)
