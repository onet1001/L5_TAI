class Complex{
    private  im: number;
    private  re: number;


    constructor( re:number,im: number) {
        this.im= im;
        this.re=re;
    }

    sumUp(complex: Complex): Complex{
        return new Complex(complex.re+this.re, complex.im+this.im)
    }

    subtract(complex: Complex): Complex{
        return new Complex(this.re-complex.re, this.im-complex.im)
    }

    module(): number{
        return Math.sqrt(Math.pow( this.re,2)+Math.pow(this.im,2))
    }

    toString(){
        console.log("cześć rzeczywista  "+ this.re + "  część urojona   "+ this.im)
    }
}

let a1= new Complex(2,5);
let a2= new Complex(4,6);

let a3=a1.sumUp(a2);
a3.toString();
a3=a3.subtract(a1);
a3.toString();
console.log(a3.module());



















