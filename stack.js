class Stack{

  constructor(){
    this.items = []
  }
  push(item){
    this.items.push(item)
  }
  pop(){
    return this.items.pop()
  }
}
// function(){
//   ()=>{
//     {}
//   }

// 匹配括号语法

// [1,2,3]

// ({(())({})}) 匹配的
// ({(()){})}) 不匹配了
// 判定给的符号，是不是括号匹配正确

// ({(())({})})
// [(,{,(,] (,
function isBlance(symbol){
  const stack = new Stack()
  const left = '({'
  const right =')}'

  let popValue
  let blance = true

  for(let i=0;i<symbol.length;i++){
    let s = symbol[i]
    if(left.includes(s)){
      stack.push(s)
    }else if(right.includes(s)){
      let popValue = stack.pop()
      match(popValue, s)
    }
  }
  function match(popValue, current){
    if(left.indexOf(popValue) !==right.indexOf(current)){
      // 不匹配了
      blance = false
    }
  }
  return blance
}

console.log(isBlance("(({{}}))"))
console.log(isBlance("(({{}()}))"))
console.log(isBlance("(({{}))"))
console.log(isBlance("(()=>{return ()=>{}})}"))

// html规范校验  （jsx解析）
// 表达式计算