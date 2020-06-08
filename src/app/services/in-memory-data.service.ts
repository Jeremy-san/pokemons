import { InMemoryDbService } from 'angular-in-memory-web-api';
import { POKEMONS } from './../data/mock-pokemons';


export class InMemoryDataService implements InMemoryDbService { // cette méthode permet de simuler une petite base de donnée et une api

  createDb() {
    let pokemons = POKEMONS;
    return { pokemons };
  }
}
