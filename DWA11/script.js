import { globalStore } from "./store";

//Reset Button
class ResetButton extends HTMLElement {
    constructor() {
      super();
      const button = document.createElement('sl-button');
      button.textContent = 'Reset';
  
      // Add a class name to the button element
      button.classList.add('reset-button');
  
      button.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('reset'));
      });
  
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.appendChild(button);
  
      // Create a <style> element and append the CSS styles
      const style = document.createElement('style');
      style.textContent = `
        .reset-button {
         
          background-color: #f06877;
          color: #fff;
          border: none;
          padding: 8px 26px;
          border-radius: 4px;
        }
      `;
      shadow.appendChild(style);
    }
  }
  
  // Check if the custom element is already defined before defining it again
  if (!customElements.get('sl-button')) {
    customElements.define('sl-button', ResetButton);
  }
  
  
  // Rest of your existing code
  const MAX_NUMBER = 5;
  const MIN_NUMBER = -5;
  const STEP_AMOUNT = 1;
  
  const number = document.querySelector('[data-key="number"]');
  const subtract = document.querySelector('[data-key="subtract"]');
  const add = document.querySelector('[data-key="add"]');
  const reset = document.querySelector('sl-button');
  
  const resetHandler = () => {
    number.value = 0;
    subtract.disabled = true;
    add.disabled = false;
  };
  
  reset.addEventListener('reset', resetHandler);
  
  const subtractHandler = () => {
    const newValue = parseInt(number.value) - STEP_AMOUNT;
    number.value = newValue;
  
    // Get the button element using its ID
  const button = document.getElementById('counter__button');
  
  // Update the text content of the button
  button.textContent = 'Click me now!';
  
  
    if (newValue >= MAX_NUMBER) {
      add.disabled = false;
    }
  };
  
  const addHandler = () => {
    const newValue = parseInt(number.value) + STEP_AMOUNT;
    number.value = newValue;
  
    if (newValue <= MIN_NUMBER) {
      subtract.disabled = false;
    }
  };
  
  subtract.addEventListener('click', subtractHandler);
  add.addEventListener('click', addHandler);
  
  