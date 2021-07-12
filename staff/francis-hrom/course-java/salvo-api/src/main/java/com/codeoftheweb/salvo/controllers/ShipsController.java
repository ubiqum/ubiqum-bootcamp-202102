package com.codeoftheweb.salvo.controllers;

import com.codeoftheweb.salvo.models.*;
import com.codeoftheweb.salvo.repos.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class ShipsController {

    @Autowired
    private PlayerRepository playerRepository;

    @Autowired
    private GamePlayerRepository gamePlayerRepository;

    @Autowired
    private ShipRepository shipRepository;

    @PostMapping("/api/ships/{gamePlayerId}")
    public ResponseEntity<Object> saveShips(@PathVariable Long gamePlayerId, Authentication authentication, @RequestBody List<Ship> ships) {
        Player player = playerRepository.findByUsername(authentication.getName()).orElse(null);
        GamePlayer gamePlayer = gamePlayerRepository.findById(gamePlayerId).orElse(null);

        if (authentication.getName() != gamePlayer.getPlayer().getUsername()) {
            return new ResponseEntity<>("Player does not match GamePlayer.", HttpStatus.UNAUTHORIZED);
        }

        List<Ship> gamePlayerShips = shipRepository.findByGamePlayerId(gamePlayer.getId()).orElse(null);

        if (gamePlayerShips.size() != 0) {
            return new ResponseEntity<>("GamePlayer has already placed ships.", HttpStatus.FORBIDDEN);
        }

        ships.stream().forEach(ship -> {
            ship.setGamePlayer(gamePlayer);
            shipRepository.save(ship);
        });

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

JSON example:
[{
			"type": "Carrier",
			"locations": ["A1", "A2", "A3", "A4", "A5"]
		},
		{
			"type": "Battleship",
			"locations": ["B1", "B2", "B3", "B4"]
		},
		{
			"type": "Submarine",
			"locations": ["C1", "C2", "C3"]
		},
		{
			"type": "Destroyer",
			"locations": ["D1", "D2", "D3"]
		},
		{
			"type": "Patrol Boat",
			"locations": ["E1", "E2"]
		}
]


    this format would nto allow direct conversion to ship object:
    "Carrier": ["A1","A2","A3","A4","A5"],
    "Battleship": ["A1","A2","A3","A4"],
    "Submarine": ["A1","A2","A3"],
    "Destroyer": ["A1","A2","A3"],
    "Patrol Boat": ["A1","A2"]
 */

// possible future improvements for ship placement validation, return error IF:
// if not exactly 5 ships in the request
// in not all ship types are present in the object
// overlapping ship locations (get all locations to ArrayList, then create Set and if the size does not match -> error )
// invalid ship size (the amount of locations does not match the size of the boat)
// invalid ship locations (in all ship locations one letter or number need to be the same AND the other need to be next steps in the sequence (1,2,3 or A,B,C etc.)

