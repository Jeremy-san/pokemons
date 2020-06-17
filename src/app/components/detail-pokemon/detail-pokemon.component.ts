import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../model/pokemon';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

 // pokemons: Pokemon[] = null; // il contiendra la list de tous les pokemons
  pokemon: Pokemon = null; // il contiendra seulement le pokemon a affiché

  constructor(private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.pokemonsService.getPokemon(id)
      .subscribe(pokemon => this.pokemon = pokemon);
  }

  delete(pokemon: Pokemon): void {
    this.pokemonsService.deletePokemon(pokemon)
    .subscribe(_ => this.goBack());
  }

// permet de retourner en arrière
  goBack(): void {
      this.router.navigate(['/pokemon/list']);
  }
  goEdit(pokemon): void {
    const link = ['pokemon/edit', pokemon.id];
    this.router.navigate(link);
  }
}
