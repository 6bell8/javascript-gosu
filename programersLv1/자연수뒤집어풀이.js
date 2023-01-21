function solution(n) {
  return [...n.toString()].reverse().map((a) => parseFloat(a));
}
