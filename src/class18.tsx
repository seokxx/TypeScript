let 멍멍: (string | boolean)[] = ["dog", true];
let 야옹: [string, boolean?, number?] = ["cat", true];

function 함수(...x: [number, string, ...number[]]) {
  console.log(x);
}

함수(1, "2", 3, 4, 5);

let arr = [1, 2, 3];
let arr2: [number, number, ...number[]] = [4, 5, ...arr];
