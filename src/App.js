// import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyTodoList from './MyTodoList/MyTodoList.js';

// const TaskLog = (id, completed) => {
//   console.log('Task ' + id + ' completed status = ' + completed);
// }
  

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