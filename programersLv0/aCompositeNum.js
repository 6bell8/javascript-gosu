function solution(n) {
  let cnt = 0;
  let tar = 3;

  while (tar++ < n) {
    for (let i = 2; i <= Math.sqrt(tar); i++) {
      if (tar % i === 0) {
        cnt++;
        break;
      }
    }
  }

  return cnt;
}

// 1과 현재 숫자로만 나눠지는 수를 제외하고 모두 합성수
// 그렇기 때문에 sqrt를 사용해서 2이상인 정수만 조건을 충족

// 반복문을 돌려야하는 대상은 2가지 (합성수가 존재하는 4부터 tar 증가 반복문, 증가한 tar의 나머지를 계산하는 i 반복문)

// break을 하는 이유는 for, if문 내에서 기준을 충족했기때문에 불필요하게 for을 돌릴 필요없이 순회를 줄일 수가 있다.

// for문 조건식이 i = 2부터 하는 이유는 루트를 사용하면서 2보다 크거나 같을 때 부터 시작해야 합성수라는 조건에 맞기때문
