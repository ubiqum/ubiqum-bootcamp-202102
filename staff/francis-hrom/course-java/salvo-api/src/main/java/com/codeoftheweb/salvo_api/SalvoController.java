package com.codeoftheweb.salvo_api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
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
        dto.put("gamePlayers", game.gamePlayers.stream().map(gamePlayer -> makeGamePlayerDTO(gamePlayer)));
        return dto;
    }

    private Map<String, Object> makeGamePlayerDTO(GamePlayer gp) {
        Map<String, Object> dto = new LinkedHashMap<String, Object>();
        dto.put("id", gp.getId());
        dto.put("player", makePlayerDTO(gp.getPlayer()));
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
        dto.put("opponent", gamePlayer.getGame().gamePlayers.stream().filter(gp -> gp != gamePlayer).map(gp -> makePlayerDTO(gp.getPlayer())));
        dto.put("joinDate", gamePlayer.getJoinDate());
        dto.put("gamePlayers", gamePlayer.getGame().gamePlayers.stream().map(gp -> makeGamePlayerDTO(gp)));
        dto.put("ships", gamePlayer.ships.stream().map(ship -> makeShipDTO(ship)));
        //dto.put("salvoes", gamePlayer.getGame().gamePlayers.stream().map(gp -> gp.getId()));
        dto.put("salvoes", gamePlayer.getGame().gamePlayers.stream().map(gp -> makeGamePlayerSalvoesDTO(gp)));
        return dto;
    }

    private Map<String, Object> makeShipDTO(Ship ship) {
        Map<String, Object> dto = new LinkedHashMap<String, Object>();
        dto.put("id", ship.getId());
        dto.put("type", ship.getType());
        dto.put("locations", ship.getLocations());
        return dto;
    }

    private Map<String, Object> makeGamePlayerSalvoesDTO(GamePlayer gamePlayer) {
        Map<String, Object> dto = new LinkedHashMap<String, Object>();
        dto.put(gamePlayer.getPlayer().getId().toString(), gamePlayer.salvoes.stream().map(salvo -> makeSalvoDTO(salvo)));
        return dto;
    }

    private Map<String, Object> makeSalvoDTO(Salvo salvo) {
        Map<String, Object> dto = new LinkedHashMap<String, Object>();
        dto.put(salvo.getTurn().toString(),salvo.getLocations());
        return dto;
    }

}


