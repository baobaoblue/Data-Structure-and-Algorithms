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
//用两个栈实现一个队列

function StackToQueue(){
  let stack1 = new Stack()
  let stack2 = new Stack()
  //总是把数据放入stack1中
  this.enQueue = function(item){
    stack1.push(item)
  }
  //获取队列的头
  this.head = function (){
    if(stack1.isEmpty() && stack2.isEmpty()){
      return null
    }
    //如果stack2为空，那么stack1一定不为空，把stack1倒入stack2中
    if(stack2.isEmpty()){
      while(!stack1.isEmpty()){
        stack2.push(stack1.pop())
      }
    }
    return stack2.top()
  }
  //出队列
  this.delQueue = function(){
    if(stack1.isEmpty() && stack2.isEmpty()){
      return null
    }
    //如果stack2为空，那么stack1一定不为空，把stack1倒入stack2中
    if(stack2.isEmpty()){
      while(!stack1.isEmpty()){
        stack2.push(stack1.pop())
      }
    }
    return stack2.pop()
  }
}