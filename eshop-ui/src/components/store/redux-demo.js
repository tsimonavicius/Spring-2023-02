const redux = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === INCREMENT) {
    return { counter: state.counter + 5 };
  }
  if (action.type === DECREMENT) {
    return { counter: state.counter - 2 };
  }
  return state;
};

const store = redux.createStore(counterReducer);

const counterSub = () => {
  const newestState = store.getState();
  console.log(`we are here, new state: ${newestState.counter}`);
};

store.subscribe(counterSub);

store.dispatch({ type: INCREMENT });
store.dispatch({ type: DECREMENT });
