function solution(cipher, code) {
  return [...cipher].filter((a, i) => (i + 1) % code === 0).join("");
}

// 연산자로 배열을 각각 나눠주고 filter index를 통해서 코드 %와 일치하는 것을 걸러주고 join 시킨다. filter에서 배수나오는 수를 합쳐 줄 때 좋은 듯

function solution(cipher, code) {
  let answer = "";
  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }
  return answer;
}

// 일반적인 반복문 코드지만 매개변수를 i에 대입해서 푸는 방법
// 처음 i변수를 제대로 활용하는 것이 중요
// 마지막에 code+=을 사용하지않아도 조건을 i+=code로 걸어놨기때문에 자연스럽게 더해진다.
