
this.retrieveSeptSchedules(function (gameDataSept) {
    var gameApp1 = new Vue({
        el: '#gameTableBody1',
        data: {
            schedule_Sept: gameDataSept
        }
    });
})

this.retrieveOctSchedules(function (gameDataOct) {
    var gameApp2 = new Vue({
        el: '#gameTableBody2',
        data: {
            schedule_Oct: gameDataOct
        }
    });
})