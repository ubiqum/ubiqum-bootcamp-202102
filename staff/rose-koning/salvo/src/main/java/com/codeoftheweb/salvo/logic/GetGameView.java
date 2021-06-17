package com.codeoftheweb.salvo.logic;

import com.codeoftheweb.salvo.models.*;
import com.codeoftheweb.salvo.repositories.GamePlayerRepository;
import org.springframework.security.core.Authentication;

import java.security.AccessControlException;
import java.util.*;

import static java.util.stream.Collectors.toList;

public class GetGameView {
    private GamePlayerRepository gamePlayerRepository;
    private Authentication authentication;
    private long gamePlayerId;

    public GetGameView(GamePlayerRepository gamePlayerRepository, Authentication authentication, long gamePlayerId) {
        this.gamePlayerRepository = gamePlayerRepository;
        this.authentication = authentication;
        this.gamePlayerId = gamePlayerId;
    }

    public Map<String, Object> run() {

        Map<String, Object> gameView = new TreeMap<>();
        Optional<GamePlayer> gamePlayer = gamePlayerRepository.findById(gamePlayerId);

        String username = gamePlayer.get().getPlayer().getUsername();

        if (username == authentication.getName()) {
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

            Map<String, Object> hits = new TreeMap<>();
            Map<String, Object> hitsPerShipPlayer = new TreeMap<>();
            gamePlayer.get().getShips().forEach(ship -> {
                List<String> shipLocationPlayer = ship.getLocation();
                List<String> hitLocations = new ArrayList<>();
                Map<String, Object> shipProfile = new TreeMap<>();
                opponentSalvoes.forEach(salvo -> {
                            shipLocationPlayer.forEach(location -> {
                                if (salvo.getLocation().contains(location)) {
                                    hitLocations.add(location);
                                }
                            });
                            shipProfile.put("shipLocation", ship.getLocation());
                            shipProfile.put("hits", hitLocations);


                            if (hitLocations.size() == shipLocationPlayer.size()) {
                                shipProfile.put("sunk", true);
                            } else {
                                shipProfile.put("sunk", false);
                            }
                            hitsPerShipPlayer.put((ship.getType()), shipProfile);
                        }
                );

            });
            hits.put("shotsAgainstPlayer", hitsPerShipPlayer);

            Set<Ship> opponentShips = opponent.getShips();

            Map<String, Object> hitsPerShipOpponent = new TreeMap<>();
            opponentShips.forEach(ship -> {
                List<String> shipLocationOpponent = ship.getLocation();
                List<String> hitLocations = new ArrayList<>();
                Map<String, Object> shipProfile = new TreeMap<>();
                gamePlayer.get().getSalvoes().forEach(salvo -> {
                    shipLocationOpponent.forEach(location -> {
                        if (salvo.getLocation().contains(location)) {
                            hitLocations.add(location);
                        }
                    });
                    shipProfile.put("shipLocation", ship.getLocation());
                    shipProfile.put("hits", hitLocations);


                    if (hitLocations.size() == shipLocationOpponent.size()) {
                        shipProfile.put("sunk", true);
                    } else {
                        shipProfile.put("sunk", false);
                    }
                    hitsPerShipOpponent.put((ship.getType()), shipProfile);
                });
            });
        hits.put("shotsFromPlayer", hitsPerShipOpponent);

        gameView.put("hits", hits);

        return gameView;
    }

        throw new

    AccessControlException("Player is not authorized");
}
}
