function solution(s) {
  let pArr = [];
  let yArr = [];

  s.split("").map((a, i) => {
    if (a === "P" || a === "p") {
      pArr.push(a);
    } else if (a === "Y" || a === "y") {
      {
        yArr.push(a);
      }
    }
  });

  return yArr.length === pArr.length ? true : false;
}

// 다른사람 풀이
// 문제 똑바로 읽깅,,
function numPY(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
