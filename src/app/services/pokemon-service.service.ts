import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  urlFake = "http://localhost:3000/decks";
  api = "https://api.pokemontcg.io/v2/";
  
  constructor(private httpClient: HttpClient) { }

  getAll(page: number): Observable<any>{
    return this.httpClient.get<any>(`${this.api}cards?pageSize=50?page=${page}`);
  }

}
