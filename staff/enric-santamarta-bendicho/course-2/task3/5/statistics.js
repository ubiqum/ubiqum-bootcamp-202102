var members = data.results[0].members;
var democrats = 0
var republicans = 0
var independents = 0
var percentPartyDemocrats = []
var percentPartyRepublicans = []
var percentPartyIndependents = []
var percentParty = []
var democratsLeastOftenVote = []
var Names = []
var PercentageNames2 = []
var PercentageNames3 = []
var LeastVotes = []
var LeastVotesNames = []
var MostVotes = []
var MostVotesNames = []
var tenPercent2 = 0
var MissedVotes = []
var MostMissedVotes = []
var LeastMissedVotes = []
var MostMissedVotes = []
var LeastMissedVotesNames = []
var MostMissedVotesNames = []



for (var i = 0; i < members.length; i++) {
    if (members[i].party == "D") {
        democrats += 1
        percentPartyDemocrats.push(members[i].votes_with_party_pct)
        Names.push((members[i].first_name) + ' ' + (members[i].middle_name ||= '')
            + ' ' + (members[i].last_name))
        percentParty.push(members[i].votes_with_party_pct)
        MissedVotes.push(members[i].missed_votes_pct)

    }
    if (members[i].party == "R") {
        republicans += 1
        percentPartyRepublicans.push(members[i].votes_with_party_pct)
        Names.push((members[i].first_name) + ' ' + (members[i].middle_name ||= '')
            + ' ' + (members[i].last_name))
        percentParty.push(members[i].votes_with_party_pct)
        MissedVotes.push(members[i].missed_votes_pct)
    }
    if (members[i].party == "ID") {
        independents += 1
        percentPartyIndependents.push(members[i].votes_with_party_pct)
        Names.push((members[i].first_name) + ' ' + (members[i].middle_name ||= '')
            + ' ' + (members[i].last_name))
        percentParty.push(members[i].votes_with_party_pct)
        MissedVotes.push(members[i].missed_votes_pct)
    }

}

function average(numbers) {
    var result = 0

    if (numbers.length > 0) {
        for (var i = 0; i < numbers.length; i++)
            result += numbers[i]


        result = result / numbers.length
    }

    return result
}

function tenPercent(array) {
    var tenPercent = array.length * 0.1
    return tenPercent
}

function sortLeastVotes(array) {
    array.sort(function (a, b) {
        return a[0] - b[0];
    });
}

function sortMostVotes(array) {
    array.sort(function (a, b) {
        return b[0] - a[0];
    });
}

//create 2d Array with Votes with party and Names//
function PercentageNames(Percentage, Names) {
    var newArray = []
    for (var i = 0; i < Percentage.length; i++)
        newArray.push([Percentage[i], Names[i]])


    return newArray
}


PercentageNames2 = PercentageNames(percentParty, Names)
PercentageNames3 = PercentageNames(MissedVotes, Names)


tenPercent2 = tenPercent(Names)


sortLeastVotes(PercentageNames2)
LeastVotes = PercentageNames2

for (var i = 0; i < tenPercent2; i++) {
    LeastVotesNames.push(LeastVotes[i])
}



sortMostVotes(PercentageNames2)
MostVotes = PercentageNames2

for (var i = 0; i < tenPercent2; i++) {
    MostVotesNames.push(LeastVotes[i])
}

sortLeastVotes(PercentageNames3)
LeastMissedVotes = PercentageNames3

for (var i = 0; i < tenPercent2; i++) {
    LeastMissedVotesNames.push(LeastMissedVotes[i])
}

sortMostVotes(PercentageNames3)
MostMissedVotes = PercentageNames3

for (var i = 0; i < tenPercent2; i++) {
    MostMissedVotesNames.push(MostMissedVotes[i])
}

//Votes average every party

var averageVotesDemocrats = average(percentPartyDemocrats) + '%'
var averageVotesRepublicans = average(percentPartyRepublicans) + '%'
var averageVotesIndependents = average(percentPartyIndependents) + '%'

