// function doSomething(){

//     console.log("3d")
// }


// let seconds = 0;
//   console.log("first")

//   console.log("second")
 
//   setInterval(() => {

// console.log(seconds++)
//   },1500)
 
//   console.log("fourth")



console.log("first")

console.log("second")



let seconds = 0;


const InterValId = setInterval(() => {

    console.log(seconds++)

    if(seconds ===0 ){

        clearInterval(InterValId);

    }

},1500);

console.log("3rd")