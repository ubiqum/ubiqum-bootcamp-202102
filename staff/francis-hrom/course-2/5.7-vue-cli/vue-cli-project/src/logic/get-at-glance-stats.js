import retrieveMembers from "./retrieve-members";

/**
 * Get data, calculate and return at glance statistics
 *
 * @param {string} type The type of member (House or Senate)
 *
 * @returns {object} At glance statistic object
 *
 * @throws {TypeError} When `type` is not a string
 */
export default function getAtGlanceStats(type) {
  if (typeof type !== "string") throw new TypeError(`${type} is not a string`);

  return (async () => {
    // IIFE
    const stats = {};
    const parties = ["ID", "D", "R"];

    let total = 0;
    let totalAverage = 0;

    await Promise.all(
      parties.map(async (party) => {
        const members = await retrieveMembers(type, [party], null);
        const membersCount = members.length;

        stats["numberOf" + party] = membersCount;
        total += membersCount;

        const sum =
          members.reduce(function (acc, val) {
            return acc + val.votes_with_party_pct;
          }, 0) / membersCount || 0;
        stats["votedWithPartyAveragePercentage" + party] = sum;
        totalAverage += sum;
      })
    );

    stats.numberOfTotal = total;
    stats.votedWithPartyAveragePercentageTotal = totalAverage / parties.length;

    return stats;
  })();
}
