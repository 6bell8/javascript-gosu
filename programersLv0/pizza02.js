function solution(n) {
  let piece = 6;

  while (true) {
    if (piece % n === 0) {
      return piece / 6;
    }
    piece += 6;
  }
}

//pizza 가 약수로 나눠 떨어지기만 하면 된다.

// pizzaCnt  (pizzaCnt * 6 % n === 0)
