function solution(n) {
  let nums = [];
  for (i = 0; i <= n; i++) {
    if (i % 2 === 1) nums = [...nums, i];
  }
  return nums;
}
