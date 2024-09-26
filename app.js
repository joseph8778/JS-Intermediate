function removeApplesForLoop(forArr) {
let noApples = []
    for (let i = 0; i < forArr.length; i++) {
   if (forArr[i] !== 'Apple') {
    noApples.push(forArr[i])}
    }
return noApples
}

console.log(removeApplesForLoop(['Banana', 'Orange', 'Apple']))




//Filter ARRAY FUNCTION

function noNewApples(filterArray) {
return filterArray.filter(elem => elem !== 'Apple')
}

console.log(noNewApples(['Banana', 'Orange', 'Apple', "tomato", 'sausage']))
