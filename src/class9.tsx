function 함수 (a:string | undefined){
    if( a && typeof a === 'string'){

    } 
}

type Fish = { swim: string };
type Bird = { fly: string };
function 함수2(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim
  }
  return animal.fly
} 

let 날짜 = new Date()
if (날짜 instanceof Date){
    
}

type Car = {
    wheel : '4개',
    color : string
  }
  type Bike = {
    wheel : '2개',
    color : string
  }
  
  function 함수3(x : Car | Bike){
    if (x.wheel === "4개"){
      console.log('이 차는 ' + x.color)
    } else {
      console.log('이 바이크는 ' + x.color)
    }
  }