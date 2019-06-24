function Queue(){
  let items = []
  this.enQueue = function(item){
    return items.push(item)
  }
  this.delQueue = function(){
    return items.shift()
  }
  this.head = function(){
    return items[0]
  }
  this.tail = function(){
    return items[items.length-1]
  }
  this.size = function(){
    return items.length
  }
  this.clear = function(){
    items = []
  }
  this.isEmpty = function(){
    return items.length === 0
  }
}
exports.Queue = Queue