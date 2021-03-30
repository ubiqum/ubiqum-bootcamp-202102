/* Calling Fetch function from controller for generating House Data attendance     */

this.retrieveSeptGameSchedules(function(gameDataSept)
{
    //Adding code to display data using Vue.js and calling the results of calculations
    console.log(gameDataSept);           // to check the objects values to be passed to the vue code in html
    var gameApp1 = new Vue({
        el: '#gameTableBody1',
        data: {
            schedule_Sept: gameDataSept
        }
    });
})


this.retrieveOctGameSchedules(function(gameDataOct)
{
    //Adding code to display data using Vue.js and calling the results of calculations
    console.log(gameDataOct);           // to check the objects values to be passed to the vue code in html
    var gameApp2 = new Vue({
        el: '#gameTableBody2',
        data: {
            schedule_Oct: gameDataOct
        }
    });
})