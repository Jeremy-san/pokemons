import { Component, OnInit } from '@angular/core';
import { Pokemon } from './../../model/pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {

  pokemons: Pokemon[] = null;

  constructor(private router: Router, private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.pokemonsService.getPokemons()
    .subscribe(pokemons => this.pokemons = pokemons);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log('Vous avez selectionné ' + pokemon.name);
    const link = ['/pokemon', pokemon.id]; // url du pokemon et les paramètres eventuelle de la route
    this.router.navigate(link); // redirection
  }

}
