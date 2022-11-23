function solution(my_string) {
  let str = new Set(my_string);
  let answer = [...str];

  return answer.join("");
}

//스프레드 연산자 사용할 때 생성자함수도 넣어서 사용할 수 있음!! 클린코드생활화

//다른 사람의 풀이

function solution(my_string) {
  return [...new Set(my_string)].join("");
}
