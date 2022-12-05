function solution(p) {
  let [x, c] = p.split("+").reduce(
    ([a, b], s) => {
      //1. 구조분해로 x값 자연수 값을 나눠준다. 이후 구조분해 그대로 가져와서 reduce, s로 매핑
      if (s.includes("x")) {
        return [a + Number(s.trim().replace("x", "") || 1), b];
        //2. s조건식에 x포함, number식을 달고 || 를 사용한 이유는 number가 0이 나왔을 떄 false가 되기 때문에 1이 자연스럽게 들어 갈 수 있음,
      }
      return [a, b + Number(s)];
    },
    [0, 0]
  );
  // 3. 그게 아닐 경우 s매핑은 b에 계속 더해지고, 0인덱스부터 시작
  if (x == 0 && c == 0) return 0;
  // 4. 무조건 두개 다 0이면 0을 리턴한다.
  if (x == 0) return c.toString();
  // 5. x가 0이면 무조건 c를 문자열로 바꾸고 리턴한다.
  x = `${x == 1 ? "" : x}x`;
  // 6. x변수를 $사용을 통해서 바꿔준다.
  if (c == 0) return x;
  // 7. c가 0일 때 x를 리턴

  return [x, c].join(" + ");
}

function solution(polynomial) {
  const arr = polynomial.split(" + ");
  const xNum = arr
    .filter((n) => n.includes("x"))
    .map((n) => n.replace("x", "") || "1")
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
  const num = arr
    .filter((n) => !isNaN(n))
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

  let answer = [];
  if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
  if (num) answer.push(num);

  return answer.join(" + ");
}
