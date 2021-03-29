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

    var app = new Vue({
      el: "#senatorsList",
      data: {
        members: data.results[0].members,
        parties: [],
        state: null,

      },
      methods: {
        applyFilters: function () {
          this.members = filterMembers(this.parties, this.state,);
        },
      },
    });

  })

var app = new Vue({
  el: "#moreText",
  data: {
    button: [
      { text: 'Hide' }
    ],
    seen: true
  },
  methods: {
    toggleSeen: function () {
      moreText.seen = !moreText.seen;
      moreText.button.text = moreText.seen ? 'Read Less' : 'Read More';
    },
  }
});

