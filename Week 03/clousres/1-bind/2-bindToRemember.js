// using bind to 'remember' context


var roshni = {
	name: 'roshni'
};

function prinTit(argument) {
	console.log(jarrod)
	console.log(this.jarrod);
	console.log(this.name);
	console.log(argument)
};

var jarroood = {
	jarrod: 'jarrod'
}

var jarrod = 'outside'
// var name = 'ouside name'
// prinTit()

var jaroditit = prinTit.bind(jarroood);
jaroditit('argument')


console.log('1')
var hiRoshni = prinTit.bind(roshni); 
hiRoshni();

// slightly more complicated
var anjali = {
    name: 'anjali',
    printName: function() {
        			console.log (this.name);
    			}
};

console.log('2')
anjali.printName()

console.log('3')
var printNameAnchored = anjali.printName.bind(anjali);
printNameAnchored();

// create a new binding without erasing the old one
var hiAnjali = prinTit.bind(anjali);

console.log('4')
hiAnjali();
hiRoshni();

console.log('5')
// or 'rewrite' an old one
var byeAnjali = hiAnjali.bind(roshni);
byeAnjali();

console.log('6')
// without overwriting the old one
//  good functional programming
hiAnjali();







