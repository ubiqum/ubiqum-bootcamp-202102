var arr = [5, 12, 8];
function double(num) {
  return num * 2;
}

console.assert(JSON.stringify(map(arr,double))===JSON.stringify([10, 24, 16]),"Final array is in format [10, 24, 16]");
console.assert(arr.length===3,"Array length is 3.");