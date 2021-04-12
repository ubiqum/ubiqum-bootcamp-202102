function retrieveMembers(callback) {
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


//collect Data 
retrieveMembers(function (members) {
    var members = members
    function groupStatisticsByMembers() {

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
    function prepareLeastVotesPercentages() {
        for (var i = 0; i < tenPercent2; i++) {
            leastVotesNumbers.push(leastVotes[i][0])
            leastVotesNames.push(leastVotes[i][1])

            if (leastVotes[i][2] == "D") {
                percentParty.push(leastVotes[i][0] * 100 / democratsPercentParty)
            }

            if (leastVotes[i][2] == "R") {
                percentParty.push(leastVotes[i][0] * 100 / republicansPercentParty)
            }                       

            if (leastVotes[i][2] == "ID") {
                percentParty.push(leastVotes[i][0] * 100 / independentsPercentParty)
            }
        }

    }


    //prepare Data to be displayed
    function prepareMostVotesPercentage() {
        for (var i = 0; i < tenPercent2; i++) {
            mostVotesNumbers.push(mostVotes[i][0])
            mostVotesNames.push(mostVotes[i][1])

            if (mostVotes[i][2] == "D") {
                percentParty2.push(mostVotes[i][0] * 100 / democratsPercentParty)

            }

            if (mostVotes[i][2] == "R") {

                percentParty2.push(mostVotes[i][0] * 100 / republicansPercentParty)
            }

            if (mostVotes[i][2] == "ID") {

                percentParty2.push(mostVotes[i][0] * 100 / independentsPercentParty)
            }
        }
    }


    //prepare Data to be displayed
    function prepareMostEngagedPercentage() {
        for (var i = 0; i < tenPercent2; i++) {
            leastMissedVotesNames.push(leastMissedVotes[i][1])
            leastMissedVotes2.push(leastMissedVotes[i][0])

            if (mostVotes[i][2] == "D") {
                percentPartyMissed.push(leastMissedVotes[i][0] * 100 / democratsPercentParty)

            }

            if (mostVotes[i][2] == "R") {

                percentPartyMissed.push(leastMissedVotes[i][0] * 100 / republicansPercentParty)
            }

            if (mostVotes[i][2] == "ID") {

                percentPartyMissed.push(leastMissedVotes[i][0] * 100 / independentsPercentParty)
            }
        }
    }

    //prepare Data to be displayed
    function prepareLeastEngagedPercentage() {
        for (var i = 0; i < tenPercent2; i++) {
            mostMissedVotesNames.push(mostMissedVotes[i][1])
            mostMissedVotes2.push(mostMissedVotes[i][0])

            if (mostVotes[i][2] == "D") {
                percentPartyMissed2.push(mostMissedVotes[i][0] * 100 / democratsPercentParty)

            }

            if (mostVotes[i][2] == "R") {

                percentPartyMissed2.push(mostMissedVotes[i][0] * 100 / republicansPercentParty)
            }

            if (mostVotes[i][2] == "ID") {

                percentPartyMissed2.push(mostMissedVotes[i][0] * 100 / independentsPercentParty)
            }
        }
    }

    //Execute Functions
    groupStatisticsByMembers()


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
    prepareLeastVotesPercentages()


    sortMostVotes(percentageNamesNumberVotes)
    mostVotes = percentageNamesNumberVotes
    prepareMostVotesPercentage()

    sortLeastVotes(percentageNamesMissedVotes)
    leastMissedVotes = percentageNamesMissedVotes
    prepareMostEngagedPercentage()

    sortMostVotes(percentageNamesMissedVotes)
    mostMissedVotes = percentageNamesMissedVotes
    prepareLeastEngagedPercentage()


});


