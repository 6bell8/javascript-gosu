function solution(num, total) {
  let arr = [];
  //중앙값 구하는 방법
  Number.isInteger(total / num) == true
    ? arr.push(total / num)
    : arr.push(Math.floor(total / num)) && arr.push(Math.ceil(total / num));

  // 이후 반복문 리턴
  while (num != arr.length) {
    arr.unshift(arr[0] - 1);
    arr.push(arr[arr.length - 1] + 1);
  }
  return arr;
}

function solution(num, total) {
  // 처음 값 구하는 방법
  // total에서 2를 곱해주고, num만큼 나눠주고 +1 -num / 2 return 하면 초기값
  const a = ((2 * total) / num + 1 - num) / 2;

  //배열을 생성해주고, fill을 안하면, null값이 남아버림 그래서 null을 빼주려고 fill 생성, 이후 인덱스 + a으로 매핑하면 답나옴
  return Array(num)
    .fill()
    .map((_, i) => i + a);
}
