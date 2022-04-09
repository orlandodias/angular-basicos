import { Component, enableProdMode } from '@angular/core';

@Component ({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    nome: string = 'Ironman';
    idade: number = 45;

    get nomeMaiusculo(): string {
        return this.nome.toUpperCase();
    }

    obterNome(): string {
        return `${ this.nome } == ${this.idade}`; 
    }

    mudarNome(): void {
        this.nome = 'Spiderman';
    }

    mudarIdade(): void {
        console.log('Muda Idade');
        this.idade = 30;
    }
}