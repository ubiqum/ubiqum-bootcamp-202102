"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // renders table based on the input data
  function renderMembersTable(membersData, renderElementID) {
    let membersTable =
      "<table>" +
      "<thead>" +
      "<tr>" +
      "<th>Name</th>" +
      "<th>Party</th>" +
      "<th>State</th>" +
      "<th>Years in Office</th>" +
      "<th>Votes with party</th>" +
      "</tr>" +
      "</thead>" +
      "<tbody>";

    for (const member of membersData) {
      membersTable +=
        "<tr>" +
        "<td>" +
        '<a href="' +
        member.url +
        '">' +
        member.first_name +
        " " +
        (member.middle_name || "") +
        member.last_name +
        "</a>" +
        "</td>" +
        "<td>" +
        member.party +
        "</td>" +
        "<td>" +
        member.state +
        "</th>" +
        "<td>" +
        member.seniority +
        "</th>" +
        "<td>" +
        member.votes_with_party_pct +
        "%" +
        "</th>" +
        "</tr>";
    }

    membersTable += "</tbody> " + " </table>";

    document.getElementById(renderElementID).innerHTML = membersTable;
  }

  // detects which type of table should be rendered on the web page and calls first time table rendering
  let tableType = { sourceData: "", renderElementID: "" };

  function setTableType() {
    if (document.getElementById("senate-data")) {
      tableType.sourceData = senateData.results[0].members;
      tableType.renderElementID = "senate-data";
      renderMembersTable(tableType.sourceData, tableType.renderElementID);
    } else if (document.getElementById("house-data")) {
      tableType.sourceData = houseData.results[0].members;
      tableType.renderElementID = "house-data";
      renderMembersTable(tableType.sourceData, tableType.renderElementID);
    }
  }

  setTableType();

  function updateTable() {
    // get array of values of selected checkboxes
    const checkboxFilterValuesArray = [
      ...document.querySelectorAll("input:checked"),
    ].map((e) => e.value);

    // get value of selected state in dropdown
    const selectedStateInDropdown = document.getElementById("state-filter")
      .value;

    // filter data based on the values in checkboxes and dropdown
    const filtredData = filterMembers(
      tableType.sourceData,
      checkboxFilterValuesArray,
      selectedStateInDropdown
    );

    renderMembersTable(filtredData, tableType.renderElementID);
  }

  // event listeners for checkboxes
  if (document.getElementById("party-filter")) {
    let checkboxes = document
      .getElementById("party-filter")
      .getElementsByTagName("input");

    for (const checkbox of checkboxes) {
      if (checkbox.type === "checkbox") {
        checkbox.onchange = updateTable;
      }
    }
  }

  // get list of states from the data
  let statesList = new Set();
  for (let item of tableType.sourceData) {
    statesList.add(item.state);
  }

  // sort states A-Z
  statesList = Array.from(statesList).sort();

  // create dropdown menu with the list of states
  function addStatesToDropdown(statesList) {
    let dropdownStatesOptions = '<option value="">*ALL*</option>';

    for (const state of statesList) {
      dropdownStatesOptions +=
        '<option value="' + state + '">' + state + "</option>";
    }

    return (document.getElementById(
      "state-filter"
    ).innerHTML = dropdownStatesOptions);
  }

  if (document.getElementById("state-filter")) {
    addStatesToDropdown(statesList);

    // event listener for dropdown
    document.getElementById("state-filter").onchange = updateTable;
  }

  calculateStatistics();
});

// filter data based on the input filters
function filterMembers(membersData, partyFilterArray, stateFilterItem) {
  let filtredDataArray = [];

  if (stateFilterItem == "") {
    for (const party of partyFilterArray) {
      filtredDataArray = filtredDataArray.concat(
        membersData.filter((member) => member.party == party)
      );
    }
  } else {
    for (const party of partyFilterArray) {
      filtredDataArray = filtredDataArray.concat(
        membersData.filter(
          (member) => member.party == party && member.state == stateFilterItem
        )
      );
    }
  }

  return filtredDataArray;
}

export { filterMembers };
import { calculateStatistics } from "./calculate.js";
import { senateData } from "./pro-congress-113-senate.js";
import { houseData } from "./pro-congress-113-house.js";
