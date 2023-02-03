function solution(s) {
  return (
    s
      .split(" ")
      // 공백 문자열 앞글자 charAt 나누어주고
      .map(
        (v) =>
          v.charAt(0).toUpperCase() +
          //substring으로 문자열 바꿔줄 스타트지점 선택 이후 소문자 변환
          v.substring(1).toLowerCase()
      )
      .join(" ")
  );
}

// 문자열도 for문 사용이 가능 i가 공백일 경우도 생각해서 대입
function solution(s) {
  var answer = "";
  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i - 1] === " ") {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
  }
  return answer;
}
