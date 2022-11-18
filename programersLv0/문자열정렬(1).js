function solution(my_string) {
  let str = my_string.replace(/[abcdefghijklmnopqrstuvwxyz"]/g, "");
  let arr = [...str];
  let arr2 = arr.map(Number);

  return arr2.sort((a, b) => a - b);
}

//내 풀이법
//문자열에서 문자를 없애주고 배열에 나머지 문자열을 연산자로 뿌려준다.
//이후 문자배열에서 .map 반복문을 사용해서 숫자로 바꿔주고 sort return

function solution(my_string) {
  return my_string
    .split("")
    .filter((char) => !isNaN(char))
    .map((number) => parseInt(number))
    .sort((a, b) => a - b);
}

//다른 사람풀이법
//문자열로 나눠주고 filter 함수를 통해서 !isNaN을 걸러준다.
//map 반복문 통해서 parseInt로 문자열을 숫자열로 바꿔준다.
//이후 문자열로 치환

// .map 함수를 사용할 때 파라미터에 (v => +v) 이런식으로 사용해도 숫자열로 바꾸는 배열이 먹힘
