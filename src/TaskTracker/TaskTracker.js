import React from 'react';
import './TaskTracker.css';
import AddButton from '../AddButton/AddButton';


const TaskAdd = ( {name, description, handleChange, handleClick} ) => {

    return (
            <div>
                <div class='taskName'>Task name:</div>
                <div class='taskDesc'>Description:</div>
                <input class='nameInput' value={name} onChange={handleChange} placeholder='Task name' name='name'/>
                <input class='descInput' value={description} onChange={handleChange} placeholder='Describe the task' name='description'/>
                <AddButton handleClick={handleClick}/>
            </div>
        )
    }

export default TaskAdd;

  