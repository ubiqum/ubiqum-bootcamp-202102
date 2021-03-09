// filter members using the checkboxes and dropdown menus


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
function partyMembers(){
var members = data.results[0].members;
var averages=[];
var group = members.reduce((r, a) => {
  r[a.party] = [...r[a.party] || [], a];
  return r;
 }, {});
 var votes = {R:[],D:[],ID:[]};
var averages =[];
for (var party in group) {
  var senators = group[party];
  for (var senator of senators) {
    votes[party].push(senator.votes_with_party_pct);
    
    averages.push(averages[party]= ((votes[party].reduce((a, b) => a + b, 0))/votes[party].length).toFixed(2))
}
 var partyInfo = {D:[],R:[],ID:[]};
 partyInfo.R.push(party="Republicans",length=group.R.length,average=averages[0])
 partyInfo.D.push(party="Democrats",length=group.D.length,average=averages[1])
 partyInfo.ID.push(party="Independents",length=group.ID.length,average=averages[2])
 return partyInfo
}
}
// high attendance
function mostPresentMembers() {
  var members = data.results[0].members;
  highPresentMembers =[];
  var tenPercent = Math.round(members.length / 10);

  members.sort(function (a, b) {
    return a.missed_votes_pct - b.missed_votes_pct;
  });
  var loop = true;

  for (var i = 0; loop; i++) {
    var member = members[i];

    if (i < tenPercent) {
      highPresentMembers.push(member);
    } else if (
      highPresentMembers[tenPercent - 1].missed_votes_pct ===
      member.missed_votes_pct
    ) {
      highPresentMembers.push(member);
    } else loop = false;
  }
  return highPresentMembers;
}

//lowest attendance
function leastPresentMembers() {
  var members = data.results[0].members;
    var lowPresentMembers = [];
    var tenPercent = Math.round(members.length / 10);
    members.sort(function (a, b) {
      return b.missed_votes_pct - a.missed_votes_pct;
    });
    var loop = true;
  
    for (var i = 0; loop; i++) {
      var member = members[i];

      if (i < tenPercent) {
        lowPresentMembers.push(member);
      } else if (
        lowPresentMembers[tenPercent - 1].missed_votes_pct ===
        member.missed_votes_pct
      ) {
        lowPresentMembers.push(member);
      } else loop = false;
    }
    return lowPresentMembers;
    
  }
  //10% most loyal
  function mostLoyalMembers() {
    var members = data.results[0].members;
      var highLoyalMembers = [];
      var tenPercent = Math.round(members.length / 10);
      members.sort(function (a, b) {
        return b.votes_with_party_pct - a.votes_with_party_pct;
      });
      var loop = true;
    
      for (var i = 0; loop; i++) {
        var member = members[i];
    
        if (i < tenPercent) {
          highLoyalMembers.push(member);
        } else if (
          highLoyalMembers[tenPercent - 1].votes_with_party_pct ===
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
    var tenPercent = Math.round(members.length / 10);
    members.sort(function (a, b) {
      return a.votes_with_party_pct - b.votes_with_party_pct;
    });
    var loop = true;
  
    for (var i = 0; loop; i++) {
      var member = members[i];
  
      if (i < tenPercent) {
        lowLoyalMembers.push(member);
      } else if (
        lowLoyalMembers[tenPercent - 1].votes_with_party_pct ===
        member.votes_with_party_pct
      ) {
        lowLoyalMembers.push(member);
      } else loop = false;
    }
    return lowLoyalMembers;
  }