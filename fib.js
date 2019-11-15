// [1,1,2,3,5,8,13]
// 第一个版本 暴力递归
function fib(n){
  if(n==1 || n==2){
    return 1
  }
  return fib(n-1) + fib(n-2)
}

// 中间存储 缓存版递归

function fib1(n){
  let cache = []
  return helper(cache,n)
}
function helper(cache,n){
  if(n==1 || n==2){
    return 1
  }
  if(cache[n]) return cache[n]
  cache[n] = helper(cache,n-1) + helper(cache,n-2)
  return cache[n]
}

// 自底向上
function fib2(n){
  let dp  = []
  dp[1] = dp[2] = 1
  for(let i=3;i<=n;i++){
    dp[i] = dp[i-1]+dp[i-2]
  }
  return dp[n]
}

console.time('fib')
console.log(fib2(145))
console.timeEnd('fib')
// 最简单的dp
