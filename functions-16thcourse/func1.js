

//reference of recursive
// function recursiveFactorial(n) {
//     if (n==1) {
//       return 1
//     } else {
//       return n * recursiveFactorial(n - 1);
//     }
//   }
//   recursiveFactorial(3)
//  console.log(recursiveFactorial(3)) // with consol, we can only see the end result

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//   //count down recursive
// function countDown(n) {
//     if (n<1) {
// // this part is the base case = part where the code stops
//         console.log("Blast off")
    
//     } else {
//         // this part is the recursion case = part where the code goes backup and do it again(recurtion) 
//         console.log(n)

    // this countDown(n - 1) means its going back to the top and starting again as if it was calling it's self(the function countdown(n)) again
    //  but with a reduced n or (n-1)

//       return countDown(n - 1);      
//     }
//   }

//   countDown(4)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Countdown Iterative
// function countdownIterative(n) {
//   // we used i>=1, because we are starting with n =5 and trying to count down from 5 to 1,
//   //  in this section the iterating is happening until it reachs 1 then it can log out of it 
//   for (let i = n; i>=1; i-- ) {     
//   console.log(i);
//   }
//   console.log("Blast off!")
// }
//   countdownIterative(5);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Palindrome Check
function isPalindrome(str) {
    // Base case
    if (str.length <= 1) {
    // Base case
    // -> True (This is a palindrome)
    return true
    } else if (str.charAt(0) !== str.charAt(str.length - 1)) {
    // Base case
    // -> False (This is not a palindrome)
    return false
    } else {
    // Recursive step
    // str.substrin(1st position is exactly at the index gets picked, but 2nd number is str.length -1 so as to pick the last one)
    return isPalindrome(str.substring(1, str.length - 1))
    }
}
    console.log(isPalindrome("radar"));
    console.log(isPalindrome("stanleyyelnats"));
    console.log(isPalindrome("hello"));