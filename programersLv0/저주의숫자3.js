function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    while (
      // 2. for로 늘린 answer를 통해서 조건을 부여
      answer % 3 == 0 ||
      answer % 10 == 3 ||
      answer / 10 == 3 ||
      answer / 10 == 13 ||
      answer.toString().includes("3")
      // 문자화 시켰을 때 3이 들어간 answer는 answer 증가
    ) {
      answer++;
    }
    answer++;
    //1. answer는 늘어나고
  }
  return answer - 1;
}

// || 는 우항이 true일 때 까지 넣어주는 것! 조건을 계속 추가할 때 사용

// 반복문 2개 어떻게 하는지 생각해서 풀이
// answer는 for 반복문으로 추가 시키고, answer를 다른 반복문에 대입시켜서 반복문 내 조건을 정해줌

// 조건을 잘보기,,!!

function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0) {
      n++;
      //그래서 반복문 속에서 i변수를 새로 만들고 n + i 라는 식으로 구성
    }
    if (String(i).includes("3") & (i % 3 != 0)) {
      n++;
      //마지막에 3이 들어가는 숫자를 포함시키는 식
    }
  }
  return n;
}

// 나오는 정수가 이미 n인 것을 가정하고, 이후 + 되는 방향으로 식을 잡음
