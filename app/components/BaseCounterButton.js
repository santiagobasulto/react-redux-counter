import React from 'react'

let BaseCounterButton = (txt, className) => class extends React.Component {
  render(){
    return <button type="button" onClick={(e) => this.props.onClick(txt, e)} className={'btn btn-' + className}>
      {txt}
    </button>;
  }
};

export default BaseCounterButton;
