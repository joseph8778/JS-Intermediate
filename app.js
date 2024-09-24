function progressiveSum(num) {
sum = 0
for (let i = 1; i <= num; ++i) {
sum = sum + i} //starts from 1, then goes to 2, then stops at 3 since 4 is greater than.
return sum //After 4 loop is stopped, we return the new sum.
}




console.log(progressiveSum(3))