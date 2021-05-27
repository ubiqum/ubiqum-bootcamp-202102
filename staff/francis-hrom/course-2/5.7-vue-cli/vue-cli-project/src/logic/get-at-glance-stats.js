import retrieveMembers from "./retrieve-members";

/**
 * Get data, calculate and return at glance statistics
 *
 * @param {string} type The type of member (House or Senate)
 *
 * @returns {object[]} At glance statistic array of objects
 *
 * @throws {TypeError} When `type` is not a string
 */
export default function getAtGlanceStats(type) {
  if (typeof type !== "string") throw new TypeError(`${type} is not a string`);

  return (async () => {
    // IIFE
    const statsArr = [];

    const parties = [
      { name: "Democracts", ID: "D" },
      { name: "Republicans", ID: "R" },
      { name: "Independents", ID: "ID" },
    ];

    let total = 0;
    let totalAverage = 0;

    await Promise.all(
      parties.map(async (party) => {
        const members = await retrieveMembers(type, [party.ID], null);
        const stats = {};
        stats.party = party.name;

        const membersCount = members.length;
        stats.numberOfReps = membersCount;
        total += membersCount;

        const average =
          members.reduce(function (acc, val) {
            return acc + val.votes_with_party_pct;
          }, 0) / membersCount || 0;

        stats.votedWithParty = average.toFixed(2);
        totalAverage += average;
        statsArr.push(stats);
      })
    );

    const stats = {};
    stats.party = "Total";
    stats.numberOfReps = total;
    stats.votedWithParty = (totalAverage / parties.length).toFixed(2);
    statsArr.push(stats);

    return statsArr;
  })();
}
