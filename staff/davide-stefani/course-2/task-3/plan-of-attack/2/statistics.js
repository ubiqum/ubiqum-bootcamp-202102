//count all members for each party

var members = data.results[0].members;
var party = []

for (var i = 0; i < members.length; i++) {
    party.push(members[i].party);
}
var count = {};
party.forEach(function (i) { count[i] = (count[i] || 0) + 1; });
console.log(count);
