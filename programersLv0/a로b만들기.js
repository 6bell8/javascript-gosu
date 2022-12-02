function solution(before, after) {
  before = [...before].sort();
  after = [...after].sort();

  return before.filter((a, i) => a === after[i]).length === after.length
    ? 1
    : 0;
}

function solution(before, after) {
  return [...before].sort().join("") === [...after].sort().join("") ? 1 : 0;
}

// 다른 사람 풀이법 문자열이 같은지 비교하는 것은 sort를 사용해서 정렬을 많이한다.
// filter에 a,i 파라미터가 있으면 a는 item i는 index로 생각한 뒤 arr[i]를 입력할 때 순회하면서 비교하는 식임
