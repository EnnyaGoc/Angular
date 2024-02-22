import { Component, Input, OnInit, OnChanges } from "@angular/core";

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.css'] 
})
export class TitleComponent implements OnInit, OnChanges{
    @Input() nome:string = ''

    constructor() {
        console.log(`Construtor ${this.nome}`)
    }

    ngOnChanges(): void {
    //sempre q ocorrer uma mudança no comp, ele vai chamar esse evento
        console.log(`OnChange ${this.nome}`)
    }
    ngOnInit(): void{
        this.nome = this.nome +  'x'
        console.log(`OnInit ${this.nome}`)
    }
}
/* Ciclo de vida do component
ngOnInit é o começo do ciclo de vida;
ngOnChanges alteraçao do componente;
ngDoCheck executar quando props do comp sao verificadas;
ngOnDestroy destuir componente.

*/
