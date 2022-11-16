
//Create a tasty, stand-alone Web Component of your drink:
class MoscowMule extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.innerHTML = `
      <style>

        :host{
          box-sizing: border-box;
          padding: 0;
          margin: 0;

          font-size: 62.5%;

          --color-white: #fafafa;
          --color-grey: #ccc;
          --color-black: #080101;
          --color-light-blue: #00d4ff80;
          --color-darker-blue: #3131c8;
          --color-orange: #f49b75;
          --color-yellow: #f6ec0d;
          --color-green: #22d956;

        }

        article {
          font-family: var(--font-handwritten);
          animation-name: slideup;
          animation-duration: 2s;
        }

        main {
          display: grid;
          grid-template-columns: 0.5fr 0.5fr;
          grid-template-rows: 10rem 5fr 2fr 8rem;
          grid-template-areas:
            'ice lime'
            'spicey spicey'
            'vodka vodka'
            'bottom bottom';
          background-color: var(--color-white);
          opacity: 0.9;
          box-shadow: 0 0.2rem 2rem var(--color-black);
          border-radius: 1rem;
          padding: 1rem;
          margin: 1rem;

          animation-name: slideup;
          animation-duration: 2s;
          }

        footer {
          height: 5rem;
          background-image: url('https://www.publicdomainpictures.net/pictures/260000/velka/cut-wood-texture-1525942658yoE.jpg');
          background-size: contain;
          border-radius: 1rem 1rem 2rem 2rem;
          box-shadow: 0 -0.2rem 0.5rem var(--color-black);
        }


        #ice {
          grid-area: ice;

        }

        #lime {
          grid-area: lime;

          background-image: url('/tasty-web-drinks/images/lime.svg');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: bottom right;
        }

        #ice > img {
          width: 80%;

          position: relative;
          top: 9rem;
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

        #lime > img {
          width: 80%;
          rotate: 30deg;

          position: relative;
          top: 3rem;
          left: 1rem;

          animation-name: rotate ;
          animation-duration: 3s;
        }

        @keyframes rotate {
          from {
            transform: rotate(45deg);
            margin-top: 30%;
            }

          to {
            transform: rotate(360deg);
            margin-top: 15;
            }
        }

         #spicey {
          grid-area: spicey;
          display: grid;
          align-items: end;
          background: linear-gradient(180deg, var(--color-darker-blue) 25%, var(--color-light-blue) 100%);
          opacity: 0.45;
          box-shadow: inset 0 0 2em 1em var(--color-white);
          border-radius: 0.5rem 0.5rem 0 0;
        }

        #vodka {
          grid-area: vodka;
          background-color: var(--color-light-blue);
          box-shadow: inset 0 0 1rem 1rem var(--color-white);
          border-radius: 0 0 2rem 2rem;
        }

        #spicey:hover, #vodka:hover {
          background-color: var(--color-grey);
          opacity: 0.75;
        }

        #glass-bottom {
          grid-area: bottom;
          background-color: var(--color-grey);
          box-shadow: inset 0 0 2em 1em var(--color-white);
        }

        h1 {
          font-size: calc(3rem + 1vw);
          font-weight: bold;
          color: var(--color-white);
          text-align: center;
          margin-top: 0;
        }

        h2 {
          font-size: calc(2rem + 1vw);
          letter-spacing: -0.1rem;
          text-align: center;
          text-shadow: 0.2rem 0.2rem var(--color-black);
        }

        h2:hover{
          color: darkblue;
        }

        #vodka > h2 {
          color: var(--color-white);
        }

        #spicey > h2 {
          color: var(--color-green);
        }

        a {
          color: var(--color-white);
        }
      </style>

      <article>

        <header>
          <h1><a href='https://www.thomas-henry.com/drinks/moscow-mule/'>Moscow Mule</a></h1>
        </header>

        <main>

          <section id='ice'>
            <img src='/tasty-web-drinks/images/ice-cube.svg' alt='icecube'/>
          </section>

          <section id='lime'>
            <img src='/tasty-web-drinks/images/lime.svg' alt='lime'/>
          </section>

          <section id='spicey'>
            <h2>Spicey Ginger</h2>
          </section>

          <section id='vodka'>
            <h2>Vodka</h2>
          </section>

          <div id='glass-bottom'>
          </div>

          <section id='spicey'>
            <h2>Spicey Ginger</h2>
          </section>

        </main>

        <footer></footer>

      </article>`;
  }
}

customElements.define('moscow-mule-🇷🇺', MoscowMule);


// const sheet = new CSSStyleSheet();