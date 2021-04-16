package com.codeoftheweb.salvo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.toList;

@RestController
public class SalvoController {

    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private GamePlayerRepository gamePlayerRepository;

    @Autowired
    private PlayerRepository playerRepository;

    @RequestMapping("/api/games")
    public List<Map<String, Object>> getGames() {
        return gameRepository.findAll().stream().map(game -> {
            Map<String, Object> gameMap = new TreeMap<>();

            gameMap.put("id", game.getId());
            gameMap.put("created", game.getCreation());
            gameMap.put("gamePlayers", game.getPlayers());

            return gameMap;
        }).collect(toList());
    }
}
