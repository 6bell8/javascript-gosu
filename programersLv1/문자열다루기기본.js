function solution(s) {
    let char =  s.split('')
    let arr = []
 
     if(char.length == 4 || char.length == 6){
        arr=char
     }  else {
         return false
     }
 
    return !isNaN(arr.map((a)=> a * 1).join(''))
 }