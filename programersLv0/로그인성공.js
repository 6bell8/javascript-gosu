// 생각없이 푸니까 식이 더럽다,,

function solution(id_pw, db) {
  let i = 0;
  let j = 0;
  let arr = [];
  let arr2 = [];

  while (i < db.length) {
    if (id_pw[0] === db[i][0]) {
      arr.push(db[i]);
      i++;
    } else {
      i++;
    }
  }

  while (j < arr.length) {
    if (id_pw[1] === arr[j][1]) {
      arr2.push(arr[j]);
      j++;
    } else {
      j++;
    }
  }

  if (arr2.length > 0) {
    return "login";
  } else if (arr.length > 0) {
    return "wrong pw";
  } else {
    return "fail";
  }
}

// 다른 사람 풀이
function solution(id_pw, db) {
  let answer = "";
  for (let i = 0; i < db.length; i++) {
    // if 조건을 두개를 걸어서 만족하는 대상에 명령어를 넣음
    if (id_pw[0] === db[i][0]) {
      if (id_pw[1] === db[i][1]) {
        answer = "login";
      } else {
        answer = "wrong pw";
      }
    }
  }
  // 마지막에 없는 구간에 fail까지
  if (answer == "") {
    answer = "fail";
  }
  return answer;
}

//다른 사람 풀이

function solution(id_pw, db) {
  db = db.filter((v) => v[0] === id_pw[0]);
  // db v[0]로 문자열 나눔
  if (!db.length) return "fail";
  // !db.length 길이가 0이라는 뜻
  for (let d of db) if (d[1] === id_pw[1]) return "login";
  //db 배열에서 비교 할 때 of, let d로 패스워드 값이 같으면 로그인 리턴 아님 다른 거 리턴
  return "wrong pw";
  //12.11
}
