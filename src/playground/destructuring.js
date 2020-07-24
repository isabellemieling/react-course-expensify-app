// Object Destructuring 
let person = {
    name: 'Isabelle',
    age: 26,
    location: {
        city: 'Boston',
        temp: 92
    }
};

let { name: firstName = 'Anonymous', age } = person; 
let { city, temp: temperature } = person.location; 

console.log(`${name} is ${age} years old`);
console.log(`${city} is ${temperature} degrees`);

let book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holliday', 
    publisher: {
        name: 'Penguin',
    }
};

let { name: publisherName = 'Self-Published' } = book.publisher;
console.log(`${publisherName}`);

// Array Destructuring 
let address = ['45 Myrtle Street', 'Boston', 'MA', '02114'];

let [, localCity, state = 'San Francisco', ] = address;

console.log(`You are in ${localCity} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
let [itemForSale, , medium] = item; 

console.log(`A medium ${itemForSale} costs ${medium}`);