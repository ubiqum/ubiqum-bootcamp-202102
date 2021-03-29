fetch(url, {
    headers: {
        "X-API-Key": "8ZhxJJROXn7p3u24PNfXCqYTIIKWI0nkNWdR05zJ",
    },
})
    .then(function (response) {
        return response.json();
    })
    .then(function (_data) {
        data = _data;

        var partyInfo = new Vue({
            el: "#glanceBody",
            data: {
                membersPerParty: []
            },
            created: function () {
                this.$data.membersPerParty = partyMembers()
            },
        });

        var lowloyalty = new Vue({
            el: "#least-loyal-table",
            data: {
                lowestLoyalty: []
            },
            created: function () {
                this.$data.lowestLoyalty = leastLoyalMembers()
            },
        });
        var highloyalty = new Vue({
            el: "#most-loyal-table",
            data: {
                highestLoyalty: []
            },
            created: function () {
                this.$data.highestLoyalty = mostLoyalMembers()
            },
        });
    })