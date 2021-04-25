var app = new Vue({
    el: '#app',
    data: {
      members:[],
      filteredMembersSenate: [],
      parties: [],
      state: null,
    },
    methods: {
      applyFiltersSenate: function () {
        filterMembersSenate(this.parties, this.state, function (filteredMembers) {
          this.filteredMembersSenate = filteredMembersSenate
        }.bind(this));
      }
    },
    created: function () {
      retrieveMembersSenate(function (members) {
        app.members = members
        app.filteredMembersSenate = members
      });
    }
  })
  
  