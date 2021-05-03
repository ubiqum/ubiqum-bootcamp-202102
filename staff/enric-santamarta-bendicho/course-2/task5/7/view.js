const Home = {
    template: `
    <main>    
    <div class="container">
    <h2>About Us</h2>
    <p class="maintext"></p>
    <p class="maintext">Governments exist to serve the people. Information on how officials conduct the public
        business and spend
        taxpayer money must be readily available and easily understood. This transparency allows good and just
        governance. Transparency promotes accountability and provides information for citizens about what their
        Government is doing.</p>
    <p class="maintext">We also believe that government should be participatory. Public engagement enhances the
        Government's
        effectiveness and improves the quality of its decisions. Knowledge is widely dispersed in society, and
        public officials benefit from having access to that dispersed knowledge. We invite you to use our site to
        become actively engaged in American government.</p>
    <p class="maintext">TGIF works to disclose information in forms that the public can readily find and use. We
        solicit public
        feedback to identify information of greatest use to the public.</p>
    <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#more">Read more</button>
    <div id="more" class="collapse">
        <h3>Background History of Government Transparency</h3>
        <p class="maintext">In the West, the idea that government should be open to public scrutiny and susceptible
            to public opinion
            dates back at least to the time of the Enlightenment, when many philosophes made an attack on absolutist
            doctrine of state secrecy, a core part of their intellectual project. The passage of formal legislative
            instruments to this end can also be traced to this time with Sweden, for example, (which then included
            Finland as a Swedish-governed territory) enacting free press legislation as part of its constitution
            (Freedom of the Press Act, 1766). This approach, and that of the philosophes more broadly, is strongly
            related to recent historiography on the eighteenth-century public sphere.

        <p class="maintext">Influenced by Enlightenment thought, the revolutions in America (1776) and France
            (1789), freedom of the
            press enshrined provisions and requirements for public budgetary accounting and freedom of the press in
            constitutional articles. In the nineteenth century, attempts by Metternichean statesmen to row back on
            these
            measures were vigorously opposed by a number of eminent liberal politicians and writers, Bentham, Mill
            and
            Acton prominent among the latter.</p>

        <p class="maintext">Open government is widely seen to be a key hallmark of contemporary democratic practice
            and is often linked
            to the passing of freedom of information legislation. Scandinavian countries claim to have adopted the
            first
            freedom of information legislation, dating the origins of its modern provisions to the eighteenth
            century
            and Finland continuing the presumption of openness after gaining independence in 1917, passing its Act
            on
            Publicity of Official Documents in 1951 (superseded by new legislation in 1999).</p>

        <p>The United States passed its Freedom of Information Act (FOIA) in 1966, FOIAs, Access to Information Acts
            (AIAs) or equivalent laws were passed in Denmark and Norway in 1970.</p>
        </p>
    </div>
</div>


</main>
`
}

const Jurisdiction = {
    template: ` 
    <main>
    <div class="container">

    <select id="state" class="filter" @change="refreshMembersTable">
        <option value="Arkansas">Arkansas</option>
        <option value="Arizona">Arizona</option>
        <option value="Alabama">Alabama</option>
        <option value="California">California</option>
        <option value="Colorado">Colorado</option>
        <option value="Connecticut">Connecticut</option>
        <option value="Delaware">Delaware</option>
        <option value="Florida">Florida</option>
        <option value="Georgia">Georgia</option>
        <option value="Idaho">Idaho</option>
        <option value="Hawaii">Hawaii</option>
        <option value="Illinois">Illinois</option>
        <option value="Indiana">Indiana</option>
        <option value="Iowa">Iowa</option>
        <option value="Kansas">Kansas</option>
        <option value="Kentucky">Kentucky</option>
        <option value="Louisiana">Louisiana</option>
        <option value="Maine">Maine</option>
        <option value="Maryland">Maryland</option>
        <option value="Massachusetts">Massachusetts</option>
        <option value="Michigan">Michigan</option>
        <option value="Minnesota">Minnesota</option>
        <option value="Mississippi">Mississippi</option>
        <option value="Missouri">Missouri</option>
        <option value="Montana">Montana</option>
        <option value="Nebraska">Nebraska</option>
        <option value="Nevada">Nevada</option>
        <option value="New Hampshire">New Hampshire</option>
        <option value="New Jersey">New Jersey</option>
        <option value="New Mexico">New Mexico</option>
        <option value="New York">New York</option>
        <option value="North Carolina">North Carolina</option>
        <option value="North Dakota">North Dakota</option>
        <option value="Ohio">Ohio</option>
        <option value="Oklahoma">Oklahoma</option>
        <option value="Oregon">Oregon</option>
        <option value="Pennsylvania">Pennsylvania</option>
        <option value="Rhode Island">Rhode Island</option>
        <option value="South Carolina">South Carolina</option>
        <option value="South Dakota">South Dakota</option>
        <option value="Tennessee">Tennessee</option>
        <option value="Texas">Texas</option>
        <option value="Utah">Utah</option>
        <option value="Vermont">Vermont</option>
        <option value="Virginia">Virginia</option>
        <option value="Washington">Washington</option>
        <option value="West Virginia">West Virginia</option>
        <option value="Wisconsin">Wisconsin</option>
        <option value="Wyoming">Wyoming</option>
    </select>


    <div>

        <h2>Jurisdiction</h2>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>PARTY</th>
                    <th>CHAMBER</th>
                </tr>
            </thead>
            <tbody id="tableMembers">
                <tr v-for="results in results">
                    <td><a v-bind:href="results.openstates_url">{{results.name}}</a></td>
                    <td>{{results.party}}</td>
                    <td>{{results.current_role.title}}</td>
                </tr>
            </tbody>
        </table>

    </div>
    </main>
`
}

Vue.component('FilterMenus', {
    template: ` <main>         Filter by party:
    <input type="checkbox" value="D" name="party" id="checkbox" v-model="parties" 
        v-on:change="applyFiltersSenate" />
    <label for="democrat">Democrat</label>
    <input type="checkbox" value="R" name="party" id="checkbox" v-model="parties" 
        v-on:change="applyFiltersSenate" />
    <label for="republicans">Republican</label>
    <input type="checkbox" value="ID" name="party" id="checkbox" v-model="parties" 
        v-on:change="applyFiltersSenate" />
    <label for="independents">Independent</label>

   
    <select id="state" class="filter" v-model="state"  @change="applyFiltersSenate">
        <option value="">--Choose a State--</option>
        <option value="AR">Arkansas</option>
        <option value="AZ">Arizona</option>
        <option value="AL">Alabama</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="ID">Idaho</option>
        <option value="HI">Hawaii</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MS">Missouri</option>
        <option value="MO">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
    </select>
    </main>
    `
})

Vue.component('DataTable', {
    template: `
    <table class="table">
    <tr>
        <th>SENATOR</th>
        <th>PARTY AFFILIATION</th>
        <th>STATE</th>
        <th>SENIORITY</th>
        <th>PERCENTAGE VOTES WITH PARTY</th>
    </tr>
    <tr v-for="(member,key) in filteredMembers">
        <td><a v-bind:href="member.url">{{member.first_name}} {{member.middle_name}}
        {{member.last_name}}</a></td>
        <td>{{member.party}}</td>
        <td>{{member.state}}</td>
        <td>{{member.seniority}}</td>
        <td>{{member.votes_with_party_pct}} %</td>

    </tr>
</table>`,

})

const SenateData = {
    template:
        `<main> 
        <div class="container">
         <h2>Senators</h2>
        <p class="maintext">First convened in 1789, the composition and powers of the Senate are established
            in Article One of the U.S. Constitution. Each state is represented by two senators,
            regardless of population, who serve staggered six-year terms. The Senate has several
            exclusive powers not granted to the House, including consenting to treaties as a precondition
            to their ratification and consenting to or confirming appointments of Cabinet secretaries, federal
            judges, other federal executive officials, military officers, regulatory officials, ambassadors,
            and other federal uniformed officers, as well as trial of federal officials impeached by the House.</p>
            <FilterMenus></FilterMenus>
            <DataTable></DataTable>
            </div>
            </main>`

}

Vue.component('loyaltyText', {
    template: ` <main>
   
    <h2>Party Loyalty</h2>
    <p class="maintext">Those who consider themselves to be strong partisans, strong Democrats and strong
        Republicans respectively, tend to be the most faithful in voting for their party's nominee for office and
        legislation that backs their party's agenda. </p>
        </main>`
})



Vue.component('attendanceText', {
    template: `<main>
    <h2>Attendance</h2>
    <p class="maintext">The Constitution specifies that a majority of members constitutes a quorum to do business in
        each house. Representatives and senators rarely force the presence of a quorum by demanding quorum calls;
        thus, in most cases, debates continue even if a majority is not present.</p>

    <p class="maintext">The Senate uses roll-call votes; a clerk calls out the names of all the senators, each
        senator stating "aye" or "no" when his or her name is announced. The House reserves roll-call votes for the
        most formal matters, as a roll-call of all 435 representatives takes quite some time;
        normally, members vote by electronic device. In the case of a tie, the motion in question fails. In the
        Senate, the Vice President may (if present) cast the tiebreaking vote.</p>
    </main>`
})



const SenateLoyalty = {
    template: `   
    <main>
    <div class="container">
    <loyaltyText></loylatyText>
    </main>`
}



const SenateAttendance = {
    template: ` 
    <main>
    <div class="container">
    <attendanceText></attendanceText>
    </div>
    </main>
`
}

const HouseData = {
    template: `  <main>
    <div class="container">

    <h2>Congressmen</h2>
    <p class="maintext">The major power of the House is to pass federal legislation that affects the entire
        country,
        although its bills must also be passed by the Senate
        and further agreed to by the U.S. President before becoming law (unless both the House and Senate
        re-pass
        the legislation with a two-thirds majority in each chamber). The House has some exclusive powers: the
        power
        to initiate revenue bills, to impeach officials (impeached officials are subsequently tried in the
        Senate),
        and to elect the U.S. President in case there is no majority in the Electoral College.
        Each U.S. state is represented in the House in proportion to its population as measured in the census,
        but
        every state is entitled to at least one representative. </p>
        <FilterMenus></FilterMenus>
        <DataTable></DataTable>
        </div>
        </main>`
}

const HouseLoyalty = {
    template: ` 
    <div class="container">
    <loyaltyText></loylatyText>
    </div>`
}

const HouseAttendance = {
    template: ` <main>
    <div class="container">
    <attendanceText></attendanceText>
        </div>
        </main>`

}


const router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/jurisdiction', component: Jurisdiction },
        { path: '/senate-data', component: SenateData },
        { path: '/house-data', component: HouseData },
        { path: '/senate-loyalty', component: SenateLoyalty },
        { path: '/senate-attendance', component: SenateAttendance },
        { path: '/house-loyalty', component: HouseLoyalty },
        { path: '/house-attendance', component: HouseAttendance }
    ]

})

var App = {
    el: '#app',
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