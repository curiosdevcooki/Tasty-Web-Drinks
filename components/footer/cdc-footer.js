//Built web component for footer:
class Footer extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
      @import url @import url('https://fonts.googleapis.com/css2?family=Beth+Ellen&display=swap');
        
      :host {
        font-family: 'Beth+Ellen', cursive;
      }
        section {
          font-family: 'Beth Ellen', cursive;
          font-size: 2rem;
          color: var(--color-white);
        }
      </style>

        <section>
        <p>✨ Built in 🇪🇺🇩🇪…  with copious amounts of [🫀, 🧠 , ☕️ , 🎉] by <a href='https://twitter.com/curiosdevcookie'> @curiosdevcookie</a> .✨</p>
        </section>
    `;
  }
}
customElements.define('cdc-footer', Footer);
