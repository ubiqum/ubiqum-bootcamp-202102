import retrieveStates from "./retrieve-states";

/**
 * Returns adjusted list of states
 *
 * @returns {object} List of states in format "abbriviation:state name" e.g. al:Alabama
 */
export default async function getStatesList() {
  const statesList = {};
  const states = await retrieveStates();

  for (const state of states) {
    const str = state.division_id;
    // get the last two letters from the "division_id" string, whih are abbreviation of that state
    const abbreviation = str.substr(str.length - 2, 2);
    statesList[abbreviation] = state.name;
  }
  return statesList;
}
