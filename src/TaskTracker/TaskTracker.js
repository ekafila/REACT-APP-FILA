import React from 'react';
import './TaskTracker.css';
import MyTodoList from '../MyTodoList/MyTodoList';

class TaskAdd extends React.Component {
    state = {
        name: '',
        description: '',
    } 

    handleChange = (event) => {
        const {value, name} = event.currentTarget

        this.setState({[name]: value})
    }

    handleClick = (name, description) => {
        this.setState(currentState => {
            const newTasks = [...currentState.tasks]
            name = TaskAdd.state.name
            description = TaskAdd.state.description
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

    // handleSubmit= (event) => {
    //     event.preventDefault()
    //     return this.props.handleClick(this.state.name, this.state.description)
    //   }

    render () {
        return (
            // <form onSubmit={this.handleSubmit}>
                <div>
                    <div class='taskName'>Task name:</div>
                    <div class='taskDesc'>Description:</div>
                    <input class='nameInput' value={this.state.name} onChange={this.handleChange} name='name'/>
                    <input class='descInput' value={this.state.description} onChange={this.handleChange} name='description'/>
                    <button onClick={() => this.props.handleClick(this.state.name, this.state.description)}>Add</button>
                </div>
            // </form>
        )
    }
}

export default TaskAdd;

  