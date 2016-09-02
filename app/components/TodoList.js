import React from 'react';
import TodoItem from './TodoItem';;

class TodoList extends React.Component {
    render() {
	    let todos = this.props.todos.map((todo) => {
	      	return <TodoItem key={todo.todo} todo={todo} />
	    })
	    return <ul>
	      {todos}
	    </ul>
	  }
}

export default TodoList;