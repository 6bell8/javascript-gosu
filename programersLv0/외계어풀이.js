function solution(spell, dic) {
  let str = spell.sort().join("");
  for (let i = 0; i < dic.length; i++) {
    if (str == [...dic[i].toString()].sort().join("")) {
      return 1;
    }
  }
  return 2;
}

// ...dic[i], 문자열 변환 후 반복문을 이용한 풀이

function solution(spell, dic) {
  return dic.filter((v) => spell.every((c) => v.includes(c))).length ? 1 : 2;
}

//빌트인 함수가 3개 적용된다. filter안에 spell.every가 들어간 이유는 spell 매개변수를 모두 만족한다고 확인하기 위해서 들어간 것이다.

//dic.filter((v)=> v)는 dic 안에 있는 ([0], [1])같은 문자열이다. 그렇기 때문에 처음에 v로 문자열로 분리를 해놓고 v라는 문자열에서 모두 다 만족시키는 문자열을 리턴한 것이다.

// 반대로 spell에 some이라는 함수를 대입했을 때, spell(c)(spell의 각각의 문자열과 일치)와 하나라도 일치하는 문자열이 리턴된다.

//every 빌트인 함수는 모두 다 포함하면 true를 반환하고, 그게 아닐 경우 false를 반환한다.
//every는 모두 다 만족시키는 함수, some은 하나라도 만족시키면 true를 반환한다.

function solution(spell, dic) {
  return dic
    .map((v) => v.split("").sort().join(""))
    .indexOf(spell.sort().join("")) > -1
    ? 1
    : 2;
}

//map과 indexOf로 맞는 인덱슬 찾아서 -1큰 게 있으면 1리턴 없으면 2리턴
