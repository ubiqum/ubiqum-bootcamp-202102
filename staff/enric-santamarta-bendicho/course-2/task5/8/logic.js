//retrieveStates cachedFetch
//RetrieveStates
function retrieveStatesJurisdiction(callback) {

    cachedFetch('https://v3.openstates.org/jurisdictions?classification=state&page=1&per_page=52', {
        headers: {
            'x-api-key': '5b80bb17-a10b-49c8-9cd1-1edfd4c5db0a'
        }
    })
        .then(r => r.json())

        .then(function (data) {
            callback(data.results)
        })
}
//function to compile variables

//Jurisdiction Data
function retrieveMembersByJurisdiction(state, callback) {

    cachedFetch('https://v3.openstates.org/people?jurisdiction=' + state + '&page=1&per_page=50', {
        headers: {
            'x-api-key': '5b80bb17-a10b-49c8-9cd1-1edfd4c5db0a'
        }
    })
        .then(r => r.json())

        .then(function (data) {
            callback(data.results)
        })
}


//Senate Data
function retrieveMembersSenate(callback) {
    fetch("https://api.propublica.org/congress/v1/113/senate/members.json",
        {
            headers: {
                "X-API-Key": "I0REsGy5W1Niu7TP6VKCAF8dVD68NILvYaucpFhY"
            }
        }
    )
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            callback(data.results[0].members);

        })
}

function filterMembersSenate(parties, state, callback) {
    retrieveMembersSenate(function (members) {
        var filteredMembersSenate = members

        if (parties.length) {
            filteredMembersSenate = filteredMembersSenate.filter(
                function (member) {
                    return parties.includes(member.party);
                }
            );
        }

        if (state) {
            filteredMembersSenate = filteredMembersSenate.filter(
                function (member) {
                    return member.state === state;
                }
            );
        }

        callback(filteredMembersSenate);
    });
}
//House Data
function retrieveMembersHouse(callback) {
    fetch("https://api.propublica.org/congress/v1/113/house/members.json",
        {
            headers: {
                "X-API-Key": "I0REsGy5W1Niu7TP6VKCAF8dVD68NILvYaucpFhY"
            }
        }
    )
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            callback(data.results[0].members);

        })
}

function filterMembersHouse(parties, state, callback) {
    retrieveMembersHouse(function (members) {
        var filteredMembersHouse = members

        if (parties.length) {
            filteredMembersHouse = filteredMembersHouse.filter(
                function (member) {
                    return parties.includes(member.party);
                }
            );
        }

        if (state) {
            filteredMembersHouse = filteredMembersHouse.filter(
                function (member) {
                    return member.state === state;
                }
            );
        }

        callback(filteredMembersHouse);
    });
}








function calculateStatistics(members) {

    //collectData Statistics
    var averageVotesRepublicans = 0
    var averageVotesDemocrats = 0
    var averageVotesIndependents = 0
    //Members of every Party
    var democrats = 0
    var republicans = 0
    var independents = 0
    //Percent Votes with party
    var percentPartyDemocrats = []
    var percentPartyRepublicans = []
    var percentPartyIndependents = []
    //Party Votes of every member
    var numberVotes = []
    //totallity of votes of every Party
    var democratsPercentParty = 0
    var republicansPercentParty = 0
    var independentsPercentParty = 0
    //Percentage of party votes from every member
    var percentParty = []
    var percentParty2 = []
    var party = []
    var names = []
    //array of members with least Votes
    var leastVotes = []
    var leastVotesNumbers = []
    var leastVotesNames = []
    //array of members with mostvotes
    var mostVotes = []
    var mostVotesNumbers = []
    var mostVotesNames = []
    //array of missed Votes of every member
    var missedVotes = []
    //array with least missed Votes
    var leastMissedVotes = []
    var leastMissedVotes2 = []
    var leastMissedVotesNames = []
    //array with most missed Votes
    var mostMissedVotes = []
    var mostMissedVotes2 = []
    var mostMissedVotesNames = []
    //percentage of missed votes in party
    var percentPartyMissed = []
    var percentPartyMissed2 = []

    //use variables inside functions


    function groupStatisticsByMembers(members) {
        for (var i = 0; i < members.length; i++) {
            if (members[i].party == "D") {
                democrats += 1
                percentPartyDemocrats.push(members[i].votes_with_party_pct)
                names.push((members[i].first_name) + ' ' + (members[i].middle_name ||= '')
                    + ' ' + (members[i].last_name))
                party.push(members[i].party)
                democratsPercentParty += (members[i].total_votes - members[i].missed_votes)
                missedVotes.push(members[i].missed_votes)
                numberVotes.push(members[i].total_votes - members[i].missed_votes)
            }

            if (members[i].party == "R") {
                republicans += 1
                percentPartyRepublicans.push(members[i].votes_with_party_pct)
                names.push((members[i].first_name) + ' ' + (members[i].middle_name ||= '')
                    + ' ' + (members[i].last_name))
                party.push(members[i].party)
                republicansPercentParty += (members[i].total_votes - members[i].missed_votes)
                missedVotes.push(members[i].missed_votes)
                numberVotes.push(members[i].total_votes - members[i].missed_votes)
            }

            if (members[i].party == "ID") {
                independents += 1
                percentPartyIndependents.push(members[i].votes_with_party_pct)
                names.push((members[i].first_name) + ' ' + (members[i].middle_name ||= '')
                    + ' ' + (members[i].last_name))
                party.push(members[i].party)
                independentsPercentParty += (members[i].total_votes - members[i].missed_votes)
                missedVotes.push(members[i].missed_votes)
                numberVotes.push(members[i].total_votes - members[i].missed_votes)
            }
        }
    }

    //order Data from more to less
    function sortLeastVotes(array) {
        array.sort(function (a, b) {
            return a[0] - b[0];
        });
    }
    //order Data from less to more
    function sortMostVotes(array) {
        array.sort(function (a, b) {
            return b[0] - a[0];
        });
    }

    //create 3d Array with Votes,Names and Party//
    function percentageNames(votes, names, party) {
        var newArray = []
        for (var i = 0; i < votes.length; i++)
            newArray.push([votes[i], names[i], party[i]])


        return newArray
    }

    //prepare Data to be displayed
    function prepareLeastVotesPercentages(tenPercent2) {
        for (var i = 0; i < tenPercent2; i++) {
            leastVotesNumbers.push(leastVotes[i][0])
            leastVotesNames.push(leastVotes[i][1])

            if (leastVotes[i][2] == "D") {
                percentParty.push((leastVotes[i][0] * 100 / democratsPercentParty).toFixed(4))
            }

            if (leastVotes[i][2] == "R") {
                percentParty.push((leastVotes[i][0] * 100 / republicansPercentParty).toFixed(4))
            }

            if (leastVotes[i][2] == "ID") {
                percentParty.push((leastVotes[i][0] * 100 / independentsPercentParty).toFixed(4))
            }
        }

    }


    //prepare Data to be displayed
    function prepareMostVotesPercentage(tenPercent2) {
        for (var i = 0; i < tenPercent2; i++) {
            mostVotesNumbers.push(mostVotes[i][0])
            mostVotesNames.push(mostVotes[i][1])

            if (mostVotes[i][2] == "D") {
                percentParty2.push((mostVotes[i][0] * 100 / democratsPercentParty).toFixed(4))

            }

            if (mostVotes[i][2] == "R") {

                percentParty2.push((mostVotes[i][0] * 100 / republicansPercentParty).toFixed(4))
            }

            if (mostVotes[i][2] == "ID") {

                percentParty2.push((mostVotes[i][0] * 100 / independentsPercentParty).toFixed(4))
            }
        }
    }


    //prepare Data to be displayed
    function prepareMostEngagedPercentage(tenPercent2) {
        for (var i = 0; i < tenPercent2; i++) {
            leastMissedVotesNames.push(leastMissedVotes[i][1])
            leastMissedVotes2.push(leastMissedVotes[i][0])

            if (mostVotes[i][2] == "D") {
                percentPartyMissed.push((leastMissedVotes[i][0] * 100 / democratsPercentParty).toFixed(4))

            }

            if (mostVotes[i][2] == "R") {

                percentPartyMissed.push((leastMissedVotes[i][0] * 100 / republicansPercentParty).toFixed(4))
            }

            if (mostVotes[i][2] == "ID") {

                percentPartyMissed.push((leastMissedVotes[i][0] * 100 / independentsPercentParty).toFixed(4))
            }
        }
    }

    //prepare Data to be displayed
    function prepareLeastEngagedPercentage(tenPercent2) {
        for (var i = 0; i < tenPercent2; i++) {
            mostMissedVotesNames.push(mostMissedVotes[i][1])
            mostMissedVotes2.push(mostMissedVotes[i][0])

            if (mostVotes[i][2] == "D") {
                percentPartyMissed2.push((mostMissedVotes[i][0] * 100 / democratsPercentParty).toFixed(4))

            }

            if (mostVotes[i][2] == "R") {

                percentPartyMissed2.push((mostMissedVotes[i][0] * 100 / republicansPercentParty).toFixed(4))
            }

            if (mostVotes[i][2] == "ID") {

                percentPartyMissed2.push((mostMissedVotes[i][0] * 100 / independentsPercentParty).toFixed(4))
            }
        }
    }


    //Execute Functions
    groupStatisticsByMembers(members)


    //average of percentage of Votes of every Party
    averageVotesDemocrats = (average(percentPartyDemocrats)).toFixed(2)
    averageVotesRepublicans = (average(percentPartyRepublicans)).toFixed(2)
    averageVotesIndependents = (average(percentPartyIndependents)).toFixed(2)
    //create a 3d array
    var percentageNamesNumberVotes = percentageNames(numberVotes, names, party)
    var percentageNamesMissedVotes = percentageNames(missedVotes, names, party)
    var tenPercent2 = tenPercent(names)
    //order the array display it
    sortLeastVotes(percentageNamesNumberVotes)
    leastVotes = percentageNamesNumberVotes
    prepareLeastVotesPercentages(tenPercent2)


    sortMostVotes(percentageNamesNumberVotes)
    mostVotes = percentageNamesNumberVotes
    prepareMostVotesPercentage(tenPercent2)

    sortLeastVotes(percentageNamesMissedVotes)
    leastMissedVotes = percentageNamesMissedVotes
    prepareMostEngagedPercentage(tenPercent2)

    sortMostVotes(percentageNamesMissedVotes)
    mostMissedVotes = percentageNamesMissedVotes
    prepareLeastEngagedPercentage(tenPercent2)

    return {
        democrats,
        republicans,
        independents,
        averageVotesDemocrats,
        averageVotesIndependents,
        averageVotesRepublicans,
        percentageNamesNumberVotes,
        percentageNamesMissedVotes,
        tenPercent2,
        leastVotes,
        mostVotes,
        leastMissedVotesNames,
        mostMissedVotes
    }

}