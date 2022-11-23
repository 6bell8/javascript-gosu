function solution(array, n) {
  array.push(n);
  array.sort((a, b) => a - b);
  let cnt = array.findIndex((e) => e === n);

  if (array[cnt + 1] === undefined) {
    return array[cnt - 1];
  } else if (array[cnt] - array[cnt - 1] <= array[cnt + 1] - array[cnt]) {
    return array[cnt - 1];
  } else {
    return array[cnt + 1];
  }
}

// 가장 가까운 수가 여러개면 작은 수 리턴
// n을 array 배열에 넣고 findIndex.
// array[cnt] 큰 수 아님 작은 수 조건문

// 다른 사람들은 Math.abs 같은 절대값을 활용해서 풀었음 다음에 ㄱㄱ
