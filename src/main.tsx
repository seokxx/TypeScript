//기본타입
let 이름: string = "Hong"; //string
let 나이: number = 24; //number
let 결혼했니: boolean = true; //boolean
let 회원들: (string | number)[] = ["kim", 123]; //list
let 회원들2: { member1: string; member2: string } = {
  member1: "kim",
  member2: "park",
}; //object
let 회원들3: "park"; //타입 생략가능

//Q1.
let myName: string = "Hong";
let myAge: number = 24;
let myCountry: string = "Chungju";

//Q2.
let album: { song: string; singer: string } = {
  song: "L’amour, les baquettes",
  singer: "Stella Jang",
};

//Q3.
let project: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

//union타입
let 이름2: string | number = "hong";
let 나이2: string | number = 20;

let 회원들4: (number | string)[] = [1, "2", 3];
let 오브젝트: { a: string | number } = { a: "123" };

var 배열: (number | string)[] = [1, "2", 3];

//any타입
let 이름3: any = "hong";
이름3 = 123;
이름3 = false;
이름3 = [];

//unknown타입
let 이름4: unknown = "hong";
이름4 = 123;
이름4 = false;
이름4 = {};
//이름4 -1;

//let 변수1 : string = 이름4;

//Q1
let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | undefined | boolean)[] = [user, age, married];

//Q2
let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

function 함수(x: number): number {
  return x * 2;
}

함수(3);

// function 함수2(x: number): void {
//   1 + 1;
// }

함수(2);

// function 함수3(x?: number) {
//   1 + 1;
// }

// 함수3();

function 함수4(x: number | undefined) {
  return console.log(x);
}

//Q1
function hello(name?: string): void {
  if (name) {
    console.log("안녕하세요" + name);
  } else {
    console.log("이름이 없습니다");
  }
}

//Q2
function num(x: number | string): number {
  return x.toString().length;
}

//Q3
function merryAble(
  salary: number,
  house: boolean,
  charm: string
): string | void {
  let score: number = 0;
  score += salary;
  if (house == true) {
    score += 500;
  }
  if (charm == "상") {
    score += 100;
  }
  if (score >= 600) {
    return "결혼가능";
  }
}
//console.log(merryAble(100, true, "상"));

function 함수5(x: number | string) {
  if (typeof x === "string") {
    return x + 1;
  } else {
    return x + 1;
  }
}

함수5(123);

function 함수6(x: number | string) {
  let array: number[] = [];
  if (typeof x === "number") {
    array[0] = x;
  } else {
  }
}

함수6(123);

function 함수7(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
}

함수7(123);

//let 이름 : string = 'kim';
//이름 as number;

//Q1
function 클리닝함수(a :(number|string)[]){

  let 클리닝완료된거 :number[] = [];

  a.forEach((b)=>{
    if (typeof b === 'string') {
      클리닝완료된거.push(parseFloat(b))
    } else {
      클리닝완료된거.push(b)
    }
  })

  return 클리닝완료된거
}

// console.log( 클리닝함수([123,'3']) )

//Q2
function 만들함수(x : {subject :(string|string[])}){
  if(typeof x.subject ==='string'){
    return x.subject
  } else if(Array.isArray(x.subject)){
    return x.subject[x.subject.length-1]
  } else{
    return 'error'
  }
}

console.log(만들함수( { subject : 'math' } ))  //이 경우 'math'를 return
console.log(만들함수( { subject : ['science', 'art', 'korean'] } )) //이 경우 'korean'을 return



