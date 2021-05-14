const House = createCongress(
  "house",
  "Congressmen",
  `<p>
The major power of the House is to pass federal legislation that
affects the entire country, although its bills must also be passed
by the Senate and further agreed to by the U.S. President before
becoming law (unless both the House and Senate re-pass the
legislation with a two-thirds majority in each chamber). The House
has some exclusive powers: the power to initiate revenue bills, to
impeach officials (impeached officials are subsequently tried in the
Senate), and to elect the U.S. President in case there is no
majority in the Electoral College.
</p>
<p>
Each U.S. state is represented in the House in proportion to its
population as measured in the census, but every state is entitled to
at least one representative.
</p>`
);

const Senate = createCongress(
  "senate",
  "Senators",
  `<p>
First convened in 1789, the composition and powers of the Senate are
established in Article One of the U.S. Constitution. Each state is
represented by two senators, regardless of population, who serve
staggered six-year terms. The Senate has several exclusive powers
not granted to the House, including consenting to treaties as a
precondition to their ratification and consenting to or confirming
appointments of Cabinet secretaries, federal judges, other federal
executive officials, military officers, regulatory officials,
ambassadors, and other federal uniformed officers, as well as trial
of federal officials impeached by the House.
</p>`
);

const HouseAttendance = createAttendance("house");
const SenateAttendance = createAttendance("senate");
const HouseLoyalty = createLoyalty("house");
const SenateLoyalty = createLoyalty("senate");

const routes = [
  { path: "/", component: Home },
  { path: "/house", component: House },
  { path: "/senate", component: Senate },
  { path: "/house-attendance", component: HouseAttendance },
  { path: "/senate-attendance", component: SenateAttendance },
  { path: "/senate-party-loyalty", component: SenateLoyalty },
  { path: "/house-party-loyalty", component: HouseLoyalty },
  { path: "/legislators", component: Legislators },
];

const router = new VueRouter({
  routes,
});

const App = {
  el: "#app",
  template: `<div>
    <header class="container">
    <div class="row">
      <div class="col-sm-6">
        <router-link to="/"
          ><a href="#"
            ><img
              class="img-responsive"
              src="images/logo.jpg"
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
            <li><router-link to="/house-party-loyalty">House</router-link></li>
            <li><router-link to="/senate-party-loyalty">Senate</router-link></li>
          </ul>
        </li>
  
        <li>
          <router-link to="/legislators">State Legislators</router-link>
        </li>
      </ul>
    </nav>
  </div>
  
        <router-view></router-view>

        <footer class="container panel-footer text-center">
        <p>&copy 2016 TGIF | All Rights Reserved</p>
      </footer>

    </div>`,
  router,
};
