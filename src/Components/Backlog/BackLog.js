import React from 'react'
import useDataFetching from '../../hooks/useDataFetching'
import '../Lanes/Lanes.css'
import Task from '../Task/Task'

function BackLog() {

    const [ loading, errorMessage, data  ] = useDataFetching('https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks')

  return (
    <div className='laneContainer'>
        <h2 className='laneTitle'>BackLog</h2>
        <div className='laneBody'>
            {data.map((task) => {
            return(
               <Task key={task.id} title={task.title} body={task.body}/>
            )
        })}
        </div>
    </div>
  )
}

export default BackLog