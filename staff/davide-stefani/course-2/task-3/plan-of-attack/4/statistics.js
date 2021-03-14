//Calculation of all members for each party

var members = data.results[0].members;

function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        var key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}

var groupedParties = groupBy(members, 'party');

var republicans = groupedParties.R;
var democrats = groupedParties.D;
var indipendents = groupedParties.ID;


//calculation of Average vote with Party

var initialValue = 0;
var sum_votes_Rep = republicans.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.votes_with_party_pct;
},initialValue);
var average_votes_Rep=sum_votes_Rep/republicans.length;

var sum_votes_Dem = democrats.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.votes_with_party_pct;
},initialValue);
var average_votes_Dem=sum_votes_Dem/democrats.length;

//make it a comment when calculate house as No indipendents
/*
var sum_votes_Ind = indipendents.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.votes_with_party_pct;
},initialValue);
var average_votes_Ind=sum_votes_Ind/indipendents.length;
*/

// Identyfy Members who least votes with their Parties

members.sort(function(a, b) {
    return a.votes_with_party_pct - b.votes_with_party_pct
})

var leastOftenVoteMembers = []

var limit = Math.round(members.length / 10)

var loop = true

for (var i = 0; loop; i++) {
    var member = members[i]

    if (i < limit) {
        leastOftenVoteMembers.push(member)
    } else if (leastOftenVoteMembers[limit - 1].votes_with_party_pct === member.votes_with_party_pct) {
        leastOftenVoteMembers.push(member)
    } else loop = false
}
false