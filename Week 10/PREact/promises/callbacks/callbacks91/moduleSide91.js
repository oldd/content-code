// we're now pretending this HOF is a module you import into your app

var module91 = {};

module9.higherOrder = function(arg1, arg2, cb) {
	var err = false;
	var result = 0000;
	if((typeof arg1 == 'number') &&  (typeof arg2 == 'number'))	{
		result = arg1 + arg2;
	} else {
		err = 'result aint no number';
	};
	cb(err, result);
};

module.exports = module91;
