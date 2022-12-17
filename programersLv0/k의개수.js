function solution(i, j, k) {
  let arr = [];
  while (i <= j) {
    arr.push(i);
    i++;
  }
  let num = arr.toString().split("").map(Number);
  let strK = k.toString();
  let answer = 0;
  let arr2 = num.map((n) =>
    n.toString().includes(k) === true ? answer++ : null
  );
  return answer;
}

// n의 기능을 이해하고 풀이
