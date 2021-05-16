var App = {
    router,
    template: `
    <main>
        <header class="header">
        <h1 class="logo"><img src="lupe-suchen.jpg" alt="TGIF ICON" class="icon">TGIF</img></h1>  
        <a href="mailto:info@git.net?subject=Reaching%20Out&body=How%20are%20you" class="email">info@tgif.net</a>
        </header>

        <nav class="menu">
        
        <div class="container">
        <div class="panel-group">
        <div class="panel panel-default">
            <div class="panel-heading">
            <h4 class="panel-title">
            
                        <div class="dropdown">
                        <button v-on:click="home" method="post" class="btn btn-default dropdown-toggle">Home</button>
                        </div>
                        <div class="dropdown">
                        <button data-toggle="dropdown" id="dropDownMenu1" class="btn btn-default dropdown-toggle" aria-haspopup="true" aria-expanded="false">Congress 113
                        <span class="caret"></span></button>                                      
                        <div aria-labelledby="dropDownMenu1" class="dropdown-menu">
                            
                        <div class="panel-body"><a v-on:click="house" method="post">House</a></div>
                
                        <div class="panel-body"><a v-on:click="senate" method="post">Senate</a></div>
                        </div>
                        </div>

                        <div class="dropdown">
                        <button data-toggle="dropdown" id="dropDownMenu2" class="btn btn-default dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                        Attendance<span class="caret"></span></button>
                        <div aria-labelledby="dropDownMenu2" class="dropdown-menu">
                        <div class="panel-body"><a v-on:click="houseAttendance" method="post" >House</a></div>
        
                        <div class="panel-body"><a v-on:click="senateAttendance" method="post">Senate</a></div>
                        </div>
                        </div>
                            
                        <div class="dropdown">
                        <a data-toggle="dropdown" id="dropDownMenu3" class="btn btn-default dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                        Party Loyalty<span class="caret"></span></a>
                        <div aria-labelledby="dropDownMenu3" class="dropdown-menu">
                        <div class="panel-body"><a v-on:click="houseLoyalty" method="post" >House</a></div>
                            
                        <div class="panel-body"><a v-on:click="senateLoyalty" method="post" >Senate</a></div>
                        </div>
                        </div>
                          
                        <div class="dropdown">
                        <button v-on:click="jurisdiction" method="post" class="btn btn-default dropdown-toggle">Jurisdiction</button>
                        </div>
                        </h4>
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
        senate(event) {
            event.preventDefault()

            router.push('/senate')
        },
        house(event) {
            event.preventDefault()

            router.push('/house')
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