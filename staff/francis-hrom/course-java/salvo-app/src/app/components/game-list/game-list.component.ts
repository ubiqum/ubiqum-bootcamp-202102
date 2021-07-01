import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  games: Game[] = [];
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGames().subscribe((res) => (this.games = res.games));
    // this.gameService.getGames().then((games) => (this.games = games));
  }
}
