// 先来一版好懂的 但是空间复杂度差一些
let arr = [8,11,4,3,2,1,9,6,0]
function quickSort(arr){
  // 终止条件
  if(arr.length<=1){
    return arr
  }
  let left = []
  let right = []
  let flag = arr.shift()
  for(let i=0;i<arr.length;i++){
    if(arr[i]<flag){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(flag, quickSort(right))

}


// console.log(quickSort(arr))
// 原地快排
function quickSort1(arr, low=0,high=arr.length-1){
  //   
//   
//   |              |
// 6  0 ,4,3,2,1,8,9,11
//              | |
  if(low>=high){
    return 
  }
  let left = low
  let right = high
  let flag = arr[left]
  while(left<right){
    // 从右边尝试找比flag小的, 比flag大，right坐移
    if(left<right && flag<=arr[right]){
      right --
    }
    arr[left] = arr[right]

    if(left<right && flag>=arr[left]){
      left ++
    }
    arr[right] = arr[left]
  }
  arr[left] = flag
  // quickSort1(arr,low,left-1)
  // quickSort1(arr,left+1,high)
  return arr
 
} 
console.log([8,11,4,3,2,1,9,6,0])
console.log(quickSort1(arr))


// 为啥要取第一个
// 其实随机的 只是为了发方便
// 快速排序的复杂度是多少 (时间)
// n*log n
// 快速排序啥时候复杂度最差，如果一个数字已经排好序的
// 复杂度是O(n^2) 取第1个的不好
// 1. 随机取索引
// 2. 快排之前，先做一下乱序

// [3,2,4,6,2,1]
// [4,2,3,6,2,1]