import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Player, Game, AuthPlayerGames } from 'src/app/models';

const httpOptions = {
  observe: 'response',
};

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private apiUrl = environment.salvoApi + '/games';
  constructor(private http: HttpClient) {}

  // getGames(): Promise<Game[]> {
  //   interface Config {
  //     authPlayer: Player;
  //     games: Game[];
  //   }

  //   return new Promise<Game[]>((resolve, reject) => {
  //     const res = this.http.get<Config>(this.apiUrl).subscribe((config) => {
  //       debugger;
  //       resolve(config.games);
  //     });
  //   });
  // }

  getGames(): Observable<AuthPlayerGames> {
    return this.http.get<AuthPlayerGames>(this.apiUrl);
  }
}
