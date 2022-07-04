//Create tasty, stand-alone Web Component of your drink:

class GinTonic extends HTMLElement {
    constructor() {
        super();
        const html = element.getInnerHTML({
            includeShadowRoots: true
        });
        html.appendChild(element.content.cloneNode(true))   ;

    }
}

customElements.define('gin-tonic', GinTonic);