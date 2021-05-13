Vue.component('DataTableSenate', {
    template: `
    <main>        
     Filter by party:
    <input type="checkbox" value="D" name="party" id="checkbox" v-model="parties" 
        v-on:change="applyFiltersSenate" />
    <label for="democrat">Democrat</label>
    <input type="checkbox" value="R" name="party" id="checkbox" v-model="parties" 
        v-on:change="applyFiltersSenate" />
    <label for="republicans">Republican</label>
    <input type="checkbox" value="ID" name="party" id="checkbox" v-model="parties" 
        v-on:change="applyFiltersSenate" />
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
    <tr v-for="(member,key) in filteredMembersSenate">
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
            filteredMembersSenate: [],
            parties: ['D','R','ID',''],
            state: '',
            options: [],
            menu:'--Select a State--' 

        }
    },
    methods: {
        applyFiltersSenate: function () {

            filterMembersSenate(this.parties, this.state, function (filteredMembersSenate) {
                this.filteredMembersSenate = filteredMembersSenate
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


            this.applyFiltersSenate()
        },
    },
    created: function () {
        retrieveMembersSenate(function (members) {
            this.members = members
            this.filteredMembersSenate = members
        }.bind(this));

        retrieveStates(function (options) {
            this.options = options
            this.options.unshift({ name: '--Select a State--' })
        }.bind(this))

    }

})