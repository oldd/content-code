/*const collector = (v1) => (v2) => (v3) => {
    console.log(v1, v2, v3)
}
*/
const collector = function (v1){
    console.log("first layer gone")
    return function (v2){
        console.log("Second layer gone")
        return function (v3) {
            console.log("We can get our results now!!!")
            console.log(v1, v2, v3)
        }
    } 
}

var collected

var collect = (val) => {
    collected = (collected || collector)(val)
    console.log(collected)
}

setTimeout(() => {
    console.log("collect 1")
    collect(1)
}, Math.floor(Math.random() * 2000))

setTimeout(() => {
    console.log("collect 2")
    collect(2)
}, Math.floor(Math.random() * 2000))

setTimeout(() => {
    console.log("collect 3")
    collect(3)
}, Math.floor(Math.random() * 2000))