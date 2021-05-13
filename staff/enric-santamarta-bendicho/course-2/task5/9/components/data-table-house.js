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

    <select v-model="menu"  @change="select" class="filter">
    <option v-for="option in options" v:bind:value = option.value>
        {{option.name}}
    </option>
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
            parties: ['D','R','ID',''],
            state: '',
            menu:'--Select a State--', 
            options: [],
        }
    },
    methods: {
        applyFiltersHouse: function () {

            filterMembersHouse(this.parties, this.state, function (filteredMembersHouse) {
                this.filteredMembersHouse = filteredMembersHouse
            }.bind(this));
        },


        select(event) {
            event.preventDefault()


            var option = event.target.value

            if (option != '--Select a State--') {
                for (var i = 0; i < this.options.length; i++) {
                    if (this.options[i].name == option) {
                        this.state = this.options[i].division_id.slice(-2).toUpperCase()
                    }
                }
            }
            if (option == '--Select a State--') {
                this.state = ''
            }


            this.applyFiltersHouse()
        },
    },



    created: function () {
        retrieveMembersHouse(function (members) {
            this.members = members
            this.filteredMembersHouse = members
        }.bind(this));

        retrieveStates(function (options) {
            this.options = options
            this.options.unshift({ name: '--Select a State--' })
        }.bind(this))
    }

})