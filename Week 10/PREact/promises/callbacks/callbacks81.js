// still not so general purpose, the error message is hardcoded

function higherOrder(arg1, arg2, callBack) {
	var err = false;
	var result = 0000;
	if((typeof arg1 == 'number') &&  (typeof arg2 == 'number'))	{
		result = arg1 + arg2;
	} else {
		err = 'result aint no number';
	};
	callBack(err, result);
};


function callBack(err, argument) {
	// if there was an error, don't use arguments
	//   it would break your code
	if(err) {
		console.log(err);
	} else {
		console.log(argument);
	};
};

var tryAdding = (arg1, arg2, arg3) => {
	var err = false;
	var result = 0000;
	if((typeof arg1 == 'number') &&  (typeof arg2 == 'number'))	{
		result = arg1 + arg2;
	} else {
		err = 'result aint no number';
	};
	return new Promise(
	   (resolve, reject) => {
			if(err)	{
				reject(err);
			} else {
				resolve(result, 5);
			};
		});
};


tryAdding(3, 3)
	.then(
		(result) => {
			console.log(result)
		},
		(result) => {
			console.log('fail')
		}
	)
	.then((result) => {
		console.log(result)
	})
	.catch((err) => {
		console.log(err)
	});



