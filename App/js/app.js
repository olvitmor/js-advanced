'use strict'

const weatherMap = new Map([
    ['London', 10],
    ['Almaty', 7],
    ['Tomsk', 16]
]);
console.log('Creating new Map:', weatherMap);

console.log('Iterating weatherMap:');
for (const [key, value] of weatherMap) {
    console.log('Key:', key, 'Value:', value);
}

console.log('Getting keys of Map:', weatherMap.keys());
console.log('Getting values of Map:', weatherMap.values());

console.log('Getting array of arrays of Map with spread syntax:', [...weatherMap]);
console.log('Getting array of keys of Map with spread syntax:', [...weatherMap.keys()]);
console.log('Getting array of values of Map with spread syntax', [...weatherMap.values()]);