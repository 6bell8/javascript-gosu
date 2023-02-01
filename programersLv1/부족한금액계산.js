function solution(price, money, count) {
  let cnt = 1;
  let sum = 0;
  while (cnt != count + 1) {
    sum += price * cnt;
    cnt++;
  }
  return money < sum ? Math.abs(money - sum) : 0;
}
