var arr1 = [5, 12, 8, 45, 85];
var arr2 = [5, 12, 8, 3, 15];
function checkAdult(age) {
  return age >= 18;
}

console.assert(find(arr1,checkAdult)===45,"First element in the provided array that satisfies the provided testing function is 45.");
console.assert(find(arr2,checkAdult)===undefined,"No values satisfy the testing function, undefined is returned.");

