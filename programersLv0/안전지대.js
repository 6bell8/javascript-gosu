function solution(board) {
  let answer = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // 폭탄이 1일 때 세부사항 설정
      if (board[i][j] == 1) {
        // 맨 윗줄이 아닌경우 // && 뒤에 있는 마지막 조건값만 2로 변경 된다고 생각하면 된다.
        if (i !== 0 && board[i - 1][j] !== 1) {
          board[i - 1][j] = 2;
        }
        // 맨 아랫줄이 아닌 경우
        if (i !== board.length - 1 && board[i + 1][j] !== 1) {
          board[i + 1][j] = 2;
        }
        // 맨 왼쪽이 아닌 경우
        if (j !== 0 && board[i][j - 1] !== 1) {
          board[i][j - 1] = 2;
        }
        // 맨 오른쪽이 아닌 경우
        if (j !== board[i].length - 1 && board[i][j + 1] !== 1) {
          board[i][j + 1] = 2;
        }
        // 맨 대각선 윗 왼쪽이 아닌 경우
        if (i !== 0 && j !== 0 && board[i - 1][j - 1] !== 1) {
          board[i - 1][j - 1] = 2;
        }
        // 맨 대각선 윗 오른쪽이 아닌 경우
        if (i !== 0 && j !== board[i].length - 1 && board[i - 1][j + 1] !== 1) {
          board[i - 1][j + 1] = 2;
        }
        // 맨 대각선 아랫 왼쪽이 아닌 경우
        if (i !== board.length - 1 && j !== 0 && board[i + 1][j - 1] !== 1) {
          board[i + 1][j - 1] = 2;
        }
        // 맨 대각선 아랫 오른쪽이 아닌 경우
        if (
          i !== board.length - 1 &&
          j !== board[i].length - 1 &&
          board[i + 1][j + 1] !== 1
        ) {
          board[i + 1][j + 1] = 2;
        }
      }
    }
  }
  board.flat().map((a, i) => (a === 0 ? answer++ : null));
  return answer;
}
