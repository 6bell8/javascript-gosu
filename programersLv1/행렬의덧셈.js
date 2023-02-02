function solution(arr1, arr2) {
  let arr = [];

  for (let i = 0; i <= arr1.length - 1; i++) {
    for (let j = 0; j <= arr1[i].length - 1; j++) {
      arr.push([arr1[i][j] + arr2[i][j]]);
    }
  }

  let newArr = arr.flat();
  let num = [];

  while (newArr.length !== 0) {
    let char = newArr.splice(0, arr1[0].length);
    num.push(char);
  }

  return num;
}

// 다른사람풀이

function solution(arr1, arr2) {
  let mini = [];
  let dap = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      mini.push(arr1[i][j] + arr2[i][j]);
    }
    dap.push(mini);
    // mini를 빈 배열 처리를 해주면 기존에 있던 배열이 비워지면서 알맞는 배열만 남게된다.
    mini = [];
  }
  return dap;
}
