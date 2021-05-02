import React from 'react';
import './TaskTracker.css';

class TaskAdd extends React.Component {
    state = {
        name: '',
        description: '',
    } 

    handleChange = (event) => {
        const {value, name} = event.currentTarget

        this.setState({[name]: value})
    }

    render () {
        return (
            <div>
                <div class='taskName'>Task name:</div>
                <div class='taskDesc'>Description:</div>
                <input class='nameInput' value={this.state.name} onChange={this.handleChange} name='name'/>
                <input class='descInput' value={this.state.description} onChange={this.handleChange} name='description'/>
            </div>
        )
    }
}

export default TaskAdd;

  