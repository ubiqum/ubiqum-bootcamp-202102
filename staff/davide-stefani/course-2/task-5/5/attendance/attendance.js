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
  .then(function (_data) {
    data = _data

    var partyInfo = new Vue({
      el: "#glanceBody",
      data: {
        membersPerParty:[]
      },
      created: function(){
        this.$data.membersPerParty=partyMembers()
      },
    });

    var lowattendance = new Vue({
      el: "#least-engaged-table",
      data: {
        lowMissedVotes:[]
      },
      created: function(){
        this.$data.lowMissedVotes=leastPresentMembers()
      },
    });
    var highattendance = new Vue({
      el: "#most-engaged-table",
      data: {
        highMissedVotes:[]
      },
      created: function(){
        this.$data.highMissedVotes=mostPresentMembers()
      },
    });
  })