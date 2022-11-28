function solution(n, numlist) {
  let cnt = 0;
  let arr = [];

  while (cnt <= numlist.length) {
    if (numlist[cnt] % n === 0) {
      arr.push(numlist[cnt]);
      cnt++;
    } else {
      cnt++;
    }
  }
  return arr;
}

// key point for문 돌리고 numlist numlist[cnt] % n === 0 인 것들만 리턴

function solution(n, numlist) {
  return numlist.filter((v) => v % n === 0);
}

// 다른 사람 풀이,, filter로 numlist.filter((v)=> v % n ===0 )
