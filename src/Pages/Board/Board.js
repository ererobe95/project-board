import React, { useEffect, useState } from 'react'
import Lanes from '../../Components/Lanes/Lanes'
import useDataFetching from '../../hooks/useDataFetching'
import './Board.css'

function Board() {
    const [task, setTask ] = useState([])
    const lanes = [
        { id:1, title:'To Do' },
        { id:2, title:'In Progress' },
        { id:3, title:'In Review' },
        { id:4, title:'Done' }
    ]

    function onDragStart(e, id) {
           e.dataTransfer.setData('id', id);
         }

         function onDragOver(e) {
               e.preventDefault();
             };

const [ loading, errorMessage, data ] = useDataFetching(' https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks')

useEffect(() => {
       setTask(data);
       }, [data]);

function onDrop(e, laneId) {
         const id = e.dataTransfer.getData('id');
         const updatedTasks = task.filter((item) => {
           if (item.id.toString() === id) {
             item.lane = laneId;
           }
           return task;
         });
         setTask(updatedTasks);
       }
  return (
    <div className='boardContainer'>
        {lanes.map((lane)=> {
            return (
                <Lanes key={lane.id} 
                title={lane.title}
                loading={loading}
                error={errorMessage}
                tasks={data.filter((task) => {
                    return task.lane === lane.id
                })}
                laneId = {lane.id}
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDrop={onDrop}/>
            )
        })}
    </div>
  )
}

export default Board
