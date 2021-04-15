package com.codeoftheweb.salvo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class SalvoController {

    @Autowired
    private GameRepository repository;

    @RequestMapping("/api")
    public List<Game> getAll() {
        return repository.findAll();
    }
}
