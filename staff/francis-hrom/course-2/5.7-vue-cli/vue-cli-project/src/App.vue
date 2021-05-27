<template>
  <b-container>
    <header>
      <b-row>
        <b-col col sm="8">
          <a href="/"
            ><img
              class="img-responsive"
              src="./assets/logo.jpg"
              alt="TGIF logo"
          /></a>
        </b-col>
        <b-col col sm="4">
          <a class="navbar-right" href="mailto:info@tgif.net">
            <b-icon icon="envelope"></b-icon>
            info@tgif.net</a
          >
        </b-col>
      </b-row>
    </header>

    <b-row>
      <b-nav pills>
        <b-nav-item to="/">Home</b-nav-item>

        <b-nav-item-dropdown
          id="my-nav-dropdown"
          text="Congress 113"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item to="/house">House</b-dropdown-item>
          <b-dropdown-item to="/senate">Senate</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown
          id="my-nav-dropdown"
          text="Attendance"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item to="/house-attendance">House</b-dropdown-item>
          <b-dropdown-item to="/senate-attendance">Senate</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown
          id="my-nav-dropdown"
          text="Party Loyalty"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item to="/house-loyalty">House</b-dropdown-item>
          <b-dropdown-item to="/senate-loyalty">Senate</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item to="/legislators">State Legislators</b-nav-item>
      </b-nav>
    </b-row>

    <router-view />

    <b-card-footer class="text-center"
      >&copy; 2016 TGIF | All Rights Reserved</b-card-footer
    >
  </b-container>
</template>
