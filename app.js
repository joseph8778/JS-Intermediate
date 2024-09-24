function calcTime(time) {
let seconds = time % 60 //Seconds
let minutes = Math.floor(time / 60) //hours''

if (minutes.toString().length === 1) {
     minutes = '0' + minutes
}

if (seconds.toString().length === 1) {
     seconds = '0' + seconds
}


return `${minutes}:${seconds}`
}

console.log(calcTime(606));