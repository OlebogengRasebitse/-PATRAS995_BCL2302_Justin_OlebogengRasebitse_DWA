import { createStore } from 'redux';

// Define the initial state of the store
const initialState = {
  count: 0,
  subtractDisabled: true,
  addDisabled: false,
};

// Define the reducer function to handle actions and update the state
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SUBTRACT':
      const newSubtractDisabled = state.count - STEP_AMOUNT <= MIN_NUMBER;
      return {
        ...state,
        count: Math.max(state.count - STEP_AMOUNT, MIN_NUMBER),
        subtractDisabled: newSubtractDisabled,
        addDisabled: false,
      };
    case 'ADD':
      const newAddDisabled = state.count + STEP_AMOUNT >= MAX_NUMBER;
      return {
        ...state,
        count: Math.min(state.count + STEP_AMOUNT, MAX_NUMBER),
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

// Create the store with the reducer
const store = createStore(reducer);

// Function to update the console output based on the store state
function updateConsoleOutput() {
  const state = store.getState();
  console.log(`Count: ${state.count}`);
  console.log(`Subtract Disabled: ${state.subtractDisabled}`);
  console.log(`Add Disabled: ${state.addDisabled}`);
}

// Dispatch actions to modify the state
store.dispatch({ type: 'ADD' });
store.dispatch({ type: 'ADD' });
store.dispatch({ type: 'SUBTRACT' });
store.dispatch({ type: 'RESET' });

// Subscribe to the store to receive updates and update the console output accordingly
store.subscribe(updateConsoleOutput);

// Initial console output
updateConsoleOutput();
