//Jurisdiction Data
function retrieveMembersByJurisdiction(callback, state) {

  var state = document.getElementById('state').value

  cachedFetch('https://v3.openstates.org/people?jurisdiction=' + state + '&page=1&per_page=50', {
    headers: {
      'x-api-key': '5b80bb17-a10b-49c8-9cd1-1edfd4c5db0a'
    }
  })
    .then(r => r.json())

    .then(function (data) {
      callback(data.results)
    })
}

//Senate Data
function retrieveMembersSenate(callback) {
  fetch("https://api.propublica.org/congress/v1/113/senate/members.json",
      {
          headers: {
              "X-API-Key": "I0REsGy5W1Niu7TP6VKCAF8dVD68NILvYaucpFhY"
          }
      }
  )
      .then(function (response) {
          return response.json()
      })
      .then(function (data) {
          callback(data.results[0].members);
      
      })
}

function filterMembersSenate(parties, state, callback) {
  retrieveMembersSenate(function (members) {
      var filteredMembersSenate = members

      if (parties.length) {
          filteredMembersSenate = filteredMembersSenate.filter(
              function (member) {
                  return parties.includes(member.party);
              }
          );
      }

      if (state) {
          filteredMembersSenate = filteredMembersSenate.filter(
              function (member) {
                  return member.state === state;
              }
          );
      }

      callback(filteredMembersSenate);
  });
}
//House Data
function retrieveMembersHouse(callback) {
    fetch("https://api.propublica.org/congress/v1/113/house/members.json",
        {
            headers: {
                "X-API-Key": "I0REsGy5W1Niu7TP6VKCAF8dVD68NILvYaucpFhY"
            }
        }
    )
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            callback(data.results[0].members);
        
        })
}

function filterMembersHouse(parties, state, callback) {
    retrieveMembersHouse(function (members) {
        var filteredMembersHouse = members
  
        if (parties.length) {
            filteredMembersHouse = filteredMembersHouse.filter(
                function (member) {
                    return parties.includes(member.party);
                }
            );
        }
  
        if (state) {
            filteredMembersHouse = filteredMembersHouse.filter(
                function (member) {
                    return member.state === state;
                }
            );
        }
  
        callback(filteredMembersHouse);
    });
  }


