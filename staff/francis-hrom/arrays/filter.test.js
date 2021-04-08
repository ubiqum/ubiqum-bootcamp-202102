var arr1 = [5, 12, 8, 45, 85];
var arr2 = [5, 12, 8, 3, 15];
function checkAdult(age) {
  return age >= 18;
}

console.assert(JSON.stringify(filter(arr1,checkAdult))===JSON.stringify([45, 85]),"Array all elements that pass the test implemented by the provided function is [45, 85].");
console.assert(JSON.stringify(filter(arr2,checkAdult))===JSON.stringify([]),"No values satisfy the testing function, empty array is returned.");

