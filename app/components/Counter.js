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
  }
  componentWillMount() {
    let store = this.store;
    let self = this;
    store.subscribe(() => self.setState({
      counter: store.getState()
    }));
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
