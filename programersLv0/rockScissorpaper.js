function solution(rsp) {
  let rspArr = rsp.split("");
  let arr = [];
  let cnt = 0;
  while (cnt < rspArr.length) {
    if (rspArr[cnt] == 2) {
      arr.push("0");
    }
    if (rspArr[cnt] == 0) {
      arr.push("5");
    }
    if (rspArr[cnt] == 5) {
      arr.push("2");
    }
    cnt++;
  }

  return arr.join("");
}

// 205 순서대로 이기는 문자열을 리턴한다.
// 2이면 0, 0이면 5, 5면 2,를 리턴한다.

// 1. 변수값을 split으로 나눈다.
// 2. 해당하는 숫자가 나오는대로 리턴
// 3. join으로 묶어준다.
