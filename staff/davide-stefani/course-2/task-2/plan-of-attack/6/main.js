var table = document.getElementById("senate-data");

var members=data.results[0].members;


members.forEach(function(member){
var row = document.createElement('tr');

var fullname = document.createElement('td');
fullname.innerText = (member.first_name)+' '+(member.middle_name ||='')+' '+(member.last_name);

var party = document.createElement('td');
party.innerText = member.party;

var state = document.createElement('td');
state.innerText = member.state;

var seniority = document.createElement('td');
seniority.innerText = member.seniority;

var votepercentage = document.createElement('td');
votepercentage.innerText = member.votes_with_party_pct +" %";

row.append (fullname, party, state, seniority, votepercentage)

table.append (row)

})