Without constructors  ----------------------------------------------------------------------------------\


var History = [];

// args:  old universe, element to change, what change to make
// return:  a new universe object with the appropriate data changes
function change(universe, element, delta) {
	if (element == 'matter') {
		var newMat = {amount: universe.matter.amount + delta};
		var newEns = {amount: universe.energy.amount - delta};
		var newNie = {matter: newMat, energy: newEns};
		return newNie;
	}
	else {
		
		var newMat = {amount: universe.matter.amount - delta};
		var newEns = {amount: universe.energy.amount + delta};
		var newNie = {matter: newMat, energy: newEns};
		return newNie;
	};
};

var mat = {amount: 6};
var ens = {amount: 9};
var unie1 = {matter: mat, energy: ens};

var unie2 = change(unie1, 'energy', 4);
var unie3 = change(unie2, 'matter', 5);

History.push(unie1);
History.push(unie2);
History.push(unie3);

console.log(History);
console.log('\n');
console.log(unie1);
console.log(unie2);
console.log(unie3);




With Constructors ----------------------------------------------------------------------------------------------/

var History = [];

function Universe(mats, ens) {
	this.matter = mats;
	this.energy = ens;
};
function Matter(amount) {
	this.amount = amount;
};
function Energy(amount) {
	this.amount = amount;
};

// args:  old universe, element to change, what change to make
// return:  a new universe object with the appropriate data changes
function change(universe, element, delta) {
	if (element == 'matter') {
		var newMat = new Matter(universe.matter.amount + delta);
		var newEns = new Energy(universe.energy.amount - delta);
		var newNie = new Universe(newMat, newEns);
		return newNie;
	}
	else {
		var newMat = new Matter(universe.matter.amount - delta);
		var newEns = new Energy(universe.energy.amount + delta);
		var newNie = new Universe(newMat, newEns);
		return newNie;
	};
};

var mat = new Matter(6);
var ens = new Energy(9);
var unie1 = new Universe(mat, ens);

var unie2 = change(unie1, 'energy', 4);
var unie3 = change(unie2, 'matter', 5);





And a multiverse -------------------------------------------------------------------/

// write a function to delete a selected universe

// History contains multiverses
var History = [];

function Multiverse() {
	this.universes = [];
};

function Universe(mats, ens) {
	this.matter = mats;
	this.energy = ens;
};
function Matter(amount) {
	this.amount = amount;
};
function Energy(amount) {
	this.amount = amount;
};

// args:  old universe, element to change, what change to make
// return:  a new universe object with the appropriate data changes
function updateUniverse(universe, element, delta) {
	if (element == 'matter') {
		// these next 4 lines are repeated in my code.  they should be their own function
		var newMat = new Matter(universe.matter.amount + delta);
		var newEns = new Energy(universe.energy.amount - delta);
		var newNie = new Universe(newMat, newEns);
		return newNie;
	}
	else {
		// these next 4 lines are repeated in my code.  they should be their own function
		var newMat = new Matter(universe.matter.amount - delta);
		var newEns = new Energy(universe.energy.amount + delta);
		var newNie = new Universe(newMat, newEns);
		return newNie;
	};
};

// takes a multiverse and index, returns the appropriate universe
function extractUniverse(multiverse, index) {
	var newNie = new Universe(multiverse.universes[index].matter, multiverse.universes[index].energy);
	return newNie;
};

// returns updated multiverse
function composedUniverseUpdate(multiverse, index, element, amount) {
	// check out this function composition
	var newNie = updateUniverse(extractUniverse(multiverse, index), element, amount);
	var newNiverses = multiverse.universes.map(e=>e);
	newNiverses[index] = newNie;
	var newMulti = new Multiverse();
	newMulti.universes = newNiverses;
	return newMulti;
};

function newUniverse(multiverse, matsAmount, ensAmount) {
		// these next 3 lines are repeated in my code.  they should be their own function
		var newMat = new Matter(matsAmount);
		var newEns = new Energy(ensAmount);
		var newNie = new Universe(newMat, newEns);
		var newUniverses =  multiverse.universes.map(e=>e);
		newUniverses.push(newNie);
		// these next three too, if you so choose
		var newMulti = new Multiverse();
		newMulti.universes = newUniverses;
		return newMulti;
};

var multi1 = new Multiverse();
History.push(multi1);

var multi2 = newUniverse(multi1, 5, 5);
History.push(multi2);
var multi3 = newUniverse(multi2, 6, 6);
History.push(multi3);

var multi4 = composedUniverseUpdate(multi3, 1, 'matter', -4);
History.push(multi4);


// do some console logging here
