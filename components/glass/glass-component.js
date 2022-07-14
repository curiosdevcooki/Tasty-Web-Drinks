class glassComponents extends HTMLElement {
  super();
  constructor() {
    const glass = this.attachShadow();
    glass.innerHTML = `
    <style>
    :host {
      padding: 0;
      margin: 0;

      font-size:62.5%;
    }
    header {
        -webkit-box-reflect: below;
    }
    </style>

    <header>
      <img scr="../images/ice-cube.svg" alt="ice-cube"/>
    </header>
    <main>

    </main>
    <footer>
    
    </footer>
    `;
  }
}