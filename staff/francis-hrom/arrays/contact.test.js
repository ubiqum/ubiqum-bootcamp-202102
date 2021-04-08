var arr1 = ["Banana", "Orange"];
var arr2 = ["Kiwi", "Mango", "Apple"];
var arr3 = ["Sammuro"];

console.assert(JSON.stringify(concat(arr1,arr2,arr3))===JSON.stringify(["Banana", "Orange","Kiwi", "Mango", "Apple","Sammuro"]),'Array is in format ["Banana", "Orange","Kiwi", "Mango", "Apple","Sammuro"]');
console.assert(concat(arr1,arr2,arr3).length===6,"Array length is 6.");
