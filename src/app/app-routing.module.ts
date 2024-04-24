import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateDeckComponent } from './create-deck/create-deck.component';
import { DecksHomeComponent } from './deck/decks-home/decks-home.component';
import { DeckDetailComponent } from './deck/deck-detail/deck-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: 'create', component: CreateDeckComponent},
  { path: 'decks-home', component: DecksHomeComponent }, 
  { path: 'deck-detail', component: DeckDetailComponent }, 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
