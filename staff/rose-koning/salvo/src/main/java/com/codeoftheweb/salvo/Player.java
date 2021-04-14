package com.codeoftheweb.salvo;

import org.hibernate.annotations.GenericGenerator;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import static java.util.stream.Collectors.toList;

@Entity
 class Player {
    private String userName;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private long id;

    @OneToMany(mappedBy = "player", fetch = FetchType.EAGER)
    Set<GamePlayer>gamePlayers;

    public void addPlayer(GamePlayer gameplayer){
     gameplayer.setPlayer(this);
     gamePlayers.add(gameplayer);
    }

    public Player() {
    }

    public Player(String userName) {
        this.userName = userName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
    public List<Game> getGames() {
        return gamePlayers.stream().map(sub -> sub.getGame()).collect(toList());
    }



}
