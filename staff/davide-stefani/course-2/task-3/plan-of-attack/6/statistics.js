//Calculation of all members for each party

var members = data.results[0].members;

var groupedParties = members.reduce((r, a) => {
    r[a.party] = [...r[a.party] || [], a];
    return r;
   }, {});

var republicans = groupedParties.R;
var democrats = groupedParties.D;
var indipendents 
if (groupedParties.ID) {
    indipendents = groupedParties.ID
} else if (groupedParties.ID === undefined) { indipendents = 0 };

//calculation of Average vote with Party

var initialValue = 0;
var sum_votes_Rep = republicans.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.votes_with_party_pct;
}, initialValue);
var average_votes_Rep = Math.round((sum_votes_Rep / republicans.length)*100)/100;

var sum_votes_Dem = democrats.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.votes_with_party_pct;
}, initialValue);
var average_votes_Dem = Math.round((sum_votes_Dem / democrats.length)*100)/100;

var sum_votes_Ind
if (indipendents) {
    sum_votes_Ind = indipendents.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.votes_with_party_pct;
    }, initialValue);
} else {sum_votes_Ind = 0}

var average_votes_Ind
if (sum_votes_Ind) {
    average_votes_Ind = Math.round((sum_votes_Ind / indipendents.length)*100)/100;
} else { average_votes_Ind = 0 }

var average_votes_parties = {R:[],D:[],ID:[]};
average_votes_parties.R.push(average_votes_Rep)
average_votes_parties.D.push(average_votes_Dem)
average_votes_parties.ID.push(average_votes_Ind)
// Identyfy Members who least votes with their Parties (Least Loyal)

var sortedLeastVotes = members.sort(function (a, b) {
    return a.votes_with_party_pct - b.votes_with_party_pct
})

var leastOftenVoteMembers = []

var limit = Math.round(sortedLeastVotes.length / 10)

var loop = true

for (var i = 0; loop; i++) {
    var sortedLeastVote = sortedLeastVotes[i]

    if (i < limit) {
        leastOftenVoteMembers.push(sortedLeastVote)
    } else if (leastOftenVoteMembers[limit - 1].votes_with_party_pct === sortedLeastVote.votes_with_party_pct) {
        leastOftenVoteMembers.push(sortedLeastVote)
    } else loop = false
}



// Identyfy Members who most votes with their Parties (Most Loyal)

var sortedMostVotes = members.sort(function (a, b) {
    return b.votes_with_party_pct - a.votes_with_party_pct
})

var mostOftenVoteMembers = []

var limit = Math.round(sortedMostVotes.length / 10)

var loop = true

for (var i = 0; loop; i++) {
    var sortedMostVote = sortedMostVotes[i]

    if (i < limit) {
        mostOftenVoteMembers.push(sortedMostVote)
    } else if (mostOftenVoteMembers[limit - 1].votes_with_party_pct === sortedMostVote.votes_with_party_pct) {
        mostOftenVoteMembers.push(sortedMostVote)
    } else loop = false
}



//lowest 10% votes (Most Engaged Members)

var sortedLowestVotes = members.sort(function (a, b) {
    return a.missed_votes_pct - b.missed_votes_pct
})
var lowMissedVotes = []

var limit = Math.round(sortedLowestVotes.length / 10)

var loop = true

for (var i = 0; loop; i++) {
    var sortedLowestVote = sortedLowestVotes[i]

    if (i < limit) {
        lowMissedVotes.push(sortedLowestVote)
    } else if (lowMissedVotes[limit - 1].missed_votes_pct === sortedLowestVote.missed_votes_pct) {
        lowMissedVotes.push(sortedLowestVote)
    } else loop = false
}



//highest 10% votes (Least Engaged Members)
var sortedHighestVotes = members.sort(function (a, b) {
    return b.missed_votes_pct - a.missed_votes_pct
})
var highMissedVotes = []

var limit = Math.round(sortedHighestVotes.length / 10)

var loop = true

for (var i = 0; loop; i++) {
    var sortedHighestVote = sortedHighestVotes[i]

    if (i < limit) {
        highMissedVotes.push(sortedHighestVote)
    } else if (highMissedVotes[limit - 1].missed_votes_pct === sortedHighestVote.missed_votes_pct) {
        highMissedVotes.push(sortedHighestVote)
    } else loop = false
}


