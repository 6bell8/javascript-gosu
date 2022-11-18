function solution(n) {
  let cnt = 2;
  let arr = [];

  while (n !== 1) {
    if (n % cnt === 0) {
      arr.push(cnt);
      n /= cnt;
    } else if (n % cnt !== 0) {
      cnt++;
    }
  }

  let arr2 = new Set(arr); // 배열 형태로 저장해야 됨
  let uniqueArr = [...arr2];

  return uniqueArr;
}

// cnt 2부터 시작해서 나머지가 남으면 계속해서 반복문을 돌리는 식으로 구성 cnt++
// n/=cnt 를 통해서 계속 줄어드는 식으로 구성해야 n값이 변화함
// while 조건을 n !== 1로 해서 값이 1이 되기 전까지 반복문 활성화
// for문으로 돌렸더니 값을 1로 배치하지않아서 그런지 자잘한 오류가 발생함 (주의)

// cnt가 맞으면 push로 cnt를 배열에 넣어준다.
// 반복문 이후에 new Set() 배열 중복 제거, 스프레드로 배열 잡아주고 리턴
