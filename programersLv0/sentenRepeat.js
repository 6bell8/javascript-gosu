function solution(my_string, n) {
  let cnt = 0;
  let splitArr = my_string.split("");
  let arr = [];

  while (cnt <= my_string.length - 1) {
    let mulSplit = splitArr[cnt].repeat(n);
    arr.push(mulSplit);
    cnt = cnt + 1;
    if (cnt > my_string.length - 1) {
      return arr.join("");
    }
  }
}

//cnt배열로 바운딩
// my_string 을 split한 후 (split은 배열로 리턴) cnt만큼 *
//repeat는 배열에서는 적용이 안됨
// 다시 join('') return (join이후 pop을 할 필요는 없다.)
