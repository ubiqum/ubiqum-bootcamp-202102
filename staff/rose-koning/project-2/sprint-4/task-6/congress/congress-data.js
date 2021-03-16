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
    var app = new Vue({
      el: "#app",
      data: {
        members: data.results[0].members,
        parties: [],
        state: null,
      },
      methods: {
        applyFilters: function () {
          this.members = filterMembers(this.parties, this.state, this);
        },
      },
    }); 

  })

  jQuery('a.iframe').colorbox();

