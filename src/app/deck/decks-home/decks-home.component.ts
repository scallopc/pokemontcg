import { Component, OnInit, Input } from '@angular/core';
import { PokemonServiceService } from '../../shared/services/pokemon-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-decks-home',
  templateUrl: './decks-home.component.html',
  styleUrl: './decks-home.component.scss'
})
export class DecksHomeComponent implements OnInit {

  decks: any[] = [];
  @Input() nameDeck: string = '';
  @Input() cards: Array<any> = [];
  @Input() deck: Array<any> = [];
  miniCards: Array<any> = [];
  loading: boolean = true;

  constructor(
    private cardService: PokemonServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
      this.getDecks();
    }, 1000)
   
  }

  getDecks(): void {
    this.cardService.getDecks().subscribe({
      next: (data) => {
       this.decks = data;
      },
      error: (error) => {
        console.error('Erro ao recuperar decks:', error);
      }
    });
  }

  returnCard(){
    for(let card of this.cards){
      this.miniCards.push(card.images.small)
    }
    return this.miniCards;
  }


  createNewDeck() {
    this.router.navigateByUrl('create');
  }
  
}
