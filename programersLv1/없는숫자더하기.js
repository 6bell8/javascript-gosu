// 두배열에서 없는 숫자 골라내는 법은
// filter 함수를 사용한다음, includes해서 포함 된 숫자를 확인하는게 간편함.

function solution(numbers) {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return arr.filter((it) => !numbers.includes(it)).reduce((a, c) => a + c);
}
