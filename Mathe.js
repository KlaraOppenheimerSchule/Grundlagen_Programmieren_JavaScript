class Mathe {

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    addieren(){
        return this.a + this.b;
    }

    quadrat(){
        return this.a * this.a;
    }

    positive(){
        if (this.a >= 0) {
            return true;
        } else {
            return false;
        }
    }

    factorial(){
        let result = 1;
        for (let i = 1; i <= this.a; i++) {
            result = result * i;
        }
        return result;
    }
}
var obj = new Mathe(3, 14);

console.log(obj.addieren());
console.log(obj.quadrat());
console.log(obj.positive());
console.log(obj.factorial());
   


