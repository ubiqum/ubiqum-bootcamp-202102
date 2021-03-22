const byTeams = { template: 
`<h1>Teams</h1>
<div v-for="(team, key) in teams">
        <h2>{{team}}</h2>
    </div>`}

const byLocations = { template: 
    `<h1>Locations</h1><div v-for="(location, key) in locations">
        <h2>{{location}}</h2>
    </div>` }

const routes = [
    { path: '/byTeams', component: byTeams },
    { path: '/byLocations', component: byLocations }
  ]

  const router = new VueRouter({
    routes
  })

  const app = new Vue({
    router,
    created: function(){
            locations= getLocations(),
            teams = getTeams()
    }
  }).$mount('#app')