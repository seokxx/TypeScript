class User {
    name:string;
    private familyName:string ='hong'; 
    constructor(name:string){
        this.name = name + this.familyName
    }
    nameChange(){
        this.familyName = 'park';
    }

}

let 유저1 = new User('길동')
유저1.nameChange()
console.log(유저1)

class Person {
    constructor(public name2: string){
        this.name2 = name2
    }
}

new Person('lee')