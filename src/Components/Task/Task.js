import React from 'react'
import './Task.css'

function Task({ title, body, onDragStart, id }) {
  return (
    <div className='taskCase' onDragStart={(e) => onDragStart(e, id)} draggable>
        <h3 className='taskTitle'>{title}</h3>
        <p className='taskText'>{body}</p>
    </div>
  )
}

export default Task