function solution(num, k) {
  let char = num.toString().split("");
  let str = k.toString();
  return char.indexOf(str) > -1 ? char.indexOf(str) + 1 : -1;
}

//findIndex는 숫자열에 사용 indexOf는 문자열에 사용

// 다른 사람풀이

function solution(num, k) {
  let ind = ("" + num).indexOf(k);
  return ind === -1 ? -1 : ind + 1;
}

// split 사용 안하고 ''통해서 축약 이후 삼항연산자
