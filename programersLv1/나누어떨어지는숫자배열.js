function solution(arr, d) {
  let newArr = [];
  arr.map((a) => (a % d === 0 ? newArr.push(a) : undefined));
  return newArr.length === 0 ? [-1] : newArr.sort((a, b) => a - b);
}
