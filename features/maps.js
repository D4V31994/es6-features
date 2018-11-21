// var myMap = new Map();

// // Set (sets key and its value)
// myMap.set('name', 'David'); //key is name, value is David

// // Get (retrieves key or value)
// console.log(myMap.get('name'));

// // Has (returns boolean t/f)
// myMap.set('age', 24);
// console.log(myMap.has('age'));

// // Delete (removes value by key)
// myMap.delete('name');

// // Clear (removes everything from map)
// myMap.clear();

// // Size (checks number of items)
// console.log(myMap.size);

// var user = true;
// myMap.set(user, 'New York City');
// console.log(myMap.get(user));

// var myMap = new Map();

// myMap.set(1, 'David');
// myMap.set(2, 'Jen');
// myMap.set(3, 'Ben');

// console.log([...myMap])
// console.log(myMap.keys())
// console.log(myMap.values())

// Challenge area

var location = {name: 'New York City'};
var secondLocation = {name: 'Philadelphia'};
var weather = new Map();

function setWeather(location, temp) {
	weather.set(location, temp);
}

function printWeather(location) {
	if(weather.has(location)) {
		console.log(`It's ${weather.get(location)} in ${location.name}`);
	} else {
		console.log(`No weather recorded for ${location.name}`)
	}

	// if there is weather, prints msg
	// if no weather, state no weather recorded
}

setWeather(location, 39);
printWeather(location);
printWeather(secondLocation);