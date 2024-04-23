import { Component } from '@angular/core';
import {
  IgxCardComponent,
  IgxCardHeaderComponent,
  IgxDividerDirective,
} from 'igniteui-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //standalone: true,
  //imports: [IgxCardComponent, IgxCardHeaderComponent, IgxDividerDirective],
})
export class AppComponent {
  title = 'pokemontcg';
}
