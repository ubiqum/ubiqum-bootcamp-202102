this.retrieveSeptGameSchedules(function(gameDataSept)
{
    console.log(gameDataSept);           
    var gameApp1 = new Vue({
        el: '#gameTableBody1',
        data: {
            schedule_Sept: gameDataSept
        }
    });
})


this.retrieveOctGameSchedules(function(gameDataOct)
{
    console.log(gameDataOct);           
    var gameApp2 = new Vue({
        el: '#gameTableBody2',
        data: {
            schedule_Oct: gameDataOct
        }
    });
})