import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { InputComponent } from './input/input.'
import { ListViewComponent } from './list-view/list-view.'


@NgModule({
  declarations: [
    InputComponent, 
    ListViewComponent
  ],
  exports:[
    InputComponent
  ],
  imports: [
   CommonModule
  ]
})
export class ListaModule { }
