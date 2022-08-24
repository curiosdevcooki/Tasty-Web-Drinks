
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

          --color-blue: #00bcd4;
          --color-green: #147a44;
          --color-white: #fafafa;
          --color-orange: #f49b75;
          --color-black: #080101;
          --color-grey: #ccc;
        }

        article {
          font-family: var(--font-handwritten);
          animation-name: slideup;
          animation-duration: 2s;
        }

        main {
          display: grid;
          grid-template-columns: 0.5fr 0.5fr;
          grid-template-rows: 10rem 5fr 2fr 5rem;
          grid-template-areas:
            'ice lime'
            'spicey spicey'
            'vodka vodka'
            'bottom bottom';

          background-color: var(--color-white);
          box-shadow: 0 0.2rem 2rem var(--color-black);
          border-radius: 1rem;
          padding: 1rem;
          margin: 1rem;

          animation-name: slideup;
          animation-duration: 2s;
          }

        footer {
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

          background-image: url('../images/lime.svg');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: bottom right;
        }

        #ice > img {
          width: 80%;

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
          background-color: lightblue;
          box-shadow: inset 0 0 2em 1em var(--color-white);
          opacity: 0.3;
          border-radius: 0.5rem 0.5rem 0 0;
        }

        #vodka {
          grid-area: vodka;
          background-color: var(--color-blue);
          box-shadow: inset 0 0 1rem 1rem var(--color-white);
          opacity: 0.5;
          border-radius:  0 0 2rem 2rem;
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
          font-size: 5rem;
          font-weight: bold;
          color: var(--color-white);
          text-align: center;
          margin-top: 0;
        }

        h2 {
          font-size: 3.5rem;
          text-align: center;
          color: var(--color-orange);
          text-shadow: 0.2rem 0.2rem var(--color-black);
        }

        h2:hover{
          color: darkblue;
        }

          ul {
          list-style-type:'✅';
          text-indent: 2rem;
          padding: 0.5rem 0 0.5rem 5rem;
          font-size: 3rem;
          color: var(--color-white);
          text-shadow: 0.3rem 0.1rem var(--color-black);
        }

      </style>

      <article>

        <header>
          <h1>Moscow Mule</h1>
        </header>

        <main>

          <section id='ice'>
            <img src='../images/ice cube.svg' alt='icecube'/>
          </section>

          <section id='lime'>
            <img src='../images/lime.svg' alt='lime'/>
          </section>

          <section id='spicey'>
            <h2>Spicey Ginger — 5 parts</h2>
          </section>

          <section id='vodka'>
            <h2>Vodka — 2 parts</h2>
          </section>

          <div id='glass-bottom'>
          </div>

          <section id='spicey'>
            <h2>Spicey Ginger — 5 parts</h2>
          </section>

        </main>

        <footer>
          <description>
          <ul>
          <li>fill your container with ice-cubes</li>
          <li>add vodka and spicey ginger</li>
          <li>top with cucumber and lime</li>
          </ul>
          </description>
         </footer>

        </article>
      `;
  }
}

customElements.define('moscow-mule-🫙', MoscowMule);

// const el = document.createElement('vodka-spicey-🫙');
// document.body.appendChild(el);

// const NewDrink = new VodkaSpicey Vodkager();
// document.body.appendChild(NewDrink);
// // document.body.appendChild(NewDrink);


// const sheet = new CSSStyleSheet();

// document.getElementsByTagName('vodka-spicey-🫙')[0].style.border = '0.5rem solid var(--color-white)';
