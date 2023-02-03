function solution(s) {
  return s.split("").sort().reverse().join("");
}

// sort a<b 삼항연산자활용
function solution(s) {
  return s
    .split("")
    .sort((a, b) => (a < b ? 1 : -1))
    .join("");
}
