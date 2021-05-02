import React from 'react';
import MyTodoList from '../MyTodoList/MyTodoList.js'

// function onChanges(id) {
//     Task[id].completed = !Task.completed
//     return 
//       Task[id]
//   }

const Task = ({id, name, description, completed}) => {
  
    return (
      <div>
        <div>{id}</div>
        <div>{name}</div>
        <div>{description}</div>
        <input type="checkbox" />
        {/* <input type="checkbox" onChange={onChanges(this.id)}/> */}
        {/* <button className='complete-button' onClick={() => TaskLog(id, completed)}>Completed</button> */}
      </div>
       )
      }


export default Task;