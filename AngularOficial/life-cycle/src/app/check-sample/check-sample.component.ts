import { 
  Component, 
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from "@angular/core";

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css'] 
})
export class CheckSampleComponent implements 
  OnInit, 
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit, 
  OnDestroy
{
  quantidade:number = 0
  constructor() {
      
  }

  adicionar(){
      this.quantidade += 1
  }

  decrementar(){
      this.quantidade -= 1
  }

  //checked -> content -> view

  //quando o primeiro conteudo é iniciado
  ngAfterContentInit(): void{
      console.log("ngAfterContentInit")
  }

  //dps da inicialização da view
  ngAfterViewInit(): void{
      console.log("ngAfterViewInit")
  }

  //apos alguma alteraçao, verifica o conteudo
  ngAfterContentChecked(): void{
      console.log("ngAfterContentChecked")
  }

  //apos alguma alteraçao, verifica a view
  ngAfterViewChecked(): void{
      console.log("ngAfterViewChecked")
  }

  

  ngDoCheck(): void{
      console.log("ngDoCheck")
  }

  ngOnInit(): void{
      console.log("ngOnInit")
  }

  ngOnDestroy(): void{
      console.log("goodbye my friend")
  }

}