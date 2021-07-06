var app = new Vue({
  el: '#app',
  data: {
    members:[],
    filteredMembers: [],
    parties: [],
    state: null,
  },
  methods: {
    applyFilters: function () {
      filterMembers(this.parties, this.state, function (filteredMembers) {
        this.filteredMembers = filteredMembers
      }.bind(this));
    }
  },
  created: function () {
    retrieveMembers(function (members) {
      app.members = members
      app.filteredMembers = members
    });
  }
})


