function MinHeap(size){
  let heap = new Array(size)
  let currSize = 0
  let maxSize = size

  let shifDown = function(start,m){
    let parentIndex = start   
    let minChildIndex = parentIndex*2+1  
    while(minChildIndex <= m){
      if (minChildIndex < m && heap[minChildIndex].data.rate > heap[minChildIndex+1].data.rate) {
        minChildIndex = minChildIndex+1  
      }
      if(heap[parentIndex] <= heap[minChildIndex]){
        break  
      }else{
        let tmp = heap[parentIndex]
        heap[parentIndex] = heap[minChildIndex]
        heap[minChildIndex] = tmp
        parentIndex = minChildIndex
        minChildIndex = 2*minChildIndex+1
      }
    }
  }
  this.init = function(arr){
    maxSize = arr.length
    currSize = maxSize
    heap = new Array(arr.length)
    for (let i = 0; i < currSize; i++) {
      heap[i] = arr[i];
    }
    let currPos = Math.floor((currSize-2)/2)
    while(currPos >=0){
      shifDown(currPos,currSize-1) 
      currPos -= 1 
    }
  }
  let shifUp = function(start){
    let childIndex = start
    let parentIndex = Math.floor((childIndex - 1)/2)
    while(childIndex > 0){
      if (heap[parentIndex] <= heap[childIndex]) {
        break
      }else{
        let tmp = heap[childIndex]
        heap[childIndex] = heap[parentIndex]
        heap[parentIndex] = tmp
        childIndex = parentIndex
        parentIndex = Math.floor((parentIndex-1)/2)
      }
    }
  }
  this.insert = function(item){
    if(currSize == maxSize){
      return false
    }
    heap[currSize] = item
    shifUp(currSize)
    currSize++
    return true
  }
  this.removeMin = function(){
    if(currSize <= 0){
      return null
    }
    let minVal = heap[0]
    heap[0] = heap[currSize - 1]
    currSize--
    shifDown(0,currSize-1)
    return minVal
  }
  this.size = function(){
    return currSize
  }
  this.print = function(){
    console.log(heap)
  }
  this.getMin = function(){
    if(currSize > 0){
      return heap[0]
    }
    return null
  }
}
let CodeNode = function(code,rate){
  this.code = code
  this.rate = rate
}
let TreeNode = function(data){
  this.data = data
  this.leftChild = null
  this.rightChild = null
  this.parent = null
}
let codeDict = {
  'a':0.12,
  'b':0.4,
  'c':0.15,
  'd':0.08,
  'e':0.25
}
let forest = []
for(let key in codeDict){
  let item = new CodeNode(key,codeDict[key])
  forest.push(new TreeNode(item))
}
function HuffmanTree(){
  let root = null
  this.initTree = function(arr){
    let minHeap = new MinHeap()
    minHeap.init(arr)
    for (let i = 0; i < arr.length-1; i++) {
      let first = minHeap.removeMin()
      let second = minHeap.removeMin()
      let newItem = new CodeNode('',first.data.rate + second.data.rate)
      let newNode = new TreeNode(newItem)
      minHeap.insert(newNode)
      newNode.leftChild = first
      newNode.rightChild = second
      first.parent = newNode
      second.parent = newNode
      root = newNode
    }
  }
  let getCodeFromTree = function(node,dict,codeStr){
    if(!node.leftChild && !node.rightChild){
      dict[node.data.code] = codeStr
      return
    }
    if(node.leftChild){
      getCodeFromTree(node.leftChild,dict,codeStr + '0')
    }
    if(node.rightChild){
      getCodeFromTree(node.rightChild,dict,codeStr + '1')
    }
  }
  this.getCode = function(){
    let codeDict = {}
    getCodeFromTree(root,codeDict,'')
    return codeDict
  }
  this.print = function(){
    console.log(root)
  }
}
let ht = new HuffmanTree()
ht.initTree(forest)
console.log(ht.getCode())