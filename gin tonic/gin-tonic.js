//Create a tasty, stand-alone Web Component of your drink:
class GinTonic extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.shadowRoot.innerHTML = `
      <style>
        #topping {
          display: flex;
          flex-direction: row;
        }

        #fluids {
          display: grid;
          grid-template-rows: 2fr 5fr;
          border-radius: 5px;
          padding: 10px;
        }
        
        article {
          padding: 1rem;
          border-radius: 0.5rem;
          background-color: var(--color-white);
          box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.2);
        }

        section {
          border: 0.5rem solid #f5f5f5;
          padding: 1rem;
        }
     
        img {
          width: 100%;
          aspect-ratio: 1;
        } 

      </style>

  
        <article>

        <h1>Gin Tonic</h1>

        <main>
          <section id="topping">
            <img src="https://static.vecteezy.com/system/resources/previews/000/553/442/original/vector-frozen-ice-cubes-for-drinks.jpg" alt="icecubes"/>
            <img src="https://media1.giphy.com/media/kiwuYsHJQqePQG3jJk/giphy.gif?cid=790b76119566f6760f7af6aec95858d12ac4942b072f61c6&rid=giphy.gif&ct=s" alt="lime"/>
          </section>
          <section id="Gin">
            <h2 id="Gin">Gin</h2>
          </section>
          <section id="Tonic">
            <h2 id="tonic">Tonic</h2>  
          </section>
        </main>

        <footer>
        <description>
        Fill your container with ice-cubes, add 2 parts gin and 5 parts tonic. Top with lime and cucumber.
        </description>
        </footer>

        </article>
      `;
  }
}

customElements.define('gin-tonic-🫙', GinTonic);

const el = document.createElement('gin-tonic-🫙');
document.body.appendChild(el);

const NewDrink = new GinTonic();
document.body.appendChild(NewDrink);

const sheet = new CSSStyleSheet();