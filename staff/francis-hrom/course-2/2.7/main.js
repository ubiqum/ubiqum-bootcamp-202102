document.addEventListener("DOMContentLoaded", ()=> {
  let senateMembers = dataSenate.results[0].members;

  let senateMembersTable =
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

    for (let senateMember of senateMembers) {
      senateMembersTable +=
        "<tr>" +
        "<td>" +
        '<a href="' +
        senateMember.url +
        '">' +
        senateMember.first_name +
        " " +
        (senateMember.middle_name || "") +
        senateMember.last_name +
        "</a>" +
        "</td>" +
        "<td>" +
        senateMember.party +
        "</td>" +
        "<td>" +
        senateMember.state +
        "</th>" +
        "<td>" +
        senateMember.seniority +
        "</th>" +
        "<td>" +
        senateMember.votes_with_party_pct +
        "%" +
        "</th>" +
        "</tr>";
    }
  
  /* ES5 implementation
  for (let i = 0; i < senateMembers.length; i++) {
    senateMembersTable +=
      "<tr>" +
      "<td>" +
      '<a href="' +
      senateMembers[i].url +
      '">' +
      senateMembers[i].first_name +
      " " +
      (senateMembers[i].middle_name || "") +
      senateMembers[i].last_name +
      "</a>" +
      "</td>" +
      "<td>" +
      senateMembers[i].party +
      "</td>" +
      "<td>" +
      senateMembers[i].state +
      "</th>" +
      "<td>" +
      senateMembers[i].seniority +
      "</th>" +
      "<td>" +
      senateMembers[i].votes_with_party_pct +
      "%" +
      "</th>" +
      "</tr>";
  }
  */

  senateMembersTable += "</tbody> " + " </table>";

  document.getElementById("senate-data").innerHTML = senateMembersTable;
});
