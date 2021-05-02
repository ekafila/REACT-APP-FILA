import React from 'react';
import Task from '../Task/Task'
import TaskAdd from '../TaskTracker/TaskTracker';

class MyTodoList extends React.Component {
    state = {
      tasks: [{id: 1, name: 'Visit lecture', description: 'Read materials', completed: false},
        {id: 2, name: 'Homework', description: 'Make React App', completed: true},
        {id: 3, name: 'Dinner', description: 'Buy products', completed: false},
        {id: 4, name: 'School', description: 'Make a presentation', completed: true},
        {id: 5, name: 'Driving', description: 'Call the teacher', completed: true},
        {id: 6, name: 'B-Day party', description: 'Find a present', completed: false}
        ]
      }
  
      handleClick = (event) => {
        this.setState(currentState => {
            const newTasks = [...currentState.tasks]
            const name = TaskAdd.state.name
            const description = TaskAdd.state.description
            const taskLength = newTasks.length
            newTasks[taskLength] = {
              id: taskLength + 1,
              name: name,
              description: description,
              completed: false
            }
            return {
                state: newTasks
            }
        })
      }
   
    render() {
      return(
        <div> 
        {this.state.tasks.map(it => <Task id={it.id} name={it.name} description={it.description} completed={it.completed}/>)}
        </div>
        )
      }
 } 

export default MyTodoList;