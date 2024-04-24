import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonServiceService {
  urlFake = 'http://localhost:3000/decks';
  api = 'https://api.pokemontcg.io/v2/';

  constructor(private httpClient: HttpClient) {}

  getAll(page: number): Observable<any> {
    return this.httpClient.get<any>(
      `${this.api}cards?&pageSize=50&page=${page}`
    );
  }

  getDeckById(idDeck: string): Observable<any> {
    return this.httpClient.get<any>(`${this.urlFake}/${idDeck}`);
  }
  

  getDecks(): Observable<any> {
    return this.httpClient.get<any>(`${this.urlFake}`);
  }
  
  editDeck(idDeck: string, deck: any): Observable<any> {
    return this.httpClient.put<any>(`${this.urlFake}/${idDeck}`, deck);
  }

  // POST
  createDeck(deck: any): Observable<any> {
    return this.httpClient.post<any>(`${this.urlFake}`, deck);
  }

  // DELETE CARD
  deleteCardById(idDeck: string, idCard: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.urlFake}/${idDeck}/cards/${idCard}`);
  }

  // DELETE
  deleteDeck(id: any): Observable<any> {
    return this.httpClient.delete<any>(`${this.urlFake}/${id}`);
  }
}
