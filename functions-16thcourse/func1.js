

//reference of recursive
function recursiveFactorial(n) {
    if (n==1) {
      return 1
    } else {
      return n * recursiveFactorial(n - 1);
    }
  }
  recursiveFactorial(3)

//   //count down recursive
// function countDown(n) {
//     if (n<1) {

//         console.log("Blast off")
    
//     } else {
//         console.log(n)
//       return countDown(n - 1);
//     }
//   }