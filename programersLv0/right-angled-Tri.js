const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  const n = Number(input[0]);

  let line = 1;

  while (line <= n) {
    let starStr = "";
    let cnt = 0;

    while (cnt < line) {
      starStr = starStr + "*";
      cnt = cnt + 1;
    }
    console.log(starStr);

    line++;
  }
});

// 이전 함수 솔루션이 아닌 출력만하면 되는 문제
// 1. const n(매개변수) = (Number.input[0])에 넣어주면서 출력 기능 완성
// 1-2. 추상 된 line 값을 먼저 숫자로 바꿈
// 2. 반복문을 이용하여 line을 starStr로 형상화 ex. starStr = starStr + "*"
