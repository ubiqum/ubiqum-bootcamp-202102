$(function () {
  fetch('https://api.propublica.org/congress/v1/113/house/members.json',
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

      var members = data.results[0].members;

      fillTable(members);


      function fillTable(members) {
        var table = document.getElementById("table-data");
        var tbody = table.querySelector("tbody");

        tbody.innerHTML = ""

        members.forEach(function (member) {
          var row = document.createElement("tr");

          var fullname = document.createElement("td");
          var hyperLink = document.createElement("a");
          hyperLink.setAttribute("href", member.url);
          hyperLink.setAttribute("target", "_blank");
          hyperLink.innerText = (member.first_name) + " " + (member.middle_name ||= "") + " " + (member.last_name);
          fullname.append(hyperLink);

          var party = document.createElement("td");
          party.innerText = member.party;

          var state = document.createElement("td");
          state.innerText = member.state;

          var seniority = document.createElement("td");
          seniority.innerText = member.seniority;

          var votepercentage = document.createElement("td");
          votepercentage.innerText = member.votes_with_party_pct + " %";

          row.append(fullname, party, state, seniority, votepercentage)

          table.append(row)

          tbody.append(row);
        });
      }

      function filterTable(event) {


        var selectedParties = document.querySelectorAll("input[name=party]:checked")

        selectedParties = Array.from(selectedParties)

        var parties = selectedParties.map(function (checkbox) {
          return checkbox.value
        })


        var filtered

        if (parties.length === 0) {
          filtered = members
        } else {
          filtered = members.filter(function (member) {
            return parties.includes(member.party);
          })
        }

        var table = document.getElementById("table-data");
        var tbody = table.querySelector("tbody");

        var selectedStates = document.getElementById("states").value;
        var filteredStates

        if (selectedStates === "") {
          filteredStates = filtered
        } else {
          filteredStates = filtered.filter(function (member) {
            return selectedStates.includes(member.state);
          })
        }
        fillTable(filteredStates);
      }

    });
});

