/**
 * Retrieve array of members from propublica.org API, cache the response and filter it according to the input party and state filters
 * @param {string} type
 * @param {string[]} parties Abbreviations for USA political parties ("D" for Democract, "R" for Republican, "ID" for Independent).
 * @param {string} state Abbreviation for one of the USA states (e.g. "al" for Alabama)
 * @returns {array} Array with filtres members.
 */
export default function retrieveMembers(type, parties, state) {
  if (typeof type !== "string") throw new TypeError(`${type} is not a string`);
  if (Array.isArray(parties) !== true && parties !== null)
    throw new TypeError(`${parties} is not an array or null`);
  if (typeof state !== "string" && state !== null)
    throw new TypeError(`${state} is not a string or null`);

  return (async () => {
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
  })();
}

// helper function

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
