import { Component } from "@angular/core";

@Component({
    selector: 'app-root ',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'] 
})
export class CardComponent implements OnInit{
    produtos:string[] = []
    menuType:string = "user"

    constructor(){
        this.produtos = [
            "mouse",
            "teclado",
            "cabo",
            "fonte"
        ]
    }

    ngOnInit(): void {

    }

    adicionar(){
        this.produtos.pop()
    }

    remover(index: number){
        this.produtos.splice(index, 1)
        // splice retira o item
    }
  
}