// add one element
var arr = ["Banana", "Orange"];
var element = "Kiwi";
console.assert(push(arr,element)===3,"Array length is 3.");
console.assert(JSON.stringify(arr)===JSON.stringify(["Banana", "Orange","Kiwi"]),'Array is in format ["Banana", "Orange","Kiwi"]');

// add three elements
var arr = ["Banana", "Orange"];
var element1 = "Kiwi";
var element2 = "Apple";
var element3 = "Mango";
console.assert(push(arr,element1,element2,element3)===5,"Array length is 5.");
console.assert(JSON.stringify(arr)===JSON.stringify(["Banana", "Orange","Kiwi","Apple", "Mango"]),'Array is in format ["Banana", "Orange","Kiwi","Apple", "Mango"]');


