function solution(my_string) {
  let answer = "";
  let splitStr = my_string.split("");

  return splitStr.reverse().join("");
}

//my_string을 split('')으로 나누고 원소를 반환 reverse, join 햡쳐서 반환
//join(''), split의 반대기능 문장을 합쳐준다고 생각하면 된다.
