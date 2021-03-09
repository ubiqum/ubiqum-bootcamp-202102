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
var group = members.reduce((r, a) => {
  r[a.party] = [...r[a.party] || [], a];
  return r;
 }, {});
 var partyLength = [];
 partyLength.push(group.D.length,group.R.length,group.ID.length)
 return partyLength;
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