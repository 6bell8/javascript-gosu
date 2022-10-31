function solution(money) {
  let arr = [];
  let changeMoney = money % 5500;
  let amer = Math.floor(money / 5500);

  arr.push(amer);
  arr.push(changeMoney);

  return arr;
}

//아메리카노 잔 수와 남는돈 [, ]
