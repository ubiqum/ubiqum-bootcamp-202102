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

    <select v-model="state"  @change="select" class="filter">
    <option v-for="option in options" v:bind:value = initials.value>
        {{option.value}}
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
            parties: [],
            state: '',
            options: [
                { text: '--Choose a State--', value: '' },
                { text: 'Arkansas', value: 'AR' },
                { text: 'Arizona', value: 'AZ' },
                { text: 'Alabama', value: 'AL' },
                { text: 'California', value: 'CA' },
                { text: 'Colorado', value: 'CO' },
                { text: 'Connecticut', value: 'CT' },
                { text: 'Delaware', value: 'DE' },
                { text: 'Florida', value: 'FL' },
                { text: 'Georgia', value: 'GA' },
                { text: 'Idaho', value: 'ID' },
                { text: 'Hawaii', value: 'HI' },
                { text: 'Illinois', value: 'IL' },
                { text: 'Indiana', value: 'IN' },
                { text: 'Iowa', value: 'IA' },
                { text: 'Kansas', value: 'KS' },
                { text: 'Kentucky', value: 'KY' },
                { text: 'Louisiana', value: 'LA' },
                { text: 'Maine', value: 'ME' },
                { text: 'Maryland', value: 'MD' },
                { text: 'Massachusetts', value: 'MA' },
                { text: 'Michigan', value: 'MI' },
                { text: 'Minnesota', value: 'MN' },
                { text: 'Mississippi', value: 'MS' },
                { text: 'Missouri', value: 'MS' },
                { text: 'Montana', value: 'MO' },
                { text: 'Nebraska', value: 'NE' },
                { text: 'Nevada', value: 'NV' },
                { text: 'New Hampshire', value: 'NH' },
                { text: 'New Jersey', value: 'NJ' },
                { text: 'New Mexico', value: 'NM' },
                { text: 'New York', value: 'NY' },
                { text: 'North Carolina', value: 'NC' },
                { text: 'North Dakota', value: 'ND' },
                { text: 'Ohio', value: 'OH' },
                { text: 'Oklahoma', value: 'OK' },
                { text: 'Oregon', value: 'OR' },
                { text: 'Pennsylvania', value: 'PA' },
                { text: 'Rhode Island', value: 'RI' },
                { text: 'South Carolina', value: 'SC' },
                { text: 'South Dakota', value: 'SD' },
                { text: 'Tennessee', value: 'TN' },
                { text: 'Texas', value: 'TX' },
                { text: 'Utah', value: 'UT' },
                { text: 'Vermont', value: 'VT' },
                { text: 'Virginia', value: 'VA' },
                { text: 'Washington', value: 'WA' },
                { text: 'West Virginia', value: 'WV' },
                { text: 'Wisconsin', value: 'WI' },
                { text: 'Wyoming', value: 'WY' }
            ],
            initials:[{},
            {value: 'AR'}]
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

            this.state = event.target.value

            this.applyFiltersSenate()
        },
    },
    created: function () {
        retrieveMembersSenate(function (members) {
            this.members = members
            this.filteredMembersSenate = members
        }.bind(this));
    }

})