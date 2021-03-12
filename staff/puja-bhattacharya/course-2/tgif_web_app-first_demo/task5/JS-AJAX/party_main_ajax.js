//console.log("call from js", data.results[0].members);
var s_members = [];
fetch('https://api.propublica.org/congress/v1/113/senate/members.json', 
            {
                method: "GET", headers: {"X-API-Key": "UhF33HiFCqKhPyblkLJpAdAL4Yrqf459nGgmTE52",}
            })
            .then(response => response.json())
            .then(function(data)
            {

                //var s_members = data.results[0].members;
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
                //var total_avg_votes_perc = avg_votes_rep_perc + avg_votes_dem_perc + avg_votes_ind_perc;

                //adding values to the Senate at glance table dynamically
                /*
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

                old_body.parentNode.replaceChild(old_body, old_body);*/
                
                var json_obj1 = {   statistics: []      };
                //var json_obj2 = {   statistics: []      };
                //var json_obj3 = {   statistics: []      };
                
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
                    el: '#glancebody',
                    data: {
                        smembers: json_obj1.statistics
                    }
                });

                //code starts for sorting the arrays for vote count [Least Loyal (Bottom 10% of Party)]

                s_members.sort((a, b) => {
                    return b.votes_against_party_pct - a.votes_against_party_pct;

                })
                // testing console print for sorted values
                s_members.forEach((m) => {
                    console.log(`${m.first_name} ${m.last_name} ${m.missed_votes} ${m.votes_against_party_pct}`);
                });

                //10% of the total senators 
                t_senator = (s_members.length * .10);
                var s_mem_vue_bot = [];
                //var old_body = document.getElementById("bottom10body");

                for(i=0; i < s_members.length; i++)
                {
                    if(i==0)
                    {
                        //namelink = "<a href=" + '"' + s_members[i].url + '"' +  "target=" + '"' + "_blank" + '"' + ">" + [s_members[i].first_name, s_members[i].last_name].join(" ") + "</a>" ;
                        if(s_members[i].votes_against_party_pct != null)
                        {
                            /*
                            var senate_row2 = old_body.insertRow(-1);
                            senate_row2.insertCell(-1).innerHTML = namelink; 
                            senate_row2.insertCell(-1).innerHTML = s_members[i].total_votes;
                            senate_row2.insertCell(-1).innerHTML = s_members[i].votes_against_party_pct;*/
                            s_mem_vue_bot.push(s_members[i]);
                        }
                    }
                    if((i>0) && (s_members[i].votes_against_party_pct != s_members[i-1].votes_against_party_pct))
                    {
                        namelink = "<a href=" + '"' + s_members[i].url + '"' +  "target=" + '"' + "_blank" + '"' + ">" + [s_members[i].first_name, s_members[i].last_name].join(" ") + "</a>" ;
                        if(s_members[i].votes_against_party_pct != null)
                        {
                            /*
                            var senate_row2 = old_body.insertRow(-1);
                            senate_row2.insertCell(-1).innerHTML = namelink; 
                            senate_row2.insertCell(-1).innerHTML = s_members[i].total_votes;
                            senate_row2.insertCell(-1).innerHTML = s_members[i].votes_against_party_pct;
                            */
                            s_mem_vue_bot.push(s_members[i]);
                            //if(old_body.rows.length == Math.round(t_senator))       // a check to print 10 rows
                            if(s_mem_vue_bot.length == Math.round(t_senator))
                            break; 
                        }
                    }
                }
                //old_body.parentNode.replaceChild(old_body, old_body);

                //Adding veu object code for bottom 10% voters
                var app5 = new Vue({        
                    el: '#bottom10body',
                    data: {
                        smembers: s_mem_vue_bot
                    }
                });

                //decending sorting for most loyal members
                s_members.sort((a, b) => {
                    return a.votes_against_party_pct - b.votes_against_party_pct;

                })
                // testing console print for sorted values
                s_members.forEach((m) => {
                    console.log(`${m.first_name} ${m.last_name} ${m.missed_votes} ${m.votes_against_party_pct}`);
                });


                t_senator = (s_members.length * .10);
                var old_body = document.getElementById("top10body");
                for(i=0; i < s_members.length; i++)
                {
                    if(i==0)
                    {
                        //namelink = "<a href=" + '"' + s_members[i].url + '"' +  "target=" + '"' + "_blank" + '"' + ">" + [s_members[i].first_name, s_members[i].last_name].join(" ") + "</a>" ;
                        if(s_members[i].votes_against_party_pct != null)
                        {
                            /*
                            var senate_row2 = old_body.insertRow(-1);
                            senate_row2.insertCell(-1).innerHTML = namelink; 
                            senate_row2.insertCell(-1).innerHTML = s_members[i].total_votes;
                            senate_row2.insertCell(-1).innerHTML = s_members[i].votes_against_party_pct;
                            */
                            s_mem_vue_bot.push(s_members[i]);
                        }
                    }
                    
                    if((i>0) && (s_members[i].votes_against_party_pct != s_members[i-1].votes_against_party_pct))
                    {
                        //namelink = "<a href=" + '"' + s_members[i].url + '"' +  "target=" + '"' + "_blank" + '"' + ">" + [s_members[i].first_name, s_members[i].last_name].join(" ") + "</a>" ;
                        if(s_members[i].votes_against_party_pct != null)
                        {
                            /*
                            var senate_row2 = old_body.insertRow(-1);
                            senate_row2.insertCell(-1).innerHTML = namelink; 
                            senate_row2.insertCell(-1).innerHTML = s_members[i].total_votes;
                            senate_row2.insertCell(-1).innerHTML = s_members[i].votes_against_party_pct;
                            */
                            s_mem_vue_bot.push(s_members[i]);
                            //if(old_body.rows.length == Math.round(t_senator))       // a check to print 10 rows
                            if(s_mem_vue_bot.length == Math.round(t_senator))
                            break; 
                        }
                    }
                }
                //Adding veu object code for top 10% voters
                var app6 = new Vue({        
                    el: '#top10body',
                    data: {
                        smembers: s_mem_vue_bot
                    }
                });

            });
