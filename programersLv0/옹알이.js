function solution(babbling) {
  return (
    babbling
      //정규표현식 단어 하나하나 검색하는 방법은 | 사용한다.
      .map((a) => a.replace(/aya|ye|woo|ma/g, ""))
      // map으로 새로운 배열 리턴하면 .filter로 해당하는 배열 다시 리턴해서 갯수를 구하는게 깔끔하다.
      .filter((a) => a == "").length
  );
}
