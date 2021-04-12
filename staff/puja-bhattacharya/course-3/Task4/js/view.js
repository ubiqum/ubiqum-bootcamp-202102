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
    var gameMobileApp1 = new Vue({
        el: '#gameMobileTableBody1',
        data: {
            schedule_Sept_Mobile: gameDataSept
        },
        methods:{
            displayGameRows: function (september, teams, location, times, id, gameID){
                if((id) === ("btndisplay,"  +  gameID))
                {
                    document.getElementById('btnmsg,' +  gameID).style.display = 'block';
                    document.getElementById('td,' +  gameID + ',' + september).style.display = 'block';
                    document.getElementById('td,' +  gameID   + ',' +teams).style.display = 'block';
                    document.getElementById('td,' +  gameID  + ',' + location).style.display = 'block';
                    document.getElementById('td,' +  gameID  + ',' + times).style.display = 'block';
                    document.getElementById('btndisplay,' +  gameID).id = 'btnNOdisplay,' +  gameID;
                }
                else
                {
                    document.getElementById("btnmsg," +  gameID).style.display = "none";
                    document.getElementById("td," +  gameID  + ',' + september).style.display = "none";
                    document.getElementById("td," +  gameID  + ',' + teams).style.display = "none";
                    document.getElementById("td," +  gameID  + ',' + location).style.display = "none";
                    document.getElementById("td," +  gameID  + ',' + times).style.display = "none";
                    document.getElementById("btnNOdisplay," +  gameID).id = "btndisplay," +  gameID;
                }
            },
            openchat: function(gameID){
                window.open('postmessage.html?gameID=' + gameID, 'popup', 'width = 600, height = 550'); 
            }
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