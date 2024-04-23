import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DisplayDensity } from 'igniteui-angular';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {
  @Input() cardItem: any;
  @Input() openModalDetail: boolean = false;
  @Output() closeModalDetailEvent = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {
  }

  close() {
    this.closeModalDetailEvent.emit();
  }

  preventClose(event: Event) {
    event.stopPropagation();
  }

}
