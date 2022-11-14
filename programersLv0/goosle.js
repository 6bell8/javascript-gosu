function solution(balls, share) {
  let factorial = (n) => (n != 1 ? n * factorial(n - 1) : 1);
  if (balls === share) return 1;

  return Math.round(
    factorial(balls) / (factorial(balls - share) * factorial(share))
  );
}

// ! 팩토리얼 차례곱,
//Math.round 반올림 처리로 1, 30 분수값 정수로 최소화
// if(balls === share) 가 같을 시에 경우의 수 1리턴
