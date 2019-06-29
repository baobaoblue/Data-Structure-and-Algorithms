function BitMap(size){
  let bitArr = new Array(size)
  for (let i = 0; i < bitArr.length; i++) {
    bitArr[i] = 0
  }
  this.addItem = function(item){
    let arrIndex = Math.floor(item / 32)
    let bitIndex = item / 32
    bitArr[arrIndex] = bitArr[arrIndex] | 1<<bitIndex
  }
  this.isExist = function(item){
    let arrIndex = Math.floor(item / 32)
    let bitIndex = item / 32
    let value = bitArr[arrIndex] & 1<<bitIndex
    if(value !== 0){
      return true
    }
    return false
  }
}