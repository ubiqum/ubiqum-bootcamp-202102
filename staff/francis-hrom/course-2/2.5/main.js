document.addEventListener("DOMContentLoaded", function (event) {

  let arrObj = dataSenate.results[0].members;

  let myTable =
    "<table>" +
    "<thead>" +
    "<tr>" +
    "<th>Name</th>" +
    "<th>Party</th>" +
    "<th>State</th>" +
    "<th>Seniority</th>" +
    "<th>Votes with party</th>" +
    "</tr>" +
    "</thead>" +
    "<tbody>";

  for (let i = 0; i < arrObj.length; i++) {
    myTable +=
      "<tr>" +
      "<td>" +
      arrObj[i].first_name +
      " " +
      (arrObj[i].middle_name || "") +
      arrObj[i].last_name +
      "</td>" +
      "<td>" +
      arrObj[i].party +
      "</td>" +
      "<td>" +
      arrObj[i].state +
      "</th>" +
      "<td>" +
      arrObj[i].seniority +
      "</th>" +
      "<td>" +
      arrObj[i].votes_with_party_pct +
      "%" +
      "</th>" +
      "</tr>";
  }

  myTable += "</tbody> " + " </table>";

  document.getElementById("senate-data").innerHTML = myTable;
});
