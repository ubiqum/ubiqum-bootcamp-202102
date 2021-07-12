import { Component, OnInit, Input } from '@angular/core';
import { Square } from 'src/app/models';

@Component({
  selector: 'app-game-square',
  templateUrl: './game-square.component.html',
  styleUrls: ['./game-square.component.scss'],
})
export class GameSquareComponent implements OnInit {
  // @Input() value: 'X' | '';
  @Input() square: Square;

  constructor() {}

  ngOnInit(): void {}
}
