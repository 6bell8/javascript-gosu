function solution(A, B) {
  let cnt = 0;
  let arrA = [...A];
  let arrB = [...B];

  if (A == B) return 0;

  for (let i = 0; i < A.length; i++) {
    if (arrA !== arrB) {
      arrA.unshift(arrA.pop());
      cnt++;
    }
    if (arrA.join("") === arrB.join("")) {
      return cnt;
    }
  }

  return -1;
}

// a와 b가 같은 경우 수 염두

//다른 사람풀이

let solution = (a, b) => (b + b).indexOf(a);

// 파라미터 a,b 중 b를 더해주면 ohellohell 이런 형태가 된다. 따라서 a를 찾고 싶을 때 indexOf(a)를 하면 몇인덱스에 있는지 알 수 있다.
