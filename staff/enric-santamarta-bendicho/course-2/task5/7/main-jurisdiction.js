var app = new Vue({
    el: '#app',
    data: {
        results: [],
        state: []
    },
    methods: {
        refreshMembersTable: function () {
            retrieveMembersByJurisdiction(function (results, state) {
                app.results = results
                app.state = state
            })
        }
    },
    created: function () {
        this.refreshMembersTable()
    }

})



