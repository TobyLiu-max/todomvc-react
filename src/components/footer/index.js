import React from 'react'
import { connect } from 'react-redux'
import './index.css'
import { setVisitility } from '../../store/action'

const list = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Active' },
  { id: 3, name: 'Completed' }
]
function Footer(props) {
  const { visibility, dispatch } = props
  const visibilityChange = (v) => {
    console.log('v', v)
    dispatch(setVisitility(v))
  }
  return (
    <div className="footer">
      {list.map((item) => (
        <span
          key={item.id}
          onClick={() => visibilityChange(item.name)}
          className={visibility === item.name ? 'border' : ''}
        >
          {item.name}
        </span>
      ))}
    </div>
  )
}

const mapStateToProps = (store) => {
  return store
}

export default connect(mapStateToProps)(Footer)
