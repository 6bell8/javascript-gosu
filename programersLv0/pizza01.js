function solution(n) {
  let pizza = 1;
  let value = n / 7;

  if (value.toFixed() === false) {
    value.toFixed() + 1;
  } else {
    value.toFixed();
  }
  return Math.ceil(value);
}

// 사람 수 n, 모든 사람이 피자를 한조각 이상 먹어야 함
// pizza = 7, n / 7

//공식 n / pizza = value / 소수점일 때 +1 소수점이 아니면 return
