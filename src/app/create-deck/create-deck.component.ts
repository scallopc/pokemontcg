import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonServiceService } from '../shared/services/pokemon-service.service';
import { IgxDialogComponent } from 'igniteui-angular';

@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.component.html',
  styleUrls: ['./create-deck.component.scss'],
})
export class CreateDeckComponent implements OnInit {
  cards: Array<any> = [];
  decks: any[] = [];
  totalCount: number = 0;
  page: number = 1;
  cardsAdd: Array<any> = [];
  loading: boolean = true;

  @ViewChild('dialog', { static: true }) dialog: IgxDialogComponent;
  @ViewChild('dialogAlertLimit', { static: true })
  dialogAlertLimit: IgxDialogComponent;

  constructor(private pokemonService: PokemonServiceService) {}

  ngOnInit(): void {
    this.getAllPokemonList(this.page);
    this.getDecks();
  }

  getAllPokemonList(page: number) {
    this.pokemonService.getAll(page).subscribe((res) => {
      this.totalCount = Math.ceil(res.totalCount / res.count);
      this.cards = res.data;
      this.loading = false;
    });
  }

  addCard(card: any) {
    // Verifique se já existem 4 cartas com o mesmo nome na lista
    const countSameNameCards = this.cardsAdd.filter(
      (c) => c.name === card.name
    ).length;

    if (this.cardsAdd.length >= 60) {
      // Se o limite de cartas foi atingido, abra o componente Dialog
      this.dialogAlertLimit.open();
    } else if (countSameNameCards < 4) {
      // Se houver menos de 4 cartas com o mesmo nome, adicione o novo cartão
      this.cardsAdd.push(card);
    } else {
      // Se o limite de cartões com o mesmo nome foi atingido, abra o componente Dialog
      this.dialog.open();
    }
  }

  getDecks(): void {
    this.pokemonService.getDecks().subscribe({
      next: (data) => {
        this.decks = data;
      },
      error: (error) => {
        console.error('Erro ao recuperar decks:', error);
      },
    });
  }

  onNextPageChanged() {
    this.loading = true;
    if (this.page < this.totalCount) {
      this.page++;
      this.getAllPokemonList(this.page);
    }
  }

  onBackPageChanged() {
    this.loading = true;
    if (this.page > 1) {
      this.page--;
      this.getAllPokemonList(this.page);
    }
  }
}
