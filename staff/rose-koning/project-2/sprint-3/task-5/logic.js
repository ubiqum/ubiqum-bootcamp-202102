function getJurisdictionID(searchedState,callback) {

  if (searchedState) {
    console.log(searchedState + " is your selected state");
  } else alert("there is no matching state found for" + searchedState);

  //get jurisdiction lists with jurisdictionID´s
  fetch(
    "https://v3.openstates.org/jurisdictions?classification=state&page=1&per_page=52&apikey=640d3190-2907-402a-afaf-6bd88f7caf3b"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var listOfStates = data.results;
      setDropDown(listOfStates)
      for (var i = 0; i < listOfStates.length; i++) {
        var state = listOfStates[i];
        if (state.id.includes("/state:"+ searchedState)) {
          var jurisdictionID = state.id;
          break;
        }
      }
      callback(jurisdictionID)
    });
}


function setPages(pageNumbers){
    var ul = document.getElementById("page_numbers");
    for(i=1; i<(pageNumbers-1); i++){
    pageNumber = document.createElement("li")
    pageNumber.className = 'page-item'

    pageLink = document.createElement("a");
    pageLink.className ="page-link";
    pageLink.innerText=i;
    pageLink.href= "?page="+i
    pageNumber.append(pageLink);
    ul.append(pageNumber)
    }
}
function setDropDown(listOfStates){
  for(i=0; i<listOfStates.length;i++){
  
  string = listOfStates[i].id
  locationState=string.indexOf("/state:") + 7
  stateAcronym = string.substring(locationState,locationState+2)
  dropDownMenu =document.getElementById("state-selection");

  dropDownElement = document.createElement("a")
  dropDownElement.className = "dropdown-item"
  dropDownElement.href = "?state="+stateAcronym;
  dropDownElement.innerText= listOfStates[i].name;

  dropDownMenu.append(dropDownElement);}
}