function solution(my_string) {
  return [...my_string.toLowerCase()].sort().join("");
}

// toLowerCase() 통해서 문자열을 먼저 소문자로 바꾸고 흩뿌려준다. 이후.sort().join('')
// 대문자는 toUpperCase()
