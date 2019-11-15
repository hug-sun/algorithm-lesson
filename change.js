// 找零

// 我们的零钱 1 5 10 20 50 100
// 怎么找钱最合适

class Change{
  constructor(changeType){
    this.changeType = changeType
    this.cache = {}
  }
  makeChange(amount){
    // 最少张数的一个数组
    let min = []
    if(!amount){
      return []
    }
    if(this.cache[amount]){
      return this.cache[amount]
    }
    for(let i=0;i<this.changeType.length;i++){
      // 先找一张试试
      const leftAmount = amount - this.changeType[i]
      let newMin 
      if(leftAmount>=0){
        // 只要还得继续找钱
        // 下一步找钱的数组
        newMin = this.makeChange(leftAmount)
      }
      if(leftAmount>=0 && (newMin.length<min.length-1|| !min.length)){
        // 纠正结果
        min = [this.changeType[i]].concat(newMin)
      }
    }
    return this.cache[amount] = min
  }
}

// const change = new Change([1,5,10,20,50,100])
// console.log(change.makeChange(2))
// console.log(change.makeChange(5))
// console.log(change.makeChange(13))
// console.log(change.makeChange(16))
// console.log(change.makeChange(35))
// console.log(change.makeChange(383))
// 结论是慢慢优化出来的
const change = new Change([1, 3, 4])


console.log(change.makeChange(6)) // 其实33最好w

// 贪心给出的是411