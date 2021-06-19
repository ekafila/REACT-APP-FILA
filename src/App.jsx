import React from 'react';
import MyTodoList from './MyTodoList/MyTodoList';
import { DEFAULT_THEME, ThemeContext } from './ThemeContext';

class App extends React.Component {
  state = {
    theme: DEFAULT_THEME
  }

  render (){
    return(
      <div>
            <main>
              <MyTodoList/>
            </main>
          </div>

    )
  }
}
export default App;