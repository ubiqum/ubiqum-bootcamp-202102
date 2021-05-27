/**
 * Retrieve array of members from propublica.org API, cache the response and filter it according to the input party and state filters
 * @param {string} type 
 * @param {string[]} parties Abbreviations for USA political parties ("D" for Democract, "R" for Republican, "ID" for Independent)
 * @param {string} state Abbreviation for one of the USA states (e.g. "al" for Alabama) 
 * @returns {array} Array with filtres members.
 */
async function retrieveMembers(type, parties, state) {
  const url =
    "https://api.propublica.org/congress/v1/113/" + type + "/members.json";

  const json = localStorage.getItem(url);

  if (json) {
    const members = JSON.parse(json);
    const filtered = filterMembers(members, parties, state);
    return filtered;
  } else {
    const options = {
      headers: { "X-API-Key": "PeoQrPJONEB0oy2bwTSlMvnliYvyCSCTOlEH5HPP" },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    const members = data.results[0].members;
    localStorage.setItem(url, JSON.stringify(members));
    const filtered = filterMembers(members, parties, state);
    return filtered;
  }
}

// error handling should be done in vue / view / presentation logic

// helper function
// filter data based on the input filters
/**
 * Filter members according to the input party and state filters
 * @param {string} type 
 * @param {string[]} parties Abbreviations for USA political parties ("D" for Democract, "R" for Republican, "ID" for Independent)
 * @param {string} state Abbreviation for one of the USA states (e.g. "al" for Alabama) 
 * @returns {array} Array with filtres members.
 */
function filterMembers(members, parties, state) {
  return members.filter((member) => {
    if (parties && !parties.includes(member.party)) {
      return false;
    }
    if (state && member.state.toLowerCase() != state) {
      return false;
    }
    return true;
  });
}
