function solution(array, height) {
  const found = array.find((element) => element > height);
  const idx = array.indexOf(found);
  return idx >= 0 ? array.length - idx : 0;
}

//indexOf 활용해서 배열 위치 찾기
// return 공식 안헷갈리게 잘 활용해보기
