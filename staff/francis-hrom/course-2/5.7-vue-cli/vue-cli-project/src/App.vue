<template>
  <div id="app">
    <header class="container">
      <div class="row">
        <div class="col-sm-6">
          <router-link to="/"
            ><a href="#"
              ><img
                class="img-responsive"
                src="./assets/logo.jpg"
                alt="TGIF logo" /></a
          ></router-link>
        </div>
        <div class="col-sm-6">
          <a class="navbar-right" href="mailto:info@tgif.net"
            ><i class="bi bi-envelope"> </i>info@tgif.net</a
          >
        </div>
      </div>
    </header>

    <div class="row">
      <nav class="nav navbar-default">
        <ul class="nav navbar-nav">
          <li><router-link to="/">Home</router-link></li>
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#"
              >Congress 113 <span class="caret"></span
            ></a>
            <ul class="dropdown-menu">
              <li><router-link to="/house">House</router-link></li>
              <li><router-link to="/senate">Senate</router-link></li>
            </ul>
          </li>

          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#"
              >Attendance<span class="caret"></span
            ></a>
            <ul class="dropdown-menu">
              <li><router-link to="/house-attendance">House</router-link></li>
              <li>
                <router-link to="/senate-attendance">Senate</router-link>
              </li>
            </ul>
          </li>

          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#"
              >Party Loyalty<span class="caret"></span
            ></a>
            <ul class="dropdown-menu">
              <li>
                <router-link to="/house-loyalty">House</router-link>
              </li>
              <li>
                <router-link to="/senate-loyalty">Senate</router-link>
              </li>
            </ul>
          </li>

          <li>
            <router-link to="/legislators">State Legislators</router-link>
          </li>
        </ul>
      </nav>
    </div>

    <router-view />

    <footer class="container panel-footer text-center">
      <p>&copy; 2016 TGIF | All Rights Reserved</p>
    </footer>
  </div>
</template>
