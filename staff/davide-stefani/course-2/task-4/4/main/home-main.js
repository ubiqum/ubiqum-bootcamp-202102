var app = new Vue({
    el: "#more-info",
    data: {
      buttonText: 'Read More',
      seen: false
    },
    methods: {
      toggleMoreInfo: function () {
        this.seen = !this.seen;
        this.buttonText = this.seen ? 'Read Less' : 'Read More';
      },
    }
  });
  
  