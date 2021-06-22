package com.codeoftheweb.salvo_api;

import org.hibernate.annotations.GenericGenerator;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.FetchType;

import javax.persistence.OneToMany;
import java.util.Set;


@Entity
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private long id;

    @OneToMany(mappedBy="playerID", fetch=FetchType.EAGER)
    Set<GamePlayer> gamePlayers;


    private String userName;

    public Player() { }

    public Player(String uName) {
        userName = uName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String uName) {
        this.userName = uName;
    }


    public void addGame(GamePlayer gamePlayer) {
        gamePlayer.setPlayerID(this);
        gamePlayers.add(gamePlayer);
    }

    public Long getId() {
        return id;
    }

//    public List<Game> getGames() {
//        return gamePlayers.stream().map(sub -> sub.getGame()).collect(toList());
//    }

}