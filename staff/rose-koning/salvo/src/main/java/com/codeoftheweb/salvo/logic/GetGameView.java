package com.codeoftheweb.salvo.logic;

import com.codeoftheweb.salvo.models.*;
import com.codeoftheweb.salvo.repositories.GamePlayerRepository;
import org.springframework.security.core.Authentication;
import org.yaml.snakeyaml.util.ArrayUtils;

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


            GamePlayer opponent = game.getGamePlayers().stream().filter(gamePlayer1 -> gamePlayer1.getId() != gamePlayerId).findAny().orElse(null);
            List<String> opponentSalvoes= new ArrayList<>();
           opponent.getSalvoes().forEach(salvo->{
               salvo.getLocation().forEach(location->opponentSalvoes.add(location));
           });

            Set<Ship> ships = gamePlayer.get().getShips();
            List<Map<String, Object>> shipList = ships.stream().map(ship -> {
                List<String> hits;
                Map<String, Object> shipInfo = new TreeMap<>();
                shipInfo.put("player", ship.getGamePlayer().getId());
                shipInfo.put("type", ship.getType());
                shipInfo.put("location", ship.getLocation());
                hits = ship.getLocation().stream().filter(opponentSalvoes::contains).collect(toList());
                shipInfo.put("hits", hits);
                if(hits.size() == ship.getLocation().size()){
                    shipInfo.put("sunk", true);
                }
                return shipInfo;
            }).collect(toList());
            gameView.put("ships", shipList);

            List<Salvo> salvoes = gamePlayer.get().getSalvoes();
            Set<Ship> opponentShips = opponent.getShips();
            List<Map<String, Object>> opponentShipList = opponentShips.stream().map(ship -> {
                List <String> hits = new ArrayList<>();
                Map<String,Object> opppenentShipInfo = new TreeMap<>();
                ship.getLocation().forEach(location->{
                    salvoes.stream().filter(salvo -> salvo.getLocation().contains(location)).map(salvo -> location).forEach(hits::add);
                });
                opppenentShipInfo.put("hits", hits);

                if(ship.getLocation().size()== hits.size()){
                    opppenentShipInfo.put("type", ship.getType());
                }
                return opppenentShipInfo;
            }).collect(toList());
            gameView.put("opponentShips", opponentShipList);

            List<Salvo> salvoes2 = salvoes.stream().distinct().collect(toList());
            List<Map<String, Object>> salvoList = salvoes2.stream().map(salvo -> {
                Map<String, Object> salvoInfo = new TreeMap<>();
                salvoInfo.put("turn", salvo.getTurnTracker());
                salvoInfo.put("player", salvo.getGamePlayer().getId());
                salvoInfo.put("location", salvo.getLocation());
                return salvoInfo;
            }).collect(toList());
            gameView.put("salvoes", salvoList);
            ships.forEach(ship -> {
                ship.getLocation().forEach(location -> {
                    if (opponentSalvoes.contains(location)) {
                        int locationToRemove = opponentSalvoes.indexOf(location);
                        opponentSalvoes.remove(locationToRemove);
                    }
                });
            });

            gameView.put("missedShots", opponentSalvoes);

            Set<Score> scores = gamePlayer.get().getPlayer().getScores();
            Score playerScore = scores.stream().filter(score -> score.getGame().getId() == gameId).findAny().orElse(null);

            if (playerScore != null) {
                gameView.put("score", playerScore.getPoints());
            }

            return gameView;
        }

        throw new

                AccessControlException("Player is not authorized");
    }
}
