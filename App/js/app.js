'use strict'

const weatherMap = new Map([
    ['London', '1'],
    ['Almaty', '2'],
    ['Tomsk', '3']
]);
console.log('New map from array of arrays:', weatherMap);

const weatherObj = {
    London: 7,
    Moscow: 10,
    Tomsk: 15
};
const weatherMap2 = new Map(Object.entries(weatherObj));
console.log('New map from object:', weatherMap2);