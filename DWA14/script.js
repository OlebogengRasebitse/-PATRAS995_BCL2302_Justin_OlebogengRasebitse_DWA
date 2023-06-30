import {LitElement, html} from 'lit';

class ta



// class TallyApp extends LitElement {
//   static styles = css`
//     button {
//       margin: 5px;
//     }
//   `;

//   static properties = {
//     count: { type: Number },
//   };

//   constructor() {
//     super();
//     this.count = 0;
//     this.minValue = 0;
//     this.maxValue = 10;
//   }

//   increment() {
//     if (this.count < this.maxValue) {
//       this.count++;
//     }
//   }

//   decrement() {
//     if (this.count > this.minValue) {
//       this.count--;
//     }
//   }

//   render() {
//     let stateMessage = '';

//     if (this.count === this.minValue) {
//       stateMessage = 'Minimum Reached';
//     } else if (this.count === this.maxValue) {
//       stateMessage = 'Maximum Reached';
//     }

//     return html`
//       <div>
//         <button @click=${this.decrement} ?disabled=${this.count === this.minValue}>-</button>
//         <span>${this.count}</span>
//         <button @click=${this.increment} ?disabled=${this.count === this.maxValue}>+</button>
//       </div>
//       <p>${stateMessage}</p>
//     `;
//   }
// }

// customElements.define('tally-app', TallyApp);
