import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxDialogComponent } from 'igniteui-angular';
import { PokemonServiceService } from 'src/app/shared/services/pokemon-service.service';
import { Deck } from 'src/app/shared/models/decks-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deck-detail',
  templateUrl: './deck-detail.component.html',
  styleUrl: './deck-detail.component.scss',
})
export class DeckDetailComponent implements OnInit {
  openDetail: boolean = false;
  item: any;
  itemDetail: any;
  deckId: string;
  deckName: string;
  data: any;
  types: Array<any> = [];
  quantityTypes: number;
  pokemons: number;
  trainer: number;
  buttonDisabled: boolean = true;
  showInput: boolean = false;
  loading: boolean = true;

  @ViewChild('dialogSuccess', { static: true })
  dialogSuccess: IgxDialogComponent;

  constructor(
    private cardService: PokemonServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
      this.item = history.state.item;
      this.deckName = this.item.name;
      this.deckId = this.item.id;
      this.getDeck();
      this.returnTypes();
      this.returnSuperTypes();
    }, 1000);
  }

  AddNewCards() {
    console.log('novas cartas');
  }

  openCardDetail(item: any) {
    this.itemDetail = item;
    this.openDetail = true;
  }

  closeCardDetail() {
    this.openDetail = false;
  }

  returnTypes() {
    const uniqueTypes = new Set<string>();

    for (let card of this.item.cards) {
      // Verifica se o card tem a propriedade 'types' e se é uma matriz
      if (card.types && Array.isArray(card.types)) {
        // Adiciona os tipos únicos ao conjunto
        card.types.forEach((type) => uniqueTypes.add(type));
      }
    }
    // Imprime os tipos únicos no console
    this.quantityTypes = uniqueTypes.size;
  }

  returnSuperTypes() {
    // Inicializa um objeto para armazenar as contagens de supertype
    const supertypeCounts: { [key: string]: number } = {};

    // Loop sobre os cards para contar quantos de cada supertype existem
    for (let card of this.item.cards) {
      // Obtém o supertype do card
      const supertype = card.supertype;

      // Verifica se já existe uma contagem para esse supertype
      if (supertypeCounts[supertype]) {
        // Se sim, incrementa a contagem
        supertypeCounts[supertype]++;
      } else {
        // Se não, inicializa a contagem como 1
        supertypeCounts[supertype] = 1;
      }
    }

    this.pokemons = supertypeCounts['Pokémon'] || 0;
    this.trainer = supertypeCounts['Treiner'] || 0;
  }

  // deleteCard(card) {
  //   console.log(card)
  //   this.cardService.deleteCardById(this.deckId, card.id).subscribe((res) => {
  //     console.log('delete:', res);
  //   });
  // }

  getDeck() {
    this.cardService.getDeckById(this.deckId).subscribe({
      next: (res) => {
        this.data = res;
      },
      error: (error) => {
        console.error('Erro ao excluir carta:', error);
      },
    });
  }

  deleteDeck() {
    this.cardService.deleteDeck(this.deckId).subscribe({
      next: (res) => {
        this.getDeck();
        this.router.navigate(['decks-home']);
      },
      error: (error) => {
        console.error('Erro ao excluir carta:', error);
      },
    });
  }

  validateDeckName() {
    this.buttonDisabled = this.deckName.length < 3;
  }

  // Função chamada quando o valor do input muda
  onNameDeckChange() {
    this.validateDeckName(); // Verificar o comprimento do nome do baralho sempre que o valor do input mudar
  }

  goBack(): void {
    window.history.back();
  }

  openForm(): void {
    this.showInput = true;
  }

  closeForm(): void {
    this.showInput = false;
  }

  edit(): void {
    let handlerDeck: any = {
      name: this.deckName,
      cards: this.data.cards,
    };
    this.cardService.editDeck(this.deckId, handlerDeck).subscribe(); // salvando na memória
    this.dialogSuccess.open();
    setTimeout(() => {
      this.dialogSuccess.close();
      this.showInput = false;
      this.getDeck();
    }, 2000);
  }
}
