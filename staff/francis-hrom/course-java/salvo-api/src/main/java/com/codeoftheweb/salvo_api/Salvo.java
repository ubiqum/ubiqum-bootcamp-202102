package com.codeoftheweb.salvo_api;

import org.hibernate.annotations.GenericGenerator;
import javax.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Salvo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="gamePlayer_id")
    private GamePlayer gamePlayerI;

    private Integer turn;

    @ElementCollection
    @Column(name="location")
    private List<String> locations = new ArrayList<>();

    public Salvo() { }

    public Salvo(Integer turn,GamePlayer gamePlayer, List<String> locations) {
        this.turn = turn;
        this.gamePlayerI = gamePlayer;
        this.locations = locations;
    }

    public Long getId() {
        return id;
    }
    public Integer getTurn() {
        return turn;
    }
    public GamePlayer getGamePlayer() {
        return gamePlayerI;
    }
    public Long getGamePlayerId() {
        return gamePlayerI.getId();
    }
    public List<String> getLocations() { return locations; }

}
