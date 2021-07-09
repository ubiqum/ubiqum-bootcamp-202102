package com.codeoftheweb.salvo.repos;

        import com.codeoftheweb.salvo.models.Game;
        import com.codeoftheweb.salvo.models.Player;
        import com.codeoftheweb.salvo.models.Score;
        import org.springframework.data.jpa.repository.JpaRepository;
        import org.springframework.data.rest.core.annotation.RepositoryRestResource;

        import java.util.Optional;

@RepositoryRestResource
public interface ScoreRepository extends JpaRepository<Score, Long> {
        Optional<Score> findByGameAndPlayer(Game game,Player player);
}