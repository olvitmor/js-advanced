'use strict'

const weatherMap = new Map();
console.log('Creating new Map object:', weatherMap);

console.log('\n');

console.log('Fill Map object:');
weatherMap
    .set('Moscow', '10')
    .set('London', '7')
    .set('Tomsk', '16');
console.log(weatherMap);

console.log('\n');

console.log('Getting object with get() method:');
console.log('Tomsk', weatherMap.get('Tomsk'));
console.log('Novosibirsk', weatherMap.get('Novosibirsk'));

console.log('\n');

console.log('Check if key exists:');
console.log('Moscow', weatherMap.has('Moscow'));
console.log('Almaty', weatherMap.has('Almaty'));

console.log('\n');

console.log('Delete object "Moscow"', weatherMap.delete('Moscow'), weatherMap);
console.log('Delete object "Almaty"', weatherMap.delete('Almaty'), weatherMap);

console.log('\n');

console.log('Clearing Map:');
weatherMap.clear();
console.log(weatherMap);

console.log('\n');

const arr = [1, 2, 3];
const obj = { a: 1 };
console.log('Fill Map with different keys:');
weatherMap
    .set(true, 1)
    .set(1, 'one')
    .set(false, 'no')
    .set(arr, 'array')
    .set(obj, { b: 1 })
console.log(weatherMap);

console.log('\n');

console.log('Get value with key of array type:', weatherMap.get(arr));
console.log('Get value with key of object type:', weatherMap.get(obj));

console.log('\n');

console.log('Get size of Map with size property:', weatherMap.size);