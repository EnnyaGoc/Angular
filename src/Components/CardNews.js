class Cardnews extends HTMLElement {
    constructor(){
        super();

        //essa classe (this) vai anexar uma sombra
        //modo closed -> o mundo exterior n pode modificar, open -> pode
        const shadow = this.attachShadow({mode: "open"})
      
        //adicionando nós
        shadow.appendChild(this.build())
        shadow.appendChild(this.style())
    }

    build(){
        //componentRoot é o mais alto
        const componentRoot = document.createElement("div");
        //adicionando class no componentroot
        componentRoot.setAttribute("class","card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class","card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");


        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");


        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");


        componentRoot.appendChild(autor);
        componentRoot.appendChild(linkTitle);
        componentRoot.appendChild(newsContent);


        const cardRight = document.createElement("div");
        cardRight.setAttribute("class","card__right");

        const newsImage = document.createElement("img");
        newsImage.src= this.getAttribute("photo");
        newsImage.alt= "foto da noticia"
        cardRight.appendChild(newsImage);


        //pendurando o left e o right no root
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){}
}

//criando um elemento customizavel e definindo um apelido p ele e o metodo/classe de molde é a cardnews
customElements.define('card-news', Cardnews)