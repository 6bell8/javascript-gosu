function solution(s1, s2) {
  let arr = [...s1, ...s2];
  let arr2 = [...new Set(arr)];
  return arr.length - arr2.length;
}

// 내 풀이가 보기 쉽게 푼 듯, 스킬로 풀었지만

function solution(s1, s2) {
  return s1.filter((v) => s2.include(v)).length;
}

// filter로 같은 알맹이를 찾아내는 방법 include같은 빌트인 함수 잘 사용해보기
