
/* Fetch function for generating Senate Data attendance     */
var s_members = [];
function retrieveSenateData(callback)
{
	if(!localStorage.getItem('senate'))
	{ 
        fetch('https://api.propublica.org/congress/v1/113/senate/members.json', 
        {
            method: "GET", headers: {"X-API-Key": "UhF33HiFCqKhPyblkLJpAdAL4Yrqf459nGgmTE52",}
        })
        .then(response => response.json())
        .then(function(data)
        {
            //var s_members = data.results[0].members;
            s_members = data.results[0].members;
            localStorage.setItem('senate', JSON.stringify(s_members));
            //console.log(s_members, s_members.party);
        });
        callback(s_members);
	}
	else
	{ 
        s_members = JSON.parse(localStorage.getItem('senate'));
        callback(s_members); 
	}
}

/* Fetch function for generating House Data attendance     */
var h_members = [];
function retrieveHouseData(callback)
{
	if(!localStorage.getItem('house'))
	{ 
        fetch('https://api.propublica.org/congress/v1/113/house/members.json', 
        {
            method: "GET", headers: {"X-API-Key": "UhF33HiFCqKhPyblkLJpAdAL4Yrqf459nGgmTE52",}
        })
        .then(response => response.json())
        .then(function(data)
        {
            //var s_members = data.results[0].members;
            h_members = data.results[0].members;
            localStorage.setItem('house', JSON.stringify(h_members));
            //console.log(h_members, s_members.party);
        });
        callback(h_members);
	}
	else
	{ 
        h_members = JSON.parse(localStorage.getItem('house'));
        callback(h_members); 
	}
}


/* Fetch function for generating Senate Party Loyalty    */

var sp_members = [];
function retrieveSenatePartyLoyalty(callback)
{
    if(!localStorage.getItem('senateparty'))
	{ 
        fetch('https://api.propublica.org/congress/v1/113/senate/members.json', 
        {
            method: "GET", headers: {"X-API-Key": "UhF33HiFCqKhPyblkLJpAdAL4Yrqf459nGgmTE52",}
        })
        .then(response => response.json())
        .then(function(data)
        {
            //var sp_members = data.results[0].members;
            sp_members = data.results[0].members;
            localStorage.setItem('senateparty', JSON.stringify(sp_members));
            //console.log(sp_members, sp_members.party);
        });
        callback(sp_members);
    }
    else
    { 
        sp_members = JSON.parse(localStorage.getItem('senateparty'));
        callback(sp_members); 
    }
}


/* Fetch function for generating House Party Loyalty    */

var hp_members = [];
function retrieveHousePartyLoyalty(callback)
{
    if(!localStorage.getItem('houseparty'))
	{ 
        fetch('https://api.propublica.org/congress/v1/113/house/members.json', 
        {
            method: "GET", headers: {"X-API-Key": "UhF33HiFCqKhPyblkLJpAdAL4Yrqf459nGgmTE52",}
        })
        .then(response => response.json())
        .then(function(data)
        {
            //var s_members = data.results[0].members;
            hp_members = data.results[0].members;
            localStorage.setItem('houseparty', JSON.stringify(hp_members));
            //console.log(hp_members, hp_members.party);
        });
        callback(hp_members);
    }
    else
    { 
        hp_members = JSON.parse(localStorage.getItem('houseparty'));
        callback(hp_members); 
    }
}




// Define a getChamberTitle() function that takes upper or lower and returns the title of a person in that chamber
function getChamberTitle(people, i)
{
    var title;
        if(people[i].orgClassification == "lower")
            title = people[i].Title;
        if(people[i].orgClassification == "upper")
            title = people[i].Title;
    return title;    
}

function retrievePeopleFromJurisdiction(state, callback)
{
    // Openstates API URL: https://v3.openstates.org/people?jurisdiction=state&include=other_names&include=other_identifiers&include=links&include=sources&include=offices&page=1&per_page=10&apikey=ca4e5c9d-cfbb-4a2d-8090-ae2af93e85bb

    if(!localStorage.getItem(state))
    {
        // retrieving data from openstates since data not present in the cache/local storage.

        fetch('https://v3.openstates.org/people?jurisdiction='+state+'&include=other_names&include=other_identifiers&include=links&include=sources&include=offices', 
            {
                method: "GET", headers: {"x-api-key": "ca4e5c9d-cfbb-4a2d-8090-ae2af93e85bb",}
            })
            .then(response => response.json())
            .then(function(data)
            {
                var p1 = data.results;
                var people = [];
                for(i = 0; i < p1.length ; i++)
                {
                    console.log(p1[i].name, p1[i].party, p1[i].current_role.org_classification);
                    people.push({
                    "Name": (p1[i].name),
                    "Party": (p1[i].party),
                    "orgClassification": (p1[i].current_role.org_classification),
                    "Title" : (p1[i].current_role.title)
                    })  
                }
                //console.log("This is working", data);
                //console.log("this is people: ", people);
                
                // caching the retrieved data to the local storage for future retrieval requests.
                localStorage.setItem(state, JSON.stringify(people));
                //console.log(localStorage.getItem(state));
                callback(people);
            })
    }
    else
    {
        // checking for the data if it already present in the cache/local storage.
        var people = JSON.parse(localStorage.getItem(state));
        callback(people); 
    }
}




