package com.codeoftheweb.salvo;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Set;

import static java.util.stream.Collectors.toList;


@Entity
@EntityListeners(AuditingEntityListener.class)
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private long id;

    @CreatedDate
    private Date creationDate = new Date();

    public Date getCreationDate(){
        return creationDate;
    }

    @OneToMany(mappedBy = "game", fetch = FetchType.EAGER)
    Set<GamePlayer>gamePlayers;

    public void addGamePlayer(GamePlayer gamePlayer){
        gamePlayer.setGame(this);
        gamePlayers.add(gamePlayer);
    }

    public List<Player> getPlayers() {
        return gamePlayers.stream().map(sub -> sub.getPlayer()).collect(toList());
    }
}