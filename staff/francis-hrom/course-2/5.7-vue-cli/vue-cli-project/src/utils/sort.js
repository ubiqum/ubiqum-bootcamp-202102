/**
 * Sorts an array in asceding order (lowest to highest) based on the property value
 *
 * @param {array} array
 * @param {string} property Property according to which the sorting will be done
 *
 * @returns {array} Array with sorted array.
 */
function sortAscending(array, property) {
  array.sort(function (x, y) {
    return x[property] - y[property];
  });
  return array;
}

/**
 * Sorts an array in descending order (lowest to highest) based on the property value
 *
 * @param {array} array
 * @param {string} property Property according to which the sorting will be done
 *
 * @returns {array} Array with sorted array.
 */
function sortDescending(array, property) {
  array.sort(function (x, y) {
    return y[property] - x[property];
  });
  return array;
}

export default { sortAscending, sortDescending };
