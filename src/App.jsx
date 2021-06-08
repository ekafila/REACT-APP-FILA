import React from 'react';
import {MyTodoList} from './MyTodoList/MyTodoList';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './Reducer/Index'

const store = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <main>
          <MyTodoList />
        </main>
      </div>
    </Provider>
  )
}
export default App;