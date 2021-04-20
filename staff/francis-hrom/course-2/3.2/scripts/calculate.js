function calculateStatistics() {
  senateStatistics.number_of_democracts = filterMembers(
    senateData.results[0].members,
    ["D"],
    ""
  ).length;
  senateStatistics.number_of_republicans = filterMembers(
    senateData.results[0].members,
    ["R"],
    ""
  ).length;
  senateStatistics.number_of_independents = filterMembers(
    senateData.results[0].members,
    ["ID"],
    ""
  ).length;
}

import { senateStatistics } from "./statistics.js";
import { filterMembers } from "./main.js";
import { senateData } from "./pro-congress-113-senate.js";
import { houseData } from "./pro-congress-113-house.js";

export { calculateStatistics };
