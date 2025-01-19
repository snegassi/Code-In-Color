// let num=7;

// (num%2===0) ? console.log("this number is even") : console.log("this number is odd")

// this is correct

// loop through numbers 1 to 7, categorize weekdays and weekends



for (let i = 1; i <= 8; i++) {
  if (i <= 5) {
    switch (i) {
      case 1:
        console.log("Monday - Workday");
        break;
      case 2:
        console.log("Tuesday - Workday");
        break;
      case 3:
        console.log("Wednesday - Workday");
        break;
      case 4:
        console.log("Thursday - Workday");
        break;
      case 5:
        console.log("Friday - Workday");
        break;
    
    }
  } else {
    i===6
    ? console.log("Saturday - Weekend")
    : i===7 ? console.log("Sunday - Weekend")
    :console.log("The number exceeds day 7 ")
  }
}


// done, but if the day was an input we could declare itas, let x= then the 8 at the top in the condition would have been n so, x=n.