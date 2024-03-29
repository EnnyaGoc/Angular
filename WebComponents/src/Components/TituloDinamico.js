class TituloDinamico extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"})

        //base do component <h1>Felipe</h1>
        const componentRoot = document.createElement("h1");
        //titulo é props
        componentRoot.textContent = this.getAttribute("titulo");

        //estilizar component
        const style = document.createElement("style");
        style.textContent = `
            h1{
                color: red;
            }
        `;

        //eviar para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define("titulo-dinamico", TituloDinamico)