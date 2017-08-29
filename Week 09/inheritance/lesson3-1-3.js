
    // ------------------------------------------------------
// lesson 3-1-3, more '.bind()'  
// ------------------------------------------------------
console.log('lesson 3-1-3:');

// using 'bind' to borrow methods

     // Here we have a cars object that does not have a method to print its data to the console​
            var cars = {
                data:[
                    {name:"Honda Accord", age:14},
                    {name:"Tesla Model S", age:2}
                ]
​
            }
​
            // We can borrow the showData () method from the user object we defined in the last example.​
            // Here we bind the user.showData method to the cars object we just created.​
            cars.showData = user.showData.bind (cars);
            cars.showData (); // Honda Accord 14​