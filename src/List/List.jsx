import React from 'react';
import {Task} from '../Task/Task'


const List = ({tasksById, project_id }) => {
  const tasks = Object.values(tasksById)
    return (
      <div>
        {
        tasks.map(it => <Task project_id={project_id} id={it.id} name={it.name} description={it.description} completed={it.completed} key={it.id} />)
        }

      </div>
    )
  }

export default List;