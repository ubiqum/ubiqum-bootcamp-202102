var App = {
    router,
    template: `
    <main>
        <header class="header">
            <h1 class="logo">TGIF</h1>
        
        <a href="mailto:info@git.net?subject=Reaching%20Out&body=How%20are%20you" class="email">info@tgif.net</a>
        </header>

        <nav class="menu">

        <div class="container">
            <div class="panel-group">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a v-on:click="home" method="post" class="selector">Home</a>
                            <a data-toggle="collapse" href="#collapse1" class="selector" aria-expanded="false">Congress 113</a>
                            <a data-toggle="collapse" href="#collapse3" class="selector" aria-expanded="false">Attendance</a>
                            <a data-toggle="collapse" href="#collapse4" class="selector" aria-expanded="false">Party Loyalty</a>
                            <a v-on:click="jurisdiction" method="post" class="selector">Jurisdiction</a>
                        </h4>
                 
    
                    <div id="collapse1" class="panel-collapse collapse">
                        <div class="panel-body"><a v-on:click="houseData" method="post" >House</a></div>
    
                        <div class="panel-body"><a v-on:click="senateData" method="post" >Senate</a></div>
                    </div>
                    <div id="collapse3" class="panel-collapse collapse">
                        <div class="panel-body"><a v-on:click="houseAttendance" method="post" >House</a></div>
    
                        <div class="panel-body"><a v-on:click="senateAttendance" method="post">Senate</a></div>
    
                    </div>
                    <div id="collapse4" class="panel-collapse collapse">
                        <div class="panel-body"><a v-on:click="houseLoyalty" method="post" >House</a></div>
    
                        <div class="panel-body"><a v-on:click="senateLoyalty" method="post" >Senate</a></div>
    
                    </div>
                </div>
    
                </div>
            </div>
        </div>
        </nav>



        <router-view></router-view>
   
        <footer>
        <div class="container-fluid">
            <p class="footer"> &#169 2016 TGIF | All Rights Reserved </p>
            
        </div>
        
    </footer>
    </main>` ,
    methods: {
        home(event) {
            event.preventDefault()

            router.push('/')
        },

        jurisdiction(event) {
            event.preventDefault()

            router.push('/jurisdiction')
        },
        senateData(event) {
            event.preventDefault()

            router.push('/senate-data')
        },
        houseData(event) {
            event.preventDefault()

            router.push('/house-data')
        },
        houseAttendance(event) {
            event.preventDefault()

            router.push('/house-attendance')
        },
        senateAttendance(event) {
            event.preventDefault()

            router.push('/senate-attendance')
        },
        houseLoyalty(event) {
            event.preventDefault()

            router.push('/house-loyalty')
        },
        senateLoyalty(event) {
            event.preventDefault()

            router.push('/senate-loyalty')
        }
    }
}