/**
 * Sets the table for member rendering
 */
function setTable() {       
    var table = document.getElementById("table");

    table.innerHTML = ""

    var thead = document.createElement("thead");
    table.appendChild(thead);

    var trh = document.createElement("tr");
    thead.appendChild(trh)

    var thName = document.createElement("th");
    trh.appendChild(thName);
    thName.textContent = "Full Name";

    var thParty = document.createElement("th");
    trh.appendChild(thParty);
    thParty.textContent = "Party Affilication";

    var thState = document.createElement("th");
    trh.appendChild(thState);
    thState.textContent = "State";

    var thSeniority = document.createElement("th");
    trh.appendChild(thSeniority);
    thSeniority.textContent = "Seniority";

    var thVotes = document.createElement("th");
    trh.appendChild(thVotes);
    thVotes.textContent = "Votes";

    thName.setAttribute("class", "text-center");
    thParty.setAttribute("class", "text-center");
    thState.setAttribute("class", "text-center");
    thSeniority.setAttribute("class", "text-center");
    thVotes.setAttribute("class", "text-center");
}

/**
 * Renders specified members in the table
 * 
 * @param {Array} members members to render
 */
function renderCongressMembers(members) {     
    setTable();

    var table = document.querySelector("table");

    var tbody = document.createElement("tbody");
    table.appendChild(tbody);

    for (var i = 0; i < members.length; i++) {
        var name = members[i].last_name + " " + (members[i].middle_name || "") + " " + members[i].first_name;
        var tr = document.createElement("tr");
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

/**
 * Checks filter checkboxes and executes the filter for the specific checkbox
 */
function onCheckboxClicked() { 
    var parties = []

    if (republican.checked) parties.push('R')
    if (democrat.checked) parties.push('D')
    if (indipendent.checked) parties.push('ID')

    var Members = retrieveMembersByParties(parties);

    renderCongressMembers(Members);
}

/**
 * Renders members filtered by states selected inside the dropdown box
 */
function renderStates() {
    var as = document.forms[0].states.value;
    var members = retrieveMembersByStates(as);

    renderCongressMembers(members);
}

/**
 * Renders states inside the dropdown box
 * 
 * @param {Array} states states to render
 */
function renderStatesSelector(states) {
    var selector = document.getElementById("states");

    var option = document.createElement("option");
    option.innerText = "";
    option.disabled = true;
    option.selected = true;

    selector.appendChild(option);

    for (var i = 0; i < states.length; i++) {
        var option = document.createElement("option");

        var state = states[i]

        option.value = state;
        option.textContent = state;

        selector.appendChild(option);
    }
}

/**
 * Renders table from top page of each attendance/loyalty hmlts
 */
function renderAtGlanceTable() {
    var trD = document.getElementById("trDemocrat");
    var trR = document.getElementById("trRepublican");
    var trI = document.getElementById("trIndependent");
    var trT = document.getElementById("trTotal");
    var tdD1 = document.createElement("td");
    var tdD2 = document.createElement("td");
    var tdR1 = document.createElement("td");
    var tdR2 = document.createElement("td");
    var tdI1 = document.createElement("td");
    var tdT = document.createElement("td");

    trD.appendChild(tdD1);
    tdD1.textContent = statistics.numDemocrats;

    trD.appendChild(tdD2);
    tdD2.textContent = statistics.democratsVotesParty;

    trR.appendChild(tdR1);
    tdR1.textContent = statistics.numRepublicans;

    trR.appendChild(tdR2);
    tdR2.textContent = statistics.republicansVotesParty;

    trI.appendChild(tdI1);
    tdI1.textContent = statistics.numIndependents;

    trT.appendChild(tdT);
    tdT.textContent = statistics.numDemocrats + statistics.numRepublicans + statistics.numIndependents;

}

/**
 * Renders table from attendance htmls
 * 
 * @param {Array} members members to include in the table
 * 
 * @param {String} tbody string to specify the table body in which to render the members
 */
function renderEngaged(members, tbody) {
    var tbody = document.getElementById(tbody);
    
    for (var i = 0; i < members.length; i++) {
        var tr = document.createElement("tr");
        var tdn = document.createElement("td");
        var tdv = document.createElement("td");
        var tdp = document.createElement("td");

        tbody.appendChild(tr);
        tr.appendChild(tdn);
        tr.appendChild(tdv);
        tr.appendChild(tdp);

        tdn.textContent = (members[i].last_name + " " + (members[i].middle_name || "") + " " + members[i].first_name);
        tdv.textContent = members[i].missed_votes;
        tdp.textContent = members[i].missed_votes_pct;
    }
}

/**
 * Renders table in attendance from most to least
 */
function renderMostEngaged(members){
    renderEngaged(members, "tbodyMostEngaged");
}

/**
 * Renders table in attendance from least to most
 */
function renderLeastEngaged(members){
    renderEngaged(members, "tbodyLeastEngaged");
}

/**
 * Renders tables from loyalty htmls
 * 
 * @param {Array} members members to include in the table
 * 
 * @param {String} tbody string to specify the table body in which to render the members
 */
function renderLoyal(members, tbody) {
    var tbody = document.getElementById(tbody);
    retrieveLowestPartyVotes(members);

    for (var i = 0; i < members.length; i++) {
        var tr = document.createElement("tr");
        var tdn = document.createElement("td");
        var tdv = document.createElement("td");
        var tdp = document.createElement("td");

        tbody.appendChild(tr);
        tr.appendChild(tdn);
        tr.appendChild(tdv);
        tr.appendChild(tdp);

        tdn.textContent = (members[i].last_name + " " + (members[i].middle_name || "") + " " + members[i].first_name);
        tdv.textContent = retrieveMemberVotesWithParty(members[i]);
        tdp.textContent = members[i].votes_with_party_pct;
    }
}

/**
 * Renders table in loyalty from most to least
 */
function renderMostLoyal(members) {
    renderLoyal(members, "tbodyMostLoyal");
}

/**
 * Renders table in loyalty from least to most
 */
function renderLeastLoyal(members) {
    renderLoyal(members, "tbodyLeastLoyal");
}