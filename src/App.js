// import logo from './logo.svg';
import './App.css';
import React from 'react';

const TaskLog = (id, completed) => {
  console.log('Task ' + id + ' completed status = ' + completed);
}

const Task = ({id, name, description, completed}) => {

  
  return (
    <div>
      <div>{id}</div>
      <div>{name}</div>
      <div>{description}</div>
      <button className='complete-button' onClick={() => TaskLog(id, completed)}>Completed</button>
    </div>
     )
    }


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

  render() {
    return(
      <div> 
      {this.state.tasks.map(it => <Task id={it.id} name={it.name} description={it.description} completed={it.completed}/>)}
      </div>
      )
    }
  }  

function App () {
  return(
    <div className='App'>
      <h1>Wonderful List</h1>
      <main>
        <MyTodoList />
      </main>
    </div>
  )
}

export default App;


