var table = document.getElementById("house-data");

var members = data.results[0].members;

var tbody = table.querySelector("tbody");

members.forEach(function (member) {

  var row = document.createElement('tr');

  var fullname = document.createElement('td');
  var hyperLink = document.createElement("a");
  hyperLink.setAttribute("href", member.url);
  hyperLink.setAttribute("target", "_blank");
  hyperLink.innerText = (member.first_name) + ' ' + (member.middle_name ||= '') + ' ' + (member.last_name);
  fullname.append(hyperLink);

  var party = document.createElement('td');
  party.innerText = member.party;

  var state = document.createElement('td');
  state.innerText = member.state;

  var seniority = document.createElement('td');
  seniority.innerText = member.seniority;

  var votepercentage = document.createElement('td');
  votepercentage.innerText = member.votes_with_party_pct + " %";

  row.append(fullname, party, state, seniority, votepercentage)

  table.append(row)

  tbody.append(row);

  

})
