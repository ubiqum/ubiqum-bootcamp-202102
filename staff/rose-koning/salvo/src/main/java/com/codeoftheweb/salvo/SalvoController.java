package com.codeoftheweb.salvo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.toList;

@RestController
public class SalvoController {

    @Autowired
    private GameRepository gameRepository;


    @RequestMapping("/api/games")
    public List<Long> getGamesIds() {
       gameRepository.findAll().stream().map(game -> game.getId(),created).collect(toList());
    }
}
