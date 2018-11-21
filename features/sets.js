// var chatRooms = new Set();

// // Add
// chatRooms.add('Runners');
// chatRooms.add('Runners');
// chatRooms.add('Bikers');

// // Size
// console.log(chatRooms.size);

// // Has (checks if item exists in set)
// console.log(`Does the set have Runners: ${chatRooms.has('Runners')}`);

// // Delete
// // chatRooms.delete('Bikers');
// // chatRooms.clear();
// // console.log(chatRooms.size);

// chatRooms.add({name: 'David'});

// // To array
// console.log([...chatRooms]);

// chatRooms.forEach(function(chatRoom) {
// 	console.log(`Found chat room: ${chatRoom} `);
// });

// Challenge area
// define a set
var movies = new Set();

function addMovie(movieTitle) {
	if(movies.has(movieTitle)) {
		// error
		console.log(`Error! ${movieTitle} already exists!`)
	} else {
		// success
		movies.add(movieTitle);
		console.log(`Success! ${movieTitle} was added.`)
	}
}

addMovie('A New Hope');
addMovie('District 9');
addMovie('A New Hope');