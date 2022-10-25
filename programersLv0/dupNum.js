function solution(array) {
  let sortedArray = array.sort((a, b) => a - b);
  const answer = 0;
  let cnt = 0;
  let choi = -1; // 최빈값이 뭔지
  let choiRepeat = 0; // 최빈값이 될 때 몇번 반복해서 된건지
  let repeatCnt = 0;
  let beforeNum = -1;
  let dupNum = false;

  while (cnt < array.length) {
    if (beforeNum !== array[cnt]) {
      repeatCnt = 1;
    } else {
      repeatCnt = repeatCnt + 1;
    }

    if (repeatCnt === choiRepeat) {
      if (choi !== array[cnt]) {
        dupNum = true;
      }
    }

    // 반복되는 횟수가 최빈값이 반복되는 횟수보다 크면 최빈값이 바뀌는 순간
    if (repeatCnt > choiRepeat) {
      choi = array[cnt];
      choiRepeat = repeatCnt;
      dupNum = false;
    }

    beforeNum = array[cnt];
    cnt = cnt + 1;
  }
  if (dupNum) return -1;
  return choi;
}

// 1. 앞에서부터 차례대로 원소를 확인하면서 갯수를 센다.

//2. 최빈값을 그때그때 기록한다.
