// function add(a, b) {
// 	return a + b;
// }

// var numbers = [4, 22];

// console.log(add(1, 4));
// console.log(add(...numbers));

// var groupA = [1,2];
// var groupB = [8];
// var unified = [0,...groupA, ...groupB, 100];

// unified.push(...[55, 33]);

// console.log(unified); //all of these are SPREAD objects

// function greetUsers(group, ...names) {
// 	names.forEach(function(name) {
// 		console.log(`Hello ${name}. You're part of ${group}`)
// 	});
// }

// greetUsers('Developers', 'andrew', 'mike', 'jen')

// create function called adder, arguments (3, 5, 7, 1)

function adder(base, ...numbers) {
	numbers.forEach(function(number) {
		console.log(base + number)
	});
}
adder(3,5,7,1); //this returns 8, 10, 4...base === 3..do the math.