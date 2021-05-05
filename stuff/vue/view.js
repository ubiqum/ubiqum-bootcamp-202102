const Home = {
    template: `<main>
        Welcome to the Music Events App!
        <p>lorem ipsum.... </p>
    </main>`
}

const Events = {
    template: `<main>
        <h1>Events</h1>

        <div v-if="events">
            <ul v-if="events.length">
                <li v-for="event in events" :key="event.id">
                    <h2>{{ event.title }}</h2>
                    <p>{{ event.location }}, <time>{{ event.datetime }}</time></p>
                    <ul v-if="event.tags">
                        <li v-for="tag in event.tags" :key="tag">
                            {{ tag }}
                        </li>
                    </ul>
                </li>
            </ul>
            <p v-else>no events :/</p>
        </div>
    </main>`,
    data() {
        return {
            events: null
        }
    },
    created() {
        retrieveEvents(function (error, events) {
            if (error) return alert(error.message)

            this.events = events
        }.bind(this))
    }
}

const Participants = {
    template: `<main>
        <h1>Participants</h1>

        <div v-if="participants">
            <ul v-if="participants.length">
                <li v-for="participant in participants" :key="participant.id">
                    <h2>{{ participant.name }}</h2>

                    <ul v-if="participant.tags">
                        <li v-for="tag in participant.tags" :key="tag">
                            {{ tag }}
                        </li>
                    </ul>
                </li>
            </ul>
            <p v-else>no participants :/</p>
        </div>
    </main>`,
    data() {
        return {
            participants: null
        }
    },
    created() {
        retrieveParticipants(function (error, participants) {
            if (error) return alert(error.message)

            this.participants = participants
        }.bind(this))
    }
}

const router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/events', component: Events },
        { path: '/participants', component: Participants }
    ]
})

const App = {
    el: '#app',
    router,
    template: `<div>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/events">Events</router-link>
        <router-link to="/participants">Participants</router-link>
    </nav>
    <router-view></router-view>
</div>`
}