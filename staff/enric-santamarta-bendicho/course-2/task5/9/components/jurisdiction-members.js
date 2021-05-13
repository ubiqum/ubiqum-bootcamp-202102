Vue.component('jurisdictionMembers', {
    template:
        `
    <main>
    <select v-model="state"  @change="select" class="filter">
    <option v-for="option in options" v-bind:value="option.name"> 
       {{option.name}}
    </option>
    </select>

    <div v-if="results">
        <h2>Jurisdiction</h2>
        <table class="table table-striped" v-if="results.length">
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>PARTY</th>
                    <th>CHAMBER</th>
                </tr>
            </thead>
            <tbody id="tableMembers">
                <tr v-for="result in results">
                    <td><a v-bind:href="result.openstates_url">{{result.name}}</a></td>
                    <td>{{result.party}}</td>
                    <td>{{result.current_role.title}}</td>
                </tr>
            </tbody>
        </table>

    </div>
    </div>
    </main>`, //solicitar estados de la api
    data:
        function () {
            return {
                results: [],
                state: 'Arkansas',
                options: []
            }
        },
    methods: {
        refreshMembersTable: function () {

            retrieveMembersByJurisdiction(this.state, function (results) {
                this.results = results
            }.bind(this))
        },
        select(event) {
            event.preventDefault()

            this.state = event.target.value
            //to do activates through component
            this.refreshMembersTable()
        }
    },
    created: function () {
        retrieveStates(function (options) {
            this.options = options
        }.bind(this))

        this.refreshMembersTable()
    }
})