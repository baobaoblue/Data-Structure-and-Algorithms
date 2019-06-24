Queue = require('./index.js')
function QueueToStack(){
  let queue1 = new Queue.Queue()
  let queue2 = new Queue.Queue()
  let data_queue = null
  let empty_queue = null
  let init_queue = function(){
    if(data_queue.isEmpty() && empty_queue.isEmpty()){
      data_queue = queue1
      empty_queue = queue2
    }else if(data_queue.isEmpty()){
      data_queue = queue2
      empty_queue = queue1
    }else{
      data_queue = queue1
      empty_queue = queue2
    }
  }
  this.push = function(item){
    init_queue()
    data_queue.enQueue(item)
  }
  this.top = function(){
    init_queue()
    data_queue.tail()
  }
  this.pop = function(){
    init_queue()
    while(data_queue.size()>1){
      empty_queue.enQueue(data_queue.delQueue())
    }
    return data_queue.delQueue()
  }
}