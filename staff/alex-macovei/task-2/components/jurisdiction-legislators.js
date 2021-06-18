const StateLegislatures = {
  /*html*/
  template:
    `<div class="text-right"> 
    <form>
      <select id="jurisdictions" v-model="selectedJurisdiction" @change="jurisdictionChanged($event)">
        <option class="selected" disabled value="">Select jurisdiction</option>
        <option  v-for="(jurisdiction, key) in jurisdictions">{{jurisdiction.name}}</option>
      </select>
    </form>
    <h3 class="text-center" style="color: red" v-if="feedback">{{feedback}}</h3> 
    <table class="table table-borderless text-center" id="table">
              <thead>
                <tr>
                  <th class="text-center">Name</th>
                  <th class="text-center">Party</th>
                  <th class="text-center">Chamber</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(legislators, key) in legislators">
                  <td><a v-bind:href="legislators.openstates_url">{{legislators.name}}</a></td>
                  <td>{{legislators.party}}</td>
                  <td>{{legislators.current_role.title}}</td>
                </tr>
              </tbody>
            </table>
        <footer>
            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);"><p class="text-dark" href="#">@ 2016 TGIF | All Rights Reserved</p></div>
        </footer>
    </div>
    `,
  data() {
    return {
      feedback: null,
      legislators: [],
      jurisdictions: [],
      selectedJurisdiction: "Alabama",
    }
  },
  created() {
    retrieveLegislators(this.selectedJurisdiction, function (error, requestedLegislators) {
      if (error)
        return this.feedback = error.message

      this.legislators = requestedLegislators;
    }.bind(this))
    retrieveJurisdictions(function (error, requestedJurisdictions) {
      if (error)
        return this.feedback = error.message

      this.jurisdictions = requestedJurisdictions;
    }.bind(this))
  },
  methods: {
    jurisdictionChanged() {
      retrieveLegislators(this.selectedJurisdiction, function (error, requestedLegislators) {
        if (error)
          return this.feedback = error.message

        this.legislators = requestedLegislators;
      }.bind(this));
    },
  }
}