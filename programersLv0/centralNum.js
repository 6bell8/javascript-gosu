function solution(array) {
  arr = [...array];
  const arrSort = arr.sort();

  while (true) {
    if (arrSort.length === 1) {
      return arrSort.shift();
    } else {
      arrSort.shift();
      arrSort.pop();
    }
  }
}

//중앙값 구하기
//1. 나보다 큰 값, 나보다 작은 값을 for문으로 돌려서 같을 때 남는 수를 도출한다.

//or

// 순서대로 배열시켜서 pop(), shift()를 통해 마지막에 남는 숫자를 반환한다.

//샘플케이스는 통과했지만 왜 안되는지 모르겠음

//다른 풀이

function solution(array) {
  let minNumber = 1000;
  let newArr = [];
  //배열에서 최소값을 찾는 것
  let cnt = 0;
  while (cnt < array.length) {
    if (minNumber > array[cnt]) {
      minNumber = array[cnt];
    }
    cnt = cnt + 1;
  }
  newArr.push(minNumber);
}

//다른 문제 풀이
function solution(array) {
  let sortedArray = array.sort((a, b) => a - b);
  const answer = 0;
  let cnt = 0; //배열의 숫자값
  let choi = -1; // 최빈값이 뭔지
  let choiRepeat = 0; // 최빈값이 될 때 몇번 반복해서 된건지
  let repeatCnt = 0;
  let beforeNum = -1;
  let dupNum = false;

  //조건 배열의 숫자값이 배열의 길이보다 작을 때
  while (cnt < array.length) {
    //값이 이전 값과 다를때 [-1부터 시작이기 때문에 처음 배열부터 다름]
    if (beforeNum !== array[cnt]) {
      //반복되는 값은 1
      repeatCnt = 1;
    } else {
      // 이전과 반복되는 값이 같을 때 +1
      repeatCnt = repeatCnt + 1;
    }

    // 반복되는 값과 최빈값이 같을 때
    if (repeatCnt === choiRepeat) {
      // 최빈값은 0, 배열값이 같지않다면 반복값은 true
      if (choi !== array[cnt]) {
        dupNum = true;
      }
    }

    // 반복되는 횟수가 최빈값이 반복되는 횟수보다 크면 최빈값이 바뀌는 순간
    if (repeatCnt > choiRepeat) {
      //반복되는 횟수가 더 많은 값으로 값이 바뀜
      choi = array[cnt];
      //반복되는 값과 최빈값이 동일
      choiRepeat = repeatCnt;
      //그렇게되면 dupNum는 false
      dupNum = false;
    }
    // 한큐가 끝나면 이전 카운트로 인해 값이 정해지고, 다시 카운트를 +1 한다.
    beforeNum = array[cnt];
    cnt = cnt + 1;
  }
  //조건식에 변수를 달아줘도 괜찮다
  if (dupNum) return -1;
  return choi;
}

// 1. 정렬
// 1-1. 배열 중 가장 작은 값을 찾는다.
// 1-2. 찾으면 새 배열에 넣는다.
// 1-3. 원래 배열에 찾은 값은 지운다.
// 1-4. 만약 원래 배열 길이만큼 반복했으면 끝낸다.아니면 1-1로 돌아간다.
// 2. 가운데 값 꺼내기
