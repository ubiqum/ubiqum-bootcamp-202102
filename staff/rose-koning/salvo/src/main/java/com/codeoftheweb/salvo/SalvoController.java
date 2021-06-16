package com.codeoftheweb.salvo;

import com.codeoftheweb.salvo.exceptions.AlreadyInUseException;
import com.codeoftheweb.salvo.logic.RegisterPlayer;
import com.codeoftheweb.salvo.logic.RetrieveGames;
import com.codeoftheweb.salvo.models.*;
import com.codeoftheweb.salvo.repositories.*;
import com.codeoftheweb.salvo.utils.ApiUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @RequestMapping(value = "/api/username", method = RequestMethod.GET)
    @ResponseBody
    public String currentUserName(Authentication authentication) {
        return ApiUtils.isAuthenticated(authentication) ? authentication.getName() : null;
    }

    @RequestMapping(path = "/api/players", method = RequestMethod.POST)
    public ResponseEntity<Object> register(
            @RequestParam String username, @RequestParam String password) {

        try {
            new RegisterPlayer(playerRepository, passwordEncoder).run(username, password);

            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch(IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.FORBIDDEN);
        } catch (AlreadyInUseException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }


    @RequestMapping(value = "/api/games", method = RequestMethod.GET)
    public List<Map<String, Object>> getGames(Authentication authentication) {
        return new RetrieveGames(gameRepository).run();
    }

    @RequestMapping(value = "/api/games", method = RequestMethod.POST)
    public ResponseEntity<Map<String, Object>> createGame(Authentication authentication) {
        if (!ApiUtils.isAuthenticated(authentication)) {
            return new ResponseEntity<>(ApiUtils.makeMap("error", "Player is not logged in"), HttpStatus.UNAUTHORIZED);
        }

        String username = authentication.getName();
        Player player = playerRepository.findByUsername(username);

        Game game = new Game();
        gameRepository.save(game);

        GamePlayer gamePlayer = new GamePlayer(game, player);
        gamePlayerRepository.save(gamePlayer); //  gamePlayer.setId(...)

        return new ResponseEntity<>(ApiUtils.makeMap("gamePlayerId", gamePlayer.getId()), HttpStatus.CREATED);
    }

    @RequestMapping(value = "/api/game/{gameId}/players", method = RequestMethod.POST)
    public ResponseEntity<Map<String, Object>> joinGame(@PathVariable Long gameId, Authentication authentication) {
        if (!ApiUtils.isAuthenticated(authentication)) {
            return new ResponseEntity<>(ApiUtils.makeMap("error", "Player is not logged in"), HttpStatus.UNAUTHORIZED);
        }
        Game game = gameRepository.getOne(gameId);
        if (game == null) {
            return new ResponseEntity<>(ApiUtils.makeMap("error", "Game doesn´t exist"), HttpStatus.FORBIDDEN);
        }

        Set<GamePlayer> gamePlayers = game.getGamePlayers();
        if (gamePlayers.size() == 2) {
            return new ResponseEntity<>(ApiUtils.makeMap("error", "Game is full"), HttpStatus.FORBIDDEN);
        }


        String username = authentication.getName();
        Player player = playerRepository.findByUsername(username);

        GamePlayer gamePlayer = new GamePlayer(game, player);
        gamePlayerRepository.save(gamePlayer);

        return new ResponseEntity<>(ApiUtils.makeMap("gamePlayerId", gamePlayer.getId()), HttpStatus.CREATED);

    }

    @RequestMapping("/api/game_view/{gamePlayerId}")
    public ResponseEntity<Map<String, Object>> getGameView(@PathVariable Long gamePlayerId, Authentication authentication) {
        Map<String, Object> gameView = new TreeMap<>();
        Optional<GamePlayer> gamePlayer = gamePlayerRepository.findById(gamePlayerId);

        String username = gamePlayer.get().getPlayer().getUsername();

        if (username == currentUserName(authentication)) {
            Game game = gamePlayer.get().getGame();
            game.getGamePlayers().forEach(gamePlayer1 -> {
                if (gamePlayer1.getId() != gamePlayerId) {
                    GamePlayer opponent = gamePlayer1;
                }
            });

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

            Set<Score> scores = gamePlayer.get().getPlayer().getScores();
            Score playerScore = scores.stream().filter(score -> score.getGame().getId() == gameId).findAny().orElse(null);

            if (playerScore != null) {
                gameView.put("score", playerScore.getPoints());
            }

            GamePlayer opponent = game.getGamePlayers().stream().filter(gamePlayer1 -> gamePlayer1.getId() != gamePlayerId).findAny().orElse(null);

            List<Salvo> opponentSalvoes = opponent.getSalvoes();
            Set<Ship> opponentShips = opponent.getShips();

            Map<String, Object> hits = new TreeMap<>();
            Map<String, Object> hitsPerShip = new TreeMap<>();
            gamePlayer.get().getShips().forEach(ship -> {
                List<String> shipLocation = ship.getLocation();
                List<String> hitLocations = new ArrayList<>();
                opponentSalvoes.forEach(salvo -> {
                    shipLocation.forEach(location -> {
                        if (salvo.getLocation().contains(location)) {
                            hitLocations.add(location);
                        }
                    });
                    hitsPerShip.put("location", ship.getLocation());
                    hitsPerShip.put((ship.getType()), hitsPerShip);

                    if (hitLocations.size() == shipLocation.size()) {
                        hitsPerShip.put("sunk", true);
                    } else hitsPerShip.put("sunk", false);
                });
            });
            hits.put("shotsAgainstPlayer", hitsPerShip);
            gameView.put("hits", hits);

            return new ResponseEntity<>(gameView, HttpStatus.OK);
        }

        return new ResponseEntity<>(ApiUtils.makeMap("error", "user is not authorized for access"), HttpStatus.UNAUTHORIZED);
    }

    @RequestMapping(value = "/api/games/players/{gamePlayerId}/ships", method = RequestMethod.POST)
    public ResponseEntity<Map<String, Object>> setShips(@PathVariable Long gamePlayerId, @RequestBody Set<Ship> ships, Authentication authentication) {


        if (!ApiUtils.isAuthenticated(authentication)) {
            return new ResponseEntity<>(ApiUtils.makeMap("error", "Player is not logged in"), HttpStatus.UNAUTHORIZED);
        }

        Optional<GamePlayer> gamePlayer = gamePlayerRepository.findById(gamePlayerId);
        Set<Ship> presentShips = gamePlayer.get().getShips();
        if (presentShips.size() > 5) {
            return new ResponseEntity<>(ApiUtils.makeMap("error", "Ships are already placed"), HttpStatus.FORBIDDEN);
        }

        String username = gamePlayer.get().getPlayer().getUsername();
        if (username != authentication.getName()) {
            return new ResponseEntity<>(ApiUtils.makeMap("error", "user not authorized"), HttpStatus.UNAUTHORIZED);
        }

        if (!gamePlayer.isPresent()) {
            return new ResponseEntity<>(ApiUtils.makeMap("error", "this gameplayer doens´t exist"), HttpStatus.UNAUTHORIZED);
        }

        Set<Ship> shipSet = new HashSet<Ship>(ships);
        gamePlayer.get().setShips(shipSet);

        shipSet.forEach(ship -> {
            ship.setGamePlayer(gamePlayer.get());
            shipRepository.save(ship);
        });

        gamePlayerRepository.save(gamePlayer.get());

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @RequestMapping(value = "/api/games/players/{gamePlayerId}/salvoes", method = RequestMethod.POST)
    public ResponseEntity<Map<String, Object>> setSalvoes(@PathVariable Long gamePlayerId, @RequestBody Salvo salvo, Authentication authentication) {

        if (!ApiUtils.isAuthenticated(authentication)) {
            return new ResponseEntity<>(ApiUtils.makeMap("error", "Player is not logged in"), HttpStatus.UNAUTHORIZED);
        }
        Optional<GamePlayer> gamePlayer = gamePlayerRepository.findById(gamePlayerId);

        if (!gamePlayer.isPresent()) {
            return new ResponseEntity<>(ApiUtils.makeMap("error", "this gameplayer doens´t exist"), HttpStatus.UNAUTHORIZED);
        }

        String username = gamePlayer.get().getPlayer().getUsername();

        if (username != authentication.getName()) {
            return new ResponseEntity<>(ApiUtils.makeMap("error", "user not authorized"), HttpStatus.UNAUTHORIZED);
        }

        List<Salvo> previousSalvoes = gamePlayer.get().getSalvoes();

        if (previousSalvoes != null) {
            for (Salvo previousSalvo : previousSalvoes) {
                if (previousSalvo.getTurnTracker() == salvo.getTurnTracker()) {
                    return new ResponseEntity<>(ApiUtils.makeMap("error", "wait until your turn"), HttpStatus.FORBIDDEN);
                }
            }
        }


        gamePlayer.get().addSalvo(salvo);
        salvo.setGamePlayer(gamePlayer.get());
        salvoRepository.save(salvo);

        gamePlayerRepository.save(gamePlayer.get());

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}