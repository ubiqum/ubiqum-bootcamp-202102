package com.codeoftheweb.salvo_api;

import org.hibernate.annotations.GenericGenerator;
import javax.persistence.*;

import java.util.Date;
import java.util.Set;


@Entity
public class GamePlayer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private long id;
    private Date joinDate;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="player_id")
    private Player playerI;
    // investigate - when using just "player" it does not work

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="game_id")
    private Game gameI;

    @OneToMany(mappedBy="gamePlayerI", fetch=FetchType.EAGER)
    Set<Ship> ships;

    public GamePlayer() { }

    public GamePlayer(Player player, Game game) {
        this.playerI = player;
        this.gameI = game;
        this.joinDate = new Date();
    }

    public Long getId() {
        return id;
    }
    public Game getGame() {
        return gameI;
    }
    public Player getPlayer() { return playerI; }
    public Date getJoinDate() { return joinDate; }





//    public void setPlayerID(Player playerID) {
//        this.playerID = playerID;
//    }
//    public void setGameID(Game gameID) {
//        this.gameID = gameID;
//    }
//    public void addShip(Ship ship) {
//        ship.setGamePlayer(this);
//        ships.add(ship);
//    }

//    public Ship getShip() {
//        return ship;
//    }

//    public GamePlayer(Date joinDateP) {
//        joinDate = joinDateP;
//    }
//
//    public Date getJoinDate() {
//        return joinDate;
//    }

}
