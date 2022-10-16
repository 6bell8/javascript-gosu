function solution(s) {
  //Stack
  // []

  // )
  // push pop을 활용해서 stack 공란에 남는 값이 없게 해야된다. 따라서 stack에 값이 하나도 안남아 있는 경우 올바른 괄호, 그렇지 않으면 틀린 괄호라고 칭함

  //  for (const c of s ) 문자열 s를 c로 순서대로 뽑아주는 기능을 뜻한다.
  const stack = [];

  for (const c of s) {
    if (c === "(") {
      stack.push(c);
    } else {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
  
}
