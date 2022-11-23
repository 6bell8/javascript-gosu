function solution(strlist) {
  let cnt = 0;
  let arr = [];

  while (cnt < strlist.length) {
    let str = strlist[cnt].split("").length;
    arr.push(str);
    cnt++;
  }

  return arr;
}

// while문으로 매개변수 길이 조건지정(for문으로 하니까 split 사용이 안됨)
// split 사용 안해도 됐음
// 새로운 배열에 str길이 값 푸쉬
// cnt는 늘어나고 arr는 리턴

//다른 사람풀이

function solution(strlist) {
  return strlist.map((el) => el.length);
}

//map반복문 돌려서 strlist.map((el)=>el.length) 로 순서대로 배열,,
// map 좋네
