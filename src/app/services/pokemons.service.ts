import { Injectable } from '@angular/core';
import { Pokemon } from './../model/pokemon';
import { POKEMONS } from './../data/mock-pokemons';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap} from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) {}

  private pokemonsUrl = 'api/pokemons';

  private log(log: string) {
    console.info(log); // methode qui permet de centraliser tous les log
  }

  private handleError<T>(operation ='operation', result?: T) {
    return(error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
/** supprimé des pokemons */
  deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const url = `${this.pokemonsUrl}/${pokemon.id}`;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.put(this.pokemonsUrl, pokemon, httpOptions).pipe(
      tap(_ => this.log(`delete pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>('deletePokemon'))
    );
  }

  /** mettre à jour les pokemons */
  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.put(this.pokemonsUrl, pokemon, httpOptions).pipe(
      tap(_ => this.log(`updated pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>('updatedPokemon'))
    );
  }

  // Retourne tous les pokémons
  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
      tap(_ => this.log(`fetched pokemons`)),
      catchError(this.handleError(`getPokemons`, []))
    );
  }

  // Retourne le pokémon avec l'identifiant passé en paramètre
  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonsUrl}/${id}`;

    return this.http.get<Pokemon>(url).pipe(
      tap(_ => this.log(`fetched pokemon id=${id}`)),
      catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
  );
  }
  getPokemonTypes(): string[] {
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrique', 'Poison', 'Fée', 'Vol'];
  }
}
