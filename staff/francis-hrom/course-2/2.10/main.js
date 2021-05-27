document.addEventListener("DOMContentLoaded", () => {
  function renderMembersTable(membersData, renderElementID) {
    let membersTable =
      "<table>" +
      "<thead>" +
      "<tr>" +
      "<th>Senator's Name</th>" +
      "<th>Party Affilication</th>" +
      "<th>State</th>" +
      "<th>Seniority</th>" +
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

    return (document.getElementById(renderElementID).innerHTML = membersTable);
  }

  let tableType = { sourceData: "", renderElementID: "" };

  function setTableType() {
    if (document.getElementById("senate-data")) {
      tableType.sourceData = senateData.results[0].members;
      tableType.renderElementID = "senate-data";
    } else if (document.getElementById("house-data")) {
      tableType.sourceData = houseData.results[0].members;
      tableType.renderElementID = "house-data";
    }
  }

  setTableType();
  renderMembersTable(tableType.sourceData, tableType.renderElementID);

  function filterMembersByParty(membersData, filterArray) {
    let filtredDataArray = [];
    for (const filterItem of filterArray) {
      console.log(filterItem);
      filtredDataArray = filtredDataArray.concat(
        membersData.filter((member) => member.party == filterItem)
      );
    }
    return filtredDataArray;
  }

  function updateTable() {
    const checkboxFilterValuesArray = [
      ...document.querySelectorAll("input:checked"),
    ].map((e) => e.value);
    if (checkboxFilterValuesArray.length == 0) {
      renderMembersTable(tableType.sourceData, tableType.renderElementID);
    } else {
      const filtredData = filterMembersByParty(
        senateData.results[0].members,
        checkboxFilterValuesArray
      );
      renderMembersTable(filtredData, tableType.renderElementID);
    }
  }

  let checkboxes = document
    .getElementById("partyFilter")
    .getElementsByTagName("input");

  for (checkbox of checkboxes) {
    if (checkbox.type === "checkbox") {
      checkbox.onchange = updateTable;
    }
  }
});
