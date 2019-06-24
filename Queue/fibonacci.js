// Queue = require('./index.js')
// function fibonacci(n){
//   let index = 0 
//   let queue = new Queue.Queue()
//   queue.enQueue(1)
//   queue.enQueue(1)
//   while(index < n-2){
//     let del_item = queue.delQueue()
//     let head_item = queue.head()
//     queue.enQueue(del_item + head_item)
//     index+=1
//   }
//   queue.delQueue()
//   return queue.head()
// }

function fibonacci(n){
  let index = 0 
  let queue = [1,1]
  while(index < n-2){
    let del_item = queue.shift()
    let head_item = queue[0]
    queue.push(del_item + head_item)
    index+=1
  }
  queue.shift()
  return queue[0]
}

console.log(fibonacci(10))