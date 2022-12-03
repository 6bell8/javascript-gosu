let plus = [];
let minus = [];

for (let k of numbers) {
  if (k <= 0) {
    minus.push(k);
  }
  if (k > 0) {
    plus.push(k);
  }
}

plus.sort((a, b) => a - b);
minus.sort((a, b) => a - b);
let plusNum = plus[plus.length - 1] * plus[plus.length - 2];
let minusNum = minus[minus.length - 1] * minus[minus.length - 2];

if (minus.length < 2) {
  return plusNum;
} else if (plus.length < 2) {
  return minusNum;
} else {
  return plusNum > minusNum ? plusNum : minusNum;
}

// 하 0때문에 테스트케이스 7번 못넘기고 다시함

function solution(numbers) {
  numbers.sort((a, b) => a - b);
  let plus = numbers[numbers.length - 1] * numbers[numbers.length - 2];
  let minus = numbers[0] * numbers[1];
  return Math.abs(plus) > Math.abs(minus) ? plus : minus;
}

//for of 문 테스트 하려다가 쉬운방법두고 멀리 돌아왔다,,

//다른사람풀이

function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] * numbers[j]);
    }
  }
  return Math.max(...answer);
}

// 숫자 2개를 상정해서 반복문을 두개 돌려서 푸시(무지막지한 경우의 수가 나올 듯) 이걸 흩뿌리고 최대값으로 리턴
