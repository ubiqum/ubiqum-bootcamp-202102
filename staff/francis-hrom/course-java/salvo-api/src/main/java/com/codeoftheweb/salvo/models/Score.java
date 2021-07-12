package com.codeoftheweb.salvo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

import java.util.Date;


@Entity
public class Score {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "player_id")
    private Player player;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "game_id")
    private Game game;

    private Double score;
    private Date finishDate;

    public Score() {
    }

    public Score(Player player, Game game, Double score) {
        this.player = player;
        this.game = game;
        this.score = score;
        this.finishDate = new Date();
    }

    public Long getId() {
        return id;
    }

    @JsonIgnore
    public Game getGame() {
        return game;
    }

    public Player getPlayer() {
        return player;
    }

    public Double getScore() {
        return score;
    }

    public Date getFinishDate() {
        return finishDate;
    }

}
