
var table = document.getElementById("table");
var trh = document.createElement("tr");
var thName = document.createElement("th");
var thParty = document.createElement("th");
var thState = document.createElement("th");
var thSeniority = document.createElement("th");
var thVotes = document.createElement("th");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");
var selectedState = document.getElementById("states");

function setTable() {
    table.innerHTML = ''

    table.appendChild(thead);
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

    tbody.innerHTML = "";
}


function renderCongressMembers(members) {

    setTable();

    for (var i = 0; i < members.length; i++) {
        var name = members[i].last_name + " " + (members[i].middle_name || "") + " " + members[i].first_name;
        var tr = document.createElement("tr");
        table.appendChild(tbody);
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

function onCheckboxClicked() {

    var parties = []

    if (republican.checked) parties.push('R')
    if (democrat.checked) parties.push('D')
    if (indipendent.checked) parties.push('ID')

    var Members = retrieveMembersByParties(parties);

    renderCongressMembers(Members);
}

function renderStates() {
    var as = document.forms[0].states.value;
    var members = retrieveMembersByStates(as);
    renderCongressMembers(members);
    console.log("retrieving members");
}

function renderStatesSelector(states) {
    var selector = document.getElementById("states");

    for (var i = 0; i < uniqueStates; i++) {
        var option = document.createElement("option");

        var state = states[i]
        
        selector.setAttribute("value", state);
        option.textContent = state;

        selector.appendChild(option);
    }
}



