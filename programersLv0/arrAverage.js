function solution(numbers) {
  let arr = [...numbers];
  const arrAve = arr.reduce((a, i) => {
    return a + i;
  });

  return arrAve / numbers.length;
}

//평균값을 구하는 문제 numbers.length;

//1. 배열을 나타내고, numbers = []
//2. 배열의 숫자의 총합을 합하고, numbers.length 만큼 나눈다?
