


console.log("first")

console.log("2")
let seconds = 0;
const clearIntervalId = setInterval(() => {


//   console.log(++seconds)

     console.log(seconds++)

     if (seconds === 10){
        clearInterval(clearIntervalId);
     }

},1500)


console.log('4')
console.log('5')