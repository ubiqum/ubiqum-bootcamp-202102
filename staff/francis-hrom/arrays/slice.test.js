var arr = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.assert(JSON.stringify(slice(arr,2,3))===JSON.stringify(['camel', 'duck']),"New array is in the format ['camel', 'duck'].");
console.assert(JSON.stringify(slice(arr,2))===JSON.stringify(['camel', 'duck', 'elephant']),"New array is in the format ['camel', 'duck', 'elephant'].");
console.assert(JSON.stringify(slice(arr))===JSON.stringify(['ant', 'bison', 'camel', 'duck', 'elephant']),"New array is in the format ['ant', 'bison', 'camel', 'duck', 'elephant']");
