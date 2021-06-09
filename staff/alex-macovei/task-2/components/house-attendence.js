const HouseAttendence = {
    template: /*html*/
        `<div>
        <footer>
        <div class="row">
            <div class="col-sm-6">
                <h2>Attendance</h2>
                <p>The Constitution specifies that a majority of members constitutes a quorum to do business in each
                    house.
                    Representatives and senators rarely force the presence of a quorum by demanding quorum calls;
                    thus,
                    in most
                    cases, debates continue even if a majority is not present.</p>

                <p>The Senate uses roll-call votes; a clerk calls out the names of all the senators, each senator
                    stating "aye"
                    or "no" when his or her name is announced. The House reserves roll-call votes for the most
                    formal
                    matters,
                    as a roll-call of all 435 representatives takes quite some time; normally, members vote by
                    electronic
                    device. In the case of a tie, the motion in question fails. In the Senate, the Vice President
                    may
                    (if
                    present) cast the tiebreaking vote.</p>
            </div>
            <div class="col-sm-6 text-right">
                <h2>House at a glance</h2>
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
                <h2>Least Engaged (Bottom 10% Attendance)</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number of Missed Votes</th>
                            <th>% Missed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(member, key) in displayedMembersLeast">
                            <td>{{member.first_name}} {{member.last_name}}</td>
                            <td>{{member.missed_votes}}</td>
                            <td>{{member.missed_votes_pct}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-sm-6">
                <h2>Most Engaged (Top 10% Attendance)</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number of Missed Votes</th>
                            <th>% Missed</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(member, key) in displayedMembersMost">
                    <td>{{member.first_name}} {{member.last_name}}</td>
                    <td>{{member.missed_votes}}</td>
                    <td>{{member.missed_votes_pct}}</td>
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
            displayedMembersMost: [],
            displayedMembersLeast: [],
            numDemocrats: 0,
            numRepublicans: 0,
            numIndependents: 0,
            democratsVotesParty: "",
            republicansVotesParty: "",
        }
    },
    created() {
        retrieveHouseMembers(function (members) {
            this.allMembers = members;
            this.states = retrieveStates(members);
            this.numDemocrats = retrieveMembersByParties(this.allMembers, ["D"]).length,
            this.numRepublicans = retrieveMembersByParties(this.allMembers, ["R"]).length,
            this.numIndependents = retrieveMembersByParties(this.allMembers, ["ID"]).length,
            this.democratsVotesParty = Math.round(calculateAverageVotes(retrieveMembersByParties(this.allMembers, ["D"]))) + "%",
            this.republicansVotesParty = Math.round(calculateAverageVotes(retrieveMembersByParties(this.allMembers, ["R"]))) + "%",
            this.displayedMembersMost = getTenPercent(sortMemberByMissedVotes(this.allMembers))
            this.displayedMembersLeast = getTenPercent(sortMemberByMissedVotesOposite(this.allMembers))
        }.bind(this))

    },
}