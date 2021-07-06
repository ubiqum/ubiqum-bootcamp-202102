const Senate = {
  props: {
    members: {
      members: [],
    }
  },
  template: /*html*/
    `
    <div class="container">
      <footer class="bg-light text-lg-start">
        <!--Table container-->
        <div>
          <div class="row">
            <div class="col-sm-7">
              <h2>Senators</h2>
              <p>First convened in 1789, the composition and powers of the Senate are established in Article One of the
                U.S. Constitution. Each state is represented by two
                senators, regardless of population, who serve staggered six-year terms. The Senate has several exclusive
                powers not granted to the House, including consenting
                to treaties as a precondition to their ratification and consenting to or confirming appointments of
                Cabinet secretaries, federal judges, other federal executive
                officials, military officers, regulatory officials, ambassadors, and other federal uniformed officers, as
                well as trial of federal officials impeached by the House.
              </p>
            </div>
          </div>
          <h3 class="text-center" style="color: red" v-if="feedback">{{feedback}}</h3> 
          <div class="row">
            <div class="col-sm-8" style="z-index: 1;">
              <p>Filter by Party:
                <input class="republican" value="R" type="checkbox" id="republican"  v-model="checkedPartys" @change="checkboxClicked($event)">
                <label for="republican">Republican</label>
                <input class="democrat" value="D" type="checkbox" id="democrat" v-model="checkedPartys" @change="checkboxClicked($event)">
                <label for="democrat">Democrat</label>
                <input class="indipendent" value="ID" type="checkbox" id="indipendent" v-model="checkedPartys" @change="checkboxClicked($event)">
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
    </div>
  
    `,
  data() {
    return {
      feedback: null,
      allMembers: [],
      displayedMembers: [],
      checkedPartys: [],
      states: [],
      selectedState: ""

    }
  },
  created() {
    retrieveSenateMembers(function (error, members) {
      if (error)
        return this.feedback = error.message

      this.allMembers = members;
      this.displayedMembers = members;
      this.states = retrieveStates(members);
    }.bind(this))
  },
  methods: {
    checkboxClicked() {
      // this.displayedMembers = retrieveMembersByParties(this.allMembers, this.checkedPartys)
      this.displayedMembers = retrieveMembersByPartiesAndState(this.allMembers, this.checkedPartys, this.selectedState)
    },
    statesChanged() {
      // this.displayedMembers = retrieveMembersByState(this.allMembers, this.selectedState)
      this.displayedMembers = retrieveMembersByPartiesAndState(this.allMembers, this.checkedPartys, this.selectedState)
    },
  }

}
