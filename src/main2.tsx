// // rest 파라미터
// function 함수(...a:number[]){
//     console.log(a)
// }
// 함수(1,5,3,5,6,6)

// // spread 오퍼레이터
// let arr = [1,2,3];
// let arr2 = [4,5];
// let arr3 = [...arr, ...arr2];
// console.log(arr3)

// // destructuring
// let [변수1,변수2] = ['안녕', 100]
// console.log(변수1)
// // destructuring obj
// type Obj ={student:boolean, age:number}

// function 함수2({student,age}:Obj){
//     console.log(student,age)
// }
// 함수2({student : true, age : 20})

// //q1
// function maxF(...max:number[]):number{
//     let result = 0;
//     max.forEach((i)=>{
//         if(result < i){
//             result = i
//         }
//     })
//     return result;
// }

// console.log(maxF(3,5,7,5))

// //q2
// type Info = {user:string, comment:number[], admin:boolean}

// function 회원정보({user,comment,admin}:Info){
//     console.log(user,comment,admin)
// }

// 회원정보( { user : 'kim', comment : [3,5,4], admin : false } )

// //q3
// type 물건타입 = (number | string | boolean)[];
// function 물건([a,b,c]:물건타입){
//     console.log(a,b,c)
// }

// 물건( [40, 'wine', false] )

