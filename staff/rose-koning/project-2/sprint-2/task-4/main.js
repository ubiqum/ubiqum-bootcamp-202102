fetch("https://api.propublica.org/congress/v1/113/senate/members.json", {
  headers: {
    "X-API-Key": "Qtau7BnzCTb7LorWQQBGS7I9Z5LAQK4WEyLD3QFN",
  },
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var app = new Vue({
      el: "#app",
      data: {
        members: data.results[0].members,
        parties: [],
        state: null,
      },
      methods: {
        hello: function () {
          this.members = data.results[0].members.slice(0, 3);
        },
        applyFilters: function () {
       
          var members = data.results[0].members;

          if (this.parties.length) {
            members = members.filter(
              function (member) {
                return this.parties.includes(member.party);
              }.bind(this)
            );
          }

          if(this.state){
            members = members.filter(
                function (member) {
                  return member.state===this.state;
                }.bind(this)
              );
            }

          this.members=members;
        },
      },
    });
  });
