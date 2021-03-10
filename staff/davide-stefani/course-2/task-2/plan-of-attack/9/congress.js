var table = document.getElementById("result-data");

var members = data.results[0].members;

var tbody = table.querySelector("tbody");

members.forEach(function (member) {

  var row = document.createElement("tr");

  var fullname = document.createElement("td");
  var hyperLink = document.createElement("a");
  hyperLink.setAttribute("href", member.url);
  hyperLink.setAttribute("target", "_blank");
  hyperLink.innerText = (member.first_name) + ' ' + (member.middle_name ||= '') + ' ' + (member.last_name);
  fullname.append(hyperLink);

  var party = document.createElement("td");
  party.innerText = member.party;

  var state = document.createElement("td");
  state.innerText = member.state;

  var seniority = document.createElement("td");
  seniority.innerText = member.seniority;

  var votepercentage = document.createElement("td");
  votepercentage.innerText = member.votes_with_party_pct + " %";

  row.append(fullname, party, state, seniority, votepercentage)

  table.append(row)

  tbody.append(row);

});

/*
var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
})
var myCollapse = document.getElementById('moreText')
var bsCollapse = new bootstrap.Collapse(myCollapse, {
  toggle: false
})

var readMoreBtn = document.getElementById('moreT')
myCollapsible.addEventListener('hidden.bs.collapse', function () {
  if (readMoreBtn.innerText === "Read More"){
    readMoreBtn.innerText = "Read Less";
  } else {
    readMoreBtn.innerText = "Read More";
  }
})

var myCollapsible = document.getElementById('myCollapsible')
myCollapsible.addEventListener('show.bs.collapse', function () {
  if (readMoreBtn.innerText === "Read More"){
    readMoreBtn.innerText = "Read Less";
  } else {
    readMoreBtn.innerText = "Read More";
  }
})

var readMoreBtn = document.querySelector(".read-more-btn");
var text = document.querySelector(".text");

readMoreBtn.addEventListener("click", function(e){
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Read More"){
    readMoreBtn.innerText = "Read Less";
  } else {
    readMoreBtn.innerText = "Read More";
  }
})*/
