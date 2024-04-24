import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IGX_MODULES } from '../helpers/igx-imports';
import { FormComponent } from './form/form.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { PokemonLoadingComponent } from './pokemon-loading/pokemon-loading.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { DeckListComponent } from './deck-list/deck-list.component';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
  declarations: [PokemonLoadingComponent, CardDetailComponent, FormComponent, HeaderComponent, DeckListComponent, CardListComponent],
  imports: [BrowserModule, IGX_MODULES, HttpClientModule, FormsModule],
  providers: [],
  exports: [PokemonLoadingComponent, CardDetailComponent, FormComponent, HeaderComponent, DeckListComponent, CardListComponent],
})
export class ComponentModule {}
