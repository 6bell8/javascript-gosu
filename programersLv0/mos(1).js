function solution(letter) {
  const morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };
  return letter
    .split(" ")
    .map((x) => morse[x])
    .join("");
}

// 1. letter를 split으로 '' 해제,
// 2. 이후 map(x => mores[x]) 과 동일한 프로퍼티가 있는지 찾기
// 3. join문으로 문장을 합쳐준다.
