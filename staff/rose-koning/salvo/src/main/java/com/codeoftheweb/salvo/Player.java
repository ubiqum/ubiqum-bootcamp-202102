package com.codeoftheweb.salvo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.apache.catalina.User;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.GlobalAuthenticationConfigurerAdapter;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static java.util.stream.Collectors.toList;

@Entity
 public class Player {
    private String username;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private long id;

    private String password;

    @OneToMany(mappedBy = "player", fetch = FetchType.EAGER)
    Set<GamePlayer>gamePlayers;

    @OneToMany(mappedBy = "player", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    Set<Score> scores = new HashSet<>();

    public Player(String username, String password) {
        this.username= username;
        this.password= password;
    }

    public Player(){};

    public String getUsername() {
        return username;
    }

    public Long getId(){return id;}

    public void setUsername(String username) {
        this.username = username;
    }

    @JsonIgnore
    public List<Game> getGames() {
        return gamePlayers.stream().map(sub -> sub.getGame()).collect(toList());
    }
    public void addPlayer(GamePlayer gameplayer){
        gameplayer.setPlayer(this);
        gamePlayers.add(gameplayer);
    }

    public void setScores(Set<Score> scores){
        this.scores = scores;
    }
    public Set<Score> getScores(){
        return scores;
    }

    public void addScore(Score score){
        score.setPlayer(this);
        scores.add(score);
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
