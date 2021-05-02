// import logo from './logo.svg';
import './App.css';
import React from 'react';
import TaskAdd from './TaskTracker/TaskTracker';
import MyTodoList from './MyTodoList/MyTodoList.js';

// const TaskLog = (id, completed) => {
//   console.log('Task ' + id + ' completed status = ' + completed);
// }
  

function App () {
  return(
    <div className='App'>
      <h1>Wonderful List</h1>
      <TaskAdd />
      <button onClick={new MyTodoList().handleClick}>Add</button>
      {/* <button>Add</button> */}
      <main>
        <MyTodoList />
      </main>
    </div>
  )
}

export default App;