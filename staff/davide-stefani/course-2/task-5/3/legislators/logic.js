/*Put in the HTML for fixed headings and table structure that you want. Create a template for the rows of the table. 
For now, just show the data that's given, i.e., name, party, the chamber (upper or lower). The template should make the 
names be links to the legislator's home page. Save the conversion of the "upper" and "lower" terms for later.

Create the JavaScript code to display the data
Write JavaScript code similar to what you've done before, to get the template for the table rows, 
call Mustache's render() function to create the HTML from that template with the legislator data, and store in the 
HTML document.*/

function renderLegislators() {
    var template = document.getElementById('template').innerHTML;
    var rendered = Mustache.render(template, peopleAlabama);
    document.getElementById('target').innerHTML = rendered;


peopleAlabama.foreach(peopleAlabama, function (index, item) {
    var html = ""
        + "<tr>"
        + "<td>{{ peopleAlabama.name }}</td>"
        + "<td>{{ peopleAlabama.party }}</td>"
        + "<td>{{ peopleAlabama.jurisdiction.name }}</td>"
        + "<td>{{ peopleAlabama.current_role.title }}</td>"
        + "</tr>";

    $("body").append(Mustache.render(html,item));
})
}
/*
var members = peopleAlabama.results[0];

      fillTable(members);


      function fillTable(members) {
        var table = document.getElementById("legislators-data");
        var tbody = table.querySelector("tbody");

        members.forEach(function (member) {
          var row = document.createElement("tr");

          var fullname = document.createElement("td");
          var hyperLink = document.createElement("a");
          hyperLink.setAttribute("href", member.openstates_url);
          hyperLink.setAttribute("target", "_blank");
          hyperLink.innerText = (member.name);
          fullname.append(hyperLink);

          var party = document.createElement("td");
          party.innerText = member.party;

          var state = document.createElement("td");
          state.innerText = member.jurisdiction.name;

          var chamber = document.createElement("td");
          chamber.innerText = member.currentrole.title;

          row.append(fullname, party, state, chamber)

          table.append(row)

          tbody.append(row);
        });
      }
      */