import { useSelector } from 'react-redux'
import React from 'react'

const Notification = () => {

  const notification = useSelector(({notification}) => notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: notification ? 'block' : 'none'
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification