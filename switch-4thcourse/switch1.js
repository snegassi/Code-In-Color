

// switch ('papaya') {
//     case 'mango':
//         console.log ("the main condition matchs with this case of mango")
//         break;
//     case 'orange':
//             console.log ("the main condition matchs with this case of orange")
//             break;
//     default :
//          console.log("the main condition matchs with this case of papaya")
//         break;
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// switch ("apple"){
//      case "mango":
//         console.log("the switch case matchs with this case'mango'")
//         break;
//     case "papaya":
//         console.log("the switch case matchs with this case'papaya'")
//         break;  
//     case "apple":
//          console.log("the switch case matchs with this case'apple'")
//         break;  
//     case "papaya":
//         console.log("the switch case matchs with this case'papaya'")
//         break;  case "papaya":
                             
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** Situation = " John goes to the library, if library is open and has no chores.  */

// const libraryIsOpen = true; // Set to true if the library is open
// const hasChores = false;    // Set to true if John has chores

// switch (true) {
//   case libraryIsOpen && !hasChores:
//     console.log("John goes to the library.");
//     break;
//   case !libraryIsOpen:
//     console.log("The library is closed. John can't go.");
//     break;
//   case hasChores:
//     console.log("John has chores and can't go to the library.");
//     break;
//   default:
//     console.log("Something unexpected happened.");
//     break;
// }
 

///// OR 


let libraryOpen = true;  // Assuming true means open
let hasChores = false;   // Assuming false means no chores

switch (true) {
  case (libraryOpen && !hasChores):
    console.log("John goes to the library.");
    break;
  default:
    console.log("John does not go to the library.");
}
