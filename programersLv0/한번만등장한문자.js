//나의 풀이

function solution(s) {
  let str = s.toString();
  let char = str.split("");
  let dict = {};
  let cnt = char.map((e) =>
    dict[e] !== undefined ? (dict[e] += 1) : (dict[e] = 1)
  );

  return Object.entries(dict)
    .map((a) => (a[1] === 1 ? a[0] : null))
    .filter((a) => a !== null)
    .sort()
    .join("");
}

// 값 속성을 더해주면서 푼 풀이인데 별로임

// 다른 사람풀이
var solution = (s) =>
  [...s]
    .filter((c) => s.match(new RegExp(c, "g")).length == 1)
    .sort()
    .join("");

// 스프레드 연산자를 통해서 나눠주고, 정규식으로 배열의 길이가 하나만 있는 것을 .match 함수를 통해 나타낸다음 길이가 1인 것만 리턴
