
// 贪心
class Change {
  constructor(changeType){
      this.changeType = changeType.sort((r1, r2) => r2 - r1)

  }
  makeChange(amount) {
      const arr = []
      for (let i = 0; i < this.changeType.length; i++) {
        while (amount - this.changeType[i] >= 0) {
          arr.push(this.changeType[i])
          amount = amount - this.changeType[i]
        }
      }
      return arr
    }
}

const change = new Change([1, 5, 10, 20,50,100])

console.log(change.makeChange(36)) 
console.log(change.makeChange(136)) 

console.log('-'.repeat(100))
const change1 = new Change([1, 3, 4])

console.log(change1.makeChange(6)) // 其实33最好