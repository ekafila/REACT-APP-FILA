import React from 'react';
import List from '../List/List';
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

      handleChange = (event) => {
        const {value, name} = event.currentTarget

        this.setState({[name]: value})
    }

      handleClick = () => {
        const newTask = {
          id: this.state.tasks.length + 1,
          name: this.state.name,
          description: this.state.description,
          completed: false
        }
        const newTasks = [...this.state.tasks, newTask]
    
        this.setState(state => {
          return {
            tasks: newTasks
          }
        })
      }

      handleClickCompleted = (event) => {
        let { value: task_id } = event.currentTarget
        task_id = Number.parseInt(task_id)
        const task_index = this.state.tasks.findIndex(it => it.id === task_id)
        this.setState(state => {
          const newTasks = [...state.tasks]
          newTasks[task_index] = {...newTasks[task_index], completed: true}
    
          return {
            tasks: newTasks
          }
        })
      }
        
    render() {
      return(
        <div> 
          <TaskAdd name={this.state.name} description={this.state.description} handleChange={this.handleChange} handleClick={this.handleClick} />
          <List tasks={this.state.tasks} handleClickCompleted={this.handleClickCompleted}/>
        </div>
        )
      }
 } 

export default MyTodoList;