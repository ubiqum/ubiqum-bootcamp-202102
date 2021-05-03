
var senateData = document.getElementById("senate-data");
var trh = document.createElement("tr");
var thName = document.createElement("th");
var thParty = document.createElement("th");
var thState = document.createElement("th");
var thSeniority = document.createElement("th");
var thVotes = document.createElement("th");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");
var houseData = document.getElementById("house-data");
var rFilter = false;
var dFilter = false;

function setTableSenate() {
    senateData.appendChild(thead);
    thead.appendChild(trh)

    trh.appendChild(thName);
    thName.textContent = "Full Name";

    trh.appendChild(thParty);
    thParty.textContent = "Party Affilication";

    trh.appendChild(thState);
    thState.textContent = "State";

    trh.appendChild(thSeniority);
    thSeniority.textContent = "Seniority";

    trh.appendChild(thVotes);
    thVotes.textContent = "Votes";

    thName.setAttribute("class", "text-center");
    thParty.setAttribute("class", "text-center");
    thState.setAttribute("class", "text-center");
    thSeniority.setAttribute("class", "text-center");
    thVotes.setAttribute("class", "text-center");
}

function renderCongressMembers(members) {

    setTableSenate();

    for (var i = 0; i < members.length; i++) {
        var name = members[i].last_name + " " + (members[i].middle_name || "") + " " + members[i].first_name;
        var tr = document.createElement("tr");
        senateData.appendChild(tbody);
        tbody.appendChild(tr)
        var a = document.createElement('a');
        a.setAttribute("href", members[i].url);

        var td1 = document.createElement("td");
        tr.appendChild(td1);
        td1.appendChild(a);
        a.innerHTML = name;

        var td2 = document.createElement("td");
        tr.appendChild(td2);
        td2.textContent = members[i].party;

        var td3 = document.createElement("td");
        tr.appendChild(td3);
        td3.textContent = members[i].state;

        var td4 = document.createElement("td");
        tr.appendChild(td4);
        td4.textContent = members[i].seniority;

        var td5 = document.createElement("td");
        tr.appendChild(td5);
        td5.textContent = members[i].votes_with_party_pct + "%";
    }
}



function renderCongressRepublicans(members) {

    setTableSenate();

    for (var i = 0; i < members.length; i++) {
        if (members[i].party === "R") {
            var name = members[i].last_name + " " + (members[i].middle_name || "") + " " + members[i].first_name;
            var tr = document.createElement("tr");
            tr.setAttribute("id","rtr")
            senateData.appendChild(tbody);
            tbody.appendChild(tr)
            var a = document.createElement('a');
            a.setAttribute("href", members[i].url);

            var td1 = document.createElement("td");
            tr.appendChild(td1);
            td1.appendChild(a);
            td1.setAttribute("id","tdR");
            a.innerHTML = name;

            var td2 = document.createElement("td");
            tr.appendChild(td2);
            td2.textContent = members[i].party;
            td2.setAttribute("id","tdR");

            var td3 = document.createElement("td");
            tr.appendChild(td3);
            td3.textContent = members[i].state;
            td3.setAttribute("id","tdR");

            var td4 = document.createElement("td");
            tr.appendChild(td4);
            td4.textContent = members[i].seniority;
            td4.setAttribute("id","tdR");

            var td5 = document.createElement("td");
            tr.appendChild(td5);
            td5.textContent = members[i].votes_with_party_pct + "%";
            td5.setAttribute("id","tdR");
        }
    }
}

function renderCongressDemocrat(members) {

    setTableSenate();

    for (var i = 0; i < members.length; i++) {
        if (members[i].party === "D") {
            var name = members[i].last_name + " " + (members[i].middle_name || "") + " " + members[i].first_name;
            var tr = document.createElement("tr");
            tr.setAttribute("id","dtr")
            senateData.appendChild(tbody);
            tbody.appendChild(tr)
            var a = document.createElement('a');
            a.setAttribute("href", members[i].url);

            var td1 = document.createElement("td");
            tr.appendChild(td1);
            td1.setAttribute("id","tdD");
            td1.appendChild(a);
            a.innerHTML = name;

            var td2 = document.createElement("td");
            tr.appendChild(td2);
            td2.setAttribute("id","tdD");
            td2.textContent = members[i].party;

            var td3 = document.createElement("td");
            tr.appendChild(td3);
            td3.setAttribute("id","tdD");
            td3.textContent = members[i].state;

            var td4 = document.createElement("td");
            tr.appendChild(td4);
            td4.setAttribute("id","tdD");
            td4.textContent = members[i].seniority;

            var td5 = document.createElement("td");
            tr.appendChild(td5);
            td5.setAttribute("id","tdD");
            td5.textContent = members[i].votes_with_party_pct + "%";
        }
    }
}

function renderCongressIndipendent(members) {

    setTableSenate();

    for (var i = 0; i < members.length; i++) {
        if (members[i].party === "ID") {
            var name = members[i].last_name + " " + (members[i].middle_name || "") + " " + members[i].first_name;
            var tr = document.createElement("tr");
            tr.setAttribute("class","indip")
            senateData.appendChild(tbody);
            tbody.appendChild(tr)
            var a = document.createElement('a');
            a.setAttribute("href", members[i].url);

            var td1 = document.createElement("td");
            tr.appendChild(td1);
            td1.appendChild(a);
            td1.setAttribute("id","tdI");
            a.innerHTML = name;

            var td2 = document.createElement("td");
            tr.appendChild(td2);
            td2.setAttribute("id","tdI");
            td2.textContent = members[i].party;

            var td3 = document.createElement("td");
            tr.appendChild(td3);
            td3.setAttribute("id","tdI");
            td3.textContent = members[i].state;

            var td4 = document.createElement("td");
            tr.appendChild(td4);
            td4.setAttribute("id","tdI");
            td4.textContent = members[i].seniority;

            var td5 = document.createElement("td");
            tr.appendChild(td5);
            td5.setAttribute("id","tdI");
            td5.textContent = members[i].votes_with_party_pct + "%";
        }
    }
}

function renderHouseMembers(members) {

    houseData.appendChild(thead);
    thead.appendChild(trh)

    trh.appendChild(thName);
    thName.textContent = "Full Name";

    trh.appendChild(thParty);
    thParty.textContent = "Party Affilication";

    trh.appendChild(thState);
    thState.textContent = "State";

    trh.appendChild(thSeniority);
    thSeniority.textContent = "Seniority";

    trh.appendChild(thVotes);
    thVotes.textContent = "Votes";

    thName.setAttribute("class", "text-center");
    thParty.setAttribute("class", "text-center");
    thState.setAttribute("class", "text-center");
    thSeniority.setAttribute("class", "text-center");
    thVotes.setAttribute("class", "text-center");

    for (var i = 0; i < members.length; i++) {

        var name = members[i].last_name + " " + (members[i].middle_name || "") + " " + members[i].first_name;
        var tr = document.createElement("tr");
        houseData.appendChild(tbody);
        tbody.appendChild(tr)
        var a = document.createElement('a');
        a.setAttribute("href", members[i].url);

        var td1 = document.createElement("td");
        tr.appendChild(td1);
        td1.appendChild(a);
        a.innerHTML = name;

        var td2 = document.createElement("td");
        tr.appendChild(td2);
        td2.textContent = members[i].party;

        var td3 = document.createElement("td");
        tr.appendChild(td3);
        td3.textContent = members[i].state;

        var td4 = document.createElement("td");
        tr.appendChild(td4);
        td4.textContent = members[i].seniority;

        var td5 = document.createElement("td");
        tr.appendChild(td5);
        td5.textContent = members[i].votes_with_party_pct + "%";
    }
}

function checkboxR() {
        if (republican.checked) {
            renderCongressRepublicans(data.results[0].members);
            for (var i=0;i<data.results[0].members.length*5;i++){
                if(senateData.members[i].party==="R"){
                }
            }
        }
        if(!republican.checked){
            for (var i=0;i<data.results[0].members.length*5;i++){
                    document.getElementById("tdR").remove();
            }
        }
}
function checkboxD() {
        if (democrat.checked) {
            renderCongressDemocrat(data.results[0].members);
        }
        if(!democrat.checked){
            for (var i=0;i<data.results[0].members.length*5;i++){
                    document.getElementById("tdD").remove();
            }
        }
    
}
function checkboxI() {
        if (indipendent.checked) {
            renderCongressIndipendent(data.results[0].members);
        }
        if(!indipendent.checked){
            for (var i=0;i<data.results[0].members.length;i++){
                    document.getElementById("tdI").remove();
            }
        }
    
}