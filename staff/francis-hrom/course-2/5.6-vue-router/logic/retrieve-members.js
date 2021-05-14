// get data from cache or fetch them from propublica.org API, show fetch errors or return the correct data
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
