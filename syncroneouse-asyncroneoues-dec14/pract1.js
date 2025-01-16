
// // // part -1 
// // //Synchronous
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");

// // part 2
// //Synchronous with delay ,
// function func1(callback){
//     setTimeout (() => {
//         console. log("Task 1");
//         // this callback, indicates func2
//         callback()
//     }, 4000)

// }

// function func2(){
//     console.log("Task 2");// all of taks 2,3,4 were waiting for task 1 to finish before the got printed 
//     console.log("Task 3");
//     console.log("Task 4");

// }

// func1(func2);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // part -3 
// //Create Promise
function fetchData(){
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        const success = true;
  
        if(success){
          resolve("Fetched Data");
        }
        else{
          reject("Error fetching data");
        }
  
      }, 2000);
    })
  }
  
  //Check
  console.log("Start");
  fetchData()
       .then((data) => {
        console.log("Promise resolved with:", data);
       })
       .catch((error) => {
        console.log("Promise rejected with:", error);
       })

   console.log("End") // result Start
   End
   Promise resolved with: Fetched Data