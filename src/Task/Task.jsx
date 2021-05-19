import React from 'react';
import TaskButton from '../TaskButton/TaskButton';

// function onChanges(id) {
//     Task[id].completed = !Task.completed
//     return 
//       Task[id]
//   }

const Task = ({id, name, description, completed, handleClickCompleted}) => {
  completed ='Status: ' + completed

    return (
      <div>
        <div>ID: {id}</div>
        <div>Task name: {name}</div>
        <div>Description: {description}</div>
        <div>{completed}</div>
        <TaskButton task_id={id} task_completed={completed} handleClickCompleted={handleClickCompleted} />
        {/* <input type="checkbox"/> */}
      </div>
       )
      }


export default Task;