function solution(n) {
  const arr = [];

  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) arr.push(i);
  }

  return arr.reduce((a, b) => a + b);
}

//위와같은 경우 배열 push할 필요없이 let answer = 0; 같은 변수를 줘서 += answer로 더해줘도 딤
//for 조건식은 i변수를 활용해서 풀어줘야한다. for문은 i++ 증감식으로 사용
//for(i = 0; i<=n; i++) if(i % 2 == 0) 변수를 i로 잡아줘야 ++같은 기본적인 개념이 먹힘 n으로 잡으면 안됨

// 1. 반복문으로 짝수 산출
// 2. 짝수를 배열에 넣는다.
// 3. 배열의 합을 reduce로 합해준다.
