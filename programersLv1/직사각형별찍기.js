//나의 풀이
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  let cnt = 0;
  while (cnt !== b) {
    console.log(new Array(a).fill("*").join(""));
    cnt++;
  }
});

// 다른 사람풀이
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  // row = 행 repeat(a)를 통해서 new Array fill보다 쉽게 구현,
  const row = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});
