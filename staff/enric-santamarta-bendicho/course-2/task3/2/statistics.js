var members = data.results[0].members;
var democrats = 0
var republicans = 0
var independents = 0

for (i=0;i<members.length;i++){
    if (members[i].party == "D"){
        democrats += 1
    }
    if (members[i].party == "R"){
        republicans += 1
    }
    if (members[i].party == "ID"){
        independents += 1
    }

}

