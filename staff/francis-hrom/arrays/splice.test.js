var arr = ['ant', 'bison', 'camel', 'duck'];
console.assert(JSON.stringify(splice(arr,1,2,'elephant','chupacabra'))===JSON.stringify(['ant','elephant','chupacabra','duck']),"Array was changed to format ['ant','elephant','chupacabra', 'duck'].");

var arr = ['ant', 'bison', 'camel', 'duck'];
console.assert(JSON.stringify(splice(arr,1,2))===JSON.stringify(['ant', 'duck']),"Array was changed to format ['ant', 'duck'].");

var arr = ['ant', 'bison', 'camel', 'duck'];
console.assert(JSON.stringify(splice(arr))===JSON.stringify(['ant', 'bison', 'camel', 'duck']),"Array was not changed and remained in format ['ant', 'bison', 'camel', 'duck'].");
