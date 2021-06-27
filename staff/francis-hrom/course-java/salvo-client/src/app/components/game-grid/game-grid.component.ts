import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameViewService } from '../../services/game-view.service';

import { Square, GameView } from 'src/app/models';

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
  styleUrls: ['./game-grid.component.scss'],
})
export class GameGridComponent implements OnInit {
  squares: Square[];
  // square.type options -> '',water, header, ship, hitShip, hitWater
  userIsNextPlayer: boolean;
  winner: string;
  gameView: GameView;
  userPlayer: string;
  opponent: string;
  locationMap: { [key: string]: number } = {};
  gamePlayerId: string = '';

  constructor(
    private gameViewService: GameViewService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // show empty game grid as game loads, so user see something as soon as possible
    this.renderEmptyGrid();
    this.setGamePlayerId();
    this.gameViewService
      .getGameView(this.gamePlayerId)
      .subscribe((gameView) => {
        this.gameView = gameView;
        this.newGame();
      });
  }

  newGame() {
    this.setUserPlayer();
    // ? improvements -> get opponent directly from API
    this.setOpponent();
    this.setShips();
  }

  setGamePlayerId() {
    this.gamePlayerId = this.route.snapshot.paramMap.get('id') || '';
  }

  setUserPlayer() {
    this.userPlayer = this.gameView.player.email;
  }

  setOpponent() {
    if (this.gameView.gamePlayers.length > 1) {
      if (
        this.gameView.gamePlayers[0].player.email !== this.gameView.player.email
      ) {
        this.opponent = this.gameView.gamePlayers[0].player.email;
      }
      if (
        this.gameView.gamePlayers[1].player.email !== this.gameView.player.email
      ) {
        this.opponent = this.gameView.gamePlayers[1].player.email;
      }
    }
  }

  setShips() {
    for (let ship of this.gameView.ships) {
      for (let location of ship.locations) {
        this.setSquareType(location, 'ship');
      }
    }
  }

  setSquareType(location: string, type: string) {
    const idx = this.locationMap[location];
    this.squares[idx].type = type;
  }

  renderEmptyGrid() {
    this.squares = Array(11 * 11).fill({
      value: '',
      type: '',
      location: '',
    });
    this.squares[0].type = 'header';
    for (let i = 1; i < 11; i++) {
      this.squares[i] = { value: i.toString(), type: 'header', location: '' };
      this.squares[i] = { value: i.toString(), type: 'header', location: '' };
      const letter = (i + 9).toString(36).toUpperCase();
      this.squares[i * 11] = {
        value: letter,
        type: 'header',
        location: '',
      };
      for (let j = 1; j < 11; j++) {
        const arrIdx = i * 11 + j;
        const location = letter.concat(j.toString());
        this.squares[arrIdx] = {
          value: '',
          type: 'water',
          location: location,
        };

        this.locationMap[location] = arrIdx;
      }
    }
  }

  get player() {
    return this.userIsNextPlayer ? 'Your turn' : "Opponent's turn";
  }

  makeMove(idx: number) {
    if (this.squares[idx].type === 'water') {
      const location = this.squares[idx].location;
      this.squares.splice(idx, 1, {
        value: '',
        type: 'hitWater',
        location: location,
      });
      this.userIsNextPlayer = !this.userIsNextPlayer;
      console.log(this.squares[idx]);
    }
  }

  checkWinner() {
    // TODO to be added
  }
}
