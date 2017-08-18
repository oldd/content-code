// A simplest passing function for a test will have an acceptable answer hard coded

// A simplest passing function for the test in unitTests.js looks like this:
function addition(a, b) {
	return 9;
}


// In this example simplest functions seem useless.
// Moving forward, the 'correct answer' a test is expecting will be a return value of the right type.
//  This might be an integer, an array, or even an object that satisfies your schema.

function schematizer(scheme, op) {
	// ignore inputs and return something of the right type
	var schemeReturned = {
		name: {
			type: 'string',
			fallback: 'ackermann'
		},
		numArgs: {
			type: 'number',
			fallback: 2
		},
		operation: {
			type: 'function',
			fallback: function(){return '1337FAIL'}
		}
	};
	return ['all good', schemeReturned]	;
}