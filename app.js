//FOR LOOP

function convertToZeros(arr) {
let zero = []
for (let i = 0; i < arr.length; i++) {
    zero.push(0)
}
return zero
}

console.log(convertToZeros([1, 2, 3, 4, 5]))

// MAP

function convertZeroArray(mapArray) {
return mapArray.map(elem => 0)
}

console.log(convertZeroArray([1, 2, 5, 3, 5, 67, 7]))

//FILL

function convertZeros(arg) {
return new Array(arg.length).fill(0)
}

console.log(convertZeros([1, 2, 4, 6]))