//console.log("call from js", data.results[0].members);

var s_members = data.results[0].members;
var s_party = []; var s_votes = [];
var s_total = 0;var total_reps =0;var total_dems = 0;var total_inds = 0;
var total_v_reps = []; var total_v_dems = []; var total_v_inds = [];
var total_votes_rep_perc; var total_votes_dem_perc; var total_votes_ind_perc;

s_members = data.results[0].members;
console.log(s_members);
console.log(s_members.party);

for(var i =0; i < s_members.length;i++)
{
    s_party.push(s_members[i].party);
    s_votes.push(s_members[i].votes_with_party_pct);
    //console.log("checking votes", s_votes);
    //calculating no. of representatives from each party and calculating no. of votes each party received
    if (s_party[i] == "R")
    {
        total_reps ++;
        total_v_reps.push(s_members[i].votes_with_party_pct);
    }
    if (s_party[i] == "D")
    {
        total_dems ++;
        total_v_dems.push(s_members[i].votes_with_party_pct);
    }
    if (s_party[i] == "ID")
    {
        total_inds ++;    
        total_v_inds.push(s_members[i].votes_with_party_pct);
    }
    
    // Getting sum of numbers

    function adding_members(total, num)
    { return total + num; }

    s_total ++;
}

console.log(s_total, s_party, total_reps, total_dems, total_inds, s_votes.reduce((adding_members), 0));
var total_votes  = s_votes.reduce(adding_members);
total_votes = total_votes.toFixed(2);

//Calculating votes% with respect to each party
var avg_votes_rep_perc = 0; var avg_votes_dem_perc = 0; var avg_votes_ind_perc = 0;

if(total_v_reps.length > 0)
{
    total_votes_rep_perc = parseFloat((total_v_reps.reduce(adding_members)).toFixed(4));
    avg_votes_rep_perc = parseFloat((total_votes_rep_perc/total_reps).toFixed(2)); 
}

if(total_v_dems.length > 0)
{
    total_votes_dem_perc = parseFloat((total_v_dems.reduce(adding_members)).toFixed(4));
    avg_votes_dem_perc = parseFloat((total_votes_dem_perc/total_dems).toFixed(2));
}

if(total_v_inds.length > 0)
{
    total_votes_ind_perc = parseFloat((total_v_inds.reduce(adding_members)).toFixed(4));
    avg_votes_ind_perc = parseFloat((total_votes_ind_perc/total_inds).toFixed(2));
}

//calculating total of average votes percentage
var total_avg_votes_perc = avg_votes_rep_perc + avg_votes_dem_perc + avg_votes_ind_perc;

//adding values to the Senate at glance table dynamically
var table2 = document.getElementById("at-glance");
var old_body = document.getElementById("glancebody");

var senate_row2 = old_body.insertRow(-1);

senate_row2.insertCell(-1).innerHTML = "Republican";
senate_row2.insertCell(-1).innerHTML = total_reps;
senate_row2.insertCell(-1).innerHTML = avg_votes_rep_perc;
senate_row2 = old_body.insertRow(-1);
senate_row2.insertCell(-1).innerHTML = "Democrat";
senate_row2.insertCell(-1).innerHTML = total_dems;
senate_row2.insertCell(-1).innerHTML = avg_votes_dem_perc;
senate_row2 = old_body.insertRow(-1);
senate_row2.insertCell(-1).innerHTML = "Independant";
senate_row2.insertCell(-1).innerHTML = total_inds;
senate_row2.insertCell(-1).innerHTML = avg_votes_ind_perc;
senate_row2 = old_body.insertRow(-1);
senate_row2.insertCell(-1).innerHTML = "Total";
senate_row2.insertCell(-1).innerHTML = total_reps + total_dems + total_inds ;
senate_row2.insertCell(-1).innerHTML = total_avg_votes_perc ;

old_body.parentNode.replaceChild(old_body, old_body);

//senate_cellValues[index];

console.log("total_votes_rep_perc: ", total_votes_rep_perc, "\n\r","total_votes_dem_perc: ", total_votes_dem_perc, "\n\r","total_votes_ind_perc: ", total_votes_ind_perc);

console.log("The Keys and values are: ", "\n\r","avg_votes_rep_perc: ", avg_votes_rep_perc, "\n\r","avg_votes_dem_perc: ", avg_votes_dem_perc, "\n\r","avg_votes_ind_perc: ", avg_votes_ind_perc);

var json_string = "{"+ '\"' + "Total Republicans" + '\"' + ":" + total_reps +"," + '\"' + "Total Democrats" + '\"' + ":" + total_dems + "," + '\"' +  "Total Independants" + '\"' + ":" + total_inds + "}"

var json_obj = JSON.parse(json_string);

//creating JSON objects..

var stat1 = [total_reps, total_dems, total_inds];
var stat2 = [total_votes_rep_perc, total_votes_dem_perc, total_votes_ind_perc];
var stat3 = [avg_votes_rep_perc, avg_votes_dem_perc, avg_votes_ind_perc];


var json_obj1 = {   statistics: []      };
var json_obj2 = {   statistics: []      };
var json_obj3 = {   statistics: []      };
//var statistics = [];
  
    json_obj1.statistics.push({ 
        "Total Republicans"     : total_reps,
        "Total Democrats"       : total_dems,
        "Total Independants"    : total_inds
    });

    json_obj2.statistics.push({ 
        "Total votes of Republicans"     : total_votes_rep_perc,
        "Total votes of Democrats"       : total_votes_dem_perc,
        "Total votes of Independants"    : total_votes_ind_perc
    });
 
    json_obj3.statistics.push({ 
        "Average votes of Republicans"     : avg_votes_rep_perc,
        "Average votes of Democrats"       : avg_votes_dem_perc,
        "Average votes of Independants"    : avg_votes_ind_perc
    });

console.log("the json object is: ", json_obj1, json_obj2, json_obj3);

//sorting the arrays for vote count

//console.log("Total list of percentages for reps, dems, inds:", total_v_reps, total_v_dems, total_v_inds);
s_members.sort((a, b) => {
    return a.missed_votes_pct - b.missed_votes_pct;

})

s_members.forEach((m) => {
    console.log(`${m.first_name} ${m.last_name} ${m.missed_votes} ${m.missed_votes_pct}`);
});

//10% of the total senators 

t_senator = (s_members.length * .10);
var namelink;
var old_body = document.getElementById("bottom10body");
for(i=0; i < s_members.length; i++)
{
    if(i==0)
    {
        namelink = "<a href=" + '"' + s_members[i].url + '"' +  "target=" + '"' + "_blank" + '"' + ">" + [s_members[i].first_name, s_members[i].last_name].join(" ") + "</a>" ;
        if(s_members[i].missed_votes_pct != null)
        {
            var senate_row2 = old_body.insertRow(-1);
            senate_row2.insertCell(-1).innerHTML = namelink; 
            senate_row2.insertCell(-1).innerHTML = s_members[i].missed_votes;
            senate_row2.insertCell(-1).innerHTML = s_members[i].missed_votes_pct; 
        } 
    }
    if((i>0) && (s_members[i].missed_votes_pct != s_members[i-1].missed_votes_pct))
    {
        namelink = "<a href=" + '"' + s_members[i].url + '"' +  "target=" + '"' + "_blank" + '"' + ">" + [s_members[i].first_name, s_members[i].last_name].join(" ") + "</a>" ;
        if(s_members[i].missed_votes_pct != null)
        {
            var senate_row2 = old_body.insertRow(-1);
            senate_row2.insertCell(-1).innerHTML = namelink; 
            senate_row2.insertCell(-1).innerHTML = s_members[i].missed_votes;
            senate_row2.insertCell(-1).innerHTML = s_members[i].missed_votes_pct;
            if(old_body.rows.length == Math.round(t_senator))       // a check to print 10 rows
            break;
        } 
    }
}
old_body.parentNode.replaceChild(old_body, old_body);

//console.log("testme", json_string, json_obj);
//sorting the arrays for vote count

console.log("Total list of percentages for reps, dems, inds:", total_v_reps, total_v_dems, total_v_inds);
//decending sorting for most loyal members
s_members.sort((a, b) => {
    return b.missed_votes_pct - a.missed_votes_pct;
})
s_members.forEach((m) => {
    console.log(`${m.first_name} ${m.last_name} ${m.missed_votes} ${m.missed_votes_pct}`);
});

t_senator = (s_members.length * .10);
var old_body = document.getElementById("top10body");
for(i=0; i < s_members.length; i++)
{
    if(i==0)
    {
        namelink = "<a href=" + '"' + s_members[i].url + '"' +  "target=" + '"' + "_blank" + '"' + ">" + [s_members[i].first_name, s_members[i].last_name].join(" ") + "</a>" ;
        if(s_members[i].missed_votes_pct != null)
        {
            var senate_row2 = old_body.insertRow(-1);
            senate_row2.insertCell(-1).innerHTML = namelink; 
            senate_row2.insertCell(-1).innerHTML = s_members[i].missed_votes;
            senate_row2.insertCell(-1).innerHTML = s_members[i].missed_votes_pct;
        }
    }
    if((i>0) && (s_members[i].missed_votes_pct != s_members[i-1].missed_votes_pct))
    {
        namelink = "<a href=" + '"' + s_members[i].url + '"' +  "target=" + '"' + "_blank" + '"' + ">" + [s_members[i].first_name, s_members[i].last_name].join(" ") + "</a>" ;
        if(s_members[i].missed_votes_pct != null)
        {
            var senate_row2 = old_body.insertRow(-1);
            senate_row2.insertCell(-1).innerHTML = namelink; 
            senate_row2.insertCell(-1).innerHTML = s_members[i].missed_votes;
            senate_row2.insertCell(-1).innerHTML = s_members[i].missed_votes_pct;
            if(old_body.rows.length == Math.round(t_senator))       // a check to print 10 rows
            break;  
        }
    }
}
old_body.parentNode.replaceChild(old_body, old_body);