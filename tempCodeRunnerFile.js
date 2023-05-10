// Convert given binary number into decimal 
const binary = 1011;
let decimal = 0;

const convNum =(no) =>{
    let sum = 0,digit = 0, ex = 0,num = 0;
    while(no != 0)
    {
        digit = no % 10;
        num =(digit * (Math.pow(2,ex)));

        sum += num;
        ex++;
     no = Math.floor(no / 10);
    }
    return Math.floor (sum);
}

decimal = convNum(binary);
console.log("The decimal conversion of "+ binary + " is "+ decimal);