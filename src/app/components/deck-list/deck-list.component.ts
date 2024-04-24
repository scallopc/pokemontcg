import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrl: './deck-list.component.scss',
})
export class DeckListComponent implements OnInit {
  @Input() decks: any[];
  @Input() home?: boolean = true;

  constructor(    private router: Router) {}

  ngOnInit(): void {}

  openDeckDetail(item) {
      this.router.navigateByUrl('deck-detail', { state: { item: item } });
  }

}
