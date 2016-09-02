import React from 'react';

class TodoItem extends React.Component {
  render () {
    return <li>{this.props.todo.todo}</li>
  }
}

export default TodoItem;