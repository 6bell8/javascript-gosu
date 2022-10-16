// Array 1+ 씩 배열 추가하는법
const arr = Array.from(Array(6), function (v, i) {
  return i + 1;
});

// const arr = [1, 2, 3, 4, 5, 6];

// 배열에서 빠져 나올 때 join 함수 활용
console.log(arr.join(","));

// reverse 함수를 사용하면 원래있던 배열에도 영향이 감

console.log(arr.reverse());
console.log(arr);

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [7, 8, 9, 10];

// concat 배열을 합칠 때 사용하는 함수

console.log(arr1.concat(arr2));

// push  배열을 추가하는 방법
// pop 배열 끝에 있는 요소만 제거하는 방법

// const arr = [1, 2, 3, 4, 5, 6];
arr.push(7);
arr.pop();
arr.push(7, 8, 9);

console.log(arr.pop());

// shift 맨앞에 있는 요소를 삭제하는 기능
arr.shift();
console.log(arr);

// unshift 맨앞에 요소를 추가하는 기능
arr.unshift(10);
console.log(arr);

// slice 중간 값을 잘라와서 사용,(1번째 파라미터 인덱스 제외 2번째 파라미터는 어디까지 자를 것인지) (원본 배열이 변화되지않음)

console.log(arr.slice(2, 5));

// const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.slice(2, 4));

// splice  중간 값을 잘라버리는 용도 (1, 3) 파라미터 1은 인덱스, 3은 몇개까지 잘라낼 것인지

arr.splice(1, 3);
console.log(arr);

// const arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < 6; i += 1) {
  console.log(arr[i]);
}

// const arr = [1, 2, 3, 4, 5, 6];

for (const item of arr) {
  console.log(item);
}

// const arr = [1, 2, 3, 4, 5, 6];

arr["key"] = "value";
console.log(arr);
console.log(arr.length);
