retrieveMembers(function (members) {
    app.members = members
});


var app = new Vue({
    el: '#app',
    data: {
        members: {},
        parties:[],
        state:null
    },
    methods:{
        fillTable: function(){
            this.members = {}},
        applyFilters:function(){
            this.members = filterMembers(this.parties,this.state,this);
        }
    }
})


 function filterMembers(parties,state) {
  var members = app.members
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


