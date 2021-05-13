Vue.component('houseAttendanceTable', {
    template: ` 
    <main>
    <table class="table">
    <tbody>
        <tr>
            <th>PARTY</th>
            <th>Number of Representants</th>
            <th>Percentage of votes with Party</th>
        </tr>
        <tr>
            <td>Republicans</td>
            <td>{{partyInfo.republicans}}</td>
            <td>{{partyInfo.averageVotesRepublicans}}%</td>
        </tr>
        <tr>
            <td>Democrats</td>
            <td>{{partyInfo.democrats}}</td>
            <td>{{partyInfo.averageVotesDemocrats}} %</td>
        </tr>
        <tr>
            <td>Independents</td>
            <td>{{partyInfo.independents}}</td>
            <td>{{partyInfo.averageVotesIndependents}} %</td>
        </tr>
    </tbody>
</table>

<h2>Least Engaged (Bottom 10% Attendance)</h2>
<table class="table">
    <tbody>
        <tr>
            <th>NAME</th>
            <th>Number of Missed Votes</th>
            <th>% Party Missed Votes</th>
        </tr>
        <tr v-for="(index,item) in  mostMissedVotesNames">
            <td>{{mostMissedVotesNames[item]}}</td>
            <td>{{mostMissedVotes2[item]}}</td>
            <td>{{percentPartyMissed2[item]}} %</td>
        </tr>
    </tbody>

</table>

<h2>Most Engaged (Top 10% Attendance)</h2>
<table class="table">
    <tbody>
        <tr>
            <th>NAME</th>
            <th>Number of Missed Votes</th>
            <th>% Party Missed Votes</th>
        </tr>
        <tr v-for="(index,item) in leastMissedVotesNames">
            <td>{{leastMissedVotesNames[item]}}</td>
            <td>{{leastMissedVotes2[item]}}</td>
            <td>{{percentPartyMissed[item]}} %</td>
        </tr>
    </tbody>
</table>
</main>`,
    data: function () {
        return {
            partyInfo: {
                republicans: 0,
                democrats: 0,
                independents: 0,
                averageVotesRepublicans: 0,
                averageVotesDemocrats: 0,
                averageVotesIndependents: 0
            },
            mostMissedVotes2: [],
            mostMissedVotesNames: [],
            percentPartyMissed2: [],
            leastMissedVotes2: [],
            leastMissedVotesNames: [],
            percentPartyMissed: []
        }
    },
    created: function () {
        //collect Data 
        retrieveMembersHouse(function (members) {

            this.members = members

            //Execute Functions
            var statistics = claculateStatistics(members)

            this.partyInfo.democrats = statistics.democrats
            this.partyInfo.republicans = statistics.republicans
            this.partyInfo.independents = statistics.independents
            this.partyInfo.averageVotesDemocrats = statistics.averageVotesDemocrats
            this.partyInfo.averageVotesRepublicans = statistics.averageVotesRepublicans
            this.partyInfo.averageVotesIndependents = statistics.averageVotesIndependents
            this.mostMissedVotes2 = statistics.mostMissedVotes2
            this.mostMissedVotesNames = statistics.mostMissedVotesNames
            this.percentPartyMissed2 = statistics.percentParty2
            this.leastMissedVotes2 = statistics.leastMissedVotes2
            this.leastMissedVotesNames = statistics.leastMissedVotesNames
            this.percentPartyMissed = statistics.percentPartyMissed

        }.bind(this));
    }
})