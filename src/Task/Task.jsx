import React from 'react';
import TaskButton from '../TaskButton/TaskButton';


const Task = ({id, name, description, completed, handleClickCompleted}) => {
  completed ='Status: ' + completed

    return (
      <div>
        <div>ID: {id}</div>
        <div>Task name: {name}</div>
        <div>Description: {description}</div>
        <div>{completed}</div>
        <TaskButton task_id={id} task_completed={completed} handleClickCompleted={handleClickCompleted} />
      </div>
       )
      }


export default Task;