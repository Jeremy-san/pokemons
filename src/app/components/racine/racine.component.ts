import { Component, OnInit } from '@angular/core';
import { Pokemon } from './../../model/pokemon';
import { POKEMONS } from '../../data/mock-pokemons';

@Component({
  selector: 'app-racine',
  templateUrl: './racine.component.html',
  styleUrls: ['./racine.component.scss']
})
export class RacineComponent implements OnInit {

  pokemons: Pokemon[] = null;

  ngOnInit(): void {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon) {
    console.log('Vous avez selectionné ' + pokemon.name);
  }
}
