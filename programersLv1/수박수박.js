function solution(n) {
  let arr = new Array(n);
  arr.fill("수박");
  let str = arr.join("");
  return str.slice(0, str.length / 2);
}
