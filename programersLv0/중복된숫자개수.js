//나의 풀이

function solution(array, n) {
  return array.filter((v) => v === n).length;
}

function solution(array, n) {
  var answer = 0;
  let pos = 0;

  while (array.indexOf(n, pos) != -1) {
    answer++;
    pos = array.indexOf(n, pos) + 1;
  }

  return answer;
}

// array.indexOf(n, pos) 문자열에서 특정 문자열을 찾고 해당 인덱스를 리턴하는 구조
