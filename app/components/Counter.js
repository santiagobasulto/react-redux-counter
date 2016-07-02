import React from 'react';
import CountNumber from './CountNumber';
import DecrementCounterButton from './DecrementCounterButton';
import IncrementCounterButton from './IncrementCounterButton';


class Counter extends React.Component {
  constructor(){
    super();
    this.onClick = this.onClick.bind(this);
  }
  onClick(txt, evt){
    console.log(txt);
  }
  render () {
    return <div>
      <CountNumber count={1}/>
      <div className='control-buttons'>
        <IncrementCounterButton onClick={this.onClick} />
        <DecrementCounterButton onClick={this.onClick} />
      </div>
    </div>;
  }
}

export default Counter;
