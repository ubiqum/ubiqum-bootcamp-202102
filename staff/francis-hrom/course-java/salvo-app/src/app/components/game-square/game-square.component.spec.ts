import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSquareComponent } from './game-square.component';

describe('GameSquareComponent', () => {
  let component: GameSquareComponent;
  let fixture: ComponentFixture<GameSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
