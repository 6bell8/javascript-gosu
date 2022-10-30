function solution(num_list) {
    let oddNum = 0;
    let evenNum = 0;
    let cnt = 0;
    let arr = [];
    let evenNums = [];
    let oddNums = [];
     
     for(let i = 0; i<num_list.length; i++){
         if(num_list[cnt] % 2 === 0){
             evenNum++;
         } else {
             oddNum++;
         }
         cnt = cnt+1;
     }
       return [evenNum, oddNum]
 }
 
 // num_list 배열 원소들을 % 2, 홀수는 odd 배열에 push, 짝수는 even 배열에 push
 // 다른 배열을 생성하고 [odd.length, even.length]