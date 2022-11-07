function solution(emergency) {
  let newEmerArr = [];
  let cnt = 0;

  while (cnt < emergency.length) {
    newEmerArr.push({ value: emergency[cnt], idx: cnt });
    cnt = cnt + 1;
  }

  newEmerArr.sort((a, b) => b.value - a.value);
  let answer = [];

  cnt = 0;
  while (cnt < newEmerArr.length) {
    let item = newEmerArr[cnt];
    answer[item.idx] = cnt + 1;
    cnt++;
  }

  return newEmerArr[1].idx;
}

// 배열의 원래 위치를 저장.
// 1. 반복문 내에서 객체상태로 저장한다.
// 1-1. 객체 상태로 저장하는 이유는 값을 2개 이상 저장해야되기 때문이다.
// 2. key(값)을 저장하고, 원래 위치 값 index를 저장한다.
// 2-2. key를 내림차순으로 정렬, 배열 생성
// 2-3. emerArr[0]를 사용 할 수 없기때문에 변수값을 item[cnt]로 만들어서
// answer[item.idx] 이런식으로 사용해야된다.
// 2-4. answer[item.idx] = cnt + 1
