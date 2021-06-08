const routes = [
  { path: "/senate", component: Senate },
  { path: "/house", component: House },
  { path: "/home", component: Home },
  { path: "/senate-attendence", component: SenateAttendence },
  { path: "/house-attendence", component: HouseAttendence },
  { path: "/senate-loyalty", component: SenateLoyalty },
  { path: "/house-loyalty", component: HouseLoyalty }
]

const router = new VueRouter({ routes })

const App = {
  router,
  el: "#app",
  template:/*html*/ `
      <div class="container">
        <footer class="bg-light text-lg-start">
            <nav nav class="navbar navbar-default">
    
              <div class="row">
                <div class="col-sm-1"><img class="d-block img-responsive" width="55" height="55" src="img/logo.jpg"
                    alt="logo"></div>
                <div class="col-sm-9"><a class="navbar-brand" href="#">TGIF Logo</a></div>
                <div class="col-sm-2 text-right"><a style="word-wrap:break-word" href="#">info@tgif.net</a></div>
              </div>
              <ul class="nav navbar-nav mr-auto">
                <li><router-link to="/home">Home</router-link></li>
                <li class="dropdown">
                  <a class="dropdown-toggle" data-toggle="dropdown" href="#">Congress 113
                    <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><router-link to="/senate">Senate</router-link></li>
                    <li><router-link to="/house">House</router-link></li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a class="dropdown-toggle" data-toggle="dropdown" href="#">Attendance
                    <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><router-link to="/senate-attendence">Senate</router-link></li>
                    <li><router-link to="/house-attendence">House</router-link></li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a class="dropdown-toggle" data-toggle="dropdown" href="#">Party Loyalty
                    <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><router-link to="/senate-loyalty">Senate</router-link></li>
                    <li><router-link to="/house-loyalty">House</router-link></li>
                  </ul>
                </li>
              </ul>
    
            </nav>
            <router-view></router-view>
          </footer>
        </div>
      `
}