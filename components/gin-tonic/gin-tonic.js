

//Create a tasty, stand-alone Web Component of your drink:
export class GinTonic extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          box-sizing: border-box;
          padding: 0;
          margin: 0;

          font-size: 62.5%;
        }
          
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
          grid-template-columns: 0.5fr 0.5fr; 
          grid-template-rows: 10rem 10fr 50fr; 
          grid-template-areas: 
            "ice lime"
            "tonic tonic"
            "gin gin";
          background-color: var(--color-white);
          box-shadow: 2rem black;
          border-radius: 1rem;
          border: 1px solid var(--color-grey);
          padding: 1rem;
          margin: 1rem;
          }
          
        footer {
          font-size: 1rem;
          font-weight: thin;
          text-align: top;
          font-family: var(--font-regular);
          padding: 1rem;
          margin: 1rem;
          color: var(--color-white);
          background-image: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F70000%2Fvelka%2Fwood-texture-1385971419t2h.jpg&f=1&nofb=1');
          background-size: cover;
          opacity: 0.8;
          
          border-radius: 1rem 1rem 2rem 2rem;
          box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.2);
        
        }
        #gin { 
          grid-area: gin; 
          font-family: var(--font-regular);
          background-color: var(--color-blue);
          opacity: 0.5;
          box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.2);
        }
        
        #gin:hover { 
          background-color: var(--color-grey);
          color: var(--color-blue);
        }
        
        #tonic { 
          grid-area: tonic;
          font-family: var(--font-regular);
          background-color: var(--color-blue);
          opacity: 0.25;
          box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.2);
        }

        #tonic:hover { 
          background-color: var(--color-grey);
          color: var(--color-blue);
        }
        
        #ice { 
          grid-area: ice; 
        }
        
        #lime { 
          grid-area: lime; 
        }       
     
        img {
          width: 100%;
          aspect-ratio: 1/1;
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

        <h1>Gin Tonic</h1>

        <main>

          <section id="ice">
            <img src="https://static.vecteezy.com/system/resources/previews/000/553/442/original/vector-frozen-ice-cubes-for-drinks.jpg" alt="icecubes"/>
          </section>
          
          <section id="lime">
            <img src="https://media1.giphy.com/media/kiwuYsHJQqePQG3jJk/giphy.gif?cid=790b76119566f6760f7af6aec95858d12ac4942b072f61c6&rid=giphy.gif&ct=s" alt="lime"/>
          </section>
          
          <section id="gin">
            <h2>Gin</h2>
          </section>
          
          <section id="tonic">
            <h2>Tonic</h2>  
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

// const el = document.createElement('gin-tonic-🫙');
// document.body.appendChild(el);

// const NewDrink = new GinTonic();
// document.body.appendChild(NewDrink);
// // document.body.appendChild(NewDrink);


// const sheet = new CSSStyleSheet();