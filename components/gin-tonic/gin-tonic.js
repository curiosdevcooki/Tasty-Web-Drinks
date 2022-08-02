
//Create a tasty, stand-alone Web Component of your drink:
class GinTonic extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.innerHTML = `
      <style>
       @import url('https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap');

        :host{
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
          box-shadow: 0 0.5rem 1rem var(--color-black);
          border-radius: 1rem;
          padding: 1rem;
          margin: 1rem;
          }

        footer {
          font-size: 1rem;
          font-weight: lighter;
          font-family: 'Homemade Apple', cursive;
          padding: 1rem;
          margin: 1rem;
          color: var(--color-white);
          background-image: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F70000%2Fvelka%2Fwood-texture-1385971419t2h.jpg&f=1&nofb=1');
          background-size: cover;
          opacity: 0.8;

          border-radius: 1rem 1rem 2rem 2rem;
          box-shadow: 0 0.5rem 1rem var(--color-black);
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
        }

        #lemon {
          grid-area: lemon;
        }

        img {
          width: 100%;
          aspect-ratio: 1/1;  
        }

        #ice > img {
          position: relative;
          top: 5rem;
          left: 3rem;
          animation-name: slideup;
          animation-duration: 3s;
        }



        @keyframes slideup {
          from {
            margin-top: 50%;
          }

          to {
            margin-top: 0%;
          }
        }

        #lemon > img {
          position: relative;
          top: 5rem;
          left: 3rem;
          animation-name: bounce;
          animation-duration: 3s;
        }

        @keyframes bounce {
          from {
            transform: rotate(0deg);
            }

          to {
            transform: rotate(360deg);
            }
        }

        h1 {
          font-family: 'Homemade Apple', cursive;
          font-size: 5rem;
          font-weight: bold;
          color: var(--color-white);
          text-align: center;
        }

        h2 {
          font-family: 'Homemade Apple', cursive;
          font-size: 3rem;
          background-color: var(--color-blue);
          background-image: url('images/lemon.svg');
          background-blend-mode: overlay;
          background-clip: text;
          color: var(--color-black);
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
          <li>fill your container with ice-cubes</li>
          <li>add gin and tonic</li>
          <li>top with lemon</li>
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

// document.getElementsByTagName('gin-tonic-🫙')[0].style.border = '0.5rem solid var(--color-white)';
