var arr = [1, 2, 3];
function double(num) {
  return num * 2;
}

console.assert(reduce(arr,double)===12,"Correct resuls is 12.");
