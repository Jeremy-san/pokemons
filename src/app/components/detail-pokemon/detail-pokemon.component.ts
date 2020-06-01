import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from '../../model/pokemon';
import { POKEMONS } from '../../data/mock-pokemons';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  pokemons: Pokemon[] = null; // il contiendra la list de tous les pokemons
  pokemon: Pokemon = null; // il contiendra seulement le pokemon a affiché

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
      this.pokemons = POKEMONS;

      const id = +this.route.snapshot.paramMap.get('id');
      for (let i = 0; i < this.pokemons.length; i++) {
          if (this.pokemons[i].id === id) {
              this.pokemon = this.pokemons[i];
          }
      }
  }
// permet de retourner en arrière
  goBack(): void {
      this.router.navigate(['/pokemons']);
  }

}
