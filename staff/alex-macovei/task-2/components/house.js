const House = {
    props: {
        members: {
            members: [],
        }
    },
    template: /*html*/
        `<div class="container">
            <footer class="bg-light text-lg-start"><div class="row">
                <div class="col-sm-7">
                <h2>Congressmen</h2>
                <p>The major power of the House is to pass federal legislation that affects the entire country, although its
                    bills must also be passed by the Senate and further agreed to by the U.S. President before becoming law
                    (unless both the House and Senate re-pass the legislation with a two-thirds majority in each chamber). The
                    House has some exclusive powers: the power to initiate revenue bills, to impeach officials (impeached
                    officials are subsequently tried in the Senate), and to elect the U.S. President in case there is no
                    majority in the Electoral College.</p>
                <p>Each U.S. state is represented in the House in proportion to its population as measured in the census, but
                    every state is entitled to at least one representative. </p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-8" style="z-index: 1;">
                <p>Filter by Party:
                <input class="republican" value="R" type="checkbox" id="republican"  v-model="checkedParties" @change="checkboxClicked($event)">
                <label for="republican">Republican</label>
                <input class="democrat" value="D" type="checkbox" id="democrat" v-model="checkedParties" @change="checkboxClicked($event)">
                <label for="democrat">Democrat</label>
                <input class="indipendent" value="ID" type="checkbox" id="indipendent" v-model="checkedParties" @change="checkboxClicked($event)">
                <label for="indipendent">Indipendent</label>
              </p>
                </div>
                <label class="col-sm-3 text-right">Filter By State: </label>
            <div class="col-sn-1 dropdown">
                    <form>
                    <select id="states" v-model="selectedState" @change="statesChanged($event)">
                    <option disabled value="">All</option>
                    <option  v-for="(state, key) in states">{{state}}</option>
                    </select>
                  </form>
                </div>
                <div class="vue-container">
            <table class="table table-borderless text-center" id="table">
              <thead>
                <tr>
                  <th class="text-center">Name</th>
                  <th class="text-center">Party</th>
                  <th class="text-center">Seniority</th>
                  <th class="text-center">State</th>
                  <th class="text-center">Percentage of votes with party</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(member, key) in displayedMembers">
                  <td>{{member.first_name}} {{member.last_name}}</td>
                  <td>{{member.party}}</td>
                  <td>{{member.seniority}}</td>
                  <td>{{member.state}}</td>
                  <td>{{member.votes_with_party_pct}}</td>
                </tr>
              </tbody>
            </table>
          </div>
                </div>
                <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                    <p class="text-dark" href="#">@ 2016 TGIF | All Rights Reserved</p>
                </div>
            </footer>
        </div>`,
    data() {
        return {
            allMembers: [],
            displayedMembers: [],
            checkedParties: [],
            states: [],
            selectedState: ""

        }
    },
    created() {
        retrieveHouseMembers(function (members) {
            this.allMembers = members;
            this.displayedMembers = members;
            this.states = retrieveStates(members);
        }.bind(this))
    },
    methods: {
        checkboxClicked() {
            // this.displayedMembers = retrieveMembersByParties(this.allMembers, this.checkedPartys)
            this.displayedMembers=retrieveMembersByPartiesAndState(this.allMembers, this.checkedParties, this.selectedState)
        },
        statesChanged() {
            // this.displayedMembers = retrieveMembersByState(this.allMembers, this.selectedState)
            this.displayedMembers=retrieveMembersByPartiesAndState(this.allMembers, this.checkedParties, this.selectedState)
        },
    }

}

