export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

let incrementCounter = () => {
  return {type: INCREMENT_COUNTER};
};
let decrementCounter = () => {
  return {type: DECREMENT_COUNTER};
};

export {incrementCounter, decrementCounter};
