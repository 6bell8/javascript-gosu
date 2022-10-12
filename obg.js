const obj1 = new Object();
const obj2 = {};
const obj3 = { name: "박진성", company: "진성 컴퍼니" };

//배열 추가 시 []로 추가하는 방법, .선언문으로 추가하는 방법이 있다.
obj3["email"] = "parkgutime@naver.com";
obj3.phone = "01051986269";

//배열 항목 삭제하는 방법
delete obj3.phone;
// console.log(obj3);

// in) boolean 값으로 확인하는 법
console.log("email" in obj3);
console.log("phone" in obj3);

//배열의 형태로 key 값만 확인하는 용도
console.log(Object.keys(obj3));

// 값들만 추출하는 용도
console.log(Object.values(obj3));

//for in 문법 사용 key와 value 값을 같이 추출하는 기능, 배열 밖에서 값이 떨어짐

for (const key in obj3) {
  console.log(key, obj3[key]);
}
