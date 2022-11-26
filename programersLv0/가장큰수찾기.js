function solution(array) {
  var answer = [];
  let array2 = [...array];
  array.sort((a, b) => a - b);
  answer.push(array[array.length - 1]);
  let idx = array2.indexOf(array[array.length - 1]);
  answer.push(idx);
  return answer;
}

//내꺼 클린코드 한 것
function solution(array) {
  let array2 = [...array];
  array.sort((a, b) => a - b);
  return [array[array.length - 1], array2.indexOf(array[array.length - 1])];
}

//다른 사람 풀이

function solution(array) {
  return [Math.max(...array), array.indexOf(Math.max(...array))];
}

// Math.max로 최대값을 찾을 때 (...array)로 뿌려주고, 배열생성해서 찾음
