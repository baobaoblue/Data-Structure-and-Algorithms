function FindArray(){
  let arr = new Array(100)
  for (let index = 0; index < arr.length; index++) {
    arr[index] = 0
  }
  this.addItem = function(item){
    arr[item] = 1
  }
  this.findItem = function(item){
    if(arr[item] === 1){
      return true
    }
    return false
  }
}
let fc = new FindArray()
let arr1 = [1,3,12]
for (let index = 0; index < arr1.length; index++) {
  fc.addItem(arr1[index])
}
console.log(fc.findItem(2))
console.log(fc.findItem(1))
console.log(fc.findItem(3))
