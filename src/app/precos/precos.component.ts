import { Component, OnInit } from "@angular/core";
import { Precos } from "./precos";

@Component ({
    selector: 'app-precos-list',
    templateUrl: './precos.component.html'
})
export class PrecosComponent implements OnInit{
    precos: Precos[] = [];

    ngOnInit(): void {
        this.precos = [
        {
            id: 1,
            produto: 'Carne',
            tipo: 'Pasteis Salgados Quadrados',
            preco: 8.69
        },
        {
            id: 2,
            produto: 'Carne com Mussarela',
            tipo: 'Pasteis Salgados Quadrados',
            preco: 9.49
        },
        {
            id: 3,
            produto: 'Frango',
            tipo: 'Pasteis Salgados Quadrados',
            preco: 8.69
        },
        {
            id: 4,
            produto: 'Frango Caipira',
            tipo: 'Pasteis Salgados Quadrados',
            preco: 8.99
        },
        {
            id: 5,
            produto: 'Calabresa',
            tipo: 'Pasteis Salgados Quadrados',
            preco: 8.69
        },
        {
            id: 6,
            produto: 'Calabresa com Mussarela',
            tipo: 'Pasteis Salgados Quadrados',
            preco: 9.49
        },
        {
            id: 7,
            produto: 'Queijo Minas',
            tipo: 'Pasteis Salgados Quadrados',
            preco: 8.69
        },
        {
            id: 8,
            produto: 'Queijo Mussarela',
            tipo: 'Pasteis Salgados Quadrados',
            preco: 8.99
        },
        {
            id: 9,
            produto: 'Misto',
            tipo: 'Pasteis Salgados Quadrados',
            preco: 8.69
        },
        {
            id: 10,
            produto: 'Pizza',
            tipo: 'Pasteis Salgados Quadrados',
            preco: 9.19
        }
        
    ]
    }
}