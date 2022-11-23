function solution(order) {
  let str = order.toString();
  let words = str.split("");
  let arr = [];

  return words.filter((e) => e === "3" || e === "6" || e === "9").length;
}

// filter 조건 여러개 하는 방법은 (e) 파라미터를 e=== "3" || e=== "6" 이런 식으로 사용해야한다.

// 스프레드연산자로 ('' + 매개변수) 이렇게도 split이 가능
