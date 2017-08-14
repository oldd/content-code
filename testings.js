// function
function division(a, b) {
	var result = 0000;
	// logic
	return result;
};

// specs
/*
division: function
	args: 2
		a: number
		b: number
	return: number
	behavior: divides a by b if b !== 0
*/

// some unit tests
// notice i've carefully chosen the test values (sample input/output pairs) 
// to represent the important categories of arguments division can accept 
function test_1_division(testee) {  // positive, positive
	var a = 3;
	var b = 3;
	var expected = 1;
	var result = testee(a, b);
	if(result == expected) {
		return true;
	} else {
		return false;
	};
};
function test_2_division(testee) { // negative, negative
	var a = -3;
	var b = -3;
	var expected = 1;
	var result = testee(a, b);
	if(result == expected) {
		return true;
	} else {
		return false;
	};
};
function test_3_division(testee) { // positive, negative
	var a = 3;
	var b = -3;
	var expected = -1;
	var result = testee(a, b);
	if(result == expected) {
		return true;
	} else {
		return false;
	};
};
function test_4_division(testee) { // negative, positive
	var a = -3;
	var b = 3;
	var expected = -1;
	var result = testee(a, b);
	if(result == expected) {
		return true;
	} else {
		return false;
	};
};
function test_5_division(testee) { // non-0, 0
	var a = 3;
	var b = 0;
	var expected = undefined;
	var result = testee(a, b);
	if(result == expected) {
		return true;
	} else {
		return false;
	};
};
function test_6_division(testee) { // 0, non-0
	var a = 0;
	var b = 3;
	var expected = 0;
	var result = testee(a, b);
	if(result == expected) {
		return true;
	} else {
		return false;
	};
};

// a demo test-suite, tedious to build by hand
// what frameworks make easy
// but is fundamentally the same between them all
function division_test_suite(testee) {
	var result = [];
	if(test_1_division(testee)) {  // +/+
		result.push('PASS +/+');
	} else {
		result.push('fail +/+');
	};
	if(test_2_division(testee)) {  // -/-
		result.push('PASS -/-');
	} else {
		result.push('fail -/-');
	};
	if(test_3_division(testee)) {  // +/-
		result.push('PASS +/-');
	} else {
		result.push('fail +/-');
	};
	if(test_4_division(testee)) {  // -/+
		result.push('PASS -/+');
	} else {
		result.push('fail -/+');
	};
	if(test_5_division(testee)) {  // +/0
		result.push('PASS +/0');
	} else {
		result.push('fail +/0');
	};
	if(test_6_division(testee)) {  // 0/+
		result.push('PASS 0/+');
	} else {
		result.push('fail 0/+');
	};
	return result;
};

/*
test driven development would say that before you write a single line of code
you need to write specs for your whole application, then write unit tests,
then assemble your test suites.  
Only once alll that is done do actually start writing code.  when you're writing code, 
the sole measure of success is to pass the tests starting with the simplest
possible implementation that will pass, then refactoring to write better code.
So, the TDD development process would look like this:
1 - plan application
2 - write tests
3 - quickly write the shittiest possible code that will compile and fits the specs (maybe even with hardcoded return values)
4 - while(not ready for production)	
	a - put your code the testing suite to see what's wrong with it
	b - refactor the code so it is prettier/more maintainable/more efficient/...
5 - deploy
*/



