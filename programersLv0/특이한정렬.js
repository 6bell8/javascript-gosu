function solution(numlist, n) {
  return numlist.sort((a, b) => {
    //절대값을 이용한 변수 생성 이때 화살표 함수 생성하는 거 까먹지 않기
    let num1 = Math.abs(a - n);
    let num2 = Math.abs(b - n);

    // if 조건문으로 a,b 원소의 순서를 봐꿔주는 기능이 필요함
    // 처음에 변수만 몰입하다가 원소를 못 바꿔줬기 때문에 이 부분 간과하면 안됨
    if (num1 == num2) return b - a;
    // 이후 변수를 리턴
    return num1 - num2;
  });
}

// 정렬 문제같은 경우 sort에서 변수를 생성해서 푸는 경우가 잦음

//다른 사람 풀이
function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}

// sort 이후 절대 값 생성, 왼쪽 배열이 true일 경우 || b-a값을 리턴해줌
