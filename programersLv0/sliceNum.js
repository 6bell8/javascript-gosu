function solution(numbers, num1, num2) {
  var answer = numbers.slice(num1, num2 + 1);
  return answer;
}

//어떤 배열의 begin부터 end까지 (end 미포함)
// splice는 포함

//num1 ~ num2 까지 배열 리턴
//slice로 자르기
// slice로 자를 때
// ex. arr.slice(1, -1) 는 -1인덱스를 제외하고 배열을 반환하는 것이다.
