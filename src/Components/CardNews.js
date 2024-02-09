class CardNews extends HTMLElement {
    constructor(){
        super();

        //essa classe (this) vai anexar uma sombra
        //modo closed -> o mundo exterior n pode modificar, open -> pode
        const shadow = this.attachShadow({mode: "open"})
        shadow.innerHTML = "<h1>Hello World </h1>";
    }

}

//criando um elemento customizavel e definindo um apelido p ele e o metodo/classe de molde é a cardnews
customElements.define('card-news', CardNews)