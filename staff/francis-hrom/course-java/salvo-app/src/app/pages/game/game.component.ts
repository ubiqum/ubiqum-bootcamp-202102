import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  gamePlayerId: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.gamePlayerId = this.route.snapshot.paramMap.get('id') || '';
  }
}
