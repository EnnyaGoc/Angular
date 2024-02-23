import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaModule } from './lista/lista.module';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CompAtributosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListaModule
   
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
