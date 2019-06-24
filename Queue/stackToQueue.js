function Stack (){
  let items = []
  this.push = function(item){
    items.push(item)
  }
  this.pop = function(){
    return items.pop()
  }
  this.top = function(){
    return items[items.length-1]  
  }
  this.isEmpty = function(){
    return items.length == 0
  }
  this.size = function(){
    return items.length
  }
  this.clear = function(){
    items = []
  }
}

function StackToQueue(){
  let stack1 = new Stack()
  let stack2 = new Stack()
  let data_stack = null
  let empty_stack = null
  let init_stack = function(){
    if(data_stack.isEmpty() && empty_stack.isEmpty()){
      data_stack = stack1
      empty_stack = stack2
    }else if(data_stack.isEmpty()){
      data_stack = stack2
      empty_stack = stack1
    }else{
      data_stack = stack1
      empty_stack = stack2
    }
  }
  this.enQueue = function(item){
    init_stack()
    data_stack.push(item)
  }
}