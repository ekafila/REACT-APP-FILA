import React from 'react';
import Task from '../Task/Task'

const List = ({tasks, handleClickCompleted }) => {
    return (
      <div>
        {
          tasks.map(it => <Task id={it.id} name={it.name} description={it.description} completed={it.completed} handleClickCompleted={handleClickCompleted} key={it.id} />)
        }
      </div>
    )
  }

export default List;