// ------------------------------------------------------
// lesson 5, preview of coming attractions			 
// ------------------------------------------------------
console.log('lesson 4:');

// take a minute now to fiddle with this code.
// it is the complete picture.  
// the following lessons will explain this all in more detail.

// this code comes accompanied with this diagram:
//  http://i.imgur.com/KF4lwxg.gif

// a standard function it can be used ...
function Shape(x, y) {
    this.x = x;
    this.y = y;
}

// notice:
//   assigning to 'function.prototype' is what's called 'live'.
//   any changes you made are instantly propogated to all children
Shape.prototype.describeLocation = function() {
    return 'I am located at ' + this.x + ', ' + this.y;
};

// creating an instance of Shape 
// what is myShape's '.prototype'? '.__proto__'?
var myShape = new Shape(1, 2);

//
function Circle(x, y, radius) {
Shape.call(this, x, y);  
    this.radius = radius;
}

var myFirstCircle = new Circle(3, 4, 10);

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.calculateArea = function() {
    return 'My area is ' + (Math.PI * this.radius * this.radius);
};

var mySecondCircle = new Circle(3, 4, 10);


