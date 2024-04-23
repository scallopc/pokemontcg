import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonLoadingComponent } from './pokemon-loading.component';

describe('PokemonLoadingComponent', () => {
  let component: PokemonLoadingComponent;
  let fixture: ComponentFixture<PokemonLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
