/*sum a list of numbers*/

/*---------------------------- WITH MUTATIONS ----------------------------*/
var previousNumbers = []
function sumToTot(num, previousNumbers){
    previousNumbers.push(num) // this causes mutations to previousNumbers array

    var tot = previousNumbers.reduce( (b = 0, a) => a + b)
    console.log(tot)
}

// This will allways be false!!!
//sumToTot(1, previousNumbers) === sumToTot(1, previousNumbers) === sumToTot(1, previousNumbers)


/*---------------------------- NO MUTATIONS/Functional Programming ----------------------------*/
function sumToTot(num, arr =[0]){
    // Ways of creating new arrays 1 

    // 1) Use concat
    // var newArr = [arr].concat([num])

    // 2) Use ES6 spread operator
    var newArr = [...arr, num]

    // 2) use map
    // var newArr = arr.map((e) => e)   // <--- Clone Array
    // newArr.push(num)                 // <--- Not good practice in FP

    // 2) use slice(0)
    // var newArr = arr.slice(0)        // <--- Clone Array
    // newArr.push(num)                 // <--- Not good practice in FP

    var tot = newArr.reduce( (b = 0, a) => {return a + b})
    console.log(tot)
    return newArr
}

// This will allways be true!!!
//sumToTot(1, [0]) === sumToTot(1, [0]) === sumToTot(1, [0])

var his0 = sumToTot(1) // 1


var his1 = sumToTot(2, his0) // 1 + 2
var his2 = sumToTot(3, his1) // 1 + 2 + 3
var his3 = sumToTot(1, his2) // 1 + 1 + 2 + 3

// This will allways be true!!!
//sumToTot(1, his0) === sumToTot(1, his0) === sumToTot(1, his0)

// This will allways be true!!!
//his0 !== his1 !== his2 !== his3 
