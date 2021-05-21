package com.codeoftheweb.salvo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.*;

import static java.util.stream.Collectors.toList;

@RestController
public class SalvoController {

    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private GamePlayerRepository gamePlayerRepository;

    @Autowired
    private PlayerRepository playerRepository;

    @Autowired
    private ShipRepository shipRepository;

    @Autowired
    private SalvoRepository salvoRepository;

    @Autowired
    private ScoreRepository scoreRepository;

    @Autowired private PasswordEncoder passwordEncoder;

    @RequestMapping(path = "/persons", method = RequestMethod.POST)
    public ResponseEntity<Object> register(
            @RequestParam String username, @RequestParam String password) {

        if (username.isEmpty() || password.isEmpty()) {
            return new ResponseEntity<>("Missing data", HttpStatus.FORBIDDEN);
        }

        if (playerRepository.findByUsername(username) !=  null) {
            return new ResponseEntity<>("Name already in use", HttpStatus.FORBIDDEN);
        }

        playerRepository.save(new Player(username, passwordEncoder.encode(password)));
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

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

    @RequestMapping("/api/game_view/{gamePlayerId}")
    public Map<String, Object> getGameView(@PathVariable Long gamePlayerId) {
        Map<String, Object> gameView = new TreeMap<>();
        Optional<GamePlayer> gamePlayer = gamePlayerRepository.findById(gamePlayerId);

        long gameId = gamePlayer.get().getGame().getId();
        gameView.put("id", gameId);

        gameView.put("created", gamePlayer.get().getGame().getCreation());

        Set<GamePlayer> gamePlayers = gamePlayer.get().getGame().getGamePlayers();
        List<Map<String, Object>> gamePlayerList = gamePlayers.stream().map(gamePlayer1 -> {
            Map<String, Object> gamePlayerInfo = new TreeMap<>();
            gamePlayerInfo.put("id", gamePlayer1.getId());
            Map<String, Object> playerInfo = new TreeMap<>();
            playerInfo.put("id", gamePlayer1.getPlayer().getId());
            playerInfo.put("userName", gamePlayer1.getPlayer().getUsername());
            gamePlayerInfo.put("player", playerInfo);
            return gamePlayerInfo;
        }).collect(toList());
        gameView.put("gamePlayers", gamePlayerList);

        Set<Ship> ships = gamePlayer.get().getShips();
        List<Map<String, Object>> shipList = ships.stream().map(ship -> {
            Map<String, Object> shipInfo = new TreeMap<>();
            shipInfo.put("player", ship.getGamePlayer().getId());
            shipInfo.put("type", ship.getType());
            shipInfo.put("location", ship.getLocation());
            return shipInfo;
        }).collect(toList());
        gameView.put("ships", shipList);

        List<Salvo> salvoes = gamePlayer.get().getSalvoes();
        List<Salvo> salvoes2 = new ArrayList<>();
        salvoes.forEach(salvo -> {
            if(!salvoes2.contains(salvo)){
                salvoes2.add(salvo);
            }
        });
        List<Map<String,Object>> salvoList = salvoes2.stream().map(salvo -> {
            Map<String,Object> salvoInfo = new TreeMap<>();
            salvoInfo.put("turn", salvo.getTurnTracker());
            salvoInfo.put("player", salvo.getGamePlayer().getId());
            salvoInfo.put("location", salvo.getLocation());
            return salvoInfo;
        }).collect(toList());
        gameView.put("salvoes", salvoList);

        Set<Score> scores = gamePlayer.get().getPlayer().scores;
        Score playerScore = scores.stream().filter(score -> score.getGame().getId()==gameId).findAny().orElse(null);


        gameView.put("score", playerScore.getPoints());

        return gameView;
    }
}
