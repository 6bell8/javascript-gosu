function solution(price) {
  if (price >= 500000 && price <= 1000000) {
    return Math.floor(price * 0.8);
  } else if (price >= 300000) {
    return Math.floor(price * 0.9);
  } else if (price >= 100000) {
    return Math.floor(price * 0.95);
  } else if (price < 100000) {
    return price;
  }
}

//10만원 이상 5%, 30만원 10%, 50만원 20%

// 10원 단위로 계산/ 버림처리!!! 올림이 아니라 문제 잘 읽자,,,
