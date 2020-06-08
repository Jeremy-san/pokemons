import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { PokemonsService } from './../../services/pokemons.service';
import { Pokemon } from './../../model/pokemon';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon = null;

  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.pokemonsService.getPokemon(id)
    .subscribe(pokemon => this.pokemon = pokemon);
  }

}
