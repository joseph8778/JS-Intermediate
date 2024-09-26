function removeApplesForLoop(forArr) {
let noApples = []
    for (let i = 0; i < forArr.length; i++) {
   if (forArr[i] !== 'Apple') {
    noApples.push(forArr[i])}
    }
return noApples
}

console.log(removeApplesForLoop(['Banana', 'Orange', 'Apple']))


//MAP ARRAY FUNCTION

let mapArray = ['Banana', 'Orange', 'Apple', "tomato", 'sausage']

let noNewApples = mapArray.filter(elem => {
    if (elem !== 'Apple') {
        return true
    }
})

console.log(noNewApples)
