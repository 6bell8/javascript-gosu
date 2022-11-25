function solution(my_string) {
  return [...my_string]
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
}

//스프레드로 split 시키고 map 함수로 나눠준다.
//map 파라미터 char가 keypoint 각각의 배열을 순회하면서 삼항연산자로 바꿔줌
// char 활용 꾸준히 하기
