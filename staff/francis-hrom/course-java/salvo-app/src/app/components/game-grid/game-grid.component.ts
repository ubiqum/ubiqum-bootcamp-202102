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
  squaresPlayer: Square[] = Array(11 * 11).fill({
    value: '',
    type: '',
    location: '',
  });
  squaresOpponent: Square[] = Array(11 * 11).fill({
    value: '',
    type: '',
    location: '',
  });
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
    this.makeDefaultGrid(this.squaresPlayer);
    this.makeDefaultGrid(this.squaresOpponent);
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
    this.setSalvoes();
  }

  setGamePlayerId() {
    this.gamePlayerId = this.route.snapshot.paramMap.get('id') || '';
  }

  setUserPlayer() {
    this.userPlayer = this.gameView.player.email;
  }

  setOpponent() {
    this.opponent = this.gameView.opponent.email;
  }

  setShips() {
    for (let ship of this.gameView.ships) {
      for (let location of ship.locations) {
        const idx = this.locationMap[location];
        this.squaresPlayer[idx].type = 'ship';
      }
    }
  }

  setSalvoes() {
    for (let salvo of this.gameView.salvoesPlayer) {
      for (let location of salvo.locations) {
        const idx = this.locationMap[location];
        this.squaresOpponent[idx].value = salvo.turn.toString();
        this.squaresOpponent[idx].type = 'hitWater';
      }
    }

    for (let salvo of this.gameView.salvoesOpponent) {
      for (let location of salvo.locations) {
        const idx = this.locationMap[location];
        this.squaresPlayer[idx].value = salvo.turn.toString();
        if (this.squaresPlayer[idx].type === 'ship') {
          this.squaresPlayer[idx].type = 'hitShip';
        } else {
          this.squaresPlayer[idx].type = 'hitWater';
        }
      }
    }
  }

  makeDefaultGrid(squaresArray: Square[]) {
    squaresArray[0].type = 'header';
    for (let i = 1; i < 11; i++) {
      squaresArray[i] = { value: i.toString(), type: 'header', location: '' };
      squaresArray[i] = { value: i.toString(), type: 'header', location: '' };
      const letter = (i + 9).toString(36).toUpperCase();
      squaresArray[i * 11] = {
        value: letter,
        type: 'header',
        location: '',
      };
      for (let j = 1; j < 11; j++) {
        const arrIdx = i * 11 + j;
        const location = letter.concat(j.toString());
        squaresArray[arrIdx] = {
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
    if (this.squaresPlayer[idx].type === 'water') {
      const location = this.squaresPlayer[idx].location;
      this.squaresPlayer.splice(idx, 1, {
        value: '',
        type: 'hitWater',
        location: location,
      });
      this.userIsNextPlayer = !this.userIsNextPlayer;
      console.log(this.squaresPlayer[idx]);
    }
  }

  checkWinner() {
    // TODO to be added
  }
}
