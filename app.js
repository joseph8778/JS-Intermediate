function filterOutFalsy(arr) {
    return arr.filter(elem => !!elem === true)
}

console.log(filterOutFalsy(['banana', NaN, undefined, null, false, 0, 'Nigga']))