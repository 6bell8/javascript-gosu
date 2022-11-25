//나의 풀이

function solution(my_string, num1, num2) {
  let arr = my_string.split("");
  let str = arr.splice(num1, 1);
  let str2 = arr.splice(num2 - 1, 1);

  arr.splice(num2 - 1, 0, str[0]);
  arr.splice(num1, 0, str2[0]);

  return arr.join("");
}

// 내가 푼 방식은 배열에서 빠진 부분을 생각하고 해당 부분을 비워준다.
// 해당하는 자리에 배열을 splice('들어갈 인덱스','삭제될 원소','추가할 원소') 해주고 마지막에 join

function solution(my_string, num1, num2) {
  my_string = my_string.split("");
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join("");
}

// 다른 사람이 푼 방식은 구조분해할당을 통해서 배열을 생성하고 위치를 변경해준다.
