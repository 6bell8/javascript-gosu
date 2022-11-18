function solution(my_string) {
  let str = my_string.split("");
  let arr = ["a", "e", "i", "o", "u"];

  let newArray = str.filter(
    (f) =>
      f !== arr[0] &&
      f !== arr[1] &&
      f !== arr[2] &&
      f !== arr[3] &&
      f !== arr[4]
  );

  let answer = newArray.join("");

  return answer;
}

// 내가 푼 풀이
// filter식에서 조건문 && 적용

function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}

// 다른 사람의 풀이 replace
// replace를 활용 / /g를 통해 검색해서 해당 열 '' 처리

function solution(my_string) {
  return Array.from(my_string)
    .filter((t) => !["a", "e", "i", "o", "u"].includes(t))
    .join("");
}

// 다른 사람풀이
// Array.from 앝은 복사 후 []으로 모음 정리 후 t파라미터로 묶어준다. 그리고 해당되는 파라미터를 필터링하고 join처리

function solution(my_string) {
  let answer = "";
  let eng = ["a", "e", "i", "o", "u"];
  my_string.split("").forEach((v) => {
    if (eng.indexOf(v) === -1) answer += v;
  });
  return answer;
}

// 다른 사람풀이
// 모음 배열 생성 후 forEach 반복문 돌려주면서 v 파라미터 생성
// indexof(v)를 통해 모음 배열과 일치하지 않는 것(-1이 나옴) 그것을 answer에 모두 더해준다.
