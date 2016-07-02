import {INCREMENT_COUNTER, DECREMENT_COUNTER} from './actions';

function counterReducer(state=0, action){

  switch (action.type) {
  case INCREMENT_COUNTER:
    return undefined;
  case DECREMENT_COUNTER:
    return undefined;
  default:
    return state;
  }
}

export {counterReducer};
