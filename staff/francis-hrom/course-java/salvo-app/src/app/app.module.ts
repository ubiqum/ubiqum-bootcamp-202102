import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { authInterceptorProviders } from './helpers/auth.interceptor';

import { LandingComponent } from './pages/landing/landing.component';
import { GamesComponent } from './pages/games/games.component';
import { GameComponent } from './pages/game/game.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HomeComponent } from './pages/home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GameItemComponent } from './components/game-item/game-item.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameSquareComponent } from './components/game-square/game-square.component';
import { GameGridComponent } from './components/game-grid/game-grid.component';
import { ScoreTableComponent } from './components/score-table/score-table.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './components/register/register.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { LoginComponent } from './components/login/login.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    GamesComponent,
    GameItemComponent,
    GameListComponent,
    GameComponent,
    GameSquareComponent,
    GameGridComponent,
    LeaderboardComponent,
    ScoreTableComponent,
    NavComponent,
    LoginFormComponent,
    ProfileComponent,
    SignupFormComponent,
    LoginComponent,
    SignupComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    SigninComponent,
    LoginButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
