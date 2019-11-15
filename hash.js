class HashTable{
  constructor(){
    this.items = []
  }
  get(key){
    const hash = this.keyToHash(key)
    return this.items[hash]    
  }
  set(key,value){
    const hash = this.keyToHash(key)
    this.items[hash] = value
  }
  remove(key){
    const hash = this.keyToHash(key)
    delete this.items[hash] 
  }
  keyToHash(key){
    // 把字符串key，变成数字
    let hash = 0
    for(let i=0;i<key.length;i++){
      hash += key.charCodeAt(i)
    }
    hash = hash%37 // 这个数字要随时变
    // 数字会在37以内
    return hash
  }
  log(){
    console.log(this.items)
  }
}

let kkb = new HashTable()
kkb.set('name','kaikeba')
kkb.set('bestTeacher','大圣老师')
console.log(kkb.get('name'))
console.log(kkb.get('bestTeacher'))
// kkb.remove('name')
console.log(kkb.get('name'))
kkb.log()

// 不同的key 算出的hash一样



