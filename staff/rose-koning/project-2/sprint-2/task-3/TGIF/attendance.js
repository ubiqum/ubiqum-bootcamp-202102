function makeTableAtGlance() {
  var table = document.getElementById("at-glance");
  var tbody = table.querySelector("tbody");

  for (var party in group) {
    var row = document.createElement("tr");
    var nameParty = document.createElement("td");
    nameParty.innerText = party;
    var numberOfReps = document.createElement("td");
    numberOfReps.innerText = group[party].length;
    var votesWithParty = document.createElement("td");
    votesWithParty.innerText = averages[party];

    row.append(nameParty, numberOfReps, votesWithParty);
    tbody.append(row);
  }
}

function makeTableLeastEngaged() {
  var table = document.getElementById("least-engaged");
  var tbody = table.querySelector("tbody");
  for (var i = 0; i < highestVotes.length; i++) {
    var row = document.createElement("tr");
    var name = document.createElement("td");
    name.innerText =
      highestVotes[i].first_name + " " + highestVotes[i].last_name;
    var missedVotes = document.createElement("td");
    missedVotes.innerText = highestVotes[i].missed_votes;
    var percentageMissedVotes = document.createElement("td");
    percentageMissedVotes.innerText = highestVotes[i].missed_votes_pct;
    row.append(name, missedVotes, percentageMissedVotes);
    tbody.append(row);
  }
}
function makeTableMostEngaged() {
  var table = document.getElementById("most-engaged");
  var tbody = table.querySelector("tbody");
  for (var i = 0; i < lowestVotes.length; i++) {
    var row = document.createElement("tr");
    var name = document.createElement("td");
    name.innerText = lowestVotes[i].first_name + " " + lowestVotes[i].last_name;
    var missedVotes = document.createElement("td");
    missedVotes.innerText = lowestVotes[i].missed_votes;
    var percentageMissedVotes = document.createElement("td");
    percentageMissedVotes.innerText = lowestVotes[i].missed_votes_pct;
    row.append(name, missedVotes, percentageMissedVotes);
    tbody.append(row);
  }
}

makeTableAtGlance();
makeTableLeastEngaged();
makeTableMostEngaged();
