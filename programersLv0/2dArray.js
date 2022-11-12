function solution(num_list, n) {
  let arr = [];

  while (0 !== num_list.length) {
    let numArr = num_list.splice(0, n);
    arr = [...arr, numArr];
  }

  return arr;
}

//splice로 배열 길이를 자르면 자른 배열이 반환된다.
//splice를 사용하면 num_list.length이 줄어들기 때문에 length가 0이 될 때 까지 반복문을 돌려준다.

// 1. 반환 된 배열을 스프레드 연산자로 arr에 뿌려주고, 반복문을 돌렸으니까 arr 또한 자신배열에 추가
// 2. splice가 누적 된 arr가 해당하는 답이다.
