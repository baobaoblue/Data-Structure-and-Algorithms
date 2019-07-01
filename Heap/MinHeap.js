// 数组的索引从0开始，元素个数为n,在堆中给定索引为i的节点时，
// 如果i= 0，节点i就是根节点，否则节点i的父节点为（i-1)/2
// 如果2*i+1 > n-1,则节点i无左子女，否则节点i的左子女为 2*i + 1
// 如果2*i+2 > n-1,则节点i无右子女，否则节点i的右子女为 2*i + 2
function MinHeap(size){
  let heap = new Array(size)
  let currSize = 0
  let maxSize = size

  let shifDown = function(start,m){
    //从start这个位置开始，向下下滑调整
    let parentIndex = start   //start就是当前这个局部的父节点
    let minChildIndex = parentIndex*2+1  //一定有左子项，先让minChildIndex 等于左子项
    while(minChildIndex <= m){
      if (minChildIndex < m && heap[minChildIndex] > heap[minChildIndex+1]) {
        minChildIndex = minChildIndex+1  //minChildIndex永远指向值最小的子项
      }
      //父节点的值小于等于两个孩子的最小值
      if(heap[parentIndex] <= heap[minChildIndex]){
        break   //循环结束，不再需要调整
      }else{
        //父节点和子节点的值互换
        let tmp = heap[parentIndex]
        heap[parentIndex] = heap[minChildIndex]
        heap[minChildIndex] = tmp
        parentIndex = minChildIndex
        minChildIndex = 2*minChildIndex+1
      }
    }
  }
  //传入一个数组，然后调整为最小堆
  this.init = function(arr){
    maxSize = arr.length
    currSize = maxSize
    heap = new Array(arr.length)
    for (let i = 0; i < currSize; i++) {
      heap[i] = arr[i];
    }
    let currPos = Math.floor((currSize-2)/2)  //这是堆的最后一个分支节点
    while(currPos >=0){
      shifDown(currPos,currSize-1)  //局部自上向下下滑调整
      currPos -= 1 //调整下一个分支节点
    }
  }
  let shifUp = function(start){
    let childIndex = start
    let parentIndex = Math.floor((childIndex - 1)/2)
    while(childIndex > 0){
      //父节点更小，就不用调整了
      if (heap[parentIndex] <= heap[childIndex]) {
        break
      }else{
        //父节点和子节点的值互换
        let tmp = heap[childIndex]
        heap[childIndex] = heap[parentIndex]
        heap[parentIndex] = tmp
        childIndex = parentIndex
        parentIndex = Math.floor((parentIndex-1)/2)
      }
    }
  }
  this.insert = function(item){
    //插入一个新元素
    //如果堆满了，不能再放入元素
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
