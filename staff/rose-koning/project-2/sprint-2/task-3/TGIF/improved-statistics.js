var members = data.results[0].members;
var party=[]
for (var i = 0 ; i< members.length; i++){
    party.push(members[i].party);
}
var membersPerParty= {};
party.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });