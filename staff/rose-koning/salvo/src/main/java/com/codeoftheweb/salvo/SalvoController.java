package com.codeoftheweb.salvo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
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

    @Autowired
    private PasswordEncoder passwordEncoder;

    private boolean isAuthenticated(Authentication authentication) {
        return authentication != null && !(authentication instanceof AnonymousAuthenticationToken);
    }

    @RequestMapping(value = "/api/username", method = RequestMethod.GET)
    @ResponseBody
    public String currentUserName(Authentication authentication) {
        return isAuthenticated(authentication) ? authentication.getName() : null;
    }

    @RequestMapping(path = "/api/players", method = RequestMethod.POST)
    public ResponseEntity<Object> register(
            @RequestParam String username, @RequestParam String password) {

        if (username.isEmpty() || password.isEmpty()) {
            return new ResponseEntity<>("Missing data", HttpStatus.FORBIDDEN);
        }

        if (playerRepository.findByUsername(username) != null) {
            return new ResponseEntity<>("Name already in use", HttpStatus.FORBIDDEN);
        }

        playerRepository.save(new Player(username, passwordEncoder.encode(password)));
        return new ResponseEntity<>(HttpStatus.CREATED);
    }


    @RequestMapping(value = "/api/games", method = RequestMethod.GET)
    public List<Map<String, Object>> getGames(Authentication authentication) {
        return gameRepository.findAll().stream().map(game -> {
            Map<String, Object> gameMap = new TreeMap<>();

            gameMap.put("id", game.getId());
            gameMap.put("created", game.getCreation());

            List<Map<String, Object>> gamePlayersList = new ArrayList<>();

            Set<GamePlayer> gamePlayers = game.getGamePlayers();

            gamePlayers.forEach(gamePlayer -> {
                Map<String, Object> gamePlayerMap = new TreeMap<>();

                gamePlayerMap.put("id", gamePlayer.getId());

                Map<String, Object> playerMap = new TreeMap<>();

                playerMap.put("id", gamePlayer.getPlayer().getId());
                playerMap.put("username", gamePlayer.getPlayer().getUsername());

                gamePlayerMap.put("player", playerMap);

                gamePlayersList.add(gamePlayerMap);
            });

            gameMap.put("gamePlayers", gamePlayersList);

            return gameMap;
        }).collect(toList());
    }

    @RequestMapping(value = "/api/games", method = RequestMethod.POST)
    public ResponseEntity<Map<String, Object>> createGame(Authentication authentication) {
        if (!isAuthenticated(authentication)) {
            return new ResponseEntity<>(makeMap("error", "Player is not logged in"), HttpStatus.UNAUTHORIZED);
        }

        String username = authentication.getName();
        Player player = playerRepository.findByUsername(username);

        Game game = new Game();
        gameRepository.save(game);

        GamePlayer gamePlayer = new GamePlayer(game, player);
        gamePlayerRepository.save(gamePlayer); //  gamePlayer.setId(...)

        return new ResponseEntity<>(makeMap("gamePlayerId", gamePlayer.getId()), HttpStatus.CREATED);
    }

    @RequestMapping(value = "/api/game/{gameId}/players", method = RequestMethod.POST)
    public ResponseEntity<Map<String,Object>> joinGame(@PathVariable Long gameId, Authentication authentication){
        if (!isAuthenticated(authentication)) {
            return new ResponseEntity<>(makeMap("error", "Player is not logged in"), HttpStatus.UNAUTHORIZED);
        }
        Game game =gameRepository.getOne(gameId);
        if(game==null){
            return new ResponseEntity<>(makeMap("error","Game doesn´t exist"), HttpStatus.FORBIDDEN);
        }

        Set<GamePlayer> gamePlayers = game.getGamePlayers();
        if(gamePlayers.size()== 2){
            return new ResponseEntity<>(makeMap("error","Game is full"), HttpStatus.FORBIDDEN);
        }



        String username = authentication.getName();
        Player player = playerRepository.findByUsername(username);

        GamePlayer gamePlayer = new GamePlayer(game, player);
        gamePlayerRepository.save(gamePlayer);

        return new ResponseEntity<>(makeMap("gamePlayerId", gamePlayer.getId()), HttpStatus.CREATED);

    }

    @RequestMapping("/api/game_view/{gamePlayerId}")
    public ResponseEntity<Map<String, Object>> getGameView(@PathVariable Long gamePlayerId, Authentication authentication) {
        Map<String, Object> gameView = new TreeMap<>();
        Optional<GamePlayer> gamePlayer = gamePlayerRepository.findById(gamePlayerId);

        String username = gamePlayer.get().getPlayer().getUsername();


        if (username == currentUserName(authentication)) {

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
                if (!salvoes2.contains(salvo)) {
                    salvoes2.add(salvo);
                }
            });
            List<Map<String, Object>> salvoList = salvoes2.stream().map(salvo -> {
                Map<String, Object> salvoInfo = new TreeMap<>();
                salvoInfo.put("turn", salvo.getTurnTracker());
                salvoInfo.put("player", salvo.getGamePlayer().getId());
                salvoInfo.put("location", salvo.getLocation());
                return salvoInfo;
            }).collect(toList());
            gameView.put("salvoes", salvoList);

            Set<Score> scores = gamePlayer.get().getPlayer().scores;
            Score playerScore = scores.stream().filter(score -> score.getGame().getId() == gameId).findAny().orElse(null);

            if(playerScore != null) {
                gameView.put("score", playerScore.getPoints());
            }
            return new ResponseEntity<>(gameView, HttpStatus.OK);
        }

        return new ResponseEntity<>(makeMap("error", "user is not authorized for access"), HttpStatus.UNAUTHORIZED);
    }

    private Map<String, Object> makeMap(String key, Object value) {
        Map<String, Object> map = new HashMap<>();
        map.put(key, value);
        return map;
    }
}
