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

let arry = [1, 2, 3, 4, 5, 6, 6, 6]

let convertedZeroArray = arry.map((element) => {
    return element * 0
})

console.log(convertedZeroArray)

//FILL

function convertZeros(arg) {
return new Array(arg.length).fill(0)
}

console.log(convertZeros([1, 2, 4, 6]))