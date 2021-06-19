import React from 'react';
import {MyTodoList} from './MyTodoList/MyTodoList';
import { Provider } from 'react-redux'
import { rootReducer } from './Reducer/Index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <MyTodoList />
      </div>
    </Provider>
  )
}

export default App;