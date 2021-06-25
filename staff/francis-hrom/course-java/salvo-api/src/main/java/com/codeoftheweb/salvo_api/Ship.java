package com.codeoftheweb.salvo_api;

import org.hibernate.annotations.GenericGenerator;
import javax.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Ship {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private long id;

    private String type;
    //change for better performance to private Integer type;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="gamePlayer_id")
    private GamePlayer gamePlayerI;

    @ElementCollection
    @Column(name="location")
    private List<String> locations = new ArrayList<>();

    public Ship() { }

    public Ship(String type,GamePlayer gamePlayer, List<String> locations) {
        this.type = type;
        this.gamePlayerI = gamePlayer;
        this.locations = locations;
    }

    public Long getId() {
        return id;
    }
    public String getType() {
        return type;
    }
    public GamePlayer getGamePlayer() {
        return gamePlayerI;
    }
    public List<String> getLocations() { return locations; }

//    public void setGamePlayer(GamePlayer gamePlayer) {
//        this.gamePlayer = gamePlayer;
//    }

//    public getGamePlayer() {
//
//    }
    //


}
