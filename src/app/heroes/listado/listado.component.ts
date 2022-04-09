import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América','Capitão Crocodilo'];
  heroeBorrado: string = '';

  apagarPrimeiro() {
    this.heroeBorrado = this.heroes.shift() || '';
     console.log("Apagando..." + this.heroeBorrado);
   }

  apagarUltimo() {
    this.heroeBorrado = this.heroes.pop() || '';
    console.log("Apagando..." + this.heroeBorrado);
  }


}