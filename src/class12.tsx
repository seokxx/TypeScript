class User{
    protected x=10;
}

class NewUser extends User{
    doThis(){
        this.x = 20;
    }
}

class User2 {
    static x= 10;
    y= 20;
}

let 자식 = new User2();
console.log(User2.x)

class User3 {
    private static language = 'js'
    intro = User3.language + '전문가입니다'

    static changeLang(){
        User3.language = 'ts'
    }
}

let 철수 = new User3();
console.log(철수)


User3.changeLang()
let 철수2 = new User3();
console.log(철수2)

//q2
class User4 {
    private static x = 10;
    public static y = 20;

    static addOne(x:number):number{
        return User4.x+x
    }

    static printX(){
        console.log(User4.x)
    }
}

console.log(User4.addOne(3))
console.log(User4.addOne(4))
User4.printX()

//q3
class Square {
    constructor(public width: number, public height: number, public color:string) {
        
    }
    
    draw(){
        let a = Math.random();
        let square = 
        `<div style="
            position:relative;
            top:${a * 400}px; 
            left:${a * 400}px; 
            width:${this.width}px; 
            height : ${this.height}px; 
            background:${this.color}">
        </div>`;
        document.body.insertAdjacentHTML( 'beforeend', square );
    }
}

let 네모 = new Square(30, 30, 'red');
네모.draw()
네모.draw()
네모.draw()
네모.draw()
네모.draw()