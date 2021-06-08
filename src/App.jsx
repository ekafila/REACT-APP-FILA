import React from 'react';
import MyTodoList from './MyTodoList/MyTodoList';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './Reducer/index'

const store = createStore(rootReducer)

class App extends React.Component {
  state = {
    theme: DEFAULT_THEME
  }

  render() {
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
}
export default App;