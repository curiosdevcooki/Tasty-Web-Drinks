//Create tasty, stand-alone Web Component of your drink:

class GinTonic extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.shadowRoot.innerHTML = `
      <style>
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }s
      </style>
      <article>
        <h1>Gin Tonic</h1>
        <ul>

        <li>Cubes of ice: 3</li>
        <li>Lime sclices: 3</li>
        <li>Gin: 2 parts</li>
        <li>Tonic: 5 parts</li>
  
        </ul>  
        </description>
      </article>
      `;
  }
}

customElements.define('gin-tonic', GinTonic);