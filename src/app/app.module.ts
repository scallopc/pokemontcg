import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IGX_MODULES } from './helpers/igx-imports';
import { CreateDeckComponent } from './create-deck/create-deck.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { ComponentModule } from './components/components.module';
import { FormsModule } from '@angular/forms';
import { DecksHomeComponent } from './deck/decks-home/decks-home.component';
import { DeckDetailComponent } from './deck/deck-detail/deck-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateDeckComponent,
    LayoutComponent,
    DecksHomeComponent,
    DeckDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IGX_MODULES,
    HttpClientModule,
    BrowserAnimationsModule,
    ComponentModule,
    FormsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
