import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// RxJS 6
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/internal/operators';
import { Observable, Subject, of } from 'rxjs';

import { PokemonsService } from './../../services/pokemons.service';
import { Pokemon } from './../../model/pokemon';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {

  private searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(
    private pokemonsService: PokemonsService,
    private router: Router) { }

  // Ajoute un terme de recherche dans le flux de l'Observable 'searchTerms'
  search(term: string): void {
    this.searchTerms.next(term); // ce n'est pas un tableau sinon on aurait utiliser la méthode push de JS
  }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      // attendre 300ms de pause entre chaque requête
      debounceTime(300),
      // ignorer la recherche en cours si c'est la même que la précédente
      distinctUntilChanged(),
      // on retourne la liste des résultats correpsondant aux termes de la recherche
      switchMap((term: string) => this.pokemonsService.searchPokemons(term)),
    );
  }

  gotoDetail(pokemon: Pokemon): void {
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
