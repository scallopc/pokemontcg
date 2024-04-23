import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayDensity } from 'igniteui-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   density: DisplayDensity = 'comfortable';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createDeck() {
    this.router.navigate(['/create']);
  }

}
