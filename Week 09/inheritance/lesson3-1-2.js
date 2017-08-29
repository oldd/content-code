// ------------------------------------------------------
// lesson 3-1-2, more '.bind()'	 
// ------------------------------------------------------
console.log('lesson 3-1-2:');

// using bind to 'remember' context


var roshni = {
	name: 'roshni'
};

function prinTit() {
	console.log(this.name);
};

var hiRoshni = prinTit.bind(roshni); 
hiRoshni();

// slightly more complicated
var anjali = {
    name: 'anjali',
    printName: function() {
        			console.log (this.name);
    			}
};

var printNameAnchored = anjali.printName.bind(anjali);
printNameAnchored();

// create a new binding without erasing the old one
var hiAnjali = prinTit.bind(anjali);

hiAnjali();
hiRoshni();

// or rewrite an old one
var byeAnjali = hiAnjali.bind(roshni);
byeAnjali();

// without overwriting the old one
//  good functional programming
hiAnjali();







