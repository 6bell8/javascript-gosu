function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

//시간이 오래걸린요인, 매개변수내에서 그대로 search나 includes, match 문자열에 쓸 수 있는 빌트인 함수로 찾으면 됐는데 자꾸 배열 내에서 사용 할 수있는 find, filter를 활용해서 정답이 산으로 갔음

// 다음부터 매개변수 나오면 쫄아서 배열처리하지말고 매개변수에 사용할 수 있는 함수를 찾아서 사용해볼것

//문자열, 배열 잘 따져볼 것
