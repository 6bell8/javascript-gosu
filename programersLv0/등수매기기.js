function solution(score) {
  let arr = [];
  //let cnt = 0

  for (let i = 0; i < score.length; i++) {
    arr.push({ value: score[i][0] + score[i][1], idx: i });
    arr.sort((a, b) => b.value - a.value);
  }

  let answer = [];

  for (let j = 0; j < arr.length; j++) {
    let item = arr[j];
    answer[item.idx] = j + 1;
  }

  return arr;
}

// i=0 으로 놓고 score[i][0] + score[i][1] 를 arr.push
//
// sort후 프로터티로 추가
