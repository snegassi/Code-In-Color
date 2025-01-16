


// the blow cases are all Asynchronous, so they are using Async/Await
//Original Callback-Based Code:
// const fs = require('fs');

// console.log("Start");

// //Reading File using callback

// fs.readFile('example.txt' , 'utf8', (err,data) => {
//   if(err){
//     console.log("Error reading file:" , err);
//     return;
//   }
//   console.log("File content", data); // since there wasn't error, in this line first file

//   const newContent = data + "\nGood job.";  // this line is adding new line on example.text each time this file is run node pract2.js
//   fs.writeFile('example.txt', newContent, 'utf8',(err) => {
//     if(err){
//       console.log("Error writing file:" , err);
//       return;
//     }
//     console.log("File written succesfully");

//   })
   
// })

// // fs.readFile('example.txt', 'utf-8',(err,data) => {
// //   if(err){
// //     console.log("Error reading file:" , err);
// //     return;
// //   }
// //   console.log("File content", data); // since there wasn't error, in this line first file
// // })
// console.log("End");


////////////////////////////////////////////////////////////////////////



// //Converted to Async/Await:

function fetchData(){                            // this fetchda() is defined
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const success = false;

      if(success){
        resolve("Fetched Data");
      }
      else{
        reject("Error fetching data");
      }

    }, 2000);
  })
}
async function processData(){
    try{
      const data = await fetchData();   // here the fetchData is being called her inside the processData
      console.log("Promise resolved with:" , data);
    }
    catch(error){
      console.log("Promise rejected with:", error);
  
    }
  }

  console.log("start")
  processData();
  console.log("End ")