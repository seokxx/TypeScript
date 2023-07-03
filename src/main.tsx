// //기본타입
// let 이름: string = "Hong"; //string
// let 나이: number = 24; //number
// let 결혼했니: boolean = true; //boolean
// let 회원들: (string | number)[] = ["kim", 123]; //list
// let 회원들2: { member1: string; member2: string } = {
//   member1: "kim",
//   member2: "park",
// }; //object
// let 회원들3: "park"; //타입 생략가능

// //Q1.
// let myName: string = "Hong";
// let myAge: number = 24;
// let myCountry: string = "Chungju";

// //Q2.
// let album: { song: string; singer: string } = {
//   song: "L’amour, les baquettes",
//   singer: "Stella Jang",
// };

// //Q3.
// let project: {
//   member: string[];
//   days: number;
//   started: boolean;
// } = {
//   member: ["kim", "park"],
//   days: 30,
//   started: true,
// };

// //union타입
// let 이름2: string | number = "hong";
// let 나이2: string | number = 20;

// let 회원들4: (number | string)[] = [1, "2", 3];
// let 오브젝트: { a: string | number } = { a: "123" };

// var 배열: (number | string)[] = [1, "2", 3];

// //any타입
// let 이름3: any = "hong";
// 이름3 = 123;
// 이름3 = false;
// 이름3 = [];

// //unknown타입
// let 이름4: unknown = "hong";
// 이름4 = 123;
// 이름4 = false;
// 이름4 = {};
// //이름4 -1;

// //let 변수1 : string = 이름4;

// //Q1
// let user: string = "kim";
// let age: undefined | number = undefined;
// let married: boolean = false;
// let 철수: (string | undefined | boolean)[] = [user, age, married];

// //Q2
// let 학교: {
//   score: (number | boolean)[];
//   teacher: string;
//   friend: string | string[];
// } = {
//   score: [100, 97, 84],
//   teacher: "Phil",
//   friend: "John",
// };
// 학교.score[4] = false;
// 학교.friend = ["Lee", 학교.teacher];

// function 함수(x: number): number {
//   return x * 2;
// }

// 함수(3);

// // function 함수2(x: number): void {
// //   1 + 1;
// // }

// 함수(2);

// // function 함수3(x?: number) {
// //   1 + 1;
// // }

// // 함수3();

// function 함수4(x: number | undefined) {
//   return console.log(x);
// }

// //Q1
// function hello(name?: string): void {
//   if (name) {
//     console.log("안녕하세요" + name);
//   } else {
//     console.log("이름이 없습니다");
//   }
// }

// //Q2
// function num(x: number | string): number {
//   return x.toString().length;
// }

// //Q3
// function merryAble(
//   salary: number,
//   house: boolean,
//   charm: string
// ): string | void {
//   let score: number = 0;
//   score += salary;
//   if (house == true) {
//     score += 500;
//   }
//   if (charm == "상") {
//     score += 100;
//   }
//   if (score >= 600) {
//     return "결혼가능";
//   }
// }
// //console.log(merryAble(100, true, "상"));

// function 함수5(x: number | string) {
//   if (typeof x === "string") {
//     return x + 1;
//   } else {
//     return x + 1;
//   }
// }

// 함수5(123);

// function 함수6(x: number | string) {
//   let array: number[] = [];
//   if (typeof x === "number") {
//     array[0] = x;
//   } else {
//   }
// }

// 함수6(123);

// function 함수7(x: number | string) {
//   let array: number[] = [];
//   array[0] = x as number;
// }

// 함수7(123);

// //let 이름 : string = 'kim';
// //이름 as number;

// //Q1
// function 클리닝함수(a :(number|string)[]){

//   let 클리닝완료된거 :number[] = [];

//   a.forEach((b)=>{
//     if (typeof b === 'string') {
//       클리닝완료된거.push(parseFloat(b))
//     } else {
//       클리닝완료된거.push(b)
//     }
//   })

//   return 클리닝완료된거
// }

// // console.log( 클리닝함수([123,'3']) )

// //Q2
// function 만들함수(x : {subject :(string|string[])}){
//   if(typeof x.subject ==='string'){
//     return x.subject
//   } else if(Array.isArray(x.subject)){
//     return x.subject[x.subject.length-1]
//   } else{
//     return 'error'
//   }
// }

// //console.log(만들함수( { subject : 'math' } ))  //이 경우 'math'를 return
// //console.log(만들함수( { subject : ['science', 'art', 'korean'] } )) //이 경우 'korean'을 return


// type Animal = string | number | undefined;

// let 동물 :Animal = "monkey";

// type 사람={ name: string, age: number}

// let teacher :사람 = {name: 'john', age: 20}

// const 출생지역 = { region: 'seoul'}

// 출생지역.region = 'busan'

// type Lastname = {
//   readonly name : string
// }

// const 성씨 : Lastname = {
//   name : 'hong'
// }

// //성씨.name = 'kim' //읽기전용이므로 에러발생

// type Lastname2 = {
//   name2? : string
// }

// const 성씨2 : Lastname2 = {
//   name2 : 'hong'
// }

// 성씨2.name2 = 'kim'

// type Name = string;
// type Age = number;
// type Person = Name | Age;

// type PositionX = {x: number};
// type PositionY = {y: number};

// type NewType = PositionX & PositionY

// let position: NewType = {x:10, y:20}
// //console.log(position)

// let 리터럴네임 : 'kim';
// 리터럴네임 = 'kim';

// let me : '대머리'|'솔로';
// me = '대머리';

// // function 리터럴함수(a: 'hello'):(1 | 0){
// //   return 1
// // }

// // 리터럴함수('hello')

// // function 가위바위보(x : ('가위' |'바위'|'보')):('가위'|'바위'|'보')[]{
// //   return ['바위']
// // }

// //console.log(가위바위보('가위'))

// var 자료 = {
//   name : 'kim'
// } as const

// //console.log(자료.name)

// // function myF(a:'kim'){

// // }
// // myF('kim')
// // myF(자료.name)

// type 함수타입 = (a :number) => number;

// let 함수예제 : 함수타입  = function (a)  {
//   return a+1
// }


// //q1
// let 회원정보예제 : Member= {
//   name : 'hong',
//   age : 30,
//   plusOne(x){
//     return x+1
//   },

//   changeName : () => {
//     console.log('안녕')
//   }
// }

// type Member = {
//   name : string,
//   age : number,
//   plusOne : (x: number) => number,
//   changeName : () => void
// }

// console.log(회원정보예제.plusOne(10))
// 회원정보예제.changeName()

// //q2
// type CutType = (a: string) => string
// type RemoveType = (a: string) => number

// let cutZero : CutType = (a) => {
//   let result = a.replace(/^0+/,"");
//   return result
// }

// let removeDash : RemoveType = (a) => {
//   let result = a.replace(/-/g,"");
//   return parseFloat(result)
// }

// //q3

// function 콜백함수(a:string,b:CutType,c:RemoveType){
//   let result = b(a);
//   let result2 = c(result);
//   console.log(result2)
// } 

// 콜백함수('010-1111-2222', cutZero, removeDash)

// class Person2{
//   name : string;
//   constructor(a:string){
//     this.name = a;
//   }
//   함수(a:string){
//     console.log('안녕'+a);
//   }
// }

// let 사람1 = new Person2('hong');
// let 사람2 = new Person2('kim');
// 사람1.함수('안녕');
// console.log(사람1.name);
// console.log(사람2.name);

// type Square = {color : string, width: number}
// interface Square2 {color : string, width: number}

// let 네모 : Square2 = {color : 'red', width: 100}

// interface Student {name : string}
// interface Student {name : string}

// interface Teacher extends Student { age: number}

// let 학생 : Student = {name :'kim',}
// let 선생 : Teacher = {name: 'hong', age : 20}

// type Animal2 = {name : string}
// type Cat = {age : number} & Animal2 // &(intersection type) == extends

// //q1
// interface Product { brand: string, serialNumber: number, model:string[]}
// let 상품:Product = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

// //q2
// interface Basket { product: string, price: number}
// let 장바구니:Basket[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ];

// //q3
// interface Basket2 extends Basket{card:boolean};
// let 장바구니2:Basket2[] = [ { product : '청소기', price : 7000, card : false }, { product : '삼다수', price : 800, card : true } ] 

// //q4
// interface MathObj {
//   plus : (x:number, y:number) => number,
//   minus : (x:number, y:number) => number,
// }

// let 오브젝트2: MathObj = {
//   plus(x,y){
//     return x+y
//   },
//   minus(x,y){
//     return x-y
//   },
// }