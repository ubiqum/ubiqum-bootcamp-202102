import { Component, OnInit } from '@angular/core';
import { PlayerScore } from 'src/app/models';
import { PlayerScoreService } from 'src/app/services/player-score.service';

@Component({
  selector: 'app-score-table',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.scss'],
})
export class ScoreTableComponent implements OnInit {
  playerScores: PlayerScore[] = [];
  constructor(private playerScoreService: PlayerScoreService) {}

  ngOnInit(): void {
    this.playerScoreService.getPlayerScores().subscribe((playerScores) => {
      this.sortByScore(playerScores);
      this.playerScores = playerScores;
    });
  }

  sortByScore(playerScores: PlayerScore[]) {
    playerScores.sort((a, b) =>
      a.won + a.tied * 0.5 > b.won + b.tied * 0.5 ? -1 : 1
    );
  }
}
