// Unit Tests:
	// args: the function to test
	// returns: an informative message
	// behavior: unit tests will take in a function to test, 
		// run the function with predetermined arguments 
		// and tell you whether the function did the right thing or not


// A very simple unit test for addition
	function additionTester(testee) {
		var tested = testee(4, 5);
		var message = '';
		if (tested == 9) {
			message = 'success';
		} else {
			message = 'failure';
		};
		return message;
	}

