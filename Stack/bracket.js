function bracket(str){
  let arr = str.split('').join('')
  let arr1 = []
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === '('){
      arr1.push(arr[i])
    }
    if(arr[i] === ')'){
      if(arr1.length == 0){
        return false
      }else{
        arr1.pop()
      }
    }
  }
  return arr1.length === 0 ?  true :  false
}
let str = '(daf(dfa(4wf)())'
console.log(bracket(str))