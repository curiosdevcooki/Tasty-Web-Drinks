//Create tasty, stand-alone Web Component of your drink:

class GinTonic extends HTMLElement {
    constructor() {
        super();
        const host = document.getElementById('host');
        const shadowRoot = host.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
        h2 {

            font-size: 3rem;
        }

        </style>

        <h2>Test</h2>`;

    }
}

customElements.define('gin-tonic', GinTonic);

// const html = element.getInnerHTML({
//     includeShadowRoots: true
// });
