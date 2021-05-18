/**
 * Retrieve list of states from the openstates.org API and adjust them to suitable format
 * @returns {object[]} Array of state objects
 */
export default async function retrieveStates() {
  const url =
    "https://v3.openstates.org/jurisdictions?classification=state&page=1&per_page=52&apikey=8d56acbc-063a-4e0f-8f76-a4c2036a0390";
  const json = localStorage.getItem(url);

  if (json) {
    return JSON.parse(json);
  } else {
    const response = await fetch(url);
    const data = await response.json();
    const states = data.results;
    localStorage.setItem(url, JSON.stringify(states));

    return states;
  }
}
