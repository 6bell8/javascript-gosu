function solution(n, k) {
  let sum = 12000 * n + 2000 * k;

  for (let i = 1; i <= n; i++) {
    if (i % 10 === 0) {
      sum = sum - 2000;
    }
  }
  return sum;
}

// 총합을 구하고 10n면 = - k 로직
// if문으로 걸면 될 듯

//* sum-2000 cnt로 했더니 2000 - 4000  중복으로 빼줬는데 이걸 몰랐음,,

//* 머리 속으로 어느정도 구현하는 습관 키우기 5분정도 고민하는 건 당연하다.

//다른 사람 풀이

function solution(n, k) {
  return n * 12000 + k * 2000 - parseInt(n / 10) * 2000;
}

// parseInt로 정수처리해서 빼버림;
