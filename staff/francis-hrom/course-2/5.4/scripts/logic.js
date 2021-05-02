// filter data based on the input filters
function filterMembers(data, partyCheckboxValues, StateDropdownValue) {
  let filtredData = [];

  if (
    JSON.stringify(partyCheckboxValues) == JSON.stringify(["R", "D", "ID"]) &&
    StateDropdownValue == ""
  ) {
    filtredData = data;
  } else if (StateDropdownValue == "") {
    for (const party of partyCheckboxValues) {
      filtredData = filtredData.concat(
        data.filter((member) => member.party == party)
      );
    }
  } else {
    for (const party of partyCheckboxValues) {
      filtredData = filtredData.concat(
        data.filter(
          (member) =>
            member.party == party && member.state == StateDropdownValue
        )
      );
    }
  }

  return filtredData;
}

function calculateAllStatistics() {
    // calculate statistics for both house and senate
    memberDataTables.forEach((table) => {
      calculateStatistics(table.data, table.statistics);
    });
}



// calculate statistics required for the tables
function calculateStatistics(input, output) {
  // get filtred data by party affiliation
  const democracts = filterMembers(input, ["D"], "");
  const republicans = filterMembers(input, ["R"], "");
  const independents = filterMembers(input, ["ID"], "");

  // calculate amount of members per party affiliation
  output.number_of_democracts = democracts.length;
  output.number_of_republicans = republicans.length;
  output.number_of_independents = independents.length;

  output.number_of_representatives_total =
    output.number_of_democracts +
    output.number_of_republicans +
    output.number_of_independents;

  // can not devide by zero, if number of representatives is 0 then result is also 0
  // calculate votes with party %
  if (output.number_of_democracts === 0) {
    output.voted_with_party_average_percentage_democracts = 0;
  } else {
    output.voted_with_party_average_percentage_democracts =
      democracts.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.votes_with_party_pct;
      }, 0) / output.number_of_democracts;
  }

  if (output.number_of_republicans === 0) {
    output.voted_with_party_average_percentage_republicans = 0;
  } else {
    output.voted_with_party_average_percentage_republicans =
      republicans.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.votes_with_party_pct;
      }, 0) / output.number_of_republicans;
  }

  if (output.number_of_independents === 0) {
    output.voted_with_party_average_percentage_independents = 0;
  } else {
    output.voted_with_party_average_percentage_independents =
      independents.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.votes_with_party_pct;
      }, 0) / output.number_of_independents;
  }

  output.voted_with_party_average_percentage_total =
    (output.voted_with_party_average_percentage_democracts +
      output.voted_with_party_average_percentage_republicans +
      output.voted_with_party_average_percentage_independents) /
    3;

  // calculate render treshhold, set by the client to 10% from total representatives
  output.render_threshold = Math.round(
    output.number_of_representatives_total * 0.1
  );
}

// refactor to one fuction with three parameters (data,sortByElement, order)
// sort in asceding order, lowest to highest
function sortAsc(data, sortBy) {
  data.sort(function (x, y) {
    return x[sortBy] - y[sortBy];
  });
  return data;
}

// sort in descending order, from highest to lowest
function sortDescending(data, sortBy) {
  data.sort(function (x, y) {
    return y[sortBy] - x[sortBy];
  });
  return data;
}

// get data from https://v3.openstates.org/, show fetch errors or return the correct data
async function retrieveLegislatorsByStatePage(state, pageNumber) {
   try {
  const response = await fetch(
    "https://v3.openstates.org/people?jurisdiction=" +
      state +
      "&page=" +
      pageNumber +
      "&per_page=50&apikey=8d56acbc-063a-4e0f-8f76-a4c2036a0390"
  );

  return await response.json();
   } catch (error) {
    alert("Error! -> " + error);
  }
}

async function retrieveLegislators(state) {
  const json = localStorage.getItem(state);

  if (json) {
    // If there's somethin in the localStorage with our key, return that data:
    return JSON.parse(json);
  } /* else {
    json = "";
  } */

  // get the first page of data from that specific state
  const page1Data = await retrieveLegislatorsByStatePage(state, 1);
  // get the value of max_page, which will determine how many calls there will be in total
  const maxPage = page1Data.pagination.max_page;
  // concat array of values with people from the page1 fetch call to data
  const results = page1Data.results;

  // fetch data from API until max_page is reached and concat array of values with people from every fetch call to data
  // promise all, all calls should start at the same time and code shoudl continue once all promises are resolved
  // Promise.all([selectPizza(), selectDrink()]).then(orderItems)   // async call
  for (let i = 2; i <= maxPage; i++) {
    results.push(...(await retrieveLegislatorsByStatePage(state, i)).results);
    // results.push(...(await retrieveLegislatorsByStatePage(state, i)).results);
  }
/* 
  async function orderItems() {
    const items = await getCartItems()    // async call
    const noOfItems = items.length
    const promises = []
    for(var i = 0; i < noOfItems; i++) {
      const orderPromise = sendRequest(items[i])    // async call
      promises.push(orderPromise)    // sync call
    }
    await Promise.all(promises)    // async call
  }
  
  // Although I prefer it this way 
  
  async function orderItems() {
    const items = await getCartItems()    // async call
    const promises = items.map((item) => sendRequest(item))
    await Promise.all(promises)    // async call
  } */

  // save all fetched and combined data to local storage
  localStorage.setItem(state, JSON.stringify(results));

  return results;
}