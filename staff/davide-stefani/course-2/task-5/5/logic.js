function filterMembers(parties, state) {
  var members = data.results[0].members;
  if (parties.length) {
    members = members.filter(
      function (member) {
        return parties.includes(member.party);
      }
    );
  }

  if (state) {
    members = members.filter(
      function (member) {
        return member.state === state;
      }
    );
  }

  return members;
}

// party info
function partyMembers() {
  var members = data.results[0].members;
  var averages = [];
  var group = members.reduce((r, a) => {
    r[a.party] = [...r[a.party] || [], a];
    return r;
  }, {});
  var votes = { R: [], D: [], ID: [] };
  var averages = [];
  for (var party in group) {
    var senators = group[party];
    for (var senator of senators) {
      votes[party].push(senator.votes_with_party_pct);

      averages.push(averages[party] = ((votes[party].reduce((a, b) => a + b, 0)) / votes[party].length).toFixed(2))
    }
    var partyInfo = { D: [], R: [], ID: [] };
    partyInfo.R.push(party = "Republicans", length = group.R.length, average = averages[0] + " %")
    partyInfo.D.push(party = "Democrats", length = group.D.length, average = averages[1] + " %")
    
    if (group.ID) {
      partyInfo.ID.push(party = "Independents", length = group.ID.length, average = averages[2] + " %")
  } else { partyInfo.ID = 0 };
    return partyInfo
  }
}
// high attendance members
function mostPresentMembers() {
  var members = data.results[0].members;
  highPresentMembers = [];
  var limit = Math.round(members.length / 10);

  members.sort(function (a, b) {
    return a.missed_votes_pct - b.missed_votes_pct;
  });
  var loop = true;

  for (var i = 0; loop; i++) {
    var member = members[i];

    if (i < limit) {
      highPresentMembers.push(member);
    } else if (
      highPresentMembers[limit - 1].missed_votes_pct ===
      member.missed_votes_pct
    ) {
      highPresentMembers.push(member);
    } else loop = false;
  }
  return highPresentMembers;
}

//lowest attendance members
function leastPresentMembers() {
  var members = data.results[0].members;
  var lowPresentMembers = [];
  var limit = Math.round(members.length / 10);
  members.sort(function (a, b) {
    return b.missed_votes_pct - a.missed_votes_pct;
  });
  var loop = true;

  for (var i = 0; loop; i++) {
    var member = members[i];

    if (i < limit) {
      lowPresentMembers.push(member);
    } else if (
      lowPresentMembers[limit - 1].missed_votes_pct ===
      member.missed_votes_pct
    ) {
      lowPresentMembers.push(member);
    } else loop = false;
  }
  return lowPresentMembers;

}
// most loyal members
function mostLoyalMembers() {
  var members = data.results[0].members;
  var highLoyalMembers = [];
  var limit = Math.round(members.length / 10);
  members.sort(function (a, b) {
    return b.votes_with_party_pct - a.votes_with_party_pct;
  });
  var loop = true;

  for (var i = 0; loop; i++) {
    var member = members[i];

    if (i < limit) {
      highLoyalMembers.push(member);
    } else if (
      highLoyalMembers[limit - 1].votes_with_party_pct ===
      member.votes_with_party_pct
    ) {
      highLoyalMembers.push(member);
    } else loop = false;
  }
  return highLoyalMembers;
}

//least loyal members
function leastLoyalMembers() {
  var members = data.results[0].members;
  var lowLoyalMembers = [];
  var limit = Math.round(members.length / 10);
  members.sort(function (a, b) {
    return a.votes_with_party_pct - b.votes_with_party_pct;
  });
  var loop = true;

  for (var i = 0; loop; i++) {
    var member = members[i];

    if (i < limit) {
      lowLoyalMembers.push(member);
    } else if (
      lowLoyalMembers[limit - 1].votes_with_party_pct ===
      member.votes_with_party_pct
    ) {
      lowLoyalMembers.push(member);
    } else loop = false;
  }
  return lowLoyalMembers;
}

function retrieveJurisdictionIdByState(searchedState, callback) {
   
  if (!localStorage.jurisdictions)
         fetch(
             "https://v3.openstates.org/jurisdictions?classification=state&page=1&per_page=52&apikey=de2b3634-5679-4a06-bb71-c350f876fbad"
         )
             .then(function (response) {
                 return response.json();
             })
             .then(function (_data) {
                 var data = _data;
 
                 localStorage.jurisdictions = JSON.stringify(data, searchedState);
 
                 var jurisdictionID = searchState(data, searchedState);
 
                 callback(jurisdictionID);
             });
     else {
         var data = JSON.parse(localStorage.jurisdictions);
 
         var jurisdictionID = searchState(data, searchedState);
 
         callback(jurisdictionID);
     }
 }
 
 var listOfStates = data.results;
 function searchState(_data, searchedState) {
     
     setDropDown(listOfStates);
     for (var i = 0; i < listOfStates.length; i++) {
         var state = listOfStates[i];
         if (state.id.includes("/state:" + searchedState)) {
             var jurisdictionID = state.id;
             break;
         }
     }
     return jurisdictionID;
 }
 
 function setDropDown(listOfStates) {
     for (i = 0; i < listOfStates.length; i++) {
         string = listOfStates[i].id;
         locationState = string.indexOf("/state:") + 7;
         stateAcronym = string.substring(locationState, locationState + 2);
         dropDownMenu = document.getElementById("state-selection");
 
         dropDownElement = document.createElement("a");
         dropDownElement.className = "dropdown-item";
         dropDownElement.href = "?state=" + stateAcronym;
         dropDownElement.innerText = listOfStates[i].name;
 
         dropDownMenu.append(dropDownElement);
     }
 }
 
 function retrieveLegislatorsByJurisdiction(jurisdictionID, page, callback) {
     var url = `https://v3.openstates.org/people?jurisdiction=ocd-jurisdiction/country:us/state:${state.toLowerCase()}/government&page=${page}&per_page=10&apikey=de2b3634-5679-4a06-bb71-c350f876fbad`;
 
     if (!localStorage[jurisdictionID + "-" + page]) {
         fetch(url)
             .then(function (response) {
                 return response.json();
             })
             
             .then(function (_data) {
                 var legislators = _data;

                 localStorage[jurisdictionID + "-" + page] = JSON.stringify(legislators);
                 callback(legislators);
             });
     } else {
         var legislators = JSON.parse(localStorage[jurisdictionID + "-" + page]);
 
         callback(legislators);
     }
 }
 
