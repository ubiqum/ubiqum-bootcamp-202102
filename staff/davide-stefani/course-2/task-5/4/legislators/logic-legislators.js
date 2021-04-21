function retrieveJurisdictionIdByState(searchedState, callback) {
   debugger
    if (!localStorage.jurisdictions)
           fetch(
               "https://v3.openstates.org/jurisdictions?classification=state&page=1&per_page=52&apikey=de2b3634-5679-4a06-bb71-c350f876fbad"
           )
               .then(function (response) {
                   return response.json();
               })
               .then(function (_data) {
                   var data = _data;
   
                   localStorage.jurisdictions = JSON.stringify(data, searchedState);
   
                   var jurisdictionID = searchState(data, searchedState);
   
                   callback(jurisdictionID);
               });
       else {
           var data = JSON.parse(localStorage.jurisdictions);
   
           var jurisdictionID = searchState(data, searchedState);
   
           callback(jurisdictionID);
       }
   }
   
   var listOfStates = data.results;
   function searchState(data, searchedState) {
       
       setDropDown(listOfStates);
       for (var i = 0; i < listOfStates.length; i++) {
           var state = listOfStates[i];
           if (state.id.includes("/state:" + searchedState)) {
               var jurisdictionID = state.id;
               break;
           }
       }
       return jurisdictionID;
   }
   
   function setDropDown(listOfStates) {
       for (i = 0; i < listOfStates.length; i++) {
           string = listOfStates[i].id;
           locationState = string.indexOf("/state:") + 7;
           stateAcronym = string.substring(locationState, locationState + 2);
           dropDownMenu = document.getElementById("state-selection");
   
           dropDownElement = document.createElement("a");
           dropDownElement.className = "dropdown-item";
           dropDownElement.href = "?state=" + stateAcronym;
           dropDownElement.innerText = listOfStates[i].name;
   
           dropDownMenu.append(dropDownElement);
       }
   }
   
   function retrieveLegislatorsByJurisdiction(jurisdictionID, page, callback) {
       var url =
       "https://v3.openstates.org/people?jurisdiction=" +
       jurisdictionID +
       "&page=" +
       page +
           "&=52&apikey=de2b3634-5679-4a06-bb71-c350f876fbad";
   
       if (!localStorage[jurisdictionID + "-" + page]) {
           fetch(url)
               .then(function (response) {
                   return response.json();
               })
               
               .then(function (_data) {
                   var legislators = _data;
                   
                   callback(legislators);
               });
       } else {
           var legislators = JSON.parse(localStorage[jurisdictionID + "-" + page]);
   
           callback(legislators);
       }
   }
   