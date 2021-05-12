async function getAtGlanceStats(type) {
  const stats = {};
  const parties = ["ID", "D", "R"];

  let total = 0;
  let totalAverage = 0;

  await Promise.all(
    parties.map(async (party) => {
      const members = await retrieveMembers(type, [party], null);
      const membersCount = members.length;

      stats["number_of_" + party] = membersCount;
      total += membersCount;

      const sum =
        members.reduce(function (acc, val) {
          return acc + val.votes_with_party_pct;
        }, 0) / membersCount || 0;
      stats["voted_with_party_average_percentage_" + party] = sum;
      totalAverage += sum;
    })
  );

  stats["number_of_total"] = total;
  stats["voted_with_party_average_percentage_total"] =
    totalAverage / parties.length;

  return stats;
}
