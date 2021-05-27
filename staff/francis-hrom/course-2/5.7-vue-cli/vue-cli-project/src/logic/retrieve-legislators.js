/**
 * Retrieve legislators by input state from openstates.org API
 * @param {string} state Abbreviation for one of the USA states (e.g. "al" for Alabama)
 * @returns {array} Array with legislators from the input state
 */
export default function retrieveLegislators(state) {
  if (typeof state !== "string")
    throw new TypeError(`${state} is not a string`);

  return (async () => {
    const json = localStorage.getItem(state);

    if (json) {
      // If there's somethin in the localStorage with our key, return that data:
      return JSON.parse(json);
    }

    // get the first page of data from that specific state
    const page1Data = await retrieveLegislatorsByStatePage(state, 1);
    // get the value of max_page, which will determine how many calls there will be in total
    const maxPage = page1Data.pagination.max_page;
    const legislators = page1Data.results;

    // fetch data from API until max_page is reached and concat array of values with people from every fetch call to data
    for (let i = 2; i <= maxPage; i++) {
      legislators.push(
        ...(await retrieveLegislatorsByStatePage(state, i)).results
      );
    }

    // save all fetched and combined data to local storage
    localStorage.setItem(state, JSON.stringify(legislators));

    return legislators;
  })();
}

// helper function
/**
 * Retrieve legislators by input state and API page from openstates.org API
 * @param {string} state Abbreviation one for the states from USA (e.g. "al" for Alabama)
 * @param {number} pageNumber Number of the page in the API pagination
 * @returns {object} JSON object with legislators
 */
async function retrieveLegislatorsByStatePage(state, pageNumber) {
  const response = await fetch(
    "https://v3.openstates.org/people?jurisdiction=" +
      state +
      "&page=" +
      pageNumber +
      "&per_page=50&apikey=8d56acbc-063a-4e0f-8f76-a4c2036a0390"
  );
  return await response.json();
}
