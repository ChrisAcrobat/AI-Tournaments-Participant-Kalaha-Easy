'use strict'
ParticipantHelper.onmessage = message => {
	let data = message.data;
	let length = (data.length/2) - 2;
	let lengthFull = data.length - 1;	// Do not count opposite store.
	// Go from right.
	for(let i = length; 0 <= i; i--){
		let stepsToStore = length - i + 1;
		// Look for first match to store from right.
		if(data[i]%lengthFull === stepsToStore){
			message.respond(i);
			return;
		}
	}
	// Select first from right with pallets.
	for(let i = length; 0 <= i; i--){
		if(0 < data[i]){
			message.respond(i);
			return;
		}
	}
}
