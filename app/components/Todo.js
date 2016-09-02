import React from 'react';
import TodoInput from './TodoInput'
import TodoItem from './TodoItem';;
import TodoList from './TodoList';
import { addTodo, textChange } from '../actions';

class Todo extends React.Component {
  constructor(props){
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.todoTextChange = this.todoTextChange.bind(this);
    this.store = props.store;
    this.state = this.store.getState();
  }

  componentDidMount() {
    let store = this.store;
    let self = this;
    store.subscribe(() => self.setState(store.getState()));
  }

  addTodo(){
    this.store.dispatch(addTodo());
  }

  todoTextChange(evt) {
    this.store.dispatch(textChange(evt.target.value))
  }


  render () {
    return <div>
      <TodoInput onTodoTextChange={this.todoTextChange} onTodoAdded={this.addTodo} todoText={this.state.todoText} />
      <h3> Todos: </h3>
      <TodoList todos={this.state.todos}/>
    </div>
  }
}

export default Todo;
