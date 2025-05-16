console.log("hi")

function createCounter() {
    let count = 0;  // This variable is enclosed in the closure

    return function () {
        debugger;
        count++;  // The inner function can access and modify the count variable
        return count;
    };
  }

  const counter = createCounter();  // Create a new counter instance
//   console.log(counter());  // Output: 1

// const counter = ()=>{
//     debugger;
//     let count = 0;
//     count ++;
//     return count;
// }

console.log(counter()) // 1
console.log(counter()) // 2
console.log(counter()) // 3
console.log(counter()) // 4
console.log(counter()) // 5