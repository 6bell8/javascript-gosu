function solution(polynomial) {
  let answer = [];
  let x = [];
  let num = [];
  let cnt = 0;
  let split = polynomial.split("+");

  // while (cnt <= split.length){
  //     if(split[cnt].includes('x') === true ){
  //       x.push(split[cnt])
  //      cnt++
  //     } else {
  //       num.push(split[cnt])
  //       cnt++
  //     }
  //     console.log(cnt)
  // }

  // 배열에서 문자열(includes) 찾고 있으니 될 것도 안됨,,;

  for (let k of split) {
    if (k.includes("x") === true) {
      x.push(k);
    } else {
      num.push(k);
    }
  }

  return x;
}

// 뒤가 같은 항 끼리 더하는 것
// x로만 이루어져있음
// x가 들어있는 항만 찾아서 push

// x에 replace 1x 그리고 x를 다지우고 reduce시키고 변수 처리return 앞에 변수 + 자연수
