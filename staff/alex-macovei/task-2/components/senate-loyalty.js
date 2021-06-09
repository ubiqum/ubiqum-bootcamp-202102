const SenateLoyalty=  {
    template: /*html*/
    `<div>
        <footer>
            <div class="row">
            <div class="col-sm-6">
                <h2>Party Loyalty</h2>
                <p>Those who consider themselves to be strong partisans, strong Democrats and strong Republicans
                    respectively,
                    tend to be the most faithful in voting for their party's nominee for office and legislation that
                    backs
                    their
                    party's agenda. </p>
            </div>
            <div class="col-sm-6 text-right">
                <h2>Senate at a glance</h2>
                <table class="table text-center">
                    <thead>
                        <tr>
                            <th class="text-center">Party</th>
                            <th class="text-center">Number of Reps</th>
                            <th class="text-center">% Voted with Party</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr id="trDemocrat">
                        <td>Democrat</td>
                        <td>{{numDemocrats}}</td>
                        <td>{{democratsVotesParty}}</td>
                    </tr>
                    <tr id="trRepublican">
                        <td>Republican</td>
                        <td>{{numRepublicans}}</td>
                        <td>{{republicansVotesParty}}</td>
                    </tr>
                    <tr id="trIndependent">
                        <td>Independent</td>
                        <td>{{numIndependents}}</td>
                    </tr>
                    <tr id="trTotal">
                        <td>Total</td>
                        <td>{{numDemocrats+numRepublicans+numIndependents}}</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <h2>Least Loyal (Bottom 10% of Party)</h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Number Party Votes</th>
                                <th>% Party Votes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(member, key) in leastLoyal">
                                <td>{{member.first_name}} {{member.last_name}}</td>
                                <td>{{Math.round(member.total_votes / (100 / member.votes_with_party_pct))}}</td>
                                <td>{{member.votes_with_party_pct}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-sm-6">
                    <h2>Most Loyal (Top 10% of Party)</h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Number Party Votes</th>
                                <th>% Party Votes</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(member, key) in mostLoyal">
                                <td>{{member.first_name}} {{member.last_name}}</td>
                                <td>{{Math.round(member.total_votes / (100 / member.votes_with_party_pct))}}</td>
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
            allMembers: [],
            mostLoyal: [],
            leastLoyal: [],
            numDemocrats: 0,
            numRepublicans: 0,
            numIndependents: 0,
            democratsVotesParty: "",
            republicansVotesParty: "",
        }
    },
    created() {
        retrieveSenateMembers(function (members) {
            this.allMembers = members;
            this.states = retrieveStates(members);
            this.numDemocrats = retrieveMembersByParties(this.allMembers, ["D"]).length,
            this.numRepublicans = retrieveMembersByParties(this.allMembers, ["R"]).length,
            this.numIndependents = retrieveMembersByParties(this.allMembers, ["ID"]).length,
            this.democratsVotesParty = Math.round(calculateAverageVotes(retrieveMembersByParties(this.allMembers, ["D"]))) + "%",
            this.republicansVotesParty = Math.round(calculateAverageVotes(retrieveMembersByParties(this.allMembers, ["R"]))) + "%",
            this.leastLoyal = getTenPercent(sortMemberPercentage(this.allMembers)),
            this.mostLoyal = getTenPercent(sortMemberPercentageOposite(this.allMembers))
        }.bind(this))

    },
}