import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IgxDialogComponent } from 'igniteui-angular';
import { PokemonServiceService } from 'src/app/shared/services/pokemon-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() cardAddList: any[];
  nameDeck: string = '';
  buttonDisabled: boolean = true;

  @ViewChild('dialogSuccess', { static: true })  dialogSuccess: IgxDialogComponent;
  @ViewChild('dialogLimit', { static: true }) dialogLimit: IgxDialogComponent;

  constructor(
    private cardService: PokemonServiceService,
    private router: Router
  ) {}

  ngOnInit(): void { }

  // Função para verificar o comprimento do nome do baralho e habilitar ou desabilitar o botão
  validateDeckName() {
    this.buttonDisabled = this.nameDeck.length < 3; // Desabilitar o botão se o comprimento do nome for inferior a 3
  }

  // Função chamada quando o valor do input muda
  onNameDeckChange() {
    this.validateDeckName(); // Verificar o comprimento do nome do baralho sempre que o valor do input mudar
  }

  createDeck() {
    if (this.cardAddList.length >= 24 && this.cardAddList.length <= 60) {
      let handlerDeck: any = {
        name: this.nameDeck,
        cards: this.cardAddList,
      };
      this.cardService.createDeck(handlerDeck).subscribe(); // salvando na memória
      this.dialogSuccess.open();
      setTimeout(() => {
        this.dialogSuccess.close();
        this.router.navigate(['decks-home']);
      }, 2000)
    } else {
      this.dialogLimit.open();
    }
  }
}
