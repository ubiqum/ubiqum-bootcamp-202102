fetch(url, {
  headers: {
    "X-API-Key": "Qtau7BnzCTb7LorWQQBGS7I9Z5LAQK4WEyLD3QFN",
  },
})
  .then(function (response) {
    return response.json();
  })
  .then(function (_data) {
    data=_data;
    
    var partyInfo = new Vue({
      el: "#partyInfo",
      data: {
        membersPerParty:[]
      },
      created: function(){
        this.$data.membersPerParty=partyMembers()
      },
    });

    var lowattendance = new Vue({
      el: "#lowattendance",
      data: {
        lowestAttendance:[]
      },
      created: function(){
        this.$data.lowestAttendance=leastPresentMembers()
      },
    });
    var highattendance = new Vue({
      el: "#highattendance",
      data: {
        highestAttendance:[]
      },
      created: function(){
        this.$data.highestAttendance=mostPresentMembers()
      },
    });
  })