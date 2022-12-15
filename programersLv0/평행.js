function solution(dots) {
  let arr = [];
  let arr2 = [];
  let cnt = 0;

  while (cnt < dots.length) {
    arr.push(dots[cnt][0]);
    arr2.push(dots[cnt][1]);
    cnt++;
  }
  arr.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  if (
    Math.abs(arr[0] - arr[1]) == Math.abs(arr[2] - arr[3]) &&
    Math.abs(arr2[0] - arr2[1]) == Math.abs(arr2[2] - arr2[3])
  )
    return 1;
  return 0;
}

// 점을 찍은 x축 길이가 맞아야되고, 점찍은 y축 선분을 뺀 길이가 맞아야된다.

// x점 [0] ~ [4]  반복문을 돌리고 math.abs했을 때, 길이 차가 똑같은 게 2개이상 이면 1 없으면 0

// 내껀 기울기 값이 아닌 x,y의 차이 값으로 구하려다가 틀렷음

function solution(dots) {
  let lean = [];

  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const curlean = (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]);
      if (lean.includes(curlean) === true) return 1;
      lean.push(curlean);
    }
  }
  return 0;
}

// 다른 사람 풀이 dots의 차이값을 상정해놓고 나눈 후에 기울기를 구함,
// 배열의 원소가 2개 일 때 for안에 for 반복문을 자주사용
// 그리고 기울기 값이 겹치는 상황을 includes 함수를 사용해서 오류를 줄임
// 마지막 lean 푸시 순서 헷갈리지않기
