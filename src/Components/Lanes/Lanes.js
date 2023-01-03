import React from 'react'
import Task from '../Task/Task'
import './Lanes.css'

function Lanes({title, tasks, onDragStart, onDragOver, laneId, onDrop}) {
  return (
    <div className='laneContainer' onDragOver={onDragOver} onDrop={(e) => onDrop(e, laneId)}>
        <h2 className='laneTitle'>{title}</h2>
        <div className='laneBody'>
            {tasks.map((task) => {
            return(
               <Task key={task.id} title={task.title} id={task.id} body={task.body} onDragStart={onDragStart}/>
            )
        })}
        </div>
    </div>
  )
}

export default Lanes