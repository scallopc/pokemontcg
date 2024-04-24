import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
@Input() buttonName: string = '';
@Output() buttonAction = new EventEmitter<void>();

  constructor(    private router: Router) {}

  ngOnInit(): void {}

  action() {
    this.buttonAction.emit();;
  }

}
