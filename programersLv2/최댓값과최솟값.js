//문자열도 Math.min이 된다. + "" + Math.max 이런식으로 풀어주는 게 정석인 듯
function solution(s) {
  const arr = s.split(" ");

  return Math.min(...arr) + " " + Math.max(...arr);
}

function solution(s) {
  let arr = s
    .split(" ")
    .map((a) => Number(a))
    .sort((a, b) => a - b);
  return arr[0] + " " + arr[arr.length - 1];
}
