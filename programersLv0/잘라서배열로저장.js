function solution(my_str, n) {
  let arr = [];
  let i = 0;
  while (i < my_str.length) {
    if (i <= my_str.length) {
      arr.push([...my_str].splice(i, n).join(""));
      i = i + n;
    }
  }
  return arr;
}

// while 조건문으로 정리, i는 0으로 설정해서 while문 돌리기

//slice는 원본 배열을 수정하지 않고 새로운 배열을 만드는 것과 다르게 splice는 원본 배열 자체를 수정

// 따라서 splice를 통해서 배열을 잘라주고, arr에 넣는 식으로 풀었음

function solution(my_str, n) {
  let res = [];
  for (let i = 0; i < my_str.length; i += n) res.push(my_str.slice(i, i + n));
  return res;
}

// 다른사람풀이
// 원본을 훼손하지않는 slice로 풀이
// for문 최소화 i+= 증감식을 통해서 n을 누적해서 더함
// else는 뺴도 됐다. i + n은 뒤에 값이 없기때문에 그대로 더해짐
