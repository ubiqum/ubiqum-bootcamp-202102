function renderLegislatorsList(legislators) {
    var app = new Vue({
      el: "#app",
      data: {
        legislators: legislators.results,
      },
      created: function () {
        setPages(legislators.pagination.max_page);
      },
    });
  }