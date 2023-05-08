//Calculate the sum of digits of a number

const num = 123;
let sum = 0;

const calSum = (no) =>{
    let digits = 0;
    while(no != 0)
    {
        digits = no % 10;
        sum +=  Math.floor (digits);
        no /= 10;
    }
    return  sum;
}

sum = calSum(num);
console.log("The sum of digits of number "+ num + " is "+ sum)  ;