// `${함수}문자열` 따옴표를 쓰지않고 백틱으로 활용가능, findIndex 활용도 좋지만 , indexOf가 깔끔

// findIndex는 배열안에서 특정 조건을 찾음, a => a == ('kim') 이런 식(프로퍼티가 있으면 장려) 하지만 indexOf는 indexOf('kim') 같은 일반 배열에서 활용가능
function solution(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}
