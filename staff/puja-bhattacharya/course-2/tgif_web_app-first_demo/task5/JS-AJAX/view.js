/* Calling Fetch function from controller for generating Senate Data attendance     */
var s_party = []; var s_votes = [];  var s_mem_vue_bot = [];
var s_total = 0; var total_reps =0; var total_dems = 0; var total_inds = 0;
var total_v_reps = []; var total_v_dems = []; var total_v_inds = [];
var total_votes_rep_perc; var total_votes_dem_perc; var total_votes_ind_perc;

this.retrieveSenateData(function(s_members)
{
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

    //console.log(s_total, s_party, total_reps, total_dems, total_inds, s_votes.reduce((adding_members), 0));
    var total_votes  = s_votes.reduce(adding_members, 0);
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

    var json_obj1 = { statistics: [] };            
    json_obj1.statistics.push({ 
        "Party"                            : "Republican",
        "Total"                            : total_reps,
        "Average_percentage"               : avg_votes_rep_perc,
    });

    json_obj1.statistics.push({ 
        "Party"                            : "Democrats",
        "Total"                            : total_dems,
        "Average_percentage"               : avg_votes_dem_perc
    });

    json_obj1.statistics.push({ 
        "Party"                            : "Independants",
        "Total"                            : total_inds,
        "Average_percentage"               : avg_votes_ind_perc
    });

    json_obj1.statistics.push({
        "Party"                            : "Total",
        "Total"                            : total_reps + total_dems + total_inds,
        "Average_percentage"               : avg_votes_rep_perc +avg_votes_dem_perc + avg_votes_ind_perc
    });

    //Adding code to display data using Vue.js and calling the results of calculations
    console.log(json_obj1.statistics);           // to check the objects values to be passed to the vue code in html
    var app4 = new Vue({
        el: '#senateAttendance-glancebody',
        data: {
            smembers: json_obj1.statistics
        }
    });

    //Code starts for sorting the arrays for vote count for bottom 10% voters
    s_members.sort((a, b) => {
        return a.missed_votes_pct - b.missed_votes_pct;
    })

    /*  // testing console print for sorted values
    s_members.forEach((m) => {
    console.log(`${m.first_name} ${m.last_name} ${m.missed_votes} ${m.missed_votes_pct}`);
    }); */

    //10% of the total senators 
    t_senator = (s_members.length * .10);
  
    s_mem_vue_bot = [];
    for(i=0; i < s_members.length; i++)
    {
        if(i==0)
        {
            if(s_members[i].missed_votes_pct != null)
                s_mem_vue_bot.push(s_members[i]);
        }
        if((i>0) && (s_members[i].missed_votes_pct != s_members[i-1].missed_votes_pct))
        {
            if(s_members[i].missed_votes_pct != null)
            {
                s_mem_vue_bot.push(s_members[i]);
                if(s_mem_vue_bot.length == Math.round(t_senator)) 
                break;
            } 
        }
    }
    //Adding veu object code for bottom 10% voters
    var app5 = new Vue({        
        el: '#senateAttendance-bottom10body',
        data: {
            smembers: s_mem_vue_bot
        }
    });

    //decending sorting for most loyal members for top 10%
    s_mem_vue_bot = [];
    s_members.sort((a, b) => {
        return b.missed_votes_pct - a.missed_votes_pct;
    })

    /*  // testing console print for sorted values
    s_members.forEach((m) => {
        console.log(`${m.first_name} ${m.last_name} ${m.missed_votes} ${m.missed_votes_pct}`);   }); */

    t_senator = (s_members.length * .10);
    for(i=0; i < s_members.length; i++)
    {
        console.log(s_members[i].missed_votes_pct);
        if(i==0)
        {
            if(s_members[i].missed_votes_pct != null)
            {
                s_mem_vue_bot.push(s_members[i]);
            }
        }
        if((i>0) && (s_members[i].missed_votes_pct != s_members[i-1].missed_votes_pct))
        {
            if(s_members[i].missed_votes_pct != null)
            {
                s_mem_vue_bot.push(s_members[i]);
                if(s_mem_vue_bot.length == Math.round(t_senator))
                break;  
            }
        }
    }
    //Adding veu object code for top 10% party loyals
    var app6 = new Vue({        
        el: '#senateAttendance-top10body',
        data: {
            smembers: s_mem_vue_bot
        }
    });

    s_party = []; s_votes = [];s_mem_vue_bot = [];
    s_total = 0; total_reps =0; total_dems = 0; total_inds = 0;
    total_v_reps = []; total_v_dems = []; total_v_inds = [];
    total_votes_rep_perc = 0; total_votes_dem_perc = 0; total_votes_ind_perc= 0;

});




/* Calling Fetch function from controller for generating House Data attendance     */

var h_party = []; var h_votes = [];  var h_mem_vue_bot = []; var h_total = 0; 
this.retrieveHouseData(function(h_members)
{
    for(var i =0; i < h_members.length;i++)
    {
        h_party.push(h_members[i].party);
        h_votes.push(h_members[i].votes_with_party_pct);
        //console.log("checking votes", h_votes);

        //calculating no. of representatives from each party and calculating no. of votes each party received
        if (h_party[i] == "R")
        {
            total_reps ++;
            total_v_reps.push(h_members[i].votes_with_party_pct);
        }
        if (h_party[i] == "D")
        {
            total_dems ++;
            total_v_dems.push(h_members[i].votes_with_party_pct);
        }
        if (h_party[i] == "ID")
        {
            total_inds ++;    
            total_v_inds.push(h_members[i].votes_with_party_pct);
        }
        
        // Getting sum of numbers
        function adding_members(total, num)
        { return total + num; }
        h_total ++;
    }

    //console.log(h_total, h_party, total_reps, total_dems, total_inds, h_votes.reduce((adding_members), 0));
    var total_votes  = h_votes.reduce(adding_members, 0);
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

    var json_obj1 = { statistics: [] };            
    json_obj1.statistics.push({ 
        "Party"                            : "Republican",
        "Total"                            : total_reps,
        "Average_percentage"               : avg_votes_rep_perc,
    });

    json_obj1.statistics.push({ 
        "Party"                            : "Democrats",
        "Total"                            : total_dems,
        "Average_percentage"               : avg_votes_dem_perc
    });

    json_obj1.statistics.push({ 
        "Party"                            : "Independants",
        "Total"                            : total_inds,
        "Average_percentage"               : avg_votes_ind_perc
    });

    json_obj1.statistics.push({
        "Party"                            : "Total",
        "Total"                            : total_reps + total_dems + total_inds,
        "Average_percentage"               : avg_votes_rep_perc +avg_votes_dem_perc + avg_votes_ind_perc
    });

    //Adding code to display data using Vue.js and calling the results of calculations
    console.log(json_obj1.statistics);           // to check the objects values to be passed to the vue code in html
    var app4 = new Vue({
        el: '#houseAttendance-glancebody',
        data: {
            hmembers: json_obj1.statistics
        }
    });

    //Code starts for sorting the arrays for vote count for bottom 10% voters
    h_members.sort((a, b) => {
        return a.missed_votes_pct - b.missed_votes_pct;
    })

    /*  // testing console print for sorted values
    h_members.forEach((m) => {
    console.log(`${m.first_name} ${m.last_name} ${m.missed_votes} ${m.missed_votes_pct}`);
    }); */

    //10% of the total senators 
    t_house = (h_members.length * .10);
  
    h_mem_vue_bot = [];
    for(i=0; i < h_members.length; i++)
    {
        if(i==0)
        {
            if(h_members[i].missed_votes_pct != null)
                h_mem_vue_bot.push(h_members[i]);
        }
        if((i>0) && (h_members[i].missed_votes_pct != h_members[i-1].missed_votes_pct))
        {
            if(h_members[i].missed_votes_pct != null)
            {
                h_mem_vue_bot.push(h_members[i]);
                if(h_mem_vue_bot.length == Math.round(t_house)) 
                break;
            } 
        }
    }
    //Adding veu object code for bottom 10% voters
    var app5 = new Vue({        
        el: '#houseAttendance-bottom10body',
        data: {
            hmembers: h_mem_vue_bot
        }
    });

    //decending sorting for most loyal members for top 10%
    h_mem_vue_bot = [];
    h_members.sort((a, b) => {
        return b.missed_votes_pct - a.missed_votes_pct;
    })

    /*  // testing console print for sorted values
    h_members.forEach((m) => {
        console.log(`${m.first_name} ${m.last_name} ${m.missed_votes} ${m.missed_votes_pct}`);   }); */

    t_house = (h_members.length * .10);
    for(i=0; i < h_members.length; i++)
    {
        console.log(h_members[i].missed_votes_pct);
        if(i==0)
        {
            if(h_members[i].missed_votes_pct != null)
            {
                h_mem_vue_bot.push(h_members[i]);
            }
        }
        if((i>0) && (h_members[i].missed_votes_pct != h_members[i-1].missed_votes_pct))
        {
            if(h_members[i].missed_votes_pct != null)
            {
                h_mem_vue_bot.push(h_members[i]);
                if(h_mem_vue_bot.length == Math.round(t_house))
                break;  
            }
        }
    }
    //Adding veu object code for top 10% party loyals
    var app6 = new Vue({        
        el: '#houseAttendance-top10body',
        data: {
            hmembers: h_mem_vue_bot
        }
    });

    h_party = []; h_votes = [];h_mem_vue_bot = [];
    h_total = 0; total_reps =0; total_dems = 0; total_inds = 0;
    total_v_reps = []; total_v_dems = []; total_v_inds = [];
    total_votes_rep_perc = 0; total_votes_dem_perc = 0; total_votes_ind_perc= 0;

});





/* Calling Fetch function from controller for senate party loyalty data */

var sp_party = []; var sp_votes = [];  var sp_mem_vue_bot = []; var sp_total = 0; 
this.retrieveSenatePartyLoyalty(function(sp_members)
{
    for(var i =0; i < sp_members.length;i++)
    {
        sp_party.push(sp_members[i].party);
        sp_votes.push(sp_members[i].votes_with_party_pct);
        //console.log("checking votes", sp_votes);

        //calculating no. of representatives from each party and calculating no. of votes each party received
        if (sp_party[i] == "R")
        {
            total_reps ++;
            total_v_reps.push(sp_members[i].votes_with_party_pct);
        }
        if (sp_party[i] == "D")
        {
            total_dems ++;
            total_v_dems.push(sp_members[i].votes_with_party_pct);
        }
        if (sp_party[i] == "ID")
        {
            total_inds ++;    
            total_v_inds.push(sp_members[i].votes_with_party_pct);
        }
        
        // Getting sum of numbers
        function adding_members(total, num)
        { return total + num; }
        sp_total ++;
    }

    //console.log(sp_total, sp_party, total_reps, total_dems, total_inds, sp_votes.reduce((adding_members), 0));
    var total_votes  = sp_votes.reduce(adding_members, 0);
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

    var json_obj1 = { statistics: [] };               
    json_obj1.statistics.push({ 
        "Party"                            : "Republican",
        "Total"                            : total_reps,
        "Average_percentage"               : avg_votes_rep_perc,
    });

    json_obj1.statistics.push({ 
        "Party"                            : "Democrats",
        "Total"                            : total_dems,
        "Average_percentage"               : avg_votes_dem_perc
    });

    json_obj1.statistics.push({ 
        "Party"                            : "Independants",
        "Total"                            : total_inds,
        "Average_percentage"               : avg_votes_ind_perc
    });

    json_obj1.statistics.push({
        "Party"                            : "Total",
        "Total"                            : total_reps + total_dems + total_inds,
        "Average_percentage"               : avg_votes_rep_perc +avg_votes_dem_perc + avg_votes_ind_perc
    });

    //Adding code to display data using Vue.js and calling the results of calculations
    console.log(json_obj1.statistics);           // to check the objects values to be passed to the vue code in html
    var app14 = new Vue({
        el: '#senateParty-glancebody',
        data: {
            spmembers: json_obj1.statistics
        }
    });

    //code starts for sorting the arrays for vote count [Least Loyal (Bottom 10% of Party)]  --  descending sort
    sp_members.sort((a, b) => {
        return b.votes_against_party_pct - a.votes_against_party_pct;
    })

    /* // testing console print for sorted values
    sp_members.forEach((m) => { console.log(`${m.first_name} ${m.last_name} ${m.missed_votes} ${m.votes_against_party_pct}`);   });*/

    //10% of the total senators 
    t_senator_p = (sp_members.length * .10);
    sp_mem_vue_bot = [];

    for(i=0; i < sp_members.length; i++)
    {
        console.log(sp_members[i].votes_against_party_pct);
        if(i==0)
        {
            if(sp_members[i].votes_against_party_pct != null)
                sp_mem_vue_bot.push(sp_members[i]);
        }
        if((i>0) && (sp_members[i].votes_against_party_pct != sp_members[i-1].votes_against_party_pct))
        {
            //namelink = "<a href=" + '"' + sp_members[i].url + '"' +  "target=" + '"' + "_blank" + '"' + ">" + [sp_members[i].first_name, sp_members[i].last_name].join(" ") + "</a>" ;
            if(sp_members[i].votes_against_party_pct != null)
            {
                sp_mem_vue_bot.push(sp_members[i]);
                if(sp_mem_vue_bot.length == Math.round(t_senator_p))
                break; 
            }
        }
    }
    //Adding veu object code for bottom 10% voters
    var app15 = new Vue({        
        el: '#senateParty-bottom10body',
        data: {
            spmembers: sp_mem_vue_bot
        }
    });
    sp_mem_vue_bot = [];

    //ascending sorting for most loyal members
    sp_members.sort((a, b) => {
        return a.votes_against_party_pct - b.votes_against_party_pct;
    })
    /*  // testing console print for sorted values
    sp_members.forEach((m) => {
        console.log(`${m.first_name} ${m.last_name} ${m.missed_votes} ${m.votes_against_party_pct}`);
    }); */

    sp_mem_vue_bot = [];
    t_senator_p = (sp_members.length * .10);
    for(i=0; i < sp_members.length; i++)
    {
        if(i==0)
        {
            if(sp_members[i].votes_against_party_pct != null)
            {
                sp_mem_vue_bot.push(sp_members[i]);
            }
        }
        if((i>0) && (sp_members[i].votes_against_party_pct != sp_members[i-1].votes_against_party_pct))
        {
            if(sp_members[i].votes_against_party_pct != null)
            {
                sp_mem_vue_bot.push(sp_members[i]);
                if(sp_mem_vue_bot.length == Math.round(t_senator_p))
                break; 
            }
        }
    }
    //Adding veu object code for top 10% voters
    var app16 = new Vue({        
        el: '#senateParty-top10body',
        data: {
            spmembers: sp_mem_vue_bot
        }
    });

    sp_party = []; sp_votes = [];sp_mem_vue_bot = [];
    sp_total = 0; total_reps =0; total_dems = 0; total_inds = 0;
    total_v_reps = []; total_v_dems = []; total_v_inds = [];
    total_votes_rep_perc = 0; total_votes_dem_perc = 0; total_votes_ind_perc= 0;
});





/* Calling Fetch function from controller for house party loyalty data */
var hp_party = []; var hp_votes = [];  var hp_mem_vue_bot = []; var hp_total = 0; 
this.retrieveHousePartyLoyalty(function(hp_members)
{
    for(var i =0; i < hp_members.length;i++)
    {
        hp_party.push(hp_members[i].party);
        hp_votes.push(hp_members[i].votes_with_party_pct);
        //console.log("checking votes", hp_votes);

        //calculating no. of representatives from each party and calculating no. of votes each party received
        if (hp_party[i] == "R")
        {
            total_reps ++;
            total_v_reps.push(hp_members[i].votes_with_party_pct);
        }
        if (hp_party[i] == "D")
        {
            total_dems ++;
            total_v_dems.push(hp_members[i].votes_with_party_pct);
        }
        if (hp_party[i] == "ID")
        {
            total_inds ++;    
            total_v_inds.push(hp_members[i].votes_with_party_pct);
        }
        
        // Getting sum of numbers
        function adding_members(total, num)
        { return total + num; }
        hp_total ++;
    }

    //console.log(hp_total, hp_party, total_reps, total_dems, total_inds, hp_votes.reduce((adding_members), 0));
    var total_votes  = hp_votes.reduce(adding_members, 0);
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

    var json_obj1 = { statistics: [] };               
    json_obj1.statistics.push({ 
        "Party"                            : "Republican",
        "Total"                            : total_reps,
        "Average_percentage"               : avg_votes_rep_perc,
    });

    json_obj1.statistics.push({ 
        "Party"                            : "Democrats",
        "Total"                            : total_dems,
        "Average_percentage"               : avg_votes_dem_perc
    });

    json_obj1.statistics.push({ 
        "Party"                            : "Independants",
        "Total"                            : total_inds,
        "Average_percentage"               : avg_votes_ind_perc
    });

    json_obj1.statistics.push({
        "Party"                            : "Total",
        "Total"                            : total_reps + total_dems + total_inds,
        "Average_percentage"               : avg_votes_rep_perc +avg_votes_dem_perc + avg_votes_ind_perc
    });

    //Adding code to display data using Vue.js and calling the results of calculations
    console.log(json_obj1.statistics);           // to check the objects values to be passed to the vue code in html
    var app24 = new Vue({
        el: '#houseParty-glancebody',
        data: {
            hpmembers: json_obj1.statistics
        }
    });

    //code starts for sorting the arrays for vote count [Least Loyal (Bottom 10% of Party)]
    hp_members.sort((a, b) => {
        return b.votes_against_party_pct - a.votes_against_party_pct;
    })

    /* // testing console print for sorted values
    hp_members.forEach((m) => { console.log(`${m.first_name} ${m.last_name} ${m.missed_votes} ${m.votes_against_party_pct}`);   });*/

    //10% of the total house 
    t_house_p = (hp_members.length * .10);
    hp_mem_vue_bot = [];

    for(i=0; i < hp_members.length; i++)
    {
        if(i==0)
        {
            if(hp_members[i].votes_against_party_pct != null)
                hp_mem_vue_bot.push(hp_members[i]);
        }
        if((i>0) && (hp_members[i].votes_against_party_pct != hp_members[i-1].votes_against_party_pct))
        {
            //namelink = "<a href=" + '"' + s_members[i].url + '"' +  "target=" + '"' + "_blank" + '"' + ">" + [s_members[i].first_name, s_members[i].last_name].join(" ") + "</a>" ;
            if(hp_members[i].votes_against_party_pct != null)
            {
                hp_mem_vue_bot.push(hp_members[i]);
                if(hp_mem_vue_bot.length == Math.round(t_house_p))
                break; 
            }
        }
    }
    //Adding veu object code for bottom 10% voters
    var app25 = new Vue({        
        el: '#houseParty-bottom10body',
        data: {
            hpmembers: hp_mem_vue_bot
        }
    });

    hp_mem_vue_bot = [];
    //decending sorting for most loyal members
    hp_members.sort((a, b) => {
        return a.votes_against_party_pct - b.votes_against_party_pct;
    })
    /*  // testing console print for sorted values
    s_members.forEach((m) => {
        console.log(`${m.first_name} ${m.last_name} ${m.missed_votes} ${m.votes_against_party_pct}`);
    }); */

    t_house_p = (hp_members.length * .10);
    for(i=0; i < hp_members.length; i++)
    {
        if(i==0)
        {
            if(hp_members[i].votes_against_party_pct != null)
            {
                hp_mem_vue_bot.push(hp_members[i]);
            }
        }
        if((i>0) && (hp_members[i].votes_against_party_pct != hp_members[i-1].votes_against_party_pct))
        {
            if(hp_members[i].votes_against_party_pct != null)
            {
                hp_mem_vue_bot.push(hp_members[i]);
                if(hp_mem_vue_bot.length == Math.round(t_house_p))
                break; 
            }
        }
    }
    //Adding veu object code for top 10% voters
    var app26 = new Vue({        
        el: '#houseParty-top10body',
        data: {
            hpmembers: hp_mem_vue_bot
        }
    });

    hp_party = null; hp_votes = null; hp_mem_vue_bot = [];
    hp_total = 0; total_reps =0; total_dems = 0; total_inds = 0;
    total_v_reps = null; total_v_dems = null; total_v_inds = null;
    total_votes_rep_perc = 0; total_votes_dem_perc = 0; total_votes_ind_perc= 0;
});

/* creating url in the format legislators.html?state=il */
const urlParams = new URLSearchParams(window.location.search);

/* retrieve data for a specific state by hitting the states drop down and storing it    */
const state = urlParams.get('state');

var LegName = []; var LegParty = []; var LegChamTitle = [];
var legislators = [];

/* Calling Fetch function from controller for generating People of state legisators     */

this.retrievePeopleFromJurisdiction(state, function(people){            //calling the global fetch from controller, passing the state as well as mustache rendering function; to get the rendered data.
    for (var i = 0; i < people.length; i++)
            {
                LegName.push(people[i].Name);
                LegParty.push(people[i].Party);
                //LegChamTitle.push(data.results[i].current_role.org_classification);
                LegChamTitle.push(getChamberTitle(people, i));   //Calling the getChamberTitle()
                legislators.push({
                    "Name": LegName[i],
                    "Party": LegParty[i],
                    "chamberTitle": LegChamTitle[i]            //Change the template so that instead of {{chamber}} it says {{chamberTitle}}.
                })
            }
            //var legislator_obj = {legislator: json_obj1.legislators};
            if (legislators.length>0)
            {
            var template = $('#legislator-template').html();
            var stateinfo = Mustache.render(template,{legislators});
            $('#State-legislators>tbody').append(stateinfo);
            $('#State-heading').append(state);
            }
})





