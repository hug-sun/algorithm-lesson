let arr = [11,4,3,2,1,9,6,0]
// 冒泡
function bubleSort(arr){
  const len = arr.length
  for(let o=len;o>=2;o--){
    // 主要是遍历次数
    for(let i=0;i<=o-1;i++){
      if(arr[i]>arr[i+1]){
        [ arr[i], arr[i+1] ]=  [ arr[i+1], arr[i] ]
      }
    }
  }
  return arr
}

console.log(bubleSort(arr))
// 冒泡排序稳定