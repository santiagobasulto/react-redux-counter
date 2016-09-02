export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

let addTodo = (body) => {
  return {type: ADD_TODO };
};

let textChange = (text) => {
  return {
    type: 'TEXT_CHANGE',
    text: text
  }
}

let removeTodo = (body) => {
  return {type: REMOVE_TODO };
};

export { addTodo, removeTodo, textChange };
