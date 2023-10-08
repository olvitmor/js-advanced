'use strict'

const flights = ['Russia', 'USA', 'Canada', 'London', 'London'];
console.log('Creating array "fligts":', flights);

console.log('\n');

const setFlights = new Set(flights);
console.log('Creating SET from array of flights:', setFlights);

console.log('\n');

console.log('Get set length by using SIZE property:', setFlights.size);

console.log('\n');

console.log('Check if set contains any object by "has()" method:');
console.log('Russia:', setFlights.has('Russia'));
console.log('Kazakhstan:', setFlights.has('Kazakhstan'));

console.log('\n');

console.log('Add new object with "add()" method:');
console.log('Russia:', setFlights.add('Russia'));
console.log('Australia:', setFlights.add('Australia'));

console.log('\n');

console.log('Remove object with "delete()" method:');
console.log('Canada:', setFlights.delete('Canada'));
console.log('Argentina:', setFlights.delete('Argentina'));
console.log(setFlights);

console.log('\n');

console.log('Iterating elements:');
for (let flight of setFlights) {
    console.log('Element:', flight);
}

console.log('\n');

console.log('Using spread syntax to convert SET to ARRAY:', [...setFlights]);

console.log('\n');

console.log('Creating SET from string object:');
console.log('String "abcdeeedddaaa":', new Set('abcdeeedddaaa'));


console.log('End of lesson ╰(*°▽°*)╯')

