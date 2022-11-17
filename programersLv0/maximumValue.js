function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}

//number 배열 sort b-a
//number의 배열의 [0], [1]을 곱해서 return
