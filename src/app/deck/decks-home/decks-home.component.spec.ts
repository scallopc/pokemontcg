import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecksHomeComponent } from './decks-home.component';

describe('DecksHomeComponent', () => {
  let component: DecksHomeComponent;
  let fixture: ComponentFixture<DecksHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecksHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DecksHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
