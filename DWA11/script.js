// Global store object
const globalStore = {
  data: {
    count: 0,
  },
  observers: [],

  // Method to subscribe observers
  subscribe(observer) {
    this.observers.push(observer);
  },

  // Method to unsubscribe observers
  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  },

  // Method to update data and notify observers
  updateData(key, value) {
    this.data[key] = value;
    this.notifyObservers(key, value);
  },

  // Method to notify all observers of a data update
  notifyObservers(key, value) {
    this.observers.forEach((observer) => {
      observer.update(key, value);
    });
  },
};

// Observer object
const consoleObserver = {
  update(key, value) {
    console.log(`State: ${key} changed to ${value}`);
  },
};

// Subscribe consoleObserver to the global store
globalStore.subscribe(consoleObserver);

// User story 1: Increment the counter by one
globalStore.updateData('count', 0);
// Output: State: count changed to 0

// User story 2: Increment the counter by one
globalStore.updateData('count', globalStore.data.count + 1);
// Output: State: count changed to 2

// User story 3: Increment the counter by one
globalStore.updateData('count', 2);
globalStore.updateData('count', globalStore.data.count - 1);
// Output: State: count changed to 1

// User story 4: Resetting the Tally Counter
globalStore.updateData('count', 1);
globalStore.updateData('count', 0);
// Output: State: count changed to 0
