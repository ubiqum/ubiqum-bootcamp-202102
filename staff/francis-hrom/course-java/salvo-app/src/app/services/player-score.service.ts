import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { PlayerScore } from 'src/app/models';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PlayerScoreService {
  private apiUrl = environment.salvoApi + '/players';
  constructor(private http: HttpClient) {}

  getPlayerScores(): Observable<PlayerScore[]> {
    return this.http.get<PlayerScore[]>(this.apiUrl, httpOptions);
  }
}
