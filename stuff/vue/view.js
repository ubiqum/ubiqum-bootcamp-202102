const Login = {
    template: `<main>
        <h1>Login</h1>
        <form v-on:submit="search" method="post">
            <input type="text" name="username">
            <input type="password" name="password">
            <button>Submit</button>
        </form>
    </main>`,
    methods: {
        search(event) {
            event.preventDefault()

            var username = event.target.username.value
            var password = event.target.password.value

            if (username === 'pepito' && password === 'grillo')    
                router.push('/home')
        }
    }
}

const Home = {
    template: '<h1>hola mundo</h1>'
}

const router = new VueRouter({
    routes: [
        { path: '/login', component: Login },
        { path: '/home', component: Home }
    ]
})

const App = {
    el: '#app',
    router,
    template: '<router-view></router-view>'
}