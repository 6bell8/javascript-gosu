function solution(keyinput, board) {
  let answer = [0, 0];

  let range = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];

  // keyinput이 배열이기 때문에 for of문을 써준다. 만약에 객체라면 for in문을 사용하면 된다. for in문은 key(프로퍼티)를 리턴해주고, for of문은 value를 리턴해준다.
  for (let k of keyinput) {
    switch (k) {
      case "left":
        answer[0]--;
        break;
      case "right":
        answer[0]++;
        break;
      case "down":
        answer[1]--;
        break;
      case "up":
        answer[1]++;
        break;
    }

    if (Math.abs(answer[0]) > range[0]) {
      answer[0] = answer[0] > 0 ? range[0] : range[0] * -1;
    }
    if (Math.abs(answer[1]) > range[1]) {
      answer[1] = answer[1] > 0 ? range[1] : range[1] * -1;
    }
  }

  return [answer[0], answer[1]];
}

function solution(keyinput, board) {
  var pos = [0, 0];
  var boardRadius = [parseInt(board[0] / 2), parseInt(board[1] / 2)];

  //for문과 비슷하지만 요소명을 스스로 정할 수 있고 배열이 가지고 있는 요소들을 한번씩 반환하여 반복시켜주는 것,, map함수와 기능적으로 비슷함

  // 대체로 매개변수가 문자 배열로 주어졌을 때 forEach문이나 for of문으로 돌리는 경향이 있음, .length를 안써도 되기때문에 그런 듯
  keyinput.forEach((input) => {
    if (input == "left") {
      pos[0] = pos[0] - 1;
    } else if (input == "right") {
      pos[0] = pos[0] + 1;
    } else if (input == "down") {
      pos[1] = pos[1] - 1;
    } else {
      pos[1] = pos[1] + 1;
    }

    // 내가 생각했던 부분,, 조건을 4가지로 설정해서 타파
    if (pos[0] < -boardRadius[0]) pos[0] = -boardRadius[0];
    if (pos[0] > boardRadius[0]) pos[0] = boardRadius[0];

    if (pos[1] < -boardRadius[1]) pos[1] = -boardRadius[1];
    if (pos[1] > boardRadius[1]) pos[1] = boardRadius[1];
  });

  return pos;
}
