document.addEventListener("DOMContentLoaded", function (event) {
  let arrObj = dataSenate.results[0].members;

  let myTable =
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

  for (let i = 0; i < arrObj.length; i++) {
    myTable +=
      "<tr>" +
      "<td>" +
      '<a href="' +
      arrObj[i].url +
      '">' +
      arrObj[i].first_name +
      " " +
      (arrObj[i].middle_name || "") +
      arrObj[i].last_name +
      "</a>" +
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
