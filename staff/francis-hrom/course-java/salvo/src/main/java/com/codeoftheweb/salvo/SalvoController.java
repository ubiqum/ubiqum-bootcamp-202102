package com.codeoftheweb.salvo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import static java.util.stream.Collectors.toList;

@RestController
public class SalvoController {

    @Autowired
    private GameRepository gameRepository;

//    @RequestMapping("/api/games")
//    public List<Game> getAll() {
//        return gameRepository.findAll();
//    }

//    @RequestMapping("/api/games")
//    public List<Object> getAllGames() {
//        return gameRepository
//                .findAll()
//                .stream()
//                .map(game -> toDTO(game))
//                .collect(Collectors.toList());
//    }
//
//    private  Map<String, Object> toDTO(Game game) {
//        Map<String, Object> dto = new LinkedHashMap<String, Object>();
//        dto.put("id", game.getId());
//        dto.put("creationDate", game.getCreationDate());
//        return dto;
//    }

    @RequestMapping("/api/games")
    public List<Object> getAllGames() {
        return gameRepository
                .findAll()
                .stream()
                .map(game -> makeGameDTO(game))
                .collect(Collectors.toList());
    }

        private  Map<String, Object> makeGameDTO(Game game) {
        Map<String, Object> dto = new LinkedHashMap<String, Object>();
        dto.put("id", game.getId());
        dto.put("created", game.getCreationDate());
        dto.put("gamePlayers", game.gamePlayers.stream().map(gamePlayer -> makeGamePlayerDTO(gamePlayer)));
        return dto;
    }

    private  Map<String, Object> makeGamePlayerDTO(GamePlayer gp) {
        Map<String, Object> dto = new LinkedHashMap<String, Object>();
        dto.put("id", gp.getId());
        dto.put("player", makePlayerDTO(gp.getPlayer()));
        return dto;
    }

    private  Map<String, Object> makePlayerDTO(Player player) {
        Map<String, Object> dto = new LinkedHashMap<String, Object>();
        dto.put("id", player.getId());
        dto.put("email", player.getUserName());
        return dto;
    }

}
