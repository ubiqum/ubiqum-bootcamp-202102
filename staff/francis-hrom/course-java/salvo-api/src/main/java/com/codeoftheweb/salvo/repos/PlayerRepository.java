package com.codeoftheweb.salvo.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.codeoftheweb.salvo.models.Player;

import java.util.Optional;

@RepositoryRestResource
public interface PlayerRepository extends JpaRepository<Player, Long> {
    Optional<Player> findByUsername(String username);
    Optional<Player> findByEmail(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

}