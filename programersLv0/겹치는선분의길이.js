function solution(l) {
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let newArr1 = [];

  for (let i = l[0][0]; i <= l[0][1]; i++) {
    arr1.push(i);
  }

  for (let i = l[1][0]; i <= l[1][1]; i++) {
    arr2.push(i);
  }

  for (let i = l[2][0]; i <= l[2][1]; i++) {
    arr3.push(i);
  }

  arr1.map((a) => {
    if (arr2.includes(a)) newArr1.push(a);
  });
  if (newArr1.length === 1) newArr1 = [];

  arr1.map((a) => {
    if (arr3.includes(a)) newArr1.push(a);
  });
  if (newArr1.length === 1) newArr1 = [];

  arr2.map((a) => {
    if (arr3.includes(a)) newArr1.push(a);
  });
  if (newArr1.length === 1) newArr1 = [];

  let answer = [...new Set(newArr1)];

  return answer.length == 0 ? 0 : Math.max(...answer) - Math.min(...answer);
}
