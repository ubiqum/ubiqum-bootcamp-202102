document.addEventListener("DOMContentLoaded", () => {
  
  function renderMembersTable(membersData,renderElementID) {

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

    return document.getElementById(renderElementID).innerHTML = membersTable;
  }
  
  if (document.getElementById("senate-data")) {
    renderMembersTable(senateData.results[0].members, "senate-data");
  };

  if (document.getElementById("house-data")) {
    renderMembersTable(houseData.results[0].members, "house-data");;
  };



 
});

