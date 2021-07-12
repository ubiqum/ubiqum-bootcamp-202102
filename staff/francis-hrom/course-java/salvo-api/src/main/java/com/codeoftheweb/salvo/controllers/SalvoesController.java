package com.codeoftheweb.salvo.controllers;

import com.codeoftheweb.salvo.models.*;
import com.codeoftheweb.salvo.repos.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.IntStream;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class SalvoesController {

    @Autowired
    private PlayerRepository playerRepository;

    @Autowired
    private GamePlayerRepository gamePlayerRepository;

    @Autowired
    private SalvoRepository salvoRepository;

    @PostMapping("/api/salvo/{gamePlayerId}")
    public ResponseEntity<Object> saveSalvo(@PathVariable Long gamePlayerId, Authentication authentication, @RequestBody Salvo salvo) {
        Player player = playerRepository.findByUsername(authentication.getName()).orElse(null);
        GamePlayer gamePlayer = gamePlayerRepository.findById(gamePlayerId).orElse(null);

        if (authentication.getName() != gamePlayer.getPlayer().getUsername()) {
            return new ResponseEntity<>("Player does not match GamePlayer.", HttpStatus.UNAUTHORIZED);
        }

        Salvo gamePlayerSalvo = salvoRepository.findByTurnAndGamePlayer(salvo.getTurn(), gamePlayer).orElse(null);

        if (gamePlayerSalvo != null) {
            return new ResponseEntity<>("GamePlayer has already fired salvo for that turn.", HttpStatus.FORBIDDEN);
        }

        salvo.setGamePlayer(gamePlayer);
        salvoRepository.save(salvo);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}

/*
test case
player 3
Kiminator
1234pass
gamePlayer 11
"accessToken": "
Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJLaW1pbmF0b3IiLCJpYXQiOjE2MjYwNjQzODMsImV4cCI6MTYyNjE1MDc4M30.zZ_FCLjJ8yyFNYcMkfmX0IOQrqPXVcG9SOEPctqfjsDE6g3VWVZM7cB1Akq9o5ezbg0_UP_NQThF6gAQFWMoJg

{
"turn": 1,
"locations": ["A1", "A2", "A3", "A4", "A5"]
}


 */