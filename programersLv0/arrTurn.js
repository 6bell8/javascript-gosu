function solution(numbers, direction) {
  var answer = [];
  let arr = [...numbers];

  if ("right" === direction) {
    let val = arr.pop();
    arr.unshift(val);
    return arr;
  } else {
    let val = arr.shift();
    arr.push(val);
    return arr;
  }
}

//if('right' === direction)이면 오른쪽으로 한칸 밀기
//if('left' === direction)이면 왼쪽으로 한칸 밀기

//배열을 생성해서 오른쪽은 arr.pop & unshift 왼쪽은 shift & push

// 2지선다형이기때문에 if 말고 else를 써주는 것도 괜찮다
