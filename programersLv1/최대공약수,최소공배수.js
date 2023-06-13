function solution(n, m) {
  let arr = [];
  let cnt = 1;
  // m보다 n이크면, n의 자리를 m이 m자리를 n이 들어가는 것이기 때문에 통일성이 생긴다.
  let num = n > m ? m : n;

  while (num >= cnt) {
    if (n % cnt === 0 && m % cnt === 0) {
      arr.push(cnt);
    }
    cnt++;
  }
  return [Math.max(...arr), (n * m) / Math.max(...arr)];
}

// 최대 공약수, 최소 공배수를 인자에서 받아와서 구하는 문제
// 최대공약수를 리턴할 때,

// 1. n의 값보다 크면 안됨, m으로 나눠져야됨
// 2. n * cnt, m * cnt 배열에 넣고, 중복 되는 숫자 넣기
