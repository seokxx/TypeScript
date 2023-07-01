//기본타입
let 이름 : string = "Hong"; //string
let 나이 : number = 24; //number
let 결혼했니 : boolean = true; //boolean
let 회원들 : (string|number)[] = ['kim', 123] //list
let 회원들2 : { member1 :string, member2:string } = { member1 :'kim', member2:'park' } //object
let 회원들3 : 'park' //타입 생략가능

//Q1.
let myName: string = 'Hong';
let myAge: number = 24;
let myCountry: string = "Chungju";

//Q2.
let album : {song: string, singer: string} = {song: 'L’amour, les baquettes', singer: 'Stella Jang'}

//Q3.
let project :{
    member: string[],
    days: number,
    started: boolean
} = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
  }

//union타입
let 이름2: string | number = 'hong';
let 나이2: (string | number) = 20;

let 회원들4 : (number | string )[] = [1,'2',3];
let 오브젝트 : {a : string | number} = {a : '123'}

var 배열: (number | string)[] = [1,'2',3]

//any타입
let 이름3: any = 'hong';
이름3 = 123;
이름3 = false;
이름3 = [];

//unknown타입
let 이름4 : unknown = "hong";
이름4 = 123;
이름4 = false;
이름4 = {};
//이름4 -1;

//let 변수1 : string = 이름4;

//Q1
let user:string = 'kim';
let age:undefined | number = undefined;
let married:boolean = false; 
let 철수:(string | undefined | boolean)[] = [user, age, married];

//Q2
let 학교: {
    score : (number|boolean)[],
    teacher : string,
    friend : string | string[]
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]