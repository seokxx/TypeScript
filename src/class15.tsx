function 함수<T>(x: T[]):T {
    return x[0]   
}

let a = 함수<number>([4,2])
let b = 함수<string>(['4','2'])

console.log(a)
console.log(b)

function 함수2<T extends number> (x: T){
    return x -1 
}

let c = 함수2<number>(100)
console.log(c)
interface LengthCheck{
    length: number
}

function 함수3<T extends LengthCheck> (x: T){
    return x.length 
}

let d = 함수3<string>('abcde')
console.log(d)