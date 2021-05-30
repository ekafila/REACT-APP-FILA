import React from 'react';

const taskButton=({task_id, handleClickCompleted}) => {
    return (
        <button value={task_id} onClick={handleClickCompleted}>Success!</button>
    )
}

export default taskButton;