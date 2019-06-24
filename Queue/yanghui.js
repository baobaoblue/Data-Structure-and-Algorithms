// 杨辉三角中的每一行都依赖上一行，假设在队列里存储n-1行的数据，输出第n行时，只需要将队列里的数据依次出队列，
// 进行计算得到下一行的数值，并将值放入到队列中。
// 计算方式：f[i][j] = f[i-1][j-1]+f[i-1][j] ,i代表行数,j代表这一行的第几个数，如果j=0或j=1，则f[i][j] = 1
// 但是将计算所得放入队列中时，队列中保存的是两行数据，一部分是第n-1行，另一部分是刚刚计算出来的第n行数据，需要将这两行数据分隔开


// 方法一：利用for循环进行控制，例如，在输出第5行数据时，其实只有5个数据可以输出，那么就可以使用for循环控制调用enQueue的次数，
// 循环5次后，队列里缓存的就是计算好的第6行的数据


Queue = require('./index.js')
function yanghui_01(n){
  let queue = new Queue.Queue()
  queue.enQueue(1)
  //第一层for循环控制打印几层
  for (let i = 1; i <= n; i++) {
    let line = ' '
    let pre = 0
    //第二层for循环控制打印第i层
    for (let j = 0; j < i; j++) {
      let item  = queue.delQueue()
      line += item + ' '
      //计算下一行的内容
      let value = item + pre
      pre = item
      queue.enQueue(value)
    }
    //上面的for循环没有计算最后一个数，每一层最后一个数是1，在这里添加1
    queue.enQueue(1)
    console.log(line)
  }
}
//yanghui_01(5)

//方法二：每一行数据后面多存储一个0，使用这个0开做分割点，如果enQueue返回的是0，说明这一行已经全部输出，此时，将这个0追加到队列尾部
function yanghui_02(n){
  let queue = new Queue.Queue()
  queue.enQueue(1)
  queue.enQueue(0)
  for (let i = 1; i <= n; i++) {
    let line = ' '
    let pre = 0
    while(true){
      let item  = queue.delQueue()
      //用一个0把每一行数据分割开，遇到0不输出
      if(item == 0){
        queue.enQueue(1)
        queue.enQueue(0)
        break
      }else{
        //计算下一行的内容
        line += item + ' '
        let value = item + pre
        pre = item
        queue.enQueue(value)
      }
    }
    console.log(line)
  }
}
yanghui_02(10)