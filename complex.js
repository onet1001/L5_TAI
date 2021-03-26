var Complex = /** @class */ (function () {
    function Complex(re, im) {
        this.im = im;
        this.re = re;
    }
    Complex.prototype.sumUp = function (complex) {
        return new Complex(complex.re + this.re, complex.im + this.im);
    };
    Complex.prototype.subtract = function (complex) {
        return new Complex(this.re - complex.re, this.im - complex.im);
    };
    Complex.prototype.module = function () {
        return Math.sqrt(Math.pow(this.re, 2) + Math.pow(this.im, 2));
    };
    Complex.prototype.toString = function () {
        console.log("cześć rzeczywista  " + this.re + "  część urojona   " + this.im);
    };
    return Complex;
}());
var a1 = new Complex(2, 5);
var a2 = new Complex(4, 6);
var a3 = a1.sumUp(a2);
a3.toString();
a3 = a3.subtract(a1);
a3.toString();
console.log(a3.module());
