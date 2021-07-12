package com.codeoftheweb.salvo;

import com.codeoftheweb.salvo.models.*;
import com.codeoftheweb.salvo.repos.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class SalvoController {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private GamePlayerRepository gamePlayerRepository;

    @Autowired
    private PlayerRepository playerRepository;

    //@CrossOrigin(origins = "*")
    @RequestMapping("/api/games")
    private Map<String, Object> makeApiGamesDTO(Authentication authentication) {
        Map<String, Object> dto = new LinkedHashMap<String, Object>();
//        dto.put("authPlayer", getAuthPlayer(authentication));
        dto.put("games", getAllGames());
        return dto;
    }

//    public Map<String, Object> getAuthPlayer(Authentication authentication) {
//        if (authentication != null && !(authentication instanceof AnonymousAuthenticationToken)) {
//            return makePlayerDTO(playerRepository.findByUsername(authentication.getName()));
//        }
//        return null;
//    }

    //@CrossOrigin(origins = "*")
    @RequestMapping("/api/game_view/{gamePlayerId}")
    public Optional<Object> getGameView(@PathVariable Long gamePlayerId) {
        return gamePlayerRepository
                .findById(gamePlayerId)
                .map(gamePlayer -> makeGameViewDTO(gamePlayer));
    }

    //@CrossOrigin(origins = "*")
    @RequestMapping("/api/players")
    public List<Object> getPlayerScores() {
        return playerRepository
                .findAll()
                .stream()
                .map(player -> makePlayerScoreDTO(player))
                .collect(Collectors.toList());
    }

    @RequestMapping(path = "/api/players/create", method = RequestMethod.POST)
    public ResponseEntity<Object> register(@RequestParam String username,
                                           @RequestParam String email, @RequestParam String password) {

        if (username.isEmpty() || email.isEmpty() || password.isEmpty()) {
            return new ResponseEntity<>("Missing data", HttpStatus.FORBIDDEN);
        }

        if (playerRepository.findByUsername(username) != null) {
            return new ResponseEntity<>("Username already in use", HttpStatus.FORBIDDEN);
        }

        if (playerRepository.findByEmail(email) != null) {
            return new ResponseEntity<>("Email already in use", HttpStatus.FORBIDDEN);
        }

        playerRepository.save(new Player(username, email, passwordEncoder.encode(password)));
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

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
        if (score != null) {
            dto.put("score", score.getScore().toString());
        } else {
            dto.put("score", null);
        }
        ;
        return dto;
    }

    private Map<String, Object> makePlayerDTO(Player player) {
        Map<String, Object> dto = new LinkedHashMap<String, Object>();
        dto.put("id", player.getId());
        dto.put("email", player.getEmail());
        return dto;
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
        dto.put("turn", salvo.getTurn().toString());
        dto.put("locations", salvo.getLocations());
        return dto;
    }

    private Map<String, Object> makePlayerScoreDTO(Player player) {
        Map<String, Object> dto = new LinkedHashMap<String, Object>();
        dto.put("id", player.getId());
        dto.put("email", player.getEmail());
        Set<Score> scores = player.getScores();
        dto.put("won", scores.stream().filter(score -> score.getScore() == 1).count());
        dto.put("lost", scores.stream().filter(score -> score.getScore() == 0).count());
        dto.put("tied", scores.stream().filter(score -> score.getScore() == 0.5).count());
        return dto;
    }

}


