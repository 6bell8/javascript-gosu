function solution(numbers) {
  // numbers.replace('zero',0 || 'one',1)

  return Number(
    numbers.replace(
      /(zero|one|two|three|four|five|six|seven|eight|nine)/g,
      (vl) => {
        switch (vl) {
          case "zero":
            return 0;
          case "one":
            return 1;
          case "two":
            return 2;
          case "three":
            return 3;
          case "four":
            return 4;
          case "five":
            return 5;
          case "six":
            return 6;
          case "seven":
            return 7;
          case "eight":
            return 8;
          case "nine":
            return 9;
        }
      }
    )
  );
}

// replace 정규 표현식을 통해서 /(숫자|숫자|숫자)/g (파타미터)생성=> {
// switch (파라미터) {
// case: 숫자 return : num
// case: 숫자 return : num
// case: 숫자 return : num
//}
//}

// Number 숫자변환 후 진짜 return
