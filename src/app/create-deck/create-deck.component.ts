import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonServiceService } from '../services/pokemon-service.service';

@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.component.html',
  styleUrls: ['./create-deck.component.scss'],
})
export class CreateDeckComponent implements OnInit {
  pokemonList: Array<any> = [];
  totalCount: number = 0;
  page: number = 1;
  loading: boolean = true;
  openDetail: boolean = false;
  itemDetail: any;

  constructor(private pokemonService: PokemonServiceService) {}

  ngOnInit(): void {
    this.getAllPokemonList(this.page);
  }

  getAllPokemonList(page: number) {
    this.pokemonService.getAll(page).subscribe((res) => {
      this.totalCount = Math.ceil(res.totalCount / res.count);
      this.pokemonList = res.data;
      this.loading = false;
    });
  }

  onNextPageChanged() {
    this.loading = true;
    this.page++;
    this.pokemonService.getAll(this.page).subscribe((res) => {
      this.loading = false;
      this.pokemonList = res.data;
    });
  }

  onBeforePageChanged() {
    if (this.page === 1) {
    } else {
      this.loading = true;
      this.page--;
      this.pokemonService.getAll(this.page).subscribe((res) => {
        this.loading = false;
        this.pokemonList = res.data;
      });
    }
  }

  openCardDetail(item: any) {
    this.itemDetail = item;
    this.openDetail = true;
  }

  closeCardDetail() {
    this.openDetail = false;
  }
}
