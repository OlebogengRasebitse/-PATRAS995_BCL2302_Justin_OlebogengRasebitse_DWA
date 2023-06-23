const initialState = {
  count: 0,
  subtractDisabled: true,
  addDisabled: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SUBTRACT':
      const newSubtractDisabled = state.count - 1 <= 0;
      return {
        ...state,
        count: Math.max(state.count - 1, 0),
        subtractDisabled: newSubtractDisabled,
        addDisabled: false,
      };
    case 'ADD':
      const newAddDisabled = state.count + 1 >= Infinity;
      return {
        ...state,
        count: Math.min(state.count + 1, Infinity),
        subtractDisabled: false,
        addDisabled: newAddDisabled,
      };
    case 'RESET':
      return {
        ...state,
        count: 0,
        subtractDisabled: true,
        addDisabled: false,
      };
    default:
      return state;
  }
}

const store = window.Redux.createStore(reducer);

function logState() {
  const state = store.getState();
  console.log(`Count: ${state.count}`);
}

console.log("Scenario: Increment the counter by one");
logState();

console.log("\nGIVEN no interactions have been performed yet");
console.log("WHEN an “ADD” action is dispatched");
store.dispatch({ type: 'ADD' });

console.log("AND another “ADD” action is dispatched");
store.dispatch({ type: 'ADD' });

logState(); // The state should show a count of 2

console.log("\nGIVEN the current count in the state is 2");
console.log("WHEN a “SUBTRACT” action is dispatched");
store.dispatch({ type: 'SUBTRACT' });

logState(); // The state should display a count of 1

console.log("\nScenario: Resetting the Tally Counter");
logState();

console.log("\nGIVEN the current count in the state is 1");
console.log("WHEN a “RESET” action is dispatched");
store.dispatch({ type: 'RESET' });

logState(); // The state should display a count of 0

