function solution(keyinput, board) {
  let answer = [0, 0];

  let range = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];

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
