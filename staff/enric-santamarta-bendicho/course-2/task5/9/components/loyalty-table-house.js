Vue.component('loyaltyTableHouse', {
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

<h2>Least Loyal (Bottom 10% of Party)</h2>
<table class="table">
    <tbody>
        <tr>
            <th>NAME</th>
            <th>Number of Party Votes</th>
            <th>% Party Votes</th>
        </tr>
        <tr v-for="(index,item) in leastVotesNames">
            <td>{{leastVotesNames[item]}}</td>
            <td>{{leastVotesNumbers[item]}}</td>
            <td>{{percentParty[item]}} %</td>
        </tr>
    </tbody>
</table>

<h2>Most Loyal (Top 10% of Party)</h2>
<table class="table">
    <tbody>
        <tr>
            <th>NAME</th>
            <th>Number of Party Votes</th>
            <th>% Party Votes</th>
        </tr>
        <tr v-for="(index,item) in mostVotesNames">
            <td>{{mostVotesNames[item]}}</td>
            <td>{{mostVotesNumbers[item]}}</td>
            <td>{{percentParty2[item]}} %</td>
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
            leastVotesNames: [],
            leastVotesNumbers: [],
            percentParty: [],
            mostVotesNames: [],
            mostVotesNumbers: [],
            percentParty2: [],
       
        }
    },
    created: function () {
        //collect Data 
        retrieveMembersHouse(function (members) {

            this.members = members

            //Execute Functions
            var statistics = calculateStatistics(members)

            this.partyInfo.democrats = statistics.democrats
            this.partyInfo.republicans = statistics.republicans
            this.partyInfo.independents = statistics.independents
            this.partyInfo.averageVotesDemocrats = statistics.averageVotesDemocrats
            this.partyInfo.averageVotesRepublicans = statistics.averageVotesRepublicans
            this.partyInfo.averageVotesIndependents = statistics.averageVotesIndependents
            this.leastVotesNames = statistics.leastVotesNames
            this.leastVotesNumbers = statistics.leastVotesNumbers
            this.percentParty = statistics.percentParty
            this.mostVotesNames = statistics.mostVotesNames
            this.mostVotesNumbers = statistics.mostVotesNumbers
            this.percentParty2 = statistics.percentParty2

        }.bind(this));
    }
})