function solution(p) {
  let arr = [];
  let cnt = 0;
  let char = p.toString().split("");

  while (cnt !== 4) {
    arr.push(char.pop());
    cnt++;
  }

  let numArr = char.map((a, i) => a.replace(/^0-9/gi, "8"));

  return numArr;
}
//char[1].replace(/[2]/gi,'*')
//char.map((a)=> a === a.replace(/[0-9]/g,"*"))

// 뒷자리 4개를 제외한 나머지 숫자열 리턴
// for문 phone_number[length-1] ~ [length-5] 까지 pop
// 정규식 replace 숫자모두 *
