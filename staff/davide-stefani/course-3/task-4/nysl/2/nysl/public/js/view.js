var SignIn = {
    template: '<main><button v-on:click="signIn">Sign in with Google</button></main>',
    methods: {
        signIn: function () {
            signIn(function (error) {
                if (error) return alert(error)

                router.push({ name: 'home' })
            })
        }
    }
}

var Home = {
    props: ['name', 'photo'],
    template: '<main><welcome v-bind:name="name" v-bind:photo="photo"/><button v-if="isSignedIn()" v-on:click="signOut">Sign Out</button><comments/></main>',
    methods: {
        isSignedIn: isSignedIn,
        signOut: function () {
            signOut(function () {
                router.push({ name: 'login' })
            })
        }
    }
}

Vue.component('welcome', {
    props: ['name', 'photo'],
    template: '<section><h2>Welcome, {{ name }}!</h2><img crossorigin="anonymous" v-bind:src="photo"></section>'
})

Vue.component('comments', {
    template: '<section><h2>Leave a note</h2><form v-on:submit="addNote"><input type="text" name="subject" placeholder="subject"><textarea name="body" placeholder="body" /><button>Add</button></form></section>',
    methods: {
        addNote: function (event) {
            event.preventDefault()

            var form = event.target

            var subject = form.subject.value
            var body = form.body.value

            // TODO write this note in firebase
            console.log(subject, body)
        }
    }
})

var routes = [
    { name: 'login', path: '/login', component: SignIn },
    {
        name: 'home', path: '/home', component: Home,
        props: function () {
            return retrieveUser()
        }
    }
]

var router = new VueRouter({
    routes
})

router.beforeEach(function (to, from, next) {
    if (to.name !== 'login' && !isSignedIn()) next({ name: 'login' })
    else if (to.name === 'login' && isSignedIn()) next({ name: 'home' })
    else next()
})

var App = {
    template: '<div><router-view/></div>',
    router
}


/*this.retrieveSeptGameSchedules(function(gameDataSept)
{
    console.log(gameDataSept);
    var gameApp1 = new Vue({
        el: '#gameTableBody1',
        data: {
            schedule_Sept: gameDataSept
        }
    });
})


this.retrieveOctGameSchedules(function(gameDataOct)
{
    console.log(gameDataOct);
    var gameApp2 = new Vue({
        el: '#gameTableBody2',
        data: {
            schedule_Oct: gameDataOct
        }
    });
})*/