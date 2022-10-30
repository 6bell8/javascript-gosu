function solution(slice, n) {
  let pizzaCnt = 1;

  while (true) {
    if (slice * pizzaCnt < n) {
      pizzaCnt++;
    } else {
      return pizzaCnt;
    }
  }
}

//매개변수 slice, n 인데 한사람 이상이 한조각이상만 먹으면 되는것
//피자 조각은 고정이고 다른 피자도 조각 수 동일
//문제 잘 읽자,,
