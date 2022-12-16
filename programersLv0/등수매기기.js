function solution(score) {
  let dict = {};
  // 사전 문자열을 생성

  score
    // score 구조분해 매핑
    .map(([a, b]) => a + b)
    .sort((a, b) => b - a)
    // dict 문자열에 score가 없으면 높은 순서대로 인덱스 값을 배분, dict 문자열에 추가, 중요한 점은 score는 앝은 복사이기 떄문에 배열이 바뀌지않음
    // 여기서 i는 인덱스를 뜻하기 때문에 null로 빠져도 다음 숫자가 들어가는 문자열은 인덱스가 올라감, 같은 값은 첫번째 원소가 충족했기 때문에 합산이 되지않음
    .map((a, i) => (dict[a] === undefined ? (dict[a] = i + 1) : null));

  //dict는 문자열이기 때문에 []대괄호에 값을 집어 넣으면 위에서 구한 프로퍼티가 반환 됨. ex. dict 배열에서 '150': 3이런 식으로 매칭이 되어져있기때문
  return score.map(([a, b]) => dict[a + b]);
}

function solution(score) {
  // 원 배열을 살려두고
  const total = score.map(([a, b]) => a + b);

  //원배열을 소팅해서 내림차순으로 배열해준다.
  // total을 앝은 복사를 한 이유는 sort하면 원본 배열이 훼손되는데, [...]를 통해 앝은 복사를 하면 원본배열이 훼손되지않기때문이다.
  const rank = [...total].sort((a, b) => b - a);

  // 이후 원배열을 rank 배열 대상으로 매핑해서 indexOf를 찾아준다.
  // indexOf는 중복원소를 카운트해준다. n+1하면 배열 완성
  return total.map((n) => rank.indexOf(n));
}
