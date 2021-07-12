//package com.codeoftheweb.salvo.controllers;
//
//import com.codeoftheweb.salvo.models.*;
//import com.codeoftheweb.salvo.repos.*;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.Authentication;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.*;
//import java.util.stream.IntStream;
//
//@CrossOrigin(origins = "*", maxAge = 3600)
//@RestController
//public class PlayViewController {
//
//    @Autowired
//    private PlayerRepository playerRepository;
//
//    @Autowired
//    private GamePlayerRepository gamePlayerRepository;
//
//    @Autowired
//    private ScoreRepository scoreRepository;
//
//
//    // ? which version play_view or play-view or playView (play-view seems the most natural)
//    @RequestMapping("/api/play_view/{gamePlayerId}")
//    public Map<String, Object> getGameView(@PathVariable Long gamePlayerId, Authentication authentication) {
//        Player player = playerRepository.findByUsername(authentication.getName()).orElse(null);
//        GamePlayer gamePlayer = gamePlayerRepository.findById(gamePlayerId).orElse(null);
//
//        if (authentication.getName() != gamePlayer.getPlayer().getUsername()) {
//            // how to throw / return errors properly
//            //ResponseEntity<Object>
//            //return new ResponseEntity<>("Player does not match GamePlayer.", HttpStatus.FORBIDDEN);
//            return null;
//        }
//
//        return makeGameViewDTO(gamePlayer);
//    }
//
//
//
//        private Map<String, Object> makeGameViewDTO (GamePlayer gamePlayer){
//            Map<String, Object> dto = new LinkedHashMap<String, Object>();
//            dto.put("gamePlayerID", gamePlayer.getId());
//            dto.put("gameState", makeGameStateDTO(gamePlayer));
//            dto.put("playerName", gamePlayer.getPlayer().getUsername());
//            GamePlayer opponentGP = gamePlayer.getGame().getGamePlayers().stream().filter(gp -> gp != gamePlayer).findFirst().orElse(null);
//            dto.put("opponentName", opponentGP.getPlayer().getUsername());
//            dto.put("playerShips", gamePlayer.getShips().stream().map(ship -> makeShipDTO(ship)));
//            // order Salvos by turns
//            ArrayList<Salvo> playerSalvos = new ArrayList<>(gamePlayer.getSalvoes());
//            playerSalvos.sort(Comparator.comparing(Salvo::getTurn));
//            ArrayList<Salvo> opponentSalvos = new ArrayList<>(opponentGP.getSalvoes());
//            opponentSalvos.sort(Comparator.comparing(Salvo::getTurn));
//
//           int[] turns = IntStream.rangeClosed(1, playerSalvos.size()).toArray();
//           // ArrayList<Integer> turns = IntStream.rangeClosed(1, playerSalvos.size()).toArray();
////            dto.put("turn", turns.stream().map(turn -> makeTurnDTO(turn,player)));
////            playerSalvos
//            dto.put("turn", playerSalvos.stream().map(salvo -> makeTurnDTO(salvo)));
//            return dto;
//        }
//
//        private Map<String, Object> makeGameStateDTO (GamePlayer gamePlayer){
//            Map<String, Object> dto = new LinkedHashMap<String, Object>();
//            Score score = scoreRepository.findByGameAndPlayer(gamePlayer.getGame(), gamePlayer.getPlayer()).orElse(null);
//            dto.put("gameOver", !score.equals(null));
//            dto.put("tie", score.equals(0.5));
//            dto.put("playerWon", score.equals(1));
//            return dto;
//        }
//
//        private Map<String, Object> makeShipDTO (Ship ship){
//            Map<String, Object> dto = new LinkedHashMap<String, Object>();
//            dto.put("type", ship.getType());
//            dto.put("locations", ship.getLocations());
//            return dto;
//        }
//
//        private Map<String, Object> makeTurnDTO (Salvo salvo){
//            Map<String, Object> dto = new LinkedHashMap<String, Object>();
//            dto.put(salvo.getTurn().toString(), makeSalvosAndHitsDTO(salvo));
//            return dto;
//        }
//
//        private Map<String, Object> makeSalvosAndHitsDTO (Salvo salvo){
//            Map<String, Object> dto = new LinkedHashMap<String, Object>();
//            dto.put("playerSalvos", makeSalvoDTO(turn, gamePlayer) );
//            dto.put("playerHits", );
//            dto.put("opponentSalvos", );
//            dto.put("opponentHits", );
//            return dto;
//
//            private Map<String, ArrayList> makeSalvoDTO (Integer turn,GamePlayer gamePlayer){
//                Map<String, ArrayList> dto = new LinkedHashMap<String, Object>();
//                dto.put("type", ship.getType());
//                return dto;
//            }
//
//
//    }
//
//}
///*OUTPUT example:
//turnCounter tc
//playerTurns[tc]
//
//? use Hash tables fro better performance
//playerSalvoLocations
//playerShipLocations
//
//opponentSalvoLocations
//opponentShipsLocations
//
//
//        {
//            gamePlayerId: XXX,
//            status: CREATED,PLAYING,TIE,WON,LOST,
//
//            player: USERNAME,
//            opponent: USERNAME,
//
//            playerShips: [{type: "Destroyer",locations:["A1","A2","A3","A4"]},
//                           {type: "Carrier",locations:["C1","C2","C3","C4","C5"]}],
//
//          ?  opponentShipHits: {
//                                "Destroyer": { locations:["A1","A2","A3","A4"] }},
//
//                           "Carrier": { locations:["C1","C2","C3","C4","C5"]} }
//
//            playerTurns: {
//                "1": {
//                    salvos: ["A1","A2","A3","A4","A5"], OR null
//                    hits:  { "Destroyer": { locations:["A1","A2","A3","A4""], sunk: true }},
//                           "Carrier": { locations:["C1","C2","C3","C4","C5"], sunk: false } }
//                },
//                "2": {
//                   salvos: ["A1","A2","A3","A4","A5"]
//                    hits: {A1: sunk, A2: sunk, A5: hit},
//                }},
//            opponentTurns: {
//                "1": {
//                    salvos: ["A1","A2","A3","A4","A5"] OR ["noSalvos"]
//                    hits:  { "Destroyer": { locations:["A1","A2","A3","A4""], sunk: true }},
//                           "Carrier": { locations:["C1","C2","C3","C4","C5"], sunk: false } },
//                },
//                "2": {
//                    salvos: ["A1","A2","A3","A4","A5"]
//                    hits: {A1: sunk, A2: sunk, A5: hit},
//                }}
//        }
//*/