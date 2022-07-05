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
        }
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

const el = document.createElement('gin-tonic');
document.body.appendChild(el);

const NewDrink = new GinTonic();
document.body.appendChild(NewDrink);

const ginTonic = () => {
  return (
    <div>
      <h1>Gin Tonic</h1>
      <ul>
        <li>Cubes of ice: 3</li>
        <li>Lime sclices: 3</li>
        <li>Gin: 2 parts</li>
        <li>Tonic: 5 parts</li>
      </ul>
    </div>
  );
};
