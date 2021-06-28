package com.codeoftheweb.salvo;

import com.codeoftheweb.salvo.models.*;
import com.codeoftheweb.salvo.repos.GamePlayerRepository;
import com.codeoftheweb.salvo.repos.GameRepository;
import com.codeoftheweb.salvo.repos.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.*;
import java.util.stream.Collectors;

@RestController
public class SalvoController {

    @Autowired
    private GameRepository gameRepository;

    @CrossOrigin(origins = "*")
    @RequestMapping("/api/games")
    public List<Object> getAllGames() {
        return gameRepository
                .findAll()
                .stream()
                .map(game -> makeGameDTO(game))
                .collect(Collectors.toList());
    }

    private Map<String, Object> makeGameDTO(Game game) {
        Map<String, Object> dto = new LinkedHashMap<String, Object>();
        dto.put("id", game.getId());
        dto.put("created", game.getCreationDate());
        dto.put("gamePlayers", game.getGamePlayers().stream().map(gamePlayer -> makeGamePlayerDTO(gamePlayer)));
        return dto;
    }

    private Map<String, Object> makeGamePlayerDTO(GamePlayer gamePlayer) {
        Map<String, Object> dto = new LinkedHashMap<String, Object>();
        dto.put("id", gamePlayer.getId());
        dto.put("player", makePlayerDTO(gamePlayer.getPlayer()));
        Score score = gamePlayer.getGame().getScores().stream().filter(sc -> sc.getPlayer() == gamePlayer.getPlayer()).findFirst().orElse(null);
        if (score != null) { dto.put("score", score.getScore().toString()); }
        else {dto.put("score",null);};
        return dto;
    }

    private Map<String, Object> makePlayerDTO(Player player) {
        Map<String, Object> dto = new LinkedHashMap<String, Object>();
        dto.put("id", player.getId());
        dto.put("email", player.getUserName());
        return dto;
    }

    @Autowired
    private GamePlayerRepository gamePlayerRepository;

    @CrossOrigin(origins = "*")
    @RequestMapping("/api/game_view/{gamePlayerId}")
    public Optional<Object> getGameView(@PathVariable Long gamePlayerId) {
        //gamePlayerRepository.findById(gamePlayerId).orElse(null);
        return gamePlayerRepository
                .findById(gamePlayerId)
                .map(gamePlayer -> makeGameViewDTO(gamePlayer));
    }

    private Map<String, Object> makeGameViewDTO(GamePlayer gamePlayer) {
        Map<String, Object> dto = new LinkedHashMap<String, Object>();
        dto.put("id", gamePlayer.getId());
        dto.put("game", gamePlayer.getGame());
        dto.put("player", makePlayerDTO(gamePlayer.getPlayer()));
        GamePlayer opponentGP = gamePlayer.getGame().getGamePlayers().stream().filter(gp -> gp != gamePlayer).findFirst().orElse(null);
        dto.put("opponent", makePlayerDTO(opponentGP.getPlayer()));
        dto.put("joinDate", gamePlayer.getJoinDate());
        dto.put("gamePlayers", gamePlayer.getGame().getGamePlayers().stream().map(gp -> makeGamePlayerDTO(gp)));
        dto.put("ships", gamePlayer.getShips().stream().map(ship -> makeShipDTO(ship)));
        //dto.put("salvoes", gamePlayer.getGame().gamePlayers.stream().map(gp -> gp.getId()));
        dto.put("salvoesPlayer", gamePlayer.getSalvoes().stream().map(salvo -> makeSalvoDTO(salvo)));
        dto.put("salvoesOpponent", opponentGP.getSalvoes().stream().map(salvo -> makeSalvoDTO(salvo)));
        return dto;
    }

    private Map<String, Object> makeShipDTO(Ship ship) {
        Map<String, Object> dto = new LinkedHashMap<String, Object>();
        dto.put("id", ship.getId());
        dto.put("type", ship.getType());
        dto.put("locations", ship.getLocations());
        return dto;
    }

    private Map<String, Object> makeSalvoDTO(Salvo salvo) {
        Map<String, Object> dto = new LinkedHashMap<String, Object>();
        dto.put("turn",salvo.getTurn().toString());
        dto.put("locations",salvo.getLocations());
        return dto;
    }

    @Autowired
    private PlayerRepository playerRepository;

    @CrossOrigin(origins = "*")
    @RequestMapping("/api/players")
    public List<Object> getPlayerScores() {
        return playerRepository
                .findAll()
                .stream()
                .map(player -> makePlayerScoreDTO(player))
                .collect(Collectors.toList());
    }

    private Map<String, Object> makePlayerScoreDTO(Player player) {
        Map<String, Object> dto = new LinkedHashMap<String, Object>();
        dto.put("id", player.getId());
        dto.put("email", player.getUserName());
        Set<Score> scores = player.getScores();
        dto.put("won", scores.stream().filter(score -> score.getScore() == 1).count());
        dto.put("lost", scores.stream().filter(score -> score.getScore() == 0).count());
        dto.put("tied", scores.stream().filter(score -> score.getScore() == 0.5).count());
        return dto;
    }
}


