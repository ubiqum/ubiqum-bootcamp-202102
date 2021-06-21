package com.codeoftheweb.salvo;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

import java.util.Date;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;


@Entity
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private long id;
    private Date creationDate;

    @OneToMany(mappedBy="gameID", fetch=FetchType.EAGER)
    Set<GamePlayer> gamePlayers;

    public Game() {
        creationDate = new Date();
    }

    public Game(Date cDate) {
        creationDate = cDate;
    }

    public Long getId() {
        return id;
    }
    public Date getCreationDate() {
        return creationDate;
    }

    public void addGame(GamePlayer gamePlayer) {
        gamePlayer.setGameID(this);
        gamePlayers.add(gamePlayer);
    }

//    public Map<String, Object> toDTO() {
//        Map<String, Object> dto = new LinkedHashMap<String, Object>();
//        dto.put("id", getId());
//        dto.put("creationDate", getCreationDate());
//        return dto;
//    }

}
