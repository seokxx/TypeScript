// let 멍멍: (string | boolean)[] = ["dog", true];
// let 야옹: [string, boolean?, number?] = ["cat", true];

// function 함수(...x: [number, string, ...number[]]) {
//   console.log(x);
// }

// 함수(1, "2", 3, 4, 5);

// let arr = [1, 2, 3];
// let arr2: [number, number, ...number[]] = [4, 5, ...arr];

// //q1
// type Food = [string, number, ...boolean[]];
// //q2
// let food: Food = ["spaghetti", 12000, true, false, true];
// //q3
// function 함수2(...x: [string, boolean, ...(number | string)[]]) {}
// 함수2("a", true, 6, 3, "1", 4);
// //q4
// function 분류기(...x: [...(string | number)[]]) {
//   let result: [string[], number[]] = [[], []];

//   x.forEach((a) => {
//     if (typeof a === "string") {
//       result[0].push(a);
//     } else {
//       result[1].push(a);
//     }
//     return result;
//   });
// }
// console.log(분류기("a", 3, "d", 4, 5));
