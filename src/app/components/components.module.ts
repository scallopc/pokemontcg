import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IGX_MODULES } from '../helpers/igx-imports';
import { FormComponent } from './form/form.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { PokemonLoadingComponent } from './pokemon-loading/pokemon-loading.component';

@NgModule({
  declarations: [PokemonLoadingComponent, CardDetailComponent, FormComponent],
  imports: [BrowserModule, IGX_MODULES, HttpClientModule],
  providers: [],
  exports: [PokemonLoadingComponent, CardDetailComponent, FormComponent],
})
export class ComponentModule {}
