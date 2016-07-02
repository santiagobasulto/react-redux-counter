import React from 'react';
import { createStore } from 'redux'

import Counter from './components/Counter';
import {counterReducer} from './reducers';

let store = createStore(counterReducer);

class App extends React.Component {
  render() {
    return <Counter store={store} />
  }
}

export default App;
