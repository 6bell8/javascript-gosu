function solution(denum1, num1, denum2, num2) {
  const denum = num1 * denum2 + num2 * denum1;
  const num = num1 * num2;

  //선언하려는 문이 무조건 왼쪽에 있어야한다.
  let minNum;
  if (denum < minNum) {
    minNum = denum;
  } else {
    minNum = num;
  }

  //최대공약수를 무작위로 선정 -1씩 빼가면서 반복문을 돌려주는 과정 while은 true인 동안에 계속 반복해서 실행한다.

  while (true) {
    if (num % minNum === 0) {
      if (denum % minNum === 0) return [denum / minNum, num / minNum];
    }
    minNum = minNum - 1;
  }
}

//분모 덧셈을 먼저하고
//그 다음 분자분모의 최대공약수로 통분을 해주는 과정을 거침

//분자 분모 중에서 작은 수를 찾는다
//둘 다 나누어 떨어지면 그게 최대공약수
//안나누어 떨어지면 그 수를 -1 하고 더 줄여본다
