function solution(age) {
  let alphaArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  let alphaJoinArr = [];

  let strAge = String(age);
  let splitAge = strAge.split("");

  let arr = [];

  //작은 수 부터 배열조건 값에 넣기, 조건이 맞으면 if로 내리기
  if (age >= 0) {
    arr.push(Number(splitAge[0]));
  }
  if (age >= 10) {
    arr.push(Number(splitAge[1]));
  }
  if (age >= 100) {
    arr.push(Number(splitAge[2]));
  }
  if (age >= 1000) {
    arr.push(Number(splitAge[3]));
  }

  if (arr.length > 0) {
    alphaJoinArr.push(alphaArr[arr[0]]);
  }
  if (arr.length > 1) {
    alphaJoinArr.push(alphaArr[arr[1]]);
  }
  if (arr.length > 2) {
    alphaJoinArr.push(alphaArr[arr[2]]);
  }
  if (arr.length > 3) {
    alphaJoinArr.push(alphaArr[arr[3]]);
  }

  return alphaJoinArr.join("");
}

// String(age)

// 1. arr. 알파벳 배열
// 1-2 age.split('')
// 1-3. splitAge[cnt] 맞게 리턴
// 1-4.
