import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '../cards/cards.component';
import { DescripcionComponent } from '../descripcion/descripcion.component';
import { FormularioComponent } from '../formulario.component';



@NgModule({
  declarations: [
    CardsComponent,
    DescripcionComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardsComponent,
    DescripcionComponent,
    FormularioComponent
  ]
})
export class FormularioModule { }
