function solution(quiz) {
  let result = [];

  for (let i = 0; i < quiz.length; i++) {
    let a = eval(quiz[i].split("=")[0]);
    console.log(a);

    let b = quiz[i].split("=")[1] / 1;

    if (a === b) {
      result.push("O");
    } else {
      result.push("X");
    }
  }

  return result;
}

//eval 평가식, split('=')을 사용해서 식을 두개로 쪼개 줌
// 그리고 quiz[i]를 for문 내부에 넣어서 식을 짠다.(keypoint)

function solution(quiz) {
  return quiz
    .map((el) => el.split(" = "))
    .map((el) => {
      return eval(el[0]) == el[1] ? "O" : "X";
    });
}

// map(el) => el.split(' = ') 반복문을 돌리면서 split('=')
// 다시 한번 map 반복문을 돌리면서 [0], [1]평가식 이후 삼항연산자.

function solution(quiz) {
  var answer = [];
  return quiz.map((t) => {
    const [calc, result] = t.split(" = ");
    const sign = calc.includes("+") ? 1 : -1;
    const [a, b] = calc.split(sign === 1 ? " + " : " - ");

    return +a + +b * sign === +result ? "O" : "X";
  });
}

//  +, -인지 모를 때 사용할 수 있는 풀이법
//  [calc, result]로 구조분해 할당하면서 split 제거
//  sign변수를 선언,  +가 있다면 1 or -1로 나눠줌
//  calc 내부에서 sign을 나눠준다
// +a + +b * sign 마지막에 이런 계산식으로 return값을 구함
