retrieveMembers(function (members) {
    renderStatesSelector(retrieveStates(members));

    renderCongressMembers(members);

    var states = document.getElementById("states");

    states.onchange = function () {
        renderStates(members)
    }

    var inputR = document.getElementById("republican")
    var inputD = document.getElementById("democrat")
    var inputID = document.getElementById("indipendent")

    inputR.onclick = function () { onCheckboxClicked(members) }
    inputD.onclick = function () { onCheckboxClicked(members) }
    inputID.onclick = function () { onCheckboxClicked(members) }
})


