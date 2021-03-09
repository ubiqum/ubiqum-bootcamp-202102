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
    
    var lowloyalty = new Vue({
      el: "#lowloyalty",
      data: {
        lowestLoyalty:[]
      },
      created: function(){
        this.$data.lowestLoyalty=leastLoyalMembers()
      },
    });
    var highloyalty = new Vue({
      el: "#highloyalty",
      data: {
        highestLoyalty:[]
      },
      created: function(){
        this.$data.highestLoyalty=mostLoyalMembers()
      },
    });
  })