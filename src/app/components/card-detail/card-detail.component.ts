import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
})
export class CardDetailComponent implements OnInit {
  @Input() cardItem: any;
  @Input() buttonName?: string = '';
  @Input() openModalDetail: boolean = false;
  @Output() closeModalDetailEvent = new EventEmitter<void>();
  @Output() action = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  close() {
    this.closeModalDetailEvent.emit();
  }

  addCard(card) {
    this.action.emit(card); // Emita o evento de adicionar um novo card
  }
}
