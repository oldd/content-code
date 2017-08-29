
function viktor(noNew) {
	if (noNew) {
		let obj = Object.create(viktor.prototype);
		obj.done = 'steven';
		return obj;
	}
	else {
		this.done = 'robert';
	}
}


// the following two objects have the same properties
// try some 'console.log()'s of these objects' 'innards
var obj1 = viktor(true);
var obj2 = new viktor();

viktor.prototype.logDone = function() {
	console.log(this.done);
};

obj1.logDone();
obj2.logDone();

// from lesson5-4:
var obj3 = {done: 'clyde'};
obj3.__proto__ = viktor.prototype;
obj3.logDone();
// this process is also identical to calling a constructor


