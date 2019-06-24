Stack = require("./index.js.js")
function cale_exp(arr){
  let stack = new Stack.Stack()
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    if(['+', '-' , '*' , '/'].indexOf(ele) >= 0 ){
      let val1 = stack.pop()
      let val2 = stack.pop()
      let exp = val2 + ele + val1
      let result = parseInt(eval(exp))
      stack.push (result.toString())
    }else {
      stack.push(ele)
    }
  }
  return stack.pop()
}
let arr = ['4','13','5','/','+']
console.log(cale_exp(arr))