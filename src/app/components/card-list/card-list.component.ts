import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent implements OnInit {
  @Input() cards: any;
  @Input() loading;
  @Input() totalCount: number;
  @Input() page: number;
  openDetail: boolean = false;
  itemDetail: any;
  @Output() nextPage: EventEmitter<void> = new EventEmitter<void>();
  @Output() backPage: EventEmitter<void> = new EventEmitter<void>();
  @Output() addCard = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  add(card: any) {
    this.addCard.emit(card);
  }

  onBackPageChanged() {
    this.backPage.emit();
  }

  onNextPageChanged() {
    this.nextPage.emit();
  }
  
  openCardDetail(item: any) {
    this.itemDetail = item;
    this.openDetail = true;
  }

  closeCardDetail() {
    this.openDetail = false;
  }
}
