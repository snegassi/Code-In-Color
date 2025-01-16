
// Today's Class was on Stack (LIFO) and Queue (FIFO)

// Stack rule is = LIFO, last in first out,, it used in array 

// class Stack {
//     constructor() {
//         this.stack = []
//     }
//     // push
//     push(value){
//         this.stack.push(value)
//     }

//     // pop,is used to remove the last of the list or array so efficent in LIFO 
//     pop() {
//         if(this.stack.length == 0){
//             return "stack is empty"
//         }
//         return this.stack.pop() 
//     }
//     // peek
//     peek(){
//         if(this.stack.length == 0){
//             return "stack is empty"
//         }
//         return this.stack[this.stack.length -1]
//     }
//     dispalyStack(){
//         console.log(this.stack)
//     }
// }

// const stackBroweser = new Stack()
// stackBroweser.push(10)
// stackBroweser.push(22)
// stackBroweser.push(30)
// stackBroweser.dispalyStack()
// stackBroweser.pop()
// console.log(stackBroweser.peek())

// const stackTasks = new Stack()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Queue rule is = FIFO, First in first out , it used in array ,or step by step done things

// class Queue {
//     constructor(){
//         this.queue = []
//     }

//     // enqueue
//     enqueue(value){
//         this.queue.push(value)
//     }

//     // dequeue,  since FIFO we use shift(),  used removes whats on the front the list or array.
//     dequeue(){
//         if(this.queue.length == 0){
//             return "Queue is empty"
//         }
//         return this.queue.shift()
//     }

//     // front
//     front(){
//         if(this.queue.length == 0){
//             return "Queue is empty"
//         }
//         return this.queue[0]
//     }

//     // rear
//     rear(){
//         if(this.queue.length == 0){
//             return "Queue is empty"
//         }
//         return this.queue[this.queue.length-1]
//     }

//     //display
//     dispalyQueue(){
//         console.log(this.queue)
//     }
// }


// const queue = new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// console.log("Queue front element: ", queue.front())
// console.log("Queue rear element: ", queue.rear())
// queue.dequeue()
// queue.dequeue()
// queue.dispalyQueue()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Question 1
// Work on how to use "print queue" which is First In First Out
 
class print {
    constructor(){
        this.print = []
    }

   //enqueue
     enqueue (value){
          this.print.push(value)
     }
   
  // dequeue ,i would use pop() but that is used to remove the last items of an array or list so its better to use shift() in this case to remove the front
  dequeue (){
    if (this.print.length == 0){
       return "This printer is Empty"
    }
    
       return this.print.shift()
  }
  

  //front
  front(){
    if(this.print.length == 0){
      return "This printer is Empty"
    }
    return this.print[0]
  }
  
  // back
  back(){
  if (this.print.length == 0) {
    return "This printer is Empty"
  }
    return this.print[this.print.length-1]
}  

// display
 display(){
    console.log(this.print)
 }

}
// inputs or calling the function and using input too

const printer= new print()

// the following are ways of inputing data or can be removing data from the list, so need for console.log
printer.enqueue(10)
printer.enqueue(20)
printer.enqueue(30)
printer.enqueue(40)
printer.enqueue(50)

// the following are the calling 

// for display, we can call it in normal way as it is using consol.login the code, so we can visualise it
printer.display(this.print) // [10,20,30,40,50]

// but for front,back since they do a "return", so we can only call them usin console.log
console.log(printer.front())

// so
printer.dequeue()
printer.dequeue()

printer.display()