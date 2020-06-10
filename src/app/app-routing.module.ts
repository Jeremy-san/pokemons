import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditPokemonComponent } from './components/edit-pokemon/edit-pokemon.component';

import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {path: 'pokemon',
  canActivate: [AuthGuardService],
  children: [
    { path: 'list', component: ListPokemonComponent },
    { path: 'edit/:id', component: EditPokemonComponent },
    { path: ':id', component: DetailPokemonComponent }
  ]},
  {path: '', redirectTo: 'pokemon/all', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent} // redirige toutes les pages non connu
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
