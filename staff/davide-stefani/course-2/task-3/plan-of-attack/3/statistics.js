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

var sum_votes_Ind = indipendents.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.votes_with_party_pct;
},initialValue);
var average_votes_Ind=sum_votes_Ind/indipendents.length;

