let 이름 : string = 'kim'; //string
let 나이 : number = 50; //number
let 결혼했니 : boolean = true; //boolean
let 회원들 : string[] = ['kim', 'park'] //list
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