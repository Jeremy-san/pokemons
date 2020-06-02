import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PokemonFormComponent } from './components/forms/pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './components/edit-pokemon/edit-pokemon.component';

import { BorderCardDirective } from './directives/border-card.directive';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { PokemonsService } from './services/pokemons.service';

@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    DetailPokemonComponent,
    ListPokemonComponent,
    PageNotFoundComponent,
    EditPokemonComponent,
    PokemonFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [PokemonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
