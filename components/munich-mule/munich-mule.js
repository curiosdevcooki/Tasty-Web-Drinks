
//Create a tasty, stand-alone Web Component of your drink:
class MunichMule extends HTMLElement {
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
          grid-template-rows: 10rem 5fr 2fr 5rem;
          grid-template-areas:
            'ice cucumber'
            'spicey spicey'
            'gin gin'
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

        #cucumber {
          grid-area: cucumber;
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

        #cucumber > img:nth-child(1) {
          width: 40%;
          rotate: 30deg;

          position: relative;
          top: 0rem;
          left: 1rem;

          animation-name: rotate ;
          animation-duration: 3s;
        }

         #cucumber > img:nth-child(2) {
          width: 80%;
          position: relative;
          top: -15rem;
          left: 1rem;
          animation-name: rotate;
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

        #gin {
          grid-area: gin;
          background-color: var(--color-light-blue);
          box-shadow: inset 0 0 1rem 1rem var(--color-white);
          border-radius:  0 0 2rem 2rem;
        }

        #spicey:hover, #gin:hover {
          background-color: var(--color-light-blue);
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
          letter-spacing: -0.1rem;
          text-align: center;
          color: var(--color-green);
          text-shadow: 0.2rem 0.2rem var(--color-black);
          z-index: 1;
        }

        h2:hover{
          color: darkblue;
        }

        #gin > h2 {
          color: var(--color-white);
        }

        #spicey > h2 {
          color: var(--color-green);
        }

        ul {
          list-style-type:'✅';
          text-indent: 2rem;
          padding: 0.5rem 0 0.5rem 5rem;
          font-size: 2.5rem;
          color: var(--color-white);
          text-shadow: 0.3rem 0.1rem var(--color-black);
        }

      </style>

      <article>

        <header>
          <h1>Munich Mule</h1>
        </header>

        <main>
          <section id='ice'>
            <img src='/tasty-web-drinks/images/ice-cube.svg' alt='icecube'/>
          </section>

          <section id='cucumber'>
            <img src='/tasty-web-drinks/images/cucumber.svg' alt='cucumber'/>
            <img src='/tasty-web-drinks/images/lime.svg' alt='lime'/>
          </section>

          <section id='spicey'>
            <h2>Spicey Ginger — 5 parts</h2>
          </section>

          <section id='gin'>
            <h2>Gin — 2 parts</h2>
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
              <li>add gin and spicey ginger</li>
              <li>top with cucumber and lime</li>
            </ul>
          </description>
         </footer>

        </article>
      `;
  }
}

customElements.define('munich-mule', MunichMule);

// const el = document.createElement('gin-spicey-🫙');
// document.body.appendChild(el);

// const NewDrink = new GinSpicey Ginger();
// document.body.appendChild(NewDrink);
// // document.body.appendChild(NewDrink);


// const sheet = new CSSStyleSheet();

// document.getElementsByTagName('gin-spicey-🫙')[0].style.border = '0.5rem solid var(--color-white)';
