function solution(arr) {
  let findIndexArray = [];
  // 여기서 false 값만 return
  // return arr.map((a,i)=> a == arr[i+1]).findIndex((el)=> el == false)
  let newArray = arr.map((a, i) => a == arr[i + 1]);

  for (let i = 0; i <= arr.length; i++) {
    if (newArray[i] === false) findIndexArray.push(arr[i]);
  }
  return findIndexArray;
}

function solution(arr) {
  return arr.filter((e, i) => e !== arr[i + 1]);
}

// e 인자와 arr[i+1] 다른 것을 거르고 맞는 이전 배열을 리턴하는 거기 때문에 filter 함수를 통해서 리턴하는 걸로 끝낼 수가 있다.

// false인 a[i] 만 리턴하면, answer
// arr.map 를 통해서, 배열에 있는 a, 인자값이 같으면 새배열로, 아니면 pop
