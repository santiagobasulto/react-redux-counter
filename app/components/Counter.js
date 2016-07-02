import React from 'react';
import CountNumber from './CountNumber';
import DecrementCounterButton from './DecrementCounterButton';
import IncrementCounterButton from './IncrementCounterButton';

import {incrementCounter, decrementCounter} from '../actions';

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
    this.store = props.store;
    this.state = {
      counter: this.store.getState()
    };
  }
  onClick(txt, evt){
    let fn = txt == 'Increment' ? incrementCounter : decrementCounter;
    this.store.dispatch(fn());

    // Debugging
    let store = this.store;
    setTimeout(() => console.log(store.getState()), 500);
  }
  render () {
    return <div>
      <CountNumber count={this.state.counter}/>
      <div className='control-buttons'>
        <IncrementCounterButton onClick={this.onClick} />
        <DecrementCounterButton onClick={this.onClick} />
      </div>
    </div>;
  }
}

export default Counter;
