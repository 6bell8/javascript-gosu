//나의 풀이

function solution(chicken) {
  let sum = 0;
  let coupon = 0;
  // 10보다 크거나 같을 때가지 true
  while (chicken >= 10) {
    coupon = { a: chicken % 10 };
    chicken = Math.floor(chicken / 10);
    sum += chicken;
    // 치킨의 나머지를 더해주는 방식
    chicken = chicken + coupon.a;
  }
  return sum;
}

// 앝은 복사가 핵심, 앝은 복사는 객체열을 만들어서 하기 때문에 원시복사처럼 본문을 바꾸지 않음, 결과적으로 나눈 값을 floor해서 버리고, 나머지 값을 마지막 chicken에 더하는 식으로 진행

//다른사람 풀이
function solution(chicken) {
  let answer = 0;
  // 치킨 복사
  let coupon = chicken;

  while (coupon >= 10) {
    // chicken의 나머지 값을 버리고 몫을 리턴
    answer = answer + parseInt(coupon / 10);
    // 몫 + 쿠폰의 나머지를 더해줌 이 상태로 반복문
    coupon = parseInt(coupon / 10) + (coupon % 10);
  }

  return answer;
}
