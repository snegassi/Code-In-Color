
//###Pass by value (numbers and strings)
// when you pass/input numbers and strings, into Functions their primary value in this case "let num = 10;", Does NOT Change!
function updateValue(value){
    value = value+1;
    return value;
}
    // let num = 10;
    // console.log(updateValue(num) );
    // console.log(num);
    
    //However....
    //####pass by reference (arrays and objects)
    // when you pass/input arrays and objects into Functions their primary value in this case "let myArray = [1,2,3];", Does Change!
    function updateArray(arr){
    arr.push(4);
    return arr;
    }
    let myArray = [1,2,3];
    console. log(updateArray(myArray));
    console. log(myArray);
    