function makeTableAtGlance() {
    var table = document.getElementById("glance-table");
    var tbody = table.querySelector("tbody");
    for (party in groupedParties) {

        var row = document.createElement("tr");
        var partyName = document.createElement("td");
        partyName.innerText = party;
        var partyNumbers = document.createElement("td");
        partyNumbers.innerText = (groupedParties[party].length);
        var averagePerc = document.createElement("td");
        averagePerc.innerText = average_votes_parties[party] + " %";

        row.append(partyName, partyNumbers, averagePerc);
        tbody.append(row);
    }
}

function makeTableMostEngaged() {
    var table = document.getElementById("most-engaged-table");
    var tbody = table.querySelector("tbody");
    for (var i = 0; i < lowMissedVotes.length; i++) {
        var row = document.createElement("tr");
        var name = document.createElement("td");
        name.innerText = lowMissedVotes[i].first_name + " " + (lowMissedVotes[i].middle_name ||= "") + " " + lowMissedVotes[i].last_name;
        var missedVotes = document.createElement("td");
        missedVotes.innerText = lowMissedVotes[i].missed_votes;
        var percentageMissedVotes = document.createElement("td");
        percentageMissedVotes.innerText = lowMissedVotes[i].missed_votes_pct + " %";
        row.append(name, missedVotes, percentageMissedVotes);
        tbody.append(row);
    }
}

function makeTableLeastEngaged() {
    var table = document.getElementById("least-engaged-table");
    var tbody = table.querySelector("tbody");
    for (var i = 0; i < highMissedVotes.length; i++) {
        var row = document.createElement("tr");
        var name = document.createElement("td");
        name.innerText = highMissedVotes[i].first_name + " " + (highMissedVotes[i].middle_name ||= "") + " " + highMissedVotes[i].last_name;
        var missedVotes = document.createElement("td");
        missedVotes.innerText = highMissedVotes[i].missed_votes;
        var percentageMissedVotes = document.createElement("td");
        percentageMissedVotes.innerText = highMissedVotes[i].missed_votes_pct + " %";
        row.append(name, missedVotes, percentageMissedVotes);
        tbody.append(row);
    }
}


makeTableMostEngaged();
makeTableLeastEngaged();
makeTableAtGlance();