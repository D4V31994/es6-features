// function greet (name = 'David') {
// 	console.log('Hello ' + name + '!');
// 	console.log(`Hello ${name}!`)
// }

// greet();
// greet('Kate');

// console.log(`1 + 6 = ${1 + 6}`)

// console.log(`Hey,

// This kind of looks like an email!

// ~ David
// `);

var person = {
	name: 'David',
	age: 24
};

var defaultPerson = {
	name: 'Anonymous',
	age: 0
};
// function name anonymous, age, 0;

function welcomePerson(person = defaultPerson) {
	console.log(`Hello ${person.name}! You are ${person.age}`);
}

welcomePerson();
welcomePerson(person);