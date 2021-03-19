/* For testing and learning data fetching XML HTTP request */

var senate_data = [];
var senate_members1 = [];
//console.log(fetchSenateData());

/*  // Static JSON data call using XML http request class.

function getSenateData()
{
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.propublica.org/congress/v1/113/senate/members.json', false);
    xhr.setRequestHeader("X-API-Key", "UhF33HiFCqKhPyblkLJpAdAL4Yrqf459nGgmTE52");  // this is used to pass the API key as header
    xhr.send();

    //to check the ready state of the server
    xhr.onreadystatechange = function()
    {
        if(xhr.readyState == 4)
        {
            //we receive the data into an array
            senate_data = JSON.parse(xhr.responseText);
            senate_members1= senate_data.results[0].members;
            console.log("The senate members are: ", senate_members1);
        }
    }

    //Onload event is fired after server response is received.
    xhr.onload = function()
    {
        if(this.status == 200)
            console.log("It works .. Yahoo!!");
        else
            console.log(this.status);
    }

    xhr.onerror = function()
    {
        if(this.status != 200)
            console.log("Uaah -- Ahh. Something went wrong!");
    }
}
*/

$(function()
    {
        var data;
        $.ajax({
            success: function(data){ 
                $('#data').text(data);
            },
        });
    }); 

    function loaddata()
    {
        fetch('https://api.propublica.org/congress/v1/113/senate/members.json', 
        {
            method: "GET", headers: {"X-API-Key": "UhF33HiFCqKhPyblkLJpAdAL4Yrqf459nGgmTE52",}
        })
        .then(response => response.json())
        .then(function(data)
        {
            data = data.results[0].members;
            console.log("the result of fetch: ", data);
            return data;
            //return senate_members1; 
        })
        .catch(function(error)
        {
            console.log(error);
        });
    }

   // loaddata();
  
