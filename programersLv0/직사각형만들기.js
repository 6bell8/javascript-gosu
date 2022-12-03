function solution(D) {
  D.sort((a, b) => a[0] - b[0]);
  let xSide = D[0][1] - D[1][1];
  let ySide = D[0][0] - D[2][0];
  return Math.abs(xSide) * Math.abs(ySide);
}

// 직사각형이기 때문에 x, y변의 길이만 알면 답을 찾을 수 있음
// D의 x축 길이를 구하는 방법은 sort((a,b)=>a[0] - b[0])로 배열을 정렬해주고 x축에 있는 인덱스를 빼주면서 길이를 찾고 0번 배열에서 3번쨰 있는 y축 인덱스를 빼주면서 y의 길이를 찾고 절대값으로 더해준다.

function solution(dots) {
  let x = [],
    y = [];

  for (let pos of dots) {
    x.push(pos[0]);
    y.push(pos[1]);
  }

  return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}

// 다른 사람풀이
// for of문으로 dots배열을 순회하면서 x축의 길이, y축의 길이를 넣어준다. 그리고 스프레드연산자를 활용해서 x의 최댓값, x의 최소값을 빼줌, y도 마찬가지 그리고 해당하는 숫자를 곱해준다.
