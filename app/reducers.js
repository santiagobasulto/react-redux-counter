import {ADD_TODO} from './actions';

function todoReducer(state, action){
  switch (action.type) {
  case 'TEXT_CHANGE':
    return {
      todos: state.todos,
      todoText: action.text
    }
  case ADD_TODO:
    return {
      todos: state.todos.concat([{
        todo: state.todoText,
        finished: false
      }]),
      todoText: ''
    };
  default:
    return {
      todos: [{
        todo: 'Chau',
        finished: false
      }],
      todoText: 'belen'
    };
  }
}

export {todoReducer};
