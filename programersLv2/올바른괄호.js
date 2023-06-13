function solution(s) {
  let cnt = 0;

  // cnt 를 빌려, 괄호 여닫는 부분에 초점을 맞춘 문제
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") cnt++;
    else cnt--;
    // 처음부터 s[i] == ")" 이 나오면 return false가 되도록 설계
    if (cnt < 0) return false;
  }

  //마지막으로 cnt !==0 return false 식으로 if문 설계
  if (cnt !== 0) return false;
  else return true;
}
