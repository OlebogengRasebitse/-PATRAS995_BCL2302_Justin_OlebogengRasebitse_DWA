import { html, css, LitElement } from 'https://cdn.skypack.dev/lit';




class TallyApp extends LitElement {
  static styles = css`
    :host {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: Arial, sans-serif;
        }

        .counter {
          display: flex;
          align-items: center;
          margin-top: 16px;
        }

        .counter button {
          font-size: 24px;
          padding: 8px;
        }

        .counter span {
          font-size: 36px;
          margin: 0 16px;
          color: blueviolet;

        }

        .limit-reached {
          color: red;
          font-size: 14px;
          margin-top: 8px;
        }


        .counter__actions {
  display: flex;
 }
 
 .in{
     background: none;
     width: 50%;
     border-width: 0;
     color: var(--color-white);
     font-size: 3rem;
     height: 10rem;
     border-bottom: 1px solid var(--color-light-grey);
     transition: transform 0.1s;
     transform: translateY(0);
   
 }
 
 .counter__button:active {
     background: var(--color-medium-grey);
     transform: translateY(2%);
 }
    
  `;

  static properties = {
    count: { type: Number },
  };

  static constraints = {
    MAX_COUNT: 5,
    MIN_COUNT: -5,
  };

  constructor() {
    super();
    this.count = 0;
  }

  increment() {
    if (this.count < this.constructor.constraints.MAX_COUNT) {
      this.count++;
    }
  }

  decrement() {
    if (this.count > this.constructor.constraints.MIN_COUNT) {
      this.count--;
    }
  }

  render() {
    return html`
      <h1>Tally App</h1>
      <div>
        <button class=increament @click=${this.increment}>+</button>
        <span>${this.count}</span>
        <button @click=${this.decrement}>-</button>
      </div>
      ${this.count === this.constructor.constraints.MAX_COUNT
            ? html`<p class="limit-reached">Maximum count reached</p>`
            : ''}
          ${this.count === this.constructor.constraints.MIN_COUNT
            ? html`<p class="limit-reached">Minimum count reached</p>`
            : ''}
    `;
  }
}

customElements.define('tally-app', TallyApp);