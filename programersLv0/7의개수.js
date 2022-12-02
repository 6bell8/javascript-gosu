function solution(array) {
  let str = array.toString().split("");
  //str.map((vl)=> vl === '7')
  return str.filter((v) => v === "7").length;
}

// 먼저 문자열 바꾸고 스플릿을 해서 7을 나누고, 넘버-  map으로 7이 몇개인지 찾는다

// 이게 안되면 filter로

function solution(array) {
  return array.join("").split("7").length - 1;
}

//다른 사람풀이

// 배열을 다 합쳐서 7을 split한 후 7을 제외한 다른 배열은 합쳐졌기 때문에 length -1 하면 된다.

function solution(array) {
  return array
    .map((el) => el.toString())
    .join("")
    .split("")
    .filter((el) => el === "7").length;
}

// 다른 사람풀이 map을 배열을 순회하는 용도로 썼음. toString 시키고 합치고 나누고 el 파라미터를 그대로 사용해서 7로 맞추고 길이를 구함. 다소 복잡
