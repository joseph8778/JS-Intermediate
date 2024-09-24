function filterOutFalsy (a, b) {
    return a ? b : a
}

console.log(filterOutFalsy(true, 'Dog'))