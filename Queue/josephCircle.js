Queue = require('./index.js')
function josephCircle(arr){
  let index = 0
  let queue = new Queue.Queue()
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    queue.enQueue(ele)
  }
  while(queue.size() !== 1){
    let item = queue.delQueue()
    index+=1
    if(index%3 !== 0){
      queue.enQueue(item)
    }
  }
  return queue.head()
}
var arr = []
for (let j = 0; j < 100; j++) {
 arr.push(j)
}
console.log(josephCircle(arr))