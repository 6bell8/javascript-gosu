function solution(array) {
    arr = [...array]
    const arrSort = arr.sort();
     
    while(true) {
    if(arrSort.length === 1){
        return arrSort.shift()
    } else {
    arrSort.shift();
    arrSort.pop();
    }
 } 
}
    
    
    
//중앙값 구하기 
//1. 나보다 큰 값, 나보다 작은 값을 for문으로 돌려서 같을 때 남는 수를 도출한다.

//or

// 순서대로 배열시켜서 pop(), shift()를 통해 마지막에 남는 숫자를 반환한다.

//샘플케이스는 통과했지만 왜 안되는지 모르겠음

//다른 풀이 


function solution(array) {
    
    let minNumber = 1000
    let newArr = []
    //배열에서 최소값을 찾는 것
    let cnt = 0; 
    while(cnt < array.length) {
         if(minNumber > array[cnt]){
        minNumber = array[cnt]
    }
        cnt= cnt+1
    }
   newArr.push(minNumber)

}
    
    
    
    
    




// 1. 정렬
// 1-1. 배열 중 가장 작은 값을 찾는다.
// 1-2. 찾으면 새 배열에 넣는다.
// 1-3. 원래 배열에 찾은 값은 지운다.
// 1-4. 만약 원래 배열 길이만큼 반복했으면 끝낸다.아니면 1-1로 돌아간다.
// 2. 가운데 값 꺼내기

