import retrieveMembers from "./retrieve-members";
import { sort } from "../utils";
import getAtGlanceStats from "./get-at-glance-stats";

const { sortAscending, sortDescending } = sort;

/**
 * Get array of filtred members for least/most tables
 *
 * @param {string} type The type of member (House or Senate)
 * @param {string} property Property according to which the sorting will be done
 * @param {number} order Sorting members list (asceding 1 or descending order -1)
 *
 * @returns {array} The filtered members
 */
export default function getLeastMostMembers(type, property, order) {
  if (typeof type !== "string") throw new TypeError(`${type} is not a string`);
  if (typeof property !== "string")
    throw new TypeError(`${property} is not a string`);
  if (typeof order !== "number")
    throw new TypeError(`${order} is not a number`);

  return (async () => {
    const filtredMembers = [];

    let members = await retrieveMembers(type, null, null);

    members =
      order > 0
        ? sortAscending(members, property)
        : sortDescending(members, property);

    // amount of members which should be returned; 0.1 = 10%
    const amount = Math.round(
      (await getAtGlanceStats(type)).numberOfTotal * 0.1
    );

    for (const member of members.slice(0, amount)) {
      filtredMembers.push(member);
    }

    // in case the last member has the same value of sort element as the previous memeber, she will be added to array with results
    let lastMember = members[amount - 1];

    for (const member of members.slice(amount)) {
      if (member[property] === lastMember[property]) {
        filtredMembers.push(member);

        lastMember = member;
      } else {
        break;
      }
    }

    return filtredMembers;
  })();
}
