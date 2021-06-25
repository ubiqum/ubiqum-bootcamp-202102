// export interface Game {
//   id: number;
//   created: string;
//   gamePlayers: [
//     {
//       id: number;
//       player: {
//         id: number;
//         email: string;
//       };
//     }
//   ];
// }

export interface Square {
  value: string;
  type: string;
  location: string;
}

export interface Game {
  id: number;
  created: string;
  gamePlayers: GamePlayer[];
}

export interface GamePlayer {
  id: number;
  player: Player;
}

export interface Player {
  id: number;
  email: string;
}

export interface Ship {
  id: number;
  type: string;
  locations: string[];
}

export interface GameView {
  id: number;
  game: Game;
  player: Player;
  joinDate: string;
  gamePlayers: GamePlayer[];
  ships: Ship[];
}
