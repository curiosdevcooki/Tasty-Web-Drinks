
//Create a tasty, stand-alone Web Component of your drink:
class MoscowMule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          --color-blue: #00bcd4;
          --color-green: #147a44;
          --color-white: #fafafa;
          --color-orange: #f49b75;
          --color-black: #fafafa;
          --color-grey: #ccc;
          --color-red: #f44336;
          --color-yellow: #ffeb3b;
          --color-purple: #d8dee0;

          --font-regular: 'SourceSansPro';
        }

        @font-face {
          font-family: var(--font-regular);
          src: url("../fonts/source-sans-pro-v13-latin-300.woff2") format("woff2");
          font-style: normal;
}

        main {
          display: grid; 
          grid-auto-columns: 1fr; 
          grid-template-columns: 0.5fr 0.5fr; 
          grid-template-rows: 1fr 2fr 5fr; 
          grid-template-areas: 
            "ice lime"
            "vodka vodka"
            "ginger ginger";
          padding: 1rem;
          border-radius: 0.5rem;
          background-color: var(--color-white);
          box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.2);
        }
          
        #vodka { 
          grid-area: vodka; 
          font-family: var(--font-regular);
          background-color: var(--color-blue);
          opacity: 0.5;
        }
        
        #vodka:hover { 
          background-color: var(--color-grey);
          color: var(--color-blue);
        }
        
        #ginger { 
          grid-area: ginger;
          font-family: var(--font-regular);
          background-color: var(--color-blue);
          opacity: 0.25;
        }

        #ginger:hover { 
          background-color: var(--color-grey);
          color: var(--color-blue);
        }
        
        #ice { 
          grid-area: ice; 
        }
        
        #lime { 
          grid-area: lime; 
        }       

        section {
          border: 0rem solid #f5f5f5;
          padding: 1rem;
        }
     
        img {
          width: 100%;
          aspect-ratio: 1;
        } 

        h1 {
          font-family: var(--font-regular);
          font-size: 5rem;
          font-weight: bold;
          color: var(--color-white);
          text-align: center;
        }
        
      </style>

  
        <article>
        <h1>Moscow Mule</h1>
        <main>
          <section id="ice">
            <img src="https://static.vecteezy.com/system/resources/previews/000/553/442/original/vector-frozen-ice-cubes-for-drinks.jpg" alt="icecubes"/>
            <img src="https://static.vecteezy.com/system/resources/previews/000/553/442/original/vector-frozen-ice-cubes-for-drinks.jpg" alt="icecubes"/>
          </section>
          <section id="lime">
            <img src="https://media1.giphy.com/media/kiwuYsHJQqePQG3jJk/giphy.gif?cid=790b76119566f6760f7af6aec95858d12ac4942b072f61c6&rid=giphy.gif&ct=s" alt="lime"/>
          </section>
          <section id="vodka">
            <h2>Vodka</h2>
          </section>
          <section id="ginger">
            <h2>Ginger Beer</h2>  
          </section>
        </main>

        <footer>
        <description>
        Fill your container with ice-cubes, add 2 parts vodka and 5 parts ginger. Top with lime and cucumber.
        </description>
        </footer>

        </article>
      `;
  }
}

customElements.define('moscow-mule-🫙', MoscowMule);

// const el = document.createElement('moscow-mule-🫙');
// document.body.appendChild(el);

// const NewDrink = new MoscowMule();
// document.body.appendChild(NewDrink);

// const sheet = new CSSStyleSheet();