var app = new Vue({
    el: '#app',
    data: {
      members:[],
      filteredMembersHouse: [],
      parties: [],
      state: null,
    },
    methods: {
      applyFiltersHouse: function () {
        filterMembersHouse(this.parties, this.state, function (filteredMembers) {
          this.filteredMembersHouse = filteredMembersHouse
        }.bind(this));
      }
    },
    created: function () {
      retrieveMembersHouse(function (members) {
        app.members = members
        app.filteredMembersHouse = members
      });
    }
  })