import { Component, OnInit } from '@angular/core';
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

  constructor(private gameViewService: GameViewService) {}

  ngOnInit(): void {
    this.renderEmptyGrid();
    this.gameViewService.getGameView('1').subscribe((gameView) => {
      this.gameView = gameView;
      this.newGame();
    });
  }

  newGame() {
    console.log('NEW GAME');
    console.log(this.gameView);
    this.userPlayer = this.gameView.player.email;
    // ? improvements -> get opponent directly from API
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

    for (let ship of this.gameView.ships) {
      console.log(ship);
      for (let location of ship.locations) {
        console.log(location);
        for (let i = 0; i < this.squares.length; i++) {
          if (this.squares[i].location === location) {
            console.log('MATCH');
            this.squares[i].type = 'ship';
          }
        }
      }
    }
  }

  renderShipSquare(location: string) {
    console.log(location);
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
        this.squares[i * 11 + j] = {
          value: '',
          type: 'water',
          location: letter.concat(j.toString()),
        };
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
