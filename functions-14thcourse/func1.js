

// function greet(name) {
//     return `Hello, ${name}!`;
// }
  
// console.log(greet("sami"))



// write addition of 2 numbers?

// function sum(a,b){

//     return a+b
// }

//   console.log(sum(5,5)); if (cond ==true){consol.log(x)}


// // Rocek, paper, scissor game 
function rockPapersScissor(player1,player2){
    const validChoices=["rock","paper","scissor"];
    if(!validChoices.includes(player1)||!validChoices.includes(player2)){ 
        return "wrong input";
    } 
     else if (player1===player2){
        return "Draw"
     } 
     else if (
        (player1 === "rock" && player2 ==="scissor")||
        (player1 === "scissor" && player2 ==="paper")||
        (player1 === "scissor" && player2 ==="paper")
     )
     {  return "Player 1 wins"
        
    }
    else {
        
        return "Player 2 wins"
    }
    
}

 console.log(rockPapersScissor("rock","scissor"))


// 2nd way of doing it 

// function rockPapersScissor(player1,player2){
//     if (
//         (player1 === "rock" && player2 ==="scissor")||
//         (player1 === "scissor" && player2 ==="paper")||
//         (player1 === "paper" && player2 ==="rock")
//     ){
//          return "player 1 Wins"
//     } else if (
//         (player2 === "rock" && player1 ==="scissor")||
//         (player2 === "scissor" && player1 ==="paper")||
//         (player2=== "paper" && player1 ==="scissor")
//     ){
//         return "player 2 Wins"
//    } else if (
//     (player2 === "rock" && player1 ==="rock")||
//     (player2 === "scissor" && player1 ==="scissor")||
//     (player2=== "paper" && player1 ==="paper")

//    )
//     {
//        return "Draw"
//    } else {
//        return "Try again"
//    }
// }
//  console.log(rockPapersScissor("bed","rock"))


// let x ="hey bye"
// console.log(x.indexOf("y", 3))