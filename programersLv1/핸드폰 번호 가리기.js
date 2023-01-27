function solution(p) {
  // 원본 배열 지장을 주지않는 slice 활용, -4뜻은 뒤에서 -4개 잘라서 붙히겠다는 뜻
  return "*".repeat(p.length - 4) + p.slice(-4);
}

// 다른 사람풀이 정규식 활용
function hide_numbers(s) {
  // \d숫자 검색,(\D는 숫자가 아닌 것) (?= \d{4}) 까지 앞부분일치 (?!=\d{4})?1 뒷부분일치
  return s.replace(/\d(?=\d{4})/g, "*");
}
