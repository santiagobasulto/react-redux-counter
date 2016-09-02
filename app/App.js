import React from 'react';
import { createStore } from 'redux'

import Todo from './components/Todo';
import {todoReducer} from './reducers';

let store = createStore(todoReducer);

class App extends React.Component {
  render() {
    return <Todo store={store} />
  }
}

export default App;
