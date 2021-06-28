import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { GameView } from 'src/app/models';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class GameViewService {
  private apiUrl = environment.salvoApi + '/game_view';
  constructor(private http: HttpClient) {}

  getGameView(id: string): Observable<GameView> {
    this.apiUrl = this.apiUrl + '/' + id;
    return this.http.get<GameView>(this.apiUrl, httpOptions);
  }
}
