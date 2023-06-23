class ResetButton extends HTMLElement {
  constructor() {
    super();
    const button = document.createElement('sl-button');
    button.variant = 'default';
    button.size = 'medium';
    button.innerHTML = `
    
      <sl-icon slot="suffix" name="arrow-counterclockwise"></sl-icon>
      Reset
    `;

    button.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('reset'));
    });

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(button);
  }
}

customElements.define('reset-button', ResetButton);

const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 1;

const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');
const reset = document.querySelector('reset-button');

const subtractHandler = () => {
  const newValue = parseInt(number.value) - STEP_AMOUNT;
  number.value = newValue;

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

const resetHandler = () => {
  number.value = 0;
  subtract.disabled = true;
  add.disabled = false;
  alert("The counter has been reset.");
};

subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler);
reset.addEventListener('click', resetHandler);
