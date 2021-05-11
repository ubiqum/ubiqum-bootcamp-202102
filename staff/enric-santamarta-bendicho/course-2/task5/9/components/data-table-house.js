Vue.component('DataTableHouse', {
    template: `
    <main>        
     Filter by party:
    <input type="checkbox" value="D" name="party" id="checkbox" v-model="parties" 
        v-on:change="applyFiltersHouse" />
    <label for="democrat">Democrat</label>
    <input type="checkbox" value="R" name="party" id="checkbox" v-model="parties" 
        v-on:change="applyFiltersHouse" />
    <label for="republicans">Republican</label>
    <input type="checkbox" value="ID" name="party" id="checkbox" v-model="parties" 
        v-on:change="applyFiltersHouse" />
    <label for="independents">Independent</label>

   
    <select id="state" class="filter" v-model="state"  @change="applyFiltersHouse">
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
    
    <table class="table">
    <thead>
    <tr>
        <th>SENATOR</th>
        <th>PARTY AFFILIATION</th>
        <th>STATE</th>
        <th>SENIORITY</th>
        <th>PERCENTAGE VOTES WITH PARTY</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(member,key) in filteredMembersHouse">
        <td><a v-bind:href="member.url">{{member.first_name}} {{member.middle_name}}
        {{member.last_name}}</a></td>
        <td>{{member.party}}</td>
        <td>{{member.state}}</td>
        <td>{{member.seniority}}</td>
        <td>{{member.votes_with_party_pct}} %</td>
    </tr>
    </tbody>
</table>
</main>`,
    data: function () {
        return {
            members: [],
            filteredMembersHouse: [],
            parties: [],
            state: null,
        }
    },
    methods: {
        applyFiltersHouse: function () {
            filterMembersHouse(this.parties, this.state, function (filteredMembersHouse) {
                this.filteredMembersHouse = filteredMembersHouse
            }.bind(this));
        }
    },
    created: function () {
        retrieveMembersHouse(function (members) {
            this.members = members
            this.filteredMembersHouse = members
        }.bind(this));
    }

})