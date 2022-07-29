
//Create a tasty, stand-alone Web Component of your drink:
class GinTonic extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.innerHTML = `
      <style>
        :host {
          box-sizing: border-box;
          padding: 0;
          margin: 0;

          font-size: 62.5%;

          --color-blue: #00bcd4;
          --color-green: #147a44;
          --color-white: #fafafa;
          --color-orange: #f49b75;
          --color-black: #fafafa;
          --color-grey: #ccc;
          --color-yellow: #ffeb3b;
          --color-purple: #d8dee0;

          --font-regular: 'Arson';
          --font-sloppy: 'HandwritingPlain';
        }

         @font-face {
          font-family: var(--font-sloppy);
          src: url('../fonts/HandwritingPlain.ttf') format('truetype');
        }

        @font-face {
          font-family: var(--font-regular);
          src: url('../fonts/arson-regular-webfont.woff2') format('woff2');
        }

        main {
          display: grid;
          grid-template-columns: 0.5fr 0.5fr;
          grid-template-rows: 10rem 10fr 50fr;
          grid-template-areas:
            'ice lemon'
            'gin gin'
            'tonic tonic';

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

        description {
            font-size: 2rem;
            font-weight: bold;
            font-style: italic;
        }

        #gin {
          grid-area: gin;
          background-color: var(--color-blue);
          opacity: 0.5;
        }

        #tonic {
          grid-area: tonic;
          background-color: var(--color-blue);
          opacity: 0.25;
        }

        #gin:hover, #tonic:hover{
          background-color: var(--color-grey);
          color: var(--color-blue);
        }

        #ice {
          grid-area: ice;
          background-color: transparent;
        }

        #lemon {
          grid-area: lemon;
          margin: -3rem 0 0 1.5rem;
        }

        img {
          width: 100%;
          aspect-ratio: 1/1;
        }

        h1 {
          font-family: var(--font-sloppy);
          font-size: 5rem;
          font-weight: bold;
          color: var(--color-white);
          text-align: center;
        }

        h2 {
          font-family: var(--font-sloppy);
          font-size: 10rem;
          color: var(--color-white);
          text-align: center;
        }

      </style>

      <article>

        <h1>Gin Tonic</h1>

        <main>

          <section id='ice'>
            <img src='../images/ice-cube.svg' alt='icecube'/>
          </section>

          <section id='lemon'>
            <img src='../images/lemon.svg' alt='lemon'/>
          </section>

          <section id='gin'>
            <h2>Gin</h2>
          </section>

          <section id='tonic'>
            <h2>Tonic</h2>
          </section>

        </main>

        <footer>
          <description>
          <ul>
          <li> fill your container with ice-cubes</li>
          <li> add gin and tonic </li>
          <li> top with lemon and cucumber</li>
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

document.getElementsByTagName('gin-tonic-🫙')[0].style.border = '0.5rem solid var(--color-white)';
