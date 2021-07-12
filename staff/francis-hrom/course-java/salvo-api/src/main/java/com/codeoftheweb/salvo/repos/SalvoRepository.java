package com.codeoftheweb.salvo.repos;


import com.codeoftheweb.salvo.models.GamePlayer;
import com.codeoftheweb.salvo.models.Salvo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

@RepositoryRestResource
public interface SalvoRepository extends JpaRepository<Salvo, Long> {
    Optional<Salvo> findByTurnAndGamePlayer(Integer turn, GamePlayer gamePlayer);
}