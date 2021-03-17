fetch(url,
    {
        headers: {
            'X-API-Key': '8ZhxJJROXn7p3u24PNfXCqYTIIKWI0nkNWdR05zJ'
        }
    }
)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {

        makeTableAtGlance()
        makeTableMostLoyal()
        makeTableLeastLoyal()

    });

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

    function makeTableMostLoyal() {
        var table = document.getElementById("most-loyal-table");
        var tbody = table.querySelector("tbody");
        for (var i = 0; i < mostOftenVoteMembers.length; i++) {
            var row = document.createElement("tr");
            var name = document.createElement("td");
            name.innerText = mostOftenVoteMembers[i].first_name + " " + (mostOftenVoteMembers[i].middle_name ||= "") + " " + mostOftenVoteMembers[i].last_name;
            var partyVotes = document.createElement("td");
            partyVotes.innerText = mostOftenVoteMembers[i].total_votes;
            var percentageVotesWithParty = document.createElement("td");
            percentageVotesWithParty.innerText = mostOftenVoteMembers[i].votes_with_party_pct + " %";
            row.append(name, partyVotes, percentageVotesWithParty);
            tbody.append(row);
        }
    }

    function makeTableLeastLoyal() {
        var table = document.getElementById("least-loyal-table");
        var tbody = table.querySelector("tbody");
        for (var i = 0; i < leastOftenVoteMembers.length; i++) {
            var row = document.createElement("tr");
            var name = document.createElement("td");
            name.innerText = leastOftenVoteMembers[i].first_name + " " + (leastOftenVoteMembers[i].middle_name ||= "") + " " + leastOftenVoteMembers[i].last_name;
            var partyVotes = document.createElement("td");
            partyVotes.innerText = leastOftenVoteMembers[i].total_votes;
            var percentageVotesWithParty = document.createElement("td");
            percentageVotesWithParty.innerText = leastOftenVoteMembers[i].votes_with_party_pct + " %";
            row.append(name, partyVotes, percentageVotesWithParty);
            tbody.append(row);
        }
    }